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
			imageSource: null,
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
			imageSourceArr: ['wass', 'asdf', 'fdaf', 'bad', 'versace', 'what']
		}
	}

	componentDidMount() {
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.state.imageSourceArr)
		})
	}

	selectPhotoTapped() {
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
				//const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
				const source = {uri: response.uri.replace('file://', ''), isStatic: true};

				this.setState({ imageSource: source });
			}
		});
	}

	removeImage(rowData) {
		this.setState({
			imageSourceArr : this.state.imageSourceArr.filter((_, i) => i !== 3),
			dataSource: this.state.dataSource.cloneWithRows(this.state.imageSourceArr)
		})
	}

	render() {
		return (
			<View>
				<ListView contentContainerStyle={styles.list}
			        dataSource={this.state.dataSource}
			        renderRow={(rowData) => this.renderRow(rowData)}
				/>
			</View>
		)
	}

	renderRow(rowData) {
		return (
			<View>
				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
					<View style={[styles.image, styles.imageContainer]}>
						{ this.state.imageSource === null ? <Text>+</Text> :
							<Image style={styles.image} source={this.state.imageSource} />
						}
					</View>
				<Text onPress={() => this.removeImage(rowData)}>X</Text>
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
        justifyContent: 'center',
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
