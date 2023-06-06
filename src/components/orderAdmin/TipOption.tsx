import React from 'react';
import styled from 'styled-components';
// 增加一项按钮组件
import { Button, InputNumber } from 'antd';
import OverAdd from "./components/DynamicallyIncreaseDeletions";

const Wrapper = styled.section`
  /* 取消订单配置文字 */
  .overText {
    font-size: 24px;
    font-weight: 500;
  }

  /* 主体内容 */
  .bodyContent {
    width: 37.5rem;
    padding: 0 3.125rem;
    margin-top: 1.25rem;
  }

  /*  */
  .ant-input-number {
    width: 31.25rem;
    height: 2.5rem;
  }
`;

const TipOption: React.FC = () => (
	<Wrapper>
    {/* 取消订单配置文字 */}
    <div className='overText'>取消订单配置</div>
    {/* 主体内容 */}
		<div className='bodyContent'>
        {/* 小程序端展示的小费选项 */}
        <div className='h-10 leading-10'>小程序端展示的小费选项:</div>
        <OverAdd troggle={false} />
        {/* 平台抽成 */}
        <div className='h-10 leading-10 mt-8'>平台抽成:</div>
        <InputNumber min={0} max={100} defaultValue={0} />
        {/* 代理抽成 */}
        <div className='h-10 leading-10 mt-8'>代理抽成:</div>
        <InputNumber min={0} max={100} defaultValue={0} />
        {/* 提交保存按钮 */}
        <Button type='primary' size='large' className='mt-8'>提交保存</Button>
    </div>
	</Wrapper>
);

export default TipOption
