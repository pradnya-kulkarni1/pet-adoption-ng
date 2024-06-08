export class User {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;

  constructor(id = 0, firstname = '', lastname = '', phone = '', email = '', password = ''){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
