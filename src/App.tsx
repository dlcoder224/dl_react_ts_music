import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'

import { useAppSelector, useAppDispatch, useAppShallowEqual } from './store'
import { changeCountAction } from './store/modules/counter'

import routes from './router'

function App() {
  const { count } = useAppSelector((state) => {
    return {
      count: state.counter.count
    }
  }, useAppShallowEqual)

  const dispath = useAppDispatch()
  const changeMessageFn = () => {
    console.log('redux-change')
    dispath(changeCountAction(123))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/discover">我的音乐</Link>
        <Link to="/discover">关注</Link>
        <Link to="/discover">发现音乐</Link>
      </div>
      <h2>计数：{count}</h2>
      <button onClick={changeMessageFn}>修改Message</button>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
