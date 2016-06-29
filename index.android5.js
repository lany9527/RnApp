/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  Picker
} from 'react-native';

var RnApp = React.createClass({
    getInitialState: function() {
      return {
        language: '',
      };
    },
    render() {
      return (
        <View style={styles.container}>
          <Text >
            Picker选择器实例
          </Text>
          <Picker
            prompt="请选择编程语言"
            // mode={'dropdown'}
            style={{width:200}}
            selectedValue={this.state.language}
            onValueChange={(value) => this.setState({language: value})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="javaScript" />
          </Picker>
          <Text>当前选择的是:{this.state.language}</Text>
        </View>
      );
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pick: {
    marginTop: 50,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('RnApp', () => RnApp);
