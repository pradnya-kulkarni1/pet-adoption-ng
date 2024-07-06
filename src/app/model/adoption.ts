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
    adoptionCompletedDate: Date;
    backgroundCheck: boolean;
    referenceCheck: boolean;
    paperWorkCompleted: boolean;
    paymentRecieved: boolean;

    constructor(id = 0, customer = new Customer(), user = new User(), pet = new Pet(), status = '',
     rejectionReason = '', submittedDate = new Date(), adoptionCompletedDate = new Date(), backgroundCheck = false,
   referenceCheck = false, paperWorkCompleted = false, paymentRecieved = false){
        this.id = id;
        this.customer = customer;
        this.user = user;
        this.pet = pet;
        this.status = status;
        this.rejectionReason = rejectionReason;
        this.submittedDate = submittedDate;
        this.adoptionCompletedDate = adoptionCompletedDate;
        this.backgroundCheck = backgroundCheck;
        this.referenceCheck = referenceCheck;
        this.paperWorkCompleted = paperWorkCompleted;
        this.paymentRecieved = paymentRecieved;
     }
}
