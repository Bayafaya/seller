import { createStore } from "vuex";
import { profileModule } from "./profileModule";

export default createStore({
    modules:{
        profile:profileModule,
    }
})