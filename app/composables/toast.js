let nextId = 0;

// Copy confirmations (`{ promo: true }`) carry a one-line sponsor credit on the
// first copy of a visit and every 5th after it (copies 1, 6, 11…), so it never
// nags. With more than one sponsor running, they take turns. The count is kept
// in sessionStorage: it carries across pages and resets with a new visit (new
// tab or browser session).
const PROMO_EVERY = 5;
const PROMO_KEY = "sponsor_copy_count";
let memoryCount = 0; // fallback when sessionStorage is unavailable

function nextCopyCount() {
  try {
    const count = Number(sessionStorage.getItem(PROMO_KEY)) || 0;
    sessionStorage.setItem(PROMO_KEY, String(count + 1));
    return count;
  } catch {
    return memoryCount++;
  }
}

export function useToast() {
  const toasts = useState("toasts", () => []);
  const { sponsors, impression, geoReady } = useSponsor();

  function show(message, type = "info", { promo = false } = {}) {
    const id = ++nextId;
    // The credited sponsor; with several, they take turns (copy 1: the first,
    // copy 6: the second, …).
    let sponsored = null;
    // Not a sponsor hidden in some countries until the visitor's is known.
    const pool = sponsors.value.filter((s) => geoReady.value || !s.hiddenIn?.length);
    if (promo && pool.length && type === "info") {
      const count = nextCopyCount();
      if (count % PROMO_EVERY === 0) {
        sponsored = pool[(count / PROMO_EVERY) % pool.length];
        impression(sponsored, "copy_toast");
      }
    }
    toasts.value = [...toasts.value, { id, message, type, sponsored }];
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, sponsored ? 6000 : 4000);
  }

  return { toasts, show, error: (message) => show(message, "error") };
}
