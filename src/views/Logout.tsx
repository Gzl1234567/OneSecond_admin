/* eslint-disable no-console */
import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Avatar } from 'antd'
import { UserOutlined, SettingFilled, LockFilled } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { getInfo } from '@/service/index'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const { data: InfoList } = useRequest(getInfo)
  const navgigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="bg-[#b29fff] w-[250px] h-[100px] p-5">
          <div className="flex text-white text-xl">
            <div className="mr-2">{InfoList?.realName}</div>
            <div>{InfoList?.mobileNumber}</div>
          </div>
          <div className="text-[#eae9ef] text-sm">NO:{InfoList?.adminNo}</div>
        </div>
      )
    },
    {
      key: '2',
      label: (
        <div
          onClick={() =>
            navgigate(`PersonalSetting/?info=${InfoList?.mobileNumber}&name=${InfoList?.realName}`)
          }
        >
          <div className="p-3 flex">
            <SettingFilled className="mr-3" />
            <div>个人设置</div>
          </div>
        </div>
      )
    },
    {
      key: '3',
      label: (
        <div className="border-b" onClick={() => navgigate('ChangePassword')}>
          <div className="p-3  flex">
            <LockFilled className="mr-3" />
            <div>修改密码</div>
          </div>
        </div>
      )
    },
    {
      key: '4',
      label: (
        <div className="p-3">
          <div>
            <div>退出登录</div>
          </div>
        </div>
      )
    }
  ]
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Avatar size="large" icon={<UserOutlined />} />
    </Dropdown>
  )
}
