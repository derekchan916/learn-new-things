run $rails new <filename>

If you want to work with react, create a folder called frontend and put your filename.jsx there.

And then in webpack.config, make something like this
```JavaScript
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
```

run $rails g model Todo

run $rake db:migrate

run $rails g controller Todos
