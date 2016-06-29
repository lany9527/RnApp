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
  Image,
  TextInput,
  ScrollView,
  ToolbarAndroid
} from 'react-native';
// var ToolbarAndroid = require('ToolbarAndroid');

class RnApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          actions={toolbarActions}
          navIcon={require('./img/List.png')}
          style={styles.toolbar}
          title="主标题">
          <View>
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
          </View>
        </ToolbarAndroid>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.contentContainer}>
          <View>
            <Text>
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
            </Text>
          </View>
          <View>
            <Text>
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
              Shake or press menu button for dev menuShake or press menu button for dev menu
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var toolbarActions = [
  {title: 'Create', icon: require('./img/Bubble.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('./img/Close.png'), show: 'always'}
];

const styles = StyleSheet.create({
  container: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    margin: 10
  },
  toolbar: {
    backgroundColor: '#54DC46',
    height: 56
  }

});

AppRegistry.registerComponent('RnApp', () => RnApp);
