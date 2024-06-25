<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	export let data

</script>


<svelte:head>
	<title>Planets</title>
	<meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<h1>Planets</h1>


{#each data.planets as planet}
	<p>{planet.id} - {planet.name}</p>
{/each}


<style>
	
</style>
