import React, { Component } from 'react'
import styled from 'styled-components'
import CopyText from 'react-copy-text'
import * as theme from '../theme'

export default class PackageInstallText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pm: 'yarn',
      textToCopy: '',
      copiedMessage: false,
    }
  }

  setCopyText = () => {
    const { pm } = this.state
    let textToCopy

    if (pm === 'yarn') {
      textToCopy = 'yarn add gatsby-plugin-transition-link'
    } else {
      textToCopy = 'npm install gatsby-plugin-transition-link'
    }

    this.setState({ textToCopy: textToCopy })
  }

  onCopied = () => {
    const { pm } = this.state

    let textToCopy

    if (pm === 'yarn') {
      textToCopy = 'yarn add gatsby-plugin-transition-link'
    } else {
      textToCopy = 'npm install gatsby-plugin-transition-link'
    }

    this.setState({ textToCopy: textToCopy })
  }

  changePM = pm => {
    this.setState({ pm: pm })
  }

  onCopied = () => {
    const { pm } = this.state

    let copiedMessage

    if (pm === 'yarn') {
      copiedMessage = 'copied yarn'
    } else {
      copiedMessage = 'copied npm'
    }

    this.setState({ copiedMessage: copiedMessage })

    setTimeout(
      () => this.setState({ copiedMessage: false, textToCopy: '' }),
      1000
    )
  }

  render() {
    const { props } = this
    const { copiedMessage } = this.state
    const HeadingSize = props.headingSize ? props.headingSize : 'h3'

    return (
      <Styles onClick={this.setCopyText}>
        <PMSelector className="pm-selector">
          <div className="inner">
            <span onMouseEnter={() => this.changePM('npm')}>npm install</span>
            <span onMouseEnter={() => this.changePM('yarn')}>yarn add</span>
          </div>
        </PMSelector>
        <HeadingSize onMouseEnter={() => this.changePM('yarn')}>
          {props.children}
        </HeadingSize>
        <CopyText text={this.state.textToCopy} onCopied={this.onCopied} />
        <CopyMessage show={copiedMessage}>{copiedMessage}</CopyMessage>
      </Styles>
    )
  }
}

const CopyMessage = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 0.75em;
  pointer-events: none;
  padding: 20px;
  background: ${theme.color.green};
  color: white;
  transform: translateY(0);

  &:empty {
    transform: translateY(-100%);
  }
`

const PMSelector = styled.div`
  position: absolute;
  height: 100%;
  overflow-y: hidden;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: 0.5s all ease-out;
  transition-delay: 0.25s;
  width: 200px;

  .inner {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 20px;
  }

  span {
    display: block;
    text-align: right;
    color: ${theme.color.lightGreen};
  }
`

const Styles = styled.section`
  position: relative;
  height: 32px;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 30px;

  &,
  h3 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1.1px;
    width: unset;
    max-width: unset;
  }

  &:hover {
    ${PMSelector} {
      height: 200%;
      transition-delay: 0s;
      transition: 0.25s all ease-in;
    }
  }
`
