import './garage.scss';
import * as utils from '../../utils/utils';

import createMain from './main/main';

const CLASS_NAME = {
  garage: ['garage'],
};

export default function createGarage() {
  const garage = utils.createElement('div', CLASS_NAME.garage);
  const main = createMain();

  garage.append(main);
  return garage;
}
