(self.webpackChunktopmai=self.webpackChunktopmai||[]).push([[6776],{6776:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>s});var r=a(1843),n=a(8520);a(6953);const s=(e,t,a,s,o)=>{const i=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{s(e.deltaX/i.innerWidth)},onEnd:e=>{const t=i.innerWidth,a=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),c=(s?1-a:a)*t;let u=0;if(c>5){const e=c/Math.abs(n);u=Math.min(e,540)}o(s,a<=0?.01:(0,r.j)(0,a,.9999),u)}})}}}]);