<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary';
		children: Snippet;
		class?: ClassValue;
	}

	let { variant = 'primary', children, class: className, ...props }: Props = $props();
</script>

<button
	class="cursor-pointer rounded-md px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
	class:className
	class:bg-blue-500={variant === 'primary'}
	class:hover:bg-blue-600={variant === 'primary'}
	class:bg-red-500={variant === 'secondary'}
	class:hover:bg-red-600={variant === 'secondary'}
	{...props}
>
	{@render children()}
</button>
