/* eslint-disable no-console */
import React, { useState } from 'react'
import { Radio, Button } from 'antd'
import type { RadioChangeEvent } from 'antd'

const App: React.FC = () => {
  const [value, setValue] = useState(1)
  const [values, setValues] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  const onChanges = (e: RadioChangeEvent) => {
    setValues(e.target.value)
  }
  return (
    <div>
      <h2 className="text-xl">提现设置</h2>
      <div className="mt-9 ml-9">
        <div>
          <p>是否开启此项功能</p>
          <Radio.Group style={{ marginTop: '15px' }} onChange={onChange} value={value}>
            <Radio value={1}>开启</Radio>
            <Radio value={2}>关闭</Radio>
          </Radio.Group>
        </div>
        <div className="mt-9">
          <p>是否开启此项功能</p>
          <Radio.Group style={{ marginTop: '15px' }} onChange={onChanges} value={values}>
            <Radio value={1}>开启</Radio>
            <Radio value={4}>关闭</Radio>
          </Radio.Group>
        </div>
        <Button style={{ width: '120px', height: '40px', marginTop: '15px' }} type="primary">
          提交保存
        </Button>
      </div>
    </div>
  )
}

export default App
