<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PlanetsTable from '$lib/components/PlanetsTable.svelte';

	export let data;

	$: currentPage = $page.url.searchParams.get('page') || '1';
	$: planets = data.planets;
	$: totalPages = Math.ceil(data.count / 10);
	let inputValue = data.searchParam;
</script>

<svelte:head>
	<title>Planets</title>
	<meta name="description" content="A SWAPI Explorer" />
</svelte:head>

<h1>Planets</h1>

<input
	type="text"
	bind:value={inputValue}
	on:keydown={function (e) {
		if (e.key === 'Enter') {
			goto(`/planets/?page=1&search=${inputValue}`);
		}
	}}
/>

<PlanetsTable {planets} {currentPage} {totalPages} search={inputValue} />

<style>
</style>
