import { reactive, computed } from "vue";
import { User } from "../models/User"

const currentUser = new User(null, null)

const state = reactive({
    user: currentUser
});

// methods
const newUser = (objUser) => {
    if ( !state.user.loggedIn ) {
        state.user.initializeNewUser(objUser)
    }
}
const logOut = () => {
    state.user.logOut()
}

// getters
const name = computed(() => state.user.loggedIn ? state.user.name : "User not logged in")
const email = computed(() => state.user.loggedIn ? state.user.email : null)
//const password = computed(() => state.user.loggedIn ? state.user.password : null)
const loggedIn = computed(() => state.user.loggedIn)


const uiCurrentUser = {
    name,
    email,
    loggedIn,
    newUser,
    logOut
}
export default uiCurrentUser;