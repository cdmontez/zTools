/*
*
*  z.JS - a Javascript library by cdmontez
*  https://github.com/cdmontez
*
*/

var z = {};

z.help = function () {
  document.write('You can access the zTools documentation here: https://github.com/cdmontez/zTools')
}

z.create = function (ELEMENT, CLASSNAME) {
  let element = document.createElement(ELEMENT);
  if (CLASSNAME) {
    element.className = CLASSNAME;
  }
  return element;
};

z.style = function (ELEMENT, STYLES) {
  for (let STYLE in STYLES) {
    ELEMENT.style[STYLE] = STYLES[STYLE];
  }
}

z.codeBlock = function (CLASSNAME) {
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  pre.appendChild(code);
  return code;
}