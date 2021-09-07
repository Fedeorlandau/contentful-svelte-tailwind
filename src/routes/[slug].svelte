<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Entry, PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contenstack';

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

{#each page.components as component}
	<svelte:component this={Map[component._content_type_uid]} {...component} />
{/each}

<h1>
	{page.title}
</h1>
