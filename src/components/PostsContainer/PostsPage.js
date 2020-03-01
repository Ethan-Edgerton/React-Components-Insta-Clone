//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

// import data 
import dummyData from "../../dummy-data";


const PostsPage = () => {
  console.log(dummyData, `sadfasdf`)

  // set up state for your data
const [post, setPost] = useState()
let arr = dummyData.map(item => {
  return item;
})

console.log(arr)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map ( item => {
        return Post(item);
      })}
    </div>
  );
};

export default PostsPage;

