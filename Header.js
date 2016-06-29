/**
 * Created by Administrator on 2016/6/23.
 */
'use strict';
import React, { Component } from 'react';
import {
  Image,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

export default class Header extends Component{
  render() {
    return (
      <View style={styles.container}>
        Header
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#d74047',
    color: '#fff',
    alignItems: 'center'
  }
});