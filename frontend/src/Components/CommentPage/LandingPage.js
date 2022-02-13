import React, { Component } from "react";
import Comments from "./Comments";
import ShareThoughts from "./ShareThoughts";
import Grid from "@mui/material/Grid";
import { AppContext } from "../Context/AppContext";
import Header from "../Header/Header";

export default class LandingPage extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <Grid
          container
          style={{
            padding: "10px",
            marginTop: "5px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid item xs={11} />
          <Grid item xs={1}>
            <Header/>
          </Grid>
        </Grid>
        <Comments />
        <ShareThoughts />
      </div>
    );
  }
}
