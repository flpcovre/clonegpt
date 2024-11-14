<template>
    <li class="nav-item w-100 chat-list-item" v-for="(chat, index) in chats" :key="index">
        <v-hover v-slot="{ isHovering, props }">
            <div class="chat-item-container" v-bind="props" @click="liActive = index">
                <GoTo :to="'/chat/' + chat.id" customClass="nav-link align-middle px-2 chat-item">
                    <i class="fa-regular fa-comment icon"></i>
                    <span class="chat-name d-none d-sm-inline ml-2">{{ chat.name }}</span>
                </GoTo>
    
                <a @click="liActive = index" v-if="isHovering || (liActive == index)">
                    <i class="fa-solid fa-ellipsis menu-icon"></i>
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item key="1" value="1" @click="openDeleteChatDialog(chat.id)">
                                <v-list-item-title>Excluir</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </a>
            </div>
        </v-hover>
    </li>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import GoTo from '@/components/ui/GoTo.vue';

    import { useRouter, useRoute } from 'vue-router';
    import { useDialogBox } from "@/composables/useDialogBox";

    import eventBus from '@/utils/eventBus';

    const router = useRouter();
    const route  = useRoute();
    const dialog = useDialogBox();

    const chats = ref([]);
    const liActive = ref(null);

    let i;

    const onClickOutside = () => {
        liActive.value = null;
    }

    const addChat = (value) => {
        chats.value.unshift({ id: i, name: value });

        router.push('/chat/' + i).then(() => {
            eventBus.emit('newMessage', value);
        });

        i++;
    }

    const openDeleteChatDialog = (id) => {
        dialog.openDialog({
            dialogTitle: 'Excluir',
            dialogMessage: 'Você deseja excluir essa Conversa?',
            okCallback: () => deleteChat(id)
        });
    }

    const deleteChat = (id) => {
        chats.value = chats.value.filter(chat => chat.id !== id);

        if (route.params.id == id) {
            router.push('/');
        } 
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