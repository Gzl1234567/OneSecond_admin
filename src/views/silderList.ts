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

const silder = [
  {
    label: '数据总览',
    icon: DashboardFilled,
    link: 'DataAll'
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
      { label: '计价规则', link: 'PricingRule' },
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
export default silder
