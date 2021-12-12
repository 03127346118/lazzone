/*! For license information please see component---src-pages-service-details-js-a11f3f16c957620d146f.js.LICENSE.txt */
(self.webpackChunkloazzne_gatsbyjs=self.webpackChunkloazzne_gatsbyjs||[]).push([[658],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},7408:function(e,t,a){"use strict";var n=a(885),r=a(4942),c=a(5987),l=a(5900),i=a.n(l),s=a(7294),o=a(9541),m=a(5893),u=["as","bsPrefix","className"],f=["className"];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=["xxl","xl","lg","md","sm","xs"];var E=s.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,n=e.className,r=(0,c.Z)(e,u);a=(0,o.vE)(a,"col");var l=[],s=[];return v.forEach((function(e){var t,n,c,i=r[e];delete r[e],"object"==typeof i&&null!=i?(t=i.span,n=i.offset,c=i.order):t=i;var o="xs"!==e?"-".concat(e):"";t&&l.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=c&&s.push("order".concat(o,"-").concat(c)),null!=n&&s.push("offset".concat(o,"-").concat(n))})),[p(p({},r),{},{className:i().apply(void 0,[n].concat(l,s))}),{as:t,bsPrefix:a,spans:l}]}(e),r=(0,n.Z)(a,2),l=r[0],s=l.className,d=(0,c.Z)(l,f),E=r[1],b=E.as,h=void 0===b?"div":b,y=E.bsPrefix,g=E.spans;return(0,m.jsx)(h,p(p({},d),{},{ref:t,className:i()(s,!g.length&&y)}))}));E.displayName="Col",t.Z=E},6187:function(e,t,a){"use strict";var n=a(4942),r=a(5987),c=a(5900),l=a.n(c),i=a(7294),s=a(9541),o=a(5893),m=["bsPrefix","fluid","as","className"];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,c=e.as,i=void 0===c?"div":c,u=e.className,d=(0,r.Z)(e,m),p=(0,s.vE)(a,"container"),v="string"==typeof n?"-".concat(n):"-fluid";return(0,o.jsx)(i,f(f({ref:t},d),{},{className:l()(u,n?"".concat(p).concat(v):p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.Z=d},994:function(e,t,a){"use strict";var n=a(4942),r=a(5987),c=a(5900),l=a.n(c),i=a(7294),s=a(9541),o=a(5893),m=["bsPrefix","className","as"];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=["xxl","xl","lg","md","sm","xs"],p=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.as,i=void 0===c?"div":c,u=(0,r.Z)(e,m),p=(0,s.vE)(a,"row"),v="".concat(p,"-cols"),E=[];return d.forEach((function(e){var t,a=u[e];delete u[e],t=null!=a&&"object"==typeof a?a.cols:a;var n="xs"!==e?"-".concat(e):"";null!=t&&E.push("".concat(v).concat(n,"-").concat(t))})),(0,o.jsx)(i,f(f({ref:t},u),{},{className:l().apply(void 0,[n,p].concat(E))}))}));p.displayName="Row",t.Z=p},9541:function(e,t,a){"use strict";a.d(t,{vE:function(){return c}});var n=a(7294);a(5893);var r=n.createContext({prefixes:{}});r.Consumer,r.Provider;function c(e,t){var a=(0,n.useContext)(r).prefixes;return e||a[t]||t}},1103:function(e,t,a){"use strict";var n=a(7294);t.Z=function(){return n.createElement("section",{className:"contact_form_area ctf_gray section_padding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-6"},n.createElement("div",{className:"contact-right contact_details"},n.createElement("div",{className:"hero-title-with-shape"},n.createElement("h4",{className:"heading_with_border"},"Get a free quote"),n.createElement("h1",null,"To request a service call, please fill out the form below")),n.createElement("p",null,"There are many variations of passages of new lorem ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable."))),n.createElement("div",{className:"col-md-6"},n.createElement("div",{className:"contact-right contact-right-style-2"},n.createElement("form",{action:"#",method:"post"},n.createElement("input",{type:"text",placeholder:"Your name",className:"half_width input_m_right"}),n.createElement("input",{type:"EMAIL",placeholder:"Email Address",className:"half_width"}),n.createElement("input",{type:"tel",placeholder:"Phone Number"}),n.createElement("span",{className:"select_icon"},n.createElement("select",{name:"select",id:"select"},n.createElement("option",{value:"option0"},"Select Service"),n.createElement("option",{value:"option1"},"Option 1"),n.createElement("option",{value:"option2"},"Option 2"),n.createElement("option",{value:"option3"},"Option 3"),n.createElement("option",{value:"option4"},"Option 4"))),n.createElement("button",{className:"btn-yellow",value:"SUBMIT NOW"},"SUBMIT NOW")))))))}},5097:function(e,t,a){"use strict";var n=a(7294),r=a(1638),c=a(1974),l=a(4402),i=a(3530);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1],s=(0,n.useContext)(i.p),o=s.menuStatus,m=s.updateMenuStatus,u=function(){window.scrollY>70?a(!0):window.scrollY<70&&a(!1)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[t]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header_area"},n.createElement("div",{className:"container"},n.createElement("div",{className:"header_social"},n.createElement("ul",{className:"hd_social_icons"},r.Pk.social.map((function(e,t){var a=e.icon,r=e.url;return n.createElement("li",{key:"header-social-"+t},n.createElement("a",{href:r},n.createElement("i",{className:"fa "+a})))})))),n.createElement("div",{className:"header_contact text-end"},n.createElement("ul",{className:"hd_contact"},r.Ro.map((function(e,t){var a=e.icon,r=e.tagLine,c=e.text,l=e.url;return n.createElement("li",{key:"header-info-"+t},n.createElement("i",{className:a})," ",r,n.createElement("a",{href:l}," ",c))})))))),n.createElement("div",{className:"main_menu_area "+(!0===t?" stricky stricky-fixed slideInDown animated":" stricky slideIn animated")},n.createElement("div",{className:"container"},n.createElement("div",{className:"main_menu_area__left"},n.createElement(c.Z,{href:"/"},n.createElement(l.Z,{src:r.TR.dark,alt:"Awesome Image",layout:"fixed"})),n.createElement("span",{className:"mobile-menu__toggler",onClick:function(e){e.preventDefault(),m(!o)}},n.createElement("i",{className:"fa fa-bars"}))),n.createElement("div",{className:"main_menu_area__right"},n.createElement("nav",{className:"main_menu_area__menu"},n.createElement("ul",{className:"nav navbar-nav navigation-box"},r.FF.map((function(e,t){return n.createElement("li",{key:t},n.createElement(c.Z,{href:e.url},e.name),void 0!==e.subItems?n.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return n.createElement("li",{key:t},n.createElement(c.Z,{href:e.url},e.name))}))):null)})))),n.createElement(c.Z,{href:"/contact",className:"btn-yellow"},"BOOK TODAY")))))}},6966:function(e,t,a){"use strict";var n=a(7294),r=a(1974);t.Z=function(e){var t=e.title,a=e.name;return n.createElement("section",{className:"breadcrumb_section text-center section_padding"},n.createElement("ul",{className:"breadcrumb"},n.createElement("li",null,n.createElement(r.Z,{href:"/"},"Home")),n.createElement("li",null,a)),n.createElement("h1",null,t))}},2289:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(4831),c=a(5097),l=a(3530),i=a(6966),s=a(2821),o=a(1103),m=a(6187),u=a(994),f=a(7408),d=a.p+"static/service-details-8dad48a356bc92b646060d62b2cb6f97.jpg",p=a(4402),v=function(){return n.createElement("div",{className:"service_details_left"},n.createElement(p.Z,{src:d,alt:"Service Details Image"}),n.createElement("h1",null,"Air Conditioner Repair"),n.createElement("p",null,"Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus."),n.createElement("h2",null,"Common Air Conditioner Problems"),n.createElement("ul",null,n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The air conditioner won't turn on."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Weird noises or vibrating occur at startup or during operation."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Warm air exits the supply registers."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The unit hums, but the fan doesn't turn on."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The fan runs, but the compressor isn't working."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Water is pooling around the air conditioner")),n.createElement("p",{className:"extra_mr"},"If you believe your air conditioning unit requires emergency service,"," ",n.createElement("a",{href:"#"},"click here")," for information about our 24/7 repair services."),n.createElement("h2",null,"Should I Repair or Replace My Air Conditioner?"),n.createElement("ul",{className:"service_details_ac"},n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Age - If your AC is more than 10 years old and giving you trouble, it may be in your best interest of consider a replacement."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Investment const - Is a new system a better investment in the long run? An Aire Serv air conditioner technician can help you calculate your return on investment to determine if on upgrade in more beneficial than repair."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Utility rates - You may think you can't afford on air conditioner replacement, but a more efficient unit consumes less electricity and could save you big time on energy bills.")),n.createElement("p",{className:"info_mr"},"Visit our ",n.createElement("a",{href:"#"},"air conditioner maintenance page")," for helpful tips and information."))},E=a(1638),b=function(){var e=(0,n.useState)(1),t=e[0],a=e[1],r=(0,n.useState)(1),c=r[0],l=r[1];return n.createElement("div",{className:"service_details_right"},n.createElement("h1",{className:"text-center"},"Our Services"),n.createElement("div",{className:"service_details_sv_cnt text-center service_cool_head"},n.createElement("ul",{className:"nav nav-tabs"},E.yo.map((function(e,r){var c=e.icon,l=e.title;return n.createElement("li",{className:t===r?"active":" ",key:r},n.createElement("a",{href:"#service-sidebar-tab-"+r,onClick:function(e){e.preventDefault(),a(r)}},n.createElement("div",{className:"service_center_left"},n.createElement("i",{className:c}),n.createElement("span",null,l))))})))),n.createElement("div",{className:"tab-content"},E.yo.map((function(e,a){var r=e.list;return a===t?n.createElement("div",{className:"tab-pane show fade in active animated fadeIn"},n.createElement("div",{className:"service_category"},n.createElement("ul",null,r.map((function(e,t){var a=e.label,r=e.url;return n.createElement("li",{key:t},n.createElement("a",{href:r},a,n.createElement("i",{className:"fa fa-angle-right"})))}))))):null}))),n.createElement("div",{className:"service_details_sv_cnt text-center service_class_remove mb-30"},n.createElement("ul",{className:"nav nav-tabs"},E.In.map((function(e,t){var a=e.icon,r=e.title;return n.createElement("li",{className:c===t?"active":" ",key:t},n.createElement("a",{href:"#service-sidebar-two-tab-"+t,onClick:function(e){e.preventDefault(),l(t)}},n.createElement("div",{className:"service_center_left"},n.createElement("i",{className:a}),n.createElement("span",null,r))))})))),n.createElement("div",{className:"tab-content"},E.In.map((function(e,t){var a=e.content,r=a.icon,l=a.title;return t===c?n.createElement("div",{className:"tab-pane show fade in active animated fadeIn"},n.createElement("div",{className:"service_details_contact"},n.createElement("span",{className:r}),n.createElement("h2",{dangerouslySetInnerHTML:{__html:l}}))):null}))))},h=function(){return n.createElement("section",{className:"service_details_area section_padding"},n.createElement(m.Z,null,n.createElement(u.Z,null,n.createElement(f.Z,{lg:8},n.createElement(v,null)),n.createElement(f.Z,{lg:4},n.createElement(b,null)))))},y=function(){return n.createElement(l.Z,null,n.createElement(r.Z,{PageTitle:"Service Details"},n.createElement(c.Z,null),n.createElement(i.Z,{title:"Service Details",name:"Service"}),n.createElement(h,null),n.createElement(o.Z,null),n.createElement(s.Z,null)))}},4942:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,{Z:function(){return n}})},5987:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(3366);function r(e,t){if(null==e)return{};var a,r,c=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}},885:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(s){i=!0,r=s}finally{try{l||null==a.return||a.return()}finally{if(i)throw r}}return c}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-service-details-js-a11f3f16c957620d146f.js.map