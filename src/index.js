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

  try {
    renderPopup(popup);

    if ((window.pupdata || {}).exitIntend) {
      exitIntent(showPopup);
    } else if ((window.pupdata || {}).afterSecond !== null) {
      afterSecond(window.pupdata.afterSecond, showPopup);
    }
  } catch (ex) {
    console.log('%cPopup Error', 'font-size: 11px; background-color: tomato; color: white; padding: 10px; border-radius: 30px;');
    console.warn(ex);
  }
})();