import type { Note } from '$lib/types/note';
import { json, type RequestHandler } from '@sveltejs/kit';

const mockNotesTable: Note[] = [];

export const GET: RequestHandler = async () => {
	return json(mockNotesTable);
};

export const POST: RequestHandler = async ({ request }) => {
	const createdNote: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> = await request.json();

	const note: Note = {
		...createdNote,
		id: crypto.randomUUID(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	};

	mockNotesTable.push(note);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(json(note));
		}, 1000);
	});
};
