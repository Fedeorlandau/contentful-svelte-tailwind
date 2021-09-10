import { gql } from '@urql/core';

export const GET_PAGES = gql`
     query getPages($slug: String!){
        pageCollection(where: { slug: $slug }) {
          items {
            title,
            slug,
            componentsCollection {
              items {
                __typename,
                sys {
                  id
                }
              }
            }
          }
        }
      }
    `
export const GET_HERO = gql`
  query getEntry($id: String!){
    hero(id: $id) {
      title,
      description,
      ctaText,
      ctaLink,
      sys {
        __typename
      }
    }
  }
`

export const QueryMap = {
  "Hero": GET_HERO
}