import { gql } from '@apollo/client';

export const GET_RECENT_ARTICLES = gql`
{
    blogPostCollection(order:date_ASC, limit: 3) {
      total
      items {
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
              url(transform:{
                format:WEBP
              })
            }
        }
        }
      }
    }
  }
`;