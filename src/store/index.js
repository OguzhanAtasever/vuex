// birinci adım bunları eklemek
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// ikinci adım bunu dahil etmek
Vue.use(Vuex);

// constantları oluşturmak
const state = {
    username: [],
    message: 'Hello'
};
const getters = {
    //sonraki adımlar bunlar state ile state karışmasın
    welcomeMessage(state) {
        return `${state.message} ${state.username}`
    }
};
const mutations = {
    // state değiştirmem için mutationa ihtiyaç var
    setUserName(state, name) {
        state.username = name;
    },
};
const actions = {
    // her mutationu axion göndermiş oluyor 
    updateUsername({ commit }, name) {

        if (name === undefined) {
            axios.get("http://gateway.test/api/systemusers").then(response => {

                commit('setUserName', response.data.data);

            });
        } else {
            axios.get(`http://gateway.test/api/systemusers?name=${name}`).then((response) => {
                commit('setUserName', response.data.data);
            })
        }

    }
};

// store adında bir tane obje oluştur ve bunu enson export et 

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;