(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),c=a.n(r),o=a("I/Ru"),i=a("vrFN"),u=a("Otpx"),s=a("xY/9"),l=a("9ft3"),f=a("6Rqd");a("ToJy"),t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return new l.a(t)})),m=t.site.siteMetadata,p=m.bio,d=m.social,b=["All"].concat(Object(n.a)(function(e){var t={};return e.forEach((function(e){e.categories.forEach((function(e){t[e]=t[e]?t[e]+1:1}))})),function(e){var t=[];for(var a in e)t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}(t).map((function(e){return e[0]}))}(a))),v=Object(r.useState)(0),w=v[0],E=v[1];return c.a.createElement(o.a,null,c.a.createElement(i.a,{title:"Home"}),c.a.createElement(u.a,{bio:p,social:d}),c.a.createElement(f.a,{className:"tabs",value:w,onChange:function(e,t){E(t)},tabs:b}),c.a.createElement(s.a,{posts:0===w?a.slice(0,4):a.filter((function(e,t){return e.categories.includes(b[w])})).slice(0,4),moreUrl:"posts/"+(0===w?"":b[w])}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-eaf362f5b7dc9438923c.js.map