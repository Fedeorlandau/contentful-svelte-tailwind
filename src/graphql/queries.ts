import { gql } from '@apollo/client/core/core.cjs.js';

export const GET_PAGES = (slug: string) => gql`
     query {
        pageCollection(where: { slug: "${slug}" }) {
          items {
            title,
            slug
          }
        }
      }
    `


