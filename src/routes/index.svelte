<script context="module" lang="ts">
	import type { PageFields } from '../types';
	import { loadPage } from '../api/cms';

	export const load = async () => {
		const { components, data } = await loadPage('/')

		return {
			props: {
				components,
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