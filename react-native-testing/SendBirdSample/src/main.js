import React, { Component } from 'react';

import {
	Navigator,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Login from './components/login';
import Channels from './components/channels';
import Chat from './components/chat';

var ROUTES = {
	login: Login,
	channels: Channels,
	chat: Chat,
};

class Main extends Component{
	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />;
	}

	render() {
		return (
			<Navigator
				style={ styles.container }
				initialRoute={ {name: 'login'} }
				renderScene={this.renderScene}
				configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
			/>
		);
	}
 };

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

 module.exports = Main;
