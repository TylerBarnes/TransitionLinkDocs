import React, { Component } from 'react'

export default class AnimateContent extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()
  }
  componentDidMount() {
    if (typeof IntersectionObserver === 'undefined') return // no intersection observer support so just bail out;

    const elements = this.wrapper.querySelectorAll(
      ':scope > p, :scope > pre, :scope > h1,:scope > h2,:scope > h3,:scope > h4, :scope > div, :scope > ul, :scope > .code-toolbar, :scope > .toolbar-item'
    )

    const config = {
      threshold: 0.5,
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          // entry.target.style.transform = 'translateY(0)'
        } else {
          entry.target.style.opacity = 0.05
        }
      })
    }, config)

    elements.forEach(element => {
      observer.observe(element)
      element.style.opacity = 0.03
      // element.style.transform = 'translateY(10px)'
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
