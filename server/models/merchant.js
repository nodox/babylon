'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item');
const Order = require('./order');

// Use native promises.
mongoose.Promise = global.Promise;

// Define the User schema.
const MerchantSchema = new Schema({
  email: { type: String, required: true, unique: true },

  type: { type: String, default: 'individual', enum: ['individual', 'company'] },
  firstName: String,
  lastName: String,
  address: String,
  postalCode: String,
  city: String,
  country: { type: String, default: 'US' },
  created: { type: Date, default: Date.now },

  businessName: String,

  // Stripe account ID to send payments obtained with Stripe Connect.
  stripeAccountId: String,
});


// List items for sale
MerchantSchema.methods.getItems = function() {
  return Item.find({ merchant: this })
    .populate('items')
    .exec();
};

// List orders
MerchantSchema.methods.getOrders = function() {
  return Order.find({ merchant: this })
    .populate('orders')
    .exec();
};

// Return a name for display.
MerchantSchema.methods.displayName = function() {
  if (this.type === 'company') {
    return this.businessName;
  } else {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Make sure the email has not been used.
MerchantSchema.path('email').validate(function(email, callback) {
  const User = mongoose.model('User');

  // Check only when it is a new user or when the email has been modified.
  if (this.isNew || this.isModified('email')) {
    User.find({ email: email }).exec(function(err, users) {
      callback(!err && users.length === 0);
    });
  } else {
    callback(true);
  }

}, 'This email already exists. Please try to login instead.');

// Pre-save hook to ensure consistency.
MerchantSchema.pre('save', function(next) {
  // Make sure certain fields are blank depending on the user type.
  if (this.isModified('type')) {
    if (this.type === 'individual') {
      this.businessName = null;
    } else {
      this.firstName = null;
      this.lastName = null;
    }
  }

  next();
});

const Merchant = mongoose.model('Merchant', MerchantSchema);

module.exports = Merchant;
