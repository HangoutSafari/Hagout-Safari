import{S as O,i as P,s as A,k as d,q as I,a as E,l as p,m as f,r as q,h as n,c as k,n as i,C,L as g,p as D,b as B,E as r,M,F as T}from"../chunks/index.4a4bc412.js";import{g as N}from"../chunks/navigation.359b3b69.js";function V(_){let t,o,c,h,a,F,y,e,R,b,u,l,v,x,S;return{c(){t=d("main"),o=d("h1"),c=I("Welcome, to Safari Hangout"),h=E(),a=d("script"),y=E(),e=d("dotlottie-player"),b=E(),u=d("div"),l=d("button"),v=I("Register"),this.h()},l(m){t=p(m,"MAIN",{class:!0});var s=f(t);o=p(s,"H1",{class:!0});var j=f(o);c=q(j,"Welcome, to Safari Hangout"),j.forEach(n),h=k(s),a=p(s,"SCRIPT",{src:!0,type:!0});var L=f(a);L.forEach(n),y=k(s),e=p(s,"DOTLOTTIE-PLAYER",{src:!0,background:!0,speed:!0,style:!0,autoplay:!0}),f(e).forEach(n),b=k(s),u=p(s,"DIV",{class:!0});var w=f(u);l=p(w,"BUTTON",{type:!0,class:!0});var H=f(l);v=q(H,"Register"),H.forEach(n),w.forEach(n),s.forEach(n),this.h()},h(){i(o,"class","text-3xl justify-start pt-3"),C(a.src,F="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs")||i(a,"src",F),i(a,"type","module"),C(e.src,R="https://lottie.host/af1710d7-649a-4b4f-83ab-7764ee7f796d/BHFb90wVs9.json")||g(e,"src",R),g(e,"background","transparent"),g(e,"speed","2"),D(e,"width","65%"),D(e,"height","65%"),g(e,"autoplay",""),i(l,"type","submit"),i(l,"class","w-44 h-10 bg-orange-300 font-bold text-black py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"),i(u,"class","justify-center flex"),i(t,"class","h-full w-full flex flex-col items-center background")},m(m,s){B(m,t,s),r(t,o),r(o,c),r(t,h),r(t,a),r(t,y),r(t,e),r(t,b),r(t,u),r(u,l),r(l,v),x||(S=M(l,"click",_[0]),x=!0)},p:T,i:T,o:T,d(m){m&&n(t),x=!1,S()}}}function W(_,t,o){let{data:c}=t;console.log(c);const h=()=>{N("/register")};return _.$$set=a=>{"data"in a&&o(1,c=a.data)},[h,c]}class z extends O{constructor(t){super(),P(this,t,W,V,A,{data:1})}}export{z as component};