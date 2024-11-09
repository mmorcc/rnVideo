/*
 * @Author: 刘利军
 * @Date: 2024-11-06 20:46:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 14:45:04
 * @Description: KeFu
 * @PageName:
 */
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WithdrawalExchange from '../WithdrawalExchange';

const ExchangeRecord: FC<
  NativeStackScreenProps<any, 'ExchangeRecord'>
> = () => {
  return <WithdrawalExchange type={3} />;
};

export default ExchangeRecord;
