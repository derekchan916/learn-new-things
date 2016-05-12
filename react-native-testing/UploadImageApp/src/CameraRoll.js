const React = require('react');
const ReactNative = require('react-native');
const {
	   AppRegistry,
	   CameraRoll,
	   Component,
	   Image,
	   SliderIOS,
	   StyleSheet,
	   Switch,
	   Text,
	   View,
	   TouchableOpacity
   } = ReactNative;
const CameraRollView = require('./CameraRollView');
const AssetScaledImageExampleView = require('./AssetScaledImageExample');
const CAMERA_ROLL_VIEW = 'camera_roll_view';

class UploadImage extends Component {
   constructor() {
	   super();
	   this.state = {
		   groupTypes: 'SavedPhotos',
		   sliderValue: 1
	   };
   }

   render() {
	   return (
		   <View>
			   <CameraRollView
				   ref={CAMERA_ROLL_VIEW}
				   batchSize={20}
				   groupTypes={this.state.groupTypes}
				   renderImage={this._renderImage}
			   />
		   </View>
	   );
   }

   _renderImage(asset) {
	   const imageSize = 150;
	   const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
	   return (
		   <TouchableOpacity key={asset}>
			   <View style={styles.row}>
				   <Image
					   source={asset.node.image}
					   style={imageStyle}
				   />
				   <View style={styles.info}>
					   <Text style={styles.url}>{asset.node.image.uri}</Text>
					   <Text>{asset.node.group_name}</Text>
					   <Text>{new Date(asset.node.timestamp).toString()}</Text>
				   </View>
			   </View>
		   </TouchableOpacity>
	   );
   }

   loadAsset(asset){
	   if (this.props.navigator) {
		   this.props.navigator.push({
			   title: 'Camera Roll Image',
			   component: AssetScaledImageExampleView,
			   backButtonTitle: 'Back',
			   passProps: { asset: asset },
		   });
	   }
   }
}

const styles = StyleSheet.create({
   row: {
	   flexDirection: 'row',
	   flex: 1,
   },
   url: {
	   fontSize: 9,
	   marginBottom: 14,
   },
   image: {
	   margin: 4,
   },
   info: {
	   flex: 1,
   },
});

module.exports = UploadImage;
