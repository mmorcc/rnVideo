/*
 * @Author: 刘利军
 * @Date: 2024-11-06 12:59:10
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 14:44:44
 * @Description:
 * @PageName:
 */
import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {DefaultRouterOptions} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {
  FeedBack,
  FeedBackRecording,
  IncomeDetail,
  WithdrawalRecord,
  ExchangeRecord,
  CustomerService,
  CommonProblem,
  MySetting,
} from '../../pages/mine';
import{ Login } from '../../pages/login';
import{ Invite ,RightsCenter} from '../../pages/invite';

const StackNavigator: FC<DefaultRouterOptions> = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
          headerTitle: '登录',
        }}
        component={Login}
      />
      <Stack.Screen
        name="RightsCenter"
        options={{
          headerShown: false,
          headerTitle: '权益中心nter',
        }}
        component={RightsCenter}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="main"
        component={TabNavigator}
      />
      <Stack.Screen
        name="IncomeDetail"
        options={{
          headerShown: true,
          headerTitle: '收入明细',
        }}
        component={IncomeDetail}
      />
      <Stack.Screen
        name="WithdrawalRecord"
        options={{
          headerShown: true,
          headerTitle: '提现记录',
        }}
        component={WithdrawalRecord}
      />
      <Stack.Screen
        name="ExchangeRecord"
        options={{
          headerShown: true,
          headerTitle: '兑奖记录',
        }}
        component={ExchangeRecord}
      />
      <Stack.Screen
        name="CustomerService"
        options={{
          headerShown: true,
          headerTitle: '在线客服',
        }}
        component={CustomerService}
      />
      <Stack.Screen
        name="FeedBack"
        options={{
          headerShown: true,
          headerTitle: '意见反馈',
        }}
        component={FeedBack}
      />
      <Stack.Screen
        name="FeedBackRecording"
        options={{headerShown: true, headerTitle: '反馈记录'}}
        component={FeedBackRecording}
      />
      <Stack.Screen
        name="CommonProblem"
        options={{
          headerShown: true,
          headerTitle: '常见问题',
        }}
        component={CommonProblem}
      />
      <Stack.Screen
        name="MySetting"
        options={{
          headerShown: true,
          headerTitle: '我的设置',
        }}
        component={MySetting}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
