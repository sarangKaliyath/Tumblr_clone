import React, { useContext, useState } from 'react';
import styles from './TextPost.module.css';
import { IoIosSettings } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import TextField from '@mui/material/TextField';
import axios from "axios";



const TextPost = ({ handleClose }) => {


    let [createPost, setCreatePost] = useState({
        title: '',
        content: '',
    });

    const handleCreatePostApi = () => {
        console.log("create post using api call");
    }
  
    const [tags, setTags] = useState('');
    const handleCreatePost = (e) => {
        let { name, value } = e.target;
        setCreatePost({ ...createPost, [name]: value });
    };

     const [currUser, setCurrUser] = useState(false);
    if (!currUser) {
        axios.get("http://localhost:2345/user/currUser", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
            }
        }).then((res) => {
            console.log(res.data);
            setCurrUser(res.data.user);
        }).catch((err) => {
            console.log(err);
        });
    }
    const handleSetTags = (e) => {
    //     let { name, value } = e.target;
    //     setTags(value);
     };
    const handleSubmitPost = () => {
        if (
            createPost.title.length === 0 ||
            createPost.content.length === 0
        )
            return;
        // let newTags = tags
        //     .trim()
        //     .split('#')
        //     .map((el) => el.trim());
        // newTags = newTags.filter((tag) => tag !== '');
        setCreatePost({
            title: "",
            content: ""
        });
        console.log(JSON.parse(localStorage.getItem("tumblrUser")).token);
        console.log(createPost);

        axios.post("http://localhost:2345/post/create",{title:createPost.title, content:createPost.content}, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
            }
        }).then((res) => {
            console.log("hello",res.data);
            
        }).catch((err) => {
            console.log(err);
        });

        

       // handleCreatePostApi(payload, handleClose);
    };

    return (
        <div className={styles.main}>
            <div className={styles.textDiv}>
                <div className={styles.diff}>
                    <img
                        src={
                            currUser?.avatar?.length > 0
                                ? currUser.avatar
                                : 'download.png'
                        }
                        alt=""
                    />
                </div>
                <div className={styles.top}>
                    <div className={styles.left}>{currUser?.blogName}</div>
                    <div className={styles.right}>
                        <IoIosSettings
                            style={{
                                color: 'rgb(116, 114, 114)',
                                fontSize: 22,
                            }}
                        />
                    </div>
                </div>
                <div className={styles.inputFields}>
                    <TextField
                        name="title"
                        value={createPost.title}
                        id="filled-textarea"
                        placeholder="Title"
                        multiline
                        variant="standard"
                        onChange={handleCreatePost}
                        InputProps={{
                            style: { fontSize: '40px', color: 'black' },
                            disableUnderline: true,
                        }}
                    />
                    <TextField
                        name="content"
                         value={createPost.content}
                        id="filled-textarea"
                        placeholder="Your text here"
                        minRows={4}
                        onChange={handleCreatePost}
                        multiline
                        variant="standard"
                        InputProps={{
                            style: { fontSize: '14px', color: 'black' },
                            disableUnderline: true, // <== added this
                        }}
                    />
                    <TextField
                        name="tags"
                        id="filled-textarea"
                        placeholder="#tags"
                        minRows={2}
                        multiline
                        onChange={handleSetTags}
                        variant="standard"
                        InputProps={{
                            style: { fontSize: '12px', color: 'black' },
                            disableUnderline: true, // <== added this
                        }}
                    />
                </div>
             
                <div className={styles.top1}>
                    <div className={styles.left1}>
                        <button
                            onClick={handleClose}
                            style={{
                                width: '60px',
                                height: '30px',
                                backgroundColor: 'rgb(116, 114, 114)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2px',
                            }}
                        >
                            Close
                        </button>
                    </div>
                    <div className={styles.right1}>
                        <button
                            onClick={handleSubmitPost}
                            style={{
                                width: '70px',
                                height: '30px',
                                backgroundColor: 'rgb(0, 184, 255)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2px',
                            }}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextPost;