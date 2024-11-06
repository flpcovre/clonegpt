<template>
    <div class="chat">
        <div class="chat-history" ref="chatHistory">
            <ul class="m-b-0">
                <li class="clearfix">
                    <div class="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                    </div>
                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the
                        project coming along? </div>
                </li>
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div class="message my-message">Are we meeting today?</div>
                </li>
            </ul>
        </div>

        <OldChatPrompt></OldChatPrompt>
    </div>
</template>

<script setup>
    import {ref, onMounted, nextTick} from 'vue';

    import OldChatPrompt from '@/components/chats/OldChatPrompt.vue';

    const chatHistory = ref(null);

    const scrollToBottom = () => {
        if (chatHistory.value) {
            chatHistory.value.scrollTop = chatHistory.value.scrollHeight;
        }
    };
 
    onMounted(() => {
        nextTick(scrollToBottom)
    });
</script>