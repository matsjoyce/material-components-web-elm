/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(89);
var anObject = __webpack_require__(12);
var $flags = __webpack_require__(46);
var DESCRIPTORS = __webpack_require__(15);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(16)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(45);
var test = {};
test[__webpack_require__(10)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(18);
var META = __webpack_require__(38).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(30);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(24);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(49);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(74);
var isArray = __webpack_require__(77);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(43);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(36);
var gOPNExt = __webpack_require__(80);
var $GOPD = __webpack_require__(56);
var $GOPS = __webpack_require__(54);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(33);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(55).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(42).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(5);
var getKeys = __webpack_require__(33);
var redefine = __webpack_require__(18);
var global = __webpack_require__(11);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(28);
var wks = __webpack_require__(10);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(57);
var step = __webpack_require__(58);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(83);
var validate = __webpack_require__(66);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(85)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(17);
var create = __webpack_require__(36);
var aFunction = __webpack_require__(31);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var fails = __webpack_require__(16);
var bind = __webpack_require__(87);
var rConstruct = (__webpack_require__(11).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(17);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(68).set });


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(30)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(23);
var hide = __webpack_require__(19);
var redefine = __webpack_require__(18);
var ctx = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var hide = __webpack_require__(19);
var has = __webpack_require__(20);
var SRC = __webpack_require__(24)('src');
var $toString = __webpack_require__(73);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(23).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(75);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(101);
var xtend = __webpack_require__(102);

var activeFocusDelay;

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    clearTimeout(activeFocusDelay);

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    activeFocusDelay = delay(function() {
      tryFocus(getInitialFocusNode());
    });

    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        'Your focus-trap needs to have at least one focusable element'
      );
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
      return;
    }
    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(23);
var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(29) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(78);
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(79).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(20);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(18);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(81);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(82);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(34);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(12);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(46);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(23);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(49);
var defineProperty = __webpack_require__(14).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(76);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(52);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(42);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(50);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(10)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(19)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(26);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(35);
var getIterFn = __webpack_require__(65);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(28);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(28);
module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(26)(Function.call, __webpack_require__(56).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(26);
var $export = __webpack_require__(17);
var toObject = __webpack_require__(43);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var toLength = __webpack_require__(35);
var createProperty = __webpack_require__(90);
var getIterFn = __webpack_require__(65);

$export($export.S + $export.F * !__webpack_require__(67)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(15) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(13);
var cof = __webpack_require__(34);
var MATCH = __webpack_require__(10)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

(function(){
/*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n=window.Document.prototype.createElement,p=window.Document.prototype.createElementNS,aa=window.Document.prototype.importNode,ba=window.Document.prototype.prepend,ca=window.Document.prototype.append,da=window.DocumentFragment.prototype.prepend,ea=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,r=window.Node.prototype.appendChild,t=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,v=window.Node.prototype.replaceChild,w=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),y=window.Element.prototype.attachShadow,z=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),A=window.Element.prototype.getAttribute,B=window.Element.prototype.setAttribute,C=window.Element.prototype.removeAttribute,D=window.Element.prototype.getAttributeNS,E=window.Element.prototype.setAttributeNS,F=window.Element.prototype.removeAttributeNS,G=window.Element.prototype.insertAdjacentElement,H=window.Element.prototype.insertAdjacentHTML,fa=window.Element.prototype.prepend,
ha=window.Element.prototype.append,ia=window.Element.prototype.before,ja=window.Element.prototype.after,ka=window.Element.prototype.replaceWith,la=window.Element.prototype.remove,ma=window.HTMLElement,I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),na=window.HTMLElement.prototype.insertAdjacentElement,oa=window.HTMLElement.prototype.insertAdjacentHTML;var pa=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return pa.add(a)});function qa(a){var b=pa.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var ra=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function J(a){var b=a.isConnected;if(void 0!==b)return b;if(ra(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function K(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function L(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function M(a,b,c){for(var f=a;f;){if(f.nodeType===Node.ELEMENT_NODE){var d=f;b(d);var e=d.localName;if("link"===e&&"import"===d.getAttribute("rel")){f=d.import;void 0===c&&(c=new Set);if(f instanceof Node&&!c.has(f))for(c.add(f),f=f.firstChild;f;f=f.nextSibling)M(f,b,c);f=L(a,d);continue}else if("template"===e){f=L(a,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)M(d,b,c)}f=f.firstChild?f.firstChild:L(a,f)}};function N(){var a=!(null===O||void 0===O||!O.noDocumentConstructionObserver),b=!(null===O||void 0===O||!O.shadyDomFastWalk);this.h=[];this.a=[];this.f=!1;this.shadyDomFastWalk=b;this.C=!a}function P(a,b,c,f){var d=window.ShadyDom;if(a.shadyDomFastWalk&&d&&d.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=d.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else M(b,c,f)}function sa(a,b){a.f=!0;a.h.push(b)}function ta(a,b){a.f=!0;a.a.push(b)}
function Q(a,b){a.f&&P(a,b,function(c){return R(a,c)})}function R(a,b){if(a.f&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.h.length;c++)a.h[c](b);for(c=0;c<a.a.length;c++)a.a[c](b)}}function S(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state?a.connectedCallback(f):T(a,f)}}function U(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state&&a.disconnectedCallback(f)}}
function V(a,b,c){c=void 0===c?{}:c;var f=c.D,d=c.upgrade||function(g){return T(a,g)},e=[];P(a,b,function(g){a.f&&R(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;f&&(f.forEach(function(m){return l.add(m)}),
l.delete(k));V(a,k,{D:l,upgrade:d})}})}else e.push(g)},f);for(b=0;b<e.length;b++)d(e[b])}
function T(a,b){try{var c=b.ownerDocument,f=c.__CE_registry;var d=f&&(c.defaultView||c.__CE_isImportDocument)?W(f,b.localName):void 0;if(d&&void 0===b.__CE_state){d.constructionStack.push(b);try{try{if(new d.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback&&b.hasAttributes()){var e=d.observedAttributes;
for(d=0;d<e.length;d++){var g=e[d],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}J(b)&&a.connectedCallback(b)}}catch(k){X(k)}}N.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){X(c)}};N.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){X(c)}};
N.prototype.attributeChangedCallback=function(a,b,c,f,d){var e=a.__CE_definition;if(e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(b))try{e.attributeChangedCallback.call(a,b,c,f,d)}catch(g){X(g)}};
function ua(a,b,c,f){var d=b.__CE_registry;if(d&&(null===f||"http://www.w3.org/1999/xhtml"===f)&&(d=W(d,c)))try{var e=new d.constructorFunction;if(void 0===e.__CE_state||void 0===e.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==e.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(e.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==e.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==e.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(e.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(e.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return e}catch(g){return X(g),b=null===f?n.call(b,c):p.call(b,f,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,R(a,b),b}b=null===f?n.call(b,c):p.call(b,f,c);R(a,b);return b}
function X(a){var b=a.message,c=a.sourceURL||a.fileName||"",f=a.line||a.lineNumber||0,d=a.column||a.columnNumber||0,e=void 0;void 0===ErrorEvent.prototype.initErrorEvent?e=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:f,colno:d,error:a}):(e=document.createEvent("ErrorEvent"),e.initErrorEvent("error",!1,!0,b,c,f),e.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===e.error&&Object.defineProperty(e,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(e);e.defaultPrevented||console.error(a)};function va(){var a=this;this.a=void 0;this.w=new Promise(function(b){a.g=b})}va.prototype.resolve=function(a){if(this.a)throw Error("Already resolved.");this.a=a;this.g(a)};function wa(a){var b=document;this.g=void 0;this.b=a;this.a=b;V(this.b,this.a);"loading"===this.a.readyState&&(this.g=new MutationObserver(this.A.bind(this)),this.g.observe(this.a,{childList:!0,subtree:!0}))}function xa(a){a.g&&a.g.disconnect()}wa.prototype.A=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||xa(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,f=0;f<c.length;f++)V(this.b,c[f])};function Y(a){this.j=new Map;this.l=new Map;this.u=new Map;this.o=!1;this.s=new Map;this.i=function(b){return b()};this.c=!1;this.m=[];this.b=a;this.v=a.C?new wa(a):void 0}Y.prototype.B=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");ya(this,a);this.j.set(a,b);this.m.push(a);this.c||(this.c=!0,this.i(function(){return za(c)}))};
Y.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");ya(this,a);Aa(this,a,b);this.m.push(a);this.c||(this.c=!0,this.i(function(){return za(c)}))};function ya(a,b){if(!qa(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(W(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.o)throw Error("A custom element is already being defined.");}
function Aa(a,b,c){a.o=!0;var f;try{var d=c.prototype;if(!(d instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var e=function(m){var x=d[m];if(void 0!==x&&!(x instanceof Function))throw Error("The '"+m+"' callback must be a function.");return x};var g=e("connectedCallback");var h=e("disconnectedCallback");var k=e("adoptedCallback");var l=(f=e("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.o=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:f,observedAttributes:l,constructionStack:[]};a.l.set(b,c);a.u.set(c.constructorFunction,c);return c}Y.prototype.upgrade=function(a){V(this.b,a)};
function za(a){if(!1!==a.c){a.c=!1;for(var b=[],c=a.m,f=new Map,d=0;d<c.length;d++)f.set(c[d],[]);V(a.b,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=f.get(l);m?m.push(k):a.l.has(l)&&b.push(k)}}});for(d=0;d<b.length;d++)T(a.b,b[d]);for(d=0;d<c.length;d++){for(var e=c[d],g=f.get(e),h=0;h<g.length;h++)T(a.b,g[h]);(e=a.s.get(e))&&e.resolve(void 0)}c.length=0}}Y.prototype.get=function(a){if(a=W(this,a))return a.constructorFunction};
Y.prototype.whenDefined=function(a){if(!qa(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.s.get(a);if(b)return b.w;b=new va;this.s.set(a,b);var c=this.l.has(a)||this.j.has(a);a=-1===this.m.indexOf(a);c&&a&&b.resolve(void 0);return b.w};Y.prototype.polyfillWrapFlushCallback=function(a){this.v&&xa(this.v);var b=this.i;this.i=function(c){return a(function(){return b(c)})}};
function W(a,b){var c=a.l.get(b);if(c)return c;if(c=a.j.get(b)){a.j.delete(b);try{return Aa(a,b,c())}catch(f){X(f)}}}window.CustomElementRegistry=Y;Y.prototype.define=Y.prototype.define;Y.prototype.upgrade=Y.prototype.upgrade;Y.prototype.get=Y.prototype.get;Y.prototype.whenDefined=Y.prototype.whenDefined;Y.prototype.polyfillDefineLazy=Y.prototype.B;Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;function Z(a,b,c){function f(d){return function(e){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&J(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}d.apply(this,g);for(g=0;g<k.length;g++)U(a,k[g]);if(J(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&S(a,k)}}void 0!==c.prepend&&(b.prepend=f(c.prepend));void 0!==c.append&&(b.append=f(c.append))};function Ba(a){Document.prototype.createElement=function(b){return ua(a,this,b,null)};Document.prototype.importNode=function(b,c){b=aa.call(this,b,!!c);this.__CE_registry?V(a,b):Q(a,b);return b};Document.prototype.createElementNS=function(b,c){return ua(a,this,c,b)};Z(a,Document.prototype,{prepend:ba,append:ca})};function Ca(a){function b(f){return function(d){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];g=[];for(var h=[],k=0;k<e.length;k++){var l=e[k];l instanceof Element&&J(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}f.apply(this,e);for(e=0;e<h.length;e++)U(a,h[e]);if(J(this))for(e=0;e<g.length;e++)h=g[e],h instanceof Element&&S(a,h)}}var c=Element.prototype;void 0!==ia&&(c.before=b(ia));void 0!==ja&&(c.after=b(ja));void 0!==ka&&
(c.replaceWith=function(f){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var g=[],h=0;h<d.length;h++){var k=d[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}h=J(this);ka.apply(this,d);for(d=0;d<g.length;d++)U(a,g[d]);if(h)for(U(a,this),d=0;d<e.length;d++)g=e[d],g instanceof Element&&S(a,g)});void 0!==la&&(c.remove=function(){var f=J(this);la.call(this);f&&U(a,this)})};function Da(a){function b(d,e){Object.defineProperty(d,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(g){var h=this,k=void 0;J(this)&&(k=[],P(a,this,function(x){x!==h&&k.push(x)}));e.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?V(a,this):Q(a,this);return g}})}function c(d,e){d.insertAdjacentElement=function(g,h){var k=J(h);g=e.call(this,g,h);k&&U(a,h);J(g)&&S(a,h);return g}}function f(d,
e){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)V(a,l[k])}d.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;e.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,e.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,e.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,e.call(this,h,k),g(this.nextSibling,l);
else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}y&&(Element.prototype.attachShadow=function(d){d=y.call(this,d);if(a.f&&!d.__CE_patched){d.__CE_patched=!0;for(var e=0;e<a.h.length;e++)a.h[e](d)}return this.__CE_shadowRoot=d});z&&z.get?b(Element.prototype,z):I&&I.get?b(HTMLElement.prototype,I):ta(a,function(d){b(d,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML},set:function(e){var g=
"template"===this.localName,h=g?this.content:this,k=p.call(document,this.namespaceURI,this.localName);for(k.innerHTML=e;0<h.childNodes.length;)u.call(h,h.childNodes[0]);for(e=g?k.content:k;0<e.childNodes.length;)r.call(h,e.childNodes[0])}})});Element.prototype.setAttribute=function(d,e){if(1!==this.__CE_state)return B.call(this,d,e);var g=A.call(this,d);B.call(this,d,e);e=A.call(this,d);a.attributeChangedCallback(this,d,g,e,null)};Element.prototype.setAttributeNS=function(d,e,g){if(1!==this.__CE_state)return E.call(this,
d,e,g);var h=D.call(this,d,e);E.call(this,d,e,g);g=D.call(this,d,e);a.attributeChangedCallback(this,e,h,g,d)};Element.prototype.removeAttribute=function(d){if(1!==this.__CE_state)return C.call(this,d);var e=A.call(this,d);C.call(this,d);null!==e&&a.attributeChangedCallback(this,d,e,null,null)};Element.prototype.removeAttributeNS=function(d,e){if(1!==this.__CE_state)return F.call(this,d,e);var g=D.call(this,d,e);F.call(this,d,e);var h=D.call(this,d,e);g!==h&&a.attributeChangedCallback(this,e,g,h,d)};
na?c(HTMLElement.prototype,na):G&&c(Element.prototype,G);oa?f(HTMLElement.prototype,oa):H&&f(Element.prototype,H);Z(a,Element.prototype,{prepend:fa,append:ha});Ca(a)};var Ea={};function Fa(a){function b(){var c=this.constructor;var f=document.__CE_registry.u.get(c);if(!f)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var d=f.constructionStack;if(0===d.length)return d=n.call(document,f.localName),Object.setPrototypeOf(d,c.prototype),d.__CE_state=1,d.__CE_definition=f,R(a,d),d;var e=d.length-1,g=d[e];if(g===Ea)throw Error("Failed to construct '"+f.localName+"': This element was already constructed.");d[e]=Ea;
Object.setPrototypeOf(g,c.prototype);R(a,g);return g}b.prototype=ma.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function Ga(a){function b(c,f){Object.defineProperty(c,"textContent",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(d){if(this.nodeType===Node.TEXT_NODE)f.set.call(this,d);else{var e=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&J(this)){e=Array(h);for(var k=0;k<h;k++)e[k]=g[k]}}f.set.call(this,d);if(e)for(d=0;d<e.length;d++)U(a,e[d])}}})}Node.prototype.insertBefore=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=t.call(this,c,f);if(J(this))for(f=
0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);f=t.call(this,c,f);d&&U(a,c);J(this)&&S(a,c);return f};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var f=K(c);c=r.call(this,c);if(J(this))for(var d=0;d<f.length;d++)S(a,f[d]);return c}f=c instanceof Element&&J(c);d=r.call(this,c);f&&U(a,c);J(this)&&S(a,c);return d};Node.prototype.cloneNode=function(c){c=q.call(this,!!c);this.ownerDocument.__CE_registry?V(a,c):Q(a,c);return c};Node.prototype.removeChild=function(c){var f=
c instanceof Element&&J(c),d=u.call(this,c);f&&U(a,c);return d};Node.prototype.replaceChild=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=v.call(this,c,f);if(J(this))for(U(a,f),f=0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);var e=v.call(this,c,f),g=J(this);g&&U(a,f);d&&U(a,c);g&&S(a,c);return e};w&&w.get?b(Node.prototype,w):sa(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var f=[],d=this.firstChild;d;d=d.nextSibling)d.nodeType!==Node.COMMENT_NODE&&
f.push(d.textContent);return f.join("")},set:function(f){for(;this.firstChild;)u.call(this,this.firstChild);null!=f&&""!==f&&r.call(this,document.createTextNode(f))}})})};var O=window.customElements;function Ha(){var a=new N;Fa(a);Ba(a);Z(a,DocumentFragment.prototype,{prepend:da,append:ea});Ga(a);Da(a);a=new Y(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}O&&!O.forcePolyfill&&"function"==typeof O.define&&"function"==typeof O.get||Ha();window.__CE_installPolyfill=Ha;
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30)('native-function-to-string', Function.toString);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(42);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(33);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(21);
var gOPN = __webpack_require__(55).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(36);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(43);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(14).f;
var create = __webpack_require__(36);
var redefineAll = __webpack_require__(60);
var ctx = __webpack_require__(26);
var anInstance = __webpack_require__(61);
var forOf = __webpack_require__(62);
var $iterDefine = __webpack_require__(44);
var step = __webpack_require__(58);
var setSpecies = __webpack_require__(84);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(38).fastKey;
var validate = __webpack_require__(66);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(11);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(11);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(18);
var redefineAll = __webpack_require__(60);
var meta = __webpack_require__(38);
var forOf = __webpack_require__(62);
var anInstance = __webpack_require__(61);
var isObject = __webpack_require__(13);
var fails = __webpack_require__(16);
var $iterDetect = __webpack_require__(67);
var setToStringTag = __webpack_require__(32);
var inheritIfRequired = __webpack_require__(86);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var setPrototypeOf = __webpack_require__(68).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(31);
var isObject = __webpack_require__(13);
var invoke = __webpack_require__(88);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(15) && /./g.flags != 'g') __webpack_require__(14).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(46)
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(14);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(17);
var $includes = __webpack_require__(53)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(57)('includes');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(17);
var context = __webpack_require__(93);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(94)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(71);
var defined = __webpack_require__(27);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(10)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(71);
var anObject = __webpack_require__(12);
var speciesConstructor = __webpack_require__(96);
var advanceStringIndex = __webpack_require__(97);
var toLength = __webpack_require__(35);
var callRegExpExec = __webpack_require__(98);
var regexpExec = __webpack_require__(47);
var fails = __webpack_require__(16);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(99)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(31);
var SPECIES = __webpack_require__(10)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(59)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(45);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(100);
var redefine = __webpack_require__(18);
var hide = __webpack_require__(19);
var fails = __webpack_require__(16);
var defined = __webpack_require__(27);
var wks = __webpack_require__(10);
var regexpExec = __webpack_require__(47);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(47);
__webpack_require__(17)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 101 */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var regularTabbables = [];
  var orderedTabbables = [];

  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (
    !isNodeMatchingSelectorFocusable(node)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled
    || isHiddenInput(node)
    || isHidden(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/@material/base/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var base_foundation = (MDCFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/base/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var component_MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, __spread(args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var component = (component_MDCComponent);
//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/dom/events.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
//# sourceMappingURL=events.js.map
// CONCATENATED MODULE: ./node_modules/@material/dom/ponyfill.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map
// CONCATENATED MODULE: ./node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/ripple/util.js
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    // Append to head instead of body because this script might be invoked in the
    // head, in which case the body doesn't exist yet. The probe works either way.
    document.head.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/@material/ripple/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var foundation_MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var ripple_foundation = (foundation_MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/ripple/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var component_MDCRipple =
/** @class */
function (_super) {
  __extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new foundation_MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(component_MDCComponent);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(95);

// CONCATENATED MODULE: ./src/utils/className.js












function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Material Components frequently enhance their DOM elements with additional
 * class names that depend on component state (ie. has focus) rather than
 * configuration state (ie. text field value).
 *
 * Since the component state is unknown to Elm, we cannot control those class
 * names in Elm. On the other hand, Elm does controls some class names (ie.
 * mdc-text-field).
 *
 * This means that currently, Elm's virtual dom library assumes sole control
 * over class names, since it sets a DOM node's `className` property. Thus, if
 * a Elm-controlled class name changes, it might delete additional uncontrolled
 * class names.
 *
 * We work around this issue by patching a DOM node's `className` property in
 * the following way:
 * (1) We may assume that Elm only ever touches `className`
 * (2) We may assume that Material Components only ever touch `classList`
 *
 * Thus, whenever a write to `className` happens, we record the list of classes
 * that Elm has control over (classes that have been added via `className`).
 * Then we identify classes removed via `className`, and we only allow removal
 * of classes that Elm has control over. Classes added via the `classList`
 * property cannot be removed via the `className` property.
 *
 * We will not require this fix anymore once Elm's virtual dom implementation
 * uses `classList.add`, `classList.remove` to manage class names.
 *
 * In addition to this, there are some class names that Elm should assume
 * control over for the first frame, but may not remove them in subsequent
 * frames. Those class names are class names that fall into the component
 * state, but may have to be set by Elm in the first frame to prevent a flash
 * of unstyled content (FOUC).
 *
 * The logic for those is implemented similarly, with the exception that the
 * classNames have to be listed in the node's property `foucClassNames`.
 */
function setClassName(className) {
  var css = className.split(" ").filter(function (cs) {
    return cs !== "";
  });

  var _iterator = _createForOfIteratorHelper(css),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cs = _step.value;
      this.classList.add(cs);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;

  var _iterator2 = _createForOfIteratorHelper(this.className_),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _cs = _step2.value;
      if (!!this.foucClassNames && this.foucClassNames.includes(_cs)) return;
      if (!css.includes(_cs)) this.classList.remove(_cs);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  this.className_ = css;
}

function getClassName() {
  return "".concat(this.classList);
}

function installClassNameChangeHook() {
  Object.defineProperty(this, "className", {
    get: getClassName.bind(this),
    set: setClassName.bind(this),
    configurable: true
  });
  this.className_ = _toConsumableArray(this.classList);
}
;
function uninstallClassNameChangeHook() {
  var object = Object.getPrototypeOf(this);
  var descriptor;

  while (!(descriptor = Object.getOwnPropertyDescriptor(object, "className"))) {
    object = Object.getPrototypeOf(object);
  }

  Object.defineProperty(this, "className", descriptor);
  delete this.className_;
  this.className = getClassName.call(this);
}
;
// CONCATENATED MODULE: ./src/button/custom-element.js











function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var custom_element_MdcButton = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MdcButton, _HTMLElement);

  var _super = _createSuper(MdcButton);

  _createClass(MdcButton, [{
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;
    }
  }]);

  function MdcButton() {
    var _this;

    _classCallCheck(this, MdcButton);

    _this = _super.call(this);
    _this.ripple_;
    return _this;
  }

  _createClass(MdcButton, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.ripple_ = new component_MDCRipple(this.querySelector(".mdc-button"));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.ripple_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));


;
customElements.define("mdc-button", custom_element_MdcButton);
// CONCATENATED MODULE: ./src/card/custom-element.js











function custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return custom_element_typeof(obj); }

function custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) custom_element_setPrototypeOf(subClass, superClass); }

function custom_element_createSuper(Derived) { var hasNativeReflectConstruct = custom_element_isNativeReflectConstruct(); return function () { var Super = custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return custom_element_possibleConstructorReturn(this, result); }; }

function custom_element_possibleConstructorReturn(self, call) { if (call && (custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return custom_element_assertThisInitialized(self); }

function custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return custom_element_construct(Class, arguments, custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return custom_element_setPrototypeOf(Wrapper, Class); }; return custom_element_wrapNativeSuper(Class); }

function custom_element_construct(Parent, args, Class) { if (custom_element_isNativeReflectConstruct()) { custom_element_construct = Reflect.construct; } else { custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return custom_element_construct.apply(null, arguments); }

function custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function custom_element_setPrototypeOf(o, p) { custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return custom_element_setPrototypeOf(o, p); }

function custom_element_getPrototypeOf(o) { custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return custom_element_getPrototypeOf(o); }




var custom_element_MdcCard = /*#__PURE__*/function (_HTMLElement) {
  custom_element_inherits(MdcCard, _HTMLElement);

  var _super = custom_element_createSuper(MdcCard);

  custom_element_createClass(MdcCard, [{
    key: "focus",
    value: function focus() {
      if (!!this.primaryAction_) {
        this.primaryAction_.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (!!this.primaryAction_) {
        this.primaryAction_.blur();
      }
    }
  }]);

  function MdcCard() {
    var _this;

    custom_element_classCallCheck(this, MdcCard);

    _this = _super.call(this);
    _this.primaryAction_;
    _this.ripple_;
    return _this;
  }

  custom_element_createClass(MdcCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      var primaryActionElement = this.querySelector(".mdc-card__primary-action");

      if (!!primaryActionElement) {
        this.primaryAction_ = primaryActionElement;
      }

      if (!!this.primaryAction_) {
        this.ripple_ = new component_MDCRipple(this.primaryAction_);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.ripple_) {
        this.ripple_.destroy();
      }

      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcCard;
}( /*#__PURE__*/custom_element_wrapNativeSuper(HTMLElement));


;
customElements.define("mdc-card", custom_element_MdcCard);
// CONCATENATED MODULE: ./node_modules/@material/animation/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/@material/ripple/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var ripple_component_MDCRipple = /** @class */ (function (_super) {
    __extends(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return supportsCssVariables(window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, applyPassive());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, applyPassive());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return matches(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, applyPassive());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, applyPassive());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new foundation_MDCRippleFoundation(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/checkbox/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var constants_cssClasses = {
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var constants_strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var constants_numbers = {
    ANIM_END_LATCH_MS: 250,
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/checkbox/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCCheckboxFoundation = /** @class */ (function (_super) {
    __extends(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;
        _this.currentCheckState_ = constants_strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass_ = '';
        _this.animEndLatchTimer_ = 0;
        _this.enableAnimationEndHandler_ = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter_.addClass(constants_cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer_);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(constants_cssClasses.DISABLED);
        }
        else {
            this.adapter_.removeClass(constants_cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler_) {
            return;
        }
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(_this.currentAnimationClass_);
            _this.enableAnimationEndHandler_ = false;
        }, constants_numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState_();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
        if (!this.adapter_.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked_();
        var TRANSITION_STATE_UNCHECKED = constants_strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = constants_cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter_.removeClass(SELECTED);
        }
        else {
            this.adapter_.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter_.forceLayout();
            this.adapter_.removeClass(this.currentAnimationClass_);
        }
        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
            this.adapter_.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
        var TRANSITION_STATE_INDETERMINATE = constants_strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = constants_strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = constants_strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter_.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
        var TRANSITION_STATE_INIT = constants_strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = constants_strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = constants_strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter_.isIndeterminate()) {
            this.adapter_.setNativeControlAttr(constants_strings.ARIA_CHECKED_ATTR, constants_strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter_.removeNativeControlAttr(constants_strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var checkbox_foundation = (foundation_MDCCheckboxFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/checkbox/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var component_MDCCheckbox =
/** @class */
function (_super) {
  __extends(MDCCheckbox, _super);

  function MDCCheckbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCCheckbox.attachTo = function (root) {
    return new MDCCheckbox(root);
  };

  Object.defineProperty(MDCCheckbox.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
    get: function get() {
      return this.nativeControl_.indeterminate;
    },
    set: function set(indeterminate) {
      this.nativeControl_.indeterminate = indeterminate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "value", {
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckbox.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleAnimationEnd_ = function () {
      return _this.foundation_.handleAnimationEnd();
    };

    this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckbox.prototype.destroy = function () {
    this.ripple_.destroy();
    this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.uninstallPropertyChangeHooks_();

    _super.prototype.destroy.call(this);
  };

  MDCCheckbox.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function forceLayout() {
        return _this.root_.offsetWidth;
      },
      hasNativeControl: function hasNativeControl() {
        return !!_this.nativeControl_;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this.root_.parentNode);
      },
      isChecked: function isChecked() {
        return _this.checked;
      },
      isIndeterminate: function isIndeterminate() {
        return _this.indeterminate;
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        return _this.nativeControl_.removeAttribute(attr);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        return _this.nativeControl_.setAttribute(attr, value);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new foundation_MDCCheckboxFoundation(adapter);
  };

  MDCCheckbox.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter(this)), {
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, applyPassive());
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.nativeControl_, ':active');
      },
      isUnbounded: function isUnbounded() {
        return true;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, applyPassive());
      }
    });

    return new ripple_component_MDCRipple(this.root_, new foundation_MDCRippleFoundation(adapter));
  };

  MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
    var _this = this;

    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739

      if (!validDescriptor(desc)) {
        return;
      } // Type cast is needed for compatibility with Closure Compiler.


      var nativeGetter = desc.get;
      var nativeCbDesc = {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        get: nativeGetter,
        set: function set(state) {
          desc.set.call(nativeCb, state);

          _this.foundation_.handleChange();
        }
      };
      Object.defineProperty(nativeCb, controlState, nativeCbDesc);
    });
  };

  MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);

      if (!validDescriptor(desc)) {
        return;
      }

      Object.defineProperty(nativeCb, controlState, desc);
    });
  };

  Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = foundation_MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCCheckbox;
}(component_MDCComponent);



function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
// CONCATENATED MODULE: ./src/checkbox/custom-element.js











function checkbox_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { checkbox_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { checkbox_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return checkbox_custom_element_typeof(obj); }

function checkbox_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function checkbox_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function checkbox_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) checkbox_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) checkbox_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function checkbox_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) checkbox_custom_element_setPrototypeOf(subClass, superClass); }

function checkbox_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = checkbox_custom_element_isNativeReflectConstruct(); return function () { var Super = checkbox_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = checkbox_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return checkbox_custom_element_possibleConstructorReturn(this, result); }; }

