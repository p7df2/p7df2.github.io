"use strict";(self["webpackChunkplank"]=self["webpackChunkplank"]||[]).push([[775],{8775:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>k});var o=n(4074),r=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=new WeakMap,a=(e,t,n,o=0,r=!1)=>{i.has(e)!==n&&(n?l(e,t,o,r):d(e,t))},s=e=>e===e.getRootNode().activeElement,l=(e,t,n,o=!1)=>{const r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),i.set(e,a);const s=e.ownerDocument,l="rtl"===s.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${l}px,${n}px,0) scale(0)`},d=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c=(e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},i=()=>a(e,t,!1),l=()=>o(!0),d=()=>o(!1);return(0,r.a)(n,"ionScrollStart",l),(0,r.a)(n,"ionScrollEnd",d),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",l),(0,r.b)(n,"ionScrollEnd",d),t.addEventListener("ionBlur",i)}},u="input, textarea, [no-blur], [contenteditable]",m=()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(u))return;const i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1),()=>{(0,r.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",a,!1)}},v=.3,f=(e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=Math.min(t.bottom,o-n),l=a+15,d=.75*s,c=d-i,u=l-r,m=Math.round(c<0?-c:u>0?-u:0),f=Math.min(m,r-a),p=Math.abs(f),h=p/v,w=Math.min(400,Math.max(150,h));return{scrollAmount:f,scrollDuration:w,scrollPadding:n,inputSafeY:4-(r-l)}},h=(e,t,n,o,i,a=!1)=>{let l;const d=e=>{l=(0,r.p)(e)},c=d=>{if(!l)return;const c=(0,r.p)(d);E(6,l,c)||s(t)||w(e,t,n,o,i,a)};return e.addEventListener("touchstart",d,{capture:!0,passive:!0}),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",c,!0)}},w=async(e,t,n,i,s,l=!1)=>{if(!n&&!i)return;const d=f(e,n||i,s);if(n&&Math.abs(d.scrollAmount)<4)t.focus();else if(a(e,t,!0,d.inputSafeY,l),t.focus(),(0,r.r)((()=>e.click())),"undefined"!==typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,d.scrollAmount,d.scrollDuration),a(e,t,!1,d.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),a=e.scrollHeight-e.clientHeight;if(d.scrollAmount>a-e.scrollTop)return"password"===t.type?(d.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},E=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},y="$ionPaddingTimer",g=e=>{const t=document,n=t=>{b(t.target,e)},o=e=>{b(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},b=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const a=i[y];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[y]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},S=!0,L=!0,k=(e,t)=>{const n=document,i="ios"===t,a="android"===t,s=e.getNumber("keyboardHeight",290),l=e.getBoolean("scrollAssist",!0),d=e.getBoolean("hideCaretOnScroll",i),u=e.getBoolean("inputBlurring",i),v=e.getBoolean("scrollPadding",!0),f=Array.from(n.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,w=new WeakMap,E=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),i=(0,o.a)(e),u=i?null:e.closest("ion-footer");if(!n)return;if(i&&d&&!p.has(e)){const t=c(e,n,i);p.set(e,t)}const m="date"===n.type||"datetime-local"===n.type;if(!m&&(i||u)&&l&&!w.has(e)){const t=h(e,n,i,u,s,a);w.set(e,t)}},y=e=>{if(d){const t=p.get(e);t&&t(),p.delete(e)}if(l){const t=w.get(e);t&&t(),w.delete(e)}};u&&S&&m(),v&&L&&g(s);for(const o of f)E(o);n.addEventListener("ionInputDidLoad",(e=>{E(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{y(e.detail)}))}}}]);
//# sourceMappingURL=775.b2b54905.js.map