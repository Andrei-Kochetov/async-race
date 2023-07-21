import './buttonPagination.scss';
import * as utils from '../../../../utils/utils';
import * as api from '../../../../utils/utils';
import * as controller from '../../../../controller/controller'

const CLASS_NAME = {
    wrapperButtonPagination: ['wrapper-button-pagination'],
    buttonPagination: ['button-pugination']
}

export function createButtonsPagination(){
    const buttonsPagination = utils.createElement('div', CLASS_NAME.wrapperButtonPagination);
    const buttonPrev = utils.createElement('button', CLASS_NAME.buttonPagination, 'PREV');
    const buttonNext = utils.createElement('button', CLASS_NAME.buttonPagination, 'NEXT');

    
    buttonsPagination.append(buttonPrev, buttonNext);

    
    let count = 1
    buttonNext.addEventListener('click', ()=>{
        count++;
        console.log(count)
        controller.appendCars(count);
        const currentPage = document.querySelector('.current-cars-page');
        currentPage!.textContent = `Page #${count}`
    })
    buttonPrev.addEventListener('click', ()=>{
        //const garageCountText = document.querySelector('.garage-cars-count')?.textContent;

  /*       if(count > Math.ceil(garageCount / 10)  ) */
        count--;
        console.log(count)
        controller.appendCars(count);
        const currentPage = document.querySelector('.current-cars-page');
        currentPage!.textContent = `Page #${count}`
    })

    return buttonsPagination;
}