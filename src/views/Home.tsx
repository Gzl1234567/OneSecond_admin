import React from 'react'
import {
  DashboardFilled,
  UserOutlined,
  CalendarFilled,
  ControlFilled,
  EnvironmentFilled,
  RedEnvelopeFilled,
  CarFilled,
  PayCircleFilled,
  SettingFilled
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme, Button } from 'antd'
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
import PricingList from '@/components/AddList/PricingList'
import ChangeRules from '@/components/AddList/ChangeRules'

const silder = [
  {
    label: '数据总览',
    icon: DashboardFilled,
    link: '/'
  },
  {
    label: '用户管理',
    icon: UserOutlined,
    children: [
      { label: '代理列表', link: 'ProxyList' },
      { label: '管理员列表', link: 'AdminList' },
      { label: '用户列表', link: 'UserList' }
    ]
  },
  {
    label: '订单管理',
    icon: CalendarFilled,
    children: [
      { label: '订单列表', link: 'OrderList' },
      { label: '资金走向列表', link: 'MoneygoList' },
      { label: '取消订单配置', link: 'CancelOrder' },
      { label: '小费选项配置', link: 'TipOption' }
    ]
  },
  {
    label: '骑手管理',
    icon: CarFilled,
    children: [
      { label: '骑手列表', link: 'RiderList' },
      { label: '骑手审核列表', link: 'RiderCheckList' }
    ]
  },
  {
    label: '城市管理',
    icon: EnvironmentFilled,
    children: [{ label: '城市运营列表', link: 'CityRun' }]
  },
  {
    label: '运营管理',
    icon: ControlFilled,
    children: [
      {
        label: '计价规则',
        link: 'PricingRule'
      },
      { label: '重量标签', link: 'WeightLabel' },
      { label: '物品标签组', link: 'ArticleLabel' }
    ]
  },
  {
    label: '优惠卷管理',
    icon: RedEnvelopeFilled,
    children: [
      { label: '优惠卷列表', link: 'CouponList' },
      { label: '优惠卷设置', link: 'CouponSetting' }
    ]
  },
  {
    label: '提现管理',
    icon: PayCircleFilled,
    children: [
      { label: '提现列表', link: 'DepositList' },
      { label: '提现设置', link: 'DepositSetting' }
    ]
  },
  {
    label: '系统设置',
    icon: SettingFilled,
    children: [
      { label: '小程序设置', link: 'MiniSetting' },
      { label: '分享设置', link: 'ShareSetting' },
      { label: '积分设置', link: 'TotalSetting' },
      { label: '订阅消息设置', link: 'MessageSetting' },
      { label: '用户指南', link: 'UserGuide' },
      { label: '骑手指南', link: 'RiderGuide' }
    ]
  }
]
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
  return (
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
          <Button
            style={{ backgroundColor: '#955ce6', color: '#fff' }}
            onClick={() => {
              navigate('/login')
            }}
          >
            退出
          </Button>
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
              <Route path="/PricingRule/PricingList" element={<PricingList />} />
              <Route path="/PricingRule/ChangeRules" element={<ChangeRules />} />
            </Routes>

            {/* <Router>
              <Routes>
                <Route path="/" element={<Navigate to="" />} />
                <Route path='/user' element={}></Route>
              </Routes>
            </Router> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
