
export const signupModule = {
    state: () => ({
      direction:0,
      step: 0,
    }),
    getters: {

    },
    mutations: {
      changeDirectionInLogin(state,pickedWayLoginOrSignUp){
        state.direction = pickedWayLoginOrSignUp;
        state.step++;
      },
      nextStep(state) {
        state.step++;
      },
      previousStep(state) {
        if(state.step === 1){
            state.step--;
            state.direction = 0;
        }
        else{
          state.step--;
        }
      },
    },
    actions: {

    },
    namespaced: true,
}