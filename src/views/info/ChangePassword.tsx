/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Space } from 'antd'
import type { FormInstance } from 'antd'

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false)
  const values = Form.useWatch([], form)
  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      }
    )
  }, [values])

  return (
    <Button type="primary" htmlType="submit">
      提交保存
    </Button>
  )
}
export default function App() {
  const [form] = Form.useForm()
  return (
    <>
      <h1 className="text-[20px] text-[#333333] font-semibold mb-5">修改密码</h1>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item name="oldpwd" label="旧密码" className="w-[500px]" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="newpwd" label="新密码" className="w-[500px]" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="checkpwd"
          label="确认密码"
          className="w-[500px]"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form} />
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}
