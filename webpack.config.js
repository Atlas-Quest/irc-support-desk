module.exports = {
  entry: "./bundle.js",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
