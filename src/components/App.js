import React, { Component } from "react";
import Debug from "../utils";
import MenuBox from "./Menu";
import DownloadList from "./DownloadList";

import aria2 from "../helper";

let debug = Debug("app:home");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showFrom: true, url: "" };
  }
  componentWillReceiveProps(newProps, oldProps) {
    debug("willUpdate");
  }
  render() {
    return (
      <box>
        <MenuBox />
        <box
          label="Download list"
          left="20%"
          width="60%"
          height="80%"
          top="0"
          border={{ type: "line" }}
          style={{ border: { fg: "green" } }}
        >
          {this.props.children || "hello"}
        </box>
        <ExtraInformation />
        {/* <ProgressBar /> */}
        <box
          label="Settings"
          left="20%"
          // shrink="grow"
          width="80%"
          height="22%"
          top="80%"
          border={{ type: "line" }}
          style={{ border: { fg: "green" } }}
        >
          <list
            vi
            style={{ item: { fg: "green" }, selected: { fg: "red" } }}
            keys
            invertSelected
            items={["item1", "item2"]}
          />
          {/* <listtable
            left="1"
            right="1"
            height="80%"
            border="line"
            style={{
              border: { fg: "green" },
              header: { fg: "red" },
              cell: { fg: "blue" }
            }}
            rows={[["item1", "item2"]]}
            data={[["item1", "item2"], ["item1.1", "item1.2"]]}
          /> */}
          {/* <table
            left="1"
            right="1"
            height="80%"
            border="line"
            style={{
              border: { fg: "green" },
              header: { fg: "red" },
              cell: { fg: "blue" }
            }}
            rows={[["item1", "item2"]]}
            data={[["item1", "item2"], ["item1.1", "item1.2"]]}
          /> */}
        </box>
      </box>
    );
  }
}

class ExtraInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    setInterval(() => {}, 1000);
  }

  render() {
    return (
      <box
        label="extra-information"
        left="80%"
        right="0%"
        width="20%"
        height="80%"
        top="0%"
        border={{ type: "line" }}
        style={{ border: { fg: "green" } }}
      >
        <list
          vi
          style={{ item: { fg: "green" }, selected: { fg: "red" } }}
          keys
          invertSelected
          items={[
            "文件名  : XX.avi",
            "文件大小: 12.10G",
            "文件格式: AVI",
            "开始时间: 2018/10/01 01:01:01"
          ]}
        />
      </box>
    );
  }
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = { completion: 0 };

    const interval = setInterval(() => {
      if (this.state.completion >= 100) return clearInterval(interval);

      this.setState({ completion: this.state.completion + 10 });
    }, 1000);
  }

  render() {
    return (
      <progressbar
        orientation="horizontal"
        filled={this.state.completion}
        top="80%"
        left="0"
        right="0"
        height="10%"
        width="100%-2"
        label="progress"
        border={{ type: "line" }}
        style={{ border: { fg: "red" }, bar: { bg: "red" } }}
      />
    );
  }
}

export default App;
