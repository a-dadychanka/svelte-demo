<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import { fade } from 'svelte/transition';
	import AddNoteInlineForm from './AddNoteInlineForm.svelte';

	let showForm = $state(false);
</script>

{#snippet cancelAction(onclick: (e: MouseEvent) => void)}
	<Button
		variant="secondary"
		type="reset"
		onclick={(e) => {
			onclick(e);
			showForm = false;
		}}>Cancel</Button
	>
{/snippet}

{#snippet submitAction(onclick: (e: MouseEvent | SubmitEvent) => void, submitting: boolean)}
	<Button variant="primary" disabled={submitting} type="submit">
		{submitting ? 'Adding...' : 'Add Note'}
	</Button>
{/snippet}

{#if !showForm}
	<div transition:fade={{ duration: 300 }}>
		<Button
			variant="primary"
			onclick={() => {
				showForm = true;
			}}
		>
			Add Note
		</Button>
	</div>
{/if}

{#if showForm}
	<div transition:fade={{ duration: 300 }}>
		<AddNoteInlineForm
			{cancelAction}
			{submitAction}
			onSubmit={() => {
				showForm = false;
			}}
		/>
	</div>
{/if}
