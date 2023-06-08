/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useRequest } from 'ahooks'
import { Table, Button, Popover, Input } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import styled from 'styled-components'
import { RedoOutlined } from '@ant-design/icons'
// import { getUserValueList } from '@/service'
import { useNavigate, Route, Routes } from 'react-router-dom'
import PricingList from '../AddList/PricingList'
import ChangeRules from '../AddList/ChangeRules'

const Content = styled.div`
  .borB {
    border-bottom: 1px solid #ccc;
  }
`

interface DataType {
  key: React.Key
  规则名: string
  距离规则: string
  重量规则: string
  时间规则: string
  操作: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '规则名',
    dataIndex: '规则名'
    // render: (text: string) => <a>{text}</a>
  },
  {
    title: '距离规则',
    dataIndex: '距离规则'
  },
  {
    title: '重量规则',
    dataIndex: '重量规则'
  },
  {
    title: '时间规则',
    dataIndex: '时间规则'
  },
  {
    title: '操作',
    dataIndex: '操作',
    render: (_, record) => (
      <Popover
        content={
          <div>
            <p>修改</p>
            <p>删除</p>
          </div>
        }
      >
        <img src="{Userset}" alt="" />
        <Button>...</Button>
      </Popover>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    规则名: 'John Brown',
    距离规则: '32',
    重量规则: 'New York No. 1 Lake Park',
    时间规则: 'ss',
    操作: 'dd'
  },
  {
    key: '2',
    规则名: 'gggg',
    距离规则: '32',
    重量规则: 'New York No. 1 Lake Park',
    时间规则: 'ss',
    操作: 'dd'
  }
]
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  }
}

interface State {
  searchKeyword: string
}

export default function PricingRule() {
  // const { data: topPlaylist } = useRequest(() => getUserValueList({ current: 1, pageSize: 20 }))
  // console.log(topPlaylist)
  const [state, setState] = useState<State>({ searchKeyword: '' })

  const navigate = useNavigate()
  function toAddPricing() {
    navigate('/home/PricingRule/PricingList')
  }
  const toChangeHandle = () => {
    navigate('/home/PricingRule/ChangeRule')
  }

  function setData(arg0: DataType[]): void {
    throw new Error('Function not implemented.')
  }

  return (
    <Content>
      <div className="">
        <h1 className="mb-4 ">计价规则列表</h1>
        <div className="borB">
          <div className="w-48 ">
            <Input
              placeholder="规则命名"
              onChange={(e) => setState({ ...state, searchKeyword: e.target.value })}
            />
          </div>
          <div className="my-5 flex">
            <div className="mr-1">
              <Button style={{ backgroundColor: 'colorPrimary', width: '90px' }}>取消</Button>
            </div>
            <div>
              <Button
                type="primary"
                style={{ backgroundColor: 'colorPrimary', width: '90px' }}
                onClick={() => data.filter((item) => item.规则名.includes(state.searchKeyword))}
              >
                搜索
              </Button>
            </div>
          </div>
        </div>
        <div className="my-5 flex justify-between">
          <Button onClick={toAddPricing} type="primary" style={{ backgroundColor: 'colorPrimary' }}>
            添加计价规则
          </Button>

          <Button>
            <RedoOutlined />
          </Button>
        </div>

        <Table
          bordered
          rowSelection={{
            ...rowSelection
          }}
          columns={columns}
          // dataSource={data}
          dataSource={data.filter((item) => item.规则名.includes(state.searchKeyword))}
        />

        <Routes>
          <Route path="/PricingList" element={<PricingList />} />
        </Routes>
      </div>
    </Content>
  )
}
