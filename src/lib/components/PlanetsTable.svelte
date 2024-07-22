<script lang="ts">
	interface Planet {
		id: string;
		name: string;
		diameter: string;
		climate: string;
		gravity: string;
		population: string;
		residents: string[];
		url: string;
	}

	export let planets: Planet[];
	export let currentPage: string;
	export let totalPages: number;
	export let search: string;
	console.log(`currentPage: ${currentPage}`);

	function getIdFromUrl(url: string): string {
		const parts = url.split('/');
		return parts[parts.length - 2];
	}
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Diameter</th>
			<th>Climate</th>
			<th>Gravity</th>
			<th>Population</th>
			<th>Residents Count</th>
		</tr>
	</thead>
	<tbody>
		{#each planets as planet}
			<tr>
				<td>
					<a href="/planets/{getIdFromUrl(planet.url)}">
						{planet.name}
					</a>
				</td>
				<td>{planet.diameter}</td>
				<td>{planet.climate}</td>
				<td>{planet.gravity}</td>
				<td>{planet.population}</td>
				<td>{planet.residents.length}</td>
			</tr>
		{/each}
	</tbody>
</table>

<div class="pagination">
	<a href="?page={Number(currentPage) - 1}&search={search}" class:disabled={currentPage === '1'}
		>Previous</a
	>
	<span> Page {currentPage} of {totalPages}</span>
	<a
		href="?page={Number(currentPage) + 1}&search={search}"
		class:disabled={Number(currentPage) >= totalPages}
	>
		Next</a
	>
</div>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.5em;
		border-bottom: 1px solid #ddd;
	}

	th {
		text-align: left;
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
		font-family: Arial, sans-serif;
	}
</style>
