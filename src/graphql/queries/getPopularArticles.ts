import { gql } from '@apollo/client';

export const GET_POPULAR_ARTICLES = gql`
{
    blogPostCollection(where: {contentfulMetadata: {tags: { id_contains_some: "popular"}}}, limit: 2) {
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