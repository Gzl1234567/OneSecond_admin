/* eslint-disable no-console */
import React from 'react'
import { Tabs } from 'antd'
import { getLo } from '@/service/index'
import type { TabsProps } from 'antd'
import styled from 'styled-components'

const Styled = styled.div``
getLo()
  .then((res) => {
    console.log(res)
  })
  .catch((ree) => {
    console.log(ree)
  })

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `sad`
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`
  }
]
const MiniSetting: React.FC = () => (
  <Styled>
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  </Styled>
)

export default MiniSetting
