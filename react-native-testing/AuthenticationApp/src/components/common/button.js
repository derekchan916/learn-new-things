import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight
				style={styles.button}
				underlayColor={'gray'}
				onPress={() => this.props.onPress()}>
				<Text style={styles.buttonText}>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		borderColor: 'black',
		marginTop: 10
	},
	buttonText: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 20,
	}
})

module.exports = Button;
