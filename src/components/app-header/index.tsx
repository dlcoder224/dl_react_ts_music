import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import hederTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.link}> {item.title}</Link>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content warp-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01"></a>
          <div className="title-list">
            {hederTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>123132</HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
