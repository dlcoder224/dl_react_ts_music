import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/discover">我的音乐</Link>
        <Link to="/discover">关注</Link>
        <Link to="/discover">发现音乐</Link>
      </div>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
