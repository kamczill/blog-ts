import { gql } from '@apollo/client';

export const GET_SINGLE_POST = gql`
query GetBlogPost($slug: String!) {
  blogPostCollection(where: {slug: $slug}) {
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