(this.webpackJsonpalphavantage=this.webpackJsonpalphavantage||[]).push([[1,3],{14:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return x}));var a=t(17),r=t.n(a),o=t(23),i=t(18),c=t(0),u=t.n(c),s=t(76),l=t.n(s),d=t(24),p=t(78),m=t.n(p),f=t(25),v=t(46);function x(){var n=Object(c.useRef)(null),e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],p=Object(c.useState)(!1),x=Object(i.a)(p,2),b=x[0],g=x[1],h=function(){var n=Object(o.a)(r.a.mark((function n(){var e;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!1),n.next=3,l.a.fire({title:"Deseja fazer o reset?",text:"Confirme o reset!",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim",cancelButtonText:"N\xe3o",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"});case 3:if(e=n.sent,!e.value){n.next=18;break}return s("Resetando a base"),n.prev=7,n.next=10,d.a.delete("excel");case 10:s(!1),window.location.reload(),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(7),s(!1),g("Estamos com problemas na base ou processos sendo executados, tente novamente mais tarde!");case 18:case"end":return n.stop()}}),n,null,[[7,14]])})));return function(){return n.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.current.files[0],e.next=3,l.a.fire({title:"Confirma a importa\xe7\xe3o?",text:"Esse processo pode demorar alguns minutos devido a grande massa de dados!",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim",cancelButtonText:"N\xe3o",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"});case 3:if(o=e.sent,!o.value){e.next=25;break}return g(!1),s("Importando grande massa de dados, esse processo pode levar alguns minutos, n\xe3o feche a pagina!"),e.prev=8,(i=new FormData).append("excel",a),e.next=13,d.a.post("excel",i,{headers:{"content-type":"multipart/form-data"}});case 13:return s(!1),e.next=16,l.a.fire("Sucesso!","Arquivo importado com sucesso!","success");case 16:c=e.sent,c.value&&window.location.reload(),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(8),g("Servidor est\xe1 com problemas ou algum processo est\xe1 sendo executado, tente novamente mais tarde!"),s(!1);case 25:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(n){return e.apply(this,arguments)}}();return u.a.createElement(v.Container,null,u.a.createElement(v.Info,null,u.a.createElement("img",{src:m.a,alt:"warning"})," ",u.a.createElement("p",null,"Aten\xe7\xe3o \xe9 indispens\xe1vel resetarmos a base antes de importar os arquivos!")),u.a.createElement(v.Info,null,u.a.createElement("img",{src:m.a,alt:"warning"})," ",u.a.createElement("p",null,"Colunas requeridas: UF, MUNICIPIO, LOGRADOURO, NUM_FACHADA, COMPLEMENTO, CEP, BAIRRO, QUANTIDADE_UMS, COD_VIABILIDADE")),u.a.createElement(v.Info,null,u.a.createElement("img",{src:m.a,alt:"warning"})," ",u.a.createElement("p",null,"Um arquivo de cada vez!, a importa\xe7\xe3o pode demorar devido a grande massa de dados +- 700mil linhas por arquivo")),u.a.createElement(v.ActionsContainer,null,u.a.createElement("div",null,u.a.createElement(v.ButtonReset,{onClick:h},"Resetar a base")),u.a.createElement("div",null,u.a.createElement(v.ButtonImport,null,u.a.createElement("p",null,"Importar arquivo"),u.a.createElement("input",{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",onChange:w,ref:n})))),b&&u.a.createElement(v.Error,null,b),a&&u.a.createElement(v.LoadingContainer,null,u.a.createElement(f.a,{size:160}),u.a.createElement("p",null,a)))}},46:function(n,e,t){"use strict";t.r(e),t.d(e,"Container",(function(){return m})),t.d(e,"Info",(function(){return f})),t.d(e,"ActionsContainer",(function(){return v})),t.d(e,"ButtonReset",(function(){return x})),t.d(e,"ButtonImport",(function(){return b})),t.d(e,"LoadingContainer",(function(){return g})),t.d(e,"Error",(function(){return h}));var a=t(3),r=t(1),o=t(13);function i(){var n=Object(a.a)(["\n  margin-top: 50px;\n  color: red;\n  font-size: 18px;\n  font-weight: bold;\n"]);return i=function(){return n},n}function c(){var n=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  p {\n    margin-top: 30px;\n  }\n"]);return c=function(){return n},n}function u(){var n=Object(a.a)(["\n  cursor: pointer;\n  border: 0;\n  background-color: #122e41;\n  color: white;\n  padding: 8px 30px;\n  border-radius: 4px;\n  font-size: 18px;\n  -webkit-transition: 0.4s ease all;\n  transition: 0.4s ease all;\n  width: 90%;\n\n  \n  &:hover {\n    opacity: 0.8;\n  }\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n  cursor: pointer;\n  border: 0;\n  background-color: #058586;\n  color: white;\n  padding: 8px 30px;\n  border-radius: 4px;\n  font-size: 18px;\n  -webkit-transition: 0.4s ease all;\n  transition: 0.4s ease all;\n  width: 90%;\n\n  \n  &:hover {\n    opacity: 0.8;\n  }\n"]);return s=function(){return n},n}function l(){var n=Object(a.a)(["\n  ","\n  justify-content: space-between;\n  margin-top: 50px;\n\n  div {\n    flex: 1;\n  }\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n  ","\n  img {\n    width: 30px;\n  }\n\n  p {\n    margin-left: 10px;\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(a.a)(["\n  \n"]);return p=function(){return n},n}var m=r.c.div(p()),f=r.c.div(d(),o.h),v=r.c.div(l(),o.h),x=r.c.button(s()),b=r.c.button(u()),g=r.c.div(c()),h=r.c.div(i())},78:function(n,e,t){n.exports=t.p+"static/media/warning.3bae402e.svg"}}]);
//# sourceMappingURL=1.834eb5d7.chunk.js.map