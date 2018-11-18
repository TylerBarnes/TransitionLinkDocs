import React from 'react'
import styled from 'styled-components'

export default function Edges(props) {
  return <Section>{props.children}</Section>
}

const Section = styled.section`
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;
`
