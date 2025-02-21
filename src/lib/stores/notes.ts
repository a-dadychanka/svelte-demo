import type { Note } from '$lib/types/note';
import { writable } from 'svelte/store';

function createNotesStore() {
	const { subscribe, update, set } = writable<Note[]>([]);

	return {
		subscribe,
		set,
		add: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) =>
			update((notes) => [
				...notes,
				{
					...note,
					id: crypto.randomUUID(),
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]),
		update: (id: string, note: Partial<Note>) =>
			update((notes) =>
				notes.map((n) =>
					n.id === id
						? {
								...n,
								...note,
								updatedAt: new Date()
							}
						: n
				)
			),
		delete: (id: string) => update((notes) => notes.filter((n) => n.id !== id))
	};
}

export const notes = createNotesStore();
