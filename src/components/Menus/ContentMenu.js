import React from 'react'
import MenuItems from '../MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import ArrowIcon from '../../images/svg/arrow-right-bold.svg'
import * as theme from '../../theme'

const ContentMenu = ({ slug }) => {
  return (
    <MenuItems slug={slug}>
      {items =>
        items.map(({ title, url, wordpress_id }) => {
          return (
            <div key={wordpress_id}>
              <StyledLink paintDrip to={url}>
                <LinkArrow>
                  <ArrowIcon />
                </LinkArrow>
                {title}
              </StyledLink>
            </div>
          )
        })
      }
    </MenuItems>
  )
}

export default ContentMenu

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const LinkArrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding-right: 10px;

  path {
    fill: ${theme.color.lightGreen};
  }
`
