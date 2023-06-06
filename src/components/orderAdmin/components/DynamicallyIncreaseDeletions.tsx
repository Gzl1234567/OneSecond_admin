import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import {Button, Form, Space, InputNumber, Input} from 'antd';
import styled from 'styled-components';

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
    border: 1px solid #955CE6;
  }

  /* 删除按钮的样式 */
  .anticon-delete {
    margin-left: 1.25rem;
    width: 2rem;
    height: 2rem;
    background: #ff4d4f;
    border-radius: 100vw;
    color: white;
    line-height: 2rem;
    padding: .5625rem;
    font-size: 0.875rem;
    border: none;
    position: absolute;
    bottom: 0;
    right: -4rem;
  }

  /* 增加一项按钮的宽高 */
  .ant-btn-default {
    width: 6.25rem;
    height: 2.5rem;
  }

  /* 移动到增加按钮上面时触发的hover效果 */
  .ant-form-item-control-input-content:hover .ant-btn {
    border: 1px solid #955CE6;
    color: #955CE6;
  }

  /* 超出费用比例计数器 */
  .overFee {
    margin-left: 4rem;
    width: 6.4rem;
  }

  /* 取消订单配置文字 */
  .overText {
    font-size: 24px;
    font-weight: 500;
  }

  /* input输入框的样式 */
  .ant-input {
    width: 27.3rem;
    height: 2.5rem;
  }
`;

interface IProps {
  troggle?: boolean
}

const DID: React.FC<IProps> = (props) => <Wrapper>
    {/* 主体内容 */}
    <Form
      style={{maxWidth: 600}}
      autoComplete='off'
    >
      <Form.List name='users'>
        {(fields, {add, remove}) => (
          <>
            {fields.map(({key, name,}) => (
              <Space key={key}>
                {/* 拥有多个选择的情况 */}
                {props.troggle
                ?
                <div className='relative'>
                  <Form.Item
                    name={[name, 'first']}
                    rules={[{required: true, message: 'Missing first name'}]}
                  >
                      {/* 文字说明 */}
                      <div className='h-10 leading-10'>
                        <span>时间范围（分钟）：</span>
                        <span className='float-right'>超时费用比例：</span>
                      </div>
                      {/* 时间范围计数器 */}
                      <InputNumber min={0} max={100} defaultValue={0} />
                      {/* ~ */}
                      <span className='ml-2 mr-2'>~</span>
                      <InputNumber min={0} max={100} defaultValue={0} />
                      {/* 超时费用比例计数器 */}
                      <InputNumber min={-100} max={100} defaultValue={0} className='overFee' />
                  </Form.Item>
                  <DeleteOutlined onClick={() => {
                    remove(name);
                  }} />
                </div>
                :
                <div className='relative'>
                  <Form.Item
                    name={[name, 'first']}
                    rules={[{required: true, message: 'Missing first name'}]}
                  >
                      <Input className='w-96' />
                  </Form.Item>
                  <DeleteOutlined onClick={() => {
                    remove(name);
                  }} />
                </div>}
              </Space>
            ))}
            <Form.Item>
              {/* 添加一项的按钮 */}
              <Button type='default' onClick={() => {
                add();
              }}>
              添加一项
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
	</Wrapper>;

export default DID;
