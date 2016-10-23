const webpack = require("webpack");

module.exports = {
  context: `${__dirname}/src`,
  devtool: "cheap-module-source-map",
  entry: {
    javascript: "./index.jsx"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "/compiled.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        WEBSITE_ROOT: process.env.WEBSITE_ROOT
      })
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.json$/,
      exclude: "/node_modules/",
      loader: "json"
    }]
  }
};
