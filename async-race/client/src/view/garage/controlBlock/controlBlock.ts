import './controlBlock.scss';
import * as utils from '../../../utils/utils';

const CLASS_NAME = {
    wrapperControlBlock: ['wrapper-control-block'],
    wrapperSection: ['wrapper-create-section'],
    input: ['input'],
    button: ['btn-section']
}

export function createControlBlock():HTMLElement{
    const wrapper = utils.createElement('div', CLASS_NAME.wrapperControlBlock);

    const wrapperCreateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const inputCreateSection = utils.createElement('input', CLASS_NAME.input);
    const buttonCreateSection = utils.createElement('button', CLASS_NAME.button, 'CREATE')
    wrapperCreateSection.append(inputCreateSection,buttonCreateSection);

    const wrapperUpdateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const inputUpdateSection = utils.createElement('input', CLASS_NAME.input);
    const buttonUpdateSection = utils.createElement('button', CLASS_NAME.button, 'UPDATE')
    wrapperUpdateSection.append(inputUpdateSection,buttonUpdateSection);

    const wrapperButtonSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const buttonRace = utils.createElement('button', CLASS_NAME.button, 'RACE');
    const buttonReset = utils.createElement('button', CLASS_NAME.button, 'RESET');
    const buttonGenerateCars = utils.createElement('button', CLASS_NAME.button, 'GENERATE CARS');

    wrapperButtonSection.append(buttonRace,buttonReset,buttonGenerateCars);

    wrapper.append(wrapperCreateSection,wrapperUpdateSection,wrapperButtonSection)
    return wrapper;
}