<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Snippet } from 'svelte';

	export interface Props {
		submitAction: Snippet<[onclick: (e: SubmitEvent | MouseEvent) => void, submitting: boolean]>;
		cancelAction: Snippet<[onclick: (e: MouseEvent) => void]>;
		onSubmit: () => void;
	}

	let { submitAction, cancelAction, onSubmit }: Props = $props();

	let submitting = $state(false);

	function handleSubmit(e: SubmitEvent | MouseEvent) {
		onSubmit();
	}

	function handleReset(e: Event) {}
</script>

<form
	method="post"
	action="?/createNote"
	use:enhance={() => {
		submitting = true;
		// Before submission
		return async ({ result, update }) => {
			// After submission
			if (result.type === 'success') {
				// Handle success
				Promise.all([invalidate('notes'), update({ reset: true })]).catch((error) => {
					console.error(error);
				});
			}

			submitting = false;
			onSubmit();
		};
	}}
	class="flex flex-row justify-between gap-2"
>
	<div class="flex-1">
		<input
			type="text"
			name="title"
			placeholder="Note Title"
			minlength={3}
			maxlength={100}
			required
			class="w-full rounded-md border-2 border-gray-300 p-2"
			disabled={submitting}
		/>
	</div>

	<div class="flex flex-row gap-2">
		{@render submitAction(handleSubmit, submitting)}
		{@render cancelAction(handleReset)}
	</div>
</form>
