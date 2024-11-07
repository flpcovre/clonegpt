<template>
    <TransitionGroup name="chatList">
        <li class="nav-item w-100" v-for="(chat, index) in chats" :key="index">
            <GoTo :to="'/chat/' + chat.id" customClass="nav-link align-middle px-2 chat-item">
                <i class="fa-regular fa-comment"></i>
                <span class="chat-name d-none d-sm-inline ml-2">{{ chat.name }}</span>
            </GoTo>
        </li>
    </TransitionGroup>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import eventBus from '@/utils/eventBus';
    
    const router = useRouter();

    const chats = ref([]);
    let i;

    const addChat = (value) => {
        chats.value.unshift({ id: i, name: value});
        
        router.push('/chat/' + i).then(() => {
            eventBus.emit('newMessage', value);
        });
        
        i++;
    }

    const getAllChats = async () => {
        await new Promise(r => setTimeout(r, 10));
        for (i = 1; i <= 5; i++) {
            chats.value.unshift({ id: i, name: 'Conversa ' + i });
        }
    }

    onMounted(() => {
        getAllChats(),
        eventBus.on('newChat', addChat)
    });

    onUnmounted(() => {
        eventBus.off('newChat', addChat)
    });
</script>