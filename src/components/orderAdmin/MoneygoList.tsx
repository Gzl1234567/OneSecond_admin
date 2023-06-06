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
const orderList:React.FC = () => (
    <Wrapper>
      {/* 资金走向列表 */}
      <div className='overText'>资金走向列表</div>
      {/* 搜索页面 */}
      <SearchResult choose={false} />
    </Wrapper>
  )

export default orderList
