import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Login extends Component{
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>SendBird JavaScript SDK!!!</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }
});

module.exports = Login;
