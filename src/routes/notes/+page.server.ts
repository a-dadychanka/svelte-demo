import type { PageServerLoad } from './$types';
import type { Note } from '$lib/types/note';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/notes');
	const notes: Note[] = await response.json();

	return { notes };
};
