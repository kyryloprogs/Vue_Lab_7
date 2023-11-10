import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Імпортуємо створений router
import TaskServicePlugin from '@/plugins/TaskServicePlugin';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import emailVerificationPlugin from './plugins/emailVerification';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy58qzl5FR7q0s0SRakfwhj5Spa9q3FRw",
    authDomain: "mytroshynlab.firebaseapp.com",
    projectId: "mytroshynlab",
    storageBucket: "mytroshynlab.appspot.com",
    messagingSenderId: "687184880328",
    appId: "1:687184880328:web:fa9ee0389f822eab4a7bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
Vue.config.productionTip = false;

Vue.use(TaskServicePlugin);
Vue.use(emailVerificationPlugin);
new Vue({
    app,
    router, // Додаємо router до додатку
    render: (h) => h(App),
}).$mount("#app");