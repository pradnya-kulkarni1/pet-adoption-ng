export class Species {
    id: number;
    name: string;
    adoptionFee: number;

    constructor(id = 0, name = '',adoptionFee = 0.0){
        this.id = id;
        this.name = name;
        this.adoptionFee = adoptionFee;

    }
}
