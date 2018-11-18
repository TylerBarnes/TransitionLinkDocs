import React from "react";
import { graphql } from "gatsby";

export default function home(props) {
  const {
    wordpressWpCollections: { post_title, post_content }
  } = props.data;

  return (
    <>
      {!!post_title && <h1>{post_title}</h1>}
      {!!post_content && (
        <div dangerouslySetInnerHTML={{ __html: post_content }} />
      )}
    </>
  );
}

export const CollectionQuery = graphql`
  query DefaultSinglePost($id: Int!) {
    wordpressWpCollections(wordpress_id: { eq: $id }) {
      post_title
      post_content
    }
  }
`;
