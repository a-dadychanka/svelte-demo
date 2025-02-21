<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<nav class="bg-white shadow">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<a href="/" class="text-xl font-bold text-indigo-600">DevNotes</a>
					</div>
					<div class="ml-6 flex items-center space-x-4">
						<a href="/notes" class="text-gray-700 hover:text-indigo-600">Notes</a>
						<a href="/tags" class="text-gray-700 hover:text-indigo-600">Tags</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		{@render children()}
	</main>
</div>
