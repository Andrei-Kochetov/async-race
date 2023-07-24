import './fonts/fonts.scss';
import './main.scss';
import 'normalize.css';
import createView from './view/view';
import * as controller from './controller/controller';

createView();
controller.appendCars();
controller.appendWinners();
