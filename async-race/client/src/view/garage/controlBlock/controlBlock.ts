import './controlBlock.scss';
import * as utils from '../../../utils/utils';
import * as controller from '../../../controller/controller';

const CLASS_NAME = {
  wrapperControlBlock: ['wrapper-control-block'],
  wrapperSection: ['wrapper-control-block-section'],
  inputCreate: ['input', 'input-create'],
  inputUpdate: ['input', 'input-update'],
  inputColorCreate: ['input-color', 'input-color-create'],
  inputColorUpdate: ['input-color', 'input-color-update'],
  button: ['btn'],
  buttonRace: ['btn', 'button-race'],
  buttonGenerate: ['btn', 'button-generate'],
  buttonCreate: ['btn', 'btn-section', 'button-create'],
  buttonUpdate: ['btn', 'btn-section', 'button-update'],
};

export default function createControlBlock():HTMLElement {
  const wrapper = utils.createElement('div', CLASS_NAME.wrapperControlBlock);

  const wrapperCreateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
  const inputCreateSection = utils.createElement('input', CLASS_NAME.inputCreate) as HTMLInputElement;
  inputCreateSection.placeholder = ' Name car';
  const inputColorCreateSection = utils.createInputElement('input', CLASS_NAME.inputColorCreate);
  inputColorCreateSection.type = 'color';

  const buttonCreateSection = utils.createElement('button', CLASS_NAME.buttonCreate, 'CREATE') as HTMLButtonElement;
  wrapperCreateSection.append(inputCreateSection, inputColorCreateSection, buttonCreateSection);

  const wrapperUpdateSection = utils.createElement('div', CLASS_NAME.wrapperSection);
  const inputUpdateSection = utils.createInputElement('input', CLASS_NAME.inputUpdate);
  inputUpdateSection.placeholder = ' Set new name';
  const inputColorUpdateSection = utils.createInputElement('input', CLASS_NAME.inputColorUpdate);
  inputColorUpdateSection.type = 'color';
  const buttonUpdateSection = utils.createElement('button', CLASS_NAME.buttonUpdate, 'UPDATE') as HTMLButtonElement;
  buttonUpdateSection.disabled = true;
  wrapperUpdateSection.append(inputUpdateSection, inputColorUpdateSection, buttonUpdateSection);

  const wrapperButtonSection = utils.createElement('div', CLASS_NAME.wrapperSection);
  const buttonRace = utils.createElement('button', CLASS_NAME.buttonRace, 'RACE') as HTMLButtonElement;
  const buttonReset = utils.createElement('button', CLASS_NAME.button, 'RESET') as HTMLButtonElement;
  const buttonGenerateCars = utils.createElement('button', CLASS_NAME.buttonGenerate, 'GENERATE CARS') as HTMLButtonElement;

  wrapperButtonSection.append(buttonRace, buttonReset, buttonGenerateCars);

  wrapper.append(wrapperCreateSection, wrapperUpdateSection, wrapperButtonSection);

  buttonUpdateSection.addEventListener('click', () => {
    if (!inputUpdateSection.getAttribute('id')) {
      return;
    }
    const id = inputUpdateSection.getAttribute('id')!;
    const carName = document.querySelector('div[id=' + `"${id}"` + ']')?.querySelector('.car-name');
    inputUpdateSection as HTMLInputElement;
    carName!.textContent = inputUpdateSection.value;

    const car = document.querySelector('div[id=' + `"${id}"` + ']')?.querySelector('.car-img');
    const currColor = car!.getAttribute('color')!;
    const svg = car!.querySelector('svg')!;
    svg.innerHTML = svg.innerHTML.replace(new RegExp(`${currColor}`, 'ig'), `${inputColorUpdateSection.value}`);
    controller.updateCar(+id, inputUpdateSection.value, `${inputColorUpdateSection.value}`);
    inputUpdateSection.removeAttribute('id');
    inputUpdateSection.value = '';
    inputColorUpdateSection.value = '';
    buttonUpdateSection.disabled = true;
  });
  buttonCreateSection.addEventListener('click', () => {
    if (!inputCreateSection.value) {
      return;
    }
    const inputCreateValue = inputCreateSection.value;
    const inputColorCreateValue = inputColorCreateSection.value;
    controller.createCar(inputCreateValue, inputColorCreateValue);
    inputCreateSection.value = '';
    inputColorCreateSection.value = '';
  });
  buttonGenerateCars.addEventListener('click', () => {
    controller.create100Car();
  });
  buttonRace.addEventListener('click', () => {
    controller.race();
    buttonReset.disabled = true;
    buttonRace.disabled = true;
    buttonCreateSection.disabled = true;
    buttonGenerateCars.disabled = true;
    const btnsCarBlock = Array.from(document.querySelectorAll('.btn-disable')) as HTMLButtonElement[];
    btnsCarBlock.forEach((el) => el.disabled = true);
    setTimeout(() => {
      buttonReset.disabled = false;
    }, 6000);
  });
  buttonReset.addEventListener('click', () => {
    controller.resetCars();
    const btnsCarBlock = Array.from(document.querySelectorAll('.btn-disable')) as HTMLButtonElement[];
    const btnsCarBlockStop = Array.from(document.querySelectorAll('.button-stop')) as HTMLButtonElement[];
    btnsCarBlock.forEach((el) => el.disabled = true);
    btnsCarBlockStop.forEach((el) => el.disabled = true);
    buttonCreateSection.disabled = true;
    buttonGenerateCars.disabled = true;
    buttonRace.disabled = true;
    setTimeout(() => {
      btnsCarBlock.forEach((el) => el.disabled = false);
      btnsCarBlockStop.forEach((el) => el.disabled = true);
      buttonCreateSection.disabled = false;
      buttonGenerateCars.disabled = false;
      buttonRace.disabled = false;
    }, 2500);
  });

  buttonGenerateCars.addEventListener('click', () => {
    buttonRace.disabled = true;
    buttonCreateSection.disabled = true;
    buttonGenerateCars.disabled = true;
    const btnsCarBlock = Array.from(document.querySelectorAll('.btn-disable')) as HTMLButtonElement[];
    btnsCarBlock.forEach((el) => el.disabled = true);
    setTimeout(() => {
      buttonRace.disabled = false;
      buttonCreateSection.disabled = false;
      buttonGenerateCars.disabled = false;
      btnsCarBlock.forEach((el) => el.disabled = false);
    }, 6000);
  });
  return wrapper;
}
