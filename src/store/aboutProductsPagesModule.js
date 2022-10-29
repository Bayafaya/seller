
export const aboutProductsPagesModule = {
    state: () => ({
        profileWindow: 1,
        expansion:true,
    }),
    getters: {

    },
    mutations: {
        changePageProductDataWind(state, newWind) {
            state.profileWindow = newWind;
        },
        expansionToggle(state) {
            state.expansion = !state.expansion;
        },
    },
    actions: {

    },
    namespaced: true,
}