import React, { Component } from 'react'

export default class AnimateContent extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()
  }
  componentDidMount() {
    const elements = this.wrapper.querySelectorAll(
      'p, pre, h1,h2,h3,h4, div, ul, .code-toolbar, .toolbar-item'
    )

    const config = {
      threshold: 0.8,
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = 'translateY(0)'
        } else {
          entry.target.style.opacity = 0.03
        }
      })
    }, config)

    elements.forEach(element => {
      observer.observe(element)
      element.style.opacity = 0.03
      element.style.transform = 'translateY(10px)'
    })

    setTimeout(() => {
      elements.forEach(element => {
        element.style.transition = '1s opacity ease-in, .25s transform ease'
      })
    }, 500)
  }

  render() {
    return <div ref={n => (this.wrapper = n)}>{this.props.children}</div>
  }
}