function checkbox_custom_element_possibleConstructorReturn(self, call) { if (call && (checkbox_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return checkbox_custom_element_assertThisInitialized(self); }

function checkbox_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function checkbox_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; checkbox_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !checkbox_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return checkbox_custom_element_construct(Class, arguments, checkbox_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return checkbox_custom_element_setPrototypeOf(Wrapper, Class); }; return checkbox_custom_element_wrapNativeSuper(Class); }

function checkbox_custom_element_construct(Parent, args, Class) { if (checkbox_custom_element_isNativeReflectConstruct()) { checkbox_custom_element_construct = Reflect.construct; } else { checkbox_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) checkbox_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return checkbox_custom_element_construct.apply(null, arguments); }

function checkbox_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function checkbox_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function checkbox_custom_element_setPrototypeOf(o, p) { checkbox_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return checkbox_custom_element_setPrototypeOf(o, p); }

function checkbox_custom_element_getPrototypeOf(o) { checkbox_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return checkbox_custom_element_getPrototypeOf(o); }




var custom_element_MdcCheckbox = /*#__PURE__*/function (_HTMLElement) {
  checkbox_custom_element_inherits(MdcCheckbox, _HTMLElement);

  var _super = checkbox_custom_element_createSuper(MdcCheckbox);

  checkbox_custom_element_createClass(MdcCheckbox, [{
    key: "focus",
    value: function focus() {
      this.checkbox_.nativeControl_.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.checkbox_.nativeControl_.blur();
    }
  }, {
    key: "checked",
    get: function get() {
      return this.checked_;
    },
    set: function set(checked) {
      this.checked_ = checked;

      if (!!this.checkbox_) {
        this.checkbox_.checked = checked;
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.indeterminate_;
    },
    set: function set(indeterminate) {
      this.indeterminate_ = indeterminate;

      if (!!this.checkbox_) {
        this.checkbox_.indeterminate = indeterminate;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;

      if (!!this.checkbox_) {
        this.checkbox_.disabled = disabled;
      }
    }
  }]);

  function MdcCheckbox() {
    var _this;

    checkbox_custom_element_classCallCheck(this, MdcCheckbox);

    _this = _super.call(this);
    _this.checked_ = false;
    _this.indeterminate_ = false;
    _this.disabled_ = false;
    _this.checkbox_;
    return _this;
  }

  checkbox_custom_element_createClass(MdcCheckbox, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.checkbox_ = new component_MDCCheckbox(this);
      this.checkbox_.checked = this.checked_;
      this.checkbox_.indeterminate = this.indeterminate_;
      this.checkbox_.disabled = this.disabled_;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.checkbox_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcCheckbox;
}( /*#__PURE__*/checkbox_custom_element_wrapNativeSuper(HTMLElement));

customElements.define("mdc-checkbox", custom_element_MdcCheckbox);
// CONCATENATED MODULE: ./node_modules/@material/chips/chip/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Direction;
(function (Direction) {
    Direction[Direction["RIGHT"] = 0] = "RIGHT";
    Direction[Direction["LEFT"] = 1] = "LEFT";
})(Direction || (Direction = {}));
var EventSource;
(function (EventSource) {
    EventSource[EventSource["PRIMARY"] = 0] = "PRIMARY";
    EventSource[EventSource["TRAILING"] = 1] = "TRAILING";
    EventSource[EventSource["NONE"] = 2] = "NONE";
})(EventSource || (EventSource = {}));
var chip_constants_strings = {
    ARIA_CHECKED: 'aria-checked',
    ARROW_DOWN_KEY: 'ArrowDown',
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    ARROW_UP_KEY: 'ArrowUp',
    BACKSPACE_KEY: 'Backspace',
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    DELETE_KEY: 'Delete',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    HOME_KEY: 'Home',
    INTERACTION_EVENT: 'MDCChip:interaction',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    NAVIGATION_EVENT: 'MDCChip:navigation',
    PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
    REMOVAL_EVENT: 'MDCChip:removal',
    SELECTION_EVENT: 'MDCChip:selection',
    SPACEBAR_KEY: ' ',
    TAB_INDEX: 'tabindex',
    TRAILING_ACTION_SELECTOR: '.mdc-chip__trailing-action',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
};
var chip_constants_cssClasses = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    DELETABLE: 'mdc-chip--deletable',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    PRIMARY_ACTION: 'mdc-chip__primary-action',
    SELECTED: 'mdc-chip--selected',
    TEXT: 'mdc-chip__text',
    TRAILING_ACTION: 'mdc-chip__trailing-action',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
};
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
navigationKeys.add(chip_constants_strings.ARROW_LEFT_KEY);
navigationKeys.add(chip_constants_strings.ARROW_RIGHT_KEY);
navigationKeys.add(chip_constants_strings.ARROW_DOWN_KEY);
navigationKeys.add(chip_constants_strings.ARROW_UP_KEY);
navigationKeys.add(chip_constants_strings.END_KEY);
navigationKeys.add(chip_constants_strings.HOME_KEY);
var jumpChipKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
jumpChipKeys.add(chip_constants_strings.ARROW_UP_KEY);
jumpChipKeys.add(chip_constants_strings.ARROW_DOWN_KEY);
jumpChipKeys.add(chip_constants_strings.HOME_KEY);
jumpChipKeys.add(chip_constants_strings.END_KEY);
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./src/chip/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var emptyClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};

var foundation_MDCChipFoundation =
/** @class */
function (_super) {
  __extends(MDCChipFoundation, _super);

  function MDCChipFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCChipFoundation.defaultAdapter), adapter)) || this;
    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     */


    _this.shouldRemoveOnTrailingIconClick_ = true;
    return _this;
  }

  Object.defineProperty(MDCChipFoundation, "strings", {
    get: function get() {
      return chip_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "cssClasses", {
    get: function get() {
      return chip_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        addClassToLeadingIcon: function addClassToLeadingIcon() {
          return undefined;
        },
        eventTargetHasClass: function eventTargetHasClass() {
          return false;
        },
        focusPrimaryAction: function focusPrimaryAction() {
          return undefined;
        },
        focusTrailingAction: function focusTrailingAction() {
          return undefined;
        },
        getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
          return emptyClientRect;
        },
        getComputedStyleValue: function getComputedStyleValue() {
          return '';
        },
        getRootBoundingClientRect: function getRootBoundingClientRect() {
          return emptyClientRect;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasLeadingIcon: function hasLeadingIcon() {
          return false;
        },
        hasTrailingAction: function hasTrailingAction() {
          return false;
        },
        isRTL: function isRTL() {
          return false;
        },
        notifyInteraction: function notifyInteraction() {
          return undefined;
        },
        notifyNavigation: function notifyNavigation() {
          return undefined;
        },
        notifyRemoval: function notifyRemoval() {
          return undefined;
        },
        notifySelection: function notifySelection() {
          return undefined;
        },
        notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {
          return undefined;
        },
        setPrimaryActionAttr: function setPrimaryActionAttr() {
          return undefined;
        },
        setStyleProperty: function setStyleProperty() {
          return undefined;
        },
        setTrailingActionAttr: function setTrailingActionAttr() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCChipFoundation.prototype.isSelected = function () {
    return this.adapter_.hasClass(chip_constants_cssClasses.SELECTED);
  };

  MDCChipFoundation.prototype.setSelected = function (selected) {
    this.setSelected_(selected);
    this.notifySelection_(selected);
  };

  MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.setSelected_(selected);

    if (shouldNotifyClients) {
      this.notifyIgnoredSelection_(selected);
    }
  };

  MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
    return this.shouldRemoveOnTrailingIconClick_;
  };

  MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  };

  MDCChipFoundation.prototype.getDimensions = function () {
    var _this = this;

    var getRootRect = function getRootRect() {
      return _this.adapter_.getRootBoundingClientRect();
    };

    var getCheckmarkRect = function getCheckmarkRect() {
      return _this.adapter_.getCheckmarkBoundingClientRect();
    }; // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
    // size of the checkmark.


    if (!this.adapter_.hasLeadingIcon()) {
      var checkmarkRect = getCheckmarkRect();

      if (checkmarkRect) {
        var rootRect = getRootRect(); // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
        // However, the checkbox is initially hidden by setting the width to 0.
        // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
        // when adding it to the root client rect's width.

        return {
          bottom: rootRect.bottom,
          height: rootRect.height,
          left: rootRect.left,
          right: rootRect.right,
          top: rootRect.top,
          width: rootRect.width + checkmarkRect.height
        };
      }
    }

    return getRootRect();
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChipFoundation.prototype.beginExit = function () {
    this.adapter_.addClass(chip_constants_cssClasses.CHIP_EXIT);
  };
  /**
   * Handles an interaction event on the root element.
   */


  MDCChipFoundation.prototype.handleInteraction = function (evt) {
    if (this.shouldHandleInteraction_(evt)) {
      this.adapter_.notifyInteraction();
      this.focusPrimaryAction_();
    }
  };
  /**
   * Handles a transition end event on the root element.
   */


  MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
    var _this = this; // Handle transition end event on the chip when it is about to be removed.


    var shouldHandle = this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.CHIP_EXIT);
    var widthIsAnimating = evt.propertyName === 'width';
    var opacityIsAnimating = evt.propertyName === 'opacity';

    if (shouldHandle && opacityIsAnimating) {
      // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
      var chipWidth_1 = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
      // to its current pixel width, so we aren't transitioning out of 'auto'.

      requestAnimationFrame(function () {
        _this.adapter_.setStyleProperty('width', chipWidth_1); // To mitigate jitter, start transitioning padding and margin before width.


        _this.adapter_.setStyleProperty('padding', '0');

        _this.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


        requestAnimationFrame(function () {
          _this.adapter_.setStyleProperty('width', '0');
        });
      });
      return;
    }

    if (shouldHandle && widthIsAnimating) {
      this.removeFocus_();
      this.adapter_.notifyRemoval();
    } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


    if (!opacityIsAnimating) {
      return;
    }

    var shouldHideLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.LEADING_ICON) && this.adapter_.hasClass(chip_constants_cssClasses.SELECTED);
    var shouldShowLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.CHECKMARK) && !this.adapter_.hasClass(chip_constants_cssClasses.SELECTED);

    if (shouldHideLeadingIcon) {
      return this.adapter_.addClassToLeadingIcon(chip_constants_cssClasses.HIDDEN_LEADING_ICON);
    }

    if (shouldShowLeadingIcon) {
      return this.adapter_.removeClassFromLeadingIcon(chip_constants_cssClasses.HIDDEN_LEADING_ICON);
    }
  };
  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   */


  MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
    if (this.shouldHandleInteraction_(evt)) {
      this.adapter_.notifyTrailingIconInteraction();
      this.removeChip_(evt);
    }
  };
  /**
   * Handles a keydown event from the root element.
   */


  MDCChipFoundation.prototype.handleKeydown = function (evt) {
    if (this.shouldRemoveChip_(evt)) {
      return this.removeChip_(evt);
    }

    var key = evt.key; // Early exit if the key is not usable

    if (!navigationKeys.has(key)) {
      return;
    } // Prevent default behavior for movement keys which could include scrolling


    evt.preventDefault();
    this.focusNextAction_(evt);
  };

  MDCChipFoundation.prototype.removeFocus = function () {
    this.adapter_.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '-1');
    this.adapter_.setTrailingActionAttr(chip_constants_strings.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.focusPrimaryAction = function () {
    this.focusPrimaryAction_();
  };

  MDCChipFoundation.prototype.focusTrailingAction = function () {
    if (!this.adapter_.hasTrailingAction()) {
      return this.focusPrimaryAction_();
    }

    this.focusTrailingAction_();
  };

  MDCChipFoundation.prototype.focusNextAction_ = function (evt) {
    var key = evt.key;
    var hasTrailingAction = this.adapter_.hasTrailingAction();
    var dir = this.getDirection_(key);
    var source = this.getEvtSource_(evt); // Early exit if the key should jump keys or the chip only has one action (i.e. no trailing action)

    if (jumpChipKeys.has(key) || !hasTrailingAction) {
      this.adapter_.notifyNavigation(key, source);
      return;
    }

    if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
      return this.focusTrailingAction_();
    }

    if (source === EventSource.TRAILING && dir === Direction.LEFT) {
      return this.focusPrimaryAction_();
    }

    this.adapter_.notifyNavigation(key, EventSource.NONE);
  };

  MDCChipFoundation.prototype.getEvtSource_ = function (evt) {
    if (this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.PRIMARY_ACTION)) {
      return EventSource.PRIMARY;
    }

    if (this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.TRAILING_ACTION)) {
      return EventSource.TRAILING;
    }

    return EventSource.NONE;
  };

  MDCChipFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter_.isRTL();

    if (key === chip_constants_strings.ARROW_LEFT_KEY && !isRTL || key === chip_constants_strings.ARROW_RIGHT_KEY && isRTL) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };

  MDCChipFoundation.prototype.focusPrimaryAction_ = function () {
    this.adapter_.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '0');
    this.adapter_.focusPrimaryAction();
    this.adapter_.setTrailingActionAttr(chip_constants_strings.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.focusTrailingAction_ = function () {
    this.adapter_.setTrailingActionAttr(chip_constants_strings.TAB_INDEX, '0');
    this.adapter_.focusTrailingAction();
    this.adapter_.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.removeFocus_ = function () {
    this.adapter_.setTrailingActionAttr(chip_constants_strings.TAB_INDEX, '-1');
    this.adapter_.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.removeChip_ = function (evt) {
    evt.stopPropagation();

    if (this.shouldRemoveOnTrailingIconClick_) {
      this.beginExit();
    }
  };

  MDCChipFoundation.prototype.shouldHandleInteraction_ = function (evt) {
    if (evt.type === 'click') {
      return true;
    }

    var keyEvt = evt;
    return keyEvt.key === chip_constants_strings.ENTER_KEY || keyEvt.key === chip_constants_strings.SPACEBAR_KEY;
  };

  MDCChipFoundation.prototype.shouldRemoveChip_ = function (evt) {
    var isDeletable = this.adapter_.hasClass(chip_constants_cssClasses.DELETABLE);
    return isDeletable && (evt.key === chip_constants_strings.BACKSPACE_KEY || evt.key === chip_constants_strings.DELETE_KEY);
  };

  MDCChipFoundation.prototype.setSelected_ = function (selected) {
    if (selected) {
      this.adapter_.addClass(chip_constants_cssClasses.SELECTED);
      this.adapter_.setPrimaryActionAttr(chip_constants_strings.ARIA_CHECKED, 'true');
    } else {
      this.adapter_.removeClass(chip_constants_cssClasses.SELECTED);
      this.adapter_.setPrimaryActionAttr(chip_constants_strings.ARIA_CHECKED, 'false');
    }
  };

  MDCChipFoundation.prototype.notifySelection_ = function (selected) {
    this.adapter_.notifySelection(selected, false);
  };

  MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
    this.adapter_.notifySelection(selected, true);
  };

  return MDCChipFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ var chip_foundation = (foundation_MDCChipFoundation);
// CONCATENATED MODULE: ./src/chip/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var INTERACTION_EVENTS = ['click', 'keydown'];

var component_MDCChip =
/** @class */
function (_super) {
  __extends(MDCChip, _super);

  function MDCChip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCChip.prototype, "selected", {
    /**
     * @return Whether the chip is selected.
     */
    get: function get() {
      return this.foundation_.isSelected();
    },

    /**
     * Sets selected state on the chip.
     */
    set: function set(selected) {
      this.foundation_.setSelected(selected);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
    /**
     * @return Whether a trailing icon click should trigger exit/removal of the chip.
     */
    get: function get() {
      return this.foundation_.getShouldRemoveOnTrailingIconClick();
    },

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     */
    set: function set(shouldRemove) {
      this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "id", {
    get: function get() {
      return this.root_.id;
    },
    enumerable: true,
    configurable: true
  });

  MDCChip.attachTo = function (root) {
    return new MDCChip(root);
  };

  MDCChip.prototype.initialize = function (rippleFactory) {
    var _this = this;

    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new ripple_component_MDCRipple(el, foundation);
      };
    }

    this.leadingIcon_ = this.root_.querySelector(chip_constants_strings.LEADING_ICON_SELECTOR);
    this.trailingIcon_ = this.root_.querySelector(chip_constants_strings.TRAILING_ICON_SELECTOR);
    this.checkmark_ = this.root_.querySelector(chip_constants_strings.CHECKMARK_SELECTOR);
    this.primaryAction_ = this.root_.querySelector(chip_constants_strings.PRIMARY_ACTION_SELECTOR);
    this.trailingAction_ = this.root_.querySelector(chip_constants_strings.TRAILING_ACTION_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var rippleAdapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter(this)), {
      computeBoundingRect: function computeBoundingRect() {
        return _this.foundation_.getDimensions();
      }
    });

    this.ripple_ = rippleFactory(this.root_, new foundation_MDCRippleFoundation(rippleAdapter));
  };

  MDCChip.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function (evt) {
      return _this.foundation_.handleInteraction(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.handleTrailingIconInteraction_ = function (evt) {
      return _this.foundation_.handleTrailingIconInteraction(evt);
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.listen(evtType, _this.handleInteraction_);
    });
    this.listen('transitionend', this.handleTransitionEnd_);
    this.listen('keydown', this.handleKeydown_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }
  };

  MDCChip.prototype.destroy = function () {
    var _this = this;

    this.ripple_.destroy();
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.unlisten(evtType, _this.handleInteraction_);
    });
    this.unlisten('transitionend', this.handleTransitionEnd_);
    this.unlisten('keydown', this.handleKeydown_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChip.prototype.beginExit = function () {
    this.foundation_.beginExit();
  };

  MDCChip.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target ? target.classList.contains(className) : false;
      },
      focusPrimaryAction: function focusPrimaryAction() {
        if (_this.primaryAction_) {
          _this.primaryAction_.focus();
        }
      },
      focusTrailingAction: function focusTrailingAction() {
        if (_this.trailingAction_) {
          _this.trailingAction_.focus();
        }
      },
      getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
        return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(_this.root_).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function getRootBoundingClientRect() {
        return _this.root_.getBoundingClientRect();
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasLeadingIcon: function hasLeadingIcon() {
        return !!_this.leadingIcon_;
      },
      hasTrailingAction: function hasTrailingAction() {
        return !!_this.trailingAction_;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      notifyInteraction: function notifyInteraction() {
        return _this.emit(chip_constants_strings.INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      notifyNavigation: function notifyNavigation(key, source) {
        return _this.emit(chip_constants_strings.NAVIGATION_EVENT, {
          chipId: _this.id,
          key: key,
          source: source
        }, true
        /* shouldBubble */
        );
      },
      notifyRemoval: function notifyRemoval() {
        _this.emit(chip_constants_strings.REMOVAL_EVENT, {
          chipId: _this.id,
          root: _this.root_
        }, true
        /* shouldBubble */
        );
      },
      notifySelection: function notifySelection(selected, shouldIgnore) {
        return _this.emit(chip_constants_strings.SELECTION_EVENT, {
          chipId: _this.id,
          selected: selected,
          shouldIgnore: shouldIgnore
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        return _this.emit(chip_constants_strings.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.remove(className);
        }
      },
      setPrimaryActionAttr: function setPrimaryActionAttr(attr, value) {
        if (_this.primaryAction_) {
          _this.primaryAction_.setAttribute(attr, value);
        }
      },
      setStyleProperty: function setStyleProperty(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      setTrailingActionAttr: function setTrailingActionAttr(attr, value) {
        if (_this.trailingAction_) {
          _this.trailingAction_.setAttribute(attr, value);
        }
      }
    };
    return new foundation_MDCChipFoundation(adapter);
  };

  MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.foundation_.setSelectedFromChipSet(selected, shouldNotifyClients);
  };

  MDCChip.prototype.focusPrimaryAction = function () {
    this.foundation_.focusPrimaryAction();
  };

  MDCChip.prototype.focusTrailingAction = function () {
    this.foundation_.focusTrailingAction();
  };

  MDCChip.prototype.removeFocus = function () {
    this.foundation_.removeFocus();
  };

  MDCChip.prototype.makePrimaryActionFocusable = function () {
    if (!this.primaryAction_) return;
    this.primaryAction_.setAttribute('tabindex', '0');
  };

  MDCChip.prototype.isPrimaryActionFocusable = function () {
    if (!this.primaryAction_) return false;
    return this.primaryAction_.getAttribute('tabindex') === '0';
  };

  return MDCChip;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/chip/custom-element.js











function chip_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { chip_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { chip_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return chip_custom_element_typeof(obj); }

function chip_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chip_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function chip_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) chip_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) chip_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function chip_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) chip_custom_element_setPrototypeOf(subClass, superClass); }

function chip_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = chip_custom_element_isNativeReflectConstruct(); return function () { var Super = chip_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = chip_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return chip_custom_element_possibleConstructorReturn(this, result); }; }

function chip_custom_element_possibleConstructorReturn(self, call) { if (call && (chip_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return chip_custom_element_assertThisInitialized(self); }

function chip_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function chip_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; chip_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !chip_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return chip_custom_element_construct(Class, arguments, chip_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return chip_custom_element_setPrototypeOf(Wrapper, Class); }; return chip_custom_element_wrapNativeSuper(Class); }

function chip_custom_element_construct(Parent, args, Class) { if (chip_custom_element_isNativeReflectConstruct()) { chip_custom_element_construct = Reflect.construct; } else { chip_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) chip_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return chip_custom_element_construct.apply(null, arguments); }

function chip_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function chip_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function chip_custom_element_setPrototypeOf(o, p) { chip_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return chip_custom_element_setPrototypeOf(o, p); }

function chip_custom_element_getPrototypeOf(o) { chip_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return chip_custom_element_getPrototypeOf(o); }



var idCounter = 0;

var custom_element_MdcChip = /*#__PURE__*/function (_HTMLElement) {
  chip_custom_element_inherits(MdcChip, _HTMLElement);

  var _super = chip_custom_element_createSuper(MdcChip);

  chip_custom_element_createClass(MdcChip, [{
    key: "id",
    get: function get() {
      return this.id_;
    },
    set: function set(id) {
      this.id_ = id;
    }
  }, {
    key: "selected",
    get: function get() {
      return this.selected_;
    },
    set: function set(selected) {
      this.selected_ = selected;

      if (!!this.chip_) {
        this.chip_.selected = selected;
      }
    }
  }]);

  function MdcChip() {
    var _this;

    chip_custom_element_classCallCheck(this, MdcChip);

    _this = _super.call(this);
    _this.selected_ = false;
    _this.id_ = "mdc-chip-".concat(++idCounter);
    _this.chipset_ = null;
    return _this;
  }

  chip_custom_element_createClass(MdcChip, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.chip_ = new component_MDCChip(this);
      this.chip_.selected = this.selected_;
      this.chipset_ = this.parentElement.parentElement.chipset_;
      this.chipset_.addChip(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.chip_.destroy();
      this.chipset_.foundation_.adapter_.removeChipAtIndex(this.chipset_.findChipIndex_(this.id));
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcChip;
}( /*#__PURE__*/chip_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-chip", custom_element_MdcChip);
// CONCATENATED MODULE: ./node_modules/@material/chips/chip-set/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var chip_set_constants_strings = {
    CHIP_SELECTOR: '.mdc-chip',
};
var chip_set_constants_cssClasses = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./src/chip-set/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var foundation_MDCChipSetFoundation =
/** @class */
function (_super) {
  __extends(MDCChipSetFoundation, _super);

  function MDCChipSetFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     */


    _this.selectedChipIds_ = [];
    return _this;
  }

  Object.defineProperty(MDCChipSetFoundation, "strings", {
    get: function get() {
      return chip_set_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
    get: function get() {
      return chip_set_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
    get: function get() {
      return {
        focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex() {
          return undefined;
        },
        focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex() {
          return undefined;
        },
        getChipListCount: function getChipListCount() {
          return -1;
        },
        getIndexOfChipById: function getIndexOfChipById() {
          return -1;
        },
        hasClass: function hasClass() {
          return false;
        },
        isRTL: function isRTL() {
          return false;
        },
        removeChipAtIndex: function removeChipAtIndex() {
          return undefined;
        },
        removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex() {
          return undefined;
        },
        selectChipAtIndex: function selectChipAtIndex() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns an array of the IDs of all selected chips.
   */

  MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
    return this.selectedChipIds_.slice();
  };
  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   * Does not notify clients of the updated selection state.
   */


  MDCChipSetFoundation.prototype.select = function (chipId) {
    this.select_(chipId, false);
  };
  /**
   * Handles a chip interaction event
   */


  MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.removeFocusFromChipsExcept_(index);
  };
  /**
   * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
   */


  MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected, shouldIgnore) {
    // Early exit if we should ignore the event
    if (shouldIgnore) {
      return;
    }

    var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

    if (selected && !chipIsSelected) {
      this.select(chipId);
    } else if (!selected && chipIsSelected) {
      this.deselect_(chipId);
    }
  };
  /**
   * Handles the event when a chip is removed.
   */


  MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.deselectAndNotifyClients_(chipId);
    this.adapter_.removeChipAtIndex(index);
    var maxIndex = this.adapter_.getChipListCount() - 1;
    var nextIndex = Math.min(index, maxIndex);
    this.removeFocusFromChipsExcept_(nextIndex); // After removing a chip, we should focus the trailing action for the next chip.

    this.adapter_.focusChipTrailingActionAtIndex(nextIndex);
  };
  /**
   * Handles a chip navigation event.
   */


  MDCChipSetFoundation.prototype.handleChipNavigation = function (chipId, key, source) {
    var maxIndex = this.adapter_.getChipListCount() - 1;
    var index = this.adapter_.getIndexOfChipById(chipId); // Early exit if the index is out of range or the key is unusable

    if (index === -1 || !navigationKeys.has(key)) {
      return;
    }

    var isRTL = this.adapter_.isRTL();
    var shouldIncrement = key === chip_constants_strings.ARROW_RIGHT_KEY && !isRTL || key === chip_constants_strings.ARROW_LEFT_KEY && isRTL || key === chip_constants_strings.ARROW_DOWN_KEY;
    var isHome = key === chip_constants_strings.HOME_KEY;
    var isEnd = key === chip_constants_strings.END_KEY;

    if (shouldIncrement) {
      index++;
    } else if (isHome) {
      index = 0;
    } else if (isEnd) {
      index = maxIndex;
    } else {
      index--;
    } // Early exit if the index is out of bounds


    if (index < 0 || index > maxIndex) {
      return;
    }

    this.removeFocusFromChipsExcept_(index);
    this.focusChipAction_(index, key, source);
  };

  MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
    var shouldJumpChips = jumpChipKeys.has(key);

    if (shouldJumpChips && source === EventSource.PRIMARY) {
      return this.adapter_.focusChipPrimaryActionAtIndex(index);
    }

    if (shouldJumpChips && source === EventSource.TRAILING) {
      return this.adapter_.focusChipTrailingActionAtIndex(index);
    }

    var dir = this.getDirection_(key);

    if (dir === Direction.LEFT) {
      return this.adapter_.focusChipTrailingActionAtIndex(index);
    }

    if (dir === Direction.RIGHT) {
      return this.adapter_.focusChipPrimaryActionAtIndex(index);
    }
  };

  MDCChipSetFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter_.isRTL();

    if (key === chip_constants_strings.ARROW_LEFT_KEY && !isRTL || key === chip_constants_strings.ARROW_RIGHT_KEY && isRTL) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };
  /**
   * Deselects the chip with the given id and optionally notifies clients.
   */


  MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
    if (shouldNotifyClients === void 0) {
      shouldNotifyClients = false;
    }

    var index = this.selectedChipIds_.indexOf(chipId);

    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      var chipIndex = this.adapter_.getIndexOfChipById(chipId);
      this.adapter_.selectChipAtIndex(chipIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }
  };
  /**
   * Deselects the chip with the given id and notifies clients.
   */


  MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
    this.deselect_(chipId, true);
  };

  MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
    var chipCount = this.adapter_.getChipListCount();

    for (var i = 0; i < chipCount; i++) {
      if (i !== index) {
        this.adapter_.removeFocusFromChipAtIndex(i);
      }
    }
  };

  MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter_.hasClass(chip_set_constants_cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
      var previouslySelectedChip = this.selectedChipIds_[0];
      var previouslySelectedIndex = this.adapter_.getIndexOfChipById(previouslySelectedChip);
      this.selectedChipIds_ = [];
      this.adapter_.selectChipAtIndex(previouslySelectedIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }

    this.selectedChipIds_.push(chipId);
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.adapter_.selectChipAtIndex(index,
    /** isSelected */
    true, shouldNotifyClients);
  };

  return MDCChipSetFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ var chip_set_foundation = (foundation_MDCChipSetFoundation);
// CONCATENATED MODULE: ./src/chip-set/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var component_a = foundation_MDCChipFoundation.strings,
    INTERACTION_EVENT = component_a.INTERACTION_EVENT,
    SELECTION_EVENT = component_a.SELECTION_EVENT,
    REMOVAL_EVENT = component_a.REMOVAL_EVENT,
    NAVIGATION_EVENT = component_a.NAVIGATION_EVENT;

var component_MDCChipSet =
/** @class */
function (_super) {
  __extends(MDCChipSet, _super);

  function MDCChipSet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCChipSet.attachTo = function (root) {
    return new MDCChipSet(root);
  };

  Object.defineProperty(MDCChipSet.prototype, "chips", {
    get: function get() {
      return this.chips_.slice();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
    /**
     * @return An array of the IDs of all selected chips.
     */
    get: function get() {
      return this.foundation_.getSelectedChipIds();
    },
    enumerable: true,
    configurable: true
  });
  /**
   * @param chipFactory A function which creates a new MDCChip.
   */

  MDCChipSet.prototype.initialize = function () {
    this.chipFactory_ = function (el) {
      return el.chip_;
    };

    this.chips_ = [];
  };

  MDCChipSet.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.chips_.forEach(function (chip) {
      if (chip.id && chip.selected) {
        _this.foundation_.select(chip.id);
      }
    });

    this.handleChipInteraction_ = function (evt) {
      return _this.foundation_.handleChipInteraction(evt.detail.chipId);
    };

    this.handleChipSelection_ = function (evt) {
      _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected, evt.detail.shouldIgnore);
    };

    this.handleChipRemoval_ = function (evt) {
      return _this.foundation_.handleChipRemoval(evt.detail.chipId);
    };

    this.handleChipNavigation_ = function (evt) {
      return _this.foundation_.handleChipNavigation(evt.detail.chipId, evt.detail.key, evt.detail.source);
    };

    this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
    this.listen(SELECTION_EVENT, this.handleChipSelection_); //this.listen(REMOVAL_EVENT, this.handleChipRemoval_);

    this.listen(NAVIGATION_EVENT, this.handleChipNavigation_);
  };

  MDCChipSet.prototype.destroy = function () {
    this.chips_.forEach(function (chip) {
      chip.destroy();
    });
    this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
    this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
    this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
    this.unlisten(NAVIGATION_EVENT, this.handleChipNavigation_);

    _super.prototype.destroy.call(this);
  };
  /**
   * Adds a new chip object to the chip set from the given chip element.
   */


  MDCChipSet.prototype.addChip = function (chipEl) {
    this.chips_.push(this.chipFactory_(chipEl));

    if (this.chips_.length === 1) {
      this.chips_[0].makePrimaryActionFocusable();
    }
  };

  MDCChipSet.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex(index) {
        _this.chips_[index].focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex(index) {
        _this.chips_[index].focusTrailingAction();
      },
      getChipListCount: function getChipListCount() {
        return _this.chips_.length;
      },
      getIndexOfChipById: function getIndexOfChipById(chipId) {
        return _this.findChipIndex_(chipId);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      removeChipAtIndex: function removeChipAtIndex(index) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_.splice(index, 1);

          if (_this.chips_.length > 0 && !_this.chips_.some(function (chip) {
            return chip.isPrimaryActionFocusable();
          })) {
            _this.chips_[Math.max(0, index - 1)].makePrimaryActionFocusable();
          }
        }
      },
      removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex(index) {
        _this.chips_[index].removeFocus();
      },
      selectChipAtIndex: function selectChipAtIndex(index, selected, shouldNotifyClients) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    };
    return new foundation_MDCChipSetFoundation(adapter);
  };
  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   */


  MDCChipSet.prototype.findChipIndex_ = function (chipId) {
    for (var i = 0; i < this.chips_.length; i++) {
      if (this.chips_[i].id === chipId) {
        return i;
      }
    }

    return -1;
  };

  return MDCChipSet;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/chip-set/custom-element.js













function chip_set_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { chip_set_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { chip_set_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return chip_set_custom_element_typeof(obj); }

function custom_element_createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = custom_element_unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function custom_element_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return custom_element_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return custom_element_arrayLikeToArray(o, minLen); }

function custom_element_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function chip_set_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chip_set_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function chip_set_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) chip_set_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) chip_set_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function chip_set_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) chip_set_custom_element_setPrototypeOf(subClass, superClass); }

function chip_set_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = chip_set_custom_element_isNativeReflectConstruct(); return function () { var Super = chip_set_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = chip_set_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return chip_set_custom_element_possibleConstructorReturn(this, result); }; }

