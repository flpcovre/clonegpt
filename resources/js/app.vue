<template>
    <Index/>
    <DialogBox/>
</template>

<script setup> 
    import Index from "@/components/layout/index.vue";
    import LoadingOverlay from "@/components/ui/LoadingOverlay.vue";
    import DialogBox from "@/components/ui/DialogBox.vue";

    import { useLoadingOverlay } from "@/composables/useLoadingOverlay";
    import { useDialogBox } from "@/composables/useDialogBox";

    import { useRouter } from 'vue-router';
    
</script>