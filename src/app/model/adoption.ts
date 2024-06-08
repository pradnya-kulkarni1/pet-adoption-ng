import { Customer } from "./customer";
import { Pet } from "./pet";
import { User } from "./user";

export class Adoption {
    id: number;
    customer:Customer;
    user:User;
    pet:Pet;
    status:string;
    rejectionReason:string;
    submittedDate: Date;
    adoptionCompletedDate= Date;

    constructor(id = 0, customer = new Customer(), user = new User(), pet = new Pet(), status = '',
     rejectionReason = '', submittedDate = new Date(), adoptionComlpetedDate = new Date()){
        this.id = id;
        this.customer = customer;
        this.user = user;
        this.pet = pet;
        this.status = status;
        this.rejectionReason = rejectionReason;
        this.submittedDate = submittedDate;
        this.adoptionCompletedDate = this.adoptionCompletedDate;
     }
}
