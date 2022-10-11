
export const profileModule = {
    state: () => ({
        profileWindow: 1,
        dialogVisible: false,
    }),
    getters: {

    },
    mutations: {
        changePage(state, newWind) {
            state.profileWindow = newWind;
        },
        dialogVisibleChange(state, dialog) {
            state.dialogVisible = dialog;
        },
    },
    actions: {

    },
    namespaced: true,
}