import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Tags.module.css";
import axios from "axios";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const color = [
	"#66a8cf",
	"#af8cc6",
	"#f1a24f",
	"#6ac296",
	"#af8cc6",
	"#66a8cf",
	"#af8cc6",
	"#f1a24f",
	"#6ac296",
	"#af8cc6",
	"#66a8cf",
	"#af8cc6",
	"#f1a24f",
	"#6ac296",
	"#af8cc6",
	"#66a8cf",
	"#af8cc6",
	"#f1a24f",
	"#6ac296",
	"#af8cc6",
];
let tag_ids = [];

const Tags = () => {
	const history = useHistory();
	// const { handleGetTags, handleUserInterests } = useContext(ContextApi);
	const [tags, setTags] = useState(false);
	if (!tags) {
		axios
			.get("https://blooming-woodland-68246.herokuapp.com/tag", {
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGUwNWY2NmRiYzYzOGY0YjQzNWRhNiIsImlhdCI6MTYzNjY5NzYwNn0.4i-gHy7eeoGh4vRVTEfOWWP-OuBqF30ev17zylnFr_o`,
				},
			})
			.then((res) => {
				console.log(res.data);
				setTags(res.data.tag);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// console.log(tags.tags[0].followers,'tags')
	const [selectedTag, setSelectedTag] = useState(["", "", "", "", ""]);

	const handleSelect = (e) => {
		if (selectedTag.includes(e)) {
			return;
		}
		if (selectedTag[4] !== "") {
			setSelectedTag([...selectedTag, e]);
			return;
		}
		var arr = [...selectedTag];

		selectedTag.map((el, i) => {
			if (el === "") {
				arr[i] = e;
				setSelectedTag([...arr]);
				e = "";
			}
		});
	};

	return (
		<div className={styles.main}>
			<div className={styles.navbar}>
				<div className={styles.left}>
					{selectedTag.map((el, i) => {
						return (
							<div
								style={{
									backgroundColor: `${el === "" ? "none" : color[i]}`,
									border: `${
										el === "" ? "dashed 0.5px rgb(158, 157, 157)" : "none"
									}`,
								}}
							>
								{el}
							</div>
						);
					})}
				</div>
				<div className={styles.right}>
					<div>Skip</div>
					<div
						onClick={() => {
							history.push("/home");
						}}
					>
						Select
					</div>
				</div>
			</div>
			<hr />
			<div
				className={styles.boxes}
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<div variants={item} className={styles.left1}>
					<div>
						<h1>What're you into?</h1>
						<p>Tell us what you like and we'll get you the good stuff.</p>
					</div>
				</div>

				<div className={styles.right1}>
					{tags &&
						tags.map((el) => {
							return (
								<div
									variants={item}
									className={styles.tagBox}
									onClick={() => {
										tag_ids.push(el._id);
										handleSelect(el.tagName);
									}}
								>
									<img src={el.img} alt="" />
									<p>{el.tagName}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Tags;
