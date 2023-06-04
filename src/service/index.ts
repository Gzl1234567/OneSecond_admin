/* eslint-disable import/prefer-default-export */
import request from '@/service/request'
// import { axr } from 'axios'

interface ApiResponse {
  // 此处的类型定义需要根据实际接口返回的数据结构进行编写
  code: number
  message: string
  data: any
}
export const getLogin = () => request.get<ApiResponse>('/admin/verifycode')
