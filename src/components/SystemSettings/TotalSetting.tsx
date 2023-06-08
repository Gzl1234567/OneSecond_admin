import React from 'react'
import { InputNumber, Button } from 'antd'
import styled from 'styled-components'

const Styleds = styled.div`
  .top {
    margin-top: 20px;
    width: 500px;
    height: 40px;
  }
  .ant-input-number-input {
    height: 40px;
  }
`

const App: React.FC = () => (
  <div>
    <Styleds>
      <h2 className="text-xl">积分设置</h2>
      <div className="mt-9 ml-9">
        <div>
          <p className="text-sm">积分抵抗比例</p>
          <InputNumber className="top" min={1} max={10000000000} defaultValue={1000} />
          <p className="mt-5 text-xs text-slate-400">
            输入1000则表示1000积分可抵扣一元,输入100表示100积分可抵扣一元
          </p>
        </div>
        <Button
          className="mt-5"
          style={{ width: '120px', height: '40px', marginLeft: '10px' }}
          type="primary"
        >
          提交保存
        </Button>
      </div>
    </Styleds>
  </div>
)
export default App
