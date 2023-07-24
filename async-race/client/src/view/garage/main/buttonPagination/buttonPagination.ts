import './buttonPagination.scss';
import * as utils from '../../../../utils/utils';
import * as controller from '../../../../controller/controller';

const CLASS_NAME = {
  wrapperButtonPagination: ['wrapper-button-pagination'],
  buttonPaginationPrev: ['button-pugination-prev', 'btn-disable'],
  buttonPaginationNext: ['button-pugination-next', 'btn-disable'],

};

export default function createButtonsPagination() {
  const buttonsPagination = utils.createElement('div', CLASS_NAME.wrapperButtonPagination);
  const buttonPrev = utils.createElement('button', CLASS_NAME.buttonPaginationPrev, 'PREV');
  const buttonNext = utils.createElement('button', CLASS_NAME.buttonPaginationNext, 'NEXT');

  buttonsPagination.append(buttonPrev, buttonNext);

  let count = 1;
  buttonNext.addEventListener('click', () => {
    const currentPage = document.querySelector('.current-cars-page');
    const totalCars = document.querySelector('.garage-cars-count')?.textContent!.split('(')[1]!;
    const totalPages = Math.ceil(parseInt(totalCars, 10) / 10);
    if (count >= totalPages) {
      return;
    }
    count += 1;
    controller.appendCars(count);

    currentPage!.textContent = `Page ${count}`;
  });
  buttonPrev.addEventListener('click', () => {
    const currentPage = document.querySelector('.current-cars-page');
    if (count <= 1) {
      return;
    }
    count -= 1;
    controller.appendCars(count);

    currentPage!.textContent = `Page ${count}`;
  });

  return buttonsPagination;
}
