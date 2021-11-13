const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title: { type: String},
    content: { type: String,},
    user_id: { type: String, required: true},
    parrent_post: { type: String, default:null },
    image_urls: [{ type: String}],
    likes:{type:Number, default:0},
},
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("post", postSchema);