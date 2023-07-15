import './winnersBoard.scss';
import * as utils from '../../../utils/utils';
import { createCarBlockWinnersBoard } from './carWinnersBoard/carWinnersBoard';


const CLASS_NAME = {
    wrapperBoard: ['wrapper-board'],
    titleBoard: ['title-board'],
    titlesBoard: ['titles-board'],
    numbersBoard: ['numbers-board'],
    tableBoard: ['table-board']
}

export function createWinnersBoard(){
    const wrapperWinnersBoard = utils.createElement('div', CLASS_NAME.wrapperBoard);
    const titlesBoard = utils.createElement('div', CLASS_NAME.titlesBoard);
    const titleNumber = utils.createElement('div', undefined, '#');
    const titleCar = utils.createElement('div', undefined, 'Car');
    const titleName = utils.createElement('div', undefined, 'Name');
    const titleWins = utils.createElement('div', CLASS_NAME.titleBoard, 'Wins');
    const titleBestTime = utils.createElement('div', CLASS_NAME.titleBoard, 'Best Time (sec)');
    titlesBoard.append(titleNumber, titleCar, titleName, titleWins, titleBestTime);

    const tableBoardWinners = utils.createElement('table', CLASS_NAME.tableBoard);
    const carBlockBoardWinners = createCarBlockWinnersBoard();
    tableBoardWinners.append(carBlockBoardWinners, createCarBlockWinnersBoard(),createCarBlockWinnersBoard());

    wrapperWinnersBoard.append(titlesBoard, tableBoardWinners);

    return wrapperWinnersBoard;
}