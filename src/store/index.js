import { createStore } from "vuex";
import { profileModule } from "./profileModule";
import { signupModule } from "./signupModule";
import {aboutProductsPagesModule} from "./aboutProductsPagesModule";

export default createStore({
    modules:{
        profile:profileModule,
        auth: signupModule,
        productDataWindow:aboutProductsPagesModule,
    }
})