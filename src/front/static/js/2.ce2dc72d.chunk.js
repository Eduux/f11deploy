(this.webpackJsonpalphavantage=this.webpackJsonpalphavantage||[]).push([[2],{15:function(e,n,t){"use strict";t.r(n);var a=t(17),r=t.n(a),l=t(23),c=t(18),o=t(0),u=t.n(o),i=t(76),s=t.n(i),m=t(24),p=function(e){return e.replace(/[^0-9]+/g,"")},d=t(11),E=t(3),g=t(1);function f(){var e=Object(E.a)(["\n  margin: 40px 0px;\n\n  a {\n    text-decoration: underline;\n    margin: 10px 0;\n    cursor: pointer;\n    color: white;\n    display: block;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    color: #112e42;\n  }\n"]);return f=function(){return e},e}var b=g.c.header(f());function x(e){var n=e.text,t=e.pathPage;return u.a.createElement(b,null,t&&u.a.createElement(d.b,{to:t},"Back"),u.a.createElement("h1",null,n))}function h(){var e=Object(E.a)(["\n  width: 100%;\n  background-color: #058586;\n  border-radius: 8px;\n  padding: 15px;\n  transition: 0.2s box-shadow ease;\n  margin-bottom: 40px;\n  color: white;\n\n  &:hover {\n    box-shadow: rgba(255, 255, 255, 0.6) 0 0 30px;\n  }\n\n  p {\n    margin-bottom: 10px;\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(E.a)(["\n  width: 50%;\n  text-align: left;\n  padding: 0 15px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n\n  a {\n    color: white;\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 40px;\n"]);return O=function(){return e},e}x.defaultProps={text:"Se\xe7\xe3o simples",pathPage:!1};var w=g.c.div(O()),C=g.c.div(v()),j=g.c.div(h());function D(e){var n=e.list;return u.a.createElement(w,null,n.map((function(e){return u.a.createElement(C,{key:e._id},u.a.createElement(j,null,u.a.createElement("p",null,"UF: ",u.a.createElement("strong",null,e.UF)),u.a.createElement("p",null,"MUNICIPIO: ",u.a.createElement("strong",null,e.MUNICIPIO)),u.a.createElement("p",null,"LOGRADOURO: ",u.a.createElement("strong",null,e.LOGRADOURO)),u.a.createElement("p",null,"N\xdaMERO: ",u.a.createElement("strong",null,e.NUM_FACHADA)),u.a.createElement("p",null,"COMPLEMENTO: ",u.a.createElement("strong",null,e.COMPLEMENTO)),u.a.createElement("p",null,"CEP: ",u.a.createElement("strong",null,e.CEP)),u.a.createElement("p",null,"BAIRRO: ",u.a.createElement("strong",null,e.BAIRRO)),u.a.createElement("p",null,"QUANTIDADE UMS: ",u.a.createElement("strong",null,e.QUANTIDADE_UMS)),u.a.createElement("p",null,"COD VIABILIDADE: ",u.a.createElement("strong",null,e.COD_VIABILIDADE))))})))}function P(){var e=Object(E.a)(["\n  width: 100%;\n  background-color: #058586;\n  border-radius: 8px;\n  padding: 15px;\n  transition: 0.2s box-shadow ease;\n  margin-bottom: 40px;\n  color: white;\n\n  &:hover {\n    box-shadow: rgba(255, 255, 255, 0.6) 0 0 30px;\n  }\n\n  p {\n    margin-bottom: 10px;\n  }\n"]);return P=function(){return e},e}function N(){var e=Object(E.a)(["\n  width: 50%;\n  text-align: left;\n  padding: 0 15px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n\n  a {\n    color: white;\n  }\n"]);return N=function(){return e},e}function k(){var e=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 40px;\n"]);return k=function(){return e},e}D.defaultProps={list:[]};var A=g.c.div(k()),I=g.c.div(N()),S=g.c.div(P());function y(e){var n=e.list;return u.a.createElement(A,null,n.map((function(e){return u.a.createElement(I,{key:e.Cobertura},u.a.createElement(S,null,u.a.createElement("p",null,"Tem Cobertura?: ",u.a.createElement("strong",null,e.hasRoof?"Sim":"N\xe3o")),u.a.createElement("p",null,"Telefone: ",u.a.createElement("strong",null,e.Telefone)),u.a.createElement("p",null,"Cluster: ",u.a.createElement("strong",null,e.Cluster)),u.a.createElement("p",null,"Documento: ",u.a.createElement("strong",null,e.Documento)),u.a.createElement("p",null,"Conta: ",u.a.createElement("strong",null,e.Conta)),u.a.createElement("p",null,"Cidade: ",u.a.createElement("strong",null,e.Cidade)),u.a.createElement("p",null,"Endere\xe7o: ",u.a.createElement("strong",null,e.Endere\u00e7o)),u.a.createElement("p",null,"CEP: ",u.a.createElement("strong",null,e.CEP)),u.a.createElement("p",null,"N\xfamero: ",u.a.createElement("strong",null,e["N\xfamero"])),u.a.createElement("p",null,"Cobertura: ",u.a.createElement("strong",null,e.Cobertura))))})))}y.defaultProps={list:[]};var B=t(25),R=t(77),F=t.n(R);function U(){var e=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  img {\n    width: 100px;\n    margin-right: 10px;\n  }\n  p {\n    color: #112e42;\n  }\n"]);return U=function(){return e},e}var M=g.c.div(U());function T(e){var n=e.message;return u.a.createElement(M,null,u.a.createElement("img",{src:F.a,alt:"Not Found"}),u.a.createElement("p",null,n))}T.defaultProps={message:"N\xe3o encontrado"};var L=t(13);function _(){var e=Object(o.useRef)(null),n=Object(o.useState)(""),t=Object(c.a)(n,2),a=t[0],i=t[1],d=Object(o.useState)(""),E=Object(c.a)(d,2),g=E[0],f=E[1],b=Object(o.useState)(null),h=Object(c.a)(b,2),v=h[0],O=h[1],w=Object(o.useState)(!1),C=Object(c.a)(w,2),j=C[0],P=C[1],N=Object(o.useState)(!1),k=Object(c.a)(N,2),A=k[0],I=k[1],S=Object(o.useState)(null),R=Object(c.a)(S,2),F=R[0],U=R[1],M=Object(o.useState)(null),_=Object(c.a)(M,2),q=_[0],z=_[1],G=Object(o.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(n){var t,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),U(null),z(null),!a&&!g){e.next=18;break}return I(!1),P("Buscando cobertura"),e.prev=6,e.next=9,m.a.get("excel?cep=".concat(a,"&numFachada=").concat(g));case 9:t=e.sent,(l=t.items).length>0?(U(l),P(!1)):(I("Nenhum registro encontrado!"),P(!1)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),I("Servidor est\xe1 com problemas aguarde um momento!"),P(!1);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(n){return e.apply(this,arguments)}}(),[a,g]),J=function(){var n=Object(l.a)(r.a.mark((function n(t){var a,l,c,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.current.files[0],O(!0),U(null),z(null),n.next=6,s.a.fire({title:"Deseja fazer a compara\xe7\xe3o?",text:"Esse processo pode demorar alguns minutos devido a grande massa de dados! \n\n Colunas necess\xe1rias: CEP, N\xfamero",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim",cancelButtonText:"N\xe3o",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"});case 6:if(l=n.sent,!l.value){n.next=27;break}return I(!1),P("Analisando dados linha a linha, processo pode demorar..."),n.prev=11,(c=new FormData).append("excel",a),n.next=16,m.a.post("excel/findByExcel",c,{headers:{"content-type":"multipart/form-data"}});case 16:(o=n.sent).length>0?(z(o),P(!1),O(!1)):(I("Nenhum registro encontrado!"),P(!1),O(!1)),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(11),I("Servidor est\xe1 com problemas aguarde um momento!"),P(!1),O(null);case 25:n.next=28;break;case 27:O(null);case 28:case"end":return n.stop()}}),n,null,[[11,20]])})));return function(e){return n.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(L.b,null,u.a.createElement(x,{text:"Pesquisa de cobertura"}),u.a.createElement("div",null,u.a.createElement("p",null,"Busca em massa com excel (*opcional)"),!v&&u.a.createElement("input",{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",onChange:J,ref:e}))),u.a.createElement(L.a,null,u.a.createElement(L.c,{onSubmit:G},u.a.createElement("input",{type:"text",onChange:function(e){return i(p(e.target.value))},value:a,disabled:!!j,placeholder:"Pesquisar por cep"}),u.a.createElement("input",{type:"text",onChange:function(e){return f(p(e.target.value))},value:g,disabled:!!j,placeholder:"Pesquisar por n\xfamero"}),u.a.createElement(L.f,{disabled:j},"Buscar"))),A?u.a.createElement(T,{message:A}):u.a.createElement(u.a.Fragment,null,j?u.a.createElement(L.e,null,u.a.createElement(B.a,{size:120}),u.a.createElement("p",null,j)):u.a.createElement(u.a.Fragment,null,F&&u.a.createElement(u.a.Fragment,null,u.a.createElement(L.d,null,"Retornos: ",F.length),u.a.createElement(D,{list:F})),q&&u.a.createElement(u.a.Fragment,null,u.a.createElement(L.d,null,"Retornos: ",q.length),u.a.createElement(y,{list:q})))))}t.d(n,"default",(function(){return _}))},77:function(e,n,t){e.exports=t.p+"static/media/error-404.009e7e12.svg"}}]);
//# sourceMappingURL=2.ce2dc72d.chunk.js.map