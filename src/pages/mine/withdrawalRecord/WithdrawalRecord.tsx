/*
 * @Author: 刘利军
 * @Date: 2024-11-06 20:46:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 14:45:47
 * @Description: KeFu
 * @PageName:
 */
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import WithdrawalExchange from '../WithdrawalExchange';

const WithdrawalRecord: FC<
  NativeStackScreenProps<any, 'WithdrawalRecord'>
> = () => {
  return <WithdrawalExchange type={1} />;
};

export default WithdrawalRecord;
