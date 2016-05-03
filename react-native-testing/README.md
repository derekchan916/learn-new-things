run $react-native init <ProjectName>

if this doesn't work,

run $npm install -g react-native-cli

to run server log

run $serve .

npm install --save <app>
apps:
minutes-seconds-milliseconds -> time formatter
moment -> current days
lodash -> capitalize
firebase

Tutorials for firebase
https://www.firebase.com/blog/2016-01-20-tutorial-firebase-react-native.html

Tutorial for React Native
https://www.raywenderlich.com/126063/react-native-tutorial

Tutorial for React Native - Redux
https://github.com/alinz/example-react-native-redux

Redux tips on how to prevent mutations. (ES6)
-use DeepFreeze
ex. 
var array = [0, 14, 50];
array.push(0) => array.concat([0]) same as [...array,0]
array.splice(index, 1) => array.slice(0, index).concat(array.slice(index+1)) same as [...array.slice(0,index),...array.slice(index+1)]
array[index]++ => [...array.slice(0,index),array[index]+1,...array.slice(index+1)]

var todo.completed = true;
todo.completed = !todo.completed; => return {completed: !todo.completed} same as Object.assign({}, todo, {completed: !todo.completed});

.map doesn't mutate. 
