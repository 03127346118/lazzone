/*! For license information please see component---src-pages-blog-js-a2216ab8ce8a23b65b2f.js.LICENSE.txt */
(self.webpackChunkloazzne_gatsbyjs=self.webpackChunkloazzne_gatsbyjs||[]).push([[7],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7408:function(e,t,r){"use strict";var n=r(885),a=r(4942),c=r(5987),l=r(5900),o=r.n(l),s=r(7294),i=r(9541),u=r(5893),m=["as","bsPrefix","className"],f=["className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=["xxl","xl","lg","md","sm","xs"];var v=s.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,n=e.className,a=(0,c.Z)(e,m);r=(0,i.vE)(r,"col");var l=[],s=[];return d.forEach((function(e){var t,n,c,o=a[e];delete a[e],"object"==typeof o&&null!=o?(t=o.span,n=o.offset,c=o.order):t=o;var i="xs"!==e?"-".concat(e):"";t&&l.push(!0===t?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(t)),null!=c&&s.push("order".concat(i,"-").concat(c)),null!=n&&s.push("offset".concat(i,"-").concat(n))})),[b(b({},a),{},{className:o().apply(void 0,[n].concat(l,s))}),{as:t,bsPrefix:r,spans:l}]}(e),a=(0,n.Z)(r,2),l=a[0],s=l.className,p=(0,c.Z)(l,f),v=a[1],y=v.as,E=void 0===y?"div":y,h=v.bsPrefix,g=v.spans;return(0,u.jsx)(E,b(b({},p),{},{ref:t,className:o()(s,!g.length&&h)}))}));v.displayName="Col",t.Z=v},6187:function(e,t,r){"use strict";var n=r(4942),a=r(5987),c=r(5900),l=r.n(c),o=r(7294),s=r(9541),i=r(5893),u=["bsPrefix","fluid","as","className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.fluid,c=e.as,o=void 0===c?"div":c,m=e.className,p=(0,a.Z)(e,u),b=(0,s.vE)(r,"container"),d="string"==typeof n?"-".concat(n):"-fluid";return(0,i.jsx)(o,f(f({ref:t},p),{},{className:l()(m,n?"".concat(b).concat(d):b)}))}));p.displayName="Container",p.defaultProps={fluid:!1},t.Z=p},994:function(e,t,r){"use strict";var n=r(4942),a=r(5987),c=r(5900),l=r.n(c),o=r(7294),s=r(9541),i=r(5893),u=["bsPrefix","className","as"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=["xxl","xl","lg","md","sm","xs"],b=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,o=void 0===c?"div":c,m=(0,a.Z)(e,u),b=(0,s.vE)(r,"row"),d="".concat(b,"-cols"),v=[];return p.forEach((function(e){var t,r=m[e];delete m[e],t=null!=r&&"object"==typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(d).concat(n,"-").concat(t))})),(0,i.jsx)(o,f(f({ref:t},m),{},{className:l().apply(void 0,[n,b].concat(v))}))}));b.displayName="Row",t.Z=b},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return c}});var n=r(7294);r(5893);var a=n.createContext({prefixes:{}});a.Consumer,a.Provider;function c(e,t){var r=(0,n.useContext)(a).prefixes;return e||r[t]||t}},5097:function(e,t,r){"use strict";var n=r(7294),a=r(1348),c=r(1974),l=r(4402),o=r(3530);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],s=(0,n.useContext)(o.p),i=s.menuStatus,u=s.updateMenuStatus,m=function(){window.scrollY>70?r(!0):window.scrollY<70&&r(!1)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[t]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header_area"},n.createElement("div",{className:"container"},n.createElement("div",{className:"header_social"},n.createElement("ul",{className:"hd_social_icons"},a.Pk.social.map((function(e,t){var r=e.icon,a=e.url;return n.createElement("li",{key:"header-social-"+t},n.createElement("a",{href:a},n.createElement("i",{className:"fa "+r})))})))),n.createElement("div",{className:"header_contact text-end"},n.createElement("ul",{className:"hd_contact"},a.Ro.map((function(e,t){var r=e.icon,a=e.tagLine,c=e.text,l=e.url;return n.createElement("li",{key:"header-info-"+t},n.createElement("i",{className:r})," ",a,n.createElement("a",{href:l}," ",c))})))))),n.createElement("div",{className:"main_menu_area "+(!0===t?" stricky stricky-fixed slideInDown animated":" stricky slideIn animated")},n.createElement("div",{className:"container"},n.createElement("div",{className:"main_menu_area__left"},n.createElement(c.Z,{href:"/"},n.createElement(l.Z,{src:a.TR.dark,alt:"Awesome Image",layout:"fixed"})),n.createElement("span",{className:"mobile-menu__toggler",onClick:function(e){e.preventDefault(),u(!i)}},n.createElement("i",{className:"fa fa-bars"}))),n.createElement("div",{className:"main_menu_area__right"},n.createElement("nav",{className:"main_menu_area__menu"},n.createElement("ul",{className:"nav navbar-nav navigation-box"},a.FF.map((function(e,t){return n.createElement("li",{key:t},n.createElement(c.Z,{href:e.url},e.name),void 0!==e.subItems?n.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return n.createElement("li",{key:t},n.createElement(c.Z,{href:e.url},e.name))}))):null)})))),n.createElement(c.Z,{href:"/contact",className:"btn-yellow"},"BOOK TODAY")))))}},6966:function(e,t,r){"use strict";var n=r(7294),a=r(1974);t.Z=function(e){var t=e.title,r=e.name;return n.createElement("section",{className:"breadcrumb_section text-center section_padding"},n.createElement("ul",{className:"breadcrumb"},n.createElement("li",null,n.createElement(a.Z,{href:"/"},"Home")),n.createElement("li",null,r)),n.createElement("h1",null,t))}},9982:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),a=r(4831),c=r(5097),l=r(3530),o=r(6966),s=r(2821),i=r(6187),u=r(994),m=r(7408),f=r(4402),p=r(1974),b=function(e){var t=e.data,r=t.image,a=t.date,c=t.author,l=t.commentCount,o=t.title,s=t.url,i=t.text;return n.createElement("div",{className:"blog_share_box"},n.createElement("div",{className:"bl_share_img"},n.createElement(f.Z,{src:r,alt:o,className:"img-fluid"}),n.createElement("span",{className:"blog_date"},a)),n.createElement("div",{className:"blog_share_details"},n.createElement("span",{className:"comment_author"},"by ",n.createElement(p.Z,{href:s},c)," -"," ",n.createElement(p.Z,{href:s},l," Comments")),n.createElement("h1",null,n.createElement(p.Z,{href:s},o)),n.createElement("p",null,i)))},d=r(1348),v=function(){var e=d.GN.posts;return n.createElement("section",{className:"blog_share_area section_padding blog-page"},n.createElement(i.Z,null,n.createElement(u.Z,null,e.map((function(e,t){return n.createElement(m.Z,{lg:4,md:6,sm:12,key:"blog-one-"+t},n.createElement(b,{data:e}))})))))},y=function(){return n.createElement(l.Z,null,n.createElement(a.Z,{PageTitle:"Blog Page"},n.createElement(c.Z,null),n.createElement(o.Z,{title:"Blog Grid",name:"Blog"}),n.createElement(v,null),n.createElement(s.Z,null)))}},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(3366);function a(e,t){if(null==e)return{};var r,a,c=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},885:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(s){o=!0,a=s}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return c}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-blog-js-a2216ab8ce8a23b65b2f.js.map