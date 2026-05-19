import { notFound } from "next/navigation";
import { getAllNotesMeta, getNoteBySlug } from "@/lib/notes";

export function generateStaticParams() {
  return getAllNotesMeta().map((note) => ({ slug: note.slug }));
}

export default async function NoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const note = getNoteBySlug(slug);

    return (
      <main style={{ margin: "0 auto", maxWidth: 760, padding: "2rem 1rem" }}>
        <h1>{note.title}</h1>
        <p>{note.summary}</p>
        <hr />
        <article style={{ whiteSpace: "pre-wrap" }}>{note.content}</article>
      </main>
    );
  } catch {
    notFound();
  }
}
