import { writable } from 'svelte/store';

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update(s => s + 1),
    decrement: () => update(s => s - 1),
    reset: () => set(0)
  };
}

export const count = createCount();
