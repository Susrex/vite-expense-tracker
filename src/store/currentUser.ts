import { reactive, computed } from "vue";
import firebase from "firebase/compat";
import { User } from "../models/User"

// const currentUser = new User(null, null)
//
// const state = reactive({
//     user: currentUser
// });

const state = reactive({
    user: null,
    firebaseAuth: null
})

const initializeFireBaseAuth = (firebaseAuth) => {
    // state.user = firebaseAuth.onAuthStateChanged(function (user){
    //     if (!user) { // not logged in
    //         console.log('you must be logged in to view this. redirecting to the home page')
    //     }
    //     else {
    //         console.log("user logged in")
    //         console.log("state. ")
    //     }
    // })
    state.user = firebaseAuth.currentUser
    state.firebaseAuth = firebaseAuth
}
// methods
// const newUser = (objUser) => {
//     if ( !state.user.loggedIn ) {
//         state.user.initializeNewUser(objUser)
//     }
// }
// const logOut = () => {
//     state.user.logOut()
// }

// getters
const loggedIn = computed(() => {
    console.log("currentUser.ts user:")
    console.log(!state.user == null)
    console.log(state.firebaseAuth.currentUser != null)
    return !state.user == null
})
//const name = computed(() => loggedIn ? state.user.displayName : "User not logged in")
const name = computed(() => {
    console.log(loggedIn)
    loggedIn.value ? state.user.displayName : "User not logged in"
})
const email = computed(() => loggedIn ? "emailNotWorking" : null)



const uiCurrentUser = {
    name,
    email,
    loggedIn,
    initializeFireBaseAuth
    // newUser,
    // logOut
}
export default uiCurrentUser;