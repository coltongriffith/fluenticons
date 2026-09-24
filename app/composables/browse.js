export function letterOf(name) {
  const c = name.charAt(0).toLowerCase();
  return /[a-z]/.test(c) ? c : "0-9";
}

// { letter, count }[] for every starting letter in the catalogue.
export async function loadLetters() {
  const counts = {};
  for (const e of await loadIndex()) {
    const l = letterOf(e.name);
    counts[l] = (counts[l] || 0) + 1;
  }
  return Object.keys(counts)
    .sort()
    .map((letter) => ({ letter, count: counts[letter] }));
}
