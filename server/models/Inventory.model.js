const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventorySchema = new Schema(
  {
    itemName: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
      unique: true,
    },

    unit: {
      type: String,
      enum: ['kg', 'litre', 'piece', 'pack', 'box', 'ml', 'gm'],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity cannot be negative'],
    },

    threshold: {
      type: Number,
      default: 5, // low stock alert
    },

    costPerUnit: {
      type: Number,
      required: true,
      min: 0,
    },

    supplier: {
      type: String,
      trim: true,
    },

    lastRestocked: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      maxlength: 300,
    },
  },
  {
    timestamps: true,
  }
)

export const Inventory = mongoose.model('Inventory', inventorySchema);
