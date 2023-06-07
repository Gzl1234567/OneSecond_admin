/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import { Input, Upload, Modal, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import { getFenXian } from '@/service/index'
import styled from 'styled-components'

const Styleds = styled.div`
  .inp {
    width: 500px;
    height: 40px;
    margin-top: 15px;
  }
`

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

function ShareSetting() {
  const [biao, setshuju] = useState('')
  const [miao, setmiao] = useState('')
  const [mian, setmian] = useState('')
  getFenXian().then((res) => {
    setshuju(res.data.data.title)
    setmiao(res.data.data.desc)
    setmian(res.data.data.path)
  })

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  )

  return (
    <div className="ser">
      <Styleds>
        <h2 className="text-xl">分享设置</h2>
        <div className="mt-9 ml-9">
          <div>
            <p>分享标题:</p>
            <Input className="inp" placeholder={biao} />
          </div>
          <div className="mt-8">
            <p>自定义分享描述:</p>
            <Input className="inp" placeholder={miao} />
          </div>
          <div className="mt-8">
            <p>页面path:</p>
            <Input className="inp" placeholder={mian} />
            <p className="text-slate-400	text-xs mt-4">页面path,必须是以/开头的完整路径</p>
          </div>
          <div className="mt-8">
            <p>分享图标:</p>
            <div style={{ marginTop: '15px' }}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
            <p className="text-slate-400	text-xs">上传格式jpg jpeg png</p>
            <p className="text-slate-400	text-xs">最大限制2MB</p>
            <p className="text-slate-400	text-xs" style={{ marginTop: '30px' }}>
              路径可以是本地路径,代码包文件路径或者网络图片路径。显示图片长度宽比是5:4
            </p>
          </div>
          <Button style={{ width: '120px', height: '40px', marginTop: '30px' }} type="primary">
            保存提交
          </Button>
        </div>
      </Styleds>
    </div>
  )
}

export default ShareSetting
