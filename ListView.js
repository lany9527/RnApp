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
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

let THUMB_URLS = [
  require('./img/meituan/one.png'),
  require('./img/meituan/two.png'),
  require('./img/meituan/three.png'),
  require('./img/meituan/four.png'),
  require('./img/meituan/five.png'),
  require('./img/meituan/six.png'),
  require('./img/meituan/eight.png'),
  require('./img/meituan/nine.png'),
  require('./img/meituan/ten.png'),
  require('./img/meituan/next_four.png'),
  require('./img/meituan/next_five.png'),
  require('./img/meituan/next_six.png')
];

let titles_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];

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

  _renderRow(rowData: string, sectionID: number, rowID: number){
    var imgSource = THUMB_URLS[rowID];
    return (
      <TouchableOpacity>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {/*{rowData + titles_data[rowID]}*/}
              {titles_data[rowID]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
  list: {
    marginTop: 5,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  row: {
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    width: 86,
    height: 386,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc'
  },
  thumb: {
    width: 50,
    height: 50
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: 'red'
  }
});

AppRegistry.registerComponent('RnApp', () => RnApp);
