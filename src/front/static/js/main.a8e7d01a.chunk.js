(this.webpackJsonpalphavantage=this.webpackJsonpalphavantage||[]).push([[4],{13:function(n,t,e){"use strict";e.d(t,"g",(function(){return f})),e.d(t,"h",(function(){return d})),e.d(t,"a",(function(){return p})),e.d(t,"c",(function(){return m})),e.d(t,"f",(function(){return b})),e.d(t,"e",(function(){return g})),e.d(t,"d",(function(){return x})),e.d(t,"b",(function(){return v}));var r=e(3),a=e(1);function o(){var n=Object(r.a)(["\n  ","\n  justify-content: space-between;\n  div {\n    background: #06838a;\n    padding: 20px 15px;\n    color: white;\n    border-radius: 4px;\n\n    p {\n      margin-bottom: 10px;\n    }\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  margin-top: 40px;\n  font-weight: bold;\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  ","\n  justify-content: center;\n  flex-direction: column;\n  p {\n    margin-top: 30px;\n  }\n  margin-top: 40px;\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  background: #06838a;\n  border: 0;\n  padding: 0px 15px;\n  border-radius: 4px;\n  color: white;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & [disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    margin-right: 10px;\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n"]);return s=function(){return n},n}var f="\n  width: 90%;\n  max-width: 1200px;\n  margin: 0px auto;\n",d="\n  display: flex;\n  align-items: center;\n",p=a.c.div(s()),m=a.c.form(l()),b=a.c.button.attrs({type:"submit",alt:"Pesquisar"})(u()),g=a.c.div(c(),d),x=a.c.div(i()),v=a.c.div(o(),d)},24:function(n,t,e){"use strict";var r=e(41),a=e.n(r).a.create({baseURL:"http://localhost:8080/"});a.interceptors.request.use((function(n){return n.headers.apiKey="F112020@SMEQ@123QWEASDZXC",n})),a.interceptors.response.use((function(n){return n.data})),t.a=a},25:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(43),i=e(3),c=e(1);function u(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    animation: "," 2s linear infinite;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return l=function(){return n},n}var s=Object(c.d)(l()),f=c.c.div(u(),s);function d(n){var t=n.size;return a.a.createElement(f,null,a.a.createElement(o.a,{size:t}))}e.d(t,"a",(function(){return d})),d.defaultProps={size:60}},42:function(n,t,e){n.exports=e.p+"static/media/logo.13ec1235.jpeg"},47:function(n,t,e){n.exports=e(75)},55:function(n,t,e){var r={"./Home":[15,0,2],"./Home/":[15,0,2],"./Home/index":[15,0,2],"./Home/index.js":[15,0,2],"./ImportArea":[14,0,1],"./ImportArea/":[14,0,1],"./ImportArea/index":[14,0,1],"./ImportArea/index.js":[14,0,1],"./ImportArea/styles":[46,3],"./ImportArea/styles.js":[46,3]};function a(n){if(!e.o(r,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[n],a=t[0];return Promise.all(t.slice(1).map(e.e)).then((function(){return e(a)}))}a.keys=function(){return Object.keys(r)},a.id=55,n.exports=a},75:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(36),i=e.n(o),c=e(11),u=e(1),l=e(3);function s(){var n=Object(l.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    outline-color: ",";\n  }\n\n  body {\n    font-family: ",";\n    background-color: ",";\n    color: #112e42;\n    font-size: 16px;\n    outline-color: ",";\n    -webkit-font-smoothing: antialiased!important;\n    text-rendering: optimizeLegibility!important;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return s=function(){return n},n}var f=Object(u.b)(s(),(function(n){return n.theme.colors.outlineColor}),(function(n){return n.theme.colors.fontFamily}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.outlineColor})),d={colors:{backgroundColor:"#f7f7f7",outlineColor:"#8cb4eb",fontFamily:"Montserrat,sans-serif"}},p=e(8),m=function(n){return Object(r.lazy)((function(){return e(55)("./".concat(n))}))},b=function(){return a.a.createElement(p.c,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(a.a.Fragment,null)},a.a.createElement(p.a,{exact:!0,path:"/",component:m("Home")}),a.a.createElement(p.a,{path:"/import-area",component:m("ImportArea")})))},g=e(17),x=e.n(g),v=e(23),h=e(18),E=e(24),j=e(25),y=e(42),O=e.n(y),w=e(13);function k(){var n=Object(l.a)(["\n  div:first-child {\n    text-align: right;\n    margin-bottom: 30px;\n\n    a {\n      color: initial;\n\n      button {\n        cursor: pointer;\n        border: 0;\n        background-color: #058586;\n        color: white;\n        padding: 8px 30px;\n        border-radius: 4px;\n        transition: 0.4s ease all;\n\n        &:hover {\n          opacity: 0.8;\n        }\n      }\n    }\n  }\n"]);return k=function(){return n},n}function A(){var n=Object(l.a)(["\n  ","\n  justify-content: space-between;\n"]);return A=function(){return n},n}function z(){var n=Object(l.a)(["\n  ","\n"]);return z=function(){return n},n}function C(){var n=Object(l.a)(["\n  ",";\n  margin-bottom: 50px;\n  padding: 30px 0;\n  border-bottom: 1px solid #122f41;\n\n  img {\n    display: table;\n    margin: 0 auto;\n    width: 200px;\n  }\n"]);return C=function(){return n},n}var I=u.c.div(C(),w.h),F=u.c.div(z(),w.g),H=u.c.div(A(),w.h),S=u.c.div(k());function M(){var n=Object(r.useState)(!1),t=Object(h.a)(n,2),e=t[0],o=t[1],i=Object(r.useState)(null),u=Object(h.a)(i,2),l=u[0],s=u[1];return Object(r.useEffect)((function(){function n(){return(n=Object(v.a)(x.a.mark((function n(){var t,e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.next=3,E.a.get("excel/getCount");case 3:t=n.sent,e=t.count,s(e),o(!1);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),a.a.createElement(I,null,a.a.createElement(F,null,a.a.createElement(H,null,a.a.createElement("div",null,a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:O.a,alt:"logo"}))),a.a.createElement(S,null,a.a.createElement("div",null,a.a.createElement(c.b,{to:"/import-area"},a.a.createElement("button",null,"Area de importa\xe7\xf5es >"))),e||l<0?a.a.createElement(j.a,{size:20}):a.a.createElement("div",null,"Registros na base: ",a.a.createElement("strong",null,l))))))}var P=function(){return a.a.createElement(u.a,{theme:d},a.a.createElement(f,null),a.a.createElement(c.a,null,a.a.createElement(M,null),a.a.createElement(F,null,a.a.createElement(b,null))))};i.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[47,5,6]]]);
//# sourceMappingURL=main.a8e7d01a.chunk.js.map