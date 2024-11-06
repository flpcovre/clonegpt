<template>
    <div class="col py-3 bg-dark">
        <HomeScreen v-if="screen === 'home'"/>
        <AboutScreen v-if="screen === 'about'"/>
        <ChatScreen v-if="screen === 'chat'"/>
        <NotFound v-if="screen === 'NotFound'"/>
    </div>
</template>

<script setup>
    import { ref, watch  } from 'vue';
    import { useRoute } from 'vue-router';

    import HomeScreen from '@/components/screens/HomeScreen.vue';
    import AboutScreen from '@/components/screens/AboutScreen.vue';
    import ChatScreen from '@/components/screens/ChatScreen.vue';
    import NotFound from '@/components/screens/NotFound.vue';

    const route = useRoute();
    const screen = ref('');

    watch(
        () => route.name,
        (newName) => {
            screen.value = newName;
        },
        { immediate: true }
    );  
</script>