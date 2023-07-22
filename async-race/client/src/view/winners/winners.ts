import './winners.scss';
import * as utils from '../../utils/utils';
import { createButtonsWinnersPagination } from './buttonWinnersPagination/buttonWinnersPagination';
import { createWinnersBoard } from './winnersBoard/winnersBoard';

const CLASS_NAME = {
    winners: ['winners'],
    winnersCount: ['winners-count'],
    currentWinnersPage: ['current-winners-page'],
}

export function createWinners(){
    const winners = utils.createElement('div', CLASS_NAME.winners);
    const winnersCount = utils.createElement('div', CLASS_NAME.winnersCount, 'Winners (0)');
    const currentWinnersPage = utils.createElement('div', CLASS_NAME.currentWinnersPage, 'Page 1');
    const winnersBoard = createWinnersBoard();

    const buttonsWinnersPagination = createButtonsWinnersPagination();

    winners.append( buttonsWinnersPagination,winnersCount, currentWinnersPage, winnersBoard);
    return winners;
}
