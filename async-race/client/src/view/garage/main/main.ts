import './main.scss';
import * as utils from '../../../utils/utils';
import { createControlBlock } from '../controlBlock/controlBlock';
import { createCarBlock } from './carBlock/carBlock';
import { createButtonsPagination } from './buttonPagination/buttonPagination';

const CLASS_NAME = {
  main: ['main'],
  garageCarsCount: ['garage-cars-count'],
  currentCarsPage: ['current-cars-page'],
  carsWrapper: ['cars-wrapper'],
};

export function createMain() {
  const main = utils.createElement('main', CLASS_NAME.main);

  const controlBlock = createControlBlock();

  const garageCarsCount = utils.createElement('div', CLASS_NAME.garageCarsCount, 'Garage (0)');
  const currentCarsPage = utils.createElement('div', CLASS_NAME.currentCarsPage, 'Page 1');

  const carsBlock = utils.createElement('div', CLASS_NAME.carsWrapper);

  const buttonsPagination = createButtonsPagination();

  main.append(controlBlock, buttonsPagination, garageCarsCount, currentCarsPage, carsBlock);

  return main;
}
