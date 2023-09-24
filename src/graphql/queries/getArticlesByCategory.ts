import { gql } from '@apollo/client';

export const GET_ARTICLES_BY_CATEGORY = gql`
query GetBlogPosts($category: [String!]) {
    blogPostCollection(where: {contentfulMetadata: {tags: { id_contains_some: $category}}}) {
      items {
        contentfulMetadata {
          tags {
            id
          }
        }
        title
        slug
        coverImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        author {
          __typename
          ... on Author {
            name
            surname
            avatar {
              url(transform: {
                format: WEBP
              })
            }
          }
        }
      }
    }
  }
`;