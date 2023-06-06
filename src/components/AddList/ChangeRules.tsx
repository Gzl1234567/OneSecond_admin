/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { DeleteOutlined, ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space, InputNumber } from 'antd'

const Content = styled.div`
  /* 计数器的样式 */
  .ant-input-number {
    width: 8rem;
    height: 2.375rem;
    text-align: left;
    background-color: transparent;
    border-radius: 4px;
    outline: 0;
    transition: all 0.3s linear;
  }

  /* 移动到计数器上面的hover效果 */
  .ant-input-number:hover {
    border: 1px solid #955ce6;
  }

  /* 删除按钮的样式 */
  .anticon-delete {
    margin-left: 1.25rem;
    min-width: 2rem;
    min-height: 2rem;
    background: #ff4d4f;
    border-radius: 100vw;
    color: white;
    line-height: 2rem;
    position: absolute;
    top: 2.65rem;
    font-size: 0.875rem;
    border: none;
    padding: 9px;
  }

  /* 增加一项按钮的宽高 */
  .ant-btn-default {
    /* width: 6.25rem; */
    height: 2.5rem;
  }

  /* 移动到增加按钮上面时触发的hover效果 */
  .ant-form-item-control-input-content:hover .ant-btn {
    border: 1px solid #955ce6;
    color: #955ce6;
  }

  /* 超出费用比例计数器 */
  .overFee {
    margin-left: 1rem;
    width: 6.8rem;
  }
  .ant-btn {
    height: 40px;
  }
`

export default function ChangeRules() {
  const [form] = Form.useForm()
  const onFinish = () => {
    message.success('Submit success!')
  }
  const onFinishFailed = () => {
    message.error('Submit failed!')
  }
  function goBack() {
    window.history.go(-1)
  }

  return (
    <Content>
      <div>
        <div>
          <div className="flex mb-5 text-xl font-bold">
            <div>
              <ArrowLeftOutlined onClick={goBack} />
            </div>
            <h1 className="ml-5">新增计价规则</h1>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="url"
              label="规则名称:"
              rules={[
                { required: true },
                { type: 'string', warningOnly: true },
                { type: 'string', min: 1 }
              ]}
            >
              <Input placeholder="请输入规则名称" />
            </Form.Item>
            {/* 距离规则 */}
            <Form.Item
              name=""
              label="距离规则:"
              // rules={[
              //   { required: true },
              //   { type: 'number', warningOnly: true },
              //   { type: 'number', min: 1 }
              // ]}
            >
              <Form.List name="long">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }) => (
                      <Space
                        key={key}
                        style={{ display: 'flex', marginBottom: 8 }}
                        align="baseline"
                        className="relative"
                      >
                        <Form.Item
                          // {...restField}
                          name={[name, 'first']}
                          // rules={[{ required: true, message: 'Missing first name' }]}
                        >
                          {/* 文字说明 */}
                          <div className="h-10 leading-10">
                            <span>范围(km):</span>
                            <span className="ml-56">距离单位(km)</span>
                            <span className="ml-10">价格(元)</span>
                          </div>
                          {/* 时间范围计数器 */}
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* ~ */}
                          <span className="ml-2 mr-2">~</span>
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* 超时费用比例计数器 */}
                          <InputNumber min={-100} max={100} defaultValue={0} className="overFee" />
                          <InputNumber min={-100} max={100} defaultValue={0} className="overFee" />
                        </Form.Item>
                        <DeleteOutlined
                          onClick={() => {
                            remove(name)
                          }}
                        />
                      </Space>
                    ))}
                    <Form.Item>
                      {/* 添加一项的按钮 */}
                      <Button
                        type="default"
                        onClick={() => {
                          add()
                        }}
                      >
                        <div className="flex">
                          <PlusOutlined />
                          <p>添加距离规则</p>
                        </div>
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
            {/* 重量规则 */}
            <Form.Item
              name="url"
              label="重量规则:"
              // rules={[
              //   { required: true },
              //   { type: 'string', warningOnly: true },
              //   { type: 'string', min: 1 }
              // ]}
            >
              <Form.List name="weightr">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }) => (
                      <Space
                        key={key}
                        style={{ display: 'flex', marginBottom: 8 }}
                        align="baseline"
                        className="relative"
                      >
                        <Form.Item
                          // {...restField}
                          name={[name, 'second']}
                          rules={[{ required: true, message: 'Missing first name' }]}
                        >
                          {/* 文字说明 */}
                          <div className="h-10 leading-10">
                            <span>范围(kg):</span>
                            <span className="ml-56">重量单位(km)</span>
                            <span className="ml-10">价格(元)</span>
                          </div>
                          {/* 时间范围计数器 */}
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* ~ */}
                          <span className="ml-2 mr-2">~</span>
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* 超时费用比例计数器 */}
                          <InputNumber min={-100} max={100} defaultValue={0} className="overFee" />
                          <InputNumber min={-100} max={100} defaultValue={0} className="overFee" />
                        </Form.Item>
                        <DeleteOutlined
                          onClick={() => {
                            remove(name)
                          }}
                        />
                      </Space>
                    ))}
                    <Form.Item>
                      {/* 添加一项的按钮 */}
                      <Button
                        type="default"
                        onClick={() => {
                          add()
                        }}
                      >
                        <div className="flex">
                          <PlusOutlined />
                          <p>添加重量规则</p>
                        </div>
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
            {/* 添加时间段 */}
            <Form.Item
              name="url"
              label="添加时间段:"
              // rules={[
              //   { required: true },
              //   { type: 'string', warningOnly: true },
              //   { type: 'string', min: 6 }
              // ]}
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }) => (
                      <Space
                        key={key}
                        style={{ display: 'flex', marginBottom: 8 }}
                        align="baseline"
                        className="relative"
                      >
                        <Form.Item
                          // {...restField}
                          name={[name, 'three']}
                          rules={[{ required: true, message: 'Missing first name' }]}
                        >
                          {/* 文字说明 */}
                          <div className="h-10 leading-10">
                            <span>范围:</span>

                            <span className="ml-10">价格(元)</span>
                          </div>
                          {/* 时间范围计数器 */}
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* ~ */}
                          <span className="ml-2 mr-2">~</span>
                          <InputNumber min={0} max={100} defaultValue={0} />
                          {/* 超时费用比例计数器 */}
                          <InputNumber min={-100} max={100} defaultValue={0} className="overFee" />
                        </Form.Item>
                        <DeleteOutlined
                          onClick={() => {
                            remove(name)
                          }}
                        />
                      </Space>
                    ))}
                    <Form.Item>
                      {/* 添加一项的按钮 */}
                      <Button
                        type="default"
                        onClick={() => {
                          add()
                        }}
                      >
                        <div className="flex">
                          <PlusOutlined />
                          <p>添加时间段</p>
                        </div>
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button className="h-10" type="primary" htmlType="submit">
                  提交保存
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  )
}
