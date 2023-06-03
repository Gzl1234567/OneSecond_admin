/* eslint-disable no-console */
import React from 'react'
// import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import Home from '@/views/Home'
import Bar from '@/components/bar'
// 如何提取其它组件的props类型
// React.ComponentProps<T>
// 对于自定义组件/第三方组件 我们时使用typeof计算组件类型后提取 如Bar
// 对于内置的jsx元素的类型 我们直接使用标签名字符串来计算，如div
const a: React.ComponentProps<typeof Bar> = { a: 1, c: {}, d: [1, 2, 3] }
console.log(a.b)

export default function App() {
  return (
    <div>
      <Bar a={1} c={{ width: 100 }} d={[1, 2, 3]} />
      <h1>重新测试</h1>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router> */}
    </div>
  )
}
