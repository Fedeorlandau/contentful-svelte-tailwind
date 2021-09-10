import Hero from './Hero/Hero.svelte';

export interface MapProps {
	[key: string]: unknown;
}

export const Map: MapProps = {
	hero: Hero
};
