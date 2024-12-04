<template>
    <div class="login-dark bg-dark">
        <form @submit.prevent="validateCredentials">
            <h2 class="sr-only">Login</h2>

            <div class="illustration">
                <img src="img/icon.png" width="125">
            </div>

            <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email" v-model="email">
            </div>

            <div class="form-group">
                <input class="form-control" type="password" name="password" placeholder="Password" v-model="password">
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">Log In</button>
            </div>

            <a href="#" class="forgot">Forgot your email or password?</a>

        </form>
    </div>
</template>

<script setup>
    import '@css/vendor/login.css';
    import { ref } from 'vue';
    import { useDialogBox } from '@/composables/useDialogBox.js';
    import { authService } from '@/services/authService';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const isAuth = ref(false);
    const dialog = useDialogBox();
    const router = useRouter();
    
    const validateCredentials = async () => {
        isAuth.value = await authService.login({email: email.value, password: password.value});
        if (!isAuth.value) {
            dialog.openDialog({
                dialogTitle: 'Ops...',
                dialogMessage: 'Usuário ou Senha Inválidos.'
            });
        }  else {
            router.push('/');
        }
    }

</script>