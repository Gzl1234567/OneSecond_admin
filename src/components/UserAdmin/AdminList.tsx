import React from 'react'
import styled from "styled-components";
import SearchResult from './components/SearchResult';

// 书写全局样式
const Wrapper = styled.div`
  /* 取消订单配置文字 */
  .overText {
    font-size: 24px;
    font-weight: 500;
  }
`
const admintList:React.FC = () => (
    <Wrapper>
      {/* 取消订单配置文字 */}
      <div className='overText'>用户列表</div>
      {/* 搜索页面 */}
      <SearchResult choose="two" />
    </Wrapper>
  )

export default admintList
