(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(175);t.API=r.default;var o=n(204);t.Client=o.default;var i=n(205);t.Server=i.default},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.listeners={}}return e.prototype.socketEvent=function(e){try{var t=JSON.parse(e)}catch(i){return}if(t instanceof Object&&!0===t.widgetbot&&t.id===this.id){var n=t.event,r=t.data,o=this.listeners[n];o&&o.forEach(function(e){return e(r)})}},e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),console.debug("[embed-api] on '"+e+"'",t)},e}();t.default=r},185:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),i=n(186),s=n(4),a=n.n(s),l=n(187);function c(e,t){var n,r=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof r)return r;var o=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof o?o*t:void 0}var u={above:"above",inside:"inside",below:"below",invisible:"invisible"};var f="<Waypoint> expected to receive a single React element child.\n\nSee https://goo.gl/LrBNgw for more info.";function d(e){if(e)try{o.a.Children.only(e)}catch(t){throw new Error(f)}}function p(e){return"string"==typeof e.type}var h="<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.";var v=void 0,y=[];function m(e){y.push(e),v||(v=setTimeout(function(){v=null;for(var e=void 0;e=y.shift();)e()},0));var t=!0;return function(){return function(){if(t){t=!1;var n=y.indexOf(e);-1!==n&&(y.splice(n,1),!y.length&&v&&(clearTimeout(v),v=null))}}}()}var b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var w={topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){return function(){}}(),onLeave:function(){return function(){}}(),onPositionChange:function(){return function(){}}(),fireOnRapidScroll:!0},g=void 0!==o.a.PureComponent?o.a.PureComponent:o.a.Component,S=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.refElement=function(e){return t._ref=e},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,g),b(n,[{key:"componentWillMount",value:function(){return function(){d(this.props.children)}}()},{key:"componentDidMount",value:function(){return function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=m(function(){e.cancelOnNextTick=null,function(e,t){if(e&&!p(e)&&!t)throw new Error(h)}(e.props.children,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(i.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(i.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)}))}}()},{key:"componentWillReceiveProps",value:function(){return function(e){d(e.children)}}()},{key:"componentDidUpdate",value:function(){return function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=m(function(){e.cancelOnNextTick=null,e._handleScroll(null)})))}}()},{key:"componentWillUnmount",value:function(){return function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}}()},{key:"_findScrollableAncestor",value:function(){return function(){var t=this.props,n=t.horizontal,r=t.scrollableAncestor;if(r)return function(t){return"window"===t?e.window:t}(r);for(var o=this._ref;o.parentNode;){if((o=o.parentNode)===document.body)return window;var i=window.getComputedStyle(o),s=(n?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===s||"scroll"===s)return o}return window}}()},{key:"_handleScroll",value:function(){return function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?u.invisible:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom?u.inside:e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom?u.inside:e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?u.inside:e.viewportBottom<e.waypointTop?u.below:e.waypointTop<e.viewportTop?u.above:u.invisible}(t),r=this._previousPosition;if(this._previousPosition=n,r!==n){var o={currentPosition:n,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};this.props.onPositionChange.call(this,o),n===u.inside?this.props.onEnter.call(this,o):r===u.inside&&this.props.onLeave.call(this,o);var i=r===u.below&&n===u.above,s=r===u.above&&n===u.below;this.props.fireOnRapidScroll&&(i||s)&&(this.props.onEnter.call(this,{currentPosition:u.inside,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),this.props.onLeave.call(this,{currentPosition:n,previousPosition:u.inside,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}}()},{key:"_getBounds",value:function(){return function(){var e=this.props.horizontal,t=this._ref.getBoundingClientRect(),n=t.left,r=t.top,o=t.right,i=t.bottom,s=e?n:r,a=e?o:i,l=void 0,u=void 0;this.scrollableAncestor===window?(l=e?window.innerWidth:window.innerHeight,u=0):(l=e?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,u=e?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,d=f.bottomOffset;return{waypointTop:s,waypointBottom:a,viewportTop:u+c(f.topOffset,l),viewportBottom:u+l-c(d,l)}}}()},{key:"render",value:function(){return function(){var e=this,t=this.props.children;if(!t)return o.a.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(p(t)||Object(l.isForwardRef)(t.type)){var n=function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)};return o.a.cloneElement(t,{ref:n})}return o.a.cloneElement(t,{innerRef:this.refElement})}}()}]),n}();S.propTypes={children:a.a.node,debug:a.a.bool,onEnter:a.a.func,onLeave:a.a.func,onPositionChange:a.a.func,fireOnRapidScroll:a.a.bool,scrollableAncestor:a.a.any,horizontal:a.a.bool,topOffset:a.a.oneOfType([a.a.string,a.a.number]),bottomOffset:a.a.oneOfType([a.a.string,a.a.number])},S.above=u.above,S.below=u.below,S.inside=u.inside,S.invisible=u.invisible,S.getWindow=function(){if("undefined"!=typeof window)return window},S.defaultProps=w,S.displayName="Waypoint",t.a=S}).call(this,n(75))},186:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=!("undefined"==typeof window||!window.document||!window.document.createElement);var o=void 0;function i(){return void 0===o&&(o=function(){if(!r)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(o){}return e}()),o}function s(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function a(e){this.target=e,this.events={}}a.prototype.getEventHandlers=function(){return function(e,t){var n,r=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]}}(),a.prototype.handleEvent=function(){return function(e,t,n){var r=this.getEventHandlers(e,t);r.handlers=r.nextHandlers,r.handlers.forEach(function(e){e&&e(n)})}}(),a.prototype.add=function(){return function(e,t,n){var r=this,o=this.getEventHandlers(e,n);s(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,o.handleEvent,n)),o.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,s(o);var a=o.nextHandlers.indexOf(t);o.nextHandlers.splice(a,1),0===o.nextHandlers.length&&(r.target&&r.target.removeEventListener(e,o.handleEvent,n),o.handleEvent=void 0)}}}}();var l="__consolidated_events_handlers__";function c(e,t,n,r){e[l]||(e[l]=new a(e));var o=function(e){if(e)return i()?e:!!e.capture}(r);return e[l].add(t,n,o)}},187:function(e,t,n){"use strict";e.exports=n(188)},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case s:case l:case a:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case c:return e;default:return t}}case y:case v:case i:return t}}}function b(e){return m(e)===d}t.typeOf=m,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=p,t.Fragment=s,t.Lazy=y,t.Memo=v,t.Portal=i,t.Profiler=l,t.StrictMode=a,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===d||e===l||e===a||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return b(e)||m(e)===f},t.isConcurrentMode=b,t.isContextConsumer=function(e){return m(e)===u},t.isContextProvider=function(e){return m(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return m(e)===p},t.isFragment=function(e){return m(e)===s},t.isLazy=function(e){return m(e)===y},t.isMemo=function(e){return m(e)===v},t.isPortal=function(e){return m(e)===i},t.isProfiler=function(e){return m(e)===l},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===h}},189:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.default=void 0;var o,i=r(n(7)),s=r(n(34)),a=r(n(76)),l=r(n(74)),c=r(n(0)),u=r(n(4)),f=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=Object.create({}),p=function(e){var t=f(e),n=t.fluid?t.fluid.src:t.fixed.src;return d[n]||!1},h=new WeakMap;var v=function(e,t){var n=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),o);return n&&(n.observe(e),h.set(e,t)),function(){n.unobserve(e),h.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",o=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+n+o+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,o=e.src,i=e.style,s=e.onLoad,u=e.onError,f=(0,a.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:o},f,{onLoad:s,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});m.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,o=!1,i=t.fadeIn,a=p(t);!a&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,o=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,o=!1);var l=!(t.critical&&!t.fadeIn);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:o,fadeIn:i,hasNoScript:l,seenBefore:a},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,s.default)((0,s.default)(n))),n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=v(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=f(e),n=t.fluid?t.fluid.src:t.fixed.src,d[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=f(this.props),t=e.title,n=e.alt,r=e.className,o=e.style,i=void 0===o?{}:o,s=e.imgStyle,a=void 0===s?{}:s,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,v=e.fixed,b=e.backgroundColor,w=e.Tag,g=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,_=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:S?1:0,transition:_?"opacity 0.5s":"none"},a),E="boolean"==typeof b?"lightgray":b,x={transitionDelay:"0.5s"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&x,a,d),L={title:t,alt:this.state.isVisible?"":n,style:P,className:p};if(h){var T=h;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),E&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&x)}),T.base64&&c.default.createElement(m,(0,l.default)({src:T.base64},L)),T.tracedSVG&&c.default.createElement(m,(0,l.default)({src:T.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(m,{alt:n,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:g})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:n,title:t},T))}}))}if(v){var j=v,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},E&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},_&&x)}),j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},L)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(m,{alt:n,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:g})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:n,title:t},j))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),g=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:w,sizes:g,fixed:w,fluid:g,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=b;t.default=S},203:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var s=n(174),a=n(0),l=n(206),c=n(207),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={url:null,id:c.generateUUID()},t.api=new s.Client({id:t.state.id,iframe:null}),t}return o(t,e),t.getDerivedStateFromProps=function(e,t){return{url:e.shard+"/channels/"+e.server+(e.channel?"/"+e.channel:"")+"/"+c.searchParams(i({},e.options,{api:t.id}))}},t.prototype.componentDidMount=function(){var e=this.props.onAPI;e&&e(this.api)},t.prototype.render=function(){var e=this,t=this.props,n=t.defer,r=t.className,o=t.style,s=t.height,c=t.width;return a.createElement("div",{className:r,style:i({},l.Root({width:c,height:s}),o)},a.createElement("iframe",{src:n?"":this.state.url,ref:function(t){return e.api.iframe=t},style:l.Embed}))},t.defaultProps={server:"299881420891881473",shard:"https://widgetbot.io",options:{},defer:!1},t}(a.PureComponent);t.default=u,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(174));var f=n(174);t.API=f.Client},204:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.server={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",function(e){var t=e.data;return n.socketEvent(t)}),n}return o(t,e),t.prototype.emit=function(e,t){if(!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});return!!this.iframe.contentWindow&&(this.iframe.contentWindow.postMessage(n,"*"),!0)},t}(n(175).default);t.default=i},205:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.targetOrigin="*",n.client={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",function(e){var t=e.data;return n.socketEvent(t)}),n}return o(t,e),t.prototype.emit=function(e,t){if(console.debug("[embed-api] emit '"+e+"'",t),!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});return window.parent.postMessage(n,this.targetOrigin),!0},t}(n(175).default);t.default=i},206:function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Root=function(e){var t=e.width,n=e.height;return r({},n&&{height:+n?n+"px":n},t&&{width:+t?t+"px":t},{display:"inline-block",overflow:"hidden",backgroundColor:"rgb(54, 57, 62)",borderRadius:7,verticalAlign:"top"})},t.Embed={width:"100%",height:"100%",border:"none"}},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=function(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})},t.searchParams=function(e){return void 0===e&&(e={}),"?"+Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}}}]);
//# sourceMappingURL=9-6806391629f8ea593aba.js.map