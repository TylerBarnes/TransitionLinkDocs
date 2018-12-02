import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import * as theme from '../theme'
import SidebarMenu from '../components/Menus/SidebarMenu'

export default function SidebarLayout(props) {
  return (
    <LayoutStyles>
      <Edges>
        <Grid>
          <SidebarSpace size={{ md: 1 / 5 }} />
          <Content size={{ md: 4 / 5 }}>
            {props.children}{' '}
            <Footer>
              <TyLink href="https://tylerbarnes.ca" target="_blank">
                Made with Love by <span>TY</span>.
              </TyLink>
            </Footer>
          </Content>
        </Grid>
      </Edges>
    </LayoutStyles>
  )
}

export const DefaultSidebar = ({ show, fixed }) => {
  return (
    <SidebarStyles show={show} fixed={fixed}>
      <SidebarCover show={show} />
      <SidebarMenu />
    </SidebarStyles>
  )
}

const Footer = styled.footer`
  padding-top: 150px;
  padding-bottom: 20px;
  font-size: 0.75rem;
`

const TyLink = styled.a`
  &,
  span {
    color: ${theme.color.lightGreen};
  }
  span {
    text-decoration: underline;
  }
`

const SidebarCover = styled.div`
  background: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10;
  transform: translateX(0);
  transition: 0.75s ease-out transform, 0s opacity;
  transition-delay: 0.5s, 0;
  opacity: 1;

  ${props =>
    props.show
      ? `
      transform: translateX(-100%);
      opacity: 0;
      transition-delay: 0.5s, 3s;
    `
      : null};
`

const SidebarStyles = styled.nav`
  ${props =>
    props.fixed
      ? `
    position: fixed;
    top: 210px;
    max-width: 200px;
    `
      : null};

  transition: 0.5s ease opacity 0.5s;
  transition-delay: 0s;
  transform: translateX(-10px);
  ${props =>
    !props.show
      ? `
    opacity: 0;
    transition-delay: 1s;
    `
      : null};

  z-index: 2;
  font-size: 16px;

  li {
    margin-bottom: 5px;
  }
`

const SidebarSpace = styled(Grid.Unit)`
  padding-top: 88px;
`

const LayoutStyles = styled.section`
  padding-top: 120px;
  min-height: 100vh;
  background: white;
`

const Content = styled(Grid.Unit)``
