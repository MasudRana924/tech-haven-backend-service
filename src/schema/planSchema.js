import { Schema ,  model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
// Create a schema for the pricingPlan
const pricingPlanSchema = new Schema({
  planId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  planName: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
    max: 5,
  },
  duration: {
    type: String,
    enum: ['monthly', 'annual'],
    required: true,
  },
  description: String,
});

const PricingPlan = model('PricingPlan', pricingPlanSchema);

export default PricingPlan;
