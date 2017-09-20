import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
// import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var myIcon = new Image();
  myIcon.src = Icon;

  btn.innerHTML = 'Click me check the console!';
  // btn.onclick = printMe;

  // This is lazy loading if the configurations in webpack.common.js were done properly
  // https://webpack.js.org/guides/lazy-loading/
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;
  //   print();
  // });

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.appendChild(myIcon);
  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());
