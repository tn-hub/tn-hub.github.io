(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var n,s,i=c(0),a=c.n(i),o=c(24),r=c.n(o),l=(c(83),c(25)),j=c(5),d=(c(84),c(119)),h=c(117),b=c(120),O=c(118),p=c(77),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],x=c(35),f=c(9),g=c(56),m=c(57),v=(c(85),c(1)),k=m.a.div(n||(n=Object(g.a)(["\n    padding : 20px;\n"]))),S=m.a.h4(s||(s=Object(g.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.color}));function y(e){return Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock,"\uac1c"]})}var N=function(e){var t=Object(f.g)().id,c=Object(f.f)(),n=e.shoes.find((function(e){return e.id==t})),s=Object(i.useRef)(null),a=Object(i.useState)(!0),o=Object(j.a)(a,2),r=o[0],d=o[1];return Object(i.useEffect)((function(){setTimeout((function(){d(!1)}),2e3);return function(){clearTimeout()}}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(k,{children:Object(v.jsx)(S,{color:"navy",className:"red",children:"Detail"})}),r?Object(v.jsx)("div",{className:"my-alert_yellow",ref:s,children:Object(v.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,n?Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(n.id+1,".jpg"),width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:n.title}),Object(v.jsx)("p",{children:n.content}),Object(v.jsx)("p",{children:"\u20a9"+n.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(v.jsx)(y,{stock:e.stock[t]}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){var c=Object(l.a)(e.stock);c[t]-=1,e.setStock(c)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("button",{className:"btn btn-secondary",onClick:function(){c.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}):null]})},w=c(73),B=c.n(w),C=c(74),I=c.n(C);var D=function(e){var t=e.type,c=e.color,n=e.message;return Object(v.jsx)("div",{className:"contentWrap",children:Object(v.jsxs)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(v.jsx)("h2",{children:n}),Object(v.jsx)("h2",{children:"\uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(v.jsx)(I.a,{type:t,color:c,height:"80%",width:"80%"})]})})};function F(e){return Object(v.jsxs)("div",{className:"col-md-4",children:[Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(e.shoes.id+1,".jpg"),width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsx)("p",{children:e.shoes.content}),Object(v.jsx)("p",{children:typeof e.shoes.price===String&&"\u20a9"+e.shoes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})}var L=function(){var e=Object(i.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(u),a=Object(j.a)(s,2),o=a[0],r=a[1],g=Object(i.useState)([10,11,12]),m=Object(j.a)(g,2),k=m[0],S=m[1];return c?Object(v.jsx)(D,{type:"spin",color:"#efefef",message:"Loading..."}):(Object(i.useEffect)((function(){}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(d.a,{bg:"light",expand:"lg",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(d.a.Brand,{href:"#",children:"ShoesShop"}),Object(v.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(b.a,{className:"me-auto",children:[Object(v.jsx)(b.a.Link,{as:x.b,to:"/",children:"Home"}),Object(v.jsx)(b.a.Link,{as:x.b,to:"/detail/0",children:"Detail"}),Object(v.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(v.jsx)(O.a.Item,{href:"#detail/0",children:"Action"}),Object(v.jsx)(O.a.Item,{href:"#detail/1",children:"Another action"}),Object(v.jsx)(O.a.Item,{href:"#detail/2",children:"Something"}),Object(v.jsx)(O.a.Divider,{}),Object(v.jsx)(O.a.Item,{href:"#",children:"Separated link"})]})]})})]})}),Object(v.jsxs)(f.c,{children:[Object(v.jsxs)(f.a,{exact:!0,path:"/",children:[Object(v.jsxs)("div",{className:"background",style:{position:"relative"},children:[Object(v.jsx)("img",{src:"https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-and-clouds-shape_24972-1095.jpg?size=626&ext=jpg",style:{width:"100%",height:"100%"}}),Object(v.jsx)("h1",{style:{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -50%)"},children:"20% Season Off"}),Object(v.jsx)(p.a,{variant:"outline-dark",style:{position:"absolute",top:"70%",left:"50%",transform:"translate(-50%, -50%)"},children:"Click Me"})]}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row",children:o.map((function(e,t){return Object(v.jsx)(F,{shoes:e,i:t},t)}))}),Object(v.jsx)("button",{className:"btn btn-secondary",onClick:function(){n(!0),B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n(!1),console.log(e),console.log(e.data),r([].concat(Object(l.a)(o),Object(l.a)(e.data)))})).catch((function(){n(!1),alert("\uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},children:"more"})]})]}),Object(v.jsx)(f.a,{path:"/detail/:id",children:Object(v.jsx)(N,{setStock:S,shoes:o,stock:k})})]})]}))},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(L,{})})}),document.getElementById("root")),T()},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.5b8e9e18.chunk.js.map