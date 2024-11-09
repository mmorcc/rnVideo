/*
 * @Author: 刘利军
 * @Date: 2024-11-05 20:28:39
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-06 13:33:10
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
import { setLoginData } from '../../../core/hooks';
import { testLoginApi } from '../../../services';
import { st } from '../../login/styles';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const Invite = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()
  return (
    <ScrollView 
    >
      <View style={[st.colCenter,st.redBg,st.flex]}>

      <LinearGradient
      style={[st.colCenter,st.flex1]}
        colors={['#FFC369', '#eee']} // 渐变色数组
        locations={[0, 0.5]}
      >
        <View style={[st.rowLayout, st.rowCenter, st.flex, st.mh40, st.mt40]}>
          <Image
            style={[styles.head]}
            source={require('../../../assets/static/invite/head.png')} />
          <View style={[st.colLayout, st.flex1]}>
            <Text style={[styles.infoText, st.ml10]}>
              昵称：123123
            </Text>
            <Text style={[styles.infoText, st.ml10]}>
              ID：123123
            </Text>
          </View>
          <Text style={[styles.tuanzhang, st.ml10]}>
            成为团长
          </Text>

        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[st.mt10,st.mh20, { width: ScreenWidth - 120, alignItems: "center", height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}
          colors={['#FFC369',  '#FFF']} // 渐变色数组
        >
          <View style={[st.rowLayout, st.rowCenter, st.jCenter, st.flex, st.mh20]}>
            <Text style={[st.text12, { color: "#CA6A26" }, st.flex1, st.mt10]}>
              加入交流群，学习赚钱技巧~
            </Text>
            <Text style={[styles.tuanzhang,  { backgroundColor: "#F63F3F", color: "#FFFFFF" }, st.mt10]}>
              我要加群
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          style={[ { width: ScreenWidth - 80, alignItems: "center",  borderRadius: 10 }]}
          colors={['#FA996C', '#FFFFFF', '#FFF']} // 渐变色数组
          locations={[0, 0.2, 1]}
        >
          <View style={[{backgroundColor:"#F4F4F4"},st.mt40,st.flex1,st.colLayout,{width:ScreenWidth-100}]}>
          <View style={[st.colLayout, st.flex]}>
            <Text style={[st.text14, { color: "#000" }, st.tCenter, st.mt10]}>
              活跃人数
            </Text> 
            <Text style={[st.text14, { color: "#000" ,fontSize:20}, st.tCenter, st.mt10]}>
              0
            </Text>
          </View>
          <View style={[st.rowLayout, st.rowCenter, st.jCenter, st.flex, st.mh20]}>
            <View style={[st.divider]} />
            <Text style={[st.text12, { color: "#000" ,maxHeight:30,flex:1}, st.flex1,st.ml10]}>
            昨日邀请(人)
            </Text>
            <View style={[st.divider]} />
            <Text style={[st.text12, { color: "#000" ,maxHeight:30,flex:1}, st.flex1,st.ml10]}>
            昨日邀请(人)
            </Text>
            <View style={[st.divider]} />
            <Text style={[st.text12,  { color: "#000" ,maxHeight:30,flex:1}, st.flex1,st.ml10]}>
            昨日邀请(人)
            </Text>
          </View>
          
          <View style={[st.rowLayout, st.rowCenter, st.jCenter, st.flex, st.mh20,st.mb20]}>
            <Text style={[st.text12, { color: "#000" ,maxHeight:30,flex:1},st.tCenter, st.flex1,st.ml10]}>
            +0
            </Text>
            <Text style={[st.text12, { color: "#000" ,maxHeight:30,flex:1},st.tCenter, st.flex1,st.ml10]}>
            +0
            </Text>
            <Text style={[st.text12,  { color: "#000" ,maxHeight:30,flex:1},st.tCenter, st.flex1,st.ml10]}>
            +0
            </Text>
          </View>
          </View>
         
          <Text style={[styles.tuanzhang, st.mt10, {
            textAlign: "center",
            minHeight: 30, backgroundColor: "#F65B12", color: "#FFFFFF", width: ScreenWidth - 180,
          },st.mb20,st.text16,
          st.jCenter,  st.mt10]}>
            立即邀请
          </Text>
        </LinearGradient>

        <View style={[st.mt10,st.flex,st.rowLayout,st.rowCenter,st.mh40,{borderRadius:10,backgroundColor:"#FFFFFF",minHeight:50}]}>
          <Text style={[st.text16,  { color: "#000" ,maxHeight:30}, st.ml10]}>
            邀请钱包
            </Text>
            <Text style={[st.text12,  { color: "#F65B12",backgroundColor:"#FA996C" ,maxHeight:30,paddingHorizontal:5}, st.ml10]}>
            今日已赚：￥0
            </Text>
            <View style={[st.flex1]}/>
            <Text style={[st.text16,  { color: "#000" ,maxHeight:30}, st.ml10]}>
            ￥0
            </Text>
            <Image
            style={[st.icon]}
            source={require('../../../assets/static/right.png')} />
        </View>
        <View style={[st.mt10,st.flex,st.rowLayout,st.rowCenter,st.mh40,{borderRadius:10,backgroundColor:"#FFFFFF",minHeight:50}]}>
          <Text style={[st.text16,  { color: "#000" ,maxHeight:30}, st.ml10]}>
          我的圈子
            </Text>
         
            <View style={[st.flex1]}/>
            <Text style={[st.text16,  { color: "#000" ,maxHeight:30}, st.ml10]}>
            AD
            </Text>
            <Image
            style={[st.icon]}
            source={require('../../../assets/static/right.png')} />
        </View>
      </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Invite;

const styles = StyleSheet.create({
  head: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  infoText: {
    fontSize: 14,
    width: "auto",
    color: '#FFF',
  },
  tuanzhang: {
    fontSize: 14,
    alignSelf: "center",
    width: "auto",
    color: '#8F4E00',
    backgroundColor: "#FFE250",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});