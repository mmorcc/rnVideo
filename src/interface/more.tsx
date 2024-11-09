/*
 * @Author: 刘利军
 * @Date: 2024-11-07 11:49:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 11:50:32
 * @Description:
 * @PageName:
 */
export type MoreProductList = Array<MoreProductListItem>;

export interface MoreProductListItem {
  title: string;
  subhead: string;
  downloadUrl: string;
  logoUrl: string;
}
