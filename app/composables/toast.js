import site from "~/site.js";
import { track } from "../utils/analytics";

let nextId = 0;

// Copy confirmations can carry a sponsor credit (`{ promo: true }`): on the
// first copy of a visit and every 4th after it, so it never nags.
const PROMO_EVERY = 4;

export function useToast() {
  const toasts = useState("toasts", () => []);
  const promoCount = useState("toastPromoCount", () => 0);

  function show(message, type = "info", { promo = false } = {}) {
    const id = ++nextId;
    let sponsored = false;
    if (promo && site.sponsor && type === "info") {
      sponsored = promoCount.value % PROMO_EVERY === 0;
      promoCount.value++;
      if (sponsored) track("sponsor_impression", { sponsor: site.sponsor.id, placement: "toast" });
    }
    toasts.value = [...toasts.value, { id, message, type, sponsored }];
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, sponsored ? 6000 : 4000);
  }

  return { toasts, show, error: (message) => show(message, "error") };
}
