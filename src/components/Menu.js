import React, { Component } from "react";
import history from "./routerHistory";

import Debug from "../utils";
let debug = Debug("app");

class MenuBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          icon: "+",
          name: "create",
          title: "新建下载",
          action: "/create",
          children: []
        },
        {
          icon: " ",
          name: "name1",
          title: "正在下载",
          action: "/downloads/activate",
          children: []
        },
        {
          icon: "▸",
          name: "name2",
          title: "正在等待",
          action: "/downloads/waiting",
          children: []
        },
        {
          icon: "",
          name: "name3",
          title: "已完成",
          action: "/downloads/stopped",
          children: []
        },
        {
          icon: "",
          name: "name3",
          title: "配置",
          action: "/settings",
          children: [
            {
              icon: " ",
              name: "name1",
              title: "sub1",
              action: "",
              children: []
            },
            {
              icon: "▸",
              name: "name2",
              title: "sub2",
              action: "",
              children: []
            }
          ]
        }
      ]
    };
  }

  render() {
    // debug(this.state.menus);
    let menuItems = this.state.menus.map((item, index) => {
      return (
        <MenuItem
          title={item.title}
          name={item.name}
          action={item.action}
          children={item.children}
          key={item.name}
          icon={item.icon}
          index={index}
        />
      );
    });

    return (
      <box
        keys
        vi
        label="菜单"
        left="0"
        width="20%"
        height="100%"
        top="0%"
        border={{ type: "line" }}
        style={{ border: { fg: "green" } }}
      >
        {menuItems}
      </box>
    );
  }
}

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    debug("menuItem.onClick", this.props.action);
    history.push(this.props.action);
  }
  render() {
    let { title, icon, name, action, index, children } = this.props;
    if (children && children.length > 0) {
      let subMenus = null;
      let subMenuHeight = 0;
      subMenuHeight = 2 + children.length * 4;
      subMenus = (
        <box
          width="100%-2"
          top="0%+1"
          left="0"
          right="0"
          height={children.length * 4}
          // border="line"
          style={{
            border: { fg: "red" }
          }}
        >
          {children.map((item, index) => {
            return (
              <MenuItem
                title={item.title}
                name={item.name}
                action={item.action}
                children={item.children}
                key={item.name}
                icon={item.icon}
                index={index}
              />
            );
          })}
        </box>
      );
      // debug("subMehu", subMenuHeight);
      return (
        <box
          left={0}
          right={0}
          top={index * 2}
          height={2 + subMenuHeight}
          border={
            {
              // type: "line"
              // bottom: false,
              // top: false,
              // left: false,
              // right: false
            }
          }
          style={{ border: { fg: "green" } }}
        >
          {subMenus}
          {title + icon}
        </box>
      );
    } else {
      return (
        <button
          keys
          vi
          mouse
          left={0}
          right={0}
          top={index * 2}
          onClick={this.onClick}
          height={2}
          border={
            {
              // type: "line"
              // bottom: false,
              // top: false,
              // left: false,
              // right: false
            }
          }
          style={{ fg: "white", border: { fg: "green" } }}
        >
          {title}
        </button>
      );
    }
  }
}

export default MenuBox;
