/* eslint-disable no-console */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import Home from '@/views/Home'
// import Login from '@/views/Login'
import RouterConfig from '@/router/index'
import Auth from '@/router/Auth'

export default function App() {
  return (
    <div>
      {/* <h1>重新测试</h1>
      <h1>重新测试git提交规范</h1> */}
      <BrowserRouter>
        <Auth value={['/home']}>
          <RouterConfig />
        </Auth>
      </BrowserRouter>
    </div>
  )
}
