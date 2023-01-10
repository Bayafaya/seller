
export const aboutProductsPagesModule = {
    state: () => ({
        profileWindow: 1,
        expansion:false,
        attribute:[{id:1,label:`Индивидуальный атрибут товара`},{id:2,label:`Индивидуальный атрибут товара`},],
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
        removeAttributeItem(state,id) {
            state.attribute = state.attribute.filter(element => element.id !== id);
        },
        addAttributeItem(state,newItem) {
            console.log(newItem)
            const newObj = {
            id: state.attribute.length + 1,   
            label: newItem,
            }; 
            state.attribute = [...state.attribute,newObj];
        },
    },
    actions: {

    },
    namespaced: true,
}