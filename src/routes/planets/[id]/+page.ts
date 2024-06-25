// // import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';

// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const planetId = params.id;

	// fetch a planet from SWAPI
	async function getPlanetData() {
		const res = await fetch(`https://swapi.dev/api/planets/${planetId}/`);

		if (res.ok) {
			const data = await res.json();
			console.log(`data: ${JSON.stringify(data)}`);

			return data;
		} else {
			throw new Error('Failed to fetch planets');
		}
	}

	const data = await getPlanetData();

	// get names of residents
	const residents = await Promise.all(
		data.residents.map(async (resident: RequestInfo | URL) => {
			const res = await fetch(resident);
			const data = await res.json();
			return data.name;
		})
	);
	console.log(`residents: ${JSON.stringify(residents)}`);

	return {
		planetData: data,
		residents: residents
	};
}
