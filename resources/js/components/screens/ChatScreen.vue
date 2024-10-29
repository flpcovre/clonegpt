<template>
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app bg-dark">
                    <Chat/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '../../../css/vendor/chat.css';
    import Chat from '@/components/chats/chat.vue';
</script>