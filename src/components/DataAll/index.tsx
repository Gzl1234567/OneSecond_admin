import React from 'react'
import { DatePicker, Space } from 'antd'
import styled from 'styled-components'
import InfoList from './InfoList'

const { RangePicker } = DatePicker
const Container = styled.div``

// 主要内容
const Main = styled.div`
  width: calc(100vw - 40px - 20px - 200px);
  .icon {
    width: 24px !important;
    height: 24px !important;
  }
  .ant-picker {
    height: 40px;
  }
`

function DataOverview() {
  return (
    <Container>
      <Main className="w-full flex flex-1 ml-[20px] bg-white overflow-auto">
        <div className="w-full p-[20px]">
          <div className="w-full  text-[24px] font-medium">数据总览</div>
          <div className="w-full flex justify-between">
            {/* 总用户数 */}
            <div className="mt-[60px] w-[25%] mr-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
              <div className="mx-[-10px]">
                <div className="px-[10px]">
                  <div className="flex justify-start w-full h-[100px] rounded-[4px] items-center  ">
                    <div>
                      <div className="w-[60px] ml-[20px] text-center box-border relative">
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[4px] leading-[60px] text-center mt-[-40px]  bg-gradient-to-br from-[#f3af19] to-[#ea6439]">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-user" width="24px" height="24px" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center ml-[20px] mt-[10px] text-[#999999] text-[12px]">
                        昨日新增
                      </div>
                      <div className="text-center ml-[20px] text-[#666666] text-[12px]">0人</div>
                    </div>
                    <div className="ml-[40px]">
                      <div className="text-[#333333]">总用户数</div>
                      <div className="text-[24px]">
                        0 <span className="text-[12px]">人</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="mt-[60px] w-[25%] mr-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
              <div className="mx-[-10px]">
                <div className="px-[10px]">
                  <div className="flex justify-start w-full h-[100px] rounded-[4px] items-center  ">
                    <div>
                      <div className="w-[60px] ml-[20px] text-center box-border relative">
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[4px] leading-[60px] text-center mt-[-40px]  bg-gradient-to-br from-[#46aaf4] to-[#385cf4]">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-qiandai" width="24px" height="24px" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center ml-[20px] mt-[10px] text-[#999999] text-[12px]">
                        昨日新增
                      </div>
                      <div className="text-center ml-[20px] text-[#666666] text-[12px]">0元</div>
                    </div>
                    <div className="ml-[40px]">
                      <div className="text-[#333333]">总盈利</div>
                      <div className="text-[24px]">
                        0 <span className="text-[12px]">元</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="mt-[60px] w-[25%] mr-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
              <div className="mx-[-10px]">
                <div className="px-[10px]">
                  <div className="flex justify-start w-full h-[100px] rounded-[4px] items-center  ">
                    <div>
                      <div className="w-[60px] ml-[20px] text-center box-border relative">
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[4px] leading-[60px] text-center mt-[-40px]  bg-gradient-to-br from-[#5ad4e0] to-[#2299d2]">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-qianbao" width="24px" height="24px" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center ml-[20px] mt-[10px] text-[#999999] text-[12px]">
                        昨日新增
                      </div>
                      <div className="text-center ml-[20px] text-[#666666] text-[12px]">0元</div>
                    </div>
                    <div className="ml-[40px]">
                      <div className="text-[#333333]">总交易额</div>
                      <div className="text-[24px]">
                        0 <span className="text-[12px]">元</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="mt-[60px] w-[25%] mr-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
              <div className="mx-[-10px]">
                <div className="px-[10px]">
                  <div className="flex justify-start w-full h-[100px] rounded-[4px] items-center  ">
                    <div>
                      <div className="w-[60px] ml-[20px] text-center box-border relative">
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[4px] leading-[60px] text-center mt-[-40px]  bg-gradient-to-br from-[#4ed855] to-[#3ec296]">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-complete" width="24px" height="24px" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center ml-[20px] mt-[10px] text-[#999999] text-[12px]">
                        昨日新增
                      </div>
                      <div className="text-center ml-[20px] text-[#666666] text-[12px]">0元</div>
                    </div>
                    <div className="ml-[40px]">
                      <div className="text-[#333333]">订单完成量</div>
                      <div className="text-[24px]">
                        0 <span className="text-[12px]">元</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 中间的线 */}
          <div className="w-full h-[1px] my-[24px] bg-[#e8e8e8]" />
          {/* 数据总览 */}
          <div className="flex justify-between">
            <div className="left w-[50%] px-[10px]">
              <div className=" p-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
                <div className="text-[20px] text-[#999999]">用户数据曲线</div>
                <div className="flex mt-[12px] justify-start items-center">
                  <div>按时间查询:</div>
                  <Space direction="vertical" size={12} className="ml-[20px]">
                    <RangePicker />
                  </Space>
                </div>
              </div>
              <div />
            </div>
            <div className="right w-[50%]  px-[10px]">
              <div className=" p-[20px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
                <div className="text-[20px] text-[#999999]">用户数据曲线</div>
                <div className="flex mt-[12px] justify-start items-center">
                  <div>按时间查询:</div>
                  <Space direction="vertical" size={12} className="ml-[20px]">
                    <RangePicker />
                  </Space>
                </div>
                {/*  */}
                <div className="flex justify-between flex-wrap">
                  {InfoList.map((item) => (
                    <div
                      key={item.icon}
                      className="w-[50%] h-[125px] flex justify-center items-center flex-col"
                    >
                      <div
                        style={item.bgc}
                        className="w-[40px] h-[40px] leading-[40px] rounded-[8px] p-[8px] rounded-tr-none rounded-bl-none"
                      >
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref={item.icon} />
                        </svg>
                      </div>
                      <div className="mt-[8px] text-[12px] text-[#999999] text-center">
                        {item.title}
                      </div>
                      <div className="text-[18px] text-center">{item.number}个</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* 订单数据曲线 */}
          <div className="mt-[20px] rounded-[4px] shadow-[0_0_5px_2px_rgba(0,0,0,0.05)] p-[20px]">
            <div className="text-[20px] text-[#999999]">订单数据曲线</div>
            <div className="flex mt-[12px] justify-start items-center">
              <div>按时间查询:</div>
              <Space direction="vertical" size={12} className="ml-[20px]">
                <RangePicker />
              </Space>
            </div>
          </div>
        </div>
      </Main>
    </Container>
  )
}

export default DataOverview
