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
  choose: string
}

const data: DataType[] = [];

const SearchResult:React.FC<IProps> = (props) => {
  const columns: ColumnsType<DataType> = (props.choose === "one" || props.choose === "two") ? [
    {
      title: '编号',
      dataIndex: 'numbering',
    },
    {
      title: '账号',
      dataIndex: 'orderUser',
    },
    {
      title: '手机号',
      dataIndex: 'orderMoney',
    },
    {
      title: '姓名',
      dataIndex: 'orderMessage',
    },
    {
      title: '状态',
      dataIndex: 'condition',
    },
    {
      title: '时间',
      dataIndex: 'afterSale',
    },
    {
      title: '操作',
      dataIndex: 'operate',
    },
  ] : [
    {
      title: '编号',
      dataIndex: 'orderIndex',
    },
    {
      title: '头像',
      dataIndex: 'appMoney',
    },
    {
      title: '昵称',
      dataIndex: 'proxyMoney',
    },
    {
      title: '手机号',
      dataIndex: 'rideMoney',
    },
    {
      title: '地区',
      dataIndex: 'desciption',
    },
    {
      title: '状态',
      dataIndex: 'data',
    },
    {
      title: '时间',
      dataIndex: 'afterSale',
    },
    {
      title: '操作',
      dataIndex: 'operate',
    },
  ];

  return <Wrapper>
    {/* 搜索的条件 */}
    <div className='mt-6'>
      {props.choose === "one" && <Input placeholder="代理编号" />}
      {props.choose === "three" && <Input placeholder="用户编号" />}
      {props.choose === "two" && <Input placeholder="管理员编号" />}
      {(props.choose === "one" || props.choose === "two") && <Input placeholder="账号" />}
      <Input placeholder="昵称" />
      <Input placeholder="手机号" />
      <Select
        placeholder='状态'
        style={{ width: 200 }}
        options={[
          { value: '状态：全部', label: '状态：全部' },
          { value: '状态：启用', label: '状态：启用' },
          { value: '状态：禁用', label: '状态：禁用' },
        ]}
      />
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
      {props.choose === "one" && <Button type='primary'>添加代理</Button>}
      {props.choose === "two" && <Button type='primary'>添加管理员</Button>}
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
