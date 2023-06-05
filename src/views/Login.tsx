/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import styled from 'styled-components'
import { LockOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { getLogin, LoginAdmin } from '@/service/index'
import Logo from '@/assets/logo.svg'
import LoginImg from '@/assets/images/login.png'
import store from 'storejs'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
    float: left;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  .ant-input-affix-wrapper {
    padding: 10px;
  }
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Login() {
  // const { data: img } = useRequest(getLogin)
  // console.log(img)
  const navgigate = useNavigate()
  // 登录接口
  const { run: RunLogin } = useRequest(LoginAdmin, {
    manual: true,
    onSuccess({ data }) {
      if (data.code === 200) {
        message.success('登录成功')
        navgigate('/home')
      } else {
        message.error(data.msg)
      }
    }
  })
  // 获取验证图片
  const [verifyCodeImg, setVerifyCodeImg] =
    useState<Awaited<ReturnType<typeof getLogin>>['svg']>('')
  // console.log(verifyCodeImg)

  // 登录参数
  const [no, setNo] = useState('')
  useEffect(() => {
    getLogin().then((res) => {
      setVerifyCodeImg(res.svg)
      setNo(res.no)
      // console.log(res)
    })
  }, [])
  // 获取验证码
  const getCodeImg = () => {
    getLogin().then((res) => {
      // console.log(res.svg)
      setVerifyCodeImg(res.svg)
    })
  }
  const onFinish = (values: any) => {
    const { password, username, code } = values
    store.set('token', values)
    RunLogin({
      adminName: username,
      adminPwd: password,
      no,
      verifyCode: code
    })
  }
  return (
    <Container>
      <div>
        <Title>
          <img className="h-[30px]" src={Logo} alt="" />
          <div className="font-semibold text-[26px] ml-[20px]">一秒快送后台管理系统</div>
        </Title>
        <div className="form w-[800px] h-[500px] rounded-[8px] mt-[40px] flex justify-between items-start">
          <div className="left w-[400px] h-[500px] p-[40px] flex items-center justify-center box-border">
            <img className="w-full h-full" src={LoginImg} alt="正在加载图片" />
          </div>
          <div className="right p-[40px] box-border">
            <h1 className="text-[24px] w-full text-center mb-[50px]">账号密码登录</h1>
            <Form
              name="normal_login"
              className="login-form w-[300px]"
              onFinish={onFinish}
              initialValues={{
                remember: true
              }}
            >
              <Form.Item
                className="h-[50px]"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入账号'
                  }
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="管理员账号"
                />
              </Form.Item>
              <Form.Item
                className="h-[50px]"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码'
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="管理员密码"
                />
              </Form.Item>
              <Form.Item
                className="h-[50px]"
                name="code"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码'
                  }
                ]}
              >
                <div className="flex">
                  <Input
                    prefix={<SafetyCertificateOutlined className="site-form-item-icon" />}
                    type="code"
                    placeholder="输入验证码"
                  />
                  <img
                    onClick={getCodeImg}
                    src={`data:image/svg+xml;base64,${btoa(verifyCodeImg)}`}
                    alt=""
                    width="150"
                    height="50"
                  />
                </div>
              </Form.Item>

              <Form.Item className="!mt-[60px]">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button w-[300px] !h-[40px]"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="w-full text-center text-[12px] text-[#ccc]">
            Copyright &copy; 2022包小盒All right reserved.
          </div>
          <div className="w-full text-center mt-[10px]">
            浙ICP备19025175号-4 aaa浙公网安备33010602011191号
          </div>
        </div>
      </div>
    </Container>
  )
}
