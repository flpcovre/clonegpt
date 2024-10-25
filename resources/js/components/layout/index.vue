<template>
    <SideBar>
        <template #content>
            <MainContent/>
        </template>
    </SideBar>
</template>

<script setup>
    import SideBar from "@/components/layout/SideBar.vue";
    import MainContent from "@/components/layout/MainContent.vue";
</script>