'use strict';

const config = require('../config');
const stripe = require('stripe')(config.stripe.secretKey);
const mongoose = require('mongoose');
const Order = require('./order');
const Schema = mongoose.Schema;

// Use native promises.
mongoose.Promise = global.Promise;

// Define the Customer schema.
const CustomerSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  created: { type: Date, default: Date.now },

  // Stripe customer ID storing the payment sources.
  stripeCustomerId: String
});

// Return a passenger name for display.
CustomerSchema.methods.displayName = function() {
  return `${this.firstName} ${this.lastName.charAt(0)}.`;
};

// List orders
CustomerSchema.methods.getOrders = function() {
  return Order.find({ merchant: this })
    .populate('orders')
    .exec();
};

// Return a passenger name for display.
CustomerSchema.methods.createStripeCustomerAccount = function() {
  try {
    const customer = await stripe.customers.create({
      email: this.email,
      description: this.displayName()
    });

    this.stripeCustomerId = customer.id;
    await this.save();

  } catch (err) {
    console.log(err);
  }
};


const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
