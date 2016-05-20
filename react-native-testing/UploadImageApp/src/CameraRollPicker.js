//https://github.com/marcshilling/react-native-image-picker
const React = require('react-native');
const SortableListView = require('react-native-sortable-listview');

const {
	StyleSheet,
	Component,
	Button,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	TouchableHighlight,
	ListView,
	Image
} = React;

const ImagePickerManager = require('NativeModules').ImagePickerManager;

let data = {
  hello: {text: 'world'},
  how: {text: 'are you'},
  test: {text: 123},
  this: {text: 'is'},
  a: {text: 'a'},
  real: {text: 'real'},
  drag: {text: 'drag and drop'},
  bb: {text: 'bb'},
  cc: {text: 'cc'},
  dd: {text: 'dd'},
  ee: {text: 'ee'},
  ff: {text: 'ff'},
  gg: {text: 'gg'},
  hh: {text: 'hh'},
  ii: {text: 'ii'},
  jj: {text: 'jj'},
  kk: {text: 'kk'}
}

let order = Object.keys(data);

class CameraRollPicker extends Component {
	constructor() {
		super();
		this.state = {
			imageSource: null,
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
			imageSourceArr: [null]
		}
	}

	componentDidMount() {
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.state.imageSourceArr)
		})
	}

	selectPhotoTapped(imgId) {
		const options = {
			title: 'Photo Picker',
			takePhotoButtonTitle: 'Take Photo',
			chooseFromLibraryButtonTitle: 'Choose from Library',
			customButtons: {
				'Choose from Facebook': 'fbImage',
			},
			quality: 0.5,
			maxWidth: 300,
			maxHeight: 300,
			storageOptions: {
				skipBackup: true
			},
			allowsEditing: true
		};

		ImagePickerManager.showImagePicker(options, (response) => {
			// console.log('Response = ', response);
			if (response.didCancel) {
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePickerManager Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
				// const source = {uri: response.uri.replace('file://', ''), isStatic: true};
				// var localImageArray = this.state.imageSourceArr.slice();
				// need to do check if the item is null, if it is then add item, if it isnt then replace.

				this.setState({
					imageSourceArr: localImageArray
									.slice(0, localImageArray.length -1 )
									.concat(source, localImageArray[localImageArray.length - 1])
				 });
			}
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.state.imageSourceArr)
			})
		});
	}

	removeImage(imgId) {
		var editedSourceArr = this.state.imageSourceArr.filter((_, i) => i !== imgId);
		this.setState({
			imageSourceArr : editedSourceArr,
			dataSource: this.state.dataSource.cloneWithRows(editedSourceArr)
		})
	}

	render() {
		console.log('THIS IS THE STATE', this.state.imageSourceArr);
		// return (
		// 	<View>
		// 		<ListView contentContainerStyle={styles.list}
		// 			dataSource={this.state.dataSource}
		// 			renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
		// 		/>
		// 		<TouchableOpacity onPress={() => this.selectPhotoTapped(this.state.imageSourceArr.length - 1)}>
		// 			<View style={[styles.image, styles.imageContainer]}>
		// 				<Text>+</Text>
		// 			</View>
		// 		</TouchableOpacity>
		// 	</View>
		// )
		return (
			<View>
				<SortableListView
					contentContainerStyle={styles.list}
					data={data}
					order={order}
					onRowMoved={e => {
		              order.splice(e.to, 0, order.splice(e.from, 1)[0]);
		              this.forceUpdate();
		            }}
					renderRow={row => this.renderRow(row)}
				/>
			</View>
		)
	}

	// renderRow(rowData: string, sectionID: number, rowID: number) {
	renderRow(data) {
		// return (
		// 	<View>
		// 		{ rowData === null ? null :
		// 			<TouchableOpacity onPress={() => this.selectPhotoTapped(parseInt(rowID))}>
		// 				<View style={[styles.image, styles.imageContainer]}>
		// 					<Image style={styles.image} source={rowData} />
		// 				</View>
		// 				<Text onPress={() => this.removeImage(parseInt(rowID))}>X</Text>
		// 			</TouchableOpacity>
		// 		}
		// 	</View>
		// )
		return (
			<View>
				<TouchableHighlight onLongPress={this.props.onLongPress}>
					<View style={[styles.image, styles.imageContainer]}>
						<Text>{data.text}</Text>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		borderRadius: 50,
		width: 100,
		height: 100
	},
	list: {
		alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});

module.exports = CameraRollPicker;
