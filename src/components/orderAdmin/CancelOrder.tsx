import React from 'react';
import styled from 'styled-components';
// 增加一项按钮组件
import { Button } from 'antd';
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
`;

const App: React.FC = () => (
	<Wrapper>
    {/* 取消订单配置文字 */}
    <div className='overText'>取消订单配置</div>
    {/* 主体内容 */}
		<div className='bodyContent'>
        {/* 用户取消订单规则 */}
        <div className='h-10 leading-10'>取消用户订单规则:</div>
        <div className='h-10 leading-10 text-xs text-gray-400'>用户在订单状态为【已接单、配送中】时取消订单会触发此规则</div>
        <OverAdd troggle/>
        {/* 骑手取消订单规则 */}
        <div className='h-10 leading-10'>骑手取消订单规则:</div>
        <div className='h-10 leading-10 text-xs text-gray-400'>骑手在订单状态为【已接单、配送中】时取消订单会触发此规则</div>
        <OverAdd troggle />
        {/* 用户取消订单配置 */}
        <div className='h-10 leading-10'>用户取消订单配置:</div>
        <OverAdd troggle={false} />
        {/* 骑手取消订单配置 */}
        <div className='h-10 leading-10'>骑手取消订单配置:</div>
        <OverAdd troggle={false} />
        {/* 管理员取消订单配置 */}
        <div className='h-10 leading-10'>管理员取消订单配置:</div>
        <OverAdd troggle={false} />
        {/* 代理取消订单配置 */}
        <div className='h-10 leading-10'>代理取消订单配置:</div>
        <OverAdd troggle={false} />
        {/* 提交保存按钮 */}
        <Button type='primary' size='large'>提交保存</Button>
    </div>
	</Wrapper>

);

export default App;
