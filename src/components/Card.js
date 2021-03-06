import React from 'react'
import styled from 'styled-components'
import * as theme from '../theme'

export default function Card(props) {
  return <Styles>{props.children}</Styles>
}

const Styles = styled.div`
  min-height: 120px;
  margin: 0 auto;
  width: 220px;
  max-width: 100%;
  box-shadow: 20px 22px 64px -10px rgba(0, 0, 0, 0.08);
  font-size: 17px;
  letter-spacing: 1.16px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 175px;
    margin-bottom: 30px;
    font-size: 1.25rem;
  }
`

export const CardTag = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${theme.color.darkBlue};
  color: white;
  text-transform: uppercase;
  font-size: 0.55em;
  letter-spacing: 1.5px;
  padding: 5px 10px;
`
