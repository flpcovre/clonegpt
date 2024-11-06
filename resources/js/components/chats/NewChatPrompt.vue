<template>
    <div class="new-chat">
        <div class="text-center">
            <h2>Como posso te ajudar?</h2>
        </div>
        <div class="chat-message-new">
            <div class="input-group mb-0">
                <textarea class="form-control send-input" rows="1" placeholder="Enter text here..." ref="textarea" @input="adjustHeight"></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';

    const textarea = ref(null);

    const adjustHeight = () => {
        if (textarea.value) {
            const maxHeight = 100;
            
            textarea.value.style.height = 'auto';
            const height = Math.min(textarea.value.scrollHeight, maxHeight);
            
            textarea.value.style.height = `${height}px`;
            textarea.value.style.overflowY = height >= maxHeight ? 'auto' : 'hidden';

            textarea.value.focus();
        }
    };

    onMounted(() => {
        adjustHeight();
    });
</script>