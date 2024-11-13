
export enum PartTypes {
    "frente", "motor", "roda_frente", "roda_traseira"
}

export class Part {
    id: number = 0;
    name: string = "";
    type: PartTypes = PartTypes.frente;
    price: number = 0.0;
}

export class PartsResponse {
    frente: Array<Part> = [];
    motor: Array<Part> = [];
    roda_frente: Array<Part> = [];
    roda_traseira: Array<Part> = [];
}