import React, {
  Component,
  Navigator,
  StyleSheet,
} from 'react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Parse from 'parse/react-native';
import Tweets from './components/tweets/tweets';

var ROUTES = {
	signin: SignIn,
	signup: SignUp,
	tweets: Tweets
}

class MainClass extends Component {
	componentWillMount() {
		Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooK")
	}
	render() {
		return (
			<Navigator
				initialRoute={{name: 'signin'}}
				renderScene={(route, navigator) => this.renderScene(route, navigator)}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				style={styles.container}
				/>
		);
	}
	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>;
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},

})

module.exports = MainClass;
