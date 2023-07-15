import './view.scss';
import * as utils from '../utils/utils';
import { createGarage } from './garage/garage';
import { createWinners } from './winners/winners';

const CLASS_NAME = {
    container: ['container'],
    buttonGarage: ['btn'],
    buttonWinners: ['btn'],
    content: ['content']
}

export function createView(){
    const container = utils.createElement('div', CLASS_NAME.container);
    const buttonGarage = utils.createElement('button', CLASS_NAME.buttonGarage, 'TO GARAGE');
    const buttonWinners = utils.createElement('button', CLASS_NAME.buttonWinners, 'TO WINNERS');
    const content = utils.createElement('div', CLASS_NAME.content)

    const garage = createGarage();
    const winners = createWinners();

    content.append(garage, winners);

    let isPageWinners = Number(localStorage.getItem('isPageWinners'));
    console.log(isPageWinners)
    if(!isPageWinners){
        winners.classList.add('hide');
        garage.classList.remove('hide');
    } else{
        garage.classList.add('hide');
        winners.classList.remove('hide');
    }
    buttonGarage.addEventListener('click', ()=>{
        localStorage.setItem('isPageWinners', `0`);
        winners.classList.add('hide');
        garage.classList.remove('hide');

    });
    buttonWinners.addEventListener('click', ()=>{
        localStorage.setItem('isPageWinners', `1`);
        garage.classList.add('hide');
        winners.classList.remove('hide');
        
    })

    container.append(buttonGarage, buttonWinners, content);
    document.body.append(container);
}

