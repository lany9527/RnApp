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
  ProgressBarAndroid
} from 'react-native';


class RnApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/one.png')} style={styles.myImg} />
            <Text style={styles.myText}>美食</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/two.png')} style={styles.myImg} />
            <Text style={styles.myText}>电影</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/three.png')} style={styles.myImg} />
            <Text style={styles.myText}>酒店</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/four.png')} style={styles.myImg} />
            <Text style={styles.myText}>KTV</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/five.png')} style={styles.myImg} />
            <Text style={styles.myText}>外卖</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/six.png')} style={styles.myImg} />
            <Text style={styles.myText}>优惠买单</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/seven.png')} style={styles.myImg} />
            <Text style={styles.myText}>周边游</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/eight.png')} style={styles.myImg} />
            <Text style={styles.myText}>休闲娱乐</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/nine.png')} style={styles.myImg} />
            <Text style={styles.myText}>今日新单</Text>
          </View>
          <View style={styles.colWidth}>
            <Image source={require('./img/meituan/ten.png')} style={styles.myImg} />
            <Text style={styles.myText}>丽人</Text>
          </View>
        </View>
        <View style={{width: 980}}>
          <TextInput style={styles.textIpt} multiline={true} defaultValue='默认信息1' />
        </View>
        <View style={styles.row.QQlogIn}>
          <Image
            style={styles.QQImg}
            source={require('./img/QQ.png')}
          />
          <TextInput
            style={styles.QQUserName}
            placeholder="QQ号/手机号/邮箱"
            numberOfLines={1}
            underlineColorAndroid={'transparent'}
          />
          <View
            style={{height:1,backgroundColor:'#f4f4f4'}}
          />
          <TextInput
            style={styles.QQPwd}
            placeholder="密码"
            numberOfLines={1}
            underlineColorAndroid={'transparent'}
          />
          <View style={styles.commit}>
            <Text style={{color: '#fff'}}>登录</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', top: 40}}>
            <Text style={styles.unlog}>无法登陆？</Text>
            <Text style={styles.register}>注册新用户</Text>
          </View>
        </View>
        <Text>ProgressBarAndroid</Text>
        <ProgressBarAndroid color="red" styleAttr="Inverse" />
        <ProgressBarAndroid color="green" indeterminate={false} styleAttr="Horizontal" progress={0.2} />
        <ProgressBarAndroid color="green" indeterminate={true} styleAttr="Horizontal" style={{marginTop:10}} />

        <ProgressBarAndroid color="black" styleAttr="SmallInverse" style={{marginTop:10}} />
        <ProgressBarAndroid color="black" styleAttr="LargeInverse" style={{marginTop:10}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    alignSelf: 'center'
  },
  colWidth: {
    width: 70
  },
  myImg: {
    alignSelf: 'center',
    width: 45,
    height: 45
  },
  myText: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 12,
    color: '#555555'
  },
  textIpt: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  QQlogIn: {
    backgroundColor: '#f4f4f4',
    flex: 1
  },
  QQImg: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 40,
    alignSelf: 'center'
  },
  QQUserName: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 50,
    textAlign: 'center'
  },
  QQPwd: {
    backgroundColor: '#fff',
    height: 50,
    textAlign: 'center'
  },
  commit: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  unlog: {
    fontSize: 12,
    color: '#63B8FF',
    marginLeft: 10
  },
  register: {
    fontSize: 12,
    color: '#63B8FF',
    marginRight: 10,
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    textAlign: 'right'
  }
});

AppRegistry.registerComponent('RnApp', () => RnApp);
