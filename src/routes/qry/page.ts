import { client } from '../../lib/Client';
import { GET_PAGES } from '../../graphql/queries';
import type { Response, Request } from '@sveltejs/kit';

export async function post(request: Request): Promise<Response> {
    try {
        const result = await client.query({query: GET_PAGES(request.body['slug'])});
        return {
            status: 200,
            body: result.data,
            headers: {}
        }
    } catch (err) {
        return {
            status: 500,
            body: 'Error retrieving data',
            headers: {}
        }
    }
}