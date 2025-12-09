(function() {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var script = {};
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
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
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
    var WeakMap = globalThis2.WeakMap;
    weakMapBasicDetection = isCallable2(WeakMap) && /native code/.test(String(WeakMap));
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
    var WeakMap = globalThis2.WeakMap;
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
      var store = shared2.state || (shared2.state = new WeakMap());
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
  class Store {
    static data = {};
  }
  class Helper {
    static fetch(url, args) {
      if (args.cache === void 0) {
        args.cache = "no-cache";
      }
      if (args.headers === void 0) {
        args.headers = { "Content-Type": "application/json" };
      }
      return new Promise((resolve) => {
        Store.api.fetch(url, args).then((response) => {
          let data = response.json(), status = response.status;
          if (status == 200 || status == 304) {
            return data;
          }
          return { success: false, message: status };
        }).catch((error) => {
          return { success: false, message: error };
        }).then((response) => {
          resolve(response);
        });
      });
    }
  }
  class Home {
    route = "/$";
    async init() {
      document.querySelector(".content").innerHTML = "HOME!!";
      let response = await Helper.fetch("/api/home", {
        method: "GET"
      });
      document.querySelector(".content").innerHTML = JSON.stringify(response.data);
    }
  }
  class ChatDetail {
    async init() {
      document.querySelector(".chat-content").innerHTML = "CHAT DETAIL!!";
      let id = window.location.pathname.split("/").pop();
      let response = await Helper.fetch("/api/chats/" + id, {
        method: "GET"
      });
      document.querySelector(".chat-content").innerHTML = JSON.stringify(response.data);
    }
  }
  class Chats {
    route = "/chats";
    async init() {
      await this.buildHtml();
      this.bindLinks();
    }
    async buildHtml() {
      document.querySelector(".content").innerHTML = "CHATS!!";
      let response = await Helper.fetch("/api/chats", {
        method: "GET"
      });
      console.log(response);
      let html2 = "";
      html2 += "<h2>Chats</h2>";
      html2 += "<ul>";
      response.data.forEach((data_value) => {
        html2 += `
                <li style="display:inline;">
                    <a href="/chats/${data_value.id}" class="chat-link">
                        ${data_value.name}
                    </a>
                </li>
            `;
      });
      html2 += "</ul>";
      html2 += '<div class="chat-content">...</div>';
      document.querySelector(".content").innerHTML = html2;
      if (new RegExp(this.route + "/\\d+$").test(window.location.pathname) !== false) {
        this.loadChatDetail();
      }
    }
    bindLinks() {
      document.querySelectorAll(".content .chat-link").forEach(($el) => {
        $el.addEventListener("click", async (e) => {
          e.preventDefault();
          window.history.pushState({}, "", e.target.closest(".chat-link").getAttribute("href"));
          this.loadChatDetail();
        });
      });
    }
    loadChatDetail() {
      let cd = new ChatDetail();
      cd.init();
    }
  }
  class Tasks {
    route = "/tasks";
    async init() {
      document.querySelector(".content").innerHTML = "TASKS!!";
    }
  }
  class Prompts {
    route = "/prompts";
    async init() {
      document.querySelector(".content").innerHTML = "PROMPTS!!";
    }
  }
  class Skills {
    route = "/skills";
    async init() {
      document.querySelector(".content").innerHTML = "SKILLS!!";
    }
  }
  class App {
    async ready() {
      console.log("start");
      this.bindGlobalEvents();
      this.start();
    }
    async load() {
      console.log("load");
    }
    async start() {
      await this.login();
      this.buildHtml();
      this.loadContent();
    }
    buildHtml() {
      document.querySelector("#app").innerHTML = `
            <div class="navigation">
                <a href="/" class="nav-link">Home</a>
                <a href="/chats" class="nav-link">Chats</a>
                <a href="/tasks" class="nav-link">Tasks</a>
                <a href="/prompts" class="nav-link">Prompts</a>
                <a href="/skills" class="nav-link">Skills</a>
                <a href="#" class="logout">Logout</a>
            </div>
            <div class="content">
                ...
            </div>
        `;
    }
    bindGlobalEvents() {
      window.addEventListener("popstate", () => {
        this.loadContent();
      });
      document.querySelector("#app").addEventListener("click", (e) => {
        if (e.target.closest(".nav-link")) {
          e.preventDefault();
          window.history.pushState({}, "", e.target.closest(".nav-link").getAttribute("href"));
          this.loadContent();
        }
      });
      document.querySelector("#app").addEventListener("click", async (e) => {
        if (e.target.closest(".logout")) {
          e.preventDefault();
          await Store.api.logout();
          document.querySelector("#app").innerHTML = "";
          this.start();
        }
      });
    }
    async login() {
      document.querySelector("#app").innerHTML = "";
      Store.api = new jwtbutler({
        auth_server: "/auth",
        auth_login: "email"
      });
      await Store.api.login();
    }
    async loadContent() {
      document.querySelector(".content").innerHTML = "";
      for (let classes__value of [Home, Chats, Tasks, Prompts, Skills]) {
        let c = new classes__value();
        if (new RegExp(c.route).test(window.location.pathname) === false) {
          continue;
        }
        await c.init();
      }
    }
  }
  const app = new App();
  document.addEventListener("DOMContentLoaded", () => {
    app.ready();
  });
  window.addEventListener("load", () => {
    app.load();
  });
})();
//# sourceMappingURL=bundle.js.map
