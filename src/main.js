import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from './store';


const app = createApp(App).use(Quasar, quasarUserOptions)



app
    .use(router)
    .use(store)
    .mount('#app')