function chip_set_custom_element_possibleConstructorReturn(self, call) { if (call && (chip_set_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return chip_set_custom_element_assertThisInitialized(self); }

function chip_set_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function chip_set_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; chip_set_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !chip_set_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return chip_set_custom_element_construct(Class, arguments, chip_set_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return chip_set_custom_element_setPrototypeOf(Wrapper, Class); }; return chip_set_custom_element_wrapNativeSuper(Class); }

function chip_set_custom_element_construct(Parent, args, Class) { if (chip_set_custom_element_isNativeReflectConstruct()) { chip_set_custom_element_construct = Reflect.construct; } else { chip_set_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) chip_set_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return chip_set_custom_element_construct.apply(null, arguments); }

function chip_set_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function chip_set_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function chip_set_custom_element_setPrototypeOf(o, p) { chip_set_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return chip_set_custom_element_setPrototypeOf(o, p); }

function chip_set_custom_element_getPrototypeOf(o) { chip_set_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return chip_set_custom_element_getPrototypeOf(o); }



var custom_element_MdcChipSet = /*#__PURE__*/function (_HTMLElement) {
  chip_set_custom_element_inherits(MdcChipSet, _HTMLElement);

  var _super = chip_set_custom_element_createSuper(MdcChipSet);

  chip_set_custom_element_createClass(MdcChipSet, [{
    key: "focus",
    value: function focus() {
      var selectedChip = null;

      var _iterator = custom_element_createForOfIteratorHelper(this.chipset_.chips),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var chip = _step.value;

          if (chip.selected) {
            selectedChip = chip;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!!selectedChip) {
        selectedChip.focusPrimaryAction();
      } else if (this.chipset_.chips.length > 0) {
        this.chipset_.chips[0].focusPrimaryAction();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.contains(document.activeElement)) document.activeElement.blur();
    }
  }]);

  function MdcChipSet() {
    chip_set_custom_element_classCallCheck(this, MdcChipSet);

    return _super.call(this);
  }

  chip_set_custom_element_createClass(MdcChipSet, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.chipset_ = new component_MDCChipSet(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.chipset_.destroy();
    }
  }]);

  return MdcChipSet;
}( /*#__PURE__*/chip_set_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-chip-set", custom_element_MdcChipSet);
// CONCATENATED MODULE: ./node_modules/@material/data-table/constants.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var data_table_constants_cssClasses = {
    CELL: 'mdc-data-table__cell',
    CELL_NUMERIC: 'mdc-data-table__cell--numeric',
    CONTENT: 'mdc-data-table__content',
    HEADER_ROW: 'mdc-data-table__header-row',
    HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
    ROOT: 'mdc-data-table',
    ROW: 'mdc-data-table__row',
    ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
    ROW_SELECTED: 'mdc-data-table__row--selected',
};
var data_table_constants_strings = {
    ARIA_SELECTED: 'aria-selected',
    DATA_ROW_ID_ATTR: 'data-row-id',
    HEADER_ROW_CHECKBOX_SELECTOR: "." + data_table_constants_cssClasses.HEADER_ROW_CHECKBOX,
    ROW_CHECKBOX_SELECTOR: "." + data_table_constants_cssClasses.ROW_CHECKBOX,
    ROW_SELECTED_SELECTOR: "." + data_table_constants_cssClasses.ROW_SELECTED,
    ROW_SELECTOR: "." + data_table_constants_cssClasses.ROW,
};
var events = {
    ROW_SELECTION_CHANGED: 'MDCDataTable:rowSelectionChanged',
    SELECTED_ALL: 'MDCDataTable:selectedAll',
    UNSELECTED_ALL: 'MDCDataTable:unselectedAll',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/data-table/foundation.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCDataTableFoundation = /** @class */ (function (_super) {
    __extends(MDCDataTableFoundation, _super);
    function MDCDataTableFoundation(adapter) {
        return _super.call(this, __assign({}, MDCDataTableFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassAtRowIndex: function () { return undefined; },
                getRowCount: function () { return 0; },
                getRowElements: function () { return []; },
                getRowIdAtIndex: function () { return ''; },
                getRowIndexByChildElement: function () { return 0; },
                getSelectedRowCount: function () { return 0; },
                isCheckboxAtRowIndexChecked: function () { return false; },
                isHeaderRowCheckboxChecked: function () { return false; },
                isRowsSelectable: function () { return false; },
                notifyRowSelectionChanged: function () { return undefined; },
                notifySelectedAll: function () { return undefined; },
                notifyUnselectedAll: function () { return undefined; },
                registerHeaderRowCheckbox: function () { return undefined; },
                registerRowCheckboxes: function () { return undefined; },
                removeClassAtRowIndex: function () { return undefined; },
                setAttributeAtRowIndex: function () { return undefined; },
                setHeaderRowCheckboxChecked: function () { return undefined; },
                setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                setRowCheckboxCheckedAtIndex: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is synchronous.
     */
    MDCDataTableFoundation.prototype.layout = function () {
        if (this.adapter_.isRowsSelectable()) {
            this.adapter_.registerHeaderRowCheckbox();
            this.adapter_.registerRowCheckboxes();
            this.setHeaderRowCheckboxState_();
        }
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is asynchronous.
     */
    MDCDataTableFoundation.prototype.layoutAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.adapter_.isRowsSelectable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.adapter_.registerHeaderRowCheckbox()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adapter_.registerRowCheckboxes()];
                    case 2:
                        _a.sent();
                        this.setHeaderRowCheckboxState_();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return Returns array of row elements.
     */
    MDCDataTableFoundation.prototype.getRows = function () {
        return this.adapter_.getRowElements();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
            var isSelected = false;
            if (rowId && rowIds.indexOf(rowId) >= 0) {
                isSelected = true;
            }
            this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
            this.selectRowAtIndex_(rowIndex, isSelected);
        }
        this.setHeaderRowCheckboxState_();
    };
    /**
     * @return Returns array of selected row ids.
     */
    MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
        var selectedRowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            if (this.adapter_.isCheckboxAtRowIndexChecked(rowIndex)) {
                selectedRowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
            }
        }
        return selectedRowIds;
    };
    /**
     * Handles header row checkbox change event.
     */
    MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
        var isHeaderChecked = this.adapter_.isHeaderRowCheckboxChecked();
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
            this.selectRowAtIndex_(rowIndex, isHeaderChecked);
        }
        if (isHeaderChecked) {
            this.adapter_.notifySelectedAll();
        }
        else {
            this.adapter_.notifyUnselectedAll();
        }
    };
    /**
     * Handles change event originated from row checkboxes.
     */
    MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
        var rowIndex = this.adapter_.getRowIndexByChildElement(event.target);
        if (rowIndex === -1) {
            return;
        }
        var selected = this.adapter_.isCheckboxAtRowIndexChecked(rowIndex);
        this.selectRowAtIndex_(rowIndex, selected);
        this.setHeaderRowCheckboxState_();
        var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
        this.adapter_.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
    };
    /**
     * Updates header row checkbox state based on number of rows selected.
     */
    MDCDataTableFoundation.prototype.setHeaderRowCheckboxState_ = function () {
        if (this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount()) {
            this.adapter_.setHeaderRowCheckboxChecked(true);
            this.adapter_.setHeaderRowCheckboxIndeterminate(false);
        }
        else if (this.adapter_.getSelectedRowCount() === 0) {
            this.adapter_.setHeaderRowCheckboxIndeterminate(false);
            this.adapter_.setHeaderRowCheckboxChecked(false);
        }
        else {
            this.adapter_.setHeaderRowCheckboxIndeterminate(true);
            this.adapter_.setHeaderRowCheckboxChecked(false);
        }
    };
    /**
     * Sets the attributes of row element based on selection state.
     */
    MDCDataTableFoundation.prototype.selectRowAtIndex_ = function (rowIndex, selected) {
        if (selected) {
            this.adapter_.addClassAtRowIndex(rowIndex, data_table_constants_cssClasses.ROW_SELECTED);
            this.adapter_.setAttributeAtRowIndex(rowIndex, data_table_constants_strings.ARIA_SELECTED, 'true');
        }
        else {
            this.adapter_.removeClassAtRowIndex(rowIndex, data_table_constants_cssClasses.ROW_SELECTED);
            this.adapter_.setAttributeAtRowIndex(rowIndex, data_table_constants_strings.ARIA_SELECTED, 'false');
        }
    };
    return MDCDataTableFoundation;
}(MDCFoundation));

//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/data-table/component.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCDataTable =
/** @class */
function (_super) {
  __extends(MDCDataTable, _super);

  function MDCDataTable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDataTable.attachTo = function (root) {
    return new MDCDataTable(root);
  };

  MDCDataTable.prototype.initialize = function () {};

  MDCDataTable.prototype.initialSyncWithDOM = function () {
    this.layout();
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   */


  MDCDataTable.prototype.layout = function () {
    this.foundation_.layout();
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTable.prototype.getRows = function () {
    return this.foundation_.getRows();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTable.prototype.getSelectedRowIds = function () {
    return this.foundation_.getSelectedRowIds();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTable.prototype.setSelectedRowIds = function (rowIds) {
    this.foundation_.setSelectedRowIds(rowIds);
  };

  MDCDataTable.prototype.destroy = function () {};

  MDCDataTable.prototype.getHeaderRowCheckbox = function () {
    var checkboxEl = this.root_.querySelector(data_table_constants_strings.HEADER_ROW_CHECKBOX_SELECTOR);

    if (checkboxEl) {
      return checkboxEl.checkbox_;
    }

    return undefined;
  };

  MDCDataTable.prototype.getRowCheckboxList = function () {
    return this.foundation_.getRows().map(function (checkboxEl) {
      return checkboxEl.checkbox_;
    }).filter(function (checkbox) {
      return !!checkbox;
    });
  };

  MDCDataTable.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassAtRowIndex: function addClassAtRowIndex() {
        return undefined;
      },
      getRowCount: function getRowCount() {
        return _this.getRows().length;
      },
      getRowElements: function getRowElements() {
        return [].slice.call(_this.root_.querySelectorAll(data_table_constants_strings.ROW_SELECTOR));
      },
      getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
        return _this.getRows()[rowIndex].getAttribute(data_table_constants_strings.DATA_ROW_ID_ATTR);
      },
      getRowIndexByChildElement: function getRowIndexByChildElement(el) {
        return _this.getRows().indexOf(closest(el, data_table_constants_strings.ROW_SELECTOR));
      },
      getSelectedRowCount: function getSelectedRowCount() {
        return _this.root_.querySelectorAll(data_table_constants_strings.ROW_SELECTED_SELECTOR).length;
      },
      isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
        return _this.getRowCheckboxList()[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
        return _this.getHeaderRowCheckbox().checked;
      },
      isRowsSelectable: function isRowsSelectable() {
        return false;
      },
      notifyRowSelectionChanged: function notifyRowSelectionChanged() {
        return undefined;
      },
      notifySelectedAll: function notifySelectedAll() {
        return undefined;
      },
      notifyUnselectedAll: function notifyUnselectedAll() {
        return undefined;
      },
      registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
        return undefined;
      },
      registerRowCheckboxes: function registerRowCheckboxes() {
        return undefined;
      },
      removeClassAtRowIndex: function removeClassAtRowIndex() {
        return undefined;
      },
      setAttributeAtRowIndex: function setAttributeAtRowIndex() {
        return undefined;
      },
      setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked() {
        return undefined;
      },
      setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate() {
        return undefined;
      },
      setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex() {
        return undefined;
      }
    };
    return new foundation_MDCDataTableFoundation(adapter);
  };

  return MDCDataTable;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/data-table/custom-element.js











function data_table_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { data_table_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { data_table_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return data_table_custom_element_typeof(obj); }

function data_table_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function data_table_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function data_table_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) data_table_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) data_table_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function data_table_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) data_table_custom_element_setPrototypeOf(subClass, superClass); }

function data_table_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = data_table_custom_element_isNativeReflectConstruct(); return function () { var Super = data_table_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = data_table_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return data_table_custom_element_possibleConstructorReturn(this, result); }; }

function data_table_custom_element_possibleConstructorReturn(self, call) { if (call && (data_table_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return data_table_custom_element_assertThisInitialized(self); }

function data_table_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function data_table_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; data_table_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !data_table_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return data_table_custom_element_construct(Class, arguments, data_table_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return data_table_custom_element_setPrototypeOf(Wrapper, Class); }; return data_table_custom_element_wrapNativeSuper(Class); }

function data_table_custom_element_construct(Parent, args, Class) { if (data_table_custom_element_isNativeReflectConstruct()) { data_table_custom_element_construct = Reflect.construct; } else { data_table_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) data_table_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return data_table_custom_element_construct.apply(null, arguments); }

function data_table_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function data_table_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function data_table_custom_element_setPrototypeOf(o, p) { data_table_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return data_table_custom_element_setPrototypeOf(o, p); }

function data_table_custom_element_getPrototypeOf(o) { data_table_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return data_table_custom_element_getPrototypeOf(o); }



var custom_element_MdcDataTable = /*#__PURE__*/function (_HTMLElement) {
  data_table_custom_element_inherits(MdcDataTable, _HTMLElement);

  var _super = data_table_custom_element_createSuper(MdcDataTable);

  function MdcDataTable() {
    var _this;

    data_table_custom_element_classCallCheck(this, MdcDataTable);

    _this = _super.call(this);
    _this.dataTable_;
    return _this;
  }

  data_table_custom_element_createClass(MdcDataTable, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.dataTable_ = new component_MDCDataTable(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.dataTable_.destroy();
    }
  }]);

  return MdcDataTable;
}( /*#__PURE__*/data_table_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-data-table", custom_element_MdcDataTable);
// CONCATENATED MODULE: ./node_modules/@material/dialog/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dialog_constants_cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
};
var dialog_constants_strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var dialog_constants_numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/dialog/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCDialogFoundation = /** @class */ (function (_super) {
    __extends(MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.layoutFrame_ = 0;
        _this.escapeKeyAction_ = dialog_constants_strings.CLOSE_ACTION;
        _this.scrimClickAction_ = dialog_constants_strings.CLOSE_ACTION;
        _this.autoStackButtons_ = true;
        _this.areButtonsStacked_ = false;
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return dialog_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return dialog_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return dialog_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                getInitialFocusEl: function () { return null; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter_.hasClass(dialog_constants_cssClasses.STACKED)) {
            this.setAutoStackButtons(false);
        }
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.isOpen_) {
            this.close(dialog_constants_strings.DESTROY_ACTION);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
            this.handleAnimationTimerEnd_();
        }
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
            this.layoutFrame_ = 0;
        }
    };
    MDCDialogFoundation.prototype.open = function () {
        var _this = this;
        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.addClass(dialog_constants_cssClasses.OPENING);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(dialog_constants_cssClasses.OPEN);
            _this.adapter_.addBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer_ = setTimeout(function () {
                _this.handleAnimationTimerEnd_();
                _this.adapter_.trapFocus(_this.adapter_.getInitialFocusEl());
                _this.adapter_.notifyOpened();
            }, dialog_constants_numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.isOpen_) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
            return;
        }
        this.isOpen_ = false;
        this.adapter_.notifyClosing(action);
        this.adapter_.addClass(dialog_constants_cssClasses.CLOSING);
        this.adapter_.removeClass(dialog_constants_cssClasses.OPEN);
        this.adapter_.removeBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
            _this.adapter_.releaseFocus();
            _this.handleAnimationTimerEnd_();
            _this.adapter_.notifyClosed(action);
        }, dialog_constants_numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction_;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction_ = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction_;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction_ = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons_;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons_ = autoStack;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    /** Handles click on the dialog root element. */
    MDCDialogFoundation.prototype.handleClick = function (evt) {
        var isScrim = this.adapter_.eventTargetMatches(evt.target, dialog_constants_strings.SCRIM_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors.
        if (isScrim && this.scrimClickAction_ !== '') {
            this.close(this.scrimClickAction_);
        }
        else {
            var action = this.adapter_.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
        }
    };
    /** Handles keydown on the dialog root element. */
    MDCDialogFoundation.prototype.handleKeydown = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (!isEnter) {
            return;
        }
        var action = this.adapter_.getActionFromEvent(evt);
        if (action) {
            // Action button callback is handled in `handleClick`,
            // since space/enter keydowns on buttons trigger click events.
            return;
        }
        var isDefault = !this.adapter_.eventTargetMatches(evt.target, dialog_constants_strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);
        if (isEnter && isDefault) {
            this.adapter_.clickDefaultButton();
        }
    };
    /** Handles keydown on the document. */
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction_ !== '') {
            this.close(this.escapeKeyAction_);
        }
    };
    MDCDialogFoundation.prototype.layoutInternal_ = function () {
        if (this.autoStackButtons_) {
            this.detectStackedButtons_();
        }
        this.detectScrollableContent_();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(dialog_constants_cssClasses.OPENING);
        this.adapter_.removeClass(dialog_constants_cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter_.removeClass(dialog_constants_cssClasses.STACKED);
        var areButtonsStacked = this.adapter_.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter_.addClass(dialog_constants_cssClasses.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked_) {
            this.adapter_.reverseButtons();
            this.areButtonsStacked_ = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
        // Remove the class first to let us measure the natural height of the content.
        this.adapter_.removeClass(dialog_constants_cssClasses.SCROLLABLE);
        if (this.adapter_.isContentScrollable()) {
            this.adapter_.addClass(dialog_constants_cssClasses.SCROLLABLE);
        }
    };
    return MDCDialogFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var dialog_foundation = (foundation_MDCDialogFoundation);
//# sourceMappingURL=foundation.js.map
// EXTERNAL MODULE: ./node_modules/focus-trap/index.js
var focus_trap = __webpack_require__(22);
var focus_trap_default = /*#__PURE__*/__webpack_require__.n(focus_trap);

// CONCATENATED MODULE: ./node_modules/@material/dialog/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
    if (focusTrapFactory === void 0) { focusTrapFactory = focus_trap_default.a; }
    return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: initialFocusEl,
    });
}
function isScrollable(el) {
    return el ? el.scrollHeight > el.offsetHeight : false;
}
function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
    return tops.size > 1;
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./src/dialog/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var component_strings = foundation_MDCDialogFoundation.strings;

var component_MDCDialog =
/** @class */
function (_super) {
  __extends(MDCDialog, _super);

  function MDCDialog() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCDialog.prototype, "isOpen", {
    get: function get() {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
    get: function get() {
      return this.foundation_.getEscapeKeyAction();
    },
    set: function set(action) {
      this.foundation_.setEscapeKeyAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
    get: function get() {
      return this.foundation_.getScrimClickAction();
    },
    set: function set(action) {
      this.foundation_.setScrimClickAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
    get: function get() {
      return this.foundation_.getAutoStackButtons();
    },
    set: function set(autoStack) {
      this.foundation_.setAutoStackButtons(autoStack);
    },
    enumerable: true,
    configurable: true
  });

  MDCDialog.attachTo = function (root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function (focusTrapFactory) {
    var container = this.root_.querySelector(component_strings.CONTAINER_SELECTOR);

    if (!container) {
      throw new Error("Dialog component requires a " + component_strings.CONTAINER_SELECTOR + " container element");
    }

    this.container_ = container;
    this.content_ = this.root_.querySelector(component_strings.CONTENT_SELECTOR);
    this.buttons_ = [].slice.call(this.root_.querySelectorAll(component_strings.BUTTON_SELECTOR));
    this.focusTrapFactory_ = focusTrapFactory;
  };

  MDCDialog.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.focusTrap_ = createFocusTrapInstance(this.container_, this.focusTrapFactory_, this.getInitialFocusEl_() || undefined);
    this.handleClick_ = this.handleClick.bind(this);
    this.handleDocumentKeydown_ = this.handleDocumentKeydown.bind(this);
    this.handleLayout_ = this.layout.bind(this);
    var LAYOUT_EVENTS = ['resize', 'orientationchange'];

    this.handleOpening_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.addEventListener(evtType, _this.handleLayout_);
      });
      document.addEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.handleClosing_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.removeEventListener(evtType, _this.handleLayout_);
      });
      document.removeEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.listen('click', this.handleClick_);
    this.listen(component_strings.OPENING_EVENT, this.handleOpening_);
    this.listen(component_strings.CLOSING_EVENT, this.handleClosing_);
  };

  MDCDialog.prototype.handleClick = function (evt) {
    var isScrim = this.eventTargetMatches(evt.target, component_strings.SCRIM_SELECTOR);

    if (isScrim) {
      this.emit("MDCDialog:close", {});
    }
  };

  MDCDialog.prototype.eventTargetMatches = function (target, selector) {
    return target ? matches(target, selector) : false;
  };

  MDCDialog.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape) {
      this.emit("MDCDialog:close", {});
    }
  };

  MDCDialog.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.unlisten(component_strings.OPENING_EVENT, this.handleOpening_);
    this.unlisten(component_strings.CLOSING_EVENT, this.handleClosing_);
    this.handleClosing_();

    _super.prototype.destroy.call(this);
  };

  MDCDialog.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCDialog.prototype.open = function () {
    this.foundation_.open();
  };

  MDCDialog.prototype.close = function (action) {
    if (action === void 0) {
      action = '';
    }

    this.foundation_.close(action);
  };

  MDCDialog.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      areButtonsStacked: function areButtonsStacked() {
        return areTopsMisaligned(_this.buttons_);
      },
      clickDefaultButton: function clickDefaultButton() {},
      eventTargetMatches: function eventTargetMatches() {
        return false;
      },
      getActionFromEvent: function getActionFromEvent() {
        return null;
      },
      getInitialFocusEl: function getInitialFocusEl() {
        return _this.getInitialFocusEl_();
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      isContentScrollable: function isContentScrollable() {
        return isScrollable(_this.content_);
      },
      notifyClosed: function notifyClosed(action) {
        return _this.emit(component_strings.CLOSED_EVENT, action ? {
          action: action
        } : {});
      },
      notifyClosing: function notifyClosing(action) {
        return _this.emit(component_strings.CLOSING_EVENT, action ? {
          action: action
        } : {});
      },
      notifyOpened: function notifyOpened() {
        return _this.emit(component_strings.OPENED_EVENT, {});
      },
      notifyOpening: function notifyOpening() {
        return _this.emit(component_strings.OPENING_EVENT, {});
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap_.deactivate();
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      reverseButtons: function reverseButtons() {
        _this.buttons_.reverse();

        _this.buttons_.forEach(function (button) {
          button.parentElement.appendChild(button);
        });
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap_.activate();
      }
    };
    return new foundation_MDCDialogFoundation(adapter);
  };

  MDCDialog.prototype.getInitialFocusEl_ = function () {
    return document.querySelector("[" + component_strings.INITIAL_FOCUS_ATTRIBUTE + "]");
  };

  return MDCDialog;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/dialog/custom-element.js











function dialog_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dialog_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { dialog_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dialog_custom_element_typeof(obj); }

function dialog_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dialog_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dialog_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) dialog_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) dialog_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function dialog_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dialog_custom_element_setPrototypeOf(subClass, superClass); }

function dialog_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = dialog_custom_element_isNativeReflectConstruct(); return function () { var Super = dialog_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dialog_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dialog_custom_element_possibleConstructorReturn(this, result); }; }

