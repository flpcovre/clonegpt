<template>
        <li class="nav-item">
            <GoTo to="/" customClass="nav-link align-middle px-0">
                <i class="fa-solid fa-house"></i>
                <span class="d-none d-sm-inline">Home</span>
            </GoTo>
        </li>
        <li>
            <GoTo to="/about" customClass="nav-link align-middle px-0">
                <i class="fa-solid fa-house"></i>
                <span class="d-none d-sm-inline">About</span>
            </GoTo>
        </li>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
</script>