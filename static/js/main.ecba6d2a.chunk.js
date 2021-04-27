(this["webpackJsonpdog-book"]=this["webpackJsonpdog-book"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},63:function(e,t,c){},83:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),r=c.n(s),i=(c(55),c(22)),j=c(7),b=(c(56),c(95)),l=c(96),d=c(45),o=c(2);function h(){return Object(o.jsx)("div",{children:Object(o.jsxs)(b.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:[Object(o.jsx)(b.a.Brand,{children:Object(o.jsx)(d.a,{icon:"dog"})}),Object(o.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(o.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(o.jsxs)(l.a,{className:"mr-auto",children:[Object(o.jsx)(l.a.Link,{href:"#/",children:"Breeds"}),Object(o.jsx)(l.a.Link,{href:"#About",disabled:!0,children:"About"})]})})]})})}var u=c(90);var O=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{children:Object(o.jsx)("h1",{className:"display-1",children:"404"})})})},x=c(14),g=c(91),p=c(92),f=c(97),m=c(93),v=c(94);c(63);function C(e){var t=e.filterText,c=e.handleFilter,n=e.handleChangeImages;return Object(o.jsx)("div",{className:"c-breeds-menubar",children:Object(o.jsxs)(g.a,{className:"justify-content-between","aria-label":"Toolbar with Button groups",children:[Object(o.jsxs)(p.a,{children:[Object(o.jsx)(p.a.Prepend,{children:Object(o.jsx)(p.a.Text,{children:"Search:"})}),Object(o.jsx)(f.a,{placeholder:"Search actor","aria-label":"Filter",value:t,onChange:c})]}),Object(o.jsxs)(m.a,{"aria-label":"First group",children:[Object(o.jsx)(v.a,{variant:"secondary",onClick:n,children:"Change images"})," "]})]})})}var k=c(18),y=c.n(k),w=c(48),S=function e(t,c){Object(w.a)(this,e),this.id=t,this.name=c},N=c(20),B=c.n(N),I=(c(83),c(98));var F=function(e){var t=e.breed,c=e.changeImage,a=Object(n.useState)("https://www.bil-jac.com/Images/DogPlaceholder.svg"),s=Object(x.a)(a,2),r=s[0],b=s[1],l=Object(n.useState)(""),d=Object(x.a)(l,2),h=d[0],u=d[1],O=Object(j.g)(),g=t.charAt(0).toUpperCase()+t.slice(1);return Object(n.useEffect)((function(){y.a.get("https://dog.ceo/api/breed/"+t+"/images/random").then((function(e){var t=e.data.message;b(t)}))}),[t,c]),h?Object(o.jsx)(j.a,{to:"/breeds/"+h}):Object(o.jsxs)(I.a,{className:"c-breedcard",children:[Object(o.jsx)(I.a.Title,{style:{display:"flex",justifyContent:"center"},children:Object(o.jsx)(i.b,{to:"/breeds/"+t,children:g})}),Object(o.jsx)("img",{src:r,alt:t,onClick:function(){O.push("/breeds/"+t),u("/breeds/"+t)}})]})};function L(e){var t=e.breedsList,c=e.changeImage;return Object(o.jsx)(N.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(o.jsx)(B.a,{columnsCount:3,gutter:"10px",children:t.map((function(e,t){return Object(o.jsx)(F,{breed:e.name,changeImage:c,style:{width:"100%",display:"block"},children:" "},t)}))})})}var T=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(x.a)(s,2),i=r[0],j=r[1];Object(n.useEffect)((function(){y.a.get("https://dog.ceo/api/breeds/list/all").then((function(e){a(Object.keys(e.data.message).map((function(e,t){return new S(t,e)})))}))}),[]);var b=Object(n.useState)(""),l=Object(x.a)(b,2),d=l[0],h=l[1],O=c.filter((function(e){return!d||e.name.toLowerCase().includes(d.toLowerCase())}));return Object(o.jsx)("div",{className:"p-breads",children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(C,{filterText:d,handleFilter:function(e){var t=e.target.value;h(t)},handleChangeImages:function(){return j(!i)}}),Object(o.jsx)(u.a,{children:Object(o.jsx)(L,{breedsList:O,changeImage:i})})]})})};c(86);function P(e){var t=e.images;return Object(o.jsx)(N.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(o.jsx)(B.a,{columnsCount:3,gutter:"10px",children:t.map((function(e,t){return Object(o.jsx)("img",{src:e,alt:"",onClick:function(){return function(e){var t=window.open(e.image,"_blank","noopener,noreferrer");t&&(t.opener=null)}({image:e})},style:{width:"100%",display:"block"}},t)}))})})}function A(){var e=Object(j.h)().breed,t=Object(n.useState)(),c=Object(x.a)(t,2),a=c[0],s=c[1],r=e.charAt(0).toUpperCase()+e.slice(1);return Object(n.useEffect)((function(){y.a.get("https://dog.ceo/api/breed/"+e+"/images").then((function(e){var t=e.data.message;s(t)}))}),[e]),a?Object(o.jsxs)("div",{className:"p-breed",children:[Object(o.jsx)("div",{className:"display-3 headline",children:r}),Object(o.jsx)(u.a,{children:Object(o.jsx)(P,{images:a})})]}):Object(o.jsx)("div",{})}var E=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("header",{children:Object(o.jsx)("span",{className:"header-text",children:"Dog-Book"})}),Object(o.jsx)(h,{}),Object(o.jsx)(i.a,{children:Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{exact:!0,path:"/",children:Object(o.jsx)(T,{})}),Object(o.jsx)(j.b,{exact:!0,path:"/Breeds",children:Object(o.jsx)(T,{})}),Object(o.jsx)(j.b,{exact:!0,path:"/breeds/:breed",children:Object(o.jsx)(A,{})}),Object(o.jsx)(j.b,{path:"*",children:Object(o.jsx)(O,{})})]})})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},M=(c(87),c(17)),J=c(50);M.b.add(J.a),r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),D()}},[[88,1,2]]]);
//# sourceMappingURL=main.ecba6d2a.chunk.js.map