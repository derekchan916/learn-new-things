module.exports = {
  context: __dirname,
  entry: "./frontend/todo_react.jsx",
  output: {
    path: "./app/assets/javascripts/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
