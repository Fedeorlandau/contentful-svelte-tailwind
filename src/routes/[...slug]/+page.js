import { loadPage } from '../../api/cms';
export const csr = false;

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
	const slug = params.slug || '/';
	const { components, data } = await loadPage(slug);
	return {
		components,
		page: data
	};
}
