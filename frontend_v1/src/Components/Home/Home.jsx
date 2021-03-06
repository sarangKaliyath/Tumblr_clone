import React, { useContext, useEffect, useState } from "react";
import styles from "./Feed.module.css";
import { IoText } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { ImVideoCamera } from "react-icons/im";
import { HiLink } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import TextPost from "./TextPost";
import axios from "axios";
import { BottomSideBar } from "../Explore_Components/BottomSideBar";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

function ChildModal({ Prop, Prop1 }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<div>
				<IoText onClick={handleOpen} />
			</div>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box
					sx={{
						...style,
						width: "100%",
						height: "100vh",
						backgroundColor: "transparent",
						overflow: "scroll",
					}}
				>
					<Prop1 handleClose={handleClose} />
				</Box>
			</Modal>
		</React.Fragment>
	);
}

const Feed = () => {
	const [blogs, setBlogs] = useState(false);

	// Adjustment temperory
	if (!blogs) {
		const handleGetBlogs = () => {
			console.log("call api for blogs");
		};
	}

	const handleFollowUser = () => {
		console.log("call api gor follow");
	};
	const handleUnfollowUser = () => {
		console.log("call api for unfollow");
	};

	const handleLikePost = () => {
		console.log("call api for like post");
	};
	const handleUnlikePost = () => {
		console.log("call api for like post");
	};

	const [currUser, setCurrUser] = useState(false);
	if (!currUser) {
		axios
			.get("https://blooming-woodland-68246.herokuapp.com/user/currUser", {
				headers: {
					Authorization:
						"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
				},
			})
			.then((res) => {
				console.log(res.data);
				setCurrUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	const auth = "dfasfdsafsafasfdsf243434324";
	const token = "dfdsfhsdifhj343fdfasfdaf";

	const [posts, setPosts] = useState(false);
	const [postUser, SetPostUser] = useState(false);

	if (!posts) {
		axios
			.get("https://blooming-woodland-68246.herokuapp.com/post", {
				headers: {
					Authorization:
						"Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
				},
			})
			.then((res) => {
				console.log("Data", res.data);
				setPosts(res.data.post);
				SetPostUser(res.data.user);
				console.log("postsfdsafdsf", posts);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const [love, setLove] = useState("");
	const [counter, setCounter] = useState(0);
	const updateUser = (user) => {
		setCurrUser(user);
	};

	const handleLike = () => {
		if (love === "") {
			setLove("red");
			setCounter(counter + 1);
		} else {
			setLove("");
			setCounter(counter - 1);
		}
	};
	const [userFollow, setUserFollow] = useState(false);
	console.log(posts, "feed");

	return (
		<div className={styles.main1}>
			<div className={styles.main}>
				<div className={styles.left}>
					<div className={styles.diff}>
						<img src="download.png" alt="" />
					</div>
					<div className={styles.icons}>
						<div>
							<ChildModal Prop={IoText} Prop1={TextPost} />
							<p>Text</p>
						</div>
						<div>
							<FaCameraRetro className={styles.hover1} color="#f73c1b" />
							<p>Photo</p>
						</div>
						<div>
							<ImQuotesLeft className={styles.hover1} color="#ff8800" />
							<p>Quote</p>
						</div>
						<div>
							<HiLink className={styles.hover1} color="#51cc18" />
							<p>Link</p>
						</div>
						<div>
							<IoChatboxEllipsesSharp
								className={styles.hover1}
								color="#29b9f2"
							/>
							<p>Chat</p>
						</div>
						<div>
							<FaHeadphonesAlt className={styles.hover1} color="#2152d9" />
							<p>Audio</p>
						</div>
						<div>
							<ImVideoCamera className={styles.hover1} color="#f558c1" />
							<p>Video</p>
						</div>
					</div>
					{!posts && (
						<h1 style={{ color: "white" }}>Preparing Your Feed ...</h1>
					)}
					{posts &&
						posts.map((el, i) => (
							<div className={styles.blog}>
								<div className={styles.diff1}>
									<img
										src={
											"https://64.media.tumblr.com/73a4d5ba6d48ef08740cea4e68c4fe9e/d5a7c6e5df114f61-69/s64x64u_c1/e9ea638d641ed8d26462f3f904b00669a9536d61.jpg"
										}
									/>
								</div>

								<p className={styles.postHead}>
									{postUser?.blogName === "adminBlog" ? (
										<>Tumblr Staff</>
									) : (
										<>{postUser.blogName}</>
									)}
									{currUser?._id && (
										<>
											<span
												className={styles.cont2_infoF1}
												onClick={() => setUserFollow(!userFollow)}
											>
												{userFollow === false ? <>follow</> : <>unfollow</>}
											</span>
										</>
									)}
								</p>
								<hr
									style={{
										borderBottom: "none",
										boxShadow: "1px 0px 5px grey",
									}}
								/>
								{el.image_urls?.map((i) => (
									<img src={i} alt="" width="100%" />
								))}
								<div className={styles.description}>
									<p
										style={{
											fontWeight: "bold",
											textAlign: "left",
										}}
									>
										{el.title}
									</p>
									<p style={{ textAlign: "left" }}>{el.content}</p>
								</div>
								{el.tags?.length > 0 && (
									<div className={styles.tags}>
										<p>
											<span
												style={{
													color: "rgb(0, 207, 53)",
													fontSize: "medium",
												}}
											>
												Recommended
											</span>
											{el.tags.map((item) => (
												<a> #{item.tag}</a>
											))}
										</p>
									</div>
								)}

								<div className={styles.iconsBottom}>
									<span className={styles.cont2_infoFlast}>
										{/* {el.likedby ? el.likedby.length : 0}{' '} */}
										{counter} Notes
									</span>
									<div>
										<RiShareForwardLine className={styles.icon} />
										<FaRegComments className={styles.icon} />
										<BiRepost className={styles.icon} />

										<FavoriteIcon
											className={styles.icon}
											style={{ color: love }}
											onClick={() => handleLike()}
										/>

										{/* <FavoriteBorderOutlinedIcon
                                            className={styles.icon}
                                            style={{ backgroundColor: love }}
                                                onClick={() =>
                                                    handleLikePost(
                                                        el._id,
                                                        updateUser
                                                    )
                                                }
                                            /> */}
									</div>
								</div>
							</div>
						))}
				</div>

				<div className={styles.rt_cont2}>
					<div className={styles.rt_cont2H}>
						<BottomSideBar />
					</div>
					<ul>
						{blogs &&
							blogs.map((user, i) => (
								<li>
									<div className={styles.cont2_info}>
										<div className={styles.cont2_infoIm}>
											<img
												src={
													!user.avatar || !user.avatar.length
														? `https://picsum.photos/50?random=${i}`
														: user.avatar
												}
												alt="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_small.gif"
											/>
										</div>
										<div className={styles.cont2_infoT}>
											<span>{user.blog_name}</span>
											<div>{user.bio?.length > 0 ? user.bio : "Untitled"}</div>
										</div>
									</div>
									{user._id !== currUser?._id && (
										<>
											{!currUser.following?.includes(user._id) ? (
												<span
													className={styles.cont2_infoF1}
													onClick={() => handleFollowUser(user._id, updateUser)}
												>
													Follow
												</span>
											) : (
												<span
													className={styles.cont2_infoF1}
													onClick={() =>
														handleUnfollowUser(user._id, updateUser)
													}
												>
													Unfollow
												</span>
											)}
										</>
									)}
								</li>
							))}
						<a
							href="/"
							style={{
								color: "rgb(0, 184, 255)",
								fontSize: 17,
								marginTop: 80,
								textDecoration: "none",
							}}
						>
							Explore all of Tumblr
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Feed;
