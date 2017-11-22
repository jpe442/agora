// Create a webpack.config.js file.
// The entry point should be in frontend, e.g.entry: 'frontend/index.jsx'.
// The output path should be 'app/assets/javascripts'.
// Configure your module.loaders to use Babel transpilation for:
//   JSX
// ES6
// Include devtool: 'source-map'.
// git commit again(Verify that your.gitignore works).
// git push your skeleton.

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};