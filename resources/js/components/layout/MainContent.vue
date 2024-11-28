<template>
    <div class="col py-3 bg-dark">
        <component :is="currentComponent"/>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const currentComponent = computed(() => {
        const matched = route.matched[route.matched.length - 1];
        return matched?.components?.default || null;
    });
</script>