/*
 * @Author: 刘利军
 * @Date: 2024-11-07 14:14:09
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 15:02:40
 * @Description:
 * @PageName:
 */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {CumulativeWithdrawalsApi} from '../../../services';

const Cumulative: FC<{type: number}> = ({type}) => {
  const [money, setMoney] = useState(188880);
  useEffect(() => {
    const getCumulativeData = async () => {
      const res = await CumulativeWithdrawalsApi({
        type,
      });
      if (res.code === 0) {
        setMoney(res?.data || 0);
      }
    };
    getCumulativeData();
  }, [type]);

  return (
    <View style={styles.cumulative}>
      <Text style={styles.text}>累计成功提现</Text>
      <Text style={{...styles.text, ...styles.money}}>
        {type === 1 ? money : money / 10000}
      </Text>
      <Text style={styles.text}>元</Text>
    </View>
  );
};

export default Cumulative;

const styles = StyleSheet.create({
  cumulative: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    padding: 12,
  },
  text: {
    fontSize: 16,
  },
  money: {
    paddingHorizontal: 2,
    color: '#F65B12',
  },
});
