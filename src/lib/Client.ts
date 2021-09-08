import { ApolloClient } from '@apollo/client/core/core.cjs.js';
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_TOKEN;

export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?access_token=${accessToken}`,
    cache: new InMemoryCache()
});
