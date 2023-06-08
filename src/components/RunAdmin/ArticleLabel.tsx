import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Form, Space, InputNumber } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.section`
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
    width: 6.25rem;
    height: 2.5rem;
  }

  /* 移动到增加按钮上面时触发的hover效果 */
  .ant-form-item-control-input-content:hover .ant-btn {
    border: 1px solid #955ce6;
    color: #955ce6;
  }

  /* 超出费用比例计数器 */
  .overFee {
    margin-left: 4rem;
    width: 6.4rem;
  }
`

const App: React.FC = () => (
  <Wrapper>
    <Form name="dynamic_form_nest_item" style={{ maxWidth: 600 }} autoComplete="off">
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
                  name={[name, 'first']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                >
                  {/* 文字说明 */}
                  <div className="h-10 leading-10">
                    <span>时间范围（分钟）：</span>
                    <span className="float-right">超时费用比例：</span>
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
                添加一项
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  </Wrapper>
)

export default App
