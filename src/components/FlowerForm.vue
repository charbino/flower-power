<template>
    <form
            @submit.prevent="submit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
        <div class="md-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="flower-name">
                Nom de la fleur
            </label>
            <input
                    id="flower-name"
                    class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
                    type="text"
                    placeholder="Pissenlit, lylia ...."
                    v-model.trim="flower.name"
            >
        </div>
        <button
                type="submit"
                title="save"
                class="bg-white flex-grow active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 p-2 rounded-full self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
        >
            Enregistrer
        </button>
    </form>
</template>

<script>
    export default {
        name: "FlowerForm",
        props: {
            nextId: Number,
        },
        data() {
            return {
                flower: {
                    name: '',
                    id: '',
                }
            }
        },
        methods: {
            clearForm() {
                this.flower = {
                    name: '',
                }
            },
            submit() {
                if (this.flower.name !== '') {
                    this.flower.id = this.nextId;
                    // this.nextId++;
                    this.$emit('submit', this.flower)
                    this.clearForm()
                    this.close()
                }
            },
            close() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>
