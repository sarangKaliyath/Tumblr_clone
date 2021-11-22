const express = require("express");
const GoogleStrategy = require("passport-google-oauth2");
const passport = require("./confix/passort");
require("dotenv").config();
const connect = require("./confix/db");
const cors = require("cors");

const app = new express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

const { register, login } = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const postController = require("./controllers/post.controller");
const userActivityController = require("./controllers/userActivity.controller");
const tagController = require("./controllers/tag.controller");

passport.serializeUser(function (user, done) {
	done(null, { user });
});

passport.deserializeUser(function (id, done) {
	done(null, user);
});

app.get("/auth/google/failure", function (req, res) {
	return res.send("Something went wrong");
});

app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/auth/google/failure",
	}),
	function (req, res) {
		return res.send(req.user);
	}
);

app.post("/register", register);
app.post("/login", login);

app.use("/product", productController);
app.use("/post", postController);
app.use("/user", userActivityController);
app.use("/tag", tagController);

app.listen(process.env.PORT || 2345, async () => {
	await connect();
	console.log("listening on port 2345");
});
