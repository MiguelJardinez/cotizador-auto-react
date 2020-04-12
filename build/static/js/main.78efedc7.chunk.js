(this["webpackJsonpcotizador-autos"]=this["webpackJsonpcotizador-autos"]||[]).push([[0],{16:function(e,a,n){e.exports=n(26)},21:function(e,a,n){},22:function(e,a,n){},25:function(e,a,n){},26:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(8),l=n.n(c),o=n(6),i=n(1),u=n(2),m=(n(21),n(22),function(e){var a=e.titulo;return r.a.createElement("header",null,r.a.createElement("h1",null,a))}),s=n(9),d=n(14);function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(){var e=Object(i.a)(["\n  background-color: red; \n  color: white; \n  padding: 1rem; \n  width: 100%;\n  text-align: center; \n  margin-bottom: 2rem;\n"]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\n  background-color: #00838F; \n  font-size: 16px; \n  width: 100%; \n  padding: 1rem; \n  color: #FFF; \n  text-transform: uppercase; \n  font-weight: bold; \n  border: none;\n  cursor: pointer; \n  transition: all 300ms ease; \n  margin-top: 2rem;\n\n  &:hover{\n    background-color: #26c6da;\n  }\n"]);return E=function(){return e},e}function b(){var e=Object(i.a)(["\n  margin: 0 1rem;\n"]);return b=function(){return e},e}function f(){var e=Object(i.a)(["\n  display: block; \n  width: 100%; \n  padding: 1rem;\n  border: 1px solid #e1e1e1; \n  --webkit-appearance: none;\n  --moz-appearance: none;\n  appearance: none;\n"]);return f=function(){return e},e}function g(){var e=Object(i.a)(["\n  flex: 0 0 100px; \n"]);return g=function(){return e},e}function k(){var e=Object(i.a)(["\n  display: flex; \n  margin-bottom: 1rem; \n  align-items: center; \n"]);return k=function(){return e},e}var h=u.a.div(k()),j=u.a.label(g()),O=u.a.select(f()),N=u.a.input(b()),x=u.a.button(E()),F=u.a.div(v()),y=function(e){var a=e.guardarResumen,n=e.guardarCargando,c=Object(t.useState)({marca:"",year:"",plan:""}),l=Object(o.a)(c,2),i=l[0],u=l[1],m=Object(t.useState)(!1),p=Object(o.a)(m,2),v=p[0],E=p[1],b=i.marca,f=i.year,g=i.plan,k=function(e){u(Object(d.a)({},i,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==b.trim()&&""!==f.trim()&&""!==g.trim()){E(!1);var t=2e3,r=function(e){return(new Date).getFullYear()-e}(f);t-=3*r*t/100,t*=function(e){var a;switch(e){case"europeo":a=1.3;break;case"americano":a=1.15;break;case"asiatico":a=1.05}return a}(b);var c=function(e){return"basico"===e?1.2:1.5}(g);console.log(c),t=parseFloat(c*t).toFixed(2),n(!0),setTimeout((function(){n(!1),a({cotizacion:Number(t),datos:i})}),3e3)}else E(!0)}},v?r.a.createElement(F,null," Todos los campos son obligatorios "):null,r.a.createElement(h,null,r.a.createElement(j,{htmlFor:""},"Marca:"),r.a.createElement(O,{name:"marca",value:b,onChange:k},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement(h,null,r.a.createElement(j,{htmlFor:""},"A\xf1o:"),r.a.createElement(O,{name:"year",value:f,onChange:k},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"2021"},"2021"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"))),r.a.createElement(h,null,r.a.createElement(j,{htmlFor:""},"Plan:"),r.a.createElement(N,{type:"radio",name:"plan",value:"basico",checked:"basico"===g,onChange:k})," Basico",r.a.createElement(N,{type:"radio",name:"plan",value:"completo",checked:"completo"===g,onChange:k})," completo"),r.a.createElement(x,{type:"submit"},"Cotizar"))},w=n(7),z=n.n(w);function C(){var e=Object(i.a)(["\n    padding: 1rem;\n    text-align: center; \n    background-color: #00838F; \n    color: white;\n    margin-top: 1rem;\n"]);return C=function(){return e},e}var S=u.a.div(C()),A=function(e){var a=e.datos,n=a.marca,t=a.year,c=a.plan;return""===n||""===t||""===c?null:r.a.createElement(S,null,r.a.createElement("h2",null,"Resumen de cotizacion"),r.a.createElement("ul",null,r.a.createElement("li",null,"Marca: ",p(n)," "),r.a.createElement("li",null,"A\xf1o: ",p(t)," "),r.a.createElement("li",null,"Plan: ",p(c)," ")))};A.protoType={datos:z.a.object.isRequired};var R=A,T=n(29),B=n(28);function D(){var e=Object(i.a)(["\n  text-align: center; \n  padding: 0.5rem; \n  border: solid 1px #26c6da; \n  background-color: rgb(127, 224, 237);\n  margin-top: 1rem; \n  position: relative;\n"]);return D=function(){return e},e}function J(){var e=Object(i.a)(["\n  color: #00838f; \n  padding: 1rem; \n  font-weight: 600; \n  margon: 0; \n  text-transform: uppercase;\n"]);return J=function(){return e},e}function M(){var e=Object(i.a)(["\n  background-color: rgb(127, 224, 237); \n  margin-top: 2rem;\n  padding: 1rem; \n  text-align: center; \n  color: #00838F;\n"]);return M=function(){return e},e}var P=u.a.p(M()),q=u.a.p(J()),I=u.a.div(D()),U=function(e){var a=e.cotizacion;return 0===a?r.a.createElement(P,null,"Elige marca, a\xf1o y tipo de seguro"):r.a.createElement(I,null,r.a.createElement(T.a,{component:"span",className:"resultado"},r.a.createElement(B.a,{classNames:"resultado",key:a,timeout:{enter:500,exit:500}},r.a.createElement(q,null,"El Total a pagar es: ",r.a.createElement("span",null,"$",a)," "))))},Y=(n(25),function(){return r.a.createElement("div",{className:"sk-circle"},r.a.createElement("div",{className:"sk-circle1 sk-child"}),r.a.createElement("div",{className:"sk-circle2 sk-child"}),r.a.createElement("div",{className:"sk-circle3 sk-child"}),r.a.createElement("div",{className:"sk-circle4 sk-child"}),r.a.createElement("div",{className:"sk-circle5 sk-child"}),r.a.createElement("div",{className:"sk-circle6 sk-child"}),r.a.createElement("div",{className:"sk-circle7 sk-child"}),r.a.createElement("div",{className:"sk-circle8 sk-child"}),r.a.createElement("div",{className:"sk-circle9 sk-child"}),r.a.createElement("div",{className:"sk-circle10 sk-child"}),r.a.createElement("div",{className:"sk-circle11 sk-child"}),r.a.createElement("div",{className:"sk-circle12 sk-child"}))});function $(){var e=Object(i.a)(["\n  background-color: #FFF; \n  padding: 3rem; \n"]);return $=function(){return e},e}function G(){var e=Object(i.a)(["\n  width: 60%; \n  margin: 3rem auto; \n"]);return G=function(){return e},e}var H=u.a.div(G()),K=u.a.div($());var L=function(){var e=Object(t.useState)({cotizacion:0,datos:{marca:"",yaer:"",plan:""}}),a=Object(o.a)(e,2),n=a[0],c=a[1],l=n.cotizacion,i=n.datos,u=Object(t.useState)(!1),s=Object(o.a)(u,2),d=s[0],p=s[1];return r.a.createElement(H,null,r.a.createElement(m,{titulo:"Cotizador de seguros"}),r.a.createElement(K,null,r.a.createElement(y,{guardarResumen:c,guardarCargando:p}),d?r.a.createElement(Y,null):null,r.a.createElement(R,{datos:i}),d?null:r.a.createElement(U,{cotizacion:l})))};l.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.78efedc7.chunk.js.map