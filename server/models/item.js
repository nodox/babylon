"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use native promises.
mongoose.Promise = global.Promise;

// Define the Item schema.
const ItemSchema = new Schema({
  merchant: { type: Schema.ObjectId, ref: "Merchant", required: true },

  // location where the item is store
  bucket: String,
  title: String,
  description: String,
  thumbnail: String,

  amount: Number,
  currency: { type: String, default: "usd" },
  created: { type: Date, default: Date.now },

});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
