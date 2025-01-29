var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    "use strict";
    module2.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module2) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return Array.isArray(val);
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return toString.call(val) === "[object FormData]";
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return toString.call(val) === "[object URLSearchParams]";
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module2) {
    "use strict";
    var enhanceError = require_enhanceError();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module2) {
    "use strict";
    var createError = require_createError();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || defaults.transitional;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    var url = require("url");
    var URL = url.URL;
    var http = require("http");
    var https = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self = this;
      this._onNativeResponse = function(response) {
        self._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      } else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self._timeout) {
          clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
          self.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self._timeout) {
          clearTimeout(self._timeout);
          self._timeout = null;
        }
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        if (callback) {
          self.removeListener("timeout", callback);
        }
        if (!self.socket) {
          self._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url.format(this._options);
      request._redirectable = this;
      for (var e = 0; e < events.length; e++) {
        request.on(events[e], eventHandlers[events[e]]);
      }
      if (this._isRedirect) {
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self._currentRequest) {
            if (error) {
              self.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
        abortRequest(this._currentRequest);
        response.destroy();
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }
        var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
        var currentUrlParts = url.parse(this._currentUrl);
        var currentHost = currentHostHeader || currentUrlParts.host;
        var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, { host: currentHost }));
        var redirectUrl;
        try {
          redirectUrl = url.resolve(currentUrl, location);
        } catch (cause) {
          this.emit("error", new RedirectionError(cause));
          return;
        }
        debug("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);
        if (!(redirectUrlParts.host === currentHost || isSubdomainOf(redirectUrlParts.host, currentHost))) {
          removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
        }
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = { headers: response.headers };
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          } catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }
        try {
          this._performRequest();
        } catch (cause) {
          this.emit("error", new RedirectionError(cause));
        }
      } else {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL(urlStr));
            } catch (err) {
              input = url.parse(urlStr);
            }
          } else if (URL && input instanceof URL) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, defaultMessage) {
      function CustomError(cause) {
        Error.captureStackTrace(this, this.constructor);
        if (!cause) {
          this.message = defaultMessage;
        } else {
          this.message = defaultMessage + ": " + cause.message;
          this.cause = cause;
        }
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }
    function abortRequest(request) {
      for (var e = 0; e < events.length; e++) {
        request.removeListener(events[e], eventHandlers[events[e]]);
      }
      request.on("error", noop);
      request.abort();
    }
    function isSubdomainOf(subdomain, domain) {
      const dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    module2.exports = wrap({ http, https });
    module2.exports.wrap = wrap;
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module2) {
    module2.exports = {
      "version": "0.25.0"
    };
  }
});

