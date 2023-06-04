/* eslint-disable no-console */
import React from 'react'
import { useRequest } from 'ahooks'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import Logo from '@/assets/logo.svg'
import Login from '@/assets/images/login.png'
import { getLogin } from '@/service/index'

function App() {
  const { data: loginData } = useRequest(getLogin)
  console.log(loginData)
  const loginStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 1px'
  }
  return (
    <div className="w-[800px] h-[666px] m-auto">
      <div className="mt-12 flex justify-center items-center">
        <img src={Logo} alt="" className="w-[45px] h-[30px]" />
        <div className=" text-[26px] ml-5 text-[#333333]">一秒快送后台管理系统</div>
      </div>
      <div className="w-full h-[500px] mt-5 flex rounded-xl" style={loginStyle}>
        <div className="w-[400px] h-full p-[40px]">
          <img src={Login} alt="" className="w-[360px] h-[360px]" />
        </div>
        <div className="p-[40px] w-[400px]">
          <div>账号密码登录</div>
          <Form
            name="normal_login"
            className="login-form w-full"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
