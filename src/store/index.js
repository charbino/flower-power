import Vue from 'vue'
import Vuex from 'vuex'

import ls from '../api/localStorageService'
import {firebaseDb, flowersCollection} from '../api/firebaseDb'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        flowers: []
    },
    mutations: {
        setState(state, {flower, data}) {
            Vue.set(state, flower, data)
        },
        addFlower(state, newFlower) {
            state.flowers.push(newFlower)
        },
    },
    actions: {
        addFlower({commit, dispatch}, newFlower) {
            commit('addFlower', newFlower)
            flowersCollection.add(newFlower).then(() => {
                console.log('Flower Add')
            })
            dispatch('saveFlowers')
        },
        initFromStorage({state, commit}) {
            flowersCollection
                .get()
                .then(querySnapshot => {
                    const flowers = querySnapshot.docs.map(doc => doc.data())
                    state.flowers = flowers;
                })

            // if (ls.getItems('flowers')) {
            //     try {
            //         storage.flower = JSON.parse(localStorage.getItem('flowers'));
            //     } catch (e) {
            //         localStorage.removeItem('flowers');
            //     }
            // }
        },
        async saveFlowers({state}) {
            // const parsed = JSON.stringify(state.flowers);
            // localStorage.setItem('flowers', parsed);
            // flowersCollection.add(state.flowers).then(() => {
            //     console.log('Flower Add')
            // })
        }
    },
    modules: {}
})
