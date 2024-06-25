<script lang="ts">
	export let data: {
		planetData: Record<string, string | string[]>;
		residents: string[];
	};

	const { planetData, residents } = data;
</script>

<svelte:head>
	<title></title>
	<meta name="description" content="A SWAPI Explorer" />
</svelte:head>

<h1>{planetData.name}</h1>

<!-- print out the names of each resident in a list -->
<h4>Residents:</h4>
<ul>
	{#each residents as resident}
		<li>{resident}</li>
	{/each}
</ul>

<style>
</style>
