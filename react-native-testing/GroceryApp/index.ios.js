/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const React = require('react-native');
const { AppRegistry, StyleSheet, Text, View, ListView, AlertIOS, Component } = React;
const Firebase = require('firebase');
const styles = require('./styles.js')
const StatusBar = require('./components/statusBar');
const ActionButton = require('./components/actionButton');
const ListItem = require('./components/listItem');

class GroceryApp extends Component {
	constructor(props) {
		super(props);
			this.state = {
				dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			})
		};
		this.itemsRef = new Firebase("https://blistering-heat-8167.firebaseio.com/items");
	}
	componentDidMount() {
		this.listenForItems(this.itemsRef);
	}

	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {
			// get children as an array
			var items = [];
			snap.forEach((child) => {
				items.push({
					title: child.val().title,
					_key: child.key()
				});
			});
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(items)
			});
		});
	}

	_renderItem(item) {
		const onPress = () => {
			AlertIOS.prompt(
			'Complete',
			null,
			[
				{text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
				{text: 'Cancel', onPress: (text) => console.log('Cancel')}
			],
			'default'
			);
			};
			return (
				<ListItem item={item} onPress={onPress} />
			);
		}
	_addItem() {
		AlertIOS.prompt(
			'Add New Item',
			null,
				[
					{
						text: 'Add',
						onPress: (text) => {
							this.itemsRef.push({ title: text })
						}
					},
				],
			'plain-text'
		);
	}

	render() {
		return (
			<View style={styles.container}>

				<StatusBar title="Grocery List" />

				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderItem.bind(this)}
					style={styles.listview}/>

				<ActionButton title="Add" onPress={this._addItem.bind(this)} />

			</View>
		);
	}

}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
