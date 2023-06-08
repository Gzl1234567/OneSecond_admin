import React, { useEffect } from 'react'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import Logo from '@/assets/logo.svg'
import { useNavigate } from 'react-router'
import { Routes, Route, Navigate } from 'react-router-dom'
import DataAll from '@/components/DataAll/index' // 数据总览
import AdminList from '@/components/UserAdmin/AdminList' // 管理列表
import UserList from '@/components/UserAdmin/UserList' // 用户列表
import ProxyList from '@/components/UserAdmin/ProxyList' // 代理列表
import OrderList from '@/components/orderAdmin/orderList' // 订单列表
import MoneygoList from '@/components/orderAdmin/MoneygoList' // 资金走向
import CancelOrder from '@/components/orderAdmin/CancelOrder' // 取消订单
import TipOption from '@/components/orderAdmin/TipOption' // 小费选项配置
import RiderList from '@/components/RiderAdmin/RiderList' // 骑手列表
import RiderCheckList from '@/components/RiderAdmin/RiderCheckList' // 骑手审核列表
import CityRun from '@/components/CityAdmin/CityRun' // 城市运营
import ArticleLabel from '@/components/RunAdmin/ArticleLabel' // 物品标签
import PricingRule from '@/components/RunAdmin/PricingRule' // 计价规则
import WeightLabel from '@/components/RunAdmin/WeightLabel' // 重量标签
import CouponList from '@/components/CouponAdmin/CouponList' // 优惠卷列表
import CouponSetting from '@/components/CouponAdmin/CouponSetting' // 优惠卷设置
import DepositList from '@/components/DepositAdmin/DepositList' // 体现列表
import DepositSetting from '@/components/DepositAdmin/DepositSetting' // 提现设置
import MessageSetting from '@/components/SystemSettings/MessageSetting' // 消息订阅设置
import MiniSetting from '@/components/SystemSettings/MiniSetting' // 小程序设置
import RiderGuide from '@/components/SystemSettings/RiderGuide' // 骑手指南
import ShareSetting from '@/components/SystemSettings/ShareSetting' // 分享设置
import TotalSetting from '@/components/SystemSettings/TotalSetting' // 积分设置
import UserGuide from '@/components/SystemSettings/UserGuide' // 用户指南
import PersonalSetting from '@/views/info/PersonalSetting'
import ChangePassword from '@/views/info/ChangePassword'
import styled from 'styled-components'
import AddCity from '@/components/CityAdmin/Add'
import Logout from './Logout'
import silder from './silderList'

const Styled = styled.div`
  .ant-layout-content {
    height: 714px !important;
    overflow-x: hidden;
    overflow-y: scroll;
    overflow: auto;
  }
`
const { Header, Content, Sider } = Layout

const App: React.FC = () => {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const items2: MenuProps['items'] = silder.map((res, index) => {
    const key = String(index + 1)

    return {
      key: `sub${key}`,
      icon: React.createElement(res.icon),
      label: `${res.label}`,
      onClick:
        index === 0
          ? () => {
              navigate(res.link as string)
            }
          : undefined,

      children: res.children?.map((item, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `${item.label}`,
          onClick: () => {
            navigate(item.link)
          }
        }
      })
    }
  })
  // useEffect钩子函数，用于在页面刷新时重定向到DataAll页面
  useEffect(() => {
    navigate('DataAll')
  }, [])
  return (
    <Styled>
      <Layout>
        <Header
          className="mb-5 flex justify-between"
          style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}
        >
          <div className="flex items-center">
            <img src={Logo} alt="" className="w-[45px] h-[30px] align-middle" />
            <div className="text-[20px] ml-3 font-bold text-[#333333]">一秒快送后台管理系统</div>
          </div>
          <div>
            <Logout />
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="DataAll" />} />
                <Route path="/DataAll" element={<DataAll />} />
                <Route path="/AdminList" element={<AdminList />} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/ProxyList" element={<ProxyList />} />
                <Route path="/OrderList" element={<OrderList />} />
                <Route path="/MoneygoList" element={<MoneygoList />} />
                <Route path="/CancelOrder" element={<CancelOrder />} />
                <Route path="/TipOption" element={<TipOption />} />
                <Route path="/RiderList" element={<RiderList />} />
                <Route path="/RiderCheckList" element={<RiderCheckList />} />
                <Route path="/CityRun" element={<CityRun />} />
                <Route path="/CouponList" element={<CouponList />} />
                <Route path="/CouponSetting" element={<CouponSetting />} />
                <Route path="/ArticleLabel" element={<ArticleLabel />} />
                <Route path="/PricingRule" element={<PricingRule />} />
                <Route path="/WeightLabel" element={<WeightLabel />} />
                <Route path="/DepositList" element={<DepositList />} />
                <Route path="/DepositSetting" element={<DepositSetting />} />
                <Route path="/MessageSetting" element={<MessageSetting />} />
                <Route path="/MiniSetting" element={<MiniSetting />} />
                <Route path="/RiderGuide" element={<RiderGuide />} />
                <Route path="/ShareSetting" element={<ShareSetting />} />
                <Route path="/TotalSetting" element={<TotalSetting />} />
                <Route path="/UserGuide" element={<UserGuide />} />
                <Route path="/PersonalSetting" element={<PersonalSetting />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/CityRun/addCity" element={<AddCity />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Styled>
  )
}

export default App
