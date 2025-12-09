import { useSignal, useSignalEffect } from "@preact/signals";

export function usePersistedSignal<T>(key: string, value: T) {
  const persistedValue = JSON.parse(sessionStorage.getItem(key) ?? "null") as
    | T
    | null;

  const data = useSignal(persistedValue ?? value);

  useSignalEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data.value));
  });

  return data;
}
