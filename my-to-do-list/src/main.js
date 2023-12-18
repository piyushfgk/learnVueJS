import { createApp } from 'vue';
import App from './App.vue';
import TheMessage from './components/UI/TheMessage.vue';

const app = createApp(App);

app.component('the-message', TheMessage);

app.mount("#app");