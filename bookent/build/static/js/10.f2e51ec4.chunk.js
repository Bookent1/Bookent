(this.webpackJsonpbookent=this.webpackJsonpbookent||[]).push([[10],{104:function(e,t,a){e.exports={themelight:"addBook_themelight__3AVnv",themedark:"addBook_themedark__1CRto",main:"addBook_main__3NdrE",mapContainer:"addBook_mapContainer__2NFnc",container:"addBook_container__IEm_o",h2:"addBook_h2__2mYU5",inputs:"addBook_inputs__3fm_r",bookName__div:"addBook_bookName__div__2KfBL",spans:"addBook_spans__33XI6",bookName__input:"addBook_bookName__input__bUiya",description__div:"addBook_description__div__qxnxP",description__input:"addBook_description__input__uo17R",days__div:"addBook_days__div__2FOtC",days__input:"addBook_days__input__xFHPa",type__div:"addBook_type__div__sFugb",type__input:"addBook_type__input__1V2zR",photo__div:"addBook_photo__div__3yny7",customfileupload:"addBook_customfileupload__Zg1HB",location__div:"addBook_location__div__1s-Xg",submit__div:"addBook_submit__div__1bXFi",submit:"addBook_submit__1HN5d",cancel:"addBook_cancel__30MZP",err:"addBook_err__3eiKz"}},139:function(e,t,a){"use strict";a.r(t);var o=a(98),n=a(99),c=a(10),s=a(1),i=a(4),r=a(25),d=a(26),l=a.n(d),u=a(104),_=a.n(u),b=a(0),j=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,109))})),p=Object(s.lazy)((function(){return Promise.resolve().then(a.bind(null,44))})),m=Object(s.lazy)((function(){return Promise.resolve().then(a.bind(null,43))}));t.default=function(){var e,t=Object(i.g)(),a=Object(i.h)(),d=(a.state?a.state:null).book,u=Object(s.useContext)(r.a),O=u.user,h=u.setuser,v=u.categoryList,k=Object(s.useState)({}),f=Object(c.a)(k,2),x=f[0],g=f[1],N=Object(s.useState)(0),y=Object(c.a)(N,2),B=y[0],P=y[1],C=Object(s.useState)(0),w=Object(c.a)(C,2),S=w[0],L=w[1],V=Object(s.useState)(!0),D=Object(c.a)(V,2),E=D[0],F=D[1],G=Object(s.useState)(),I=Object(c.a)(G,2),z=I[0],J=I[1];function q(e){g(Object(n.a)(Object(n.a)({},x),{},Object(o.a)({},e.target.name,e.target.value)))}return Object(s.useEffect)((function(){g(Object(n.a)(Object(n.a)({},x),{},{_id:d._id,bookName:d.bookName,description:d.description,bookGenere:d.bookGenere,coverPhoto:"",time:d.time,location:d.location,ownerId:O._id,booksList:JSON.stringify(O.booksList)||[],year:d.year,isbn:d.isbn,author:d.author,prevImg:d.coverPhoto}))}),[O]),Object(s.useLayoutEffect)((function(){var e=localStorage.getItem("theme");document.documentElement.className="themelight"===e.toString()?_.a.themelight:_.a.themedark}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:_.a.main,children:[!0===!E?Object(b.jsx)(j,{GeoLA:B,GeoLO:S,onClose:function(){F(!0)}}):"",Object(b.jsxs)("form",{className:_.a.container,onSubmit:function(e){var a;e.preventDefault();var o=new FormData;for(var c in x)o.append(c,x[c]);l.a.put("".concat("http://localhost:3001","/editBook"),o,{headers:{"x-access-token":null===(a=JSON.parse(localStorage.getItem("token")))||void 0===a?void 0:a.token}}).then((function(e){h(Object(n.a)(Object(n.a)({},O),{},{booksList:e.data})),t.goBack()})).catch((function(e){return J(e.response.data)}))},children:[Object(b.jsx)("h2",{className:_.a.h2,children:"Edit Book"}),Object(b.jsxs)("div",{className:_.a.bookName__div,children:[Object(b.jsx)("span",{className:_.a.spans,children:"Book Name:"}),Object(b.jsx)("input",{type:"text",name:"bookName",onChange:q,className:"".concat(_.a.bookName__input," ").concat(_.a.inputs),required:!0,autoFocus:!0,defaultValue:d.bookName})]}),Object(b.jsxs)("div",{className:_.a.description__div,children:[Object(b.jsx)("span",{className:_.a.spans,children:"Description:"}),Object(b.jsx)("textarea",{name:"description",onChange:q,className:"".concat(_.a.description__input," ").concat(_.a.inputs),defaultValue:d.description})]}),Object(b.jsx)("div",{className:_.a.days__div,children:Object(b.jsxs)("span",{className:_.a.spans,children:["Loan time:"," ",Object(b.jsx)("input",Object(o.a)({type:"number",min:"0",name:"time",defaultValue:"0",onChange:q,className:"".concat(_.a.days__input," ").concat(_.a.inputs),required:!0},"defaultValue",d.time))," ","Days"," "]})}),Object(b.jsx)("div",{className:_.a.type__div,children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:_.a.spans,children:"Book type:"}),Object(b.jsx)("select",{className:"".concat(_.a.type__input," ").concat(_.a.inputs),name:"bookGenere",onChange:q,defaultValue:d.bookGenere,children:v.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}))})]})}),Object(b.jsxs)("div",{className:_.a.bookName__div,children:[Object(b.jsx)("span",{className:_.a.spans,children:"Book Author:"}),Object(b.jsx)("input",{type:"text",name:"author",onChange:q,className:"".concat(_.a.bookName__input," ").concat(_.a.inputs),defaultValue:d.author})]}),Object(b.jsxs)("div",{className:_.a.bookName__div,children:[Object(b.jsx)("span",{className:_.a.spans,children:"ISBN / Barcode:"}),Object(b.jsx)("input",{type:"text",pattern:"\\d*",maxlength:"13",name:"isbn",onChange:q,className:"".concat(_.a.bookName__input," ").concat(_.a.inputs),defaultValue:d.isbn})]}),Object(b.jsxs)("div",{className:_.a.bookName__div,children:[Object(b.jsx)("span",{className:_.a.spans,children:"Year:"}),Object(b.jsx)("input",{type:"text",pattern:"\\d*",maxlength:"4",name:"year",onChange:q,className:"".concat(_.a.bookName__input," ").concat(_.a.inputs),defaultValue:d.year})]}),Object(b.jsx)("div",{className:_.a.photo__div,children:Object(b.jsxs)("div",{children:["Book Photo :",Object(b.jsxs)("label",{className:_.a.customfileupload,children:["Choose Photo",Object(b.jsx)("input",{type:"file",name:"coverPhoto",accept:".png, .jpg, .jpeg",onChange:function(e){g(Object(n.a)(Object(n.a)({},x),{},{coverPhoto:e.target.files[0]}))}})]}),x.coverPhoto&&Object(b.jsx)("span",{style:{marginLeft:"5vw"},children:"saved!"})]})}),Object(b.jsx)("div",{className:_.a.location__div,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:_.a.spans,children:"Your Location:"}),Object(b.jsx)("figure",{className:_.a.mapy,children:Object(b.jsx)("img",{onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){P(e.coords.latitude),L(e.coords.longitude),g(Object(n.a)(Object(n.a)({},x),{},{location:[e.coords.latitude,e.coords.longitude]})),F(!1)})):alert("Geolocation is not supported in your browser")},src:"/assets/map.png",alt:"map",height:"30"})}),(null===(e=x.location)||void 0===e?void 0:e.length)>0&&Object(b.jsx)("span",{style:{marginLeft:"5vw"},children:"saved!"})]})}),z&&Object(b.jsx)("div",{className:_.a.err,children:Object(b.jsxs)("h5",{children:[z&&Object(b.jsx)("img",{src:"/assets/err.svg",alt:"error"}),z]})}),Object(b.jsxs)("div",{className:_.a.submit__div,children:[Object(b.jsx)("input",{type:"submit",value:"Update Book",className:"".concat(_.a.submit," ").concat(_.a.inputs)}),Object(b.jsx)("input",{type:"reset",value:"cancel",className:"".concat(_.a.cancel," ").concat(_.a.inputs)})]})]})]}),Object(b.jsx)("div",{style:{margin:500}}),Object(b.jsx)(m,{})]})}},98:function(e,t,a){"use strict";function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return o}))},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(98);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}}}]);
//# sourceMappingURL=10.f2e51ec4.chunk.js.map