import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),
		target: '#svelte'
	}
};
