<script lang="ts">
	import type { Snippet } from 'svelte';

	export interface Props {
		submitAction: Snippet<[onclick: (e: SubmitEvent | MouseEvent) => void]>;
		cancelAction: Snippet<[onclick: (e: MouseEvent) => void]>;
	}

	let { submitAction, cancelAction }: Props = $props();

	function handleSubmit(e: SubmitEvent | MouseEvent) {
		e.preventDefault();
		// Add your form submission logic here

		console.log('submit inside form');
	}

	function handleReset(e: Event) {
		e.preventDefault();
		// Add your form reset logic here

		console.log('reset inside form');
	}
</script>

<form onsubmit={handleSubmit} onreset={handleReset} class="flex flex-row justify-between gap-2">
	<div class="flex-1">
		<input
			type="text"
			name="note-title"
			placeholder="Note Title"
			minlength={3}
			maxlength={100}
			required
			class="w-full rounded-md border-2 border-gray-300 p-2"
		/>
	</div>

	<div class="flex flex-row gap-2">
		{@render submitAction(handleSubmit)}
		{@render cancelAction(handleReset)}
	</div>
</form>
