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

{#snippet submitAction(onclick: (e: MouseEvent | SubmitEvent) => void)}
	<Button
		variant="primary"
		onclick={(e) => {
			onclick(e);
		}}>Add Note</Button
	>
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
		<AddNoteInlineForm {cancelAction} {submitAction} />
	</div>
{/if}
