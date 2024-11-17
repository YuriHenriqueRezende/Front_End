import { Part } from "./Parts";

export const calcTotalCost = (item:ItemCart) =>{
    return item.base.price +
           item.head.price +
           item.leftArm.price +
           item.rightArm.price +
           item.torso.price;
}

export class ItemCart {
    head: Part = new Part();
    leftArm: Part = new Part();
    rightArm: Part = new Part();
    torso: Part = new Part();
    base: Part = new Part();
    price: number = 0.0;

    constructor(){
        this.updateCost();
    }
    updateCost(){
        this.price = calcTotalCost(this);
    }
}

export class Cart {
    motos: Array<ItemCart> = [];    
}