<script lang="ts">
	import type { Entry } from 'contentful';
	import type { PageFields } from 'src/types';

	export let title: string;
	export let description: string;
	export let ctaText: string;
	export let ctaLink: string;
	export let page: PageFields;
</script>

<div class="relative w-full h-full pb-10">
	<div class="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
		<div class="text-color w-full md:w-1/3 pt-16 lg:pt-36">
			<h1 class="text-7xl w-1/2 xl:w-full xl:text-9xl font-black f-f-l">
				{title}
			</h1>
			<div class="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
				<h2>
					{description}
				</h2>
				<h3>
					Page: {page.title}
				</h3>
			</div>
			<a href={ctaLink} target="_blank"
				><button
					class="hover:opacity-90 text-xl w-full xl:text-3xl xl:w-11/12 mt-4 xl:mt-11 f-f-r py-6 bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
					>{ctaText}</button
				></a
			>
		</div>
		<img
			class="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
			src="https://i.ibb.co/9GMTkW3/desktop.png"
			alt="sample page"
			role="img"
		/>
	</div>
</div>

<style>
	h1 {
		letter-spacing: -0.025em;
	}
</style>
