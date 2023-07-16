import { createCarBlock } from "../view/garage/main/carBlock/carBlock";
import * as api from '../utils/api';



export async function appendCars (){
    const carsWrapper = document.querySelector('.cars-wrapper');
    const getCars =  await api.getCars(1,10);
    for(let i = 0; i < getCars.length; i++){
        //console.log(getCars[i])
        let {name, color, id} = getCars[i];
        let car = createCarBlock(name, color, id);
        //console.log(car)
        carsWrapper?.appendChild(car);
    }
    
}


