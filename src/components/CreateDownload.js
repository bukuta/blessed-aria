import React, { Component } from "react";
import history from "./routerHistory";

import Debug from "../utils";
let debug = Debug("app");

class CreateDownload extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
    this.submit = data => {
      debug("value", this.refs.input.value);
      debug("submit", data);
      history.push("/home");
      this.setState({ url: data });
    };
    this.cancel = () => {
      debug("cancel");
      history.push("/about");
      // this.props.onCancel && this.props.onCancel();
    };
  }
  render() {
    return (
      <box
        name="mask"
        top="0%"
        left="0%"
        width="100%"
        height="100%"
        style={{
          bg: "white"
        }}
      >
        <form
          label="新建"
          keys
          vi
          left="20%"
          right="20%"
          width="60%"
          top="20%"
          bottom="30%"
          height="50%"
          focused
          onSubmit={this.submit}
          border="line"
          style={{ border: { fg: "red" } }}
        >
          <box width={30} top="0%" left="0%" height={3} style={{}}>
            下载链接：
          </box>
          <textbox
            ref="input"
            left={20}
            height={3}
            mouse
            keys
            inputOnFocus
            style={{
              bg: "red"
            }}
          />
          <button
            keys
            vi
            mouse
            top={10}
            border="line"
            height={3}
            width={10}
            onPress={this.submit}
            onClick={this.submit}
            align="center"
            style={{
              focus: {
                fg: "white",
                bg: "red",
                bgChar: "red",
                border: {
                  fg: "white",
                  bg: "red"
                }
              }
            }}
          >
            <text
              style={{
                bg: "red",
                fg: "white"
              }}
            >
              确定
            </text>
          </button>
          <button
            keys
            vi
            mouse
            top={10}
            left={30}
            border="line"
            height={3}
            width={10}
            onPress={this.cancel}
            onClick={this.cancel}
            align="center"
            style={{
              focus: {
                fg: "white",
                bg: "red",
                bgChar: "red",
                border: {
                  fg: "white",
                  bg: "red"
                }
              }
            }}
          >
            <text
              style={{
                bg: "red",
                fg: "white"
              }}
            >
              取消
            </text>
          </button>
        </form>
      </box>
    );
  }
}
export default CreateDownload;
