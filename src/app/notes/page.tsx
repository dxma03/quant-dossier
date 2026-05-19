import Link from "next/link";
import { getAllNotesMeta } from "@/lib/notes";

export default function NotesIndexPage() {
  const notes = getAllNotesMeta();

  return (
    <main style={{ margin: "0 auto", maxWidth: 760, padding: "2rem 1rem" }}>
      <h1>Notes</h1>
      <p>MDX-powered long-form research notes.</p>
      <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: "1rem" }}>
        {notes.map((note) => (
          <li key={note.slug} style={{ border: "1px solid #ddd", borderRadius: 8, padding: "1rem" }}>
            <h2 style={{ margin: 0 }}>
              <Link href={`/notes/${note.slug}`}>{note.title}</Link>
            </h2>
            <p style={{ margin: "0.5rem 0" }}>{note.summary}</p>
            <small>{note.publishedAt}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
