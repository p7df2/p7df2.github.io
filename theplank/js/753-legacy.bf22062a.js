"use strict";(self["webpackChunkplank"]=self["webpackChunkplank"]||[]).push([[753],{4753:(n,e,i)=>{i.r(e),i.d(e,{mdTransitionAnimation:()=>o});var t=i(5980),a=i(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(n,e)=>{var i,o,r;const l="40px",s="0px",d="back"===e.direction,c=e.enteringEl,u=e.leavingEl,m=(0,a.g)(c),b=m.querySelector("ion-toolbar"),f=(0,t.c)();if(f.addElement(m).fill("both").beforeRemoveClass("ion-page-invisible"),d?f.duration((null!==(i=e.duration)&&void 0!==i?i:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):f.duration((null!==(o=e.duration)&&void 0!==o?o:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${l})`,`translateY(${s})`).fromTo("opacity",.01,1),b){const n=(0,t.c)();n.addElement(b),f.addAnimation(n)}if(u&&d){f.duration((null!==(r=e.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,t.c)();n.addElement((0,a.g)(u)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${s})`,`translateY(${l})`).fromTo("opacity",1,0),f.addAnimation(n)}return f}}}]);
//# sourceMappingURL=753-legacy.bf22062a.js.map