<template>
    <router-link :to="to" :class="customClass">
        <slot></slot>
    </router-link>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        to: {
            type: String,
            required: true,
        },
        customClass: {
            type: String,
            default: "",
        }
    });
    
</script>