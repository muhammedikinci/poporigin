import {
  cookieControl,
  exitIntent,
  renderPopup,
  showPopup,
  afterSecond,
} from './mode';
import { popup } from './popups/cookieconsent';

(() => {
  if (typeof window.pupdata === 'undefined')
    return;

  if (cookieControl())
    return;

  renderPopup(popup);

  if ((window.pupdata || {}).exitIntend) {
    exitIntent(showPopup);
  } else if ((window.pupdata || {}).afterSecond !== null) {
    afterSecond(window.pupdata.afterSecond, showPopup);
  }
})()
