import React from 'react'
import styled from 'styled-components'
import MenuItems from '../../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import * as theme from '../../theme'

const SidebarMenu = () => {
  return (
    <StyledSidebarMenu>
      <MenuItems slug="home-menu">
        {items =>
          items.map(({ url, title, active, activeParent }) => (
            <li key={url}>
              <Link
                className={active || activeParent ? 'active' : ''}
                fade
                to={url}
              >
                {title}
              </Link>
            </li>
          ))
        }
      </MenuItems>
    </StyledSidebarMenu>
  )
}

export default SidebarMenu

const StyledSidebarMenu = styled.ol`
  margin-bottom: 100px;
  .active {
    position: relative;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background: ${theme.color.salmon};
    }
  }
`
