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
  ViewPagerAndroid
} from 'react-native';

var titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
var titles_second_data=["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","经典门票","境外游","全部分类"];



class RnApp extends Component {
  // 构造

  constructor(props) {
    super(props);
    let onPageSelected = function(e) {
      return (this.setState({page: 1+e.nativeEvent.position}));
    };
    // 初始状态
    this.state = {
      page:1
    };
  };
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          美团首页顶部效果实例
        </Text>
        <ViewPagerAndroid
          style={styles.pageStyle}
          initialPage={0}
          onPageSelected={this.onPageSelected}>
          <View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/one.png')} />
                <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/two.png')} />
                <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/three.png')} />
                <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/four.png')} />
                <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/five.png')} />
                <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/six.png')} />
                <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/seven.png')} />
                <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/eight.png')} />
                <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/nine.png')} />
                <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/ten.png')} />
                <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_one.png')} />
                <Text style={styles.textStyle}>{titles_second_data[0]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_two.png')} />
                <Text style={styles.textStyle}>{titles_second_data[1]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_three.png')} />
                <Text style={styles.textStyle}>{titles_second_data[2]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_four.png')} />
                <Text style={styles.textStyle}>{titles_second_data[3]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_five.png')} />
                <Text style={styles.textStyle}>{titles_second_data[4]}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_six.png')} />
                <Text style={styles.textStyle}>{titles_second_data[5]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_seven.png')} />
                <Text style={styles.textStyle}>{titles_second_data[6]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_eight.png')} />
                <Text style={styles.textStyle}>{titles_second_data[7]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_nine.png')} />
                <Text style={styles.textStyle}>{titles_second_data[8]}</Text>
              </View>
              <View style={{width:70}}>
                <Image style={styles.imageStyle} source={require('./img/meituan/next_ten.png')} />
                <Text style={styles.textStyle}>{titles_second_data[9]}</Text>
              </View>
            </View>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  pageStyle: {
    alignItems: 'center',
    marginTop: 10,
    height: 150
  },
  textStyle: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 12,
    color: '#555',
    textAlign: 'center'
  },
  imageStyle: {
    alignSelf: 'center',
    width: 45,
    height: 45
  }
});

AppRegistry.registerComponent('RnApp', () => RnApp);
