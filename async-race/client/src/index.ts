import './fonts/fonts.scss';
import './main.scss';
import 'normalize.css'
import * as api from './utils/api';
import { createView } from './view/view';
import * as controller from './controller/controller'

createView();
controller.appendCars();




/* api.startCar(118);
//api.startStopCar(118, 'stopped');
api.driveCar(118)
api.stopCar(118) */
/* 
api.startStopCar(118, 'started');
//api.startStopCar(118, 'stopped');
api.driveCar(118, 'drive')
api.startStopCar(118, 'started');
//api.startStopCar(118, 'stopped');
api.driveCar(118, 'drive')
api.startStopCar(118, 'started');
//api.startStopCar(118, 'stopped');
api.driveCar(118, 'drive')
console.log( parseInt(' (10)', 10)) */