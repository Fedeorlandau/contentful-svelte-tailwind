import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { imagetools } from "vite-imagetools"
import path from 'path';

console.log( path.resolve('src/static'))
export default {
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
				  '$static': path.resolve('src/static/')
				}
			  },
			plugins: [imagetools({force: true})],
			
		}
	}
};
