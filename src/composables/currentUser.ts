// import { reactive, toRefs } from '@vue/reactivity';
//
// // Define our state
// // This state is mutable in the function below, but if we pass it to the component without `toRefs` it will not mutate.
// const state = reactive({
//     counter: 20,
// });
//
// export default () => {
//     /**Increment the counter
//      * @param amount Value to increment (default to `1`)*/
//     const increment = (amount = 1) => {
//         state.counter += amount;
//     };
//     return {
//         state: toRefs(state),     //Return the state as a `reference` to make it mutable.
//         increment,
//     };
// };

import { reactive, readonly, computed } from "vue";

const state = reactive({
    name: "Name",
    email: "email",
    password: "password"
});

const name = computed(() => state.name)
const changeName = (name) => {
    state.name = name
}

const uiCurrentUser = {
    name,
    changeName
}
export default uiCurrentUser;