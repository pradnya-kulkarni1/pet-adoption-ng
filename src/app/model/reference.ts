export class Reference { 
    id:number;
    firstname :string;
    lastname: string;
    phone:string;
    email:string;
   

    constructor(id = 0, firstname = '', lastname = '', phone = '', email=''){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}
