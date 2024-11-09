export interface LoginUser {
  tag: null;
  token: string;
  userInfo: UserInfo;
}

export interface UserInfo {
  account: string;
  age: null;
  backUrl: null;
  carNo: null;
  carType: null;
  code: string;
  createTime: string;
  fontUrl: null;
  id: number;
  inviteCode: null;
  isDelete: number;
  isPartner: number;
  levelId: number;
  levelName: null;
  loginIp: null;
  loginTime: null;
  nationId: null;
  nationalId: null;
  openId: null;
  password: null;
  pcode: null;
  phone: string;
  photo: string;
  pinviteCode: null;
  platform: number;
  pname: null;
  pphoto: null;
  ratio: string;
  realName: string;
  recordId: null;
  roleId: number;
  roleName: string;
  sex: null;
  status: number;
  totalGoldNum: null;
  userName: string;
  validity: null;
  versionType: number;
}

export interface WalletInfo {
  realAmount?: string;
  realGold?: string;
}
