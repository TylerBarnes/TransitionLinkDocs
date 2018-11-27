import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from '../../layout/SidebarLayout'
import FlexibleContent from '../../components/FlexibleContent'

export default function Docs(props) {
  const {
    wordpressWpCollections: { post_title, post_content, acf },
  } = props.data

  return (
    <SidebarLayout>
      {!!post_title && <h1>{post_title}</h1>}
      {!!post_content && (
        <div dangerouslySetInnerHTML={{ __html: post_content }} />
      )}
      {!!acf && <FlexibleContent rows={acf.content_collection} />}
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
