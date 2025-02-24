<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	let {
		message,
		variant = 'info',
		class: className
	}: {
		message: string | null | undefined;
		variant?: 'info' | 'error' | 'warning';
		class?: ClassValue;
	} = $props();
</script>

{#if Boolean(message)}
	<div
		role="alert"
		class="relative mb-4 rounded border px-4 py-3 text-blue-700"
		class:border-blue-400={variant === 'info'}
		class:border-red-400={variant === 'error'}
		class:border-yellow-400={variant === 'warning'}
		class:className
	>
		<p class="font-bold">{message}</p>
	</div>
{/if}
