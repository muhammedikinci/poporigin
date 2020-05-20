/*
Cookie Consent Popup
 */
// **** Override Window Object From Main.js ****
// **** Delete this fields at publish time  ****
// window.pupdata = {
//     appendTargetSelector: 'body',
//     closeEventOverride: function (selector) {
//         console.log(selector);
//     },
//     headline: {
//         text: 'Çerez Politikamız',
//         fontSize: '28px'
//     },
//     description: {
//         text: 'İnternet sitemizde çerez kullanılmaktadır. Çerezler hakkında detaylı bilgi için <a href="https://google.com">Gizlilik ve Çerez Politikası\'nı</a> inceleyiniz. Devam etmeniz halinde çerez kullanımına izin verdiğinizi kabul edeceğiz. ',
//         fontSize: '13px'
//     },
//     okButton: {
//         borderRadius: '5px',
//         padding: '10px',
//         text: 'Kabul Ediyorum',
//         url: 'function'
//     },
//     exitIntend: false,
//     afterSeconds: 0,
//     colors: {
//         color1: '#f7f7f7',
//         color2: '#3f3f44',
//         color3: '#3f3f44',
//     },
//     borderRadius : '5px',
//     padding: '25px',
//     position: 'TOP_LEFT', // Valid values ['CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT', 'TOP_LEFT', 'TOP_RIGHT']
// };

export const popup = `
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <style>
        :host {
            ${
              window.pupdata.position === 'BOTTOM_LEFT'
                ? `left: ${window.pupdata.padding}; bottom: ${window.pupdata.padding};`
                : ''
            }
            ${
              window.pupdata.position === 'BOTTOM_RIGHT'
                ? `right: ${window.pupdata.padding}; bottom: ${window.pupdata.padding};`
                : ''
            }
            ${
                window.pupdata.position === 'TOP_LEFT'
                    ? `left: ${window.pupdata.padding}; top: ${window.pupdata.padding};`
                    : ''
            }
                        ${
                window.pupdata.position === 'TOP_RIGHT'
                    ? `right: ${window.pupdata.padding}; top: ${window.pupdata.padding};`
                    : ''
            }
            ${
              window.pupdata.position === 'CENTER'
                ? 'left: 0; top: 0;'
                : ''
            }
            ${
              window.pupdata.position === 'CENTER'
                ? 'width: 100%; height: 100vh;'
                : 'width: 500px; height: auto;'
            }
            position: fixed;
            align-items: center;
            justify-content: center;
            z-index: 999999999;
        }

        @media (max-width: 578px) {
            :host {
                ${
                    window.pupdata.position.indexOf('BOTTOM') !== -1 ? 'bottom: 0;' : 'top: 0;'
                }
                left: 0;
                right: 0;
                width: 100%;
            }
        }

        .pupdata-wrapper {
            position: relative;
            padding: 30px;
            font-family: 'Roboto', sans-serif;
            width: 525px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: ${window.pupdata.borderRadius};
            -webkit-box-shadow: 0px 2px 6px 0px rgb(194, 194, 194);
            -moz-box-shadow: 0px 2px 6px 0px rgb(194, 194, 194);
            box-shadow: 0px 2px 6px 0px rgb(194, 194, 194);
            color: ${window.pupdata.colors.color3};
            animation: fadeIn ease 300ms;
            -webkit-animation: fadeIn 300ms;
            -moz-animation: fadeIn 300ms;
            -o-animation: fadeIn 300ms;
            -ms-animation: fadeIn 300ms;
            z-index: 3;
            background-color: ${window.pupdata.colors.color1};
        }

        p.headline {
            margin: 0;
            padding: 0;
            font-weight: 700;
            font-size: ${window.pupdata.headline.fontSize};
        }

        p.head2 {
            font-size: 24px;
            font-weight: 200;
        }

        p.normal {
            font-size: 12px;
            font-weight: 300;
            line-height: 1.4;
        }

        .buttons {
            margin-top: 30px;
            margin-bottom: 10px;
            cursor: pointer;
        }
        .button {
            font-weight: bold;
            text-decoration: none;
            outline:none;
            font-size: 13px;
        }
        .firstButton {
            background-color: ${window.pupdata.colors.color2};
            color: white;
            padding: ${window.pupdata.okButton.padding};
            padding-left: 30px;
            padding-right: 30px;
            border-radius: ${window.pupdata.okButton.borderRadius};
        }
        .button:hover {
            opacity: 0.6;
        }

        .blocks div {
            padding-top: 7px;
            padding-bottom: 7px;
            display: flex;
            align-items: center;
        }

        .blocks lottie-player {
            border-radius: 10px;
            background-color: white;
            margin-right: 15px;
        }

        a {
            color: ${window.pupdata.colors.color3};
        }

        .blocks span {
            font-size: 18px;
            font-weight: bold;
            color: ${window.pupdata.colors.color3};
        }
        
        @keyframes fadeIn {
            0% {transform:scale(0);}
            90% {transform:scale(1.1);}
            100% {transform:scale(1);}
        }
        
        @-moz-keyframes fadeIn {
            0% {transform:scale(0);}
            90% {transform:scale(1.1);}
            100% {transform:scale(1);}
        }
        
        @-webkit-keyframes fadeIn {
            0% {transform:scale(0);}
            90% {transform:scale(1.1);}
            100% {transform:scale(1);}
        }
        
        @-o-keyframes fadeIn {
            0% {transform:scale(0);}
            90% {transform:scale(1.1);}
            100% {transform:scale(1);}
        }
        
        @-ms-keyframes fadeIn {
            0% {transform:scale(0);}
            90% {transform:scale(1.1);}
            100% {transform:scale(1);}
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
            background-color: #45454570;
            z-index: 2;
            display: flex;
        }

        .closeButton {
            width: 25px;
            height: 25px;
            background-color: ${window.pupdata.colors.color2};
            border-radius: 50px;
            position: absolute;
            right: 15px;
            top: 15px;
            transition: all 100ms;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .closeButton img {
            width: 20px;
        }
        .closeButton:hover {
            background-color: #00000080;
            transition: all 100ms;
        }
    </style>
    
    <div class="pupdata-wrapper" >
        <div class="closeButton" id="closeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 72.125 72.125">
                <g id="Group_1" data-name="Group 1" transform="translate(-281.438 117.562)">
                    <line id="Line_1" data-name="Line 1" y2="100" transform="translate(282.145 -116.855) rotate(-45)" fill="none" stroke="#fff" stroke-width="6"/>
                    <line id="Line_2" data-name="Line 2" x2="100" transform="translate(282.145 -46.145) rotate(-45)" fill="none" stroke="#fff" stroke-width="6"/>
                </g>
            </svg>
        </div>
        <p class="headline">${window.pupdata.headline.text}</p>
        <p class="normal">${window.pupdata.description.text}</p>
        <div class="buttons">
            <a class="button firstButton" id="firstButton" href="${
              window.pupdata.okButton.url
            }">${window.pupdata.okButton.text}</a>
        </div>
    </div>
    ${
      window.pupdata.position === 'CENTER'
        ? '<div class="overlay" id="overlay"></div>'
        : ''
    }
`;
