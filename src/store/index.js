import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
import vuexormPlugin from './database';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

const store = new Vuex.Store({
    strict: true,
    mutations: {
        RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
    },
    plugins: [vuexormPlugin, vuexLocal.plugin]
});

export default store;
