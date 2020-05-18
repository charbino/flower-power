import Vue from "vue";

export const TOGGLE_MODAL_DELETE = 'toggleModalDelete';
export const DELETE_FLOWER = 'deleteFlower';

export const eventBus= new Vue({
    methods: {
        toggleModalDelete(id) {
            this.$emit(TOGGLE_MODAL_DELETE,id);
        },
        deleteFlower(id) {
            this.$emit(DELETE_FLOWER,id);
        },
    }
});
