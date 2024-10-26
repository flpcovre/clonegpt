<template>
    <SideBar>

        <template #content>
            <MainContent />
        </template>

        <template #chats>
            <allChats />
        </template>

    </SideBar>
</template>

<script setup>
    import SideBar from "@/components/layout/SideBar.vue";
    import MainContent from "@/components/layout/MainContent.vue";
    import allChats from "@/components/chats/allChats.vue";
</script>