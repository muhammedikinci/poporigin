export function cookieControl() {
  return document.cookie.indexOf('pupdata-popup=1') !== -1;
}

export function exitIntent(callback) {
  document.addEventListener('mouseout', (evt) => {
    if (evt.toElement === null && evt.relatedTarget === null) {
      if (typeof callback === 'function') {
        callback();
      }
    }
  });
}

export function afterSecond(second, callback) {
  setTimeout(callback, second * 1000);
}

export function showPopup() {
  document
    .querySelector('#pupdata-popup')
    .setAttribute('style', 'display: flex;');
}

export function renderPopup(data) {
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'pupdata-popup');
  wrapper.setAttribute('style', 'display: none;');

  var wrapperShadow = wrapper.attachShadow({ mode: 'open' });
  wrapperShadow.innerHTML = data;
  document.body.appendChild(wrapper);

  RemoverEvent('#secondaryButton');
  RemoverEvent('#overlay');
  RemoverEvent('#closeButton');
  RemoverEvent('#firstButton');
}

function RemoverEvent(selector) {
  if (document.querySelector('#pupdata-popup') === null) return;
  if (
    document
      .querySelector('#pupdata-popup')
      .shadowRoot.querySelector(selector) === null
  )
    return;

  document
    .querySelector('#pupdata-popup')
    .shadowRoot.querySelector(selector)
    .addEventListener('click', function (e) {
      e.preventDefault();
      SetCookie();
      if (this.getAttribute('id') !== 'closeButton') {
        window.location.href = this.getAttribute('href');
      }
      else {
        document.querySelector('#pupdata-popup').remove();
      }
    });
}

function CookieEvent(selector) {
  if (document.querySelector('#pupdata-popup') === null) return;
  if (
    document
      .querySelector('#pupdata-popup')
      .shadowRoot.querySelector(selector) === null
  )
    return;

  document
    .querySelector('#pupdata-popup')
    .shadowRoot.querySelector(selector)
    .addEventListener('click', function (e) {
      SetCookie();
    });
}

function SetCookie() {
  var date = new Date();
  date.setDate(new Date().getDate() + 1);
  document.cookie =
    'pupdata-popup=1; expires=' + date.toGMTString() + '; path=/';
}
