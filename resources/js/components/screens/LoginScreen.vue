<template>
    <div class="login-dark bg-dark">
        <form>
            <h2 class="sr-only">Login</h2>

            <div class="illustration">
                <img src="img/icon.png" width="125">
            </div>

            <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email">
            </div>

            <div class="form-group">
                <input class="form-control" type="password" name="password" placeholder="Password">
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
</script>