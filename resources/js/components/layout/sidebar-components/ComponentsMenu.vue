<template>
        <li class="nav-item w-100">
            <GoTo to="/" customClass="nav-link align-middle px-2 menu-item">
                <i class="fa-solid fa-house icon"></i>
                <span class="d-none d-sm-inline ml-2">Home</span>
            </GoTo>
        </li>
        <li class="nav-item w-100">
            <GoTo to="/about" customClass="nav-link align-middle px-2 menu-item">
                <i class="fa-solid fa-circle-info icon"></i>
                <span class="d-none d-sm-inline ml-2">About</span>
            </GoTo>
        </li>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
</script>