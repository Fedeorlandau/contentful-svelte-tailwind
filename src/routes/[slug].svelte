<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Entry } from 'contentful';
	import type { PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contentful';
	import { client } from '../api/graphql';
	import { GET_PAGES } from '../graphql/queries'

	export const load = async ({ page }: LoadInput) => {
		const { slug } = page.params;
		const res = await client.query(GET_PAGES, { slug }).toPromise();

		return {
			props: {
				page: await getPageBySlug(slug),
				graphQlPage: res.data.pageCollection.items[0]
			}
		};
	};
</script>

<script lang="ts">
	import { Map } from '../components/map';
	export let page: Entry<PageFields>;
	export let graphQlPage: Response;
</script>

{JSON.stringify(graphQlPage)}

{#if page.fields.components}
	{#each page.fields.components as component}
		<svelte:component this={Map[component.sys.contentType.sys.id]} {...component.fields} {page} />
	{/each}
{/if}
