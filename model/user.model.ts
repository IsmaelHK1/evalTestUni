class User {
    id: number;
    role : string;
    email: string;
    password: string;

    constructor(id: number, role: string, email: string, password: string) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.password = password;
    }
}



export default User;

