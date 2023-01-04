import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux'

import { useAppSelector } from './store'

import routes from './router'

function App() {
  const { count } = useAppSelector((state) => {
    return {
      count: state.counter.count
    }
  }, shallowEqual)

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/discover">我的音乐</Link>
        <Link to="/discover">关注</Link>
        <Link to="/discover">发现音乐</Link>
      </div>
      <h2>计数：{count}</h2>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
