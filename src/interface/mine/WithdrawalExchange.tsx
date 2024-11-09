/*
 * @Author: 刘利军
 * @Date: 2024-11-07 14:31:26
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 14:49:09
 * @Description:
 * @PageName:
 */
export type WithdrawalExchangeList = Array<WithdrawalExchangeListItem>;
export interface WithdrawalExchangeListItem {
  recordLogo: string;
  recordName: string;
  payGoldNum: number | string;
  amount: number | string;
  createTime: string;
  status: string;
}
