import './buttonPagination.scss';
import * as utils from '../../../../utils/utils';

const CLASS_NAME = {
    wrapperButtonPagination: ['wrapper-button-pagination'],
    buttonPagination: ['button-pugination']
}

export function createButtonsPagination(){
    const buttonsPagination = utils.createElement('div', CLASS_NAME.wrapperButtonPagination);
    const buttonPrev = utils.createElement('button', CLASS_NAME.buttonPagination, 'PREV');
    const buttonNext = utils.createElement('button', CLASS_NAME.buttonPagination, 'NEXT');
    buttonsPagination.append(buttonPrev, buttonNext);

    return buttonsPagination;
}