export class Customer {
    id:number;
    firstname :string;
    lastname: string;
    phone:string;
    email:string;
    address:string;
    city:string;
    state:string;
    zip:string;

    constructor(id = 0, firstname = '', lastname = '', phone = '', email='',
    address = '', city = '', state = '', zip = ''){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}
