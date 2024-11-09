/*
 * @Author: 刘利军
 * @Date: 2024-11-07 10:09:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:11:58
 * @Description:
 * @PageName:
 */
import {useEffect, useState} from 'react';
import {testLoginApi} from '../../services';
import {LoginUser} from '../../interface';

let loginData: LoginUser | undefined;
export const getLoginData = () => {
  return loginData;
};
export const setLoginData = (data: LoginUser | undefined) => {
  loginData = data;
};

export function useLoginData() {
  const [data, setData] = useState<LoginUser | undefined>(undefined);
  const getLoginUser = async () => {
    const res = await testLoginApi();
    setLoginData(res.data);
    setData(res.data);
  };
  useEffect(() => {
    if (!getLoginData()) {
      getLoginUser();
    }
  }, []);

  if (getLoginData()) {
    return {
      token: getLoginData()?.token,
      userInfo: getLoginData()?.userInfo,
    };
  }

  return {
    token: data?.token,
    userInfo: data?.userInfo,
  };
}
