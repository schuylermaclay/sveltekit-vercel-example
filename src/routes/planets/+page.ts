// import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
	console.log(`url: ${url}`);
	console.log(`fetch: ${fetch}`);

	return {
		planets: [
			{ id: 1, name: 'Earth' },
			{ id: 2, name: 'Mars' }
		]
	};
}
