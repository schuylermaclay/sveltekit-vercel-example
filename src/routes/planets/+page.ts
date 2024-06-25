// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const pageParam = url.searchParams.get('page');

	// fetch a page of planets from SWAPI
	async function getPlanets() {
		const res = await fetch(`https://swapi.dev/api/planets/?limit=10&page=${pageParam}`);
		if (res.ok) {
			const data = await res.json();
			console.log(`data: ${JSON.stringify(data)}`);
			console.log(`data: ${JSON.stringify(data.results.length)}`);
			return data.results;
		}
	}

	return {
		planets: await getPlanets()
	};
};
