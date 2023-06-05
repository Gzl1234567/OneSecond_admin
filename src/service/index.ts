/* eslint-disable import/prefer-default-export */
import request from '@/service/request'
import { AxiosPromise } from 'axios'
// /**
//  * 验证码接口
//  */
type ApiResponse = {
  code: number
  msg: string

  data: { svg: string; no: string }
}

// export const getLogin = () => request.get<AxiosPromise<ApiResponse>>('/api/admin/verifycode')
export const getLogin = async () => {
  const res = <AxiosPromise<ApiResponse>>request.get('/admin/verifycode')
  return (await res).data.data
}
interface LoginParams {
  adminName: string
  adminPwd: string
  verifyCode: string
  no: string
}
type ILoginResponseData = { code: number; msg: string }
export const LoginAdmin = (pararms: LoginParams): AxiosPromise<ILoginResponseData> =>
  request.post('admin/login', pararms)

// interface ILogin {
//   adminName: string;
//   adminPwd: string;
//   verifyCode: string;
//   no: string;
// }
// type ILoginResponseData = { code: number; msg: string };

// export const GetLogin = (params: ILogin): AxiosPromise<ILoginResponseData> => {
//   const res = request.post('/admin/login', params);
//   return res;
// };
// /**
//  * 验证码接口
//  */
// type IVerifycodeResponseData = {
//   code: number;
//   msg: string;
//   data: { svg: string; no: string };
// };
// export const GetVerifycode = async () => {
//   const res = <AxiosPromise<IVerifycodeResponseData>>request.get('/admin/verifycode');
//   return (await res).data.data;
// };
// export default {};
