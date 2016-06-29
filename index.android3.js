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
  ProgressBarAndroid,
  DrawerLayoutAndroid
} from 'react-native';


class RnApp extends Component {
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#0FDDF0'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>
          导航栏标题
        </Text>
        <Text style={{marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 20, textAlign: 'left'}}>
          首页
        </Text>
        <Text style={{marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 20, textAlign: 'left'}}>
          新闻
        </Text>
        <Text style={{marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 20, textAlign: 'left'}}>
          科技
        </Text>
        <Text style={{marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 20, textAlign: 'left'}}>
          娱乐
        </Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={150}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={()=>navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>我是主布局内容</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('RnApp', () => RnApp);
