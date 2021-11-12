const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Post = require("../models/post.model");
const authanticate = require("../middleware/authanticate");
const  authorize  = require("../middleware/authorize");

router.get("", authanticate, async function (req, res) {

    try {
        const admin = await Post.findOne({ email: "admin@gamil.com"}).exec()
        const post = await Post.findById(admin.id).select().lean().exec();
         res.status(200).json({post: post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
    
   
});

router.get("followPost", authanticate, async function (req, res) {

    try {
        let follow = req.user.following;
        let postArray = [];
        for (let i = 0; i < follow.length; i++){
            let post = await Post.findById(admin.id).select().lean().exec();
            postArray.push(post)
        }
        res.status(200).json({followPosts: postArray});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("create", authanticate, async function (req, res) {

    try {
        let payload = {
           ...req.body, ["user_id"]: req.user.id
        }
        let post = await Post.create(payload);
       
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("comment", authanticate, async function (req, res) {
    try {
        let payload = {
           ...req.body, ["user_id"]: req.user.id
        }
        let post = await Post.create(payload);
       
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("like", authanticate, async function (req, res) {

    try {
        let userforLikes = await Post.findById(req.postid).select().lean().exec();
        let oldLikes = userforLikes.likes;
        let post = await Post.findByIdAndUpdate(post.id, {likes:oldLikes+1}).select().lean().exec();   
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("unlike", authanticate, async function (req, res) {

    try {
        let userforLikes = await Post.findById(req.postid).select().lean().exec();
        let oldLikes = userforLikes.likes;
        if (oldLikes == 0) {
             res.status(200).send("Likes are allready zero");
        }
        let post = await Post.findByIdAndUpdate(post.id, {likes:oldLikes-1}).select().lean().exec();   
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("addFollowing", authanticate, async function (req, res) {

    try {
        let followId = req.followId;
        let user = await User.findByIdAndUpdate(req.user.id, {$push: {
          following: {
          $each: [ followId ],
       }
     }}).lean().exec();   
        res.status(200).json({user:user});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("unFollowing", authanticate, async function (req, res) {
    try {
        let followId = req.followId;
        let followArray = [];
        let user = await User.findById(req.user.id).lean().exec();
        for (let i = 0; i < user.following; i++){
            if (user.following[i] != followId) {
                followArray.push(user.following[i]);
            }
        }
         user = await User.findByIdAndUpdate(user.id, {following: followArray}).lean().exec();  
        res.status(200).json({user:user});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

module.exports = router;