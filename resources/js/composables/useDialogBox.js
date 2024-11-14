import { ref } from 'vue';

const isDialogVisible = ref(false);
const title = ref('');
const message = ref('');
const onOk = ref(null);
const onCancel = ref(null);

const openDialog = ({ dialogTitle, dialogMessage, okCallback, cancelCallback }) => {
  title.value = dialogTitle;
  message.value = dialogMessage;
  onOk.value = okCallback || null;
  onCancel.value = cancelCallback || null;
  isDialogVisible.value = true;
}

const closeDialog = () => {
  isDialogVisible.value = false;
  title.value = '';
  message.value = '';
  onOk.value = null;
  onCancel.value = null;
}

const handleOk = () => {
  if (onOk.value) onOk.value();
  closeDialog();
}

const handleCancel = () => {
  if (onCancel.value) onCancel.value();
  closeDialog();
}

export const useDialogBox = () => ({
  isDialogVisible,
  onOk,
  title,
  message,
  openDialog,
  closeDialog,
  handleOk,
  handleCancel,
});