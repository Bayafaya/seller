import { createStore } from "vuex";
import { profileModule } from "./profileModule";
import { signupModule } from "./signupModule";

export default createStore({
    modules:{
        profile:profileModule,
        auth: signupModule,
    }
})