const STORAGE_KEY = "fluenticons:favorites";

export function useFavorites() {
  const favorites = useState("favorites", () => []);

  const isFavorite = (icon) => favorites.value.some((f) => f.id === icon.id);

  function toggle(icon) {
    if (isFavorite(icon)) {
      favorites.value = favorites.value.filter((f) => f.id !== icon.id);
      return false;
    }
    favorites.value = [...favorites.value, icon];
    return true;
  }

  return { favorites, isFavorite, toggle };
}

// Favorites persist in localStorage; loaded after hydration so the
// prerendered HTML always matches the first client render.
export function restoreFavorites() {
  const { favorites } = useFavorites();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(saved)) favorites.value = saved;
  } catch {}
  watch(favorites, (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {}
  });
}
