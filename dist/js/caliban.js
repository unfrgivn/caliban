/*! For license information please see caliban.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r;"object"!=typeof _cbn&&(_cbn=[]),"object"!=typeof window.Caliban&&(window.Caliban=function(){"use strict";var n,i,o={},a=document,s=navigator,u=screen,c=window,l=c.encodeURIComponent,f=c.decodeURIComponent,d=(unescape,null);function h(e){try{return f(e)}catch(t){return unescape(e)}}function g(e){return"undefined"!==typeof e}function p(e){return"string"==typeof e||e instanceof String}function m(){var e,t,n;for(e=0;e<arguments.length;e+=1){var r;null,arguments[e]&&arguments[e].slice&&arguments[e].slice();p(t=(n=arguments[e]).shift())||t.name;if(d.getDebug()&&console.log("[CALIBAN_DEBUG] API: "+t+"()",n.length?n:""),p(t)){if(!(r=d)[t]){var i="The method '"+t+'\' was not found in "_cbn" variable.  Please have a look at the Caliban tracker documentation.';throw console.warn(i),new TypeError(i)}r[t].apply(r,n)}else t.apply(d,n)}}function b(e,t,n,r){return e.addEventListener?(e.addEventListener(t,n,r),!0):e.attachEvent?e.attachEvent("on"+t,n):void(e["on"+t]=n)}function v(e){var t=new RegExp("^([a-z]+):").exec(e);return t?t[1]:null}function A(e){var t=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);return t?t[1]:e}function k(e,t,n){n||(n="");var r=(e=String(e)).indexOf("#"),i=e.length;-1===r&&(r=i);var o=e.substr(0,r),a=e.substr(r,i-r);return-1===o.indexOf("?")?o+="?":"?"!==o.charAt(o.length-1)&&(o+="&"),o+l(t)+"="+l(n)+a}function C(e,t){if(-1===(e=String(e)).indexOf("?"+t+"=")&&-1===e.indexOf("&"+t+"="))return e;var n=e.indexOf("?");if(-1===n)return e;var r=e.substr(n+1),i=e.substr(0,n);if(r){var o="",a=r.indexOf("#");-1!==a&&(o=r.substr(a+1),r=r.substr(0,a));for(var s=r.split("&"),u=s.length-1;u>=0;u--)s[u].split("=")[0]===t&&s.splice(u,1);var c=s.join("&");c&&(i=i+"?"+c),o&&(i+="#"+o)}return i}function y(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(e);return n?f(n[1]):""}function E(e){var t,n,r,i,o,a,s,u,c,f,d=function(e,t){return e<<t|e>>>32-t},h=function(e){var t,n="";for(t=7;t>=0;t--)n+=(e>>>4*t&15).toString(16);return n},g=[],p=1732584193,m=4023233417,b=2562383102,v=271733878,A=3285377520,k=[];for(f=(e=unescape(l(e))).length,n=0;n<f-3;n+=4)r=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),k.push(r);switch(3&f){case 0:n=2147483648;break;case 1:n=e.charCodeAt(f-1)<<24|8388608;break;case 2:n=e.charCodeAt(f-2)<<24|e.charCodeAt(f-1)<<16|32768;break;case 3:n=e.charCodeAt(f-3)<<24|e.charCodeAt(f-2)<<16|e.charCodeAt(f-1)<<8|128}for(k.push(n);14!=(15&k.length);)k.push(0);for(k.push(f>>>29),k.push(f<<3&4294967295),t=0;t<k.length;t+=16){for(n=0;n<16;n++)g[n]=k[t+n];for(n=16;n<=79;n++)g[n]=d(g[n-3]^g[n-8]^g[n-14]^g[n-16],1);for(i=p,o=m,a=b,s=v,u=A,n=0;n<=19;n++)c=d(i,5)+(o&a|~o&s)+u+g[n]+1518500249&4294967295,u=s,s=a,a=d(o,30),o=i,i=c;for(n=20;n<=39;n++)c=d(i,5)+(o^a^s)+u+g[n]+1859775393&4294967295,u=s,s=a,a=d(o,30),o=i,i=c;for(n=40;n<=59;n++)c=d(i,5)+(o&a|o&s|a&s)+u+g[n]+2400959708&4294967295,u=s,s=a,a=d(o,30),o=i,i=c;for(n=60;n<=79;n++)c=d(i,5)+(o^a^s)+u+g[n]+3395469782&4294967295,u=s,s=a,a=d(o,30),o=i,i=c;p=p+i&4294967295,m=m+o&4294967295,b=b+a&4294967295,v=v+s&4294967295,A=A+u&4294967295}return(c=h(p)+h(m)+h(b)+h(v)+h(A)).toLowerCase()}function N(e){var t=e.length;return"."===e.charAt(--t)&&(e=e.slice(0,t)),"*."===e.slice(0,2)&&(e=e.slice(1)),-1!==e.indexOf("/")&&(e=e.substr(0,e.indexOf("/"))),e}function _(e,t){if(e&&e.indexOf)return e.indexOf(t);if(!g(e)||null===e)return-1;if(!e.length)return-1;var n=e.length;if(0===n)return-1;for(var r=0;r<n;){if(e[r]===t)return r;r++}return-1}var w={htmlCollectionToArray:function(e){var t,n=[];if(!e||!e.length)return n;for(t=0;t<e.length;t++)n.push(e[t]);return n},find:function(e){if(!document.querySelectorAll||!e)return[];var t=document.querySelectorAll(e);return this.htmlCollectionToArray(t)},findMultiple:function(e){if(!e||!e.length)return[];var t,n,r=[];for(t=0;t<e.length;t++)n=this.find(e[t]),r=r.concat(n);return r=this.makeNodesUnique(r)},findNodesByTagName:function(e,t){if(!e||!t||!e.getElementsByTagName)return[];var n=e.getElementsByTagName(t);return this.htmlCollectionToArray(n)},makeNodesUnique:function(e){var t=[].concat(e);if(e.sort((function(e,n){if(e===n)return 0;var r=_(t,e),i=_(t,n);return r===i?0:r>i?-1:1})),e.length<=1)return e;var n,r=0,i=0,o=[];for(n=e[r++];n;)n===e[r]&&(i=o.push(r)),n=e[r++]||null;for(;i--;)e.splice(o[i],1);return e},getAttributeValueFromNode:function(e,t){if(this.hasNodeAttribute(e,t)){if(e&&e.getAttribute)return e.getAttribute(t);if(e&&e.attributes)if("undefined"!==typeof e.attributes[t]){if(e.attributes[t].value)return e.attributes[t].value;if(e.attributes[t].nodeValue)return e.attributes[t].nodeValue;var n,r=e.attributes;if(r){for(n=0;n<r.length;n++)if(r[n].nodeName===t)return r[n].nodeValue;return null}}}},hasNodeAttributeWithValue:function(e,t){return!!this.getAttributeValueFromNode(e,t)},hasNodeAttribute:function(e,t){return e&&e.hasAttribute?e.hasAttribute(t):!(!e||!e.attributes)&&"undefined"!==typeof e.attributes[t]},hasNodeCssClass:function(e,t){if(e&&t&&e.className&&-1!==_("string"==typeof e.className?e.className.split(" "):[],t))return!0;return!1},isLinkElement:function(e){if(!e)return!1;return-1!==_(["a","area"],String(e.nodeName).toLowerCase())},addHiddenElement:function(e,t,n){var r=document.querySelector("[name='"+t+"']");if(r)r.value=n;else{var i=document.createElement("input");i.setAttribute("type","hidden"),i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}}};function I(e,t){var r,o,d,m,I,T,B,L,x,D=function(e,t,n){return e||(e=""),t||(t=""),"translate.googleusercontent.com"===e?(""===n&&(n=t),e=A(t=y(t,"u"))):"cc.bingj.com"!==e&&"webcache.googleusercontent.com"!==e&&"74.6."!==e.slice(0,5)||(e=A(t=a.links[0].href)),[e,t,n]}(a.domain,c.location.href,function(){var e="";try{e=c.top.document.referrer}catch(t){if(c.parent)try{e=c.parent.document.referrer}catch(t){e=""}}return""===e&&(e=a.referrer),e}()),U=N(D[0]),S=h(D[1]),O=h(D[2]),G=e||"",P=t||"",j="",R="",M=null,q=[U],F=[],V=500,z=["_id"],H=["gauid","utm_source","utm_medium","utm_campaign","utm_content","utm_term"],J=["utm_campaign","gclid","msclkid"],W="_cbnsid",$=!0,K=!1,Q=72e5,X=!1,Y={},Z=!0,ee=E,te=["id","cbn"];function ne(e,t,n,r,i,o){var s;K||(n&&(s=new Date).setTime(s.getTime()+n),a.cookie=e+"="+l(t)+(n?";expires="+s.toGMTString():"")+";path="+(r||"/")+";samesite=none"+(i?";domain="+i:"")+(o?";secure":""))}function re(e){if(K)return 0;var t=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(a.cookie);return t?f(t[2]):0}function ie(e){var t;return e=C(e,W),o?(t=new RegExp("#.*"),e.replace(t,"")):e}function oe(e,t){var n;if((e=String(e).toLowerCase())===(t=String(t).toLowerCase()))return!0;if("."===t.slice(0,1)){if(e===t.slice(1))return!0;if((n=e.length-t.length)>0&&e.slice(n)===t)return!0}return!1}function ae(e,t,r){!B&&e&&function(e,t){e=k(e,"send_js",1);var r=a.createElement("script"),i=a.getElementsByTagName("script")[0];r.type="text/javascript",r.async=!0,r.defer=!0,r.onload=function(){n=0,"function"==typeof t&&t({request:e,trackerUrl:G,success:!0})},r.onerror=function(){"function"==typeof t&&t({request:e,trackerUrl:G,success:!1})},r.src=e,i.parentNode.insertBefore(r,i)}(e=G+(G.indexOf("?")<0?"?":"&")+e,r)}function se(e,t,n){ne(e,"",-86400,t,n)}function ue(){if(K)return"0";if(!g(c.showModalDialog)&&g(s.cookieEnabled))return s.cookieEnabled?"1":"0";ne("cbn_testcookie","1",void 0,T,I,$);var e="1"===re("cbn_testcookie")?"1":"0";return se("cbn_testcookie"),e}function ce(){ee((I||U)+(T||"/")).slice(0,4)}function le(){if(g(Y.res))return Y;var e,t,n={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(!new RegExp("MSIE").test(s.userAgent)){if(s.mimeTypes&&s.mimeTypes.length)for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t=s.mimeTypes[n[e]],Y[e]=t&&t.enabledPlugin?"1":"0");!new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(s.userAgent)&&"unknown"!=typeof navigator.javaEnabled&&g(s.javaEnabled)&&s.javaEnabled()&&(Y.java="1"),"function"==typeof c.GearsFactory&&(Y.gears="1"),Y.cookie=ue()}var r=parseInt(u.width,10),i=parseInt(u.height,10);return Y.res=parseInt(r,10)+"x"+parseInt(i,10),Y}function fe(){var e=le();return ee((s.userAgent||"")+(s.platform||"")+JSON.stringify(e)).slice(0,6)}function de(){return Math.floor((new Date).getTime()/1e3)}function he(e){if(!Z)return X&&console.log("[CALIBAN_DEBUG] Cross-domain sessions disabled"),null;var t=y(e,W);if(!t)return null;var n=t.split("."),r=n[0],i=n[1];return X&&console.log("[CALIBAN_DEBUG] Get session Id from URL: "+r),r?(X&&console.log("[CALIBAN_DEBUG] Get device Id from URL: "+i),function(e){e=String(e);var t=fe(),n=t.length,r=e.substr(-1*n,n),i=parseInt(e.substr(0,e.length-n),10);if(X&&console.log("[CALIBAN_DEBUG] Verifying device Id ("+t+") and Id from URL ("+r+")"),i&&r&&r===t){var o=de();0;var a=i-o+180;if(X&&console.log("[CALIBAN_DEBUG] Cross-domain timestamps: current ("+o+") fromUrl ("+i+")"),X&&console.log("[CALIBAN_DEBUG] Cross-domain Id timestamp "+(a>0?"valid for "+a+"s":"expired "+-1*a+"s ago")),i>=o-180)return X&&console.log("[CALIBAN_DEBUG] Cross-domain same user: ",!0),!0}return X&&console.log("[CALIBAN_DEBUG] Cross-domain same user: ",!1),!1}(i)?String(r):null):null}function ge(){if(X&&console.log("[CALIBAN_DEBUG] Get session Id: "+(j||"(not yet set)")),!j&&(j=he(S),X&&console.log("[CALIBAN_DEBUG] Found valid session Id in URL: "+j),!j)){var e=function(){for(var e=r||S,t=0;t<J.length;t++)if(y(e,J[t]))return X&&console.log("[CALIBAN_DEBUG] Starting new campaign/session, `"+J[t]+"` found in request"),!0;return X&&console.log("[CALIBAN_DEBUG] No campaign start params found in request"),!1}(),t=re(W);R=e&&t,j=!e&&t}return j}function pe(){var e,t,n=K;for(K=!1,e=0;e<te.length;e++)0!==re(t=te[e])&&se(t,T,I);se(W,T,I),K=n}function me(e){var t=r||S,n=!1;if(K&&pe(),B)return"";var i=a.characterSet||a.charset;return i&&"utf-8"!==i.toLowerCase()||(i=null),ge()||(j=function(){var e=le();return ee((s.userAgent||"")+(s.platform||"")+JSON.stringify(e)+(new Date).getTime()+Math.random()).slice(0,20)}(),n=!0,X&&console.log("[CALIBAN_DEBUG] Generated new session Id:"+j),X&&console.log("[CALIBAN_DEBUG] Previous session Id was:"+R)),e=(e&&e+"&"||"")+"sid="+P+"&"+W+"="+j+"&link_"+W+"="+R+"&r="+String(Math.random()).slice(2,8)+"&ts="+de()+"&url="+l(ie(t))+(O.length?"&urlref="+l(ie(O)):"")+(d&&d.length?"&apnd="+l(d):"")+"&ces="+Math.floor(Q/1e3)+(i?"&cs="+l(i):"")+"&snew="+n,function(e){ne(W,e,Q,T,I,$)}(j),e}function be(e,t){var n,r="(^| )(cbn[_-]"+t;if(e)for(n=0;n<e.length;n++)r+="|"+e[n];return r+=")( |$)",new RegExp(r)}function ve(e){if(e&&w.hasNodeAttribute(e,"href")){var t=w.getAttributeValueFromNode(e,"href");if(t&&(n=t,!G||!n||0!==n.indexOf("/")&&0!==A(n).indexOf(A(G)))||!ue()){var n;t=C(t,W);var r,i,o=ge()+"."+(r=de(),i=fe(),String(r)+i);t=k(t,W,o),e.setAttribute("href",t)}}}function Ae(e){if(X&&console.log("[CALIBAN_DEBUG] Adding form data to `"+(e.id||e.name)+"`: ",M),e&&M&&"FORM"===e.nodeName){!function e(t,n,r){for(var i in n)if(-1===z.indexOf(i)){var o=r?r+"["+i+"]":i;"object"==typeof n[i]?e(t,n[i],o):(w.addHiddenElement(t,o,n[i]),X&&console.log("[CALIBAN_DEBUG] Adding hidden field "+o+" = "+n[i]))}}(e,M,m);var t=ge();w.addHiddenElement(e,W,t),X&&console.log("[CALIBAN_DEBUG] Adding hidden field "+W+" = "+t)}}function ke(e){X&&console.log("Handle click: "+e.href||!1),function(e){if(X&&console.log("[CALIBAN_DEBUG] Append qs params to link #"+e.id),e&&d&&w.hasNodeAttribute(e,"href")){var t=w.getAttributeValueFromNode(e,"href");X&&console.log("[CALIBAN_DEBUG] Link append href (before): "+t);var n,i,o,a=r||S;for(n=0;n<d.length;n++)(o=y(a,i=d[n])).length?(X&&console.log("[CALIBAN_DEBUG] Append qs param: "+i+" = "+o),t=k(t=C(t,i),i,o)):X&&console.log("[CALIBAN_DEBUG] Skipping empty append qs param: "+i);X&&console.log("[CALIBAN_DEBUG] Link append href (after): "+t),e.setAttribute("href",t)}}(e=function(e){var t;for(t=e.parentNode;null!==t&&g(t)&&!w.isLinkElement(e);)t=(e=t).parentNode;return e}(e)),Z&&ve(e)}function Ce(e){var t=e.which,n=typeof e.button;return t||"undefined"===n||(a.all&&!a.addEventListener?1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2):0===e.button||"0"===e.button?t=1:1&e.button?t=2:2&e.button&&(t=3)),t}function ye(e){return e.target||e.srcElement}function Ee(e){return function(t){var n=function(e){switch(Ce(e)){case 1:return"left";case 2:return"middle";case 3:return"right"}}(t=t||c.event),r=ye(t);if("click"===t.type){var i=!1;e&&"middle"===n&&(i=!0),r&&!i&&ke(r)}else"mousedown"===t.type?"middle"===n&&r?(L=n,x=r):L=x=null:"mouseup"===t.type?(n===L&&r===x&&ke(r),L=x=null):"contextmenu"===t.type&&ke(r)}}function Ne(e,t){"undefined"===typeof t&&(t=!0),b(e,"click",Ee(t),!1),t&&(b(e,"mouseup",Ee(t),!1),b(e,"mousedown",Ee(t),!1),b(e,"contextmenu",Ee(t),!1))}function _e(e){b(e,"submit",(function(e){var t=ye(e=e||c.event);"submit"===e.type&&Ae(t)}),!1)}ce(),this.setSessionReferenceId=function(e){j=e},this.getSessionReferenceId=function(){return ge()},this.setTrackerUrl=function(e){G=e},this.getTrackerUrl=function(){return G},this.getCalibanUrl=function(){return this.getTrackerUrl()},this.getPropertyId=function(){return P},this.setPropertyId=function(e){!function(e){P=e}(e)},this.getRequest=function(e){return me(e)},this.setLinkTrackingTimer=function(e){V=e},this.getLinkTrackingTimer=function(){return V},this.setDomains=function(e){q=p(e)?[e]:e;for(var t,n,r,i=!1,o=0;o<q.length;o++){if(t=String(q[o]),oe(U,N(t))){i=!0;break}var a=(n=t,r=void 0,r=document.createElement("a"),0!==n.indexOf("//")&&0!==n.indexOf("http")&&(0===n.indexOf("*")&&(n=n.substr(1)),0===n.indexOf(".")&&(n=n.substr(1)),n="http://"+n),r.href=content.toAbsoluteUrl(n),r.pathname?r.pathname:"");if(a&&"/"!==a&&"/*"!==a){i=!0;break}}i||q.push(U)},this.enableCrossDomainLinking=function(){Z=!0},this.disableCrossDomainLinking=function(){Z=!1},this.isCrossDomainLinkingEnabled=function(){return Z},this.getCrossDomainLinkingUrlParameter=function(){return l(W)+"="+l(ge())},this.setIgnoreClasses=function(e){F=p(e)?[e]:e},this.setReferrerUrl=function(e){O=e},this.getReferrerUrl=function(e){return O},this.setCustomUrl=function(e){r=function(e,t){var n;return v(t)?t:"/"===t.slice(0,1)?v(e)+"://"+A(e)+t:((n=(e=ie(e)).indexOf("?"))>=0&&(e=e.slice(0,n)),(n=e.lastIndexOf("/"))!==e.length-1&&(e=e.slice(0,n+1)),e+t)}(S,e)},this.getCurrentUrl=function(){return r||S},this.setAppendParams=function(e){d=p(e)?[e]:e},this.getAppendParams=function(){return d},this.setFirstAttributionParams=function(e){H=p(e)?H.push(e):H.concat(e)},this.getFirstAttributionParams=function(){return H},this.setCampaignStartParams=function(e){J=p(e)?J.push(e):J.concat(e)},this.getCampaignStartParams=function(){return J},this.setSessionIdParam=function(e){W=e},this.setLinkClasses=function(e){p(e)?[e]:e},this.discardHashTag=function(e){o=e},this.setSessionData=function(e){M=e},this.getSessionData=function(){return M},this.setFormInputNamespace=function(e){m=e},this.getFormInputNamespace=function(){return m},this.setDebug=function(e){X=e},this.getDebug=function(){return X},this.setCookieDomain=function(e){var t,n=N(e);ne("test","testvalue",1e4,null,t=n),"testvalue"===re("test")&&(se("test",null,t),1)&&(I=n,ce())},this.getCookieDomain=function(){return I},this.hasCookies=function(){return"1"===ue()},this.setSessionCookie=function(e,t,n){if(!e)throw new Error("Missing cookie name");g(n)||(n=Q),te.push(e),ne(e,t,n,T,I)},this.getCookie=function(e){var t=re(e);return 0===t?null:t},this.setCookiePath=function(e){T=e,ce()},this.getCookiePath=function(e){return T},this.setSessionTimeout=function(e){Q=1e3*e},this.getSessionTimeout=function(){return Q},this.setSecureCookie=function(e){$=e},this.disableCookies=function(){K=!0,Y.cookie="0",P&&pe()},this.deleteCookies=function(){pe()},this.setDoNotTrack=function(e){var t=s.doNotTrack||s.msDoNotTrack;(B=e&&("yes"===t||"1"===t))&&this.disableCookies()},this.addListener=function(e,t){Ne(e,t)},this.addSubmitListeners=function(){!function(e){var t,n=be(F,"ignore"),r=a.forms,i=null;if(r)for(t=0;t<r.length;t++)i=r[t],n.test(i.className)||("undefined"===typeof i.calibanTrackers&&(i.calibanTrackers=[]),-1===_(i.calibanTrackers,e)&&(i.calibanTrackers.push(e),_e(i)))}()},this.addFormData=function(){!function(e){var t,n=be(F,"ignore"),r=a.forms,i=null,o=null;if(X&&console.log("[CALIBAN_DEBUG] Forms found:",r?w.htmlCollectionToArray(r):null),r)for(t=0;t<r.length;t++)i=r[t],X&&console.log("[CALIBAN_DEBUG] Checking eligibility of form `"+(i.id||i.name)+"`"),n.test(i.className)?X&&console.log("[CALIBAN_DEBUG] Ignoring form `"+(i.id||i.name)+"`"):(o=typeof i.calibanTrackers,X&&console.log("[CALIBAN_DEBUG] Append session data to form `"+(i.id||i.name)+"`"),"undefined"===o&&(i.calibanTrackers=[]),i.calibanTrackers.push(e),Ae(i))}()},this.enableLinkTracking=function(e){!0;var t,n,r=this;t=function(){!function(e,t){!0;var n,r=be(F,"ignore"),i=a.links,o=null;if(i)for(n=0;n<i.length;n++)o=i[n],r.test(o.className)||(void 0===o.calibanTrackers&&(o.calibanTrackers=[]),-1===_(o.calibanTrackers,t)&&(o.calibanTrackers.push(t),Ne(o,e)))}(e,r)},n=!1,(n=a.attachEvent?"complete"===a.readyState:"loading"!==a.readyState)?t():(a.addEventListener?b(a,"DOMContentLoaded",(function e(){a.removeEventListener("DOMContentLoaded",e,!1),n||(n=!0,t())})):a.attachEvent&&(a.attachEvent("onreadystatechange",(function e(){"complete"===a.readyState&&(a.detachEvent("onreadystatechange",e),n||(n=!0,t()))})),a.documentElement.doScroll&&c===c.top&&function e(){if(!n){try{a.documentElement.doScroll("left")}catch(t){return void setTimeout(e,0)}n=!0,t()}}()),b(c,"load",(function(){n||(n=!0,t())}),!1))},this.trackRequest=function(e,t){ae(me(e),0,t)},i.trigger("TrackerSetup",[this])}function T(){return{push:m}}var B=["setDebug","setTrackerUrl","enableCrossDomainLinking","setSessionTimeout","setSecureCookie","setCookiePath","setCookieDomain","setDomains","setPropertyId","setSessionIdParam","setAppendParams","setIgnoreClasses","setFormInputNamespace","enableLinkTracking"];return i={initialized:!1,trigger:function(e,t,n){if(o[e])for(var r=0;r<o[e].length;r++)o[e][r].apply(n||c,t)},getTracker:function(e,t){return g(t)||(t=this.getAsyncTracker().getPropertyId()),g(e)||(e=this.getAsyncTracker().getTrackerUrl()),new I(e,t)},getAsyncTracker:function(){return d},createAsyncTracker:function(e,t){if(d)return d;for(d=new I(e,t),_cbn=function(e,t){var n,r,i={};for(n=0;n<t.length;n++){var o=t[n];for(i[o]=1,r=0;r<e.length;r++)if(e[r]&&e[r][0]){var a=e[r][0];o===a&&(m(e[r]),delete e[r],i[a]>1&&console.warn("The method "+a+' is registered more than once in "_cbn" variable. Only the last call has an effect. Please have a look at the multiple Caliban trackers documentation: https://developer.caliban.org/guides/tracking-javascript-guide#multiple-caliban-trackers'),i[a]++)}}return e}(_cbn,B),n=0;n<_cbn.length;n++)_cbn[n]&&m(_cbn[n]);return _cbn=new T,i.trigger("TrackerCreated",[d]),d}},void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r),i}()),function(){"use strict";window.Caliban.getAsyncTracker()||("object"==typeof _cbn&&void 0!==_cbn.length&&_cbn.length?window.Caliban.createAsyncTracker():_cbn={push:function(e){"undefined"!==typeof console&&console&&console.error&&console.error("_cbn.push() was used but Caliban tracker was not initialized before the caliban.js file was loaded. Make sure to configure the tracker via _cbn.push before loading caliban.js. Alternatively, you can create a tracker via Caliban.createAsyncTracker() manually and then use _cbn.push but it may not fully work as tracker methods may not be executed in the correct order.",e)}}),window.Caliban.trigger("CalibanInitialized",[]),window.Caliban.initialized=!0}()}]);