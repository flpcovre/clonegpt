<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <GoTo to="/" customClass="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">CloneGPT</span>
                    </GoTo>

                    <ComponentsMenu/>

                    <hr>

                    <UserMenu/>
                </div>
            </div>
            <div class="col py-3">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
    import ComponentsMenu from '@/components/layout/sidebar-components/ComponentsMenu.vue';
    import UserMenu from '@/components/layout/sidebar-components/UserMenu.vue';
</script>
