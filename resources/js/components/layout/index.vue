<template>
    <template v-if="isRouteReady">
        <MainContent v-if="route.name === 'login'" />

        <SideBar v-else>
            <template #content>
                <MainContent />
            </template>
        </SideBar>
    </template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import SideBar from "@/components/layout/SideBar.vue";
import MainContent from "@/components/layout/MainContent.vue";

const route = useRoute();
const router = useRouter();

const isRouteReady = ref(false);

onMounted(async () => {
    await router.isReady();
    isRouteReady.value = true;
});
</script>
