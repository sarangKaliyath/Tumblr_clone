import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';


export default function DataImageList() {


  const [posts, setPosts] = React.useState(false);
  const [postUser, SetPostUser] = React.useState(false);

  if (!posts) {

      axios.get("http://localhost:2345/post", {
          headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem("tumblrUser")).token,
          }
      }).then((res) => {
          console.log("Data",res.data);
          setPosts( res.data.post);
          SetPostUser(res.data.user);
          console.log("postsfdsafdsf", posts);
      }).catch((err) => {
          console.log(err);
      });
  }


  return (
    <Box sx={{ width: 800 }}>
      <ImageList variant="masonry" cols={3} gap={12} sx={{ width: 800}}>
        {!posts && (
          <div style={{ 
            color: 'white', 
            width: "100%",
            margin: "auto",
            fontSize: "20px",
            fontWeight: "600"
            }}>
              Preparing Your Feed ...
          </div>
        )}
        { posts && posts.map((item) => (
          <ImageListItem key={item.title} style={{
            backgroundColor: "white",
            borderRadius: "3px"
          }}>
            <ImageListItemBar position="below" title={item.title} />
       
            {item.image_urls?.map((i) => (
              <img
              src={`${i}?w=248&fit=crop&auto=format`}
              srcSet={`${i}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomRightRadius: "3px",
                borderBottomLeftRadius: "3px"
              }}
            />
            ))}
            
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

