const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [50, 'Name must be less than 50 characters'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
    },

    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
      match: [/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian phone number'],
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // hides password from queries
    },

    userType: {
      type: String,
      enum: ['admin', 'manager', 'cashier', 'staff', 'customer', 'guest'],
      default: 'guest',
    },
    
    isVerified: {
        type: Boolean,
        default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },

    // Loyalty Program
    loyalty: {
      points: {
        type: Number,
        default: 0,
      },
      tier: {
        type: String,
        enum: ['bronze', 'silver', 'gold', 'platinum'],
        default: 'bronze',
      },
      lastRedeemed: Date,
    },

    // For Password Reset (optional)
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
