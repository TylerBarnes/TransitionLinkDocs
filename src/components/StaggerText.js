import React, { Component } from 'react'
import { SplitText } from '../utils/SplitText'
import TimelineMax from 'gsap'
import styled from 'styled-components'

class StaggerText extends Component {
  constructor(props) {
    super(props)

    this.text = React.createRef()
  }

  wrap = (el, wrapper) => {
    el.parentNode.insertBefore(wrapper, el)
    wrapper.appendChild(el)
    wrapper.setAttribute('class', 'char-container')
  }

  animateText = nodes => {
    new TimelineMax.staggerFrom(nodes, 1, { yPercent: '+=100%' }, 0.1)
  }

  componentDidMount() {
    if (typeof document === 'undefined') return

    this.textSplit = new SplitText(this.text, {
      type: 'lines',
    })

    for (const char of this.textSplit.lines) {
      this.wrap(char, document.createElement('span'))
    }

    this.animateText(this.textSplit.lines)
  }

  render() {
    const { props } = this
    return (
      <div className="staggered-text">
        <Container ref={n => (this.text = n)}>{props.children}</Container>
      </div>
    )
  }
}

export default StaggerText

const Container = styled.div`
  .char-container {
    position: relative;
    overflow: hidden;
    padding: 2px;
    display: inline-block;
  }
`
