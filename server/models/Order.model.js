const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false, // allow guest checkout
        },

        items: [
            {
                menuItem: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "MenuItem",
                    required: true,
                },
                name: String, // fallback name if item gets deleted
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                },
                price: {
                    type: Number,
                    required: true,
                },
                total: {
                    type: Number,
                    required: true,
                },
                itemNote: {
                    type: String,
                    maxlength: 250,
                },
                itemStatus: {
                    type: String,
                    enum: ['pending', 'preparing', 'ready', 'served', 'cancelled'],
                    default: 'pending',
                },
                variant: String, // e.g. "Large"
                addons: [
                    {
                        name: String,
                        price: Number,
                    },
                ],
            },
        ],

        subtotal: {
            type: Number,
            required: true,
        },

        discount: {
            type: Number,
            default: 0,
        },

        tax: {
            type: Number,
            default: 0,
        },

        totalAmount: {
            type: Number,
            required: true,
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed", "refunded"],
            default: "pending",
        },

        paymentMethod: {
            type: String,
            enum: ["cash", "card", "upi", "wallet"],
            required: true,
        },

        orderStatus: {
            type: String,
            enum: ["placed", "preparing", "ready", "served", "cancelled"],
            default: "placed",
        },

        orderType: {
            type: String,
            enum: ["dine-in", "takeaway", "zomato", "swiggy"],
            default: "dine-in",
        },

        tableNumber: {
            type: String,
            required: function () {
                return this.orderType === "dine-in";
            },
        },

        notes: {
            type: String,
            maxlength: 250,
        },

        orderedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // cashier or staff or self
            required: true,
        },

        loyaltyPointsEarned: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model("Order", orderSchema);
