const React = require('react-native');

const {
	StyleSheet,
	Component,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	Image
} = React;

const ImagePickerManager = require('NativeModules').ImagePickerManager;

class CameraRollPicker extends Component {
	constructor() {
		super();
		this.state = {
			imageSource: null
		}
	}

	selectPhotoTapped() {
		const options = {
			title: 'Photo Picker',
			takePhotoButtonTitle: 'Take Photo...',
			chooseFromLibraryButtonTitle: 'Choose from Library...',
			customButtons: {
				'Choose from Facebook...': 'fbImage',
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

				this.setState({
					imageSource: source
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
					<View style={[styles.image, styles.imageContainer, {marginBottom: 20}]}>
						{ this.state.imageSource === null ? <Text>Select a Photo</Text> :
							<Image style={styles.image} source={this.state.imageSource} />
						}
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
		imageContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center'
	},
		image: {
		borderRadius: 75,
		width: 150,
		height: 150
	}
});

module.exports = CameraRollPicker;
