<script lang="ts">
	import type { Snippet } from 'svelte';

	let { submitAction, cancelAction }: { submitAction: Snippet; cancelAction: Snippet } = $props();
</script>

<form action="" class="flex flex-row justify-between gap-2">
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
		{@render submitAction()}
		{@render cancelAction()}
	</div>
</form>
