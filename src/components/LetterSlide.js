import React, { Component } from 'react'
import { SplitText } from '../utils/SplitText'
import { TimelineMax } from 'gsap'
import styled from 'styled-components'
import userPrefersReducedMotion from '../utils/userPrefersReducedMotion'

class LetterSlide extends Component {
  constructor(props) {
    super(props)

    this.text = React.createRef()
    this.wrapper = React.createRef()
  }

  wrap = (el, wrapper) => {
    el.parentNode.insertBefore(wrapper, el)
    wrapper.appendChild(el)
    wrapper.setAttribute('class', 'char-container')
  }

  animateText = nodes => {
    new TimelineMax()
      .from(this.wrapper, 1, {
        opacity: 0,
        ease: Power0.easeIn,
      })
      .staggerFrom(nodes, 1, { xPercent: '+=100%' }, 0.1, 0)
  }

  componentDidMount() {
    if (userPrefersReducedMotion()) {
      return
    }
    if (typeof document === 'undefined') return

    this.textSplit = new SplitText(this.text, {
      type: 'chars',
    })

    for (const char of this.textSplit.chars) {
      this.wrap(char, document.createElement('span'))
    }

    this.animateText(this.textSplit.chars)
  }

  render() {
    const { props } = this
    return (
      <div ref={n => (this.wrapper = n)}>
        <Container ref={n => (this.text = n)}>{props.children}</Container>
      </div>
    )
  }
}

export default LetterSlide

const Container = styled.div`
  .char-container {
    position: relative;
    overflow: hidden;
    padding: 2px;
    display: inline-block;
  }
`
