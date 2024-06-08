import { Species } from "./species";

export class Breed {
    id: number;
    species:Species;
    name : string;

    constructor(id = 0, species = new Species(), name = ''){
        this.id = id;
        this.species= species;
        this.name = name;
    }
    
}
