/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //camera roll picker https://www.npmjs.com/package/react-native-camera-roll-picker
const React = require('react');
const ReactNative = require('react-native');
const {
	AppRegistry,
	Component,
} = ReactNative;
const UploadImage = require('./src/CameraRoll')
const CameraRollPicker = require('./src/CameraRollPicker')

class UploadImageApp extends Component {
	render() {
		return (
			<CameraRollPicker />
		);
	}
}

AppRegistry.registerComponent('UploadImageApp', () => UploadImageApp);
