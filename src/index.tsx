/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDom from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import App from './App'
import '@/assets/index.css'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <div>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#955ce6',
          colorSuccess: '#52c41a'
        }
      }}
    >
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
  </div>
)
