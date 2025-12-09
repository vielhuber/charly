(function() {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var script$1 = {};
  var interopRequireDefault = { exports: {} };
  var hasRequiredInteropRequireDefault;
  function requireInteropRequireDefault() {
    if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
    hasRequiredInteropRequireDefault = 1;
    (function(module) {
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(interopRequireDefault);
    return interopRequireDefault.exports;
  }
  var taggedTemplateLiteral = { exports: {} };
  var hasRequiredTaggedTemplateLiteral;
  function requireTaggedTemplateLiteral() {
    if (hasRequiredTaggedTemplateLiteral) return taggedTemplateLiteral.exports;
    hasRequiredTaggedTemplateLiteral = 1;
    (function(module) {
      function _taggedTemplateLiteral(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }));
      }
      module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(taggedTemplateLiteral);
    return taggedTemplateLiteral.exports;
  }
  var hasRequiredScript$1;
  function requireScript$1() {
    if (hasRequiredScript$1) return script$1;
    hasRequiredScript$1 = 1;
    var _interopRequireDefault = requireInteropRequireDefault();
    Object.defineProperty(script$1, "__esModule", {
      value: true
    });
    script$1.default = void 0;
    var _taggedTemplateLiteral2 = _interopRequireDefault(requireTaggedTemplateLiteral());
    var _templateObject;
    class hlp2 {
      static x(input) {
        if (typeof input === "function") {
          try {
            input = input();
            return this.x(input);
          } catch (e) {
            return false;
          }
        }
        if (input === null || input === false || typeof input === "string" && input.trim() == "" || typeof input === "object" && Object.keys(input).length === 0 && input.constructor === Object || typeof input === "undefined" || Array.isArray(input) && input.length === 0 || Array.isArray(input) && input.length === 1 && input[0] === "") {
          return false;
        }
        return true;
      }
      static nx(input) {
        return !this.x(input);
      }
      static true(input) {
        if (typeof input === "function") {
          try {
            input = input();
            return this.true(input);
          } catch (e) {
            return false;
          }
        }
        if (input === void 0) {
          return false;
        }
        if (input === null) {
          return false;
        }
        if (input === false) {
          return false;
        }
        if (Array.isArray(input) && input.length === 0) {
          return false;
        }
        if (Array.isArray(input) && hlp2.first(input) === "") {
          return false;
        }
        if (typeof input === "object" && Object.keys(input).length === 0 && input.constructor === Object) {
          return false;
        }
        if (input === 0) {
          return false;
        }
        if (input === "0") {
          return false;
        }
        if (input === "") {
          return false;
        }
        if (input === " ") {
          return false;
        }
        if (input === "null") {
          return false;
        }
        if (input === "false") {
          return false;
        }
        return true;
      }
      static false(input) {
        if (typeof input === "function") {
          try {
            input = input();
            return this.false(input);
          } catch (e) {
            return false;
          }
        }
        if (input === void 0) {
          return false;
        }
        if (input === null) {
          return false;
        }
        if (input === false) {
          return true;
        }
        if (Array.isArray(input) && input.length === 0) {
          return false;
        }
        if (Array.isArray(input) && hlp2.first(input) === "") {
          return false;
        }
        if (typeof input === "object" && Object.keys(input).length === 0 && input.constructor === Object) {
          return false;
        }
        if (input === 0) {
          return true;
        }
        if (input === "0") {
          return true;
        }
        if (input === "") {
          return false;
        }
        if (input === " ") {
          return false;
        }
        if (input === "null") {
          return false;
        }
        if (input === "false") {
          return true;
        }
        return false;
      }
      static v() {
        if (this.nx(arguments)) {
          return "";
        }
        for (let i = 0; i < arguments.length; i++) {
          if (this.x(arguments[i])) {
            return arguments[i];
          }
        }
        return "";
      }
      static loop(input, fun) {
        if (this.nx(input)) {
          return null;
        }
        if (Array.isArray(input)) {
          input.forEach((input__value, input__key) => {
            fun(input__value, input__key);
          });
        } else if (typeof input === "object") {
          Object.entries(input).forEach((_ref) => {
            let [input__key, input__value] = _ref;
            fun(input__value, input__key);
          });
        }
      }
      static map(obj, fn, ctx) {
        return Object.keys(obj).reduce((a, b) => {
          a[b] = fn.call(ctx || null, b, obj[b]);
          return a;
        }, {});
      }
      static first(input) {
        if (Array.isArray(input)) {
          var ret = null;
          input.forEach((input__value, input__key) => {
            if (ret === null) {
              ret = input__value;
            }
          });
          return ret;
        }
        if (typeof input === "object") {
          var ret = null;
          Object.entries(input).forEach((_ref2) => {
            let [input__key, input__value] = _ref2;
            if (ret === null) {
              ret = input__value;
            }
          });
          return ret;
        }
        return null;
      }
      static last(input) {
        if (Array.isArray(input)) {
          let ret = null;
          input.forEach((input__value, input__key) => {
            ret = input__value;
          });
          return ret;
        }
        if (typeof input === "object") {
          let ret = null;
          Object.entries(input).forEach((_ref3) => {
            let [input__key, input__value] = _ref3;
            ret = input__value;
          });
          return ret;
        }
        return null;
      }
      static rand(input) {
        if (Array.isArray(input)) {
          return input[Math.floor(Math.random() * input.length)];
        }
        if (typeof input === "object") {
          var input = Object.values(input);
          return input[Math.floor(Math.random() * input.length)];
        }
        return null;
      }
      static random_string() {
        let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
        let chars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (chars === null) {
          chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        let chars_length = chars.length, random_string = "";
        for (let i = 0; i < length; i++) {
          random_string += chars[~~(Math.random() * (chars_length - 1 - 0 + 1)) + 0];
        }
        return random_string;
      }
      static round() {
        let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
      }
      static isInteger(value) {
        return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
      }
      static random_int() {
        let min = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 99999;
        if (!this.isInteger(min) || !this.isInteger(max)) {
          return false;
        }
        if (min > max) {
          [min, max] = [max, min];
        }
        return ~~(Math.random() * (max - min + 1)) + min;
      }
      static capitalize() {
        let string = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (string === null) {
          return string;
        }
        if (string === "") {
          return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      static cookieExists(cookie_name) {
        if (document.cookie !== void 0 && this.cookieGet(cookie_name) !== null) {
          return true;
        }
        return false;
      }
      static cookieGet(cookie_name) {
        var cookie_match = document.cookie.match(new RegExp(cookie_name + "=([^;]+)"));
        if (cookie_match) {
          return decodeURIComponent(cookie_match[1]);
        }
        return null;
      }
      static cookieSet(cookie_name, cookie_value, days) {
        let full_domain = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        let samesite = "";
        if (window.location.protocol.indexOf("https") > -1) {
          samesite = "; SameSite=None; Secure";
        }
        document.cookie = cookie_name + "=" + encodeURIComponent(cookie_value) + "; expires=" + new Date((/* @__PURE__ */ new Date()).getTime() + days * 24 * 60 * 60 * 1e3).toUTCString() + "; path=/" + samesite + "; domain=" + (full_domain === true ? this.urlHostTopLevel() : "");
      }
      static cookieDelete(cookie_name) {
        let full_domain = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        let samesite = "";
        if (window.location.protocol.indexOf("https") > -1) {
          samesite = "; SameSite=None; Secure";
        }
        document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" + samesite + "; domain=" + (full_domain === true ? this.urlHostTopLevel() : "");
      }
      static localStorageSet(key, value) {
        let ttl = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        ttl = ttl * (24 * 60 * 60 * 1e3);
        let now = /* @__PURE__ */ new Date(), item = {
          value,
          expiry: now.getTime() + ttl
        };
        localStorage.setItem(key, JSON.stringify(item));
      }
      static localStorageGet(key) {
        let itemStr = localStorage.getItem(key);
        if (!itemStr) {
          return null;
        }
        let item = JSON.parse(itemStr), now = /* @__PURE__ */ new Date();
        if (now.getTime() > item.expiry) {
          localStorage.removeItem(key);
          return null;
        }
        return item.value;
      }
      static localStorageDelete(key) {
        localStorage.removeItem(key);
      }
      static localStorageExists(key) {
        return this.localStorageGet(key) !== null;
      }
      static getParam(variable) {
        let url = window.location.search;
        if (this.nx(url)) {
          return null;
        }
        let query = url.substring(1), vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable && this.x(pair[1])) {
            return pair[1];
          }
        }
        return null;
      }
      static getDevice() {
        if (this.isPhone()) {
          return "phone";
        }
        if (this.isTablet()) {
          return "tablet";
        }
        return "desktop";
      }
      static isPhone() {
        let a = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      }
      static isTablet() {
        let a = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      }
      static isDesktop() {
        return !this.isPhone() && !this.isTablet();
      }
      static isMobile() {
        if (window.innerWidth < 750 || this.isPhone()) {
          return true;
        }
        return false;
      }
      static isTouch() {
        return "ontouchstart" in window || navigator.maxTouchPoints || false;
      }
      static isMac() {
        return hlp2.getOs() === "mac";
      }
      static isLinux() {
        return hlp2.getOs() === "linux";
      }
      static isWindows() {
        return hlp2.getOs() === "windows";
      }
      static getOs() {
        let userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"], iosPlatforms = ["iPhone", "iPad", "iPod"], os = "unknown";
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = "mac";
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = "mac";
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = "windows";
        } else if (/Android/.test(userAgent)) {
          os = "linux";
        } else if (/Linux/.test(platform)) {
          os = "linux";
        }
        return os;
      }
      static getBrowser() {
        let browser_name = "", isIE = (
          /*@cc_on!@*/
          !!document.documentMode
        ), isEdge = !isIE && !!window.StyleMedia;
        if (navigator.userAgent.indexOf("Opera") != -1 || navigator.userAgent.indexOf("OPR") != -1) {
          browser_name = "opera";
        } else if (navigator.userAgent.indexOf("Chrome") != -1 && !isEdge) {
          browser_name = "chrome";
        } else if (navigator.userAgent.indexOf("Safari") != -1 && !isEdge) {
          browser_name = "safari";
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
          browser_name = "firefox";
        } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
          browser_name = "ie";
        } else if (isEdge) {
          browser_name = "edge";
        } else {
          browser_name = "unknown";
        }
        return browser_name;
      }
      static isObject(a) {
        return !!a && a.constructor === Object;
      }
      static isArray(a) {
        return !!a && a.constructor === Array;
      }
      static isString(string) {
        return typeof string === "string" || string instanceof String;
      }
      static isDate(string) {
        if (this.nx(string)) {
          return false;
        }
        if (Object.prototype.toString.call(string) === "[object Date]") {
          return true;
        }
        if (!this.isString(string)) {
          return false;
        }
        if (string.split("-").length !== 3) {
          return false;
        }
        let day = parseInt(string.split("-")[2]), month = parseInt(string.split("-")[1]), year = parseInt(string.split("-")[0]), date = /* @__PURE__ */ new Date();
        date.setFullYear(year, month - 1, day);
        if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day) {
          return true;
        }
        return false;
      }
      static password_generate() {
        let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20;
        let chars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ["a-z", "A-Z", "0-9", "$!?"];
        let exclude = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "lI";
        if (chars === null || !chars.length || length < chars.length) {
          return null;
        }
        let charGroups = [];
        for (let group of chars) {
          let expanded = [];
          if (group === "a-z") {
            expanded = Array.from({
              length: 26
            }, (_, i) => String.fromCharCode(97 + i));
          } else if (group === "A-Z") {
            expanded = Array.from({
              length: 26
            }, (_, i) => String.fromCharCode(65 + i));
          } else if (group === "0-9") {
            expanded = Array.from({
              length: 10
            }, (_, i) => String.fromCharCode(48 + i));
          } else {
            expanded = group.split("");
          }
          if (exclude) {
            expanded = expanded.filter((c) => !exclude.includes(c));
          }
          if (expanded.length === 0) {
            return null;
          }
          charGroups.push(expanded);
        }
        let passwordChars = charGroups.map((group) => group[Math.floor(Math.random() * group.length)]);
        let allChars = charGroups.flat();
        while (passwordChars.length < length) {
          let i = Math.floor(Math.random() * allChars.length);
          passwordChars.push(allChars[i]);
        }
        for (let i = passwordChars.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
        }
        return passwordChars.join("");
      }
      static formatNumber(number) {
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        let dec_point = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        let thousands_sep = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ",";
        number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
        var n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = typeof thousands_sep === "undefined" ? "," : thousands_sep, dec = typeof dec_point === "undefined" ? "." : dec_point, s = "", toFixedFix = function(n2, prec2) {
          var k = Math.pow(10, prec2);
          return "" + Math.round(n2 * k) / k;
        };
        s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
        if (s[0].length > 3) {
          s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || "").length < prec) {
          s[1] = s[1] || "";
          s[1] += new Array(prec - s[1].length + 1).join("0");
        }
        return s.join(dec);
      }
      static formatDate(format) {
        let date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (date === false || date === true || date === null || date === "") {
          date = /* @__PURE__ */ new Date();
        } else if (typeof date !== "object") {
          date = new Date(date.replace(/-/g, "/").replace(/T|Z/g, " "));
        }
        let string = "", mo = date.getMonth(), m1 = mo + 1, dow = date.getDay(), d = date.getDate(), y = date.getFullYear(), h = date.getHours(), mi = date.getMinutes(), s = date.getSeconds();
        for (let i = 0, len = format.length; i < len; i++) {
          switch (format[i]) {
            case "j":
              string += d;
              break;
            case "d":
              string += d < 10 ? "0" + d : d;
              break;
            case "l":
              let days = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
              string += days[dow];
              break;
            case "w":
              string += dow;
              break;
            case "D":
              days = Array("Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat");
              string += days[dow];
              break;
            case "m":
              string += m1 < 10 ? "0" + m1 : m1;
              break;
            case "n":
              string += m1;
              break;
            case "F":
              let months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
              string += months[mo];
              break;
            case "M":
              months = Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              string += months[mo];
              break;
            case "Y":
              string += y;
              break;
            case "y":
              string += y.toString().slice(-2);
              break;
            case "H":
              string += h < 10 ? "0" + h : h;
              break;
            case "g":
              let hour = h === 0 ? 12 : h;
              string += hour > 12 ? hour - 12 : hour;
              break;
            case "h":
              hour = h === 0 ? 12 : h;
              hour = hour > 12 ? hour - 12 : hour;
              string += hour < 10 ? "0" + hour : hour;
              break;
            case "a":
              string += h < 12 ? "am" : "pm";
              break;
            case "i":
              string += mi < 10 ? "0" + mi : mi;
              break;
            case "s":
              string += s < 10 ? "0" + s : s;
              break;
            case "c":
              string += date.toISOString();
              break;
            default:
              string += format[i];
          }
        }
        return string;
      }
      static deepCopy(obj) {
        let hash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
        if (Object(obj) !== obj) return obj;
        if (hash.has(obj)) return hash.get(obj);
        const result = obj instanceof Date ? new Date(obj) : obj instanceof RegExp ? new RegExp(obj.source, obj.flags) : obj.constructor ? new obj.constructor() : /* @__PURE__ */ Object.create(null);
        hash.set(obj, result);
        if (obj instanceof Map) Array.from(obj, (_ref4) => {
          let [key, val] = _ref4;
          return result.set(key, hlp2.deepCopy(val, hash));
        });
        return Object.assign(result, ...Object.keys(obj).map((key) => ({
          [key]: hlp2.deepCopy(obj[key], hash)
        })));
      }
      static jsonStringToObject(string) {
        if (this.nx(string) || !this.isString(string)) {
          return null;
        }
        try {
          return JSON.parse(string);
        } catch (error) {
          return null;
        }
      }
      static isJsonString(string) {
        if (this.nx(string) || !this.isString(string)) {
          return false;
        }
        try {
          let json = JSON.parse(string);
          return true;
        } catch (error) {
          return false;
        }
      }
      static jsonObjectToString(object) {
        try {
          return JSON.stringify(object);
        } catch (error) {
          return null;
        }
      }
      static uuid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
      }
      static guid() {
        return this.uuid();
      }
      static replaceAll(string, search, replace) {
        return string.split(search).join(replace);
      }
      static replaceLast(string, search, replace) {
        let n = string.lastIndexOf(search);
        string = string.slice(0, n) + string.slice(n).replace(search, replace);
        return string;
      }
      static replaceFirst(string, search, replace) {
        return string.replace(search, replace);
      }
      static findAllPositions(searchStr, str) {
        let searchStrLen = searchStr.length, startIndex = 0, index, indices = [];
        if (searchStrLen == 0) {
          return [];
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
          indices.push(index);
          startIndex = index + searchStrLen;
        }
        return indices;
      }
      static findAllPositionsCaseInsensitive(searchStr, str) {
        let searchStrLen = searchStr.length, startIndex = 0, index, indices = [];
        if (searchStrLen == 0) {
          return [];
        }
        while ((index = this.indexOfCaseInsensitive(searchStr, str, startIndex)) > -1) {
          indices.push(index);
          startIndex = index + searchStrLen;
        }
        return indices;
      }
      static countAllOccurences(value, str) {
        let regExp = new RegExp(value, "g");
        return (str.match(regExp) || []).length;
      }
      static countAllOccurencesCaseInsensitive(value, str) {
        let regExp = new RegExp(value, "gi");
        return (str.match(regExp) || []).length;
      }
      static indexOfCaseInsensitive(searchStr, str, offset) {
        return str.toLowerCase().indexOf(searchStr.toLowerCase(), offset);
      }
      static highlight(string, query) {
        let strip = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        let strip_length = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 500;
        if (this.nx(string) || this.nx(query)) {
          return string;
        }
        if (strip === true) {
          let dots = "...";
          let positions2 = this.findAllPositionsCaseInsensitive(query, string);
          let words = string.split(" ");
          let i = 0;
          words.forEach((words__value, words__key) => {
            let strip_now = true;
            positions2.forEach((positions__value) => {
              if (i >= positions__value - strip_length && i <= positions__value + query.length + strip_length - 1) {
                strip_now = false;
              }
            });
            if (strip_now === true) {
              words[words__key] = dots;
            }
            i += words__value.length + 1;
          });
          string = words.join(" ");
          while (string.indexOf(dots + " " + dots) > -1) {
            string = this.replaceAll(string, dots + " " + dots, dots);
          }
          string = string.trim();
        }
        let positions = this.findAllPositionsCaseInsensitive(query, string);
        let wrap_begin = '<strong class="highlight">';
        let wrap_end = "</strong>";
        for (let x = 0; x < positions.length; x++) {
          string = string.substring(0, positions[x]) + wrap_begin + string.substring(positions[x], positions[x] + query.length) + wrap_end + string.substring(positions[x] + query.length);
          for (let y = x + 1; y < positions.length; y++) {
            positions[y] = positions[y] + wrap_begin.length + wrap_end.length;
          }
        }
        return string;
      }
      static get(url) {
        let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return this.call("GET", url, args);
      }
      static post(url) {
        let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return this.call("POST", url, args);
      }
      static call(method, url) {
        let args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (args === null) {
          args = {};
        }
        if (!("data" in args)) {
          args.data = {};
        }
        if (!("headers" in args)) {
          args.headers = null;
        }
        if (!("throttle" in args)) {
          args.throttle = 0;
        }
        if (!("allow_errors" in args)) {
          args.allow_errors = true;
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url.indexOf("http") !== 0) {
              url = hlp2.baseUrl() + "/" + url;
            }
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (method === "POST") {
              if ("data" in args && args.data !== null && typeof args.data === "object" && !(args.data instanceof FormData)) {
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                args.data = JSON.stringify(args.data);
              }
              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
            if (this.x(args.headers)) {
              Object.entries(args.headers).forEach((_ref5) => {
                let [headers__key, headers__value] = _ref5;
                xhr.setRequestHeader(headers__key, headers__value);
              });
            }
            xhr.onload = () => {
              if (xhr.readyState != 4 || args.allow_errors !== true && xhr.status != 200 && xhr.status != 304) {
                if (this.isJsonString(xhr.responseText)) {
                  reject(this.jsonStringToObject(xhr.responseText));
                } else {
                  reject(xhr.responseText);
                }
              }
              if (this.isJsonString(xhr.responseText)) {
                resolve(this.jsonStringToObject(xhr.responseText));
              } else {
                resolve(xhr.responseText);
              }
            };
            xhr.onerror = () => {
              reject([xhr.readyState, xhr.status, xhr.statusText]);
            };
            if (method === "GET") {
              xhr.send(null);
            }
            if (method === "POST") {
              xhr.send(args.data);
            }
          }, args.throttle);
        });
      }
      static onResizeHorizontal(fun) {
        let windowWidth = window.innerWidth, windowWidthNew, timeout;
        window.addEventListener("resize", () => {
          windowWidthNew = window.innerWidth;
          if (windowWidthNew != windowWidth) {
            windowWidth = windowWidthNew;
            if (timeout) {
              clearTimeout(timeout);
            }
            timeout = window.setTimeout(() => {
              fun();
            }, 50);
          }
        });
        fun();
      }
      static onResizeVertical(fun) {
        var windowHeight = window.innerHeight, windowHeightNew, timeout;
        window.addEventListener("resize", () => {
          windowHeightNew = window.innerHeight;
          if (windowHeightNew != windowHeight) {
            windowHeight = windowHeightNew;
            if (timeout) {
              clearTimeout(timeout);
            }
            timeout = window.setTimeout(() => {
              fun();
            }, 50);
          }
        });
        fun();
      }
      static removeEmpty(array) {
        if (this.nx(array) || !Array.isArray(array)) {
          return array;
        }
        array = array.filter((array__value) => {
          return this.x(array__value);
        });
        return array;
      }
      static uniqueArray(array) {
        let seen = {}, ret_arr = [];
        for (let i = 0; i < array.length; i++) {
          if (!(array[i] in seen)) {
            ret_arr.push(array[i]);
            seen[array[i]] = true;
          }
        }
        return ret_arr;
      }
      static powerset(array) {
        if (!Array.isArray(array)) {
          return array;
        }
        return array.reduce((subsets, value) => subsets.concat(subsets.map((set) => [...set, value])), [[]]);
      }
      static charToInt(val) {
        val = val.toUpperCase();
        let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i, j, result = 0;
        for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
          result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
        }
        return result;
      }
      static intToChar(num) {
        for (var ret = "", a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
          ret = String.fromCharCode(parseInt(num % b / a) + 65) + ret;
        }
        return ret;
      }
      static slugify(text) {
        return text.toString().toLowerCase().trim().split("ä").join("ae").split("ö").join("oe").split("ü").join("ue").split("ß").join("ss").replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      }
      static incChar(char) {
        let shift = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return this.intToChar(this.charToInt(char) + shift);
      }
      static decChar(char) {
        let shift = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return this.intToChar(this.charToInt(char) - shift);
      }
      static range(start, end) {
        let range = [], typeofStart = typeof start, typeofEnd = typeof end, step = 1;
        if (typeofStart == "undefined" || typeofEnd == "undefined" || typeofStart != typeofEnd) {
          return null;
        }
        if (end < start) {
          step = -step;
        }
        if (typeofStart == "number") {
          while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
          }
        } else if (typeofStart == "string") {
          if (start.length != 1 || end.length != 1) {
            return null;
          }
          start = start.charCodeAt(0);
          end = end.charCodeAt(0);
          while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
          }
        } else {
          return null;
        }
        return range;
      }
      static dateToWeek() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (d === null) {
          d = /* @__PURE__ */ new Date();
        }
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)), weekNo = Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
        return weekNo;
      }
      static weekToDate(week, year) {
        if (year == null) {
          year = (/* @__PURE__ */ new Date()).getFullYear();
        }
        let date = /* @__PURE__ */ new Date();
        date.setYear(year);
        date.setDate(1);
        date.setMonth(0);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        let FIRST_DAY_OF_WEEK = 1;
        let WEEK_LENGTH = 7;
        let day = date.getDay();
        day = day === 0 ? 7 : day;
        let dayOffset = -day + FIRST_DAY_OF_WEEK;
        if (WEEK_LENGTH - day + 1 < 4) {
          dayOffset += WEEK_LENGTH;
        }
        date = new Date(date.getTime() + dayOffset * 24 * 60 * 60 * 1e3);
        let weekTime = 1e3 * 60 * 60 * 24 * 7 * (week - 1);
        let targetTime = date.getTime() + weekTime;
        date.setTime(targetTime);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
      }
      static addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
      static diffInMonths(date1, date2) {
        let d1 = new Date(date1), d2 = new Date(date2), yearDiff = d2.getFullYear() - d1.getFullYear(), monthDiff = d2.getMonth() - d1.getMonth(), dayDiff = d2.getDate() - d1.getDate(), daysInMonth = new Date(d2.getFullYear(), d2.getMonth() + 1, 0).getDate(), months = yearDiff * 12 + monthDiff + dayDiff / daysInMonth;
        return months;
      }
      static objectsAreEqual(x, y) {
        var _this = this;
        if (x === null || x === void 0 || y === null || y === void 0) {
          return x === y;
        }
        if (x.constructor !== y.constructor) {
          return false;
        }
        if (x instanceof Function) {
          return x === y;
        }
        if (x instanceof RegExp) {
          return x === y;
        }
        if (x === y || x.valueOf() === y.valueOf()) {
          return true;
        }
        if (Array.isArray(x) && x.length !== y.length) {
          return false;
        }
        if (x instanceof Date) {
          return false;
        }
        if (!(x instanceof Object)) {
          return false;
        }
        if (!(y instanceof Object)) {
          return false;
        }
        var p = Object.keys(x);
        return Object.keys(y).every(function(i) {
          return p.indexOf(i) !== -1;
        }) && p.every(function(i) {
          return _this.objectsAreEqual(x[i], y[i]);
        });
      }
      static containsObject(obj, list) {
        var x;
        for (x in list) {
          if (list.hasOwnProperty(x) && this.objectsAreEqual(list[x], obj)) {
            return true;
          }
        }
        return false;
      }
      static fadeOut(el) {
        let speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
        if (speed <= 25) {
          speed = 25;
        }
        return new Promise((resolve) => {
          el.style.opacity = 1;
          (function fade() {
            if ((el.style.opacity -= 25 / speed) < 0) {
              el.style.display = "none";
              resolve();
            } else {
              requestAnimationFrame(fade);
            }
          })();
        });
      }
      static fadeIn(el) {
        let speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
        if (speed <= 25) {
          speed = 25;
        }
        return new Promise((resolve) => {
          el.style.opacity = 0;
          el.style.display = "block";
          (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += 25 / speed) > 1)) {
              el.style.opacity = val;
              requestAnimationFrame(fade);
            } else {
              resolve();
            }
          })();
        });
      }
      static scrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      }
      static scrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      }
      static closestScrollable(node) {
        let isElement = node instanceof HTMLElement, overflowY = isElement && window.getComputedStyle(node).overflowY, isScrollable = overflowY && !(overflowY.includes("hidden") || overflowY.includes("visible"));
        if (!node) {
          return null;
        } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
          return node;
        }
        return this.closestScrollable(node.parentNode) || document.scrollingElement || document.body;
      }
      static offsetTop(el) {
        return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
      }
      static offsetLeft(el) {
        return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft;
      }
      static offsetRight(el) {
        return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft + el.offsetWidth;
      }
      static offsetBottom(el) {
        return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop + el.offsetHeight;
      }
      static offsetTopWithMargin(el) {
        return this.offsetTop(el) - parseInt(getComputedStyle(el).marginTop);
      }
      static offsetLeftWithMargin(el) {
        return this.offsetLeft(el) - parseInt(getComputedStyle(el).marginLeft);
      }
      static offsetRightWithMargin(el) {
        return this.offsetRight(el) + parseInt(getComputedStyle(el).marginRight);
      }
      static offsetBottomWithMargin(el) {
        return this.offsetBottom(el) + parseInt(getComputedStyle(el).marginBottom);
      }
      static documentHeight() {
        return Math.max(document.body.offsetHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.offsetHeight, document.documentElement.scrollHeight);
      }
      static documentWidth() {
        return document.documentElement.clientWidth || document.body.clientWidth;
      }
      static windowWidth() {
        return window.innerWidth;
      }
      static windowHeight() {
        return window.innerHeight;
      }
      static windowWidthWithoutScrollbar() {
        return document.documentElement.clientWidth || document.body.clientWidth;
      }
      static windowHeightWithoutScrollbar() {
        return document.documentElement.clientHeight || document.body.clientHeight;
      }
      static outerWidthWithMargin(el) {
        return el.offsetWidth + parseInt(getComputedStyle(el).marginLeft) + parseInt(getComputedStyle(el).marginRight);
      }
      static outerHeightWithMargin(el) {
        return el.offsetHeight + parseInt(getComputedStyle(el).marginTop) + parseInt(getComputedStyle(el).marginBottom);
      }
      static async cursorPosition() {
        document.head.insertAdjacentHTML("afterbegin", '\n                <style type="text/css">\n                    .find-pointer-quad {\n                        --hit: 0;\n                        position: fixed;\n	                    z-index:2147483647;\n                        transform: translateZ(0);\n                        &:hover { --hit: 1; }\n                    }\n                </style>\n            ');
        window.cursorPositionDelay = 50;
        window.cursorPositionQuads = [];
        let dim = 10;
        let createQuad = (_, pos) => {
          let a = document.createElement("a");
          a.classList.add("find-pointer-quad");
          let {
            style
          } = a;
          style.top = pos < 2 ? 0 : "".concat(dim, "%");
          style.left = pos % 2 === 0 ? 0 : "".concat(dim, "%");
          style.width = style.height = "".concat(dim, "%");
          document.body.appendChild(a);
          return a;
        };
        window.cursorPositionQuads = [1, 2, 3, 4].map(createQuad);
        return this.cursorPositionBisect(dim);
      }
      static cursorPositionBisect(dim) {
        let hit;
        window.cursorPositionQuads.some((a2) => {
          let style2 = getComputedStyle(a2);
          let result = style2.getPropertyValue("--hit");
          if (result === "1") return hit = {
            style: style2,
            a: a2
          };
        });
        if (!hit) {
          let [q1] = window.cursorPositionQuads;
          let reset = Math.abs(dim) > 1e4;
          let top2 = parseFloat(q1.style.top) - dim / 2;
          let left2 = parseFloat(q1.style.left) - dim / 2;
          window.cursorPositionQuads.forEach((_ref6, pos) => {
            let {
              style: style2
            } = _ref6;
            if (reset) {
              style2.top = pos < 2 ? 0 : "".concat(dim, "%");
              style2.left = pos % 2 === 0 ? 0 : "".concat(dim, "%");
              style2.width = style2.height = "".concat(dim, "%");
            } else {
              style2.top = pos < 2 ? "".concat(top2, "%") : "".concat(top2 + dim, "%");
              style2.left = pos % 2 === 0 ? "".concat(left2, "%") : "".concat(left2 + dim, "%");
              style2.width = "".concat(dim, "%");
              style2.height = "".concat(dim, "%");
            }
          });
          return new Promise((resolve) => {
            setTimeout(() => resolve(this.cursorPositionBisect(!reset ? 2 * dim : dim)), window.cursorPositionDelay);
          });
        }
        let {
          style,
          a
        } = hit;
        let {
          top,
          left,
          width,
          height
        } = a.getBoundingClientRect();
        if (width < 3) {
          window.cursorPositionQuads.forEach((a2) => a2.remove());
          return {
            x: Math.round(left + width / 2 + window.scrollX),
            y: Math.round(top + height / 2 + window.scrollY)
          };
        }
        let ox = a.style.left;
        let oy = a.style.top;
        let nextStep = dim / 2;
        window.cursorPositionQuads.forEach((_ref7, pos) => {
          let {
            style: style2
          } = _ref7;
          style2.top = pos < 2 ? oy : "".concat(nextStep + parseFloat(oy), "%");
          style2.left = pos % 2 === 0 ? ox : "".concat(nextStep + parseFloat(ox), "%");
          style2.width = "".concat(nextStep, "%");
          style2.height = "".concat(nextStep, "%");
        });
        return new Promise((resolve) => {
          setTimeout(() => resolve(this.cursorPositionBisect(nextStep)), window.cursorPositionDelay);
        });
      }
      static scrollTo(to) {
        let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
        let element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        let offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        let only_up = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        return new Promise((resolve) => {
          if (element === null) {
            element = document.scrollingElement || document.documentElement;
          }
          if (!hlp2.isNumeric(to)) {
            if (element === (document.scrollingElement || documentElement)) {
              to = this.offsetTopWithMargin(to);
            } else {
              to = to.getBoundingClientRect().top - parseInt(getComputedStyle(to).marginTop) - (element.getBoundingClientRect().top - element.scrollTop - parseInt(getComputedStyle(element).marginTop));
            }
          }
          let offset_calc = 0;
          if (!Array.isArray(offset)) {
            offset = [offset];
          }
          offset.forEach((offset__value) => {
            if (hlp2.isNumeric(offset__value)) {
              offset_calc += offset__value;
            } else {
              if (offset__value !== null) {
                if (window.getComputedStyle(offset__value).position === "fixed") {
                  offset_calc += -1 * offset__value.offsetHeight;
                }
              }
            }
          });
          to += offset_calc;
          const start = element.scrollTop, change = to - start, startDate = +/* @__PURE__ */ new Date(), easeInOutCirc = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            t -= 2;
            return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
          }, animateScroll = function() {
            const currentDate = +/* @__PURE__ */ new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutCirc(currentTime, start, change, duration));
            if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
            } else {
              element.scrollTop = to;
              resolve();
            }
          };
          if (only_up === true && change > 0) {
            resolve();
            return;
          }
          animateScroll();
        });
      }
      static loadJs(urls) {
        if (!hlp2.isArray(urls)) {
          urls = [urls];
        }
        let promises = [];
        hlp2.loop(urls, (urls__value, urls__key) => {
          promises.push(new Promise((resolve, reject) => {
            let script2 = document.createElement("script");
            script2.src = urls__value;
            script2.onload = () => {
              resolve();
            };
            document.head.appendChild(script2);
          }));
        });
        return Promise.all(promises);
      }
      static async loadJsSequentially(urls) {
        if (!hlp2.isArray(urls)) {
          urls = [urls];
        }
        for (let urls__value of urls) {
          await hlp2.loadJs(urls__value);
        }
        return;
      }
      static triggerAfterAllImagesLoaded(selectorContainer, selectorImage, fn) {
        window.addEventListener("load", (e) => {
          if (document.querySelector(selectorContainer + " " + selectorImage) !== null) {
            document.querySelectorAll(selectorContainer + " " + selectorImage).forEach((el) => {
              this.triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn);
            });
          }
        });
        document.addEventListener("DOMContentLoaded", () => {
          if (document.querySelector(selectorContainer) !== null) {
            new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                  mutation.addedNodes.forEach((el) => {
                    this.triggerAfterAllImagesLoadedHandleEl(el, selectorContainer, selectorImage, fn);
                  });
                } else if (mutation.type === "attributes" && mutation.attributeName === "src" && mutation.target.classList.contains(selectorImage.replace(".", "")) && mutation.oldValue !== mutation.target.getAttribute("src")) {
                  this.triggerAfterAllImagesLoadedHandleEl(mutation.target, selectorContainer, selectorImage, fn);
                }
              });
            }).observe(document.querySelector(selectorContainer), {
              attributes: true,
              childList: true,
              characterData: false,
              subtree: true,
              attributeOldValue: true,
              characterDataOldValue: false
            });
          }
        });
      }
      static triggerAfterAllImagesLoadedHandleEl(el, selectorContainer, selectorImage, fn) {
        if (el.nodeType === Node.ELEMENT_NODE) {
          el.classList.remove("loaded-img");
          el.closest(selectorContainer).classList.remove("loaded-all");
          if (!el.classList.contains("binded-trigger")) {
            el.classList.add("binded-trigger");
            el.addEventListener("load", () => {
              this.triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn);
            });
          }
        }
      }
      static triggerAfterAllImagesLoadedBindLoadEvent(el, selectorContainer, selectorImage, fn) {
        el.classList.add("loaded-img");
        if (el.closest(selectorContainer).querySelectorAll(".loaded-img").length === el.closest(selectorContainer).querySelectorAll(selectorImage).length) {
          el.closest(selectorContainer).classList.add("loaded-all");
          fn();
        }
      }
      static isVisible(el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
      }
      static isVisibleInViewport(el) {
        if (!this.isVisible(el)) {
          return false;
        }
        let rect = el.getBoundingClientRect();
        return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight);
      }
      static textareaAutoHeight() {
        let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "textarea";
        this.textareaSetHeights(selector);
        this.onResizeHorizontal(() => {
          this.textareaSetHeights(selector);
        });
        [].forEach.call(document.querySelectorAll(selector), (el) => {
          el.addEventListener("keyup", (e) => {
            this.textareaSetHeight(e.target);
          });
        });
      }
      static textareaSetHeights() {
        let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "textarea";
        [].forEach.call(document.querySelectorAll(selector), (el) => {
          if (this.isVisible(el)) {
            this.textareaSetHeight(el);
          }
        });
      }
      static textareaSetHeight(el) {
        el.style.height = "5px";
        el.style.height = el.scrollHeight + "px";
      }
      static real100vh() {
        let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let percent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        if (selector === null) {
          let fn = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
          };
          fn();
          window.addEventListener("resize", () => {
            fn();
          });
        } else {
          let fn = () => {
            console.log(selector);
            if (document.querySelector(selector) !== null) {
              document.querySelectorAll(selector).forEach((selector__value) => {
                selector__value.style.height = window.innerHeight * (percent / 100) + "px";
              });
            }
          };
          fn();
          window.addEventListener("resize", () => {
            fn();
          });
        }
      }
      static iOsRemoveHover() {
        if (hlp2.getBrowser() === "safari" && hlp2.getDevice() !== "desktop") {
          hlp2.on("touchend", "a", (e, el) => {
            el.click();
          });
        }
      }
      static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      static animate(el, from, to, easing, duration) {
        return new Promise((resolve) => {
          if (duration <= 50) {
            duration = 50;
          }
          let properties = [];
          from.split(";").forEach((from__value) => {
            properties.push(from__value.split(":")[0].trim());
          });
          let transition = [];
          properties.forEach((properties__value) => {
            transition.push(properties__value + " " + Math.round(duration / 1e3 * 10) / 10 + "s " + easing);
          });
          transition = "transition: " + transition.join(", ") + " !important;";
          let els = null;
          if (NodeList.prototype.isPrototypeOf(el)) {
            els = Array.from(el);
          } else if (el === null) {
            console.log("cannot animate element from " + from + " to " + to + " because it does not exist");
            resolve();
          } else {
            els = [el];
          }
          let toFinish = els.length;
          els.forEach((els__value, els__key) => {
            let random_class = hlp2.random_string(10, "abcdefghijklmnopqrstuvwxyz");
            els__value.classList.add(random_class);
            window.requestAnimationFrame(() => {
              let new_style = [];
              let prev_style = els__value.getAttribute("style");
              if (prev_style !== null) {
                prev_style.split(";").forEach((prev_style__value) => {
                  if (prev_style__value != "" && !properties.includes(prev_style__value.split(":")[0].trim())) {
                    new_style.push(prev_style__value);
                  }
                });
              }
              if (new_style.length > 0) {
                new_style = new_style.join(";") + ";" + from + ";";
              } else {
                new_style = from + ";";
              }
              els__value.setAttribute("style", new_style);
              window.requestAnimationFrame(() => {
                let style = document.createElement("style");
                style.innerHTML = "." + random_class + " { " + transition + " }";
                document.head.appendChild(style);
                window.requestAnimationFrame(() => {
                  els__value.setAttribute("style", els__value.getAttribute("style").replace(from + ";", "") + to + ";");
                  if (this.isVisible(els__value)) {
                    let fired = false;
                    hlp2.addEventListenerOnce(els__value, "transitionend", (event) => {
                      fired = true;
                      if (event.target !== event.currentTarget) {
                        return false;
                      }
                      if (document.head.contains(style)) {
                        document.head.removeChild(style);
                      }
                      els__value.classList.remove(random_class);
                      toFinish--;
                      if (toFinish <= 0) {
                        window.requestAnimationFrame(() => {
                          resolve();
                        });
                      }
                    });
                    setTimeout(() => {
                      if (fired === false) {
                        if (document.head.contains(style)) {
                          document.head.removeChild(style);
                        }
                        els__value.classList.remove(random_class);
                        toFinish--;
                        if (toFinish <= 0) {
                          resolve();
                        }
                      }
                    }, duration * 1.5);
                  } else {
                    if (document.head.contains(style)) {
                      document.head.removeChild(style);
                    }
                    els__value.classList.remove(random_class);
                    toFinish--;
                    if (toFinish <= 0) {
                      resolve();
                    }
                  }
                });
              });
            });
          });
        });
      }
      static addEventListenerOnce(target, type, listener, addOptions, removeOptions) {
        target.addEventListener(type, function fn(event) {
          let result = listener.apply(this, arguments, addOptions);
          if (result !== false) {
            target.removeEventListener(type, fn, removeOptions);
          }
        });
      }
      static htmlDecode(value) {
        let tmp = document.createElement("textarea");
        tmp.innerHTML = value;
        return tmp.value;
      }
      static htmlEncode(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/`/g, "&#96;");
      }
      static nl2br(str) {
        if (typeof str === "undefined" || str === null) {
          return "";
        }
        let breakTag = "<br/>", replaceStr = "$1" + breakTag;
        return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
      }
      static br2nl(str) {
        if (typeof str === "undefined" || str === null) {
          return "";
        }
        let replaceStr = "\n";
        return str.replace(/<\s*\/?br\s*[\/]?>/gi, replaceStr);
      }
      static closest(el, selector) {
        if (!document.documentElement.contains(el)) {
          return null;
        }
        do {
          if (this.matches(el, selector)) {
            return el;
          }
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      }
      static matches(el, selector) {
        let node = el, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
        while (nodes[++i] && nodes[i] != node) ;
        return !!nodes[i];
      }
      static wrap(el, html2) {
        if (el === null) {
          return;
        }
        let wrapper = new DOMParser().parseFromString(html2, "text/html").body.childNodes[0];
        el.parentNode.insertBefore(wrapper, el.nextSibling);
        wrapper.appendChild(el);
      }
      static wrapTextNodes(el, tag) {
        if (el === null) {
          return;
        }
        Array.from(el.childNodes).filter((node) => node.nodeType === 3 && node.textContent.trim().length > 1).forEach((node) => {
          const wrapper = document.createElement(tag);
          node.after(wrapper);
          wrapper.appendChild(node);
        });
      }
      static html2dom(html2) {
        let template = document.createElement("template");
        html2 = html2.trim();
        template.innerHTML = html2;
        if (template.content === void 0) {
          return this.html2domLegacy(html2);
        }
        return template.content.firstChild;
      }
      static html2domLegacy(html2) {
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, wrapMap = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        }, context = document;
        var tmp, tag, wrap, j, fragment = context.createDocumentFragment();
        if (!rhtml.test(html2)) {
          fragment.appendChild(context.createTextNode(html2));
        } else {
          tmp = fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(html2) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + html2.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          fragment.removeChild(fragment.firstChild);
          while (tmp.firstChild) {
            fragment.appendChild(tmp.firstChild);
          }
        }
        return fragment.querySelector("*");
      }
      static prev(elem, filter) {
        let prev = elem.previousElementSibling;
        if (prev === null) {
          return null;
        }
        if (filter === void 0 || this.matches(prev, filter)) {
          return prev;
        }
        return null;
      }
      static next(elem, filter) {
        let next = elem.nextElementSibling;
        if (next === null) {
          return null;
        }
        if (filter === void 0 || this.matches(next, filter)) {
          return next;
        }
        return null;
      }
      static prevAll(elem, filter) {
        let sibs = [];
        while (elem = elem.previousElementSibling) {
          if (filter === void 0 || this.matches(elem, filter)) {
            sibs.push(elem);
          }
        }
        return sibs;
      }
      static nextAll(elem, filter) {
        let sibs = [];
        while (elem = elem.nextElementSibling) {
          if (filter === void 0 || this.matches(elem, filter)) {
            sibs.push(elem);
          }
        }
        return sibs;
      }
      static prevUntil(elem, filter) {
        let sibs = [];
        while (elem = elem.previousElementSibling) {
          if (!this.matches(elem, filter)) {
            sibs.push(elem);
          } else {
            break;
          }
        }
        return sibs;
      }
      static nextUntil(elem, filter) {
        let sibs = [];
        while (elem = elem.nextElementSibling) {
          if (!this.matches(elem, filter)) {
            sibs.push(elem);
          } else {
            break;
          }
        }
        return sibs;
      }
      static siblings(elem, filter) {
        let sibs = [];
        let self2 = elem;
        elem = elem.parentNode.firstChild;
        while (elem = elem.nextElementSibling) {
          if (filter === void 0 || this.matches(elem, filter)) {
            if (self2 !== elem) {
              sibs.push(elem);
            }
          }
        }
        return sibs;
      }
      static parents(elem, selector) {
        let elements = [];
        let ishaveselector = selector !== void 0;
        while ((elem = elem.parentElement) !== null) {
          if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue;
          }
          if (!ishaveselector || this.matches(elem, selector)) {
            elements.push(elem);
          }
        }
        return elements;
      }
      static css(el) {
        let sheets = document.styleSheets, o = {};
        for (let sheets__key in sheets) {
          try {
            let rules = sheets[sheets__key].rules || sheets[sheets__key].cssRules;
            for (let rules__key in rules) {
              if (this.matches(el, rules[rules__key].selectorText)) {
                o = Object.assign(o, this.css2json(rules[rules__key].style), this.css2json(el.getAttribute("style")));
              }
            }
          } catch (e) {
          }
        }
        return o;
      }
      static css2json(css) {
        let obj = {};
        if (!css) {
          return obj;
        }
        if (css instanceof CSSStyleDeclaration) {
          for (let css__key in css) {
            if (css[css__key].toLowerCase && css[css[css__key]] !== void 0) {
              obj[css[css__key].toLowerCase()] = css[css[css__key]];
            }
          }
        } else if (typeof css == "string") {
          css = css.split(";");
          for (let css__key in css) {
            if (css[css__key].indexOf(":") > -1) {
              let val = css[css__key].split(":");
              obj[val[0].toLowerCase().trim()] = val[1].trim();
            }
          }
        }
        return obj;
      }
      static compareDates(d1, d2) {
        if (typeof d1 === "string") {
          d1 = d1.split(" ").join("T");
        }
        if (typeof d2 === "string") {
          d2 = d2.split(" ").join("T");
        }
        d1 = new Date(d1);
        d2 = new Date(d2);
        d1.setHours(0);
        d1.setMinutes(0);
        d1.setSeconds(0);
        d1.setMilliseconds(0);
        d2.setHours(0);
        d2.setMinutes(0);
        d2.setSeconds(0);
        d2.setMilliseconds(0);
        if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
          return 0;
        }
        if (d1 < d2) {
          return -1;
        }
        return 1;
      }
      static spaceship(val1, val2) {
        if (val1 === null || val2 === null || typeof val1 != typeof val2) {
          return null;
        }
        if (typeof val1 === "string") {
          return val1.localeCompare(val2);
        } else {
          if (val1 > val2) {
            return 1;
          } else if (val1 < val2) {
            return -1;
          }
          return 0;
        }
      }
      static querySelectorAllShadowDom(selector) {
        let traverse = function($parent) {
          $els = [];
          if ($parent.querySelector("*") !== null) {
            $parent.querySelectorAll("*").forEach(($el) => {
              $els.push($el);
              if ($el.shadowRoot !== void 0 && $el.shadowRoot !== null) {
                $els = $els.concat(traverse($el.shadowRoot));
              }
            });
          }
          return $els;
        };
        let fragment = document.createDocumentFragment();
        $els = traverse(document);
        $els.forEach(($el) => {
          if ($el.matches(selector)) {
            fragment.appendChild($el.cloneNode());
          }
        });
        return fragment.childNodes;
      }
      static focus(selector) {
        hlp2.unfocus();
        let el = null;
        if (typeof selector === "string" || selector instanceof String) {
          el = document.querySelector(selector);
        } else {
          el = selector;
        }
        if (el !== null) {
          let mask = document.createElement("div");
          mask.classList.add("hlp-focus-mask");
          mask.style.position = "fixed";
          mask.style.top = 0;
          mask.style.bottom = 0;
          mask.style.left = 0;
          mask.style.right = 0;
          mask.style.backgroundColor = "rgba(0,0,0,0.8)";
          mask.style.zIndex = 2147483646;
          el.before(mask);
          el.setAttribute("data-focussed", 1);
          el.setAttribute("data-focussed-orig-z-index", el.style.zIndex);
          el.setAttribute("data-focussed-orig-position", el.style.position);
          el.setAttribute("data-focussed-orig-background-color", el.style.backgroundColor);
          el.setAttribute("data-focussed-orig-box-shadow", el.style.boxShadow);
          el.style.zIndex = 2147483647;
          el.style.position = "relative";
          el.style.backgroundColor = "#ffffff";
          el.style.boxShadow = "0px 0px 0px 20px #fff";
        }
      }
      static unfocus() {
        if (document.querySelector(".hlp-focus-mask") !== null) {
          document.querySelectorAll(".hlp-focus-mask").forEach((el) => {
            hlp2.remove(el);
          });
        }
        if (document.querySelector("[data-focussed]") !== null) {
          document.querySelectorAll("[data-focussed]").forEach((el) => {
            el.style.zIndex = el.getAttribute("data-focussed-orig-z-index");
            el.style.position = el.getAttribute("data-focussed-orig-position");
            el.style.backgroundColor = el.getAttribute("data-focussed-orig-background-color");
            el.style.boxShadow = el.getAttribute("data-focussed-orig-box-shadow");
            el.removeAttribute("data-focussed");
            el.removeAttribute("data-focussed-orig-z-index");
            el.removeAttribute("data-focussed-orig-position");
            el.removeAttribute("data-focussed-orig-background-color");
            el.removeAttribute("data-focussed-orig-box-shadow");
          });
        }
      }
      static remove(el) {
        if (el !== null) {
          el.parentNode.removeChild(el);
        }
      }
      static on(event, selector, scope) {
        let callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        if (callback === null) {
          callback = scope;
          scope = document;
        } else {
          scope = document.querySelector(scope);
        }
        scope.addEventListener(event, (e) => {
          var el = hlp2.closest(e.target, selector);
          if (el) {
            callback(e, el);
          }
        }, false);
      }
      static url() {
        return window.location.protocol + "//" + window.location.host + window.location.pathname;
      }
      static urlWithHash() {
        return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
      }
      static fullUrl() {
        return window.location.href;
      }
      static urlWithArgs() {
        return window.location.href.split("#")[0];
      }
      static baseUrl() {
        return window.location.protocol + "//" + window.location.host;
      }
      static urlProtocol() {
        return window.location.protocol + "//";
      }
      static urlHost() {
        return window.location.host;
      }
      static urlHostTopLevel() {
        let host = window.location.host;
        if (host.match(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/)) {
          return host;
        }
        host = host.split(".");
        while (host.length > 2) {
          host.shift();
        }
        host = host.join(".");
        return host;
      }
      static urlPath() {
        return window.location.pathname;
      }
      static urlHash() {
        return window.location.hash;
      }
      static urlArgs() {
        return window.location.search;
      }
      static urlOfScript() {
        if (document.currentScript) {
          return document.currentScript.src;
        } else {
          let scripts = document.getElementsByTagName("script");
          return scripts[scripts.length - 1].src;
        }
      }
      static pathOfScript() {
        let script2 = this.urlOfScript(), path = script2.substring(0, script2.lastIndexOf("/"));
        return path;
      }
      static waitUntil(selector) {
        let css_option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        let css_value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return new Promise((resolve, reject) => {
          let timeout = setInterval(() => {
            if (document.querySelector(selector) !== null && (css_option === null || css_value === null && window.getComputedStyle(document.querySelector(selector))[css_option] !== void 0 && window.getComputedStyle(document.querySelector(selector))[css_option] != "" || css_value !== null && window.getComputedStyle(document.querySelector(selector))[css_option] === css_value)) {
              window.clearInterval(timeout);
              resolve();
            }
          }, 30);
        });
      }
      static waitUntilEach(selector, callback) {
        let observer = new MutationObserver(() => {
          let elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            elements.forEach((element) => {
              if (!element.__processed) {
                element.__processed = true;
                callback(element);
              }
            });
          }
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
        let initialElements = document.querySelectorAll(selector);
        if (initialElements.length > 0) {
          initialElements.forEach((element) => {
            if (!element.__processed) {
              element.__processed = true;
              callback(element);
            }
          });
        }
      }
      static waitUntilVar() {
        let arg1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let arg2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        let varName = null, parentContainer = null;
        if (arg2 === null) {
          varName = arg1;
          parentContainer = window;
        } else {
          varName = arg2;
          parentContainer = arg1;
        }
        return new Promise((resolve, reject) => {
          let timeout = setInterval(() => {
            if (parentContainer[varName] !== void 0 && parentContainer[varName] !== null) {
              if (value === null || parentContainer[varName] === value) {
                window.clearInterval(timeout);
                resolve();
              }
            }
          }, 30);
        });
      }
      static ready() {
        return new Promise((resolve) => {
          if (document.readyState !== "loading") {
            return resolve();
          } else {
            document.addEventListener("DOMContentLoaded", () => {
              return resolve();
            });
          }
        });
      }
      static load() {
        return new Promise((resolve) => {
          if (document.readyState === "complete") {
            return resolve();
          } else {
            window.addEventListener("load", () => {
              return resolve();
            });
          }
        });
      }
      static runForEl(selector, callback) {
        hlp2.ready().then(() => {
          let id = hlp2.pushId();
          if (document.querySelector(selector) !== null) {
            document.querySelectorAll(selector).forEach((el) => {
              if (el.runForEl === void 0) {
                el.runForEl = [];
              }
              if (!el.runForEl.includes(id)) {
                el.runForEl.push(id);
                callback(el);
              }
            });
          }
          if (window.runForEl_queue === void 0) {
            window.runForEl_queue = [];
          }
          if (window.runForEl_observer === void 0) {
            window.runForEl_observer = new MutationObserver((mutations) => {
              mutations.forEach((mutations__value) => {
                if (!mutations__value.addedNodes) {
                  return;
                }
                for (let i = 0; i < mutations__value.addedNodes.length; i++) {
                  let node = mutations__value.addedNodes[i];
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    window.runForEl_queue.forEach((queue__value) => {
                      if (node.matches(queue__value.selector)) {
                        if (node.runForEl === void 0) {
                          node.runForEl = [];
                        }
                        if (!node.runForEl.includes(queue__value.id)) {
                          node.runForEl.push(queue__value.id);
                          queue__value.callback(node);
                        }
                      }
                      if (node.querySelector(queue__value.selector) !== null) {
                        node.querySelectorAll(queue__value.selector).forEach((nodes__value) => {
                          if (nodes__value.runForEl === void 0) {
                            nodes__value.runForEl = [];
                          }
                          if (!nodes__value.runForEl.includes(queue__value.id)) {
                            nodes__value.runForEl.push(queue__value.id);
                            queue__value.callback(nodes__value);
                          }
                        });
                      }
                    });
                  }
                }
              });
            }).observe(document.body, {
              attributes: false,
              childList: true,
              characterData: false,
              subtree: true,
              attributeOldValue: false,
              characterDataOldValue: false
            });
          }
          window.runForEl_queue.push({
            id,
            selector,
            callback
          });
        });
      }
      static fmath(op, x, y) {
        let precision = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 8;
        let n = {
          "*": x * y,
          "-": x - y,
          "+": x + y,
          "/": x / y
        }[op];
        return Math.round(n * 10 * Math.pow(10, precision)) / (10 * Math.pow(10, precision));
      }
      static trim(str, charlist) {
        let whitespace = [" ", "\n", "\r", "	", "\f", "\v", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "​", "\u2028", "\u2029", "　"].join("");
        let l = 0;
        let i = 0;
        str += "";
        if (charlist) {
          whitespace = (charlist + "").replace(/([[\]().?/*{}+$^:])/g, "$1");
        }
        l = str.length;
        for (i = 0; i < l; i++) {
          if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
          }
        }
        l = str.length;
        for (i = l - 1; i >= 0; i--) {
          if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
          }
        }
        return whitespace.indexOf(str.charAt(0)) === -1 ? str : "";
      }
      static ltrim(str, charlist) {
        charlist = !charlist ? " \\s " : (charlist + "").replace(/([[\]().?/*{}+$^:])/g, "$1");
        const re = new RegExp("^[" + charlist + "]+", "g");
        return (str + "").replace(re, "");
      }
      static rtrim(str, charlist) {
        charlist = !charlist ? " \\s " : (charlist + "").replace(/([[\]().?/*{}+$^:])/g, "\\$1");
        const re = new RegExp("[" + charlist + "]+$", "g");
        return (str + "").replace(re, "");
      }
      static truncate_string(str) {
        let len = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
        let chars = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "...";
        if (this.nx(str) || !(typeof str === "string" || str instanceof String)) {
          return str;
        }
        if (str.indexOf(" ") === -1) {
          if (str.length > len) {
            str = str.substring(0, len);
            str = hlp2.rtrim(str);
            str += " " + chars;
          }
        } else {
          if (str.length > len) {
            str = hlp2.rtrim(str);
            while (str.length > len && str.lastIndexOf(" ") > -1 && str.substring(len - 1, len) != " ") {
              str = str.substring(0, str.lastIndexOf(" "));
              str = hlp2.rtrim(str);
            }
            str = str.substring(0, len);
            str = hlp2.rtrim(str);
            str += " " + chars;
          }
        }
        return str;
      }
      static emojiRegex() {
        let global2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        return new RegExp(hlp2.emojiRegexPattern(), (global2 === true ? "g" : "") + "u");
      }
      static emojiRegexPattern() {
        return String.raw(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["p{RI}p{RI}|p{Extended_Pictographic}(p{EMod}|️⃣?|[󠀠-󠁾]+󠁿)?(‍(p{RI}p{RI}|p{Extended_Pictographic}(p{EMod}|️⃣?|[󠀠-󠁾]+󠁿)?))*"], ["\\p{RI}\\p{RI}|\\p{Extended_Pictographic}(\\p{EMod}|\\uFE0F\\u20E3?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u200D(\\p{RI}\\p{RI}|\\p{Extended_Pictographic}(\\p{EMod}|\\uFE0F\\u20E3?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?))*"])));
      }
      static emojiSplit(str) {
        if (!(typeof str === "string" || str instanceof String)) {
          return str;
        }
        return [...new Intl.Segmenter().segment(str)].map((x) => x.segment);
      }
      static serialize(mixedValue) {
        let val, key, okey;
        let ktype = "";
        let vals = "";
        let count = 0;
        const _utf8Size = function(str) {
          return ~-encodeURI(str).split(/%..|./).length;
        };
        const _getType = function(inp) {
          let match;
          let key2;
          let cons;
          let types;
          let type2 = typeof inp;
          if (type2 === "object" && !inp) {
            return "null";
          }
          if (type2 === "object") {
            if (!inp.constructor) {
              return "object";
            }
            cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
              cons = match[1].toLowerCase();
            }
            types = ["boolean", "number", "string", "array"];
            for (key2 in types) {
              if (cons === types[key2]) {
                type2 = types[key2];
                break;
              }
            }
          }
          return type2;
        };
        const type = _getType(mixedValue);
        switch (type) {
          case "function":
            val = "";
            break;
          case "boolean":
            val = "b:" + (mixedValue ? "1" : "0");
            break;
          case "number":
            val = (Math.round(mixedValue) === mixedValue ? "i" : "d") + ":" + mixedValue;
            break;
          case "string":
            val = "s:" + _utf8Size(mixedValue) + ':"' + mixedValue + '"';
            break;
          case "array":
          case "object":
            val = "a";
            for (key in mixedValue) {
              if (mixedValue.hasOwnProperty(key)) {
                ktype = _getType(mixedValue[key]);
                if (ktype === "function") {
                  continue;
                }
                okey = key.match(/^[0-9]+$/) ? parseInt(key, 10) : key;
                vals += this.serialize(okey) + this.serialize(mixedValue[key]);
                count++;
              }
            }
            val += ":" + count + ":{" + vals + "}";
            break;
          case "undefined":
          default:
            val = "N";
            break;
        }
        if (type !== "object" && type !== "array") {
          val += ";";
        }
        return val;
      }
      static unserialize(str) {
        try {
          if (typeof str !== "string") {
            return false;
          }
          const store = [];
          const cache = (value) => {
            store.push(value[0]);
            return value;
          };
          cache.get = (index) => {
            if (index >= store.length) {
              throw RangeError("Can't resolve reference ".concat(index + 1));
            }
            return store[index];
          };
          const expectType = (s) => {
            const types = /^(?:N(?=;)|[bidsSaOCrR](?=:)|[^:]+(?=:))/g;
            const type = (types.exec(s) || [])[0];
            if (!type) throw SyntaxError("Invalid input: " + s);
            switch (type) {
              case "N":
                return cache([null, 2]);
              case "b":
                return cache(expectBool(s));
              case "i":
                return cache(expectInt(s));
              case "d":
                return cache(expectFloat(s));
              case "s":
                return cache(expectString(s));
              case "S":
                return cache(expectEscapedString(s));
              case "a":
                return expectArray(s);
              case "O":
                return expectObject(s);
              case "C":
                throw Error("Not yet implemented");
              case "r":
              case "R":
                return expectReference(s);
              default:
                throw SyntaxError("Invalid or unsupported data type: ".concat(type));
            }
          };
          const expectBool = (s) => {
            const reBool = /^b:([01]);/;
            const [match, boolMatch] = reBool.exec(s) || [];
            if (!boolMatch) throw SyntaxError("Invalid bool value, expected 0 or 1");
            return [boolMatch === "1", match.length];
          };
          const expectInt = (s) => {
            const reInt = /^i:([+-]?\d+);/;
            const [match, intMatch] = reInt.exec(s) || [];
            if (!intMatch) throw SyntaxError("Expected an integer value");
            return [parseInt(intMatch, 10), match.length];
          };
          const expectFloat = (s) => {
            const reFloat = /^d:(NAN|-?INF|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+-]\d+)?);/;
            const [match, floatMatch] = reFloat.exec(s) || [];
            if (!floatMatch) throw SyntaxError("Expected a float value");
            return [floatMatch === "NAN" ? Number.NaN : floatMatch === "-INF" ? Number.NEGATIVE_INFINITY : floatMatch === "INF" ? Number.POSITIVE_INFINITY : parseFloat(floatMatch), match.length];
          };
          const expectString = (s) => {
            const reStrLength = /^s:(\d+):"/g;
            const [match, byteLenMatch] = reStrLength.exec(s) || [];
            if (!match) throw SyntaxError("Expected a string value");
            const len = parseInt(byteLenMatch, 10);
            s = s.substr(match.length);
            const strMatch = s.substr(0, len);
            s = s.substr(len);
            if (!s.startsWith('";')) throw SyntaxError('Expected ";');
            return [strMatch, match.length + len + 2];
          };
          const expectEscapedString = (s) => {
            const reStrLength = /^S:(\d+):"/g;
            const [match, strLenMatch] = reStrLength.exec(s) || [];
            if (!match) throw SyntaxError("Expected an escaped string value");
            const len = parseInt(strLenMatch, 10);
            s = s.substr(match.length);
            const strMatch = s.substr(0, len);
            s = s.substr(len);
            if (!s.startsWith('";')) throw SyntaxError('Expected ";');
            return [strMatch, match.length + len + 2];
          };
          const expectReference = (s) => {
            const reRef = /^[rR]:(\d+);/;
            const [match, refIndex] = reRef.exec(s) || [];
            if (!match) throw SyntaxError("Expected reference value");
            return [cache.get(parseInt(refIndex, 10) - 1), match.length];
          };
          const expectArray = (s) => {
            const reArrayLength = /^a:(\d+):\{/;
            const [arrayLiteralBeginMatch, arrayLengthMatch] = reArrayLength.exec(s) || [];
            if (!arrayLengthMatch) throw SyntaxError("Expected array length annotation");
            s = s.substr(arrayLiteralBeginMatch.length);
            const items = {};
            cache([items]);
            for (let i = 0; i < parseInt(arrayLengthMatch, 10); i++) {
              const key = expectType(s);
              s = s.substr(key[1]);
              const value = expectType(s);
              s = s.substr(value[1]);
              items[key[0]] = value[0];
            }
            if (s.charAt(0) !== "}") throw SyntaxError("Expected }");
            return [items, arrayLiteralBeginMatch.length + 1];
          };
          const expectObject = (s) => {
            const reObjectLiteral = /^O:(\d+):"([^\"]+)":(\d+):\{/;
            const [match, , className, propCountMatch] = reObjectLiteral.exec(s) || [];
            if (!match) throw SyntaxError("Invalid input");
            if (className !== "stdClass") throw SyntaxError("Unsupported object type: ".concat(className));
            let obj = {};
            cache([obj]);
            s = s.substr(match.length);
            for (let i = 0; i < parseInt(propCountMatch, 10); i++) {
              const prop = expectType(s);
              s = s.substr(prop[1]);
              const value = expectType(s);
              s = s.substr(value[1]);
              obj[prop[0]] = value[0];
            }
            if (s.charAt(0) !== "}") throw SyntaxError("Expected }");
            return [obj, match.length + 1];
          };
          return expectType(str)[0];
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      static pushId() {
        let pushIdData = null;
        if (window !== void 0) {
          if (window.pushIdDataGlobal === void 0) {
            window.pushIdDataGlobal = {};
          }
          pushIdData = window.pushIdDataGlobal;
        }
        if (commonjsGlobal !== void 0) {
          if (commonjsGlobal.pushIdDataGlobal === void 0) {
            commonjsGlobal.pushIdDataGlobal = {};
          }
          pushIdData = commonjsGlobal.pushIdDataGlobal;
        }
        if (hlp2.objectsAreEqual(pushIdData, {})) {
          pushIdData.lastPushTime = 0;
          pushIdData.lastRandChars = [];
          pushIdData.PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
        }
        let now = (/* @__PURE__ */ new Date()).getTime(), duplicateTime = now === pushIdData.lastPushTime;
        pushIdData.lastPushTime = now;
        let timeStampChars = new Array(8);
        for (var i = 7; i >= 0; i--) {
          timeStampChars[i] = pushIdData.PUSH_CHARS.charAt(now % 64);
          now = Math.floor(now / 64);
        }
        if (now !== 0) {
          throw new Error();
        }
        let id = timeStampChars.join("");
        if (!duplicateTime) {
          for (i = 0; i < 12; i++) {
            pushIdData.lastRandChars[i] = Math.floor(Math.random() * 64);
          }
        } else {
          for (i = 11; i >= 0 && pushIdData.lastRandChars[i] === 63; i--) {
            pushIdData.lastRandChars[i] = 0;
          }
          pushIdData.lastRandChars[i]++;
        }
        for (i = 0; i < 12; i++) {
          id += pushIdData.PUSH_CHARS.charAt(pushIdData.lastRandChars[i]);
        }
        if (id.length != 20) {
          throw new Error();
        }
        return id;
      }
      static getProp(obj, desc) {
        let arr = desc.split(".");
        while (arr.length && (obj = obj[arr.shift()])) ;
        return obj;
      }
      static base64toblob(base64) {
        let contentType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        let sliceSize = 512, byteCharacters = atob(base64), byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          let slice = byteCharacters.slice(offset, offset + sliceSize), byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          let byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, {
          type: contentType
        });
        return blob;
      }
      static blobtobase64(blob) {
        return new Promise((resolve) => {
          let reader = new FileReader();
          reader.onload = () => {
            var dataUrl = reader.result;
            var base64 = dataUrl.split(",")[1];
            resolve(base64);
          };
          reader.readAsDataURL(blob);
        });
      }
      static stringtoblob(string) {
        let contentType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        let blob = new Blob([string], {
          type: contentType
        });
        return blob;
      }
      static blobtostring(blob) {
        return new Promise((resolve) => {
          let reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsText(blob);
        });
      }
      static filetobase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = (error) => reject(error);
        });
      }
      static blobtofile(blob) {
        let filename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "file.txt";
        let file = null;
        try {
          file = new File([blob], filename);
        } catch (_unused) {
          file = new Blob([blob], filename);
        }
        return file;
      }
      static filetoblob(file) {
        return new Blob([file]);
      }
      static base64tofile(base64) {
        let contentType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        let filename = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "file.txt";
        return this.blobtofile(this.base64toblob(base64, contentType), filename);
      }
      static blobtourl(blob) {
        return URL.createObjectURL(blob, {
          type: "text/plain"
        });
      }
      static stringtourl(string) {
        return this.blobtourl(this.stringtoblob(string));
      }
      static base64tostring(base64) {
        return atob(base64);
      }
      static stringtobase64(string) {
        return btoa(string);
      }
      static base64tourl(base64) {
        return this.blobtourl(this.base64toblob(base64));
      }
      static filetourl(file) {
        return this.blobtourl(this.filetoblob(file));
      }
      static getImageOrientation(base64) {
        return new Promise((resolve, reject) => {
          base64 = base64.replace("data:image/jpeg;base64,", "");
          let file = this.base64tofile(base64), reader = new FileReader();
          reader.onload = (e) => {
            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 65496) {
              resolve(-2);
              return;
            }
            var length = view.byteLength, offset = 2;
            while (offset < length) {
              if (view.getUint16(offset + 2, false) <= 8) {
                resolve(-1);
                return;
              }
              var marker = view.getUint16(offset, false);
              offset += 2;
              if (marker == 65505) {
                if (view.getUint32(offset += 2, false) != 1165519206) {
                  resolve(-1);
                  return;
                }
                var little = view.getUint16(offset += 6, false) == 18761;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++) {
                  if (view.getUint16(offset + i * 12, little) == 274) {
                    resolve(view.getUint16(offset + i * 12 + 8, little));
                    return;
                  }
                }
              } else if ((marker & 65280) != 65280) {
                break;
              } else {
                offset += view.getUint16(offset, false);
              }
            }
            resolve(-1);
            return;
          };
          reader.readAsArrayBuffer(file);
        });
      }
      static resetImageOrientation(srcBase64, srcOrientation) {
        return new Promise((resolve, reject) => {
          var img = new Image();
          img.onload = () => {
            var width = img.width, height = img.height, canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
            if (4 < srcOrientation && srcOrientation < 9) {
              canvas.width = height;
              canvas.height = width;
            } else {
              canvas.width = width;
              canvas.height = height;
            }
            switch (srcOrientation) {
              case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
              case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
              case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
              case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
              case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
              case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
              case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            }
            ctx.drawImage(img, 0, 0);
            let base64 = canvas.toDataURL();
            base64 = "data:image/jpeg;base64," + base64.split(",")[1];
            resolve(base64);
            return;
          };
          img.src = srcBase64;
        });
      }
      static fixImageOrientation(base64) {
        return new Promise((resolve, reject) => {
          if (base64.indexOf("data:") === -1) {
            resolve(base64);
            return;
          }
          if (base64.indexOf("data:image/jpeg;base64,") === 0) {
            base64 = base64.replace("data:image/jpeg;base64,", "");
          }
          this.getImageOrientation(base64).then((orientation) => {
            base64 = "data:image/jpeg;base64," + base64;
            if (orientation <= 1) {
              resolve(base64);
              return;
            } else {
              this.resetImageOrientation(base64, orientation).then((base64_new) => {
                resolve(base64_new);
                return;
              });
            }
          });
        });
      }
      static debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
      static throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
          previous = options.leading === false ? 0 : Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };
        return function() {
          var now = Date.now();
          if (!previous && options.leading === false) previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      }
      static shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      static findRecursiveInObject(object) {
        let key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        let path = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
        let paths = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
        if (object !== null && typeof object === "object") {
          for (const [object__key, object__value] of Object.entries(object)) {
            if (object__value !== null && typeof object__value === "object") {
              this.findRecursiveInObject(object__value, key, value, (path === "" ? "" : path + ".") + object__key, paths);
            } else if ((key === null || object__key === key) && (value === null || object__value === value)) {
              paths.push(path);
              break;
            }
          }
        }
        return paths;
      }
    }
    script$1.default = hlp2;
    if (typeof window !== "undefined") {
      window.hlp = {};
      Object.getOwnPropertyNames(hlp2).forEach((value, key) => {
        if (value === "length" || value === "name" || value === "prototype" || value === "caller" || value === "arguments") {
          return;
        }
        window.hlp[value] = hlp2[value];
      });
    }
    return script$1;
  }
  var scriptExports$1 = requireScript$1();
  const hlp = /* @__PURE__ */ getDefaultExportFromCjs(scriptExports$1);
  var svgInject = { exports: {} };
  var hasRequiredSvgInject;
  function requireSvgInject() {
    if (hasRequiredSvgInject) return svgInject.exports;
    hasRequiredSvgInject = 1;
    (function(module) {
      (function(window2, document2) {
        var _CREATE_ELEMENT_ = "createElement";
        var _GET_ELEMENTS_BY_TAG_NAME_ = "getElementsByTagName";
        var _LENGTH_ = "length";
        var _STYLE_ = "style";
        var _TITLE_ = "title";
        var _UNDEFINED_ = "undefined";
        var _SET_ATTRIBUTE_ = "setAttribute";
        var _GET_ATTRIBUTE_ = "getAttribute";
        var NULL = null;
        var __SVGINJECT = "__svgInject";
        var ID_SUFFIX = "--inject-";
        var ID_SUFFIX_REGEX = new RegExp(ID_SUFFIX + "\\d+", "g");
        var LOAD_FAIL = "LOAD_FAIL";
        var SVG_NOT_SUPPORTED = "SVG_NOT_SUPPORTED";
        var SVG_INVALID = "SVG_INVALID";
        var ATTRIBUTE_EXCLUSION_NAMES = ["src", "alt", "onload", "onerror"];
        var A_ELEMENT = document2[_CREATE_ELEMENT_]("a");
        var IS_SVG_SUPPORTED = typeof SVGRect != _UNDEFINED_;
        var DEFAULT_OPTIONS = {
          useCache: true,
          copyAttributes: true,
          makeIdsUnique: true
        };
        var IRI_TAG_PROPERTIES_MAP = {
          clipPath: ["clip-path"],
          "color-profile": NULL,
          cursor: NULL,
          filter: NULL,
          linearGradient: ["fill", "stroke"],
          marker: ["marker", "marker-end", "marker-mid", "marker-start"],
          mask: NULL,
          pattern: ["fill", "stroke"],
          radialGradient: ["fill", "stroke"]
        };
        var INJECTED = 1;
        var FAIL = 2;
        var uniqueIdCounter = 1;
        var xmlSerializer;
        var domParser;
        function svgStringToSvgDoc(svgStr) {
          domParser = domParser || new DOMParser();
          return domParser.parseFromString(svgStr, "text/xml");
        }
        function svgElemToSvgString(svgElement) {
          xmlSerializer = xmlSerializer || new XMLSerializer();
          return xmlSerializer.serializeToString(svgElement);
        }
        function getAbsoluteUrl(url) {
          A_ELEMENT.href = url;
          return A_ELEMENT.href;
        }
        function loadSvg(url, callback, errorCallback) {
          if (url) {
            var req = new XMLHttpRequest();
            req.onreadystatechange = function() {
              if (req.readyState == 4) {
                var status = req.status;
                if (status == 200) {
                  callback(req.responseXML, req.responseText.trim());
                } else if (status >= 400) {
                  errorCallback();
                } else if (status == 0) {
                  errorCallback();
                }
              }
            };
            req.open("GET", url, true);
            req.send();
          }
        }
        function copyAttributes(imgElem, svgElem) {
          var attribute;
          var attributeName;
          var attributeValue;
          var attributes = imgElem.attributes;
          for (var i = 0; i < attributes[_LENGTH_]; i++) {
            attribute = attributes[i];
            attributeName = attribute.name;
            if (ATTRIBUTE_EXCLUSION_NAMES.indexOf(attributeName) == -1) {
              attributeValue = attribute.value;
              if (attributeName == _TITLE_) {
                var titleElem;
                var firstElementChild = svgElem.firstElementChild;
                if (firstElementChild && firstElementChild.localName.toLowerCase() == _TITLE_) {
                  titleElem = firstElementChild;
                } else {
                  titleElem = document2[_CREATE_ELEMENT_ + "NS"]("http://www.w3.org/2000/svg", _TITLE_);
                  svgElem.insertBefore(titleElem, firstElementChild);
                }
                titleElem.textContent = attributeValue;
              } else {
                svgElem[_SET_ATTRIBUTE_](attributeName, attributeValue);
              }
            }
          }
        }
        function makeIdsUnique(svgElem, onlyReferenced) {
          var idSuffix = ID_SUFFIX + uniqueIdCounter++;
          var funcIriRegex = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g;
          var idElements = svgElem.querySelectorAll("[id]");
          var idElem;
          var tagName;
          var iriTagNames = {};
          var iriProperties = [];
          var changed = false;
          var i, j;
          if (idElements[_LENGTH_]) {
            for (i = 0; i < idElements[_LENGTH_]; i++) {
              tagName = idElements[i].localName;
              if (tagName in IRI_TAG_PROPERTIES_MAP) {
                iriTagNames[tagName] = 1;
              }
            }
            for (tagName in iriTagNames) {
              (IRI_TAG_PROPERTIES_MAP[tagName] || [tagName]).forEach(function(mappedProperty) {
                if (iriProperties.indexOf(mappedProperty) < 0) {
                  iriProperties.push(mappedProperty);
                }
              });
            }
            if (iriProperties[_LENGTH_]) {
              iriProperties.push(_STYLE_);
            }
            var descElements = svgElem[_GET_ELEMENTS_BY_TAG_NAME_]("*");
            var element = svgElem;
            var propertyName;
            var value;
            var newValue;
            for (i = -1; element != NULL; ) {
              if (element.localName == _STYLE_) {
                value = element.textContent;
                newValue = value && value.replace(funcIriRegex, function(match, id) {
                  return "url(#" + id + idSuffix + ")";
                });
                if (newValue !== value) {
                  element.textContent = newValue;
                }
              } else if (element.hasAttributes()) {
                for (j = 0; j < iriProperties[_LENGTH_]; j++) {
                  propertyName = iriProperties[j];
                  value = element[_GET_ATTRIBUTE_](propertyName);
                  newValue = value && value.replace(funcIriRegex, function(match, id) {
                    return "url(#" + id + idSuffix + ")";
                  });
                  if (newValue !== value) {
                    element[_SET_ATTRIBUTE_](propertyName, newValue);
                  }
                }
                ["xlink:href", "href"].forEach(function(refAttrName) {
                  var iri = element[_GET_ATTRIBUTE_](refAttrName);
                  if (/^\s*#/.test(iri)) {
                    iri = iri.trim();
                    element[_SET_ATTRIBUTE_](refAttrName, iri + idSuffix);
                  }
                });
              }
              element = descElements[++i];
            }
            for (i = 0; i < idElements[_LENGTH_]; i++) {
              idElem = idElements[i];
              {
                idElem.id += idSuffix;
                changed = true;
              }
            }
          }
          return changed;
        }
        function makeIdsUniqueCached(svgString) {
          return svgString.replace(ID_SUFFIX_REGEX, ID_SUFFIX + uniqueIdCounter++);
        }
        function inject(imgElem, svgElem, absUrl, options) {
          if (svgElem) {
            svgElem[_SET_ATTRIBUTE_]("data-inject-url", absUrl);
            var parentNode = imgElem.parentNode;
            if (parentNode) {
              if (options.copyAttributes) {
                copyAttributes(imgElem, svgElem);
              }
              var beforeInject = options.beforeInject;
              var injectElem = beforeInject && beforeInject(imgElem, svgElem) || svgElem;
              parentNode.replaceChild(injectElem, imgElem);
              imgElem[__SVGINJECT] = INJECTED;
              removeOnLoadAttribute(imgElem);
              var afterInject = options.afterInject;
              if (afterInject) {
                afterInject(imgElem, injectElem);
              }
            }
          } else {
            svgInvalid(imgElem, options);
          }
        }
        function mergeOptions() {
          var mergedOptions = {};
          var args = arguments;
          for (var i = 0; i < args[_LENGTH_]; i++) {
            var argument = args[i];
            for (var key in argument) {
              if (argument.hasOwnProperty(key)) {
                mergedOptions[key] = argument[key];
              }
            }
          }
          return mergedOptions;
        }
        function addStyleToHead(css) {
          var head = document2[_GET_ELEMENTS_BY_TAG_NAME_]("head")[0];
          if (head) {
            var style = document2[_CREATE_ELEMENT_](_STYLE_);
            style.type = "text/css";
            style.appendChild(document2.createTextNode(css));
            head.appendChild(style);
          }
        }
        function buildSvgElement(svgStr, verify) {
          if (verify) {
            var svgDoc;
            try {
              svgDoc = svgStringToSvgDoc(svgStr);
            } catch (e) {
              return NULL;
            }
            if (svgDoc[_GET_ELEMENTS_BY_TAG_NAME_]("parsererror")[_LENGTH_]) {
              return NULL;
            }
            return svgDoc.documentElement;
          } else {
            var div = document2.createElement("div");
            div.innerHTML = svgStr;
            return div.firstElementChild;
          }
        }
        function removeOnLoadAttribute(imgElem) {
          imgElem.removeAttribute("onload");
        }
        function errorMessage(msg) {
          console.error("SVGInject: " + msg);
        }
        function fail(imgElem, status, options) {
          imgElem[__SVGINJECT] = FAIL;
          if (options.onFail) {
            options.onFail(imgElem, status);
          } else {
            errorMessage(status);
          }
        }
        function svgInvalid(imgElem, options) {
          removeOnLoadAttribute(imgElem);
          fail(imgElem, SVG_INVALID, options);
        }
        function svgNotSupported(imgElem, options) {
          removeOnLoadAttribute(imgElem);
          fail(imgElem, SVG_NOT_SUPPORTED, options);
        }
        function loadFail(imgElem, options) {
          fail(imgElem, LOAD_FAIL, options);
        }
        function removeEventListeners(imgElem) {
          imgElem.onload = NULL;
          imgElem.onerror = NULL;
        }
        function imgNotSet(msg) {
          errorMessage("no img element");
        }
        function createSVGInject(globalName, options) {
          var defaultOptions = mergeOptions(DEFAULT_OPTIONS, options);
          var svgLoadCache = {};
          if (IS_SVG_SUPPORTED) {
            addStyleToHead('img[onload^="' + globalName + '("]{visibility:hidden;}');
          }
          function SVGInject(img, options2) {
            options2 = mergeOptions(defaultOptions, options2);
            var run = function(resolve) {
              var allFinish = function() {
                var onAllFinish = options2.onAllFinish;
                if (onAllFinish) {
                  onAllFinish();
                }
                resolve && resolve();
              };
              if (img && typeof img[_LENGTH_] != _UNDEFINED_) {
                var injectIndex = 0;
                var injectCount = img[_LENGTH_];
                if (injectCount == 0) {
                  allFinish();
                } else {
                  var finish = function() {
                    if (++injectIndex == injectCount) {
                      allFinish();
                    }
                  };
                  for (var i = 0; i < injectCount; i++) {
                    SVGInjectElement(img[i], options2, finish);
                  }
                }
              } else {
                SVGInjectElement(img, options2, allFinish);
              }
            };
            return typeof Promise == _UNDEFINED_ ? run() : new Promise(run);
          }
          function SVGInjectElement(imgElem, options2, callback) {
            if (imgElem) {
              var svgInjectAttributeValue = imgElem[__SVGINJECT];
              if (!svgInjectAttributeValue) {
                removeEventListeners(imgElem);
                if (!IS_SVG_SUPPORTED) {
                  svgNotSupported(imgElem, options2);
                  callback();
                  return;
                }
                var beforeLoad = options2.beforeLoad;
                var src = beforeLoad && beforeLoad(imgElem) || imgElem[_GET_ATTRIBUTE_]("src");
                if (!src) {
                  if (src === "") {
                    loadFail(imgElem, options2);
                  }
                  callback();
                  return;
                }
                var onFinishCallbacks = [];
                imgElem[__SVGINJECT] = onFinishCallbacks;
                var onFinish = function() {
                  callback();
                  onFinishCallbacks.forEach(function(onFinishCallback) {
                    onFinishCallback();
                  });
                };
                var absUrl = getAbsoluteUrl(src);
                var useCacheOption = options2.useCache;
                var makeIdsUniqueOption = options2.makeIdsUnique;
                var setSvgLoadCacheValue = function(val) {
                  if (useCacheOption) {
                    svgLoadCache[absUrl].forEach(function(svgLoad2) {
                      svgLoad2(val);
                    });
                    svgLoadCache[absUrl] = val;
                  }
                };
                if (useCacheOption) {
                  var svgLoad = svgLoadCache[absUrl];
                  var handleLoadValue = function(loadValue) {
                    if (loadValue === LOAD_FAIL) {
                      loadFail(imgElem, options2);
                    } else if (loadValue === SVG_INVALID) {
                      svgInvalid(imgElem, options2);
                    } else {
                      var hasUniqueIds = loadValue[0];
                      var svgString = loadValue[1];
                      var uniqueIdsSvgString = loadValue[2];
                      var svgElem;
                      if (makeIdsUniqueOption) {
                        if (hasUniqueIds === NULL) {
                          svgElem = buildSvgElement(svgString, false);
                          hasUniqueIds = makeIdsUnique(svgElem);
                          loadValue[0] = hasUniqueIds;
                          loadValue[2] = hasUniqueIds && svgElemToSvgString(svgElem);
                        } else if (hasUniqueIds) {
                          svgString = makeIdsUniqueCached(uniqueIdsSvgString);
                        }
                      }
                      svgElem = svgElem || buildSvgElement(svgString, false);
                      inject(imgElem, svgElem, absUrl, options2);
                    }
                    onFinish();
                  };
                  if (typeof svgLoad != _UNDEFINED_) {
                    if (svgLoad.isCallbackQueue) {
                      svgLoad.push(handleLoadValue);
                    } else {
                      handleLoadValue(svgLoad);
                    }
                    return;
                  } else {
                    var svgLoad = [];
                    svgLoad.isCallbackQueue = true;
                    svgLoadCache[absUrl] = svgLoad;
                  }
                }
                loadSvg(absUrl, function(svgXml, svgString) {
                  var svgElem = svgXml instanceof Document ? svgXml.documentElement : buildSvgElement(svgString, true);
                  var afterLoad = options2.afterLoad;
                  if (afterLoad) {
                    var svgElemOrSvgString = afterLoad(svgElem, svgString) || svgElem;
                    if (svgElemOrSvgString) {
                      var isString = typeof svgElemOrSvgString == "string";
                      svgString = isString ? svgElemOrSvgString : svgElemToSvgString(svgElem);
                      svgElem = isString ? buildSvgElement(svgElemOrSvgString, true) : svgElemOrSvgString;
                    }
                  }
                  if (svgElem instanceof SVGElement) {
                    var hasUniqueIds = NULL;
                    if (makeIdsUniqueOption) {
                      hasUniqueIds = makeIdsUnique(svgElem);
                    }
                    if (useCacheOption) {
                      var uniqueIdsSvgString = hasUniqueIds && svgElemToSvgString(svgElem);
                      setSvgLoadCacheValue([hasUniqueIds, svgString, uniqueIdsSvgString]);
                    }
                    inject(imgElem, svgElem, absUrl, options2);
                  } else {
                    svgInvalid(imgElem, options2);
                    setSvgLoadCacheValue(SVG_INVALID);
                  }
                  onFinish();
                }, function() {
                  loadFail(imgElem, options2);
                  setSvgLoadCacheValue(LOAD_FAIL);
                  onFinish();
                });
              } else {
                if (Array.isArray(svgInjectAttributeValue)) {
                  svgInjectAttributeValue.push(callback);
                } else {
                  callback();
                }
              }
            } else {
              imgNotSet();
            }
          }
          SVGInject.setOptions = function(options2) {
            defaultOptions = mergeOptions(defaultOptions, options2);
          };
          SVGInject.create = createSVGInject;
          SVGInject.err = function(img, fallbackSrc) {
            if (img) {
              if (img[__SVGINJECT] != FAIL) {
                removeEventListeners(img);
                if (!IS_SVG_SUPPORTED) {
                  svgNotSupported(img, defaultOptions);
                } else {
                  removeOnLoadAttribute(img);
                  loadFail(img, defaultOptions);
                }
                if (fallbackSrc) {
                  removeOnLoadAttribute(img);
                  img.src = fallbackSrc;
                }
              }
            } else {
              imgNotSet();
            }
          };
          window2[globalName] = SVGInject;
          return SVGInject;
        }
        var SVGInjectInstance = createSVGInject("SVGInject");
        {
          module.exports = SVGInjectInstance;
        }
      })(window, document);
    })(svgInject);
    return svgInject.exports;
  }
  requireSvgInject();
  var script = {};
  var es_json_stringify = {};
  var globalThis_1;
  var hasRequiredGlobalThis;
  function requireGlobalThis() {
    if (hasRequiredGlobalThis) return globalThis_1;
    hasRequiredGlobalThis = 1;
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    globalThis_1 = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof globalThis_1 == "object" && globalThis_1) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
    return globalThis_1;
  }
  var objectGetOwnPropertyDescriptor = {};
  var fails;
  var hasRequiredFails;
  function requireFails() {
    if (hasRequiredFails) return fails;
    hasRequiredFails = 1;
    fails = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    return fails;
  }
  var descriptors;
  var hasRequiredDescriptors;
  function requireDescriptors() {
    if (hasRequiredDescriptors) return descriptors;
    hasRequiredDescriptors = 1;
    var fails2 = requireFails();
    descriptors = !fails2(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
    return descriptors;
  }
  var functionBindNative;
  var hasRequiredFunctionBindNative;
  function requireFunctionBindNative() {
    if (hasRequiredFunctionBindNative) return functionBindNative;
    hasRequiredFunctionBindNative = 1;
    var fails2 = requireFails();
    functionBindNative = !fails2(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
    return functionBindNative;
  }
  var functionCall;
  var hasRequiredFunctionCall;
  function requireFunctionCall() {
    if (hasRequiredFunctionCall) return functionCall;
    hasRequiredFunctionCall = 1;
    var NATIVE_BIND = requireFunctionBindNative();
    var call = Function.prototype.call;
    functionCall = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
    return functionCall;
  }
  var objectPropertyIsEnumerable = {};
  var hasRequiredObjectPropertyIsEnumerable;
  function requireObjectPropertyIsEnumerable() {
    if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
    hasRequiredObjectPropertyIsEnumerable = 1;
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
    return objectPropertyIsEnumerable;
  }
  var createPropertyDescriptor;
  var hasRequiredCreatePropertyDescriptor;
  function requireCreatePropertyDescriptor() {
    if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
    hasRequiredCreatePropertyDescriptor = 1;
    createPropertyDescriptor = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
    return createPropertyDescriptor;
  }
  var functionUncurryThis;
  var hasRequiredFunctionUncurryThis;
  function requireFunctionUncurryThis() {
    if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
    hasRequiredFunctionUncurryThis = 1;
    var NATIVE_BIND = requireFunctionBindNative();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
    return functionUncurryThis;
  }
  var classofRaw;
  var hasRequiredClassofRaw;
  function requireClassofRaw() {
    if (hasRequiredClassofRaw) return classofRaw;
    hasRequiredClassofRaw = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var toString2 = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    classofRaw = function(it) {
      return stringSlice(toString2(it), 8, -1);
    };
    return classofRaw;
  }
  var indexedObject;
  var hasRequiredIndexedObject;
  function requireIndexedObject() {
    if (hasRequiredIndexedObject) return indexedObject;
    hasRequiredIndexedObject = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var fails2 = requireFails();
    var classof2 = requireClassofRaw();
    var $Object = Object;
    var split = uncurryThis("".split);
    indexedObject = fails2(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof2(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
    return indexedObject;
  }
  var isNullOrUndefined;
  var hasRequiredIsNullOrUndefined;
  function requireIsNullOrUndefined() {
    if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
    hasRequiredIsNullOrUndefined = 1;
    isNullOrUndefined = function(it) {
      return it === null || it === void 0;
    };
    return isNullOrUndefined;
  }
  var requireObjectCoercible;
  var hasRequiredRequireObjectCoercible;
  function requireRequireObjectCoercible() {
    if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
    hasRequiredRequireObjectCoercible = 1;
    var isNullOrUndefined2 = requireIsNullOrUndefined();
    var $TypeError = TypeError;
    requireObjectCoercible = function(it) {
      if (isNullOrUndefined2(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
    return requireObjectCoercible;
  }
  var toIndexedObject;
  var hasRequiredToIndexedObject;
  function requireToIndexedObject() {
    if (hasRequiredToIndexedObject) return toIndexedObject;
    hasRequiredToIndexedObject = 1;
    var IndexedObject = requireIndexedObject();
    var requireObjectCoercible2 = requireRequireObjectCoercible();
    toIndexedObject = function(it) {
      return IndexedObject(requireObjectCoercible2(it));
    };
    return toIndexedObject;
  }
  var isCallable;
  var hasRequiredIsCallable;
  function requireIsCallable() {
    if (hasRequiredIsCallable) return isCallable;
    hasRequiredIsCallable = 1;
    var documentAll = typeof document == "object" && document.all;
    isCallable = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
    return isCallable;
  }
  var isObject;
  var hasRequiredIsObject;
  function requireIsObject() {
    if (hasRequiredIsObject) return isObject;
    hasRequiredIsObject = 1;
    var isCallable2 = requireIsCallable();
    isObject = function(it) {
      return typeof it == "object" ? it !== null : isCallable2(it);
    };
    return isObject;
  }
  var getBuiltIn;
  var hasRequiredGetBuiltIn;
  function requireGetBuiltIn() {
    if (hasRequiredGetBuiltIn) return getBuiltIn;
    hasRequiredGetBuiltIn = 1;
    var globalThis2 = requireGlobalThis();
    var isCallable2 = requireIsCallable();
    var aFunction = function(argument) {
      return isCallable2(argument) ? argument : void 0;
    };
    getBuiltIn = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
    return getBuiltIn;
  }
  var objectIsPrototypeOf;
  var hasRequiredObjectIsPrototypeOf;
  function requireObjectIsPrototypeOf() {
    if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
    hasRequiredObjectIsPrototypeOf = 1;
    var uncurryThis = requireFunctionUncurryThis();
    objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
    return objectIsPrototypeOf;
  }
  var environmentUserAgent;
  var hasRequiredEnvironmentUserAgent;
  function requireEnvironmentUserAgent() {
    if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
    hasRequiredEnvironmentUserAgent = 1;
    var globalThis2 = requireGlobalThis();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    environmentUserAgent = userAgent ? String(userAgent) : "";
    return environmentUserAgent;
  }
  var environmentV8Version;
  var hasRequiredEnvironmentV8Version;
  function requireEnvironmentV8Version() {
    if (hasRequiredEnvironmentV8Version) return environmentV8Version;
    hasRequiredEnvironmentV8Version = 1;
    var globalThis2 = requireGlobalThis();
    var userAgent = requireEnvironmentUserAgent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    environmentV8Version = version;
    return environmentV8Version;
  }
  var symbolConstructorDetection;
  var hasRequiredSymbolConstructorDetection;
  function requireSymbolConstructorDetection() {
    if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
    hasRequiredSymbolConstructorDetection = 1;
    var V8_VERSION = requireEnvironmentV8Version();
    var fails2 = requireFails();
    var globalThis2 = requireGlobalThis();
    var $String = globalThis2.String;
    symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails2(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
    return symbolConstructorDetection;
  }
  var useSymbolAsUid;
  var hasRequiredUseSymbolAsUid;
  function requireUseSymbolAsUid() {
    if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
    hasRequiredUseSymbolAsUid = 1;
    var NATIVE_SYMBOL = requireSymbolConstructorDetection();
    useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    return useSymbolAsUid;
  }
  var isSymbol;
  var hasRequiredIsSymbol;
  function requireIsSymbol() {
    if (hasRequiredIsSymbol) return isSymbol;
    hasRequiredIsSymbol = 1;
    var getBuiltIn2 = requireGetBuiltIn();
    var isCallable2 = requireIsCallable();
    var isPrototypeOf = requireObjectIsPrototypeOf();
    var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
    var $Object = Object;
    isSymbol = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn2("Symbol");
      return isCallable2($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
    return isSymbol;
  }
  var tryToString;
  var hasRequiredTryToString;
  function requireTryToString() {
    if (hasRequiredTryToString) return tryToString;
    hasRequiredTryToString = 1;
    var $String = String;
    tryToString = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
    return tryToString;
  }
  var aCallable;
  var hasRequiredACallable;
  function requireACallable() {
    if (hasRequiredACallable) return aCallable;
    hasRequiredACallable = 1;
    var isCallable2 = requireIsCallable();
    var tryToString2 = requireTryToString();
    var $TypeError = TypeError;
    aCallable = function(argument) {
      if (isCallable2(argument)) return argument;
      throw new $TypeError(tryToString2(argument) + " is not a function");
    };
    return aCallable;
  }
  var getMethod;
  var hasRequiredGetMethod;
  function requireGetMethod() {
    if (hasRequiredGetMethod) return getMethod;
    hasRequiredGetMethod = 1;
    var aCallable2 = requireACallable();
    var isNullOrUndefined2 = requireIsNullOrUndefined();
    getMethod = function(V, P) {
      var func = V[P];
      return isNullOrUndefined2(func) ? void 0 : aCallable2(func);
    };
    return getMethod;
  }
  var ordinaryToPrimitive;
  var hasRequiredOrdinaryToPrimitive;
  function requireOrdinaryToPrimitive() {
    if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
    hasRequiredOrdinaryToPrimitive = 1;
    var call = requireFunctionCall();
    var isCallable2 = requireIsCallable();
    var isObject2 = requireIsObject();
    var $TypeError = TypeError;
    ordinaryToPrimitive = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable2(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      if (isCallable2(fn = input.valueOf) && !isObject2(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable2(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
    return ordinaryToPrimitive;
  }
  var sharedStore = { exports: {} };
  var isPure;
  var hasRequiredIsPure;
  function requireIsPure() {
    if (hasRequiredIsPure) return isPure;
    hasRequiredIsPure = 1;
    isPure = false;
    return isPure;
  }
  var defineGlobalProperty;
  var hasRequiredDefineGlobalProperty;
  function requireDefineGlobalProperty() {
    if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
    hasRequiredDefineGlobalProperty = 1;
    var globalThis2 = requireGlobalThis();
    var defineProperty = Object.defineProperty;
    defineGlobalProperty = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
    return defineGlobalProperty;
  }
  var hasRequiredSharedStore;
  function requireSharedStore() {
    if (hasRequiredSharedStore) return sharedStore.exports;
    hasRequiredSharedStore = 1;
    var IS_PURE = requireIsPure();
    var globalThis2 = requireGlobalThis();
    var defineGlobalProperty2 = requireDefineGlobalProperty();
    var SHARED = "__core-js_shared__";
    var store = sharedStore.exports = globalThis2[SHARED] || defineGlobalProperty2(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.47.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
      license: "https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
    return sharedStore.exports;
  }
  var shared;
  var hasRequiredShared;
  function requireShared() {
    if (hasRequiredShared) return shared;
    hasRequiredShared = 1;
    var store = requireSharedStore();
    shared = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
    return shared;
  }
  var toObject;
  var hasRequiredToObject;
  function requireToObject() {
    if (hasRequiredToObject) return toObject;
    hasRequiredToObject = 1;
    var requireObjectCoercible2 = requireRequireObjectCoercible();
    var $Object = Object;
    toObject = function(argument) {
      return $Object(requireObjectCoercible2(argument));
    };
    return toObject;
  }
  var hasOwnProperty_1;
  var hasRequiredHasOwnProperty;
  function requireHasOwnProperty() {
    if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
    hasRequiredHasOwnProperty = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var toObject2 = requireToObject();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject2(it), key);
    };
    return hasOwnProperty_1;
  }
  var uid;
  var hasRequiredUid;
  function requireUid() {
    if (hasRequiredUid) return uid;
    hasRequiredUid = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var id = 0;
    var postfix = Math.random();
    var toString2 = uncurryThis(1.1.toString);
    uid = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
    };
    return uid;
  }
  var wellKnownSymbol;
  var hasRequiredWellKnownSymbol;
  function requireWellKnownSymbol() {
    if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
    hasRequiredWellKnownSymbol = 1;
    var globalThis2 = requireGlobalThis();
    var shared2 = requireShared();
    var hasOwn = requireHasOwnProperty();
    var uid2 = requireUid();
    var NATIVE_SYMBOL = requireSymbolConstructorDetection();
    var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared2("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid2;
    wellKnownSymbol = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
    return wellKnownSymbol;
  }
  var toPrimitive;
  var hasRequiredToPrimitive;
  function requireToPrimitive() {
    if (hasRequiredToPrimitive) return toPrimitive;
    hasRequiredToPrimitive = 1;
    var call = requireFunctionCall();
    var isObject2 = requireIsObject();
    var isSymbol2 = requireIsSymbol();
    var getMethod2 = requireGetMethod();
    var ordinaryToPrimitive2 = requireOrdinaryToPrimitive();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
    toPrimitive = function(input, pref) {
      if (!isObject2(input) || isSymbol2(input)) return input;
      var exoticToPrim = getMethod2(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol2(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive2(input, pref);
    };
    return toPrimitive;
  }
  var toPropertyKey;
  var hasRequiredToPropertyKey;
  function requireToPropertyKey() {
    if (hasRequiredToPropertyKey) return toPropertyKey;
    hasRequiredToPropertyKey = 1;
    var toPrimitive2 = requireToPrimitive();
    var isSymbol2 = requireIsSymbol();
    toPropertyKey = function(argument) {
      var key = toPrimitive2(argument, "string");
      return isSymbol2(key) ? key : key + "";
    };
    return toPropertyKey;
  }
  var documentCreateElement;
  var hasRequiredDocumentCreateElement;
  function requireDocumentCreateElement() {
    if (hasRequiredDocumentCreateElement) return documentCreateElement;
    hasRequiredDocumentCreateElement = 1;
    var globalThis2 = requireGlobalThis();
    var isObject2 = requireIsObject();
    var document2 = globalThis2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    documentCreateElement = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
    return documentCreateElement;
  }
  var ie8DomDefine;
  var hasRequiredIe8DomDefine;
  function requireIe8DomDefine() {
    if (hasRequiredIe8DomDefine) return ie8DomDefine;
    hasRequiredIe8DomDefine = 1;
    var DESCRIPTORS = requireDescriptors();
    var fails2 = requireFails();
    var createElement = requireDocumentCreateElement();
    ie8DomDefine = !DESCRIPTORS && !fails2(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
    return ie8DomDefine;
  }
  var hasRequiredObjectGetOwnPropertyDescriptor;
  function requireObjectGetOwnPropertyDescriptor() {
    if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
    hasRequiredObjectGetOwnPropertyDescriptor = 1;
    var DESCRIPTORS = requireDescriptors();
    var call = requireFunctionCall();
    var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
    var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
    var toIndexedObject2 = requireToIndexedObject();
    var toPropertyKey2 = requireToPropertyKey();
    var hasOwn = requireHasOwnProperty();
    var IE8_DOM_DEFINE = requireIe8DomDefine();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject2(O);
      P = toPropertyKey2(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
    return objectGetOwnPropertyDescriptor;
  }
  var objectDefineProperty = {};
  var v8PrototypeDefineBug;
  var hasRequiredV8PrototypeDefineBug;
  function requireV8PrototypeDefineBug() {
    if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
    hasRequiredV8PrototypeDefineBug = 1;
    var DESCRIPTORS = requireDescriptors();
    var fails2 = requireFails();
    v8PrototypeDefineBug = DESCRIPTORS && fails2(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
    return v8PrototypeDefineBug;
  }
  var anObject;
  var hasRequiredAnObject;
  function requireAnObject() {
    if (hasRequiredAnObject) return anObject;
    hasRequiredAnObject = 1;
    var isObject2 = requireIsObject();
    var $String = String;
    var $TypeError = TypeError;
    anObject = function(argument) {
      if (isObject2(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
    return anObject;
  }
  var hasRequiredObjectDefineProperty;
  function requireObjectDefineProperty() {
    if (hasRequiredObjectDefineProperty) return objectDefineProperty;
    hasRequiredObjectDefineProperty = 1;
    var DESCRIPTORS = requireDescriptors();
    var IE8_DOM_DEFINE = requireIe8DomDefine();
    var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
    var anObject2 = requireAnObject();
    var toPropertyKey2 = requireToPropertyKey();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey2(P);
      anObject2(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey2(P);
      anObject2(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
    return objectDefineProperty;
  }
  var createNonEnumerableProperty;
  var hasRequiredCreateNonEnumerableProperty;
  function requireCreateNonEnumerableProperty() {
    if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
    hasRequiredCreateNonEnumerableProperty = 1;
    var DESCRIPTORS = requireDescriptors();
    var definePropertyModule = requireObjectDefineProperty();
    var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
    createNonEnumerableProperty = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor2(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
    return createNonEnumerableProperty;
  }
  var makeBuiltIn = { exports: {} };
  var functionName;
  var hasRequiredFunctionName;
  function requireFunctionName() {
    if (hasRequiredFunctionName) return functionName;
    hasRequiredFunctionName = 1;
    var DESCRIPTORS = requireDescriptors();
    var hasOwn = requireHasOwnProperty();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && (function something() {
    }).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    functionName = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
    return functionName;
  }
  var inspectSource;
  var hasRequiredInspectSource;
  function requireInspectSource() {
    if (hasRequiredInspectSource) return inspectSource;
    hasRequiredInspectSource = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var isCallable2 = requireIsCallable();
    var store = requireSharedStore();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable2(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    inspectSource = store.inspectSource;
    return inspectSource;
  }
  var weakMapBasicDetection;
  var hasRequiredWeakMapBasicDetection;
  function requireWeakMapBasicDetection() {
    if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
    hasRequiredWeakMapBasicDetection = 1;
    var globalThis2 = requireGlobalThis();
    var isCallable2 = requireIsCallable();
    var WeakMap2 = globalThis2.WeakMap;
    weakMapBasicDetection = isCallable2(WeakMap2) && /native code/.test(String(WeakMap2));
    return weakMapBasicDetection;
  }
  var sharedKey;
  var hasRequiredSharedKey;
  function requireSharedKey() {
    if (hasRequiredSharedKey) return sharedKey;
    hasRequiredSharedKey = 1;
    var shared2 = requireShared();
    var uid2 = requireUid();
    var keys = shared2("keys");
    sharedKey = function(key) {
      return keys[key] || (keys[key] = uid2(key));
    };
    return sharedKey;
  }
  var hiddenKeys;
  var hasRequiredHiddenKeys;
  function requireHiddenKeys() {
    if (hasRequiredHiddenKeys) return hiddenKeys;
    hasRequiredHiddenKeys = 1;
    hiddenKeys = {};
    return hiddenKeys;
  }
  var internalState;
  var hasRequiredInternalState;
  function requireInternalState() {
    if (hasRequiredInternalState) return internalState;
    hasRequiredInternalState = 1;
    var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
    var globalThis2 = requireGlobalThis();
    var isObject2 = requireIsObject();
    var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
    var hasOwn = requireHasOwnProperty();
    var shared2 = requireSharedStore();
    var sharedKey2 = requireSharedKey();
    var hiddenKeys2 = requireHiddenKeys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap2 = globalThis2.WeakMap;
    var set, get, has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject2(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared2.state) {
      var store = shared2.state || (shared2.state = new WeakMap2());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      var STATE = sharedKey2("state");
      hiddenKeys2[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty2(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    internalState = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
    return internalState;
  }
  var hasRequiredMakeBuiltIn;
  function requireMakeBuiltIn() {
    if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
    hasRequiredMakeBuiltIn = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var fails2 = requireFails();
    var isCallable2 = requireIsCallable();
    var hasOwn = requireHasOwnProperty();
    var DESCRIPTORS = requireDescriptors();
    var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
    var inspectSource2 = requireInspectSource();
    var InternalStateModule = requireInternalState();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails2(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn$1 = makeBuiltIn.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn$1(function toString2() {
      return isCallable2(this) && getInternalState(this).source || inspectSource2(this);
    }, "toString");
    return makeBuiltIn.exports;
  }
  var defineBuiltIn;
  var hasRequiredDefineBuiltIn;
  function requireDefineBuiltIn() {
    if (hasRequiredDefineBuiltIn) return defineBuiltIn;
    hasRequiredDefineBuiltIn = 1;
    var isCallable2 = requireIsCallable();
    var definePropertyModule = requireObjectDefineProperty();
    var makeBuiltIn2 = requireMakeBuiltIn();
    var defineGlobalProperty2 = requireDefineGlobalProperty();
    defineBuiltIn = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable2(value)) makeBuiltIn2(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty2(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
    return defineBuiltIn;
  }
  var objectGetOwnPropertyNames = {};
  var mathTrunc;
  var hasRequiredMathTrunc;
  function requireMathTrunc() {
    if (hasRequiredMathTrunc) return mathTrunc;
    hasRequiredMathTrunc = 1;
    var ceil = Math.ceil;
    var floor = Math.floor;
    mathTrunc = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
    return mathTrunc;
  }
  var toIntegerOrInfinity;
  var hasRequiredToIntegerOrInfinity;
  function requireToIntegerOrInfinity() {
    if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
    hasRequiredToIntegerOrInfinity = 1;
    var trunc = requireMathTrunc();
    toIntegerOrInfinity = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
    return toIntegerOrInfinity;
  }
  var toAbsoluteIndex;
  var hasRequiredToAbsoluteIndex;
  function requireToAbsoluteIndex() {
    if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
    hasRequiredToAbsoluteIndex = 1;
    var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
    var max = Math.max;
    var min = Math.min;
    toAbsoluteIndex = function(index, length) {
      var integer = toIntegerOrInfinity2(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    return toAbsoluteIndex;
  }
  var toLength;
  var hasRequiredToLength;
  function requireToLength() {
    if (hasRequiredToLength) return toLength;
    hasRequiredToLength = 1;
    var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
    var min = Math.min;
    toLength = function(argument) {
      var len = toIntegerOrInfinity2(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
    return toLength;
  }
  var lengthOfArrayLike;
  var hasRequiredLengthOfArrayLike;
  function requireLengthOfArrayLike() {
    if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
    hasRequiredLengthOfArrayLike = 1;
    var toLength2 = requireToLength();
    lengthOfArrayLike = function(obj) {
      return toLength2(obj.length);
    };
    return lengthOfArrayLike;
  }
  var arrayIncludes;
  var hasRequiredArrayIncludes;
  function requireArrayIncludes() {
    if (hasRequiredArrayIncludes) return arrayIncludes;
    hasRequiredArrayIncludes = 1;
    var toIndexedObject2 = requireToIndexedObject();
    var toAbsoluteIndex2 = requireToAbsoluteIndex();
    var lengthOfArrayLike2 = requireLengthOfArrayLike();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject2($this);
        var length = lengthOfArrayLike2(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex2(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    arrayIncludes = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    return arrayIncludes;
  }
  var objectKeysInternal;
  var hasRequiredObjectKeysInternal;
  function requireObjectKeysInternal() {
    if (hasRequiredObjectKeysInternal) return objectKeysInternal;
    hasRequiredObjectKeysInternal = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var hasOwn = requireHasOwnProperty();
    var toIndexedObject2 = requireToIndexedObject();
    var indexOf = requireArrayIncludes().indexOf;
    var hiddenKeys2 = requireHiddenKeys();
    var push = uncurryThis([].push);
    objectKeysInternal = function(object, names) {
      var O = toIndexedObject2(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys2, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
    return objectKeysInternal;
  }
  var enumBugKeys;
  var hasRequiredEnumBugKeys;
  function requireEnumBugKeys() {
    if (hasRequiredEnumBugKeys) return enumBugKeys;
    hasRequiredEnumBugKeys = 1;
    enumBugKeys = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
    return enumBugKeys;
  }
  var hasRequiredObjectGetOwnPropertyNames;
  function requireObjectGetOwnPropertyNames() {
    if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
    hasRequiredObjectGetOwnPropertyNames = 1;
    var internalObjectKeys = requireObjectKeysInternal();
    var enumBugKeys2 = requireEnumBugKeys();
    var hiddenKeys2 = enumBugKeys2.concat("length", "prototype");
    objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys2);
    };
    return objectGetOwnPropertyNames;
  }
  var objectGetOwnPropertySymbols = {};
  var hasRequiredObjectGetOwnPropertySymbols;
  function requireObjectGetOwnPropertySymbols() {
    if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
    hasRequiredObjectGetOwnPropertySymbols = 1;
    objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
    return objectGetOwnPropertySymbols;
  }
  var ownKeys;
  var hasRequiredOwnKeys;
  function requireOwnKeys() {
    if (hasRequiredOwnKeys) return ownKeys;
    hasRequiredOwnKeys = 1;
    var getBuiltIn2 = requireGetBuiltIn();
    var uncurryThis = requireFunctionUncurryThis();
    var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
    var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
    var anObject2 = requireAnObject();
    var concat = uncurryThis([].concat);
    ownKeys = getBuiltIn2("Reflect", "ownKeys") || function ownKeys2(it) {
      var keys = getOwnPropertyNamesModule.f(anObject2(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
    return ownKeys;
  }
  var copyConstructorProperties;
  var hasRequiredCopyConstructorProperties;
  function requireCopyConstructorProperties() {
    if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
    hasRequiredCopyConstructorProperties = 1;
    var hasOwn = requireHasOwnProperty();
    var ownKeys2 = requireOwnKeys();
    var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
    var definePropertyModule = requireObjectDefineProperty();
    copyConstructorProperties = function(target, source, exceptions) {
      var keys = ownKeys2(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
    return copyConstructorProperties;
  }
  var isForced_1;
  var hasRequiredIsForced;
  function requireIsForced() {
    if (hasRequiredIsForced) return isForced_1;
    hasRequiredIsForced = 1;
    var fails2 = requireFails();
    var isCallable2 = requireIsCallable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable2(detection) ? fails2(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    isForced_1 = isForced;
    return isForced_1;
  }
  var _export;
  var hasRequired_export;
  function require_export() {
    if (hasRequired_export) return _export;
    hasRequired_export = 1;
    var globalThis2 = requireGlobalThis();
    var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
    var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
    var defineBuiltIn2 = requireDefineBuiltIn();
    var defineGlobalProperty2 = requireDefineGlobalProperty();
    var copyConstructorProperties2 = requireCopyConstructorProperties();
    var isForced = requireIsForced();
    _export = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty2(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties2(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty2(sourceProperty, "sham", true);
        }
        defineBuiltIn2(target, key, sourceProperty, options);
      }
    };
    return _export;
  }
  var functionApply;
  var hasRequiredFunctionApply;
  function requireFunctionApply() {
    if (hasRequiredFunctionApply) return functionApply;
    hasRequiredFunctionApply = 1;
    var NATIVE_BIND = requireFunctionBindNative();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
    return functionApply;
  }
  var isArray;
  var hasRequiredIsArray;
  function requireIsArray() {
    if (hasRequiredIsArray) return isArray;
    hasRequiredIsArray = 1;
    var classof2 = requireClassofRaw();
    isArray = Array.isArray || function isArray2(argument) {
      return classof2(argument) === "Array";
    };
    return isArray;
  }
  var isRawJson;
  var hasRequiredIsRawJson;
  function requireIsRawJson() {
    if (hasRequiredIsRawJson) return isRawJson;
    hasRequiredIsRawJson = 1;
    var isObject2 = requireIsObject();
    var getInternalState = requireInternalState().get;
    isRawJson = function isRawJSON(O) {
      if (!isObject2(O)) return false;
      var state = getInternalState(O);
      return !!state && state.type === "RawJSON";
    };
    return isRawJson;
  }
  var toStringTagSupport;
  var hasRequiredToStringTagSupport;
  function requireToStringTagSupport() {
    if (hasRequiredToStringTagSupport) return toStringTagSupport;
    hasRequiredToStringTagSupport = 1;
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    toStringTagSupport = String(test) === "[object z]";
    return toStringTagSupport;
  }
  var classof;
  var hasRequiredClassof;
  function requireClassof() {
    if (hasRequiredClassof) return classof;
    hasRequiredClassof = 1;
    var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
    var isCallable2 = requireIsCallable();
    var classofRaw2 = requireClassofRaw();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw2(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    classof = TO_STRING_TAG_SUPPORT ? classofRaw2 : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw2(O) : (result = classofRaw2(O)) === "Object" && isCallable2(O.callee) ? "Arguments" : result;
    };
    return classof;
  }
  var toString;
  var hasRequiredToString;
  function requireToString() {
    if (hasRequiredToString) return toString;
    hasRequiredToString = 1;
    var classof2 = requireClassof();
    var $String = String;
    toString = function(argument) {
      if (classof2(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
    return toString;
  }
  var arraySlice;
  var hasRequiredArraySlice;
  function requireArraySlice() {
    if (hasRequiredArraySlice) return arraySlice;
    hasRequiredArraySlice = 1;
    var uncurryThis = requireFunctionUncurryThis();
    arraySlice = uncurryThis([].slice);
    return arraySlice;
  }
  var parseJsonString;
  var hasRequiredParseJsonString;
  function requireParseJsonString() {
    if (hasRequiredParseJsonString) return parseJsonString;
    hasRequiredParseJsonString = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var hasOwn = requireHasOwnProperty();
    var $SyntaxError = SyntaxError;
    var $parseInt = parseInt;
    var fromCharCode = String.fromCharCode;
    var at = uncurryThis("".charAt);
    var slice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var codePoints = {
      '\\"': '"',
      "\\\\": "\\",
      "\\/": "/",
      "\\b": "\b",
      "\\f": "\f",
      "\\n": "\n",
      "\\r": "\r",
      "\\t": "	"
    };
    var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
    var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
    parseJsonString = function(source, i) {
      var unterminated = true;
      var value = "";
      while (i < source.length) {
        var chr = at(source, i);
        if (chr === "\\") {
          var twoChars = slice(source, i, i + 2);
          if (hasOwn(codePoints, twoChars)) {
            value += codePoints[twoChars];
            i += 2;
          } else if (twoChars === "\\u") {
            i += 2;
            var fourHexDigits = slice(source, i, i + 4);
            if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
            value += fromCharCode($parseInt(fourHexDigits, 16));
            i += 4;
          } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
        } else if (chr === '"') {
          unterminated = false;
          i++;
          break;
        } else {
          if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
          value += chr;
          i++;
        }
      }
      if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
      return { value, end: i };
    };
    return parseJsonString;
  }
  var nativeRawJson;
  var hasRequiredNativeRawJson;
  function requireNativeRawJson() {
    if (hasRequiredNativeRawJson) return nativeRawJson;
    hasRequiredNativeRawJson = 1;
    var fails2 = requireFails();
    nativeRawJson = !fails2(function() {
      var unsafeInt = "9007199254740993";
      var raw = JSON.rawJSON(unsafeInt);
      return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
    });
    return nativeRawJson;
  }
  var hasRequiredEs_json_stringify;
  function requireEs_json_stringify() {
    if (hasRequiredEs_json_stringify) return es_json_stringify;
    hasRequiredEs_json_stringify = 1;
    var $ = require_export();
    var getBuiltIn2 = requireGetBuiltIn();
    var apply = requireFunctionApply();
    var call = requireFunctionCall();
    var uncurryThis = requireFunctionUncurryThis();
    var fails2 = requireFails();
    var isArray2 = requireIsArray();
    var isCallable2 = requireIsCallable();
    var isRawJSON = requireIsRawJson();
    var isSymbol2 = requireIsSymbol();
    var classof2 = requireClassofRaw();
    var toString2 = requireToString();
    var arraySlice2 = requireArraySlice();
    var parseJSONString = requireParseJsonString();
    var uid2 = requireUid();
    var NATIVE_SYMBOL = requireSymbolConstructorDetection();
    var NATIVE_RAW_JSON = requireNativeRawJson();
    var $String = String;
    var $stringify = getBuiltIn2("JSON", "stringify");
    var exec = uncurryThis(/./.exec);
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var replace = uncurryThis("".replace);
    var slice = uncurryThis("".slice);
    var push = uncurryThis([].push);
    var numberToString = uncurryThis(1.1.toString);
    var surrogates = /[\uD800-\uDFFF]/g;
    var lowSurrogates = /^[\uD800-\uDBFF]$/;
    var hiSurrogates = /^[\uDC00-\uDFFF]$/;
    var MARK = uid2();
    var MARK_LENGTH = MARK.length;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails2(function() {
      var symbol = getBuiltIn2("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails2(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer) {
      var args = arraySlice2(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable2($replacer) && (it === void 0 || isSymbol2(it))) return;
      args[1] = function(key, value) {
        if (isCallable2($replacer)) value = call($replacer, this, $String(key), value);
        if (!isSymbol2(value)) return value;
      };
      return apply($stringify, null, args);
    } : $stringify;
    var fixIllFormedJSON = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(lowSurrogates, match) && !exec(hiSurrogates, next) || exec(hiSurrogates, match) && !exec(lowSurrogates, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    var getReplacerFunction = function(replacer) {
      if (isCallable2(replacer)) return replacer;
      if (!isArray2(replacer)) return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string") push(keys, element);
        else if (typeof element == "number" || classof2(element) === "Number" || classof2(element) === "String") push(keys, toString2(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray2(this)) return value;
        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
      };
    };
    if ($stringify) $({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
      stringify: function stringify(text, replacer, space) {
        var replacerFunction = getReplacerFunction(replacer);
        var rawStrings = [];
        var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
          var v = isCallable2(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
          return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
        }, space);
        if (typeof json != "string") return json;
        if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
        if (NATIVE_RAW_JSON) return json;
        var result = "";
        var length = json.length;
        for (var i = 0; i < length; i++) {
          var chr = charAt(json, i);
          if (chr === '"') {
            var end = parseJSONString(json, ++i).end - 1;
            var string = slice(json, i, end);
            result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : '"' + string + '"';
            i = end;
          } else result += chr;
        }
        return result;
      }
    });
    return es_json_stringify;
  }
  var esnext_iterator_constructor = {};
  var es_iterator_constructor = {};
  var anInstance;
  var hasRequiredAnInstance;
  function requireAnInstance() {
    if (hasRequiredAnInstance) return anInstance;
    hasRequiredAnInstance = 1;
    var isPrototypeOf = requireObjectIsPrototypeOf();
    var $TypeError = TypeError;
    anInstance = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
    return anInstance;
  }
  var correctPrototypeGetter;
  var hasRequiredCorrectPrototypeGetter;
  function requireCorrectPrototypeGetter() {
    if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
    hasRequiredCorrectPrototypeGetter = 1;
    var fails2 = requireFails();
    correctPrototypeGetter = !fails2(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
    return correctPrototypeGetter;
  }
  var objectGetPrototypeOf;
  var hasRequiredObjectGetPrototypeOf;
  function requireObjectGetPrototypeOf() {
    if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
    hasRequiredObjectGetPrototypeOf = 1;
    var hasOwn = requireHasOwnProperty();
    var isCallable2 = requireIsCallable();
    var toObject2 = requireToObject();
    var sharedKey2 = requireSharedKey();
    var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();
    var IE_PROTO = sharedKey2("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject2(O);
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable2(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
    return objectGetPrototypeOf;
  }
  var defineBuiltInAccessor;
  var hasRequiredDefineBuiltInAccessor;
  function requireDefineBuiltInAccessor() {
    if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
    hasRequiredDefineBuiltInAccessor = 1;
    var makeBuiltIn2 = requireMakeBuiltIn();
    var defineProperty = requireObjectDefineProperty();
    defineBuiltInAccessor = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn2(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn2(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
    return defineBuiltInAccessor;
  }
  var createProperty;
  var hasRequiredCreateProperty;
  function requireCreateProperty() {
    if (hasRequiredCreateProperty) return createProperty;
    hasRequiredCreateProperty = 1;
    var DESCRIPTORS = requireDescriptors();
    var definePropertyModule = requireObjectDefineProperty();
    var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
    createProperty = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor2(0, value));
      else object[key] = value;
    };
    return createProperty;
  }
  var objectDefineProperties = {};
  var objectKeys;
  var hasRequiredObjectKeys;
  function requireObjectKeys() {
    if (hasRequiredObjectKeys) return objectKeys;
    hasRequiredObjectKeys = 1;
    var internalObjectKeys = requireObjectKeysInternal();
    var enumBugKeys2 = requireEnumBugKeys();
    objectKeys = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys2);
    };
    return objectKeys;
  }
  var hasRequiredObjectDefineProperties;
  function requireObjectDefineProperties() {
    if (hasRequiredObjectDefineProperties) return objectDefineProperties;
    hasRequiredObjectDefineProperties = 1;
    var DESCRIPTORS = requireDescriptors();
    var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
    var definePropertyModule = requireObjectDefineProperty();
    var anObject2 = requireAnObject();
    var toIndexedObject2 = requireToIndexedObject();
    var objectKeys2 = requireObjectKeys();
    objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject2(O);
      var props = toIndexedObject2(Properties);
      var keys = objectKeys2(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
    return objectDefineProperties;
  }
  var html;
  var hasRequiredHtml;
  function requireHtml() {
    if (hasRequiredHtml) return html;
    hasRequiredHtml = 1;
    var getBuiltIn2 = requireGetBuiltIn();
    html = getBuiltIn2("document", "documentElement");
    return html;
  }
  var objectCreate;
  var hasRequiredObjectCreate;
  function requireObjectCreate() {
    if (hasRequiredObjectCreate) return objectCreate;
    hasRequiredObjectCreate = 1;
    var anObject2 = requireAnObject();
    var definePropertiesModule = requireObjectDefineProperties();
    var enumBugKeys2 = requireEnumBugKeys();
    var hiddenKeys2 = requireHiddenKeys();
    var html2 = requireHtml();
    var documentCreateElement2 = requireDocumentCreateElement();
    var sharedKey2 = requireSharedKey();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey2("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement2("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html2.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys2.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys2[length]];
      return NullProtoObject();
    };
    hiddenKeys2[IE_PROTO] = true;
    objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject2(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
    return objectCreate;
  }
  var iteratorsCore;
  var hasRequiredIteratorsCore;
  function requireIteratorsCore() {
    if (hasRequiredIteratorsCore) return iteratorsCore;
    hasRequiredIteratorsCore = 1;
    var fails2 = requireFails();
    var isCallable2 = requireIsCallable();
    var isObject2 = requireIsObject();
    var create = requireObjectCreate();
    var getPrototypeOf = requireObjectGetPrototypeOf();
    var defineBuiltIn2 = requireDefineBuiltIn();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var IS_PURE = requireIsPure();
    var ITERATOR = wellKnownSymbol2("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails2(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable2(IteratorPrototype[ITERATOR])) {
      defineBuiltIn2(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    iteratorsCore = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
    return iteratorsCore;
  }
  var hasRequiredEs_iterator_constructor;
  function requireEs_iterator_constructor() {
    if (hasRequiredEs_iterator_constructor) return es_iterator_constructor;
    hasRequiredEs_iterator_constructor = 1;
    var $ = require_export();
    var globalThis2 = requireGlobalThis();
    var anInstance2 = requireAnInstance();
    var anObject2 = requireAnObject();
    var isCallable2 = requireIsCallable();
    var getPrototypeOf = requireObjectGetPrototypeOf();
    var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
    var createProperty2 = requireCreateProperty();
    var fails2 = requireFails();
    var hasOwn = requireHasOwnProperty();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
    var DESCRIPTORS = requireDescriptors();
    var IS_PURE = requireIsPure();
    var CONSTRUCTOR = "constructor";
    var ITERATOR = "Iterator";
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var $TypeError = TypeError;
    var NativeIterator = globalThis2[ITERATOR];
    var FORCED = IS_PURE || !isCallable2(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails2(function() {
      NativeIterator({});
    });
    var IteratorConstructor = function Iterator() {
      anInstance2(this, IteratorPrototype);
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
    };
    var defineIteratorPrototypeAccessor = function(key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor2(IteratorPrototype, key, {
          configurable: true,
          get: function() {
            return value;
          },
          set: function(replacement) {
            anObject2(this);
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
            if (hasOwn(this, key)) this[key] = replacement;
            else createProperty2(this, key, replacement);
          }
        });
      } else IteratorPrototype[key] = value;
    };
    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
    }
    IteratorConstructor.prototype = IteratorPrototype;
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
    return es_iterator_constructor;
  }
  var hasRequiredEsnext_iterator_constructor;
  function requireEsnext_iterator_constructor() {
    if (hasRequiredEsnext_iterator_constructor) return esnext_iterator_constructor;
    hasRequiredEsnext_iterator_constructor = 1;
    requireEs_iterator_constructor();
    return esnext_iterator_constructor;
  }
  var esnext_iterator_forEach = {};
  var es_iterator_forEach = {};
  var functionUncurryThisClause;
  var hasRequiredFunctionUncurryThisClause;
  function requireFunctionUncurryThisClause() {
    if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
    hasRequiredFunctionUncurryThisClause = 1;
    var classofRaw2 = requireClassofRaw();
    var uncurryThis = requireFunctionUncurryThis();
    functionUncurryThisClause = function(fn) {
      if (classofRaw2(fn) === "Function") return uncurryThis(fn);
    };
    return functionUncurryThisClause;
  }
  var functionBindContext;
  var hasRequiredFunctionBindContext;
  function requireFunctionBindContext() {
    if (hasRequiredFunctionBindContext) return functionBindContext;
    hasRequiredFunctionBindContext = 1;
    var uncurryThis = requireFunctionUncurryThisClause();
    var aCallable2 = requireACallable();
    var NATIVE_BIND = requireFunctionBindNative();
    var bind = uncurryThis(uncurryThis.bind);
    functionBindContext = function(fn, that) {
      aCallable2(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
    return functionBindContext;
  }
  var iterators;
  var hasRequiredIterators;
  function requireIterators() {
    if (hasRequiredIterators) return iterators;
    hasRequiredIterators = 1;
    iterators = {};
    return iterators;
  }
  var isArrayIteratorMethod;
  var hasRequiredIsArrayIteratorMethod;
  function requireIsArrayIteratorMethod() {
    if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
    hasRequiredIsArrayIteratorMethod = 1;
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var Iterators = requireIterators();
    var ITERATOR = wellKnownSymbol2("iterator");
    var ArrayPrototype = Array.prototype;
    isArrayIteratorMethod = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
    return isArrayIteratorMethod;
  }
  var getIteratorMethod;
  var hasRequiredGetIteratorMethod;
  function requireGetIteratorMethod() {
    if (hasRequiredGetIteratorMethod) return getIteratorMethod;
    hasRequiredGetIteratorMethod = 1;
    var classof2 = requireClassof();
    var getMethod2 = requireGetMethod();
    var isNullOrUndefined2 = requireIsNullOrUndefined();
    var Iterators = requireIterators();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var ITERATOR = wellKnownSymbol2("iterator");
    getIteratorMethod = function(it) {
      if (!isNullOrUndefined2(it)) return getMethod2(it, ITERATOR) || getMethod2(it, "@@iterator") || Iterators[classof2(it)];
    };
    return getIteratorMethod;
  }
  var getIterator;
  var hasRequiredGetIterator;
  function requireGetIterator() {
    if (hasRequiredGetIterator) return getIterator;
    hasRequiredGetIterator = 1;
    var call = requireFunctionCall();
    var aCallable2 = requireACallable();
    var anObject2 = requireAnObject();
    var tryToString2 = requireTryToString();
    var getIteratorMethod2 = requireGetIteratorMethod();
    var $TypeError = TypeError;
    getIterator = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod2(argument) : usingIterator;
      if (aCallable2(iteratorMethod)) return anObject2(call(iteratorMethod, argument));
      throw new $TypeError(tryToString2(argument) + " is not iterable");
    };
    return getIterator;
  }
  var iteratorClose;
  var hasRequiredIteratorClose;
  function requireIteratorClose() {
    if (hasRequiredIteratorClose) return iteratorClose;
    hasRequiredIteratorClose = 1;
    var call = requireFunctionCall();
    var anObject2 = requireAnObject();
    var getMethod2 = requireGetMethod();
    iteratorClose = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject2(iterator);
      try {
        innerResult = getMethod2(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject2(innerResult);
      return value;
    };
    return iteratorClose;
  }
  var iterate;
  var hasRequiredIterate;
  function requireIterate() {
    if (hasRequiredIterate) return iterate;
    hasRequiredIterate = 1;
    var bind = requireFunctionBindContext();
    var call = requireFunctionCall();
    var anObject2 = requireAnObject();
    var tryToString2 = requireTryToString();
    var isArrayIteratorMethod2 = requireIsArrayIteratorMethod();
    var lengthOfArrayLike2 = requireLengthOfArrayLike();
    var isPrototypeOf = requireObjectIsPrototypeOf();
    var getIterator2 = requireGetIterator();
    var getIteratorMethod2 = requireGetIteratorMethod();
    var iteratorClose2 = requireIteratorClose();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    iterate = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator) iteratorClose2(iterator, "normal");
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject2(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod2(iterable);
        if (!iterFn) throw new $TypeError(tryToString2(iterable) + " is not iterable");
        if (isArrayIteratorMethod2(iterFn)) {
          for (index = 0, length = lengthOfArrayLike2(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator2(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose2(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
    return iterate;
  }
  var getIteratorDirect;
  var hasRequiredGetIteratorDirect;
  function requireGetIteratorDirect() {
    if (hasRequiredGetIteratorDirect) return getIteratorDirect;
    hasRequiredGetIteratorDirect = 1;
    getIteratorDirect = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
    return getIteratorDirect;
  }
  var iteratorHelperWithoutClosingOnEarlyError;
  var hasRequiredIteratorHelperWithoutClosingOnEarlyError;
  function requireIteratorHelperWithoutClosingOnEarlyError() {
    if (hasRequiredIteratorHelperWithoutClosingOnEarlyError) return iteratorHelperWithoutClosingOnEarlyError;
    hasRequiredIteratorHelperWithoutClosingOnEarlyError = 1;
    var globalThis2 = requireGlobalThis();
    iteratorHelperWithoutClosingOnEarlyError = function(METHOD_NAME, ExpectedError) {
      var Iterator = globalThis2.Iterator;
      var IteratorPrototype = Iterator && Iterator.prototype;
      var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
      var CLOSED = false;
      if (method) try {
        method.call({
          next: function() {
            return { done: true };
          },
          "return": function() {
            CLOSED = true;
          }
        }, -1);
      } catch (error) {
        if (!(error instanceof ExpectedError)) CLOSED = false;
      }
      if (!CLOSED) return method;
    };
    return iteratorHelperWithoutClosingOnEarlyError;
  }
  var hasRequiredEs_iterator_forEach;
  function requireEs_iterator_forEach() {
    if (hasRequiredEs_iterator_forEach) return es_iterator_forEach;
    hasRequiredEs_iterator_forEach = 1;
    var $ = require_export();
    var call = requireFunctionCall();
    var iterate2 = requireIterate();
    var aCallable2 = requireACallable();
    var anObject2 = requireAnObject();
    var getIteratorDirect2 = requireGetIteratorDirect();
    var iteratorClose2 = requireIteratorClose();
    var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
    var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("forEach", TypeError);
    $({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
      forEach: function forEach(fn) {
        anObject2(this);
        try {
          aCallable2(fn);
        } catch (error) {
          iteratorClose2(this, "throw", error);
        }
        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
        var record = getIteratorDirect2(this);
        var counter = 0;
        iterate2(record, function(value) {
          fn(value, counter++);
        }, { IS_RECORD: true });
      }
    });
    return es_iterator_forEach;
  }
  var hasRequiredEsnext_iterator_forEach;
  function requireEsnext_iterator_forEach() {
    if (hasRequiredEsnext_iterator_forEach) return esnext_iterator_forEach;
    hasRequiredEsnext_iterator_forEach = 1;
    requireEs_iterator_forEach();
    return esnext_iterator_forEach;
  }
  var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
  typeof global !== "undefined" && global || {};
  var support = {
    searchParams: "URLSearchParams" in g,
    iterable: "Symbol" in g && "iterator" in Symbol,
    blob: "FileReader" in g && "Blob" in g && (function() {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    })(),
    formData: "FormData" in g,
    arrayBuffer: "ArrayBuffer" in g
  };
  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }
  if (support.arrayBuffer) {
    var viewClasses = [
      "[object Int8Array]",
      "[object Uint8Array]",
      "[object Uint8ClampedArray]",
      "[object Int16Array]",
      "[object Uint16Array]",
      "[object Int32Array]",
      "[object Uint32Array]",
      "[object Float32Array]",
      "[object Float64Array]"
    ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }
  function normalizeName(name) {
    if (typeof name !== "string") {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
      throw new TypeError('Invalid character in header field name: "' + name + '"');
    }
    return name.toLowerCase();
  }
  function normalizeValue(value) {
    if (typeof value !== "string") {
      value = String(value);
    }
    return value;
  }
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return { done: value === void 0, value };
      }
    };
    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
    }
    return iterator;
  }
  function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        if (header.length != 2) {
          throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }
  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
  };
  Headers.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
  };
  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };
  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };
  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };
  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };
  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };
  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items);
  };
  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };
  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }
  function consumed(body) {
    if (body._noBody) return;
    if (body.bodyUsed) {
      return Promise.reject(new TypeError("Already read"));
    }
    body.bodyUsed = true;
  }
  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    });
  }
  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }
  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : "utf-8";
    reader.readAsText(blob, encoding);
    return promise;
  }
  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join("");
  }
  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }
  function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = "";
      } else if (typeof body === "string") {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }
      if (!this.headers.get("content-type")) {
        if (typeof body === "string") {
          this.headers.set("content-type", "text/plain;charset=UTF-8");
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set("content-type", this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
      }
    };
    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error("could not read FormData body as blob");
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };
    }
    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed;
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          );
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer);
      } else {
        throw new Error("could not read as ArrayBuffer");
      }
    };
    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error("could not read FormData body as text");
      } else {
        return Promise.resolve(this._bodyText);
      }
    };
    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode);
      };
    }
    this.json = function() {
      return this.text().then(JSON.parse);
    };
    return this;
  }
  var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }
  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError("Already read");
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || (function() {
      if ("AbortController" in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    })();
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) {
      throw new TypeError("Body not allowed for GET or HEAD requests");
    }
    this._initBody(body);
    if (this.method === "GET" || this.method === "HEAD") {
      if (options.cache === "no-store" || options.cache === "no-cache") {
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
        } else {
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
        }
      }
    }
  }
  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit });
  };
  function decode(body) {
    var form = new FormData();
    body.trim().split("&").forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split("=");
        var name = split.shift().replace(/\+/g, " ");
        var value = split.join("=").replace(/\+/g, " ");
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }
  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split("\r").map(function(header) {
      return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
    }).forEach(function(line) {
      var parts = line.split(":");
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(":").trim();
        try {
          headers.append(key, value);
        } catch (error) {
          console.warn("Response " + error.message);
        }
      }
    });
    return headers;
  }
  Body.call(Request.prototype);
  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    if (!options) {
      options = {};
    }
    this.type = "default";
    this.status = options.status === void 0 ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
  }
  Body.call(Response.prototype);
  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };
  Response.error = function() {
    var response = new Response(null, { status: 200, statusText: "" });
    response.ok = false;
    response.status = 0;
    response.type = "error";
    return response;
  };
  var redirectStatuses = [301, 302, 303, 307, 308];
  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError("Invalid status code");
    }
    return new Response(null, { status, headers: { location: url } });
  };
  var DOMException = g.DOMException;
  try {
    new DOMException();
  } catch (err) {
    DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }
  function fetch$1(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      if (request.signal && request.signal.aborted) {
        return reject(new DOMException("Aborted", "AbortError"));
      }
      var xhr = new XMLHttpRequest();
      function abortXhr() {
        xhr.abort();
      }
      xhr.onload = function() {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || "")
        };
        if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
        var body = "response" in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };
      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError("Network request failed"));
        }, 0);
      };
      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError("Network request timed out"));
        }, 0);
      };
      xhr.onabort = function() {
        setTimeout(function() {
          reject(new DOMException("Aborted", "AbortError"));
        }, 0);
      };
      function fixUrl(url) {
        try {
          return url === "" && g.location.href ? g.location.href : url;
        } catch (e) {
          return url;
        }
      }
      xhr.open(request.method, fixUrl(request.url), true);
      if (request.credentials === "include") {
        xhr.withCredentials = true;
      } else if (request.credentials === "omit") {
        xhr.withCredentials = false;
      }
      if ("responseType" in xhr) {
        if (support.blob) {
          xhr.responseType = "blob";
        } else if (support.arrayBuffer) {
          xhr.responseType = "arraybuffer";
        }
      }
      if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function(value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }
      if (request.signal) {
        request.signal.addEventListener("abort", abortXhr);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            request.signal.removeEventListener("abort", abortXhr);
          }
        };
      }
      xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
    });
  }
  fetch$1.polyfill = true;
  if (!g.fetch) {
    g.fetch = fetch$1;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
  }
  var _helpers = {};
  var es_regexp_constructor = {};
  var functionUncurryThisAccessor;
  var hasRequiredFunctionUncurryThisAccessor;
  function requireFunctionUncurryThisAccessor() {
    if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
    hasRequiredFunctionUncurryThisAccessor = 1;
    var uncurryThis = requireFunctionUncurryThis();
    var aCallable2 = requireACallable();
    functionUncurryThisAccessor = function(object, key, method) {
      try {
        return uncurryThis(aCallable2(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
    return functionUncurryThisAccessor;
  }
  var isPossiblePrototype;
  var hasRequiredIsPossiblePrototype;
  function requireIsPossiblePrototype() {
    if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
    hasRequiredIsPossiblePrototype = 1;
    var isObject2 = requireIsObject();
    isPossiblePrototype = function(argument) {
      return isObject2(argument) || argument === null;
    };
    return isPossiblePrototype;
  }
  var aPossiblePrototype;
  var hasRequiredAPossiblePrototype;
  function requireAPossiblePrototype() {
    if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
    hasRequiredAPossiblePrototype = 1;
    var isPossiblePrototype2 = requireIsPossiblePrototype();
    var $String = String;
    var $TypeError = TypeError;
    aPossiblePrototype = function(argument) {
      if (isPossiblePrototype2(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
    return aPossiblePrototype;
  }
  var objectSetPrototypeOf;
  var hasRequiredObjectSetPrototypeOf;
  function requireObjectSetPrototypeOf() {
    if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
    hasRequiredObjectSetPrototypeOf = 1;
    var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
    var isObject2 = requireIsObject();
    var requireObjectCoercible2 = requireRequireObjectCoercible();
    var aPossiblePrototype2 = requireAPossiblePrototype();
    objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        requireObjectCoercible2(O);
        aPossiblePrototype2(proto);
        if (!isObject2(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    })() : void 0);
    return objectSetPrototypeOf;
  }
  var inheritIfRequired;
  var hasRequiredInheritIfRequired;
  function requireInheritIfRequired() {
    if (hasRequiredInheritIfRequired) return inheritIfRequired;
    hasRequiredInheritIfRequired = 1;
    var isCallable2 = requireIsCallable();
    var isObject2 = requireIsObject();
    var setPrototypeOf = requireObjectSetPrototypeOf();
    inheritIfRequired = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
    return inheritIfRequired;
  }
  var isRegexp;
  var hasRequiredIsRegexp;
  function requireIsRegexp() {
    if (hasRequiredIsRegexp) return isRegexp;
    hasRequiredIsRegexp = 1;
    var isObject2 = requireIsObject();
    var classof2 = requireClassofRaw();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var MATCH = wellKnownSymbol2("match");
    isRegexp = function(it) {
      var isRegExp;
      return isObject2(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof2(it) === "RegExp");
    };
    return isRegexp;
  }
  var regexpFlagsDetection;
  var hasRequiredRegexpFlagsDetection;
  function requireRegexpFlagsDetection() {
    if (hasRequiredRegexpFlagsDetection) return regexpFlagsDetection;
    hasRequiredRegexpFlagsDetection = 1;
    var globalThis2 = requireGlobalThis();
    var fails2 = requireFails();
    var RegExp2 = globalThis2.RegExp;
    var FLAGS_GETTER_IS_CORRECT = !fails2(function() {
      var INDICES_SUPPORT = true;
      try {
        RegExp2(".", "d");
      } catch (error) {
        INDICES_SUPPORT = false;
      }
      var O = {};
      var calls = "";
      var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
      var addGetter = function(key2, chr) {
        Object.defineProperty(O, key2, { get: function() {
          calls += chr;
          return true;
        } });
      };
      var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
      };
      if (INDICES_SUPPORT) pairs.hasIndices = "d";
      for (var key in pairs) addGetter(key, pairs[key]);
      var result = Object.getOwnPropertyDescriptor(RegExp2.prototype, "flags").get.call(O);
      return result !== expected || calls !== expected;
    });
    regexpFlagsDetection = { correct: FLAGS_GETTER_IS_CORRECT };
    return regexpFlagsDetection;
  }
  var regexpFlags;
  var hasRequiredRegexpFlags;
  function requireRegexpFlags() {
    if (hasRequiredRegexpFlags) return regexpFlags;
    hasRequiredRegexpFlags = 1;
    var anObject2 = requireAnObject();
    regexpFlags = function() {
      var that = anObject2(this);
      var result = "";
      if (that.hasIndices) result += "d";
      if (that.global) result += "g";
      if (that.ignoreCase) result += "i";
      if (that.multiline) result += "m";
      if (that.dotAll) result += "s";
      if (that.unicode) result += "u";
      if (that.unicodeSets) result += "v";
      if (that.sticky) result += "y";
      return result;
    };
    return regexpFlags;
  }
  var regexpGetFlags;
  var hasRequiredRegexpGetFlags;
  function requireRegexpGetFlags() {
    if (hasRequiredRegexpGetFlags) return regexpGetFlags;
    hasRequiredRegexpGetFlags = 1;
    var call = requireFunctionCall();
    var hasOwn = requireHasOwnProperty();
    var isPrototypeOf = requireObjectIsPrototypeOf();
    var regExpFlagsDetection = requireRegexpFlagsDetection();
    var regExpFlagsGetterImplementation = requireRegexpFlags();
    var RegExpPrototype = RegExp.prototype;
    regexpGetFlags = regExpFlagsDetection.correct ? function(it) {
      return it.flags;
    } : function(it) {
      return !regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, "flags") ? call(regExpFlagsGetterImplementation, it) : it.flags;
    };
    return regexpGetFlags;
  }
  var regexpStickyHelpers;
  var hasRequiredRegexpStickyHelpers;
  function requireRegexpStickyHelpers() {
    if (hasRequiredRegexpStickyHelpers) return regexpStickyHelpers;
    hasRequiredRegexpStickyHelpers = 1;
    var fails2 = requireFails();
    var globalThis2 = requireGlobalThis();
    var $RegExp = globalThis2.RegExp;
    var UNSUPPORTED_Y = fails2(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") !== null;
    });
    var MISSED_STICKY = UNSUPPORTED_Y || fails2(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y || fails2(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") !== null;
    });
    regexpStickyHelpers = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    };
    return regexpStickyHelpers;
  }
  var proxyAccessor;
  var hasRequiredProxyAccessor;
  function requireProxyAccessor() {
    if (hasRequiredProxyAccessor) return proxyAccessor;
    hasRequiredProxyAccessor = 1;
    var defineProperty = requireObjectDefineProperty().f;
    proxyAccessor = function(Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function() {
          return Source[key];
        },
        set: function(it) {
          Source[key] = it;
        }
      });
    };
    return proxyAccessor;
  }
  var setSpecies;
  var hasRequiredSetSpecies;
  function requireSetSpecies() {
    if (hasRequiredSetSpecies) return setSpecies;
    hasRequiredSetSpecies = 1;
    var getBuiltIn2 = requireGetBuiltIn();
    var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var DESCRIPTORS = requireDescriptors();
    var SPECIES = wellKnownSymbol2("species");
    setSpecies = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn2(CONSTRUCTOR_NAME);
      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineBuiltInAccessor2(Constructor, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
    return setSpecies;
  }
  var regexpUnsupportedDotAll;
  var hasRequiredRegexpUnsupportedDotAll;
  function requireRegexpUnsupportedDotAll() {
    if (hasRequiredRegexpUnsupportedDotAll) return regexpUnsupportedDotAll;
    hasRequiredRegexpUnsupportedDotAll = 1;
    var fails2 = requireFails();
    var globalThis2 = requireGlobalThis();
    var $RegExp = globalThis2.RegExp;
    regexpUnsupportedDotAll = fails2(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.test("\n") && re.flags === "s");
    });
    return regexpUnsupportedDotAll;
  }
  var regexpUnsupportedNcg;
  var hasRequiredRegexpUnsupportedNcg;
  function requireRegexpUnsupportedNcg() {
    if (hasRequiredRegexpUnsupportedNcg) return regexpUnsupportedNcg;
    hasRequiredRegexpUnsupportedNcg = 1;
    var fails2 = requireFails();
    var globalThis2 = requireGlobalThis();
    var $RegExp = globalThis2.RegExp;
    regexpUnsupportedNcg = fails2(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
    return regexpUnsupportedNcg;
  }
  var hasRequiredEs_regexp_constructor;
  function requireEs_regexp_constructor() {
    if (hasRequiredEs_regexp_constructor) return es_regexp_constructor;
    hasRequiredEs_regexp_constructor = 1;
    var DESCRIPTORS = requireDescriptors();
    var globalThis2 = requireGlobalThis();
    var uncurryThis = requireFunctionUncurryThis();
    var isForced = requireIsForced();
    var inheritIfRequired2 = requireInheritIfRequired();
    var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
    var create = requireObjectCreate();
    var getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
    var isPrototypeOf = requireObjectIsPrototypeOf();
    var isRegExp = requireIsRegexp();
    var toString2 = requireToString();
    var getRegExpFlags = requireRegexpGetFlags();
    var stickyHelpers = requireRegexpStickyHelpers();
    var proxyAccessor2 = requireProxyAccessor();
    var defineBuiltIn2 = requireDefineBuiltIn();
    var fails2 = requireFails();
    var hasOwn = requireHasOwnProperty();
    var enforceInternalState = requireInternalState().enforce;
    var setSpecies2 = requireSetSpecies();
    var wellKnownSymbol2 = requireWellKnownSymbol();
    var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
    var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();
    var MATCH = wellKnownSymbol2("match");
    var NativeRegExp = globalThis2.RegExp;
    var RegExpPrototype = NativeRegExp.prototype;
    var SyntaxError2 = globalThis2.SyntaxError;
    var exec = uncurryThis(RegExpPrototype.exec);
    var charAt = uncurryThis("".charAt);
    var replace = uncurryThis("".replace);
    var stringIndexOf = uncurryThis("".indexOf);
    var stringSlice = uncurryThis("".slice);
    var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
    var re1 = /a/g;
    var re2 = /a/g;
    var CORRECT_NEW = new NativeRegExp(re1) !== re1;
    var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
    var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails2(function() {
      re2[MATCH] = false;
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, "i")) !== "/a/i";
    }));
    var handleDotAll = function(string) {
      var length = string.length;
      var index2 = 0;
      var result = "";
      var brackets = false;
      var chr;
      for (; index2 <= length; index2++) {
        chr = charAt(string, index2);
        if (chr === "\\") {
          result += chr + charAt(string, ++index2);
          continue;
        }
        if (!brackets && chr === ".") {
          result += "[\\s\\S]";
        } else {
          if (chr === "[") {
            brackets = true;
          } else if (chr === "]") {
            brackets = false;
          }
          result += chr;
        }
      }
      return result;
    };
    var handleNCG = function(string) {
      var length = string.length;
      var index2 = 0;
      var result = "";
      var named = [];
      var names = create(null);
      var brackets = false;
      var ncg = false;
      var groupid = 0;
      var groupname = "";
      var chr;
      for (; index2 <= length; index2++) {
        chr = charAt(string, index2);
        if (chr === "\\") {
          chr += charAt(string, ++index2);
        } else if (chr === "]") {
          brackets = false;
        } else if (!brackets) switch (true) {
          case chr === "[":
            brackets = true;
            break;
          case chr === "(":
            result += chr;
            if (stringSlice(string, index2 + 1, index2 + 3) === "?:") {
              continue;
            }
            if (exec(IS_NCG, stringSlice(string, index2 + 1))) {
              index2 += 2;
              ncg = true;
            }
            groupid++;
            continue;
          case (chr === ">" && ncg):
            if (groupname === "" || hasOwn(names, groupname)) {
              throw new SyntaxError2("Invalid capture group name");
            }
            names[groupname] = true;
            named[named.length] = [groupname, groupid];
            ncg = false;
            groupname = "";
            continue;
        }
        if (ncg) groupname += chr;
        else result += chr;
      }
      return [result, named];
    };
    if (isForced("RegExp", BASE_FORCED)) {
      var RegExpWrapper = function RegExp2(pattern, flags) {
        var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
        var patternIsRegExp = isRegExp(pattern);
        var flagsAreUndefined = flags === void 0;
        var groups = [];
        var rawPattern = pattern;
        var rawFlags, dotAll, sticky, handled, result, state;
        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern;
        }
        if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
          pattern = pattern.source;
          if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
        }
        pattern = pattern === void 0 ? "" : toString2(pattern);
        flags = flags === void 0 ? "" : toString2(flags);
        rawPattern = pattern;
        if (UNSUPPORTED_DOT_ALL && "dotAll" in re1) {
          dotAll = !!flags && stringIndexOf(flags, "s") > -1;
          if (dotAll) flags = replace(flags, /s/g, "");
        }
        rawFlags = flags;
        if (MISSED_STICKY && "sticky" in re1) {
          sticky = !!flags && stringIndexOf(flags, "y") > -1;
          if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, "");
        }
        if (UNSUPPORTED_NCG) {
          handled = handleNCG(pattern);
          pattern = handled[0];
          groups = handled[1];
        }
        result = inheritIfRequired2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        if (dotAll || sticky || groups.length) {
          state = enforceInternalState(result);
          if (dotAll) {
            state.dotAll = true;
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
          }
          if (sticky) state.sticky = true;
          if (groups.length) state.groups = groups;
        }
        if (pattern !== rawPattern) try {
          createNonEnumerableProperty2(result, "source", rawPattern === "" ? "(?:)" : rawPattern);
        } catch (error) {
        }
        return result;
      };
      for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index; ) {
        proxyAccessor2(RegExpWrapper, NativeRegExp, keys[index++]);
      }
      RegExpPrototype.constructor = RegExpWrapper;
      RegExpWrapper.prototype = RegExpPrototype;
      defineBuiltIn2(globalThis2, "RegExp", RegExpWrapper, { constructor: true });
    }
    setSpecies2("RegExp");
    return es_regexp_constructor;
  }
  var es_regexp_exec = {};
  var regexpExec;
  var hasRequiredRegexpExec;
  function requireRegexpExec() {
    if (hasRequiredRegexpExec) return regexpExec;
    hasRequiredRegexpExec = 1;
    var call = requireFunctionCall();
    var uncurryThis = requireFunctionUncurryThis();
    var toString2 = requireToString();
    var regexpFlags2 = requireRegexpFlags();
    var stickyHelpers = requireRegexpStickyHelpers();
    var shared2 = requireShared();
    var create = requireObjectCreate();
    var getInternalState = requireInternalState().get;
    var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
    var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();
    var nativeReplace = shared2("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt = uncurryThis("".charAt);
    var indexOf = uncurryThis("".indexOf);
    var replace = uncurryThis("".replace);
    var stringSlice = uncurryThis("".slice);
    var UPDATES_LAST_INDEX_WRONG = (function() {
      var re1 = /a/;
      var re2 = /b*/g;
      call(nativeExec, re1, "a");
      call(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    })();
    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
    if (PATCH) {
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString2(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = call(regexpFlags2, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
        match = call(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call(nativeReplace, match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0) match[i] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    regexpExec = patchedExec;
    return regexpExec;
  }
  var hasRequiredEs_regexp_exec;
  function requireEs_regexp_exec() {
    if (hasRequiredEs_regexp_exec) return es_regexp_exec;
    hasRequiredEs_regexp_exec = 1;
    var $ = require_export();
    var exec = requireRegexpExec();
    $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
      exec
    });
    return es_regexp_exec;
  }
  var hasRequired_helpers;
  function require_helpers() {
    if (hasRequired_helpers) return _helpers;
    hasRequired_helpers = 1;
    Object.defineProperty(_helpers, "__esModule", {
      value: true
    });
    _helpers.default = void 0;
    requireEs_regexp_constructor();
    requireEs_regexp_exec();
    class helpers {
      static cookieExists(cookie_name) {
        if (document.cookie !== void 0 && this.cookieGet(cookie_name) !== null) {
          return true;
        }
        return false;
      }
      static cookieGet(cookie_name) {
        var cookie_match = document.cookie.match(new RegExp(cookie_name + "=([^;]+)"));
        if (cookie_match) {
          return decodeURIComponent(cookie_match[1]);
        }
        return null;
      }
      static cookieSet(cookie_name, cookie_value, days) {
        let samesite = "";
        if (window.location.protocol.indexOf("https") > -1) {
          samesite = "; SameSite=None; Secure";
        }
        document.cookie = cookie_name + "=" + encodeURIComponent(cookie_value) + "; expires=" + new Date((/* @__PURE__ */ new Date()).getTime() + days * 24 * 60 * 60 * 1e3).toUTCString() + "; path=/" + samesite;
      }
      static cookieDelete(cookie_name) {
        let samesite = "";
        if (window.location.protocol.indexOf("https") > -1) {
          samesite = "; SameSite=None; Secure";
        }
        document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" + samesite;
      }
      static remove(el) {
        if (el !== null) {
          el.parentNode.removeChild(el);
        }
      }
    }
    _helpers.default = helpers;
    return _helpers;
  }
  var hasRequiredScript;
  function requireScript() {
    if (hasRequiredScript) return script;
    hasRequiredScript = 1;
    var _interopRequireDefault = requireInteropRequireDefault();
    Object.defineProperty(script, "__esModule", {
      value: true
    });
    script.default = void 0;
    requireEs_json_stringify();
    requireEsnext_iterator_constructor();
    requireEsnext_iterator_forEach();
    var _helpers2 = _interopRequireDefault(require_helpers());
    class jwtbutler2 {
      constructor(config) {
        if (!("auth_login" in config)) {
          config.auth_login = "email";
        }
        this.config = config;
      }
      isLoggedIn() {
        if (this.getPayload() === null) {
          return false;
        }
        return true;
      }
      getUserId() {
        let payload = this.getPayload();
        if (payload === null) {
          return null;
        }
        return payload.sub;
      }
      getPayload() {
        if (_helpers2.default.cookieGet("access_token") === null) {
          return null;
        }
        try {
          return JSON.parse(atob(_helpers2.default.cookieGet("access_token").split(".")[1]));
        } catch (e) {
          return null;
        }
      }
      logout() {
        return new Promise((resolve, reject) => {
          this.addLoadingState("logging-out");
          fetch(this.config.auth_server + "/logout", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + _helpers2.default.cookieGet("access_token")
            },
            cache: "no-cache"
          }).then((res) => res.json()).catch((err) => err).then((response) => {
            this.setCookies(null).then(() => {
              this.removeLoadingStates();
              resolve();
            }).catch((error) => {
              reject(error);
            });
          });
        });
      }
      login() {
        return new Promise((resolve, reject) => {
          if (_helpers2.default.cookieGet("access_token") !== null) {
            this.addLoadingState("logging-in");
            fetch(this.config.auth_server + "/check", {
              method: "POST",
              body: JSON.stringify({
                access_token: _helpers2.default.cookieGet("access_token")
              }),
              headers: {
                "content-type": "application/json"
              },
              cache: "no-cache"
            }).then((res) => res.json()).catch((err) => err).then((response) => {
              if (response.success === true) {
                this.setCookies(_helpers2.default.cookieGet("access_token")).then(() => {
                  this.removeLoadingStates();
                  resolve();
                }).catch((error) => {
                  reject(error);
                });
              } else {
                fetch(this.config.auth_server + "/refresh", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    Authorization: "Bearer " + _helpers2.default.cookieGet("access_token")
                  },
                  cache: "no-cache"
                }).then((res) => res.json()).catch((err) => err).then((response2) => {
                  if (response2.success === true) {
                    this.setCookies(response2.data.access_token).then(() => {
                      this.removeLoadingStates();
                      resolve();
                    }).catch((error) => {
                      reject(error);
                    });
                  } else {
                    this.renderLoginFormWithPromise().then(() => {
                      resolve();
                    });
                  }
                });
              }
            });
          } else {
            this.renderLoginFormWithPromise().then(() => {
              resolve();
            }).catch(() => {
              reject();
            });
          }
        });
      }
      fetch(url) {
        let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new Promise((resolve, reject) => {
          if (!("headers" in args)) {
            args.headers = {};
          }
          if (!("tries" in args)) {
            args.tries = 0;
          }
          args.tries++;
          if (args.tries > 3) {
            reject(null);
            return;
          } else if (this.isLoggedIn() === false) {
            this.login().then(() => {
              this.fetch(url, args).then((response) => {
                resolve(response);
              }).catch((error) => {
                reject(error);
              });
            }).catch((error) => {
              reject(error);
            });
          } else {
            this.addLoadingState("fetching");
            args.headers.Authorization = "Bearer " + _helpers2.default.cookieGet("access_token");
            fetch(url, args).then((v) => v).catch((v) => v).then((response) => {
              this.removeLoadingStates();
              if (response.status === 401) {
                this.addLoadingState("logging-in");
                fetch(this.config.auth_server + "/refresh", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    Authorization: "Bearer " + _helpers2.default.cookieGet("access_token")
                  },
                  cache: "no-cache"
                }).then((res) => res.json()).catch((error) => error).then((response2) => {
                  if (response2.success === true) {
                    this.setCookies(response2.data.access_token).then(() => {
                      this.removeLoadingStates();
                      this.fetch(url, args).then((response3) => {
                        resolve(response3);
                      }).catch((error) => {
                        reject(error);
                      });
                    }).catch((error) => {
                      this.removeLoadingStates();
                      reject(error);
                    });
                  } else {
                    this.removeLoadingStates();
                    this.renderLoginFormWithPromise().then(() => {
                      this.fetch(url, args).then((response3) => {
                        resolve(response3);
                      }).catch((error) => {
                        reject(error);
                      });
                    }).catch((error) => {
                      reject(error);
                    });
                  }
                });
              } else {
                resolve(response);
              }
            });
          }
        });
      }
      setCookies() {
        let access_token = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return new Promise((resolve, reject) => {
          if (this.setCookieLoading === void 0) {
            this.setCookieLoading === false;
          }
          if (this.setCookieLoading === true) {
            resolve();
            return;
          }
          this.setCookieLoading = true;
          if (access_token !== null) {
            _helpers2.default.cookieSet("access_token", access_token, 28);
          } else {
            _helpers2.default.cookieDelete("access_token");
          }
          if (this.config.sso === void 0 || this.config.sso.length === 1 && this.config.sso[0] === window.location.protocol + "//" + window.location.host) {
            this.setCookieLoading = false;
            resolve();
            return;
          }
          _helpers2.default.remove(document.querySelector(".iframe_wrapper"));
          let iframe_wrapper = document.createElement("div");
          iframe_wrapper.setAttribute("class", "iframe_wrapper");
          iframe_wrapper.style.position = "absolute";
          iframe_wrapper.style.opacity = "0";
          document.body.appendChild(iframe_wrapper);
          let timeout = null;
          let _this = this, todo = this.config.sso.length - 1, waitForPostMessage = function(e) {
            if (_this.config.sso.indexOf(e.origin) === -1) {
              return;
            }
            if (e.data !== void 0 && e.data !== null && "success" in e.data && e.data.success === true) {
              todo--;
            }
            if (todo <= 0) {
              if (timeout) {
                clearTimeout(timeout);
              }
              window.removeEventListener("message", waitForPostMessage, false);
              _helpers2.default.remove(document.querySelector(".iframe_wrapper"));
              _this.setCookieLoading = false;
              resolve();
            }
          };
          window.addEventListener("message", waitForPostMessage, false);
          timeout = setTimeout(() => {
            if (this.setCookieLoading === true) {
              window.removeEventListener("message", waitForPostMessage, false);
              _helpers2.default.remove(document.querySelector(".iframe_wrapper"));
              this.setCookieLoading = false;
              resolve();
            }
          }, 2e4);
          this.config.sso.forEach((sso__value) => {
            if (sso__value === window.location.protocol + "//" + window.location.host) {
              return;
            }
            let iframe = document.createElement("iframe");
            iframe.setAttribute("src", sso__value + "/sso.html");
            iframe.style.width = "1px";
            iframe.style.height = "1px";
            iframe.addEventListener("load", (e) => {
              iframe.contentWindow.postMessage({
                access_token
              }, sso__value);
            });
            document.querySelector(".iframe_wrapper").appendChild(iframe);
          });
        });
      }
      renderLoginFormWithPromise() {
        return new Promise((resolve, reject) => {
          this.buildUpLoginFormHtml();
          this.bindLoginFormSubmit().then(() => {
            resolve();
          }).catch((error) => {
            reject(error);
          });
          this.triggerLoginFormRenderedEvent();
        });
      }
      buildUpLoginFormHtml() {
        if (!("login_form" in this.config) || this.config.login_form == "") {
          this.config.login_form = '<div class="login-form">\n                <div class="login-form__inner">\n                    <form class="login-form__form">\n                        <ul class="login-form__items">\n                            <li class="login-form__item">\n                                <label class="login-form__label login-form__label--'.concat(this.config.auth_login, '" for="login-form__label--').concat(this.config.auth_login, '">').concat(this.config.auth_login === "email" ? "E-Mail-Adresse" : this.config.auth_login === "username" ? "Benutzername" : this.config.auth_login, '</label>\n                                <input class="login-form__input login-form__input--').concat(this.config.auth_login, '" id="login-form__label--').concat(this.config.auth_login, '" type="text" required="required" name="').concat(this.config.auth_login, '" />\n                            </li>\n                            <li class="login-form__item">\n                                <label class="login-form__label login-form__label--password" for="login-form__label--password">Passwort</label>\n                                <input class="login-form__input login-form__input--password" id="login-form__label--password" type="password" required="required" name="password" />\n                            </li>\n                            <li class="login-form__item">\n                                <input class="login-form__submit" type="submit" value="Anmelden" />\n                            </li>\n                        </ul>\n                    </form>\n                </div>\n            </div>');
        }
        let dom = new DOMParser().parseFromString(this.config.login_form, "text/html").body.childNodes[0];
        this.config.login_form_class = dom.getAttribute("class").split(" ")[0];
        _helpers2.default.remove(document.querySelector("." + this.config.login_form_class));
        this.addLoadingState("login-form-visible");
        let parent = document.body;
        if ("login_form_parent" in this.config && this.config.login_form_parent != "" && document.querySelector(this.config.login_form_parent) !== null) {
          parent = document.querySelector(this.config.login_form_parent);
        }
        parent.appendChild(dom);
      }
      triggerLoginFormRenderedEvent() {
        if ("login_form_rendered" in this.config && this.config.login_form_rendered != "" && typeof this.config.login_form_rendered === "function") {
          this.config.login_form_rendered(document.querySelector("." + this.config.login_form_class));
        }
      }
      bindLoginFormSubmit() {
        return new Promise((resolve, reject) => {
          let dom = document.querySelector("." + this.config.login_form_class), form = dom.querySelector("form");
          form.addEventListener("submit", (e) => {
            this.addLoadingState("logging-in");
            if (form.querySelector('input[type="submit"]') !== null) {
              form.querySelector('input[type="submit"]').disabled = true;
            }
            _helpers2.default.remove(dom.querySelector("." + this.config.login_form_class + "__error"));
            fetch(this.config.auth_server + "/login", {
              method: "POST",
              body: JSON.stringify({
                [this.config.auth_login]: form.querySelector('input[name="' + this.config.auth_login + '"]').value,
                password: form.querySelector('input[name="password"]').value
              }),
              headers: {
                "content-type": "application/json"
              },
              cache: "no-cache"
            }).then((res) => res.json()).catch((err) => err).then((response) => {
              if (form.querySelector('input[type="submit"]') !== null) {
                form.querySelector('input[type="submit"]').disabled = false;
              }
              if (response !== void 0 && response !== null && "success" in response && response.success === true) {
                _helpers2.default.remove(document.querySelector("." + this.config.login_form_class));
                this.setCookies(response.data.access_token).then(() => {
                  this.removeLoadingStates();
                  resolve();
                }).catch((error) => {
                  reject(error);
                });
              } else {
                form.insertAdjacentHTML("afterbegin", '<div class="' + this.config.login_form_class + '__error">' + response.public_message + "</div>");
              }
            });
            e.preventDefault();
          }, false);
        });
      }
      addLoadingState(state) {
        document.documentElement.classList.add("jwtbutler-" + state);
        if (state === "logging-in" || state === "logging-out") {
          document.documentElement.classList.add("jwtbutler-loading");
        }
      }
      removeLoadingStates() {
        document.documentElement.classList.remove("jwtbutler-logging-in");
        document.documentElement.classList.remove("jwtbutler-logging-out");
        document.documentElement.classList.remove("jwtbutler-loading");
        document.documentElement.classList.remove("jwtbutler-fetching");
        document.documentElement.classList.remove("jwtbutler-login-form-visible");
      }
    }
    script.default = jwtbutler2;
    window.jwtbutler = jwtbutler2;
    return script;
  }
  var scriptExports = requireScript();
  const jwtbutler = /* @__PURE__ */ getDefaultExportFromCjs(scriptExports);
  class Page {
    constructor() {
    }
    async ready() {
      this.start();
    }
    async load() {
      console.log("load");
    }
    static async readyOnce() {
    }
    static async loadOnce() {
    }
    async start() {
      document.querySelector("#app").innerHTML = "";
      const api = new jwtbutler({
        auth_server: "/auth",
        auth_login: "email"
      });
      await api.login();
      document.querySelector("#app").insertAdjacentHTML("beforeend", '<a href="#" class="logout">logout()</a>');
      document.querySelector(".logout").addEventListener("click", async (e) => {
        e.preventDefault();
        await api.logout();
        this.start();
      });
    }
  }
  class Navigation {
    constructor() {
      this.breakpoint = 768;
      this.selectorChildren = "#header .menu-item.menu-item-has-children";
      this.classHover = "hover";
    }
    async ready() {
      console.log("ready");
    }
    async load() {
      console.log("load");
      this.initOnLoad();
      this.headerCollapse();
    }
    initOnLoad() {
      if (document.querySelector(this.selectorChildren) !== null) {
        document.querySelectorAll(this.selectorChildren).forEach((el) => {
          el.addEventListener("touchstart", (e) => {
            if (window.innerWidth >= this.breakpoint) {
              if (!el.classList.contains(this.classHover)) {
                e.preventDefault();
                document.querySelectorAll(this.selectorChildren).forEach((el2) => {
                  el2.classList.remove(this.classHover);
                });
                el.classList.add(this.classHover);
              }
            }
          });
          window.addEventListener("touchstart", (e) => {
            if (!el.contains(e.target)) {
              el.classList.remove(this.classHover);
            }
          });
        });
      }
    }
    headerCollapse() {
      let navToggle = document.querySelector("#header .nav-toggle");
      if (!navToggle) {
        return;
      }
      navToggle.addEventListener("click", (e) => {
        navToggle.classList.toggle("active");
        document.querySelector("#nav-main").classList.toggle("active");
      });
    }
    headerDropdownOverview() {
      let menuDropdownItems = document.querySelectorAll(".menu-item-has-children.level-0");
      if (!menuDropdownItems) {
        return;
      }
      menuDropdownItems.forEach((el) => {
        el.addEventListener("mouseover", (e) => {
          document.querySelector("#header-overlay").classList.add("show");
        });
        el.addEventListener("mouseout", (e) => {
          document.querySelector("#header-overlay").classList.remove("show");
        });
      });
    }
  }
  class Module {
    static selector = ".module";
    constructor($el) {
      this.$el = $el;
    }
    async ready() {
      console.log(this.$el);
    }
    async load() {
      console.log(this.$el);
    }
    static async readyOnce() {
    }
    // this runs only once on ready (also if n modules are initialized)
    static async loadOnce() {
    }
    // this runs only once on load (also if n modules are initialized)
  }
  class RouteX {
    static route = "/route-xyz$";
    async ready() {
    }
    async load() {
    }
  }
  [Page, Navigation].forEach((classes__value) => {
    let c = new classes__value();
    if (typeof c.ready === "function") {
      hlp.ready().then(() => {
        c.ready();
      });
    }
    if (typeof c.load === "function") {
      hlp.load().then(() => {
        c.load();
      });
    }
    if (typeof classes__value.readyOnce === "function") {
      hlp.ready().then(() => {
        classes__value.readyOnce();
      });
    }
    if (typeof classes__value.loadOnce === "function") {
      hlp.load().then(() => {
        classes__value.loadOnce();
      });
    }
  });
  [[Module, "Module"]].forEach((classes__value) => {
    hlp.runForEl(classes__value[0].selector, ($el) => {
      let c = new classes__value[0]($el);
      if (typeof c.ready === "function") {
        hlp.ready().then(() => {
          c.ready();
        });
      }
      if (typeof c.load === "function") {
        hlp.load().then(() => {
          c.load();
        });
      }
      $el[classes__value[1]] = c;
    });
    hlp.ready().then(() => {
      if (typeof classes__value[0].readyOnce === "function") {
        classes__value[0].readyOnce();
      }
    });
    hlp.load().then(() => {
      if (typeof classes__value[0].loadOnce === "function") {
        classes__value[0].loadOnce();
      }
    });
  });
  [[RouteX, "RouteX"]].forEach((classes__value) => {
    if (new RegExp(classes__value[0].route).test(window.location.pathname) === false) {
      return;
    }
    let c = new classes__value[0]();
    if (typeof c.ready === "function") {
      hlp.ready().then(() => {
        c.ready();
      });
    }
    if (typeof c.load === "function") {
      hlp.load().then(() => {
        c.load();
      });
    }
  });
})();
//# sourceMappingURL=bundle.js.map
