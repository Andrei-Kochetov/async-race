import './carWinnersBoard.scss';
import * as utils from '../../../../utils/utils';

const CLASS_NAME = {
  carBlock: ['car-block-board'],
  carBoardImg: ['car-board-img'],
  carName: ['car-name-board'],
  carWin: ['car-win-board'],
  carBestTime: ['car-best-time-board'],
  carNumber: ['car-name-winner'],
};

export function createCarBlockWinnersBoard(num:number, id:number, name:string, win:number, bestTime:number, color:string) {
  const carBlockWinners = utils.createElement('tr', CLASS_NAME.carBlock);
  carBlockWinners.setAttribute('id', `${id}`);
  const nums = num;
  const numberCarBlock = utils.createElement('td', CLASS_NAME.carNumber, `${id}`);
  // const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  const car = utils.createElement('td', CLASS_NAME.carBoardImg, `
    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 1052.4 474.3" version="1.1">
  <defs id="defs4">
    <linearGradient id="linearGradient8695">
      <stop id="stop8697" stop-color="#6c5353" offset="0"/>
      <stop id="stop8699" stop-color="#241c1c" offset="1"/>
    </linearGradient>
    <radialGradient id="radialGradient8852" gradientUnits="userSpaceOnUse" cy="-358.2" cx="-752.22" gradientTransform="matrix(1.0946 1.4891e-7 0 .20883 76.062 -167.31)" r="705.07">
      <stop id="stop8817" offset="0"/>
      <stop id="stop8819" stop-opacity="0" offset="1"/>
    </radialGradient>
    <linearGradient id="linearGradient8854" x1="-1468" xlink:href="#linearGradient8695" gradientUnits="userSpaceOnUse" y1="-324.74" gradientTransform="matrix(1 0 0 .91837 2.7542 -44.627)" x2="-1468" y2="-277.59"/>
    <linearGradient id="linearGradient8856" x1="-251.55" gradientUnits="userSpaceOnUse" y1="-574.45" gradientTransform="translate(18.361 11.24)" x2="-255.22" y2="-620.35">
      <stop id="stop8681" stop-color="#483737" offset="0"/>
      <stop id="stop8683" stop-color="#ac9393" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8858" y2="-544.93" gradientUnits="userSpaceOnUse" y1="-509.42" x2="-1265.9" x1="-1265.9">
      <stop id="stop8534" stop-color="#f00" offset="0"/>
      <stop id="stop8536" stop-color="#f55" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8860" y2="-769.08" gradientUnits="userSpaceOnUse" y1="-317.39" x2="-923.57" x1="-927.25">
      <stop id="stop8463" stop-color="#f00" offset="0"/>
      <stop id="stop8465" stop-color="#ffc4c4" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8862" y2="-175.44" gradientUnits="userSpaceOnUse" y1="-425.15" x2="-719.41" x1="-1128.3">
      <stop id="stop8505" stop-color="#f55" offset="0"/>
      <stop id="stop8507" stop-color="#f00" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8864" y2="-311.82" gradientUnits="userSpaceOnUse" y1="-366.51" x2="-801.93" x1="-801.93">
      <stop id="stop8523" stop-color="#800000" offset="0"/>
      <stop id="stop8525" stop-color="#f00" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8866" y2="563.24" gradientUnits="userSpaceOnUse" y1="335.17" x2="-1538.1" x1="-1538.1">
      <stop id="stop8495" stop-color="#2e2424" offset="0"/>
      <stop id="stop8497" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8868" y2="335.93" gradientUnits="userSpaceOnUse" y1="540.73" x2="-1565.1" x1="-1565.1">
      <stop id="stop8479" stop-color="#6c5353" offset="0"/>
      <stop id="stop8481" stop-color="#6c5353" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8870" y2="580.15" gradientUnits="userSpaceOnUse" y1="398.8" x2="-1548.9" x1="-1548.9">
      <stop id="stop8487" stop-color="#483e37" offset="0"/>
      <stop id="stop8489" stop-color="#241f1c" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8872" y2="-300.87" gradientUnits="userSpaceOnUse" y1="-389.92" x2="-52.33" x1="-15.607">
      <stop id="stop8689" stop-color="#6c5353" offset="0"/>
      <stop id="stop8691" stop-color="#241c1c" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8874" x1="-1436.8" xlink:href="#linearGradient8695" gradientUnits="userSpaceOnUse" x2="-1414.7" y1="-389" y2="-301.78"/>
    <linearGradient id="linearGradient8882" x1="-560.94" gradientUnits="userSpaceOnUse" y1="-649.73" gradientTransform="translate(-22.737 41.96)" x2="-555.43" y2="-617.14">
      <stop id="stop8671" stop-color="#faa" offset="0"/>
      <stop id="stop8673" stop-color="#faa" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8884" x1="-1032.5" gradientUnits="userSpaceOnUse" y1="-591.46" gradientTransform="matrix(1.0338 0 0 1 38.894 -5.9633)" x2="-1027.2" y2="-524.35">
      <stop id="stop8707" stop-color="#f00" offset="0"/>
      <stop id="stop8709" stop-color="#f00" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="linearGradient8886" x1="-1032.5" gradientUnits="userSpaceOnUse" y1="-591.46" gradientTransform="matrix(1.1183 0 0 1.0002 433.9 -2.7249)" x2="-1027.2" y2="-524.35">
      <stop id="stop8707-1" stop-color="#f00" offset="0"/>
      <stop id="stop8709-2" stop-color="#f00" stop-opacity="0" offset="1"/>
    </linearGradient>
  </defs>
  <g id="layer1" transform="translate(-100 -500.06)">
    <flowRoot id="flowRoot7331" style="word-spacing:0px;letter-spacing:0px" xml:space="preserve" font-size="40px" line-height="125%" font-family="Sans" fill="#000000">
      <flowRegion id="flowRegion7333">
        <rect id="rect7335" y="326.65" width="705.71" height="508.57" x="140"/>
      </flowRegion>
      <flowPara id="flowPara7337"/>
    </flowRoot>
    <g id="g8823" transform="matrix(.55164 0 0 .55164 936.73 1073)">
      <path id="path8813" transform="matrix(1.0608 0 0 .54380 27.975 -110.11)" fill="url(#radialGradient8852)" d="m-33.05-235.68c0 15.718-315.67 28.46-705.07 28.46s-705.07-12.742-705.07-28.46 315.67-28.46 705.07-28.46 705.07 12.742 705.07 28.46z"/>
      <rect id="rect8747" rx="18.307" ry="36.742" height="41.313" width="254.3" y="-350.44" x="-1479" fill="url(#linearGradient8854)"/>
      <path id="path8677" fill="url(#linearGradient8856)" d="m-396.6-564.13-0.91806-16.525 183.61-16.525 36.723 48.657z"/>
      <rect id="rect8387-7" ry="38.419" rx="41.782" transform="matrix(1 0 .15809 .98743 0 0)" height="160.41" width="49.22" y="-566.21" x="-1023.2" fill="#020202"/>
      <rect id="rect8387" ry="38.436" rx="41.782" transform="matrix(1 0 .14418 .98955 0 0)" height="160.07" width="44.793" y="-590.36" x="-728.8" fill="#020202"/>
      <path id="path8366-9" d="m-346.16-582.69c-38.838 0.13178-82.22 1.887-130.62 5.8125l11.094 44.188 424.03 9.3125s-67.154-60.118-304.5-59.312zm-858.19 36.094c-153.4-0.12-260 60.6-260 60.6l340.81-9.3125 8.9375-44.188c-31.261-4.9702-61.297-7.0701-89.719-7.0938z" fill="${color}"/>
      <path id="path8344" fill="#6c5353" d="m-13.257-356.71c14-63.12 6.4153-107.15-17.992-83.332l-6.1552 85.699z"/>
      <rect id="rect7439-1" rx="20.599" ry="20.599" height="47.348" width="721.58" y="-336.07" x="-1246.2" fill="#333"/>
      <rect id="rect7439" rx="20.599" ry="20.599" height="47.348" width="1250" y="-346.59" x="-1384.3" fill="#4d4d4d"/>
      <path id="path7437" d="m-618.94-712.59s-335.41-0.38265-491.44 77.438l-120 102.56s-245.46 23.924-254.28 51.438c-28.354 88.458 74.281 171.34 74.281 171.34h1324.3c79.958-11.465 79.051-109.59 59.969-220.09-136.71-15.394-275.69-48.12-429.97-35.25-111.96-150.65-162.84-147.44-162.84-147.44zm-21.688 24.438c2.1563-0.014 3.3125 0 3.3125 0 48.676 1.8946 80.698 41.422 120.94 100.94l-18.46 27.71-262.97 12.5-14.1-131.69c83.732-8.4126 155.37-9.366 171.28-9.4688zm-199.06 12.469 13.906 129.97-280.06 12.938 43.75-88.562c57.465-28.622 143.07-44.986 222.41-54.344z" fill="${color}"/>
      <path id="path7437-8" fill="${color}" d="m-829-677.09-10.688 1.4063 13.906 129.97-280.06 12.938c-18.874 101.85 90.472 60.769 76.562 222.97h245.41z"/>
      <path id="path7437-2" fill="${color}" d="m-567.44-342.94c-353.93-0.1394-635.75 10.283-856.13 21.156 7.8516 7.6455 13.188 11.969 13.188 11.969h1324.3c20.882-2.9942 36.22-11.914 47.188-25.406-191.73-5.3822-367.57-7.6553-528.53-7.7188z"/>
      <g id="g8607" transform="translate(0 -.95007)">
        <path id="path7459" transform="matrix(1.0747 0 0 1.0752 478.83 -820.99)" fill="url(#linearGradient8866)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
        <path id="path7459-3" transform="matrix(.86750 0 0 .86793 160.97 -728.47)" fill="url(#linearGradient8868)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
        <path id="path7459-3-3" transform="matrix(.29372 0 0 .29387 -719.25 -472.26)" fill="url(#linearGradient8870)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
      </g>
      <path id="path8342" fill="url(#linearGradient8872)" d="m-65.261-404.03-20.833 94.222s40.783 4.4795 44.507 3.7878c29.339-5.4491 65.038-62.574 53.976-98.01z"/>
      <path id="path8342-5" fill="url(#linearGradient8874)" d="m-1404.7-400.07 20.833 94.222s-40.783 4.4795-44.507 3.7878c-29.339-5.4491-65.038-62.574-53.976-98.01z"/>
      <path id="rect8455" fill="#f00" d="m-547.9-615.71c-22.728-7.1609-65.679 15.076-65.679 15.076-4.1179 10.667-4.1668 21.334 0.28345 32.002 0 0 34.981 3.5595 54.762 2.1005 1.6962-4.1161 3.4187-8.2158 5.0239-12.362 12.815 3.626 23.813 10.998 32.613 22.77l-0.10284 8.9395 32.737 1.1014-0.77058-9.2292-21.673-2.7218c-14.593-13.235-30.323-26.414-36.842-39.807 1.2202-5.5179 1.924-11.19 1.8524-17.137-0.73499-0.25223-1.4711-0.5005-2.2044-0.73118z"/>
      <g id="g8602" transform="translate(41.547 -225.91)">
        <path id="path7459-6" transform="matrix(1.0747 0 0 1.0752 1300.7 -596.03)" fill="url(#linearGradient8866)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
        <path id="path7459-3-7" transform="matrix(.86750 0 0 .86793 982.85 -503.51)" fill="url(#linearGradient8868)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
        <path id="path7459-3-3-1" transform="matrix(.29372 0 0 .29387 102.63 -247.3)" fill="url(#linearGradient8870)" d="m-1422.3 446.31c0 61.713-50.028 111.74-111.74 111.74-61.713 0-111.74-50.028-111.74-111.74 0-61.713 50.028-111.74 111.74-111.74 61.713 0 111.74 50.028 111.74 111.74z"/>
      </g>
      <path id="rect8455-8" fill="${color}" d="m-547.9-615.71c-22.728-7.1609-65.679 15.076-65.679 15.076-4.1179 10.667-4.1668 21.334 0.28345 32.002 0 0 34.981 3.5595 54.762 2.1005 1.6962-4.1161 3.4187-8.2158 5.0239-12.362 12.815 3.626 23.813 10.998 32.613 22.77l-0.10284 8.9395 32.737 1.1014-0.77058-9.2292-21.673-2.7218c-14.593-13.235-30.323-26.414-36.842-39.807 1.2202-5.5179 1.924-11.19 1.8524-17.137-0.73499-0.25223-1.4711-0.5005-2.2044-0.73118z"/>
      <rect id="rect8703" ry="38.406" rx="18.237" transform="matrix(.99937 -.035622 .038071 .99928 0 0)" height="22.073" width="55.702" y="-562.41" x="-1057.8" fill="url(#linearGradient8884)"/>
      <rect id="rect8703-8" ry="38.398" rx="18.235" transform="matrix(.99946 -.032931 .041182 .99915 0 0)" height="22.076" width="60.255" y="-559.24" x="-752.43" fill="url(#linearGradient8886)"/>
      <path id="path7437-4" fill="#f95" d="m-41.58-510.72c-33.901 0.6471-60.187 12.761-59.54 27.781l0.75129 17.469c0.66778 15.505 29.756 28.083 65.237 28.188l18.187 0.0625c-0.43687-22.819-2.9916-47.636-6.8555-73.469l-14.494-0.0313c-1.1088-0.003-2.1933-0.0209-3.2869 0zm-1447.2 26.062c-7.9323 25.248-5.231 50.021 2.6922 72.531 31.42-4.3942 54.234-18.172 52.34-32.406l-2.2852-17.344c-1.7546-13.184-24.137-22.344-52.747-22.781z"/>
    </g>
  </g>
  <metadata>
    <rdf:RDF>
      <cc:Work>
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/>
        <dc:publisher>
          <cc:Agent rdf:about="http://openclipart.org/">
            <dc:title>Openclipart</dc:title>
          </cc:Agent>
        </dc:publisher>
        <dc:title>red car</dc:title>
        <dc:date>2013-06-14T17:48:22</dc:date>
        <dc:description>just a car I made and I though it could be useful to someone</dc:description>
        <dc:source>http://openclipart.org/detail/179328/red-car-by-rematuche-179328</dc:source>
        <dc:creator>
          <cc:Agent>
            <dc:title>rematuche</dc:title>
          </cc:Agent>
        </dc:creator>
        <dc:subject>
          <rdf:Bag>
            <rdf:li>automobile</rdf:li>
            <rdf:li>car</rdf:li>
            <rdf:li>city</rdf:li>
            <rdf:li>free</rdf:li>
            <rdf:li>red</rdf:li>
            <rdf:li>sport</rdf:li>
            <rdf:li>svg</rdf:li>
          </rdf:Bag>
        </dc:subject>
      </cc:Work>
      <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">
        <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
        <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
        <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
      </cc:License>
    </rdf:RDF>
  </metadata>
</svg>
`);
    // const name = 'LADUSHKA'
  const nameCar = utils.createElement('td', CLASS_NAME.carName, `${name}`);
  // const win = 3
  const winCar = utils.createElement('td', CLASS_NAME.carWin, `${win}`);
  // const bestTime = 11.3
  const bestTimeCar = utils.createElement('td', CLASS_NAME.carBestTime, `${bestTime}`);
  carBlockWinners.append(numberCarBlock, car, nameCar, winCar, bestTimeCar);

  return carBlockWinners;
}
