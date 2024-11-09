/*
 * @Author: 刘利军
 * @Date: 2024-11-05 20:28:39
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 20:47:22
 * @Description:
 * @PageName:
 */

import {
  StyleSheet, requireNativeComponent,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  DrawerLayoutAndroid,
  ImageBackground,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import React, { useState } from 'react';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import { Button } from '@rneui/themed';
import { setLoginData } from '../../core/hooks';
import { testLoginApi } from '../../services';
import { st } from './styles';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setCheck] = useState(false);
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={['#FFC369', '#ffffff', '#ffffff']} // 渐变色数组
      >

        <View style={styles.box}>
          <View style={st.flex2} />
          <View style={[st.flex, st.flex1,st.colCenter,st.colLayout]}>
            <View style={[st.rowLayout, st.flex, st.rowCenter, st.mh60]}>
              <Button
                buttonStyle={styles.btn}
                onPress={async () => {
                  // setLoading(true);
                  console.log('start login');
                  // const res = await testLoginApi();
                  // console.log('res', res);
                  // setLoginData(res.data);
                  // alert(JSON.stringify(res.data))
                  // setLoading(false);
                  navigation.navigate("main")
                }}>
                <Image
                  style={styles.wechat}
                  source={require('../../assets/static/wechat.png')} />
                微信授权登录
              </Button>
            </View>

            <View style={[st.rowLayout, st.flex, st.aTop,  st.mt20, st.mh60]}>
              <TouchableOpacity
                onPress={()=>{
                  setCheck(!isChecked);
                }}
                style={styles.checkbox}>
              <Image
                style={styles.checkbox}
                source={!isChecked?require('../../assets/static/checkbox.png'):require('../../assets/static/checkboxselect.png')} />
                </TouchableOpacity>
              <Text style={[styles.infoText, st.ml10]}>
                为保障您的个人隐私权益，请在登陆前仔细阅读《隐私政策》和《用户服务协议》
              </Text>
            </View>
          </View>

        </View>
        <View style={[st.shadowedView, styles.imgDiv]}>
          <Image
            style={[styles.img]}
            source={require('../../assets/static/logo.png')} />
        </View>
      </LinearGradient>


    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imgDiv: {

    marginTop: -ScreenHeight + 150,
  },
  box: {
    marginTop: 200,
    height: ScreenHeight - 200,
    width: ScreenWidth,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btn: {
    width: ScreenWidth - 100,
    height: 40,
    alignSelf: "center",
    borderRadius: 40,
    backgroundColor: "#F65B12",
  },
  flex1: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  checkbox: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  wechat: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
  titleView: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 12,
    alignSelf: "center",
    width: ScreenWidth - 160,
    color: '#8F8F8F',
  },
  tInput: {
    width: ScreenWidth - 80,
    height: 45,
    marginTop: 35,
  },
  loginTouch: {
    marginTop: 60,
    width: ScreenWidth - 80,
    borderRadius: 30
  },
  loginBtn: {
    alignItems: "center",
    height: 45,
    width: ScreenWidth - 80,
    borderRadius: 30
  },
});
