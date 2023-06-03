/* eslint-disable no-console */
import React from 'react'
// 定义组件的类型
// 组件时函数
// 组件函数的参数 props 组件函数的返回值jsx元素

interface IProps<T> {
  a: number
  b?: string[]
  c: React.CSSProperties
  d: T
  // children: JSX.Element
}
// React内置类型
// JSX.Elements
// React.ReactChild
// React.ReactNode
// React.ReactNode === React.ReactChild | React.ReactChild [] | null
// React.ReactNode === JSX.Element | JSX.Elememt[] | null

// 行内样式类型
// export default function Bar(props: IProps): JSX.Element {
//   return <div style={props.c} />
// }

// const Bar: React.FC<IProps<[1, 2, 3]>> = (props) => {
//   console.log(props.c)
//   const fn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     console.log(e)
//   }
//   return <div onClick={fn}>1225425</div>
// }

const Bar: React.FC<IProps<[1, 2, 3]>> = (props) => {
  console.log(props.c)
  const fn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e)
  }
  return <div onClick={fn} />
}

export default Bar
