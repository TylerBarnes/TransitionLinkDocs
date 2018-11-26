import React from 'react'
import MenuItems from './MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'

import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import format from 'rehype-format'
import html from 'rehype-stringify'
import 'clipboard'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

import PrismStyles from './PrismStyles'

class FlexibleContent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const { rows } = this.props
    return rows.map(({ __typename: typename, ...data }, index) => {
      const type = typename.replace('WordPressAcf_', '')
      const Component = Components[type]
      return Component ? (
        <Component key={index} {...data} />
      ) : (
        console.warn(`No component found for ${type} type`)
      )
    })
  }
}

export default FlexibleContent

const Components = {
  markdown: ({ markdown: input }) => (
    // <HljsStyles>
    <PrismStyles>
      <article
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(markdown)
            .use(remark2rehype)
            .use(format)
            .use(html)
            .processSync(input).contents,
        }}
      />
    </PrismStyles>
    // </HljsStyles>
  ),
  npm__yarn: ({ npm, yarn }) => (
    <div>
      {npm}
      <br />
      {yarn}
    </div>
  ),
  text: ({ text }) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  menu: ({ menu: { slug } }) => (
    <MenuItems slug={slug}>
      {items =>
        items.map(({ title, url, wordpress_id }) => {
          return (
            <div key={wordpress_id}>
              <Link paintDrip to={url}>
                {title}
              </Link>
            </div>
          )
        })
      }
    </MenuItems>
  ),
}
