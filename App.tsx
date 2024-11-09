/*
 * @Author: 刘利军
 * @Date: 2024-11-07 10:09:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 19:35:27
 * @Description:
 * @PageName:
 */
/*
 * @Author: 刘利军
 * @Date: 2024-11-03 16:27:47
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 18:15:57
 * @Description:
 * @PageName:
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigator} from './src/core/navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
