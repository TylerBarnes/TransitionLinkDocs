import React, { Component } from 'react'
import styled from 'react-emotion'
import CopyText from 'react-copy-text'

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
      750
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
  position: absolute;
  top: 20px;
  left: 0;
  text-align: left;
  transform: translateY(100%);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 0.75em;
  width: 100%;
  height: 100%;
  pointer-events: none;
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
  }
`

const Styles = styled.section`
  position: relative;
  height: 35px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    ${PMSelector} {
      height: 200%;
      transition-delay: 0s;
      transition: 0.25s all ease-in;
    }
  }
`
