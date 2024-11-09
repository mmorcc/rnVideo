/*
 * @Author: 刘利军
 * @Date: 2024-11-07 10:09:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:34:22
 * @Description:
 * @PageName:
 */

import {FeedBackList, IncomDetailList, params, WalletInfo} from '../interface';
import {WithdrawalExchangeList} from '../interface';
import {get, post} from '../utils';

// 查询钱包
export const getWalletInfoApi = (data: {type: number}) => {
  return get<WalletInfo>('/userWallet/getWallet', data);
};

// 常见问题列表查询
export const QuestionsListApi = (data: any) => {
  return get('/standardQuestion/pageList', data);
};
// 意见反馈提交
export const FeedbackSubmissionApi = (data: any) => {
  return post('/feedback/save', data);
};
// 获取意见反馈列表
export const GetFeedbackListApi = (data: any) => {
  return get<FeedBackList>('/feedback/pageList', data);
};
// 注销账号
export const CancelYourAccountApi = (data: any) => {
  return get('/close', data);
};
// 获取客服或加群二维码
export const GetQRCodeApi = (type: number) => {
  return get('/qrCode/getByType', {type});
};
// 提现或兑换累计
export const CumulativeWithdrawalsApi = (data: any) => {
  return get('/payOrder/accumulation', data);
};
// 提现或兑换列表
export const WithdrawalExchangeListApi = (data: any) => {
  return get<WithdrawalExchangeList>('/payOrder/pageList', data);
};
// 收入明细列表
export const RevenueBreakdownApi = (data: {tag: number} & params) => {
  return get<IncomDetailList>('/payOrder/pageList', data);
};

//聚成课堂管理
export const GetClusterClassroomApi = (data?: any) => {
  return get('/clusterClassroom/pageList', data);
};

//查询用户信息
export const getUserInfoApi = (data?: any) => {
  return get('/sys/user/detail', data);
};

//提现
export const GetPayOrderWithdrawApi = (data?: any) => {
  return post('/payOrder/withdraw/save', data);
};

//提现需要审核更新状态
export const GetPayOrderUpdateStatusApi = (data?: any) => {
  return get('/payOrder/update/status', data);
};

//	退出
export const loginOutApi = (data?: any) => {
  return post('/loginOut', data);
};

//	修改用户信息
export const UpdateUserInfoApi = (data: any) => {
  return post('/sys/user/updateUserInfo', data);
};
