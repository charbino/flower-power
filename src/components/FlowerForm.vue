<template>
    <form
            @submit.prevent="submit"
            class="flex flex-wrap justify-between sm:justify-center"
    >

        <label class="inline">Fleur
            <input
                    class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
                    type="text"
                    placeholder="Fleur"
                    v-model.trim="flower.name"
            >
        </label>

        <button
                type="submit"
                title="save"
                class="bg-white flex-grow active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-full w-8 h-8 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
                :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'"
        >
            {{ populateWith.empty ? '+' : 'Save' }}
        </button>

        <button
                v-if="!populateWith.empty"
                @click="close"
                type="button"
                title="cancel"
                class="bg-white active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-full w-8 h-8 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
                :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'"
        >
            Cancel
        </button>
    </form>
</template>

<script>
    export default {
        name: "FlowerForm",
        props: {
            populateWith: {
                type: Object,
                default: () => ({empty: true})
            }
        },
        data() {
            return {
                flower: {
                    name: '',
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
