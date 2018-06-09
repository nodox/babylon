"use strict";

const config = require("../../config");
const stripe = require("stripe")(config.stripe.secretKey);
const router = require("express").Router();
const request = require("request");
const querystring = require("querystring");
const Merchant = require("../../models/merchant");
const Item = require("../../models/item");
const Order = require("../../models/order");

/**
 * GET /merchants/stripe/authorize
 *
 * Redirect to Stripe to set up payments.
 */
router.get("/stripe/authorize", (req, res) => {
  // Generate a random string as state to protect from CSRF and place it in the session.
  req.session.state = Math.random()
    .toString(36)
    .slice(2);

  // Prepare the mandatory Stripe parameters.
  let parameters = {
    client_id: config.stripe.clientId,
    state: req.session.state,
  };

  // Optionally, Stripe Connect accepts `first_name`, `last_name`, `email`,
  // and `phone` in the query parameters for them to be autofilled.
  parameters = Object.assign(parameters, {
    "stripe_user[business_type]": req.merchant.type || "individual",
    "stripe_user[first_name]": req.merchant.firstName || undefined,
    "stripe_user[last_name]": req.merchant.lastName || undefined,
    "stripe_user[email]": req.merchant.email,
    "stripe_user[business_name]": req.merchant.businessName || undefined,
  });

  // Redirect to Stripe to start the Connect onboarding.
  res.redirect(
    config.stripe.authorizeUri + "?" + querystring.stringify(parameters)
  );
});

/**
 * GET /merchants/stripe/token
 *
 * Redirect here from Stripe Connect to add the new Stripe account to the merchant.
 */
router.get("/stripe/token", async (req, res) => {
  // Check the state we got back equals the one we generated before proceeding.

  // TODO: redirect back to WWW merchant store
  if (req.session.state != req.query.state) {
    res.redirect("/");
  }

  // Post the authorization code to Stripe to complete the authorization flow.
  request.post(
    config.stripe.tokenUri,
    {
      form: {
        grant_type: "authorization_code",
        client_id: config.stripe.clientId,
        client_secret: config.stripe.secretKey,
        code: req.query.code,
      },
      json: true,
    },
    (err, response, body) => {
      if (err || body.error) {
        console.log("The Stripe onboarding process has not succeeded.");
      } else {
        // Update the model and store the Stripe account ID in the datastore.
        // This Stripe account ID will be used to pay out to the merchant.
        req.merchant.stripeAccountId = body.stripe_user_id;
        req.merchant.save();
      }
      // Redirect to the final stage.
      // TODO: Redirect to the merchant store on WWW
      res.redirect("/merchants/signup");
    }
  );
});

/**
 * GET /merchants/stripe/transfers
 *
 * Redirect to Stripe to view transfers and edit payment details.
 */
router.get("/stripe/transfers", async (req, res) => {
  const merchant = req.merchant;
  // Make sure the logged-in merchant had completed the Stripe onboarding.
  if (!merchant.stripeAccountId) {
    return res.redirect("/merchants/signup");
  }
  try {
    // Generate a unique login link for the associated Stripe account.
    const loginLink = await stripe.accounts.createLoginLink(
      merchant.stripeAccountId
    );
    // Retrieve the URL from the response and redirect the user to Stripe.
    return res.redirect(loginLink.url);
  } catch (err) {
    console.log("Failed to create a Stripe login link.");
    return res.redirect("/merchants/signup");
  }
});

/**
 * POST /merchants/stripe/payout
 *
 * Generate an instant payout with Stripe for the available balance.
 */
router.post("/stripe/payout", async (req, res) => {
  const merchant = req.merchant;
  try {
    // Fetch the account balance for find available funds.
    const balance = await stripe.balance.retrieve({
      stripe_account: merchant.stripeAccountId,
    });
    // This demo app only uses USD so we'll just use the first available balance.
    // Note: There are as many balances as currencies used in your application.
    const { amount, currency } = balance.available[0];
    // Create the instant payout.
    const payout = await stripe.payouts.create(
      {
        method: "instant",
        amount: amount,
        currency: currency,
        statement_descriptor: config.appName,
      },
      {
        stripe_account: merchant.stripeAccountId,
      }
    );
  } catch (err) {
    console.log(err);
  }
  // Redirect to the merchant dashboard.
  res.redirect("/merchants/dashboard");
});

/**
 * POST /merchants
 *
 */
router.post("/", async (req, res) => {
  // TODO: need to validate / saniztize fields
  // TODO: need to validate address fields (USPS API ?)
  const body = req.body;
  const isCompany = body.type === "company";
  const businessName = isCompany ? body.businessName : "";

  const merchant = new Merchant({
    email: body.email,

    type: body.type,
    firstName: body.firstName,
    lastName: body.lastName,
    address: body.address,
    postalCode: body.postalCode,
    city: body.city,
    businessName: businessName,
  });

  await merchant.save();
  res.status(201).json(merchant);
});

/**
 * POST /merchants/items
 *
 */
router.post("/items", async (req, res) => {
  // TODO: need to validate / saniztize fields
  const body = req.body;

  // TODO: Figure out a way to package the item for purchase
  // TODO: Store items in a private GitLab? Figure this out.
  const item = new Item({
    merchant: body.merchant.id,

    repository: body.repository,
    title: body.title,
    description: body.description,
    thumbnail: body.thumbnail,
    license: body.license,

    amount: body.price,
  });

  // Save the ride.
  await item.save();

  res.status(201).json(item);
});
});

module.exports = router;
