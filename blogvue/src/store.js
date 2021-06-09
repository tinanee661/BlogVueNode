import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        user(state) {
            return state.user
        },

        getRole(state) {
            let user = state.user;
            if (!user.loggedIn) {
                return 'guest';
            }

            if (['tinaneziri12@gmail.com'].includes(user.data.email)) {
                return 'admin';
            } else {
                return 'user';
            }
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        },
        logout({ commit }) {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                commit("SET_LOGGED_IN", false);
                commit("SET_USER", null);
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
        },
    }
});