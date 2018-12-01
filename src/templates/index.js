import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from '../layout/SidebarLayout'
import FlexibleContent from '../components/FlexibleContent'
import ArrowLink from '../components/ArrowLink'
import PaginationLinks from '../components/PaginationLinks'
import LetterSlide from '../components/LetterSlide'

export default function Docs(props) {
  const {
    wordpressWpCollections: { post_type, post_title, post_content, acf },
  } = props.data

  const { nextPost, previousPost } = props.pageContext

  return (
    <SidebarLayout>
      {!!previousPost.pathname &&
        previousPost.post_type === 'documentation' &&
        previousPost.post_type === post_type && (
          <ArrowLink direction="left" light={1} to={previousPost.pathname}>
            Back to {previousPost.post_title}
          </ArrowLink>
        )}
      <LetterSlide>{!!post_title && <h1>{post_title}</h1>}</LetterSlide>
      {!!post_content && (
        <div dangerouslySetInnerHTML={{ __html: post_content }} />
      )}
      {!!acf && <FlexibleContent rows={acf.content_collection} />}

      <PaginationLinks>
        {!!previousPost.pathname &&
          previousPost.post_type === 'documentation' &&
          previousPost.post_type === post_type && (
            <ArrowLink direction="left" to={previousPost.pathname}>
              {!!previousPost.post_title
                ? `back to ${previousPost.post_title}`
                : 'Previous post'}
            </ArrowLink>
          )}
        {!!nextPost.pathname &&
          nextPost.post_type === 'documentation' &&
          nextPost.post_type === post_type && (
            <ArrowLink direction="right" to={nextPost.pathname}>
              {!!nextPost.post_title
                ? `up next ${nextPost.post_title}`
                : 'Next post'}
            </ArrowLink>
          )}
      </PaginationLinks>
    </SidebarLayout>
  )
}

export const CollectionQuery = graphql`
  query Docs($id: Int!) {
    wordpressWpCollections(wordpress_id: { eq: $id }) {
      post_title
      post_content
      post_type
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
