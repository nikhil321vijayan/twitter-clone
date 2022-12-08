import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        displayName="Nikhil Vijayan"
        userName="nikhil_vijayan4"
        verified={true}
        text="Siuuuuu!!!"
        avatar="https://animecorner.me/wp-content/uploads/2022/10/naruto.png"
        image="https://media.giphy.com/media/hryis7A55UXZNCUTNA/giphy.gif"
      />
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
