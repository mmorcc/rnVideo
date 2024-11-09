/*
 * @Author: 刘利军
 * @Date: 2024-11-07 19:46:50
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 19:48:14
 * @Description: 
 * @PageName: 
 */
export type FeedBackList = Array<FeedBackListItem>;
export interface FeedBackListItem {
  content: string;
  createTime: string;
  creator: number;
  id: number;
  linkType: string;
}
