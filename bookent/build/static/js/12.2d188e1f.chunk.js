(this.webpackJsonpbookent=this.webpackJsonpbookent||[]).push([[12],{100:function(e,o,t){"use strict";o.a=t.p+"static/media/read1.f92f6035.svg"},131:function(e,o,t){"use strict";t.r(o);var s=t(2),a=t.n(s),c=t(1),i=t(13),n=t(100),d=t(25),l=t(0);o.default=function(e){var o=e.book,t=e.addToFav,s=Object(c.useContext)(d.a),b=s.user,r=s.logout,j=!1;if((null===b||void 0===b?void 0:b.favList)&&(null===b||void 0===b?void 0:b.favList.length)>0)for(var v=0;v<b.favList.length;v++)o._id===b.favList[v]._id&&(j=!0);else r();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:a.a.book,children:Object(l.jsxs)("div",{className:a.a.bookdetails,children:[Object(l.jsx)("img",{src:o.coverPhoto?"".concat("http://localhost:3001","/booksImages/").concat(o.coverPhoto):"".concat(n.a),className:a.a.bookcover,alt:o.bookName}),Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:{pathname:"/Book/".concat(o._id),state:{book:o}},children:Object(l.jsx)("p",{className:a.a.bookname,children:o.bookName})}),Object(l.jsxs)("div",{className:a.a.love,children:[Object(l.jsx)("input",{type:"checkbox",checked:j,onChange:function(e){t(e.target.checked,o)}}),Object(l.jsx)("img",{src:"../assets/love.svg",alt:"add to favourites"})]}),Object(l.jsxs)("p",{className:a.a.bookgen,children:["Genere:  ",o.bookGenere]}),Object(l.jsx)("p",{className:a.a.bookdesc,children:o.description})]})]})})})}}}]);
//# sourceMappingURL=12.2d188e1f.chunk.js.map