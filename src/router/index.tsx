import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
