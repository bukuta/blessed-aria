var Debug = require("debug");
const fs = require("fs");
const path = require("path");
Debug.log = function() {
  let basedir = process.cwd();
  // console.log(basedir);
  const file = path.join(basedir, "pipe.fifo");
  const file2 = path.join(basedir, "logs.txt");
  const line = [].concat(...arguments).join(" ");
  fs.appendFileSync(file, line + "\n");
  fs.appendFileSync(file2, line + "\n");
};

console.log = Debug("app:log");
console.warn = Debug("app:warn");
console.error = Debug("app:error");
console.info = Debug("app:info");
console.debug = Debug("app:debug");

module.exports = Debug;
