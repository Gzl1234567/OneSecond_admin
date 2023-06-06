/* eslint-disable no-console */
import React, {useEffect} from 'react'
import styled from "styled-components";
import {getUserList} from '@/service/index'
import SearchResult from './components/SearchResult';

// 书写全局样式
const Wrapper = styled.div`
  /* 取消订单配置文字 */
  .overText {
    font-size: 24px;
    font-weight: 500;
  }
`


const proxyList:React.FC = () => {
  useEffect(()=>{
    console.log(11)
    getUserList({current: 1,pageSize: 20}).then((res)=>{
      console.log(res);
    })
  })
    return <Wrapper>
      {/* 取消订单配置文字 */}
      <div className='overText'>用户列表</div>
      {/* 搜索页面 */}
      <SearchResult choose="one" />
    </Wrapper>
}

export default proxyList
