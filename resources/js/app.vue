<template>
    <Index/>
    <!-- <LoadingOverlay/> -->
    <DialogBox/>
</template>

<script setup> 
    import Index from "@/components/layout/index.vue";
    import LoadingOverlay from "@/components/ui/LoadingOverlay.vue";
    import DialogBox from "@/components/ui/DialogBox.vue";

    import { useLoadingOverlay } from "@/composables/useLoadingOverlay";
    import { useDialogBox } from "@/composables/useDialogBox";

    import { useRouter } from 'vue-router';

    const router = useRouter();
    const { isVisible } = useLoadingOverlay();

    router.beforeEach(async (to, from, next) => {
        document.title = to.meta.title;
        // isVisible.value = true;
        next();
    });

    // router.afterEach(() => {
    //     requestAnimationFrame(() => {
    //         isVisible.value = false;
    //     });
    // });
</script>