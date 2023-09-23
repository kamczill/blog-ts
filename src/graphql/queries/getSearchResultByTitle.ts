import { gql } from '@apollo/client';

export const GET_SEARCH_RESULT_BY_TITLES = gql`
query GetBlogPosts($titleContains: String!) {
    blogPostCollection(where: {title_contains: $titleContains}, limit: 3) {
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