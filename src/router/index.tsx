import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '@/views/Login'

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
}
