import createCarBlock from '../view/garage/main/carBlock/carBlock';
import * as api from '../utils/api';
import * as types from '../types/type&interface';
import createCarBlockWinnersBoard from '../view/winners/winnersBoard/carWinnersBoard/carWinnersBoard';

const objFlags = {
  flagTime: true,
  flagWins: true,
  flagId: true,
};
const currentSort: types.SortObj = {
  sort: 'time',
  order: 'ASC',
  page: 1,
};

export async function appendTotalCars() {
  const garageCount = document.querySelector('.garage-cars-count');
  const totalCount = await api.getTotalCount();
  garageCount!.textContent = `Garage (${totalCount})`;
}
export async function appendTotalWinners() {
  const garageCount = document.querySelector('.winners-count');
  const totalCount = await api.getTotalCountWinners();
  garageCount!.textContent = `Winners (${totalCount})`;
}

export async function appendCars(page ?: number) {
  const carsWrapper = document.querySelector('.cars-wrapper');
  carsWrapper!.innerHTML = '';
  const getCars = await api.getCars(page);
  for (let i = 0; i < getCars.length; i += 1) {
    const { name, color, id } = getCars[i];
    const car = createCarBlock(name, color, id);
    carsWrapper?.appendChild(car);
  }
  appendTotalCars();
}

export async function appendWinners(
  page: number = currentSort.page,
  sort: types.Sort = currentSort.sort,
  order: types.Order = currentSort.order,
) {
  currentSort.page = page;
  const tableBoard = document.querySelector('.table-board');
  tableBoard!.innerHTML = '';
  let getWinners;
  if (sort && order) {
    getWinners = await api.getWinners(page, undefined, sort, order);
  } else if (sort) {
    getWinners = await api.getWinners(page, undefined, sort);
  } else {
    getWinners = await api.getWinners(page);
  }

  for (let i = 0; i < getWinners.length; i += 1) {
    const { time, id, wins } = getWinners[i];
    const carArr = await api.getCar(id);
    const { color, name } = carArr[0];
    const winner = createCarBlockWinnersBoard(id, name, wins, +time, color);
    tableBoard?.appendChild(winner);
  }
  await appendTotalWinners();
}
export async function sortWinnersByTime() {
  if (!objFlags.flagTime) {
    objFlags.flagTime = true;
    currentSort.sort = 'time';
    currentSort.order = 'ASC';
    await appendWinners(undefined, 'time');
  } else {
    objFlags.flagTime = false;
    currentSort.sort = 'time';
    currentSort.order = 'DESC';
    await appendWinners(undefined, 'time', 'DESC');
  }
}
export async function sortWinnersByWins() {
  if (!objFlags.flagWins) {
    currentSort.sort = 'wins';
    currentSort.order = 'ASC';
    objFlags.flagWins = true;
    await appendWinners(undefined, 'wins');
  } else {
    currentSort.sort = 'wins';
    currentSort.order = 'DESC';
    objFlags.flagWins = false;
    await appendWinners(undefined, 'wins', 'DESC');
  }
}
export async function sortWinnersById() {
  if (!objFlags.flagId) {
    objFlags.flagId = true;
    currentSort.sort = 'id';
    currentSort.order = 'ASC';
    await appendWinners(undefined, 'id');
  } else {
    objFlags.flagId = false;
    currentSort.sort = 'id';
    currentSort.order = 'DESC';
    await appendWinners(undefined, 'id', 'DESC');
  }
}

export async function createCar(name:string, color:string) {
  await api.createCar(name, color);
  await appendCars();
  await appendTotalCars();
}

export async function createWinner(id: number, wins: number, time: number) {
  await api.createWinner(id, wins, time);
  await appendWinners();
}
export async function updateWinner(id: number, tim: number) {
  const currWinner = await api.getWinner(id);
  const { wins, time } = currWinner[0];
  const resultWins: number = wins + 1;
  let resultTime: number;

  if (Number(time) < tim) {
    resultTime = +time;
  } else {
    resultTime = tim;
  }

  await api.updateWinner(id, resultWins, resultTime);
  await appendWinners();
}

