<template>
    <div class="chat-message" ref="chatMessage">
        <div class="input-group mb-0">
            <textarea class="form-control send-input" rows="1" placeholder="Enter text here..." ref="textarea" @input="adjustHeight"></textarea>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';

    const textarea = ref(null);
    const chatMessage = ref(null);

    const adjustHeight = () => {
        if (textarea.value) {
            const maxHeight = 100;
            
            textarea.value.style.height = 'auto';
            const height = Math.min(textarea.value.scrollHeight, maxHeight);
            
            textarea.value.style.height = `${height}px`;
            textarea.value.style.overflowY = height >= maxHeight ? 'auto' : 'hidden';
            
            if (chatMessage.value) {
                chatMessage.value.style.transform = `translateY(-${height}px)`;
            }

            textarea.value.focus();
        }
    };

    onMounted(() => {
        adjustHeight();
    });
</script>