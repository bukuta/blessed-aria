import React, { Component } from "react";
import _ from "lodash";
import history from "./routerHistory";

import aria2 from "../helper";
import Debug from "../utils";
let debug = Debug("app:downloadlist");

class DownloadList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  componentDidMount() {
    debug("didMounted");
    this.fetch();
    this.interval = setInterval(() => {
      this.fetch();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetch() {
    let type = this.props.type || "activate";
    let funName = {
      activate: "tellActive",
      waiting: "tellWaiting",
      stopped: "tellStopped"
    };
    aria2
      .open()
      .then(() => aria2.call(funName[type], 0, 20))
      .then(tasks => {
        debug("stopped", tasks.length);
        this.setState({ files: tasks });
        debug("stopped", JSON.stringify(tasks[0]));
      })
      .catch(err => {
        debug("errr", err);
      });
  }

  render() {
    const files = this.state.files;
    let data = [
      ["gid", "文件名", "uri", "已经下载", "状态", "下载速度"]
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"],
      // ["仓老师.avi", "13.2G", "20%", "400Kb/s", "00:02:00", "02:11:12"]
    ];
    let keys = [
      "gid",
      "files.0.path",
      "files.0.uris.0.uri",
      "completedLength",
      "status",
      "downloadSpeed"
    ];
    debug("files", files.length);
    data = [
      ...data,
      ...files.map(file => {
        return keys.map(key => _.get(file, key, "-"));
      })
    ];
    debug("data", data);

    return (
      <table
        left="0"
        right="0"
        top="0"
        width="100%-2"
        border="line"
        style={{
          border: { fg: "green" },
          header: { fg: "black", bold: true },
          cell: { fg: "black" }
        }}
        data={data}
      />
    );
  }
}

export default DownloadList;
