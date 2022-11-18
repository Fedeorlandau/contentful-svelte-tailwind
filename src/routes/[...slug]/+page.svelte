
<script lang="ts">
	import type {PageData} from './$types';
	import { Map } from '../../components/map';
	import type { PageFields } from 'src/types';
	export let data: PageData;
	export let components: { type: string; data: unknown}[];
	export let page: PageFields | undefined;
	$: data,
		(() => {
			// and here you do the update (its like watch in vuejs)
			// document.title = `Page ${data.title}`;
			page = data.page
			components = data.components
		})();
	
</script>

{#each components as component}
	<svelte:component this={Map[component.type]} {...component.data} {page} />
{/each}
