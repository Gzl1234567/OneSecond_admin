import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input, Button, Select, Table, Tooltip, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { UserOutlined, ReloadOutlined } from '@ant-design/icons'
import moment from 'moment'
import AgentUserSet from '@/assets/agentUserSet.svg'
import AgentLittle from '@/assets/agentLittle.svg'
import { getUserList, ResponseDataProxy } from '@/service/index'

const Ager = styled.div`
  .css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table-thead >tr>th, .css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table-thead >tr>td,.css-dev-only-do-not-override-1374lyb.ant-table-wrapper .ant-table.ant-table-bordered >.ant-table-container,.ant-table-tbody>tr>td  {
    border:1px solid#e8e8e8 !important;
    word-wrap: break-word;
    border-spacing: 0;
    font-weight: 400;
  }

  .css-dev-only-do-not-override-1374lyb.ant-input,
  .ant-btn-default {
    border-color: #d9d9d9;
  }

  .css-dev-only-do-not-override-1374lyb.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #d9d9d9;
    height: 40px;
  }

  .css-dev-only-do-not-override-aui75v.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    height: 40px;
  }
  /* 设置滚动条宽度和颜色 */
  .gdScroll::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }
  /* 设置滚动条轨道的颜色 */
  .gdScroll::-webkit-scrollbar-track {
    background: transparent;
  }

  /* 设置滚动条滑块的颜色和样式 */
  .gdScroll::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 5px;
  }
  .group > button {
    border: 1px solid #d9d9d9;
  }
`
// 搜索框
const proxyList: React.FC = () => {
  interface InputItem {
    placeholder: string
  }

  const inputs: InputItem[] = [
    { placeholder: '代理编号' },
    { placeholder: '账户' },
    { placeholder: '手机号' },
    { placeholder: '昵称' }
  ]
  // 请求的数据
  const [tableData, setTableData] = useState<ResponseDataProxy['data']['data']>([])

  useEffect(() => {
    getUserList().then((res:any) => {
      setTableData(res.data.data)
    })
  }, [])
  // Tab表格
  interface DataType {
    key: React.Key
    agentNo: string
    agentAccount: string
    mobileNumber: string
    realName: string
    status: number
    createTime: string
    updateTime: string
    defaultPwd: string
    updatedBy: string
    operationButton: React.ReactNode
    operationIcon: React.ReactNode
  }

  // 点击事件
  const handleClick = (record: DataType) => {
    // eslint-disable-next-line no-console
    console.log('record', record)
  }
  const lightText = <span>操作人</span>

  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'updatedBy'
    },
    {
      title: '账户',
      dataIndex: 'DataType',
      render: (_, record) => (
        <div>
          <div>{record.agentNo}</div>
          <div>初始密码:{record.defaultPwd}</div>
        </div>
      )
    },
    {
      title: '手机号',
      dataIndex: 'mobileNumber'
    },
    {
      title: '姓名',
      dataIndex: 'realName'
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (status) => {
        if (status === 1) {
          return <Tag color="green">启动</Tag>
        }
        return <Tag color="red">禁用</Tag>
      }
    },
    {
      title: '时间',
      dataIndex: 'createTime',
      render: (text) => {
        const createTime = moment(text).format('YYYY/MM/DD HH:mm')
        const updateTime = moment(text)
          .add(6, 'days')
          .subtract(2, 'hours')
          .format('YYYY/MM/DD HH:mm')
        return (
          <div>
            <div>创建: {createTime}</div>
            <div>更新: {updateTime}</div>
          </div>
        )
      }
    },
    {
      title: '操作',
      dataIndex: 'operationIcon',
      render: (text, record) => (
        <div className=" flex ">
          <Tooltip title={lightText}>
            <div className="w-12">
              <img className="w-8" src={AgentUserSet} alt="用户" />
            </div>
          </Tooltip>
          <div className="group relative ">
            <Button className="w-12" onClick={() => handleClick(record)}>
              <img className="w-10 " src={AgentLittle} alt="修改" />
            </Button>
            <div className="hidden group-hover:block shadow-black">
              <div className="flex flex-col w-24  z-10  absolute left-1 bg-white shadow-[0_0px_20px_-3px_rgba(0,0,0,0.3)] ">
                <Button type="text">修改</Button>
                <Button type="text" disabled>
                  启用
                </Button>
                <Button type="text">禁用</Button>
                <Button type="text">重置密码</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const data: DataType[] = []

  for (let i = 0; i < tableData.length; i += 1) {
    data.push({
      key: i,
      agentNo: tableData[i].agentAccount,
      agentAccount: tableData[i].agentAccount,
      mobileNumber: tableData[i].mobileNumber,
      realName: tableData[i].realName,
      status: tableData[i].status,
      createTime: tableData[i].createTime,
      updateTime: tableData[i].updateTime,
      defaultPwd: tableData[i].defaultPwd,
      updatedBy: tableData[i].updatedBy,
      operationButton: '...',
      operationIcon: <UserOutlined color="#955ce6" />
    })
  }

  const handleChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`selected ${value}`)
  }
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
    // eslint-disable-next-line no-console
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0
  return (
    <Ager className=" h-full">
      <div className="h-full overflow-y-scroll gdScroll">
        <div className=" text-[24px] text-[#33333] font-[500] mb-4">代理列表</div>
        <div className=" flex flex-wrap justify-start leading-5">
          {inputs.map((input) => (
            <Input
              key={input.placeholder}
              placeholder={input.placeholder}
              className="!w-[12.5rem] h-10 !mr-2 !mb-2"
            />
          ))}
          <Select
            placeholder="状态"
            style={{ width: 200, height: 40 }}
            onChange={handleChange}
            options={[
              { value: '状态:全部', label: '状态:全部' },
              { value: '状态:启用', label: '状态:启用' },
              { value: '状态:禁止', label: '状态:禁止' }
            ]}
          />
        </div>
        <div className="mt-8 mb-8">
          <Button className="w-32 !h-10 mr-2">取消</Button>
          <Button className="w-32 !h-10" type="primary">
            搜索
          </Button>
        </div>
        <div>
          <div style={{ marginBottom: 30, borderTop: '1px solid #cccc' }}>
            <div className="flex justify-between text-center mt-8">
              <Link to="/user/agent/edit/add">
                <Button type="primary" className="w-24 !h-10" onClick={start} loading={loading}>
                  添加代理
                </Button>
              </Link>
              <Button className="w-14 !h-10 ">
                <ReloadOutlined />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} />
            <span style={{ position: 'absolute', bottom: 17, right: 280 }}>
              {hasSelected ? `共 ${selectedRowKeys.length} 条数据` : ''}
            </span>
          </div>
        </div>
      </div>
    </Ager>
  )
}

export default proxyList
