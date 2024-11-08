import { ref } from 'vue';

let isDialogVisible = ref(false); 

const openDialog = () => {
  isDialogVisible.value = true;
};

const closeDialog = () => {
  isDialogVisible.value = false;
};

const useDialogBox = () => {
  return {
    isDialogVisible,
    openDialog,
    closeDialog
  };
};

export { useDialogBox, openDialog, closeDialog };
