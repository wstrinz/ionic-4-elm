/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function t(n,t,e){return Math.max(n,Math.min(t,e))}function e(n,t){if(!n){const n="ASSERT: "+t;throw console.error(n),new Error(n)}}function r(n){return n.timeStamp||Date.now()}function o(n){if(n){const t=n.changedTouches;if(t&&t.length>0){const n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function i(n,t){const e="rtl"===n.document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}}function a(n){return c(n,0)}function c(n,t){const e=n._original||n;return{_original:n,emit:s(e.emit.bind(e),t)}}function s(n,t=0){let e;return(...r)=>{clearTimeout(e),e=setTimeout(n,t,...r)}}export{r as a,a as b,t as c,e as d,c as e,i as f,s as g,o as h};