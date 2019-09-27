import React, { Component } from "react";
import Debug from "../utils";
let debug = Debug("app");

class Settings extends Component {
  componentDidMount() {
    debug("Settings.mounted");
  }
  render() {
    return (
      <box width="100%-2" height="100%-2">
        <form>
          <box width={20} top={1} left={0} height={2}>
            下载路径：
          </box>
          <textbox
            ref="downloadDir"
            left={22}
            top={0}
            height={3}
            width="100%-24"
            mouse
            keys
            inputOnFocus
            border="line"
            style={{
              border: {
                fg: "gray"
              }
            }}
          />

          <box width={20} top={4} left={0} height={2}>
            断点续传：
          </box>
          <checkbox
            ref="continue"
            left={22}
            top={4}
            height={3}
            mouse
            keys
            inputOnFocus
          />

          <box width={20} top={3 * 2 + 1} left={0} height={2}>
            最大并发数：
          </box>
          <textbox
            ref="max"
            left={22}
            top={3 * 2}
            height={3}
            width="100%-24"
            mouse
            keys
            inputOnFocus
            border="line"
            style={{
              border: {
                fg: "gray"
              }
            }}
          />
        </form>
        <line
          top={3 * 3 + 2}
          orientation="horizontal"
          height={1}
          width="100%"
          style={{ fg: "green" }}
        />
      </box>
    );
  }
}
export default Settings;
