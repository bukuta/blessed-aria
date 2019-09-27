import React, { Component } from "react";
import Debug from "../utils";
let debug = Debug("app");

class About extends Component {
  componentDidMount() {
    debug("about.mounted");
  }
  render() {
    let content = " About Blessed Aria2 \n This is a toy ";
    return (
      <box width="100%-2" height="100%-2" content={content}>
        <line
          top={4}
          orientation="horizontal"
          height={1}
          width="100%"
          style={{ fg: "green" }}
        />
      </box>
    );
  }
}
export default About;
