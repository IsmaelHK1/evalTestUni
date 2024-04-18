import User from "../../../model/user.model";

// Path: app/api/auth/connexion.ts

class Authentification {
    private users: User[] = [];

    constructor() {
        this.users.push();
    }

    connexion(email: string, password: string): Boolean {
        for (let user of this.users) {
            if (user.email === email && user.password === password) {
                return true;
            }
        }
        return false;
    }

    inscription(user: User): void {
        this.users.push(user);
    }
}

export default Authentification;