// Loads every Markdown note at build time. Files starting with "_" are ignored.
const files = import.meta.glob(
  ['/src/content/research/*.md', '!/src/content/research/_*.md'],
  { query: '?raw', import: 'default', eager: true },
)

// Minimal frontmatter parser: "key: value" lines, "[a, b]" lists, "# comments".
function parse(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i < 0) continue
    let value = line.slice(i + 1).replace(/\s+#.*$/, '').trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean)
    }
    meta[line.slice(0, i).trim()] = value
  }
  return { meta, body: match[2] }
}

export const notes = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      status: meta.status || 'open',
      tags: meta.tags || [],
      summary: meta.summary || '',
      body,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export const getNote = (slug) => notes.find((note) => note.slug === slug)
