import {MultiCreateAd} from './data.js';
import {createOffer} from './popup.js';


const mapCanvas = document.querySelector('#map-canvas');
const similarOffer = MultiCreateAd();
const card = createOffer(similarOffer[0]);

mapCanvas.append(card);

