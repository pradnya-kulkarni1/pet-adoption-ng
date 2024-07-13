import { Customer } from "./customer";
import { Reference } from "./reference";
import { User } from "./user";

export class AdoptionRequest {
    id: number;
    user: User;
    customer: Customer;
    reference: Reference;
    submittedDate: Date;
    status: string;
    rejectionReason:string;
    backgroundCheck: boolean;
    referenceCheck: boolean;


    constructor(id = 0, user = new User(), customer = new Customer(), 
    reference = new Reference(), submittedDate = new Date(), status='', rejectionReason='',
backgroundCheck=false,referenceCheck=false){
        this.id= id;
        this.user = user;
        this.customer = customer;
        this.reference = reference;
        this.submittedDate=submittedDate;
        this.status = status;
        this.rejectionReason=rejectionReason;
        this.backgroundCheck = backgroundCheck;
        this.referenceCheck = referenceCheck;
    }
}
