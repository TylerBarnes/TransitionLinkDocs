import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItems from '../../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import * as theme from '../../theme'

export default class SidebarMenu extends Component {
  render() {
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
                  <LinkUnderline />
                </Link>
              </li>
            ))
          }
        </MenuItems>
      </StyledSidebarMenu>
    )
  }
}

const LinkUnderline = styled.div`
  position: absolute;
  bottom: -6px;
  width: 100%;
  overflow: hidden;

  &:before {
    content: ' ';
    display: block;
    height: 4px;
    background-color: ${theme.color.lightGreen};
    transform: translateX(-102%);
    transition: 1s ease transform, 1s linear background-color;
    transition-delay: 1s, 0.5s;
  }
`

const StyledSidebarMenu = styled.ol`
  margin-bottom: 100px;
  a {
    position: relative;
  }

  .active {
    ${LinkUnderline} {
      &:before {
        transform: translateX(0);
        background-color: ${theme.color.salmon};
        transition-delay: 0s;
      }
    }
  }
`
