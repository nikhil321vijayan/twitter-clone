import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar>NV</Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Nikhil Vijayan{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>
                @nikhilvijayan
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I don't know what I'm doing here.</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/hryis7A55UXZNCUTNA/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
