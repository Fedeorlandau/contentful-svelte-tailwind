<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Entry } from 'contentful';
	import type { PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contentful';

	export const load = async ({ page }: LoadInput) => {
		return {
			props: {
				page: await getPageBySlug(`/${page.params.slug}`)
			}
		};
	};
</script>

<script lang="ts">
	import { Map } from '../components/map';
	export let page: Entry<PageFields>;
</script>

{#if page.fields.components}
	{#each page.fields.components as component}
		<svelte:component this={Map[component.sys.contentType.sys.id]} {...component.fields} />
	{/each}
{/if}
