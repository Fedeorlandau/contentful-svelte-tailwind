<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Entry } from 'contentful';
	import type { PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contentful';
	import axios from 'axios';

	export const load = async ({ page }: LoadInput) => {
		const res = await axios.post('http://localhost:3000/qry/page', { slug: page.params.slug});
		return {
			props: {
				page: await getPageBySlug(`${page.params.slug}`),
				graphQlPage: res.data
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
