<template>
    <div class="user-section w-100">
        <a class="btn-profile"><i class="fa-solid fa-circle-user"></i></a>
        <span>Olá, {{ userProfile.name }}</span>
        <a class="btn-profile" @click="logout"><i class="fa-solid fa-right-from-bracket"></i></a>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { authService } from '@/services/authService';
    import { useDialogBox } from '@/composables/useDialogBox.js';
    import { useRouter } from 'vue-router';

    const dialog = useDialogBox();
    const router = useRouter();
    const userProfile = ref({});

    const getUserProfile = async () => {
        userProfile.value = await authService.getProfile();
    }

    const logout = () => {
        dialog.openDialog({
            dialogTitle: 'Confirmação',
            dialogMessage: 'Você tem certeza que deseja realizar logout?',
            okCallback: () => {
                authService.destroyToken();
                router.push('/login');
            },
        });
    }

    onMounted(() => {
        getUserProfile();
    })
</script>