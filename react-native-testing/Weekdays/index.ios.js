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
	TouchableHighlight,
	View
} from 'react-native';
import DayItem from './src/day-item';
import FormatTime from 'minutes-seconds-milliseconds';
import Moment from 'moment';

class Weekdays extends Component {
	constructor() {
		super();
		this.state = {
			timeElapsed: null,
			running: false,
			startTime: null,
			laps: [],
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.daysContainer}>
					{this.days()}
				</View>
				<View style={styles.stopWatchContainer}>
					<View style={styles.header}>
						<View style={styles.timerWrapper}>
							<Text style={styles.timer}>
								{FormatTime(this.state.timeElapsed)}
							</Text>
						</View>
						<View style={styles.buttonWrapper}>
							{this.startStopButton()}
							{this.lapButton()}
						</View>
					</View>

					<View style={styles.footer}>
						{this.laps()}
					</View>
				</View>
			</View>
		);
	};

	laps() {
		return this.state.laps.map(function(time, i) {
			return (
				<View key={i} style={styles.lap}>
					<Text style={styles.lapText}>
						Lap #{i + 1}
					</Text>
					<Text style={styles.lapText}>
						{FormatTime(time)}
					</Text>
				</View>
			)
		})
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

	startStopButton() {
		var style = this.state.running ? styles.stopButton : styles.startButton;

		return (
			<TouchableHighlight
				underlayColor="gray"
				style={[styles.button, style]}
				onPress={() => this.handleStartPress()}>
				<Text>
					{this.state.running ? 'Stop' : 'Start'}
				</Text>
			</TouchableHighlight>
		);
	};

	lapButton() {
		return (
			<TouchableHighlight
				underlayColor="gray"
				style={styles.button}
				onPress={() => this.handleLapPress()}>
				<Text>
					Lap
				</Text>
			</TouchableHighlight>
		);
	};

	handleLapPress() {
		var lap = this.state.timeElapsed;

		this.setState({
			startTime: new Date(),
			laps: this.state.laps.concat([lap])
		});
	};

	handleStartPress() {
		if(this.state.running) {
			clearInterval(this.interval);
			this.setState({running: false});
			return
		}

		this.setState({startTime: new Date()});

		this.interval = setInterval(() => {
			this.setState({
				timeElapsed: new Date() - this.state.startTime,
				running: true
			})
		}, 30);
	};

	border(color) {
		return {
			borderColor: color,
			borderWidth: 4
		}
	};
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
	},
	daysContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	stopWatchContainer: {
		flex: 10,
		alignItems: 'stretch',
	},
	header: {
		flex: 1,
	},
	footer: {
		flex: 1,
	},
	timerWrapper: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonWrapper: {
		flex: 3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	timer: {
		fontSize: 60,
	},
	button: {
		borderWidth: 2,
		height: 100,
		width: 100,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	startButton: {
		borderColor: '#00CC00'
	},
	stopButton: {
		borderColor: '#CC0000'
	},
	lap: {
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	lapText: {
		fontSize: 30,
	}
});

AppRegistry.registerComponent('Weekdays', () => Weekdays);
