import React from 'react'
import marked from 'marked'
import MenuItems from './MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'

const FlexibleContent = ({ rows }) => {
  return rows.map(({ __typename: typename, ...data }, index) => {
    const type = typename.replace('WordPressAcf_', '')
    const Component = Components[type]
    return Component ? <Component key={index} {...data} /> : console.log(type)
  })
}

export default FlexibleContent

const Components = {
  markdown: ({ markdown }) => (
    <article dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
  ),
  npm__yarn: ({ npm, yarn }) => (
    <div>
      {npm}
      <br />
      {yarn}
    </div>
  ),
  code: ({ code }) => <div dangerouslySetInnerHTML={{ __html: code }} />,
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