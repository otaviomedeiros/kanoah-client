var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/app.js",
    vendor: ["angular", "angular-route", "angular-sanitize", "jquery", "bootstrap"]
  },
  output: {
    path: "./public/assets",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js/, loader: "babel", exclude: /node_modules/ },
      { test: /\.less/, loader: "style!css!less" },
      { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: "url-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" })
  ]
}
