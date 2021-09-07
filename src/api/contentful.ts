import * as contentful from 'contentful';
import type { PageFields } from 'src/types';
import type { Entry } from 'contentful';


const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN as string
});



export const getPageBySlug = async (slug: string)
    : Promise<Entry<PageFields>> => {
    const entries = await client.getEntries<PageFields>({
        'content_type': 'page',
        'fields.slug': slug
    })

    return entries.items[0];
};