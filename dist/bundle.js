(()=>{var r={424:(r,n,e)=>{"use strict";e.d(n,{Z:()=>C});var t=e(645),o=e.n(t),i=e(667),A=e.n(i),a=e(78),s=e.n(a),c=e(713),u=e.n(c),l=o()(!0),d=A()(s()),f=A()(u());l.push([r.id,'* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: "Nunito", sans-serif;\r\n  background-color: black;\r\n}\r\n\r\n/* Background Styles*/\r\n.bg-image {\r\n  /* The image used */\r\n  background-image: url('+d+");\r\n\r\n  /* Add the blur effect */\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  /* Full height */\r\n  height: 100vh;\r\n  width: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bg-image-dark {\r\n  /* The image used */\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url("+f+");\r\n\r\n  /* Add the blur effect */\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  /* Full height */\r\n  height: 100vh;\r\n  width: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/* Main container Styles*/\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 60vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n\r\n/* Buttons Styles*/\r\n.button-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n.btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: solid 2px rgba(255, 102, 0, 0.4);\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 2rem;\r\n  width: 12rem;\r\n  padding: 0.4rem 0;\r\n  margin: 1rem;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  /* border: none; */\r\n}\r\n.btn:hover {\r\n  background-color: rgba(255, 255, 255, 1);\r\n}\r\n.disable {\r\n  opacity: 0.5;\r\n  cursor: default;\r\n}\r\n.disable:hover {\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Clock Styles*/\r\n.clock-container {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  -webkit-box-shadow: 0px 0px 10px 6px #ffffff;\r\n  box-shadow: 0px 0px 10px 6px #ffffff;\r\n  width: 25rem;\r\n  height: 25rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.clock-display {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-weight: 500;\r\n  font-size: 2.5rem;\r\n  color: black;\r\n}\r\n.clock-displayDark {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-weight: 500;\r\n  font-size: 2.5rem;\r\n  color: white;\r\n}\r\n","",{version:3,sources:["webpack://src/index.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,YAAY;EACZ,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA,qBAAqB;AACrB;EACE,mBAAmB;EACnB,yDAAuC;;EAEvC,wBAAwB;EACxB,iBAAiB;EACjB,yBAAyB;;EAEzB,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;;EAEZ,sCAAsC;EACtC,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB;2CAC2B;;EAE3B,wBAAwB;EACxB,iBAAiB;EACjB,yBAAyB;;EAEzB,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;;EAEZ,sCAAsC;EACtC,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA,yBAAyB;AACzB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,wCAAwC;EACxC,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,0CAA0C;AAC5C;;AAEA,gBAAgB;AAChB;EACE,0CAA0C;EAC1C,4CAA4C;EAC5C,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd",sourcesContent:['* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  font-family: "Nunito", sans-serif;\r\n  background-color: black;\r\n}\r\n\r\n/* Background Styles*/\r\n.bg-image {\r\n  /* The image used */\r\n  background-image: url(./assets/day.jpg);\r\n\r\n  /* Add the blur effect */\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  /* Full height */\r\n  height: 100vh;\r\n  width: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bg-image-dark {\r\n  /* The image used */\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url("./assets/noche.jpg");\r\n\r\n  /* Add the blur effect */\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  /* Full height */\r\n  height: 100vh;\r\n  width: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/* Main container Styles*/\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 60vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n\r\n/* Buttons Styles*/\r\n.button-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n.btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: solid 2px rgba(255, 102, 0, 0.4);\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 2rem;\r\n  width: 12rem;\r\n  padding: 0.4rem 0;\r\n  margin: 1rem;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  /* border: none; */\r\n}\r\n.btn:hover {\r\n  background-color: rgba(255, 255, 255, 1);\r\n}\r\n.disable {\r\n  opacity: 0.5;\r\n  cursor: default;\r\n}\r\n.disable:hover {\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Clock Styles*/\r\n.clock-container {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  -webkit-box-shadow: 0px 0px 10px 6px #ffffff;\r\n  box-shadow: 0px 0px 10px 6px #ffffff;\r\n  width: 25rem;\r\n  height: 25rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.clock-display {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-weight: 500;\r\n  font-size: 2.5rem;\r\n  color: black;\r\n}\r\n.clock-displayDark {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-weight: 500;\r\n  font-size: 2.5rem;\r\n  color: white;\r\n}\r\n'],sourceRoot:""}]);const C=l},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e,t,o,i=r[1]||"",A=r[3];if(!A)return i;if(n&&"function"==typeof btoa){var a=(e=A,t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=A.sources.map((function(r){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(r," */")}));return[i].concat(s).concat([a]).join("\n")}return[i].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(o[A]=!0)}for(var a=0;a<r.length;a++){var s=[].concat(r[a]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},667:r=>{"use strict";r.exports=function(r,n){return n||(n={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},78:r=>{r.exports="assets/day.jpg"},713:r=>{r.exports="assets/noche.jpg"},475:r=>{r.exports="assets/sun_icon.png"},379:r=>{"use strict";var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},A=[],a=0;a<r.length;a++){var s=r[a],c=t.base?s[0]+t.base:s[0],u=i[c]||0,l="".concat(c," ").concat(u);i[c]=u+1;var d=e(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(n[d].references++,n[d].updater(f)):n.push({identifier:l,updater:o(f,t),references:1}),A.push(l)}return A}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var A=0;A<i.length;A++){var a=e(i[A]);n[a].references--}for(var s=t(r,o),c=0;c<i.length;c++){var u=e(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:r=>{"use strict";var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{"use strict";r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n),n}},565:(r,n,e)=>{"use strict";r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{"use strict";r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{"use strict";r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{"use strict";var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),A=e.n(i),a=e(565),s=e.n(a),c=e(216),u=e.n(c),l=e(589),d=e.n(l),f=e(424),C={};C.styleTagTransform=d(),C.setAttributes=s(),C.insert=A().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=u(),n()(f.Z,C),f.Z&&f.Z.locals&&f.Z.locals;var p=e(475),g=document.querySelector("#display");document.querySelector("#image").src=p,new(function(){function r(r){this.date=new Date,this.offsetHours=0,this.offsetMin=0,this.displayClock(r)}return r.prototype.displayClock=function(r){var n=this,e=new Date;this.setClockTime(e),r.innerHTML=this.getTimeText(this.date.getHours(),this.date.getMinutes(),this.date.getSeconds()),setTimeout((function(){return n.displayClock(r)}),300)},r.prototype.setClockTime=function(r){return this.date.setHours(r.getHours()+this.offsetHours),this.date.setMinutes(r.getMinutes()+this.offsetMin),this.date.setSeconds(r.getSeconds()),this},r.prototype.getTimeText=function(r,n,e){return this.checkTime(r%24)+" h "+this.checkTime(n%60)+" m "+this.checkTime(e%60)+" s"},r.prototype.checkTime=function(r){return r<10?"0"+r:r},r}())(g)})()})();
//# sourceMappingURL=bundle.js.map