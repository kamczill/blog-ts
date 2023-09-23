import { gql } from '@apollo/client';

export const GET_CASE_STUDIES_ARTICLES = gql`
{
    blogPostCollection(limit:3, where: {contentfulMetadata: {tags: { id_contains_some: "caseStudies"}}}) {
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