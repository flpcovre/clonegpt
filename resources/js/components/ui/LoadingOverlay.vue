<template>
    <div v-if="isVisible" class="loading-overlay">
      <p>Keep Calm...</p>
    </div>
  </template>

<style scoped>
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5em;
        z-index: 1000;
    }
</style>
  
<script setup>
  import { useLoadingOverlay } from '@/composables/useLoadingOverlay';
  
  const { isVisible } = useLoadingOverlay();
</script>
  