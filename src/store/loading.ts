import { reactive, computed } from "vue";

const state = reactive({
    loading: false
});

const load = computed(() => state.loading)
const toggleLoading = () => {
    state.loading = !state.loading
    console.log("Loading: " + state.loading)
}

const uiLoading = {
    load,
    toggleLoading
}

export default uiLoading