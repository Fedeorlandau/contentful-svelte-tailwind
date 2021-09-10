<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { PageFields } from 'src/types';

	import { loadPage } from '../api/cms';

	export const load = async ({ page }: LoadInput) => {

		const { slug } = page.params;
		const { components, data} = await loadPage(slug)

		return {
			props: {
				components: components,
				page: data
			}
		};
	};
</script>

<script lang="ts">
	import { Map } from '../components/map';
	export let page: PageFields;
	export let components: { type: string; data: {[key: string]: unknown }}[];
</script>

{#each components as component}
	<svelte:component this={Map[component.type]} {...component.data} {page} />
{/each}
