/*
 * @Author: 刘利军
 * @Date: 2024-11-06 18:41:36
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 12:57:49
 * @Description:
 * @PageName:
 */
import {MoreProductList} from '../interface';
import {get} from '../utils';

// 更多产品
export const getMoreProductList = () => {
  return get<MoreProductList>('/moreProduct/pageList');
};
