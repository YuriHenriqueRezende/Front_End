import { Cart, ItemCart } from '@/models/Cart'
import { defineStore } from 'pinia';

export const useCart = defineStore("robot-cart",{
    state: (): Cart => ({        
        motos: []
    }),
    persist : true,
    actions: {
        addCart(robot: ItemCart){
            const deepCopy = 
                JSON.parse(JSON.stringify(robot)) as ItemCart;

            this.motos.push(deepCopy);
        },
        removeCart(index: number){
            //valida se o index passado existe
            if( index <= (this.motos.length - 1) )
            this.motos.splice(index, 1);
        }
    },
    getters: {
        getTotalCost(): number{
            let value = 0;
            this.motos.forEach(robot=>
                value += robot.price
            );
            return value;
        }
    }
})