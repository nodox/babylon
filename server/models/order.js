"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use native promises.
mongoose.Promise = global.Promise;

// Define the Order schema.
const OrderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  merchant: { type: Schema.Types.ObjectId, ref: "Merchant", required: true },
  item: { type: Schema.Types.ObjectId, ref: "Item", required: true },

  amount: Number,
  currency: { type: String, default: "usd" },
  created: { type: Date, default: Date.now },

  // Stripe charge ID corresponding to this ride.
  stripeChargeId: String,
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
