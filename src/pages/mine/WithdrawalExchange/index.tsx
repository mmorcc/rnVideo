/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: 刘利军
 * @Date: 2024-11-06 20:46:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 15:06:28
 * @Description: KeFu
 * @PageName:
 */
import {FlatList, ListRenderItemInfo, StatusBar, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {Avatar, Image, ListItem} from '@rneui/themed';
import Cumulative from './Cumulative';
import {WithdrawalExchangeListApi} from '../../../services';
import {
  WithdrawalExchangeList,
  WithdrawalExchangeListItem,
} from '../../../interface';

const WithdrawalExchange: FC<{type: number}> = ({type}) => {
  const [list, setList] = useState<WithdrawalExchangeList>([
    {
      recordName: ' xxxx',
      createTime: '2027-38-2 12:39:2',
      status: '1',
      recordLogo: '',
      payGoldNum: '1342',
      amount: '2344',
    },
    {
      recordName: ' xxxx',
      createTime: '2027-38-2 12:39:2',
      status: '2',
      recordLogo: '',
      payGoldNum: '12988',
      amount: '24333',
    },
    {
      recordName: ' xxxx',
      createTime: '2027-38-2 12:39:2',
      status: '3',
      recordLogo: '',
      payGoldNum: '10',
      amount: '10',
    },
  ]);

  useEffect(() => {
    const getList = async () => {
      const res = await WithdrawalExchangeListApi({
        pageNo: 1,
        pageSize: 10,
        orderType: type,
        consumeType: 1,
        walletType: 1,
      });
      if (res.code === 0 && res.data) {
        // setList(res.data);
      }
    };
    getList();
  }, [type]);

  const getStatus = (status: string) => {
    if (type === 1) {
      if (status === '1' || status === '12') {
        return '提现中';
      }
      if (status === '2') {
        return '提现成功';
      }
      return '提现失败';
    } else {
      if (status === '1') {
        return '兑换中';
      }
      if (status === '2') {
        return '兑换成功';
      }
      return '兑换失败';
    }
  };
  const renderItem = ({
    item,
  }: ListRenderItemInfo<WithdrawalExchangeListItem>) => (
    <ListItem>
      <Avatar source={{uri: item.recordLogo}} />
      <ListItem.Content>
        <ListItem.Title>{item.recordName}</ListItem.Title>
        <ListItem.Subtitle style={{color: '#B6B3B3'}}>
          {item.createTime}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title>
          {type === 1 ? `-${item.amount}元` : `-${item.payGoldNum}金币`}
        </ListItem.Title>
        <ListItem.Subtitle style={{color: 'red'}}>
          {getStatus(item.status)}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <StatusBar hidden={false} />
      <Cumulative type={type} />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default WithdrawalExchange;
