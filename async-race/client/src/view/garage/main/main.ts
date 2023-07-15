import './main.scss';
import * as utils from '../../../utils/utils';
import { createControlBlock } from '../controlBlock/controlBlock';
import { createCarBlock } from './carBlock/carBlock';
import { createButtonsPagination } from './buttonPagination/buttonPagination';


const CLASS_NAME = {
    main: ['main'],
    garageCarsCount: ['garage-cars-count'],
    currentCarsPage: ['current-cars-page'],
}


export function createMain(){
    const main = utils.createElement('main', CLASS_NAME.main);

    const controlBlock = createControlBlock();
    const garageCarsCount = utils.createElement('div', CLASS_NAME.garageCarsCount, 'Garage (0)');
    const currentCarsPage = utils.createElement('div', CLASS_NAME.currentCarsPage, 'Page # 1');
    const carBlock = createCarBlock('MERS', 'orange');
    const buttonsPagination = createButtonsPagination();

    main.append(controlBlock,garageCarsCount, currentCarsPage, carBlock, createCarBlock('asdads', 'grey'),createCarBlock('asdads', 'grey'),createCarBlock('asdads', 'grey'),createCarBlock('asdads', 'grey'),createCarBlock('asdads', 'grey'),createCarBlock('asdads', 'grey'), buttonsPagination);


    return main
}