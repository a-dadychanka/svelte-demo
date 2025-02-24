import type { Note } from '$lib/types/note';
import { json, type RequestHandler } from '@sveltejs/kit';

const mockNotesTable: Note[] = [
	// {
	// 	id: '1',
	// 	title: 'Note 1',
	// 	content: 'Content 1',
	// 	tags: [],
	// 	createdAt: new Date(),
	// 	updatedAt: new Date()
	// }
];

export const GET: RequestHandler = async () => {
	return json(mockNotesTable);
};

export const POST: RequestHandler = async ({ request }) => {
	const createdNote: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> = await request.json();

	const note: Note = {
		...createdNote,
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date()
	};

	mockNotesTable.push(note);

	return json(note);
};