export async function transferResultWinnerToBoard(id: number, time: number) {
  const currCarsBoard = document.querySelectorAll('.car-block-board')!;
  const idCars = Array.from(currCarsBoard).map((el) => el.getAttribute('id'));
  if (idCars.includes(String(id))) {
    updateWinner(id, time);
  } else {
    await api.createWinner(id, 1, time);
    await appendWinners();
  }
}
export async function create100Car() {
  const arrName = ['Abarth', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroën', 'Dacia', 'Daewoo', 'Daihatsu', 'Dodge', 'Donkervoort', 'DS', 'Ferrari', 'Fiat', 'Fisker', 'Ford', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Iveco', 'Jaguar', 'Jeep', 'Kia', 'KTM', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Landwind', 'Lexus', 'Linkoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi', 'Morgan', 'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Rolls-Royce', 'Rover', 'Saab', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];
  const arrModel = ['A3', 'A4', 'A5', 'A6', 'A7', 'Acadia', 'Accent', 'Accord', 'Air', 'Altima', 'Ariya', 'Armada', 'Arteon', 'Ascent', 'Atlas', 'Avalon', 'Aviator', 'Blazer', 'Bronco', 'BRZ', 'C40', 'Camaro', 'Camry', 'Carnival', 'Cayenne', 'Celestiq', 'Challenger', 'Charger', 'Cherokee', 'Civic', 'CLA', 'CLS', 'Clubman', 'Compass', 'Corolla', 'Corolla', 'Corvette', 'CR-V', 'Crosstrek', 'Crown', 'CT4', 'CT5', 'Cullinan', 'CX-3', 'CX-5', 'CX-9', 'Cybertruck', 'Dawn', 'DB11', 'DBS', 'DBX', 'Defender', 'Discovery', 'Durango', 'E-Class', 'EcoSport', 'Edge', 'Edge', 'Enclave', 'Encore', 'Envision', 'Equinox', 'ES', 'Escalade', 'Escape', 'EV6', 'EV9', 'EX90', 'Explorer', 'F150', 'F8', 'Forester', 'Forte', 'G-Class', 'G70', 'G80', 'G90', 'Ghibli', 'Ghost', 'Giulia', 'GLA', 'GLB', 'GLC', 'GLE', 'GR86', 'Grecale', 'GV60', 'GV70', 'GV80', 'GX', 'Highlander', 'Hornet', 'Huracan', 'i3', 'i4', 'i7', 'ILX', 'ILX', 'Impreza', 'Insight', 'Integra', 'Ioniq', 'IS', 'iX', 'Jetta', 'K5', 'Kicks', 'Kona', 'LC', 'LS', 'LX', 'M2', 'M3', 'M4', 'M5', 'M8', 'Macan', 'Macan', 'Maverick', 'Maxima', 'MC20', 'Mirage', 'Mirai', 'Murano', 'Mustang', 'Nautilus', 'Navigator', 'Niro', 'NSX', 'NX', 'Odyssey', 'Outback', 'Outlander', 'Pacifica', 'Palisade', 'Panamera', 'Passat', 'Pilot', 'Prius', 'Q3', 'Q5', 'Q50', 'Q60', 'Q7', 'Q8', 'QX50', 'QX55', 'QX60', 'QX80', 'R1S', 'R1T', 'RC', 'RDX', 'Recon', 'Rio', 'Rogue', 'Roma', 'RX', 'RZ', 'S3', 'S4', 'S5', 'S6', 'S60', 'S7', 'S8', 'S90', 'Santa Fe', 'Sedona', 'Seltos', 'Sentra', 'Sequoia', 'Sienna', 'Sierra', 'Solterra', 'Sonata', 'Sorento', 'Soul', 'Spark', 'Sportage', 'SQ5', 'SQ7', 'SQ8', 'Stelvio', 'Stinger', 'Tahoe', 'Taos', 'Taycan', 'Terrain', 'Tiguan', 'Tonale', 'Traverse', 'Trax', 'Tucson', 'TX', 'Urus', 'V60', 'V90', 'Wraith', 'Wrangler', 'X1', 'X2', 'X3', 'X4', 'X5', 'XF', 'XM', 'Yukon', 'Z4', 'ZDX'];

  function generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function getRandomName() {
    return `${arrName[Math.floor(Math.random() * arrName.length)]} ${arrModel[Math.floor(Math.random() * arrModel.length)]}`;
  }
  for (let i = 0; i < 100; i += 1) {
    await api.createCar(getRandomName(), generateColor());
  }
  await appendCars();
  await appendTotalCars();
}

export async function updateCar(id:number, name:string, color:string) {
  api.updateCar(id, name, color);
}

export async function deleteCar(id:number) {
  await api.deleteCar(id);
  await appendCars();
  await api.deleteWinner(id);
  await appendWinners();
}

export async function stopCar(id:number) {
  await api.deleteCar(id);
  await appendCars();
}

const animationFrameIdObj: Record<string, number> = {};

async function drive(id:number) {
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' })
    .then((res) => {
      if (res.status === 500) {
        cancelAnimationFrame(animationFrameIdObj[id]);
      }
    });
}

export async function returnCar(carDiv:HTMLElement, id:number) {
  const car = carDiv;
  await api.stopCar(id);
  cancelAnimationFrame(animationFrameIdObj[id]);
  car.style.transform = 'translate(0px)';
}

export async function start(
  carDiv:HTMLElement,
  id:number,
  endPoint:number,
  speedObject?:types.StartStopResponse,
  func?:boolean,
) {
  const car = carDiv;
  let speedObj;
  if (speedObject) {
    speedObj = speedObject;
  } else {
    speedObj = await api.startCar(id);
  }

  const time = speedObj.distance / speedObj.velocity;
  const frameCount = (time / 1000) * 60;
  const dX = endPoint / frameCount;

  let currentX = 0;
  car.style.transform = `translate(${currentX}px)`;
  const tick = () => {
    currentX += dX;
    car.style.transform = `translate(${currentX}px)`;
    if (currentX < endPoint) {
      animationFrameIdObj[id] = requestAnimationFrame(tick);
    }
  };
  tick();
  if (!func) {
    drive(id);
  }
}

export async function race() {
  const carsCurrPage = document.querySelectorAll('.car-block')!;

  carsCurrPage.forEach((el) => {
    el.querySelector('.car-winner')!.textContent = '';
  });

  const main:HTMLElement = document.querySelector('.main')!;
  const mainWidth = main.offsetWidth;
  const endX = mainWidth - 45 - 100;

  const arrPromiseSpeeds = Array.from(carsCurrPage)!.map((el) => {
    const id = Number(el.getAttribute('id'))!;
    return api.startCar(id);
  });
  const speedsArr = await Promise.all(arrPromiseSpeeds);
  const speedsNumArr = speedsArr.map((el) => (el.distance / el.velocity / 1000).toFixed(2));

  const idArr:Number[] = [];

  carsCurrPage.forEach((el, i) => {
    const car = el.querySelector('.car-img') as HTMLElement;
    const id = Number(el.getAttribute('id'))!;
    idArr.push(id);
    start(car, id, endX, speedsArr[i], true);
  });

  const arrPromiseDrive = Array.from(carsCurrPage).map((el) => {
    const id = Number(el.getAttribute('id'))!;
    return fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' }).then((res) => {
      if (res.status === 500) {
        cancelAnimationFrame(animationFrameIdObj[id]);
        throw new Error();
      }
      if (res.status === 404) {
        throw new Error();
      }
      return res;
    });
  });

  const firstCarResponse = await Promise.any(arrPromiseDrive);
  const firstCarId: number = parseInt(firstCarResponse.url.split('id=')[1], 10);

  const firstCar = Array.from(carsCurrPage).filter((el) => +el.getAttribute('id')! === firstCarId)[0];
  const firstCarIndex = Array.from(carsCurrPage).indexOf(firstCar);
  const bestTime = +speedsNumArr[firstCarIndex];
  const idFisrCar = +firstCar.getAttribute('id')!;
  firstCar.querySelector('.car-winner')!.textContent = `Winner ${firstCar.querySelector('.car-name')?.textContent} time: ${speedsNumArr[firstCarIndex]}`;
  transferResultWinnerToBoard(idFisrCar, bestTime);
}

export async function resetCars() {
  const carsCurrPage = document.querySelectorAll('.car-block')!;
  carsCurrPage.forEach((el) => {
    el.querySelector('.car-winner')!.textContent = '';
    const car = el.querySelector('.car-img') as HTMLElement;
    const id = Number(el.getAttribute('id'))!;
    returnCar(car, id);
  });
}
