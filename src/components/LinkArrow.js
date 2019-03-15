import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../images/svg/arrow-right-bold.svg'
import * as theme from '../theme'

const LinkArrow = props => {
  return (
    <LinkArrowStyles {...props}>
      <ArrowIcon />
    </LinkArrowStyles>
  )
}

const LinkArrowStyles = styled.span`
  display: inline-flex;
  align-items: center;

  ${props =>
    props.reverse
      ? 'transform: rotate(180deg); padding-left: 10px;'
      : 'padding-right: 10px;'};

  path {
    fill: ${theme.color.lightGrey};
  }
`

export default LinkArrow
