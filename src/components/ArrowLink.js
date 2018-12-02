import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import LinkArrow from '../components/LinkArrow'
import * as theme from '../theme'

const ArrowLink = props => {
  return props.to && props.children ? (
    <StyledAni
      noBorder={props.noBorder}
      light={props.light}
      direction={props.direction || 'right'}
    >
      <AniLink
        cover
        bg="white"
        direction={props.direction || 'right'}
        to={props.to}
      >
        <LinkArrow reverse={props.direction === 'left'} />
        {props.children}
      </AniLink>
    </StyledAni>
  ) : null
}
export default ArrowLink

const StyledAni = styled.span`
  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 20px;
    ${props =>
      props.light
        ? `color: ${
            theme.color.lightGreen
          }; letter-spacing: 1.5px; font-size: 0.8rem`
        : `
      color: ${theme.color.green}; letter-spacing: 2px; font-size: 1rem;
      position: relative;

      &:after {
        content: ' ';
        position: absolute;
        bottom: -5px;
        right: 0;
        height: 4px;
        width: calc(100% - 34px);
        background: ${theme.color.lightGreen}
      }
      `};

    ${props => (props.noBorder ? `&:after { content: unset; }` : '')};
  }
`
