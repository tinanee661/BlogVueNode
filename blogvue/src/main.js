import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import moment from 'moment'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

// import * as firebase from "firebase";
//fajlli routes importohet te kjo pjese dhe ne at file kemi deklaruar routat e ndryshem se cila route te cila komponent dergon gjate klikut
import router from './router';
//vue router e instalojme me npm install vue-router pastaj e thirrim ne main.js me import VueRouter from 'vue-router'

import store from "./store";
//regjistrimi i filterit global per zvogelimin e shkronjave
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});
Vue.filter('human-date', function(value) {
    return moment(value).fromNow();
});

const instanceAxios = axios.create({
    baseURL: 'http://localhost:4000',
});
Vue.prototype.axios = instanceAxios

//regjistrimi i direktives globable highlight 
Vue.directive('highlight', {

    /* eslint-disable */
    bind(el, binding, vnode) {
        //el.style.backgroundColor='blue';
        //el.style.backgroundColor=binding.value;
        if (binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
        } else {
            el.style.color = binding.value;
        }
    }
});

Vue.mixin({
    data() {
        return {
            cookieName: 'ThemeColor'
        }
    },
    // E kemi perdor per me rujt ngjyrat e setings
    methods: {
        setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); //calculate in days when cookie expires
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        // Per me marr ngjyren te cilen e selectojm te settings
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    },
})


// const configOptions = {
//     apiKey: "AIzaSyB5Rm3187ezAUsGZvcK2hVN_X9gVM99BlY",
//     authDomain: "vuejs-http-c77c5.firebaseapp.com",
//     databaseURL: "https://vuejs-http-c77c5.firebaseio.com",
//     projectId: "vuejs-http-c77c5",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// };

// firebase.initializeApp(configOptions);

// firebase.auth().onAuthStateChanged(user => {
//     store.dispatch("fetchUser", user);
// });
Vue.use(VueRouter);


Vue.use(VueRouter);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})