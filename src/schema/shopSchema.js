import { Schema , model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
// Create a schema for the shopAccount
const shopAccountSchema = new Schema({
  shopId: {
    type: String,
    default: uuidv4,
    unique: true,
    required: true
  },
  shopName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  shopLogo: String,
  numberOfEmployees: {
    type: Number,
    default: 0,
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ownerNID: {
    type: String,
    required: true,
  },
});

const ShopAccount = model('ShopAccount', shopAccountSchema);

export default ShopAccount;
