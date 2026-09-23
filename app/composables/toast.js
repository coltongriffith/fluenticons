let nextId = 0;

export function useToast() {
  const toasts = useState("toasts", () => []);

  function show(message, type = "info") {
    const id = ++nextId;
    toasts.value = [...toasts.value, { id, message, type }];
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, 4000);
  }

  return { toasts, show, error: (message) => show(message, "error") };
}
