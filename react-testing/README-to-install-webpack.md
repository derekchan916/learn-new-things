## Getting Started With Node Package Manager
Instructions on how to install Webpack to compile JSX files.

Create a new project directory called hello_world_app.

run$ npm init --yes

This will give you a package.json file.

run$ npm install --save react

run$ npm install --save react-dom

run$ npm install --save webpack

can also run$ npm install --save react react-dom webpack babel-core babel-loader babel-preset-react

Ignore the WARNs. If you want to fix it, change it to look like this
```JavaScript
{
  "name": "react-my-first-component",
  "version": "1.0.0",
  "private": true,
  "description": "testing-component",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-react": "^6.1.18",
    "react": "^0.14.3",
    "react-dom": "^0.14.3",
    "webpack": "^1.12.9"
  }
}
```
Create a new webpack.config.js file and copy this into it.
```JavaScript
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/nivita_app.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
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
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};


```
Here is my build so far:

/html

--my-first-component.html

/js

--component.jsx

/node_modules

-package.json

-webpack.config.js


run$ npm install --save babel-core

run$ npm install --save babel-loader

run$ npm install --save babel-preset-react

Now make sure you put the following code in component.jsx
```JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  }
});

ReactDOM.render(
  React.createElement(ClickCounter, {}, ""),
  document.getElementById('my-component')
);
```
run$ npm install webpack -g

run$ webpack

this should put a bundle.js file into your ish.

put this into your HTML file
```HTML
<body>
  <script src="../bundle.js"></script>
</body>
```

Run webpack in your terminal, then open the html file.

IF it doesn't work, and it says it cannot resolve module then do this

run $npm install --save react@0.14.0-rc1

run $npm install --save react-dom@0.14.0-rc1

we can also run this in a local environment.

run$ npm install -g http-server

run$ webpack --watch

We can now load the server by simply running http-server. Do this in another terminal tab, then navigate to http://localhost:8080 and ensure you can still see your modified "Hello World" component.
