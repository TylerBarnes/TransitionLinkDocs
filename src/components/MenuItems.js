import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { LocationProvider } from '@reach/router'

export default ({ slug: propSlug, children }) => {
  return propSlug ? (
    <LocationProvider>
      {({ location: { pathname } }) => (
        <StaticQuery
          query={graphql`
            {
              allWordsbyMenus {
                edges {
                  node {
                    slug
                    items {
                      title
                      pathname
                      wordpress_id
                    }
                  }
                }
              }
            }
          `}
          render={({ allWordsbyMenus: wpmenu }) => {
            const menu = wpmenu.edges.filter(
              ({ node }) => node.slug === propSlug
            )

            let items = menu.length > 0 ? menu[0].node.items : false

            if (items) {
              items.forEach(item => {
                item.active = !!(item.pathname === pathname)
                item.activeParent = !!(
                  !item.active && pathname.startsWith(item.pathname)
                )
              })
            }

            if (children) {
              return children(items)
            }

            return items ? (
              <div className="">
                {items.map(item => (
                  <Link
                    key={`menu-item-${item.wordpress_id}`}
                    to={item.pathname}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : (
              <h2>
                {propSlug} doesn't return anything. Maybe you have a spelling
                error?
              </h2>
            )
          }}
        />
      )}
    </LocationProvider>
  ) : (
    <h2>Add a WP menu slug to return menu items.</h2>
  )
}
