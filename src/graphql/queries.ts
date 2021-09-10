import { gql } from '@urql/core';

export const GET_PAGES = gql`
     query getPages($slug: String!){
        pageCollection(where: { slug: $slug }) {
          items {
            title,
            slug
          }
        }
      }
    `