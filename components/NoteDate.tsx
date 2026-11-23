import type { StudioNote } from "@/data/studio-notes";

/** Displays the original publication date, plus a revision note if present. */
export default function NoteDate({ note }: { note: StudioNote }) {
  return (
    <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
      <time dateTime={note.published}>{note.publishedLabel}</time>
      {note.revisedLabel && (
        <>
          <span className="mx-2" aria-hidden>
            ·
          </span>
          Revised{" "}
          <time dateTime={note.revised}>{note.revisedLabel}</time>
        </>
      )}
    </p>
  );
}
