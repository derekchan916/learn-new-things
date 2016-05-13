//https://github.com/marcshilling/react-native-image-picker
const React = require('react-native');

const {
	StyleSheet,
	Component,
	Button,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	ListView,
	Image
} = React;

const ImagePickerManager = require('NativeModules').ImagePickerManager;

class CameraRollPicker extends Component {
	constructor() {
		super();
		this.state = {
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
			console.log('Response = ', response);
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
				const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
				// const source = {uri: response.uri.replace('file://', ''), isStatic: true};
				var localImageArray = this.state.imageSourceArr.slice();
				//need to do check if the item is null, if it is then add item, if it isnt then replace.
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
		this.setState({
			imageSourceArr : this.state.imageSourceArr.filter((_, i) => i !== imgId),
			dataSource: this.state.dataSource.cloneWithRows(this.state.imageSourceArr)
		})
	}

	render() {
		return (
			<View>
				<ListView contentContainerStyle={styles.list}
			        dataSource={this.state.dataSource}
			        renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
				/>
			</View>
		)
	}

	renderRow(rowData: string, sectionID: number, rowID: number) {
		return (
			<View>
				<TouchableOpacity onPress={() => this.selectPhotoTapped(parseInt(rowID))}>
					<View style={[styles.image, styles.imageContainer]}>
						{ rowData === null ? <Text>+</Text> :
							<Image style={styles.image} source={rowData.imageSource} />
						}
					</View>
				<Text onPress={() => this.removeImage(parseInt(rowID))}>X</Text>
				</TouchableOpacity>
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
