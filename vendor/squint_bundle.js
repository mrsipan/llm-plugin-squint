(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/squint-cljs/src/squint/core.js
  var core_exports = {};
  __export(core_exports, {
    Atom: () => Atom,
    Cons: () => Cons,
    Delay: () => Delay,
    IIterable: () => IIterable,
    IIterable__iterator: () => IIterable__iterator,
    LazySeq: () => LazySeq,
    NaN_QMARK_: () => NaN_QMARK_,
    PROTOCOL_SENTINEL: () => PROTOCOL_SENTINEL,
    _: () => _,
    _EQ_: () => _EQ_,
    _GT_: () => _GT_,
    _GT__EQ_: () => _GT__EQ_,
    _LT_: () => _LT_,
    _LT__EQ_: () => _LT__EQ_,
    _PLUS_: () => _PLUS_,
    _STAR_: () => _STAR_,
    __protocol_satisfies: () => __protocol_satisfies,
    __toFn: () => __toFn,
    _iterator: () => _iterator,
    abs: () => abs,
    aclone: () => aclone,
    add_watch: () => add_watch,
    alength: () => alength,
    apply: () => apply,
    array: () => array,
    array_QMARK_: () => array_QMARK_,
    aset: () => aset,
    assoc: () => assoc,
    assoc_BANG_: () => assoc_BANG_,
    assoc_in: () => assoc_in,
    assoc_in_BANG_: () => assoc_in_BANG_,
    atom: () => atom,
    boolean$: () => boolean$,
    boolean_QMARK_: () => boolean_QMARK_,
    bounded_count: () => bounded_count,
    butlast: () => butlast,
    cat: () => cat,
    clj__GT_js: () => clj__GT_js,
    coll_QMARK_: () => coll_QMARK_,
    comp: () => comp,
    compare: () => compare,
    compare_and_set_BANG_: () => compare_and_set_BANG_,
    complement: () => complement,
    concat: () => concat,
    conj: () => conj,
    conj_BANG_: () => conj_BANG_,
    cons: () => cons,
    constantly: () => constantly,
    contains_QMARK_: () => contains_QMARK_,
    count: () => count,
    counted_QMARK_: () => counted_QMARK_,
    cycle: () => cycle,
    dec: () => dec,
    deref: () => deref,
    disj: () => disj,
    disj_BANG_: () => disj_BANG_,
    dissoc: () => dissoc,
    dissoc_BANG_: () => dissoc_BANG_,
    distinct: () => distinct,
    doall: () => doall,
    dorun: () => dorun,
    drop: () => drop,
    drop_last: () => drop_last,
    drop_while: () => drop_while,
    empty: () => empty,
    empty_QMARK_: () => empty_QMARK_,
    ensure_reduced: () => ensure_reduced,
    es6_iterator: () => es6_iterator,
    even_QMARK_: () => even_QMARK_,
    every_QMARK_: () => every_QMARK_,
    every_pred: () => every_pred,
    ex_cause: () => ex_cause,
    ex_data: () => ex_data,
    ex_info: () => ex_info,
    ex_message: () => ex_message,
    false_QMARK_: () => false_QMARK_,
    ffirst: () => ffirst,
    filter: () => filter,
    filterv: () => filterv,
    find: () => find,
    first: () => first,
    flatten: () => flatten,
    fn_QMARK_: () => fn_QMARK_,
    fnil: () => fnil,
    frequencies: () => frequencies,
    get: () => get,
    get_in: () => get_in,
    group_by: () => group_by,
    identical_QMARK_: () => identical_QMARK_,
    identity: () => identity,
    inc: () => inc,
    int_QMARK_: () => int_QMARK_,
    integer_QMARK_: () => integer_QMARK_,
    interleave: () => interleave,
    interpose: () => interpose,
    into: () => into,
    into_array: () => into_array,
    iterable: () => iterable,
    iterate: () => iterate,
    js_keys: () => js_keys,
    js_obj: () => js_obj,
    juxt: () => juxt,
    keep: () => keep,
    keep_indexed: () => keep_indexed,
    key: () => key,
    keys: () => keys,
    last: () => last,
    lazy: () => lazy,
    list: () => list,
    list_QMARK_: () => list_QMARK_,
    long$: () => long$,
    map: () => map,
    map_QMARK_: () => map_QMARK_,
    map_indexed: () => map_indexed,
    mapcat: () => mapcat,
    mapv: () => mapv,
    max: () => max,
    max_key: () => max_key,
    memoize: () => memoize,
    merge: () => merge,
    merge_with: () => merge_with,
    meta: () => meta,
    min: () => min,
    min_key: () => min_key,
    mod: () => mod,
    nat_int_QMARK_: () => nat_int_QMARK_,
    neg_QMARK_: () => neg_QMARK_,
    neg_int_QMARK_: () => neg_int_QMARK_,
    next: () => next,
    nil_QMARK_: () => nil_QMARK_,
    nnext: () => nnext,
    not: () => not,
    not_EQ_: () => not_EQ_,
    not_any_QMARK_: () => not_any_QMARK_,
    not_empty: () => not_empty,
    not_every_QMARK_: () => not_every_QMARK_,
    nth: () => nth,
    number_QMARK_: () => number_QMARK_,
    object_QMARK_: () => object_QMARK_,
    odd_QMARK_: () => odd_QMARK_,
    parse_double: () => parse_double,
    parse_long: () => parse_long,
    partial: () => partial,
    partition: () => partition,
    partition_all: () => partition_all,
    partition_by: () => partition_by,
    partitionv: () => partitionv,
    partitionv_all: () => partitionv_all,
    peek: () => peek,
    persistent_BANG_: () => persistent_BANG_,
    pop: () => pop,
    pos_QMARK_: () => pos_QMARK_,
    pos_int_QMARK_: () => pos_int_QMARK_,
    pr_str: () => pr_str,
    println: () => println,
    prn: () => prn,
    quot: () => quot,
    rand: () => rand,
    rand_int: () => rand_int,
    rand_nth: () => rand_nth,
    random_uuid: () => random_uuid,
    range: () => range,
    re_find: () => re_find,
    re_matches: () => re_matches,
    re_pattern: () => re_pattern,
    re_seq: () => re_seq,
    reduce: () => reduce,
    reduce_kv: () => reduce_kv,
    reduced: () => reduced,
    reduced_QMARK_: () => reduced_QMARK_,
    reductions: () => reductions,
    regexp_QMARK_: () => regexp_QMARK_,
    rem: () => rem,
    remove: () => remove,
    remove_watch: () => remove_watch,
    repeat: () => repeat,
    repeatedly: () => repeatedly,
    replace: () => replace,
    reset_BANG_: () => reset_BANG_,
    reset_vals_BANG_: () => reset_vals_BANG_,
    rest: () => rest,
    reverse: () => reverse,
    run_BANG_: () => run_BANG_,
    satisfies_QMARK_: () => satisfies_QMARK_,
    second: () => second,
    select_keys: () => select_keys,
    seq: () => seq,
    seq_QMARK_: () => seq_QMARK_,
    seqable_QMARK_: () => seqable_QMARK_,
    sequential_QMARK_: () => sequential_QMARK_,
    set: () => set,
    set_QMARK_: () => set_QMARK_,
    shuffle: () => shuffle,
    some: () => some,
    some_QMARK_: () => some_QMARK_,
    some_fn: () => some_fn,
    sort: () => sort,
    sort_by: () => sort_by,
    sorted_set: () => sorted_set,
    split_at: () => split_at,
    split_with: () => split_with,
    str: () => str,
    string_QMARK_: () => string_QMARK_,
    subs: () => subs,
    subseq: () => subseq,
    subvec: () => subvec,
    swap_BANG_: () => swap_BANG_,
    swap_vals_BANG_: () => swap_vals_BANG_,
    system_time: () => system_time,
    t: () => t,
    take: () => take,
    take_last: () => take_last,
    take_nth: () => take_nth,
    take_while: () => take_while,
    to_array: () => to_array,
    trampoline: () => trampoline,
    transduce: () => transduce,
    transient$: () => transient$,
    tree_seq: () => tree_seq,
    true_QMARK_: () => true_QMARK_,
    truth_: () => truth_,
    type: () => type,
    unreduced: () => unreduced,
    update: () => update,
    update_BANG_: () => update_BANG_,
    update_in: () => update_in,
    update_keys: () => update_keys,
    update_vals: () => update_vals,
    val: () => val,
    vals: () => vals,
    vec: () => vec,
    vector: () => vector,
    vector_QMARK_: () => vector_QMARK_,
    volatile_BANG_: () => volatile_BANG_,
    vreset_BANG_: () => vreset_BANG_,
    warn_on_lazy_reusage_BANG_: () => warn_on_lazy_reusage_BANG_,
    with_meta: () => with_meta,
    zero_QMARK_: () => zero_QMARK_,
    zipmap: () => zipmap
  });
  function __toFn(x) {
    if (x == null || typeof x === "function") return x;
    const t2 = typeof x;
    if (t2 === "string") return (coll, d) => get(coll, x, d);
    if (t2 === "object") return (k, d) => get(x, k, d);
    return x;
  }
  var has = Object.prototype.hasOwnProperty;
  function findKey(iter, tar, key2) {
    for (key2 of iter.keys()) {
      if (dequal(key2, tar)) return key2;
    }
  }
  function dequal(foo, bar) {
    if (foo === bar) return true;
    var ctor, len, tmp;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
      if (ctor === Array) {
        if ((len = foo.length) === bar.length) {
          while (len-- && dequal(foo[len], bar[len])) ;
        }
        return len === -1;
      }
      if (ctor === Set) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (const elt of foo) {
          tmp = elt;
          if (tmp && typeof tmp === "object") {
            tmp = findKey(bar, tmp);
            if (!tmp) return false;
          }
          if (!bar.has(tmp)) return false;
        }
        return true;
      }
      if (ctor === Map) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (const kv of foo) {
          tmp = kv[0];
          if (tmp && typeof tmp === "object") {
            tmp = findKey(bar, tmp);
            if (!tmp) return false;
          }
          if (!dequal(kv[1], bar.get(tmp))) {
            return false;
          }
        }
        return true;
      }
      if (!ctor || typeof foo === "object") {
        len = 0;
        for (const k in foo) {
          if (has.call(foo, k) && ++len && !has.call(bar, k)) return false;
          if (!(k in bar) || !dequal(foo[k], bar[k])) return false;
        }
        return Object.keys(bar).length === len;
      }
    }
    return false;
  }
  function walkArray(arr, comp2) {
    return arr.every(function(x, i) {
      return i === 0 || comp2(arr[i - 1], x);
    });
  }
  function _EQ_(...xs) {
    return walkArray(xs, (x, y) => dequal(x, y));
  }
  function _GT_(...xs) {
    return walkArray(xs, (x, y) => x > y);
  }
  function _GT__EQ_(...xs) {
    return walkArray(xs, (x, y) => x >= y);
  }
  function _LT_(...xs) {
    return walkArray(xs, (x, y) => x < y);
  }
  function _LT__EQ_(...xs) {
    return walkArray(xs, (x, y) => x <= y);
  }
  function _PLUS_(...xs) {
    return xs.reduce((x, y) => x + y, 0);
  }
  function _STAR_(...xs) {
    return xs.reduce((x, y) => x * y, 1);
  }
  function _(...xs) {
    if (xs.length == 1) {
      return 0 - xs[0];
    }
    return xs.reduce((x, y) => x - y);
  }
  var __protocol_satisfies = {};
  function satisfies_QMARK_(protocol, x) {
    if (x == null) {
      return protocol[null];
    }
    if (typeof protocol == "symbol") return x[protocol];
    return x[protocol.__sym];
  }
  function mapAssocMut(m, k, v) {
    m.set(k, v);
    return m;
  }
  function objAssocMut(m, k, v) {
    m[k] = v;
    return m;
  }
  function getAssocMut(m) {
    switch (typeConst(m)) {
      case MAP_TYPE:
        return mapAssocMut;
      case ARRAY_TYPE:
      case OBJECT_TYPE:
        return objAssocMut;
    }
  }
  function assoc_BANG_(m, k, v, ...kvs) {
    if (kvs.length % 2 !== 0) {
      throw new Error("Illegal argument: assoc expects an odd number of arguments.");
    }
    switch (typeConst(m)) {
      case MAP_TYPE:
        m.set(k, v);
        for (let i = 0; i < kvs.length; i += 2) {
          m.set(kvs[i], kvs[i + 1]);
        }
        break;
      case ARRAY_TYPE:
      case OBJECT_TYPE:
        m[k] = v;
        for (let i = 0; i < kvs.length; i += 2) {
          m[kvs[i]] = kvs[i + 1];
        }
        break;
      default:
        throw new Error(
          `Illegal argument: assoc! expects a Map, Array, or Object as the first argument, but got ${typeof m}.`
        );
    }
    return m;
  }
  function copy(o) {
    switch (typeConst(o)) {
      case MAP_TYPE:
        return new Map(o);
      case SET_TYPE:
        return new o.constructor(o);
      case ARRAY_TYPE:
        return [...o];
      case OBJECT_TYPE:
        return { ...o };
      default:
        throw new Error(`Don't know how to copy object of type ${typeof o}.`);
    }
  }
  function assoc(o, k, v, ...kvs) {
    if (!o) {
      o = {};
    }
    const ret = copy(o);
    assoc_BANG_(ret, k, v, ...kvs);
    return ret;
  }
  var MAP_TYPE = 1;
  var ARRAY_TYPE = 2;
  var OBJECT_TYPE = 3;
  var LIST_TYPE = 4;
  var SET_TYPE = 5;
  var LAZY_ITERABLE_TYPE = 6;
  function emptyOfType(type2) {
    switch (type2) {
      case MAP_TYPE:
        return /* @__PURE__ */ new Map();
      case ARRAY_TYPE:
        return [];
      case OBJECT_TYPE:
        return {};
      // Object.create?
      case LIST_TYPE:
        return new List();
      case SET_TYPE:
        return /* @__PURE__ */ new Set();
      case LAZY_ITERABLE_TYPE:
        return lazy(function* () {
          return;
        });
    }
    return void 0;
  }
  function isObj(coll) {
    return coll.constructor === Object;
  }
  function object_QMARK_(coll) {
    return coll != null && isObj(coll);
  }
  function typeConst(obj) {
    if (obj == null) {
      return void 0;
    }
    if (isObj(obj)) {
      return OBJECT_TYPE;
    }
    if (obj instanceof Map) return MAP_TYPE;
    if (obj instanceof Set) return SET_TYPE;
    if (obj instanceof List) return LIST_TYPE;
    if (Array.isArray(obj)) return ARRAY_TYPE;
    if (obj instanceof LazyIterable) return LAZY_ITERABLE_TYPE;
    if (obj instanceof SortedSet) return SET_TYPE;
    if (obj instanceof Object) return OBJECT_TYPE;
    return void 0;
  }
  function assoc_in_with(f, fname, o, keys2, value) {
    keys2 = vec(keys2);
    o = o || {};
    const baseType = typeConst(o);
    if (baseType !== MAP_TYPE && baseType !== ARRAY_TYPE && baseType !== OBJECT_TYPE)
      throw new Error(
        `Illegal argument: ${fname} expects the first argument to be a Map, Array, or Object.`
      );
    const chain = [o];
    let lastInChain = o;
    for (let i = 0; i < keys2.length - 1; i += 1) {
      const k = keys2[i];
      let chainValue;
      if (lastInChain instanceof Map) chainValue = lastInChain.get(k);
      else chainValue = lastInChain[k];
      if (!chainValue) {
        chainValue = emptyOfType(baseType);
      }
      chain.push(chainValue);
      lastInChain = chainValue;
    }
    chain.push(value);
    for (let i = chain.length - 2; i >= 0; i -= 1) {
      chain[i] = f(chain[i], keys2[i], chain[i + 1]);
    }
    return chain[0];
  }
  function assoc_in(o, keys2, value) {
    return assoc_in_with(assoc, "assoc-in", o, keys2, value);
  }
  function assoc_in_BANG_(o, keys2, value) {
    keys2 = vec(keys2);
    var currObj = o;
    const baseType = typeConst(o);
    for (const k of keys2.splice(0, keys2.length - 1)) {
      let v = get(currObj, k);
      if (v === void 0) {
        v = emptyOfType(baseType);
        assoc_BANG_(currObj, k, v);
      }
      currObj = v;
    }
    assoc_BANG_(currObj, keys2[keys2.length - 1], value);
    return o;
  }
  function comp(...fs) {
    fs = fs.map(__toFn);
    if (fs.length === 0) {
      return identity;
    } else if (fs.length === 1) {
      return fs[0];
    }
    const [f, ...more] = fs.slice().reverse();
    return function(...args) {
      let x = f(...args);
      for (const g of more) {
        x = g(x);
      }
      return x;
    };
  }
  function conj_BANG_set(o, rest2) {
    for (const x of rest2) {
      o.add(x);
    }
    return o;
  }
  function conj_BANG_(...xs) {
    if (xs.length === 0) {
      return vector();
    }
    const [_o, ...rest2] = xs;
    let o = _o;
    if (o === null || o === void 0) {
      o = [];
    }
    switch (typeConst(o)) {
      case SET_TYPE:
        conj_BANG_set(o, rest2);
        break;
      case LIST_TYPE:
        o.unshift(...rest2.reverse());
        break;
      case ARRAY_TYPE:
        o.push(...rest2);
        break;
      case MAP_TYPE:
        for (const x of rest2) {
          if (!Array.isArray(x))
            iterable(x).forEach((kv) => {
              o.set(kv[0], kv[1]);
            });
          else o.set(x[0], x[1]);
        }
        break;
      case OBJECT_TYPE:
        for (const x of rest2) {
          if (!Array.isArray(x)) Object.assign(o, x);
          else o[x[0]] = x[1];
        }
        break;
      default:
        throw new Error(
          "Illegal argument: conj! expects a Set, Array, List, Map, or Object as the first argument."
        );
    }
    return o;
  }
  function conj(...xs) {
    if (xs.length === 0) {
      return vector();
    }
    const [_o, ...rest2] = xs;
    let o = _o;
    if (o === null || o === void 0) {
      o = list();
    }
    let m, o2;
    switch (typeConst(o)) {
      case SET_TYPE:
        if (o instanceof SortedSet) {
          return conj_BANG_set(new o.constructor(o), rest2);
        } else {
          return new o.constructor([...o, ...rest2]);
        }
      case LIST_TYPE:
        return new List(...rest2.reverse(), ...o);
      case ARRAY_TYPE:
        return [...o, ...rest2];
      case MAP_TYPE:
        m = new Map(o);
        for (const x of rest2) {
          if (!Array.isArray(x))
            iterable(x).forEach((kv) => {
              m.set(kv[0], kv[1]);
            });
          else m.set(x[0], x[1]);
        }
        return m;
      case LAZY_ITERABLE_TYPE:
        return lazy(function* () {
          yield* rest2;
          yield* o;
        });
      case OBJECT_TYPE:
        o2 = { ...o };
        for (const x of rest2) {
          if (!Array.isArray(x)) Object.assign(o2, x);
          else o2[x[0]] = x[1];
        }
        return o2;
      default:
        throw new Error(
          "Illegal argument: conj expects a Set, Array, List, Map, or Object as the first argument."
        );
    }
  }
  function disj_BANG_(s, ...xs) {
    for (const x of xs) {
      s.delete(x);
    }
    return s;
  }
  function disj(s, ...xs) {
    const s1 = new s.constructor([...s]);
    return disj_BANG_(s1, ...xs);
  }
  function contains_QMARK_(coll, v) {
    switch (typeConst(coll)) {
      case SET_TYPE:
      case MAP_TYPE:
        return coll.has(v);
      case void 0:
        return false;
      default:
        return v in coll;
    }
  }
  function dissoc_BANG_(m, ...ks) {
    for (const k of ks) {
      delete m[k];
    }
    return m;
  }
  function dissoc(m, ...ks) {
    if (!m) return;
    if (ks.length === 0) return m;
    const m2 = copy(m);
    switch (typeConst(m)) {
      case MAP_TYPE:
        for (const k of ks) {
          m2.delete(k);
        }
        break;
      default:
        for (const k of ks) {
          delete m2[k];
        }
        break;
    }
    return m2;
  }
  function inc(n) {
    return n + 1;
  }
  function dec(n) {
    return n - 1;
  }
  function println(...args) {
    console.log(...args);
  }
  function nth(coll, idx, orElse) {
    if (coll) {
      var elt = void 0;
      if (Array.isArray(coll)) {
        elt = coll[idx];
      } else {
        const iter = iterable(coll);
        let i = 0;
        for (const value of iter) {
          if (i++ == idx) {
            elt = value;
            break;
          }
        }
      }
      if (elt !== void 0) {
        return elt;
      }
    }
    return orElse;
  }
  function get(coll, key2, otherwise = void 0) {
    if (coll == null) {
      return otherwise;
    }
    let v;
    if (isObj(coll)) {
      v = coll[key2];
      if (v === void 0) {
        return otherwise;
      } else {
        return v;
      }
    }
    let g;
    switch (typeConst(coll)) {
      case SET_TYPE:
        if (coll.has(key2)) v = key2;
        break;
      case MAP_TYPE:
        v = coll.get(key2);
        break;
      case ARRAY_TYPE:
        v = coll[key2];
        break;
      default:
        g = coll["get"];
        if (typeof g === "function") {
          try {
            v = coll.get(key2);
            break;
          } catch (e) {
          }
        }
        v = coll[key2];
        break;
    }
    return v !== void 0 ? v : otherwise;
  }
  function seq_QMARK_(x) {
    return x != null && !!x[Symbol.iterator];
  }
  var sequential_QMARK_ = seq_QMARK_;
  function seqable_QMARK_(x) {
    return x === null || x === void 0 || // we used to check instanceof Object but this returns false for TC39 Records
    // also we used to write `Symbol.iterator in` but this does not work for strings and some other types
    !!x[Symbol.iterator];
  }
  function iterable(x) {
    if (x === null || x === void 0) {
      return [];
    }
    if (seqable_QMARK_(x)) {
      return x;
    }
    if (x instanceof Object) return Object.entries(x);
    throw new TypeError(`${x} is not iterable`);
  }
  var IIterable = /* @__PURE__ */ Symbol("Iterable");
  var IIterable__iterator = Symbol.iterator;
  function _iterator(coll) {
    return coll[Symbol.iterator]();
  }
  var es6_iterator = _iterator;
  function seq(x) {
    if (x == null) return x;
    const iter = iterable(x);
    if (iter.length === 0 || iter.size === 0) {
      return null;
    }
    const _i = iter[Symbol.iterator]();
    if (_i.next().done) return null;
    return iter;
  }
  function first(coll) {
    const [first2] = iterable(coll);
    return first2;
  }
  function second(coll) {
    const [_2, v] = iterable(coll);
    return v;
  }
  function ffirst(coll) {
    return first(first(coll));
  }
  function rest(coll) {
    return lazy(function* () {
      let first2 = true;
      for (const x of iterable(coll)) {
        if (first2) first2 = false;
        else yield x;
      }
    });
  }
  var Reduced = class {
    value;
    constructor(x) {
      this.value = x;
    }
    _deref() {
      return this.value;
    }
  };
  function last(coll) {
    coll = iterable(coll);
    let lastEl;
    switch (typeConst(coll)) {
      case ARRAY_TYPE:
        return coll[coll.length - 1];
      default:
        for (const x of coll) {
          lastEl = x;
        }
        return lastEl;
    }
  }
  function reduced(x) {
    return new Reduced(x);
  }
  function reduced_QMARK_(x) {
    return x instanceof Reduced;
  }
  function reduce(f, arg1, arg2) {
    f = __toFn(f);
    let coll, val2;
    if (arguments.length === 2) {
      const iter = iterable(arg1)[Symbol.iterator]();
      const vd = iter.next();
      if (vd.done) {
        val2 = f();
      } else {
        val2 = vd.value;
      }
      coll = iter;
    } else {
      val2 = arg1;
      coll = iterable(arg2);
    }
    if (val2 instanceof Reduced) {
      return val2.value;
    }
    for (const x of coll) {
      val2 = f(val2, x);
      if (val2 instanceof Reduced) {
        val2 = val2.value;
        break;
      }
    }
    return val2;
  }
  function* _reductions2(f, s) {
    const vd = s.next();
    if (vd.done) {
      yield f();
    } else {
      yield* _reductions3(f, vd.value, s);
    }
  }
  function* _reductions3(f, init, coll) {
    let i = init, rst = coll;
    while (true) {
      if (reduced_QMARK_(i)) {
        yield i.value;
        return;
      } else yield i;
      const vd = rst.next();
      if (vd.done) {
        break;
      }
      i = f(i, vd.value);
    }
  }
  function reductions(f, arg1, arg2) {
    f = __toFn(f);
    if (arguments.length === 2) {
      return lazy(function* () {
        yield* _reductions2(f, iterable(arg1)[Symbol.iterator]());
      });
    }
    return lazy(function* () {
      yield* _reductions3(f, arg1, iterable(arg2)[Symbol.iterator]());
    });
  }
  var tolr = false;
  function warn_on_lazy_reusage_BANG_() {
    tolr = true;
  }
  var LazyIterable = class {
    constructor(gen) {
      this.gen = gen;
      this.usages = 0;
    }
    [Symbol.iterator]() {
      this.usages++;
      if (this.usages >= 2 && tolr) {
        try {
          throw new Error();
        } catch (e) {
          console.warn("Re-use of lazy value", e.stack);
        }
      }
      return this.gen();
    }
  };
  LazyIterable.prototype[IIterable] = true;
  function lazy(f) {
    return new LazyIterable(f);
  }
  var Cons = class {
    constructor(x, coll) {
      this.x = x;
      this.coll = coll;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield* iterable(this.coll);
    }
  };
  function cons(x, coll) {
    return new Cons(x, coll);
  }
  function map(f, ...colls) {
    f = __toFn(f);
    switch (colls.length) {
      case 0:
        return (rf) => {
          return (...args) => {
            switch (args.length) {
              case 0: {
                return rf();
              }
              case 1: {
                return rf(args[0]);
              }
              case 2: {
                return rf(args[0], f(args[1]));
              }
              default: {
                return rf(args[0], f(...args.slice(1)));
              }
            }
          };
        };
      case 1:
        return lazy(function* () {
          for (const x of iterable(colls[0])) {
            yield f(x);
          }
        });
      default:
        return lazy(function* () {
          const iters = colls.map((coll) => es6_iterator(iterable(coll)));
          while (true) {
            const args = [];
            for (const i of iters) {
              const nextVal = i.next();
              if (nextVal.done) {
                return;
              }
              args.push(nextVal.value);
            }
            yield f(...args);
          }
        });
    }
  }
  function filter1(pred) {
    return (rf) => {
      return (...args) => {
        switch (args.length) {
          case 0:
            return rf();
          case 1:
            return rf(args[0]);
          case 2: {
            const result = args[0];
            const input = args[1];
            if (truth_(pred(input))) {
              return rf(result, input);
            } else return result;
          }
        }
      };
    };
  }
  function filter(pred, coll) {
    if (arguments.length === 1) {
      return filter1(pred);
    }
    pred = __toFn(pred);
    return lazy(function* () {
      for (const x of iterable(coll)) {
        if (truth_(pred(x))) {
          yield x;
        }
      }
    });
  }
  function filterv(pred, coll) {
    return [...filter(pred, coll)];
  }
  function remove(pred, coll) {
    if (arguments.length === 1) {
      return filter1(complement(pred));
    }
    return filter(complement(pred), coll);
  }
  function map_indexed1(f) {
    return (rf) => {
      let i = -1;
      return (...args) => {
        switch (args.length) {
          case 0:
            return rf();
          case 1:
            return rf(args[0]);
          case 2:
            return rf(args[0], f((i = i + 1, i), args[1]));
        }
      };
    };
  }
  function map_indexed(f, coll) {
    f = __toFn(f);
    if (arguments.length === 1) {
      return map_indexed1(f);
    }
    return lazy(function* () {
      let idx = 0;
      for (const i of iterable(coll)) {
        yield f(idx, i);
        idx++;
      }
    });
  }
  function keep_indexed2(f, coll) {
    f = __toFn(f);
    return lazy(function* () {
      let idx = 0;
      for (const i of iterable(coll)) {
        const v = f(idx, i);
        if (truth_(v)) yield v;
        idx++;
      }
    });
  }
  function keep_indexed1(f) {
    return (rf) => {
      let ia = -1;
      return (...args) => {
        const al = args.length;
        if (al === 0) {
          return rf();
        }
        if (al === 1) {
          return rf(args[0]);
        }
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          ia++;
          const v = f(ia, input);
          if (v == null) {
            return result;
          }
          return rf(result, v);
        }
      };
    };
  }
  function keep_indexed(f, coll) {
    if (arguments.length === 1) {
      return keep_indexed1(f);
    } else {
      return keep_indexed2(f, coll);
    }
  }
  function str(...xs) {
    return xs.join("");
  }
  function not(expr) {
    return !truth_(expr);
  }
  function nil_QMARK_(v) {
    return v == null;
  }
  var PROTOCOL_SENTINEL = {};
  var Atom = class {
    constructor(init) {
      this.val = init;
      this._watches = {};
      this._deref = () => this.val;
      this._hasWatches = false;
      this._reset_BANG_ = (x) => {
        const old_val = this.val;
        this.val = x;
        if (this._hasWatches) {
          for (const entry of Object.entries(this._watches)) {
            const k = entry[0];
            const f = entry[1];
            f(k, this, old_val, x);
          }
        }
        return x;
      };
      this._add_watch = (k, fn) => {
        this._watches[k] = fn;
        this._hasWatches = true;
      };
      this._remove_watch = (k) => {
        delete this._watches[k];
      };
    }
  };
  function atom(init) {
    return new Atom(init);
  }
  function deref(ref) {
    return ref._deref();
  }
  function reset_BANG_(atm, v) {
    atm._reset_BANG_(v);
  }
  function swap_BANG_(atm, f, ...args) {
    f = __toFn(f);
    const v = f(deref(atm), ...args);
    reset_BANG_(atm, v);
    return v;
  }
  function swap_vals_BANG_(atm, f, ...args) {
    const oldv = deref(atm);
    f = __toFn(f);
    const newv = f(oldv, ...args);
    atm._reset_BANG_(newv);
    return [oldv, newv];
  }
  function reset_vals_BANG_(atm, newv) {
    const oldv = deref(atm);
    atm._reset_BANG_(newv);
    return [oldv, newv];
  }
  function compare_and_set_BANG_(atm, oldv, newv) {
    if (deref(atm) === oldv) {
      atm._reset_BANG_(newv);
      return true;
    } else {
      return false;
    }
  }
  function range(begin, end, step) {
    return lazy(function* () {
      let b = begin, e = end, s = step;
      if (end === void 0) {
        b = 0;
        e = begin;
      }
      let i = b || 0;
      s = step ?? 1;
      const ascending = s >= 0;
      while (e === void 0 || ascending && i < e || !ascending && e < i) {
        yield i;
        i += s;
      }
    });
  }
  function re_matches(re, s) {
    const matches = re.exec(s);
    if (matches && s === matches[0]) {
      if (matches.length === 1) {
        return matches[0];
      } else {
        return matches;
      }
    }
    return null;
  }
  function re_find(re, s) {
    if (string_QMARK_(s)) {
      const matches = re.exec(s);
      if (matches != null) {
        if (matches.length === 1) return matches[0];
        else {
          return [...matches];
        }
      }
      return null;
    } else {
      throw new TypeError("re-find must match against a string.");
    }
  }
  function re_pattern(s) {
    if (s instanceof RegExp) {
      return s;
    }
    const flagMatches = s.match(/^\(\?([dgimsuvy]*)\)/);
    if (flagMatches) {
      return new RegExp(s.slice(flagMatches[0].length), flagMatches[1]);
    }
    return new RegExp(s);
  }
  function subvec(arr, start, end) {
    return arr.slice(start, end);
  }
  function vector(...args) {
    return args;
  }
  var array = vector;
  function vector_QMARK_(x) {
    return typeConst(x) === ARRAY_TYPE;
  }
  function mapv(...args) {
    if (args.length === 2) {
      const [_f, coll] = args;
      const f = __toFn(_f);
      const iter = iterable(coll);
      if (Array.isArray(iter)) {
        const ret2 = new Array(iter.length);
        for (var i = 0; i < iter.length; i++) {
          ret2[i] = f(iter[i]);
        }
        return ret2;
      } else {
        var ret = [];
        for (const x of iter) {
          ret.push(f(x));
        }
        return ret;
      }
    }
    return [...map(...args)];
  }
  function vec(x) {
    if (array_QMARK_(x)) {
      return x;
    }
    return [...iterable(x)];
  }
  function set(coll) {
    return new Set(iterable(coll));
  }
  function set_QMARK_(x) {
    return typeConst(x) === SET_TYPE;
  }
  var IApply__apply = /* @__PURE__ */ Symbol("IApply__apply");
  function apply(f, ...args) {
    f = __toFn(f);
    const xs = args.slice(0, args.length - 1);
    const coll = iterable(args[args.length - 1]);
    const af = f[IApply__apply];
    if (af) {
      return af(...xs, coll);
    }
    return f(...xs, ...coll);
  }
  function even_QMARK_(x) {
    return x % 2 == 0;
  }
  function odd_QMARK_(x) {
    return !even_QMARK_(x);
  }
  function complement(f) {
    f = __toFn(f);
    return (...args) => not(f(...args));
  }
  function constantly(x) {
    return (..._2) => x;
  }
  var List = class extends Array {
    constructor(...args) {
      super();
      this.push(...args);
    }
  };
  function list_QMARK_(x) {
    return typeConst(x) === LIST_TYPE;
  }
  function list(...args) {
    return new List(...args);
  }
  function array_QMARK_(x) {
    return Array.isArray(x);
  }
  function concat1(colls) {
    return lazy(function* () {
      for (const coll of colls) {
        yield* iterable(coll);
      }
    });
  }
  function concat(...colls) {
    return concat1(colls);
  }
  concat[IApply__apply] = (colls) => {
    return concat1(colls);
  };
  function mapcat(f, ...colls) {
    if (colls.length === 0) {
      return comp(map(f), cat);
    } else {
      const mapped = map(f, ...colls);
      return concat1(mapped);
    }
  }
  function identity(x) {
    return x;
  }
  function interleave(...colls) {
    return lazy(function* () {
      const iters = colls.map((coll) => es6_iterator(iterable(coll)));
      while (true) {
        const res = [];
        for (const i of iters) {
          const nextVal = i.next();
          if (nextVal.done) {
            return;
          }
          res.push(nextVal.value);
        }
        yield* res;
      }
    });
  }
  function interpose1(sep) {
    return (rf) => {
      let started = false;
      return (...args) => {
        switch (args.length) {
          case 0:
            return rf();
          case 1:
            return rf(args[0]);
          case 2: {
            if (started) {
              const sepr = rf(args[0], sep);
              if (reduced_QMARK_(sepr)) {
                return sepr;
              } else {
                return rf(sepr, args[1]);
              }
            } else {
              started = true;
              return rf(args[0], args[1]);
            }
          }
        }
      };
    };
  }
  function interpose(sep, coll) {
    if (arguments.length === 1) return interpose1(sep);
    return drop(1, interleave(repeat(sep), coll));
  }
  function select_keys(o, ks) {
    const type2 = typeConst(o);
    const ret = emptyOfType(type2) || {};
    for (const k of ks) {
      const v = get(o, k);
      if (v != void 0) {
        assoc_BANG_(ret, k, v);
      }
    }
    return ret;
  }
  function unreduced(x) {
    if (reduced_QMARK_(x)) {
      return deref(x);
    } else {
      return x;
    }
  }
  function partition_all1(n) {
    return (rf) => {
      let a = [];
      return (...args) => {
        let result, v;
        switch (args.length) {
          case 0:
            return rf();
          case 1: {
            result = args[0];
            if (a.length !== 0) {
              v = [...a];
              a = [];
              result = unreduced(rf(result, v));
            }
            return rf(result);
          }
          case 2: {
            result = args[0];
            a.push(args[1]);
            if (n === a.length) {
              v = [...a];
              a = [];
              return rf(result, v);
            } else {
              return result;
            }
          }
        }
      };
    };
  }
  function partition_all(n, ...args) {
    if (arguments.length === 1) {
      return partition_all1(n);
    }
    let step = n, coll = args[0];
    if (args.length === 2) {
      [step, coll] = args;
    }
    return partitionInternal(n, step, [], coll, true);
  }
  function partition(n, ...args) {
    let step = n, pad = [], coll = args[0];
    if (args.length === 2) {
      [step, coll] = args;
    } else if (args.length > 2) {
      [step, pad, coll] = args;
    }
    return partitionInternal(n, step, pad, coll, false);
  }
  var partitionv = partition;
  var partitionv_all = partition_all;
  function partitionInternal(n, step, pad, coll, all) {
    return lazy(function* () {
      let p = [];
      let i = 0;
      for (const x of iterable(coll)) {
        if (i < n) {
          p.push(x);
          if (p.length === n) {
            yield p;
            p = step < n ? p.slice(step) : [];
          }
        }
        i++;
        if (i === step) {
          i = 0;
        }
      }
      if (p.length > 0) {
        if (p.length === n || all) {
          yield p;
        } else if (pad.length) {
          p.push(...pad.slice(0, n - p.length));
          yield p;
        }
      }
    });
  }
  function partition_by1(f) {
    return (rf) => {
      let a = [];
      const none = {};
      let pa = none;
      return (...args) => {
        const l = args.length;
        if (l === 0) {
          return rf();
        }
        if (l === 1) {
          let result = args[0];
          if (a.length !== 0) {
            const v = [...a];
            a = [];
            result = unreduced(rf(result, v));
          }
          return rf(result);
        }
        if (l === 2) {
          const result = args[0];
          const input = args[1];
          const pval = pa;
          const val2 = f(input);
          pa = val2;
          if (pval === none || val2 === pval) {
            a.push(input);
            return result;
          } else {
            const v = [...a];
            a = [];
            const ret = rf(result, v);
            if (!reduced_QMARK_(ret)) {
              a.push(input);
            }
            return ret;
          }
        }
      };
    };
  }
  function partition_by(f, coll) {
    f = __toFn(f);
    if (arguments.length === 1) {
      return partition_by1(f);
    }
    return lazy(function* () {
      const iter = es6_iterator(coll);
      const _fst = iter.next();
      if (_fst.done) {
        yield* null;
      }
      const fst = _fst.value;
      let fv = f(fst);
      let run = [fst];
      let rst = [];
      while (true) {
        const next2 = iter.next();
        if (next2.done) {
          yield run;
          break;
        }
        const _v = next2.value;
        const _fv = f(_v);
        if (fv == _fv) {
          run.push(_v);
        } else {
          yield run;
          rst.push(_v);
          run = rst;
          fv = _fv;
          rst = [];
        }
      }
    });
  }
  function empty(coll) {
    const type2 = typeConst(coll);
    if (type2 != null) {
      return emptyOfType(type2);
    } else {
      throw new Error(`Can't create empty of ${typeof coll}`);
    }
  }
  function merge(...args) {
    const firstArg = args[0];
    let obj;
    if (firstArg === null || firstArg === void 0) {
      obj = {};
    } else {
      obj = into(empty(firstArg), firstArg);
    }
    return conj_BANG_(obj, ...args.slice(1));
  }
  function key(entry) {
    return entry[0];
  }
  function val(entry) {
    return entry[1];
  }
  function merge_with(f, ...maps) {
    f = __toFn(f);
    var hasMap = false;
    for (const m of maps) {
      if (m != null) {
        hasMap = true;
        break;
      }
    }
    if (hasMap) {
      const mergeEntry = (m, e) => {
        const k = key(e);
        const v = val(e);
        if (contains_QMARK_(m, k)) {
          return assoc(m, k, f(get(m, k), v));
        } else {
          return assoc(m, k, v);
        }
      };
      const merge2 = (m1, m2) => {
        return reduce(mergeEntry, m1 || {}, seq(m2));
      };
      return reduce(merge2, maps);
    } else {
      return null;
    }
  }
  function system_time() {
    return performance.now();
  }
  function into(...args) {
    let to, xform, from, c, rf;
    switch (args.length) {
      case 0:
        return [];
      case 1:
        return args[0];
      case 2:
        return conj(args[0] ?? [], ...iterable(args[1]));
      case 3:
        to = args[0];
        xform = args[1];
        from = args[2];
        c = copy(to);
        rf = (coll, v) => {
          if (v === void 0) {
            return coll;
          }
          return conj_BANG_(coll, v);
        };
        return transduce(xform, rf, c, from);
      default:
        throw TypeError(`Invalid arity call of into: ${args.length}`);
    }
  }
  function identical_QMARK_(x, y) {
    return x === y;
  }
  function repeat(...args) {
    if (args.length == 0 || args.length > 2) {
      throw new Error(`Invalid arity: ${args.length}`);
    }
    return {
      [IIterable]: true,
      [IIterable__iterator]: args.length == 1 ? function* () {
        const x = args[0];
        while (true) yield x;
      } : function* () {
        const [n, x] = args;
        for (var i = 0; i < n; i++) yield x;
      }
    };
  }
  function ensure_reduced(x) {
    if (reduced_QMARK_(x)) {
      return x;
    } else {
      return reduced(x);
    }
  }
  function take1(n) {
    return (rf) => {
      let na = n;
      return (...args) => {
        const al = args.length;
        if (al === 0) {
          return rf();
        }
        if (al === 1) {
          const result = args[0];
          return rf(result);
        }
        if (al === 2) {
          let result = args[0];
          const input = args[1];
          const n2 = na;
          const nn = (na = na - 1, na);
          if (n2 > 0) {
            result = rf(result, input);
          }
          if (!(nn > 0)) {
            return ensure_reduced(result);
          } else {
            return result;
          }
        }
      };
    };
  }
  function take(n, coll) {
    if (arguments.length === 1) {
      return take1(n);
    }
    return lazy(function* () {
      let i = n - 1;
      for (const x of iterable(coll)) {
        if (i-- >= 0) {
          yield x;
        }
        if (i < 0) {
          return;
        }
      }
    });
  }
  function take_last(n, coll) {
    if (n <= 0) {
      return null;
    }
    if (Array.isArray(coll)) {
      return seq(coll.slice(-n));
    } else {
      const lastN = new Array(n);
      let i = 0;
      for (const x of iterable(coll)) {
        lastN[i % n] = x;
        i++;
      }
      if (i % n !== 0 && i >= n) {
        return lastN.slice(i % n).concat(lastN.slice(0, i % n));
      } else {
        lastN.length = Math.min(i, n);
        return lastN;
      }
    }
  }
  function take_while1(pred) {
    return (rf) => {
      return (...args) => {
        const al = args.length;
        if (al === 0) return rf();
        if (al === 1) return rf(args[0]);
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          if (truth_(pred(input))) {
            return rf(result, input);
          } else {
            return reduced(result);
          }
        }
      };
    };
  }
  function take_while(pred, coll) {
    pred = __toFn(pred);
    if (arguments.length === 1) {
      return take_while1(pred);
    }
    return lazy(function* () {
      for (const o of iterable(coll)) {
        if (truth_(pred(o))) yield o;
        else return;
      }
    });
  }
  function take_nth1(n) {
    return (rf) => {
      let ia = -1;
      return (...args) => {
        const al = args.length;
        if (al === 0) return rf();
        if (al === 1) return rf(args[0]);
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          ia++;
          const i = ia;
          if (rem(i, n) === 0) {
            return rf(result, input);
          } else return result;
        }
      };
    };
  }
  function take_nth(n, coll) {
    if (arguments.length === 1) return take_nth1(n);
    if (n <= 0) {
      return repeat(first(coll));
    }
    return lazy(function* () {
      let i = 0;
      for (const x of iterable(coll)) {
        if (i % n === 0) {
          yield x;
        }
        i++;
      }
    });
  }
  function partial(f, ...xs) {
    f = __toFn(f);
    return function(...args) {
      return f(...xs, ...args);
    };
  }
  function cycle(coll) {
    return lazy(function* () {
      while (true) yield* coll;
    });
  }
  function drop1(n) {
    return (rf) => {
      let na = n;
      return (...args) => {
        const al = args.length;
        if (al === 0) {
          return rf();
        }
        if (al === 1) {
          return rf(args[0]);
        }
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          const n2 = na;
          na--;
          if (n2 > 0) {
            return result;
          } else return rf(result, input);
        }
      };
    };
  }
  function drop(n, xs) {
    if (arguments.length === 1) return drop1(n);
    return lazy(function* () {
      const iter = _iterator(iterable(xs));
      for (let x = 0; x < n; x++) {
        iter.next();
      }
      yield* iter;
    });
  }
  function drop_while1(pred) {
    return (rf) => {
      let da = true;
      return (...args) => {
        const al = args.length;
        if (al === 0) {
          return rf();
        }
        if (al === 1) {
          return rf(args[0]);
        }
        if (al === 2) {
          const isDrop = da;
          const result = args[0];
          const input = args[1];
          if (isDrop && truth_(pred(input))) {
            return result;
          } else {
            da = null;
            return rf(result, input);
          }
        }
      };
    };
  }
  function drop_while(pred, xs) {
    pred = __toFn(pred);
    if (arguments.length === 1) return drop_while1(pred);
    return lazy(function* () {
      const iter = _iterator(iterable(xs));
      while (true) {
        const nextItem = iter.next();
        if (nextItem.done) {
          break;
        }
        const value = nextItem.value;
        if (!truth_(pred(value))) {
          yield value;
          break;
        }
      }
      yield* iter;
    });
  }
  function distinct1() {
    return (rf) => {
      const seen = /* @__PURE__ */ new Set();
      return (...args) => {
        const al = args.length;
        if (al === 0) return rf();
        if (al === 1) return rf(args[0]);
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          if (seen.has(input)) return result;
          seen.add(input);
          return rf(result, input);
        }
      };
    };
  }
  function distinct(coll) {
    if (arguments.length === 0) return distinct1();
    return lazy(function* () {
      const seen = /* @__PURE__ */ new Set();
      for (const x of iterable(coll)) {
        if (!seen.has(x)) yield x;
        seen.add(x);
      }
      return;
    });
  }
  function update(coll, k, f, ...args) {
    f = __toFn(f);
    return assoc(coll, k, f(get(coll, k), ...args));
  }
  function get_in(coll, path, orElse) {
    let entry = coll;
    for (const item of path) {
      entry = get(entry, item);
    }
    if (entry === void 0) return orElse;
    return entry;
  }
  function update_in(coll, path, f, ...args) {
    f = __toFn(f);
    return assoc_in(coll, path, f(get_in(coll, path), ...args));
  }
  function fnil(f, x, ...xs) {
    f = __toFn(f);
    return function(a, ...args) {
      if (!a) {
        return f(x, ...xs, ...args);
      } else {
        return f(a, ...xs, ...args);
      }
    };
  }
  function every_QMARK_(pred, coll) {
    pred = __toFn(pred);
    for (const x of iterable(coll)) {
      if (!pred(x)) return false;
    }
    return true;
  }
  function not_every_QMARK_(pred, coll) {
    return !every_QMARK_(pred, coll);
  }
  function keep1(pred) {
    return (rf) => {
      return (...args) => {
        const al = args.length;
        if (al === 0) return rf();
        if (al === 1) return rf(args[0]);
        if (al === 2) {
          const result = args[0];
          const input = args[1];
          const v = pred(input);
          if (v == null) return result;
          return rf(result, v);
        }
      };
    };
  }
  function keep(pred, coll) {
    pred = __toFn(pred);
    if (arguments.length === 1) return keep1(pred);
    return lazy(function* () {
      for (const o of iterable(coll)) {
        const res = pred(o);
        if (truth_(res)) yield res;
      }
    });
  }
  function reverse(coll) {
    coll = iterable(coll);
    return [...coll].reverse();
  }
  function sort(f, coll) {
    if (arguments.length === 1) {
      coll = f;
      f = void 0;
    }
    f = __toFn(f);
    coll = iterable(coll);
    const clone = [...coll];
    return clone.sort(f || compare);
  }
  function fnToComparator(f) {
    if (f === compare) {
      return f;
    }
    return (x, y) => {
      const r = f(x, y);
      if (number_QMARK_(r)) {
        return r;
      }
      if (r) {
        return -1;
      }
      if (f(y, x)) {
        return 1;
      }
      return 0;
    };
  }
  function sort_by(keyfn, comp2, coll) {
    if (arguments.length === 2) {
      coll = comp2;
      comp2 = compare;
    }
    keyfn = __toFn(keyfn);
    comp2 = __toFn(comp2);
    return sort((x, y) => {
      const f = fnToComparator(comp2);
      const kx = keyfn(x);
      const ky = keyfn(y);
      return f(kx, ky);
    }, coll);
  }
  function shuffle(coll) {
    const result = [...coll];
    let remaining = result.length;
    while (remaining) {
      const i = Math.floor(Math.random() * remaining--);
      const tmp = result[remaining];
      result[remaining] = result[i];
      result[i] = tmp;
    }
    return result;
  }
  function some(pred, coll) {
    pred = __toFn(pred);
    for (const o of iterable(coll)) {
      const res = pred(o);
      if (truth_(res)) return res;
    }
    return void 0;
  }
  function not_any_QMARK_(pred, coll) {
    pred = __toFn(pred);
    return !some(pred, coll);
  }
  function replace(smap, coll) {
    const mapf = Array.isArray(coll) ? mapv : map;
    return mapf((x) => {
      const repl = smap[x];
      if (repl !== void 0) {
        return repl;
      } else {
        return x;
      }
    }, coll);
  }
  function empty_QMARK_(coll) {
    return seq(coll) ? false : true;
  }
  function rand(n) {
    if (void 0 === n) {
      n = 1;
    }
    return Math.random() * n;
  }
  function rand_int(n) {
    return Math.floor(Math.random() * n);
  }
  function rand_nth(coll) {
    const ri = rand_int(count(coll));
    return nth(coll, ri);
  }
  function _repeatedly(f) {
    return lazy(function* () {
      while (true) yield f();
    });
  }
  function repeatedly(n, f) {
    if (arguments.length === 1) {
      f = n;
      n = void 0;
    }
    const res = _repeatedly(f);
    if (n) {
      return take(n, res);
    } else {
      return res;
    }
  }
  function update_BANG_(m, k, f, ...args) {
    f = __toFn(f);
    const v = get(m, k);
    return assoc_BANG_(m, k, f(v, ...args));
  }
  function group_by(f, coll) {
    f = __toFn(f);
    const res = {};
    for (const o of iterable(coll)) {
      const key2 = f(o);
      update_BANG_(res, key2, fnil(conj_BANG_, []), o);
    }
    return res;
  }
  function frequencies(coll) {
    const res = {};
    const uf = fnil(inc, 0);
    for (const o of iterable(coll)) {
      update_BANG_(res, o, uf);
    }
    return res;
  }
  var LazySeq = class {
    constructor(f) {
      this.f = f;
      this.res = void 0;
    }
    *[Symbol.iterator]() {
      if (this.res === void 0) {
        this.res = this.f();
        this.f = null;
      }
      yield* iterable(this.res);
    }
  };
  function butlast(coll) {
    const x = [...iterable(coll)];
    x.pop();
    return x.length > 0 ? x : null;
  }
  function drop_last(...args) {
    const [n, coll] = args.length > 1 ? args : [1, args[0]];
    return map((x, _2) => x, coll, drop(n, coll));
  }
  function split_at(n, coll) {
    return [take(n, coll), drop(n, coll)];
  }
  function split_with(pred, coll) {
    return [take_while(pred, coll), drop_while(pred, coll)];
  }
  function count(coll) {
    if (!coll) return 0;
    const len = coll.length || coll.size;
    if (typeof len === "number") {
      return len;
    }
    let ret = 0;
    for (const _2 of iterable(coll)) {
      ret++;
    }
    return ret;
  }
  function true_QMARK_(x) {
    return x === true;
  }
  function false_QMARK_(x) {
    return x === false;
  }
  function some_QMARK_(x) {
    return !(x === null || x === void 0);
  }
  function boolean$(x) {
    return !!x;
  }
  function zero_QMARK_(x) {
    return x === 0;
  }
  function neg_QMARK_(x) {
    return x < 0;
  }
  function pos_QMARK_(x) {
    return x > 0;
  }
  function js_obj(...args) {
    let ctr = 0;
    const ret = {};
    for (; ; ) {
      if (ctr >= args.length) {
        break;
      }
      ret[args[ctr]] = args[ctr + 1];
      ctr = ctr + 2;
    }
    return ret;
  }
  function alength(arr) {
    return arr.length;
  }
  function aset(arr, idx, val2, ...more) {
    if (more.length == 0) {
      arr[idx] = val2;
      return val2;
    } else {
      const path = [idx, val2, ...more];
      const _val = path[path.length - 1];
      let innerArray = arr;
      let _idx = 0;
      const _pathLen = path.length - 2;
      for (; _idx < _pathLen; _idx++) {
        innerArray = innerArray[path[_idx]];
      }
      innerArray[path[_idx]] = _val;
      return val2;
    }
  }
  function dorun(x) {
    for (const _2 of iterable(x)) {
    }
    return null;
  }
  function doall(x) {
    return vec(x);
  }
  function aclone(arr) {
    const cloned = [...arr];
    return cloned;
  }
  function add_watch(ref, key2, fn) {
    return ref._add_watch(key2, fn);
  }
  function remove_watch(ref, key2) {
    return ref._remove_watch(key2);
  }
  function reduce_kv(f, init, m) {
    if (!m) {
      return init;
    }
    var ret = init;
    for (const o of iterable(m)) {
      ret = f(ret, o[0], o[1]);
    }
    return ret;
  }
  function max(x, y, ...more) {
    if (y == void 0) {
      return x;
    }
    return Math.max(x, y, ...more);
  }
  function min(x, y, ...more) {
    if (y == void 0) {
      return x;
    }
    return Math.min(x, y, ...more);
  }
  function map_QMARK_(coll) {
    if (coll == null) return false;
    if (isObj(coll)) return true;
    if (coll instanceof Map) return true;
    return false;
  }
  function every_pred(...preds) {
    return (...args) => {
      for (const p of preds) {
        for (const a of args) {
          const res = p(a);
          if (!res) {
            return false;
          }
        }
      }
      return true;
    };
  }
  function some_fn(...fns) {
    return (...args) => {
      for (const f of fns) {
        for (const a of args) {
          const res = f(a);
          if (res) {
            return res;
          }
        }
      }
      return void 0;
    };
  }
  function into_array(type2, aseq) {
    const theSeq = aseq || type2;
    return vec(theSeq);
  }
  function iterate(f, x) {
    var current = x;
    return lazy(function* () {
      while (true) {
        yield current;
        current = f(current);
      }
    });
  }
  function juxt(...fs) {
    fs = fs.map(__toFn);
    return (...args) => {
      const ret = [];
      for (const f of fs) {
        ret.push(f(...args));
      }
      return ret;
    };
  }
  function next(x) {
    if (Array.isArray(x)) {
      const ret = x.slice(1);
      if (ret.length > 0) {
        return ret;
      } else {
        return null;
      }
    } else {
      return seq(rest(x));
    }
  }
  function nnext(x) {
    return next(next(x));
  }
  function compare(x, y) {
    if (x === y) {
      return 0;
    } else {
      if (x == null) {
        return -1;
      }
      if (y == null) {
        return 1;
      }
      const tx = typeof x;
      const ty = typeof y;
      if (tx === "number" && ty === "number" || tx === "string" && ty === "string") {
        if (x === y) {
          return 0;
        }
        if (x < y) {
          return -1;
        }
        return 1;
      } else if (Array.isArray(x) && Array.isArray(y)) {
        if (x.length < y.length) {
          return -1;
        } else if (x.length > y.length) {
          return 1;
        } else {
          for (let i = 0; i < x.length; i++) {
            const c = compare(x[i], y[i]);
            if (c != 0) {
              return c;
            }
          }
          return 0;
        }
      } else {
        throw new Error(`comparing ${tx} to ${ty}`);
      }
    }
  }
  function to_array(aseq) {
    return into_array(aseq);
  }
  function truth_(x) {
    return x != null && x !== false;
  }
  var t = truth_;
  function subs(s, start, end) {
    return s.substring(start, end);
  }
  function fn_QMARK_(x) {
    return "function" === typeof x;
  }
  function re_seq(re, s) {
    return lazy(function* () {
      while (true) {
        const matches = re.exec(s);
        if (matches) {
          const match_str = matches[0];
          const match_vals = matches.length === 1 ? match_str : vec(matches);
          yield match_vals;
          const post_idx = matches.index + max(1, match_str.length);
          if (post_idx > s.length) break;
          s = subs(s, post_idx);
        } else break;
      }
    });
  }
  function NaN_QMARK_(x) {
    return Number.isNaN(x);
  }
  function number_QMARK_(x) {
    return typeof x == "number";
  }
  function keys(obj) {
    if (obj == null) return;
    const t2 = typeConst(obj);
    switch (t2) {
      case OBJECT_TYPE:
        return Object.keys(obj);
      case MAP_TYPE:
        return Array.from(obj.keys());
    }
  }
  function js_keys(obj) {
    return keys(obj);
  }
  function vals(obj) {
    if (obj == null) return;
    const t2 = typeConst(obj);
    switch (t2) {
      case OBJECT_TYPE:
        return Object.values(obj);
      case MAP_TYPE:
        return Array.from(obj.values());
    }
  }
  function string_QMARK_(s) {
    return typeof s === "string";
  }
  function coll_QMARK_(coll) {
    return typeConst(coll) != void 0;
  }
  function regexp_QMARK_(coll) {
    return coll instanceof RegExp;
  }
  var ExceptionInfo = class extends Error {
    constructor(message, data, cause) {
      super(message);
      this._data = data;
      this._cause = cause;
    }
  };
  function ex_data(e) {
    if (e instanceof ExceptionInfo) return e._data;
    else return null;
  }
  function ex_message(e) {
    if (e instanceof Error) return e.message;
    else return null;
  }
  function ex_cause(e) {
    if (e instanceof ExceptionInfo) return e._cause;
    else return null;
  }
  function ex_info(message, data, cause) {
    return new ExceptionInfo(message, data, cause);
  }
  function int_QMARK_(x) {
    return Number.isInteger(x);
  }
  var integer_QMARK_ = int_QMARK_;
  function pos_int_QMARK_(x) {
    return int_QMARK_(x) && x > 0;
  }
  function nat_int_QMARK_(x) {
    return int_QMARK_(x) && x > -1;
  }
  function neg_int_QMARK_(x) {
    return int_QMARK_(x) && x < 0;
  }
  var _metaSym = /* @__PURE__ */ Symbol("meta");
  function meta(x) {
    if (x instanceof Object) {
      return x[_metaSym];
    } else return null;
  }
  function with_meta(x, m) {
    if (typeof x === "function") {
      const wrapped = function(...args) {
        return x.apply(this, args);
      };
      wrapped[_metaSym] = m;
      return wrapped;
    }
    const ret = copy(x);
    ret[_metaSym] = m;
    return ret;
  }
  function boolean_QMARK_(x) {
    return x === true || x === false;
  }
  function counted_QMARK_(x) {
    const tc = typeConst(x);
    switch (tc) {
      case ARRAY_TYPE:
      case MAP_TYPE:
      case OBJECT_TYPE:
      case LIST_TYPE:
      case SET_TYPE:
        return true;
    }
    return false;
  }
  function bounded_count(n, coll) {
    if (counted_QMARK_(coll)) {
      return count(coll);
    } else {
      return count(take(n, coll));
    }
  }
  function find(m, k) {
    const v = get(m, k);
    if (v !== void 0) {
      return [k, v];
    }
  }
  function mod(x, y) {
    return (x % y + y) % y;
  }
  function min_key(k, x, ...more) {
    if (more.length == 0) {
      return x;
    }
    var kx = k(x);
    var min2 = x;
    more.forEach((y) => {
      var ky = k(y);
      if (ky <= kx) {
        kx = ky;
        min2 = y;
      }
    });
    return min2;
  }
  function max_key(k, x, ...more) {
    if (more.length == 0) {
      return x;
    }
    var kx = k(x);
    var max2 = x;
    more.forEach((y) => {
      var ky = k(y);
      if (ky >= kx) {
        kx = ky;
        max2 = y;
      }
    });
    return max2;
  }
  function parsing_err(x) {
    throw new Error(`Expected string, got: ${typeof x}`);
  }
  function parse_long(s) {
    if (string_QMARK_(s)) {
      if (/^[+-]?\d+$/.test(s)) {
        const i = parseInt(s);
        if (Number.MIN_SAFE_INTEGER <= i <= Number.MAX_SAFE_INTEGER) {
          return i;
        }
      }
      return null;
    }
    return parsing_err(s);
  }
  function parse_double(s) {
    if (string_QMARK_(s)) {
      if (/^[\\x00-\\x20]*[+-]?NaN[\\x00-\\x20]*$/.test(s)) {
        return NaN;
      } else if (/^[\\x00-\\x20]*[+-]?(Infinity|((\d+\.?\d*|\.\d+)([eE][+-]?\d+)?)[dDfF]?)[\\x00-\\x20]*$/.test(
        s
      )) {
        return parseFloat(s);
      } else {
        return null;
      }
    } else {
      throw new parsing_err(s);
    }
  }
  function fix(q) {
    if (q >= 0) {
      return Math.floor(q);
    }
    return Math.ceil(q);
  }
  function quot(n, d) {
    const rem2 = n % d;
    return fix((n - rem2) / d);
  }
  function trampoline(f, ...args) {
    if (args.length == 0) {
      while (true) {
        const ret = f();
        if (truth_(fn_QMARK_(ret))) {
          f = ret;
          continue;
        } else {
          return ret;
        }
      }
    } else {
      return trampoline(function() {
        return apply(f, args);
      });
    }
  }
  function transduce(xform, ...args) {
    switch (args.length) {
      case 2: {
        const f = args[0];
        const coll = args[1];
        return transduce(xform, f, f(), coll);
      }
      default: {
        let f = args[0];
        const init = args[1];
        const coll = args[2];
        f = xform(f);
        const ret = reduce(f, init, coll);
        return f(ret);
      }
    }
  }
  function zipmap(keys2, vals2) {
    const res = {};
    const keyIterator = iterable(keys2)[Symbol.iterator]();
    const valIterator = iterable(vals2)[Symbol.iterator]();
    let nextKey, nextVal;
    for (; ; ) {
      nextKey = keyIterator.next();
      if (nextKey.done) break;
      nextVal = valIterator.next();
      if (nextVal.done) break;
      res[nextKey.value] = nextVal.value;
    }
    return res;
  }
  function not_empty(x) {
    const isSeq = seq(x);
    if (isSeq) {
      return x;
    } else return null;
  }
  function tree_seq(isBranch, children, root) {
    const walk = function* (node) {
      yield node;
      if (truth_(isBranch(node))) {
        for (const c of iterable(children(node))) {
          yield* walk(c);
        }
      }
    };
    return lazy(function* () {
      yield* walk(root);
    });
  }
  function flatten(x) {
    return filter(complement(sequential_QMARK_), rest(tree_seq(sequential_QMARK_, seq, x)));
  }
  function transient$(x) {
    return copy(x);
  }
  function persistent_BANG_(x) {
    return Object.freeze(x);
  }
  var SortedSet = class _SortedSet {
    constructor(xs) {
      const isSorted = xs instanceof _SortedSet;
      if (!isSorted) {
        xs = sort(xs);
      }
      const s = new Set(xs);
      this._elts = [...s];
      this._set = s;
    }
    add(x) {
      if (this._set.has(x)) return this;
      const xs = this._elts;
      let added = false;
      for (let i = 0; i < xs.length; i++) {
        if (compare(x, xs[i]) <= 0) {
          xs.splice(i, 0, x);
          added = true;
          break;
        }
      }
      if (!added) {
        xs.push(x);
        this._set.add(x);
      } else {
        this._set = new Set(xs);
      }
      this.size = xs.length;
      return this;
    }
    delete(x) {
      if (!this._set.has(x)) return this;
      const xs = this._elts;
      const idx = xs.indexOf(x);
      xs.splice(idx, 1);
      this._set = new Set(xs);
      this.size = xs.length;
      return this;
    }
    has(x) {
      return this._set.has(x);
    }
    keys() {
      return this.values();
    }
    values() {
      return this._elts[Symbol.iterator]();
    }
    entries() {
      return this._set.entries();
    }
    forEach(...xs) {
      return this.set.forEach(...xs);
    }
    clear() {
      this._elts = [];
      this._set = new Set(this._elts);
    }
    [Symbol.iterator]() {
      return this.keys();
    }
  };
  function sorted_set(...xs) {
    return new SortedSet(xs);
  }
  function mkBoundFn(_sc, test, key2) {
    return (e) => {
      return test(compare(e, key2), 0);
    };
  }
  function indexFrom(sc, startKey, _asc = true) {
    let i = 0;
    for (; i < sc.length; i++) {
      if (!(compare(startKey, sc[i]) > 0)) {
        break;
      }
    }
    return i;
  }
  function subseq3([sc, test, key2]) {
    const includeFn = mkBoundFn(sc, test, key2);
    if (test === _GT_ || test === _GT__EQ_) {
      const seqFrom = [...sc];
      const startIdx = indexFrom(seqFrom, key2, true);
      seqFrom.splice(0, startIdx);
      if (includeFn(seqFrom[0])) {
        return seqFrom;
      } else {
        seqFrom.splice(0, 1);
        return seqFrom;
      }
    } else {
      return [...take_while(includeFn, sc)];
    }
  }
  function subseq5([sc, startTest, startKey, endTest, endKey]) {
    const seqFrom = [...sc];
    const startIdx = indexFrom(seqFrom, startKey, true);
    seqFrom.splice(0, startIdx);
    const whileFn = mkBoundFn(sc, endTest, endKey);
    if (!mkBoundFn(sc, startTest, startKey)(seqFrom[0])) {
      seqFrom.splice(0, 1);
    }
    return [...take_while(whileFn, seqFrom)];
  }
  function subseq(...xs) {
    if (xs.length === 3) {
      return subseq3(xs);
    }
    if (xs.length === 5) {
      return subseq5(xs);
    }
  }
  function abs(x) {
    return Math.abs(x);
  }
  function long$(x) {
    return fix(x);
  }
  function type(x) {
    return x != null && x.constructor;
  }
  function preserving_reduced(rf) {
    return (a1, a2) => {
      const ret = rf(a1, a2);
      if (reduced_QMARK_(ret)) {
        return reduced(ret);
      } else return ret;
    };
  }
  function cat(rf) {
    rf = preserving_reduced(rf);
    return (...args) => {
      switch (args.length) {
        case 0:
          return rf();
        case 1:
          return rf(args[0]);
        case 2:
          return reduce(rf, args[0], args[1]);
      }
    };
  }
  function rem(n, d) {
    const q = quot(n, d);
    return n - d * q;
  }
  function memoize(f) {
    const cache = /* @__PURE__ */ new Map();
    return (...xs) => {
      const path = [xs.length, ...xs];
      const res = get_in(cache, path);
      if (res === void 0) {
        const v = f(...xs);
        assoc_in_BANG_(cache, path, v);
        return v;
      } else return res;
    };
  }
  function peek(vec2) {
    if (array_QMARK_(vec2)) {
      return vec2[vec2.length - 1];
    } else {
      return first(vec2);
    }
  }
  function pop(vec2) {
    if (array_QMARK_(vec2)) {
      const ret = [...vec2];
      ret.pop();
      return ret;
    } else {
      return rest(vec2);
    }
  }
  function update_keys(m, f) {
    const m2 = empty(m);
    const assocFn = getAssocMut(m) || assoc_BANG_;
    reduce_kv(
      (acc, k, v) => {
        return assocFn(acc, f(k), v);
      },
      m2,
      m
    );
    return m2;
  }
  function update_vals(m, f) {
    const m2 = empty(m);
    const assocFn = getAssocMut(m) || assoc_BANG_;
    reduce_kv(
      (acc, k, v) => {
        return assocFn(acc, k, f(v));
      },
      m2,
      m
    );
    return m2;
  }
  function random_uuid() {
    return crypto.randomUUID();
  }
  var Delay = class {
    constructor(f) {
      this.f = f;
    }
    _deref() {
      if (this.realized) {
        return this.v;
      } else {
        this.v = this.f();
        this.realized = true;
        return this.v;
      }
    }
  };
  function clj__GT_js_(x, seen) {
    if (seen.has(x)) return x;
    seen.add(x);
    if (map_QMARK_(x)) {
      return update_vals(x, (x2) => clj__GT_js_(x2, seen));
    }
    const tc = typeConst(x);
    if (tc && tc != OBJECT_TYPE) {
      return mapv((x2) => clj__GT_js_(x2, seen), x);
    }
    return x;
  }
  function clj__GT_js(x) {
    return clj__GT_js_(x, /* @__PURE__ */ new Set());
  }
  function run_BANG_(proc, coll) {
    reduce((_2, x) => proc(x), null, coll);
  }
  function not_EQ_(...more) {
    return not(_EQ_(...more));
  }
  var Volatile = class {
    constructor(v) {
      this.v = v;
    }
    _deref() {
      return this.v;
    }
  };
  function volatile_BANG_(x) {
    return new Volatile(x);
  }
  function vreset_BANG_(vol, v) {
    vol.v = v;
  }
  function toEDN(value, seen = /* @__PURE__ */ new WeakSet()) {
    if (value == null) return "nil";
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (typeof value === "string") return JSON.stringify(value);
    if (typeof value === "bigint") return `${value}N`;
    if (typeof value === "object") {
      if (seen.has(value)) return "#object[circular]";
      seen.add(value);
      const T = typeConst(value);
      let keys2;
      switch (T) {
        case ARRAY_TYPE:
          return `[${value.map((v) => toEDN(v, seen)).join(" ")}]`;
        case SET_TYPE:
          return `#{${Array.from(value).map((v) => toEDN(v, seen)).join(" ")}}`;
        case MAP_TYPE:
          return `#js/Map {${Array.from(value.entries()).map(([k, v]) => `${toEDN(k, seen)} ${toEDN(v, seen)}`).join(", ")}}`;
        case LAZY_ITERABLE_TYPE:
        case LIST_TYPE:
          return `(${mapv((v) => `${toEDN(v, seen)}`, value).join(", ")})`;
        default:
          keys2 = Object.keys(value);
          return `{${keys2.map((k) => `:${k} ${toEDN(value[k], seen)}`).join(", ")}}`;
      }
    }
    return `#object[${value.constructor.name}]`;
  }
  function pr_str(...xs) {
    return xs.map((v, _2) => toEDN(v)).join(" ");
  }
  function prn(...xs) {
    return console.log(pr_str(...xs));
  }

  // node_modules/squint-cljs/src/squint/math.js
  var math_exports = {};
  __export(math_exports, {
    DEGREES_TO_RADIANS: () => DEGREES_TO_RADIANS,
    E: () => E,
    EXP_BIAS: () => EXP_BIAS,
    EXP_BITMASK32: () => EXP_BITMASK32,
    EXP_MAX: () => EXP_MAX,
    EXP_MIN: () => EXP_MIN,
    HI: () => HI,
    HI_x: () => HI_x,
    HI_y: () => HI_y,
    IEEE_fmod: () => IEEE_fmod,
    IEEE_remainder: () => IEEE_remainder,
    INT32_MASK: () => INT32_MASK,
    INT32_NON_SIGN_BIT: () => INT32_NON_SIGN_BIT,
    INT32_NON_SIGN_BITS: () => INT32_NON_SIGN_BITS,
    LO: () => LO,
    LO_x: () => LO_x,
    LO_y: () => LO_y,
    MAX_SCALE: () => MAX_SCALE,
    PI: () => PI,
    RADIANS_TO_DEGREES: () => RADIANS_TO_DEGREES,
    SIGNIFICAND_WIDTH32: () => SIGNIFICAND_WIDTH32,
    TWO_TO_THE_52: () => TWO_TO_THE_52,
    Zero: () => Zero,
    acos: () => acos,
    add64: () => add64,
    add_exact: () => add_exact,
    asin: () => asin,
    atan: () => atan,
    atan2: () => atan2,
    cbrt: () => cbrt,
    ceil: () => ceil,
    copy_sign: () => copy_sign,
    cos: () => cos,
    cosh: () => cosh,
    decrement_exact: () => decrement_exact,
    exp: () => exp,
    expm1: () => expm1,
    fabs: () => fabs,
    floor: () => floor,
    floor_div: () => floor_div,
    floor_mod: () => floor_mod,
    get_exponent: () => get_exponent,
    get_little_endian: () => get_little_endian,
    hi_lo__GT_double: () => hi_lo__GT_double,
    hypot: () => hypot,
    ilogb: () => ilogb,
    increment_exact: () => increment_exact,
    little_endian_QMARK_: () => little_endian_QMARK_,
    log: () => log,
    log10: () => log10,
    log1p: () => log1p,
    multiply_exact: () => multiply_exact,
    negate_exact: () => negate_exact,
    next_after: () => next_after,
    next_down: () => next_down,
    next_up: () => next_up,
    pow: () => pow,
    power_of_two: () => power_of_two,
    random: () => random,
    rint: () => rint,
    round: () => round,
    scalb: () => scalb,
    setup_hl: () => setup_hl,
    signum: () => signum,
    sin: () => sin,
    sinh: () => sinh,
    sqrt: () => sqrt,
    subtract_exact: () => subtract_exact,
    tan: () => tan,
    tanh: () => tanh,
    to_degrees: () => to_degrees,
    to_radians: () => to_radians,
    two_to_the_double_scale_down: () => two_to_the_double_scale_down,
    two_to_the_double_scale_up: () => two_to_the_double_scale_up,
    u_LT_: () => u_LT_,
    ulp: () => ulp,
    xor: () => xor,
    xpos: () => xpos,
    ypos: () => ypos
  });
  var E = Math.E;
  var PI = Math.PI;
  var DEGREES_TO_RADIANS = 0.017453292519943295;
  var RADIANS_TO_DEGREES = 57.29577951308232;
  var TWO_TO_THE_52 = 4503599627370496;
  var SIGNIFICAND_WIDTH32 = 21;
  var EXP_BIAS = 1023;
  var EXP_BITMASK32 = 2146435072;
  var EXP_MAX = 1023;
  var EXP_MIN = -1022;
  function get_little_endian() {
    var a = new ArrayBuffer(4);
    var i = new Uint32Array(a);
    var b = new Uint8Array(a);
    i[0] = 857870592;
    return b[0] === 0;
  }
  var little_endian_QMARK_ = get_little_endian();
  var HI = little_endian_QMARK_ ? 1 : 0;
  var LO = 1 - HI;
  var INT32_MASK = 4294967295;
  var INT32_NON_SIGN_BIT = 2147483648;
  var INT32_NON_SIGN_BITS = 2147483647;
  function u_LT_(a, b) {
    var ab = a >>> 28;
    var bb = b >>> 28;
    return ab < bb || ab === bb && (a & 268435455) < (b & 268435455);
  }
  function sin(a) {
    return Math.sin(a);
  }
  function cos(a) {
    return Math.cos(a);
  }
  function tan(a) {
    return Math.tan(a);
  }
  function asin(a) {
    return Math.asin(a);
  }
  function acos(a) {
    return Math.acos(a);
  }
  function atan(a) {
    return Math.atan(a);
  }
  function to_radians(deg) {
    return deg * 0.017453292519943295;
  }
  function to_degrees(r) {
    return r * 57.29577951308232;
  }
  function exp(a) {
    return Math.exp(a);
  }
  function log(a) {
    return Math.log(a);
  }
  function log10(a) {
    return Math.log10(a);
  }
  function sqrt(a) {
    return Math.sqrt(a);
  }
  function cbrt(a) {
    return Math.cbrt(a);
  }
  function fabs(x) {
    var a = new ArrayBuffer(8);
    var d = new Float64Array(a);
    var i = new Uint32Array(a);
    var hi = little_endian_QMARK_ ? 1 : 0;
    d[0] = x;
    i[hi] = i[hi] & 2147483647;
    return d[0];
  }
  var Zero = (function() {
    var a = new ArrayBuffer(16);
    var d = new Float64Array(a);
    var b = new Uint8Array(a);
    d[0] = 0;
    d[1] = 0;
    b[little_endian_QMARK_ ? 15 : 8] = -128;
    return d;
  })();
  var xpos = 0;
  var ypos = 1;
  var HI_x = 2 * 0 + HI;
  var LO_x = 2 * 0 + LO;
  var HI_y = 2 * 1 + HI;
  var LO_y = 2 * 1 + LO;
  function ilogb(hx, lx) {
    if (hx < 1048576) {
      var hx_zero_QMARK_ = hx === 0;
      var start_ix = hx_zero_QMARK_ ? -1043 : -1022;
      var start_i = hx_zero_QMARK_ ? lx : hx << 11;
      var ix = start_ix;
      var i = start_i;
      while (true) {
        if (!(i > 0)) {
          return ix;
        } else {
          var G__50301 = ix - 1;
          var G__50302 = i << 1;
          ix = G__50301;
          i = G__50302;
          continue;
        }
        break;
      }
    } else {
      return (hx >> 20) - 1023;
    }
  }
  function setup_hl(i, h, l) {
    if (i >= -1022) {
      return [1048576 | 1048575 & h, l];
    } else {
      var n = -1022 - i;
      if (n <= 31) {
        return [h << n | l >>> 32 - n, l << n];
      } else {
        return [l << n - 32, 0];
      }
    }
  }
  function IEEE_fmod(x, y) {
    if (y === 0 || (isNaN(y) || !isFinite(x))) {
      return NaN;
    } else {
      var a = new ArrayBuffer(16);
      var d = new Float64Array(a);
      var i = new Uint32Array(a);
      var _2 = d[0] = x;
      var ___$1 = d[1] = y;
      var hx = i[HI_x];
      var lx = i[LO_x];
      var hy = i[HI_y];
      var ly = i[LO_y];
      var sx = hx & 2147483648;
      var hx__$1 = hx & 2147483647;
      var hy__$1 = hy & 2147483647;
      var hx_LT__EQ_hy = hx__$1 <= hy__$1;
      if (hx_LT__EQ_hy && (hx__$1 < hy__$1 || lx < ly)) {
        return x;
      } else {
        if (hx_LT__EQ_hy && lx === ly) {
          return Zero[sx >>> 31];
        } else {
          try {
            var ix = ilogb(hx__$1, lx);
            var iy = ilogb(hy__$1, ly);
            const [hx__$2, lx__$1] = setup_hl(ix, hx__$1, lx);
            const [hy__$2, ly__$1] = setup_hl(iy, hy__$1, ly);
            const [hx__$3, lx__$2] = (function() {
              var n2 = ix - iy;
              var hx__$32 = hx__$2;
              var lx__$22 = lx__$1;
              while (true) {
                if (n2 === 0) {
                  return [hx__$32, lx__$22];
                } else {
                  var hz2 = u_LT_(lx__$22, ly__$1) ? hx__$32 - hy__$2 - 1 : hx__$32 - hy__$2;
                  var lz2 = lx__$22 - ly__$1;
                  const [hx__$42, lx__$32] = hz2 < 0 ? [hx__$32 + hx__$32 + (lx__$22 >>> 31), lx__$22 + lx__$22] : (hz2 | lz2) === 0 ? (function() {
                    throw new Error("Signed zero");
                  })() : [hz2 + hz2 + (lz2 >>> 31), lz2 + lz2];
                  var G__50303 = n2 - 1;
                  var G__50304 = 4294967295 & hx__$42;
                  var G__50305 = 4294967295 & lx__$32;
                  n2 = G__50303;
                  hx__$32 = G__50304;
                  lx__$22 = G__50305;
                  continue;
                }
                break;
              }
            })();
            var hz = u_LT_(lx__$2, ly__$1) ? hx__$3 - hy__$2 - 1 : hx__$3 - hy__$2;
            var lz = lx__$2 - ly__$1;
            const [hx__$4, lx__$3] = hz >= 0 ? [hz, lz] : [hx__$3, lx__$2];
            if ((hx__$4 | lx__$3) === 0) {
              throw new Error("Signed zero");
            }
            const [hx__$5, lx__$4, iy__$1] = (function() {
              var hx__$52 = hx__$4;
              var lx__$42 = lx__$3;
              var iy__$12 = iy;
              while (true) {
                if (!(hx__$52 < 1048576)) {
                  return [hx__$52, lx__$42, iy__$12];
                } else {
                  var G__50306 = hx__$52 + hx__$52 + (lx__$42 >>> 31);
                  var G__50307 = lx__$42 + lx__$42;
                  var G__50308 = iy__$12 - 1;
                  hx__$52 = G__50306;
                  lx__$42 = G__50307;
                  iy__$12 = G__50308;
                  continue;
                }
                break;
              }
            })();
            if (iy__$1 >= -1022) {
              var hx__$6 = hx__$5 - 1048576 | iy__$1 + 1023 << 20;
              i[HI_x] = hx__$6 | sx;
              i[LO_x] = lx__$4;
              return d[0];
            } else {
              var n = -1022 - iy__$1;
              const [hx__$62, lx__$5] = n <= 20 ? [hx__$5 >> n, lx__$4 >>> n | hx__$5 << 32 - n] : n <= 31 ? [sx, hx__$5 << 32 - n | lx__$4 >>> n] : [sx, hx__$5 >> n - 32];
              i[HI_x] = hx__$62 | sx;
              i[LO_x] = lx__$5;
              return d[0] * 1;
            }
          } catch (e50260) {
            var ___$2 = e50260;
            return Zero[sx >>> 31];
          }
        }
      }
    }
  }
  function IEEE_remainder(dividend, divisor) {
    if (divisor === 0) {
      return NaN;
    } else {
      if (isNaN(divisor)) {
        return NaN;
      } else {
        if (isNaN(dividend)) {
          return NaN;
        } else {
          if (!isFinite(dividend)) {
            return NaN;
          } else {
            if (!isFinite(divisor)) {
              return dividend;
            } else {
              var a = new ArrayBuffer(16);
              var d = new Float64Array(a);
              var i = new Uint32Array(a);
              d[0] = dividend;
              d[1] = divisor;
              var hx = i[HI];
              var lx = i[LO];
              var hp = i[HI + 2];
              var lp = i[LO + 2];
              var sx = hx & 2147483648;
              var hp__$1 = hp & 2147483647;
              var hx__$1 = hx & 2147483647;
              var dividend__$1 = hp__$1 <= 2145386495 ? IEEE_fmod(dividend, divisor + divisor) : dividend;
              if ((hx__$1 - hp__$1 | lx - lp) === 0) {
                return 0 * dividend__$1;
              } else {
                var dividend__$2 = Math.abs(dividend__$1);
                var divisor__$1 = Math.abs(divisor);
                var dividend__$3 = hp__$1 < 2097152 ? dividend__$2 + dividend__$2 > divisor__$1 ? (function() {
                  var dividend__$32 = dividend__$2 - divisor__$1;
                  if (dividend__$32 + dividend__$32 >= divisor__$1) {
                    return dividend__$32 - divisor__$1;
                  } else {
                    return dividend__$32;
                  }
                })() : dividend__$2 : (function() {
                  var divisor_half = 0.5 * divisor__$1;
                  if (dividend__$2 > divisor_half) {
                    var dividend__$32 = dividend__$2 - divisor__$1;
                    if (dividend__$32 >= divisor_half) {
                      return dividend__$32 - divisor__$1;
                    } else {
                      return dividend__$32;
                    }
                  } else {
                    return dividend__$2;
                  }
                })();
                d[0] = dividend__$3;
                var hx__$2 = i[HI] ^ sx;
                i[HI] = hx__$2;
                return d[0];
              }
            }
          }
        }
      }
    }
  }
  function ceil(a) {
    if (!(a == null)) {
      return Math.ceil(a);
    } else {
      throw new Error("Unexpected Null passed to ceil");
    }
  }
  function floor(a) {
    if (!(a == null)) {
      return Math.floor(a);
    } else {
      throw new Error("Unexpected Null passed to floor");
    }
  }
  function copy_sign(magnitude, sign) {
    var a = new ArrayBuffer(16);
    var d = new Float64Array(a);
    var b = new Uint8Array(a);
    var sbyte = little_endian_QMARK_ ? 7 : 0;
    d[0] = magnitude;
    d[1] = sign;
    var sign_sbyte = 128 & b[8 + sbyte];
    var mag_sbyte = 127 & b[sbyte];
    b[sbyte] = sign_sbyte | mag_sbyte;
    return d[0];
  }
  function rint(a) {
    var sign = copy_sign(1, a);
    var a__$1 = Math.abs(a);
    var a__$2 = a__$1 < 4503599627370496 ? 4503599627370496 + a__$1 - 4503599627370496 : a__$1;
    return sign * a__$2;
  }
  function atan2(y, x) {
    return Math.atan2(y, x);
  }
  function pow(a, b) {
    return Math.pow(a, b);
  }
  function round(a) {
    if (isNaN(a)) {
      return 0;
    } else {
      if (isFinite(a)) {
        return Math.round(a);
      } else {
        if (Infinity === a) {
          return Number.MAX_SAFE_INTEGER;
        } else {
          return Number.MIN_SAFE_INTEGER;
        }
      }
    }
  }
  function random() {
    return Math.random();
  }
  function add_exact(x, y) {
    var r = x + y;
    if (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return r;
    }
  }
  function subtract_exact(x, y) {
    var r = x - y;
    if (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return r;
    }
  }
  function multiply_exact(x, y) {
    var r = x * y;
    if (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return r;
    }
  }
  function increment_exact(a) {
    if (a >= Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return a + 1;
    }
  }
  function decrement_exact(a) {
    if (a <= Number.MIN_SAFE_INTEGER || a > Number.MAX_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return a - 1;
    }
  }
  function negate_exact(a) {
    if (a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER) {
      throw new Error("Integer overflow");
    } else {
      return -a;
    }
  }
  function xor(a, b) {
    return a && !b || !a && b;
  }
  function floor_div(x, y) {
    if (!(Number.isSafeInteger(x) && Number.isSafeInteger(y))) {
      throw new Error("floor-div called with non-safe-integer arguments");
    } else {
      var r = long$(x / y);
      if (xor(x < 0, y < 0) && !(r * y === x)) {
        return r - 1;
      } else {
        return r;
      }
    }
  }
  function floor_mod(x, y) {
    if (!(Number.isSafeInteger(x) && Number.isSafeInteger(y))) {
      throw new Error("floor-mod called with non-safe-integer arguments");
    } else {
      var r = long$(x / y);
      if (xor(x < 0, y < 0) && !(r * y === x)) {
        return x - y * r - -y;
      } else {
        return x - y * r;
      }
    }
  }
  function get_exponent(d) {
    if (isNaN(d) || !isFinite(d)) {
      return EXP_MAX + 1;
    } else {
      if (d === 0) {
        return -1022 - 1;
      } else {
        var a = new ArrayBuffer(8);
        var f = new Float64Array(a);
        var i = new Uint32Array(a);
        var hi = little_endian_QMARK_ ? 1 : 0;
        f[0] = d;
        return ((i[hi] & 2146435072) >> 21 - 1) - 1023;
      }
    }
  }
  function hi_lo__GT_double(h, l) {
    var a = new ArrayBuffer(8);
    var f = new Float64Array(a);
    var i = new Uint32Array(a);
    i[LO] = l;
    i[HI] = h;
    return f[0];
  }
  function power_of_two(n) {
    if (n >= -1022 && n <= EXP_MAX) {
    } else {
      throw new Error("Assert failed: (and (>= n EXP-MIN) (<= n EXP-MAX))");
    }
    return hi_lo__GT_double(n + 1023 << 21 - 1 & 2146435072, 0);
  }
  function ulp(d) {
    if (isNaN(d)) {
      return d;
    } else {
      if (isFinite(d)) {
        var e = get_exponent(d);
        var G__50285 = e;
        switch (G__50285) {
          case 1024:
            return Math.abs(d);
            break;
          case -1023:
            return Number.MIN_VALUE;
            break;
          default:
            var e__$1 = e - (31 + 21);
            if (e__$1 >= -1022) {
              return power_of_two(e__$1);
            } else {
              var shift = e__$1 - (-1022 - 31 - 21);
              if (shift < 32) {
                return hi_lo__GT_double(0, 1 << shift);
              } else {
                return hi_lo__GT_double(1 << shift - 32, 0);
              }
            }
        }
      } else {
        return Infinity;
      }
    }
  }
  function signum(d) {
    if (d === 0 || isNaN(d)) {
      return d;
    } else {
      return copy_sign(1, d);
    }
  }
  function sinh(x) {
    return Math.sinh(x);
  }
  function cosh(x) {
    return Math.cosh(x);
  }
  function tanh(x) {
    return Math.tanh(x);
  }
  function hypot(x, y) {
    return Math.hypot(x, y);
  }
  function expm1(x) {
    return Math.expm1(x);
  }
  function log1p(x) {
    return Math.log1p(x);
  }
  function add64(hx, lx, hy, ly) {
    var sx = (lx & 2147483648) >>> 31;
    var sy = (ly & 2147483648) >>> 31;
    var lr = (2147483647 & lx) + (2147483647 & ly);
    var c31 = (lr & 2147483648) >>> 31;
    var b31 = sx + sy + c31;
    var lr__$1 = lr & 2147483647 | b31 << 31;
    var c32 = b31 >> 1;
    var hr = 4294967295 & hx + hy + c32;
    return [hr, lr__$1];
  }
  function next_after(start, direction) {
    var a = new ArrayBuffer(8);
    var f = new Float64Array(a);
    var i = new Uint32Array(a);
    if (start > direction) {
      if (!(start === 0)) {
        var _2 = f[0] = start;
        var ht = i[HI];
        var lt = i[LO];
        const [hr, lr] = (ht & 2147483648) === 0 ? add64(ht, lt, 4294967295, 4294967295) : add64(ht, lt, 0, 1);
        i[HI] = hr;
        i[LO] = lr;
        return f[0];
      } else {
        return -Number.MIN_VALUE;
      }
    } else {
      if (start < direction) {
        var _2 = f[0] = start + 0;
        var ht = i[HI];
        var lt = i[LO];
        const [hr, lr] = (ht & 2147483648) === 0 ? add64(ht, lt, 0, 1) : add64(ht, lt, 4294967295, 4294967295);
        i[HI] = hr;
        i[LO] = lr;
        return f[0];
      } else {
        if (start === direction) {
          return direction;
        } else {
          return start + direction;
        }
      }
    }
  }
  function next_up(d) {
    if (d < Number.POSITIVE_INFINITY) {
      var a = new ArrayBuffer(8);
      var f = new Float64Array(a);
      var i = new Uint32Array(a);
      var _2 = f[0] = d + 0;
      var ht = i[HI];
      var lt = i[LO];
      const [hr, lr] = (ht & 2147483648) === 0 ? add64(ht, lt, 0, 1) : add64(ht, lt, 4294967295, 4294967295);
      i[HI] = hr;
      i[LO] = lr;
      return f[0];
    } else {
      return d;
    }
  }
  function next_down(d) {
    if (isNaN(d) || -Infinity === d) {
      return d;
    } else {
      if (d === 0) {
        return -Number.MIN_VALUE;
      } else {
        var a = new ArrayBuffer(8);
        var f = new Float64Array(a);
        var i = new Uint32Array(a);
        var _2 = f[0] = d;
        var ht = i[HI];
        var lt = i[LO];
        const [hr, lr] = d > 0 ? add64(ht, lt, 4294967295, 4294967295) : add64(ht, lt, 0, 1);
        i[HI] = hr;
        i[LO] = lr;
        return f[0];
      }
    }
  }
  var MAX_SCALE = EXP_MAX + 1022 + 21 + 32 + 1;
  var two_to_the_double_scale_up = power_of_two(512);
  var two_to_the_double_scale_down = power_of_two(-512);
  function scalb(d, scaleFactor) {
    const [scale_factor, scale_increment, exp_delta] = scaleFactor < 0 ? [Math.max(scaleFactor, -MAX_SCALE), -512, two_to_the_double_scale_down] : [Math.min(scaleFactor, MAX_SCALE), 512, two_to_the_double_scale_up];
    var t2 = scale_factor >> 8 >>> 23;
    var exp_adjust = (scale_factor + t2 & 511) - t2;
    var d__$1 = d * power_of_two(exp_adjust);
    var scale_factor__$1 = scale_factor - exp_adjust;
    while (true) {
      if (scale_factor__$1 === 0) {
        return d__$1;
      } else {
        var G__50310 = d__$1 * exp_delta;
        var G__50311 = scale_factor__$1 - scale_increment;
        d__$1 = G__50310;
        scale_factor__$1 = G__50311;
        continue;
      }
      break;
    }
  }

  // node_modules/squint-cljs/src/squint/string.js
  var string_exports = {};
  __export(string_exports, {
    blank_QMARK_: () => blank_QMARK_,
    capitalize: () => capitalize,
    ends_with_QMARK_: () => ends_with_QMARK_,
    includes_QMARK_: () => includes_QMARK_,
    index_of: () => index_of,
    join: () => join,
    last_index_of: () => last_index_of,
    lower_case: () => lower_case,
    replace: () => replace2,
    split: () => split,
    split_lines: () => split_lines,
    starts_with_QMARK_: () => starts_with_QMARK_,
    trim: () => trim,
    triml: () => triml,
    trimr: () => trimr,
    upper_case: () => upper_case
  });
  function blank_QMARK_(s) {
    if (!s) return true;
    if (s.length === 0) return true;
    if (s.trimLeft().length === 0) return true;
    return false;
  }
  function join(sep, coll) {
    if (coll === void 0) {
      coll = sep;
      sep = "";
    }
    if (coll instanceof Array) {
      return coll.join(sep);
    }
    let ret = "";
    let addSep = false;
    for (const o of iterable(coll)) {
      if (addSep) ret += sep;
      ret += o;
      addSep = true;
    }
    return ret;
  }
  function trim(s) {
    return s.trim();
  }
  function triml(s) {
    return s.trimLeft();
  }
  function trimr(s) {
    return s.trimRight();
  }
  function discardTrailingIfNeeded(limit, v) {
    if (limit == null && v.length > 1) {
      for (; ; )
        if (v[v.length - 1] === "") {
          v.pop();
        } else break;
    }
    return v;
  }
  function split(s, re, limit) {
    const split2 = s.split(re, limit);
    return discardTrailingIfNeeded(limit, split2);
  }
  function starts_with_QMARK_(s, substr) {
    return s.startsWith(substr);
  }
  function ends_with_QMARK_(s, substr) {
    return s.endsWith(substr);
  }
  var escapeRegex = function(s) {
    return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  };
  var replaceAll = function(s, re, replacement) {
    var flags = "g";
    if (re.ignoreCase) {
      flags += "i";
    }
    if (re.multiline) {
      flags += "m";
    }
    if (re.unicode) {
      flags += "u";
    }
    const r = new RegExp(re.source, flags);
    return s.replace(r, replacement);
  };
  var replaceWith = function(f) {
    return (...args) => {
      const [matches, _2, __] = args;
      if (matches.length == 1) {
        return f(matches[0]);
      } else {
        return f(matches);
      }
    };
  };
  function replace2(s, match, replacement) {
    if (string_QMARK_(match)) {
      return s.replace(new RegExp(escapeRegex(match), "g"), replacement);
    }
    if (match instanceof RegExp) {
      if (string_QMARK_(replacement)) {
        return replaceAll(s, match, replacement);
      } else {
        return replaceAll(s, match, replaceWith(replacement));
      }
    }
    throw `Invalid match arg: $match`;
  }
  function split_lines(s) {
    return split(s, /\n|\r\n/);
  }
  function index_of(s, value, from) {
    const res = s.indexOf(value, from);
    if (res < 0) {
      return null;
    }
    return res;
  }
  function last_index_of(s, value, from) {
    const res = s.lastIndexOf(value, from);
    if (res < 0) {
      return null;
    }
    return res;
  }
  function lower_case(s) {
    return s.toLowerCase();
  }
  function upper_case(s) {
    return s.toUpperCase();
  }
  function capitalize(s) {
    if (s.length === 0) return s;
    if (s.length === 1) return s.toUpperCase();
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  function includes_QMARK_(s, substr) {
    return s.indexOf(substr) != -1;
  }

  // node_modules/squint-cljs/src/squint/set.js
  var set_exports = {};
  __export(set_exports, {
    difference: () => difference,
    intersection: () => intersection,
    join: () => join2,
    map_invert: () => map_invert,
    project: () => project,
    rename: () => rename,
    rename_keys: () => rename_keys,
    select: () => select,
    subset_QMARK_: () => subset_QMARK_,
    superset_QMARK_: () => superset_QMARK_,
    union: () => union
  });
  function _bubble_max_key(k, coll) {
    const max2 = max_key(k, ...coll);
    return [max2, ...coll.filter((x) => x !== max2)];
  }
  function _intersection2(x, y) {
    if (x.size > y.size) {
      const tmp = y;
      y = x;
      x = tmp;
    }
    const res = /* @__PURE__ */ new Set();
    for (const elem of x) {
      if (y.has(elem)) {
        res.add(elem);
      }
    }
    return res;
  }
  function intersection(...xs) {
    switch (xs.length) {
      case 0:
        return null;
      case 1:
        return xs[0];
      case 2:
        return xs[0].length > xs[1].length ? _intersection2(xs[0], xs[1]) : _intersection2(xs[1], xs[0]);
      default:
        return _bubble_max_key((x) => 0 - x.size, xs).reduce(_intersection2);
    }
  }
  function _difference2(x, y) {
    const res = /* @__PURE__ */ new Set();
    for (const elem of x) {
      if (!y.has(elem)) {
        res.add(elem);
      }
    }
    return res;
  }
  function difference(...xs) {
    switch (xs.length) {
      case 0:
        return null;
      case 1:
        return xs[0];
      case 2:
        return _difference2(xs[0], xs[1]);
      default:
        return xs.reduce(_difference2);
    }
  }
  function _union2(x, y) {
    const res = new Set(x);
    for (const elem of y) {
      res.add(elem);
    }
    return res;
  }
  function union(...xs) {
    switch (xs.length) {
      case 0:
        return null;
      case 1:
        return xs[0];
      case 2:
        return xs[0].length > xs[1].length ? _union2(xs[0], xs[1]) : _union2(xs[1], xs[0]);
      default:
        return _bubble_max_key((x) => x.size, xs).reduce(_union2);
    }
  }
  function _subset_QMARK_2(x, y) {
    for (const elem of x) {
      if (!y.has(elem)) {
        return false;
      }
    }
    return true;
  }
  function subset_QMARK_(x, y) {
    if (x === void 0) {
      return true;
    }
    if (y === void 0) {
      return false;
    }
    if (x.size > y.size) {
      return false;
    }
    return _subset_QMARK_2(x, y);
  }
  function _superset_QMARK_2(x, y) {
    for (const elem of x) {
      if (!y.has(elem)) {
        return false;
      }
    }
    return true;
  }
  function superset_QMARK_(x, y) {
    if (x === void 0) {
      return true;
    }
    if (y === void 0) {
      return true;
    }
    if (x.size < y.size) {
      return false;
    }
    return _superset_QMARK_2(y, x);
  }
  function select(pred, xset) {
    if (xset === void 0) {
      return null;
    }
    const res = /* @__PURE__ */ new Set();
    for (const elem of xset) {
      if (truth_(pred(elem))) {
        res.add(elem);
      }
    }
    return res;
  }
  function rename_keys(map2, kmap) {
    const ks = keys(kmap);
    let without = dissoc(map2, ...ks);
    if (without === map2) {
      without = { ...map2 };
    }
    return ks.reduce((m, k) => {
      const newKey = get(kmap, k);
      if (contains_QMARK_(map2, k)) {
        return assoc_BANG_(m, newKey, get(map2, k));
      }
      return m;
    }, without);
  }
  function rename(xrel, kmap) {
    return set(map((x) => rename_keys(x, kmap), xrel));
  }
  function project(xrel, ...ks) {
    return set(map((x) => select_keys(x, ...ks), xrel));
  }
  function map_invert(xmap) {
    if (xmap === void 0) {
      return {};
    }
    return reduce_kv((m, k, v) => assoc_BANG_(m, v, k), empty(xmap), xmap);
  }
  function join2(xrel, yrel, kmap) {
    if (kmap === void 0) {
      if (seq(xrel) && seq(yrel)) {
        const ks = intersection(set(keys(first(xrel))), set(keys(first(yrel))));
        const [r, s] = count(xrel) <= count(yrel) ? [xrel, yrel] : [yrel, xrel];
        const select2 = juxt(...ks);
        const idx = group_by(select2, r);
        return reduce((ret, x) => {
          const found = get(idx, select2(x));
          return found ? reduce((acc, y) => acc.add(merge(y, x)), ret, found) : ret;
        }, /* @__PURE__ */ new Set(), s);
      } else {
        return /* @__PURE__ */ new Set();
      }
    } else {
      const [r, s, k] = count(xrel) <= count(yrel) ? [xrel, yrel, map_invert(kmap)] : [yrel, xrel, kmap];
      const idx = group_by(juxt(...vals(k)), r);
      const select2 = juxt(...keys(k));
      return reduce((ret, x) => {
        const found = get(idx, select2(x));
        return found ? reduce((acc, y) => acc.add(merge(y, x)), ret, found) : ret;
      }, /* @__PURE__ */ new Set(), s);
    }
  }

  // node_modules/squint-cljs/src/squint/html.js
  var html_exports = {};
  __export(html_exports, {
    attrs: () => attrs,
    css: () => css,
    html: () => html,
    tag: () => tag,
    unsafe_tag: () => unsafe_tag
  });
  var Html = class {
    constructor(s) {
      this.s = s;
    }
    toString() {
      return this.s.toString();
    }
  };
  function html([s]) {
    return new Html(s);
  }
  function escapeHTML(text) {
    const map2 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    return text.toString().replace(/[&<>"']/g, (m) => map2[m]);
  }
  function safe(x) {
    if (x instanceof Html) return x;
    if (string_QMARK_(x)) {
      return escapeHTML(x);
    }
    return escapeHTML(x.toString());
  }
  function css(v, props) {
    v = Object.assign(props, v);
    let ret = "";
    if (v == null) return ret;
    let first2 = true;
    for (const kv of Object.entries(v)) {
      if (!first2) ret += " ";
      ret += kv[0];
      ret += ":";
      ret += kv[1];
      ret += ";";
      first2 = false;
    }
    return ret;
  }
  function attr(v) {
    if (typeof v === "object") {
      return css({}, v);
    } else {
      return v;
    }
  }
  function toHTML(v, unsafe) {
    if (v == null) return "";
    if (v instanceof Html) return v;
    if (typeof v === "string") return unsafe ? v : safe(v);
    if (v[Symbol.iterator]) {
      return [...v].map(toHTML).join("");
    }
    return unsafe ? v.toString() : safe(v.toString());
  }
  function attrs(v, props) {
    v = Object.assign(props, v);
    let ret = "";
    if (v == null) return ret;
    let first2 = true;
    for (const kv of Object.entries(v)) {
      if (!first2) {
        ret += " ";
      }
      ret += kv[0];
      ret += "=";
      ret += '"';
      const v1 = attr(kv[1]);
      ret += v1;
      ret += '"';
      first2 = false;
    }
    return new Html(ret);
  }
  function tag_(strs, vals2, unsafe) {
    let out = strs[0];
    for (let i = 0; i < vals2.length; i++) {
      out += toHTML(vals2[i], unsafe);
      out += strs[i + 1];
    }
    return new Html(out);
  }
  function tag(strs, ...vals2) {
    return tag_(strs, vals2, false);
  }
  function unsafe_tag(strs, ...vals2) {
    return tag_(strs, vals2, true);
  }

  // node_modules/squint-cljs/src/squint/test.js
  var test_exports = {};
  __export(test_exports, {
    _STAR_current_env_STAR_: () => _STAR_current_env_STAR_,
    _STAR_current_reporter_STAR_: () => _STAR_current_reporter_STAR_,
    async_QMARK_: () => async_QMARK_,
    clear_env_BANG_: () => clear_env_BANG_,
    compose_fixtures: () => compose_fixtures,
    current_reporter: () => current_reporter,
    current_test_str: () => current_test_str,
    empty_env: () => empty_env,
    get_current_env: () => get_current_env,
    get_each_fixtures: () => get_each_fixtures,
    get_once_fixtures: () => get_once_fixtures,
    inc_report_counter_BANG_: () => inc_report_counter_BANG_,
    join_fixtures: () => join_fixtures,
    register_test_BANG_: () => register_test_BANG_,
    registered_tests: () => registered_tests,
    report: () => report,
    run_tests: () => run_tests,
    set_each_fixtures_BANG_: () => set_each_fixtures_BANG_,
    set_env_BANG_: () => set_env_BANG_,
    set_once_fixtures_BANG_: () => set_once_fixtures_BANG_,
    successful_QMARK_: () => successful_QMARK_,
    test_var: () => test_var,
    testing_contexts_str: () => testing_contexts_str,
    testing_vars_str: () => testing_vars_str,
    update_current_env_BANG_: () => update_current_env_BANG_,
    wrap_async: () => wrap_async
  });

  // node_modules/squint-cljs/src/squint/multi.js
  var multi_exports = {};
  __export(multi_exports, {
    ancestors: () => ancestors,
    defmethod: () => defmethod,
    defmulti: () => defmulti,
    derive: () => derive,
    descendants: () => descendants,
    get_method: () => get_method,
    isa_QMARK_: () => isa_QMARK_,
    make_hierarchy: () => make_hierarchy,
    methods: () => methods,
    parents: () => parents,
    prefer_method: () => prefer_method,
    prefers: () => prefers,
    remove_all_methods: () => remove_all_methods,
    remove_method: () => remove_method,
    underive: () => underive
  });
  function isPrimitive(x) {
    const t2 = typeof x;
    return x == null || t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === "bigint" || t2 === "symbol";
  }
  function findKeyByEquiv(m, v) {
    if (isPrimitive(v) && m.has(v)) return v;
    for (const k of m.keys()) if (_EQ_(k, v)) return k;
    return void 0;
  }
  function setHasEquiv(s, v) {
    if (isPrimitive(v)) return s.has(v);
    for (const x of s) if (_EQ_(x, v)) return true;
    return false;
  }
  function addRel(m, k, v) {
    const key2 = findKeyByEquiv(m, k) ?? k;
    let s = m.get(key2);
    if (!s) {
      s = /* @__PURE__ */ new Set();
      m.set(key2, s);
    }
    if (!setHasEquiv(s, v)) s.add(v);
  }
  function make_hierarchy() {
    return {
      parents: /* @__PURE__ */ new Map(),
      ancestors: /* @__PURE__ */ new Map(),
      descendants: /* @__PURE__ */ new Map()
    };
  }
  var _globalHierarchy = null;
  function gh() {
    return _globalHierarchy ?? (_globalHierarchy = make_hierarchy());
  }
  function _isa(h, child, parent) {
    if (_EQ_(child, parent)) return true;
    if (typeof child === "function" && typeof parent === "function") {
      return child === parent || child.prototype instanceof parent;
    }
    const ancKey = findKeyByEquiv(h.ancestors, child);
    if (ancKey !== void 0 && setHasEquiv(h.ancestors.get(ancKey), parent)) return true;
    if (Array.isArray(child) && Array.isArray(parent) && child.length === parent.length) {
      for (let i = 0; i < child.length; i++) {
        if (!_isa(h, child[i], parent[i])) return false;
      }
      return true;
    }
    return false;
  }
  function isa_QMARK_(a, b, c) {
    if (c === void 0) return _isa(gh(), a, b);
    return _isa(a, b, c);
  }
  function _deriveInto(h, tag2, parent) {
    if (_EQ_(tag2, parent)) throw new Error(`${String(tag2)} can't derive itself`);
    const tagAncKey = findKeyByEquiv(h.ancestors, tag2);
    const tagAnc = tagAncKey !== void 0 ? h.ancestors.get(tagAncKey) : void 0;
    if (tagAnc && setHasEquiv(tagAnc, parent)) return;
    if (_isa(h, parent, tag2)) {
      throw new Error(`Cyclic derivation: ${String(parent)} has ${String(tag2)} as ancestor`);
    }
    addRel(h.parents, tag2, parent);
    const withSelf = (m, t2) => {
      const acc = /* @__PURE__ */ new Set([t2]);
      const key2 = findKeyByEquiv(m, t2);
      const s = key2 !== void 0 ? m.get(key2) : void 0;
      if (s) for (const v of s) acc.add(v);
      return acc;
    };
    const parentChain = withSelf(h.ancestors, parent);
    const tagChain = withSelf(h.descendants, tag2);
    for (const d of tagChain) {
      for (const a of parentChain) {
        if (!_EQ_(d, a)) {
          addRel(h.ancestors, d, a);
          addRel(h.descendants, a, d);
        }
      }
    }
  }
  function derive(a, b, c) {
    if (c === void 0) {
      _globalHierarchy = cloneHierarchy(gh());
      _deriveInto(_globalHierarchy, a, b);
      return null;
    }
    const next2 = cloneHierarchy(a);
    _deriveInto(next2, b, c);
    return next2;
  }
  function rebuildFromPairs(pairs) {
    const h = make_hierarchy();
    for (const [c, p] of pairs) _deriveInto(h, c, p);
    return h;
  }
  function cloneHierarchy(h) {
    const out = make_hierarchy();
    for (const f of ["parents", "ancestors", "descendants"]) {
      for (const [k, s] of h[f]) out[f].set(k, new Set(s));
    }
    return out;
  }
  function underive(a, b, c) {
    const [h, tag2, parent] = c === void 0 ? [gh(), a, b] : [a, b, c];
    const pairs = [];
    for (const [child, parents2] of h.parents) {
      for (const p of parents2) {
        if (!(_EQ_(child, tag2) && _EQ_(p, parent))) pairs.push([child, p]);
      }
    }
    if (c === void 0) {
      _globalHierarchy = rebuildFromPairs(pairs);
      return null;
    }
    return rebuildFromPairs(pairs);
  }
  function hAnd(a, b, field) {
    const [h, tag2] = b === void 0 ? [gh(), a] : [a, b];
    const key2 = findKeyByEquiv(h[field], tag2);
    if (key2 === void 0) return null;
    const s = h[field].get(key2);
    return s && s.size ? new Set(s) : null;
  }
  function parents(a, b) {
    return hAnd(a, b, "parents");
  }
  function ancestors(a, b) {
    return hAnd(a, b, "ancestors");
  }
  function descendants(a, b) {
    return hAnd(a, b, "descendants");
  }
  function _prefers(prefer, a, b) {
    const key2 = findKeyByEquiv(prefer, a);
    if (key2 === void 0) return false;
    const s = prefer.get(key2);
    if (setHasEquiv(s, b)) return true;
    for (const x of s) if (_prefers(prefer, x, b)) return true;
    return false;
  }
  function dominates(h, prefer, a, b) {
    if (_prefers(prefer, a, b)) return true;
    if (!_EQ_(a, b) && _isa(h, a, b)) return true;
    return false;
  }
  var MultiFn = class {
    constructor(name, dispatchFn, defaultVal, hierarchy) {
      this.name = name;
      this.dispatchFn = __toFn(dispatchFn);
      this.defaultDispatchVal = defaultVal;
      this.hierarchy = hierarchy;
      this.methodTable = /* @__PURE__ */ new Map();
      this.preferTable = /* @__PURE__ */ new Map();
      this.methodCache = /* @__PURE__ */ new Map();
      this.cachedHierarchy = hierarchy.deref();
      this.defaultFn = null;
    }
    resetCache() {
      this.methodCache = /* @__PURE__ */ new Map();
      this.cachedHierarchy = this.hierarchy.deref();
      const defKey = findKeyByEquiv(this.methodTable, this.defaultDispatchVal);
      this.defaultFn = defKey !== void 0 ? this.methodTable.get(defKey) : null;
    }
    addMethod(dispatchVal, fn) {
      const existing = findKeyByEquiv(this.methodTable, dispatchVal);
      if (existing !== void 0) this.methodTable.delete(existing);
      this.methodTable.set(dispatchVal, fn);
      this.resetCache();
    }
    removeMethod(dispatchVal) {
      const key2 = findKeyByEquiv(this.methodTable, dispatchVal);
      if (key2 !== void 0) this.methodTable.delete(key2);
      this.resetCache();
    }
    preferMethod(a, b) {
      if (_prefers(this.preferTable, b, a)) {
        throw new Error(`Preference conflict in multimethod '${this.name}': ${String(b)} is already preferred to ${String(a)}`);
      }
      addRel(this.preferTable, a, b);
      this.resetCache();
    }
    findBest(val2) {
      const h = this.hierarchy.deref();
      let best = null;
      for (const [dv, fn] of this.methodTable) {
        if (_isa(h, val2, dv)) {
          if (best === null || dominates(h, this.preferTable, dv, best[0])) {
            best = [dv, fn];
          } else if (!dominates(h, this.preferTable, best[0], dv)) {
            throw new Error(`Multiple methods in multimethod '${this.name}' match dispatch value: ${String(val2)} -> ${String(dv)} and ${String(best[0])}, and neither is preferred`);
          }
        }
      }
      return best;
    }
    getMethod(val2) {
      if (this.cachedHierarchy !== this.hierarchy.deref()) this.resetCache();
      if (isPrimitive(val2)) {
        const cached = this.methodCache.get(val2);
        if (cached !== void 0) return cached;
      } else {
        for (const [k, fn] of this.methodCache) if (_EQ_(k, val2)) return fn;
      }
      const exactKey = findKeyByEquiv(this.methodTable, val2);
      if (exactKey !== void 0) {
        const fn = this.methodTable.get(exactKey);
        this.methodCache.set(val2, fn);
        return fn;
      }
      const best = this.findBest(val2);
      if (best) {
        this.methodCache.set(val2, best[1]);
        return best[1];
      }
      return this.defaultFn;
    }
    invoke(args) {
      const val2 = this.dispatchFn.apply(null, args);
      const fn = this.getMethod(val2);
      if (!fn) throw new Error(`No method in multimethod '${this.name}' for dispatch value: ${String(val2)}`);
      return fn.apply(null, args);
    }
  };
  function defmulti(name, dispatchFn, opts) {
    opts = opts || {};
    const defaultVal = "default" in opts ? opts.default : "default";
    let hierarchy;
    if (opts.hierarchy == null) hierarchy = { deref: gh };
    else if (typeof opts.hierarchy.deref === "function") hierarchy = opts.hierarchy;
    else {
      const h = opts.hierarchy;
      hierarchy = { deref: () => h };
    }
    const mf = new MultiFn(name, dispatchFn, defaultVal, hierarchy);
    const call = function(...args) {
      return mf.invoke(args);
    };
    call.multiFn = mf;
    return call;
  }
  function defmethod(mf, dispatchVal, fn) {
    mf.multiFn.addMethod(dispatchVal, fn);
    return mf;
  }
  function get_method(mf, dispatchVal) {
    return mf.multiFn.getMethod(dispatchVal);
  }
  function methods(mf) {
    return new Map(mf.multiFn.methodTable);
  }
  function remove_method(mf, dispatchVal) {
    mf.multiFn.removeMethod(dispatchVal);
    return mf;
  }
  function remove_all_methods(mf) {
    mf.multiFn.methodTable.clear();
    mf.multiFn.resetCache();
    return mf;
  }
  function prefer_method(mf, a, b) {
    mf.multiFn.preferMethod(a, b);
    return mf;
  }
  function prefers(mf) {
    return new Map(mf.multiFn.preferTable);
  }

  // node_modules/squint-cljs/src/squint/test.js
  var _STAR_current_env_STAR_ = null;
  var _STAR_current_reporter_STAR_ = "cljs.test/default";
  var current_reporter = function() {
    const or__23476__auto__1 = _STAR_current_reporter_STAR_;
    if (truth_(or__23476__auto__1)) {
      return or__23476__auto__1;
    } else {
      return "cljs.test/default";
    }
    ;
  };
  var empty_env = function() {
    return { "report-counters": { "test": 0, "pass": 0, "fail": 0, "error": 0 }, "testing-vars": list(), "testing-contexts": list(), "once-fixtures": {}, "each-fixtures": {} };
  };
  var get_current_env = function() {
    const or__23476__auto__1 = _STAR_current_env_STAR_;
    if (truth_(or__23476__auto__1)) {
      return or__23476__auto__1;
    } else {
      return empty_env();
    }
    ;
  };
  var set_env_BANG_ = function(env) {
    _STAR_current_env_STAR_ = env;
    return env;
  };
  var clear_env_BANG_ = function() {
    _STAR_current_env_STAR_ = null;
    return null;
  };
  var update_current_env_BANG_ = (() => {
    const f1 = (function(var_args) {
      const args21 = [];
      const len__23403__auto__2 = arguments.length;
      let i33 = 0;
      while (true) {
        if (i33 < len__23403__auto__2) {
          args21.push(arguments[i33]);
          let G__4 = i33 + 1;
          i33 = G__4;
          continue;
        }
        ;
        break;
      }
      ;
      const argseq__23572__auto__5 = 2 < args21.length ? args21.slice(2) : null;
      return f1.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], argseq__23572__auto__5);
    });
    f1.cljs$core$IFn$_invoke$arity$variadic = (function(ks, f, args) {
      const env6 = get_current_env();
      const new_env7 = apply(update_in, env6, ks, f, args);
      return set_env_BANG_(new_env7);
    });
    f1.cljs$lang$maxFixedArity = 2;
    return f1;
  })();
  var testing_contexts_str = function() {
    const temp__23113__auto__1 = seq(get(get_current_env(), "testing-contexts"));
    if (truth_(temp__23113__auto__1)) {
      const contexts2 = temp__23113__auto__1;
      return join(" ", reverse(contexts2));
    }
    ;
  };
  var testing_vars_str = function() {
    const temp__23113__auto__1 = seq(get(get_current_env(), "testing-vars"));
    if (truth_(temp__23113__auto__1)) {
      const vars2 = temp__23113__auto__1;
      return join(" ", map(str, vars2));
    }
    ;
  };
  var inc_report_counter_BANG_ = function(name) {
    if (truth_(get(get_current_env(), "report-counters"))) {
      return update_current_env_BANG_(["report-counters", name], fnil(inc, 0));
    }
    ;
  };
  var current_test_str = function() {
    const vars1 = testing_vars_str();
    const ctx2 = testing_contexts_str();
    if (truth_((() => {
      const and__23514__auto__3 = vars1;
      if (truth_(and__23514__auto__3)) {
        return ctx2;
      } else {
        return and__23514__auto__3;
      }
      ;
    })())) {
      return `${vars1 ?? ""}${" "}${ctx2 ?? ""}`;
    } else {
      if (truth_(vars1)) {
        return vars1;
      } else {
        if (truth_(ctx2)) {
          return ctx2;
        } else {
          if ("else") {
            return "test";
          } else {
            return null;
          }
        }
      }
    }
    ;
  };
  var report_loc = function(p__5) {
    const map__12 = p__5;
    const line3 = get(map__12, "line");
    const column4 = get(map__12, "column");
    const file5 = get(map__12, "file");
    if (truth_((() => {
      const or__23476__auto__6 = line3;
      if (truth_(or__23476__auto__6)) {
        return or__23476__auto__6;
      } else {
        const or__23476__auto__7 = column4;
        if (truth_(or__23476__auto__7)) {
          return or__23476__auto__7;
        } else {
          return file5;
        }
        ;
      }
      ;
    })())) {
      return `${(truth_(file5) ? `${file5 ?? ""}${":"}` : null) ?? ""}${(truth_(line3) ? line3 : null) ?? ""}${(truth_(column4) ? `${":"}${column4 ?? ""}` : null) ?? ""}`;
    }
    ;
  };
  var report = defmulti("report", (function(m) {
    return [current_reporter(), get(m, "type")];
  }), {});
  defmethod(report, "default", (function(_m) {
    return null;
  }));
  defmethod(report, ["cljs.test/default", "pass"], (function(_2) {
    return inc_report_counter_BANG_("pass");
  }));
  defmethod(report, ["cljs.test/default", "fail"], (function(m) {
    inc_report_counter_BANG_("fail");
    console.error(`${"FAIL in "}${current_test_str() ?? ""}${(() => {
      const temp__23113__auto__1 = report_loc(m);
      if (truth_(temp__23113__auto__1)) {
        const l2 = temp__23113__auto__1;
        return `${" ("}${l2 ?? ""}${")"}`;
      }
      ;
    })() ?? ""}`);
    if (truth_(get(m, "message"))) {
      console.error("  ", get(m, "message"));
    }
    ;
    console.error("  expected:", pr_str(get(m, "expected")));
    return console.error("    actual:", pr_str(get(m, "actual")));
  }));
  defmethod(report, ["cljs.test/default", "error"], (function(m) {
    inc_report_counter_BANG_("error");
    console.error(`${"ERROR in "}${current_test_str() ?? ""}${(() => {
      const temp__23113__auto__1 = report_loc(m);
      if (truth_(temp__23113__auto__1)) {
        const l2 = temp__23113__auto__1;
        return `${" ("}${l2 ?? ""}${")"}`;
      }
      ;
    })() ?? ""}`);
    if (truth_(get(m, "message"))) {
      console.error("  ", get(m, "message"));
    }
    ;
    if (truth_(get(m, "expected"))) {
      console.error("  expected:", pr_str(get(m, "expected")));
    }
    ;
    return console.error("    actual:", pr_str(get(m, "actual")));
  }));
  defmethod(report, ["cljs.test/default", "begin-test-ns"], (function(m) {
    return console.log("\nTesting", `${get(m, "ns") ?? ""}`);
  }));
  defmethod(report, ["cljs.test/default", "end-test-ns"], (function(_2) {
    return null;
  }));
  defmethod(report, ["cljs.test/default", "begin-test-var"], (function(_2) {
    return null;
  }));
  defmethod(report, ["cljs.test/default", "end-test-var"], (function(_2) {
    return null;
  }));
  defmethod(report, ["cljs.test/default", "summary"], (function(_2) {
    let map__16 = get(get_current_env(), "report-counters");
    let test7 = get(map__16, "test");
    let pass8 = get(map__16, "pass");
    let fail9 = get(map__16, "fail");
    let error10 = get(map__16, "error");
    console.log("\nRan", test7, "tests containing", pass8 + fail9 + error10, "assertions.");
    return console.log(`${fail9 ?? ""}`, "failures,", `${error10 ?? ""}`, "errors.");
  }));
  var successful_QMARK_ = function(results) {
    return get(results, "fail", 0) === 0 && get(results, "error", 0) === 0;
  };
  var async_QMARK_ = function(x) {
    const c__23442__auto__1 = Promise;
    const x__23443__auto__2 = x;
    const ret__23444__auto__3 = x__23443__auto__2 instanceof c__23442__auto__1;
    return ret__23444__auto__3;
  };
  var wrap_async = function(setup, teardown) {
    return function(test_fn) {
      setup();
      const result1 = test_fn();
      if (truth_(async_QMARK_(result1))) {
        return result1.finally(teardown);
      } else {
        teardown();
        return result1;
      }
      ;
    };
  };
  var compose_fixtures = function(f1, f2) {
    return function(g) {
      return f1((function() {
        return f2(g);
      }));
    };
  };
  var join_fixtures = function(fixtures) {
    return reduce(compose_fixtures, (function(f) {
      return f();
    }), fixtures);
  };
  var get_each_fixtures = (() => {
    const f11 = (function(...args12) {
      const G__131 = args12.length;
      switch (G__131) {
        case 0:
          return f11.cljs$core$IFn$_invoke$arity$0();
          break;
        case 1:
          return f11.cljs$core$IFn$_invoke$arity$1(args12[0]);
          break;
        default:
          throw new Error(`${"Invalid arity: "}${args12.length ?? ""}`);
      }
      ;
    });
    f11.cljs$core$IFn$_invoke$arity$0 = (function() {
      return get_each_fixtures(null);
    });
    f11.cljs$core$IFn$_invoke$arity$1 = (function(ns_str) {
      return get_in(get_current_env(), ["each-fixtures", ns_str], []);
    });
    f11.cljs$lang$maxFixedArity = 1;
    return f11;
  })();
  var set_each_fixtures_BANG_ = (() => {
    const f14 = (function(...args15) {
      const G__161 = args15.length;
      switch (G__161) {
        case 1:
          return f14.cljs$core$IFn$_invoke$arity$1(args15[0]);
          break;
        case 2:
          return f14.cljs$core$IFn$_invoke$arity$2(args15[0], args15[1]);
          break;
        default:
          throw new Error(`${"Invalid arity: "}${args15.length ?? ""}`);
      }
      ;
    });
    f14.cljs$core$IFn$_invoke$arity$1 = (function(fixtures) {
      return set_each_fixtures_BANG_(null, fixtures);
    });
    f14.cljs$core$IFn$_invoke$arity$2 = (function(ns_str, fixtures) {
      return update_current_env_BANG_(["each-fixtures", ns_str], constantly(fixtures));
    });
    f14.cljs$lang$maxFixedArity = 2;
    return f14;
  })();
  var get_once_fixtures = (() => {
    const f17 = (function(...args18) {
      const G__191 = args18.length;
      switch (G__191) {
        case 0:
          return f17.cljs$core$IFn$_invoke$arity$0();
          break;
        case 1:
          return f17.cljs$core$IFn$_invoke$arity$1(args18[0]);
          break;
        default:
          throw new Error(`${"Invalid arity: "}${args18.length ?? ""}`);
      }
      ;
    });
    f17.cljs$core$IFn$_invoke$arity$0 = (function() {
      return get_once_fixtures(null);
    });
    f17.cljs$core$IFn$_invoke$arity$1 = (function(ns_str) {
      return get_in(get_current_env(), ["once-fixtures", ns_str], []);
    });
    f17.cljs$lang$maxFixedArity = 1;
    return f17;
  })();
  var set_once_fixtures_BANG_ = (() => {
    const f20 = (function(...args21) {
      const G__221 = args21.length;
      switch (G__221) {
        case 1:
          return f20.cljs$core$IFn$_invoke$arity$1(args21[0]);
          break;
        case 2:
          return f20.cljs$core$IFn$_invoke$arity$2(args21[0], args21[1]);
          break;
        default:
          throw new Error(`${"Invalid arity: "}${args21.length ?? ""}`);
      }
      ;
    });
    f20.cljs$core$IFn$_invoke$arity$1 = (function(fixtures) {
      return set_once_fixtures_BANG_(null, fixtures);
    });
    f20.cljs$core$IFn$_invoke$arity$2 = (function(ns_str, fixtures) {
      return update_current_env_BANG_(["once-fixtures", ns_str], constantly(fixtures));
    });
    f20.cljs$lang$maxFixedArity = 2;
    return f20;
  })();
  var test_var = function(v) {
    if (truth_(fn_QMARK_(v))) {
      const test_name1 = (() => {
        const or__23476__auto__2 = get(meta(v), "name");
        if (truth_(or__23476__auto__2)) {
          return or__23476__auto__2;
        } else {
          return "anonymous";
        }
        ;
      })();
      const ns_str3 = get(meta(v), "ns");
      const each_fixtures4 = (() => {
        const per_ns5 = get_each_fixtures(ns_str3);
        if (truth_(seq(per_ns5))) {
          return per_ns5;
        } else {
          return get_each_fixtures();
        }
        ;
      })();
      const wrapped_test6 = truth_(seq(each_fixtures4)) ? (function() {
        return join_fixtures(each_fixtures4)(v);
      }) : v;
      const end_BANG_7 = (function() {
        report({ "type": "end-test-var", "name": test_name1, "ns": ns_str3, "var": v });
        return update_current_env_BANG_(["testing-vars"], rest);
      });
      update_current_env_BANG_(["testing-vars"], conj, test_name1);
      inc_report_counter_BANG_("test");
      report({ "type": "begin-test-var", "name": test_name1, "ns": ns_str3, "var": v });
      return (() => {
        try {
          const result8 = wrapped_test6();
          if (truth_(async_QMARK_(result8))) {
            return result8.then((function(r) {
              end_BANG_7();
              return r;
            })).catch((function(e) {
              report({ "type": "error", "message": e.message, "expected": null, "actual": e });
              return end_BANG_7();
            }));
          } else {
            end_BANG_7();
            return result8;
          }
          ;
        } catch (e9) {
          report({ "type": "error", "message": e9.message, "expected": null, "actual": e9 });
          return end_BANG_7();
        }
      })();
    }
    ;
  };
  var test_registry = atom({});
  var register_test_BANG_ = function(ns_str, test_fn) {
    const test_name1 = get(meta(test_fn), "name");
    swap_BANG_(test_registry, assoc_in, [ns_str, test_name1], test_fn);
    return test_fn;
  };
  var registered_tests = (() => {
    const f23 = (function(...args24) {
      const G__251 = args24.length;
      switch (G__251) {
        case 0:
          return f23.cljs$core$IFn$_invoke$arity$0();
          break;
        case 1:
          return f23.cljs$core$IFn$_invoke$arity$1(args24[0]);
          break;
        default:
          throw new Error(`${"Invalid arity: "}${args24.length ?? ""}`);
      }
      ;
    });
    f23.cljs$core$IFn$_invoke$arity$0 = (function() {
      return vec(mapcat(vals, vals(deref(test_registry))));
    });
    f23.cljs$core$IFn$_invoke$arity$1 = (function(ns_str) {
      return vec(vals(get(deref(test_registry), ns_str)));
    });
    f23.cljs$lang$maxFixedArity = 1;
    return f23;
  })();
  var run_vars_with_once_fixtures = function(ns_str, vars) {
    const per_ns1 = get_once_fixtures(ns_str);
    const once_fixtures2 = truth_(seq(per_ns1)) ? per_ns1 : get_once_fixtures();
    const run_all3 = (function() {
      return reduce((function(chain, v) {
        if (truth_(async_QMARK_(chain))) {
          return chain.then((function(_2) {
            return test_var(v);
          }));
        } else {
          return test_var(v);
        }
        ;
      }), null, vars);
    });
    const run_with_fixtures4 = (function() {
      if (truth_(seq(once_fixtures2))) {
        return join_fixtures(once_fixtures2)(run_all3);
      } else {
        return run_all3();
      }
      ;
    });
    if (truth_(ns_str)) {
      report({ "type": "begin-test-ns", "ns": ns_str });
    }
    ;
    const chain5 = run_with_fixtures4();
    const finish6 = (function(r) {
      if (truth_(ns_str)) {
        report({ "type": "end-test-ns", "ns": ns_str });
      }
      ;
      return r;
    });
    if (truth_(async_QMARK_(chain5))) {
      return chain5.then(finish6);
    } else {
      return finish6(chain5);
    }
    ;
  };
  var fresh_counters = { "test": 0, "pass": 0, "fail": 0, "error": 0 };
  var run_tests = (() => {
    const f26 = (function(var_args) {
      const args271 = [];
      const len__23403__auto__2 = arguments.length;
      let i283 = 0;
      while (true) {
        if (i283 < len__23403__auto__2) {
          args271.push(arguments[i283]);
          let G__4 = i283 + 1;
          i283 = G__4;
          continue;
        }
        ;
        break;
      }
      ;
      const argseq__23572__auto__5 = 0 < args271.length ? args271.slice(0) : null;
      return f26.cljs$core$IFn$_invoke$arity$variadic(argseq__23572__auto__5);
    });
    f26.cljs$core$IFn$_invoke$arity$variadic = (function(args) {
      const test_vars6 = truth_(empty_QMARK_(args)) ? registered_tests() : truth_(string_QMARK_(first(args))) ? vec(mapcat(registered_tests, args)) : "else" ? args : null;
      const _7 = _STAR_current_env_STAR_ == null ? set_env_BANG_(empty_env()) : null;
      const saved_counters8 = get(get_current_env(), "report-counters");
      const _9 = update_current_env_BANG_(["report-counters"], constantly(fresh_counters));
      const groups10 = reduce((function(acc, v) {
        const k11 = get(meta(v), "ns");
        return update(acc, k11, fnil(conj, []), v);
      }), {}, test_vars6);
      const run_groups12 = (function() {
        return reduce((function(chain, p__30) {
          const vec__1316 = p__30;
          const ns_str17 = nth(vec__1316, 0, null);
          const vars18 = nth(vec__1316, 1, null);
          if (truth_(async_QMARK_(chain))) {
            return chain.then((function(_2) {
              return run_vars_with_once_fixtures(ns_str17, vars18);
            }));
          } else {
            return run_vars_with_once_fixtures(ns_str17, vars18);
          }
          ;
        }), null, groups10);
      });
      const finish19 = (function(_2) {
        report({ "type": "summary" });
        const counters20 = get(get_current_env(), "report-counters");
        update_current_env_BANG_(["report-counters"], constantly(saved_counters8));
        return counters20;
      });
      const chain21 = run_groups12();
      if (truth_(async_QMARK_(chain21))) {
        return chain21.then(finish19);
      } else {
        return finish19(null);
      }
      ;
    });
    f26.cljs$lang$maxFixedArity = 0;
    return f26;
  })();

  // entry.js
  globalThis.squint_lib = { core: core_exports, math: math_exports, string: string_exports, set: set_exports, test: test_exports, multi: multi_exports, html: html_exports };
})();
