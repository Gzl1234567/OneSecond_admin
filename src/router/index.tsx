import React from 'react'
import { useRoutes } from 'react-router-dom'
// import Login from '@/views/Login'
import Home from '@/views/Home'

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    }
  ])
}
