import { Breed } from "./breed";

export class Pet {
    id: number;
    breed: Breed;
    name : string;
    gender: string;
    birthYear: number;
    birthMonth: number;
    available: boolean;

    constructor( id=0, breed = new Breed(),name = '', gender = '', birthYear = 0, birthMonth = 0, available = false){
        this.id = id;
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.available = available;
    }

}
