## Getting Started With Node Package Manager
Instructions on how to install Webpack to compile JSX files.

Create a new project directory called hello_world_app.

run$ npm init --yes

This will give you a package.json file.

run$ npm install --save react

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
module.exports = {
  context: __dirname,
  entry: "./js/component.jsx",
  output: {
    path: "./",
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
