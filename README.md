# PopOrigin

Easy editable, lite and *free* javascript popups!

## Getting Started

If you want customize all popups. Follow steps.

Clone Project and change folder
```shell script
$ git clone https://github.com/muhammedikinci/poporigin
$ cd poporigin
```

Install npm dependencies
```shell script
$ npm install
```

Package Json has a two run-scripts, first script -> run project in dev mode with watch webpack
```shell script
$ npm run dev:watch
```

Second script -> just build project
```shell script
$ npm run build
```

## Change popup

Go to `/src/index.js`. You can see these lines;
```shell script
//import { popup } from './popups/popup1';
import { popup } from './popups/popup2';
```

If you want edit and rebuild popup1, just change these lines, go to `/src/popups/popup1.js` make changes and build.

## How i publish a popup?
As you can see we have an examples folder. If you want to publish a popup, just look at these folders.

```
 - main.js // custom builded file
 - index.html // example of using width window object
 - btn.svg // and closeButton icon
```

## How I customize popup without a script?

Popup data is kept in the 'window' object. While the popup is being rendered, it reads this object and takes action accordingly.
```
window.pupdata = {
  appendTargetSelector: 'body', // Which object to add (query selector)
  closeEventOverride: function (selector) { // override click events, if you don't want, just remove
    console.log(selector);
  },
  headline: {
      text: 'Çerez Politikamız',
      fontSize: '28px'
  },
  description: {
      text: 'İnternet sitemizde çerez kullanılmaktadır. Çerezler hakkında detaylı bilgi için <a href="https://google.com">Gizlilik ve Çerez Politikası\'nı</a> inceleyiniz. Devam etmeniz halinde çerez kullanımına izin verdiğinizi kabul edeceğiz. ',
      fontSize: '13px'
  },
  okButton: {
    borderRadius: '5px',
    padding: '10px',
    text: 'Kabul Ediyorum',
    url: 'function'
  },
  exitIntend: false,
  afterSeconds: 0, // how many seconds after will it appear
  colors: {
    color1: '#f7f7f7',
    color2: '#3f3f44',
    color3: '#3f3f44',
  },
  borderRadius : '5px', // popup radius
  padding: '25px', // popup padding
  position: 'TOP_LEFT', // Valid values ['CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT', 'TOP_LEFT', 'TOP_RIGHT'] 
};
```

## Examples in live

For popup 1 -> http://toptimal.xyz/popup1/<br>
For popup 2 -> http://toptimal.xyz/popup2/

## Authors

* **Muhammmed İKİNCİ**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details