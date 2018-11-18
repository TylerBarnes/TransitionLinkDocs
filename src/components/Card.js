import React from 'react'
import styled from 'react-emotion'

export default function Card(props) {
  return <Styles>{props.children}</Styles>
}

const Styles = styled.div`
  min-height: 200px;
  width: 300px;
  box-shadow: 20px 22px 64px -10px rgba(0, 0, 0, 0.08);
  font-size: 17px;
  letter-spacing: 1.16px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
