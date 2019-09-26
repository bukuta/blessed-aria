import React, { Component } from "react";
import history from "./routerHistory";
import aria2 from "../helper";
import Debug from "../utils";
let debug = Debug("app:form");

class CreateDownload extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
    this.submit = data => {
      let url = this.refs.input.value.trim();
      debug("value", url);
      debug("submit", data);
      if (url) {
        aria2
          .open()
          .then(() => aria2.call("addUri", [url], { dir: "~/Downloads" }))
          .then(guids => {
            debug("guids:", guids);
            history.push("/");
          });
      } else {
        history.push("/");
      }
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
          style={{
            border: { fg: "green", bg: "white" }
          }}
        >
          <box width="100%-2" top={1} left={1} height={2}>
            下载链接：
          </box>
          <textbox
            ref="input"
            left={1}
            top={3}
            height={3}
            width="100%-4"
            mouse
            keys
            inputOnFocus
            border="line"
            style={{
              border: {
                fg: "green"
              }
            }}
          />
          <line />
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
