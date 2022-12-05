import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fwiki%2FMangeky%25C5%258D_Sharingan&psig=AOvVaw1m0LlOLWRn4da06bHvfaOv&ust=1670368218537000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiE89TM4_sCFQAAAAAdAAAAABAF" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
