import { AdoptionRequest } from "./adoptionRequest";
import { Customer } from "./customer";
import { Pet } from "./pet";
import { User } from "./user";

export class Adoption {
    id: number;
    adoptionRequest:AdoptionRequest;
    pet:Pet;
    adoptionCompletedDate: Date;
     paperWorkCompleted: boolean;
    paymentRecieved: boolean;

    constructor(id = 0, adoptionRequest = new AdoptionRequest(), pet = new Pet(),
     rejectionReason = '', adoptionCompletedDate = new Date(), backgroundCheck = false,
   referenceCheck = false, paperWorkCompleted = false, paymentRecieved = false){
        this.id = id;
        this.adoptionRequest = adoptionRequest;
        this.pet = pet;
        this.adoptionCompletedDate = adoptionCompletedDate;
        this.paperWorkCompleted = paperWorkCompleted;
        this.paymentRecieved = paymentRecieved;
     }
}
