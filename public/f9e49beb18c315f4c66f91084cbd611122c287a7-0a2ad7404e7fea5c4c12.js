"use strict";(self.webpackChunkloazzne_gatsbyjs=self.webpackChunkloazzne_gatsbyjs||[]).push([[552],{7992:function(e,t,n){var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=i(n(7294)),s=i(n(9433));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:n.getWidthFulfillAspectRatio(n.props.ratio,window.innerHeight,window.innerWidth)},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})}),10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var a=e.split(":"),o=Number(a[0]),s=Number(a[1]);return t<n*(s/o)?Math.floor(o/s*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return o.default.createElement(s.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?o.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},o.default.createElement("div",{className:e.props.classNames.modalVideoBody},o.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},o.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},o.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||o.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(o.default.Component);t.Z=r,r.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},9433:function(e,t,n){t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n(5697));var a=r(n(5661)),o=r(n(1545)),s=r(n(7294)),i=r(n(2855));n(8040);function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},d=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,s=n?a+" "+o:o;t.removeClasses(e,n?"appear":"enter"),u(e,s),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,o=a?(a&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,o=n.activeClassName,s=n.doneClassName;a&&c(e,a),o&&c(e,o),s&&c(e,s)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,s.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(s.default.Component);d.defaultProps={classNames:""},d.propTypes={};var p=d;t.default=p,e.exports=t.default},2855:function(e,t,n){t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(5697)),o=r(n(7294)),s=r(n(3935)),i=n(3639);n(8040);function r(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var d="entered";t.ENTERED=d;var p="exiting";t.EXITING=p;var m=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var o,s=n.transitionGroup,i=s&&!s.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(o=u,a.appearStatus=c):o=d:o=t.unmountOnExit||t.mountOnEnter?l:u,a.state={status:o},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==d&&(t=c):n!==c&&n!==d||(t=p)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=s.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},i.performEnter=function(e,t){var n=this,a=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,s=this.getTimeouts(),i=o?s.appear:s.enter;t||a?(this.props.onEnter(e,o),this.safeSetState({status:c},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:d},(function(){n.props.onEntered(e)}))},i.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:p},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(e)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(e,a);var s=o.default.Children.only(n);return o.default.cloneElement(s,a)},a}(o.default.Component);function f(){}m.contextTypes={transitionGroup:a.object},m.childContextTypes={transitionGroup:function(){}},m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},m.UNMOUNTED=0,m.EXITED=1,m.ENTERING=2,m.ENTERED=3,m.EXITING=4;var h=(0,i.polyfill)(m);t.default=h},8040:function(e,t,n){t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n(5697))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null},758:function(e,t,n){var a=n(1638),o=n(7294),s=n(6187),i=n(994),r=n(7408);t.Z=function(){var e=a.PJ.caption,t=a.PJ.blockTitle,n=a.PJ.lists,l=a.PJ.offer;return o.createElement("section",{className:"about_service_area section_padding"},o.createElement(s.Z,null,o.createElement(i.Z,null,o.createElement(r.Z,{lg:6},o.createElement("div",{className:"about_service_left"},o.createElement("p",{className:"about_service_year text-center"},o.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))),o.createElement(r.Z,{lg:6},o.createElement("div",{className:"about_service_right"},o.createElement("div",{className:"hero-title-with-shape"},o.createElement("h4",{className:"heading_with_border"},t.tagline),o.createElement("h1",null,t.title)),o.createElement("ul",null,n.map((function(e,t){var n=e.text;return o.createElement("li",{key:t},o.createElement("i",{className:"fa fa-check-circle"})," ",n)}))),o.createElement("div",{className:"about_service_discount text-center"},o.createElement("h1",null,l.tagline),o.createElement("p",null,l.text)))))))}},6170:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1638),o=n(7294),s=n(6187),i=n(994),r=n(7408),l=n(4402),u=function(e){var t=e.data,n=t.image,a=t.name,s=t.designation,i=t.social;return o.createElement("div",{className:"team_member"},o.createElement(l.Z,{src:n,alt:a,className:"img-fluid"}),o.createElement("div",{className:"team_details"},o.createElement("h3",null,a," ",o.createElement("span",{className:"skills"},"- ",s)),o.createElement("ul",{className:"team_socials"},i.map((function(e,t){var n=e.icon,a=e.url;return o.createElement("li",{key:t},o.createElement("a",{href:a},o.createElement("i",{className:"fa "+n})))})))))},c=function(e){var t=e.extraClassName,n=a.i1.title,l=a.i1.posts;return o.createElement("section",{className:"team_member_area section_padding text-center "+t},o.createElement(s.Z,null,o.createElement(i.Z,null,o.createElement(r.Z,{lg:12},o.createElement("div",{className:"hero-section-title text-center"},o.createElement("h1",null,n))),l.map((function(e,t){return o.createElement(r.Z,{lg:3,md:6,sm:12,key:t},o.createElement(u,{data:e}))})))))}},618:function(e,t,n){var a=n(7294),o=n(6187),s=n(5825),i=n(2219),r=n(1638),l=n(4402);s.ZP.use([s.pt,s.o3,s.W_]);t.Z=function(){var e=r.r2.title,t=r.r2.posts,n=(0,a.useState)(null),s=n[0],u=n[1];return a.createElement("section",{className:"testimonial_area text-center section_padding"},a.createElement("h1",{className:"testimonial_heading_shape"},e),a.createElement(o.Z,null,a.createElement(i.t,Object.assign({id:"testimonials-two__thumb",onSwiper:u},{slidesPerView:3,spaceBetween:0,speed:1400,autoplay:{delay:5e3}}),t.map((function(e,t){var n=e.image,o=e.name;return a.createElement(i.o,{key:t},a.createElement("div",{className:"testi-thumb-img"},a.createElement(l.Z,{src:n,alt:o,className:"img-fluid"})))}))),a.createElement(i.t,Object.assign({className:"testimonial_slider ",id:"testimonials-two__carousel",thumbs:{swiper:s}},{speed:1400,mousewheel:!0,slidesPerView:1,navigation:{nextEl:"#testi-slide-next",prevEl:"#testi-slide-prev"},autoplay:{delay:5e3}}),t.map((function(e,t){var n=e.designation,o=e.name,s=e.content;return a.createElement(i.o,{key:t,className:"testimonial_details"},a.createElement("p",null,s),a.createElement("h4",null,o),a.createElement("span",null,n))})),a.createElement("div",{className:"swiper-button-prev",id:"testi-slide-prev"},a.createElement("i",{className:"fa fa-angle-left"})),a.createElement("div",{className:"swiper-button-next",id:"testi-slide-next"},a.createElement("i",{className:"fa fa-angle-right"})))))}},2644:function(e,t,n){var a=n(7294),o=n(7992),s=n(1638);t.Z=function(){var e=s.up.title,t=s.up.id,n=(0,a.useState)(!1),i=n[0],r=n[1];return a.createElement(a.Fragment,null,a.createElement("section",{className:"video_promotion_area text-center"},a.createElement("div",{className:"overlay"},a.createElement("a",{onClick:function(e){e.preventDefault(),r(!0)},href:"#",className:"video-img",title:"Play Icon",id:"videolink"},a.createElement("span",{className:"video-play"},a.createElement("i",{className:"fa fa-play"}))),a.createElement("h1",null,e))),"undefined"!=typeof window?a.createElement(o.Z,{channel:"youtube",autoplay:!0,ratio:"16:9",isOpen:i,videoId:t,onClose:function(){return r(!1)}}):null)}},5661:function(e,t,n){var a=n(5318);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=a(n(2287));e.exports=t.default},2287:function(e,t){t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},1545:function(e){function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}}}]);
//# sourceMappingURL=f9e49beb18c315f4c66f91084cbd611122c287a7-0a2ad7404e7fea5c4c12.js.map