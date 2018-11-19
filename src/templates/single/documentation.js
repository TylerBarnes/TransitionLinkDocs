import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from '../../layout/SidebarLayout'

export default function Docs(props) {
  const {
    wordpressWpCollections: { post_title, post_content },
  } = props.data

  return (
    <SidebarLayout>
      {!!post_title && <h1>{post_title}</h1>}
      <h2>Default docs template</h2>
      {!!post_content && (
        <div dangerouslySetInnerHTML={{ __html: post_content }} />
      )}
    </SidebarLayout>
  )
}

export const CollectionQuery = graphql`
  query Docs($id: Int!) {
    wordpressWpCollections(wordpress_id: { eq: $id }) {
      post_title
      post_content
    }
  }
`
