import { Customer } from "./customer";
import { Reference } from "./reference";

export class AdoptReference {
    id: number;
    customer: Customer;
    reference: Reference;

    constructor(id = 0, customer = new Customer(), reference = new Reference()){
        this.id= id;
        this.customer = customer;
        this.reference = reference;
    }
}
