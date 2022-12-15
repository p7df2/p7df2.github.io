"use strict";(self["webpackChunkplank"]=self["webpackChunkplank"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>i});var r=n(6587),a=n(545),s=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,o)=>{const c=t.ownerDocument.defaultView,l=(0,a.i)(t),h=t=>{const e=50,{startX:n}=t;return l?n>=c.innerWidth-e:n<=e},u=t=>l?-t.deltaX:t.deltaX,d=t=>l?-t.velocityX:t.velocityX,k=t=>h(t)&&e(),p=t=>{const e=u(t),n=e/c.innerWidth;i(n)},w=t=>{const e=u(t),n=c.innerWidth,a=e/n,s=d(t),i=n/2,l=s>=0&&(s>.2||e>i),h=l?1-a:a,k=h*n;let p=0;if(k>5){const t=k/Math.abs(s);p=Math.min(t,540)}o(l,a<=0?.01:(0,r.h)(0,a,.9999),p)};return(0,s.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:p,onEnd:w})}}}]);
//# sourceMappingURL=990-legacy.d2f19b2d.js.map