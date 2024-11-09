/*
 * @Author: 刘利军
 * @Date: 2024-11-03 17:52:54
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 20:08:50
 * @Description:
 * @PageName:
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {StatusBar} from 'react-native';

import {
  createModalStack,
  ModalProvider,
  ModalStackConfig,
} from 'react-native-modalfy';
import {QRModal, Toast} from '../../components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const modalConfig: ModalStackConfig = {
  QRModal,
  Toast: {
    modal: Toast,
    backdropOpacity: 0,
  },
};
const defaultOptions = {backdropOpacity: 0.5};
const stack = createModalStack(modalConfig, defaultOptions);

const AppNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ModalProvider stack={stack}>
        <NavigationContainer>
          <StatusBar hidden />
          <StackNavigator initialRouteName="Login" />
        </NavigationContainer>
      </ModalProvider>
    </GestureHandlerRootView>
  );
};
export default AppNavigator;
