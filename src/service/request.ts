import axios from 'axios'

// const headers = {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': 'http://api.cc0820.top:8888',
//   'Access-Control-Allow-Credentials': 'true',
//   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
// }

const request = axios.create({
  baseURL: '/api'
})

// 接口定义
export default request
