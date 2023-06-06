/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-named-as-default
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

type ResponseData = {
  code: number
  msg: string
  data: {
    adminNo: string
    mobileNumber: string
    adminName: string
    realName: string
    avatarUrl: object
  }
}
export const getInfo = async () => {
  const res = <AxiosPromise<ResponseData>>request.get('/admin/info')
  return (await res).data.data
}

/**
 * 获取代理列表数据
 */
export type IListQueryParams = {
  current?: number
  pageSize?: number
}
export type ResponseDataProxy = {
  code: number
  msg: string
  data: {
    pageSize: number
    current: number
    count: number
    totalPages: number
    data: {
      agentNo: string
      agentAccount: string
      mobileNumber: string
      realName: string
      status: number
      createTime: string
      updateTime: string
      defaultPwd: string
      updatedBy: string
    }[]
  }
}

export const getUserList = async (params?: IListQueryParams) => {
  const res = request.get('/admin/agent/list', {
    params
  }) as AxiosPromise<ResponseDataProxy>
  return (await res).data
}

