import React from 'react'
import styled from 'styled-components'
import * as theme from '../theme'

const Box = ({ title, children, darkTitle }) => {
  return (
    <BoxStyles>
      <BoxTitle darkTitle={darkTitle}>{title}</BoxTitle>
      {children}
    </BoxStyles>
  )
}

export default Box

const BoxTitle = styled.h4`
  background: white;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 10px;
  letter-spacing: 2px;
  font-size: 0.8rem;
  padding: 10px;
  color: ${props =>
    props.darkTitle ? theme.color.green : theme.color.lightGreen};
`

const BoxStyles = styled.section`
  position: relative;
  display: inline-block;
  border: 3px solid ${theme.color.lightGreen};
  padding: 30px 60px 30px 40px;
  margin: 30px 0 80px;

  & + & {
    margin-top: -20px;
  }

  > *:last-child,
  > *:last-child a {
    margin-bottom: 0;
  }
`
