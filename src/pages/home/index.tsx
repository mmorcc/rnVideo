/*
 * @Author: 刘利军
 * @Date: 2024-11-05 20:28:39
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 20:47:22
 * @Description:
 * @PageName:
 */
import {requireNativeComponent, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import {setLoginData} from '../../core/hooks';
import {testLoginApi} from '../../services';
const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        loading={loading}
        onPress={async () => {
          setLoading(true);
          const res = await testLoginApi();
          console.log('res', res);
          setLoginData(res.data);
          setLoading(false);
        }}>
        模拟登录
      </Button>
    </View>
  );
};

export default Home;
