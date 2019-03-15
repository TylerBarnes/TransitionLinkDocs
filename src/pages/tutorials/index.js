import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Card, { CardTag } from '../../components/Card'
import styled from 'styled-components'
import SidebarLayout from '../../layout/SidebarLayout'
import LetterSlide from '../../components/LetterSlide'
import PaginationLinks from '../../components/PaginationLinks'
import ArrowLink from '../../components/ArrowLink'
import * as theme from '../../theme'

const Examples = () => {
  return (
    <SidebarLayout>
      <LetterSlide>
        <h1>Tutorials & Examples</h1>
      </LetterSlide>
      <p>
        Quisque eu ipsum aliquet risus suscipit maximus. Aenean pretium bibendum
        eros id semper. Sed ultrices, quam sed placerat mollis, leo sem
        scelerisque risus, ac sagittis dolor dolor eget nisl. Maecenas in eros
        nec ante suscipit finibus.
      </p>
      <ExampleGrid>
        <Link fade to="tutorials/fade" duration={1}>
          <Card>
            <CardTag>AniLink</CardTag>
            Fade
          </Card>
        </Link>
        <Link cover bg={theme.color.lightGrey} to="tutorials/cover">
          <Card>
            <CardTag>AniLink</CardTag>
            Cover
          </Card>
        </Link>
        <Link paintDrip hex={theme.color.lightGrey} to="tutorials/paint-drip">
          <Card>
            <CardTag>AniLink</CardTag>
            Paint Drip
          </Card>
        </Link>
        <Link swipe to="tutorials/swipe">
          <Card>
            <CardTag>AniLink</CardTag>
            Swipe
          </Card>
        </Link>
        <Link fade duration={1} to="tutorials/react-pose">
          <Card>
            <CardTag>TransitionLink</CardTag>
            React Pose
          </Card>
        </Link>
        <Link fade duration={1} to="tutorials/react-pose">
          <Card>
            <CardTag>TransitionLink, AniLink</CardTag>
            This Site
          </Card>
        </Link>
      </ExampleGrid>
      <PaginationLinks>
        <ArrowLink direction="left" to="/overview/">
          Back to Overview
        </ArrowLink>
        <ArrowLink direction="right" to="/usage/">
          Up next Docs
        </ArrowLink>
      </PaginationLinks>
    </SidebarLayout>
  )
}

export const ExampleGrid = styled.section`
  margin: 60px 0 100px;
  @supports (display: grid) {
    @media screen and (min-width: 450px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 30px;
    }
    @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      width: 100%;
      min-height: 180px;
    }
  }
`

export default Examples
