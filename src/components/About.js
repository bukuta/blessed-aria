import React, { Component } from "react";
import Debug from "../utils";
let debug = Debug("app");

class About extends Component {
  componentDidMount() {
    debug("about.mounted");
  }
  render() {
    return (
      <box width="100%-2" height="100%-2">
        About
      </box>
    );
  }
}
export default About;
