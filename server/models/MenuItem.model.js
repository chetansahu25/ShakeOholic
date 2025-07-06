const mongoose = require('mongoose');
const { Schema } = mongoose;

const VariantSchema = new mongoose.Schema({
  size: { type: String, default: 'Full' }, // e.g., 4pcs, 8pcs, Regular
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true } // true = available, false = out of stock
});

const menuItemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Menu item name is required'],
      trim: true,
      maxlength: [100, 'Name must be less than 100 characters'],
    },

    description: {
      type: String,
      maxlength: [500, 'Description must be less than 500 characters'],
    },

    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },

    category: {
      type: String,
      enum: ['appetizer', 'main course', 'dessert', 'beverage', 'snack'],
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    imageUrl: {
      type: String,
      trim: true,
    },

    variants: [
        {
            type: VariantSchema,
            required: true, // variants are required
        },
    ],

    addons: [
      {
        name: String,
        price: Number,
        isRequired: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;