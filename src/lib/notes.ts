import fs from "node:fs";
import path from "node:path";

export type NoteMeta = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  publishedAt: string;
};

export type Note = NoteMeta & {
  content: string;
};

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

function parseFrontmatter(mdx: string): { meta: NoteMeta; content: string } {
  const match = mdx.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Invalid MDX: missing frontmatter block.");
  }

  const [, rawFrontmatter, content] = match;

  const map = new Map<string, string>();
  for (const line of rawFrontmatter.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    map.set(key, value);
  }

  const tagsRaw = map.get("tags") ?? "[]";
  const tags = tagsRaw
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((t) => t.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);

  const title = (map.get("title") ?? "").replace(/^"|"$/g, "");
  const slug = (map.get("slug") ?? "").replace(/^"|"$/g, "");
  const summary = (map.get("summary") ?? "").replace(/^"|"$/g, "");
  const publishedAt = (map.get("publishedAt") ?? "").replace(/^"|"$/g, "");

  if (!title || !slug || !summary || !publishedAt) {
    throw new Error("Invalid MDX frontmatter: title, slug, summary, and publishedAt are required.");
  }

  return {
    meta: { title, slug, summary, tags, publishedAt },
    content,
  };
}

export function getAllNotesMeta(): NoteMeta[] {
  const files = fs.readdirSync(NOTES_DIR).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
      return parseFrontmatter(source).meta;
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Note not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { meta, content } = parseFrontmatter(source);

  return {
    ...meta,
    content,
  };
}
