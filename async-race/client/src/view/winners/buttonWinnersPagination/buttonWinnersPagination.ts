import './buttonWinnersPagination.scss';
import * as utils from '../../../utils/utils';
import * as controller from '../../../controller/controller';

const CLASS_NAME = {
    wrapperButtonWinnersPagination: ['wrapper-button-pagination'],
    buttonWinnersPagination: ['button-pugination']
}

export function createButtonsWinnersPagination(){
    const buttonsPagination = utils.createElement('div', CLASS_NAME.wrapperButtonWinnersPagination);
    const buttonPrev = utils.createElement('button', CLASS_NAME.buttonWinnersPagination, 'PREV');
    const buttonNext = utils.createElement('button', CLASS_NAME.buttonWinnersPagination, 'NEXT');
    buttonsPagination.append(buttonPrev, buttonNext);
    let count = 1
    buttonNext.addEventListener('click', ()=>{
        const currentPage = document.querySelector('.current-winners-page');
        const totalWinners = document.querySelector('.winners-count')?.textContent!.split('(')[1]!;
        const totalPages = Math.ceil(parseInt(totalWinners, 10) / 10)
        if(count >= totalPages){
            return
        }
        count++;
        controller.appendWinners(count);
        currentPage!.textContent = `Page ${count}`
    })
    buttonPrev.addEventListener('click', ()=>{
        const currentPage = document.querySelector('.current-winners-page');
        //const totalWinners = document.querySelector('.winners-count')?.textContent!.split('(')[1]!;
        //const totalPages = Math.ceil(parseInt(totalWinners, 10) / 10)
        if(count <= 1){
            return
        }
        count--;
        controller.appendWinners(count);
        currentPage!.textContent = `Page ${count}`
    })

    return buttonsPagination;
}