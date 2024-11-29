<template>
    <Index v-if="isAuth"/>
    <LoginScreen v-else/>
    <DialogBox/>
</template>

<script setup> 
    import { ref } from 'vue'; 
    import { authService } from '@/services/authService';

    import Index from "@/components/layout/index.vue";
    import DialogBox from "@/components/ui/DialogBox.vue";
    
    import LoginScreen from "@/components/screens/LoginScreen.vue";

    const isAuth = ref(null);

    isAuth.value = authService.isAuthenticated();
</script>