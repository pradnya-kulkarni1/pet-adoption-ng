export class UserLogin {
    email: string;
    password: string;

    constructor(email = '', password = ''){
        this.email = email;
        this.password = password;
    }
}
