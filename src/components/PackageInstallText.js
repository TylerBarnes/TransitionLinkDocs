import React from 'react'
import styled from 'react-emotion'

export default function PackageInstallText(props) {
  const HeadingSize = props.headingSize ? props.headingSize : 'h3'
  return (
    <Styles>
      <PMSelector>
        <span>yarn add</span>
        <span>npm install</span>
      </PMSelector>
      <HeadingSize>{props.children}</HeadingSize>
    </Styles>
  )
}

const Styles = styled.section`
  position: relative;
  display: inline-block;
`

const PMSelector = styled.div`
  position: absolute;
  left: -10px;
  bottom: 0;
  transform: translateX(-100%);

  span {
    display: block;
    text-align: right;
  }
`
