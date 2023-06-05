/* eslint-disable no-console */
import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/views/Home'
import Login from '@/views/Login'
// 如何提取其它组件的props类型
// React.ComponentProps<T>
// 对于自定义组件/第三方组件 我们时使用typeof计算组件类型后提取 如Bar
// 对于内置的jsx元素的类型 我们直接使用标签名字符串来计算，如div

export default function App() {
  return (
    <div>
      {/* <h1>重新测试</h1>
      <h1>重新测试git提交规范</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}
