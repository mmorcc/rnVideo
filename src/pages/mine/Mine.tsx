/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: 刘利军
 * @Date: 2024-11-05 20:28:39
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:14:13
 * @Description:
 * @PageName:
 */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {ListItem} from '@rneui/themed';
import {useLoginData} from '../../core/hooks/useLoginData';
import {getWalletInfoApi} from '../../services';
import {WalletInfo} from '../../interface';
import {useModal} from 'react-native-modalfy';
import {phoneNumberMask} from '../../utils';

const navList = [
  [
    {
      name: '收入明细',
      path: 'IncomeDetail',
      icon: require('../../assets/static/main/icon1.png'),
    },
    {
      name: '提现记录',
      path: 'WithdrawalRecord',
      icon: require('../../assets/static/main/icon2.png'),
    },
    {
      name: '兑换记录',
      path: 'ExchangeRecord',
      icon: require('../../assets/static/main/icon3.png'),
    },
  ],
  [
    {
      name: '在线客服',
      path: 'CustomerService',
      icon: require('../../assets/static/main/icon4.png'),
    },
    {
      name: '意见反馈',
      path: 'FeedBack',
      icon: require('../../assets/static/main/icon5.png'),
    },
    {
      name: '常见问题',
      path: 'CommonProblem',
      icon: require('../../assets/static/main/icon6.png'),
    },
    {
      name: '我的设置',
      path: 'MySetting',
      icon: require('../../assets/static/main/icon7.png'),
    },
  ],
];

const Me = ({navigation: {navigate}}: any) => {
  const {userInfo} = useLoginData();
  const [walletInfo, setWalletInfo] = useState<WalletInfo>();
  const {openModal} = useModal();

  useEffect(() => {
    if (userInfo) {
      (async () => {
        const res = await getWalletInfoApi({type: 1});
        console.log('getWalletInfoApi res', res);
        setWalletInfo(res.data);
      })();
    }
  }, [userInfo]);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#ffc369', 'rgba(255, 255, 255, 0)']}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.userBox}>
              <Image style={styles.avatar} source={{uri: userInfo?.photo}} />
              <View style={styles.nikeNameBox}>
                <Text style={styles.name}>{userInfo?.userName}</Text>
                <View style={styles.remark}>
                  <Text>ID: {userInfo?.code}</Text>
                  {userInfo?.pcode ? (
                    <>
                      <Text style={{paddingHorizontal: 2}}>|</Text>
                      <Text>上级ID : {userInfo?.pcode}</Text>
                    </>
                  ) : null}
                </View>
              </View>
            </View>

            <LinearGradient
              style={styles.amount}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              locations={[0, 1]}
              colors={['#F65B12', '#FFC369']}>
              <View style={styles.amountBlock}>
                <View>
                  <Text style={{...styles.amountDes, ...styles.amountLabel}}>
                    {walletInfo?.realAmount || '0.00'}
                  </Text>
                  <View style={styles.row}>
                    <Text style={styles.amountDes}>现金余额(元)</Text>
                    <Text style={{...styles.amountDes, ...styles.amountBtn}}>
                      提现
                    </Text>
                  </View>
                </View>
                <View style={styles.border} />
                <View>
                  <Text style={{...styles.amountDes, ...styles.amountLabel}}>
                    {walletInfo?.realGold || '0.00'}
                  </Text>
                  <View style={styles.row}>
                    <Text style={styles.amountDes}>金币数量(个)</Text>
                    <Text style={{...styles.amountDes, ...styles.amountBtn}}>
                      兑换
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.study}>
              <TouchableWithoutFeedback
                style={styles.studyBlock}
                onPress={() => {
                  openModal('QRModal', {type: 1});
                }}>
                <LinearGradient
                  style={styles.studyBlock}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  locations={[0, 1]}
                  colors={['#FFC369', '#F65B12']}>
                  <View style={styles.studyItem}>
                    <Text style={{...styles.amountDes, ...styles.studyTitle}}>
                      加群学习
                    </Text>
                    <Text style={{...styles.amountDes, ...styles.studyDes}}>
                      官方海量技巧教学
                    </Text>
                  </View>
                  <Image
                    style={styles.studyImg}
                    source={require('../../assets/static/jqxx.png')}
                  />
                </LinearGradient>
              </TouchableWithoutFeedback>

              <LinearGradient
                style={styles.studyBlock}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                locations={[0.3, 1]}
                colors={['#F65B12', '#FFC369']}>
                <View style={styles.studyItem}>
                  <Text style={{...styles.amountDes, ...styles.studyTitle}}>
                    聚成课堂
                  </Text>
                  <Text style={{...styles.amountDes, ...styles.studyDes}}>
                    学习如何轻松赚钱
                  </Text>
                </View>
                <Image
                  style={styles.studyImg}
                  source={require('../../assets/static/jckt.png')}
                />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.main}>
            <View style={{...styles.row, paddingBottom: 24}}>
              <View
                style={{
                  borderColor: '#FF6117',
                  marginRight: 6,
                  height: 17,
                  borderLeftWidth: 3,
                }}
              />
              <Text style={{fontSize: 18, fontWeight: 500}}>管理与服务</Text>
            </View>

            {navList.map((nav, index) => {
              return (
                <View key={index} style={styles.list}>
                  {nav.map(item => {
                    return (
                      <ListItem
                        key={item.path}
                        onPress={() => {
                          if (item.path === 'CustomerService') {
                            openModal('QRModal', {type: 2});
                          } else {
                            navigate(item.path);
                          }
                        }}>
                        <Image
                          style={{width: 20, height: 20}}
                          source={item.icon}
                        />
                        <ListItem.Content>
                          <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <Image
                          style={{width: 8, height: 12}}
                          source={require('../../assets/static/right.png')}
                        />
                      </ListItem>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    margin: 10,
  },
  header: {
    height: 400,
  },
  userBox: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 50, height: 50, borderRadius: 50},
  nikeNameBox: {
    paddingLeft: 12,
  },
  name: {
    fontWeight: 600,
    fontSize: 20,
  },
  remark: {
    flexDirection: 'row',
  },
  amount: {
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#fff',
    borderWidth: 0.5,
    marginBottom: 20,
  },
  amountBlock: {
    flexDirection: 'row',
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountLabel: {
    fontSize: 20,
  },
  amountDes: {
    color: '#fff',
    fontSize: 14,
  },
  border: {
    borderColor: '#fff',
    borderWidth: 1,
    height: '50%',
  },
  amountBtn: {
    marginLeft: 4,
    backgroundColor: '#F98047',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  study: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  studyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  studyDes: {
    fontSize: 14,
  },
  studyBlock: {
    borderColor: '#fff',
    borderWidth: 0.2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  studyItem: {
    paddingVertical: 12,
    paddingLeft: 12,
  },
  studyImg: {
    width: 42,
    height: 42,
    marginHorizontal: 4,
  },
  list: {
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});
