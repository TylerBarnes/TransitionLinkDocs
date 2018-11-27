import React from 'react'

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

import ContentMenu from './Menus/ContentMenu'

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
  ),
  text: ({ text }) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  menu: ({ menu: { slug } }) => <ContentMenu slug={slug} />,
}
