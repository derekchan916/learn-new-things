/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  MapView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';
import Api from './src/api';

class WeatherApp extends Component {
	constructor() {
		super();
		this.state = {
			pin: {
				latitude: 0,
				longitude: 0
			},
			city: '',
			temperature: '',
			description: '',
		};
	};
	render() {
		return (
			<View style={styles.container}>
				<MapView
					annotations={[this.state.pin]}
					onRegionChangeComplete={(region) => this.onRegionChangeComplete(region)}
					style={styles.map}>
				</MapView>
				<View style={styles.textWrapper}>
					<Text style={styles.text}>{this.state.city}</Text>
					<Text style={styles.text}>{this.state.temperature}</Text>
					<Text style={styles.text}>{this.state.description}</Text>
				</View>
			</View>
		);
	};
	onRegionChangeComplete(region) {
		this.setState({
			pin: {
				longitude: region.longitude,
				latitude: region.latitude
			}
		})

		Api(region.latitude, region.longitude)
			.then((data) => {
					this.setState({
						city: _.capitalize(data.city),
						temperature: data.temperature,
						description: _.capitalize(data.description)
					})
			});
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#F5CFFF',
	},
	map: {
		flex: 2,
		marginTop: 30,
	},
	textWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
	}
});

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