function dialog_custom_element_possibleConstructorReturn(self, call) { if (call && (dialog_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return dialog_custom_element_assertThisInitialized(self); }

function dialog_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dialog_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; dialog_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !dialog_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return dialog_custom_element_construct(Class, arguments, dialog_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return dialog_custom_element_setPrototypeOf(Wrapper, Class); }; return dialog_custom_element_wrapNativeSuper(Class); }

function dialog_custom_element_construct(Parent, args, Class) { if (dialog_custom_element_isNativeReflectConstruct()) { dialog_custom_element_construct = Reflect.construct; } else { dialog_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) dialog_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return dialog_custom_element_construct.apply(null, arguments); }

function dialog_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function dialog_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function dialog_custom_element_setPrototypeOf(o, p) { dialog_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dialog_custom_element_setPrototypeOf(o, p); }

function dialog_custom_element_getPrototypeOf(o) { dialog_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dialog_custom_element_getPrototypeOf(o); }




var custom_element_MdcDialog = /*#__PURE__*/function (_HTMLElement) {
  dialog_custom_element_inherits(MdcDialog, _HTMLElement);

  var _super = dialog_custom_element_createSuper(MdcDialog);

  dialog_custom_element_createClass(MdcDialog, [{
    key: "open",
    get: function get() {
      return this.open_;
    },
    set: function set(open) {
      this.open_ = open;

      if (!!this.dialog_) {
        if (open) {
          this.dialog_.open();
        } else {
          this.dialog_.close();
        }
      }
    }
  }]);

  function MdcDialog() {
    var _this;

    dialog_custom_element_classCallCheck(this, MdcDialog);

    _this = _super.call(this);
    _this.open_ = false;
    return _this;
  }

  dialog_custom_element_createClass(MdcDialog, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.dialog_ = new component_MDCDialog(this);

      if (this.open_) {
        this.dialog_.open();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.dialog_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcDialog;
}( /*#__PURE__*/dialog_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-dialog", custom_element_MdcDialog);
// CONCATENATED MODULE: ./node_modules/@material/list/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var list_constants_cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var list_constants_strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " a,\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
};
var list_constants_numbers = {
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/list/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var foundation_MDCListFoundation = /** @class */ (function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = list_constants_numbers.UNSET_INDEX;
        _this.focusedItemIndex_ = list_constants_numbers.UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return list_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return list_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return list_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getAttributeForElementIndex: function () { return null; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                isRootFocused: function () { return false; },
                listItemAtIndexHasClass: function () { return false; },
                notifyAction: function () { return undefined; },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) {
            return;
        }
        if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        }
        else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        }
        else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter_.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        if (this.adapter_.isRootFocused()) {
            if (isArrowUp || isEnd) {
                evt.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                evt.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        var currentIndex = this.adapter_.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        var nextIndex;
        if ((this.isVertical_ && isArrowDown) || (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                var target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                }
                this.adapter_.notifyAction(currentIndex);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === list_constants_numbers.UNSET_INDEX) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        if (isEnabled) {
            this.adapter_.removeClassForElementIndex(itemIndex, list_constants_cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, list_constants_strings.ARIA_DISABLED, 'false');
        }
        else {
            this.adapter_.addClassForElementIndex(itemIndex, list_constants_cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, list_constants_strings.ARIA_DISABLED, 'true');
        }
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */
    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        if (this.selectedIndex_ === index) {
            return;
        }
        var selectedClassName = list_constants_cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== list_constants_numbers.UNSET_INDEX) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }
        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
        // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
        if (this.selectedIndex_ === list_constants_numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter_.getAttributeForElementIndex(index, list_constants_strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? list_constants_strings.ARIA_CURRENT : list_constants_strings.ARIA_SELECTED;
        if (this.selectedIndex_ !== list_constants_numbers.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ !== list_constants_numbers.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, list_constants_strings.ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, list_constants_strings.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, list_constants_strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === list_constants_numbers.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }
        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== list_constants_numbers.UNSET_INDEX) {
                targetIndex = this.selectedIndex_;
            }
            else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
            }
        }
        this.setTabindexAtIndex_(targetIndex);
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange_(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }
            return this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
     * User interaction should not toggle list item(s) when disabled.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) { toggleCheckbox = true; }
        if (this.adapter_.listItemAtIndexHasClass(index, list_constants_cssClasses.LIST_ITEM_DISABLED_CLASS)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        }
        else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter_.setAttributeForElementIndex(index, list_constants_strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === list_constants_numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var list_foundation = (foundation_MDCListFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/drawer/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var drawer_constants_cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var drawer_constants_strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/drawer/dismissible/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return drawer_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return drawer_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame_) {
            cancelAnimationFrame(this.animationFrame_);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(drawer_constants_cssClasses.OPEN);
        this.adapter_.addClass(drawer_constants_cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(drawer_constants_cssClasses.OPENING);
        });
        this.adapter_.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(drawer_constants_cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter_.hasClass(drawer_constants_cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter_.hasClass(drawer_constants_cssClasses.OPENING) || this.adapter_.hasClass(drawer_constants_cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter_.hasClass(drawer_constants_cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = drawer_constants_cssClasses.OPENING, CLOSING = drawer_constants_cssClasses.CLOSING, OPEN = drawer_constants_cssClasses.OPEN, ANIMATE = drawer_constants_cssClasses.ANIMATE, ROOT = drawer_constants_cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter_.removeClass(OPEN);
            this.closed_();
            this.adapter_.restoreFocus();
            this.adapter_.notifyClose();
        }
        else {
            this.adapter_.focusActiveNavigationItem();
            this.opened_();
            this.adapter_.notifyOpen();
        }
        this.adapter_.removeClass(ANIMATE);
        this.adapter_.removeClass(OPENING);
        this.adapter_.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var dismissible_foundation = (foundation_MDCDismissibleDrawerFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/drawer/modal/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var foundation_MDCModalDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened_ = function () {
        this.adapter_.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed_ = function () {
        this.adapter_.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(foundation_MDCDismissibleDrawerFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var modal_foundation = (foundation_MDCModalDrawerFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/drawer/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function util_createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    if (focusTrapFactory === void 0) { focusTrapFactory = focus_trap_default.a; }
    return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: undefined,
        returnFocusOnDeactivate: false,
    });
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./src/drawer/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var component_cssClasses = foundation_MDCDismissibleDrawerFoundation.cssClasses,
    drawer_component_strings = foundation_MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */

var component_MDCDrawer =
/** @class */
function (_super) {
  __extends(MDCDrawer, _super);

  function MDCDrawer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDrawer.attachTo = function (root) {
    return new MDCDrawer(root);
  };

  Object.defineProperty(MDCDrawer.prototype, "open", {
    /**
     * @return boolean Proxies to the foundation's `open`/`close` methods.
     * Also returns true if drawer is in the open position.
     */
    get: function get() {
      return this.foundation_.isOpen();
    },

    /**
     * Toggles the drawer open and closed.
     */
    set: function set(isOpen) {
      if (isOpen) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDrawer.prototype, "list", {
    get: function get() {
      return this.list_;
    },
    enumerable: true,
    configurable: true
  });

  MDCDrawer.prototype.initialize = function (focusTrapFactory) {
    if (focusTrapFactory === void 0) {
      focusTrapFactory = focus_trap_default.a;
    }
    /* TODO: list wrapFocus
    const listEl = this.root_.querySelector(`.${MDCListFoundation.cssClasses.ROOT}`);
    if (listEl) {
      listEl.wrapFocus = true;
    }
    */


    this.focusTrapFactory_ = focusTrapFactory;
  };

  MDCDrawer.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var MODAL = component_cssClasses.MODAL;
    var SCRIM_SELECTOR = drawer_component_strings.SCRIM_SELECTOR;
    this.scrim_ = this.root_.parentNode.querySelector(SCRIM_SELECTOR);

    if (this.scrim_ && this.root_.classList.contains(MODAL)) {
      this.handleScrimClick_ = function () {
        return _this.handleScrimClick();
      };

      this.scrim_.addEventListener('click', this.handleScrimClick_);
      this.focusTrap_ = util_createFocusTrapInstance(this.root_, this.focusTrapFactory_);
    }

    this.handleKeydown_ = function (evt) {
      return _this.handleKeydown(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen('transitionend', this.handleTransitionEnd_);
  };

  MDCDrawer.prototype.handleScrimClick = function () {
    this.emit("MDCDrawer:close", {}, true
    /* shouldBubble */
    );
  };

  MDCDrawer.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.emit("MDCDrawer:close", {}, true
      /* shouldBubble */
      );
    }
  };

  MDCDrawer.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('transitionend', this.handleTransitionEnd_);
    var MODAL = component_cssClasses.MODAL;

    if (this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(MODAL)) {
      this.scrim_.removeEventListener('click', this.handleScrimClick_); // Ensure drawer is closed to hide scrim and release focus

      this.open = false;
    }
  };

  MDCDrawer.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      elementHasClass: function elementHasClass(element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function saveFocus() {
        return _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        var previousFocus = _this.previousFocus_;

        if (previousFocus && previousFocus.focus && _this.root_.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: function focusActiveNavigationItem() {
        var activeNavItemEl = _this.root_.querySelector("." + foundation_MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function notifyClose() {
        return _this.emit(drawer_component_strings.CLOSE_EVENT, {}, true
        /* shouldBubble */
        );
      },
      notifyOpen: function notifyOpen() {
        return _this.emit(drawer_component_strings.OPEN_EVENT, {}, true
        /* shouldBubble */
        );
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap_.activate();
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap_.deactivate();
      }
    }; // tslint:enable:object-literal-sort-keys

    var DISMISSIBLE = component_cssClasses.DISMISSIBLE,
        MODAL = component_cssClasses.MODAL;

    if (this.root_.classList.contains(DISMISSIBLE)) {
      return new foundation_MDCDismissibleDrawerFoundation(adapter);
    } else if (this.root_.classList.contains(MODAL)) {
      return new foundation_MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    }
  };

  return MDCDrawer;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/drawer/custom-element.js











function drawer_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { drawer_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { drawer_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return drawer_custom_element_typeof(obj); }

function drawer_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function drawer_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function drawer_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) drawer_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) drawer_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function drawer_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) drawer_custom_element_setPrototypeOf(subClass, superClass); }

function drawer_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = drawer_custom_element_isNativeReflectConstruct(); return function () { var Super = drawer_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = drawer_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return drawer_custom_element_possibleConstructorReturn(this, result); }; }

function drawer_custom_element_possibleConstructorReturn(self, call) { if (call && (drawer_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return drawer_custom_element_assertThisInitialized(self); }

function drawer_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function drawer_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; drawer_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !drawer_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return drawer_custom_element_construct(Class, arguments, drawer_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return drawer_custom_element_setPrototypeOf(Wrapper, Class); }; return drawer_custom_element_wrapNativeSuper(Class); }

function drawer_custom_element_construct(Parent, args, Class) { if (drawer_custom_element_isNativeReflectConstruct()) { drawer_custom_element_construct = Reflect.construct; } else { drawer_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) drawer_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return drawer_custom_element_construct.apply(null, arguments); }

function drawer_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function drawer_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function drawer_custom_element_setPrototypeOf(o, p) { drawer_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return drawer_custom_element_setPrototypeOf(o, p); }

function drawer_custom_element_getPrototypeOf(o) { drawer_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return drawer_custom_element_getPrototypeOf(o); }




var custom_element_MdcDrawer = /*#__PURE__*/function (_HTMLElement) {
  drawer_custom_element_inherits(MdcDrawer, _HTMLElement);

  var _super = drawer_custom_element_createSuper(MdcDrawer);

  drawer_custom_element_createClass(MdcDrawer, [{
    key: "open",
    get: function get() {
      return this.open_;
    },
    set: function set(open) {
      this.open_ = open;

      if (!!this.drawer_) {
        this.drawer_.open = open;
      }
    }
  }]);

  function MdcDrawer() {
    var _this;

    drawer_custom_element_classCallCheck(this, MdcDrawer);

    _this = _super.call(this);
    _this.open_ = false;
    _this.drawer_;
    return _this;
  }

  drawer_custom_element_createClass(MdcDrawer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.drawer_ = new component_MDCDrawer(this);
      this.drawer_.open = this.open_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.drawer_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcDrawer;
}( /*#__PURE__*/drawer_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-drawer", custom_element_MdcDrawer);
// CONCATENATED MODULE: ./src/fab/custom-element.js











function fab_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fab_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { fab_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fab_custom_element_typeof(obj); }

function fab_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fab_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fab_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) fab_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) fab_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function fab_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fab_custom_element_setPrototypeOf(subClass, superClass); }

function fab_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = fab_custom_element_isNativeReflectConstruct(); return function () { var Super = fab_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = fab_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return fab_custom_element_possibleConstructorReturn(this, result); }; }

function fab_custom_element_possibleConstructorReturn(self, call) { if (call && (fab_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return fab_custom_element_assertThisInitialized(self); }

function fab_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fab_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; fab_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !fab_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return fab_custom_element_construct(Class, arguments, fab_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return fab_custom_element_setPrototypeOf(Wrapper, Class); }; return fab_custom_element_wrapNativeSuper(Class); }

function fab_custom_element_construct(Parent, args, Class) { if (fab_custom_element_isNativeReflectConstruct()) { fab_custom_element_construct = Reflect.construct; } else { fab_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) fab_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return fab_custom_element_construct.apply(null, arguments); }

function fab_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function fab_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function fab_custom_element_setPrototypeOf(o, p) { fab_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fab_custom_element_setPrototypeOf(o, p); }

function fab_custom_element_getPrototypeOf(o) { fab_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fab_custom_element_getPrototypeOf(o); }




var custom_element_MdcFab = /*#__PURE__*/function (_HTMLElement) {
  fab_custom_element_inherits(MdcFab, _HTMLElement);

  var _super = fab_custom_element_createSuper(MdcFab);

  function MdcFab() {
    fab_custom_element_classCallCheck(this, MdcFab);

    return _super.call(this);
  }

  fab_custom_element_createClass(MdcFab, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.ripple_ = new component_MDCRipple(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.ripple_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcFab;
}( /*#__PURE__*/fab_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-fab", custom_element_MdcFab);
// CONCATENATED MODULE: ./node_modules/@material/form-field/constants.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var form_field_constants_cssClasses = {
    ROOT: 'mdc-form-field',
};
var form_field_constants_strings = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/form-field/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCFormFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;
        _this.clickHandler_ = function () { return _this.handleClick_(); };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return form_field_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return form_field_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    };
    MDCFormFieldFoundation.prototype.handleClick_ = function () {
        var _this = this;
        this.adapter_.activateInputRipple();
        requestAnimationFrame(function () { return _this.adapter_.deactivateInputRipple(); });
    };
    return MDCFormFieldFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var form_field_foundation = (foundation_MDCFormFieldFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/form-field/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var component_MDCFormField =
/** @class */
function (_super) {
  __extends(MDCFormField, _super);

  function MDCFormField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFormField.attachTo = function (root) {
    return new MDCFormField(root);
  };

  Object.defineProperty(MDCFormField.prototype, "input", {
    get: function get() {
      return this.input_;
    },
    set: function set(input) {
      this.input_ = input;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFormField.prototype, "label_", {
    get: function get() {
      var LABEL_SELECTOR = foundation_MDCFormFieldFoundation.strings.LABEL_SELECTOR;
      return this.root_.querySelector(LABEL_SELECTOR);
    },
    enumerable: true,
    configurable: true
  });

  MDCFormField.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      activateInputRipple: function activateInputRipple() {
        if (_this.input_ && _this.input_.ripple) {
          _this.input_.ripple.activate();
        }
      },
      deactivateInputRipple: function deactivateInputRipple() {
        if (_this.input_ && _this.input_.ripple) {
          _this.input_.ripple.deactivate();
        }
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        if (_this.label_) {
          _this.label_.removeEventListener(evtType, handler);
        }
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        if (_this.label_) {
          _this.label_.addEventListener(evtType, handler);
        }
      }
    };
    return new foundation_MDCFormFieldFoundation(adapter);
  };

  return MDCFormField;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/form-field/custom-element.js











function form_field_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { form_field_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { form_field_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return form_field_custom_element_typeof(obj); }

function form_field_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_field_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_field_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_field_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_field_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function form_field_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) form_field_custom_element_setPrototypeOf(subClass, superClass); }

function form_field_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = form_field_custom_element_isNativeReflectConstruct(); return function () { var Super = form_field_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = form_field_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return form_field_custom_element_possibleConstructorReturn(this, result); }; }

function form_field_custom_element_possibleConstructorReturn(self, call) { if (call && (form_field_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return form_field_custom_element_assertThisInitialized(self); }

function form_field_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function form_field_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; form_field_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !form_field_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return form_field_custom_element_construct(Class, arguments, form_field_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return form_field_custom_element_setPrototypeOf(Wrapper, Class); }; return form_field_custom_element_wrapNativeSuper(Class); }

function form_field_custom_element_construct(Parent, args, Class) { if (form_field_custom_element_isNativeReflectConstruct()) { form_field_custom_element_construct = Reflect.construct; } else { form_field_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) form_field_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return form_field_custom_element_construct.apply(null, arguments); }

function form_field_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function form_field_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function form_field_custom_element_setPrototypeOf(o, p) { form_field_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return form_field_custom_element_setPrototypeOf(o, p); }

function form_field_custom_element_getPrototypeOf(o) { form_field_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return form_field_custom_element_getPrototypeOf(o); }



var custom_element_MdcFormField = /*#__PURE__*/function (_HTMLElement) {
  form_field_custom_element_inherits(MdcFormField, _HTMLElement);

  var _super = form_field_custom_element_createSuper(MdcFormField);

  form_field_custom_element_createClass(MdcFormField, [{
    key: "focus",
    value: function focus() {
      if (!!this.formField_.input) {
        this.formField_.input.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (!!this.formField_.input) {
        this.formField_.input.blur();
      }
    }
  }]);

  function MdcFormField() {
    var _this;

    form_field_custom_element_classCallCheck(this, MdcFormField);

    _this = _super.call(this);
    _this.formField_;
    return _this;
  }

  form_field_custom_element_createClass(MdcFormField, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.formField_ = new component_MDCFormField(this);
      var inputElement = this.querySelector("input");

      if (inputElement) {
        this.formField_.input = inputElement;
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.formField_.destroy();
    }
  }]);

  return MdcFormField;
}( /*#__PURE__*/form_field_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-form-field", custom_element_MdcFormField);
// CONCATENATED MODULE: ./node_modules/@material/icon-button/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var icon_button_constants_cssClasses = {
    ICON_BUTTON_ON: 'mdc-icon-button--on',
    ROOT: 'mdc-icon-button',
};
var icon_button_constants_strings = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/icon-button/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCIconButtonToggleFoundation = /** @class */ (function (_super) {
    __extends(MDCIconButtonToggleFoundation, _super);
    function MDCIconButtonToggleFoundation(adapter) {
        return _super.call(this, __assign({}, MDCIconButtonToggleFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
        get: function () {
            return icon_button_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
        get: function () {
            return icon_button_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifyChange: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCIconButtonToggleFoundation.prototype.init = function () {
        this.adapter_.setAttr(icon_button_constants_strings.ARIA_PRESSED, "" + this.isOn());
    };
    MDCIconButtonToggleFoundation.prototype.handleClick = function () {
        this.toggle();
        this.adapter_.notifyChange({ isOn: this.isOn() });
    };
    MDCIconButtonToggleFoundation.prototype.isOn = function () {
        return this.adapter_.hasClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
    };
    MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
        if (isOn === void 0) { isOn = !this.isOn(); }
        if (isOn) {
            this.adapter_.addClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
        }
        else {
            this.adapter_.removeClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
        }
        this.adapter_.setAttr(icon_button_constants_strings.ARIA_PRESSED, "" + isOn);
    };
    return MDCIconButtonToggleFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var icon_button_foundation = (foundation_MDCIconButtonToggleFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/icon-button/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var icon_button_component_strings = foundation_MDCIconButtonToggleFoundation.strings;

var component_MDCIconButtonToggle =
/** @class */
function (_super) {
  __extends(MDCIconButtonToggle, _super);

  function MDCIconButtonToggle() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCIconButtonToggle.attachTo = function (root) {
    return new MDCIconButtonToggle(root);
  };

  MDCIconButtonToggle.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClick.bind(this);
    this.listen('click', this.handleClick_);
  };

  MDCIconButtonToggle.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCIconButtonToggle.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      notifyChange: function notifyChange() {},
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setAttr: function setAttr(attrName, attrValue) {
        return _this.root_.setAttribute(attrName, attrValue);
      }
    };
    return new foundation_MDCIconButtonToggleFoundation(adapter);
  };

  MDCIconButtonToggle.prototype.handleClick = function () {
    this.emit(icon_button_component_strings.CHANGE_EVENT, {
      isOn: !this.on
    });
  };

  Object.defineProperty(MDCIconButtonToggle.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggle.prototype, "on", {
    get: function get() {
      return this.foundation_.isOn();
    },
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    },
    enumerable: true,
    configurable: true
  });

  MDCIconButtonToggle.prototype.createRipple_ = function () {
    var ripple = new ripple_component_MDCRipple(this.root_);
    ripple.unbounded = true;
    return ripple;
  };

  return MDCIconButtonToggle;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/icon-button/custom-element.js











function icon_button_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { icon_button_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { icon_button_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return icon_button_custom_element_typeof(obj); }

function icon_button_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon_button_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function icon_button_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) icon_button_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) icon_button_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function icon_button_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) icon_button_custom_element_setPrototypeOf(subClass, superClass); }

function icon_button_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = icon_button_custom_element_isNativeReflectConstruct(); return function () { var Super = icon_button_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = icon_button_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return icon_button_custom_element_possibleConstructorReturn(this, result); }; }

function icon_button_custom_element_possibleConstructorReturn(self, call) { if (call && (icon_button_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return icon_button_custom_element_assertThisInitialized(self); }

function icon_button_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function icon_button_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; icon_button_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !icon_button_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return icon_button_custom_element_construct(Class, arguments, icon_button_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return icon_button_custom_element_setPrototypeOf(Wrapper, Class); }; return icon_button_custom_element_wrapNativeSuper(Class); }

function icon_button_custom_element_construct(Parent, args, Class) { if (icon_button_custom_element_isNativeReflectConstruct()) { icon_button_custom_element_construct = Reflect.construct; } else { icon_button_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) icon_button_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return icon_button_custom_element_construct.apply(null, arguments); }

function icon_button_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function icon_button_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function icon_button_custom_element_setPrototypeOf(o, p) { icon_button_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return icon_button_custom_element_setPrototypeOf(o, p); }

function icon_button_custom_element_getPrototypeOf(o) { icon_button_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return icon_button_custom_element_getPrototypeOf(o); }




var custom_element_MdcIconButton = /*#__PURE__*/function (_HTMLElement) {
  icon_button_custom_element_inherits(MdcIconButton, _HTMLElement);

  var _super = icon_button_custom_element_createSuper(MdcIconButton);

  icon_button_custom_element_createClass(MdcIconButton, [{
    key: "on",
    get: function get() {
      return this.on_;
    },
    set: function set(on) {
      this.on_ = on;

      if (!!this.iconButtonToggle_) {
        this.iconButtonToggle_.on = on;
      }
    }
  }]);

  function MdcIconButton() {
    var _this;

    icon_button_custom_element_classCallCheck(this, MdcIconButton);

    _this = _super.call(this);
    _this.on_ = false;
    _this.iconButtonToggle_;
    return _this;
  }

  icon_button_custom_element_createClass(MdcIconButton, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.iconButtonToggle_ = new component_MDCIconButtonToggle(this);
      this.iconButtonToggle_.on = this.on_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.iconButtonToggle_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcIconButton;
}( /*#__PURE__*/icon_button_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-icon-button", custom_element_MdcIconButton);
// CONCATENATED MODULE: ./src/image-list/custom-element.js











function image_list_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { image_list_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { image_list_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return image_list_custom_element_typeof(obj); }

function image_list_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_list_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_list_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_list_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_list_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function image_list_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) image_list_custom_element_setPrototypeOf(subClass, superClass); }

function image_list_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = image_list_custom_element_isNativeReflectConstruct(); return function () { var Super = image_list_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = image_list_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return image_list_custom_element_possibleConstructorReturn(this, result); }; }

function image_list_custom_element_possibleConstructorReturn(self, call) { if (call && (image_list_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return image_list_custom_element_assertThisInitialized(self); }

function image_list_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function image_list_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; image_list_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !image_list_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return image_list_custom_element_construct(Class, arguments, image_list_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return image_list_custom_element_setPrototypeOf(Wrapper, Class); }; return image_list_custom_element_wrapNativeSuper(Class); }

function image_list_custom_element_construct(Parent, args, Class) { if (image_list_custom_element_isNativeReflectConstruct()) { image_list_custom_element_construct = Reflect.construct; } else { image_list_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) image_list_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return image_list_custom_element_construct.apply(null, arguments); }

function image_list_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function image_list_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function image_list_custom_element_setPrototypeOf(o, p) { image_list_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return image_list_custom_element_setPrototypeOf(o, p); }

function image_list_custom_element_getPrototypeOf(o) { image_list_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return image_list_custom_element_getPrototypeOf(o); }

var MdcImageList = /*#__PURE__*/function (_HTMLElement) {
  image_list_custom_element_inherits(MdcImageList, _HTMLElement);

  var _super = image_list_custom_element_createSuper(MdcImageList);

  function MdcImageList() {
    image_list_custom_element_classCallCheck(this, MdcImageList);

    return _super.call(this);
  }

  image_list_custom_element_createClass(MdcImageList, [{
    key: "connectedCallback",
    value: function connectedCallback() {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }]);

  return MdcImageList;
}( /*#__PURE__*/image_list_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-image-list", MdcImageList);
// CONCATENATED MODULE: ./src/image-list-item/custom-element.js











function image_list_item_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { image_list_item_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { image_list_item_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return image_list_item_custom_element_typeof(obj); }

function image_list_item_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_list_item_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_list_item_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_list_item_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_list_item_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function image_list_item_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) image_list_item_custom_element_setPrototypeOf(subClass, superClass); }

function image_list_item_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = image_list_item_custom_element_isNativeReflectConstruct(); return function () { var Super = image_list_item_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = image_list_item_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return image_list_item_custom_element_possibleConstructorReturn(this, result); }; }

function image_list_item_custom_element_possibleConstructorReturn(self, call) { if (call && (image_list_item_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return image_list_item_custom_element_assertThisInitialized(self); }

function image_list_item_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function image_list_item_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; image_list_item_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !image_list_item_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return image_list_item_custom_element_construct(Class, arguments, image_list_item_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return image_list_item_custom_element_setPrototypeOf(Wrapper, Class); }; return image_list_item_custom_element_wrapNativeSuper(Class); }

function image_list_item_custom_element_construct(Parent, args, Class) { if (image_list_item_custom_element_isNativeReflectConstruct()) { image_list_item_custom_element_construct = Reflect.construct; } else { image_list_item_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) image_list_item_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return image_list_item_custom_element_construct.apply(null, arguments); }

function image_list_item_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function image_list_item_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function image_list_item_custom_element_setPrototypeOf(o, p) { image_list_item_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return image_list_item_custom_element_setPrototypeOf(o, p); }

function image_list_item_custom_element_getPrototypeOf(o) { image_list_item_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return image_list_item_custom_element_getPrototypeOf(o); }




var custom_element_MdcImageListItem = /*#__PURE__*/function (_HTMLElement) {
  image_list_item_custom_element_inherits(MdcImageListItem, _HTMLElement);

  var _super = image_list_item_custom_element_createSuper(MdcImageListItem);

  function MdcImageListItem() {
    var _this;

    image_list_item_custom_element_classCallCheck(this, MdcImageListItem);

    _this = _super.call(this);
    _this.ripple_;
    return _this;
  }

  image_list_item_custom_element_createClass(MdcImageListItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      var rippleSurfaceElement = this.querySelector(".mdc-ripple-surface");

      if (!!rippleSurfaceElement) {
        this.ripple_ = new component_MDCRipple(rippleSurfaceElement);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (!!this.ripple_) {
        this.ripple_.destroy();
      }

      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcImageListItem;
}( /*#__PURE__*/image_list_item_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-image-list-item", custom_element_MdcImageListItem);
// CONCATENATED MODULE: ./src/layout-grid/custom-element.js











function layout_grid_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout_grid_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { layout_grid_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout_grid_custom_element_typeof(obj); }

function layout_grid_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout_grid_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout_grid_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) layout_grid_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) layout_grid_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function layout_grid_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) layout_grid_custom_element_setPrototypeOf(subClass, superClass); }

function layout_grid_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = layout_grid_custom_element_isNativeReflectConstruct(); return function () { var Super = layout_grid_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = layout_grid_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return layout_grid_custom_element_possibleConstructorReturn(this, result); }; }

function layout_grid_custom_element_possibleConstructorReturn(self, call) { if (call && (layout_grid_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return layout_grid_custom_element_assertThisInitialized(self); }

function layout_grid_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout_grid_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; layout_grid_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !layout_grid_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return layout_grid_custom_element_construct(Class, arguments, layout_grid_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return layout_grid_custom_element_setPrototypeOf(Wrapper, Class); }; return layout_grid_custom_element_wrapNativeSuper(Class); }

function layout_grid_custom_element_construct(Parent, args, Class) { if (layout_grid_custom_element_isNativeReflectConstruct()) { layout_grid_custom_element_construct = Reflect.construct; } else { layout_grid_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) layout_grid_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return layout_grid_custom_element_construct.apply(null, arguments); }

function layout_grid_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function layout_grid_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function layout_grid_custom_element_setPrototypeOf(o, p) { layout_grid_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return layout_grid_custom_element_setPrototypeOf(o, p); }

function layout_grid_custom_element_getPrototypeOf(o) { layout_grid_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return layout_grid_custom_element_getPrototypeOf(o); }

var MdcLayoutGrid = /*#__PURE__*/function (_HTMLElement) {
  layout_grid_custom_element_inherits(MdcLayoutGrid, _HTMLElement);

  var _super = layout_grid_custom_element_createSuper(MdcLayoutGrid);

  function MdcLayoutGrid() {
    layout_grid_custom_element_classCallCheck(this, MdcLayoutGrid);

    return _super.call(this);
  }

  layout_grid_custom_element_createClass(MdcLayoutGrid, [{
    key: "connectedCallback",
    value: function connectedCallback() {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }]);

  return MdcLayoutGrid;
}( /*#__PURE__*/layout_grid_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-layout-grid", MdcLayoutGrid);
// CONCATENATED MODULE: ./node_modules/@material/linear-progress/constants.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var linear_progress_constants_cssClasses = {
    CLOSED_CLASS: 'mdc-linear-progress--closed',
    INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
    REVERSED_CLASS: 'mdc-linear-progress--reversed',
};
var linear_progress_constants_strings = {
    BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
    PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/linear-progress/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var foundation_MDCLinearProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCLinearProgressFoundation, _super);
    function MDCLinearProgressFoundation(adapter) {
        return _super.call(this, __assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function () {
            return linear_progress_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function () {
            return linear_progress_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                getBuffer: function () { return null; },
                getPrimaryBar: function () { return null; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                setStyle: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCLinearProgressFoundation.prototype.init = function () {
        this.isDeterminate_ = !this.adapter_.hasClass(linear_progress_constants_cssClasses.INDETERMINATE_CLASS);
        this.isReversed_ = this.adapter_.hasClass(linear_progress_constants_cssClasses.REVERSED_CLASS);
        this.progress_ = 0;
        this.buffer_ = 1;
    };
    MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.isDeterminate_ = isDeterminate;
        if (this.isDeterminate_) {
            this.adapter_.removeClass(linear_progress_constants_cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
            this.setScale_(this.adapter_.getBuffer(), this.buffer_);
        }
        else {
            if (this.isReversed_) {
                // Adding/removing REVERSED_CLASS starts a translate animation, while
                // adding INDETERMINATE_CLASS starts a scale animation. Here, we reset
                // the translate animation in order to keep it in sync with the new
                // scale animation that will start from adding INDETERMINATE_CLASS
                // below.
                this.adapter_.removeClass(linear_progress_constants_cssClasses.REVERSED_CLASS);
                this.adapter_.forceLayout();
                this.adapter_.addClass(linear_progress_constants_cssClasses.REVERSED_CLASS);
            }
            this.adapter_.addClass(linear_progress_constants_cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), 1);
            this.setScale_(this.adapter_.getBuffer(), 1);
        }
    };
    MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getPrimaryBar(), value);
        }
    };
    MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        this.buffer_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getBuffer(), value);
        }
    };
    MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
        this.isReversed_ = isReversed;
        if (!this.isDeterminate_) {
            // Adding INDETERMINATE_CLASS starts a scale animation, while
            // adding/removing REVERSED_CLASS starts a translate animation. Here, we
            // reset the scale animation in order to keep it in sync with the new
            // translate animation that will start from adding/removing REVERSED_CLASS
            // below.
            this.adapter_.removeClass(linear_progress_constants_cssClasses.INDETERMINATE_CLASS);
            this.adapter_.forceLayout();
            this.adapter_.addClass(linear_progress_constants_cssClasses.INDETERMINATE_CLASS);
        }
        if (this.isReversed_) {
            this.adapter_.addClass(linear_progress_constants_cssClasses.REVERSED_CLASS);
        }
        else {
            this.adapter_.removeClass(linear_progress_constants_cssClasses.REVERSED_CLASS);
        }
    };
    MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter_.removeClass(linear_progress_constants_cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter_.addClass(linear_progress_constants_cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
        if (!el) {
            return;
        }
        var value = "scaleX(" + scaleValue + ")";
        this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
    };
    return MDCLinearProgressFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var linear_progress_foundation = (foundation_MDCLinearProgressFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/linear-progress/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var component_MDCLinearProgress =
/** @class */
function (_super) {
  __extends(MDCLinearProgress, _super);

  function MDCLinearProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLinearProgress.attachTo = function (root) {
    return new MDCLinearProgress(root);
  };

  Object.defineProperty(MDCLinearProgress.prototype, "determinate", {
    set: function set(value) {
      this.foundation_.setDeterminate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "progress", {
    set: function set(value) {
      this.foundation_.setProgress(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "buffer", {
    set: function set(value) {
      this.foundation_.setBuffer(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "reverse", {
    set: function set(value) {
      this.foundation_.setReverse(value);
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgress.prototype.open = function () {
    this.foundation_.open();
  };

  MDCLinearProgress.prototype.close = function () {
    this.foundation_.close();
  };

  MDCLinearProgress.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function forceLayout() {
        return _this.root_.offsetWidth;
      },
      getBuffer: function getBuffer() {
        return _this.root_.querySelector(foundation_MDCLinearProgressFoundation.strings.BUFFER_SELECTOR);
      },
      getPrimaryBar: function getPrimaryBar() {
        return _this.root_.querySelector(foundation_MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setStyle: function setStyle(el, styleProperty, value) {
        return el.style.setProperty(styleProperty, value);
      }
    };
    return new foundation_MDCLinearProgressFoundation(adapter);
  };

  return MDCLinearProgress;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/linear-progress/custom-element.js











function linear_progress_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { linear_progress_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { linear_progress_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return linear_progress_custom_element_typeof(obj); }

function linear_progress_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function linear_progress_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function linear_progress_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) linear_progress_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) linear_progress_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function linear_progress_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) linear_progress_custom_element_setPrototypeOf(subClass, superClass); }

function linear_progress_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = linear_progress_custom_element_isNativeReflectConstruct(); return function () { var Super = linear_progress_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = linear_progress_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return linear_progress_custom_element_possibleConstructorReturn(this, result); }; }

function linear_progress_custom_element_possibleConstructorReturn(self, call) { if (call && (linear_progress_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return linear_progress_custom_element_assertThisInitialized(self); }

function linear_progress_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function linear_progress_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; linear_progress_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !linear_progress_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return linear_progress_custom_element_construct(Class, arguments, linear_progress_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return linear_progress_custom_element_setPrototypeOf(Wrapper, Class); }; return linear_progress_custom_element_wrapNativeSuper(Class); }

function linear_progress_custom_element_construct(Parent, args, Class) { if (linear_progress_custom_element_isNativeReflectConstruct()) { linear_progress_custom_element_construct = Reflect.construct; } else { linear_progress_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) linear_progress_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return linear_progress_custom_element_construct.apply(null, arguments); }

function linear_progress_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function linear_progress_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function linear_progress_custom_element_setPrototypeOf(o, p) { linear_progress_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return linear_progress_custom_element_setPrototypeOf(o, p); }

function linear_progress_custom_element_getPrototypeOf(o) { linear_progress_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return linear_progress_custom_element_getPrototypeOf(o); }




var custom_element_MdcLinearProgress = /*#__PURE__*/function (_HTMLElement) {
  linear_progress_custom_element_inherits(MdcLinearProgress, _HTMLElement);

  var _super = linear_progress_custom_element_createSuper(MdcLinearProgress);

  linear_progress_custom_element_createClass(MdcLinearProgress, [{
    key: "determinate",
    get: function get() {
      return this.determinate_;
    },
    set: function set(determinate) {
      this.determinate_ = determinate;

      if (!!this.linearProgress_) {
        this.linearProgress_.determinate = determinate;
      }
    }
  }, {
    key: "progress",
    get: function get() {
      return this.progress_;
    },
    set: function set(progress) {
      this.progress_ = progress;

      if (!!this.linearProgress_) {
        this.linearProgress_.progress = progress;
      }
    }
  }, {
    key: "buffer",
    get: function get() {
      return this.buffer_;
    },
    set: function set(buffer) {
      this.buffer_ = buffer;

      if (!!this.linearProgress_) {
        this.linearProgress_.buffer = buffer;
      }
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.reverse_;
    },
    set: function set(reverse) {
      this.reverse_ = reverse;

      if (!!this.linearProgress_) {
        this.linearProgress.reverse = reverse_;
      }
    }
  }, {
    key: "closed",
    get: function get() {
      return this.closed_;
    },
    set: function set(closed) {
      this.closed_ = closed;

      if (!!this.linearProgress_) {
        if (closed) {
          this.linearProgress_.close();
        } else {
          this.linearProgress_.open();
        }
      }
    }
  }]);

  function MdcLinearProgress() {
    var _this;

    linear_progress_custom_element_classCallCheck(this, MdcLinearProgress);

    _this = _super.call(this);
    _this.determinate_ = false;
    _this.progress_ = 0;
    _this.buffer_ = 0;
    _this.reverse_ = false;
    _this.closed_ = false;
    _this.linearProgress_;
    return _this;
  }

  linear_progress_custom_element_createClass(MdcLinearProgress, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.linearProgress_ = new component_MDCLinearProgress(this);
      this.linearProgress_.determinate = this.determinate_;
      this.linearProgress_.progress = this.progress_;
      this.linearProgress_.buffer = this.buffer_;
      this.linearProgress_.reverse = this.reverse_;

      if (this.closed_) {
        this.linearProgress_.close();
      } else {
        this.linearProgress_.open();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.linearProgress_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcLinearProgress;
}( /*#__PURE__*/linear_progress_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-linear-progress", custom_element_MdcLinearProgress);
// CONCATENATED MODULE: ./src/list/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCList =
/** @class */
function (_super) {
  __extends(MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll("." + list_constants_cssClasses.LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(index) {
      this.foundation_.setSelectedIndex(typeof this.selectedIndex === "number" ? index[0] : index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root_.getAttribute(list_constants_strings.ARIA_ORIENTATION);
    this.vertical = direction !== list_constants_strings.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root_.querySelectorAll(list_constants_strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation_.layout();
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root_.querySelectorAll(list_constants_strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    var singleSelectedListItem = this.root_.querySelector("\n      ." + list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + list_constants_cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    ");
    var radioSelectedListItem = this.root_.querySelector(list_constants_strings.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root_.querySelectorAll(list_constants_strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation_.setEnabled(itemIndex, isEnabled);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function addClassForElementIndex() {},
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return _this.listElements.length;
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(list_constants_strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(list_constants_strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(list_constants_strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return _this.root_.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === _this.root_;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        return _this.listElements[index].classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        _this.emit(list_constants_strings.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function removeClassForElementIndex() {},
      setAttributeForElementIndex: function setAttributeForElementIndex() {},
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(list_constants_strings.CHECKBOX_RADIO_SELECTOR);

        if (toggleEl.checked !== isChecked) {
          toggleEl.checked = isChecked;
          var event_1 = document.createEvent('Event');
          event_1.initEvent('change', true, true);
          toggleEl.dispatchEvent(event_1);
        }
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(list_constants_strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new foundation_MDCListFoundation(adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = closest(eventTarget, "." + list_constants_cssClasses.LIST_ITEM_CLASS + ", ." + list_constants_cssClasses.ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && matches(nearestParent, "." + list_constants_cssClasses.LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation_.handleKeydown(evt, target.classList.contains(list_constants_cssClasses.LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !matches(target, list_constants_strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation_.handleClick(index, toggleCheckbox);
  };

  return MDCList;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/list/custom-element.js











function list_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { list_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { list_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return list_custom_element_typeof(obj); }

function list_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function list_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) list_custom_element_setPrototypeOf(subClass, superClass); }

function list_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = list_custom_element_isNativeReflectConstruct(); return function () { var Super = list_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = list_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return list_custom_element_possibleConstructorReturn(this, result); }; }

function list_custom_element_possibleConstructorReturn(self, call) { if (call && (list_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return list_custom_element_assertThisInitialized(self); }

function list_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function list_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; list_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !list_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return list_custom_element_construct(Class, arguments, list_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return list_custom_element_setPrototypeOf(Wrapper, Class); }; return list_custom_element_wrapNativeSuper(Class); }

function list_custom_element_construct(Parent, args, Class) { if (list_custom_element_isNativeReflectConstruct()) { list_custom_element_construct = Reflect.construct; } else { list_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) list_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return list_custom_element_construct.apply(null, arguments); }

function list_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function list_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function list_custom_element_setPrototypeOf(o, p) { list_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return list_custom_element_setPrototypeOf(o, p); }

function list_custom_element_getPrototypeOf(o) { list_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return list_custom_element_getPrototypeOf(o); }




var custom_element_MdcList = /*#__PURE__*/function (_HTMLElement) {
  list_custom_element_inherits(MdcList, _HTMLElement);

  var _super = list_custom_element_createSuper(MdcList);

  list_custom_element_createClass(MdcList, [{
    key: "focus",
    value: function focus() {
      var selectedIndex = this.list_.foundation_.getSelectedIndex();

      if (typeof selectedIndex !== "number") {
        selectedIndex = selectedIndex.length > 0 ? selectedIndex[0] : -1;
      }

      if (0 <= selectedIndex && selectedIndex < this.list_.listElements.length) {
        this.list_.listElements[selectedIndex].focus();
      } else if (this.list_.listElements.length > 0) {
        this.list_.listElements[0].focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this.selectedIndex_;
    },
    set: function set(selectedIndex) {
      var previousSelectedIndex = this.selectedIndex_;
      this.selectedIndex_ = selectedIndex;

      if (!!this.list_) {
        this.list_.selectedIndex = selectedIndex;
        var previousIndex = previousSelectedIndex.length > 0 ? previousSelectedIndex[0] : -1;

        if (previousIndex !== -1 && !!this.list_.listElements[previousIndex]) {
          this.list_.listElements[previousIndex].setAttribute("tabindex", "-1");
        }

        if (selectedIndex.length > 0 && this.list_.listElements.length > selectedIndex[0]) {
          this.list_.listElements[selectedIndex[0]].setAttribute("tabindex", "0");
        } else if (this.list_.listElements.length > 0) {
          this.list_.listElements[0].setAttribute("tabindex", "0");
        }
      }
    }
  }, {
    key: "vertical",
    get: function get() {
      return this.vertical_;
    },
    set: function set(vertical) {
      this.vertical_ = vertical;

      if (!!this.list_) {
        this.list_.vertical = vertical;
      }
    }
  }, {
    key: "wrapFocus",
    get: function get() {
      return this.wrapFocus_;
    },
    set: function set(wrapFocus) {
      this.wrapFocus_ = wrapFocus;

      if (!!this.list_) {
        this.list_.wrapFocus = wrapFocus;
      }
    }
  }]);

  function MdcList() {
    var _this;

    list_custom_element_classCallCheck(this, MdcList);

    _this = _super.call(this);
    _this.selectedIndex_ = -1;
    _this.wrapFocus_ = false;
    _this.vertical_ = true;
    _this.list_;
    return _this;
  }

  list_custom_element_createClass(MdcList, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.style.display = "block";
      installClassNameChangeHook.call(this);
      this.list_ = new component_MDCList(this);
      this.list_.selectedIndex = this.selectedIndex_;
      this.list_.vertical = this.vertical_;
      this.list_.wrapFocus = this.wrapFocus_;
      var firstSelectedListItem = this.querySelector(".mdc-list-item--selected, .mdc-list-item--activated");

      if (!!firstSelectedListItem) {
        firstSelectedListItem.setAttribute("tabindex", 0);
      } else {
        var firstListItem = this.querySelector(".mdc-list-item");

        if (!!firstListItem) {
          firstListItem.setAttribute("tabindex", 0);
        }
      }

      var parentElement = this.parentElement;

      if (parentElement.classList.contains("mdc-menu")) {
        parentElement.listSetup(this);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.list_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcList;
}( /*#__PURE__*/list_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-list", custom_element_MdcList);
// CONCATENATED MODULE: ./src/list-item/custom-element.js











function list_item_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { list_item_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { list_item_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return list_item_custom_element_typeof(obj); }

function list_item_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_item_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_item_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_item_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_item_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function list_item_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) list_item_custom_element_setPrototypeOf(subClass, superClass); }

function list_item_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = list_item_custom_element_isNativeReflectConstruct(); return function () { var Super = list_item_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = list_item_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return list_item_custom_element_possibleConstructorReturn(this, result); }; }

function list_item_custom_element_possibleConstructorReturn(self, call) { if (call && (list_item_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return list_item_custom_element_assertThisInitialized(self); }

function list_item_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function list_item_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; list_item_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !list_item_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return list_item_custom_element_construct(Class, arguments, list_item_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return list_item_custom_element_setPrototypeOf(Wrapper, Class); }; return list_item_custom_element_wrapNativeSuper(Class); }

function list_item_custom_element_construct(Parent, args, Class) { if (list_item_custom_element_isNativeReflectConstruct()) { list_item_custom_element_construct = Reflect.construct; } else { list_item_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) list_item_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return list_item_custom_element_construct.apply(null, arguments); }

function list_item_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function list_item_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function list_item_custom_element_setPrototypeOf(o, p) { list_item_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return list_item_custom_element_setPrototypeOf(o, p); }

function list_item_custom_element_getPrototypeOf(o) { list_item_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return list_item_custom_element_getPrototypeOf(o); }




var custom_element_MdcListItem = /*#__PURE__*/function (_HTMLElement) {
  list_item_custom_element_inherits(MdcListItem, _HTMLElement);

  var _super = list_item_custom_element_createSuper(MdcListItem);

  function MdcListItem() {
    list_item_custom_element_classCallCheck(this, MdcListItem);

    return _super.call(this);
  }

  list_item_custom_element_createClass(MdcListItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);

      if (this.classList.contains("mdc-list-item")) {
        this.ripple_ = new component_MDCRipple(this);
      } else {
        this.ripple_ = new component_MDCRipple(this.querySelector(".mdc-list-item"));
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.ripple_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcListItem;
}( /*#__PURE__*/list_item_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-list-item", custom_element_MdcListItem);
// CONCATENATED MODULE: ./node_modules/@material/menu-surface/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var menu_surface_constants_cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var menu_surface_constants_strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
        'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var menu_surface_constants_numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/menu-surface/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.isQuickOpen_ = false;
        _this.isHoistedElement_ = false;
        _this.isFixedPosition_ = false;
        _this.openAnimationEndTimerId_ = 0;
        _this.closeAnimationEndTimerId_ = 0;
        _this.animationRequestId_ = 0;
        _this.anchorCorner_ = Corner.TOP_START;
        _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position_ = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return menu_surface_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return menu_surface_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return menu_surface_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return Corner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter_.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter_.hasClass(OPEN)) {
            this.isOpen_ = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId_);
        clearTimeout(this.closeAnimationEndTimerId_);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId_);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner_ = corner;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin_.top = margin.top || 0;
        this.anchorMargin_.right = margin.right || 0;
        this.anchorMargin_.bottom = margin.bottom || 0;
        this.anchorMargin_.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement_ = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition_ = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position_.x = this.isFinite_(x) ? x : 0;
        this.position_.y = this.isFinite_(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen_ = quickOpen;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        this.adapter_.saveFocus();
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
        }
        this.animationRequestId_ = requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.dimensions_ = _this.adapter_.getInnerDimensions();
            _this.autoPosition_();
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyOpen();
            }
            else {
                _this.openAnimationEndTimerId_ = setTimeout(function () {
                    _this.openAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter_.notifyOpen();
                }, menu_surface_constants_numbers.TRANSITION_OPEN_DURATION);
            }
        });
        this.isOpen_ = true;
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        }
        requestAnimationFrame(function () {
            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyClose();
            }
            else {
                _this.closeAnimationEndTimerId_ = setTimeout(function () {
                    _this.closeAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                    _this.adapter_.notifyClose();
                }, menu_surface_constants_numbers.TRANSITION_CLOSE_DURATION);
            }
        });
        this.isOpen_ = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus_();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter_.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements_ = this.getAutoLayoutMeasurements_();
        var corner = this.getOriginCorner_();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
        var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset_(corner);
        var verticalOffset = this.getVerticalOriginOffset_(corner);
        var _b = this.measurements_, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width > menu_surface_constants_numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
        if (this.isHoistedElement_ || this.isFixedPosition_) {
            this.adjustPositionForHoistedElement_(position);
        }
        this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter_.setPosition(position);
        this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
        var anchorRect = this.adapter_.getAnchorDimensions();
        var bodySize = this.adapter_.getBodyDimensions();
        var viewportSize = this.adapter_.getWindowDimensions();
        var windowScroll = this.adapter_.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position_.y,
                right: this.position_.x,
                bottom: this.position_.y,
                left: this.position_.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions_,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
        // Defaults: open from the top left.
        var corner = Corner.TOP_LEFT;
        var _a = this.measurements_, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom
            : viewportDistance.top + this.anchorMargin_.top;
        var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom
            : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
        var topOverflow = surfaceSize.height - availableTop;
        var bottomOverflow = surfaceSize.height - availableBottom;
        if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
            corner = this.setBit_(corner, CornerBit.BOTTOM);
        }
        var isRtl = this.adapter_.isRtl();
        var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
        var isAlignedRight = (avoidHorizontalOverlap && !isRtl) ||
            (!avoidHorizontalOverlap && isFlipRtl && isRtl);
        var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right :
            viewportDistance.left + this.anchorMargin_.left;
        var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right :
            viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
        var leftOverflow = surfaceSize.width - availableLeft;
        var rightOverflow = surfaceSize.width - availableRight;
        if ((leftOverflow < 0 && isAlignedRight && isRtl) ||
            (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
            (rightOverflow > 0 && leftOverflow < rightOverflow)) {
            corner = this.setBit_(corner, CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
        var viewportDistance = this.measurements_.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements_.anchorSize.height;
            }
        }
        else {
            maxHeight =
                viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements_.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
            // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
            // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
            // the right property is correct.
            if (this.isHoistedElement_ || this.isFixedPosition_) {
                return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        }
        else {
            y = avoidVerticalOverlap ? (anchorSize.height + this.anchorMargin_.bottom) : this.anchorMargin_.top;
        }
        return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
        var e_1, _a;
        var _b = this.measurements_, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition_) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
        var isRootFocused = this.adapter_.isFocused();
        var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
        if (isRootFocused || childHasFocus) {
            this.adapter_.restoreFocus();
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var menu_surface_foundation = (foundation_MDCMenuSurfaceFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/menu-surface/util.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */
function getTransformPropertyName(globalObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
        var el = globalObj.document.createElement('div');
        cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
    }
    return cachedCssTransformPropertyName_;
}

//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./src/menu-surface/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCMenuSurface =
/** @class */
function (_super) {
  __extends(MDCMenuSurface, _super);

  function MDCMenuSurface() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenuSurface.attachTo = function (root) {
    return new MDCMenuSurface(root);
  };

  MDCMenuSurface.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var parentEl = this.root_.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains(menu_surface_constants_cssClasses.ANCHOR) ? parentEl : null;

    if (this.root_.classList.contains(menu_surface_constants_cssClasses.FIXED)) {
      this.setFixedPosition(true);
    }

    this.handleKeydown_ = function (evt) {
      return _this.handleKeydown(evt);
    };

    this.handleBodyClick_ = function (evt) {
      return _this.handleBodyClick(evt);
    };

    this.registerBodyClickListener_ = function () {
      return document.body.addEventListener('click', _this.handleBodyClick_);
    };

    this.deregisterBodyClickListener_ = function () {
      return document.body.removeEventListener('click', _this.handleBodyClick_);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen(menu_surface_constants_strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.listen(menu_surface_constants_strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
  };
  /** Handle keys that close the surface. */


  MDCMenuSurface.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.emit("MDCMenu:close", {}, true);
    }
  };
  /** Handle clicks and close if not within menu-surface element. */


  MDCMenuSurface.prototype.handleBodyClick = function (evt) {
    var el = evt.target;

    if (this.isElementInContainer(el)) {
      return;
    }

    this.emit("MDCMenu:close", {}, true);
  };

  MDCMenuSurface.prototype.isElementInContainer = function (el) {
    return this.root_.contains(el);
  };

  MDCMenuSurface.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(menu_surface_constants_strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.unlisten(menu_surface_constants_strings.CLOSED_EVENT, this.deregisterBodyClickListener_);

    _super.prototype.destroy.call(this);
  };

  MDCMenuSurface.prototype.isOpen = function () {
    return this.foundation_.isOpen();
  };

  MDCMenuSurface.prototype.open = function () {
    this.foundation_.open();
  };

  MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    this.foundation_.close(skipRestoreFocus);
  };

  Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */

  MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
    this.foundation_.setIsHoisted(isHoisted);
  };
  /** Sets the element that the menu-surface is anchored to. */


  MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
    this.anchorElement = element;
  };
  /** Sets the menu-surface to position: fixed. */


  MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
    if (isFixed) {
      this.root_.classList.add(menu_surface_constants_cssClasses.FIXED);
    } else {
      this.root_.classList.remove(menu_surface_constants_cssClasses.FIXED);
    }

    this.foundation_.setFixedPosition(isFixed);
  };
  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */


  MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
    this.foundation_.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  };
  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */


  MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
    this.foundation_.setAnchorCorner(corner);
  };

  MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
    this.foundation_.setAnchorMargin(margin);
  };

  MDCMenuSurface.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!_this.anchorElement;
      },
      notifyClose: function notifyClose() {
        return _this.emit(foundation_MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
      },
      notifyOpen: function notifyOpen() {
        return _this.emit(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
      },
      isElementInContainer: function isElementInContainer(el) {
        return _this.isElementInContainer(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        var propertyName = getTransformPropertyName(window) + "-origin";

        _this.root_.style.setProperty(propertyName, origin);
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.root_;
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        if (_this.root_.contains(document.activeElement)) {
          if (_this.previousFocus_ && _this.previousFocus_.focus) {
            _this.previousFocus_.focus();
          }
        }
      },
      getInnerDimensions: function getInnerDimensions() {
        return {
          width: _this.root_.offsetWidth,
          height: _this.root_.offsetHeight
        };
      },
      getAnchorDimensions: function getAnchorDimensions() {
        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function getWindowDimensions() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getBodyDimensions: function getBodyDimensions() {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowScroll: function getWindowScroll() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: function setPosition(position) {
        _this.root_.style.left = 'left' in position ? position.left + "px" : '';
        _this.root_.style.right = 'right' in position ? position.right + "px" : '';
        _this.root_.style.top = 'top' in position ? position.top + "px" : '';
        _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
      },
      setMaxHeight: function setMaxHeight(height) {
        _this.root_.style.maxHeight = height;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new foundation_MDCMenuSurfaceFoundation(adapter);
  };

  return MDCMenuSurface;
}(component_MDCComponent);


// CONCATENATED MODULE: ./node_modules/@material/menu/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var menu_constants_cssClasses = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var menu_constants_strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var menu_constants_numbers = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./src/menu/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var foundation_MDCMenuFoundation =
/** @class */
function (_super) {
  __extends(MDCMenuFoundation, _super);

  function MDCMenuFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation.defaultAdapter), adapter)) || this;

    _this.closeAnimationEndTimerId_ = 0;
    _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
    return _this;
  }

  Object.defineProperty(MDCMenuFoundation, "cssClasses", {
    get: function get() {
      return menu_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "strings", {
    get: function get() {
      return menu_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "numbers", {
    get: function get() {
      return menu_constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClassToElementAtIndex: function addClassToElementAtIndex() {
          return undefined;
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
          return undefined;
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
          return undefined;
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
          return undefined;
        },
        elementContainsClass: function elementContainsClass() {
          return false;
        },
        closeSurface: function closeSurface() {
          return undefined;
        },
        getElementIndex: function getElementIndex() {
          return -1;
        },
        notifySelected: function notifySelected() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        focusListRoot: function focusListRoot() {
          return undefined;
        },
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuFoundation.prototype.destroy = function () {
    if (this.closeAnimationEndTimerId_) {
      clearTimeout(this.closeAnimationEndTimerId_);
    }

    this.adapter_.closeSurface();
  };

  MDCMenuFoundation.prototype.handleKeydown = function (evt) {
    var key = evt.key,
        keyCode = evt.keyCode;
    var isTab = key === 'Tab' || keyCode === 9;

    if (isTab) {
      this.adapter_.closeSurface(
      /** skipRestoreFocus */
      true);
    }
  };

  MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
    var _this = this;

    var index = this.adapter_.getElementIndex(listItem);

    if (index < 0) {
      return;
    }

    this.adapter_.notifySelected({
      index: index
    });
    this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

    this.closeAnimationEndTimerId_ = setTimeout(function () {
      // Recompute the index in case the menu contents have changed.
      var recomputedIndex = _this.adapter_.getElementIndex(listItem);

      if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, foundation_MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };

  MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState_) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter_.focusItemAtIndex(0);
        break;

      case DefaultFocusState.LAST_ITEM:
        this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
        break;

      case DefaultFocusState.NONE:
        // Do nothing.
        break;

      default:
        this.adapter_.focusListRoot();
        break;
    }
  };
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */


  MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
    this.defaultFocusState_ = focusState;
  };
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */


  MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
    this.validatedIndex_(index);

    if (!this.adapter_.isSelectableItemAtIndex(index)) {
      throw new Error('MDCMenuFoundation: No selection group at specified index.');
    }

    var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);

    if (prevSelectedIndex >= 0) {
      this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, menu_constants_strings.ARIA_CHECKED_ATTR);
      this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
    }

    this.adapter_.addClassToElementAtIndex(index, menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
    this.adapter_.addAttributeToElementAtIndex(index, menu_constants_strings.ARIA_CHECKED_ATTR, 'true');
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
    this.validatedIndex_(index);

    if (isEnabled) {
      this.adapter_.removeClassFromElementAtIndex(index, list_constants_cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, menu_constants_strings.ARIA_DISABLED_ATTR, 'false');
    } else {
      this.adapter_.addClassToElementAtIndex(index, list_constants_cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, menu_constants_strings.ARIA_DISABLED_ATTR, 'true');
    }
  };

  MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
    var menuSize = this.adapter_.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;

    if (!isIndexInRange) {
      throw new Error('MDCMenuFoundation: No list item at specified index.');
    }
  };

  return MDCMenuFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ var menu_foundation = (foundation_MDCMenuFoundation);
// CONCATENATED MODULE: ./src/menu/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */









var component_MDCMenu =
/** @class */
function (_super) {
  __extends(MDCMenu, _super);

  function MDCMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenu.attachTo = function (root) {
    return new MDCMenu(root);
  };

  MDCMenu.prototype.initialize = function (menuSurfaceFactory) {
    if (menuSurfaceFactory === void 0) {
      menuSurfaceFactory = function menuSurfaceFactory(el) {
        return new component_MDCMenuSurface(el);
      };
    }

    this.menuSurfaceFactory_ = menuSurfaceFactory;
  };

  MDCMenu.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.menuSurface_ = this.menuSurfaceFactory_(this.root_);

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleItemAction_ = function (evt) {
      return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
    };

    this.handleMenuSurfaceOpened_ = function () {
      return _this.foundation_.handleMenuSurfaceOpened();
    };

    this.menuSurface_.listen(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(foundation_MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
  };

  MDCMenu.prototype.listSetup = function (listElement) {
    this.list_ = listElement.list_;
    this.list_.wrapFocus = true;
  };

  MDCMenu.prototype.destroy = function () {
    this.menuSurface_.destroy();
    this.menuSurface_.unlisten(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(foundation_MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCMenu.prototype, "open", {
    get: function get() {
      return this.menuSurface_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.menuSurface_.open();
      } else {
        this.menuSurface_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
    get: function get() {
      return this.list_ ? this.list_.wrapFocus : false;
    },
    set: function set(value) {
      if (this.list_) {
        this.list_.wrapFocus = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "items", {
    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */
    get: function get() {
      return this.list_ ? this.list_.listElements : [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.menuSurface_.quickOpen = quickOpen;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   * @param focusState Default focus state.
   */

  MDCMenu.prototype.setDefaultFocusState = function (focusState) {
    this.foundation_.setDefaultFocusState(focusState);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */


  MDCMenu.prototype.setAnchorCorner = function (corner) {
    this.menuSurface_.setAnchorCorner(corner);
  };

  MDCMenu.prototype.setAnchorMargin = function (margin) {
    this.menuSurface_.setAnchorMargin(margin);
  };
  /**
   * Sets the list item as the selected row at the specified index.
   * @param index Index of list item within menu.
   */


  MDCMenu.prototype.setSelectedIndex = function (index) {
    this.foundation_.setSelectedIndex(index);
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenu.prototype.setEnabled = function (index, isEnabled) {
    this.foundation_.setEnabled(index, isEnabled);
  };
  /**
   * @return The item within the menu at the index specified.
   */


  MDCMenu.prototype.getOptionByIndex = function (index) {
    var items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  };

  MDCMenu.prototype.setFixedPosition = function (isFixed) {
    this.menuSurface_.setFixedPosition(isFixed);
  };

  MDCMenu.prototype.setIsHoisted = function (isHoisted) {
    this.menuSurface_.setIsHoisted(isHoisted);
  };

  MDCMenu.prototype.setAbsolutePosition = function (x, y) {
    this.menuSurface_.setAbsolutePosition(x, y);
  };
  /**
   * Sets the element that the menu-surface is anchored to.
   */


  MDCMenu.prototype.setAnchorElement = function (element) {
    this.menuSurface_.anchorElement = element;
  };

  MDCMenu.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface() {
        return _this.emit("MDCMenu:close", {}, true);
      },
      getElementIndex: function getElementIndex(element) {
        return _this.items.indexOf(element);
      },
      notifySelected: function notifySelected(evtData) {
        return _this.emit(menu_constants_strings.SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.items.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this.items[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return _this.root_.querySelector(menu_constants_strings.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(_this.items[index], "." + menu_constants_cssClasses.MENU_SELECTION_GROUP);
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(_this.items[index], "." + menu_constants_cssClasses.MENU_SELECTION_GROUP);
        var selectedItemEl = selectionGroupEl.querySelector("." + menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new foundation_MDCMenuFoundation(adapter);
  };

  return MDCMenu;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/menu/custom-element.js











function menu_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { menu_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { menu_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return menu_custom_element_typeof(obj); }

function menu_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function menu_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) menu_custom_element_setPrototypeOf(subClass, superClass); }

function menu_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = menu_custom_element_isNativeReflectConstruct(); return function () { var Super = menu_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = menu_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return menu_custom_element_possibleConstructorReturn(this, result); }; }

function menu_custom_element_possibleConstructorReturn(self, call) { if (call && (menu_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return menu_custom_element_assertThisInitialized(self); }

function menu_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function menu_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; menu_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !menu_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return menu_custom_element_construct(Class, arguments, menu_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return menu_custom_element_setPrototypeOf(Wrapper, Class); }; return menu_custom_element_wrapNativeSuper(Class); }

function menu_custom_element_construct(Parent, args, Class) { if (menu_custom_element_isNativeReflectConstruct()) { menu_custom_element_construct = Reflect.construct; } else { menu_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) menu_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return menu_custom_element_construct.apply(null, arguments); }

function menu_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function menu_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function menu_custom_element_setPrototypeOf(o, p) { menu_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return menu_custom_element_setPrototypeOf(o, p); }

function menu_custom_element_getPrototypeOf(o) { menu_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return menu_custom_element_getPrototypeOf(o); }




var custom_element_MdcMenu = /*#__PURE__*/function (_HTMLElement) {
  menu_custom_element_inherits(MdcMenu, _HTMLElement);

  var _super = menu_custom_element_createSuper(MdcMenu);

  menu_custom_element_createClass(MdcMenu, [{
    key: "open",
    get: function get() {
      return this.open_;
    },
    set: function set(open) {
      this.open_ = open;

      if (!!this.menu_) {
        this.menu_.open = open;
      }
    }
  }, {
    key: "quickOpen",
    get: function get() {
      return this.quickOpen_;
    },
    set: function set(quickOpen) {
      this.quickOpen_ = quickOpen;

      if (!!this.menu_) {
        this.menu_.quickOpen = quickOpen;
      }
    }
  }]);

  function MdcMenu() {
    var _this;

    menu_custom_element_classCallCheck(this, MdcMenu);

    _this = _super.call(this);
    _this.open_ = false;
    _this.quickOpen_ = false;
    _this.menu_;
    return _this;
  }

  menu_custom_element_createClass(MdcMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.menu_ = new component_MDCMenu(this);
      this.menu_.open = this.open_;
      this.menu_.quickOpen = this.quickOpen_;
    }
  }, {
    key: "listSetup",
    value: function listSetup(listElement) {
      this.menu_.listSetup(listElement);

      if (this.classList.contains("mdc-select__menu")) {
        var parentElement = this.parentElement;

        if (parentElement.classList.contains("mdc-select")) {
          parentElement.menuSetup(this);
        }
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.menu_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcMenu;
}( /*#__PURE__*/menu_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-menu", custom_element_MdcMenu);
// CONCATENATED MODULE: ./node_modules/@material/radio/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var radio_constants_strings = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};
var radio_constants_cssClasses = {
    DISABLED: 'mdc-radio--disabled',
    ROOT: 'mdc-radio',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/radio/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCRadioFoundation = /** @class */ (function (_super) {
    __extends(MDCRadioFoundation, _super);
    function MDCRadioFoundation(adapter) {
        return _super.call(this, __assign({}, MDCRadioFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCRadioFoundation, "cssClasses", {
        get: function () {
            return radio_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "strings", {
        get: function () {
            return radio_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRadioFoundation.prototype.setDisabled = function (disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(DISABLED);
        }
        else {
            this.adapter_.removeClass(DISABLED);
        }
    };
    return MDCRadioFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var radio_foundation = (foundation_MDCRadioFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/radio/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var component_MDCRadio =
/** @class */
function (_super) {
  __extends(MDCRadio, _super);

  function MDCRadio() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCRadio.attachTo = function (root) {
    return new MDCRadio(root);
  };

  Object.defineProperty(MDCRadio.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "value", {
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });

  MDCRadio.prototype.destroy = function () {
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCRadio.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new foundation_MDCRadioFoundation(adapter);
  };

  MDCRadio.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter(this)), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, applyPassive());
      },
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction.
      // This is not the UI we desire.
      isSurfaceActive: function isSurfaceActive() {
        return false;
      },
      isUnbounded: function isUnbounded() {
        return true;
      }
    }); // tslint:enable:object-literal-sort-keys


    return new ripple_component_MDCRipple(this.root_, new foundation_MDCRippleFoundation(adapter));
  };

  Object.defineProperty(MDCRadio.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = foundation_MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCRadio;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/radio/custom-element.js











function radio_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { radio_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { radio_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return radio_custom_element_typeof(obj); }

function radio_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function radio_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function radio_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) radio_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) radio_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function radio_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) radio_custom_element_setPrototypeOf(subClass, superClass); }

function radio_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = radio_custom_element_isNativeReflectConstruct(); return function () { var Super = radio_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = radio_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return radio_custom_element_possibleConstructorReturn(this, result); }; }

function radio_custom_element_possibleConstructorReturn(self, call) { if (call && (radio_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return radio_custom_element_assertThisInitialized(self); }

function radio_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function radio_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; radio_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !radio_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return radio_custom_element_construct(Class, arguments, radio_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return radio_custom_element_setPrototypeOf(Wrapper, Class); }; return radio_custom_element_wrapNativeSuper(Class); }

function radio_custom_element_construct(Parent, args, Class) { if (radio_custom_element_isNativeReflectConstruct()) { radio_custom_element_construct = Reflect.construct; } else { radio_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) radio_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return radio_custom_element_construct.apply(null, arguments); }

function radio_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function radio_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function radio_custom_element_setPrototypeOf(o, p) { radio_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return radio_custom_element_setPrototypeOf(o, p); }

function radio_custom_element_getPrototypeOf(o) { radio_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return radio_custom_element_getPrototypeOf(o); }




var custom_element_MdcRadio = /*#__PURE__*/function (_HTMLElement) {
  radio_custom_element_inherits(MdcRadio, _HTMLElement);

  var _super = radio_custom_element_createSuper(MdcRadio);

  radio_custom_element_createClass(MdcRadio, [{
    key: "focus",
    value: function focus() {
      this.radio_.nativeControl_.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.radio_.nativeControl_.blur();
    }
  }, {
    key: "checked",
    get: function get() {
      return this.checked_;
    },
    set: function set(checked) {
      this.checked_ = checked;

      if (!!this.radio_) {
        this.radio_.checked = checked;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;

      if (!!this.radio_) {
        this.radio_.disabled = disabled;
      }
    }
  }]);

  function MdcRadio() {
    var _this;

    radio_custom_element_classCallCheck(this, MdcRadio);

    _this = _super.call(this);
    _this.checked_ = false;
    _this.disabled_ = false;
    _this.radio_;
    return _this;
  }

  radio_custom_element_createClass(MdcRadio, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.radio_ = new component_MDCRadio(this);
      this.radio_.checked = this.checked_;
      this.radio_.disabled = this.disabled_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.radio_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcRadio;
}( /*#__PURE__*/radio_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-radio", custom_element_MdcRadio);
// CONCATENATED MODULE: ./src/ripple/custom-element.js











function ripple_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ripple_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { ripple_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ripple_custom_element_typeof(obj); }

function ripple_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripple_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ripple_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) ripple_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) ripple_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function ripple_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ripple_custom_element_setPrototypeOf(subClass, superClass); }

function ripple_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = ripple_custom_element_isNativeReflectConstruct(); return function () { var Super = ripple_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ripple_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ripple_custom_element_possibleConstructorReturn(this, result); }; }

function ripple_custom_element_possibleConstructorReturn(self, call) { if (call && (ripple_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return ripple_custom_element_assertThisInitialized(self); }

function ripple_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ripple_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; ripple_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !ripple_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return ripple_custom_element_construct(Class, arguments, ripple_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return ripple_custom_element_setPrototypeOf(Wrapper, Class); }; return ripple_custom_element_wrapNativeSuper(Class); }

function ripple_custom_element_construct(Parent, args, Class) { if (ripple_custom_element_isNativeReflectConstruct()) { ripple_custom_element_construct = Reflect.construct; } else { ripple_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) ripple_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return ripple_custom_element_construct.apply(null, arguments); }

function ripple_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ripple_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function ripple_custom_element_setPrototypeOf(o, p) { ripple_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ripple_custom_element_setPrototypeOf(o, p); }

function ripple_custom_element_getPrototypeOf(o) { ripple_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ripple_custom_element_getPrototypeOf(o); }




var custom_element_MdcRipple = /*#__PURE__*/function (_HTMLElement) {
  ripple_custom_element_inherits(MdcRipple, _HTMLElement);

  var _super = ripple_custom_element_createSuper(MdcRipple);

  ripple_custom_element_createClass(MdcRipple, [{
    key: "unbounded",
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      this.unbounded_ = unbounded;

      if (!!this.ripple_) {
        this.ripple_.unbounded = unbounded;
      }
    }
  }]);

  function MdcRipple() {
    var _this;

    ripple_custom_element_classCallCheck(this, MdcRipple);

    _this = _super.call(this);
    _this.unbounded_ = false;
    _this.ripple_;
    return _this;
  }

  ripple_custom_element_createClass(MdcRipple, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.ripple_ = new component_MDCRipple(this);
      this.ripple_.unbounded = this.unbounded_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.ripple_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcRipple;
}( /*#__PURE__*/ripple_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-ripple", custom_element_MdcRipple);
// CONCATENATED MODULE: ./node_modules/@material/floating-label/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var floating_label_constants_cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/floating-label/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __extends(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return floating_label_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var floating_label_foundation = (foundation_MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/floating-label/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCFloatingLabel = /** @class */ (function (_super) {
    __extends(MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation_.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation_.float(shouldFloat);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation_.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            getWidth: function () { return _this.root_.scrollWidth; },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/line-ripple/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var line_ripple_constants_cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/line-ripple/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCLineRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return line_ripple_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var line_ripple_foundation = (foundation_MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/line-ripple/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCLineRipple = /** @class */ (function (_super) {
    __extends(MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/notched-outline/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var notched_outline_constants_strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var notched_outline_constants_numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var notched_outline_constants_cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/notched-outline/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return notched_outline_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return notched_outline_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return notched_outline_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += notched_outline_constants_numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var notched_outline_foundation = (foundation_MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/notched-outline/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var component_MDCNotchedOutline = /** @class */ (function (_super) {
    __extends(MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(notched_outline_constants_strings.NOTCH_ELEMENT_SELECTOR);
        var label = this.root_.querySelector('.' + foundation_MDCFloatingLabelFoundation.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root_.classList.add(notched_outline_constants_cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root_.classList.add(notched_outline_constants_cssClasses.NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation_.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation_.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', width + 'px'); },
            removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var select_constants_cssClasses = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var select_constants_strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + select_constants_cssClasses.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var select_constants_numbers = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./src/select/foundation.js



/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var foundation_MDCSelectFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCSelectFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this; // Index of the currently selected menu item.


    _this.selectedIndex_ = select_constants_numbers.UNSET_INDEX; // Disabled state

    _this.disabled_ = false; // isMenuOpen_ is used to track the state of the menu by listening to the MDCMenuSurface:closed event
    // For reference, menu.open will return false if the menu is still closing, but isMenuOpen_ returns false only after
    // the menu has closed

    _this.isMenuOpen_ = false;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.helperText_ = foundationMap.helperText;
    return _this;
  }

  Object.defineProperty(MDCSelectFoundation, "cssClasses", {
    get: function get() {
      return select_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "numbers", {
    get: function get() {
      return select_constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "strings", {
    get: function get() {
      return select_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        activateBottomLine: function activateBottomLine() {
          return undefined;
        },
        deactivateBottomLine: function deactivateBottomLine() {
          return undefined;
        },
        getSelectedMenuItem: function getSelectedMenuItem() {
          return null;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        },
        setRippleCenter: function setRippleCenter() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setSelectedText: function setSelectedText() {
          return undefined;
        },
        isSelectedTextFocused: function isSelectedTextFocused() {
          return false;
        },
        getSelectedTextAttr: function getSelectedTextAttr() {
          return '';
        },
        setSelectedTextAttr: function setSelectedTextAttr() {
          return undefined;
        },
        openMenu: function openMenu() {
          return undefined;
        },
        closeMenu: function closeMenu() {
          return undefined;
        },
        getAnchorElement: function getAnchorElement() {
          return null;
        },
        setMenuAnchorElement: function setMenuAnchorElement() {
          return undefined;
        },
        setMenuAnchorCorner: function setMenuAnchorCorner() {
          return undefined;
        },
        setMenuWrapFocus: function setMenuWrapFocus() {
          return undefined;
        },
        setAttributeAtIndex: function setAttributeAtIndex() {
          return undefined;
        },
        removeAttributeAtIndex: function removeAttributeAtIndex() {
          return undefined;
        },
        focusMenuItemAtIndex: function focusMenuItemAtIndex() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        getMenuItemValues: function getMenuItemValues() {
          return [];
        },
        getMenuItemTextAtIndex: function getMenuItemTextAtIndex() {
          return '';
        },
        getMenuItemAttr: function getMenuItemAttr() {
          return '';
        },
        addClassAtIndex: function addClassAtIndex() {
          return undefined;
        },
        removeClassAtIndex: function removeClassAtIndex() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Returns the index of the currently selected menu item, or -1 if none. */

  MDCSelectFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }

    if (index >= this.adapter_.getMenuItemCount()) {
      return;
    }

    var previouslySelectedIndex = this.selectedIndex_;
    this.selectedIndex_ = index;

    if (this.selectedIndex_ === select_constants_numbers.UNSET_INDEX) {
      this.adapter_.setSelectedText('');
    } else {
      this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim());
    }

    if (previouslySelectedIndex !== select_constants_numbers.UNSET_INDEX) {
      this.adapter_.removeClassAtIndex(previouslySelectedIndex, select_constants_cssClasses.SELECTED_ITEM_CLASS);
      this.adapter_.removeAttributeAtIndex(previouslySelectedIndex, select_constants_strings.ARIA_SELECTED_ATTR);
    }

    if (this.selectedIndex_ !== select_constants_numbers.UNSET_INDEX) {
      this.adapter_.addClassAtIndex(this.selectedIndex_, select_constants_cssClasses.SELECTED_ITEM_CLASS);
      this.adapter_.setAttributeAtIndex(this.selectedIndex_, select_constants_strings.ARIA_SELECTED_ATTR, 'true');
    }

    this.layout();

    if (closeMenu) {
      this.adapter_.closeMenu();
    }

    this.handleChange();
  };

  MDCSelectFoundation.prototype.getDisabled = function () {
    return this.disabled_;
  };

  MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
    this.disabled_ = isDisabled;

    if (this.disabled_) {
      this.adapter_.addClass(select_constants_cssClasses.DISABLED);
      this.adapter_.closeMenu();
    } else {
      this.adapter_.removeClass(select_constants_cssClasses.DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(this.disabled_);
    }

    this.adapter_.setSelectedTextAttr('tabindex', this.disabled_ ? '-1' : '0');
    this.adapter_.setSelectedTextAttr('aria-disabled', this.disabled_.toString());
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.layout = function () {
    if (this.adapter_.hasLabel()) {
      var openNotch = this.selectedIndex_ !== select_constants_numbers.UNSET_INDEX && this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).length > 0;
      this.notchOutline(openNotch);
    }
  };

  MDCSelectFoundation.prototype.handleMenuOpened = function () {
    if (this.adapter_.getMenuItemValues().length === 0) {
      return;
    }

    this.adapter_.addClass(select_constants_cssClasses.ACTIVATED); // Menu should open to the last selected element, should open to first menu item otherwise.

    var focusItemIndex = this.selectedIndex_ >= 0 ? this.selectedIndex_ : 0;
    this.adapter_.focusMenuItemAtIndex(focusItemIndex);
  };

  MDCSelectFoundation.prototype.handleMenuClosed = function () {
    this.adapter_.removeClass(select_constants_cssClasses.ACTIVATED);
    this.isMenuOpen_ = false;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'false'); // Unfocus the select if menu is closed without a selection

    if (!this.adapter_.isSelectedTextFocused()) {
      this.blur_();
    }
  };
  /**
   * Handles value changes, via change event or programmatic updates.
   */


  MDCSelectFoundation.prototype.handleChange = function () {
    this.updateLabel_();
    var isRequired = this.adapter_.hasClass(select_constants_cssClasses.REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
    this.setSelectedIndex(index,
    /** closeMenu */
    true);
  };
  /**
   * Handles focus events from select element.
   */


  MDCSelectFoundation.prototype.handleFocus = function () {
    this.adapter_.addClass(select_constants_cssClasses.FOCUSED);

    if (this.adapter_.hasLabel()) {
      this.adapter_.floatLabel(true);
      this.notchOutline(true);
    }

    this.adapter_.activateBottomLine();

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Handles blur events from select element.
   */


  MDCSelectFoundation.prototype.handleBlur = function () {
    if (this.isMenuOpen_) {
      return;
    }

    this.blur_();
  };

  MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
    if (this.isMenuOpen_) {
      return;
    }

    this.adapter_.setRippleCenter(normalizedX);
    this.adapter_.openMenu();
    this.isMenuOpen_ = true;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
  };

  MDCSelectFoundation.prototype.handleKeydown = function (event) {
    if (this.isMenuOpen_) {
      return;
    }

    var isEnter = event.key === 'Enter' || event.keyCode === 13;
    var isSpace = event.key === 'Space' || event.keyCode === 32;
    var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
    var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

    if (this.adapter_.hasClass(select_constants_cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
      this.adapter_.openMenu();
      this.isMenuOpen_ = true;
      this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
      event.preventDefault();
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    var isFocused = this.adapter_.hasClass(select_constants_cssClasses.FOCUSED);

    if (openNotch) {
      var labelScale = select_constants_numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.setValid = function (isValid) {
    this.adapter_.setSelectedTextAttr('aria-invalid', (!isValid).toString());

    if (isValid) {
      this.adapter_.removeClass(select_constants_cssClasses.INVALID);
    } else {
      this.adapter_.addClass(select_constants_cssClasses.INVALID);
    }
  };

  MDCSelectFoundation.prototype.isValid = function () {
    if (this.adapter_.hasClass(select_constants_cssClasses.REQUIRED) && !this.adapter_.hasClass(select_constants_cssClasses.DISABLED)) {
      // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
      // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
      return this.selectedIndex_ !== select_constants_numbers.UNSET_INDEX && (this.selectedIndex_ !== 0 || this.selectedIndex_ !== select_constants_numbers.UNSET_INDEX && this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).length > 0);
    }

    return true;
  };

  MDCSelectFoundation.prototype.setRequired = function (isRequired) {
    if (isRequired) {
      this.adapter_.addClass(select_constants_cssClasses.REQUIRED);
    } else {
      this.adapter_.removeClass(select_constants_cssClasses.REQUIRED);
    }

    this.adapter_.setSelectedTextAttr('aria-required', isRequired.toString());
  };

  MDCSelectFoundation.prototype.getRequired = function () {
    return this.adapter_.getSelectedTextAttr('aria-required') === 'true';
  };

  MDCSelectFoundation.prototype.initMenu = function () {
    var anchorEl = this.adapter_.getAnchorElement();

    if (anchorEl) {
      this.adapter_.setMenuAnchorElement(anchorEl);
      this.adapter_.setMenuAnchorCorner(Corner.BOTTOM_START);
    }

    this.adapter_.setMenuWrapFocus(false); // Initially sync floating label

    this.updateLabel_();
  };
  /**
   * Notches the outline and floats the label when appropriate.
   */


  MDCSelectFoundation.prototype.updateLabel_ = function () {
    var optionHasValue = this.selectedIndex_ !== select_constants_numbers.UNSET_INDEX && this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).length > 0;

    if (this.adapter_.hasLabel()) {
      this.notchOutline(optionHasValue);

      if (!this.adapter_.hasClass(select_constants_cssClasses.FOCUSED)) {
        this.adapter_.floatLabel(optionHasValue);
      }
    }
  };
  /**
   * Unfocuses the select component.
   */


  MDCSelectFoundation.prototype.blur_ = function () {
    this.adapter_.removeClass(select_constants_cssClasses.FOCUSED);
    this.updateLabel_();
    this.adapter_.deactivateBottomLine();
    var isRequired = this.adapter_.hasClass(select_constants_cssClasses.REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  return MDCSelectFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ var select_foundation = (foundation_MDCSelectFoundation);
// CONCATENATED MODULE: ./node_modules/@material/select/helper-text/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var helper_text_constants_strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
};
var helper_text_constants_cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/helper-text/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCSelectHelperTextFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectHelperTextFoundation, _super);
    function MDCSelectHelperTextFoundation(adapter) {
        return _super.call(this, __assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
        get: function () {
            return helper_text_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
        get: function () {
            return helper_text_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     *  Sets the persistency of the helper text.
     */
    MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(helper_text_constants_strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the select validity.
     */
    MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(helper_text_constants_strings.ROLE, 'alert');
        }
        else {
            this.adapter_.removeAttr(helper_text_constants_strings.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(helper_text_constants_strings.ARIA_HIDDEN, 'true');
    };
    return MDCSelectHelperTextFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var helper_text_foundation = (foundation_MDCSelectHelperTextFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/helper-text/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCSelectHelperText = /** @class */ (function (_super) {
    __extends(MDCSelectHelperText, _super);
    function MDCSelectHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectHelperText.attachTo = function (root) {
        return new MDCSelectHelperText(root);
    };
    Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCSelectHelperTextFoundation(adapter);
    };
    return MDCSelectHelperText;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/icon/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var icon_constants_strings = {
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/icon/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_INTERACTION_EVENTS = ['click', 'keydown'];
var foundation_MDCSelectIconFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function () {
            return icon_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var _this = this;
        foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        }
        else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', icon_constants_strings.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter_.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var icon_foundation = (foundation_MDCSelectIconFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/select/icon/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCSelectIcon = /** @class */ (function (_super) {
    __extends(MDCSelectIcon, _super);
    function MDCSelectIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectIcon.attachTo = function (root) {
        return new MDCSelectIcon(root);
    };
    Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root_.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(foundation_MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCSelectIconFoundation(adapter);
    };
    return MDCSelectIcon;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./src/select/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */














var component_MDCSelect =
/** @class */
function (_super) {
  __extends(MDCSelect, _super);

  function MDCSelect() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelect.attachTo = function (root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, iconFactory, helperTextFactory) {
    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new component_MDCFloatingLabel(el);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new component_MDCLineRipple(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new component_MDCNotchedOutline(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new component_MDCSelectIcon(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new component_MDCSelectHelperText(el);
      };
    }

    this.selectAnchor_ = this.root_.querySelector(select_constants_strings.SELECT_ANCHOR_SELECTOR);
    this.selectedText_ = this.root_.querySelector(select_constants_strings.SELECTED_TEXT_SELECTOR);

    if (!this.selectedText_) {
      throw new Error('MDCSelect: Missing required element: The following selector must be present: ' + ("'" + select_constants_strings.SELECTED_TEXT_SELECTOR + "'"));
    }

    if (this.selectedText_.hasAttribute(select_constants_strings.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.selectedText_.getAttribute(select_constants_strings.ARIA_CONTROLS));

      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }

    var labelElement = this.root_.querySelector(select_constants_strings.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(select_constants_strings.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(select_constants_strings.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
    var leadingIcon = this.root_.querySelector(select_constants_strings.LEADING_ICON_SELECTOR);

    if (leadingIcon) {
      this.leadingIcon_ = iconFactory(leadingIcon);
    }

    if (!this.root_.classList.contains(select_constants_cssClasses.OUTLINED)) {
      this.ripple_ = this.createRipple_();
    }
  };
  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */


  MDCSelect.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleFocus_ = function () {
      return _this.foundation_.handleFocus();
    };

    this.handleBlur_ = function () {
      return _this.foundation_.handleBlur();
    };

    this.handleClick_ = function (evt) {
      _this.selectedText_.focus();

      _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleMenuItemAction_ = function (evt) {
      return _this.foundation_.handleMenuItemAction(evt.detail.index);
    };

    this.handleMenuOpened_ = function () {
      return _this.foundation_.handleMenuOpened();
    };

    this.handleMenuClose_ = function () {
      return _this.handleMenuClose();
    };

    this.handleMenuClosed_ = function () {
      return _this.foundation_.handleMenuClosed();
    };

    this.selectedText_.addEventListener('focus', this.handleFocus_);
    this.selectedText_.addEventListener('blur', this.handleBlur_);
    this.selectedText_.addEventListener('click', this.handleClick_);
    this.selectedText_.addEventListener('keydown', this.handleKeydown_);
  };
  /**
   * Handles setup for the menu.
   */


  MDCSelect.prototype.menuSetup = function (menuElement) {
    this.menuElement_ = menuElement;
    this.menu_ = this.menuElement_.menu_;
    this.menu_.listen("MDCMenu:close", this.handleMenuClose_);
    this.menu_.listen(menu_surface_constants_strings.CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.listen(menu_surface_constants_strings.OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.listen(menu_constants_strings.SELECTED_EVENT, this.handleMenuItemAction_);
    this.foundation_.initMenu();
  };

  MDCSelect.prototype.handleMenuClose = function () {
    this.menu_.open = false;
  };

  MDCSelect.prototype.destroy = function () {
    this.selectedText_.removeEventListener('change', this.handleChange_);
    this.selectedText_.removeEventListener('focus', this.handleFocus_);
    this.selectedText_.removeEventListener('blur', this.handleBlur_);
    this.selectedText_.removeEventListener('keydown', this.handleKeydown_);
    this.selectedText_.removeEventListener('click', this.handleClick_);
    this.menu_.unlisten("MDCMenu:close", this.handleMenuClose_);
    this.menu_.unlisten(menu_surface_constants_strings.CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.unlisten(menu_surface_constants_strings.OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.unlisten(menu_constants_strings.SELECTED_EVENT, this.handleMenuItemAction_);
    this.menu_.destroy();

    if (this.ripple_) {
      this.ripple_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex,
      /** closeMenu */
      true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "disabled", {
    get: function get() {
      return this.foundation_.getDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
    /**
     * Sets the text content of the helper text.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "valid", {
    /**
     * Checks if the select is in a valid state.
     */
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * Sets the current invalid state of the select.
     */
    set: function set(isValid) {
      this.foundation_.setValid(isValid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "required", {
    /**
     * Returns whether the select is required.
     */
    get: function get() {
      return this.foundation_.getRequired();
    },

    /**
     * Sets the control to the required state.
     */
    set: function set(isRequired) {
      this.foundation_.setRequired(isRequired);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Recomputes the outline SVG path for the outline element.
   */

  MDCSelect.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSelect.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    var adapter = __assign(__assign(__assign(__assign({}, this.getSelectAdapterMethods_()), this.getCommonAdapterMethods_()), this.getOutlineAdapterMethods_()), this.getLabelAdapterMethods_());

    return new foundation_MDCSelectFoundation(adapter, this.getFoundationMap_());
  };

  MDCSelect.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter({
      root_: this.selectAnchor_
    })), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.selectedText_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.selectedText_.removeEventListener(evtType, handler);
      }
    }); // tslint:enable:object-literal-sort-keys


    return new ripple_component_MDCRipple(this.selectAnchor_, new foundation_MDCRippleFoundation(adapter));
  };

  MDCSelect.prototype.getSelectAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getSelectedMenuItem: function getSelectedMenuItem() {
        return _this.menuElement_.querySelector(select_constants_strings.SELECTED_ITEM_SELECTOR);
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        return _this.selectedText_.textContent = text;
      },
      isSelectedTextFocused: function isSelectedTextFocused() {
        return document.activeElement === _this.selectedText_;
      },
      getSelectedTextAttr: function getSelectedTextAttr(attr) {
        return _this.selectedText_.getAttribute(attr);
      },
      setSelectedTextAttr: function setSelectedTextAttr(attr, value) {
        return _this.selectedText_.setAttribute(attr, value);
      },
      openMenu: function openMenu() {
        return _this.menu_.open = true;
      },
      closeMenu: function closeMenu() {
        return _this.menu_.open = false;
      },
      getAnchorElement: function getAnchorElement() {
        return _this.root_.querySelector(select_constants_strings.SELECT_ANCHOR_SELECTOR);
      },
      setMenuAnchorElement: function setMenuAnchorElement(anchorEl) {
        return _this.menu_.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function setMenuAnchorCorner(anchorCorner) {
        return _this.menu_.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function setMenuWrapFocus(wrapFocus) {
        return _this.menu_.wrapFocus = wrapFocus;
      },
      setAttributeAtIndex: function setAttributeAtIndex(index, attributeName, attributeValue) {
        return _this.menu_.items[index].setAttribute(attributeName, attributeValue);
      },
      removeAttributeAtIndex: function removeAttributeAtIndex(index, attributeName) {
        return _this.menu_.items[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: function focusMenuItemAtIndex(index) {
        return _this.menu_.items[index].focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.menu_.items.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return _this.menu_.items.map(function (el) {
          return el.getAttribute(select_constants_strings.VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return _this.menu_.items[index].textContent;
      },
      addClassAtIndex: function addClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.add(className);
      },
      removeClassAtIndex: function removeClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.remove(className);
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getCommonAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = _this.selectedIndex;

        _this.emit(select_constants_strings.CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getLabelAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasLabel: function hasLabel() {
        return !!_this.label_;
      },
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      }
    }; // tslint:enable:object-literal-sort-keys
  };
  /**
   * Calculates where the line ripple should start based on the x coordinate within the component.
   */


  MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  };

  MDCSelect.prototype.isTouchEvent_ = function (evt) {
    return Boolean(evt.touches);
  };
  /**
   * Returns a map of all subcomponents to subfoundations.
   */


  MDCSelect.prototype.getFoundationMap_ = function () {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
    };
  };

  return MDCSelect;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/select/custom-element.js











function select_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { select_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { select_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return select_custom_element_typeof(obj); }

function select_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function select_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function select_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) select_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) select_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function select_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) select_custom_element_setPrototypeOf(subClass, superClass); }

function select_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = select_custom_element_isNativeReflectConstruct(); return function () { var Super = select_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = select_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return select_custom_element_possibleConstructorReturn(this, result); }; }

function select_custom_element_possibleConstructorReturn(self, call) { if (call && (select_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return select_custom_element_assertThisInitialized(self); }

function select_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function select_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; select_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !select_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return select_custom_element_construct(Class, arguments, select_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return select_custom_element_setPrototypeOf(Wrapper, Class); }; return select_custom_element_wrapNativeSuper(Class); }

function select_custom_element_construct(Parent, args, Class) { if (select_custom_element_isNativeReflectConstruct()) { select_custom_element_construct = Reflect.construct; } else { select_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) select_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return select_custom_element_construct.apply(null, arguments); }

function select_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function select_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function select_custom_element_setPrototypeOf(o, p) { select_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return select_custom_element_setPrototypeOf(o, p); }

function select_custom_element_getPrototypeOf(o) { select_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return select_custom_element_getPrototypeOf(o); }




var custom_element_MdcSelect = /*#__PURE__*/function (_HTMLElement) {
  select_custom_element_inherits(MdcSelect, _HTMLElement);

  var _super = select_custom_element_createSuper(MdcSelect);

  select_custom_element_createClass(MdcSelect, [{
    key: "focus",
    value: function focus() {
      this.select_.selectedText_.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.select_.selectedText_.blur();
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return !!this.select_ ? this.select_.selectedIndex : this.selectedIndex_;
    },
    set: function set(selectedIndex) {
      this.selectedIndex_ = selectedIndex;
      if (!!this.select_) this.select_.selectedIndex = selectedIndex;
    }
  }, {
    key: "disabled",
    get: function get() {
      return !!this.select_ ? this.select_.disabled : this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;
      if (!!this.select_) this.select_.disabled = disabled;
    }
  }, {
    key: "valid",
    get: function get() {
      return !!this.select_ ? this.select_.valid : this.valid_;
    },
    set: function set(valid) {
      this.valid_ = valid;
      if (!!this.select_) this.select_.valid = valid;
    }
  }, {
    key: "required",
    get: function get() {
      return !!this.select_ ? this.select_.required : this.required_;
    },
    set: function set(required) {
      this.required_ = required;
      if (!!this.select_) this.select_.required = required;
    }
  }]);

  function MdcSelect() {
    var _this;

    select_custom_element_classCallCheck(this, MdcSelect);

    _this = _super.call(this);
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.valid_ = true;
    _this.required_ = false;
    _this.select_;
    return _this;
  }

  select_custom_element_createClass(MdcSelect, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.select_ = new component_MDCSelect(this);
      this.select_.disabled = this.disabled_;
      this.select_.valid = this.valid_;
      this.select_.required = this.required_;
    }
  }, {
    key: "menuSetup",
    value: function menuSetup(menuElement) {
      this.select_.menuSetup(menuElement);
      this.select_.selectedIndex = this.selectedIndex_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.select_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcSelect;
}( /*#__PURE__*/select_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-select", custom_element_MdcSelect);
// CONCATENATED MODULE: ./node_modules/@material/slider/constants.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var slider_constants_cssClasses = {
    ACTIVE: 'mdc-slider--active',
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    FOCUS: 'mdc-slider--focus',
    HAS_TRACK_MARKER: 'mdc-slider--display-markers',
    IN_TRANSIT: 'mdc-slider--in-transit',
    IS_DISCRETE: 'mdc-slider--discrete',
};
var slider_constants_strings = {
    ARIA_DISABLED: 'aria-disabled',
    ARIA_VALUEMAX: 'aria-valuemax',
    ARIA_VALUEMIN: 'aria-valuemin',
    ARIA_VALUENOW: 'aria-valuenow',
    CHANGE_EVENT: 'MDCSlider:change',
    INPUT_EVENT: 'MDCSlider:input',
    PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
    STEP_DATA_ATTR: 'data-step',
    THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
    TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
    TRACK_SELECTOR: '.mdc-slider__track',
};
var slider_constants_numbers = {
    PAGE_FACTOR: 4,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/slider/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
var MOVE_EVENT_MAP = {
    mousedown: 'mousemove',
    pointerdown: 'pointermove',
    touchstart: 'touchmove',
};
var KEY_IDS = {
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    END: 'End',
    HOME: 'Home',
    PAGE_DOWN: 'PageDown',
    PAGE_UP: 'PageUp',
};
var foundation_MDCSliderFoundation = /** @class */ (function (_super) {
    __extends(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
        /**
         * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
         * because those could be valid tabindices set by the client code.
         */
        _this.savedTabIndex_ = NaN;
        _this.active_ = false;
        _this.inTransit_ = false;
        _this.isDiscrete_ = false;
        _this.hasTrackMarker_ = false;
        _this.handlingThumbTargetEvt_ = false;
        _this.min_ = 0;
        _this.max_ = 100;
        _this.step_ = 0;
        _this.value_ = 0;
        _this.disabled_ = false;
        _this.preventFocusState_ = false;
        _this.thumbContainerPointerHandler_ = function () { return _this.handlingThumbTargetEvt_ = true; };
        _this.interactionStartHandler_ = function (evt) { return _this.handleDown_(evt); };
        _this.keydownHandler_ = function (evt) { return _this.handleKeydown_(evt); };
        _this.focusHandler_ = function () { return _this.handleFocus_(); };
        _this.blurHandler_ = function () { return _this.handleBlur_(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "cssClasses", {
        get: function () {
            return slider_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "strings", {
        get: function () {
            return slider_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "numbers", {
        get: function () {
            return slider_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getAttribute: function () { return null; },
                setAttribute: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                getTabIndex: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerThumbContainerInteractionHandler: function () { return undefined; },
                deregisterThumbContainerInteractionHandler: function () { return undefined; },
                registerBodyInteractionHandler: function () { return undefined; },
                deregisterBodyInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                notifyInput: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setThumbContainerStyleProperty: function () { return undefined; },
                setTrackStyleProperty: function () { return undefined; },
                setMarkerValue: function () { return undefined; },
                setTrackMarkers: function () { return undefined; },
                isRTL: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDiscrete_ = this.adapter_.hasClass(slider_constants_cssClasses.IS_DISCRETE);
        this.hasTrackMarker_ = this.adapter_.hasClass(slider_constants_cssClasses.HAS_TRACK_MARKER);
        DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);
            _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
        });
        this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
        this.adapter_.registerResizeHandler(this.resizeHandler_);
        this.layout();
        // At last step, provide a reasonable default value to discrete slider
        if (this.isDiscrete_ && this.getStep() === 0) {
            this.step_ = 1;
        }
    };
    MDCSliderFoundation.prototype.destroy = function () {
        var _this = this;
        DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);
            _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
        });
        this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    };
    MDCSliderFoundation.prototype.setupTrackMarker = function () {
        if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
            this.adapter_.setTrackMarkers(this.getStep(), this.getMax(), this.getMin());
        }
    };
    MDCSliderFoundation.prototype.layout = function () {
        this.rect_ = this.adapter_.computeBoundingRect();
        this.updateUIForCurrentValue_();
    };
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value_;
    };
    MDCSliderFoundation.prototype.setValue = function (value) {
        this.setValue_(value, false);
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max_;
    };
    MDCSliderFoundation.prototype.setMax = function (max) {
        if (max < this.min_) {
            throw new Error('Cannot set max to be less than the slider\'s minimum value');
        }
        this.max_ = max;
        this.setValue_(this.value_, false, true);
        this.adapter_.setAttribute(slider_constants_strings.ARIA_VALUEMAX, String(this.max_));
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min_;
    };
    MDCSliderFoundation.prototype.setMin = function (min) {
        if (min > this.max_) {
            throw new Error('Cannot set min to be greater than the slider\'s maximum value');
        }
        this.min_ = min;
        this.setValue_(this.value_, false, true);
        this.adapter_.setAttribute(slider_constants_strings.ARIA_VALUEMIN, String(this.min_));
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step_;
    };
    MDCSliderFoundation.prototype.setStep = function (step) {
        if (step < 0) {
            throw new Error('Step cannot be set to a negative number');
        }
        if (this.isDiscrete_ && (typeof (step) !== 'number' || step < 1)) {
            step = 1;
        }
        this.step_ = step;
        this.setValue_(this.value_, false, true);
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.isDisabled = function () {
        return this.disabled_;
    };
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.disabled_ = disabled;
        this.toggleClass_(slider_constants_cssClasses.DISABLED, this.disabled_);
        if (this.disabled_) {
            this.savedTabIndex_ = this.adapter_.getTabIndex();
            this.adapter_.setAttribute(slider_constants_strings.ARIA_DISABLED, 'true');
            this.adapter_.removeAttribute('tabindex');
        }
        else {
            this.adapter_.removeAttribute(slider_constants_strings.ARIA_DISABLED);
            if (!isNaN(this.savedTabIndex_)) {
                this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
            }
        }
    };
    /**
     * Called when the user starts interacting with the slider
     */
    MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
        var _this = this;
        if (this.disabled_) {
            return;
        }
        this.preventFocusState_ = true;
        this.setInTransit_(!this.handlingThumbTargetEvt_);
        this.handlingThumbTargetEvt_ = false;
        this.setActive_(true);
        var moveHandler = function (moveEvent) {
            _this.handleMove_(moveEvent);
        };
        var moveEventType = MOVE_EVENT_MAP[downEvent.type];
        // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
        // do not always fire these consistently in pairs.
        // (See https://github.com/material-components/material-components-web/issues/1192)
        var upHandler = function () {
            _this.handleUp_();
            _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);
            UP_EVENTS.forEach(function (evtName) { return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler); });
        };
        this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
        UP_EVENTS.forEach(function (evtName) { return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler); });
        this.setValueFromEvt_(downEvent);
    };
    /**
     * Called when the user moves the slider
     */
    MDCSliderFoundation.prototype.handleMove_ = function (evt) {
        evt.preventDefault();
        this.setValueFromEvt_(evt);
    };
    /**
     * Called when the user's interaction with the slider ends
     */
    MDCSliderFoundation.prototype.handleUp_ = function () {
        this.setActive_(false);
        this.adapter_.notifyChange();
    };
    /**
     * Returns the pageX of the event
     */
    MDCSliderFoundation.prototype.getPageX_ = function (evt) {
        if (evt.targetTouches && evt.targetTouches.length > 0) {
            return evt.targetTouches[0].pageX;
        }
        return evt.pageX;
    };
    /**
     * Sets the slider value from an event
     */
    MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
        var pageX = this.getPageX_(evt);
        var value = this.computeValueFromPageX_(pageX);
        this.setValue_(value, true);
    };
    /**
     * Computes the new value from the pageX position
     */
    MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
        var _a = this, max = _a.max_, min = _a.min_;
        var xPos = pageX - this.rect_.left;
        var pctComplete = xPos / this.rect_.width;
        if (this.adapter_.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        return min + pctComplete * (max - min);
    };
    /**
     * Handles keydown events
     */
    MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
        var keyId = this.getKeyId_(evt);
        var value = this.getValueForKeyId_(keyId);
        if (isNaN(value)) {
            return;
        }
        // Prevent page from scrolling due to key presses that would normally scroll the page
        evt.preventDefault();
        this.adapter_.addClass(slider_constants_cssClasses.FOCUS);
        this.setValue_(value, true);
        this.adapter_.notifyChange();
    };
    /**
     * Returns the computed name of the event
     */
    MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
        if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
            return KEY_IDS.ARROW_LEFT;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
            return KEY_IDS.ARROW_RIGHT;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
            return KEY_IDS.ARROW_UP;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
            return KEY_IDS.ARROW_DOWN;
        }
        if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
            return KEY_IDS.HOME;
        }
        if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
            return KEY_IDS.END;
        }
        if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
            return KEY_IDS.PAGE_UP;
        }
        if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
            return KEY_IDS.PAGE_DOWN;
        }
        return '';
    };
    /**
     * Computes the value given a keyboard key ID
     */
    MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
        var _a = this, max = _a.max_, min = _a.min_, step = _a.step_;
        var delta = step || (max - min) / 100;
        var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
        if (valueNeedsToBeFlipped) {
            delta = -delta;
        }
        switch (keyId) {
            case KEY_IDS.ARROW_LEFT:
            case KEY_IDS.ARROW_DOWN:
                return this.value_ - delta;
            case KEY_IDS.ARROW_RIGHT:
            case KEY_IDS.ARROW_UP:
                return this.value_ + delta;
            case KEY_IDS.HOME:
                return this.min_;
            case KEY_IDS.END:
                return this.max_;
            case KEY_IDS.PAGE_UP:
                return this.value_ + delta * slider_constants_numbers.PAGE_FACTOR;
            case KEY_IDS.PAGE_DOWN:
                return this.value_ - delta * slider_constants_numbers.PAGE_FACTOR;
            default:
                return NaN;
        }
    };
    MDCSliderFoundation.prototype.handleFocus_ = function () {
        if (this.preventFocusState_) {
            return;
        }
        this.adapter_.addClass(slider_constants_cssClasses.FOCUS);
    };
    MDCSliderFoundation.prototype.handleBlur_ = function () {
        this.preventFocusState_ = false;
        this.adapter_.removeClass(slider_constants_cssClasses.FOCUS);
    };
    /**
     * Sets the value of the slider
     */
    MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
        if (force === void 0) { force = false; }
        if (value === this.value_ && !force) {
            return;
        }
        var _a = this, min = _a.min_, max = _a.max_;
        var valueSetToBoundary = value === min || value === max;
        if (this.step_ && !valueSetToBoundary) {
            value = this.quantize_(value);
        }
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        this.value_ = value;
        this.adapter_.setAttribute(slider_constants_strings.ARIA_VALUENOW, String(this.value_));
        this.updateUIForCurrentValue_();
        if (shouldFireInput) {
            this.adapter_.notifyInput();
            if (this.isDiscrete_) {
                this.adapter_.setMarkerValue(value);
            }
        }
    };
    /**
     * Calculates the quantized value
     */
    MDCSliderFoundation.prototype.quantize_ = function (value) {
        var numSteps = Math.round(value / this.step_);
        return numSteps * this.step_;
    };
    MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
        var _this = this;
        var _a = this, max = _a.max_, min = _a.min_, value = _a.value_;
        var pctComplete = (value - min) / (max - min);
        var translatePx = pctComplete * this.rect_.width;
        if (this.adapter_.isRTL()) {
            translatePx = this.rect_.width - translatePx;
        }
        var transformProp = getCorrectPropertyName(window, 'transform');
        var transitionendEvtName = getCorrectEventName(window, 'transitionend');
        if (this.inTransit_) {
            var onTransitionEnd_1 = function () {
                _this.setInTransit_(false);
                _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
            };
            this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
        }
        requestAnimationFrame(function () {
            // NOTE(traviskaufman): It would be nice to use calc() here,
            // but IE cannot handle calcs in transforms correctly.
            // See: https://goo.gl/NC2itk
            // Also note that the -50% offset is used to center the slider thumb.
            _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");
            _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
        });
    };
    /**
     * Toggles the active state of the slider
     */
    MDCSliderFoundation.prototype.setActive_ = function (active) {
        this.active_ = active;
        this.toggleClass_(slider_constants_cssClasses.ACTIVE, this.active_);
    };
    /**
     * Toggles the inTransit state of the slider
     */
    MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
        this.inTransit_ = inTransit;
        this.toggleClass_(slider_constants_cssClasses.IN_TRANSIT, this.inTransit_);
    };
    /**
     * Conditionally adds or removes a class based on shouldBePresent
     */
    MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
        if (shouldBePresent) {
            this.adapter_.addClass(className);
        }
        else {
            this.adapter_.removeClass(className);
        }
    };
    return MDCSliderFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var slider_foundation = (foundation_MDCSliderFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/slider/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCSlider =
/** @class */
function (_super) {
  __extends(MDCSlider, _super);

  function MDCSlider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlider.attachTo = function (root) {
    return new MDCSlider(root);
  };

  Object.defineProperty(MDCSlider.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "min", {
    get: function get() {
      return this.foundation_.getMin();
    },
    set: function set(min) {
      this.foundation_.setMin(min);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "max", {
    get: function get() {
      return this.foundation_.getMax();
    },
    set: function set(max) {
      this.foundation_.setMax(max);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "step", {
    get: function get() {
      return this.foundation_.getStep();
    },
    set: function set(step) {
      this.foundation_.setStep(step);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSlider.prototype.initialize = function () {
    this.thumbContainer_ = this.root_.querySelector(slider_constants_strings.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(slider_constants_strings.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(slider_constants_strings.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(slider_constants_strings.TRACK_MARKER_CONTAINER_SELECTOR);
  };

  MDCSlider.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getAttribute: function getAttribute(name) {
        return _this.root_.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this.root_.setAttribute(name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this.root_.removeAttribute(name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.root_.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this.root_.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.removeEventListener(evtType, handler, applyPassive());
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(evtType, handler) {
        return document.body.addEventListener(evtType, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(evtType, handler) {
        return document.body.removeEventListener(evtType, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        return _this.emit(slider_constants_strings.INPUT_EVENT, _this);
      },
      notifyChange: function notifyChange() {
        return _this.emit(slider_constants_strings.CHANGE_EVENT, _this);
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        return _this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        return _this.pinValueMarker_.innerText = value.toLocaleString();
      },
      setTrackMarkers: function setTrackMarkers(step, max, min) {
        var stepStr = step.toLocaleString();
        var maxStr = max.toLocaleString();
        var minStr = min.toLocaleString(); // keep calculation in css for better rounding/subpixel behavior

        var markerAmount = "((" + maxStr + " - " + minStr + ") / " + stepStr + ")";
        var markerWidth = "2px";
        var markerBkgdImage = "linear-gradient(to right, currentColor " + markerWidth + ", transparent 0)";
        var markerBkgdLayout = "0 center / calc((100% - " + markerWidth + ") / " + markerAmount + ") 100% repeat-x";
        var markerBkgdShorthand = markerBkgdImage + " " + markerBkgdLayout;

        _this.trackMarkerContainer_.style.setProperty('background', markerBkgdShorthand);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this.root_).direction === 'rtl';
      }
    }; // tslint:enable:object-literal-sort-keys

    return new foundation_MDCSliderFoundation(adapter);
  };

  MDCSlider.prototype.initialSyncWithDOM = function () {
    var origValueNow = this.parseFloat_(this.root_.getAttribute(slider_constants_strings.ARIA_VALUENOW), this.value);
    var min = this.parseFloat_(this.root_.getAttribute(slider_constants_strings.ARIA_VALUEMIN), this.min);
    var max = this.parseFloat_(this.root_.getAttribute(slider_constants_strings.ARIA_VALUEMAX), this.max); // min and max need to be set in the right order to avoid throwing an error
    // when the new min is greater than the default max.

    if (min >= this.max) {
      this.max = max;
      this.min = min;
    } else {
      this.min = min;
      this.max = max;
    }

    this.step = this.parseFloat_(this.root_.getAttribute(slider_constants_strings.STEP_DATA_ATTR), this.step);
    this.value = origValueNow;
    this.disabled = this.root_.hasAttribute(slider_constants_strings.ARIA_DISABLED) && this.root_.getAttribute(slider_constants_strings.ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  };

  MDCSlider.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSlider.prototype.stepUp = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value += amount;
  };

  MDCSlider.prototype.stepDown = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value -= amount;
  };

  MDCSlider.prototype.parseFloat_ = function (str, defaultValue) {
    var num = parseFloat(str); // tslint:disable-line:ban

    var isNumeric = typeof num === 'number' && isFinite(num);
    return isNumeric ? num : defaultValue;
  };

  return MDCSlider;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/slider/custom-element.js











function slider_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { slider_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { slider_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return slider_custom_element_typeof(obj); }

function slider_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function slider_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function slider_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) slider_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) slider_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function slider_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) slider_custom_element_setPrototypeOf(subClass, superClass); }

function slider_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = slider_custom_element_isNativeReflectConstruct(); return function () { var Super = slider_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = slider_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return slider_custom_element_possibleConstructorReturn(this, result); }; }

function slider_custom_element_possibleConstructorReturn(self, call) { if (call && (slider_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return slider_custom_element_assertThisInitialized(self); }

function slider_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function slider_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; slider_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !slider_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return slider_custom_element_construct(Class, arguments, slider_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return slider_custom_element_setPrototypeOf(Wrapper, Class); }; return slider_custom_element_wrapNativeSuper(Class); }

function slider_custom_element_construct(Parent, args, Class) { if (slider_custom_element_isNativeReflectConstruct()) { slider_custom_element_construct = Reflect.construct; } else { slider_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) slider_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return slider_custom_element_construct.apply(null, arguments); }

function slider_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function slider_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function slider_custom_element_setPrototypeOf(o, p) { slider_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return slider_custom_element_setPrototypeOf(o, p); }

function slider_custom_element_getPrototypeOf(o) { slider_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return slider_custom_element_getPrototypeOf(o); }




var custom_element_MdcSlider = /*#__PURE__*/function (_HTMLElement) {
  slider_custom_element_inherits(MdcSlider, _HTMLElement);

  var _super = slider_custom_element_createSuper(MdcSlider);

  slider_custom_element_createClass(MdcSlider, [{
    key: "value",
    get: function get() {
      if (!!this.slider_) {
        return this.slider_.value;
      } else {
        return this.value_;
      }
    },
    set: function set(value) {
      this.value_ = value;

      if (!!this.slider_) {
        this.slider_.value = value;
      }
    }
  }, {
    key: "min",
    get: function get() {
      return this.min_;
    },
    set: function set(min) {
      this.min_ = min;

      if (!!this.slider_) {
        this.slider_.min = min;
      }
    }
  }, {
    key: "max",
    get: function get() {
      return this.max_;
    },
    set: function set(max) {
      this.max_ = max;

      if (!!this.slider_) {
        this.slider_.max = max;
      }
    }
  }, {
    key: "step",
    get: function get() {
      return this.step_;
    },
    set: function set(step) {
      this.step_ = step;

      if (!!this.slider_) {
        this.slider_.step = step;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;

      if (!!this.slider_) {
        this.slider_.disabled = disabled;
      }
    }
  }]);

  function MdcSlider() {
    var _this;

    slider_custom_element_classCallCheck(this, MdcSlider);

    _this = _super.call(this);
    _this.value_ = 0;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.disabled_ = false;
    _this.slider_;
    return _this;
  }

  slider_custom_element_createClass(MdcSlider, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.slider_ = new component_MDCSlider(this);
      this.slider_.value = this.value_;
      this.slider_.min = this.min_;
      this.slider_.max = this.max_;
      this.slider_.step = this.step_;
      this.slider_.disabled = this.disabled_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.slider_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcSlider;
}( /*#__PURE__*/slider_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-slider", custom_element_MdcSlider);
// CONCATENATED MODULE: ./node_modules/@material/snackbar/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var snackbar_constants_cssClasses = {
    CLOSING: 'mdc-snackbar--closing',
    OPEN: 'mdc-snackbar--open',
    OPENING: 'mdc-snackbar--opening',
};
var snackbar_constants_strings = {
    ACTION_SELECTOR: '.mdc-snackbar__action',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    OPENED_EVENT: 'MDCSnackbar:opened',
    OPENING_EVENT: 'MDCSnackbar:opening',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    SURFACE_SELECTOR: '.mdc-snackbar__surface',
};
var snackbar_constants_numbers = {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    INDETERMINATE: -1,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/snackbar/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_OPENING = snackbar_constants_cssClasses.OPENING, foundation_OPEN = snackbar_constants_cssClasses.OPEN, foundation_CLOSING = snackbar_constants_cssClasses.CLOSING;
var REASON_ACTION = snackbar_constants_strings.REASON_ACTION, REASON_DISMISS = snackbar_constants_strings.REASON_DISMISS;
var foundation_MDCSnackbarFoundation = /** @class */ (function (_super) {
    __extends(MDCSnackbarFoundation, _super);
    function MDCSnackbarFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.autoDismissTimer_ = 0;
        _this.autoDismissTimeoutMs_ = snackbar_constants_numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
        _this.closeOnEscape_ = true;
        return _this;
    }
    Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
        get: function () {
            return snackbar_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "strings", {
        get: function () {
            return snackbar_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "numbers", {
        get: function () {
            return snackbar_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                announce: function () { return undefined; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                removeClass: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCSnackbarFoundation.prototype.destroy = function () {
        this.clearAutoDismissTimer_();
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = 0;
        this.adapter_.removeClass(foundation_OPENING);
        this.adapter_.removeClass(foundation_OPEN);
        this.adapter_.removeClass(foundation_CLOSING);
    };
    MDCSnackbarFoundation.prototype.open = function () {
        var _this = this;
        this.clearAutoDismissTimer_();
        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.removeClass(foundation_CLOSING);
        this.adapter_.addClass(foundation_OPENING);
        this.adapter_.announce();
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(foundation_OPEN);
            _this.animationTimer_ = setTimeout(function () {
                var timeoutMs = _this.getTimeoutMs();
                _this.handleAnimationTimerEnd_();
                _this.adapter_.notifyOpened();
                if (timeoutMs !== snackbar_constants_numbers.INDETERMINATE) {
                    _this.autoDismissTimer_ = setTimeout(function () {
                        _this.close(REASON_DISMISS);
                    }, timeoutMs);
                }
            }, snackbar_constants_numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MDCSnackbarFoundation.prototype.close = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = ''; }
        if (!this.isOpen_) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        this.clearAutoDismissTimer_();
        this.isOpen_ = false;
        this.adapter_.notifyClosing(reason);
        this.adapter_.addClass(snackbar_constants_cssClasses.CLOSING);
        this.adapter_.removeClass(snackbar_constants_cssClasses.OPEN);
        this.adapter_.removeClass(snackbar_constants_cssClasses.OPENING);
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
            _this.handleAnimationTimerEnd_();
            _this.adapter_.notifyClosed(reason);
        }, snackbar_constants_numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    };
    MDCSnackbarFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs_;
    };
    MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
        // Use shorter variable names to make the code more readable
        var minValue = snackbar_constants_numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
        var maxValue = snackbar_constants_numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
        var indeterminateValue = snackbar_constants_numbers.INDETERMINATE;
        if (timeoutMs === snackbar_constants_numbers.INDETERMINATE || (timeoutMs <= maxValue && timeoutMs >= minValue)) {
            this.autoDismissTimeoutMs_ = timeoutMs;
        }
        else {
            throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
        }
    };
    MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape_;
    };
    MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
        this.closeOnEscape_ = closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
        var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscapeKey && this.getCloseOnEscape()) {
            this.close(REASON_DISMISS);
        }
    };
    MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
        this.close(REASON_ACTION);
    };
    MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
        this.close(REASON_DISMISS);
    };
    MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
        clearTimeout(this.autoDismissTimer_);
        this.autoDismissTimer_ = 0;
    };
    MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(snackbar_constants_cssClasses.OPENING);
        this.adapter_.removeClass(snackbar_constants_cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    return MDCSnackbarFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var snackbar_foundation = (foundation_MDCSnackbarFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/snackbar/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var SURFACE_SELECTOR = snackbar_constants_strings.SURFACE_SELECTOR,
    component_LABEL_SELECTOR = snackbar_constants_strings.LABEL_SELECTOR,
    ACTION_SELECTOR = snackbar_constants_strings.ACTION_SELECTOR,
    DISMISS_SELECTOR = snackbar_constants_strings.DISMISS_SELECTOR,
    OPENING_EVENT = snackbar_constants_strings.OPENING_EVENT,
    OPENED_EVENT = snackbar_constants_strings.OPENED_EVENT,
    CLOSING_EVENT = snackbar_constants_strings.CLOSING_EVENT,
    CLOSED_EVENT = snackbar_constants_strings.CLOSED_EVENT;

var component_MDCSnackbar =
/** @class */
function (_super) {
  __extends(MDCSnackbar, _super);

  function MDCSnackbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSnackbar.attachTo = function (root) {
    return new MDCSnackbar(root);
  };

  MDCSnackbar.prototype.initialize = function () {};

  MDCSnackbar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
    this.labelEl_ = this.root_.querySelector(component_LABEL_SELECTOR);
    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.handleSurfaceClick_ = function (evt) {
      var target = evt.target;

      if (_this.isActionButton_(target)) {
        _this.foundation_.handleActionButtonClick(evt);
      } else if (_this.isActionIcon_(target)) {
        _this.foundation_.handleActionIconClick(evt);
      }
    };

    this.registerKeyDownHandler_(this.handleKeyDown_);
    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.deregisterKeyDownHandler_(this.handleKeyDown_);
    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.open = function () {
    this.foundation_.open();
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbar.prototype.close = function (reason) {
    if (reason === void 0) {
      reason = '';
    }

    this.foundation_.close(reason);
  };

  MDCSnackbar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      announce: function announce() {},
      notifyClosed: function notifyClosed(reason) {
        return _this.emit(CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyClosing: function notifyClosing(reason) {
        return _this.emit(CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyOpened: function notifyOpened() {
        return _this.emit(OPENED_EVENT, {});
      },
      notifyOpening: function notifyOpening() {
        return _this.emit(OPENING_EVENT, {});
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      }
    };
    return new foundation_MDCSnackbarFoundation(adapter);
  };

  Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
    get: function get() {
      return this.foundation_.getTimeoutMs();
    },
    set: function set(timeoutMs) {
      this.foundation_.setTimeoutMs(timeoutMs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
    get: function get() {
      return this.foundation_.getCloseOnEscape();
    },
    set: function set(closeOnEscape) {
      this.foundation_.setCloseOnEscape(closeOnEscape);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
    get: function get() {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "labelText", {
    get: function get() {
      // This property only returns null if the node is a document, DOCTYPE, or notation.
      // On Element nodes, it always returns a string.
      return this.labelEl_.textContent;
    },
    set: function set(labelText) {
      this.labelEl_.textContent = labelText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
    get: function get() {
      return this.actionEl_.textContent;
    },
    set: function set(actionButtonText) {
      this.actionEl_.textContent = actionButtonText;
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbar.prototype.registerKeyDownHandler_ = function (handler) {
    this.listen('keydown', handler);
  };

  MDCSnackbar.prototype.deregisterKeyDownHandler_ = function (handler) {
    this.unlisten('keydown', handler);
  };

  MDCSnackbar.prototype.registerSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.addEventListener('click', handler);
  };

  MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.removeEventListener('click', handler);
  };

  MDCSnackbar.prototype.isActionButton_ = function (target) {
    return Boolean(closest(target, ACTION_SELECTOR));
  };

  MDCSnackbar.prototype.isActionIcon_ = function (target) {
    return Boolean(closest(target, DISMISS_SELECTOR));
  };

  return MDCSnackbar;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/snackbar/custom-element.js











function snackbar_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { snackbar_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { snackbar_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return snackbar_custom_element_typeof(obj); }

function snackbar_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function snackbar_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function snackbar_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) snackbar_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) snackbar_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function snackbar_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) snackbar_custom_element_setPrototypeOf(subClass, superClass); }

function snackbar_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = snackbar_custom_element_isNativeReflectConstruct(); return function () { var Super = snackbar_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = snackbar_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return snackbar_custom_element_possibleConstructorReturn(this, result); }; }

function snackbar_custom_element_possibleConstructorReturn(self, call) { if (call && (snackbar_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return snackbar_custom_element_assertThisInitialized(self); }

function snackbar_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function snackbar_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; snackbar_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !snackbar_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return snackbar_custom_element_construct(Class, arguments, snackbar_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return snackbar_custom_element_setPrototypeOf(Wrapper, Class); }; return snackbar_custom_element_wrapNativeSuper(Class); }

function snackbar_custom_element_construct(Parent, args, Class) { if (snackbar_custom_element_isNativeReflectConstruct()) { snackbar_custom_element_construct = Reflect.construct; } else { snackbar_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) snackbar_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return snackbar_custom_element_construct.apply(null, arguments); }

function snackbar_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function snackbar_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function snackbar_custom_element_setPrototypeOf(o, p) { snackbar_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return snackbar_custom_element_setPrototypeOf(o, p); }

function snackbar_custom_element_getPrototypeOf(o) { snackbar_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return snackbar_custom_element_getPrototypeOf(o); }




var custom_element_MdcSnackbar = /*#__PURE__*/function (_HTMLElement) {
  snackbar_custom_element_inherits(MdcSnackbar, _HTMLElement);

  var _super = snackbar_custom_element_createSuper(MdcSnackbar);

  snackbar_custom_element_createClass(MdcSnackbar, [{
    key: "closeOnEscape",
    get: function get() {
      return this.closeOnEscape_;
    },
    set: function set(closeOnEscape) {
      this.closeOnEscape_ = closeOnEscape;

      if (!!this.snackbar_) {
        this.snackbar_.closeOnEscape = closeOnEscape;
      }
    }
  }, {
    key: "timeoutMs",
    get: function get() {
      return this.timeoutMs_;
    },
    set: function set(timeoutMs) {
      this.timeoutMs_ = timeoutMs;

      if (!!this.snackbar_) {
        this.snackbar_.timeoutMs = timeoutMs;
      }
    }
  }, {
    key: "messageId",
    get: function get() {
      return this.messageId_;
    },
    set: function set(messageId) {
      this.messageId_ = messageId;

      if (!!this.snackbar_ && messageId !== -1) {
        this.snackbar_.open();
      }
    }
  }]);

  function MdcSnackbar() {
    var _this;

    snackbar_custom_element_classCallCheck(this, MdcSnackbar);

    _this = _super.call(this);
    _this.closeOnEscape_ = false;
    _this.timeoutMs_ = 5000;
    _this.messageId_ = -1;
    _this.snackbar_;
    return _this;
  }

  snackbar_custom_element_createClass(MdcSnackbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.snackbar_ = new component_MDCSnackbar(this);
      this.snackbar_.closeOnEscape = this.closeOnEscape_;
      this.snackbar_.timeoutMs = this.timeoutMs_;

      if (this.messageId_ !== -1) {
        this.snackbar_.open();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.snackbar_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcSnackbar;
}( /*#__PURE__*/snackbar_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-snackbar", custom_element_MdcSnackbar);
// CONCATENATED MODULE: ./node_modules/@material/switch/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** CSS classes used by the switch. */
var switch_constants_cssClasses = {
    /** Class used for a switch that is in the "checked" (on) position. */
    CHECKED: 'mdc-switch--checked',
    /** Class used for a switch that is disabled. */
    DISABLED: 'mdc-switch--disabled',
};
/** String constants used by the switch. */
var switch_constants_strings = {
    /** A CSS selector used to locate the native HTML control for the switch.  */
    NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
    /** A CSS selector used to locate the ripple surface element for the switch. */
    RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/switch/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCSwitchFoundation = /** @class */ (function (_super) {
    __extends(MDCSwitchFoundation, _super);
    function MDCSwitchFoundation(adapter) {
        return _super.call(this, __assign({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCSwitchFoundation, "strings", {
        /** The string constants used by the switch. */
        get: function () {
            return switch_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
        /** The CSS classes used by the switch. */
        get: function () {
            return switch_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
        /** The default Adapter for the switch. */
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlChecked: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the checked state of the switch. */
    MDCSwitchFoundation.prototype.setChecked = function (checked) {
        this.adapter_.setNativeControlChecked(checked);
        this.updateCheckedStyling_(checked);
    };
    /** Sets the disabled state of the switch. */
    MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(switch_constants_cssClasses.DISABLED);
        }
        else {
            this.adapter_.removeClass(switch_constants_cssClasses.DISABLED);
        }
    };
    /** Handles the change event for the switch native control. */
    MDCSwitchFoundation.prototype.handleChange = function (evt) {
        var nativeControl = evt.target;
        this.updateCheckedStyling_(nativeControl.checked);
    };
    /** Updates the styling of the switch based on its checked state. */
    MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
        if (checked) {
            this.adapter_.addClass(switch_constants_cssClasses.CHECKED);
        }
        else {
            this.adapter_.removeClass(switch_constants_cssClasses.CHECKED);
        }
    };
    return MDCSwitchFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var switch_foundation = (foundation_MDCSwitchFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/switch/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var component_MDCSwitch =
/** @class */
function (_super) {
  __extends(MDCSwitch, _super);

  function MDCSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCSwitch.attachTo = function (root) {
    return new MDCSwitch(root);
  };

  MDCSwitch.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.ripple_.destroy();
  };

  MDCSwitch.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNativeControlChecked: function setNativeControlChecked(checked) {
        return _this.nativeControl_.checked = checked;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new foundation_MDCSwitchFoundation(adapter);
  };

  Object.defineProperty(MDCSwitch.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
      this.foundation_.handleChange({
        target: this.nativeControl_
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSwitch.prototype.createRipple_ = function () {
    var _this = this;

    var RIPPLE_SURFACE_SELECTOR = foundation_MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR;
    var rippleSurface = this.root_.querySelector(RIPPLE_SURFACE_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var adapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter(this)), {
      addClass: function addClass(className) {
        return rippleSurface.classList.add(className);
      },
      computeBoundingRect: function computeBoundingRect() {
        return rippleSurface.getBoundingClientRect();
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        _this.nativeControl_.removeEventListener(evtType, handler, applyPassive());
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.nativeControl_, ':active');
      },
      isUnbounded: function isUnbounded() {
        return true;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        _this.nativeControl_.addEventListener(evtType, handler, applyPassive());
      },
      removeClass: function removeClass(className) {
        return rippleSurface.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        rippleSurface.style.setProperty(varName, value);
      }
    });

    return new ripple_component_MDCRipple(this.root_, new foundation_MDCRippleFoundation(adapter));
  };

  Object.defineProperty(MDCSwitch.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = foundation_MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return MDCSwitch;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/switch/custom-element.js











function switch_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { switch_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { switch_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return switch_custom_element_typeof(obj); }

function switch_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function switch_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function switch_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) switch_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) switch_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function switch_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) switch_custom_element_setPrototypeOf(subClass, superClass); }

function switch_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = switch_custom_element_isNativeReflectConstruct(); return function () { var Super = switch_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = switch_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return switch_custom_element_possibleConstructorReturn(this, result); }; }

function switch_custom_element_possibleConstructorReturn(self, call) { if (call && (switch_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return switch_custom_element_assertThisInitialized(self); }

function switch_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function switch_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; switch_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !switch_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return switch_custom_element_construct(Class, arguments, switch_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return switch_custom_element_setPrototypeOf(Wrapper, Class); }; return switch_custom_element_wrapNativeSuper(Class); }

function switch_custom_element_construct(Parent, args, Class) { if (switch_custom_element_isNativeReflectConstruct()) { switch_custom_element_construct = Reflect.construct; } else { switch_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) switch_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return switch_custom_element_construct.apply(null, arguments); }

function switch_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function switch_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function switch_custom_element_setPrototypeOf(o, p) { switch_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return switch_custom_element_setPrototypeOf(o, p); }

function switch_custom_element_getPrototypeOf(o) { switch_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return switch_custom_element_getPrototypeOf(o); }




var custom_element_MdcSwitch = /*#__PURE__*/function (_HTMLElement) {
  switch_custom_element_inherits(MdcSwitch, _HTMLElement);

  var _super = switch_custom_element_createSuper(MdcSwitch);

  switch_custom_element_createClass(MdcSwitch, [{
    key: "focus",
    value: function focus() {
      this.switch_.nativeControl_.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.switch_.nativeControl_.blur();
    }
  }, {
    key: "checked",
    get: function get() {
      return this.checked_;
    },
    set: function set(checked) {
      this.checked_ = checked;

      if (!!this.switch_) {
        this.switch_.checked = checked;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;

      if (!!this.switch_) {
        this.switch_.disabled = disabled;
      }
    }
  }]);

  function MdcSwitch() {
    var _this;

    switch_custom_element_classCallCheck(this, MdcSwitch);

    _this = _super.call(this);
    _this.checked_ = false;
    _this.disabled_ = false;
    _this.switch_;
    return _this;
  }

  switch_custom_element_createClass(MdcSwitch, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.switch_ = new component_MDCSwitch(this);
      this.switch_.checked = this.checked_;
      this.switch_.disabled = this.disabled_;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.switch_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcSwitch;
}( /*#__PURE__*/switch_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-switch", custom_element_MdcSwitch);
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tab_scroller_constants_cssClasses = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test',
};
var tab_scroller_constants_strings = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/rtl-scroller.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTL = /** @class */ (function () {
    function MDCTabScrollerRTL(adapter) {
        this.adapter_ = adapter;
    }
    return MDCTabScrollerRTL;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var rtl_scroller = (MDCTabScrollerRTL);
//# sourceMappingURL=rtl-scroller.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/rtl-default-scroller.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var rtl_default_scroller_MDCTabScrollerRTLDefault = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLDefault, _super);
    function MDCTabScrollerRTLDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges_().right;
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(right - currentScrollLeft);
    };
    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
        return scrollX;
    };
    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    return MDCTabScrollerRTLDefault;
}(MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var rtl_default_scroller = (rtl_default_scroller_MDCTabScrollerRTLDefault);
//# sourceMappingURL=rtl-default-scroller.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/rtl-negative-scroller.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var rtl_negative_scroller_MDCTabScrollerRTLNegative = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLNegative, _super);
    function MDCTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLNegative;
}(MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var rtl_negative_scroller = (rtl_negative_scroller_MDCTabScrollerRTLNegative);
//# sourceMappingURL=rtl-negative-scroller.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/rtl-reverse-scroller.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var rtl_reverse_scroller_MDCTabScrollerRTLReverse = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLReverse, _super);
    function MDCTabScrollerRTLReverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(currentScrollLeft - translateX);
    };
    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX + translateX;
    };
    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: contentWidth - rootWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLReverse;
}(MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var rtl_reverse_scroller = (rtl_reverse_scroller_MDCTabScrollerRTLReverse);
//# sourceMappingURL=rtl-reverse-scroller.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var foundation_MDCTabScrollerFoundation = /** @class */ (function (_super) {
    __extends(MDCTabScrollerFoundation, _super);
    function MDCTabScrollerFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
        /**
         * Controls whether we should handle the transitionend and interaction events during the animation.
         */
        _this.isAnimating_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
        get: function () {
            return tab_scroller_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
        get: function () {
            return tab_scroller_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                eventTargetMatchesSelector: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addScrollAreaClass: function () { return undefined; },
                setScrollAreaStyleProperty: function () { return undefined; },
                setScrollContentStyleProperty: function () { return undefined; },
                getScrollContentStyleValue: function () { return ''; },
                setScrollAreaScrollLeft: function () { return undefined; },
                getScrollAreaScrollLeft: function () { return 0; },
                getScrollContentOffsetWidth: function () { return 0; },
                getScrollAreaOffsetWidth: function () { return 0; },
                computeScrollAreaClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeScrollContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeHorizontalScrollbarHeight: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabScrollerFoundation.prototype.init = function () {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
        this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */
    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
        if (this.isRTL_()) {
            return this.computeCurrentScrollPositionRTL_();
        }
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */
    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
        // Early exit if we aren't animating
        if (!this.isAnimating_) {
            return;
        }
        // Prevent other event listeners from handling this event
        this.stopScrollAnimation_();
    };
    /**
     * Handles the transitionend event
     */
    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        var evtTarget = evt.target;
        if (!this.isAnimating_ ||
            !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
            return;
        }
        this.isAnimating_ = false;
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement using animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        this.animate_(this.getIncrementScrollOperation_(scrollXIncrement));
    };
    /**
     * Increment the scroll value by the scrollXIncrement without animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        var operation = this.getIncrementScrollOperation_(scrollXIncrement);
        if (operation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        this.adapter_.setScrollAreaScrollLeft(operation.finalScrollPosition);
    };
    /**
     * Scrolls to the given scrollX value
     */
    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
        if (this.isRTL_()) {
            return this.scrollToRTL_(scrollX);
        }
        this.scrollTo_(scrollX);
    };
    /**
     * @return Browser-specific {@link MDCTabScrollerRTL} instance.
     */
    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
        if (!this.rtlScrollerInstance_) {
            this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
        }
        return this.rtlScrollerInstance_;
    };
    /**
     * @return translateX value from a CSS matrix transform function string.
     */
    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
        var transformValue = this.adapter_.getScrollContentStyleValue('transform');
        // Early exit if no transform is present
        if (transformValue === 'none') {
            return 0;
        }
        // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
            return 0;
        }
        var matrixParams = match[1];
        // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
        // @ts-ignore These unused variables should retain their semantic names for clarity.
        var _a = __read(matrixParams.split(','), 6), a = _a[0], b = _a[1], c = _a[2], d = _a[3], tx = _a[4], ty = _a[5];
        return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */
    MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
        var translateX = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
    };
    MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue_(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_({
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate_(animation);
    };
    /**
     * Internal method to compute the increment scroll operation values.
     * @param scrollX The desired scroll position increment
     * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
     */
    MDCTabScrollerFoundation.prototype.getIncrementScrollOperation_ = function (scrollX) {
        if (this.isRTL_()) {
            return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue_(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        };
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */
    MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
        var _this = this;
        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/
        this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)");
        // Force repaint
        this.adapter_.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
            _this.adapter_.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating_ = true;
    };
    /**
     * Stops scroll animation
     */
    MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
        this.isAnimating_ = false;
        var currentScrollPosition = this.getAnimatingScrollPosition_();
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */
    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
        if (this.isRTL_()) {
            return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */
    MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollLeft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.
        if (newScrollLeft < 0) {
            // Undo the scrollLeft test check
            this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
            return new rtl_negative_scroller_MDCTabScrollerRTLNegative(this.adapter_);
        }
        var rootClientRect = this.adapter_.computeScrollAreaClientRect();
        var contentClientRect = this.adapter_.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        // Undo the scrollLeft test check
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
        // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.
        if (rightEdgeDelta === newScrollLeft) {
            return new rtl_reverse_scroller_MDCTabScrollerRTLReverse(this.adapter_);
        }
        return new rtl_default_scroller_MDCTabScrollerRTLDefault(this.adapter_);
    };
    MDCTabScrollerFoundation.prototype.isRTL_ = function () {
        return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    };
    return MDCTabScrollerFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var tab_scroller_foundation = (foundation_MDCTabScrollerFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/util.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) { shouldCacheResult = true; }
    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
        return horizontalScrollbarHeight_;
    }
    var el = documentObj.createElement('div');
    el.classList.add(tab_scroller_constants_cssClasses.SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);
    if (shouldCacheResult) {
        horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }
    return horizontalScrollbarHeight;
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-scroller/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCTabScroller = /** @class */ (function (_super) {
    __extends(MDCTabScroller, _super);
    function MDCTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScroller.attachTo = function (root) {
        return new MDCTabScroller(root);
    };
    MDCTabScroller.prototype.initialize = function () {
        this.area_ = this.root_.querySelector(foundation_MDCTabScrollerFoundation.strings.AREA_SELECTOR);
        this.content_ = this.root_.querySelector(foundation_MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function () { return _this.foundation_.handleInteraction(); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.area_.addEventListener('wheel', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('touchstart', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('pointerdown', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('mousedown', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('keydown', this.handleInteraction_, applyPassive());
        this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area_.removeEventListener('wheel', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('touchstart', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('pointerdown', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('mousedown', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('keydown', this.handleInteraction_, applyPassive());
        this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) { return matches(evtTarget, selector); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            addScrollAreaClass: function (className) { return _this.area_.classList.add(className); },
            setScrollAreaStyleProperty: function (prop, value) { return _this.area_.style.setProperty(prop, value); },
            setScrollContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
            getScrollContentStyleValue: function (propName) { return window.getComputedStyle(_this.content_).getPropertyValue(propName); },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area_.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area_.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area_.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area_.getBoundingClientRect(); },
            computeScrollContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            computeHorizontalScrollbarHeight: function () { return computeHorizontalScrollbarHeight(document); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCTabScrollerFoundation(adapter);
    };
    /**
     * Returns the current visual scroll position
     */
    MDCTabScroller.prototype.getScrollPosition = function () {
        return this.foundation_.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MDCTabScroller.prototype.getScrollContentWidth = function () {
        return this.content_.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        this.foundation_.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MDCTabScroller.prototype.scrollTo = function (scrollX) {
        this.foundation_.scrollTo(scrollX);
    };
    return MDCTabScroller;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-indicator/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tab_indicator_constants_cssClasses = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var tab_indicator_constants_strings = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-indicator/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, __assign({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return tab_indicator_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return tab_indicator_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter_.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var tab_indicator_foundation = (foundation_MDCTabIndicatorFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-indicator/fading-foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var fading_foundation_MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter_.addClass(foundation_MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter_.removeClass(foundation_MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(foundation_MDCTabIndicatorFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var fading_foundation = (fading_foundation_MDCFadingTabIndicatorFoundation);
//# sourceMappingURL=fading-foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-indicator/sliding-foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var sliding_foundation_MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter_.addClass(foundation_MDCTabIndicatorFoundation.cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter_.addClass(foundation_MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter_.removeClass(foundation_MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter_.addClass(foundation_MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter_.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter_.removeClass(foundation_MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(foundation_MDCTabIndicatorFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var sliding_foundation = (sliding_foundation_MDCSlidingTabIndicatorFoundation);
//# sourceMappingURL=sliding-foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-indicator/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var component_MDCTabIndicator = /** @class */ (function (_super) {
    __extends(MDCTabIndicator, _super);
    function MDCTabIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabIndicator.attachTo = function (root) {
        return new MDCTabIndicator(root);
    };
    MDCTabIndicator.prototype.initialize = function () {
        this.content_ = this.root_.querySelector(foundation_MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabIndicator.prototype.computeContentClientRect = function () {
        return this.foundation_.computeContentClientRect();
    };
    MDCTabIndicator.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            computeContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            setContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
        };
        // tslint:enable:object-literal-sort-keys
        if (this.root_.classList.contains(foundation_MDCTabIndicatorFoundation.cssClasses.FADE)) {
            return new fading_foundation_MDCFadingTabIndicatorFoundation(adapter);
        }
        // Default to the sliding indicator
        return new sliding_foundation_MDCSlidingTabIndicatorFoundation(adapter);
    };
    MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
        this.foundation_.activate(previousIndicatorClientRect);
    };
    MDCTabIndicator.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    return MDCTabIndicator;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tab_constants_cssClasses = {
    ACTIVE: 'mdc-tab--active',
};
var tab_constants_strings = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCTabFoundation = /** @class */ (function (_super) {
    __extends(MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCTabFoundation.defaultAdapter, adapter)) || this;
        _this.focusOnActivate_ = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return tab_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return tab_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter_.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter_.hasClass(tab_constants_cssClasses.ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter_.addClass(tab_constants_cssClasses.ACTIVE);
        this.adapter_.setAttr(tab_constants_strings.ARIA_SELECTED, 'true');
        this.adapter_.setAttr(tab_constants_strings.TABINDEX, '0');
        this.adapter_.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate_) {
            this.adapter_.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter_.removeClass(tab_constants_cssClasses.ACTIVE);
        this.adapter_.setAttr(tab_constants_strings.ARIA_SELECTED, 'false');
        this.adapter_.setAttr(tab_constants_strings.TABINDEX, '-1');
        this.adapter_.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter_.getOffsetWidth();
        var rootLeft = this.adapter_.getOffsetLeft();
        var contentWidth = this.adapter_.getContentOffsetWidth();
        var contentLeft = this.adapter_.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var tab_foundation = (foundation_MDCTabFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var component_MDCTab = /** @class */ (function (_super) {
    __extends(MDCTab, _super);
    function MDCTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTab.attachTo = function (root) {
        return new MDCTab(root);
    };
    MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new ripple_component_MDCRipple(el, foundation); }; }
        if (tabIndicatorFactory === void 0) { tabIndicatorFactory = function (el) { return new component_MDCTabIndicator(el); }; }
        this.id = this.root_.id;
        var rippleSurface = this.root_.querySelector(foundation_MDCTabFoundation.strings.RIPPLE_SELECTOR);
        var rippleAdapter = __assign({}, ripple_component_MDCRipple.createAdapter(this), { addClass: function (className) { return rippleSurface.classList.add(className); }, removeClass: function (className) { return rippleSurface.classList.remove(className); }, updateCssVariable: function (varName, value) { return rippleSurface.style.setProperty(varName, value); } });
        var rippleFoundation = new foundation_MDCRippleFoundation(rippleAdapter);
        this.ripple_ = rippleFactory(this.root_, rippleFoundation);
        var tabIndicatorElement = this.root_.querySelector(foundation_MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
        this.content_ = this.root_.querySelector(foundation_MDCTabFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTab.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation_.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCTab.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) { return _this.tabIndicator_.activate(previousIndicatorClientRect); },
            deactivateIndicator: function () { return _this.tabIndicator_.deactivate(); },
            notifyInteracted: function () { return _this.emit(foundation_MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root_.offsetLeft; },
            getOffsetWidth: function () { return _this.root_.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content_.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            focus: function () { return _this.root_.focus(); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCTabFoundation(adapter);
    };
    Object.defineProperty(MDCTab.prototype, "active", {
        /**
         * Getter for the active state of the tab
         */
        get: function () {
            return this.foundation_.isActive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.foundation_.setFocusOnActivate(focusOnActivate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MDCTab.prototype.activate = function (computeIndicatorClientRect) {
        this.foundation_.activate(computeIndicatorClientRect);
    };
    /**
     * Deactivates the tab
     */
    MDCTab.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Returns the indicator's client rect
     */
    MDCTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator_.computeContentClientRect();
    };
    MDCTab.prototype.computeDimensions = function () {
        return this.foundation_.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MDCTab.prototype.focus = function () {
        this.root_.focus();
    };
    return MDCTab;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-bar/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tab_bar_constants_strings = {
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
};
var tab_bar_constants_numbers = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/tab-bar/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.END_KEY);
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.HOME_KEY);
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.ENTER_KEY);
ACCEPTABLE_KEYS.add(tab_bar_constants_strings.SPACE_KEY);
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(tab_bar_constants_numbers.ARROW_LEFT_KEYCODE, tab_bar_constants_strings.ARROW_LEFT_KEY);
KEYCODE_MAP.set(tab_bar_constants_numbers.ARROW_RIGHT_KEYCODE, tab_bar_constants_strings.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(tab_bar_constants_numbers.END_KEYCODE, tab_bar_constants_strings.END_KEY);
KEYCODE_MAP.set(tab_bar_constants_numbers.HOME_KEYCODE, tab_bar_constants_strings.HOME_KEY);
KEYCODE_MAP.set(tab_bar_constants_numbers.ENTER_KEYCODE, tab_bar_constants_strings.ENTER_KEY);
KEYCODE_MAP.set(tab_bar_constants_numbers.SPACE_KEYCODE, tab_bar_constants_strings.SPACE_KEY);
var foundation_MDCTabBarFoundation = /** @class */ (function (_super) {
    __extends(MDCTabBarFoundation, _super);
    function MDCTabBarFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;
        _this.useAutomaticActivation_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabBarFoundation, "strings", {
        get: function () {
            return tab_bar_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
        get: function () {
            return tab_bar_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                scrollTo: function () { return undefined; },
                incrementScroll: function () { return undefined; },
                getScrollPosition: function () { return 0; },
                getScrollContentWidth: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                isRTL: function () { return false; },
                setActiveTab: function () { return undefined; },
                activateTabAtIndex: function () { return undefined; },
                deactivateTabAtIndex: function () { return undefined; },
                focusTabAtIndex: function () { return undefined; },
                getTabIndicatorClientRectAtIndex: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                getTabDimensionsAtIndex: function () { return ({ rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 }); },
                getPreviousActiveTabIndex: function () { return -1; },
                getFocusedTabIndex: function () { return -1; },
                getIndexOfTabById: function () { return -1; },
                getTabListLength: function () { return 0; },
                notifyTabActivated: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */
    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
        this.useAutomaticActivation_ = useAutomaticActivation;
    };
    MDCTabBarFoundation.prototype.activateTab = function (index) {
        var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();
        if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
            return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
            this.adapter_.deactivateTabAtIndex(previousActiveIndex);
            previousClientRect = this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter_.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter_.notifyTabActivated(index);
    };
    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent_(evt);
        // Early exit if the event key isn't one of the keyboard navigation keys
        if (key === undefined) {
            return;
        }
        // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
        if (!this.isActivationKey_(key)) {
            evt.preventDefault();
        }
        if (this.useAutomaticActivation_) {
            if (this.isActivationKey_(key)) {
                return;
            }
            var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
            this.adapter_.setActiveTab(index);
            this.scrollIntoView(index);
        }
        else {
            var focusedTabIndex = this.adapter_.getFocusedTabIndex();
            if (this.isActivationKey_(key)) {
                this.adapter_.setActiveTab(focusedTabIndex);
            }
            else {
                var index = this.determineTargetFromKey_(focusedTabIndex, key);
                this.adapter_.focusTabAtIndex(index);
                this.scrollIntoView(index);
            }
        }
    };
    /**
     * Handles the MDCTab:interacted event
     */
    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
        this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange_(index)) {
            return;
        }
        // Always scroll to 0 if scrolling to the 0th index
        if (index === 0) {
            return this.adapter_.scrollTo(0);
        }
        // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value
        if (index === this.adapter_.getTabListLength() - 1) {
            return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
        }
        if (this.isRTL_()) {
            return this.scrollIntoViewRTL_(index);
        }
        this.scrollIntoView_(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */
    MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
        var isRTL = this.isRTL_();
        var maxIndex = this.adapter_.getTabListLength() - 1;
        var shouldGoToEnd = key === tab_bar_constants_strings.END_KEY;
        var shouldDecrement = key === tab_bar_constants_strings.ARROW_LEFT_KEY && !isRTL || key === tab_bar_constants_strings.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === tab_bar_constants_strings.ARROW_RIGHT_KEY && !isRTL || key === tab_bar_constants_strings.ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
            index = maxIndex;
        }
        else if (shouldDecrement) {
            index -= 1;
        }
        else if (shouldIncrement) {
            index += 1;
        }
        else {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }
        else if (index > maxIndex) {
            index = 0;
        }
        return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - tab_bar_constants_numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + tab_bar_constants_numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
            return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + tab_bar_constants_numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - tab_bar_constants_numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
            return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
            return index - 1;
        }
        if (rightEdgeIsCloser) {
            return index + 1;
        }
        return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
            return index + 1;
        }
        if (rightEdgeIsCloser) {
            return index - 1;
        }
        return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */
    MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
            return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
    };
    MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
        return key === tab_bar_constants_strings.SPACE_KEY || key === tab_bar_constants_strings.ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */
    MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
        return index >= 0 && index < this.adapter_.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */
    MDCTabBarFoundation.prototype.isRTL_ = function () {
        return this.adapter_.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */
    MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
        this.adapter_.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter_.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter_.incrementScroll(scrollIncrement);
    };
    return MDCTabBarFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var tab_bar_foundation = (foundation_MDCTabBarFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/tab-bar/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var tab_bar_component_strings = foundation_MDCTabBarFoundation.strings;
var tabIdCounter = 0;

var component_MDCTabBar =
/** @class */
function (_super) {
  __extends(MDCTabBar, _super);

  function MDCTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabBar.attachTo = function (root) {
    return new MDCTabBar(root);
  };

  Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
    set: function set(focusOnActivate) {
      this.tabList_.forEach(function (tab) {
        return tab.focusOnActivate = focusOnActivate;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
    set: function set(useAutomaticActivation) {
      this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
    },
    enumerable: true,
    configurable: true
  });

  MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
    if (tabFactory === void 0) {
      tabFactory = function tabFactory(el) {
        return new component_MDCTab(el);
      };
    }

    if (tabScrollerFactory === void 0) {
      tabScrollerFactory = function tabScrollerFactory(el) {
        return new component_MDCTabScroller(el);
      };
    }

    this.tabList_ = this.instantiateTabs_(tabFactory);
    this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
  };

  MDCTabBar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleTabInteraction_ = function (evt) {
      return _this.foundation_.handleTabInteraction(evt);
    };

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.listen(foundation_MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.listen('keydown', this.handleKeyDown_);

    for (var i = 0; i < this.tabList_.length; i++) {
      if (this.tabList_[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }
  };

  MDCTabBar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.unlisten(foundation_MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.unlisten('keydown', this.handleKeyDown_);
    this.tabList_.forEach(function (tab) {
      return tab.destroy();
    });

    if (this.tabScroller_) {
      this.tabScroller_.destroy();
    }
  };

  MDCTabBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      scrollTo: function scrollTo(scrollX) {
        return _this.tabScroller_.scrollTo(scrollX);
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        return _this.tabScroller_.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function getScrollPosition() {
        return _this.tabScroller_.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return _this.tabScroller_.getScrollContentWidth();
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.root_.offsetWidth;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setActiveTab: function setActiveTab() {},
      activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
        return _this.tabList_[index].activate(clientRect);
      },
      deactivateTabAtIndex: function deactivateTabAtIndex(index) {
        return _this.tabList_[index].deactivate();
      },
      focusTabAtIndex: function focusTabAtIndex(index) {
        return _this.tabList_[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
        return _this.tabList_[index].computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
        return _this.tabList_[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].active) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: function getFocusedTabIndex() {
        var tabElements = _this.getTabElements_();

        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function getIndexOfTabById(id) {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: function getTabListLength() {
        return _this.tabList_.length;
      },
      notifyTabActivated: function notifyTabActivated(index) {
        return _this.emit(tab_bar_component_strings.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new foundation_MDCTabBarFoundation(adapter);
  };
  /**
   * Activates the tab at the given index
   * @param index The index of the tab
   */


  MDCTabBar.prototype.activateTab = function (index) {
    this.foundation_.activateTab(index);
  };
  /**
   * Scrolls the tab at the given index into view
   * @param index THe index of the tab
   */


  MDCTabBar.prototype.scrollIntoView = function (index) {
    this.foundation_.scrollIntoView(index);
  };
  /**
   * Returns all the tab elements in a nice clean array
   */


  MDCTabBar.prototype.getTabElements_ = function () {
    return [].slice.call(this.root_.querySelectorAll(tab_bar_component_strings.TAB_SELECTOR));
  };
  /**
   * Instantiates tab components on all child tab elements
   */


  MDCTabBar.prototype.instantiateTabs_ = function (tabFactory) {
    return this.getTabElements_().map(function (el) {
      el.id = el.id || "mdc-tab-" + ++tabIdCounter;
      return tabFactory(el);
    });
  };
  /**
   * Instantiates tab scroller component on the child tab scroller element
   */


  MDCTabBar.prototype.instantiateTabScroller_ = function (tabScrollerFactory) {
    var tabScrollerElement = this.root_.querySelector(tab_bar_component_strings.TAB_SCROLLER_SELECTOR);

    if (tabScrollerElement) {
      return tabScrollerFactory(tabScrollerElement);
    }

    return null;
  };

  return MDCTabBar;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/tab-bar/custom-element.js











function tab_bar_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tab_bar_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { tab_bar_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tab_bar_custom_element_typeof(obj); }

function tab_bar_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_bar_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_bar_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_bar_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_bar_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function tab_bar_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tab_bar_custom_element_setPrototypeOf(subClass, superClass); }

function tab_bar_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = tab_bar_custom_element_isNativeReflectConstruct(); return function () { var Super = tab_bar_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tab_bar_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tab_bar_custom_element_possibleConstructorReturn(this, result); }; }

function tab_bar_custom_element_possibleConstructorReturn(self, call) { if (call && (tab_bar_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return tab_bar_custom_element_assertThisInitialized(self); }

function tab_bar_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tab_bar_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; tab_bar_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !tab_bar_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return tab_bar_custom_element_construct(Class, arguments, tab_bar_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return tab_bar_custom_element_setPrototypeOf(Wrapper, Class); }; return tab_bar_custom_element_wrapNativeSuper(Class); }

function tab_bar_custom_element_construct(Parent, args, Class) { if (tab_bar_custom_element_isNativeReflectConstruct()) { tab_bar_custom_element_construct = Reflect.construct; } else { tab_bar_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) tab_bar_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return tab_bar_custom_element_construct.apply(null, arguments); }

function tab_bar_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tab_bar_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function tab_bar_custom_element_setPrototypeOf(o, p) { tab_bar_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tab_bar_custom_element_setPrototypeOf(o, p); }

function tab_bar_custom_element_getPrototypeOf(o) { tab_bar_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tab_bar_custom_element_getPrototypeOf(o); }



var custom_element_MdcTabBar = /*#__PURE__*/function (_HTMLElement) {
  tab_bar_custom_element_inherits(MdcTabBar, _HTMLElement);

  var _super = tab_bar_custom_element_createSuper(MdcTabBar);

  tab_bar_custom_element_createClass(MdcTabBar, [{
    key: "focus",
    value: function focus() {
      for (var i = 0; i < this.tabBar_.tabList_.length; i++) {
        if (this.tabBar_.tabList_[i].active) {
          this.tabBar_.tabList_[i].focus();
          return;
        }
      }

      if (this.tabBar_.tabList[0].length > 0) {
        this.tabBar_.tabList_[0].focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
  }, {
    key: "focusOnActivate",
    get: function get() {
      return this.focusOnActivate_;
    },
    set: function set(focusOnActivate) {
      this.focusOnActivate_ = focusOnActivate;

      if (!!this.tabBar_) {
        this.tabBar_.focusOnActivate = focusOnActivate;
      }
    }
  }, {
    key: "useAutomaticActivation",
    get: function get() {
      return this.useAutomaticActivation_;
    },
    set: function set(useAutomaticActivation) {
      this.useAutomaticActivation_ = useAutomaticActivation;

      if (!!this.tabBar_) {
        this.tabBar_.useAutomaticActivation = useAutomaticActivation;
      }
    }
  }, {
    key: "activeTabIndex",
    get: function get() {
      return this.activeTabIndex_;
    },
    set: function set(activeTabIndex) {
      var previousActiveTabIndex = this.activeTabIndex_;
      this.activeTabIndex_ = activeTabIndex;

      if (!!this.tabBar_) {
        if (previousActiveTabIndex !== -1) {
          this.tabBar_.foundation_.activateTab(activeTabIndex);
        } else {
          this.tabBar_.tabList_[activeTabIndex].activate();
        }
      }
    }
  }]);

  function MdcTabBar() {
    var _this;

    tab_bar_custom_element_classCallCheck(this, MdcTabBar);

    _this = _super.call(this);
    _this.activeTabIndex_ = -1;
    _this.focusOnActivate_ = false;
    _this.useAutomaticActivation_ = false;
    _this.tabBar_;
    return _this;
  }

  tab_bar_custom_element_createClass(MdcTabBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.tabBar_ = new component_MDCTabBar(this);
      this.tabBar_.focusOnActivate = this.focusOnActivate_;
      this.tabBar_.useAutomaticActivation = this.useAutomaticActivation_;

      if (this.activeTabIndex !== -1) {
        this.tabBar_.tabList_[this.activeTabIndex_].activate();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.tabBar_.destroy();
    }
  }]);

  return MdcTabBar;
}( /*#__PURE__*/tab_bar_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-tab-bar", custom_element_MdcTabBar);
// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/constants.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var character_counter_constants_cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var character_counter_constants_strings = {
    ROOT_SELECTOR: "." + character_counter_constants_cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/foundation.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, __assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return character_counter_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return character_counter_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter_.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var character_counter_foundation = (foundation_MDCTextFieldCharacterCounterFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/component.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    __extends(MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        return new foundation_MDCTextFieldCharacterCounterFoundation(adapter);
    };
    return MDCTextFieldCharacterCounter;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var textfield_constants_strings = {
    ARIA_CONTROLS: 'aria-controls',
    ICON_SELECTOR: '.mdc-text-field__icon',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
};
var textfield_constants_cssClasses = {
    DENSE: 'mdc-text-field--dense',
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    FULLWIDTH: 'mdc-text-field--fullwidth',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
};
var textfield_constants_numbers = {
    DENSE_LABEL_SCALE: 0.923,
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
];

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var textfield_foundation_INTERACTION_EVENTS = ['click', 'keydown'];
var foundation_MDCTextFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
        _this.isFocused_ = false;
        _this.receivedUserInput_ = false;
        _this.isValid_ = true;
        _this.useNativeValidation_ = true;
        _this.helperText_ = foundationMap.helperText;
        _this.characterCounter_ = foundationMap.characterCounter;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.trailingIcon_ = foundationMap.trailingIcon;
        _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
        _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
        _this.inputInputHandler_ = function () { return _this.handleInput(); };
        _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
        _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
        _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return textfield_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return textfield_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return textfield_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
        get: function () {
            var type = this.getNativeInput_().type;
            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused_ && !this.isValid() && !!this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var _this = this;
        if (this.adapter_.isFocused()) {
            this.inputFocusHandler_();
        }
        else if (this.adapter_.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        textfield_foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.validationObserver_ =
            this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
        this.setCharacterCounter_(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var _this = this;
        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        textfield_foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter_.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput_ = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity_(true);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        if (openNotch) {
            var isDense = this.adapter_.hasClass(textfield_constants_cssClasses.DENSE);
            var labelScale = isDense ? textfield_constants_numbers.DENSE_LABEL_SCALE : textfield_constants_numbers.LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setCharacterCounter_(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput_) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput_().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
        }
        this.setCharacterCounter_(value.length);
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation_
            ? this.isNativeInputValid_() : this.isValid_;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();
        if (this.adapter_.hasLabel()) {
            this.adapter_.shakeLabel(shouldShake);
        }
    };
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total character limit.
     */
    MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
        if (!this.characterCounter_) {
            return;
        }
        var maxLength = this.getNativeInput_().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter_.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied value.
     */
    MDCTextFieldFoundation.prototype.isBadInput_ = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput_().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.addClass(INVALID);
        }
        if (this.helperText_) {
            this.helperText_.setValidity(isValid);
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter_.addClass(FOCUSED);
        }
        else {
            this.adapter_.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter_.addClass(DISABLED);
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.removeClass(DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * @return The native text input element from the host environment, or an object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
        // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
        // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
        // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var textfield_foundation = (foundation_MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var textfield_helper_text_constants_cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var textfield_helper_text_constants_strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + textfield_helper_text_constants_cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, __assign({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return textfield_helper_text_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return textfield_helper_text_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter_.removeClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter_.removeClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(textfield_helper_text_constants_strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(textfield_helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(textfield_helper_text_constants_strings.ROLE, 'alert');
        }
        else {
            this.adapter_.removeAttr(textfield_helper_text_constants_strings.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(textfield_helper_text_constants_strings.ARIA_HIDDEN, 'true');
    };
    return MDCTextFieldHelperTextFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var textfield_helper_text_foundation = (foundation_MDCTextFieldHelperTextFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCTextFieldHelperText = /** @class */ (function (_super) {
    __extends(MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCTextFieldHelperTextFoundation(adapter);
    };
    return MDCTextFieldHelperText;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var textfield_icon_constants_strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var icon_constants_cssClasses = {
    ROOT: 'mdc-text-field__icon',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var icon_foundation_INTERACTION_EVENTS = ['click', 'keydown'];
var foundation_MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return textfield_icon_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return icon_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        icon_foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var _this = this;
        icon_foundation_INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        }
        else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', textfield_icon_constants_strings.ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter_.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var textfield_icon_foundation = (foundation_MDCTextFieldIconFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var component_MDCTextFieldIcon = /** @class */ (function (_super) {
    __extends(MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root_.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(foundation_MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_MDCTextFieldIconFoundation(adapter);
    };
    return MDCTextFieldIcon;
}(component_MDCComponent));

//# sourceMappingURL=component.js.map
// CONCATENATED MODULE: ./src/text-field/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

















var component_MDCTextField =
/** @class */
function (_super) {
  __extends(MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new ripple_component_MDCRipple(el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new component_MDCLineRipple(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new component_MDCTextFieldHelperText(el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function characterCounterFactory(el) {
        return new component_MDCTextFieldCharacterCounter(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new component_MDCTextFieldIcon(el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new component_MDCFloatingLabel(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new component_MDCNotchedOutline(el);
      };
    }

    this.input_ = this.root_.querySelector(textfield_constants_strings.INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(textfield_constants_strings.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(textfield_constants_strings.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(textfield_constants_strings.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = foundation_MDCTextFieldHelperTextFoundation.strings;
    var nextElementSibling = this.root_.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(textfield_constants_cssClasses.HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = foundation_MDCTextFieldCharacterCounterFoundation.strings;
    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
    this.leadingIcon_ = null;
    this.trailingIcon_ = null;
    var iconElements = this.root_.querySelectorAll(textfield_constants_strings.ICON_SELECTOR);

    if (iconElements.length > 0) {
      if (iconElements.length > 1) {
        // Has both icons.
        this.leadingIcon_ = iconFactory(iconElements[0]);
        this.trailingIcon_ = iconFactory(iconElements[1]);
      } else {
        if (this.root_.classList.contains(textfield_constants_cssClasses.WITH_LEADING_ICON)) {
          this.leadingIcon_ = iconFactory(iconElements[0]);
        } else {
          this.trailingIcon_ = iconFactory(iconElements[0]);
        }
      }
    }

    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function set(valid) {
      this.foundation_.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function get() {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function set(required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function get() {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function set(pattern) {
      if (pattern === null) {
        delete this.input_.pattern;
      } else {
        this.input_.pattern = pattern;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function get() {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function set(minLength) {
      if (minLength < 0) {
        this.input_.removeAttribute("minLength");
      } else {
        this.input_.minLength = minLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function get() {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function set(maxLength) {
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function get() {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function set(min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function get() {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function set(max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function get() {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function set(step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function set(label) {
      this.foundation_.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function set(content) {
      this.foundation_.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = __assign(__assign(__assign(__assign(__assign({}, this.getRootAdapterMethods_()), this.getInputAdapterMethods_()), this.getLabelAdapterMethods_()), this.getLineRippleAdapterMethods_()), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new foundation_MDCTextFieldFoundation(adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function getNativeInput() {
        return _this.input_;
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function hasLabel() {
        return Boolean(_this.label_);
      },
      shakeLabel: function shakeLabel(shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root_.classList.contains(textfield_constants_cssClasses.TEXTAREA);
    var isOutlined = this.root_.classList.contains(textfield_constants_cssClasses.OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = __assign(__assign({}, ripple_component_MDCRipple.createAdapter(this)), {
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.input_, ':active');
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root_, new foundation_MDCRippleFoundation(adapter));
  };

  return MDCTextField;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/text-field/custom-element.js











function text_field_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { text_field_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { text_field_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return text_field_custom_element_typeof(obj); }

function text_field_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function text_field_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_field_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_field_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_field_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function text_field_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) text_field_custom_element_setPrototypeOf(subClass, superClass); }

function text_field_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = text_field_custom_element_isNativeReflectConstruct(); return function () { var Super = text_field_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = text_field_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return text_field_custom_element_possibleConstructorReturn(this, result); }; }

function text_field_custom_element_possibleConstructorReturn(self, call) { if (call && (text_field_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return text_field_custom_element_assertThisInitialized(self); }

function text_field_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function text_field_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; text_field_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !text_field_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return text_field_custom_element_construct(Class, arguments, text_field_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return text_field_custom_element_setPrototypeOf(Wrapper, Class); }; return text_field_custom_element_wrapNativeSuper(Class); }

function text_field_custom_element_construct(Parent, args, Class) { if (text_field_custom_element_isNativeReflectConstruct()) { text_field_custom_element_construct = Reflect.construct; } else { text_field_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) text_field_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return text_field_custom_element_construct.apply(null, arguments); }

function text_field_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function text_field_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function text_field_custom_element_setPrototypeOf(o, p) { text_field_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_field_custom_element_setPrototypeOf(o, p); }

function text_field_custom_element_getPrototypeOf(o) { text_field_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_field_custom_element_getPrototypeOf(o); }




var custom_element_MdcTextField = /*#__PURE__*/function (_HTMLElement) {
  text_field_custom_element_inherits(MdcTextField, _HTMLElement);

  var _super = text_field_custom_element_createSuper(MdcTextField);

  text_field_custom_element_createClass(MdcTextField, [{
    key: "focus",
    value: function focus() {
      if (this.textField_ && this.textField_.input_) {
        this.textField_.input_.focus();
      }
    }
  }, {
    key: "value",
    get: function get() {
      if (!!this.textField_) {
        return this.textField_.value;
      } else {
        return this.value_;
      }
    },
    set: function set(value) {
      this.value_ = value;

      if (!!this.textField_) {
        this.textField_.value = value;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.disabled_;
    },
    set: function set(disabled) {
      this.disabled_ = disabled;

      if (!!this.textField_) {
        this.textField_.disabled = disabled;
      }
    }
  }, {
    key: "valid",
    get: function get() {
      return this.valid_;
    },
    set: function set(valid) {
      this.valid_ = valid;

      if (!!this.textField_) {
        this.textField_.valid = valid;
      }
    }
  }, {
    key: "required",
    get: function get() {
      return this.required_;
    },
    set: function set(required) {
      this.required_ = required;

      if (!!this.textField_) {
        this.required_ = required;
      }
    }
  }, {
    key: "pattern",
    get: function get() {
      return this.pattern_;
    },
    set: function set(pattern) {
      this.pattern_ = pattern;

      if (!!this.textField_) {
        this.textField_.pattern = pattern;
      }
    }
  }, {
    key: "minLength",
    get: function get() {
      return this.minLength_;
    },
    set: function set(minLength) {
      this.minLength_ = minLength;

      if (!!this.textField) {
        this.textField_.minLength = minLength;
      }
    }
  }, {
    key: "maxLength",
    get: function get() {
      return this.maxLength_;
    },
    set: function set(maxLength) {
      this.maxLength_ = maxLength;

      if (!!this.textField_) {
        this.textField_.maxLength = maxLength;
      }
    }
  }, {
    key: "min",
    get: function get() {
      return this.min_;
    },
    set: function set(min) {
      this.min_ = min;

      if (!!this.textField_) {
        this.textField_.min = min;
      }
    }
  }, {
    key: "max",
    get: function get() {
      return this.max_;
    },
    set: function set(max) {
      this.max_ = max;

      if (!!this.textField_) {
        this.textField_.max = max;
      }
    }
  }, {
    key: "step",
    get: function get() {
      return this.step_;
    },
    set: function set(step) {
      this.step_ = step;

      if (!!this.textField_) {
        this.textField_.step = step;
      }
    }
  }]);

  function MdcTextField() {
    var _this;

    text_field_custom_element_classCallCheck(this, MdcTextField);

    _this = _super.call(this);
    _this.value_ = "";
    _this.disabled_ = false;
    _this.valid_ = true;
    _this.required_ = false;
    _this.pattern_ = null;
    _this.minLength_ = -1;
    _this.maxLength_ = -1;
    _this.min_ = "";
    _this.max_ = "";
    _this.step_ = "";
    _this.textField_;
    return _this;
  }

  text_field_custom_element_createClass(MdcTextField, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.textField_ = new component_MDCTextField(this);
      this.textField_.useNativeValidation = false;
      this.textField_.value = this.value_;
      this.textField_.disabled = this.disabled_;
      this.textField_.valid = this.valid_;
      this.textField_.required = this.required_;
      this.textField_.pattern = this.pattern_;
      this.textField_.minLength = this.minLength_;
      this.textField_.maxLength = this.maxLength_;
      this.textField_.min = this.min_;
      this.textField_.max = this.max_;
      this.textField_.step = this.step_;
      var floatingLabel = this.querySelector(".mdc-floating-label");

      if (!!floatingLabel) {
        installClassNameChangeHook.call(floatingLabel);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var floatingLabel = this.querySelector(".mdc-floating-label");

      if (!!floatingLabel) {
        uninstallClassNameChangeHook.call(floatingLabel);
      }

      this.textField_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcTextField;
}( /*#__PURE__*/text_field_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-text-field", custom_element_MdcTextField);
// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var top_app_bar_constants_cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
};
var top_app_bar_constants_numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128,
};
var top_app_bar_constants_strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
};

//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
    __extends(MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, __assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function () {
            return top_app_bar_constants_strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return top_app_bar_constants_cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return top_app_bar_constants_numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                notifyNavigationIconClicked: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
        this.adapter_.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
}(MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var top_app_bar_foundation = (foundation_MDCTopAppBarBaseFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/standard/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INITIAL_VALUE = 0;
var foundation_MDCTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked_ = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing_ = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop_ = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized_ = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId_ = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
         */
        _this.resizeDebounceId_ = INITIAL_VALUE;
        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter_.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition_;
        this.lastScrollPosition_ = currentScrollPosition;
        // If the window is being resized the lastScrollPosition_ needs to be updated but the
        // current scroll of the top app bar should stay in the same position.
        if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;
            if (this.currentAppBarOffsetTop_ > 0) {
                this.currentAppBarOffsetTop_ = 0;
            }
            else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }
            this.moveTopAppBar_();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
                _this.resizeThrottleId_ = INITIAL_VALUE;
                _this.throttledResizeHandler_();
            }, top_app_bar_constants_numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized_ = true;
        if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
        }
        this.resizeDebounceId_ = setTimeout(function () {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
        }, top_app_bar_constants_numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight_;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked_ = false;
        }
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
                this.wasDocked_ = true;
                return true;
            }
            else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
        if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;
            if (Math.abs(offset) >= this.topAppBarHeight_) {
                offset = -top_app_bar_constants_numbers.MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter_.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
        var currentHeight = this.adapter_.getTopAppBarHeight();
        if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}(foundation_MDCTopAppBarBaseFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var standard_foundation = (foundation_MDCTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/fixed/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     * @override
     */
    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(top_app_bar_constants_cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(top_app_bar_constants_cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(foundation_MDCTopAppBarFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var fixed_foundation = (foundation_MDCFixedTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/short/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        _this.isAlwaysCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(top_app_bar_constants_cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter_.hasClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed_ = !!value;
        if (this.isAlwaysCollapsed_) {
            this.collapse_();
        }
        else {
            // let maybeCollapseBar_ determine if the bar should be collapsed
            this.maybeCollapseBar_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed_;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     * @override
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar_();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
        if (this.isAlwaysCollapsed_) {
            return;
        }
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.uncollapse_();
            }
        }
        else {
            if (!this.isCollapsed_) {
                this.collapse_();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
        this.adapter_.removeClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
        this.adapter_.addClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = true;
    };
    return MDCShortTopAppBarFoundation;
}(foundation_MDCTopAppBarBaseFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ var short_foundation = (foundation_MDCShortTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map
// CONCATENATED MODULE: ./src/top-app-bar/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var component_MDCTopAppBar =
/** @class */
function (_super) {
  __extends(MDCTopAppBar, _super);

  function MDCTopAppBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTopAppBar.attachTo = function (root) {
    return new MDCTopAppBar(root);
  };

  MDCTopAppBar.prototype.initialize = function () {
    this.navIcon_ = this.root_.querySelector(top_app_bar_constants_strings.NAVIGATION_ICON_SELECTOR);
    this.scrollTarget_ = window;
  };

  MDCTopAppBar.prototype.initialSyncWithDOM = function () {
    this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
    this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
    this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root_.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS);
    var isShort = this.root_.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.addEventListener('resize', this.handleWindowResize_);
    }
  };

  MDCTopAppBar.prototype.destroy = function () {
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root_.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS);
    var isShort = this.root_.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.removeEventListener('resize', this.handleWindowResize_);
    }

    _super.prototype.destroy.call(this);
  };

  MDCTopAppBar.prototype.setScrollTarget = function (target) {
    // Remove scroll handler from the previous scroll target
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
    this.scrollTarget_ = target; // Initialize scroll handler on the new scroll target

    this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
  };

  MDCTopAppBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setStyle: function setStyle(property, value) {
        return _this.root_.style.setProperty(property, value);
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return _this.root_.clientHeight;
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        return _this.emit(top_app_bar_constants_strings.NAVIGATION_EVENT, {});
      },
      getViewportScrollY: function getViewportScrollY() {
        var win = _this.scrollTarget_;
        var el = _this.scrollTarget_;
        return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
      },
      getTotalActionItems: function getTotalActionItems() {
        return _this.root_.querySelectorAll(top_app_bar_constants_strings.ACTION_ITEM_SELECTOR).length;
      }
    }; // tslint:enable:object-literal-sort-keys

    var foundation;

    if (this.root_.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS)) {
      foundation = new foundation_MDCShortTopAppBarFoundation(adapter);
    } else if (this.root_.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS)) {
      foundation = new foundation_MDCFixedTopAppBarFoundation(adapter);
    } else {
      foundation = new foundation_MDCTopAppBarFoundation(adapter);
    }

    return foundation;
  };

  return MDCTopAppBar;
}(component_MDCComponent);


// CONCATENATED MODULE: ./src/top-app-bar/custom-element.js











function top_app_bar_custom_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { top_app_bar_custom_element_typeof = function _typeof(obj) { return typeof obj; }; } else { top_app_bar_custom_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return top_app_bar_custom_element_typeof(obj); }

function top_app_bar_custom_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function top_app_bar_custom_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function top_app_bar_custom_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) top_app_bar_custom_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) top_app_bar_custom_element_defineProperties(Constructor, staticProps); return Constructor; }

function top_app_bar_custom_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) top_app_bar_custom_element_setPrototypeOf(subClass, superClass); }

function top_app_bar_custom_element_createSuper(Derived) { var hasNativeReflectConstruct = top_app_bar_custom_element_isNativeReflectConstruct(); return function () { var Super = top_app_bar_custom_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = top_app_bar_custom_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return top_app_bar_custom_element_possibleConstructorReturn(this, result); }; }

function top_app_bar_custom_element_possibleConstructorReturn(self, call) { if (call && (top_app_bar_custom_element_typeof(call) === "object" || typeof call === "function")) { return call; } return top_app_bar_custom_element_assertThisInitialized(self); }

function top_app_bar_custom_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function top_app_bar_custom_element_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; top_app_bar_custom_element_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !top_app_bar_custom_element_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return top_app_bar_custom_element_construct(Class, arguments, top_app_bar_custom_element_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return top_app_bar_custom_element_setPrototypeOf(Wrapper, Class); }; return top_app_bar_custom_element_wrapNativeSuper(Class); }

function top_app_bar_custom_element_construct(Parent, args, Class) { if (top_app_bar_custom_element_isNativeReflectConstruct()) { top_app_bar_custom_element_construct = Reflect.construct; } else { top_app_bar_custom_element_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) top_app_bar_custom_element_setPrototypeOf(instance, Class.prototype); return instance; }; } return top_app_bar_custom_element_construct.apply(null, arguments); }

function top_app_bar_custom_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function top_app_bar_custom_element_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function top_app_bar_custom_element_setPrototypeOf(o, p) { top_app_bar_custom_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return top_app_bar_custom_element_setPrototypeOf(o, p); }

function top_app_bar_custom_element_getPrototypeOf(o) { top_app_bar_custom_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return top_app_bar_custom_element_getPrototypeOf(o); }




var custom_element_MdcTopAppBar = /*#__PURE__*/function (_HTMLElement) {
  top_app_bar_custom_element_inherits(MdcTopAppBar, _HTMLElement);

  var _super = top_app_bar_custom_element_createSuper(MdcTopAppBar);

  function MdcTopAppBar() {
    top_app_bar_custom_element_classCallCheck(this, MdcTopAppBar);

    return _super.call(this);
  }

  top_app_bar_custom_element_createClass(MdcTopAppBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      installClassNameChangeHook.call(this);
      this.topAppBar_ = new component_MDCTopAppBar(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.topAppBar_.destroy();
      uninstallClassNameChangeHook.call(this);
    }
  }]);

  return MdcTopAppBar;
}( /*#__PURE__*/top_app_bar_custom_element_wrapNativeSuper(HTMLElement));

;
customElements.define("mdc-top-app-bar", custom_element_MdcTopAppBar);
// CONCATENATED MODULE: ./src/material-components-web-elm.js





























/***/ })
/******/ ]);
//# sourceMappingURL=material-components-web-elm.js.map