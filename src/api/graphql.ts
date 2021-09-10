import { createClient } from '@urql/core';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_TOKEN;

export const client = createClient({
    url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?access_token=${accessToken}`,
});