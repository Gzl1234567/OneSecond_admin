/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDom from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import App from './App'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <div>
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#17bcff'
          }
        }}
      />
      <App />
    </StyleProvider>
  </div>
)
