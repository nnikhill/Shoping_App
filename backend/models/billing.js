// models/Billing.js
const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  country: String,
  firstName: String,
  lastName: String,
  companyName: String,
  address: String,
  address2: String,
  stateCountry: String,
  postalZip: String,
  emailAddress: String,
  phone: String,
  createAccount: Boolean,
  accountPassword: String,
  shipDifferentAddress: Boolean,
  diffCountry: String,
  diffFirstName: String,
  diffLastName: String,
  diffCompanyName: String,
  diffAddress: String,
  diffAddress2: String,
  diffStateCountry: String,
  diffPostalZip: String,
  diffEmailAddress: String,
  diffPhone: String,
  orderNotes: String,
});

module.exports = mongoose.model('Billing', BillingSchema);
