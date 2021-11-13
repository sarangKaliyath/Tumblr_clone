const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
    return mongoose.connect(`mongodb+srv://tumblrProject:${process.env.DB_PASS}@cluster0.blvra.mongodb.net/tumblrProject?retryWrites=true&w=majority`);
};

module.exports = connect;