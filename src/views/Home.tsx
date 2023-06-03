/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { getSonListType, getPlayList, ResponseData } from '@/service'
import { useRequest } from 'ahooks'
// 类型断层
// type ReturnType<T> = T extends
export default function Home() {
  const [songListType, setSongListType] = useState<ResponseData['sub']>([])
  console.log(songListType)
  useEffect(() => {
    getSonListType()
      .then((res) => {
        setSongListType(res.data.sub)
      })
      .catch()
  }, [])
  const { data: topList } = useRequest(() => getPlayList({ cat: '全部' }))
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {songListType.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
        {topList?.map((res) => (
          <li key={res.name}>{res.name}</li>
        ))}
      </ul>
    </div>
  )
}
