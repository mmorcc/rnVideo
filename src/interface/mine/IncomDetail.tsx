/*
 * @Author: 刘利军
 * @Date: 2024-11-07 08:28:48
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:21:57
 * @Description:
 * @PageName:
 */
export type IncomDetailList = Array<IncomDetailListItem>;

export type IncomDetailListItem = {
  recordName: string;
  consumeType: number;
  createTime: string;
  remark: string;
  amount: string;
  recordLogo: string;
  payGoldNum: string;
};
