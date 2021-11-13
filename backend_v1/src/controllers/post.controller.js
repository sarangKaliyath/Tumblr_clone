const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Post = require("../models/post.model");
const authanticate = require("../middleware/authanticate");
const authorize = require("../middleware/authorize");
const upload = require("../middleware/file-upload");

router.get("", authanticate, async function (req, res) {

    try {
        let postArray = []
        const admin = await User.findById("618df9c343ad8385f6225992").exec()
        //  const userPost = await Post.find({ user_id: req.user.id }).select().lean().exec();
        const post = await Post.find({ user_id: [admin.id, req.user.id] }).sort({"timestamp":1}).select().lean().exec();

         postArray = post
       
       postArray.reverse();
        // console.log(postArray);
         res.status(200).json({post: postArray,user: admin});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
    
   
});

router.get("/ownPost", authanticate, async function (req, res) {

    try {
       
        const post = await Post.find({ user_id: req.user.id }).select().lean().exec();
         res.status(200).json({post: post,user: req.user});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
    
   
});

router.get("/followPost", authanticate, async function (req, res) {

    try {
        let follow = req.user.following;
       
        let postArray = [];
        for (let i = 0; i < follow.length; i++){
            let post = await Post.find({ user_id: follow[i] }).select().lean().exec();
            postArray.push(post)
        }
        postArray.reverse();
        res.status(200).json({followPosts: postArray});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("/create", authanticate, async function (req, res) {

    try {
        console.log(req.body);
        let payload = {
           ...req.body, ["user_id"]: req.user.id
        }
        let post = await Post.create(payload);
       
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("/uploadSingle",authanticate, upload.single("productImages"), async function (req, res) {
    
    try {
        const post = await Post.create({
        user_id: req.user.id,
        image_urls: req.file.path,
        });
        return res.status(201).send(post);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.post("/uploadMany",authanticate, upload.any("productImages"), async function (req, res) {
    const filePaths = req.files.map((file) => file.path);

   try {
        const post = await Post.create({
        user_id: req.user.id,
        image_urls: filePaths,
        });
        return res.status(201).send(post);
    } catch(err) {
        return res.status(500).send(err.message);
    }
});

router.post("/comment", authanticate, async function (req, res) {
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

router.get("/comment", authanticate, async function (req, res) {
    try {
        
        let post = await Post.find({parrent_post : req.body.parrent_post}).select().lean().exec();
       
        res.status(200).json({comment:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});
router.post("/like", async function (req, res) {

    try {
        let userforLikes = await Post.findById(req.body.postid).select().lean().exec();
        let oldLikes = userforLikes.likes;
        let post = await Post.findByIdAndUpdate(req.body.postid, {likes:oldLikes+1}, {new: true}).select().lean().exec();   
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("/unlike", async function (req, res) {

    try {
        let userforLikes = await Post.findById(req.body.postid).select().lean().exec();
        let oldLikes = userforLikes.likes;
        if (oldLikes == 0) {
            return res.status(200).send("Likes are allready zero");
        }
        let post = await Post.findByIdAndUpdate(req.body.postid, {likes:oldLikes-1}, {new : true}).select().lean().exec();   
        res.status(200).json({post:post});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("/addFollowing", authanticate, async function (req, res) {

    try {
        let followId = req.body.followId;
      
        for (let i = 0; i < req.user.following.length; i++){ 
            if (req.user.following[i] == followId) {
               return res.status(400).send("User is already follow this person");
            }
        }
        let user = await User.findByIdAndUpdate(req.user.id, {$push: {
          following: {
          $each: [ followId ],
       }}},{
            new: true
        }).lean().exec();
        res.status(200).json({user:user});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

router.post("/unFollowing", authanticate, async function (req, res) {
    try {
        let followId = req.body.followId;
        let followArray = [];
        
        for (let i = 0; i < req.user.following.length; i++){
            if (req.user.following[i] != followId) {
                followArray.push(req.user.following[i]);
            }
        }
        let user = await User.findByIdAndUpdate(req.user.id, {following: followArray},{new:true}).lean().exec();  
        res.status(200).json({user:user});
    } catch (err) {
         res.status(400).json({error: err.message});
    }
});

module.exports = router;