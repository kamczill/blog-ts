import { gql } from '@apollo/client';

export const GET_LATEST_ARTICLE = gql`
{
    blogPostCollection(order:date_DESC, limit:1) {
      total
      items {
        date
        title
        content{
          json
        }
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