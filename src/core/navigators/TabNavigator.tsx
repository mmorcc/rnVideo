/*
 * @Author: 刘利军
 * @Date: 2024-11-03 17:52:54
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 20:35:47
 * @Description:
 * @PageName:
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mine} from '../../pages/mine';
import Home from '../../pages/home';
import Invite from '../../pages/invite/Invite';
import More from '../../pages/more';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        options={{tabBarLabel: '首页'}}
        component={Home}
      />
      <Tab.Screen name="邀请" component={Invite} />
      <Tab.Screen
        name="more"
        options={{tabBarLabel: '更多产品'}}
        component={More}
      />
      <Tab.Screen
        name="mine"
        options={{tabBarLabel: '我的'}}
        component={Mine}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
