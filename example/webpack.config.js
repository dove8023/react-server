let path = require("path");

module.exports = {
  entry: ['./public/js/main.js'],
  output: {
    path: path.join(__dirname, './public/js'),
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  mode: "development",
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader!jsx-loader?harmony'
    }]
  }
};
