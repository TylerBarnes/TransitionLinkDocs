import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import LinkArrow from '../components/LinkArrow'
import * as theme from '../theme'

const ArrowLink = props => {
  return props.to && props.children ? (
    <StyledAni
      cover
      bg="white"
      direction={props.direction || 'right'}
      to={props.to}
      light={props.light}
    >
      <LinkArrow reverse={props.direction === 'left'} />
      {props.children}
    </StyledAni>
  ) : null
}
export default ArrowLink

const StyledAni = styled(AniLink)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  ${props =>
    props.light
      ? `color: ${
          theme.color.lightGreen
        }; letter-spacing: 1.5px; font-size: 0.8rem`
      : `color: ${theme.color.green}; letter-spacing: 2px; font-size: 1rem`};
`
