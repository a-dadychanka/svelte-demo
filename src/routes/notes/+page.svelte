<script lang="ts">
	import AddNoteButton from '$lib/components/notes/AddNoteButton.svelte';
	import NotesAlertMessage from '$lib/components/notes/NotesAlertMessage.svelte';
	import NotesList from '$lib/components/notes/NotesList.svelte';

	let { data } = $props();
	let infoMessage: string | null = $derived.by(() => {
		if (data.notes.length === 0) {
			return 'No notes yet. Create one!';
		}

		return null;
	});
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

	<div class="mt-4 mb-4">
		<NotesList notes={data.notes} />
	</div>

	<AddNoteButton />
</div>
