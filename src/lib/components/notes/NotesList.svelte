<script lang="ts">
	import type { Note } from '$lib/types/note';

	const { notes }: { notes: Note[] } = $props();
</script>

<ul class="flex flex-col gap-2">
	{#each notes as note}
		<li class="cursor-pointer rounded-md bg-gray-100 p-4 hover:bg-gray-200">
			<div class="flex justify-between">
				<span class="text-lg font-medium">{note.title}</span>
				<span class="text-sm text-gray-500">{new Date(note.createdAt).toLocaleDateString()}</span>
			</div>
		</li>
	{/each}
</ul>
