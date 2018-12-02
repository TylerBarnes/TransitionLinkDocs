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
import Parser from 'html-react-parser'
import AnimateContent from './AnimateContent'
import PrismStyles from './PrismStyles'
import Img from 'gatsby-image'
import ExampleGrid from './ExampleGrid'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Card, { CardTag } from './Card'

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
      <AnimateContent>
        {Parser(
          unified()
            .use(markdown)
            .use(remark2rehype)
            .use(format)
            .use(html)
            .processSync(input).contents
        )}
      </AnimateContent>
    </PrismStyles>
  ),
  text: ({ text }) => <div>{Parser(text)}</div>,
  menu: ({ menu: { slug } }) => <ContentMenu slug={slug} />,
  image: ({
    image: {
      localFile: {
        childImageSharp: { fluid },
      },
    },
  }) => <Img fluid={fluid} />,
  card_grid: ({ cards }) => {
    return (
      <ExampleGrid>
        {cards.map(({ tag, ...rest }) => {
          console.log(rest)
          return (
            <Link fade to="tutorials/fade" duration={1}>
              <Card>
                <CardTag>{tag.map(tag => tag.name).join(', ')}</CardTag>
                Fade
              </Card>
            </Link>
          )
        })}
      </ExampleGrid>
    )
  },
}