// node_modules/axios/lib/adapters/http.js
var require_http = __commonJS({
  "node_modules/axios/lib/adapters/http.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var buildFullPath = require_buildFullPath();
    var buildURL = require_buildURL();
    var http = require("http");
    var https = require("https");
    var httpFollow = require_follow_redirects().http;
    var httpsFollow = require_follow_redirects().https;
    var url = require("url");
    var zlib = require("zlib");
    var VERSION = require_data().version;
    var createError = require_createError();
    var enhanceError = require_enhanceError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    var isHttps = /https:?/;
    function setProxy(options, proxy, location) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.port = proxy.port;
      options.path = location;
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
      }
      options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        setProxy(redirection, proxy, redirection.href);
      };
    }
    module2.exports = function httpAdapter(config) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        var resolve = function resolve2(value) {
          done();
          resolvePromise(value);
        };
        var rejected = false;
        var reject = function reject2(value) {
          done();
          rejected = true;
          rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        var headerNames = {};
        Object.keys(headers).forEach(function storeLowerName(name) {
          headerNames[name.toLowerCase()] = name;
        });
        if ("user-agent" in headerNames) {
          if (!headers[headerNames["user-agent"]]) {
            delete headers[headerNames["user-agent"]];
          }
        } else {
          headers["User-Agent"] = "axios/" + VERSION;
        }
        if (data && !utils.isStream(data)) {
          if (Buffer.isBuffer(data)) {
          } else if (utils.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils.isString(data)) {
            data = Buffer.from(data, "utf-8");
          } else {
            return reject(createError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config));
          }
          if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
            return reject(createError("Request body larger than maxBodyLength limit", config));
          }
          if (!headerNames["content-length"]) {
            headers["Content-Length"] = data.length;
          }
        }
        var auth = void 0;
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password || "";
          auth = username + ":" + password;
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || "http:";
        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(":");
          var urlUsername = urlAuth[0] || "";
          var urlPassword = urlAuth[1] || "";
          auth = urlUsername + ":" + urlPassword;
        }
        if (auth && headerNames.authorization) {
          delete headers[headerNames.authorization];
        }
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        var options = {
          path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
          method: config.method.toUpperCase(),
          headers,
          agent,
          agents: { http: config.httpAgent, https: config.httpsAgent },
          auth
        };
        if (config.socketPath) {
          options.socketPath = config.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + "_proxy";
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;
            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(",").map(function trim(s) {
                return s.trim();
              });
              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === "*") {
                  return true;
                }
                if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }
                return parsed.hostname === proxyElement;
              });
            }
            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port,
                protocol: parsedProxyUrl.protocol
              };
              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }
        if (proxy) {
          options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
          setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport) {
          transport = config.transport;
        } else if (config.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config.maxRedirects) {
            options.maxRedirects = config.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config.maxBodyLength > -1) {
          options.maxBodyLength = config.maxBodyLength;
        }
        if (config.insecureHTTPParser) {
          options.insecureHTTPParser = config.insecureHTTPParser;
        }
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted)
            return;
          var stream = res;
          var lastRequest = res.req || req;
          if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
            switch (res.headers["content-encoding"]) {
              case "gzip":
              case "compress":
              case "deflate":
                stream = stream.pipe(zlib.createUnzip());
                delete res.headers["content-encoding"];
                break;
            }
          }
          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config,
            request: lastRequest
          };
          if (config.responseType === "stream") {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            var totalResponseBytes = 0;
            stream.on("data", function handleStreamData(chunk) {
              responseBuffer.push(chunk);
              totalResponseBytes += chunk.length;
              if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                rejected = true;
                stream.destroy();
                reject(createError("maxContentLength size of " + config.maxContentLength + " exceeded", config, null, lastRequest));
              }
            });
            stream.on("aborted", function handlerStreamAborted() {
              if (rejected) {
                return;
              }
              stream.destroy();
              reject(createError("error request aborted", config, "ERR_REQUEST_ABORTED", lastRequest));
            });
            stream.on("error", function handleStreamError(err) {
              if (req.aborted)
                return;
              reject(enhanceError(err, config, null, lastRequest));
            });
            stream.on("end", function handleStreamEnd() {
              try {
                var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                if (config.responseType !== "arraybuffer") {
                  responseData = responseData.toString(config.responseEncoding);
                  if (!config.responseEncoding || config.responseEncoding === "utf8") {
                    responseData = utils.stripBOM(responseData);
                  }
                }
                response.data = responseData;
              } catch (err) {
                reject(enhanceError(err, config, err.code, response.request, response));
              }
              settle(resolve, reject, response);
            });
          }
        });
        req.on("error", function handleRequestError(err) {
          if (req.aborted && err.code !== "ERR_FR_TOO_MANY_REDIRECTS")
            return;
          reject(enhanceError(err, config, null, req));
        });
        req.on("socket", function handleRequestSocket(socket) {
          socket.setKeepAlive(true, 1e3 * 60);
        });
        if (config.timeout) {
          var timeout = parseInt(config.timeout, 10);
          if (isNaN(timeout)) {
            reject(createError("error trying to parse `config.timeout` to int", config, "ERR_PARSE_TIMEOUT", req));
            return;
          }
          req.setTimeout(timeout, function handleRequestTimeout() {
            req.abort();
            var transitional = config.transitional || defaults.transitional;
            reject(createError("timeout of " + timeout + "ms exceeded", config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", req));
          });
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (req.aborted)
              return;
            req.abort();
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (utils.isStream(data)) {
          data.on("error", function handleStreamError(err) {
            reject(enhanceError(err, config, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_http();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new Cancel("canceled");
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    "use strict";
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      if (!config.url) {
        throw new Error("Provided config url is not valid");
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      if (!config.url) {
        throw new Error("Provided config url is not valid");
      }
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.Cancel = require_Cancel();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.VERSION = require_data().version;
    axios2.all = function all(promises) {
      return Promise.all(promises);
    };
    axios2.spread = require_spread();
    axios2.isAxiosError = require_isAxiosError();
    module2.exports = axios2;
    module2.exports.default = axios2;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module2) {
    module2.exports = require_axios();
  }
});

// src/show-cheatsheets.tsx
var show_cheatsheets_exports = {};
__export(show_cheatsheets_exports, {
  default: () => show_cheatsheets_default
});
var import_api = require("@raycast/api");
var import_react = require("react");

// src/service.ts
var import_axios = __toESM(require_axios2());
var BRANCH = "master";
var OWNER = "hintzd";
var REPO = "cheatsheets";
var listClient = import_axios.default.create({
  baseURL: `https://api.github.com/repos/${OWNER}/${REPO}/git/trees`
});
var fileClient = import_axios.default.create({
  baseURL: `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`
});
var Service = class {
  static async listFiles() {
    const response = await listClient.get(`/${BRANCH}`);
    return response.data.tree;
  }
  static async getSheet(slug) {
    const response = await fileClient.get(`/${slug}.md`);
    return response.data;
  }
  static urlFor(slug) {
    return `https://devhints.io/${slug}`;
  }
};
var service_default = Service;

// src/utils.ts
function getFileName(path) {
  const tokens = path.split(".");
  return tokens[0];
}
function getFileExtension(path) {
  const tokens = path.split(".");
  return tokens[1];
}
function getSheets(files) {
  return files.filter((file) => {
    const isDir = file.type === "tree";
    const isMarkdown = getFileExtension(file.path) === "md";
    const adminFiles = ["CONTRIBUTING", "README", "index", "index@2016"];
    const isAdminFile = adminFiles.includes(getFileName(file.path));
    return !isDir && isMarkdown && !isAdminFile;
  }).map((file) => getFileName(file.path));
}
function stripFrontmatter(markdown) {
  const frontmatterStart = markdown.indexOf("---");
  const frontmatterEnd = markdown.indexOf("---", frontmatterStart + 1);
  return markdown.substring(frontmatterEnd + 3);
}
function stripTemplateTags(markdown) {
  return markdown.split("\n").filter((line) => {
    const isTag = line[0] === "{" && line[1] === ":" || line[1] === "%" && line[line.length - 1] === "}";
    return !isTag;
  }).join("\n");
}
function formatTables(markdown) {
  const lines = markdown.split("\n");
  return lines.map((line, index) => {
    const prevLine = index > 0 ? lines[index - 1] : "";
    const nextLine = index < lines.length - 1 ? lines[index + 1] : "";
    const isPrevLineEmpty = prevLine.trim().length === 0;
    const isNextLineEmpty = nextLine.trim().length === 0;
    const isLineTable = line[0] === "|" && line[line.length - 1] === "|";
    if (isLineTable && isPrevLineEmpty && isNextLineEmpty) {
      return `\`\`\`
${line}
\`\`\``;
    }
    if (isLineTable && isPrevLineEmpty) {
      return `\`\`\`
${line}`;
    }
    if (isLineTable && isNextLineEmpty) {
      return `${line}
\`\`\``;
    }
    return line;
  }).join("\n");
}

// src/show-cheatsheets.tsx
function Command() {
  const [sheets, setSheets] = (0, import_react.useState)([]);
  const [isLoading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    async function fetchList() {
      const files = await service_default.listFiles();
      const sheets2 = getSheets(files);
      setSheets(sheets2);
      setLoading(false);
    }
    fetchList();
  }, []);
  return /* @__PURE__ */ _jsx(import_api.List, {
    isLoading
  }, sheets.map((sheet) => /* @__PURE__ */ _jsx(import_api.List.Item, {
    actions: /* @__PURE__ */ _jsx(import_api.ActionPanel, null, /* @__PURE__ */ _jsx(import_api.Action.Push, {
      title: "Open Cheatsheet",
      icon: import_api.Icon.Window,
      target: /* @__PURE__ */ _jsx(SheetView, {
        slug: sheet
      })
    }), /* @__PURE__ */ _jsx(import_api.Action.OpenInBrowser, {
      url: service_default.urlFor(sheet)
    })),
    key: sheet,
    title: sheet
  })));
}
function SheetView(props) {
  const [sheet, setSheet] = (0, import_react.useState)("");
  const [isLoading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    async function fetchSheet() {
      const sheetMarkdown = await service_default.getSheet(props.slug);
      const sheet2 = formatTables(stripTemplateTags(stripFrontmatter(sheetMarkdown)));
      setSheet(sheet2);
      setLoading(false);
    }
    fetchSheet();
  }, []);
  return /* @__PURE__ */ _jsx(import_api.Detail, {
    isLoading,
    markdown: sheet
  });
}
var show_cheatsheets_default = Command;
module.exports = __toCommonJS(show_cheatsheets_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvbm9kZS5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9kZWJ1Zy5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9mb2xsb3ctcmVkaXJlY3RzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9lbnYvZGF0YS5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvaHR0cC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCAiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9jaGVhdHNoZWV0cy9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL3NyYy9zaG93LWNoZWF0c2hlZXRzLnRzeCIsICIuLi8uLi8uLi8uLi9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0RldmVsb3Blci9naXRodWIvZXh0ZW5zaW9ucy9leHRlbnNpb25zL2NoZWF0c2hlZXRzL3NyYy9zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvRGV2ZWxvcGVyL2dpdGh1Yi9leHRlbnNpb25zL2V4dGVuc2lvbnMvY2hlYXRzaGVldHMvc3JjL3V0aWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFVSTFNlYXJjaFBhcmFtc10nO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZCxcbiAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZCtcXC0uXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL0NhbmNlbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG4gICAgdmFyIHJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgdmFyIG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8ICByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyAnRVRJTUVET1VUJyA6ICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBmdW5jdGlvbihjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IChjYW5jZWwgJiYgY2FuY2VsLnR5cGUpID8gbmV3IENhbmNlbCgnY2FuY2VsZWQnKSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsICIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsICJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblx0XHRsZXQgbmFtZXNwYWNlc0NhY2hlO1xuXHRcdGxldCBlbmFibGVkQ2FjaGU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4ge1xuXHRcdFx0XHRpZiAoZW5hYmxlT3ZlcnJpZGUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gZW5hYmxlT3ZlcnJpZGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5hbWVzcGFjZXNDYWNoZSAhPT0gY3JlYXRlRGVidWcubmFtZXNwYWNlcykge1xuXHRcdFx0XHRcdG5hbWVzcGFjZXNDYWNoZSA9IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXM7XG5cdFx0XHRcdFx0ZW5hYmxlZENhY2hlID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGVuYWJsZWRDYWNoZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cdFx0Y3JlYXRlRGVidWcubmFtZXNwYWNlcyA9IG5hbWVzcGFjZXM7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsICIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZmxhZywgYXJndiA9IHByb2Nlc3MuYXJndikgPT4ge1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvc2l0aW9uID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXHRjb25zdCB0ZXJtaW5hdG9yUG9zaXRpb24gPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3NpdGlvbiAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3NpdGlvbiA9PT0gLTEgfHwgcG9zaXRpb24gPCB0ZXJtaW5hdG9yUG9zaXRpb24pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCB7ZW52fSA9IHByb2Nlc3M7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1uZXZlcicpKSB7XG5cdGZvcmNlQ29sb3IgPSAwO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gMTtcbn1cblxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICd0cnVlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAxO1xuXHR9IGVsc2UgaWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ2ZhbHNlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApLCAzKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCBzdHJlYW1Jc1RUWSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKGhhdmVTdHJlYW0gJiYgIXN0cmVhbUlzVFRZICYmIGZvcmNlQ29sb3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciB8fCAwO1xuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy5cblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSScsICdHSVRIVUJfQUNUSU9OUycsICdCVUlMREtJVEUnXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtLCBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMSkpKSxcblx0c3RkZXJyOiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMikpKVxufTtcbiIsICIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gdXRpbC5kZXByZWNhdGUoXG5cdCgpID0+IHt9LFxuXHQnSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLidcbik7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG50cnkge1xuXHQvLyBPcHRpb25hbCBkZXBlbmRlbmN5IChhcyBpbiwgZG9lc24ndCBuZWVkIHRvIGJlIGluc3RhbGxlZCwgTk9UIGxpa2Ugb3B0aW9uYWxEZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uKVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cdGNvbnN0IHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG5cdGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG5cdFx0ZXhwb3J0cy5jb2xvcnMgPSBbXG5cdFx0XHQyMCxcblx0XHRcdDIxLFxuXHRcdFx0MjYsXG5cdFx0XHQyNyxcblx0XHRcdDMyLFxuXHRcdFx0MzMsXG5cdFx0XHQzOCxcblx0XHRcdDM5LFxuXHRcdFx0NDAsXG5cdFx0XHQ0MSxcblx0XHRcdDQyLFxuXHRcdFx0NDMsXG5cdFx0XHQ0NCxcblx0XHRcdDQ1LFxuXHRcdFx0NTYsXG5cdFx0XHQ1Nyxcblx0XHRcdDYyLFxuXHRcdFx0NjMsXG5cdFx0XHQ2OCxcblx0XHRcdDY5LFxuXHRcdFx0NzQsXG5cdFx0XHQ3NSxcblx0XHRcdDc2LFxuXHRcdFx0NzcsXG5cdFx0XHQ3OCxcblx0XHRcdDc5LFxuXHRcdFx0ODAsXG5cdFx0XHQ4MSxcblx0XHRcdDkyLFxuXHRcdFx0OTMsXG5cdFx0XHQ5OCxcblx0XHRcdDk5LFxuXHRcdFx0MTEyLFxuXHRcdFx0MTEzLFxuXHRcdFx0MTI4LFxuXHRcdFx0MTI5LFxuXHRcdFx0MTM0LFxuXHRcdFx0MTM1LFxuXHRcdFx0MTQ4LFxuXHRcdFx0MTQ5LFxuXHRcdFx0MTYwLFxuXHRcdFx0MTYxLFxuXHRcdFx0MTYyLFxuXHRcdFx0MTYzLFxuXHRcdFx0MTY0LFxuXHRcdFx0MTY1LFxuXHRcdFx0MTY2LFxuXHRcdFx0MTY3LFxuXHRcdFx0MTY4LFxuXHRcdFx0MTY5LFxuXHRcdFx0MTcwLFxuXHRcdFx0MTcxLFxuXHRcdFx0MTcyLFxuXHRcdFx0MTczLFxuXHRcdFx0MTc4LFxuXHRcdFx0MTc5LFxuXHRcdFx0MTg0LFxuXHRcdFx0MTg1LFxuXHRcdFx0MTk2LFxuXHRcdFx0MTk3LFxuXHRcdFx0MTk4LFxuXHRcdFx0MTk5LFxuXHRcdFx0MjAwLFxuXHRcdFx0MjAxLFxuXHRcdFx0MjAyLFxuXHRcdFx0MjAzLFxuXHRcdFx0MjA0LFxuXHRcdFx0MjA1LFxuXHRcdFx0MjA2LFxuXHRcdFx0MjA3LFxuXHRcdFx0MjA4LFxuXHRcdFx0MjA5LFxuXHRcdFx0MjE0LFxuXHRcdFx0MjE1LFxuXHRcdFx0MjIwLFxuXHRcdFx0MjIxXG5cdFx0XTtcblx0fVxufSBjYXRjaCAoZXJyb3IpIHtcblx0Ly8gU3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ge1xuXHRyZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG5cdC8vIENhbWVsLWNhc2Vcblx0Y29uc3QgcHJvcCA9IGtleVxuXHRcdC5zdWJzdHJpbmcoNilcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGsudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblxuXHQvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblx0bGV0IHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cdGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHtcblx0XHR2YWwgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHR9XG5cblx0b2JqW3Byb3BdID0gdmFsO1xuXHRyZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID9cblx0XHRCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6XG5cdFx0dHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGNvbnN0IHtuYW1lc3BhY2U6IG5hbWUsIHVzZUNvbG9yc30gPSB0aGlzO1xuXG5cdGlmICh1c2VDb2xvcnMpIHtcblx0XHRjb25zdCBjID0gdGhpcy5jb2xvcjtcblx0XHRjb25zdCBjb2xvckNvZGUgPSAnXFx1MDAxQlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcblx0XHRjb25zdCBwcmVmaXggPSBgICAke2NvbG9yQ29kZX07MW0ke25hbWV9IFxcdTAwMUJbMG1gO1xuXG5cdFx0YXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuXHRcdGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFCWzBtJyk7XG5cdH0gZWxzZSB7XG5cdFx0YXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG5cdGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHRyZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQoLi4uYXJncykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG5cdFx0Ly8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cblx0XHRkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuXHRkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChzdHIgPT4gc3RyLnRyaW0oKSlcblx0XHQuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJU8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmZvcm1hdHRlcnMuTyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuIiwgIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIC8gbndqcyBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwgInZhciBkZWJ1ZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghZGVidWcpIHtcbiAgICB0cnkge1xuICAgICAgLyogZXNsaW50IGdsb2JhbC1yZXF1aXJlOiBvZmYgKi9cbiAgICAgIGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZm9sbG93LXJlZGlyZWN0c1wiKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IC8qICovIH1cbiAgICBpZiAodHlwZW9mIGRlYnVnICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGRlYnVnID0gZnVuY3Rpb24gKCkgeyAvKiAqLyB9O1xuICAgIH1cbiAgfVxuICBkZWJ1Zy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICJ2YXIgdXJsID0gcmVxdWlyZShcInVybFwiKTtcbnZhciBVUkwgPSB1cmwuVVJMO1xudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBodHRwcyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoXCJzdHJlYW1cIikuV3JpdGFibGU7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xuXG4vLyBDcmVhdGUgaGFuZGxlcnMgdGhhdCBwYXNzIGV2ZW50cyBmcm9tIG5hdGl2ZSByZXF1ZXN0c1xudmFyIGV2ZW50cyA9IFtcImFib3J0XCIsIFwiYWJvcnRlZFwiLCBcImNvbm5lY3RcIiwgXCJlcnJvclwiLCBcInNvY2tldFwiLCBcInRpbWVvdXRcIl07XG52YXIgZXZlbnRIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnRIYW5kbGVyc1tldmVudF0gPSBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHRoaXMuX3JlZGlyZWN0YWJsZS5lbWl0KGV2ZW50LCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgfTtcbn0pO1xuXG4vLyBFcnJvciB0eXBlcyB3aXRoIGNvZGVzXG52YXIgUmVkaXJlY3Rpb25FcnJvciA9IGNyZWF0ZUVycm9yVHlwZShcbiAgXCJFUlJfRlJfUkVESVJFQ1RJT05fRkFJTFVSRVwiLFxuICBcIlJlZGlyZWN0ZWQgcmVxdWVzdCBmYWlsZWRcIlxuKTtcbnZhciBUb29NYW55UmVkaXJlY3RzRXJyb3IgPSBjcmVhdGVFcnJvclR5cGUoXG4gIFwiRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUU1wiLFxuICBcIk1heGltdW0gbnVtYmVyIG9mIHJlZGlyZWN0cyBleGNlZWRlZFwiXG4pO1xudmFyIE1heEJvZHlMZW5ndGhFeGNlZWRlZEVycm9yID0gY3JlYXRlRXJyb3JUeXBlKFxuICBcIkVSUl9GUl9NQVhfQk9EWV9MRU5HVEhfRVhDRUVERURcIixcbiAgXCJSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdFwiXG4pO1xudmFyIFdyaXRlQWZ0ZXJFbmRFcnJvciA9IGNyZWF0ZUVycm9yVHlwZShcbiAgXCJFUlJfU1RSRUFNX1dSSVRFX0FGVEVSX0VORFwiLFxuICBcIndyaXRlIGFmdGVyIGVuZFwiXG4pO1xuXG4vLyBBbiBIVFRQKFMpIHJlcXVlc3QgdGhhdCBjYW4gYmUgcmVkaXJlY3RlZFxuZnVuY3Rpb24gUmVkaXJlY3RhYmxlUmVxdWVzdChvcHRpb25zLCByZXNwb25zZUNhbGxiYWNrKSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIHJlcXVlc3RcbiAgV3JpdGFibGUuY2FsbCh0aGlzKTtcbiAgdGhpcy5fc2FuaXRpemVPcHRpb25zKG9wdGlvbnMpO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgdGhpcy5fZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuX3JlZGlyZWN0Q291bnQgPSAwO1xuICB0aGlzLl9yZWRpcmVjdHMgPSBbXTtcbiAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggPSAwO1xuICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm9uKFwicmVzcG9uc2VcIiwgcmVzcG9uc2VDYWxsYmFjayk7XG4gIH1cblxuICAvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSB0aGUgZmlyc3QgcmVxdWVzdFxuICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xufVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5cblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICBhYm9ydFJlcXVlc3QodGhpcy5fY3VycmVudFJlcXVlc3QpO1xuICB0aGlzLmVtaXQoXCJhYm9ydFwiKTtcbn07XG5cbi8vIFdyaXRlcyBidWZmZXJlZCBkYXRhIHRvIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gV3JpdGluZyBpcyBub3QgYWxsb3dlZCBpZiBlbmQgaGFzIGJlZW4gY2FsbGVkXG4gIGlmICh0aGlzLl9lbmRpbmcpIHtcbiAgICB0aHJvdyBuZXcgV3JpdGVBZnRlckVuZEVycm9yKCk7XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBpbnB1dCBhbmQgc2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKCEodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKFwibGVuZ3RoXCIgaW4gZGF0YSkpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImRhdGEgc2hvdWxkIGJlIGEgc3RyaW5nLCBCdWZmZXIgb3IgVWludDhBcnJheVwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBidWZmZXJzLCBzaW5jZSB3cml0aW5nIHRoZW0gZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNjZcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT25seSB3cml0ZSB3aGVuIHdlIGRvbid0IGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBpZiAodGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKyBkYXRhLmxlbmd0aCA8PSB0aGlzLl9vcHRpb25zLm1heEJvZHlMZW5ndGgpIHtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMucHVzaCh7IGRhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZyB9KTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC53cml0ZShkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG4gIC8vIEVycm9yIHdoZW4gd2UgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGVsc2Uge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBNYXhCb2R5TGVuZ3RoRXhjZWVkZWRFcnJvcigpKTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn07XG5cbi8vIEVuZHMgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gU2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgZGF0YSA9IGVuY29kaW5nID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gV3JpdGUgZGF0YSBpZiBuZWVkZWQgYW5kIGVuZFxuICBpZiAoIWRhdGEpIHtcbiAgICB0aGlzLl9lbmRlZCA9IHRoaXMuX2VuZGluZyA9IHRydWU7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRSZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3Q7XG4gICAgdGhpcy53cml0ZShkYXRhLCBlbmNvZGluZywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbmRpbmcgPSB0cnVlO1xuICB9XG59O1xuXG4vLyBTZXRzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5zZXRIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldEhlYWRlcihuYW1lLCB2YWx1ZSk7XG59O1xuXG4vLyBDbGVhcnMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUhlYWRlcihuYW1lKTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lb3V0IGZvciBhbGwgdW5kZXJseWluZyByZXF1ZXN0c1xuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChtc2VjcywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIERlc3Ryb3lzIHRoZSBzb2NrZXQgb24gdGltZW91dFxuICBmdW5jdGlvbiBkZXN0cm95T25UaW1lb3V0KHNvY2tldCkge1xuICAgIHNvY2tldC5zZXRUaW1lb3V0KG1zZWNzKTtcbiAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoXCJ0aW1lb3V0XCIsIHNvY2tldC5kZXN0cm95KTtcbiAgICBzb2NrZXQuYWRkTGlzdGVuZXIoXCJ0aW1lb3V0XCIsIHNvY2tldC5kZXN0cm95KTtcbiAgfVxuXG4gIC8vIFNldHMgdXAgYSB0aW1lciB0byB0cmlnZ2VyIGEgdGltZW91dCBldmVudFxuICBmdW5jdGlvbiBzdGFydFRpbWVyKHNvY2tldCkge1xuICAgIGlmIChzZWxmLl90aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi5fdGltZW91dCk7XG4gICAgfVxuICAgIHNlbGYuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdChcInRpbWVvdXRcIik7XG4gICAgICBjbGVhclRpbWVyKCk7XG4gICAgfSwgbXNlY3MpO1xuICAgIGRlc3Ryb3lPblRpbWVvdXQoc29ja2V0KTtcbiAgfVxuXG4gIC8vIFN0b3BzIGEgdGltZW91dCBmcm9tIHRyaWdnZXJpbmdcbiAgZnVuY3Rpb24gY2xlYXJUaW1lcigpIHtcbiAgICAvLyBDbGVhciB0aGUgdGltZW91dFxuICAgIGlmIChzZWxmLl90aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi5fdGltZW91dCk7XG4gICAgICBzZWxmLl90aW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBhbGwgYXR0YWNoZWQgbGlzdGVuZXJzXG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihcImFib3J0XCIsIGNsZWFyVGltZXIpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBjbGVhclRpbWVyKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwicmVzcG9uc2VcIiwgY2xlYXJUaW1lcik7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwidGltZW91dFwiLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGlmICghc2VsZi5zb2NrZXQpIHtcbiAgICAgIHNlbGYuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKFwic29ja2V0XCIsIHN0YXJ0VGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEF0dGFjaCBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbihcInRpbWVvdXRcIiwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gU3RhcnQgdGhlIHRpbWVyIGlmIG9yIHdoZW4gdGhlIHNvY2tldCBpcyBvcGVuZWRcbiAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgc3RhcnRUaW1lcih0aGlzLnNvY2tldCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qub25jZShcInNvY2tldFwiLCBzdGFydFRpbWVyKTtcbiAgfVxuXG4gIC8vIENsZWFuIHVwIG9uIGV2ZW50c1xuICB0aGlzLm9uKFwic29ja2V0XCIsIGRlc3Ryb3lPblRpbWVvdXQpO1xuICB0aGlzLm9uKFwiYWJvcnRcIiwgY2xlYXJUaW1lcik7XG4gIHRoaXMub24oXCJlcnJvclwiLCBjbGVhclRpbWVyKTtcbiAgdGhpcy5vbihcInJlc3BvbnNlXCIsIGNsZWFyVGltZXIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gUHJveHkgYWxsIG90aGVyIHB1YmxpYyBDbGllbnRSZXF1ZXN0IG1ldGhvZHNcbltcbiAgXCJmbHVzaEhlYWRlcnNcIiwgXCJnZXRIZWFkZXJcIixcbiAgXCJzZXROb0RlbGF5XCIsIFwic2V0U29ja2V0S2VlcEFsaXZlXCIsXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbbWV0aG9kXShhLCBiKTtcbiAgfTtcbn0pO1xuXG4vLyBQcm94eSBhbGwgcHVibGljIENsaWVudFJlcXVlc3QgcHJvcGVydGllc1xuW1wiYWJvcnRlZFwiLCBcImNvbm5lY3Rpb25cIiwgXCJzb2NrZXRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbcHJvcGVydHldOyB9LFxuICB9KTtcbn0pO1xuXG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fc2FuaXRpemVPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgLy8gRW5zdXJlIGhlYWRlcnMgYXJlIGFsd2F5cyBwcmVzZW50XG4gIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge307XG4gIH1cblxuICAvLyBTaW5jZSBodHRwLnJlcXVlc3QgdHJlYXRzIGhvc3QgYXMgYW4gYWxpYXMgb2YgaG9zdG5hbWUsXG4gIC8vIGJ1dCB0aGUgdXJsIG1vZHVsZSBpbnRlcnByZXRzIGhvc3QgYXMgaG9zdG5hbWUgcGx1cyBwb3J0LFxuICAvLyBlbGltaW5hdGUgdGhlIGhvc3QgcHJvcGVydHkgdG8gYXZvaWQgY29uZnVzaW9uLlxuICBpZiAob3B0aW9ucy5ob3N0KSB7XG4gICAgLy8gVXNlIGhvc3RuYW1lIGlmIHNldCwgYmVjYXVzZSBpdCBoYXMgcHJlY2VkZW5jZVxuICAgIGlmICghb3B0aW9ucy5ob3N0bmFtZSkge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdDtcbiAgICB9XG4gICAgZGVsZXRlIG9wdGlvbnMuaG9zdDtcbiAgfVxuXG4gIC8vIENvbXBsZXRlIHRoZSBVUkwgb2JqZWN0IHdoZW4gbmVjZXNzYXJ5XG4gIGlmICghb3B0aW9ucy5wYXRobmFtZSAmJiBvcHRpb25zLnBhdGgpIHtcbiAgICB2YXIgc2VhcmNoUG9zID0gb3B0aW9ucy5wYXRoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChzZWFyY2hQb3MgPCAwKSB7XG4gICAgICBvcHRpb25zLnBhdGhuYW1lID0gb3B0aW9ucy5wYXRoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGguc3Vic3RyaW5nKDAsIHNlYXJjaFBvcyk7XG4gICAgICBvcHRpb25zLnNlYXJjaCA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoc2VhcmNoUG9zKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gRXhlY3V0ZXMgdGhlIG5leHQgbmF0aXZlIHJlcXVlc3QgKGluaXRpYWwgb3IgcmVkaXJlY3QpXG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIExvYWQgdGhlIG5hdGl2ZSBwcm90b2NvbFxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuICB2YXIgbmF0aXZlUHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLm5hdGl2ZVByb3RvY29sc1twcm90b2NvbF07XG4gIGlmICghbmF0aXZlUHJvdG9jb2wpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgVHlwZUVycm9yKFwiVW5zdXBwb3J0ZWQgcHJvdG9jb2wgXCIgKyBwcm90b2NvbCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIHNwZWNpZmllZCwgdXNlIHRoZSBhZ2VudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm90b2NvbFxuICAvLyAoSFRUUCBhbmQgSFRUUFMgdXNlIGRpZmZlcmVudCB0eXBlcyBvZiBhZ2VudHMpXG4gIGlmICh0aGlzLl9vcHRpb25zLmFnZW50cykge1xuICAgIHZhciBzY2hlbWUgPSBwcm90b2NvbC5zdWJzdHIoMCwgcHJvdG9jb2wubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5fb3B0aW9ucy5hZ2VudCA9IHRoaXMuX29wdGlvbnMuYWdlbnRzW3NjaGVtZV07XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIG5hdGl2ZSByZXF1ZXN0XG4gIHZhciByZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3QgPVxuICAgICAgICBuYXRpdmVQcm90b2NvbC5yZXF1ZXN0KHRoaXMuX29wdGlvbnMsIHRoaXMuX29uTmF0aXZlUmVzcG9uc2UpO1xuICB0aGlzLl9jdXJyZW50VXJsID0gdXJsLmZvcm1hdCh0aGlzLl9vcHRpb25zKTtcblxuICAvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnNcbiAgcmVxdWVzdC5fcmVkaXJlY3RhYmxlID0gdGhpcztcbiAgZm9yICh2YXIgZSA9IDA7IGUgPCBldmVudHMubGVuZ3RoOyBlKyspIHtcbiAgICByZXF1ZXN0Lm9uKGV2ZW50c1tlXSwgZXZlbnRIYW5kbGVyc1tldmVudHNbZV1dKTtcbiAgfVxuXG4gIC8vIEVuZCBhIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAvLyAoVGhlIGZpcnN0IHJlcXVlc3QgbXVzdCBiZSBlbmRlZCBleHBsaWNpdGx5IHdpdGggUmVkaXJlY3RhYmxlUmVxdWVzdCNlbmQpXG4gIGlmICh0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgLy8gV3JpdGUgdGhlIHJlcXVlc3QgZW50aXR5IGFuZCBlbmQuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVycyA9IHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycztcbiAgICAoZnVuY3Rpb24gd3JpdGVOZXh0KGVycm9yKSB7XG4gICAgICAvLyBPbmx5IHdyaXRlIGlmIHRoaXMgcmVxdWVzdCBoYXMgbm90IGJlZW4gcmVkaXJlY3RlZCB5ZXRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocmVxdWVzdCA9PT0gc2VsZi5fY3VycmVudFJlcXVlc3QpIHtcbiAgICAgICAgLy8gUmVwb3J0IGFueSB3cml0ZSBlcnJvcnNcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNlbGYuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcml0ZSB0aGUgbmV4dCBidWZmZXIgaWYgdGhlcmUgYXJlIHN0aWxsIGxlZnRcbiAgICAgICAgZWxzZSBpZiAoaSA8IGJ1ZmZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGJ1ZmZlciA9IGJ1ZmZlcnNbaSsrXTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmICghcmVxdWVzdC5maW5pc2hlZCkge1xuICAgICAgICAgICAgcmVxdWVzdC53cml0ZShidWZmZXIuZGF0YSwgYnVmZmVyLmVuY29kaW5nLCB3cml0ZU5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbmQgdGhlIHJlcXVlc3QgaWYgYGVuZGAgaGFzIGJlZW4gY2FsbGVkIG9uIHVzXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuX2VuZGVkKSB7XG4gICAgICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0oKSk7XG4gIH1cbn07XG5cbi8vIFByb2Nlc3NlcyBhIHJlc3BvbnNlIGZyb20gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wcm9jZXNzUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gU3RvcmUgdGhlIHJlZGlyZWN0ZWQgcmVzcG9uc2VcbiAgdmFyIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICBpZiAodGhpcy5fb3B0aW9ucy50cmFja1JlZGlyZWN0cykge1xuICAgIHRoaXMuX3JlZGlyZWN0cy5wdXNoKHtcbiAgICAgIHVybDogdGhpcy5fY3VycmVudFVybCxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gUkZDNzIzMVx1MDBBNzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG4gIC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuICAvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG4gIC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuICAvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cbiAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuICAgICAgc3RhdHVzQ29kZSA+PSAzMDAgJiYgc3RhdHVzQ29kZSA8IDQwMCkge1xuICAgIC8vIEFib3J0IHRoZSBjdXJyZW50IHJlcXVlc3RcbiAgICBhYm9ydFJlcXVlc3QodGhpcy5fY3VycmVudFJlcXVlc3QpO1xuICAgIC8vIERpc2NhcmQgdGhlIHJlbWFpbmRlciBvZiB0aGUgcmVzcG9uc2UgdG8gYXZvaWQgd2FpdGluZyBmb3IgZGF0YVxuICAgIHJlc3BvbnNlLmRlc3Ryb3koKTtcblxuICAgIC8vIFJGQzcyMzFcdTAwQTc2LjQ6IEEgY2xpZW50IFNIT1VMRCBkZXRlY3QgYW5kIGludGVydmVuZVxuICAgIC8vIGluIGN5Y2xpY2FsIHJlZGlyZWN0aW9ucyAoaS5lLiwgXCJpbmZpbml0ZVwiIHJlZGlyZWN0aW9uIGxvb3BzKS5cbiAgICBpZiAoKyt0aGlzLl9yZWRpcmVjdENvdW50ID4gdGhpcy5fb3B0aW9ucy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBUb29NYW55UmVkaXJlY3RzRXJyb3IoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUkZDNzIzMVx1MDBBNzYuNDogQXV0b21hdGljIHJlZGlyZWN0aW9uIG5lZWRzIHRvIGRvbmUgd2l0aFxuICAgIC8vIGNhcmUgZm9yIG1ldGhvZHMgbm90IGtub3duIHRvIGJlIHNhZmUsIFtcdTIwMjZdXG4gICAgLy8gUkZDNzIzMVx1MDBBNzYuNC4yXHUyMDEzMzogRm9yIGhpc3RvcmljYWwgcmVhc29ucywgYSB1c2VyIGFnZW50IE1BWSBjaGFuZ2VcbiAgICAvLyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVCBmb3IgdGhlIHN1YnNlcXVlbnQgcmVxdWVzdC5cbiAgICBpZiAoKHN0YXR1c0NvZGUgPT09IDMwMSB8fCBzdGF0dXNDb2RlID09PSAzMDIpICYmIHRoaXMuX29wdGlvbnMubWV0aG9kID09PSBcIlBPU1RcIiB8fFxuICAgICAgICAvLyBSRkM3MjMxXHUwMEE3Ni40LjQ6IFRoZSAzMDMgKFNlZSBPdGhlcikgc3RhdHVzIGNvZGUgaW5kaWNhdGVzIHRoYXRcbiAgICAgICAgLy8gdGhlIHNlcnZlciBpcyByZWRpcmVjdGluZyB0aGUgdXNlciBhZ2VudCB0byBhIGRpZmZlcmVudCByZXNvdXJjZSBbXHUyMDI2XVxuICAgICAgICAvLyBBIHVzZXIgYWdlbnQgY2FuIHBlcmZvcm0gYSByZXRyaWV2YWwgcmVxdWVzdCB0YXJnZXRpbmcgdGhhdCBVUklcbiAgICAgICAgLy8gKGEgR0VUIG9yIEhFQUQgcmVxdWVzdCBpZiB1c2luZyBIVFRQKSBbXHUyMDI2XVxuICAgICAgICAoc3RhdHVzQ29kZSA9PT0gMzAzKSAmJiAhL14oPzpHRVR8SEVBRCkkLy50ZXN0KHRoaXMuX29wdGlvbnMubWV0aG9kKSkge1xuICAgICAgdGhpcy5fb3B0aW9ucy5tZXRob2QgPSBcIkdFVFwiO1xuICAgICAgLy8gRHJvcCBhIHBvc3NpYmxlIGVudGl0eSBhbmQgaGVhZGVycyByZWxhdGVkIHRvIGl0XG4gICAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcbiAgICAgIHJlbW92ZU1hdGNoaW5nSGVhZGVycygvXmNvbnRlbnQtL2ksIHRoaXMuX29wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuXG4gICAgLy8gRHJvcCB0aGUgSG9zdCBoZWFkZXIsIGFzIHRoZSByZWRpcmVjdCBtaWdodCBsZWFkIHRvIGEgZGlmZmVyZW50IGhvc3RcbiAgICB2YXIgY3VycmVudEhvc3RIZWFkZXIgPSByZW1vdmVNYXRjaGluZ0hlYWRlcnMoL15ob3N0JC9pLCB0aGlzLl9vcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgLy8gSWYgdGhlIHJlZGlyZWN0IGlzIHJlbGF0aXZlLCBjYXJyeSBvdmVyIHRoZSBob3N0IG9mIHRoZSBsYXN0IHJlcXVlc3RcbiAgICB2YXIgY3VycmVudFVybFBhcnRzID0gdXJsLnBhcnNlKHRoaXMuX2N1cnJlbnRVcmwpO1xuICAgIHZhciBjdXJyZW50SG9zdCA9IGN1cnJlbnRIb3N0SGVhZGVyIHx8IGN1cnJlbnRVcmxQYXJ0cy5ob3N0O1xuICAgIHZhciBjdXJyZW50VXJsID0gL15cXHcrOi8udGVzdChsb2NhdGlvbikgPyB0aGlzLl9jdXJyZW50VXJsIDpcbiAgICAgIHVybC5mb3JtYXQoT2JqZWN0LmFzc2lnbihjdXJyZW50VXJsUGFydHMsIHsgaG9zdDogY3VycmVudEhvc3QgfSkpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBVUkwgb2YgdGhlIHJlZGlyZWN0aW9uXG4gICAgdmFyIHJlZGlyZWN0VXJsO1xuICAgIHRyeSB7XG4gICAgICByZWRpcmVjdFVybCA9IHVybC5yZXNvbHZlKGN1cnJlbnRVcmwsIGxvY2F0aW9uKTtcbiAgICB9XG4gICAgY2F0Y2ggKGNhdXNlKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgUmVkaXJlY3Rpb25FcnJvcihjYXVzZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgcmVkaXJlY3RlZCByZXF1ZXN0XG4gICAgZGVidWcoXCJyZWRpcmVjdGluZyB0b1wiLCByZWRpcmVjdFVybCk7XG4gICAgdGhpcy5faXNSZWRpcmVjdCA9IHRydWU7XG4gICAgdmFyIHJlZGlyZWN0VXJsUGFydHMgPSB1cmwucGFyc2UocmVkaXJlY3RVcmwpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgcmVkaXJlY3RVcmxQYXJ0cyk7XG5cbiAgICAvLyBEcm9wIHRoZSBjb25maWRlbnRpYWwgaGVhZGVycyB3aGVuIHJlZGlyZWN0aW5nIHRvIGFub3RoZXIgZG9tYWluXG4gICAgaWYgKCEocmVkaXJlY3RVcmxQYXJ0cy5ob3N0ID09PSBjdXJyZW50SG9zdCB8fCBpc1N1YmRvbWFpbk9mKHJlZGlyZWN0VXJsUGFydHMuaG9zdCwgY3VycmVudEhvc3QpKSkge1xuICAgICAgcmVtb3ZlTWF0Y2hpbmdIZWFkZXJzKC9eKD86YXV0aG9yaXphdGlvbnxjb29raWUpJC9pLCB0aGlzLl9vcHRpb25zLmhlYWRlcnMpO1xuICAgIH1cblxuICAgIC8vIEV2YWx1YXRlIHRoZSBiZWZvcmVSZWRpcmVjdCBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgdGhpcy5fb3B0aW9ucy5iZWZvcmVSZWRpcmVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgcmVzcG9uc2VEZXRhaWxzID0geyBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzIH07XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmJlZm9yZVJlZGlyZWN0LmNhbGwobnVsbCwgdGhpcy5fb3B0aW9ucywgcmVzcG9uc2VEZXRhaWxzKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2FuaXRpemVPcHRpb25zKHRoaXMuX29wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gdGhlIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xuICAgIH1cbiAgICBjYXRjaCAoY2F1c2UpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBSZWRpcmVjdGlvbkVycm9yKGNhdXNlKSk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSByZXNwb25zZSBpcyBub3QgYSByZWRpcmVjdDsgcmV0dXJuIGl0IGFzLWlzXG4gICAgcmVzcG9uc2UucmVzcG9uc2VVcmwgPSB0aGlzLl9jdXJyZW50VXJsO1xuICAgIHJlc3BvbnNlLnJlZGlyZWN0cyA9IHRoaXMuX3JlZGlyZWN0cztcbiAgICB0aGlzLmVtaXQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG5cbiAgICAvLyBDbGVhbiB1cFxuICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuICB9XG59O1xuXG4vLyBXcmFwcyB0aGUga2V5L3ZhbHVlIG9iamVjdCBvZiBwcm90b2NvbHMgd2l0aCByZWRpcmVjdCBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiB3cmFwKHByb3RvY29scykge1xuICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gIHZhciBleHBvcnRzID0ge1xuICAgIG1heFJlZGlyZWN0czogMjEsXG4gICAgbWF4Qm9keUxlbmd0aDogMTAgKiAxMDI0ICogMTAyNCxcbiAgfTtcblxuICAvLyBXcmFwIGVhY2ggcHJvdG9jb2xcbiAgdmFyIG5hdGl2ZVByb3RvY29scyA9IHt9O1xuICBPYmplY3Qua2V5cyhwcm90b2NvbHMpLmZvckVhY2goZnVuY3Rpb24gKHNjaGVtZSkge1xuICAgIHZhciBwcm90b2NvbCA9IHNjaGVtZSArIFwiOlwiO1xuICAgIHZhciBuYXRpdmVQcm90b2NvbCA9IG5hdGl2ZVByb3RvY29sc1twcm90b2NvbF0gPSBwcm90b2NvbHNbc2NoZW1lXTtcbiAgICB2YXIgd3JhcHBlZFByb3RvY29sID0gZXhwb3J0c1tzY2hlbWVdID0gT2JqZWN0LmNyZWF0ZShuYXRpdmVQcm90b2NvbCk7XG5cbiAgICAvLyBFeGVjdXRlcyBhIHJlcXVlc3QsIGZvbGxvd2luZyByZWRpcmVjdHNcbiAgICBmdW5jdGlvbiByZXF1ZXN0KGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgLy8gUGFyc2UgcGFyYW1ldGVyc1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgdXJsU3RyID0gaW5wdXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5wdXQgPSB1cmxUb09wdGlvbnMobmV3IFVSTCh1cmxTdHIpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpbnB1dCA9IHVybC5wYXJzZSh1cmxTdHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChVUkwgJiYgKGlucHV0IGluc3RhbmNlb2YgVVJMKSkge1xuICAgICAgICBpbnB1dCA9IHVybFRvT3B0aW9ucyhpbnB1dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gaW5wdXQ7XG4gICAgICAgIGlucHV0ID0geyBwcm90b2NvbDogcHJvdG9jb2wgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtYXhSZWRpcmVjdHM6IGV4cG9ydHMubWF4UmVkaXJlY3RzLFxuICAgICAgICBtYXhCb2R5TGVuZ3RoOiBleHBvcnRzLm1heEJvZHlMZW5ndGgsXG4gICAgICB9LCBpbnB1dCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLm5hdGl2ZVByb3RvY29scyA9IG5hdGl2ZVByb3RvY29scztcblxuICAgICAgYXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCBcInByb3RvY29sIG1pc21hdGNoXCIpO1xuICAgICAgZGVidWcoXCJvcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlcyBhIEdFVCByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG4gICAgZnVuY3Rpb24gZ2V0KGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHdyYXBwZWRSZXF1ZXN0ID0gd3JhcHBlZFByb3RvY29sLnJlcXVlc3QoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIHdyYXBwZWRSZXF1ZXN0LmVuZCgpO1xuICAgICAgcmV0dXJuIHdyYXBwZWRSZXF1ZXN0O1xuICAgIH1cblxuICAgIC8vIEV4cG9zZSB0aGUgcHJvcGVydGllcyBvbiB0aGUgd3JhcHBlZCBwcm90b2NvbFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBwZWRQcm90b2NvbCwge1xuICAgICAgcmVxdWVzdDogeyB2YWx1ZTogcmVxdWVzdCwgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgZ2V0OiB7IHZhbHVlOiBnZXQsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRzO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gbm9vcCgpIHsgLyogZW1wdHkgKi8gfVxuXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21hc3Rlci9saWIvaW50ZXJuYWwvdXJsLmpzXG5mdW5jdGlvbiB1cmxUb09wdGlvbnModXJsT2JqZWN0KSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIHByb3RvY29sOiB1cmxPYmplY3QucHJvdG9jb2wsXG4gICAgaG9zdG5hbWU6IHVybE9iamVjdC5ob3N0bmFtZS5zdGFydHNXaXRoKFwiW1wiKSA/XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdXJsT2JqZWN0Lmhvc3RuYW1lLnNsaWNlKDEsIC0xKSA6XG4gICAgICB1cmxPYmplY3QuaG9zdG5hbWUsXG4gICAgaGFzaDogdXJsT2JqZWN0Lmhhc2gsXG4gICAgc2VhcmNoOiB1cmxPYmplY3Quc2VhcmNoLFxuICAgIHBhdGhuYW1lOiB1cmxPYmplY3QucGF0aG5hbWUsXG4gICAgcGF0aDogdXJsT2JqZWN0LnBhdGhuYW1lICsgdXJsT2JqZWN0LnNlYXJjaCxcbiAgICBocmVmOiB1cmxPYmplY3QuaHJlZixcbiAgfTtcbiAgaWYgKHVybE9iamVjdC5wb3J0ICE9PSBcIlwiKSB7XG4gICAgb3B0aW9ucy5wb3J0ID0gTnVtYmVyKHVybE9iamVjdC5wb3J0KTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWF0Y2hpbmdIZWFkZXJzKHJlZ2V4LCBoZWFkZXJzKSB7XG4gIHZhciBsYXN0VmFsdWU7XG4gIGZvciAodmFyIGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKHJlZ2V4LnRlc3QoaGVhZGVyKSkge1xuICAgICAgbGFzdFZhbHVlID0gaGVhZGVyc1toZWFkZXJdO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChsYXN0VmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGxhc3RWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgP1xuICAgIHVuZGVmaW5lZCA6IFN0cmluZyhsYXN0VmFsdWUpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JUeXBlKGNvZGUsIGRlZmF1bHRNZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIEN1c3RvbUVycm9yKGNhdXNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgaWYgKCFjYXVzZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gZGVmYXVsdE1lc3NhZ2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlID0gZGVmYXVsdE1lc3NhZ2UgKyBcIjogXCIgKyBjYXVzZS5tZXNzYWdlO1xuICAgICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgIH1cbiAgfVxuICBDdXN0b21FcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbiAgQ3VzdG9tRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ3VzdG9tRXJyb3I7XG4gIEN1c3RvbUVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJFcnJvciBbXCIgKyBjb2RlICsgXCJdXCI7XG4gIEN1c3RvbUVycm9yLnByb3RvdHlwZS5jb2RlID0gY29kZTtcbiAgcmV0dXJuIEN1c3RvbUVycm9yO1xufVxuXG5mdW5jdGlvbiBhYm9ydFJlcXVlc3QocmVxdWVzdCkge1xuICBmb3IgKHZhciBlID0gMDsgZSA8IGV2ZW50cy5sZW5ndGg7IGUrKykge1xuICAgIHJlcXVlc3QucmVtb3ZlTGlzdGVuZXIoZXZlbnRzW2VdLCBldmVudEhhbmRsZXJzW2V2ZW50c1tlXV0pO1xuICB9XG4gIHJlcXVlc3Qub24oXCJlcnJvclwiLCBub29wKTtcbiAgcmVxdWVzdC5hYm9ydCgpO1xufVxuXG5mdW5jdGlvbiBpc1N1YmRvbWFpbk9mKHN1YmRvbWFpbiwgZG9tYWluKSB7XG4gIGNvbnN0IGRvdCA9IHN1YmRvbWFpbi5sZW5ndGggLSBkb21haW4ubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGRvdCA+IDAgJiYgc3ViZG9tYWluW2RvdF0gPT09IFwiLlwiICYmIHN1YmRvbWFpbi5lbmRzV2l0aChkb21haW4pO1xufVxuXG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXAoeyBodHRwOiBodHRwLCBodHRwczogaHR0cHMgfSk7XG5tb2R1bGUuZXhwb3J0cy53cmFwID0gd3JhcDtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4yNS4wXCJcbn07IiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciBodHRwRm9sbG93ID0gcmVxdWlyZSgnZm9sbG93LXJlZGlyZWN0cycpLmh0dHA7XG52YXIgaHR0cHNGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cHM7XG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG52YXIgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbnZhciBWRVJTSU9OID0gcmVxdWlyZSgnLi8uLi9lbnYvZGF0YScpLnZlcnNpb247XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9lbmhhbmNlRXJyb3InKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL0NhbmNlbCcpO1xuXG52YXIgaXNIdHRwcyA9IC9odHRwczo/LztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtodHRwLkNsaWVudFJlcXVlc3RBcmdzfSBvcHRpb25zXG4gKiBAcGFyYW0ge0F4aW9zUHJveHlDb25maWd9IHByb3h5XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqL1xuZnVuY3Rpb24gc2V0UHJveHkob3B0aW9ucywgcHJveHksIGxvY2F0aW9uKSB7XG4gIG9wdGlvbnMuaG9zdG5hbWUgPSBwcm94eS5ob3N0O1xuICBvcHRpb25zLmhvc3QgPSBwcm94eS5ob3N0O1xuICBvcHRpb25zLnBvcnQgPSBwcm94eS5wb3J0O1xuICBvcHRpb25zLnBhdGggPSBsb2NhdGlvbjtcblxuICAvLyBCYXNpYyBwcm94eSBhdXRob3JpemF0aW9uXG4gIGlmIChwcm94eS5hdXRoKSB7XG4gICAgdmFyIGJhc2U2NCA9IEJ1ZmZlci5mcm9tKHByb3h5LmF1dGgudXNlcm5hbWUgKyAnOicgKyBwcm94eS5hdXRoLnBhc3N3b3JkLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYyAnICsgYmFzZTY0O1xuICB9XG5cbiAgLy8gSWYgYSBwcm94eSBpcyB1c2VkLCBhbnkgcmVkaXJlY3RzIG11c3QgYWxzbyBwYXNzIHRocm91Z2ggdGhlIHByb3h5XG4gIG9wdGlvbnMuYmVmb3JlUmVkaXJlY3QgPSBmdW5jdGlvbiBiZWZvcmVSZWRpcmVjdChyZWRpcmVjdGlvbikge1xuICAgIHJlZGlyZWN0aW9uLmhlYWRlcnMuaG9zdCA9IHJlZGlyZWN0aW9uLmhvc3Q7XG4gICAgc2V0UHJveHkocmVkaXJlY3Rpb24sIHByb3h5LCByZWRpcmVjdGlvbi5ocmVmKTtcbiAgfTtcbn1cblxuLyplc2xpbnQgY29uc2lzdGVudC1yZXR1cm46MCovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hIdHRwUmVxdWVzdChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkge1xuICAgIHZhciBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIGRvbmUoKTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciByZWplY3RlZCA9IGZhbHNlO1xuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICAgIGRvbmUoKTtcbiAgICAgIHJlamVjdGVkID0gdHJ1ZTtcbiAgICAgIHJlamVjdFByb21pc2UodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGRhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIHZhciBoZWFkZXJOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiBzdG9yZUxvd2VyTmFtZShuYW1lKSB7XG4gICAgICBoZWFkZXJOYW1lc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gbmFtZTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBVc2VyLUFnZW50IChyZXF1aXJlZCBieSBzb21lIHNlcnZlcnMpXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvNjlcbiAgICBpZiAoJ3VzZXItYWdlbnQnIGluIGhlYWRlck5hbWVzKSB7XG4gICAgICAvLyBVc2VyLUFnZW50IGlzIHNwZWNpZmllZDsgaGFuZGxlIGNhc2Ugd2hlcmUgbm8gVUEgaGVhZGVyIGlzIGRlc2lyZWRcbiAgICAgIGlmICghaGVhZGVyc1toZWFkZXJOYW1lc1sndXNlci1hZ2VudCddXSkge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJOYW1lc1sndXNlci1hZ2VudCddXTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSwgdXNlIHNwZWNpZmllZCB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IHNldCBoZWFkZXIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IGluIGNvbmZpZ1xuICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBWRVJTSU9OO1xuICAgIH1cblxuICAgIGlmIChkYXRhICYmICF1dGlscy5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLi4uXG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEsICd1dGYtOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICAgICAnRGF0YSBhZnRlciB0cmFuc2Zvcm1hdGlvbiBtdXN0IGJlIGEgc3RyaW5nLCBhbiBBcnJheUJ1ZmZlciwgYSBCdWZmZXIsIG9yIGEgU3RyZWFtJyxcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4Qm9keUxlbmd0aCA+IC0xICYmIGRhdGEubGVuZ3RoID4gY29uZmlnLm1heEJvZHlMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBib2R5IGxhcmdlciB0aGFuIG1heEJvZHlMZW5ndGggbGltaXQnLCBjb25maWcpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIENvbnRlbnQtTGVuZ3RoIGhlYWRlciBpZiBkYXRhIGV4aXN0c1xuICAgICAgaWYgKCFoZWFkZXJOYW1lc1snY29udGVudC1sZW5ndGgnXSkge1xuICAgICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIHZhciBhdXRoID0gdW5kZWZpbmVkO1xuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIGF1dGggPSB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHVybFxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoZnVsbFBhdGgpO1xuICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xuXG4gICAgaWYgKCFhdXRoICYmIHBhcnNlZC5hdXRoKSB7XG4gICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgdXJsVXNlcm5hbWUgPSB1cmxBdXRoWzBdIHx8ICcnO1xuICAgICAgdmFyIHVybFBhc3N3b3JkID0gdXJsQXV0aFsxXSB8fCAnJztcbiAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmIChhdXRoICYmIGhlYWRlck5hbWVzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlck5hbWVzLmF1dGhvcml6YXRpb25dO1xuICAgIH1cblxuICAgIHZhciBpc0h0dHBzUmVxdWVzdCA9IGlzSHR0cHMudGVzdChwcm90b2NvbCk7XG4gICAgdmFyIGFnZW50ID0gaXNIdHRwc1JlcXVlc3QgPyBjb25maWcuaHR0cHNBZ2VudCA6IGNvbmZpZy5odHRwQWdlbnQ7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGJ1aWxkVVJMKHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgIGFnZW50czogeyBodHRwOiBjb25maWcuaHR0cEFnZW50LCBodHRwczogY29uZmlnLmh0dHBzQWdlbnQgfSxcbiAgICAgIGF1dGg6IGF1dGhcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5zb2NrZXRQYXRoKSB7XG4gICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBjb25maWcuc29ja2V0UGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xuICAgIH1cblxuICAgIHZhciBwcm94eSA9IGNvbmZpZy5wcm94eTtcbiAgICBpZiAoIXByb3h5ICYmIHByb3h5ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XG4gICAgICB2YXIgcHJveHlVcmwgPSBwcm9jZXNzLmVudltwcm94eUVudl0gfHwgcHJvY2Vzcy5lbnZbcHJveHlFbnYudG9VcHBlckNhc2UoKV07XG4gICAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsLnBhcnNlKHByb3h5VXJsKTtcbiAgICAgICAgdmFyIG5vUHJveHlFbnYgPSBwcm9jZXNzLmVudi5ub19wcm94eSB8fCBwcm9jZXNzLmVudi5OT19QUk9YWTtcbiAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9Qcm94eUVudikge1xuICAgICAgICAgIHZhciBub1Byb3h5ID0gbm9Qcm94eUVudi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiB0cmltKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNob3VsZFByb3h5ID0gIW5vUHJveHkuc29tZShmdW5jdGlvbiBwcm94eU1hdGNoKHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudFswXSA9PT0gJy4nICYmXG4gICAgICAgICAgICAgICAgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFByb3h5KSB7XG4gICAgICAgICAgcHJveHkgPSB7XG4gICAgICAgICAgICBob3N0OiBwYXJzZWRQcm94eVVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHBhcnNlZFByb3h5VXJsLnBvcnQsXG4gICAgICAgICAgICBwcm90b2NvbDogcGFyc2VkUHJveHlVcmwucHJvdG9jb2xcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHBhcnNlZFByb3h5VXJsLmF1dGgpIHtcbiAgICAgICAgICAgIHZhciBwcm94eVVybEF1dGggPSBwYXJzZWRQcm94eVVybC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBwcm94eS5hdXRoID0ge1xuICAgICAgICAgICAgICB1c2VybmFtZTogcHJveHlVcmxBdXRoWzBdLFxuICAgICAgICAgICAgICBwYXNzd29yZDogcHJveHlVcmxBdXRoWzFdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm94eSkge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzLmhvc3QgPSBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKTtcbiAgICAgIHNldFByb3h5KG9wdGlvbnMsIHByb3h5LCBwcm90b2NvbCArICcvLycgKyBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKSArIG9wdGlvbnMucGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zcG9ydDtcbiAgICB2YXIgaXNIdHRwc1Byb3h5ID0gaXNIdHRwc1JlcXVlc3QgJiYgKHByb3h5ID8gaXNIdHRwcy50ZXN0KHByb3h5LnByb3RvY29sKSA6IHRydWUpO1xuICAgIGlmIChjb25maWcudHJhbnNwb3J0KSB7XG4gICAgICB0cmFuc3BvcnQgPSBjb25maWcudHJhbnNwb3J0O1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLm1heFJlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHMgOiBodHRwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnLm1heFJlZGlyZWN0cykge1xuICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IGNvbmZpZy5tYXhSZWRpcmVjdHM7XG4gICAgICB9XG4gICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUHJveHkgPyBodHRwc0ZvbGxvdyA6IGh0dHBGb2xsb3c7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5tYXhCb2R5TGVuZ3RoID4gLTEpIHtcbiAgICAgIG9wdGlvbnMubWF4Qm9keUxlbmd0aCA9IGNvbmZpZy5tYXhCb2R5TGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaW5zZWN1cmVIVFRQUGFyc2VyKSB7XG4gICAgICBvcHRpb25zLmluc2VjdXJlSFRUUFBhcnNlciA9IGNvbmZpZy5pbnNlY3VyZUhUVFBQYXJzZXI7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0XG4gICAgdmFyIHJlcSA9IHRyYW5zcG9ydC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG5cbiAgICAgIC8vIHVuY29tcHJlc3MgdGhlIHJlc3BvbnNlIGJvZHkgdHJhbnNwYXJlbnRseSBpZiByZXF1aXJlZFxuICAgICAgdmFyIHN0cmVhbSA9IHJlcztcblxuICAgICAgLy8gcmV0dXJuIHRoZSBsYXN0IHJlcXVlc3QgaW4gY2FzZSBvZiByZWRpcmVjdHNcbiAgICAgIHZhciBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xuXG5cbiAgICAgIC8vIGlmIG5vIGNvbnRlbnQsIGlzIEhFQUQgcmVxdWVzdCBvciBkZWNvbXByZXNzIGRpc2FibGVkIHdlIHNob3VsZCBub3QgZGVjb21wcmVzc1xuICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlICE9PSAyMDQgJiYgbGFzdFJlcXVlc3QubWV0aG9kICE9PSAnSEVBRCcgJiYgY29uZmlnLmRlY29tcHJlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXSkge1xuICAgICAgICAvKmVzbGludCBkZWZhdWx0LWNhc2U6MCovXG4gICAgICAgIGNhc2UgJ2d6aXAnOlxuICAgICAgICBjYXNlICdjb21wcmVzcyc6XG4gICAgICAgIGNhc2UgJ2RlZmxhdGUnOlxuICAgICAgICAvLyBhZGQgdGhlIHVuemlwcGVyIHRvIHRoZSBib2R5IHN0cmVhbSBwcm9jZXNzaW5nIHBpcGVsaW5lXG4gICAgICAgICAgc3RyZWFtID0gc3RyZWFtLnBpcGUoemxpYi5jcmVhdGVVbnppcCgpKTtcblxuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudC1lbmNvZGluZyBpbiBvcmRlciB0byBub3QgY29uZnVzZSBkb3duc3RyZWFtIG9wZXJhdGlvbnNcbiAgICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IGxhc3RSZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScpIHtcbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHN0cmVhbTtcbiAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlQnVmZmVyID0gW107XG4gICAgICAgIHZhciB0b3RhbFJlc3BvbnNlQnl0ZXMgPSAwO1xuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1EYXRhKGNodW5rKSB7XG4gICAgICAgICAgcmVzcG9uc2VCdWZmZXIucHVzaChjaHVuayk7XG4gICAgICAgICAgdG90YWxSZXNwb25zZUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblxuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgY29udGVudCBsZW5ndGggaXMgbm90IG92ZXIgdGhlIG1heENvbnRlbnRMZW5ndGggaWYgc3BlY2lmaWVkXG4gICAgICAgICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEgJiYgdG90YWxSZXNwb25zZUJ5dGVzID4gY29uZmlnLm1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbS5kZXN0b3koKSBlbWl0IGFib3J0ZWQgZXZlbnQgYmVmb3JlIGNhbGxpbmcgcmVqZWN0KCkgb24gTm9kZS5qcyB2MTZcbiAgICAgICAgICAgIHJlamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0cmVhbS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgY29uZmlnLm1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJyxcbiAgICAgICAgICAgICAgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdhYm9ydGVkJywgZnVuY3Rpb24gaGFuZGxlclN0cmVhbUFib3J0ZWQoKSB7XG4gICAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cmVhbS5kZXN0cm95KCk7XG4gICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdlcnJvciByZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFUlJfUkVRVUVTVF9BQk9SVEVEJywgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVycm9yKGVycikge1xuICAgICAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gaGFuZGxlU3RyZWFtRW5kKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2VCdWZmZXIubGVuZ3RoID09PSAxID8gcmVzcG9uc2VCdWZmZXJbMF0gOiBCdWZmZXIuY29uY2F0KHJlc3BvbnNlQnVmZmVyKTtcbiAgICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlRGF0YS50b1N0cmluZyhjb25maWcucmVzcG9uc2VFbmNvZGluZyk7XG4gICAgICAgICAgICAgIGlmICghY29uZmlnLnJlc3BvbnNlRW5jb2RpbmcgfHwgY29uZmlnLnJlc3BvbnNlRW5jb2RpbmcgPT09ICd1dGY4Jykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHV0aWxzLnN0cmlwQk9NKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXNwb25zZURhdGE7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBlcnIuY29kZSwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdEVycm9yKGVycikge1xuICAgICAgaWYgKHJlcS5hYm9ydGVkICYmIGVyci5jb2RlICE9PSAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycpIHJldHVybjtcbiAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRjcCBrZWVwIGFsaXZlIHRvIHByZXZlbnQgZHJvcCBjb25uZWN0aW9uIGJ5IHBlZXJcbiAgICByZXEub24oJ3NvY2tldCcsIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RTb2NrZXQoc29ja2V0KSB7XG4gICAgICAvLyBkZWZhdWx0IGludGVydmFsIG9mIHNlbmRpbmcgYWNrIHBhY2tldCBpcyAxIG1pbnV0ZVxuICAgICAgc29ja2V0LnNldEtlZXBBbGl2ZSh0cnVlLCAxMDAwICogNjApO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHJlcXVlc3QgdGltZW91dFxuICAgIGlmIChjb25maWcudGltZW91dCkge1xuICAgICAgLy8gVGhpcyBpcyBmb3JjaW5nIGEgaW50IHRpbWVvdXQgdG8gYXZvaWQgcHJvYmxlbXMgaWYgdGhlIGByZXFgIGludGVyZmFjZSBkb2Vzbid0IGhhbmRsZSBvdGhlciB0eXBlcy5cbiAgICAgIHZhciB0aW1lb3V0ID0gcGFyc2VJbnQoY29uZmlnLnRpbWVvdXQsIDEwKTtcblxuICAgICAgaWYgKGlzTmFOKHRpbWVvdXQpKSB7XG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICAgICAnZXJyb3IgdHJ5aW5nIHRvIHBhcnNlIGBjb25maWcudGltZW91dGAgdG8gaW50JyxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgJ0VSUl9QQVJTRV9USU1FT1VUJyxcbiAgICAgICAgICByZXFcbiAgICAgICAgKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTb21ldGltZSwgdGhlIHJlc3BvbnNlIHdpbGwgYmUgdmVyeSBzbG93LCBhbmQgZG9lcyBub3QgcmVzcG9uZCwgdGhlIGNvbm5lY3QgZXZlbnQgd2lsbCBiZSBibG9jayBieSBldmVudCBsb29wIHN5c3RlbS5cbiAgICAgIC8vIEFuZCB0aW1lciBjYWxsYmFjayB3aWxsIGJlIGZpcmVkLCBhbmQgYWJvcnQoKSB3aWxsIGJlIGludm9rZWQgYmVmb3JlIGNvbm5lY3Rpb24sIHRoZW4gZ2V0IFwic29ja2V0IGhhbmcgdXBcIiBhbmQgY29kZSBFQ09OTlJFU0VULlxuICAgICAgLy8gQXQgdGhpcyB0aW1lLCBpZiB3ZSBoYXZlIGEgbGFyZ2UgbnVtYmVyIG9mIHJlcXVlc3QsIG5vZGVqcyB3aWxsIGhhbmcgdXAgc29tZSBzb2NrZXQgb24gYmFja2dyb3VuZC4gYW5kIHRoZSBudW1iZXIgd2lsbCB1cCBhbmQgdXAuXG4gICAgICAvLyBBbmQgdGhlbiB0aGVzZSBzb2NrZXQgd2hpY2ggYmUgaGFuZyB1cCB3aWxsIGRldm9yaW5nIENQVSBsaXR0bGUgYnkgbGl0dGxlLlxuICAgICAgLy8gQ2xpZW50UmVxdWVzdC5zZXRUaW1lb3V0IHdpbGwgYmUgZmlyZWQgb24gdGhlIHNwZWNpZnkgbWlsbGlzZWNvbmRzLCBhbmQgY2FuIG1ha2Ugc3VyZSB0aGF0IGFib3J0KCkgd2lsbCBiZSBmaXJlZCBhZnRlciBjb25uZWN0LlxuICAgICAgcmVxLnNldFRpbWVvdXQodGltZW91dCwgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdFRpbWVvdXQoKSB7XG4gICAgICAgIHJlcS5hYm9ydCgpO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICAgICAndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gJ0VUSU1FRE9VVCcgOiAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgICByZXFcbiAgICAgICAgKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gZnVuY3Rpb24oY2FuY2VsKSB7XG4gICAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHJlcS5hYm9ydCgpO1xuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCAoY2FuY2VsICYmIGNhbmNlbC50eXBlKSA/IG5ldyBDYW5jZWwoJ2NhbmNlbGVkJykgOiBjYW5jZWwpO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgaWYgKHV0aWxzLmlzU3RyZWFtKGRhdGEpKSB7XG4gICAgICBkYXRhLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVycm9yKGVycikge1xuICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCByZXEpKTtcbiAgICAgIH0pLnBpcGUocmVxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLmVuZChkYXRhKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2NvcmUvZW5oYW5jZUVycm9yJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHtcbiAgICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZVxuICB9LFxuXG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkgfHwgKGhlYWRlcnMgJiYgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIHZhciB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgdmFyIHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICB2YXIgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIHZhciBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKHN0cmljdEpTT05QYXJzaW5nIHx8IChmb3JjZWRKU09OUGFyc2luZyAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiBkYXRhLmxlbmd0aCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlbmhhbmNlRXJyb3IoZSwgdGhpcywgJ0VfSlNPTl9QQVJTRScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb250ZXh0LCBkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsKCdjYW5jZWxlZCcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWVyZ2VNYXAgPSB7XG4gICAgJ3VybCc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ21ldGhvZCc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ2RhdGEnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdiYXNlVVJMJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndHJhbnNmb3JtUmVxdWVzdCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zZm9ybVJlc3BvbnNlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncGFyYW1zU2VyaWFsaXplcic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RpbWVvdXQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0aW1lb3V0TWVzc2FnZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3dpdGhDcmVkZW50aWFscyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2FkYXB0ZXInOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdyZXNwb25zZVR5cGUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd4c3JmQ29va2llTmFtZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnb25VcGxvYWRQcm9ncmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ29uRG93bmxvYWRQcm9ncmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2RlY29tcHJlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnbWF4Qm9keUxlbmd0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zcG9ydCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2h0dHBBZ2VudCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2h0dHBzQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdjYW5jZWxUb2tlbic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3NvY2tldFBhdGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdyZXNwb25zZUVuY29kaW5nJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndmFsaWRhdGVTdGF0dXMnOiBtZXJnZURpcmVjdEtleXNcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKGNvbmZpZzEpLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSksIGZ1bmN0aW9uIGNvbXB1dGVDb25maWdWYWx1ZShwcm9wKSB7XG4gICAgdmFyIG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICB2YXIgY29uZmlnVmFsdWUgPSBtZXJnZShwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFZFUlNJT04gPSByZXF1aXJlKCcuLi9lbnYvZGF0YScpLnZlcnNpb247XG5cbnZhciB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaChmdW5jdGlvbih0eXBlLCBpKSB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG52YXIgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvcHQsIG9wdHMpIHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIHZhciBvcHQgPSBrZXlzW2ldO1xuICAgIHZhciB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW29wdF07XG4gICAgICB2YXIgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiAnICsgb3B0ICsgJyBtdXN0IGJlICcgKyByZXN1bHQpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhbGxvd1Vua25vd24gIT09IHRydWUpIHtcbiAgICAgIHRocm93IEVycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzc2VydE9wdGlvbnM6IGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnM6IHZhbGlkYXRvcnNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xudmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdmFsaWRhdG9yJyk7XG5cbnZhciB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgfVxuXG4gIGlmICghY29uZmlnLnVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgY29uZmlnIHVybCBpcyBub3QgdmFsaWQnKTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWw7XG5cbiAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHZhciBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdmFyIHByb21pc2U7XG5cbiAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICBjaGFpbiA9IGNoYWluLmNvbmNhdChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIHZhciBuZXdDb25maWcgPSBjb25maWc7XG4gIHdoaWxlIChyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICB2YXIgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpO1xuICAgIHZhciBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB0cnkge1xuICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb25SZWplY3RlZChlcnJvcik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QobmV3Q29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgd2hpbGUgKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGlmICghY29uZmlnLnVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgY29uZmlnIHVybCBpcyBub3QgdmFsaWQnKTtcbiAgfVxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG5cbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgdGhpcy5wcm9taXNlLnRoZW4oZnVuY3Rpb24oY2FuY2VsKSB7XG4gICAgaWYgKCF0b2tlbi5fbGlzdGVuZXJzKSByZXR1cm47XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgbCA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgIH1cbiAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgdGhpcy5wcm9taXNlLnRoZW4gPSBmdW5jdGlvbihvbmZ1bGZpbGxlZCkge1xuICAgIHZhciBfcmVzb2x2ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICovXG5cbkNhbmNlbFRva2VuLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgfVxufTtcblxuLyoqXG4gKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gKi9cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMuaXNPYmplY3QocGF5bG9hZCkgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbiAgaW5zdGFuY2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuYXhpb3MuVkVSU0lPTiA9IHJlcXVpcmUoJy4vZW52L2RhdGEnKS52ZXJzaW9uO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwgIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCAiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25QYW5lbCwgRGV0YWlsLCBJY29uLCBMaXN0IH0gZnJvbSAnQHJheWNhc3QvYXBpJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQge1xuICBnZXRTaGVldHMsXG4gIHN0cmlwRnJvbnRtYXR0ZXIsXG4gIHN0cmlwVGVtcGxhdGVUYWdzLFxuICBmb3JtYXRUYWJsZXMsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBDb21tYW5kKCkge1xuICBjb25zdCBbc2hlZXRzLCBzZXRTaGVldHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTGlzdCgpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgU2VydmljZS5saXN0RmlsZXMoKTtcbiAgICAgIGNvbnN0IHNoZWV0cyA9IGdldFNoZWV0cyhmaWxlcyk7XG4gICAgICBzZXRTaGVldHMoc2hlZXRzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGZldGNoTGlzdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICB7c2hlZXRzLm1hcCgoc2hlZXQpID0+IChcbiAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgICAgICA8QWN0aW9uLlB1c2hcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW4gQ2hlYXRzaGVldFwiXG4gICAgICAgICAgICAgICAgaWNvbj17SWNvbi5XaW5kb3d9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PXs8U2hlZXRWaWV3IHNsdWc9e3NoZWV0fSAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFjdGlvbi5PcGVuSW5Ccm93c2VyIHVybD17U2VydmljZS51cmxGb3Ioc2hlZXQpfSAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICB9XG4gICAgICAgICAga2V5PXtzaGVldH1cbiAgICAgICAgICB0aXRsZT17c2hlZXR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG5cbmludGVyZmFjZSBTaGVldFByb3BzIHtcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBTaGVldFZpZXcocHJvcHM6IFNoZWV0UHJvcHMpIHtcbiAgY29uc3QgW3NoZWV0LCBzZXRTaGVldF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFNoZWV0KCkge1xuICAgICAgY29uc3Qgc2hlZXRNYXJrZG93biA9IGF3YWl0IFNlcnZpY2UuZ2V0U2hlZXQocHJvcHMuc2x1Zyk7XG4gICAgICBjb25zdCBzaGVldCA9IGZvcm1hdFRhYmxlcyhcbiAgICAgICAgc3RyaXBUZW1wbGF0ZVRhZ3Moc3RyaXBGcm9udG1hdHRlcihzaGVldE1hcmtkb3duKSksXG4gICAgICApO1xuXG4gICAgICBzZXRTaGVldChzaGVldCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmZXRjaFNoZWV0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPERldGFpbCBpc0xvYWRpbmc9e2lzTG9hZGluZ30gbWFya2Rvd249e3NoZWV0fSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZDtcbiIsICJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBCUkFOQ0ggPSAnbWFzdGVyJztcbmNvbnN0IE9XTkVSID0gJ2hpbnR6ZCc7XG5jb25zdCBSRVBPID0gJ2NoZWF0c2hlZXRzJztcblxuY29uc3QgbGlzdENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7T1dORVJ9LyR7UkVQT30vZ2l0L3RyZWVzYCxcbn0pO1xuXG5jb25zdCBmaWxlQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS8ke09XTkVSfS8ke1JFUE99LyR7QlJBTkNIfWAsXG59KTtcblxuaW50ZXJmYWNlIExpc3RSZXNwb25zZSB7XG4gIHNoYTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdHJlZTogRmlsZVtdO1xufVxuXG5pbnRlcmZhY2UgRmlsZSB7XG4gIHBhdGg6IHN0cmluZztcbiAgbW9kZTogc3RyaW5nO1xuICB0eXBlOiAndHJlZScgfCAnYmxvYic7XG4gIHNoYTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5jbGFzcyBTZXJ2aWNlIHtcbiAgc3RhdGljIGFzeW5jIGxpc3RGaWxlcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpc3RDbGllbnQuZ2V0PExpc3RSZXNwb25zZT4oYC8ke0JSQU5DSH1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS50cmVlO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFNoZWV0KHNsdWc6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmlsZUNsaWVudC5nZXQ8c3RyaW5nPihgLyR7c2x1Z30ubWRgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfVxuXG4gIHN0YXRpYyB1cmxGb3Ioc2x1Zzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2RldmhpbnRzLmlvLyR7c2x1Z31gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG5leHBvcnQgdHlwZSB7IEZpbGUgfTtcbiIsICJpbXBvcnQgeyBGaWxlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gZ2V0RmlsZU5hbWUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdG9rZW5zID0gcGF0aC5zcGxpdCgnLicpO1xuICByZXR1cm4gdG9rZW5zWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHRva2VucyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHRva2Vuc1sxXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hlZXRzKGZpbGVzOiBGaWxlW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBmaWxlc1xuICAgIC5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRGlyID0gZmlsZS50eXBlID09PSAndHJlZSc7XG4gICAgICBjb25zdCBpc01hcmtkb3duID0gZ2V0RmlsZUV4dGVuc2lvbihmaWxlLnBhdGgpID09PSAnbWQnO1xuICAgICAgY29uc3QgYWRtaW5GaWxlcyA9IFsnQ09OVFJJQlVUSU5HJywgJ1JFQURNRScsICdpbmRleCcsICdpbmRleEAyMDE2J107XG4gICAgICBjb25zdCBpc0FkbWluRmlsZSA9IGFkbWluRmlsZXMuaW5jbHVkZXMoZ2V0RmlsZU5hbWUoZmlsZS5wYXRoKSk7XG4gICAgICByZXR1cm4gIWlzRGlyICYmIGlzTWFya2Rvd24gJiYgIWlzQWRtaW5GaWxlO1xuICAgIH0pXG4gICAgLm1hcCgoZmlsZSkgPT4gZ2V0RmlsZU5hbWUoZmlsZS5wYXRoKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwRnJvbnRtYXR0ZXIobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGZyb250bWF0dGVyU3RhcnQgPSBtYXJrZG93bi5pbmRleE9mKCctLS0nKTtcbiAgY29uc3QgZnJvbnRtYXR0ZXJFbmQgPSBtYXJrZG93bi5pbmRleE9mKCctLS0nLCBmcm9udG1hdHRlclN0YXJ0ICsgMSk7XG4gIHJldHVybiBtYXJrZG93bi5zdWJzdHJpbmcoZnJvbnRtYXR0ZXJFbmQgKyAzKTtcbn1cblxuLypcbiAgUmVtb3ZlcyBKZWt5bGwgdGVtcGxhdGluZyB0YWdzXG5cbiAgVGFnIGV4YW1wbGVzOlxuICAqIHs6IC4tb25lLWNvbHVtbn1cbiAgKiB7OiAuLXR3by1jb2x1bW59XG4gICogezogLi10aHJlZS1jb2x1bW59XG4gICogezogLi1pbnRyb31cbiAgKiB7OiAuLXByaW1lfVxuICAqIHs6IC4tc2V0dXB9XG5cbiAgKiB7OiBkYXRhLWxpbmU9XCIxXCJ9XG4gICogezogZGF0YS1saW5lPVwiMlwifVxuICAqIHs6IGRhdGEtbGluZT1cIjMsIDgsIDE2LCAyMSwgMjgsIDM0LCAzOVwifVxuXG4gICogeyVyYXclfVxuICAqIHslZW5kcmF3JX1cbiovXG5mdW5jdGlvbiBzdHJpcFRlbXBsYXRlVGFncyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1hcmtkb3duXG4gICAgLnNwbGl0KCdcXG4nKVxuICAgIC5maWx0ZXIoKGxpbmUpID0+IHtcbiAgICAgIGNvbnN0IGlzVGFnID1cbiAgICAgICAgKGxpbmVbMF0gPT09ICd7JyAmJiBsaW5lWzFdID09PSAnOicpIHx8XG4gICAgICAgIChsaW5lWzFdID09PSAnJScgJiYgbGluZVtsaW5lLmxlbmd0aCAtIDFdID09PSAnfScpO1xuICAgICAgcmV0dXJuICFpc1RhZztcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKTtcbn1cblxuLypcbiAgVGFibGVzIGluIE1hcmtkb3duIGFyZSBub3QgeWV0IHN1cHBvcnRlZCBieSBSYXljYXN0LlxuXG4gIFdyYXBzIHRhYmxlIGNvbnRlbnQgaW50byBjb2RlIHRhZ3MgKGBgYCkgdG8gcmVuZGVyIHRoZW0gdmVyYmF0aW0uXG4qL1xuZnVuY3Rpb24gZm9ybWF0VGFibGVzKG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBsaW5lcyA9IG1hcmtkb3duLnNwbGl0KCdcXG4nKTtcbiAgcmV0dXJuIGxpbmVzXG4gICAgLm1hcCgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZMaW5lID0gaW5kZXggPiAwID8gbGluZXNbaW5kZXggLSAxXSA6ICcnO1xuICAgICAgY29uc3QgbmV4dExpbmUgPSBpbmRleCA8IGxpbmVzLmxlbmd0aCAtIDEgPyBsaW5lc1tpbmRleCArIDFdIDogJyc7XG4gICAgICBjb25zdCBpc1ByZXZMaW5lRW1wdHkgPSBwcmV2TGluZS50cmltKCkubGVuZ3RoID09PSAwO1xuICAgICAgY29uc3QgaXNOZXh0TGluZUVtcHR5ID0gbmV4dExpbmUudHJpbSgpLmxlbmd0aCA9PT0gMDtcbiAgICAgIGNvbnN0IGlzTGluZVRhYmxlID0gbGluZVswXSA9PT0gJ3wnICYmIGxpbmVbbGluZS5sZW5ndGggLSAxXSA9PT0gJ3wnO1xuICAgICAgaWYgKGlzTGluZVRhYmxlICYmIGlzUHJldkxpbmVFbXB0eSAmJiBpc05leHRMaW5lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIGBcXGBcXGBcXGBcXG4ke2xpbmV9XFxuXFxgXFxgXFxgYDtcbiAgICAgIH1cbiAgICAgIGlmIChpc0xpbmVUYWJsZSAmJiBpc1ByZXZMaW5lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIGBcXGBcXGBcXGBcXG4ke2xpbmV9YDtcbiAgICAgIH1cbiAgICAgIGlmIChpc0xpbmVUYWJsZSAmJiBpc05leHRMaW5lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIGAke2xpbmV9XFxuXFxgXFxgXFxgYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH0pXG4gICAgLmpvaW4oJ1xcbicpO1xufVxuXG5leHBvcnQgeyBnZXRTaGVldHMsIHN0cmlwRnJvbnRtYXR0ZXIsIHN0cmlwVGVtcGxhdGVUYWdzLCBmb3JtYXRUYWJsZXMgfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsWUFBTyxVQUFVLGNBQWMsSUFBSSxTQUFTO0FBQzFDLGFBQU8sZ0JBQWdCO0FBQ3JCLFlBQUksT0FBTyxJQUFJLE1BQU0sVUFBVTtBQUMvQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxlQUFLLEtBQUssVUFBVTtBQUFBO0FBRXRC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YixhQUFPLE1BQU07QUFDWixZQUFJLENBQUMsUUFBUTtBQUNaLG1CQUFTO0FBQ1Qsa0JBQVEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQVNoQixZQUFRLFNBQVM7QUFBQSxNQUNoQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBWUQseUJBQXFCO0FBSXBCLFVBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxX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
