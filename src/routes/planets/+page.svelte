<script lang="ts">
	import { page } from '$app/stores';
	import PlanetsTable from '$lib/components/PlanetsTable.svelte';

	export let data;

	$: currentPage = $page.url.searchParams.get('page') || '1';
	$: planets = data.planets;
	$: totalPages = Math.ceil(data.count / 10);
</script>

<svelte:head>
	<title>Planets</title>
	<meta name="description" content="A SWAPI Explorer" />
</svelte:head>

<h1>Planets</h1>

<PlanetsTable {planets} {currentPage} {totalPages} />

<style>
</style>
