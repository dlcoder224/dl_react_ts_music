import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content warp-v1">
        <Link to="/discover">发现音乐</Link>
        <Link to="/discover">我的音乐</Link>
        <Link to="/discover">关注</Link>
        <Link to="/discover">发现音乐</Link>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
