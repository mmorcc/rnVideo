/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: 刘利军
 * @Date: 2024-11-05 20:28:39
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:03:12
 * @Description:
 * @PageName:
 */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {ListItem} from '@rneui/themed';
import {getMoreProductList} from '../../services/more';
import {MoreProductList} from '../../interface';

const More = () => {
  const [list, setList] = useState<MoreProductList>([]);
  useEffect(() => {
    const getList = async () => {
      const res = await getMoreProductList();
      if (res.code === 0 && res.data) {
        setList(res?.data);
      }
    };
    getList();
  }, []);
  const getBKColor = (index: number) => {
    if (index === 0) {
      return '#FF3A3A';
    }
    if (index === 1) {
      return '#FFE24F';
    }
    if (index === 2) {
      return '#FFA46B';
    }
    return '#ccc';
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['#ffc369', 'rgba(255, 255, 255, 0)']}>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{padding: 24}}>
            <Text style={{fontSize: 22}}>赚钱应用</Text>
            <Text style={{fontSize: 14, marginTop: 2}}>
              能赚钱的APP都在这里
            </Text>
          </View>
          {list.map((item, index) => {
            return (
              <ListItem
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#FFFFFF', '#FFE0CD'],
                  start: {x: 0.2, y: 0},
                  end: {x: 1, y: 0},
                }}>
                <Text
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    backgroundColor: getBKColor(index),
                    borderRadius: 5,
                    color: '#fff',
                    fontSize: 14,
                  }}>
                  {index + 1}
                </Text>
                <Image
                  style={{width: 35, height: 35}}
                  source={{uri: item.logoUrl}}
                />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                  <ListItem.Subtitle>{item.subhead}</ListItem.Subtitle>
                </ListItem.Content>
                <Text style={styles.down}>下载</Text>
              </ListItem>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  down: {
    paddingVertical: 4,
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 50,
    paddingHorizontal: 12,
  },
});
