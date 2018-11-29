import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from '../../layout/SidebarLayout'
import FlexibleContent from '../../components/FlexibleContent'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function Docs(props) {
  console.log(props)
  const {
    wordpressWpCollections: { post_title, post_content, acf },
  } = props.data

  const { nextPost, previousPost } = props.pageContext

  return (
    <SidebarLayout>
      {!!post_title && <h1>{post_title}</h1>}
      {!!post_content && (
        <div dangerouslySetInnerHTML={{ __html: post_content }} />
      )}
      {!!acf && <FlexibleContent rows={acf.content_collection} />}
      <AniLink fade to={previousPost.pathname}>
        Previous post
      </AniLink>
      <AniLink fade to={nextPost.pathname}>
        Next post
      </AniLink>
    </SidebarLayout>
  )
}

export const CollectionQuery = graphql`
  query Docs($id: Int!) {
    wordpressWpCollections(wordpress_id: { eq: $id }) {
      post_title
      post_content
      acf {
        content_collection {
          __typename
          ... on WordPressAcf_text {
            text
          }

          ... on WordPressAcf_markdown {
            markdown
          }

          ... on WordPressAcf_menu {
            menu {
              wordpress_id
              name
              slug
            }
          }

          ... on WordPressAcf_image {
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
