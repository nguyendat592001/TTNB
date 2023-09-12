import React from 'react';
import Intro from './introduce';
import AddPost from '@/components/homepage/ContentHome/AddPost/AddPost';
import FillterPosat from './fillter_post';
import Post from '@/components/homepage/ContentHome/Post/Post';


export default function Posts() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Intro />
          <div style={{padding:"25px 0 0 25px" ,width:"703px"}}>
            <AddPost />
            <FillterPosat/>
            <Post/>
          </div>
        </div>
      </>
    );

}