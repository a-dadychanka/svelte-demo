<script lang="ts">
    import type { Note } from '$lib/types/note';

    const { notes } = $props<{ notes: Note[] }>();
</script>

<ul>
    {#each notes as note}
        <li>
            {note.title}
        </li>
    {/each}
</ul>