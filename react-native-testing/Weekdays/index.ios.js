/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

class Weekdays extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.days()}
			</View>
		);
	};
	days() {
		var daysItems = [];

		for(var i=0; i<7; i++) {
			var day = Moment().add(i, 'days').format('dddd');
			daysItems.push(
				<DayItem key={i} day={day} daysUntil={i} />
			)
		}

		return daysItems;
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

AppRegistry.registerComponent('Weekdays', () => Weekdays);
