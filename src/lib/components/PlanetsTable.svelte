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
	console.log(`currentPage: ${currentPage}`);
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
					<a href="/planets/{planet.id}">
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
	<a href="/planets?page=1">1</a>
	<a href="/planets?page=2">2</a>
	<a href="/planets?page=3">3</a>
	<a href="/planets?page=4">4</a>
	<a href="/planets?page=5">5</a>
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
</style>
