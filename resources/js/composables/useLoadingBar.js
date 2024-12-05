import topbar from "@/plugins/topbar";

const showLoadingBar = () => {
    topbar.show();
}

const hideLoadingBar = () => {
    topbar.hide();
}

export const useLoadingBar = () => ({
    showLoadingBar,
    hideLoadingBar
});