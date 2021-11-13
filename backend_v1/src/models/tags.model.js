const mongoose = require("mongoose");


const tagSchema = new mongoose.Schema({
    img: { type: String, required: true },
    tagName: {type: String, required:true}
},
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("tag", tagSchema);