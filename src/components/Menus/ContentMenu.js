import React from 'react'
import MenuItems from '../MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import LinkArrow from '../LinkArrow'
import ArrowLink from '../ArrowLink'

const ContentMenu = ({ slug }) => {
  return (
    <MenuItems slug={slug}>
      {items =>
        items.map(({ title, url, wordpress_id }) => {
          return (
            <Item key={wordpress_id}>
              <ArrowLink direction="right" to={url}>
                {title}
              </ArrowLink>
            </Item>
          )
        })
      }
    </MenuItems>
  )
}

export default ContentMenu

const Item = styled.div`
  margin-bottom: 10px;
`
