// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
// import { getPlanetsFromLocal } from '$lib/indexedDB';

export const load: PageLoad = async ({ fetch, url }) => {
	const pageParam = url.searchParams.get('page');
	const searchParam = url.searchParams.get('search');
	const urlString = `https://swapi.dev/api/planets/?limit=10&page=${pageParam}&search=${searchParam}`;

	async function getPlanetsFromLocalOrRemote() {
		// let planets;
		if (typeof window !== 'undefined' && typeof indexedDB !== 'undefined') {
			// planets = await getPlanetsFromLocal(urlString);
			// if (planets) {
			// return {
			// 	planets: planets.results,
			// 	count: planets.count
			// };
			// }
		}

		// fetch from remote
		const planets = await getPlanetDataFromRemote(urlString);
		// await savePlanetsToLocal(planets);
		return planets;
	}

	// fetch a page of planets from SWAPI
	async function getPlanetDataFromRemote(url: string) {
		console.log(`url: ${url}`);
		const res = await fetch(url);
		console.log(`res: ${JSON.stringify(res)}`);

		if (res.ok) {
			const data = await res.json();
			console.log(`data: ${JSON.stringify(data)}`);
			console.log(`results length: ${data.results.length}`);
			return {
				planets: data.results,
				count: data.count
			};
		} else {
			throw new Error('Failed to fetch planets');
		}
	}

	const { planets, count } = await getPlanetsFromLocalOrRemote();

	return {
		planets,
		count,
		searchParam: searchParam || ''
	};
};
