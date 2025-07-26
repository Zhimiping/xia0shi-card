console.info("%c xia0shi集合卡 \n%c   v 0.0.1 ", "color: red; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");

import { cardConfigs } from './xia0shi-config.js';

const loadCards  = async () => {
    await import('./xia0shi-slider-card.js');
    
    window.customCards = window.customCards || [];
    window.customCards.push(...cardConfigs);
};

loadCards ();
