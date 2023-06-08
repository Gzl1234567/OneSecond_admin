/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'

export default function Auth(props: any) {
  const navgigate = useNavigate()
  const localtion = useLocation()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token && !props.value.includes(localtion.pathname)) {
      navgigate('/login')
    }
  }, [localtion.pathname])
  return props.children
}
