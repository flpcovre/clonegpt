<template>
    <div class="chat">
        <div class="chat-history" ref="chatHistory">
            <ul class="m-b-0">
                <TransitionGroup name="chatList">
                    <li v-for="(message, index) in messages" :key="index" class="clearfix">
                        <div class="message-data" :class="{'text-right': !message.isBot}">
                            <span class="message-data-time">{{ message.time }}</span>
                        </div>
                        <div :class="{'message other-message float-right': !message.isBot, 'message my-message': message.isBot}" v-html="message.text"></div>
                    </li>
                </TransitionGroup>
            </ul>
        </div>

        <OldChatPrompt @sendMessage="addMessage"></OldChatPrompt>
    </div>
</template>

<script setup>
    import {ref, onMounted, onUnmounted, nextTick, watch} from 'vue';
    import { useRoute } from 'vue-router';
    import eventBus from '@/utils/eventBus';

    import OldChatPrompt from '@/components/chats/OldChatPrompt.vue';

    const route = useRoute();

    const chatHistory = ref(null);
    const messages = ref([]);
    const chatId = ref(null);

    const getAllMessages = async () => {
        messages.value = [];

        await new Promise(r => setTimeout(r, 10));

        if (chatId.value == 5) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            messages.value.push({ text: 'Oi, Como vai?', time, isBot: false });
            messages.value.push({ text: 'Tudo Bem e você?', time, isBot: true });
            messages.value.push({ text: 'Tudo Ótimo', time, isBot: false });
            messages.value.push({ text: 'Legal!', time, isBot: true });
        } else if (chatId.value == 4) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            messages.value.push({ text: 'Oi?', time, isBot: false });
            messages.value.push({ text: 'Tudo Bem?', time, isBot: true });
            messages.value.push({ text: 'Tudo', time, isBot: false });
            messages.value.push({ text: 'top!', time, isBot: true });
        }

    }

    const addMessage = async (text) => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const replaceText = text.replace(/\n/g, '<br>');

        messages.value.push({ text: replaceText, time, isBot: false });
        messages.value.push({ text: '<div class="loader"></div>', time, isBot: true, isLoading: true});
        nextTick(scrollToBottom);

        await new Promise(r => setTimeout(r, 2000));

        const lastBotMessage = messages.value.find(message => message.isBot && message.isLoading);
        if (lastBotMessage) {
            lastBotMessage.text = 'Hello World';
            lastBotMessage.isLoading = false;
        }
        nextTick(scrollToBottom);
    }

    const addNewChatMessage = (text) => {
        messages.value = [];
        addMessage(text);
    }

    const scrollToBottom = () => {
        if (chatHistory.value) {
            chatHistory.value.scrollTop = chatHistory.value.scrollHeight;
        }
    };
    
    onMounted(() => {
        chatId.value = route.params.id,
        eventBus.on('newMessage', addNewChatMessage),
        getAllMessages(),
        nextTick(scrollToBottom)
    });
    
    onUnmounted(() => {
        eventBus.off('newMessage', addNewChatMessage)
    });

    watch(() => route.params.id, (newId) => {
        chatId.value = newId,
        getAllMessages(),
        nextTick(scrollToBottom)
    });
</script>