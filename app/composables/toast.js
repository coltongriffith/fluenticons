let nextId = 0;

// Copy confirmations (`{ promo: true }`) carry a one-line sponsor credit on the
// first copy of a visit and every 5th after it (copies 1, 6, 11…), so it never
// nags. The count is kept in sessionStorage: it carries across pages and resets
// with a new visit (new tab or browser session).
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
  const { sponsor, impression } = useSponsor();

  function show(message, type = "info", { promo = false } = {}) {
    const id = ++nextId;
    let sponsored = false;
    if (promo && sponsor.value && type === "info") {
      sponsored = nextCopyCount() % PROMO_EVERY === 0;
      if (sponsored) impression("copy_toast");
    }
    toasts.value = [...toasts.value, { id, message, type, sponsored }];
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, sponsored ? 6000 : 4000);
  }

  return { toasts, show, error: (message) => show(message, "error") };
}
