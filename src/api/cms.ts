
import { client } from '../api/graphql';
import { GET_PAGES, QueryMap } from '../graphql/queries'
import type { PageFields, PageProps } from '../types';

export interface LoadPageProps  {
    components: {
        type: string;
        data: unknown;
    }[];
    data?: PageFields;
};

export const loadPage = async (slug: string): Promise<LoadPageProps> => {

		const fetchPage = await client.query<PageProps>(GET_PAGES, { slug }).toPromise();

		const componentsItems = fetchPage.data?.pageCollection.items[0].componentsCollection.items;
		
		const fetchComponents = componentsItems?.map(component => {
			return client.query(QueryMap[component.__typename], { id: component.sys.id}).toPromise().then(componentData => {
				return {
					type: component.__typename.toLowerCase(),
					data: componentData.data[component.__typename.toLowerCase()]
				}
			});
		})

		const components = fetchComponents?.length ? await Promise.all(fetchComponents) : [];

        return {
            components,
            data: fetchPage.data?.pageCollection.items[0]
        }
}