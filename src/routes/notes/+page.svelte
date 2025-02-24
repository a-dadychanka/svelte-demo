<script lang="ts">
	import AddNoteButton from '$lib/components/notes/AddNoteButton.svelte';
	import NotesAlertMessage from '$lib/components/notes/NotesAlertMessage.svelte';
	import NotesList from '$lib/components/notes/NotestList.svelte';
	import { notes } from '$lib/stores/notes';

	let { data } = $props();
	let infoMessage: string | null = $derived.by(() => {
		if (data.notes.length === 0) {
			return 'No notes yet. Create one!';
		}

		return null;
	});

	notes.set(data.notes);
</script>

<svelte:head>
	<title>My Notes | DevNotes</title>
</svelte:head>

<h1 class="text-2xl font-bold">My Notes</h1>

<h2 class="text-lg font-medium">Here are all of your notes.</h2>

<div class="mt-4">
	{#if Boolean(infoMessage)}
		<NotesAlertMessage message={infoMessage} variant="info" />
	{/if}

	<NotesList notes={$notes} />

	<AddNoteButton />
</div>
