import './winnersBoard.scss';
import * as utils from '../../../utils/utils';
import { createCarBlockWinnersBoard } from './carWinnersBoard/carWinnersBoard';
import *  as controller from '../../../controller/controller'


const CLASS_NAME = {
    wrapperBoard: ['wrapper-board'],
    titleNumber: ['title-number'],
    titleBoard: ['title-board'],
    titlesBoard: ['titles-board'],
    numbersBoard: ['numbers-board'],
    tableBoard: ['table-board']
}

export function createWinnersBoard(){
    const wrapperWinnersBoard = utils.createElement('div', CLASS_NAME.wrapperBoard);
    const titlesBoard = utils.createElement('div', CLASS_NAME.titlesBoard);
    const titleNumber = utils.createElement('div', CLASS_NAME.titleNumber, '#');
    const titleCar = utils.createElement('div', undefined, 'Car');
    const titleName = utils.createElement('div', undefined, 'Name');
    const titleWins = utils.createElement('div', CLASS_NAME.titleBoard, 'Wins');
    const titleBestTime = utils.createElement('div', CLASS_NAME.titleBoard, 'Best Time (sec)');
    titlesBoard.append(titleNumber, titleCar, titleName, titleWins, titleBestTime);

    const tableBoardWinners = utils.createElement('table', CLASS_NAME.tableBoard);
/*     const carBlockBoardWinners = createCarBlockWinnersBoard();
    tableBoardWinners.append(carBlockBoardWinners); */

    wrapperWinnersBoard.append(titlesBoard, tableBoardWinners);

    titleNumber.addEventListener('click', ()=>{
        controller.sortWinnersById()
    })
    titleWins.addEventListener('click', ()=>{
        controller.sortWinnersByWins()
    })
    titleBestTime.addEventListener('click', ()=>{
        controller.sortWinnersByTime()
    })

    return wrapperWinnersBoard;
}