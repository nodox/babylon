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
 *
 */
      },
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
