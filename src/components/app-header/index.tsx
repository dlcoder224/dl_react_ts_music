import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import hederTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content warp-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {/* {hederTitles.map((title, index) => (
              return
            ))} */}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
