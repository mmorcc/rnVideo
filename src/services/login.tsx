/*
 * @Author: 刘利军
 * @Date: 2024-11-06 18:13:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:15:41
 * @Description:
 * @PageName:
 */
import {LoginUser} from '../interface/user';
import {post} from '../utils';
export const testLoginApi = async () => {
  return await post<LoginUser>('/login/account', {
    userName: '017396',
    password: '21232F297A57A5A743894A0E4A801FC3',
  });
};
