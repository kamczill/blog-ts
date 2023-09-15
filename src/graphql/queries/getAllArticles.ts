import { gql } from '@apollo/client';

export const GET_POPULAR_ARTICLES = gql`
{
    blogPostCollection(limit:5) {
      total
      items {
        contentfulMetadata {
          tags {
            id
          }
        }
        date
        title
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