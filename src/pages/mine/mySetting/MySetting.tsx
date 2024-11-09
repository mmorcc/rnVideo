/*
 * @Author: 刘利军
 * @Date: 2024-11-06 20:46:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:14:53
 * @Description: KeFu
 * @PageName:
 */
import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, ListItem} from '@rneui/themed';
import {useLoginData} from '../../../core/hooks';
import {phoneNumberMask} from '../../../utils';

const MySetting: FC<NativeStackScreenProps<any, 'MySetting'>> = () => {
  const loginData = useLoginData();
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>手机号</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title right>
          {phoneNumberMask(loginData.userInfo?.phone || '')}
        </ListItem.Title>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>微信</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title right>{loginData.userInfo?.userName}</ListItem.Title>
      </ListItem>
      <ListItem style={styles.mb8}>
        <ListItem.Content>
          <ListItem.Title>会员ID</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title right>{loginData.userInfo?.code}</ListItem.Title>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>用户服务协议</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title right>
          <Image
            style={styles.right}
            source={require('../../../assets/static/right.png')}
          />
        </ListItem.Title>
      </ListItem>

      <ListItem style={styles.mb8}>
        <ListItem.Content>
          <ListItem.Title>隐私保护政策</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title right>
          <Image
            style={styles.right}
            source={require('../../../assets/static/right.png')}
          />
        </ListItem.Title>
      </ListItem>

      <ListItem>
        <ListItem.Content style={styles.center}>
          <ListItem.Title>注销账号</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default MySetting;

const styles = StyleSheet.create({
  center: {alignItems: 'center'},
  mb8: {
    marginBottom: 8,
  },
  right: {width: 8, height: 12},
});
