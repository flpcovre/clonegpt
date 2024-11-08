<template>
    <li class="nav-item w-100 chat-list-item" v-for="(chat, index) in chats" :key="index">
        <div class="chat-item-container">
            <GoTo :to="'/chat/' + chat.id" customClass="nav-link align-middle px-2 chat-item">
                <i class="fa-regular fa-comment icon"></i>
                <span class="chat-name d-none d-sm-inline ml-2">{{ chat.name }}</span>
            </GoTo>
            <a @click.stop="deleteChat(chat.id)">
                <i class="fa-regular fa-trash-can delete-icon"
                    title="Excluir chat"></i>
            </a>
        </div>
    </li>
</template>

<script setup>
    import GoTo from '@/components/ui/GoTo.vue';
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useDialogBox } from "@/composables/useDialogBox"; 
    import eventBus from '@/utils/eventBus';

    const router = useRouter();
    const { openDialog } = useDialogBox();

    const chats = ref([]);
    let i;

    const addChat = (value) => {
        chats.value.unshift({ id: i, name: value });

        router.push('/chat/' + i).then(() => {
            eventBus.emit('newMessage', value);
        });

        i++;
    }

    const deleteChat = (id) => {
        // chats.value = chats.value.filter(chat => chat.id !== id);
        openDialog();
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