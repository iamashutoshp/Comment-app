import React, { Component } from "react";
import Comments from "./Comments";
import ShareThoughts from "./ShareThoughts";
import { AppContext } from "../Context/AppContext";

export default class LandingPage extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <Comments />
        <ShareThoughts />
      </div>
    );
  }
}
