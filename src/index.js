import Debug from "./utils";
let debug = Debug("app");
import React from "react";
import { Provider } from "react-redux";
import store from "./stores";
import blessed from "blessed";

import { render } from "react-blessed";
import { Router, Route } from "react-router";
import App from "./components/App";
import CreateDownload from "./components/CreateDownload";
import About from "./components/About";
import Settings from "./components/Settings";

import history from "./components/routerHistory";
import DownloadList from "./components/DownloadList";

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

const component = render(
  <Router history={history}>
    <Provider store={store}>
      <App>
        <Route
          path="/downloads/activate"
          render={props => <DownloadList {...props} type="activate" />}
        />
        <Route
          path="/downloads/waiting"
          render={props => <DownloadList {...props} type="waiting" />}
        />
        <Route
          path="/downloads/stopped"
          render={props => <DownloadList {...props} type="stopped" />}
        />
        <Route
          path="/create"
          render={props => <CreateDownload {...props}></CreateDownload>}
        />
        <Route path="/about" render={props => <About {...props} />} />
        <Route
          path="/settings/aria"
          render={props => <Settings {...props}></Settings>}
        />
      </App>
    </Provider>
  </Router>,
  screen
);
// const component = render(
//   <Provider store={store}>
//     <App>
//       {/* <About /> */}
//       {/* <DownloadList type="activate" /> */}
//     </App>
//   </Provider>,
//   screen
// );

// // This is dumb but I don't understand how else to prevent process from exiting.
// // If it exits, it will get restarted by nodemon, but then hot reloading won't work.
// setInterval(() => {}, 1000);
