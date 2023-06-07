/* eslint-disable no-console */
import React from 'react'
import { Tabs, Input, Button } from 'antd'
// import { getXiao } from '@/service/index'
import type { TabsProps } from 'antd'
import styled from 'styled-components'

const Styled = styled.div`
  .xin:before {
    display: inline-block;
    margin-right: 4px;
    color: #f5222d;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
  .ant-layout-content {
    height: 714px;
  }
`
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `开发设置`,
    children: (
      <div style={{ background: '#fff' }}>
        <div style={{ width: '500px', margin: 'auto', paddingTop: '80px' }}>
          <div>
            <div className="flex justify-between">
              <p className="font-bold">微信小程序配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <div className="flex">
                <p className="xin" />
                <p>小程序ID:</p>
              </div>
              <Input placeholder="164654" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>小程序密钥:</p>
              </div>
              <Input placeholder="123asd" style={{ height: '40px' }} />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <p className="font-bold">QQ小程序配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <p>小程序ID:</p>
              <Input placeholder="das" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <p>小程序密钥:</p>
              <Input placeholder="qwexzc" style={{ height: '40px' }} />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <p className="font-bold">字节跳动小程序配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <p>小程序ID:</p>
              <Input placeholder="asdxcw" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <p>小程序密钥:</p>
              <Input placeholder="dsfwer" style={{ height: '40px' }} />
            </div>
          </div>
          <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
            提交保存
          </Button>
        </div>
      </div>
    )
  },
  {
    key: '2',
    label: `支付设置`,
    children: (
      <div style={{ background: '#fff' }}>
        <div style={{ width: '500px', margin: 'auto', paddingTop: '80px' }}>
          <div>
            <div className="flex justify-between">
              <p className="font-bold">微信商户号配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <div className="flex">
                <p className="xin" />
                <p>微信商户ID:</p>
              </div>
              <Input placeholder="167574124" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>微信商户密钥:</p>
              </div>
              <Input placeholder="12332" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>回调地址:</p>
              </div>
              <Input placeholder="4534546" style={{ height: '40px' }} />
              <p className="text-xs text-slate-400 mt-2">输入域名即可,如: https://www.landalf.cn</p>
            </div>
          </div>
          <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
            提交保存
          </Button>
        </div>
      </div>
    )
  },
  {
    key: '3',
    label: `地图设置`,
    children: (
      <div style={{ background: '#fff' }}>
        <div style={{ width: '500px', margin: 'auto', paddingTop: '80px' }}>
          <div>
            <div>
              <p className="font-bold">微信商户号配置</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>腾讯地图key:</p>
              </div>
              <Input placeholder="562654qwe" style={{ height: '40px', marginTop: '10px' }} />
            </div>
          </div>
          <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
            提交保存
          </Button>
        </div>
      </div>
    )
  },
  {
    key: '4',
    label: `阿里云配置`,
    children: (
      <div style={{ background: '#fff' }}>
        <div style={{ width: '500px', margin: 'auto', paddingTop: '80px' }}>
          <div>
            <div className="flex justify-between">
              <p className="font-bold">阿里云配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <div className="flex">
                <p className="xin" />
                <p>AccessKey ID:</p>
              </div>
              <Input placeholder="请输入accessKeyid" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>密钥Secret:</p>
              </div>
              <Input placeholder="请输入密钥Secret" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>ARN:</p>
              </div>
              <Input placeholder="请输入ARN" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>对象存储Oss Region:</p>
              </div>
              <Input placeholder="请输入对象存储Oss Region" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>对象存储Oss Bucket:</p>
              </div>
              <Input placeholder="请输入对象存储Oss Bucket" style={{ height: '40px' }} />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <p className="font-bold">阿里云短信验证码</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div className="mt-2">
              <div className="flex">
                <p className="xin" />
                <p>签名名称:</p>
              </div>
              <Input placeholder="请输入签名名称" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>模板CODE:</p>
              </div>
              <Input placeholder="请输入模板CODE" style={{ height: '40px' }} />
            </div>
          </div>

          <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
            提交保存
          </Button>
        </div>
      </div>
    )
  },
  {
    key: '5',
    label: `企业微信配置`,
    children: (
      <div style={{ background: '#fff' }}>
        <div style={{ width: '500px', margin: 'auto', paddingTop: '80px' }}>
          <div>
            <div className="flex justify-between">
              <p className="font-bold">企业微信配置</p>
              <p className="text-violet-600">帮助</p>
            </div>
            <div>
              <div className="flex">
                <p className="xin" />
                <p>企业ID:</p>
              </div>
              <Input placeholder="请输入企业ID" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <div className="flex">
                <p className="xin" />
                <p>应用凭证Secret:</p>
              </div>
              <Input placeholder="请输入应用凭证Secret" style={{ height: '40px' }} />
            </div>
            <div className="mt-8">
              <p>群聊id(用于骑手申请通知)</p>
              <Input placeholder="请输入群聊id" style={{ height: '40px' }} />
            </div>
          </div>
          <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
            提交保存
          </Button>
          <div className="mt-8">
            <p>创建群聊 生成群ID:</p>
            <p className="mt-5">请提交上述配置后,在创建如下配置,并提交群聊id</p>
            <div className="flex justify-between mt-5">
              <div>
                <p>群名称</p>
                <Input placeholder="骑手审核群" style={{ height: '40px', width: '240px' }} />
              </div>
              <div>
                <p>群所有者</p>
                <Input placeholder="请输入群所有者" style={{ height: '40px', width: '240px' }} />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p>群成员1(userid)</p>
                <Input
                  placeholder="请输入群成员群成员1(userid)"
                  style={{ height: '40px', width: '160px' }}
                />
              </div>
              <div>
                <p>群成员2(userid)</p>
                <Input
                  placeholder="请输入群成员群成员2(userid)"
                  style={{ height: '40px', width: '160px' }}
                />
              </div>
              <div>
                <p>群成员3(userid)</p>
                <Input
                  placeholder="请输入群成员群成员3(userid)"
                  style={{ height: '40px', width: '160px' }}
                />
              </div>
            </div>
            <Button className="mt-8" style={{ width: '120px', height: '40px' }} type="primary">
              生成群ID
            </Button>
          </div>
        </div>
      </div>
    )
  }
]
function MiniSetting() {
  // const [set, setshu] = useState('')
  // getXiao().then((res) => {
  //   setshu(res.data)
  //   console.log(res)
  //   console.log(set)
  // })
  return (
    <Styled>
      <h2 className="text-xl">小程序设置</h2>
      <div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </Styled>
  )
}

export default MiniSetting
