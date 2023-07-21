import './controlBlock.scss';
import * as utils from '../../../utils/utils';
import * as api from '../../../utils/utils';
import * as controller from '../../../controller/controller';

const CLASS_NAME = {
    wrapperControlBlock: ['wrapper-control-block'],
    wrapperSection: ['wrapper-create-section'],
    inputCreate: ['input', 'input-create'],
    inputUpdate: ['input', 'input-update'],
    inputColorCreate: ['input-color','input-color-create'],
    inputColorUpdate: ['input-color','input-color-update'],
    button: ['btn'],
    buttonCreate: ['btn', 'btn-section', 'button-create'],
    buttonUpdate: ['btn', 'btn-section', 'button-update'],
}

export function createControlBlock():HTMLElement{
    const wrapper = utils.createElement('div', CLASS_NAME.wrapperControlBlock);

    const wrapperCreateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const inputCreateSection = utils.createElement('input', CLASS_NAME.inputCreate) as HTMLInputElement;
    const inputColorCreateSection = utils.createInputElement('input', CLASS_NAME.inputColorCreate);   
    inputColorCreateSection.type = 'color';

    const buttonCreateSection = utils.createElement('button', CLASS_NAME.buttonCreate, 'CREATE')
    wrapperCreateSection.append(inputCreateSection,inputColorCreateSection,buttonCreateSection);

    const wrapperUpdateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const inputUpdateSection = utils.createInputElement('input', CLASS_NAME.inputUpdate);
    const inputColorUpdateSection = utils.createInputElement('input', CLASS_NAME.inputColorUpdate);   
    inputColorUpdateSection.type = 'color';
    const buttonUpdateSection = utils.createElement('button', CLASS_NAME.buttonUpdate, 'UPDATE')
    wrapperUpdateSection.append(inputUpdateSection,inputColorUpdateSection, buttonUpdateSection);

    const wrapperButtonSection = utils.createElement('div', CLASS_NAME.wrapperSection);
    const buttonRace = utils.createElement('button', CLASS_NAME.button, 'RACE');
    const buttonReset = utils.createElement('button', CLASS_NAME.button, 'RESET');
    const buttonGenerateCars = utils.createElement('button', CLASS_NAME.button, 'GENERATE CARS');

    wrapperButtonSection.append(buttonRace,buttonReset,buttonGenerateCars);

    wrapper.append(wrapperCreateSection,wrapperUpdateSection,wrapperButtonSection);

    buttonUpdateSection.addEventListener('click',()=>{
        if(!inputUpdateSection.getAttribute('id')) {
            return;
        }
        const id = inputUpdateSection.getAttribute('id')!
        const carName = document.querySelector('div[id=' + `"${id}"`+ ']')?.querySelector('.car-name');
        inputUpdateSection as HTMLInputElement;
        carName!.textContent = inputUpdateSection.value ;

        const car = document.querySelector('div[id=' + `"${id}"`+ ']')?.querySelector('.car-img');
        const currColor = car!.getAttribute('color')!
        console.log(currColor)
        const svg = car!.querySelector('svg')!;
        svg.innerHTML = svg.innerHTML.replace(new RegExp(`${currColor}`, 'ig'), `${inputColorUpdateSection.value}`)
        console.log(typeof currColor)
        controller.updateCar(+id, inputUpdateSection.value , `${inputColorUpdateSection.value}` );
        inputUpdateSection.removeAttribute('id')
        inputUpdateSection.value = '';
        inputColorUpdateSection.value = '';
    })
    buttonCreateSection.addEventListener('click',()=>{
        if(!inputCreateSection.value) {
            return;
        }
        const inputCreateValue = inputCreateSection.value;
        const inputColorCreateValue = inputColorCreateSection.value;
        controller.createCar(inputCreateValue, inputColorCreateValue);
        inputCreateSection.value = '';
        inputColorCreateSection.value = '';
    })
    buttonGenerateCars.addEventListener('click', ()=>{
        controller.create100Car();
    })
    buttonRace.addEventListener('click',()=>{
        controller.race()
    })
    buttonReset.addEventListener('click', ()=>{
        controller.resetCars()
    })
    return wrapper;
}