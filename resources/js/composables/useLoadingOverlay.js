import { ref } from 'vue';

const isVisible = ref(false);

export function useLoadingOverlay() {
  return { isVisible };
}
