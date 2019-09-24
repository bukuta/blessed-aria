require("@babel/register")({
  presets: [["@babel/preset-env"], ["@babel/preset-react"]]
});

require("react-blessed/dist/fiber/devtools");

require("./src/index");
