<script context="module" lang="ts">
	import type { Entry } from 'contentful';
	import type { PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contentful';
	export const load = async () => {
		const page = await getPageBySlug(`/`);
		return {
			props: {
				page
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
		<svelte:component this={Map[component.sys.contentType.sys.id]} {...component.fields} {page} />
	{/each}
{/if}
