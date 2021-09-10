import { createClient } from '@urql/core';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT;

export const client = createClient({
	url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`
});
