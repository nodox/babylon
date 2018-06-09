"use strict";

const config = require("../../config");
const stripe = require("stripe")(config.stripe.secretKey);
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Pilot = require("../../models/pilot");
const Ride = require("../../models/ride");
const Passenger = require("../../models/passenger");

/**
 * GET /pilots/dashboard
 *
 * Show the Dashboard for the logged-in pilot with the overview,
 * their ride history, and the ability to simulate a test ride.
 *
 */
router.get("/dashboard", async (req, res) => {
  const pilot = req.user;

  // Retrieve the balance from Stripe.
  const balance = await stripe.balance.retrieve({
    stripe_account: pilot.stripeAccountId,
  });

  // Fetch the pilot's recent rides.
  const rides = await pilot.listRecentRides();
  const ridesTotalAmount = rides.reduce((a, b) => {
    return a + b.amountForPilot();
  }, 0);

  res.render("dashboard", {
    balanceAvailable: 12,
    balancePending: 64,
    ridesTotalAmount: 0,
    rides: 2,
  });
});

/**
 * POST /pilots/rides
 *
 * Generate a test ride with sample data for the logged-in pilot.
 */
router.post("/rides", pilotRequired, async (req, res) => {
  const pilot = req.user;
  // Find a random passenger.
  const passenger = await Passenger.getRandom();
  // Create a new ride for the pilot and this random passenger.
  // Generate a random amount between $10 and $100 for this ride.
  const ride = new Ride({
    pilot: pilot.id,
    passenger: passenger.id,
    amount: getRandomInt(1000, 10000),
  });
  // Save the ride.
  await ride.save();
  try {
    // Get a test source and pass any requested trigger for testing bahaviors.
    const source = getTestSource(req.body.trigger);
    // Create a charge and set its destination to the pilot's account.
    const charge = await stripe.charges.create({
      source: source,
      amount: ride.amount,
      currency: ride.currency,
      description: config.appName,
      statement_descriptor: config.appName,
      // The destination parameter directs the funds.
      destination: {
        // Send the amount for the pilot after collecting a 20% platform fee.
        // Typically, the `amountForPilot` method simply computes `ride.amount * 0.8`.
        amount: ride.amountForPilot(),
        // The destination of this charge is the pilot's Stripe account.
        account: pilot.stripeAccountId,
      },
    });
    // Add the Stripe charge reference to the ride and save it.
    ride.stripeChargeId = charge.id;
    ride.save();
  } catch (err) {
    console.log(err);
    // Return a 402 Payment Required error code.
    res.sendStatus(402);
    next(`Error adding token to customer: ${err.message}`);
  }
  res.redirect("/pilots/dashboard");
});

module.exports = router;
