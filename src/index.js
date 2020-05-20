import {
  cookieControl,
  exitIntent,
  renderPopup,
  showPopup,
  afterSecond,
} from './mode';
// import { popup } from './popups/popup1';
import { popup } from './popups/popup2';

(() => {
  if (typeof window.pupdata === 'undefined')
    return;

  if (cookieControl())
    return;

  try {
    renderPopup(popup);

    if ((window.pupdata || {}).exitIntend) {
      exitIntent(showPopup);
    } else if ((window.pupdata || {}).afterSeconds !== null) {
      afterSecond(window.pupdata.afterSeconds, showPopup);
    }
  } catch (ex) {
    console.log('%cPopup Error', 'font-size: 11px; background-color: tomato; color: white; padding: 10px; border-radius: 30px;');
    console.warn(ex);
  }
})();