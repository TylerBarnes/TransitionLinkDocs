import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
  return <Styles>{props.children}</Styles>
}

const Styles = styled.div`
  min-height: 180px;
  width: 100%;
  margin: 0 auto;
  max-width: 317px;
  box-shadow: 20px 22px 64px -10px rgba(0, 0, 0, 0.08);
  font-size: 17px;
  letter-spacing: 1.16px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
