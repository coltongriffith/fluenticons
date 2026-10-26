// An icon file's size and inner markup, for drawing it inline in the current
// text color. Plain JavaScript: the build script (scripts/build-icon-data.mjs)
// and the pages both use it.
//
// Icon files use #212121 for their color. Fluent and Material files put it on
// each shape (fill); Lucide's put the stroke settings on the <svg> itself, so
// those are moved onto a group around the shapes.
export function svgParts(svg) {
  const match = svg.trim().match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/);
  if (!match) return null;
  const [, attrs, inner] = match;
  const size = Number(attrs.match(/\bwidth="(\d+)"/)?.[1] || 24);
  const stroke = [...attrs.matchAll(/\s(stroke(?:-[a-z]+)?)="([^"]*)"/g)].map(([, k, v]) => ` ${k}="${v}"`).join("");
  const body = (stroke ? `<g${stroke}>${inner.trim()}</g>` : inner.trim()).replace(/(fill|stroke)="#212121"/g, '$1="currentColor"');
  return { size, body };
}
