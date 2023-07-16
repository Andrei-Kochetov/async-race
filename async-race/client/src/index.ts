import './fonts/fonts.scss';
import './main.scss';
import 'normalize.css'
import * as api from './utils/api';
import { createView } from './view/view';
import * as controller from './controller/controller'

createView();
controller.appendCars();




