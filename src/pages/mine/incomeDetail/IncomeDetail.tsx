/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: 刘利军
 * @Date: 2024-11-06 17:15:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:33:02
 * @Description:
 * @PageName:
 */
import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Avatar, ListItem, Tab} from '@rneui/themed';
import {IncomDetailList, IncomDetailListItem} from '../../../interface';
import {CumulativeWithdrawalsApi, RevenueBreakdownApi} from '../../../services';
const IncomeDetail = ({}: NativeStackScreenProps<any, 'IncomeDetail'>) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cumulative, setCumulative] = useState(0);
  const [list, setList] = useState<IncomDetailList>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [reset, setRest] = useState(true);
  useEffect(() => {
    const getRevenueBreakdownList = async () => {
      setRest(false);
      const res = await RevenueBreakdownApi({
        tag: selectedIndex + 1,
        pageNo: pageNo,
        pageSize: 10,
      });
      if (res.code === 0 && res.data) {
        const data = res?.data || [];
        setList(val => [...val, ...data]);
        if (data.length === 0) {
          setRest(false);
        } else {
          setRest(true);
        }
      }
    };

    //获取累计兑换的钱
    const getCumulativeData = async () => {
      let type = 0;
      if (selectedIndex === 0) {
        type = 2;
      } else {
        type = 4;
      }
      const res = await CumulativeWithdrawalsApi({
        type: type,
      });
      console.log('res', res);
      if (res.code === 0) {
        setCumulative(res.data);
      }
    };
    getRevenueBreakdownList();
    getCumulativeData();
  }, [selectedIndex, pageNo]);

  const renderItem = ({item}: ListRenderItemInfo<IncomDetailListItem>) => (
    <ListItem>
      <Avatar source={{uri: item.recordLogo}} />
      <ListItem.Content>
        <ListItem.Title>{item.recordName}</ListItem.Title>
        <ListItem.Subtitle style={{color: '#B6B3B3'}}>
          {item.createTime}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right style={{fontSize: 18, color: '#000'}}>
          {item.consumeType === 1 ? '-' : '+'}
          {selectedIndex === 0 ? `${item.amount}元` : `${item.payGoldNum}个`}
        </ListItem.Title>
        <ListItem.Subtitle right style={{color: 'red'}}>
          {item.remark}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <Text style={{marginBottom: 12, fontSize: 18, fontWeight: '800'}}>
          累计{selectedIndex === 0 ? '收入' : '兑换'}
          <Text style={{color: '#E8520C'}}>
            {selectedIndex === 0 ? cumulative : cumulative / 10000}
          </Text>
          元
        </Text>
        <Tab
          value={selectedIndex}
          onChange={e => {
            setSelectedIndex(e);
            setPageNo(1);
            setList([]);
          }}
          indicatorStyle={{
            backgroundColor: '#FF6117',
          }}>
          {['现金', '金币'].map((item, index) => {
            return (
              <Tab.Item
                key={item}
                title={item}
                titleStyle={{
                  fontSize: 18,
                  color: index === selectedIndex ? '#000' : '#cccccc',
                }}
              />
            );
          })}
        </Tab>
        <FlatList
          refreshing
          keyExtractor={(_, index) => index.toString()}
          data={list}
          renderItem={renderItem}
          onEndReached={() => {
            if (reset) {
              setPageNo(pageNo + 1);
            }
          }}
        />
      </View>
    </>
  );
};

export default IncomeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
});
