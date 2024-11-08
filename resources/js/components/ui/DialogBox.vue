<template>
    <v-dialog max-width="500" v-model="isDialogVisible">
        <v-card title="Dialog">
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Fechar" @click="closeDialog()"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useDialogBox } from '@/composables/useDialogBox';

const { isDialogVisible, closeDialog } = useDialogBox();
</script>