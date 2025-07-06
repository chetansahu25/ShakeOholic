const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

async function dbConnect() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = dbConnect;
