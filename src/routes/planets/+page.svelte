<script lang="ts">
	import { page } from '$app/stores';
	// import { confetti } from '@neoconfetti/svelte';
	import PlanetsTable from '$lib/components/PlanetsTable.svelte';
	import { onMount } from 'svelte';

	export let data;

	$: currentPage = $page.url.searchParams.get('page') || '1';
	$: planets = data.planets;

	onMount(() => {
		return page.subscribe(() => {
			console.log(`currentPage: ${currentPage}`);
		});
	});
</script>

<svelte:head>
	<title>Planets</title>
	<meta name="description" content="A SWAPI Explorer" />
</svelte:head>

<h1>Planets</h1>

<PlanetsTable {planets} {currentPage} />

<style>
</style>
