<template>
    <li class="nav-item w-100">
        <GoTo to="/chat" customClass="nav-link align-middle px-2 chat-item">
            <i class="fa-regular fa-comment"></i>
            <span class="d-none d-sm-inline ml-2">Chat 1</span>
        </GoTo>
    </li>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
</script>