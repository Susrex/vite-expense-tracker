export class User {
    loggedIn: boolean = false
    name: string;
    email: string;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    initializeNewUser(objUser): void {
        this.name = objUser.name;
        this.email = objUser.email;
        this.loggedIn = true;
    }

    logOut(): void {
        this.loggedIn = false
        this.name = ""
        this.email = ""
    }
}

export default User