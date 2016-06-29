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
  ScrollView,
  PullToRefreshViewAndroid,
} from 'react-native';

class RnApp extends Component {
  // 构造
  constructor(props) {
    super(props);
    var ds=new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows(['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8'])
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        contentContainerStyle={styles.list}/>
    );
  }
};

const styles = StyleSheet.create({
  row: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 20,
    backgroundColor: '#3ad734',
    margin: 5
  },
  text: {
    alignSelf: 'center',
    color: '#fff'
  },
  layout: {
    flex: 1
  },
  scrollview: {
    flex: 1
  }
});

AppRegistry.registerComponent('RnApp', () => RnApp);
