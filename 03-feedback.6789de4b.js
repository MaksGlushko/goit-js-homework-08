!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=l||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return m.Date.now()};function g(e,t,n){var o,i,a,u,c,f,l=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,c=setTimeout(x,t),d?g(e):u}function w(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=a}function x(){var e=p();if(w(e))return h(e);c=setTimeout(x,function(e){var n=t-(e-f);return m?y(n,a-(e-l)):n}(e))}function h(e){return c=void 0,s&&o?g(e):(o=i=void 0,u)}function q(){var e=p(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===c)return j(f);if(m)return c=setTimeout(x,t),g(f)}return void 0===c&&(c=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),q.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=f=i=c=void 0},q.flush=function(){return void 0===c?u:h(p())},q}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||c.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}function j(){var e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})},document.querySelectorAll("input, textarea").forEach((function(n){n.addEventListener("input",e(t)(j,500))})),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector('input[name="email"]').value,n=document.querySelector('textarea[name="message"]').value;console.log("Email: ".concat(t,", Message: ").concat(n)),localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""})),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);document.querySelector('input[name="email"]').value=t.email,document.querySelector('textarea[name="message"]').value=t.message}}))}();
//# sourceMappingURL=03-feedback.6789de4b.js.map
