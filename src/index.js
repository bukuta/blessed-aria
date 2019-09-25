import Debug from "./utils";
let debug = Debug("app");
import React from "react";
import blessed from "blessed";
import { render } from "react-blessed";
import { Router, MemoryRouter, Route, IndexRouter } from "react-router";
import App from "./components/App";
import CreateDownload from "./components/CreateDownload";
import About from "./components/About";

import history from "./components/routerHistory";

const screen = blessed.screen({
  autoPadding: true,
  fullUnicode: true,
  smartCSR: true,
  dockBorders: true,
  title: "blessed aria2"
});

screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Don't overwrite the screen
console.log = function() {};
console.warn = function() {};
console.error = function() {};
console.info = function() {};
console.debug = function() {};
let index = 0;
// setInterval(function() {
//   let paths = ["/", "/about", "/create"];
//   let path = paths[index++ % paths.length];
//   debug("interval", path);
//   history.push(path);
// }, 2000);

const component = render(
  <Router history={history}>
    <Route path="/home" component={App} />
    <Route path="/" component={CreateDownload} />
    <Route path="/create" component={CreateDownload} />
    <Route path="/about" component={About} />
  </Router>,
  screen
);
// import "./signal";

// // This is dumb but I don't understand how else to prevent process from exiting.
// // If it exits, it will get restarted by nodemon, but then hot reloading won't work.
// setInterval(() => {}, 1000);
