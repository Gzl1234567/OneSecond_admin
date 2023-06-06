import React from 'react'
import styled from "styled-components";
import { Input, Select, Button, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { RedoOutlined } from '@ant-design/icons';

// 书写全局样式
const Wrapper = styled.div`
  /* input框的样式 */
  .ant-input {
    width: 12.5rem;
    height: 2.5rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    display: inline-block;
    padding: .25rem .6875rem;
    color: #333333;
    font-size: .875rem;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: .0625rem solid #d9d9d9;
    border-radius: .25rem;
    transition: all 0.3s;
    margin-right: .625rem;
  }

  /* 下拉菜单的样式 */
  .ant-select {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-top-width: 1.02px;
    border-radius: 4px;
    outline: none;
    height: 2.5rem;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    vertical-align: bottom;
  }

  /* 修改下拉框内部的样式 */
  .ant-select-selector {
    border: none !important;
    height: 100% !important;
  }

  /* 按钮的样式 */
  .ant-btn {
    height: 2.5rem;
    border-color: #d9d9d9;
    width: 7.5rem;
  }

  /* 分割线的样式 */
  .ant-divider {
    border-color: #e8e8e8 !important;
  }

  /* 刷新按钮的样式 */
  .myWidth {
    width: 2.5rem !important;
  }

  /* 边框的样式 */
  .css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table-thead >tr>th, .css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table-thead >tr>td,.css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table.ant-table-bordered >.ant-table-container,.ant-table-tbody>tr>td  {
    border:1px solid#e8e8e8 !important;
    word-wrap: break-word;
    border-spacing: 0;
    font-weight: 400;
  }
`
interface DataType {
  key: React.Key;
  numbering: string;
  orderUser: number;
  orderMoney: string;
  orderMessage: string;
  condition: React.ReactNode
  afterSale: string;
  time: string;
  operate: React.ReactNode
  orderIndex: string
  appMoney: string
  proxyMoney: string
  rideMoney: string
  desciption: string
  data: string
}

interface IProps {
  choose: boolean
}

const data: DataType[] = [];

const SearchResult:React.FC<IProps> = (props) => {
  const columns: ColumnsType<DataType> = props.choose ? [
    {
      title: '编号',
      dataIndex: 'numbering',
    },
    {
      title: '下单用户',
      dataIndex: 'orderUser',
    },
    {
      title: '下单金额',
      dataIndex: 'orderMoney',
    },
    {
      title: '下单信息',
      dataIndex: 'orderMessage',
    },
    {
      title: '状态',
      dataIndex: 'condition',
    },
    {
      title: '售后',
      dataIndex: 'afterSale',
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operate',
    },
  ] : [
    {
      title: '订单编号',
      dataIndex: 'orderIndex',
    },
    {
      title: '平台收入',
      dataIndex: 'appMoney',
    },
    {
      title: '代理收入',
      dataIndex: 'proxyMoney',
    },
    {
      title: '骑手收入',
      dataIndex: 'rideMoney',
    },
    {
      title: '描述',
      dataIndex: 'desciption',
    },
    {
      title: '时间',
      dataIndex: 'data',
    },
  ];

  return <Wrapper>
    {/* 搜索的条件 */}
    <div className='mt-6'>
      {props.choose && <Input placeholder="用户编号" />}
      <Input placeholder='订单编号'/>
      {props.choose && <Input placeholder='骑手编号'/>}
      {props.choose && <Input placeholder='用户手机号'/>}
      {props.choose && <Select
        placeholder='状态'
        style={{ width: 200 }}
        options={[
          { value: '状态：全部', label: '状态：全部' },
          { value: '取消订单', label: '取消订单' },
          { value: '交易关闭', label: '交易关闭' },
          { value: '待付款', label: '待付款' },
          { value: '待接单', label: '待接单' },
          { value: '配送中', label: '配送中' },
          { value: '待确认完成', label: '待确认完成' },
          { value: '订单已完成', label: '订单已完成' },
        ]}
      />}
      {!props.choose && <Input placeholder='代理编号'/>}
      {!props.choose && <Input placeholder='城市编号'/>}
      {!props.choose && <Input placeholder='描述'/>}

    </div>
    {/* 搜索按钮 */}
    <div className='mt-6'>
      <Button type='default' className='mr-2'>取消</Button>
      <Button type='primary'>搜索</Button>
    </div>
    {/* 分割线 */}
    <Divider />
    {/* 刷新按钮 */}
    <div className='h-10'>
      <Button type="default" icon={<RedoOutlined />} className='myWidth float-right' />
    </div>
    {/* 表单部分 */}
    <Table
      className='mt-6'
      bordered
      rowSelection={{
        type: 'checkbox'
      }}
      columns={columns}
      dataSource={data}
    />
  </Wrapper>
}

export default SearchResult
