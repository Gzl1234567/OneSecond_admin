/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LeftOutlined } from '@ant-design/icons'
import { Form, Cascader, InputNumber, Select, Radio, Button } from 'antd'
import options from './AddData'
import { AddCitys } from '../../service/index'

const List = styled.div`
  .ant-input-number {
    width: 8rem;
    height: 2.375rem;
    text-align: left;
    background-color: transparent;
    border-radius: 4px;
    outline: 0;
    transition: all 0.3s linear;
  }

  .newCity {
    padding: 16px 24px;
  }

  .ant_edit {
    padding: 0 50px;
  }

  .ant-form-item-row {
    display: block !important;
  }

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
  }
`

const AddCity: React.FC = () => {
  const [disabled, setDisabled] = useState(true)
  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  const realName = useState('')

  const data = [
    {
      current: 1,
      pageSize: 20,
      realName
    }
  ]

  useEffect(() => {
    AddCitys(data)
      .then((res) => {
        console.log('res', res)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  return (
    <List>
      <div className="flex newCity">
        <LeftOutlined className="text-[16px] mr-[16px]" />
        <div className="text-[20px] leading-[32px]">新增城市</div>
      </div>
      <div className="w-[600px] ant_edit">
        <Form
          initialValues={{
            deliver: 0,
            take: 0,
            Buy: 0,
            agentDeliver: 0,
            agentTake: 0,
            agentBuy: 0,
            startingPrice: 0
          }}
        >
          <Form.Item
            name="radio-button"
            className="City leading-[40px]"
            label="运营城市"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Cascader size="large" options={options} />
          </Form.Item>
          <Form.Item
            className="City leading-[40px]"
            label="平台抽点"
            extra="输入小于1的数值"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Form.Item label="帮我送">
              <Form.Item name="deliver" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="帮我取">
              <Form.Item name="take" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="帮我买">
              <Form.Item name="Buy" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="代理抽点"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Form.Item label="帮我送">
              <Form.Item name="agentDeliver" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="帮我取">
              <Form.Item name="agentTake" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="帮我买">
              <Form.Item name="agentBuy" noStyle>
                <InputNumber<string> min="0" max="1.00" step="0.01" />
              </Form.Item>
            </Form.Item>
          </Form.Item>

          <Form.Item label="起步价">
            <Form.Item name="startingPrice" noStyle>
              <InputNumber<string> min="0" max="1.00" step="1" />
            </Form.Item>
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="计价规则"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Select
              defaultValue="0"
              style={{ width: 500 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="重量标签"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Select
              defaultValue="0"
              style={{ width: 500 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="物品标签组"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Select
              defaultValue="0"
              style={{ width: 500 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="代理人"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              value={realName}
              options={[
                {
                  value: 'jack',
                  label: 'Jack'
                },
                {
                  value: 'lucy',
                  label: 'Lucy'
                },
                {
                  value: 'tom',
                  label: 'Tom'
                }
              ]}
            />
          </Form.Item>

          <Form.Item
            className="City leading-[40px]"
            label="运营状态"
            rules={[{ required: true, message: 'Please pick an City!' }]}
          >
            <Radio defaultChecked={false} disabled={disabled}>
              Disabled
            </Radio>
            <Radio defaultChecked disabled={disabled}>
              Disabled
            </Radio>
            <br />
            <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
              Toggle disabled
            </Button>
          </Form.Item>
        </Form>
      </div>
    </List>
  )
}

export default AddCity
