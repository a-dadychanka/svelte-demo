import type { Actions, PageServerLoad } from './$types';
import type { Note } from '$lib/types/note';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('notes');
	const response = await fetch('/api/notes');
	const notes: Note[] = await response.json();

	return { notes };
};

export const actions = {
	createNote: async ({ request, fetch }) => {
		const formData = await request.formData();
		const title = formData.get('title');

		try {
			if (!title) {
				console.error('createNote', 'Title is required');
				return fail(400, {
					message: 'Title is required'
				});
			}

			await fetch('/api/notes', {
				method: 'POST',
				body: JSON.stringify({ title })
			});

			return {
				success: true
			};
		} catch (error) {
			console.error('createNote', error);

			return fail(500, {
				message: 'Failed to create note'
			});
		}
	}
} satisfies Actions;
