import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1596602316433784833" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="nikhil_vijayan4"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/nikhil_vijayan4"}
          options={{ text: "#reactjs is awesome", via: "nikhil_vijayan4" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
