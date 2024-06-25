// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const pageParam = url.searchParams.get('page');

	// fetch a page of planets from SWAPI
	async function getData() {
		const res = await fetch(`https://swapi.dev/api/planets/?limit=10&page=${pageParam}`);

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

	const { planets, count } = await getData();

	return {
		planets,
		count
	};
};
