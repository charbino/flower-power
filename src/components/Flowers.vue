<template>
    <div class="flex flex-col mt-20 mx-4">
        <div class="container mx-auto px-4">
            <button @click="displayForm=!displayForm"
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                + Ajouter une fleur
            </button>
            <FlowerForm
                    @submit="addFlower"
                    v-show="displayForm"
            />
        </div>

        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mt-4 text-green-500 tracking-wide">
                Fleurs
            </h2>
            <ul id="todo-list">
                <Flower
                        v-for="(flower, i) in this.flowers"
                        :key="i"
                        :flower="flower"/>
            </ul>

        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import FlowerForm from "./FlowerForm";
    import Flower from "./Flower";

    export default {
        name: "Flowers",
        components: {
            Flower,
            FlowerForm
        },
        data() {
            return {
                displayForm: false,
            }
        },
        computed: {
            ...mapState([
                'flowers',
            ]),
        },
        mounted() {
            this.initFromStorage();
        },
        methods: {
            ...mapActions([
                'addFlower',
                'saveFlowers',
                'initFromStorage',
            ])
        }
    }
</script>

<style scoped>

</style>
