import './buttonWinnersPagination.scss';
import * as utils from '../../../utils/utils';

const CLASS_NAME = {
    wrapperButtonWinnersPagination: ['wrapper-button-pagination'],
    buttonWinnersPagination: ['button-pugination']
}

export function createButtonsWinnersPagination(){
    const buttonsPagination = utils.createElement('div', CLASS_NAME.wrapperButtonWinnersPagination);
    const buttonPrev = utils.createElement('button', CLASS_NAME.buttonWinnersPagination, 'PREV');
    const buttonNext = utils.createElement('button', CLASS_NAME.buttonWinnersPagination, 'NEXT');
    buttonsPagination.append(buttonPrev, buttonNext);

    return buttonsPagination;
}