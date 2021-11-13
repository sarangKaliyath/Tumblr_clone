import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function DataImageList() {



  return (
    <Box sx={{ width: 800, height: 450 }} style={{
        // border: "2px solid yellow"
    }}>
      <ImageList variant="masonry" cols={3} gap={12} sx={{ width: 800}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{
            backgroundColor: "white",
            borderRadius: "3px"
          }}>
            <ImageListItemBar position="below" title={item.author} />
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomRightRadius: "3px",
                borderBottomLeftRadius: "3px"
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://64.media.tumblr.com/e0bb62ee1216e9a8a456b71758c7f711/86bc7edbfb03da83-fd/s400x600/398d85b06100a460e468459e5688ef2222f6675d.png',
    title: 'ellohcee',
    author: 'Day 21 - underwater',
  },
  {
    img: 'https://64.media.tumblr.com/22495573b7ecad4528d8b17ff8606754/a57db314078030a1-0b/s400x600/2eb7410da7098be96d4876c2263a5393ea69d70b.jpg',
    title: 'noble-moon',
    author: 'a family',
  },
  {
    img: 'https://64.media.tumblr.com/a7ae6133d89b5feade5c3cfe4dfbb9ac/528507a853f4e589-5c/s400x600/4b45ccf369888cc7a55d667114f3d45a9c46e0f2.png',
    title: 'Sink',
    author: 'I miss them so much already',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
