function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,c,f=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function S(e){return f=e,u=setTimeout(w,t),l?b(e):a}function x(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=i}function w(){var e=v();if(x(e))return h(e);u=setTimeout(w,function(e){var n=t-(e-c);return s?d(n,i-(e-f)):n}(e))}function h(e){return u=void 0,p&&o?b(e):(o=r=void 0,a)}function j(){var e=v(),n=x(e);if(o=arguments,r=this,c=e,n){if(void 0===u)return S(c);if(s)return u=setTimeout(w,t),b(c)}return void 0===u&&(u=setTimeout(w,t)),a}return t=g(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=r=u=void 0},j.flush=function(){return void 0===u?a:h(v())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}function b(){const e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})},document.querySelectorAll("input, textarea").forEach((n=>{n.addEventListener("input",e(t)(b,500))})),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector('input[name="email"]').value,n=document.querySelector('textarea[name="message"]').value;console.log(`Email: ${t}, Message: ${n}`),localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""})),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);document.querySelector('input[name="email"]').value=t.email,document.querySelector('textarea[name="message"]').value=t.message}}));
//# sourceMappingURL=03-feedback.6337f76b.js.map
