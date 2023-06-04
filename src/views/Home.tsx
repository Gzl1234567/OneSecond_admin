import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme, Button } from 'antd'
import Logo from '@/assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Sider } = Layout

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`
        }
      })
    }
  }
)

const App: React.FC = () => {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

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
            Content页面
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
