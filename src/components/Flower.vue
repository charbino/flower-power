<template>
    <div class="md:flex m-10">
        <div class="md:flex-shrink-0">
            <img class="rounded-lg md:w-56"
                 src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                 alt="Woman paying for a purchase">
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
            <h3 class="text-2xl font-semibold" v-if="!isEdit">{{flower.id}} - {{flower.name}}</h3>
            <input v-else
                   id="flower-name"
                   class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
                   type="text"
                   placeholder="Pissenlit, lylia ...."
                   v-model.trim="flower_name"
            >
            <button @click="save()"
                    v-if="isEdit"
                    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">
                Enregistrer
            </button>
            <button @click="isEdit=!isEdit"
                    v-if="!isEdit"
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                Modifier
            </button>

            <button @click="deleted()"
                    v-if="!isEdit"
                    class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded m-4">
                Supprimer
            </button>
            <p class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Arrosage :
                Demain</p>
            <p class="mt-2 text-gray-600">Arrosé la dernière fois : il y a deux jours</p>
        </div>
    </div>
</template>

<script>
    import {firebaseDb, flowersCollection} from '../api/firebaseDb'
    import {eventBus,TOGGLE_MODAL_DELETE} from '../helper/eventBus';
    import ModalDelete from './ModalDelete';

    export default {
        name: 'Flower',
        components: {
            ModalDelete,
        },
        data() {
            return {
                isEdit: false,
                flower_name: this.flower.name,
                modalDeleteOpen: false,
            }
        },
        props: {
            flower: {
                type: Object,
                required: true
            },
        },
        methods: {
            save() {
                const flower = {...this.flower}
                flower.name = this.flower_name
                this.flower.name = this.flower_name
                this.isEdit = false;

                flowersCollection
                    .doc(String(this.flower.id))
                    .set(flower)
                    .then(() => {
                        console.log('flower updated!')
                    })
            },
            deleted() {
                eventBus.$emit(TOGGLE_MODAL_DELETE, this.flower.id);
                this.modalDeleteOpen = true;
            }
        }
    }
</script>

<style scoped>

</style>
