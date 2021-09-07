import contentstack from 'contentstack';
import type { PageFields } from 'src/types';

const region = import.meta.env.VITE_CONTENSTACK_REGION;
const config = {
    api_key: import.meta.env.VITE_CONTENTSTACK_STACK_API_KEY as string,
    delivery_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT as string,
    region: region === 'EU' ? contentstack.Region.EU : contentstack.Region.US
};

export const client = contentstack.Stack(config);

export const getPageBySlug = async (slug: string)
    : Promise<PageFields | undefined> => {
    const query = client
        .ContentType('page')
        .Query()
        .includeCount()
        .includeContentType()
        .includeReference(['components'])
        .addParam('include_dimension', 'true')
        .toJSON();
    const result = await query.where('url', slug).findOne();
    return { ...result, _content_type_uid: 'page' };
};