<template>
    <v-dialog max-width="500" v-model="isDialogVisible">
        <v-card :title="title">
            <v-card-text>
                {{ message }}
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Fechar" @click="handleCancel"></v-btn>
                <v-btn v-if="onOk" text="Confirmar" @click="handleOk"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useDialogBox } from '@/composables/useDialogBox';

const { isDialogVisible, onOk, title, message, handleOk, handleCancel } = useDialogBox();
</script>