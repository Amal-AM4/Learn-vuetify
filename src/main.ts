// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VBtn: { variant: "outlined" },
        VTextField: { variant: "solo" },
    }
})

app.use(router)
app.use(vuetify)

app.mount('#app')
