var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function T(){var e,n,i,o=g();if(j(o))return O(o);u=setTimeout(T,(e=o-l,n=o-c,i=t-e,d?v(i,a-n):i))}function O(e){return(u=void 0,b&&o)?h(e):(o=r=void 0,f)}function S(){var e,n=g(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(T,t),s?h(e):f;if(d)return u=setTimeout(T,t),h(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},S.flush=function(){return void 0===u?f:O(g())},S}(e,t,{leading:o,maxWait:t,trailing:r})};const b="feedback-form-state";(form=document.querySelector(".feedback-form")).addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){h={email:j.value,message:T.value},localStorage.setItem(b,JSON.stringify(h))},500)),form.addEventListener("submit",function(e){if(e.preventDefault(),console.log({email:j.value,message:T.value}),""===j.value||""===T.value)return alert("Please fill in all the fields!");localStorage.removeItem(b),e.currentTarget.reset(),h={}});let h=JSON.parse(localStorage.getItem(b))||{};const{email:j,message:T}=form.elements;h&&(j.value=h.email||"",T.value=h.message||"");
//# sourceMappingURL=03-feedback.fb744019.js.map
