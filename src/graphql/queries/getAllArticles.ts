import { gql } from '@apollo/client';

export const GET_ALL_ARTICLES = gql`
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