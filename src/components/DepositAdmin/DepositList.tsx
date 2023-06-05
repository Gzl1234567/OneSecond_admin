import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Select, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const Styled = styled.div`
  .top {
    width: 100px;
    height: 100px;
    background: pink;
  }
  .inputs {
    width: 200px;
    height: 40px;
    margin-left: 10px;
  }
  .ant-select-selector {
    height: 40px !important;
  }
  .ant-select-selection-item {
    line-height: 40px !important;
  }
  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }
`
// 表达接口类型定义
interface DataType {
  key: React.Key
  bh: string
  names: string
  name: string
  je: number
  zh: number
  zt: string
  sj: string
  cz: string
}
// 定义表格列的配置描述
const columns: ColumnsType<DataType> = [
  {
    title: '编号',
    dataIndex: 'bh'
  },
  {
    title: '提现用户',
    dataIndex: 'names'
  },
  {
    title: '用户',
    dataIndex: 'name'
  },
  {
    title: '提现金额',
    dataIndex: 'je'
  },
  {
    title: '提现账户',
    dataIndex: 'zh'
  },
  {
    title: '状态',
    dataIndex: 'zt'
  },
  {
    title: '时间',
    dataIndex: 'sj'
  },
  {
    title: '操作',
    dataIndex: 'cz'
  }
]
// 模拟数据
const data: DataType[] = []
// 循环添加数据
for (let i = 0; i < 46; i += 1) {
  data.push({
    key: i,
    bh: `${i}`,
    names: '苏沐秋',
    name: '苏沐秋',
    je: 999,
    zh: 123456789,
    zt: '正在提交中',
    sj: '2023-6-1',
    cz: '进行中'
  })
}

function DepositList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <div>
      <Styled>
        {/* 上面部分 */}
        <div style={{ borderBottom: '1px solid #ccc', height: '170px' }}>
          <div>
            <h2 className="text-xl">提现列表</h2>
          </div>
          <div className="flex mt-5">
            <Input style={{ marginLeft: '0px' }} className="inputs" placeholder="开户行" />
            <Input className="inputs" placeholder="银行卡号" />
            <Input className="inputs" placeholder="真实姓名" />
            <Input className="inputs" placeholder="提现编号" />
            <Space wrap className="inputs">
              <Select
                placeholder="状态"
                className="inputs"
                options={[
                  { value: '状态: 全部', label: '状态: 全部' },
                  { value: '状态: 提现成功', label: '状态: 提现成功' },
                  { value: '状态: 待提现', label: '状态: 待提现' },
                  { value: '状态: 提现失败', label: '状态: 提现失败' }
                ]}
              />
            </Space>
          </div>
          <div className="mt-5">
            <Button style={{ width: '120px', height: '40px' }}>取消</Button>
            <Button style={{ width: '120px', height: '40px', marginLeft: '10px' }} type="primary">
              搜索
            </Button>
          </div>
        </div>
        {/* 下面部分 */}
        <div>
          <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
        </div>
      </Styled>
    </div>
  )
}

export default DepositList
