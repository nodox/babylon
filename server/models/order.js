"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Item = require("./item");

// Use native promises.
mongoose.Promise = global.Promise;

// Define the Order schema.
const OrderSchema = new Schema({
  customer: { type: Schema.ObjectId, ref: "Customer", required: true },
  merchant: { type: Schema.ObjectId, ref: "Merchant", required: true },

  amount: Number,
  currency: { type: String, default: "usd" },
  created: { type: Date, default: Date.now },
  item: Item,

  // Stripe charge ID corresponding to this ride.
  stripeChargeId: String,
});


const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
