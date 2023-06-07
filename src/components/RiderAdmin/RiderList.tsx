/* eslint-disable no-console */
import React, { useState } from 'react'
import { Input, Select, Button, Table } from 'antd'
import styled from 'styled-components'
import type { ColumnsType } from 'antd/es/table'
import { RedoOutlined } from '@ant-design/icons'

const Content = styled.div`
  .ant-input-number {
    width: 8rem;
    height: 2.375rem;
    text-align: left;
    background-color: transparent;
    border-radius: 4px;
    outline: 0;
    transition: all 0.3s linear;
  }

  .ant-select-selection-item {
    line-height: 38px !important;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }

  .ant-select-selector {
    height: 40px !important;
  }

  .ant-btn {
    height: 40px !important;
    width: 120px !important;
  }

  .stick {
    clear: both;
    margin: 24px 0;
    background: #e8e8e8;
  }

  .reset {
    width: 40px !important;
    height: 40px !important;
  }
`
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

interface DataType {
  key: React.Key
  number: number
  user: string
  id: string
  account: number
  receiving: string
  status: boolean
  time: string
  operate: boolean
}

const columns: ColumnsType<DataType> = [
  {
    title: '编号',
    dataIndex: 'number'
  },
  {
    title: '用户',
    dataIndex: 'user'
  },
  {
    title: '身份',
    dataIndex: 'id'
  },
  {
    title: '账户余额',
    dataIndex: 'account'
  },
  {
    title: '开启接单',
    dataIndex: 'receiving'
  },
  {
    title: '状态',
    dataIndex: 'status'
  },
  {
    title: '时间',
    dataIndex: 'time'
  },
  {
    title: '操作',
    dataIndex: 'operate'
  }
]

const data: DataType[] = []
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    number: i,
    user: `David`,
    id: `421122200606027316`,
    account: 99,
    receiving: `接单`,
    status: true,
    time: `2023-6-5`,
    operate: true
  })
}

const items = [
  { titlie: '骑手编号', id: 1 },
  { titlie: '用户编号', id: 2 },
  { titlie: '真实姓名', id: 3 },
  { titlie: '身份证号码', id: 4 },
  { titlie: '手机号', id: 5 }
]

const Inputs = items?.map((item) => (
  <div key={item.id} style={{ marginRight: 8, marginBottom: 8 }}>
    <Input style={{ width: 200, height: 40 }} placeholder={item.titlie} />
  </div>
))

const RiderList: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)
  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <Content>
      <div>
        <div className="text-[24px] font-medium">骑手列表</div>
        <div className="flex flex-wrap mt-[20px]">
          {Inputs}
          <Select
            placeholder="状态"
            style={{ width: 200, height: 40 }}
            onChange={handleChange}
            options={[
              { value: '状态: 全部', label: '状态: 全部' },
              { value: '状态: 启用', label: '状态: 启用' },
              { value: '状态: 禁用', label: '状态: 禁用' }
            ]}
          />
        </div>
        <div className="mt-[12px]">
          <Button className=" h-[40px] mr-[8px]">取消</Button>
          <Button
            className=" h-[40px] mr-[8px]"
            style={{ backgroundColor: '#955ce6', color: '#fff' }}
          >
            搜索
          </Button>
        </div>
        <div className=" block w-full min-w-full h-[1px] stick" />
        <div className="flex justify-between">
          <Button
            className=" h-[40px] mr-[8px]"
            style={{ backgroundColor: '#955ce6', color: '#fff' }}
          >
            新增一位骑手
          </Button>
          <Button icon={<RedoOutlined />} className="reset" style={{ fontSize: 16 }} />
        </div>
        <div className="mt-[20px]">
          <div>
            <div style={{ marginBottom: 16 }}>
              <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                Reload
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </Content>
  )
}

export default RiderList
