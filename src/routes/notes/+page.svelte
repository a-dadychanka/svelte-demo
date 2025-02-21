<script lang="ts">
	import NotesList from '$lib/components/notes/NotestList.svelte';
	import { notes } from '$lib/stores/notes';

    let { data } = $props();

    notes.set(data.notes);
</script>

<svelte:head>
	<title>My Notes | DevNotes</title>
</svelte:head>

<h1 class="text-2xl font-bold">My Notes</h1>

<h2 class="text-lg font-medium">
    Here are all of your notes.
</h2>

<div class="mt-4">  
    {#if $notes.length === 0}
        <p>No notes yet. Create one!</p>
    {:else}
        <NotesList notes={$notes} />
    {/if} 
</div>



