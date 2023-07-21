import { createCarBlock } from "../view/garage/main/carBlock/carBlock";
import * as api from '../utils/api';
import * as types from '../types/type&interface';


export async function appendCars (page ?: number){
    const carsWrapper = document.querySelector('.cars-wrapper');
    carsWrapper!.innerHTML = '';
    const getCars =  await api.getCars(page);
    for(let i = 0; i < getCars.length; i++){
        //console.log(getCars[i])
        let {name, color, id} = getCars[i];
        let car = createCarBlock(name, color, id);
        //console.log(car)
        carsWrapper?.appendChild(car);
    }
    appendTotalCars();
}

export async function createCar (name:string, color:string){
    await api.createCar(name, color)
    await appendCars();
    await appendTotalCars();
}

export async function create100Car (){
    const arrName = ['Lada', 'Priora', 'Ford', 'Kia', 'Volvo', 'BMW', 'Moscvich'];

    function generateColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    function getRundomName(){
        return arrName[Math.floor(Math.random() * arrName.length)]
    }
    for(let i = 0; i<100; i++){
        await api.createCar(getRundomName(), generateColor())
    }
    await appendCars();
    await appendTotalCars();
}

export async function appendTotalCars (){
    let garageCount = document.querySelector('.garage-cars-count');
    let totalCount =  await api.getTotalCount();
    garageCount!.textContent = `Garage (${totalCount})`
}

export async function updateCar (id:number, name:string, color:string){
    api.updateCar(id, name, color)
}
 export async function deleteCar(id:number){
    await api.deleteCar(id);
    await appendCars();
}

/* export async function startCar(id:number){
    const speed = await api.startCar(id);
    return speed
    //await api.driveCar(id)
} */
export async function stopCar(id:number){
    await api.deleteCar(id);
    await appendCars();
}
 
let animationFrameId:number;

async function drive(id:number){
    await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' })
        .then(res=>{
            if(res.status === 500){
                cancelAnimationFrame(animationFrameId);
            }
        }) 
}

export async function returnCar(carDiv:HTMLElement, id:number){
    const car = carDiv;
    await api.stopCar(id);
    cancelAnimationFrame(animationFrameId);
    car.style.transform =`translate(0px)`;
}

export async function start(carDiv:HTMLElement, id:number, endPoint:number, speedObject?:types.StartStopResponse, func?:boolean) {
    const car = carDiv;
    let speedObj;
    if(speedObject){
        speedObj = speedObject;
    } else{
      speedObj = await api.startCar(id);  
    }
    
    const time = speedObj.distance / speedObj.velocity;
    const frameCount = time / 1000 * 60;
    const dX = endPoint /frameCount;

    let currentX = 0;
    
    if(!func){
       drive(id); 
    }
    
    car.style.transform =`translate(${currentX}px)`;
    const tick = ()=>{
        currentX += dX;
        car.style.transform =`translate(${currentX}px)`;
        if(currentX<endPoint){
            animationFrameId = requestAnimationFrame(tick)
        }
    }
    tick();
    //return time;
} 


let isWin = false;
export async function race(){
    const carsCurrPage = document.querySelectorAll('.car-block')!    
    const main:HTMLElement = document.querySelector('.main')!;
    const mainWidth = main.offsetWidth;
    const endX = mainWidth - 45 - 100;

    const arrPromiseSpeeds =  Array.from(carsCurrPage)!.map((el) => {
        const id = Number(el.getAttribute('id'))!;
        return api.startCar(id);
    });
    const speedsArr = await Promise.all(arrPromiseSpeeds);
    const speedsNumArr = speedsArr.map(el=> (el.distance / el.velocity / 1000).toFixed(2))
/*    const minTime = Math.min(...speedsNumArr);
    const indexCarMinTime = speedsNumArr.indexOf(minTime);
    const carMinTime = carsCurrPage[indexCarMinTime] */

    const idArr:Number[] = [];

    carsCurrPage.forEach((el,i)=>{
        const car = el.querySelector('.car-img') as HTMLElement;
/*         const time = (speedsArr[i].distance / speedsArr[i].velocity / 1000).toFixed(1);
        console.log(time)
        car.style.transition = `transform ${time}` */
        const id = Number(el.getAttribute('id'))!;
        idArr.push(id);
        start(car,id,endX,speedsArr[i], true);
    })
    const arrPromiseDrive = Array.from(carsCurrPage).map( el=>{
            const id = Number(el.getAttribute('id'))!;
            return fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' }).then(res=>{
                if(res.status === 500){
                    cancelAnimationFrame(animationFrameId);
                    throw new Error
                }
                  return res  
                
            }) ;
        })
    
    const firstCarResponse = await Promise.any(arrPromiseDrive);
    console.log(firstCarResponse)
    const firstCarIndex = +firstCarResponse.url.split('id=')[1].slice(0,1);
    const firstCar = carsCurrPage[firstCarIndex - 1];
    console.log(speedsNumArr)
    firstCar.querySelector('.car-winner')!.textContent = `Winner ${firstCar.querySelector('.car-name')?.textContent} time: ${speedsNumArr[firstCarIndex - 1]}`



/*     const arrPromiseDrive =  Array.from(carsCurrPage)!.map((el) => {
        const id = Number(el.getAttribute('id'))!;
        return drive(id);
    });
    const driveArr = await Promise.race(arrPromiseDrive);
    console.log(driveArr) */
    

/*     const arrPromiseDrive = idArr.map((el)=>{
        return fetch(`http://127.0.0.1:3000/engine?id=${el}&status=drive`, { method: 'PATCH' })
        .then(res=>{
            if(res.status === 200 && !isWin){
                isWin = true;
            }
        })
    }) */
    
/*     let arrTimeAnimationCars: Number[] = speedsArr.map(el=>{
       return  el.distance / el.velocity;
    }); */
/*     carsCurrPage.forEach((el,i)=>{
        const car = el.querySelector('.car-img') as HTMLElement;
        const id = Number(el.getAttribute('id'))!;
        arrTimeAnimationCars.push(start(car,id,endX,speedsArr[i]));
    }) */
    //console.log(idArr, 'end')
/*     const winnerCar = await Promise.race(newArr)
    console.log(winnerCar) */
}


export async function resetCars(){
    const carsCurrPage = document.querySelectorAll('.car-block')!        
    carsCurrPage.forEach((el)=>{
        const carWinnerShow = el.querySelector('.car-winner')!.textContent = '';
        const car = el.querySelector('.car-img') as HTMLElement;
        const id = Number(el.getAttribute('id'))!;
        returnCar(car, id)
    })

}

async function getWinnerCar(){
    const carsCurrPage = document.querySelectorAll('.car-block')!        
    const main:HTMLElement = document.querySelector('.main')!;
    const mainWidth = main.offsetWidth;
    const endX = mainWidth - 45 - 100;
    const newArr =  Array.from(carsCurrPage)!.map((el) => {
        const id = Number(el.getAttribute('id'))!;
        return api.startCar(id);
    });
    const speedsArr = await Promise.all(newArr);
    let arrTimeAnimationCars;
    carsCurrPage.forEach((el,i)=>{
        const car = el.querySelector('.car-img') as HTMLElement;
        const id = Number(el.getAttribute('id'))!;
        arrTimeAnimationCars.push(start(car,id,endX,speedsArr[i]));
    })
    console.log(arrTimeAnimationCars, 'end')
/*     const winnerCar = await Promise.race(newArr)
    console.log(winnerCar) */
}
