<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>DevNotes</title>
	<meta name="description" content="Your personal space for development notes, code snippets, and documentation." />
	<link rel="icon" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<div class="text-center" in:fly={{ y: 20, duration: 600 }}>
	<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
		Welcome to DevNotes
	</h1>
	<p class="mt-6 text-lg leading-8 text-gray-600">
		Your personal space for development notes, code snippets, and documentation.
	</p>
	<div class="mt-10 flex items-center justify-center gap-x-6">
		<a
			href="/notes"
			class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Get Started
		</a>
		<a href="/about" class="text-sm font-semibold leading-6 text-gray-900">
			Learn more <span aria-hidden="true">→</span>
		</a>
	</div>
</div>
