<script lang="ts">
	import AddNoteForm from './AddNoteInlineForm.svelte';

	let showForm = $state(false);
</script>

{#snippet cancelAction()}
	<button
		onclick={() => {
			showForm = false;
		}}
		class="rounded-md bg-red-500 px-4 py-2 text-white">Cancel</button
	>
{/snippet}

{#snippet submitAction()}
	<button type="submit" class="rounded-md bg-blue-500 px-4 py-2 text-white">Add Note</button>
{/snippet}

{#if !showForm}
	<button
		class="rounded-md bg-blue-500 px-4 py-2 text-white"
		onclick={() => {
			showForm = true;
		}}>Add Note</button
	>
{/if}

{#if showForm}
	<AddNoteForm {cancelAction} {submitAction} />
{/if}
