const notes = [
  { slug: 'microstructure-basics', title: 'Market Microstructure Basics' },
  { slug: 'inventory-risk', title: 'Inventory Risk Management' }
];

export default function NotesPage() {
  return (
    <section>
      <h1>Notes</h1>
      <p>MDX-ready notes index. Connect this to a content loader as notes are added.</p>
      <ul>
        {notes.map((note) => (
          <li key={note.slug}>{note.title}</li>
        ))}
      </ul>
    </section>
  );
}
