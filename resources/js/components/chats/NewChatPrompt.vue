<template>
    <div class="new-chat">
        <div class="text-center">
            <h2 ref="newText"></h2>
        </div>
        <div class="chat-message-new">
            <div class="input-group mb-0">
                <textarea class="form-control send-input" rows="1" placeholder="Enter text here..." ref="textarea" @input="adjustHeight" @keyup.enter.exact="sendMessage" @keydown.enter.prevent="handleEnter"></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import eventBus from '@/utils/eventBus';

    const textarea = ref(null);
    const newText = ref(null);

    const showText = async () => {
        const text = 'Olá, como posso te ajudar?'
        let i = 0;

        for (i = 0; i < text.length; i++) {
            if (newText.value) {
                newText.value.innerHTML += text[i];
                await new Promise(r => setTimeout(r, 30));
            }
        }
    }

    const sendMessage = () => {
        const message = textarea.value.value;

        if (message.trim()) {
            eventBus.emit('newChat', message);
            textarea.value.value = '';
        }
    }

    const handleEnter = (event) => {
        if (event.shiftKey) {
            textarea.value.value += '\n';
            adjustHeight();
        } else {
            event.preventDefault();
        }
    }

    const adjustHeight = () => {
        if (textarea.value) {
            const maxHeight = 100;
            
            textarea.value.style.height = 'auto';
            const height = Math.min(textarea.value.scrollHeight, maxHeight);
            
            textarea.value.style.height = `${height}px`;
            textarea.value.style.overflowY = height >= maxHeight ? 'auto' : 'hidden';

            textarea.value.scrollTop = textarea.value.scrollHeight;

            textarea.value.focus();
        }
    };

    onMounted(() => {
        showText(),
        adjustHeight()
    });
</script>