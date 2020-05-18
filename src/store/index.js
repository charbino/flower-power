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
        deleteFlower(state, idFlower) {
            state.flowers = state.flowers.filter(flower => flower.id !== idFlower);
        }
    },
    actions: {
        addFlower({commit, dispatch}, newFlower) {

            flowersCollection.doc(String(newFlower.id)).set(newFlower).then(() => {
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
        },
        deleteFlower({state, commit}, idFlower) {
            flowersCollection
                .doc(String(idFlower))
                .delete()
            commit('deleteFlower', idFlower)
        }
    },
    modules: {}
})
