const path = require("path");
var fs = require("fs");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  target: "node",
  output: {
    path: path.join(__dirname, "build"),
    filename: "backend.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
        include: path.join(__dirname, "src")
      }
    ]
  },
  // recordsPath: path.join(__dirname, "build", "_records"),
  plugins: [
    // new webpack.IgnorePlugin(/\.(css|less)$/),
    // new webpack.BannerPlugin('require("source-map-support").install();', {
    //   raw: true,
    //   entryOnly: false
    // }),
    // new webpack.HotModuleReplacementPlugin({ quiet: true })
  ]
};
