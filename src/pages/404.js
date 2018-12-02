import React, { Component } from 'react'
import styled from 'styled-components'
import Edges from '../components/Edges'
import StaggerText from '../components/StaggerText'
import Link from 'gatsby-plugin-transition-link/AniLink'
import SidebarLayout from '../layout/SidebarLayout'
import LetterSlide from '../components/LetterSlide'

class home extends Component {
  render() {
    return (
      <SidebarLayout>
        <Edges>
          <LetterSlide>
            <h1 style={{ fontSize: 60 }}>Oopsies,</h1>
            <h2>nothing to see here! 🤔</h2>
          </LetterSlide>
          <StaggerText>
            <Link swipe direction="left" bg="white" to="/">
              <span style={{ textDecoration: 'underline' }}>
                Try and catch again tho?
              </span>
            </Link>
          </StaggerText>
        </Edges>
      </SidebarLayout>
    )
  }
}

export default home

const Styles = styled.section``
