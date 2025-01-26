import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var M0 = Object.create;
var zs = Object.defineProperty;
var j0 = Object.getOwnPropertyDescriptor;
var I0 = Object.getOwnPropertyNames;
var L0 = Object.getPrototypeOf, N0 = Object.prototype.hasOwnProperty;
var n = (e, t) => zs(e, "name", { value: t, configurable: !0 }), C = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var b = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var H0 = (e, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of I0(t))
      !N0.call(e, s) && s !== r && zs(e, s, { get: () => t[s], enumerable: !(i = j0(t, s)) || i.enumerable });
  return e;
};
var be = (e, t, r) => (r = e != null ? M0(L0(e)) : {}, H0(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? zs(r, "default", { value: e, enumerable: !0 }) : r,
  e
));

// ../node_modules/prompts/node_modules/kleur/index.js
var ue = b((T8, Xl) => {
  "use strict";
  var { FORCE_COLOR: X0, NODE_DISABLE_COLORS: Q0, TERM: Z0 } = process.env, J = {
    enabled: !Q0 && Z0 !== "dumb" && X0 !== "0",
    // modifiers
    reset: K(0, 0),
    bold: K(1, 22),
    dim: K(2, 22),
    italic: K(3, 23),
    underline: K(4, 24),
    inverse: K(7, 27),
    hidden: K(8, 28),
    strikethrough: K(9, 29),
    // colors
    black: K(30, 39),
    red: K(31, 39),
    green: K(32, 39),
    yellow: K(33, 39),
    blue: K(34, 39),
    magenta: K(35, 39),
    cyan: K(36, 39),
    white: K(37, 39),
    gray: K(90, 39),
    grey: K(90, 39),
    // background colors
    bgBlack: K(40, 49),
    bgRed: K(41, 49),
    bgGreen: K(42, 49),
    bgYellow: K(43, 49),
    bgBlue: K(44, 49),
    bgMagenta: K(45, 49),
    bgCyan: K(46, 49),
    bgWhite: K(47, 49)
  };
  function Kl(e, t) {
    let r = 0, i, s = "", o = "";
    for (; r < e.length; r++)
      i = e[r], s += i.open, o += i.close, t.includes(i.close) && (t = t.replace(i.rgx, i.close + i.open));
    return s + t + o;
  }
  n(Kl, "run");
  function ev(e, t) {
    let r = { has: e, keys: t };
    return r.reset = J.reset.bind(r), r.bold = J.bold.bind(r), r.dim = J.dim.bind(r), r.italic = J.italic.bind(r), r.underline = J.underline.
    bind(r), r.inverse = J.inverse.bind(r), r.hidden = J.hidden.bind(r), r.strikethrough = J.strikethrough.bind(r), r.black = J.black.bind(r),
    r.red = J.red.bind(r), r.green = J.green.bind(r), r.yellow = J.yellow.bind(r), r.blue = J.blue.bind(r), r.magenta = J.magenta.bind(r), r.
    cyan = J.cyan.bind(r), r.white = J.white.bind(r), r.gray = J.gray.bind(r), r.grey = J.grey.bind(r), r.bgBlack = J.bgBlack.bind(r), r.bgRed =
    J.bgRed.bind(r), r.bgGreen = J.bgGreen.bind(r), r.bgYellow = J.bgYellow.bind(r), r.bgBlue = J.bgBlue.bind(r), r.bgMagenta = J.bgMagenta.
    bind(r), r.bgCyan = J.bgCyan.bind(r), r.bgWhite = J.bgWhite.bind(r), r;
  }
  n(ev, "chain");
  function K(e, t) {
    let r = {
      open: `\x1B[${e}m`,
      close: `\x1B[${t}m`,
      rgx: new RegExp(`\\x1b\\[${t}m`, "g")
    };
    return function(i) {
      return this !== void 0 && this.has !== void 0 ? (this.has.includes(e) || (this.has.push(e), this.keys.push(r)), i === void 0 ? this : J.
      enabled ? Kl(this.keys, i + "") : i + "") : i === void 0 ? ev([e], [r]) : J.enabled ? Kl([r], i + "") : i + "";
    };
  }
  n(K, "init");
  Xl.exports = J;
});

// ../node_modules/prompts/dist/util/action.js
var Zl = b((k8, Ql) => {
  "use strict";
  Ql.exports = (e, t) => {
    if (!(e.meta && e.name !== "escape")) {
      if (e.ctrl) {
        if (e.name === "a") return "first";
        if (e.name === "c" || e.name === "d") return "abort";
        if (e.name === "e") return "last";
        if (e.name === "g") return "reset";
      }
      if (t) {
        if (e.name === "j") return "down";
        if (e.name === "k") return "up";
      }
      return e.name === "return" || e.name === "enter" ? "submit" : e.name === "backspace" ? "delete" : e.name === "delete" ? "deleteForward" :
      e.name === "abort" ? "abort" : e.name === "escape" ? "exit" : e.name === "tab" ? "next" : e.name === "pagedown" ? "nextPage" : e.name ===
      "pageup" ? "prevPage" : e.name === "home" ? "home" : e.name === "end" ? "end" : e.name === "up" ? "up" : e.name === "down" ? "down" : e.
      name === "right" ? "right" : e.name === "left" ? "left" : !1;
    }
  };
});

// ../node_modules/prompts/dist/util/strip.js
var Yi = b((O8, ef) => {
  "use strict";
  ef.exports = (e) => {
    let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|"), r = new RegExp(t, "g");
    return typeof e == "string" ? e.replace(r, "") : e;
  };
});

// ../node_modules/sisteransi/src/index.js
var le = b((P8, tf) => {
  "use strict";
  var Js = "\x1B", ae = `${Js}[`, tv = "\x07", Ys = {
    to(e, t) {
      return t ? `${ae}${t + 1};${e + 1}H` : `${ae}${e + 1}G`;
    },
    move(e, t) {
      let r = "";
      return e < 0 ? r += `${ae}${-e}D` : e > 0 && (r += `${ae}${e}C`), t < 0 ? r += `${ae}${-t}A` : t > 0 && (r += `${ae}${t}B`), r;
    },
    up: /* @__PURE__ */ n((e = 1) => `${ae}${e}A`, "up"),
    down: /* @__PURE__ */ n((e = 1) => `${ae}${e}B`, "down"),
    forward: /* @__PURE__ */ n((e = 1) => `${ae}${e}C`, "forward"),
    backward: /* @__PURE__ */ n((e = 1) => `${ae}${e}D`, "backward"),
    nextLine: /* @__PURE__ */ n((e = 1) => `${ae}E`.repeat(e), "nextLine"),
    prevLine: /* @__PURE__ */ n((e = 1) => `${ae}F`.repeat(e), "prevLine"),
    left: `${ae}G`,
    hide: `${ae}?25l`,
    show: `${ae}?25h`,
    save: `${Js}7`,
    restore: `${Js}8`
  }, rv = {
    up: /* @__PURE__ */ n((e = 1) => `${ae}S`.repeat(e), "up"),
    down: /* @__PURE__ */ n((e = 1) => `${ae}T`.repeat(e), "down")
  }, iv = {
    screen: `${ae}2J`,
    up: /* @__PURE__ */ n((e = 1) => `${ae}1J`.repeat(e), "up"),
    down: /* @__PURE__ */ n((e = 1) => `${ae}J`.repeat(e), "down"),
    line: `${ae}2K`,
    lineEnd: `${ae}K`,
    lineStart: `${ae}1K`,
    lines(e) {
      let t = "";
      for (let r = 0; r < e; r++)
        t += this.line + (r < e - 1 ? Ys.up() : "");
      return e && (t += Ys.left), t;
    }
  };
  tf.exports = { cursor: Ys, scroll: rv, erase: iv, beep: tv };
});

// ../node_modules/prompts/dist/util/clear.js
var uf = b((M8, of) => {
  "use strict";
  function nv(e, t) {
    var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = sv(e)) || t && e && typeof e.length == "number") {
        r && (e = r);
        var i = 0, s = /* @__PURE__ */ n(function() {
        }, "F");
        return { s, n: /* @__PURE__ */ n(function() {
          return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
        }, "n"), e: /* @__PURE__ */ n(function(f) {
          throw f;
        }, "e"), f: s };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o = !0, u = !1, a;
    return { s: /* @__PURE__ */ n(function() {
      r = r.call(e);
    }, "s"), n: /* @__PURE__ */ n(function() {
      var f = r.next();
      return o = f.done, f;
    }, "n"), e: /* @__PURE__ */ n(function(f) {
      u = !0, a = f;
    }, "e"), f: /* @__PURE__ */ n(function() {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (u) throw a;
      }
    }, "f") };
  }
  n(nv, "_createForOfIteratorHelper");
  function sv(e, t) {
    if (e) {
      if (typeof e == "string") return rf(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rf(e, t);
    }
  }
  n(sv, "_unsupportedIterableToArray");
  function rf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  n(rf, "_arrayLikeToArray");
  var ov = Yi(), sf = le(), nf = sf.erase, uv = sf.cursor, av = /* @__PURE__ */ n((e) => [...ov(e)].length, "width");
  of.exports = function(e, t) {
    if (!t) return nf.line + uv.to(0);
    let r = 0, i = e.split(/\r?\n/);
    var s = nv(i), o;
    try {
      for (s.s(); !(o = s.n()).done; ) {
        let u = o.value;
        r += 1 + Math.floor(Math.max(av(u) - 1, 0) / t);
      }
    } catch (u) {
      s.e(u);
    } finally {
      s.f();
    }
    return nf.lines(r);
  };
});

// ../node_modules/prompts/dist/util/figures.js
var Ks = b((I8, af) => {
  "use strict";
  var Hr = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  }, lv = {
    arrowUp: Hr.arrowUp,
    arrowDown: Hr.arrowDown,
    arrowLeft: Hr.arrowLeft,
    arrowRight: Hr.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  }, fv = process.platform === "win32" ? lv : Hr;
  af.exports = fv;
});

// ../node_modules/prompts/dist/util/style.js
var ff = b((L8, lf) => {
  "use strict";
  var ir = ue(), Mt = Ks(), Xs = Object.freeze({
    password: {
      scale: 1,
      render: /* @__PURE__ */ n((e) => "*".repeat(e.length), "render")
    },
    emoji: {
      scale: 2,
      render: /* @__PURE__ */ n((e) => "\u{1F603}".repeat(e.length), "render")
    },
    invisible: {
      scale: 0,
      render: /* @__PURE__ */ n((e) => "", "render")
    },
    default: {
      scale: 1,
      render: /* @__PURE__ */ n((e) => `${e}`, "render")
    }
  }), hv = /* @__PURE__ */ n((e) => Xs[e] || Xs.default, "render"), Ur = Object.freeze({
    aborted: ir.red(Mt.cross),
    done: ir.green(Mt.tick),
    exited: ir.yellow(Mt.cross),
    default: ir.cyan("?")
  }), cv = /* @__PURE__ */ n((e, t, r) => t ? Ur.aborted : r ? Ur.exited : e ? Ur.done : Ur.default, "symbol"), dv = /* @__PURE__ */ n((e) => ir.
  gray(e ? Mt.ellipsis : Mt.pointerSmall), "delimiter"), pv = /* @__PURE__ */ n((e, t) => ir.gray(e ? t ? Mt.pointerSmall : "+" : Mt.line), "\
item");
  lf.exports = {
    styles: Xs,
    render: hv,
    symbols: Ur,
    symbol: cv,
    delimiter: dv,
    item: pv
  };
});

// ../node_modules/prompts/dist/util/lines.js
var cf = b((H8, hf) => {
  "use strict";
  var Dv = Yi();
  hf.exports = function(e, t) {
    let r = String(Dv(e) || "").split(/\r?\n/);
    return t ? r.map((i) => Math.ceil(i.length / t)).reduce((i, s) => i + s) : r.length;
  };
});

// ../node_modules/prompts/dist/util/wrap.js
var pf = b((U8, df) => {
  "use strict";
  df.exports = (e, t = {}) => {
    let r = Number.isSafeInteger(parseInt(t.margin)) ? new Array(parseInt(t.margin)).fill(" ").join("") : t.margin || "", i = t.width;
    return (e || "").split(/\r?\n/g).map((s) => s.split(/\s+/g).reduce((o, u) => (u.length + r.length >= i || o[o.length - 1].length + u.length +
    1 < i ? o[o.length - 1] += ` ${u}` : o.push(`${r}${u}`), o), [r]).join(`
`)).join(`
`);
  };
});

// ../node_modules/prompts/dist/util/entriesToDisplay.js
var mf = b((W8, Df) => {
  "use strict";
  Df.exports = (e, t, r) => {
    r = r || t;
    let i = Math.min(t - r, e - Math.floor(r / 2));
    i < 0 && (i = 0);
    let s = Math.min(i + r, t);
    return {
      startIndex: i,
      endIndex: s
    };
  };
});

// ../node_modules/prompts/dist/util/index.js
var je = b(($8, gf) => {
  "use strict";
  gf.exports = {
    action: Zl(),
    clear: uf(),
    style: ff(),
    strip: Yi(),
    figures: Ks(),
    lines: cf(),
    wrap: pf(),
    entriesToDisplay: mf()
  };
});

// ../node_modules/prompts/dist/elements/prompt.js
var et = b((z8, vf) => {
  "use strict";
  var yf = C("readline"), mv = je(), gv = mv.action, yv = C("events"), bf = le(), bv = bf.beep, vv = bf.cursor, wv = ue(), Qs = class extends yv {
    static {
      n(this, "Prompt");
    }
    constructor(t = {}) {
      super(), this.firstRender = !0, this.in = t.stdin || process.stdin, this.out = t.stdout || process.stdout, this.onRender = (t.onRender ||
      (() => {
      })).bind(this);
      let r = yf.createInterface({
        input: this.in,
        escapeCodeTimeout: 50
      });
      yf.emitKeypressEvents(this.in, r), this.in.isTTY && this.in.setRawMode(!0);
      let i = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1, s = /* @__PURE__ */ n((o, u) => {
        let a = gv(u, i);
        a === !1 ? this._ && this._(o, u) : typeof this[a] == "function" ? this[a](u) : this.bell();
      }, "keypress");
      this.close = () => {
        this.out.write(vv.show), this.in.removeListener("keypress", s), this.in.isTTY && this.in.setRawMode(!1), r.close(), this.emit(this.aborted ?
        "abort" : this.exited ? "exit" : "submit", this.value), this.closed = !0;
      }, this.in.on("keypress", s);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(bv);
    }
    render() {
      this.onRender(wv), this.firstRender && (this.firstRender = !1);
    }
  };
  vf.exports = Qs;
});

// ../node_modules/prompts/dist/elements/text.js
var Ff = b((G8, Cf) => {
  "use strict";
  function wf(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(wf, "asyncGeneratorStep");
  function _f(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          wf(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          wf(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(_f, "_asyncToGenerator");
  var Ki = ue(), _v = et(), Ef = le(), Ev = Ef.erase, Wr = Ef.cursor, Xi = je(), Zs = Xi.style, eo = Xi.clear, Cv = Xi.lines, Fv = Xi.figures,
  to = class extends _v {
    static {
      n(this, "TextPrompt");
    }
    constructor(t = {}) {
      super(t), this.transform = Zs.render(t.style), this.scale = this.transform.scale, this.msg = t.message, this.initial = t.initial || "",
      this.validator = t.validate || (() => !0), this.value = "", this.errorMsg = t.error || "Please Enter A Valid Value", this.cursor = +!!this.
      initial, this.cursorOffset = 0, this.clear = eo("", this.out.columns), this.render();
    }
    set value(t) {
      !t && this.initial ? (this.placeholder = !0, this.rendered = Ki.gray(this.transform.render(this.initial))) : (this.placeholder = !1, this.
      rendered = this.transform.render(t)), this._value = t, this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = "", this.cursor = +!!this.initial, this.cursorOffset = 0, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial, this.done = this.aborted = !0, this.error = !1, this.red = !1, this.fire(), this.render(), this.
      out.write(`
`), this.close();
    }
    validate() {
      var t = this;
      return _f(function* () {
        let r = yield t.validator(t.value);
        typeof r == "string" && (t.errorMsg = r, r = !1), t.error = !r;
      })();
    }
    submit() {
      var t = this;
      return _f(function* () {
        if (t.value = t.value || t.initial, t.cursorOffset = 0, t.cursor = t.rendered.length, yield t.validate(), t.error) {
          t.red = !0, t.fire(), t.render();
          return;
        }
        t.done = !0, t.aborted = !1, t.fire(), t.render(), t.out.write(`
`), t.close();
      })();
    }
    next() {
      if (!this.placeholder) return this.bell();
      this.value = this.initial, this.cursor = this.rendered.length, this.fire(), this.render();
    }
    moveCursor(t) {
      this.placeholder || (this.cursor = this.cursor + t, this.cursorOffset += t);
    }
    _(t, r) {
      let i = this.value.slice(0, this.cursor), s = this.value.slice(this.cursor);
      this.value = `${i}${t}${s}`, this.red = !1, this.cursor = this.placeholder ? 0 : i.length + 1, this.render();
    }
    delete() {
      if (this.isCursorAtStart()) return this.bell();
      let t = this.value.slice(0, this.cursor - 1), r = this.value.slice(this.cursor);
      this.value = `${t}${r}`, this.red = !1, this.isCursorAtStart() ? this.cursorOffset = 0 : (this.cursorOffset++, this.moveCursor(-1)), this.
      render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      let t = this.value.slice(0, this.cursor), r = this.value.slice(this.cursor + 1);
      this.value = `${t}${r}`, this.red = !1, this.isCursorAtEnd() ? this.cursorOffset = 0 : this.cursorOffset++, this.render();
    }
    first() {
      this.cursor = 0, this.render();
    }
    last() {
      this.cursor = this.value.length, this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder) return this.bell();
      this.moveCursor(-1), this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      this.moveCursor(1), this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      this.closed || (this.firstRender || (this.outputError && this.out.write(Wr.down(Cv(this.outputError, this.out.columns) - 1) + eo(this.
      outputError, this.out.columns)), this.out.write(eo(this.outputText, this.out.columns))), super.render(), this.outputError = "", this.outputText =
      [Zs.symbol(this.done, this.aborted), Ki.bold(this.msg), Zs.delimiter(this.done), this.red ? Ki.red(this.rendered) : this.rendered].join(
      " "), this.error && (this.outputError += this.errorMsg.split(`
`).reduce((t, r, i) => t + `
${i ? " " : Fv.pointerSmall} ${Ki.red().italic(r)}`, "")), this.out.write(Ev.line + Wr.to(0) + this.outputText + Wr.save + this.outputError +
      Wr.restore + Wr.move(this.cursorOffset, 0)));
    }
  };
  Cf.exports = to;
});

// ../node_modules/prompts/dist/elements/select.js
var Rf = b((Y8, Af) => {
  "use strict";
  var tt = ue(), xv = et(), $r = je(), xf = $r.style, Sf = $r.clear, Qi = $r.figures, Sv = $r.wrap, Av = $r.entriesToDisplay, Rv = le(), Tv = Rv.
  cursor, ro = class extends xv {
    static {
      n(this, "SelectPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.hint = t.hint || "- Use arrow-keys. Return to submit.", this.warn = t.warn || "- This option is d\
isabled", this.cursor = t.initial || 0, this.choices = t.choices.map((r, i) => (typeof r == "string" && (r = {
        title: r,
        value: i
      }), {
        title: r && (r.title || r.value || r),
        value: r && (r.value === void 0 ? i : r.value),
        description: r && r.description,
        selected: r && r.selected,
        disabled: r && r.disabled
      })), this.optionsPerPage = t.optionsPerPage || 10, this.value = (this.choices[this.cursor] || {}).value, this.clear = Sf("", this.out.
      columns), this.render();
    }
    moveCursor(t) {
      this.cursor = t, this.value = this.choices[t].value, this.fire();
    }
    reset() {
      this.moveCursor(0), this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.selection.disabled ? this.bell() : (this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close());
    }
    first() {
      this.moveCursor(0), this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1), this.render();
    }
    up() {
      this.cursor === 0 ? this.moveCursor(this.choices.length - 1) : this.moveCursor(this.cursor - 1), this.render();
    }
    down() {
      this.cursor === this.choices.length - 1 ? this.moveCursor(0) : this.moveCursor(this.cursor + 1), this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length), this.render();
    }
    _(t, r) {
      if (t === " ") return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed) return;
      this.firstRender ? this.out.write(Tv.hide) : this.out.write(Sf(this.outputText, this.out.columns)), super.render();
      let t = Av(this.cursor, this.choices.length, this.optionsPerPage), r = t.startIndex, i = t.endIndex;
      if (this.outputText = [xf.symbol(this.done, this.aborted), tt.bold(this.msg), xf.delimiter(!1), this.done ? this.selection.title : this.
      selection.disabled ? tt.yellow(this.warn) : tt.gray(this.hint)].join(" "), !this.done) {
        this.outputText += `
`;
        for (let s = r; s < i; s++) {
          let o, u, a = "", l = this.choices[s];
          s === r && r > 0 ? u = Qi.arrowUp : s === i - 1 && i < this.choices.length ? u = Qi.arrowDown : u = " ", l.disabled ? (o = this.cursor ===
          s ? tt.gray().underline(l.title) : tt.strikethrough().gray(l.title), u = (this.cursor === s ? tt.bold().gray(Qi.pointer) + " " : "\
  ") + u) : (o = this.cursor === s ? tt.cyan().underline(l.title) : l.title, u = (this.cursor === s ? tt.cyan(Qi.pointer) + " " : "  ") + u,
          l.description && this.cursor === s && (a = ` - ${l.description}`, (u.length + o.length + a.length >= this.out.columns || l.description.
          split(/\r?\n/).length > 1) && (a = `
` + Sv(l.description, {
            margin: 3,
            width: this.out.columns
          })))), this.outputText += `${u} ${o}${tt.gray(a)}
`;
        }
      }
      this.out.write(this.outputText);
    }
  };
  Af.exports = ro;
});

// ../node_modules/prompts/dist/elements/toggle.js
var qf = b((X8, Pf) => {
  "use strict";
  var Zi = ue(), Bv = et(), kf = je(), Tf = kf.style, kv = kf.clear, Of = le(), Bf = Of.cursor, Ov = Of.erase, io = class extends Bv {
    static {
      n(this, "TogglePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.value = !!t.initial, this.active = t.active || "on", this.inactive = t.inactive || "off", this.initialValue =
      this.value, this.render();
    }
    reset() {
      this.value = this.initialValue, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    deactivate() {
      if (this.value === !1) return this.bell();
      this.value = !1, this.render();
    }
    activate() {
      if (this.value === !0) return this.bell();
      this.value = !0, this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value, this.fire(), this.render();
    }
    _(t, r) {
      if (t === " ")
        this.value = !this.value;
      else if (t === "1")
        this.value = !0;
      else if (t === "0")
        this.value = !1;
      else return this.bell();
      this.render();
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(Bf.hide) : this.out.write(kv(this.outputText, this.out.columns)), super.render(), this.
      outputText = [Tf.symbol(this.done, this.aborted), Zi.bold(this.msg), Tf.delimiter(this.done), this.value ? this.inactive : Zi.cyan().underline(
      this.inactive), Zi.gray("/"), this.value ? Zi.cyan().underline(this.active) : this.active].join(" "), this.out.write(Ov.line + Bf.to(0) +
      this.outputText));
    }
  };
  Pf.exports = io;
});

// ../node_modules/prompts/dist/dateparts/datepart.js
var Ue = b((Z8, Mf) => {
  "use strict";
  var no = class e {
    static {
      n(this, "DatePart");
    }
    constructor({
      token: t,
      date: r,
      parts: i,
      locales: s
    }) {
      this.token = t, this.date = r || /* @__PURE__ */ new Date(), this.parts = i || [this], this.locales = s || {};
    }
    up() {
    }
    down() {
    }
    next() {
      let t = this.parts.indexOf(this);
      return this.parts.find((r, i) => i > t && r instanceof e);
    }
    setTo(t) {
    }
    prev() {
      let t = [].concat(this.parts).reverse(), r = t.indexOf(this);
      return t.find((i, s) => s > r && i instanceof e);
    }
    toString() {
      return String(this.date);
    }
  };
  Mf.exports = no;
});

// ../node_modules/prompts/dist/dateparts/meridiem.js
var If = b((tB, jf) => {
  "use strict";
  var Pv = Ue(), so = class extends Pv {
    static {
      n(this, "Meridiem");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let t = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? t.toUpperCase() : t;
    }
  };
  jf.exports = so;
});

// ../node_modules/prompts/dist/dateparts/day.js
var Nf = b((iB, Lf) => {
  "use strict";
  var qv = Ue(), Mv = /* @__PURE__ */ n((e) => (e = e % 10, e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th"), "pos"), oo = class extends qv {
    static {
      n(this, "Day");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(t) {
      this.date.setDate(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getDate(), r = this.date.getDay();
      return this.token === "DD" ? String(t).padStart(2, "0") : this.token === "Do" ? t + Mv(t) : this.token === "d" ? r + 1 : this.token ===
      "ddd" ? this.locales.weekdaysShort[r] : this.token === "dddd" ? this.locales.weekdays[r] : t;
    }
  };
  Lf.exports = oo;
});

// ../node_modules/prompts/dist/dateparts/hours.js
var Uf = b((sB, Hf) => {
  "use strict";
  var jv = Ue(), uo = class extends jv {
    static {
      n(this, "Hours");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(t) {
      this.date.setHours(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getHours();
      return /h/.test(this.token) && (t = t % 12 || 12), this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  Hf.exports = uo;
});

// ../node_modules/prompts/dist/dateparts/milliseconds.js
var $f = b((uB, Wf) => {
  "use strict";
  var Iv = Ue(), ao = class extends Iv {
    static {
      n(this, "Milliseconds");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(t) {
      this.date.setMilliseconds(parseInt(t.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  };
  Wf.exports = ao;
});

// ../node_modules/prompts/dist/dateparts/minutes.js
var Vf = b((lB, zf) => {
  "use strict";
  var Lv = Ue(), lo = class extends Lv {
    static {
      n(this, "Minutes");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(t) {
      this.date.setMinutes(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getMinutes();
      return this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  zf.exports = lo;
});

// ../node_modules/prompts/dist/dateparts/month.js
var Jf = b((hB, Gf) => {
  "use strict";
  var Nv = Ue(), fo = class extends Nv {
    static {
      n(this, "Month");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(t) {
      t = parseInt(t.substr(-2)) - 1, this.date.setMonth(t < 0 ? 0 : t);
    }
    toString() {
      let t = this.date.getMonth(), r = this.token.length;
      return r === 2 ? String(t + 1).padStart(2, "0") : r === 3 ? this.locales.monthsShort[t] : r === 4 ? this.locales.months[t] : String(t +
      1);
    }
  };
  Gf.exports = fo;
});

// ../node_modules/prompts/dist/dateparts/seconds.js
var Kf = b((dB, Yf) => {
  "use strict";
  var Hv = Ue(), ho = class extends Hv {
    static {
      n(this, "Seconds");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(t) {
      this.date.setSeconds(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getSeconds();
      return this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  Yf.exports = ho;
});

// ../node_modules/prompts/dist/dateparts/year.js
var Qf = b((DB, Xf) => {
  "use strict";
  var Uv = Ue(), co = class extends Uv {
    static {
      n(this, "Year");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(t) {
      this.date.setFullYear(t.substr(-4));
    }
    toString() {
      let t = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? t.substr(-2) : t;
    }
  };
  Xf.exports = co;
});

// ../node_modules/prompts/dist/dateparts/index.js
var eh = b((gB, Zf) => {
  "use strict";
  Zf.exports = {
    DatePart: Ue(),
    Meridiem: If(),
    Day: Nf(),
    Hours: Uf(),
    Milliseconds: $f(),
    Minutes: Vf(),
    Month: Jf(),
    Seconds: Kf(),
    Year: Qf()
  };
});

// ../node_modules/prompts/dist/elements/date.js
var fh = b((yB, lh) => {
  "use strict";
  function th(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(th, "asyncGeneratorStep");
  function rh(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          th(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          th(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(rh, "_asyncToGenerator");
  var po = ue(), Wv = et(), mo = je(), ih = mo.style, nh = mo.clear, $v = mo.figures, ah = le(), zv = ah.erase, sh = ah.cursor, rt = eh(), oh = rt.
  DatePart, Vv = rt.Meridiem, Gv = rt.Day, Jv = rt.Hours, Yv = rt.Milliseconds, Kv = rt.Minutes, Xv = rt.Month, Qv = rt.Seconds, Zv = rt.Year,
  ew = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g, uh = {
    1: ({
      token: e
    }) => e.replace(/\\(.)/g, "$1"),
    2: (e) => new Gv(e),
    // Day // TODO
    3: (e) => new Xv(e),
    // Month
    4: (e) => new Zv(e),
    // Year
    5: (e) => new Vv(e),
    // AM/PM // TODO (special)
    6: (e) => new Jv(e),
    // Hours
    7: (e) => new Kv(e),
    // Minutes
    8: (e) => new Qv(e),
    // Seconds
    9: (e) => new Yv(e)
    // Fractional seconds
  }, tw = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  }, Do = class extends Wv {
    static {
      n(this, "DatePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.cursor = 0, this.typed = "", this.locales = Object.assign(tw, t.locales), this._date = t.initial ||
      /* @__PURE__ */ new Date(), this.errorMsg = t.error || "Please Enter A Valid Value", this.validator = t.validate || (() => !0), this.mask =
      t.mask || "YYYY-MM-DD HH:mm:ss", this.clear = nh("", this.out.columns), this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(t) {
      t && this._date.setTime(t.getTime());
    }
    set mask(t) {
      let r;
      for (this.parts = []; r = ew.exec(t); ) {
        let s = r.shift(), o = r.findIndex((u) => u != null);
        this.parts.push(o in uh ? uh[o]({
          token: r[o] || s,
          date: this.date,
          parts: this.parts,
          locales: this.locales
        }) : r[o] || s);
      }
      let i = this.parts.reduce((s, o) => (typeof o == "string" && typeof s[s.length - 1] == "string" ? s[s.length - 1] += o : s.push(o), s),
      []);
      this.parts.splice(0), this.parts.push(...i), this.reset();
    }
    moveCursor(t) {
      this.typed = "", this.cursor = t, this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((t) => t instanceof oh)), this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.error = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    validate() {
      var t = this;
      return rh(function* () {
        let r = yield t.validator(t.value);
        typeof r == "string" && (t.errorMsg = r, r = !1), t.error = !r;
      })();
    }
    submit() {
      var t = this;
      return rh(function* () {
        if (yield t.validate(), t.error) {
          t.color = "red", t.fire(), t.render();
          return;
        }
        t.done = !0, t.aborted = !1, t.fire(), t.render(), t.out.write(`
`), t.close();
      })();
    }
    up() {
      this.typed = "", this.parts[this.cursor].up(), this.render();
    }
    down() {
      this.typed = "", this.parts[this.cursor].down(), this.render();
    }
    left() {
      let t = this.parts[this.cursor].prev();
      if (t == null) return this.bell();
      this.moveCursor(this.parts.indexOf(t)), this.render();
    }
    right() {
      let t = this.parts[this.cursor].next();
      if (t == null) return this.bell();
      this.moveCursor(this.parts.indexOf(t)), this.render();
    }
    next() {
      let t = this.parts[this.cursor].next();
      this.moveCursor(t ? this.parts.indexOf(t) : this.parts.findIndex((r) => r instanceof oh)), this.render();
    }
    _(t) {
      /\d/.test(t) && (this.typed += t, this.parts[this.cursor].setTo(this.typed), this.render());
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(sh.hide) : this.out.write(nh(this.outputText, this.out.columns)), super.render(), this.
      outputText = [ih.symbol(this.done, this.aborted), po.bold(this.msg), ih.delimiter(!1), this.parts.reduce((t, r, i) => t.concat(i === this.
      cursor && !this.done ? po.cyan().underline(r.toString()) : r), []).join("")].join(" "), this.error && (this.outputText += this.errorMsg.
      split(`
`).reduce((t, r, i) => t + `
${i ? " " : $v.pointerSmall} ${po.red().italic(r)}`, "")), this.out.write(zv.line + sh.to(0) + this.outputText));
    }
  };
  lh.exports = Do;
});

// ../node_modules/prompts/dist/elements/number.js
var gh = b((vB, mh) => {
  "use strict";
  function hh(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(hh, "asyncGeneratorStep");
  function ch(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          hh(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          hh(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(ch, "_asyncToGenerator");
  var en = ue(), rw = et(), Dh = le(), tn = Dh.cursor, iw = Dh.erase, rn = je(), go = rn.style, nw = rn.figures, dh = rn.clear, sw = rn.lines,
  ow = /[0-9]/, yo = /* @__PURE__ */ n((e) => e !== void 0, "isDef"), ph = /* @__PURE__ */ n((e, t) => {
    let r = Math.pow(10, t);
    return Math.round(e * r) / r;
  }, "round"), bo = class extends rw {
    static {
      n(this, "NumberPrompt");
    }
    constructor(t = {}) {
      super(t), this.transform = go.render(t.style), this.msg = t.message, this.initial = yo(t.initial) ? t.initial : "", this.float = !!t.float,
      this.round = t.round || 2, this.inc = t.increment || 1, this.min = yo(t.min) ? t.min : -1 / 0, this.max = yo(t.max) ? t.max : 1 / 0, this.
      errorMsg = t.error || "Please Enter A Valid Value", this.validator = t.validate || (() => !0), this.color = "cyan", this.value = "", this.
      typed = "", this.lastHit = 0, this.render();
    }
    set value(t) {
      !t && t !== 0 ? (this.placeholder = !0, this.rendered = en.gray(this.transform.render(`${this.initial}`)), this._value = "") : (this.placeholder =
      !1, this.rendered = this.transform.render(`${ph(t, this.round)}`), this._value = ph(t, this.round)), this.fire();
    }
    get value() {
      return this._value;
    }
    parse(t) {
      return this.float ? parseFloat(t) : parseInt(t);
    }
    valid(t) {
      return t === "-" || t === "." && this.float || ow.test(t);
    }
    reset() {
      this.typed = "", this.value = "", this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let t = this.value;
      this.value = t !== "" ? t : this.initial, this.done = this.aborted = !0, this.error = !1, this.fire(), this.render(), this.out.write(`\

`), this.close();
    }
    validate() {
      var t = this;
      return ch(function* () {
        let r = yield t.validator(t.value);
        typeof r == "string" && (t.errorMsg = r, r = !1), t.error = !r;
      })();
    }
    submit() {
      var t = this;
      return ch(function* () {
        if (yield t.validate(), t.error) {
          t.color = "red", t.fire(), t.render();
          return;
        }
        let r = t.value;
        t.value = r !== "" ? r : t.initial, t.done = !0, t.aborted = !1, t.error = !1, t.fire(), t.render(), t.out.write(`
`), t.close();
      })();
    }
    up() {
      if (this.typed = "", this.value === "" && (this.value = this.min - this.inc), this.value >= this.max) return this.bell();
      this.value += this.inc, this.color = "cyan", this.fire(), this.render();
    }
    down() {
      if (this.typed = "", this.value === "" && (this.value = this.min + this.inc), this.value <= this.min) return this.bell();
      this.value -= this.inc, this.color = "cyan", this.fire(), this.render();
    }
    delete() {
      let t = this.value.toString();
      if (t.length === 0) return this.bell();
      this.value = this.parse(t = t.slice(0, -1)) || "", this.value !== "" && this.value < this.min && (this.value = this.min), this.color =
      "cyan", this.fire(), this.render();
    }
    next() {
      this.value = this.initial, this.fire(), this.render();
    }
    _(t, r) {
      if (!this.valid(t)) return this.bell();
      let i = Date.now();
      if (i - this.lastHit > 1e3 && (this.typed = ""), this.typed += t, this.lastHit = i, this.color = "cyan", t === ".") return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max), this.value > this.max && (this.value = this.max), this.value < this.min && (this.
      value = this.min), this.fire(), this.render();
    }
    render() {
      this.closed || (this.firstRender || (this.outputError && this.out.write(tn.down(sw(this.outputError, this.out.columns) - 1) + dh(this.
      outputError, this.out.columns)), this.out.write(dh(this.outputText, this.out.columns))), super.render(), this.outputError = "", this.outputText =
      [go.symbol(this.done, this.aborted), en.bold(this.msg), go.delimiter(this.done), !this.done || !this.done && !this.placeholder ? en[this.
      color]().underline(this.rendered) : this.rendered].join(" "), this.error && (this.outputError += this.errorMsg.split(`
`).reduce((t, r, i) => t + `
${i ? " " : nw.pointerSmall} ${en.red().italic(r)}`, "")), this.out.write(iw.line + tn.to(0) + this.outputText + tn.save + this.outputError +
      tn.restore));
    }
  };
  mh.exports = bo;
});

// ../node_modules/prompts/dist/elements/multiselect.js
var wo = b((_B, vh) => {
  "use strict";
  var We = ue(), uw = le(), aw = uw.cursor, lw = et(), zr = je(), yh = zr.clear, _t = zr.figures, bh = zr.style, fw = zr.wrap, hw = zr.entriesToDisplay,
  vo = class extends lw {
    static {
      n(this, "MultiselectPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.cursor = t.cursor || 0, this.scrollIndex = t.cursor || 0, this.hint = t.hint || "", this.warn = t.
      warn || "- This option is disabled -", this.minSelected = t.min, this.showMinError = !1, this.maxChoices = t.max, this.instructions = t.
      instructions, this.optionsPerPage = t.optionsPerPage || 10, this.value = t.choices.map((r, i) => (typeof r == "string" && (r = {
        title: r,
        value: i
      }), {
        title: r && (r.title || r.value || r),
        description: r && r.description,
        value: r && (r.value === void 0 ? i : r.value),
        selected: r && r.selected,
        disabled: r && r.disabled
      })), this.clear = yh("", this.out.columns), t.overrideRender || this.render();
    }
    reset() {
      this.value.map((t) => !t.selected), this.cursor = 0, this.fire(), this.render();
    }
    selected() {
      return this.value.filter((t) => t.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      let t = this.value.filter((r) => r.selected);
      this.minSelected && t.length < this.minSelected ? (this.showMinError = !0, this.render()) : (this.done = !0, this.aborted = !1, this.fire(),
      this.render(), this.out.write(`
`), this.close());
    }
    first() {
      this.cursor = 0, this.render();
    }
    last() {
      this.cursor = this.value.length - 1, this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length, this.render();
    }
    up() {
      this.cursor === 0 ? this.cursor = this.value.length - 1 : this.cursor--, this.render();
    }
    down() {
      this.cursor === this.value.length - 1 ? this.cursor = 0 : this.cursor++, this.render();
    }
    left() {
      this.value[this.cursor].selected = !1, this.render();
    }
    right() {
      if (this.value.filter((t) => t.selected).length >= this.maxChoices) return this.bell();
      this.value[this.cursor].selected = !0, this.render();
    }
    handleSpaceToggle() {
      let t = this.value[this.cursor];
      if (t.selected)
        t.selected = !1, this.render();
      else {
        if (t.disabled || this.value.filter((r) => r.selected).length >= this.maxChoices)
          return this.bell();
        t.selected = !0, this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== void 0 || this.value[this.cursor].disabled)
        return this.bell();
      let t = !this.value[this.cursor].selected;
      this.value.filter((r) => !r.disabled).forEach((r) => r.selected = t), this.render();
    }
    _(t, r) {
      if (t === " ")
        this.handleSpaceToggle();
      else if (t === "a")
        this.toggleAll();
      else
        return this.bell();
    }
    renderInstructions() {
      return this.instructions === void 0 || this.instructions ? typeof this.instructions == "string" ? this.instructions : `
Instructions:
    ${_t.arrowUp}/${_t.arrowDown}: Highlight option
    ${_t.arrowLeft}/${_t.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + "    enter/return: Complete answer" : "";
    }
    renderOption(t, r, i, s) {
      let o = (r.selected ? We.green(_t.radioOn) : _t.radioOff) + " " + s + " ", u, a;
      return r.disabled ? u = t === i ? We.gray().underline(r.title) : We.strikethrough().gray(r.title) : (u = t === i ? We.cyan().underline(
      r.title) : r.title, t === i && r.description && (a = ` - ${r.description}`, (o.length + u.length + a.length >= this.out.columns || r.description.
      split(/\r?\n/).length > 1) && (a = `
` + fw(r.description, {
        margin: o.length,
        width: this.out.columns
      })))), o + u + We.gray(a || "");
    }
    // shared with autocompleteMultiselect
    paginateOptions(t) {
      if (t.length === 0)
        return We.red("No matches for this query.");
      let r = hw(this.cursor, t.length, this.optionsPerPage), i = r.startIndex, s = r.endIndex, o, u = [];
      for (let a = i; a < s; a++)
        a === i && i > 0 ? o = _t.arrowUp : a === s - 1 && s < t.length ? o = _t.arrowDown : o = " ", u.push(this.renderOption(this.cursor, t[a],
        a, o));
      return `
` + u.join(`
`);
    }
    // shared with autocomleteMultiselect
    renderOptions(t) {
      return this.done ? "" : this.paginateOptions(t);
    }
    renderDoneOrInstructions() {
      if (this.done)
        return this.value.filter((r) => r.selected).map((r) => r.title).join(", ");
      let t = [We.gray(this.hint), this.renderInstructions()];
      return this.value[this.cursor].disabled && t.push(We.yellow(this.warn)), t.join(" ");
    }
    render() {
      if (this.closed) return;
      this.firstRender && this.out.write(aw.hide), super.render();
      let t = [bh.symbol(this.done, this.aborted), We.bold(this.msg), bh.delimiter(!1), this.renderDoneOrInstructions()].join(" ");
      this.showMinError && (t += We.red(`You must select a minimum of ${this.minSelected} choices.`), this.showMinError = !1), t += this.renderOptions(
      this.value), this.out.write(this.clear + t), this.clear = yh(t, this.out.columns);
    }
  };
  vh.exports = vo;
});

// ../node_modules/prompts/dist/elements/autocomplete.js
var Sh = b((CB, xh) => {
  "use strict";
  function wh(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(wh, "asyncGeneratorStep");
  function cw(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          wh(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          wh(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(cw, "_asyncToGenerator");
  var Vr = ue(), dw = et(), Fh = le(), pw = Fh.erase, _h = Fh.cursor, Gr = je(), _o = Gr.style, Eh = Gr.clear, Eo = Gr.figures, Dw = Gr.wrap,
  mw = Gr.entriesToDisplay, Ch = /* @__PURE__ */ n((e, t) => e[t] && (e[t].value || e[t].title || e[t]), "getVal"), gw = /* @__PURE__ */ n((e, t) => e[t] &&
  (e[t].title || e[t].value || e[t]), "getTitle"), yw = /* @__PURE__ */ n((e, t) => {
    let r = e.findIndex((i) => i.value === t || i.title === t);
    return r > -1 ? r : void 0;
  }, "getIndex"), Co = class extends dw {
    static {
      n(this, "AutocompletePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.suggest = t.suggest, this.choices = t.choices, this.initial = typeof t.initial == "number" ? t.initial :
      yw(t.choices, t.initial), this.select = this.initial || t.cursor || 0, this.i18n = {
        noMatches: t.noMatches || "no matches found"
      }, this.fallback = t.fallback || this.initial, this.clearFirst = t.clearFirst || !1, this.suggestions = [], this.input = "", this.limit =
      t.limit || 10, this.cursor = 0, this.transform = _o.render(t.style), this.scale = this.transform.scale, this.render = this.render.bind(
      this), this.complete = this.complete.bind(this), this.clear = Eh("", this.out.columns), this.complete(this.render), this.render();
    }
    set fallback(t) {
      this._fb = Number.isSafeInteger(parseInt(t)) ? parseInt(t) : t;
    }
    get fallback() {
      let t;
      return typeof this._fb == "number" ? t = this.choices[this._fb] : typeof this._fb == "string" && (t = {
        title: this._fb
      }), t || this._fb || {
        title: this.i18n.noMatches
      };
    }
    moveSelect(t) {
      this.select = t, this.suggestions.length > 0 ? this.value = Ch(this.suggestions, t) : this.value = this.fallback.value, this.fire();
    }
    complete(t) {
      var r = this;
      return cw(function* () {
        let i = r.completing = r.suggest(r.input, r.choices), s = yield i;
        if (r.completing !== i) return;
        r.suggestions = s.map((u, a, l) => ({
          title: gw(l, a),
          value: Ch(l, a),
          description: u.description
        })), r.completing = !1;
        let o = Math.max(s.length - 1, 0);
        r.moveSelect(Math.min(o, r.select)), t && t();
      })();
    }
    reset() {
      this.input = "", this.complete(() => {
        this.moveSelect(this.initial !== void 0 ? this.initial : 0), this.render();
      }), this.render();
    }
    exit() {
      this.clearFirst && this.input.length > 0 ? this.reset() : (this.done = this.exited = !0, this.aborted = !1, this.fire(), this.render(),
      this.out.write(`
`), this.close());
    }
    abort() {
      this.done = this.aborted = !0, this.exited = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.done = !0, this.aborted = this.exited = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    _(t, r) {
      let i = this.input.slice(0, this.cursor), s = this.input.slice(this.cursor);
      this.input = `${i}${t}${s}`, this.cursor = i.length + 1, this.complete(this.render), this.render();
    }
    delete() {
      if (this.cursor === 0) return this.bell();
      let t = this.input.slice(0, this.cursor - 1), r = this.input.slice(this.cursor);
      this.input = `${t}${r}`, this.complete(this.render), this.cursor = this.cursor - 1, this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      let t = this.input.slice(0, this.cursor), r = this.input.slice(this.cursor + 1);
      this.input = `${t}${r}`, this.complete(this.render), this.render();
    }
    first() {
      this.moveSelect(0), this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1), this.render();
    }
    up() {
      this.select === 0 ? this.moveSelect(this.suggestions.length - 1) : this.moveSelect(this.select - 1), this.render();
    }
    down() {
      this.select === this.suggestions.length - 1 ? this.moveSelect(0) : this.moveSelect(this.select + 1), this.render();
    }
    next() {
      this.select === this.suggestions.length - 1 ? this.moveSelect(0) : this.moveSelect(this.select + 1), this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1)), this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0)), this.render();
    }
    left() {
      if (this.cursor <= 0) return this.bell();
      this.cursor = this.cursor - 1, this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      this.cursor = this.cursor + 1, this.render();
    }
    renderOption(t, r, i, s) {
      let o, u = i ? Eo.arrowUp : s ? Eo.arrowDown : " ", a = r ? Vr.cyan().underline(t.title) : t.title;
      return u = (r ? Vr.cyan(Eo.pointer) + " " : "  ") + u, t.description && (o = ` - ${t.description}`, (u.length + a.length + o.length >=
      this.out.columns || t.description.split(/\r?\n/).length > 1) && (o = `
` + Dw(t.description, {
        margin: 3,
        width: this.out.columns
      }))), u + " " + a + Vr.gray(o || "");
    }
    render() {
      if (this.closed) return;
      this.firstRender ? this.out.write(_h.hide) : this.out.write(Eh(this.outputText, this.out.columns)), super.render();
      let t = mw(this.select, this.choices.length, this.limit), r = t.startIndex, i = t.endIndex;
      if (this.outputText = [_o.symbol(this.done, this.aborted, this.exited), Vr.bold(this.msg), _o.delimiter(this.completing), this.done &&
      this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" "), !this.
      done) {
        let s = this.suggestions.slice(r, i).map((o, u) => this.renderOption(o, this.select === u + r, u === 0 && r > 0, u + r === i - 1 && i <
        this.choices.length)).join(`
`);
        this.outputText += `
` + (s || Vr.gray(this.fallback.title));
      }
      this.out.write(pw.line + _h.to(0) + this.outputText);
    }
  };
  xh.exports = Co;
});

// ../node_modules/prompts/dist/elements/autocompleteMultiselect.js
var Bh = b((xB, Th) => {
  "use strict";
  var it = ue(), bw = le(), vw = bw.cursor, ww = wo(), xo = je(), Ah = xo.clear, Rh = xo.style, nr = xo.figures, Fo = class extends ww {
    static {
      n(this, "AutocompleteMultiselectPrompt");
    }
    constructor(t = {}) {
      t.overrideRender = !0, super(t), this.inputValue = "", this.clear = Ah("", this.out.columns), this.filteredOptions = this.value, this.
      render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1, this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length, this.render();
    }
    up() {
      this.cursor === 0 ? this.cursor = this.filteredOptions.length - 1 : this.cursor--, this.render();
    }
    down() {
      this.cursor === this.filteredOptions.length - 1 ? this.cursor = 0 : this.cursor++, this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = !1, this.render();
    }
    right() {
      if (this.value.filter((t) => t.selected).length >= this.maxChoices) return this.bell();
      this.filteredOptions[this.cursor].selected = !0, this.render();
    }
    delete() {
      this.inputValue.length && (this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1), this.updateFilteredOptions());
    }
    updateFilteredOptions() {
      let t = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((i) => this.inputValue ? !!(typeof i.title == "string" && i.title.toLowerCase().includes(this.
      inputValue.toLowerCase()) || typeof i.value == "string" && i.value.toLowerCase().includes(this.inputValue.toLowerCase())) : !0);
      let r = this.filteredOptions.findIndex((i) => i === t);
      this.cursor = r < 0 ? 0 : r, this.render();
    }
    handleSpaceToggle() {
      let t = this.filteredOptions[this.cursor];
      if (t.selected)
        t.selected = !1, this.render();
      else {
        if (t.disabled || this.value.filter((r) => r.selected).length >= this.maxChoices)
          return this.bell();
        t.selected = !0, this.render();
      }
    }
    handleInputChange(t) {
      this.inputValue = this.inputValue + t, this.updateFilteredOptions();
    }
    _(t, r) {
      t === " " ? this.handleSpaceToggle() : this.handleInputChange(t);
    }
    renderInstructions() {
      return this.instructions === void 0 || this.instructions ? typeof this.instructions == "string" ? this.instructions : `
Instructions:
    ${nr.arrowUp}/${nr.arrowDown}: Highlight option
    ${nr.arrowLeft}/${nr.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
` : "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : it.gray("Enter something to filter")}
`;
    }
    renderOption(t, r, i) {
      let s;
      return r.disabled ? s = t === i ? it.gray().underline(r.title) : it.strikethrough().gray(r.title) : s = t === i ? it.cyan().underline(
      r.title) : r.title, (r.selected ? it.green(nr.radioOn) : nr.radioOff) + "  " + s;
    }
    renderDoneOrInstructions() {
      if (this.done)
        return this.value.filter((r) => r.selected).map((r) => r.title).join(", ");
      let t = [it.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      return this.filteredOptions.length && this.filteredOptions[this.cursor].disabled && t.push(it.yellow(this.warn)), t.join(" ");
    }
    render() {
      if (this.closed) return;
      this.firstRender && this.out.write(vw.hide), super.render();
      let t = [Rh.symbol(this.done, this.aborted), it.bold(this.msg), Rh.delimiter(!1), this.renderDoneOrInstructions()].join(" ");
      this.showMinError && (t += it.red(`You must select a minimum of ${this.minSelected} choices.`), this.showMinError = !1), t += this.renderOptions(
      this.filteredOptions), this.out.write(this.clear + t), this.clear = Ah(t, this.out.columns);
    }
  };
  Th.exports = Fo;
});

// ../node_modules/prompts/dist/elements/confirm.js
var Ih = b((AB, jh) => {
  "use strict";
  var kh = ue(), _w = et(), qh = je(), Oh = qh.style, Ew = qh.clear, Mh = le(), Cw = Mh.erase, Ph = Mh.cursor, So = class extends _w {
    static {
      n(this, "ConfirmPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.value = t.initial, this.initialValue = !!t.initial, this.yesMsg = t.yes || "yes", this.yesOption =
      t.yesOption || "(Y/n)", this.noMsg = t.no || "no", this.noOption = t.noOption || "(y/N)", this.render();
    }
    reset() {
      this.value = this.initialValue, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.value = this.value || !1, this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    _(t, r) {
      return t.toLowerCase() === "y" ? (this.value = !0, this.submit()) : t.toLowerCase() === "n" ? (this.value = !1, this.submit()) : this.
      bell();
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(Ph.hide) : this.out.write(Ew(this.outputText, this.out.columns)), super.render(), this.
      outputText = [Oh.symbol(this.done, this.aborted), kh.bold(this.msg), Oh.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.
      noMsg : kh.gray(this.initialValue ? this.yesOption : this.noOption)].join(" "), this.out.write(Cw.line + Ph.to(0) + this.outputText));
    }
  };
  jh.exports = So;
});

// ../node_modules/prompts/dist/elements/index.js
var Nh = b((TB, Lh) => {
  "use strict";
  Lh.exports = {
    TextPrompt: Ff(),
    SelectPrompt: Rf(),
    TogglePrompt: qf(),
    DatePrompt: fh(),
    NumberPrompt: gh(),
    MultiselectPrompt: wo(),
    AutocompletePrompt: Sh(),
    AutocompleteMultiselectPrompt: Bh(),
    ConfirmPrompt: Ih()
  };
});

// ../node_modules/prompts/dist/prompts.js
var Uh = b((Hh) => {
  "use strict";
  var Re = Hh, Fw = Nh(), nn = /* @__PURE__ */ n((e) => e, "noop");
  function $e(e, t, r = {}) {
    return new Promise((i, s) => {
      let o = new Fw[e](t), u = r.onAbort || nn, a = r.onSubmit || nn, l = r.onExit || nn;
      o.on("state", t.onState || nn), o.on("submit", (f) => i(a(f))), o.on("exit", (f) => i(l(f))), o.on("abort", (f) => s(u(f)));
    });
  }
  n($e, "toPrompt");
  Re.text = (e) => $e("TextPrompt", e);
  Re.password = (e) => (e.style = "password", Re.text(e));
  Re.invisible = (e) => (e.style = "invisible", Re.text(e));
  Re.number = (e) => $e("NumberPrompt", e);
  Re.date = (e) => $e("DatePrompt", e);
  Re.confirm = (e) => $e("ConfirmPrompt", e);
  Re.list = (e) => {
    let t = e.separator || ",";
    return $e("TextPrompt", e, {
      onSubmit: /* @__PURE__ */ n((r) => r.split(t).map((i) => i.trim()), "onSubmit")
    });
  };
  Re.toggle = (e) => $e("TogglePrompt", e);
  Re.select = (e) => $e("SelectPrompt", e);
  Re.multiselect = (e) => {
    e.choices = [].concat(e.choices || []);
    let t = /* @__PURE__ */ n((r) => r.filter((i) => i.selected).map((i) => i.value), "toSelected");
    return $e("MultiselectPrompt", e, {
      onAbort: t,
      onSubmit: t
    });
  };
  Re.autocompleteMultiselect = (e) => {
    e.choices = [].concat(e.choices || []);
    let t = /* @__PURE__ */ n((r) => r.filter((i) => i.selected).map((i) => i.value), "toSelected");
    return $e("AutocompleteMultiselectPrompt", e, {
      onAbort: t,
      onSubmit: t
    });
  };
  var xw = /* @__PURE__ */ n((e, t) => Promise.resolve(t.filter((r) => r.title.slice(0, e.length).toLowerCase() === e.toLowerCase())), "byTi\
tle");
  Re.autocomplete = (e) => (e.suggest = e.suggest || xw, e.choices = [].concat(e.choices || []), $e("AutocompletePrompt", e));
});

// ../node_modules/prompts/dist/index.js
var Kh = b((OB, Yh) => {
  "use strict";
  function Wh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })), r.push.apply(r, i);
    }
    return r;
  }
  n(Wh, "ownKeys");
  function $h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Wh(Object(r), !0).forEach(function(i) {
        Sw(e, i, r[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wh(Object(r)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
    return e;
  }
  n($h, "_objectSpread");
  function Sw(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
  }
  n(Sw, "_defineProperty");
  function Aw(e, t) {
    var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = Rw(e)) || t && e && typeof e.length == "number") {
        r && (e = r);
        var i = 0, s = /* @__PURE__ */ n(function() {
        }, "F");
        return { s, n: /* @__PURE__ */ n(function() {
          return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
        }, "n"), e: /* @__PURE__ */ n(function(f) {
          throw f;
        }, "e"), f: s };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o = !0, u = !1, a;
    return { s: /* @__PURE__ */ n(function() {
      r = r.call(e);
    }, "s"), n: /* @__PURE__ */ n(function() {
      var f = r.next();
      return o = f.done, f;
    }, "n"), e: /* @__PURE__ */ n(function(f) {
      u = !0, a = f;
    }, "e"), f: /* @__PURE__ */ n(function() {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (u) throw a;
      }
    }, "f") };
  }
  n(Aw, "_createForOfIteratorHelper");
  function Rw(e, t) {
    if (e) {
      if (typeof e == "string") return zh(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zh(e, t);
    }
  }
  n(Rw, "_unsupportedIterableToArray");
  function zh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  n(zh, "_arrayLikeToArray");
  function Vh(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(Vh, "asyncGeneratorStep");
  function Gh(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          Vh(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          Vh(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(Gh, "_asyncToGenerator");
  var Ao = Uh(), Tw = ["suggest", "format", "onState", "validate", "onRender", "type"], Jh = /* @__PURE__ */ n(() => {
  }, "noop");
  function Et() {
    return Ro.apply(this, arguments);
  }
  n(Et, "prompt");
  function Ro() {
    return Ro = Gh(function* (e = [], {
      onSubmit: t = Jh,
      onCancel: r = Jh
    } = {}) {
      let i = {}, s = Et._override || {};
      e = [].concat(e);
      let o, u, a, l, f, p, d = /* @__PURE__ */ function() {
        var y = Gh(function* (w, F, v = !1) {
          if (!(!v && w.validate && w.validate(F) !== !0))
            return w.format ? yield w.format(F, i) : F;
        });
        return /* @__PURE__ */ n(function(F, v) {
          return y.apply(this, arguments);
        }, "getFormattedAnswer");
      }();
      var c = Aw(e), h;
      try {
        for (c.s(); !(h = c.n()).done; ) {
          u = h.value;
          var g = u;
          if (l = g.name, f = g.type, typeof f == "function" && (f = yield f(o, $h({}, i), u), u.type = f), !!f) {
            for (let y in u) {
              if (Tw.includes(y)) continue;
              let w = u[y];
              u[y] = typeof w == "function" ? yield w(o, $h({}, i), p) : w;
            }
            if (p = u, typeof u.message != "string")
              throw new Error("prompt message is required");
            var _ = u;
            if (l = _.name, f = _.type, Ao[f] === void 0)
              throw new Error(`prompt type (${f}) is not defined`);
            if (s[u.name] !== void 0 && (o = yield d(u, s[u.name]), o !== void 0)) {
              i[l] = o;
              continue;
            }
            try {
              o = Et._injected ? Bw(Et._injected, u.initial) : yield Ao[f](u), i[l] = o = yield d(u, o, !0), a = yield t(u, o, i);
            } catch {
              a = !(yield r(u, i));
            }
            if (a) return i;
          }
        }
      } catch (y) {
        c.e(y);
      } finally {
        c.f();
      }
      return i;
    }), Ro.apply(this, arguments);
  }
  n(Ro, "_prompt");
  function Bw(e, t) {
    let r = e.shift();
    if (r instanceof Error)
      throw r;
    return r === void 0 ? t : r;
  }
  n(Bw, "getInjectedAnswer");
  function kw(e) {
    Et._injected = (Et._injected || []).concat(e);
  }
  n(kw, "inject");
  function Ow(e) {
    Et._override = Object.assign({}, e);
  }
  n(Ow, "override");
  Yh.exports = Object.assign(Et, {
    prompt: Et,
    prompts: Ao,
    inject: kw,
    override: Ow
  });
});

// ../node_modules/prompts/lib/util/action.js
var Qh = b((qB, Xh) => {
  "use strict";
  Xh.exports = (e, t) => {
    if (!(e.meta && e.name !== "escape")) {
      if (e.ctrl) {
        if (e.name === "a") return "first";
        if (e.name === "c" || e.name === "d") return "abort";
        if (e.name === "e") return "last";
        if (e.name === "g") return "reset";
      }
      if (t) {
        if (e.name === "j") return "down";
        if (e.name === "k") return "up";
      }
      return e.name === "return" || e.name === "enter" ? "submit" : e.name === "backspace" ? "delete" : e.name === "delete" ? "deleteForward" :
      e.name === "abort" ? "abort" : e.name === "escape" ? "exit" : e.name === "tab" ? "next" : e.name === "pagedown" ? "nextPage" : e.name ===
      "pageup" ? "prevPage" : e.name === "home" ? "home" : e.name === "end" ? "end" : e.name === "up" ? "up" : e.name === "down" ? "down" : e.
      name === "right" ? "right" : e.name === "left" ? "left" : !1;
    }
  };
});

// ../node_modules/prompts/lib/util/strip.js
var sn = b((MB, Zh) => {
  "use strict";
  Zh.exports = (e) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
    ].join("|"), r = new RegExp(t, "g");
    return typeof e == "string" ? e.replace(r, "") : e;
  };
});

// ../node_modules/prompts/lib/util/clear.js
var rc = b((jB, tc) => {
  "use strict";
  var Pw = sn(), { erase: ec, cursor: qw } = le(), Mw = /* @__PURE__ */ n((e) => [...Pw(e)].length, "width");
  tc.exports = function(e, t) {
    if (!t) return ec.line + qw.to(0);
    let r = 0, i = e.split(/\r?\n/);
    for (let s of i)
      r += 1 + Math.floor(Math.max(Mw(s) - 1, 0) / t);
    return ec.lines(r);
  };
});

// ../node_modules/prompts/lib/util/figures.js
var To = b((LB, ic) => {
  "use strict";
  var Jr = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  }, jw = {
    arrowUp: Jr.arrowUp,
    arrowDown: Jr.arrowDown,
    arrowLeft: Jr.arrowLeft,
    arrowRight: Jr.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  }, Iw = process.platform === "win32" ? jw : Jr;
  ic.exports = Iw;
});

// ../node_modules/prompts/lib/util/style.js
var sc = b((NB, nc) => {
  "use strict";
  var sr = ue(), jt = To(), Bo = Object.freeze({
    password: { scale: 1, render: /* @__PURE__ */ n((e) => "*".repeat(e.length), "render") },
    emoji: { scale: 2, render: /* @__PURE__ */ n((e) => "\u{1F603}".repeat(e.length), "render") },
    invisible: { scale: 0, render: /* @__PURE__ */ n((e) => "", "render") },
    default: { scale: 1, render: /* @__PURE__ */ n((e) => `${e}`, "render") }
  }), Lw = /* @__PURE__ */ n((e) => Bo[e] || Bo.default, "render"), Yr = Object.freeze({
    aborted: sr.red(jt.cross),
    done: sr.green(jt.tick),
    exited: sr.yellow(jt.cross),
    default: sr.cyan("?")
  }), Nw = /* @__PURE__ */ n((e, t, r) => t ? Yr.aborted : r ? Yr.exited : e ? Yr.done : Yr.default, "symbol"), Hw = /* @__PURE__ */ n((e) => sr.
  gray(e ? jt.ellipsis : jt.pointerSmall), "delimiter"), Uw = /* @__PURE__ */ n((e, t) => sr.gray(e ? t ? jt.pointerSmall : "+" : jt.line), "\
item");
  nc.exports = {
    styles: Bo,
    render: Lw,
    symbols: Yr,
    symbol: Nw,
    delimiter: Hw,
    item: Uw
  };
});

// ../node_modules/prompts/lib/util/lines.js
var uc = b((UB, oc) => {
  "use strict";
  var Ww = sn();
  oc.exports = function(e, t) {
    let r = String(Ww(e) || "").split(/\r?\n/);
    return t ? r.map((i) => Math.ceil(i.length / t)).reduce((i, s) => i + s) : r.length;
  };
});

// ../node_modules/prompts/lib/util/wrap.js
var lc = b((WB, ac) => {
  "use strict";
  ac.exports = (e, t = {}) => {
    let r = Number.isSafeInteger(parseInt(t.margin)) ? new Array(parseInt(t.margin)).fill(" ").join("") : t.margin || "", i = t.width;
    return (e || "").split(/\r?\n/g).map((s) => s.split(/\s+/g).reduce((o, u) => (u.length + r.length >= i || o[o.length - 1].length + u.length +
    1 < i ? o[o.length - 1] += ` ${u}` : o.push(`${r}${u}`), o), [r]).join(`
`)).join(`
`);
  };
});

// ../node_modules/prompts/lib/util/entriesToDisplay.js
var hc = b(($B, fc) => {
  "use strict";
  fc.exports = (e, t, r) => {
    r = r || t;
    let i = Math.min(t - r, e - Math.floor(r / 2));
    i < 0 && (i = 0);
    let s = Math.min(i + r, t);
    return { startIndex: i, endIndex: s };
  };
});

// ../node_modules/prompts/lib/util/index.js
var Ie = b((zB, cc) => {
  "use strict";
  cc.exports = {
    action: Qh(),
    clear: rc(),
    style: sc(),
    strip: sn(),
    figures: To(),
    lines: uc(),
    wrap: lc(),
    entriesToDisplay: hc()
  };
});

// ../node_modules/prompts/lib/elements/prompt.js
var nt = b((VB, pc) => {
  "use strict";
  var dc = C("readline"), { action: $w } = Ie(), zw = C("events"), { beep: Vw, cursor: Gw } = le(), Jw = ue(), ko = class extends zw {
    static {
      n(this, "Prompt");
    }
    constructor(t = {}) {
      super(), this.firstRender = !0, this.in = t.stdin || process.stdin, this.out = t.stdout || process.stdout, this.onRender = (t.onRender ||
      (() => {
      })).bind(this);
      let r = dc.createInterface({ input: this.in, escapeCodeTimeout: 50 });
      dc.emitKeypressEvents(this.in, r), this.in.isTTY && this.in.setRawMode(!0);
      let i = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1, s = /* @__PURE__ */ n((o, u) => {
        let a = $w(u, i);
        a === !1 ? this._ && this._(o, u) : typeof this[a] == "function" ? this[a](u) : this.bell();
      }, "keypress");
      this.close = () => {
        this.out.write(Gw.show), this.in.removeListener("keypress", s), this.in.isTTY && this.in.setRawMode(!1), r.close(), this.emit(this.aborted ?
        "abort" : this.exited ? "exit" : "submit", this.value), this.closed = !0;
      }, this.in.on("keypress", s);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(Vw);
    }
    render() {
      this.onRender(Jw), this.firstRender && (this.firstRender = !1);
    }
  };
  pc.exports = ko;
});

// ../node_modules/prompts/lib/elements/text.js
var mc = b((JB, Dc) => {
  var on = ue(), Yw = nt(), { erase: Kw, cursor: Kr } = le(), { style: Oo, clear: Po, lines: Xw, figures: Qw } = Ie(), qo = class extends Yw {
    static {
      n(this, "TextPrompt");
    }
    constructor(t = {}) {
      super(t), this.transform = Oo.render(t.style), this.scale = this.transform.scale, this.msg = t.message, this.initial = t.initial || "",
      this.validator = t.validate || (() => !0), this.value = "", this.errorMsg = t.error || "Please Enter A Valid Value", this.cursor = +!!this.
      initial, this.cursorOffset = 0, this.clear = Po("", this.out.columns), this.render();
    }
    set value(t) {
      !t && this.initial ? (this.placeholder = !0, this.rendered = on.gray(this.transform.render(this.initial))) : (this.placeholder = !1, this.
      rendered = this.transform.render(t)), this._value = t, this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = "", this.cursor = +!!this.initial, this.cursorOffset = 0, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial, this.done = this.aborted = !0, this.error = !1, this.red = !1, this.fire(), this.render(), this.
      out.write(`
`), this.close();
    }
    async validate() {
      let t = await this.validator(this.value);
      typeof t == "string" && (this.errorMsg = t, t = !1), this.error = !t;
    }
    async submit() {
      if (this.value = this.value || this.initial, this.cursorOffset = 0, this.cursor = this.rendered.length, await this.validate(), this.error) {
        this.red = !0, this.fire(), this.render();
        return;
      }
      this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    next() {
      if (!this.placeholder) return this.bell();
      this.value = this.initial, this.cursor = this.rendered.length, this.fire(), this.render();
    }
    moveCursor(t) {
      this.placeholder || (this.cursor = this.cursor + t, this.cursorOffset += t);
    }
    _(t, r) {
      let i = this.value.slice(0, this.cursor), s = this.value.slice(this.cursor);
      this.value = `${i}${t}${s}`, this.red = !1, this.cursor = this.placeholder ? 0 : i.length + 1, this.render();
    }
    delete() {
      if (this.isCursorAtStart()) return this.bell();
      let t = this.value.slice(0, this.cursor - 1), r = this.value.slice(this.cursor);
      this.value = `${t}${r}`, this.red = !1, this.isCursorAtStart() ? this.cursorOffset = 0 : (this.cursorOffset++, this.moveCursor(-1)), this.
      render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      let t = this.value.slice(0, this.cursor), r = this.value.slice(this.cursor + 1);
      this.value = `${t}${r}`, this.red = !1, this.isCursorAtEnd() ? this.cursorOffset = 0 : this.cursorOffset++, this.render();
    }
    first() {
      this.cursor = 0, this.render();
    }
    last() {
      this.cursor = this.value.length, this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder) return this.bell();
      this.moveCursor(-1), this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      this.moveCursor(1), this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      this.closed || (this.firstRender || (this.outputError && this.out.write(Kr.down(Xw(this.outputError, this.out.columns) - 1) + Po(this.
      outputError, this.out.columns)), this.out.write(Po(this.outputText, this.out.columns))), super.render(), this.outputError = "", this.outputText =
      [
        Oo.symbol(this.done, this.aborted),
        on.bold(this.msg),
        Oo.delimiter(this.done),
        this.red ? on.red(this.rendered) : this.rendered
      ].join(" "), this.error && (this.outputError += this.errorMsg.split(`
`).reduce((t, r, i) => t + `
${i ? " " : Qw.pointerSmall} ${on.red().italic(r)}`, "")), this.out.write(Kw.line + Kr.to(0) + this.outputText + Kr.save + this.outputError +
      Kr.restore + Kr.move(this.cursorOffset, 0)));
    }
  };
  Dc.exports = qo;
});

// ../node_modules/prompts/lib/elements/select.js
var vc = b((KB, bc) => {
  "use strict";
  var st = ue(), Zw = nt(), { style: gc, clear: yc, figures: un, wrap: e_, entriesToDisplay: t_ } = Ie(), { cursor: r_ } = le(), Mo = class extends Zw {
    static {
      n(this, "SelectPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.hint = t.hint || "- Use arrow-keys. Return to submit.", this.warn = t.warn || "- This option is d\
isabled", this.cursor = t.initial || 0, this.choices = t.choices.map((r, i) => (typeof r == "string" && (r = { title: r, value: i }), {
        title: r && (r.title || r.value || r),
        value: r && (r.value === void 0 ? i : r.value),
        description: r && r.description,
        selected: r && r.selected,
        disabled: r && r.disabled
      })), this.optionsPerPage = t.optionsPerPage || 10, this.value = (this.choices[this.cursor] || {}).value, this.clear = yc("", this.out.
      columns), this.render();
    }
    moveCursor(t) {
      this.cursor = t, this.value = this.choices[t].value, this.fire();
    }
    reset() {
      this.moveCursor(0), this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.selection.disabled ? this.bell() : (this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close());
    }
    first() {
      this.moveCursor(0), this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1), this.render();
    }
    up() {
      this.cursor === 0 ? this.moveCursor(this.choices.length - 1) : this.moveCursor(this.cursor - 1), this.render();
    }
    down() {
      this.cursor === this.choices.length - 1 ? this.moveCursor(0) : this.moveCursor(this.cursor + 1), this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length), this.render();
    }
    _(t, r) {
      if (t === " ") return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed) return;
      this.firstRender ? this.out.write(r_.hide) : this.out.write(yc(this.outputText, this.out.columns)), super.render();
      let { startIndex: t, endIndex: r } = t_(this.cursor, this.choices.length, this.optionsPerPage);
      if (this.outputText = [
        gc.symbol(this.done, this.aborted),
        st.bold(this.msg),
        gc.delimiter(!1),
        this.done ? this.selection.title : this.selection.disabled ? st.yellow(this.warn) : st.gray(this.hint)
      ].join(" "), !this.done) {
        this.outputText += `
`;
        for (let i = t; i < r; i++) {
          let s, o, u = "", a = this.choices[i];
          i === t && t > 0 ? o = un.arrowUp : i === r - 1 && r < this.choices.length ? o = un.arrowDown : o = " ", a.disabled ? (s = this.cursor ===
          i ? st.gray().underline(a.title) : st.strikethrough().gray(a.title), o = (this.cursor === i ? st.bold().gray(un.pointer) + " " : "\
  ") + o) : (s = this.cursor === i ? st.cyan().underline(a.title) : a.title, o = (this.cursor === i ? st.cyan(un.pointer) + " " : "  ") + o,
          a.description && this.cursor === i && (u = ` - ${a.description}`, (o.length + s.length + u.length >= this.out.columns || a.description.
          split(/\r?\n/).length > 1) && (u = `
` + e_(a.description, { margin: 3, width: this.out.columns })))), this.outputText += `${o} ${s}${st.gray(u)}
`;
        }
      }
      this.out.write(this.outputText);
    }
  };
  bc.exports = Mo;
});

// ../node_modules/prompts/lib/elements/toggle.js
var Cc = b((QB, Ec) => {
  var an = ue(), i_ = nt(), { style: wc, clear: n_ } = Ie(), { cursor: _c, erase: s_ } = le(), jo = class extends i_ {
    static {
      n(this, "TogglePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.value = !!t.initial, this.active = t.active || "on", this.inactive = t.inactive || "off", this.initialValue =
      this.value, this.render();
    }
    reset() {
      this.value = this.initialValue, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    deactivate() {
      if (this.value === !1) return this.bell();
      this.value = !1, this.render();
    }
    activate() {
      if (this.value === !0) return this.bell();
      this.value = !0, this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value, this.fire(), this.render();
    }
    _(t, r) {
      if (t === " ")
        this.value = !this.value;
      else if (t === "1")
        this.value = !0;
      else if (t === "0")
        this.value = !1;
      else return this.bell();
      this.render();
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(_c.hide) : this.out.write(n_(this.outputText, this.out.columns)), super.render(), this.
      outputText = [
        wc.symbol(this.done, this.aborted),
        an.bold(this.msg),
        wc.delimiter(this.done),
        this.value ? this.inactive : an.cyan().underline(this.inactive),
        an.gray("/"),
        this.value ? an.cyan().underline(this.active) : this.active
      ].join(" "), this.out.write(s_.line + _c.to(0) + this.outputText));
    }
  };
  Ec.exports = jo;
});

// ../node_modules/prompts/lib/dateparts/datepart.js
var ze = b((e6, Fc) => {
  "use strict";
  var Io = class e {
    static {
      n(this, "DatePart");
    }
    constructor({ token: t, date: r, parts: i, locales: s }) {
      this.token = t, this.date = r || /* @__PURE__ */ new Date(), this.parts = i || [this], this.locales = s || {};
    }
    up() {
    }
    down() {
    }
    next() {
      let t = this.parts.indexOf(this);
      return this.parts.find((r, i) => i > t && r instanceof e);
    }
    setTo(t) {
    }
    prev() {
      let t = [].concat(this.parts).reverse(), r = t.indexOf(this);
      return t.find((i, s) => s > r && i instanceof e);
    }
    toString() {
      return String(this.date);
    }
  };
  Fc.exports = Io;
});

// ../node_modules/prompts/lib/dateparts/meridiem.js
var Sc = b((r6, xc) => {
  "use strict";
  var o_ = ze(), Lo = class extends o_ {
    static {
      n(this, "Meridiem");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let t = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? t.toUpperCase() : t;
    }
  };
  xc.exports = Lo;
});

// ../node_modules/prompts/lib/dateparts/day.js
var Rc = b((n6, Ac) => {
  "use strict";
  var u_ = ze(), a_ = /* @__PURE__ */ n((e) => (e = e % 10, e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th"), "pos"), No = class extends u_ {
    static {
      n(this, "Day");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(t) {
      this.date.setDate(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getDate(), r = this.date.getDay();
      return this.token === "DD" ? String(t).padStart(2, "0") : this.token === "Do" ? t + a_(t) : this.token === "d" ? r + 1 : this.token ===
      "ddd" ? this.locales.weekdaysShort[r] : this.token === "dddd" ? this.locales.weekdays[r] : t;
    }
  };
  Ac.exports = No;
});

// ../node_modules/prompts/lib/dateparts/hours.js
var Bc = b((o6, Tc) => {
  "use strict";
  var l_ = ze(), Ho = class extends l_ {
    static {
      n(this, "Hours");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(t) {
      this.date.setHours(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getHours();
      return /h/.test(this.token) && (t = t % 12 || 12), this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  Tc.exports = Ho;
});

// ../node_modules/prompts/lib/dateparts/milliseconds.js
var Oc = b((a6, kc) => {
  "use strict";
  var f_ = ze(), Uo = class extends f_ {
    static {
      n(this, "Milliseconds");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(t) {
      this.date.setMilliseconds(parseInt(t.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  };
  kc.exports = Uo;
});

// ../node_modules/prompts/lib/dateparts/minutes.js
var qc = b((f6, Pc) => {
  "use strict";
  var h_ = ze(), Wo = class extends h_ {
    static {
      n(this, "Minutes");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(t) {
      this.date.setMinutes(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getMinutes();
      return this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  Pc.exports = Wo;
});

// ../node_modules/prompts/lib/dateparts/month.js
var jc = b((c6, Mc) => {
  "use strict";
  var c_ = ze(), $o = class extends c_ {
    static {
      n(this, "Month");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(t) {
      t = parseInt(t.substr(-2)) - 1, this.date.setMonth(t < 0 ? 0 : t);
    }
    toString() {
      let t = this.date.getMonth(), r = this.token.length;
      return r === 2 ? String(t + 1).padStart(2, "0") : r === 3 ? this.locales.monthsShort[t] : r === 4 ? this.locales.months[t] : String(t +
      1);
    }
  };
  Mc.exports = $o;
});

// ../node_modules/prompts/lib/dateparts/seconds.js
var Lc = b((p6, Ic) => {
  "use strict";
  var d_ = ze(), zo = class extends d_ {
    static {
      n(this, "Seconds");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(t) {
      this.date.setSeconds(parseInt(t.substr(-2)));
    }
    toString() {
      let t = this.date.getSeconds();
      return this.token.length > 1 ? String(t).padStart(2, "0") : t;
    }
  };
  Ic.exports = zo;
});

// ../node_modules/prompts/lib/dateparts/year.js
var Hc = b((m6, Nc) => {
  "use strict";
  var p_ = ze(), Vo = class extends p_ {
    static {
      n(this, "Year");
    }
    constructor(t = {}) {
      super(t);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(t) {
      this.date.setFullYear(t.substr(-4));
    }
    toString() {
      let t = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? t.substr(-2) : t;
    }
  };
  Nc.exports = Vo;
});

// ../node_modules/prompts/lib/dateparts/index.js
var Wc = b((y6, Uc) => {
  "use strict";
  Uc.exports = {
    DatePart: ze(),
    Meridiem: Sc(),
    Day: Rc(),
    Hours: Bc(),
    Milliseconds: Oc(),
    Minutes: qc(),
    Month: jc(),
    Seconds: Lc(),
    Year: Hc()
  };
});

// ../node_modules/prompts/lib/elements/date.js
var Kc = b((b6, Yc) => {
  "use strict";
  var Go = ue(), D_ = nt(), { style: $c, clear: zc, figures: m_ } = Ie(), { erase: g_, cursor: Vc } = le(), { DatePart: Gc, Meridiem: y_, Day: b_,
  Hours: v_, Milliseconds: w_, Minutes: __, Month: E_, Seconds: C_, Year: F_ } = Wc(), x_ = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g,
  Jc = {
    1: ({ token: e }) => e.replace(/\\(.)/g, "$1"),
    2: (e) => new b_(e),
    // Day // TODO
    3: (e) => new E_(e),
    // Month
    4: (e) => new F_(e),
    // Year
    5: (e) => new y_(e),
    // AM/PM // TODO (special)
    6: (e) => new v_(e),
    // Hours
    7: (e) => new __(e),
    // Minutes
    8: (e) => new C_(e),
    // Seconds
    9: (e) => new w_(e)
    // Fractional seconds
  }, S_ = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  }, Jo = class extends D_ {
    static {
      n(this, "DatePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.cursor = 0, this.typed = "", this.locales = Object.assign(S_, t.locales), this._date = t.initial ||
      /* @__PURE__ */ new Date(), this.errorMsg = t.error || "Please Enter A Valid Value", this.validator = t.validate || (() => !0), this.mask =
      t.mask || "YYYY-MM-DD HH:mm:ss", this.clear = zc("", this.out.columns), this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(t) {
      t && this._date.setTime(t.getTime());
    }
    set mask(t) {
      let r;
      for (this.parts = []; r = x_.exec(t); ) {
        let s = r.shift(), o = r.findIndex((u) => u != null);
        this.parts.push(o in Jc ? Jc[o]({ token: r[o] || s, date: this.date, parts: this.parts, locales: this.locales }) : r[o] || s);
      }
      let i = this.parts.reduce((s, o) => (typeof o == "string" && typeof s[s.length - 1] == "string" ? s[s.length - 1] += o : s.push(o), s),
      []);
      this.parts.splice(0), this.parts.push(...i), this.reset();
    }
    moveCursor(t) {
      this.typed = "", this.cursor = t, this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((t) => t instanceof Gc)), this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.error = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    async validate() {
      let t = await this.validator(this.value);
      typeof t == "string" && (this.errorMsg = t, t = !1), this.error = !t;
    }
    async submit() {
      if (await this.validate(), this.error) {
        this.color = "red", this.fire(), this.render();
        return;
      }
      this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    up() {
      this.typed = "", this.parts[this.cursor].up(), this.render();
    }
    down() {
      this.typed = "", this.parts[this.cursor].down(), this.render();
    }
    left() {
      let t = this.parts[this.cursor].prev();
      if (t == null) return this.bell();
      this.moveCursor(this.parts.indexOf(t)), this.render();
    }
    right() {
      let t = this.parts[this.cursor].next();
      if (t == null) return this.bell();
      this.moveCursor(this.parts.indexOf(t)), this.render();
    }
    next() {
      let t = this.parts[this.cursor].next();
      this.moveCursor(t ? this.parts.indexOf(t) : this.parts.findIndex((r) => r instanceof Gc)), this.render();
    }
    _(t) {
      /\d/.test(t) && (this.typed += t, this.parts[this.cursor].setTo(this.typed), this.render());
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(Vc.hide) : this.out.write(zc(this.outputText, this.out.columns)), super.render(), this.
      outputText = [
        $c.symbol(this.done, this.aborted),
        Go.bold(this.msg),
        $c.delimiter(!1),
        this.parts.reduce((t, r, i) => t.concat(i === this.cursor && !this.done ? Go.cyan().underline(r.toString()) : r), []).join("")
      ].join(" "), this.error && (this.outputText += this.errorMsg.split(`
`).reduce(
        (t, r, i) => t + `
${i ? " " : m_.pointerSmall} ${Go.red().italic(r)}`,
        ""
      )), this.out.write(g_.line + Vc.to(0) + this.outputText));
    }
  };
  Yc.exports = Jo;
});

// ../node_modules/prompts/lib/elements/number.js
var ed = b((w6, Zc) => {
  var ln = ue(), A_ = nt(), { cursor: fn, erase: R_ } = le(), { style: Yo, figures: T_, clear: Xc, lines: B_ } = Ie(), k_ = /[0-9]/, Ko = /* @__PURE__ */ n(
  (e) => e !== void 0, "isDef"), Qc = /* @__PURE__ */ n((e, t) => {
    let r = Math.pow(10, t);
    return Math.round(e * r) / r;
  }, "round"), Xo = class extends A_ {
    static {
      n(this, "NumberPrompt");
    }
    constructor(t = {}) {
      super(t), this.transform = Yo.render(t.style), this.msg = t.message, this.initial = Ko(t.initial) ? t.initial : "", this.float = !!t.float,
      this.round = t.round || 2, this.inc = t.increment || 1, this.min = Ko(t.min) ? t.min : -1 / 0, this.max = Ko(t.max) ? t.max : 1 / 0, this.
      errorMsg = t.error || "Please Enter A Valid Value", this.validator = t.validate || (() => !0), this.color = "cyan", this.value = "", this.
      typed = "", this.lastHit = 0, this.render();
    }
    set value(t) {
      !t && t !== 0 ? (this.placeholder = !0, this.rendered = ln.gray(this.transform.render(`${this.initial}`)), this._value = "") : (this.placeholder =
      !1, this.rendered = this.transform.render(`${Qc(t, this.round)}`), this._value = Qc(t, this.round)), this.fire();
    }
    get value() {
      return this._value;
    }
    parse(t) {
      return this.float ? parseFloat(t) : parseInt(t);
    }
    valid(t) {
      return t === "-" || t === "." && this.float || k_.test(t);
    }
    reset() {
      this.typed = "", this.value = "", this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let t = this.value;
      this.value = t !== "" ? t : this.initial, this.done = this.aborted = !0, this.error = !1, this.fire(), this.render(), this.out.write(`\

`), this.close();
    }
    async validate() {
      let t = await this.validator(this.value);
      typeof t == "string" && (this.errorMsg = t, t = !1), this.error = !t;
    }
    async submit() {
      if (await this.validate(), this.error) {
        this.color = "red", this.fire(), this.render();
        return;
      }
      let t = this.value;
      this.value = t !== "" ? t : this.initial, this.done = !0, this.aborted = !1, this.error = !1, this.fire(), this.render(), this.out.write(
      `
`), this.close();
    }
    up() {
      if (this.typed = "", this.value === "" && (this.value = this.min - this.inc), this.value >= this.max) return this.bell();
      this.value += this.inc, this.color = "cyan", this.fire(), this.render();
    }
    down() {
      if (this.typed = "", this.value === "" && (this.value = this.min + this.inc), this.value <= this.min) return this.bell();
      this.value -= this.inc, this.color = "cyan", this.fire(), this.render();
    }
    delete() {
      let t = this.value.toString();
      if (t.length === 0) return this.bell();
      this.value = this.parse(t = t.slice(0, -1)) || "", this.value !== "" && this.value < this.min && (this.value = this.min), this.color =
      "cyan", this.fire(), this.render();
    }
    next() {
      this.value = this.initial, this.fire(), this.render();
    }
    _(t, r) {
      if (!this.valid(t)) return this.bell();
      let i = Date.now();
      if (i - this.lastHit > 1e3 && (this.typed = ""), this.typed += t, this.lastHit = i, this.color = "cyan", t === ".") return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max), this.value > this.max && (this.value = this.max), this.value < this.min && (this.
      value = this.min), this.fire(), this.render();
    }
    render() {
      this.closed || (this.firstRender || (this.outputError && this.out.write(fn.down(B_(this.outputError, this.out.columns) - 1) + Xc(this.
      outputError, this.out.columns)), this.out.write(Xc(this.outputText, this.out.columns))), super.render(), this.outputError = "", this.outputText =
      [
        Yo.symbol(this.done, this.aborted),
        ln.bold(this.msg),
        Yo.delimiter(this.done),
        !this.done || !this.done && !this.placeholder ? ln[this.color]().underline(this.rendered) : this.rendered
      ].join(" "), this.error && (this.outputError += this.errorMsg.split(`
`).reduce((t, r, i) => t + `
${i ? " " : T_.pointerSmall} ${ln.red().italic(r)}`, "")), this.out.write(R_.line + fn.to(0) + this.outputText + fn.save + this.outputError +
      fn.restore));
    }
  };
  Zc.exports = Xo;
});

// ../node_modules/prompts/lib/elements/multiselect.js
var Zo = b((E6, id) => {
  "use strict";
  var Ve = ue(), { cursor: O_ } = le(), P_ = nt(), { clear: td, figures: Ct, style: rd, wrap: q_, entriesToDisplay: M_ } = Ie(), Qo = class extends P_ {
    static {
      n(this, "MultiselectPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.cursor = t.cursor || 0, this.scrollIndex = t.cursor || 0, this.hint = t.hint || "", this.warn = t.
      warn || "- This option is disabled -", this.minSelected = t.min, this.showMinError = !1, this.maxChoices = t.max, this.instructions = t.
      instructions, this.optionsPerPage = t.optionsPerPage || 10, this.value = t.choices.map((r, i) => (typeof r == "string" && (r = { title: r,
      value: i }), {
        title: r && (r.title || r.value || r),
        description: r && r.description,
        value: r && (r.value === void 0 ? i : r.value),
        selected: r && r.selected,
        disabled: r && r.disabled
      })), this.clear = td("", this.out.columns), t.overrideRender || this.render();
    }
    reset() {
      this.value.map((t) => !t.selected), this.cursor = 0, this.fire(), this.render();
    }
    selected() {
      return this.value.filter((t) => t.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      let t = this.value.filter((r) => r.selected);
      this.minSelected && t.length < this.minSelected ? (this.showMinError = !0, this.render()) : (this.done = !0, this.aborted = !1, this.fire(),
      this.render(), this.out.write(`
`), this.close());
    }
    first() {
      this.cursor = 0, this.render();
    }
    last() {
      this.cursor = this.value.length - 1, this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length, this.render();
    }
    up() {
      this.cursor === 0 ? this.cursor = this.value.length - 1 : this.cursor--, this.render();
    }
    down() {
      this.cursor === this.value.length - 1 ? this.cursor = 0 : this.cursor++, this.render();
    }
    left() {
      this.value[this.cursor].selected = !1, this.render();
    }
    right() {
      if (this.value.filter((t) => t.selected).length >= this.maxChoices) return this.bell();
      this.value[this.cursor].selected = !0, this.render();
    }
    handleSpaceToggle() {
      let t = this.value[this.cursor];
      if (t.selected)
        t.selected = !1, this.render();
      else {
        if (t.disabled || this.value.filter((r) => r.selected).length >= this.maxChoices)
          return this.bell();
        t.selected = !0, this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== void 0 || this.value[this.cursor].disabled)
        return this.bell();
      let t = !this.value[this.cursor].selected;
      this.value.filter((r) => !r.disabled).forEach((r) => r.selected = t), this.render();
    }
    _(t, r) {
      if (t === " ")
        this.handleSpaceToggle();
      else if (t === "a")
        this.toggleAll();
      else
        return this.bell();
    }
    renderInstructions() {
      return this.instructions === void 0 || this.instructions ? typeof this.instructions == "string" ? this.instructions : `
Instructions:
    ${Ct.arrowUp}/${Ct.arrowDown}: Highlight option
    ${Ct.arrowLeft}/${Ct.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + "    enter/return: Complete answer" : "";
    }
    renderOption(t, r, i, s) {
      let o = (r.selected ? Ve.green(Ct.radioOn) : Ct.radioOff) + " " + s + " ", u, a;
      return r.disabled ? u = t === i ? Ve.gray().underline(r.title) : Ve.strikethrough().gray(r.title) : (u = t === i ? Ve.cyan().underline(
      r.title) : r.title, t === i && r.description && (a = ` - ${r.description}`, (o.length + u.length + a.length >= this.out.columns || r.description.
      split(/\r?\n/).length > 1) && (a = `
` + q_(r.description, { margin: o.length, width: this.out.columns })))), o + u + Ve.gray(a || "");
    }
    // shared with autocompleteMultiselect
    paginateOptions(t) {
      if (t.length === 0)
        return Ve.red("No matches for this query.");
      let { startIndex: r, endIndex: i } = M_(this.cursor, t.length, this.optionsPerPage), s, o = [];
      for (let u = r; u < i; u++)
        u === r && r > 0 ? s = Ct.arrowUp : u === i - 1 && i < t.length ? s = Ct.arrowDown : s = " ", o.push(this.renderOption(this.cursor, t[u],
        u, s));
      return `
` + o.join(`
`);
    }
    // shared with autocomleteMultiselect
    renderOptions(t) {
      return this.done ? "" : this.paginateOptions(t);
    }
    renderDoneOrInstructions() {
      if (this.done)
        return this.value.filter((r) => r.selected).map((r) => r.title).join(", ");
      let t = [Ve.gray(this.hint), this.renderInstructions()];
      return this.value[this.cursor].disabled && t.push(Ve.yellow(this.warn)), t.join(" ");
    }
    render() {
      if (this.closed) return;
      this.firstRender && this.out.write(O_.hide), super.render();
      let t = [
        rd.symbol(this.done, this.aborted),
        Ve.bold(this.msg),
        rd.delimiter(!1),
        this.renderDoneOrInstructions()
      ].join(" ");
      this.showMinError && (t += Ve.red(`You must select a minimum of ${this.minSelected} choices.`), this.showMinError = !1), t += this.renderOptions(
      this.value), this.out.write(this.clear + t), this.clear = td(t, this.out.columns);
    }
  };
  id.exports = Qo;
});

// ../node_modules/prompts/lib/elements/autocomplete.js
var ad = b((F6, ud) => {
  "use strict";
  var Xr = ue(), j_ = nt(), { erase: I_, cursor: nd } = le(), { style: eu, clear: sd, figures: tu, wrap: L_, entriesToDisplay: N_ } = Ie(), od = /* @__PURE__ */ n(
  (e, t) => e[t] && (e[t].value || e[t].title || e[t]), "getVal"), H_ = /* @__PURE__ */ n((e, t) => e[t] && (e[t].title || e[t].value || e[t]),
  "getTitle"), U_ = /* @__PURE__ */ n((e, t) => {
    let r = e.findIndex((i) => i.value === t || i.title === t);
    return r > -1 ? r : void 0;
  }, "getIndex"), ru = class extends j_ {
    static {
      n(this, "AutocompletePrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.suggest = t.suggest, this.choices = t.choices, this.initial = typeof t.initial == "number" ? t.initial :
      U_(t.choices, t.initial), this.select = this.initial || t.cursor || 0, this.i18n = { noMatches: t.noMatches || "no matches found" }, this.
      fallback = t.fallback || this.initial, this.clearFirst = t.clearFirst || !1, this.suggestions = [], this.input = "", this.limit = t.limit ||
      10, this.cursor = 0, this.transform = eu.render(t.style), this.scale = this.transform.scale, this.render = this.render.bind(this), this.
      complete = this.complete.bind(this), this.clear = sd("", this.out.columns), this.complete(this.render), this.render();
    }
    set fallback(t) {
      this._fb = Number.isSafeInteger(parseInt(t)) ? parseInt(t) : t;
    }
    get fallback() {
      let t;
      return typeof this._fb == "number" ? t = this.choices[this._fb] : typeof this._fb == "string" && (t = { title: this._fb }), t || this.
      _fb || { title: this.i18n.noMatches };
    }
    moveSelect(t) {
      this.select = t, this.suggestions.length > 0 ? this.value = od(this.suggestions, t) : this.value = this.fallback.value, this.fire();
    }
    async complete(t) {
      let r = this.completing = this.suggest(this.input, this.choices), i = await r;
      if (this.completing !== r) return;
      this.suggestions = i.map((o, u, a) => ({ title: H_(a, u), value: od(a, u), description: o.description })), this.completing = !1;
      let s = Math.max(i.length - 1, 0);
      this.moveSelect(Math.min(s, this.select)), t && t();
    }
    reset() {
      this.input = "", this.complete(() => {
        this.moveSelect(this.initial !== void 0 ? this.initial : 0), this.render();
      }), this.render();
    }
    exit() {
      this.clearFirst && this.input.length > 0 ? this.reset() : (this.done = this.exited = !0, this.aborted = !1, this.fire(), this.render(),
      this.out.write(`
`), this.close());
    }
    abort() {
      this.done = this.aborted = !0, this.exited = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.done = !0, this.aborted = this.exited = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    _(t, r) {
      let i = this.input.slice(0, this.cursor), s = this.input.slice(this.cursor);
      this.input = `${i}${t}${s}`, this.cursor = i.length + 1, this.complete(this.render), this.render();
    }
    delete() {
      if (this.cursor === 0) return this.bell();
      let t = this.input.slice(0, this.cursor - 1), r = this.input.slice(this.cursor);
      this.input = `${t}${r}`, this.complete(this.render), this.cursor = this.cursor - 1, this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      let t = this.input.slice(0, this.cursor), r = this.input.slice(this.cursor + 1);
      this.input = `${t}${r}`, this.complete(this.render), this.render();
    }
    first() {
      this.moveSelect(0), this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1), this.render();
    }
    up() {
      this.select === 0 ? this.moveSelect(this.suggestions.length - 1) : this.moveSelect(this.select - 1), this.render();
    }
    down() {
      this.select === this.suggestions.length - 1 ? this.moveSelect(0) : this.moveSelect(this.select + 1), this.render();
    }
    next() {
      this.select === this.suggestions.length - 1 ? this.moveSelect(0) : this.moveSelect(this.select + 1), this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1)), this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0)), this.render();
    }
    left() {
      if (this.cursor <= 0) return this.bell();
      this.cursor = this.cursor - 1, this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      this.cursor = this.cursor + 1, this.render();
    }
    renderOption(t, r, i, s) {
      let o, u = i ? tu.arrowUp : s ? tu.arrowDown : " ", a = r ? Xr.cyan().underline(t.title) : t.title;
      return u = (r ? Xr.cyan(tu.pointer) + " " : "  ") + u, t.description && (o = ` - ${t.description}`, (u.length + a.length + o.length >=
      this.out.columns || t.description.split(/\r?\n/).length > 1) && (o = `
` + L_(t.description, { margin: 3, width: this.out.columns }))), u + " " + a + Xr.gray(o || "");
    }
    render() {
      if (this.closed) return;
      this.firstRender ? this.out.write(nd.hide) : this.out.write(sd(this.outputText, this.out.columns)), super.render();
      let { startIndex: t, endIndex: r } = N_(this.select, this.choices.length, this.limit);
      if (this.outputText = [
        eu.symbol(this.done, this.aborted, this.exited),
        Xr.bold(this.msg),
        eu.delimiter(this.completing),
        this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
      ].join(" "), !this.done) {
        let i = this.suggestions.slice(t, r).map((s, o) => this.renderOption(
          s,
          this.select === o + t,
          o === 0 && t > 0,
          o + t === r - 1 && r < this.choices.length
        )).join(`
`);
        this.outputText += `
` + (i || Xr.gray(this.fallback.title));
      }
      this.out.write(I_.line + nd.to(0) + this.outputText);
    }
  };
  ud.exports = ru;
});

// ../node_modules/prompts/lib/elements/autocompleteMultiselect.js
var cd = b((S6, hd) => {
  "use strict";
  var ot = ue(), { cursor: W_ } = le(), $_ = Zo(), { clear: ld, style: fd, figures: or } = Ie(), iu = class extends $_ {
    static {
      n(this, "AutocompleteMultiselectPrompt");
    }
    constructor(t = {}) {
      t.overrideRender = !0, super(t), this.inputValue = "", this.clear = ld("", this.out.columns), this.filteredOptions = this.value, this.
      render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1, this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length, this.render();
    }
    up() {
      this.cursor === 0 ? this.cursor = this.filteredOptions.length - 1 : this.cursor--, this.render();
    }
    down() {
      this.cursor === this.filteredOptions.length - 1 ? this.cursor = 0 : this.cursor++, this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = !1, this.render();
    }
    right() {
      if (this.value.filter((t) => t.selected).length >= this.maxChoices) return this.bell();
      this.filteredOptions[this.cursor].selected = !0, this.render();
    }
    delete() {
      this.inputValue.length && (this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1), this.updateFilteredOptions());
    }
    updateFilteredOptions() {
      let t = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((i) => this.inputValue ? !!(typeof i.title == "string" && i.title.toLowerCase().includes(this.
      inputValue.toLowerCase()) || typeof i.value == "string" && i.value.toLowerCase().includes(this.inputValue.toLowerCase())) : !0);
      let r = this.filteredOptions.findIndex((i) => i === t);
      this.cursor = r < 0 ? 0 : r, this.render();
    }
    handleSpaceToggle() {
      let t = this.filteredOptions[this.cursor];
      if (t.selected)
        t.selected = !1, this.render();
      else {
        if (t.disabled || this.value.filter((r) => r.selected).length >= this.maxChoices)
          return this.bell();
        t.selected = !0, this.render();
      }
    }
    handleInputChange(t) {
      this.inputValue = this.inputValue + t, this.updateFilteredOptions();
    }
    _(t, r) {
      t === " " ? this.handleSpaceToggle() : this.handleInputChange(t);
    }
    renderInstructions() {
      return this.instructions === void 0 || this.instructions ? typeof this.instructions == "string" ? this.instructions : `
Instructions:
    ${or.arrowUp}/${or.arrowDown}: Highlight option
    ${or.arrowLeft}/${or.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
` : "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : ot.gray("Enter something to filter")}
`;
    }
    renderOption(t, r, i) {
      let s;
      return r.disabled ? s = t === i ? ot.gray().underline(r.title) : ot.strikethrough().gray(r.title) : s = t === i ? ot.cyan().underline(
      r.title) : r.title, (r.selected ? ot.green(or.radioOn) : or.radioOff) + "  " + s;
    }
    renderDoneOrInstructions() {
      if (this.done)
        return this.value.filter((r) => r.selected).map((r) => r.title).join(", ");
      let t = [ot.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      return this.filteredOptions.length && this.filteredOptions[this.cursor].disabled && t.push(ot.yellow(this.warn)), t.join(" ");
    }
    render() {
      if (this.closed) return;
      this.firstRender && this.out.write(W_.hide), super.render();
      let t = [
        fd.symbol(this.done, this.aborted),
        ot.bold(this.msg),
        fd.delimiter(!1),
        this.renderDoneOrInstructions()
      ].join(" ");
      this.showMinError && (t += ot.red(`You must select a minimum of ${this.minSelected} choices.`), this.showMinError = !1), t += this.renderOptions(
      this.filteredOptions), this.out.write(this.clear + t), this.clear = ld(t, this.out.columns);
    }
  };
  hd.exports = iu;
});

// ../node_modules/prompts/lib/elements/confirm.js
var gd = b((R6, md) => {
  var dd = ue(), z_ = nt(), { style: pd, clear: V_ } = Ie(), { erase: G_, cursor: Dd } = le(), nu = class extends z_ {
    static {
      n(this, "ConfirmPrompt");
    }
    constructor(t = {}) {
      super(t), this.msg = t.message, this.value = t.initial, this.initialValue = !!t.initial, this.yesMsg = t.yes || "yes", this.yesOption =
      t.yesOption || "(Y/n)", this.noMsg = t.no || "no", this.noOption = t.noOption || "(y/N)", this.render();
    }
    reset() {
      this.value = this.initialValue, this.fire(), this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = !0, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    submit() {
      this.value = this.value || !1, this.done = !0, this.aborted = !1, this.fire(), this.render(), this.out.write(`
`), this.close();
    }
    _(t, r) {
      return t.toLowerCase() === "y" ? (this.value = !0, this.submit()) : t.toLowerCase() === "n" ? (this.value = !1, this.submit()) : this.
      bell();
    }
    render() {
      this.closed || (this.firstRender ? this.out.write(Dd.hide) : this.out.write(V_(this.outputText, this.out.columns)), super.render(), this.
      outputText = [
        pd.symbol(this.done, this.aborted),
        dd.bold(this.msg),
        pd.delimiter(this.done),
        this.done ? this.value ? this.yesMsg : this.noMsg : dd.gray(this.initialValue ? this.yesOption : this.noOption)
      ].join(" "), this.out.write(G_.line + Dd.to(0) + this.outputText));
    }
  };
  md.exports = nu;
});

// ../node_modules/prompts/lib/elements/index.js
var bd = b((B6, yd) => {
  "use strict";
  yd.exports = {
    TextPrompt: mc(),
    SelectPrompt: vc(),
    TogglePrompt: Cc(),
    DatePrompt: Kc(),
    NumberPrompt: ed(),
    MultiselectPrompt: Zo(),
    AutocompletePrompt: ad(),
    AutocompleteMultiselectPrompt: cd(),
    ConfirmPrompt: gd()
  };
});

// ../node_modules/prompts/lib/prompts.js
var wd = b((vd) => {
  "use strict";
  var Te = vd, J_ = bd(), hn = /* @__PURE__ */ n((e) => e, "noop");
  function Ge(e, t, r = {}) {
    return new Promise((i, s) => {
      let o = new J_[e](t), u = r.onAbort || hn, a = r.onSubmit || hn, l = r.onExit || hn;
      o.on("state", t.onState || hn), o.on("submit", (f) => i(a(f))), o.on("exit", (f) => i(l(f))), o.on("abort", (f) => s(u(f)));
    });
  }
  n(Ge, "toPrompt");
  Te.text = (e) => Ge("TextPrompt", e);
  Te.password = (e) => (e.style = "password", Te.text(e));
  Te.invisible = (e) => (e.style = "invisible", Te.text(e));
  Te.number = (e) => Ge("NumberPrompt", e);
  Te.date = (e) => Ge("DatePrompt", e);
  Te.confirm = (e) => Ge("ConfirmPrompt", e);
  Te.list = (e) => {
    let t = e.separator || ",";
    return Ge("TextPrompt", e, {
      onSubmit: /* @__PURE__ */ n((r) => r.split(t).map((i) => i.trim()), "onSubmit")
    });
  };
  Te.toggle = (e) => Ge("TogglePrompt", e);
  Te.select = (e) => Ge("SelectPrompt", e);
  Te.multiselect = (e) => {
    e.choices = [].concat(e.choices || []);
    let t = /* @__PURE__ */ n((r) => r.filter((i) => i.selected).map((i) => i.value), "toSelected");
    return Ge("MultiselectPrompt", e, {
      onAbort: t,
      onSubmit: t
    });
  };
  Te.autocompleteMultiselect = (e) => {
    e.choices = [].concat(e.choices || []);
    let t = /* @__PURE__ */ n((r) => r.filter((i) => i.selected).map((i) => i.value), "toSelected");
    return Ge("AutocompleteMultiselectPrompt", e, {
      onAbort: t,
      onSubmit: t
    });
  };
  var Y_ = /* @__PURE__ */ n((e, t) => Promise.resolve(
    t.filter((r) => r.title.slice(0, e.length).toLowerCase() === e.toLowerCase())
  ), "byTitle");
  Te.autocomplete = (e) => (e.suggest = e.suggest || Y_, e.choices = [].concat(e.choices || []), Ge("AutocompletePrompt", e));
});

// ../node_modules/prompts/lib/index.js
var Cd = b((P6, Ed) => {
  "use strict";
  var su = wd(), K_ = ["suggest", "format", "onState", "validate", "onRender", "type"], _d = /* @__PURE__ */ n(() => {
  }, "noop");
  async function Ft(e = [], { onSubmit: t = _d, onCancel: r = _d } = {}) {
    let i = {}, s = Ft._override || {};
    e = [].concat(e);
    let o, u, a, l, f, p, d = /* @__PURE__ */ n(async (c, h, g = !1) => {
      if (!(!g && c.validate && c.validate(h) !== !0))
        return c.format ? await c.format(h, i) : h;
    }, "getFormattedAnswer");
    for (u of e)
      if ({ name: l, type: f } = u, typeof f == "function" && (f = await f(o, { ...i }, u), u.type = f), !!f) {
        for (let c in u) {
          if (K_.includes(c)) continue;
          let h = u[c];
          u[c] = typeof h == "function" ? await h(o, { ...i }, p) : h;
        }
        if (p = u, typeof u.message != "string")
          throw new Error("prompt message is required");
        if ({ name: l, type: f } = u, su[f] === void 0)
          throw new Error(`prompt type (${f}) is not defined`);
        if (s[u.name] !== void 0 && (o = await d(u, s[u.name]), o !== void 0)) {
          i[l] = o;
          continue;
        }
        try {
          o = Ft._injected ? X_(Ft._injected, u.initial) : await su[f](u), i[l] = o = await d(u, o, !0), a = await t(u, o, i);
        } catch {
          a = !await r(u, i);
        }
        if (a) return i;
      }
    return i;
  }
  n(Ft, "prompt");
  function X_(e, t) {
    let r = e.shift();
    if (r instanceof Error)
      throw r;
    return r === void 0 ? t : r;
  }
  n(X_, "getInjectedAnswer");
  function Q_(e) {
    Ft._injected = (Ft._injected || []).concat(e);
  }
  n(Q_, "inject");
  function Z_(e) {
    Ft._override = Object.assign({}, e);
  }
  n(Z_, "override");
  Ed.exports = Object.assign(Ft, { prompt: Ft, prompts: su, inject: Q_, override: Z_ });
});

// ../node_modules/prompts/index.js
var cn = b((M6, Fd) => {
  function eE(e) {
    e = (Array.isArray(e) ? e : e.split(".")).map(Number);
    let t = 0, r = process.versions.node.split(".").map(Number);
    for (; t < e.length; t++) {
      if (r[t] > e[t]) return !1;
      if (e[t] > r[t]) return !0;
    }
    return !1;
  }
  n(eE, "isNodeLT");
  Fd.exports = eE("8.6.0") ? Kh() : Cd();
});

// ../node_modules/picocolors/picocolors.js
var uu = b((I6, ou) => {
  var xd = process.argv || [], dn = process.env, tE = !("NO_COLOR" in dn || xd.includes("--no-color")) && ("FORCE_COLOR" in dn || xd.includes(
  "--color") || process.platform === "win32" || C != null && C("tty").isatty(1) && dn.TERM !== "dumb" || "CI" in dn), rE = /* @__PURE__ */ n(
  (e, t, r = e) => (i) => {
    let s = "" + i, o = s.indexOf(t, e.length);
    return ~o ? e + iE(s, t, r, o) + t : e + s + t;
  }, "formatter"), iE = /* @__PURE__ */ n((e, t, r, i) => {
    let s = "", o = 0;
    do
      s += e.substring(o, i) + r, o = i + t.length, i = e.indexOf(t, o);
    while (~i);
    return s + e.substring(o);
  }, "replaceClose"), Sd = /* @__PURE__ */ n((e = tE) => {
    let t = e ? rE : () => String;
    return {
      isColorSupported: e,
      reset: t("\x1B[0m", "\x1B[0m"),
      bold: t("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: t("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: t("\x1B[3m", "\x1B[23m"),
      underline: t("\x1B[4m", "\x1B[24m"),
      inverse: t("\x1B[7m", "\x1B[27m"),
      hidden: t("\x1B[8m", "\x1B[28m"),
      strikethrough: t("\x1B[9m", "\x1B[29m"),
      black: t("\x1B[30m", "\x1B[39m"),
      red: t("\x1B[31m", "\x1B[39m"),
      green: t("\x1B[32m", "\x1B[39m"),
      yellow: t("\x1B[33m", "\x1B[39m"),
      blue: t("\x1B[34m", "\x1B[39m"),
      magenta: t("\x1B[35m", "\x1B[39m"),
      cyan: t("\x1B[36m", "\x1B[39m"),
      white: t("\x1B[37m", "\x1B[39m"),
      gray: t("\x1B[90m", "\x1B[39m"),
      bgBlack: t("\x1B[40m", "\x1B[49m"),
      bgRed: t("\x1B[41m", "\x1B[49m"),
      bgGreen: t("\x1B[42m", "\x1B[49m"),
      bgYellow: t("\x1B[43m", "\x1B[49m"),
      bgBlue: t("\x1B[44m", "\x1B[49m"),
      bgMagenta: t("\x1B[45m", "\x1B[49m"),
      bgCyan: t("\x1B[46m", "\x1B[49m"),
      bgWhite: t("\x1B[47m", "\x1B[49m"),
      blackBright: t("\x1B[90m", "\x1B[39m"),
      redBright: t("\x1B[91m", "\x1B[39m"),
      greenBright: t("\x1B[92m", "\x1B[39m"),
      yellowBright: t("\x1B[93m", "\x1B[39m"),
      blueBright: t("\x1B[94m", "\x1B[39m"),
      magentaBright: t("\x1B[95m", "\x1B[39m"),
      cyanBright: t("\x1B[96m", "\x1B[39m"),
      whiteBright: t("\x1B[97m", "\x1B[39m"),
      bgBlackBright: t("\x1B[100m", "\x1B[49m"),
      bgRedBright: t("\x1B[101m", "\x1B[49m"),
      bgGreenBright: t("\x1B[102m", "\x1B[49m"),
      bgYellowBright: t("\x1B[103m", "\x1B[49m"),
      bgBlueBright: t("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: t("\x1B[105m", "\x1B[49m"),
      bgCyanBright: t("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: t("\x1B[107m", "\x1B[49m")
    };
  }, "createColors");
  ou.exports = Sd();
  ou.exports.createColors = Sd;
});

// ../node_modules/wrappy/wrappy.js
var Bd = b(($6, Td) => {
  Td.exports = Rd;
  function Rd(e, t) {
    if (e && t) return Rd(e)(t);
    if (typeof e != "function")
      throw new TypeError("need wrapper function");
    return Object.keys(e).forEach(function(i) {
      r[i] = e[i];
    }), r;
    function r() {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
        i[s] = arguments[s];
      var o = e.apply(this, i), u = i[i.length - 1];
      return typeof o == "function" && o !== u && Object.keys(u).forEach(function(a) {
        o[a] = u[a];
      }), o;
    }
    n(r, "wrapper");
  }
  n(Rd, "wrappy");
});

// ../node_modules/once/once.js
var Dn = b((V6, hu) => {
  var kd = Bd();
  hu.exports = kd(pn);
  hu.exports.strict = kd(Od);
  pn.proto = pn(function() {
    Object.defineProperty(Function.prototype, "once", {
      value: /* @__PURE__ */ n(function() {
        return pn(this);
      }, "value"),
      configurable: !0
    }), Object.defineProperty(Function.prototype, "onceStrict", {
      value: /* @__PURE__ */ n(function() {
        return Od(this);
      }, "value"),
      configurable: !0
    });
  });
  function pn(e) {
    var t = /* @__PURE__ */ n(function() {
      return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
    }, "f");
    return t.called = !1, t;
  }
  n(pn, "once");
  function Od(e) {
    var t = /* @__PURE__ */ n(function() {
      if (t.called)
        throw new Error(t.onceError);
      return t.called = !0, t.value = e.apply(this, arguments);
    }, "f"), r = e.name || "Function wrapped with `once`";
    return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
  }
  n(Od, "onceStrict");
});

// ../node_modules/end-of-stream/index.js
var ur = b((J6, qd) => {
  var aE = Dn(), lE = /* @__PURE__ */ n(function() {
  }, "noop"), fE = /* @__PURE__ */ n(function(e) {
    return e.setHeader && typeof e.abort == "function";
  }, "isRequest"), hE = /* @__PURE__ */ n(function(e) {
    return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3;
  }, "isChildProcess"), Pd = /* @__PURE__ */ n(function(e, t, r) {
    if (typeof t == "function") return Pd(e, null, t);
    t || (t = {}), r = aE(r || lE);
    var i = e._writableState, s = e._readableState, o = t.readable || t.readable !== !1 && e.readable, u = t.writable || t.writable !== !1 &&
    e.writable, a = !1, l = /* @__PURE__ */ n(function() {
      e.writable || f();
    }, "onlegacyfinish"), f = /* @__PURE__ */ n(function() {
      u = !1, o || r.call(e);
    }, "onfinish"), p = /* @__PURE__ */ n(function() {
      o = !1, u || r.call(e);
    }, "onend"), d = /* @__PURE__ */ n(function(y) {
      r.call(e, y ? new Error("exited with error code: " + y) : null);
    }, "onexit"), c = /* @__PURE__ */ n(function(y) {
      r.call(e, y);
    }, "onerror"), h = /* @__PURE__ */ n(function() {
      process.nextTick(g);
    }, "onclose"), g = /* @__PURE__ */ n(function() {
      if (!a) {
        if (o && !(s && s.ended && !s.destroyed)) return r.call(e, new Error("premature close"));
        if (u && !(i && i.ended && !i.destroyed)) return r.call(e, new Error("premature close"));
      }
    }, "onclosenexttick"), _ = /* @__PURE__ */ n(function() {
      e.req.on("finish", f);
    }, "onrequest");
    return fE(e) ? (e.on("complete", f), e.on("abort", h), e.req ? _() : e.on("request", _)) : u && !i && (e.on("end", l), e.on("close", l)),
    hE(e) && e.on("exit", d), e.on("end", p), e.on("finish", f), t.error !== !1 && e.on("error", c), e.on("close", h), function() {
      a = !0, e.removeListener("complete", f), e.removeListener("abort", h), e.removeListener("request", _), e.req && e.req.removeListener("\
finish", f), e.removeListener("end", l), e.removeListener("close", l), e.removeListener("finish", f), e.removeListener("exit", d), e.removeListener(
      "end", p), e.removeListener("error", c), e.removeListener("close", h);
    };
  }, "eos");
  qd.exports = Pd;
});

// ../node_modules/pump/index.js
var du = b((K6, jd) => {
  var cE = Dn(), dE = ur(), cu = C("fs"), Zr = /* @__PURE__ */ n(function() {
  }, "noop"), pE = /^v?\.0/.test(process.version), mn = /* @__PURE__ */ n(function(e) {
    return typeof e == "function";
  }, "isFn"), DE = /* @__PURE__ */ n(function(e) {
    return !pE || !cu ? !1 : (e instanceof (cu.ReadStream || Zr) || e instanceof (cu.WriteStream || Zr)) && mn(e.close);
  }, "isFS"), mE = /* @__PURE__ */ n(function(e) {
    return e.setHeader && mn(e.abort);
  }, "isRequest"), gE = /* @__PURE__ */ n(function(e, t, r, i) {
    i = cE(i);
    var s = !1;
    e.on("close", function() {
      s = !0;
    }), dE(e, { readable: t, writable: r }, function(u) {
      if (u) return i(u);
      s = !0, i();
    });
    var o = !1;
    return function(u) {
      if (!s && !o) {
        if (o = !0, DE(e)) return e.close(Zr);
        if (mE(e)) return e.abort();
        if (mn(e.destroy)) return e.destroy();
        i(u || new Error("stream was destroyed"));
      }
    };
  }, "destroyer"), Md = /* @__PURE__ */ n(function(e) {
    e();
  }, "call"), yE = /* @__PURE__ */ n(function(e, t) {
    return e.pipe(t);
  }, "pipe"), bE = /* @__PURE__ */ n(function() {
    var e = Array.prototype.slice.call(arguments), t = mn(e[e.length - 1] || Zr) && e.pop() || Zr;
    if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Error("pump requires two streams per minimum");
    var r, i = e.map(function(s, o) {
      var u = o < e.length - 1, a = o > 0;
      return gE(s, u, a, function(l) {
        r || (r = l), l && i.forEach(Md), !u && (i.forEach(Md), t(r));
      });
    });
    return e.reduce(yE);
  }, "pump");
  jd.exports = bE;
});

// ../node_modules/tar-fs/node_modules/chownr/chownr.js
var $d = b((Q6, Wd) => {
  "use strict";
  var Oe = C("fs"), It = C("path"), vE = Oe.lchown ? "lchown" : "chown", wE = Oe.lchownSync ? "lchownSync" : "chownSync", Ld = Oe.lchown && !process.
  version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/), Id = /* @__PURE__ */ n((e, t, r) => {
    try {
      return Oe[wE](e, t, r);
    } catch (i) {
      if (i.code !== "ENOENT")
        throw i;
    }
  }, "lchownSync"), _E = /* @__PURE__ */ n((e, t, r) => {
    try {
      return Oe.chownSync(e, t, r);
    } catch (i) {
      if (i.code !== "ENOENT")
        throw i;
    }
  }, "chownSync"), EE = Ld ? (e, t, r, i) => (s) => {
    !s || s.code !== "EISDIR" ? i(s) : Oe.chown(e, t, r, i);
  } : (e, t, r, i) => i, pu = Ld ? (e, t, r) => {
    try {
      return Id(e, t, r);
    } catch (i) {
      if (i.code !== "EISDIR")
        throw i;
      _E(e, t, r);
    }
  } : (e, t, r) => Id(e, t, r), CE = process.version, Nd = /* @__PURE__ */ n((e, t, r) => Oe.readdir(e, t, r), "readdir"), FE = /* @__PURE__ */ n(
  (e, t) => Oe.readdirSync(e, t), "readdirSync");
  /^v4\./.test(CE) && (Nd = /* @__PURE__ */ n((e, t, r) => Oe.readdir(e, r), "readdir"));
  var gn = /* @__PURE__ */ n((e, t, r, i) => {
    Oe[vE](e, t, r, EE(e, t, r, (s) => {
      i(s && s.code !== "ENOENT" ? s : null);
    }));
  }, "chown"), Hd = /* @__PURE__ */ n((e, t, r, i, s) => {
    if (typeof t == "string")
      return Oe.lstat(It.resolve(e, t), (o, u) => {
        if (o)
          return s(o.code !== "ENOENT" ? o : null);
        u.name = t, Hd(e, u, r, i, s);
      });
    if (t.isDirectory())
      Du(It.resolve(e, t.name), r, i, (o) => {
        if (o)
          return s(o);
        let u = It.resolve(e, t.name);
        gn(u, r, i, s);
      });
    else {
      let o = It.resolve(e, t.name);
      gn(o, r, i, s);
    }
  }, "chownrKid"), Du = /* @__PURE__ */ n((e, t, r, i) => {
    Nd(e, { withFileTypes: !0 }, (s, o) => {
      if (s) {
        if (s.code === "ENOENT")
          return i();
        if (s.code !== "ENOTDIR" && s.code !== "ENOTSUP")
          return i(s);
      }
      if (s || !o.length)
        return gn(e, t, r, i);
      let u = o.length, a = null, l = /* @__PURE__ */ n((f) => {
        if (!a) {
          if (f)
            return i(a = f);
          if (--u === 0)
            return gn(e, t, r, i);
        }
      }, "then");
      o.forEach((f) => Hd(e, f, t, r, l));
    });
  }, "chownr"), xE = /* @__PURE__ */ n((e, t, r, i) => {
    if (typeof t == "string")
      try {
        let s = Oe.lstatSync(It.resolve(e, t));
        s.name = t, t = s;
      } catch (s) {
        if (s.code === "ENOENT")
          return;
        throw s;
      }
    t.isDirectory() && Ud(It.resolve(e, t.name), r, i), pu(It.resolve(e, t.name), r, i);
  }, "chownrKidSync"), Ud = /* @__PURE__ */ n((e, t, r) => {
    let i;
    try {
      i = FE(e, { withFileTypes: !0 });
    } catch (s) {
      if (s.code === "ENOENT")
        return;
      if (s.code === "ENOTDIR" || s.code === "ENOTSUP")
        return pu(e, t, r);
      throw s;
    }
    return i && i.length && i.forEach((s) => xE(e, s, t, r)), pu(e, t, r);
  }, "chownrSync");
  Wd.exports = Du;
  Du.sync = Ud;
});

// ../node_modules/readable-stream/lib/internal/streams/stream.js
var mu = b((ek, zd) => {
  zd.exports = C("stream");
});

// ../node_modules/readable-stream/lib/internal/streams/buffer_list.js
var Xd = b((tk, Kd) => {
  "use strict";
  function Vd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })), r.push.apply(r, i);
    }
    return r;
  }
  n(Vd, "ownKeys");
  function Gd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Vd(Object(r), !0).forEach(function(i) {
        SE(e, i, r[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
    return e;
  }
  n(Gd, "_objectSpread");
  function SE(e, t, r) {
    return t = Yd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
  }
  n(SE, "_defineProperty");
  function AE(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  n(AE, "_classCallCheck");
  function Jd(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, Yd(i.key), i);
    }
  }
  n(Jd, "_defineProperties");
  function RE(e, t, r) {
    return t && Jd(e.prototype, t), r && Jd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  n(RE, "_createClass");
  function Yd(e) {
    var t = TE(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  n(Yd, "_toPropertyKey");
  function TE(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var i = r.call(e, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  n(TE, "_toPrimitive");
  var BE = C("buffer"), yn = BE.Buffer, kE = C("util"), gu = kE.inspect, OE = gu && gu.custom || "inspect";
  function PE(e, t, r) {
    yn.prototype.copy.call(e, t, r);
  }
  n(PE, "copyBuffer");
  Kd.exports = /* @__PURE__ */ function() {
    function e() {
      AE(this, e), this.head = null, this.tail = null, this.length = 0;
    }
    return n(e, "BufferList"), RE(e, [{
      key: "push",
      value: /* @__PURE__ */ n(function(r) {
        var i = {
          data: r,
          next: null
        };
        this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
      }, "push")
    }, {
      key: "unshift",
      value: /* @__PURE__ */ n(function(r) {
        var i = {
          data: r,
          next: this.head
        };
        this.length === 0 && (this.tail = i), this.head = i, ++this.length;
      }, "unshift")
    }, {
      key: "shift",
      value: /* @__PURE__ */ n(function() {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      }, "shift")
    }, {
      key: "clear",
      value: /* @__PURE__ */ n(function() {
        this.head = this.tail = null, this.length = 0;
      }, "clear")
    }, {
      key: "join",
      value: /* @__PURE__ */ n(function(r) {
        if (this.length === 0) return "";
        for (var i = this.head, s = "" + i.data; i = i.next; ) s += r + i.data;
        return s;
      }, "join")
    }, {
      key: "concat",
      value: /* @__PURE__ */ n(function(r) {
        if (this.length === 0) return yn.alloc(0);
        for (var i = yn.allocUnsafe(r >>> 0), s = this.head, o = 0; s; )
          PE(s.data, i, o), o += s.data.length, s = s.next;
        return i;
      }, "concat")
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: /* @__PURE__ */ n(function(r, i) {
        var s;
        return r < this.head.data.length ? (s = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.
        length ? s = this.shift() : s = i ? this._getString(r) : this._getBuffer(r), s;
      }, "consume")
    }, {
      key: "first",
      value: /* @__PURE__ */ n(function() {
        return this.head.data;
      }, "first")
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: /* @__PURE__ */ n(function(r) {
        var i = this.head, s = 1, o = i.data;
        for (r -= o.length; i = i.next; ) {
          var u = i.data, a = r > u.length ? u.length : r;
          if (a === u.length ? o += u : o += u.slice(0, r), r -= a, r === 0) {
            a === u.length ? (++s, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = u.slice(a));
            break;
          }
          ++s;
        }
        return this.length -= s, o;
      }, "_getString")
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: /* @__PURE__ */ n(function(r) {
        var i = yn.allocUnsafe(r), s = this.head, o = 1;
        for (s.data.copy(i), r -= s.data.length; s = s.next; ) {
          var u = s.data, a = r > u.length ? u.length : r;
          if (u.copy(i, i.length - r, 0, a), r -= a, r === 0) {
            a === u.length ? (++o, s.next ? this.head = s.next : this.head = this.tail = null) : (this.head = s, s.data = u.slice(a));
            break;
          }
          ++o;
        }
        return this.length -= o, i;
      }, "_getBuffer")
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: OE,
      value: /* @__PURE__ */ n(function(r, i) {
        return gu(this, Gd(Gd({}, i), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }, "value")
    }]), e;
  }();
});

// ../node_modules/readable-stream/lib/internal/streams/destroy.js
var bu = b((ik, Zd) => {
  "use strict";
  function qE(e, t) {
    var r = this, i = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
    return i || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.
    nextTick(yu, this, e)) : process.nextTick(yu, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState &&
    (this._writableState.destroyed = !0), this._destroy(e || null, function(o) {
      !t && o ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(bn, r) : (r._writableState.errorEmitted = !0, process.nextTick(
      Qd, r, o)) : process.nextTick(Qd, r, o) : t ? (process.nextTick(bn, r), t(o)) : process.nextTick(bn, r);
    }), this);
  }
  n(qE, "destroy");
  function Qd(e, t) {
    yu(e, t), bn(e);
  }
  n(Qd, "emitErrorAndCloseNT");
  function bn(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
  }
  n(bn, "emitCloseNT");
  function ME() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.
    endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending =
    !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted =
    !1);
  }
  n(ME, "undestroy");
  function yu(e, t) {
    e.emit("error", t);
  }
  n(yu, "emitErrorNT");
  function jE(e, t) {
    var r = e._readableState, i = e._writableState;
    r && r.autoDestroy || i && i.autoDestroy ? e.destroy(t) : e.emit("error", t);
  }
  n(jE, "errorOrDestroy");
  Zd.exports = {
    destroy: qE,
    undestroy: ME,
    errorOrDestroy: jE
  };
});

// ../node_modules/readable-stream/errors.js
var xt = b((sk, rp) => {
  "use strict";
  var tp = {};
  function Pe(e, t, r) {
    r || (r = Error);
    function i(o, u, a) {
      return typeof t == "string" ? t : t(o, u, a);
    }
    n(i, "getMessage");
    class s extends r {
      static {
        n(this, "NodeError");
      }
      constructor(u, a, l) {
        super(i(u, a, l));
      }
    }
    s.prototype.name = r.name, s.prototype.code = e, tp[e] = s;
  }
  n(Pe, "createErrorType");
  function ep(e, t) {
    if (Array.isArray(e)) {
      let r = e.length;
      return e = e.map((i) => String(i)), r > 2 ? `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1] : r === 2 ? `one of ${t} ${e[0]}\
 or ${e[1]}` : `of ${t} ${e[0]}`;
    } else
      return `of ${t} ${String(e)}`;
  }
  n(ep, "oneOf");
  function IE(e, t, r) {
    return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
  }
  n(IE, "startsWith");
  function LE(e, t, r) {
    return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
  }
  n(LE, "endsWith");
  function NE(e, t, r) {
    return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
  }
  n(NE, "includes");
  Pe("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  }, TypeError);
  Pe("ERR_INVALID_ARG_TYPE", function(e, t, r) {
    let i;
    typeof t == "string" && IE(t, "not ") ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
    let s;
    if (LE(e, " argument"))
      s = `The ${e} ${i} ${ep(t, "type")}`;
    else {
      let o = NE(e, ".") ? "property" : "argument";
      s = `The "${e}" ${o} ${i} ${ep(t, "type")}`;
    }
    return s += `. Received type ${typeof r}`, s;
  }, TypeError);
  Pe("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  Pe("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented";
  });
  Pe("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  Pe("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed";
  });
  Pe("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  Pe("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  Pe("ERR_STREAM_WRITE_AFTER_END", "write after end");
  Pe("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  Pe("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e;
  }, TypeError);
  Pe("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  rp.exports.codes = tp;
});

// ../node_modules/readable-stream/lib/internal/streams/state.js
var vu = b((uk, ip) => {
  "use strict";
  var HE = xt().codes.ERR_INVALID_OPT_VALUE;
  function UE(e, t, r) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
  }
  n(UE, "highWaterMarkFrom");
  function WE(e, t, r, i) {
    var s = UE(t, i, r);
    if (s != null) {
      if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
        var o = i ? r : "highWaterMark";
        throw new HE(o, s);
      }
      return Math.floor(s);
    }
    return e.objectMode ? 16 : 16 * 1024;
  }
  n(WE, "getHighWaterMark");
  ip.exports = {
    getHighWaterMark: WE
  };
});

// ../node_modules/inherits/inherits_browser.js
var np = b((lk, wu) => {
  typeof Object.create == "function" ? wu.exports = /* @__PURE__ */ n(function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  }, "inherits") : wu.exports = /* @__PURE__ */ n(function(t, r) {
    if (r) {
      t.super_ = r;
      var i = /* @__PURE__ */ n(function() {
      }, "TempCtor");
      i.prototype = r.prototype, t.prototype = new i(), t.prototype.constructor = t;
    }
  }, "inherits");
});

// ../node_modules/inherits/inherits.js
var X = b((hk, Eu) => {
  try {
    if (_u = C("util"), typeof _u.inherits != "function") throw "";
    Eu.exports = _u.inherits;
  } catch {
    Eu.exports = np();
  }
  var _u;
});

// ../node_modules/util-deprecate/node.js
var ei = b((ck, sp) => {
  sp.exports = C("util").deprecate;
});

// ../node_modules/readable-stream/lib/_stream_writable.js
var xu = b((dk, hp) => {
  "use strict";
  hp.exports = ce;
  function up(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function() {
      mC(t, e);
    };
  }
  n(up, "CorkedRequest");
  var ar;
  ce.WritableState = ri;
  var $E = {
    deprecate: ei()
  }, ap = mu(), wn = C("buffer").Buffer, zE = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).
  Uint8Array || function() {
  };
  function VE(e) {
    return wn.from(e);
  }
  n(VE, "_uint8ArrayToBuffer");
  function GE(e) {
    return wn.isBuffer(e) || e instanceof zE;
  }
  n(GE, "_isUint8Array");
  var Fu = bu(), JE = vu(), YE = JE.getHighWaterMark, St = xt().codes, KE = St.ERR_INVALID_ARG_TYPE, XE = St.ERR_METHOD_NOT_IMPLEMENTED, QE = St.
  ERR_MULTIPLE_CALLBACK, ZE = St.ERR_STREAM_CANNOT_PIPE, eC = St.ERR_STREAM_DESTROYED, tC = St.ERR_STREAM_NULL_VALUES, rC = St.ERR_STREAM_WRITE_AFTER_END,
  iC = St.ERR_UNKNOWN_ENCODING, lr = Fu.errorOrDestroy;
  X()(ce, ap);
  function nC() {
  }
  n(nC, "nop");
  function ri(e, t, r) {
    ar = ar || Lt(), e = e || {}, typeof r != "boolean" && (r = t instanceof ar), this.objectMode = !!e.objectMode, r && (this.objectMode = this.
    objectMode || !!e.writableObjectMode), this.highWaterMark = YE(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain =
    !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var i = e.decodeStrings === !1;
    this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync =
    !0, this.bufferProcessing = !1, this.onwrite = function(s) {
      hC(t, s);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished =
    !1, this.errorEmitted = !1, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.
    corkedRequestsFree = new up(this);
  }
  n(ri, "WritableState");
  ri.prototype.getBuffer = /* @__PURE__ */ n(function() {
    for (var t = this.bufferedRequest, r = []; t; )
      r.push(t), t = t.next;
    return r;
  }, "getBuffer");
  (function() {
    try {
      Object.defineProperty(ri.prototype, "buffer", {
        get: $E.deprecate(/* @__PURE__ */ n(function() {
          return this.getBuffer();
        }, "writableStateBufferGetter"), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var vn;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (vn = Function.prototype[Symbol.
  hasInstance], Object.defineProperty(ce, Symbol.hasInstance, {
    value: /* @__PURE__ */ n(function(t) {
      return vn.call(this, t) ? !0 : this !== ce ? !1 : t && t._writableState instanceof ri;
    }, "value")
  })) : vn = /* @__PURE__ */ n(function(t) {
    return t instanceof this;
  }, "realHasInstance");
  function ce(e) {
    ar = ar || Lt();
    var t = this instanceof ar;
    if (!t && !vn.call(ce, this)) return new ce(e);
    this._writableState = new ri(e, this, t), this.writable = !0, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev ==
    "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this.
    _final = e.final)), ap.call(this);
  }
  n(ce, "Writable");
  ce.prototype.pipe = function() {
    lr(this, new ZE());
  };
  function sC(e, t) {
    var r = new rC();
    lr(e, r), process.nextTick(t, r);
  }
  n(sC, "writeAfterEnd");
  function oC(e, t, r, i) {
    var s;
    return r === null ? s = new tC() : typeof r != "string" && !t.objectMode && (s = new KE("chunk", ["string", "Buffer"], r)), s ? (lr(e, s),
    process.nextTick(i, s), !1) : !0;
  }
  n(oC, "validChunk");
  ce.prototype.write = function(e, t, r) {
    var i = this._writableState, s = !1, o = !i.objectMode && GE(e);
    return o && !wn.isBuffer(e) && (e = VE(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding),
    typeof r != "function" && (r = nC), i.ending ? sC(this, r) : (o || oC(this, i, e, r)) && (i.pendingcb++, s = aC(this, i, o, e, t, r)), s;
  };
  ce.prototype.cork = function() {
    this._writableState.corked++;
  };
  ce.prototype.uncork = function() {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && lp(this, e));
  };
  ce.prototype.setDefaultEncoding = /* @__PURE__ */ n(function(t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "\
utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new iC(t);
    return this._writableState.defaultEncoding = t, this;
  }, "setDefaultEncoding");
  Object.defineProperty(ce.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });
  function uC(e, t, r) {
    return !e.objectMode && e.decodeStrings !== !1 && typeof t == "string" && (t = wn.from(t, r)), t;
  }
  n(uC, "decodeChunk");
  Object.defineProperty(ce.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function aC(e, t, r, i, s, o) {
    if (!r) {
      var u = uC(t, i, s);
      i !== u && (r = !0, s = "buffer", i = u);
    }
    var a = t.objectMode ? 1 : i.length;
    t.length += a;
    var l = t.length < t.highWaterMark;
    if (l || (t.needDrain = !0), t.writing || t.corked) {
      var f = t.lastBufferedRequest;
      t.lastBufferedRequest = {
        chunk: i,
        encoding: s,
        isBuf: r,
        callback: o,
        next: null
      }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else
      Cu(e, t, !1, a, i, s, o);
    return l;
  }
  n(aC, "writeOrBuffer");
  function Cu(e, t, r, i, s, o, u) {
    t.writelen = i, t.writecb = u, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new eC("write")) : r ? e._writev(s, t.onwrite) : e._write(
    s, o, t.onwrite), t.sync = !1;
  }
  n(Cu, "doWrite");
  function lC(e, t, r, i, s) {
    --t.pendingcb, r ? (process.nextTick(s, i), process.nextTick(ti, e, t), e._writableState.errorEmitted = !0, lr(e, i)) : (s(i), e._writableState.
    errorEmitted = !0, lr(e, i), ti(e, t));
  }
  n(lC, "onwriteError");
  function fC(e) {
    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }
  n(fC, "onwriteStateUpdate");
  function hC(e, t) {
    var r = e._writableState, i = r.sync, s = r.writecb;
    if (typeof s != "function") throw new QE();
    if (fC(r), t) lC(e, r, i, t, s);
    else {
      var o = fp(r) || e.destroyed;
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && lp(e, r), i ? process.nextTick(op, e, r, o, s) : op(e, r, o, s);
    }
  }
  n(hC, "onwrite");
  function op(e, t, r, i) {
    r || cC(e, t), t.pendingcb--, i(), ti(e, t);
  }
  n(op, "afterWrite");
  function cC(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }
  n(cC, "onwriteDrain");
  function lp(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;
    if (e._writev && r && r.next) {
      var i = t.bufferedRequestCount, s = new Array(i), o = t.corkedRequestsFree;
      o.entry = r;
      for (var u = 0, a = !0; r; )
        s[u] = r, r.isBuf || (a = !1), r = r.next, u += 1;
      s.allBuffers = a, Cu(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree =
      o.next, o.next = null) : t.corkedRequestsFree = new up(t), t.bufferedRequestCount = 0;
    } else {
      for (; r; ) {
        var l = r.chunk, f = r.encoding, p = r.callback, d = t.objectMode ? 1 : l.length;
        if (Cu(e, t, !1, d, l, f, p), r = r.next, t.bufferedRequestCount--, t.writing)
          break;
      }
      r === null && (t.lastBufferedRequest = null);
    }
    t.bufferedRequest = r, t.bufferProcessing = !1;
  }
  n(lp, "clearBuffer");
  ce.prototype._write = function(e, t, r) {
    r(new XE("_write()"));
  };
  ce.prototype._writev = null;
  ce.prototype.end = function(e, t, r) {
    var i = this._writableState;
    return typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t),
    i.corked && (i.corked = 1, this.uncork()), i.ending || DC(this, i, r), this;
  };
  Object.defineProperty(ce.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.length;
    }, "get")
  });
  function fp(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }
  n(fp, "needFinish");
  function dC(e, t) {
    e._final(function(r) {
      t.pendingcb--, r && lr(e, r), t.prefinished = !0, e.emit("prefinish"), ti(e, t);
    });
  }
  n(dC, "callFinal");
  function pC(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.pendingcb++, t.finalCalled = !0, process.nextTick(
    dC, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
  }
  n(pC, "prefinish");
  function ti(e, t) {
    var r = fp(t);
    if (r && (pC(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
      var i = e._readableState;
      (!i || i.autoDestroy && i.endEmitted) && e.destroy();
    }
    return r;
  }
  n(ti, "finishMaybe");
  function DC(e, t, r) {
    t.ending = !0, ti(e, t), r && (t.finished ? process.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1;
  }
  n(DC, "endWritable");
  function mC(e, t, r) {
    var i = e.entry;
    for (e.entry = null; i; ) {
      var s = i.callback;
      t.pendingcb--, s(r), i = i.next;
    }
    t.corkedRequestsFree.next = e;
  }
  n(mC, "onCorkedFinish");
  Object.defineProperty(ce.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(t) {
      this._writableState && (this._writableState.destroyed = t);
    }, "set")
  });
  ce.prototype.destroy = Fu.destroy;
  ce.prototype._undestroy = Fu.undestroy;
  ce.prototype._destroy = function(e, t) {
    t(e);
  };
});

// ../node_modules/readable-stream/lib/_stream_duplex.js
var Lt = b((Dk, dp) => {
  "use strict";
  var gC = Object.keys || function(e) {
    var t = [];
    for (var r in e) t.push(r);
    return t;
  };
  dp.exports = Je;
  var cp = Ru(), Au = xu();
  X()(Je, cp);
  for (Su = gC(Au.prototype), _n = 0; _n < Su.length; _n++)
    En = Su[_n], Je.prototype[En] || (Je.prototype[En] = Au.prototype[En]);
  var Su, En, _n;
  function Je(e) {
    if (!(this instanceof Je)) return new Je(e);
    cp.call(this, e), Au.call(this, e), this.allowHalfOpen = !0, e && (e.readable === !1 && (this.readable = !1), e.writable === !1 && (this.
    writable = !1), e.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", yC)));
  }
  n(Je, "Duplex");
  Object.defineProperty(Je.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(Je.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });
  Object.defineProperty(Je.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.length;
    }, "get")
  });
  function yC() {
    this._writableState.ended || process.nextTick(bC, this);
  }
  n(yC, "onend");
  function bC(e) {
    e.end();
  }
  n(bC, "onEndNT");
  Object.defineProperty(Je.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(t) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = t, this._writableState.destroyed =
      t);
    }, "set")
  });
});

// ../node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var Cn = b((gk, mp) => {
  "use strict";
  var pp = xt().codes.ERR_STREAM_PREMATURE_CLOSE;
  function vC(e) {
    var t = !1;
    return function() {
      if (!t) {
        t = !0;
        for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
          i[s] = arguments[s];
        e.apply(this, i);
      }
    };
  }
  n(vC, "once");
  function wC() {
  }
  n(wC, "noop");
  function _C(e) {
    return e.setHeader && typeof e.abort == "function";
  }
  n(_C, "isRequest");
  function Dp(e, t, r) {
    if (typeof t == "function") return Dp(e, null, t);
    t || (t = {}), r = vC(r || wC);
    var i = t.readable || t.readable !== !1 && e.readable, s = t.writable || t.writable !== !1 && e.writable, o = /* @__PURE__ */ n(function() {
      e.writable || a();
    }, "onlegacyfinish"), u = e._writableState && e._writableState.finished, a = /* @__PURE__ */ n(function() {
      s = !1, u = !0, i || r.call(e);
    }, "onfinish"), l = e._readableState && e._readableState.endEmitted, f = /* @__PURE__ */ n(function() {
      i = !1, l = !0, s || r.call(e);
    }, "onend"), p = /* @__PURE__ */ n(function(g) {
      r.call(e, g);
    }, "onerror"), d = /* @__PURE__ */ n(function() {
      var g;
      if (i && !l)
        return (!e._readableState || !e._readableState.ended) && (g = new pp()), r.call(e, g);
      if (s && !u)
        return (!e._writableState || !e._writableState.ended) && (g = new pp()), r.call(e, g);
    }, "onclose"), c = /* @__PURE__ */ n(function() {
      e.req.on("finish", a);
    }, "onrequest");
    return _C(e) ? (e.on("complete", a), e.on("abort", d), e.req ? c() : e.on("request", c)) : s && !e._writableState && (e.on("end", o), e.
    on("close", o)), e.on("end", f), e.on("finish", a), t.error !== !1 && e.on("error", p), e.on("close", d), function() {
      e.removeListener("complete", a), e.removeListener("abort", d), e.removeListener("request", c), e.req && e.req.removeListener("finish",
      a), e.removeListener("end", o), e.removeListener("close", o), e.removeListener("finish", a), e.removeListener("end", f), e.removeListener(
      "error", p), e.removeListener("close", d);
    };
  }
  n(Dp, "eos");
  mp.exports = Dp;
});

// ../node_modules/readable-stream/lib/internal/streams/async_iterator.js
var yp = b((bk, gp) => {
  "use strict";
  var Fn;
  function At(e, t, r) {
    return t = EC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
  }
  n(At, "_defineProperty");
  function EC(e) {
    var t = CC(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  n(EC, "_toPropertyKey");
  function CC(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var i = r.call(e, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  n(CC, "_toPrimitive");
  var FC = Cn(), Rt = Symbol("lastResolve"), Nt = Symbol("lastReject"), ii = Symbol("error"), xn = Symbol("ended"), Ht = Symbol("lastPromise"),
  Tu = Symbol("handlePromise"), Ut = Symbol("stream");
  function Tt(e, t) {
    return {
      value: e,
      done: t
    };
  }
  n(Tt, "createIterResult");
  function xC(e) {
    var t = e[Rt];
    if (t !== null) {
      var r = e[Ut].read();
      r !== null && (e[Ht] = null, e[Rt] = null, e[Nt] = null, t(Tt(r, !1)));
    }
  }
  n(xC, "readAndResolve");
  function SC(e) {
    process.nextTick(xC, e);
  }
  n(SC, "onReadable");
  function AC(e, t) {
    return function(r, i) {
      e.then(function() {
        if (t[xn]) {
          r(Tt(void 0, !0));
          return;
        }
        t[Tu](r, i);
      }, i);
    };
  }
  n(AC, "wrapForNext");
  var RC = Object.getPrototypeOf(function() {
  }), TC = Object.setPrototypeOf((Fn = {
    get stream() {
      return this[Ut];
    },
    next: /* @__PURE__ */ n(function() {
      var t = this, r = this[ii];
      if (r !== null)
        return Promise.reject(r);
      if (this[xn])
        return Promise.resolve(Tt(void 0, !0));
      if (this[Ut].destroyed)
        return new Promise(function(u, a) {
          process.nextTick(function() {
            t[ii] ? a(t[ii]) : u(Tt(void 0, !0));
          });
        });
      var i = this[Ht], s;
      if (i)
        s = new Promise(AC(i, this));
      else {
        var o = this[Ut].read();
        if (o !== null)
          return Promise.resolve(Tt(o, !1));
        s = new Promise(this[Tu]);
      }
      return this[Ht] = s, s;
    }, "next")
  }, At(Fn, Symbol.asyncIterator, function() {
    return this;
  }), At(Fn, "return", /* @__PURE__ */ n(function() {
    var t = this;
    return new Promise(function(r, i) {
      t[Ut].destroy(null, function(s) {
        if (s) {
          i(s);
          return;
        }
        r(Tt(void 0, !0));
      });
    });
  }, "_return")), Fn), RC), BC = /* @__PURE__ */ n(function(t) {
    var r, i = Object.create(TC, (r = {}, At(r, Ut, {
      value: t,
      writable: !0
    }), At(r, Rt, {
      value: null,
      writable: !0
    }), At(r, Nt, {
      value: null,
      writable: !0
    }), At(r, ii, {
      value: null,
      writable: !0
    }), At(r, xn, {
      value: t._readableState.endEmitted,
      writable: !0
    }), At(r, Tu, {
      value: /* @__PURE__ */ n(function(o, u) {
        var a = i[Ut].read();
        a ? (i[Ht] = null, i[Rt] = null, i[Nt] = null, o(Tt(a, !1))) : (i[Rt] = o, i[Nt] = u);
      }, "value"),
      writable: !0
    }), r));
    return i[Ht] = null, FC(t, function(s) {
      if (s && s.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var o = i[Nt];
        o !== null && (i[Ht] = null, i[Rt] = null, i[Nt] = null, o(s)), i[ii] = s;
        return;
      }
      var u = i[Rt];
      u !== null && (i[Ht] = null, i[Rt] = null, i[Nt] = null, u(Tt(void 0, !0))), i[xn] = !0;
    }), t.on("readable", SC.bind(null, i)), i;
  }, "createReadableStreamAsyncIterator");
  gp.exports = BC;
});

// ../node_modules/readable-stream/lib/internal/streams/from.js
var _p = b((wk, wp) => {
  "use strict";
  function bp(e, t, r, i, s, o, u) {
    try {
      var a = e[o](u), l = a.value;
    } catch (f) {
      r(f);
      return;
    }
    a.done ? t(l) : Promise.resolve(l).then(i, s);
  }
  n(bp, "asyncGeneratorStep");
  function kC(e) {
    return function() {
      var t = this, r = arguments;
      return new Promise(function(i, s) {
        var o = e.apply(t, r);
        function u(l) {
          bp(o, i, s, u, a, "next", l);
        }
        n(u, "_next");
        function a(l) {
          bp(o, i, s, u, a, "throw", l);
        }
        n(a, "_throw"), u(void 0);
      });
    };
  }
  n(kC, "_asyncToGenerator");
  function vp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })), r.push.apply(r, i);
    }
    return r;
  }
  n(vp, "ownKeys");
  function OC(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? vp(Object(r), !0).forEach(function(i) {
        PC(e, i, r[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }
    return e;
  }
  n(OC, "_objectSpread");
  function PC(e, t, r) {
    return t = qC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
  }
  n(PC, "_defineProperty");
  function qC(e) {
    var t = MC(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  n(qC, "_toPropertyKey");
  function MC(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var i = r.call(e, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  n(MC, "_toPrimitive");
  var jC = xt().codes.ERR_INVALID_ARG_TYPE;
  function IC(e, t, r) {
    var i;
    if (t && typeof t.next == "function")
      i = t;
    else if (t && t[Symbol.asyncIterator]) i = t[Symbol.asyncIterator]();
    else if (t && t[Symbol.iterator]) i = t[Symbol.iterator]();
    else throw new jC("iterable", ["Iterable"], t);
    var s = new e(OC({
      objectMode: !0
    }, r)), o = !1;
    s._read = function() {
      o || (o = !0, u());
    };
    function u() {
      return a.apply(this, arguments);
    }
    n(u, "next");
    function a() {
      return a = kC(function* () {
        try {
          var l = yield i.next(), f = l.value, p = l.done;
          p ? s.push(null) : s.push(yield f) ? u() : o = !1;
        } catch (d) {
          s.destroy(d);
        }
      }), a.apply(this, arguments);
    }
    return n(a, "_next2"), s;
  }
  n(IC, "from");
  wp.exports = IC;
});

// ../node_modules/readable-stream/lib/_stream_readable.js
var Ru = b((Ck, kp) => {
  "use strict";
  kp.exports = H;
  var fr;
  H.ReadableState = xp;
  var Ek = C("events").EventEmitter, Fp = /* @__PURE__ */ n(function(t, r) {
    return t.listeners(r).length;
  }, "EElistenerCount"), si = mu(), Sn = C("buffer").Buffer, LC = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self <
  "u" ? self : {}).Uint8Array || function() {
  };
  function NC(e) {
    return Sn.from(e);
  }
  n(NC, "_uint8ArrayToBuffer");
  function HC(e) {
    return Sn.isBuffer(e) || e instanceof LC;
  }
  n(HC, "_isUint8Array");
  var Bu = C("util"), I;
  Bu && Bu.debuglog ? I = Bu.debuglog("stream") : I = /* @__PURE__ */ n(function() {
  }, "debug");
  var UC = Xd(), Iu = bu(), WC = vu(), $C = WC.getHighWaterMark, An = xt().codes, zC = An.ERR_INVALID_ARG_TYPE, VC = An.ERR_STREAM_PUSH_AFTER_EOF,
  GC = An.ERR_METHOD_NOT_IMPLEMENTED, JC = An.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, hr, ku, Ou;
  X()(H, si);
  var ni = Iu.errorOrDestroy, Pu = ["error", "close", "destroy", "pause", "resume"];
  function YC(e, t, r) {
    if (typeof e.prependListener == "function") return e.prependListener(t, r);
    !e._events || !e._events[t] ? e.on(t, r) : Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
  }
  n(YC, "prependListener");
  function xp(e, t, r) {
    fr = fr || Lt(), e = e || {}, typeof r != "boolean" && (r = t instanceof fr), this.objectMode = !!e.objectMode, r && (this.objectMode = this.
    objectMode || !!e.readableObjectMode), this.highWaterMark = $C(this, e, "readableHighWaterMark", r), this.buffer = new UC(), this.length =
    0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0,
    this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose =
    e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain =
    0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (hr || (hr = C("string_decoder/").StringDecoder), this.
    decoder = new hr(e.encoding), this.encoding = e.encoding);
  }
  n(xp, "ReadableState");
  function H(e) {
    if (fr = fr || Lt(), !(this instanceof H)) return new H(e);
    var t = this instanceof fr;
    this._readableState = new xp(e, this, t), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy ==
    "function" && (this._destroy = e.destroy)), si.call(this);
  }
  n(H, "Readable");
  Object.defineProperty(H.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(t) {
      this._readableState && (this._readableState.destroyed = t);
    }, "set")
  });
  H.prototype.destroy = Iu.destroy;
  H.prototype._undestroy = Iu.undestroy;
  H.prototype._destroy = function(e, t) {
    t(e);
  };
  H.prototype.push = function(e, t) {
    var r = this._readableState, i;
    return r.objectMode ? i = !0 : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = Sn.from(e, t), t = ""), i =
    !0), Sp(this, e, t, !1, i);
  };
  H.prototype.unshift = function(e) {
    return Sp(this, e, null, !0, !1);
  };
  function Sp(e, t, r, i, s) {
    I("readableAddChunk", t);
    var o = e._readableState;
    if (t === null)
      o.reading = !1, QC(e, o);
    else {
      var u;
      if (s || (u = KC(o, t)), u)
        ni(e, u);
      else if (o.objectMode || t && t.length > 0)
        if (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(t) !== Sn.prototype && (t = NC(t)), i)
          o.endEmitted ? ni(e, new JC()) : qu(e, o, t, !0);
        else if (o.ended)
          ni(e, new VC());
        else {
          if (o.destroyed)
            return !1;
          o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || t.length !== 0 ? qu(e, o, t, !1) : ju(e, o)) : qu(e, o,
          t, !1);
        }
      else i || (o.reading = !1, ju(e, o));
    }
    return !o.ended && (o.length < o.highWaterMark || o.length === 0);
  }
  n(Sp, "readableAddChunk");
  function qu(e, t, r, i) {
    t.flowing && t.length === 0 && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.
    unshift(r) : t.buffer.push(r), t.needReadable && Rn(e)), ju(e, t);
  }
  n(qu, "addChunk");
  function KC(e, t) {
    var r;
    return !HC(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r = new zC("chunk", ["string", "Buffer", "Uint8Array"], t)), r;
  }
  n(KC, "chunkInvalid");
  H.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  };
  H.prototype.setEncoding = function(e) {
    hr || (hr = C("string_decoder/").StringDecoder);
    var t = new hr(e);
    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var r = this._readableState.buffer.head, i = ""; r !== null; )
      i += t.write(r.data), r = r.next;
    return this._readableState.buffer.clear(), i !== "" && this._readableState.buffer.push(i), this._readableState.length = i.length, this;
  };
  var Ep = 1073741824;
  function XC(e) {
    return e >= Ep ? e = Ep : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  n(XC, "computeNewHighWaterMark");
  function Cp(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length :
    (e > t.highWaterMark && (t.highWaterMark = XC(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }
  n(Cp, "howMuchToRead");
  H.prototype.read = function(e) {
    I("read", e), e = parseInt(e, 10);
    var t = this._readableState, r = e;
    if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length >
    0) || t.ended))
      return I("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Mu(this) : Rn(this), null;
    if (e = Cp(e, t), e === 0 && t.ended)
      return t.length === 0 && Mu(this), null;
    var i = t.needReadable;
    I("need readable", i), (t.length === 0 || t.length - e < t.highWaterMark) && (i = !0, I("length less than watermark", i)), t.ended || t.
    reading ? (i = !1, I("reading or ended", i)) : i && (I("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0),
    this._read(t.highWaterMark), t.sync = !1, t.reading || (e = Cp(r, t)));
    var s;
    return e > 0 ? s = Tp(e, t) : s = null, s === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain =
    0), t.length === 0 && (t.ended || (t.needReadable = !0), r !== e && t.ended && Mu(this)), s !== null && this.emit("data", s), s;
  };
  function QC(e, t) {
    if (I("onEofChunk"), !t.ended) {
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }
      t.ended = !0, t.sync ? Rn(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, Ap(e)));
    }
  }
  n(QC, "onEofChunk");
  function Rn(e) {
    var t = e._readableState;
    I("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (I("emitReadable", t.flowing), t.emittedReadable =
    !0, process.nextTick(Ap, e));
  }
  n(Rn, "emitReadable");
  function Ap(e) {
    var t = e._readableState;
    I("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1),
    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, Lu(e);
  }
  n(Ap, "emitReadable_");
  function ju(e, t) {
    t.readingMore || (t.readingMore = !0, process.nextTick(ZC, e, t));
  }
  n(ju, "maybeReadMore");
  function ZC(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
      var r = t.length;
      if (I("maybeReadMore read 0"), e.read(0), r === t.length)
        break;
    }
    t.readingMore = !1;
  }
  n(ZC, "maybeReadMore_");
  H.prototype._read = function(e) {
    ni(this, new GC("_read()"));
  };
  H.prototype.pipe = function(e, t) {
    var r = this, i = this._readableState;
    switch (i.pipesCount) {
      case 0:
        i.pipes = e;
        break;
      case 1:
        i.pipes = [i.pipes, e];
        break;
      default:
        i.pipes.push(e);
        break;
    }
    i.pipesCount += 1, I("pipe count=%d opts=%j", i.pipesCount, t);
    var s = (!t || t.end !== !1) && e !== process.stdout && e !== process.stderr, o = s ? a : _;
    i.endEmitted ? process.nextTick(o) : r.once("end", o), e.on("unpipe", u);
    function u(y, w) {
      I("onunpipe"), y === r && w && w.hasUnpiped === !1 && (w.hasUnpiped = !0, p());
    }
    n(u, "onunpipe");
    function a() {
      I("onend"), e.end();
    }
    n(a, "onend");
    var l = eF(r);
    e.on("drain", l);
    var f = !1;
    function p() {
      I("cleanup"), e.removeListener("close", h), e.removeListener("finish", g), e.removeListener("drain", l), e.removeListener("error", c),
      e.removeListener("unpipe", u), r.removeListener("end", a), r.removeListener("end", _), r.removeListener("data", d), f = !0, i.awaitDrain &&
      (!e._writableState || e._writableState.needDrain) && l();
    }
    n(p, "cleanup"), r.on("data", d);
    function d(y) {
      I("ondata");
      var w = e.write(y);
      I("dest.write", w), w === !1 && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && Bp(i.pipes, e) !== -1) && !f && (I("false\
 write response, pause", i.awaitDrain), i.awaitDrain++), r.pause());
    }
    n(d, "ondata");
    function c(y) {
      I("onerror", y), _(), e.removeListener("error", c), Fp(e, "error") === 0 && ni(e, y);
    }
    n(c, "onerror"), YC(e, "error", c);
    function h() {
      e.removeListener("finish", g), _();
    }
    n(h, "onclose"), e.once("close", h);
    function g() {
      I("onfinish"), e.removeListener("close", h), _();
    }
    n(g, "onfinish"), e.once("finish", g);
    function _() {
      I("unpipe"), r.unpipe(e);
    }
    return n(_, "unpipe"), e.emit("pipe", r), i.flowing || (I("pipe resume"), r.resume()), e;
  };
  function eF(e) {
    return /* @__PURE__ */ n(function() {
      var r = e._readableState;
      I("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && Fp(e, "data") && (r.flowing = !0, Lu(e));
    }, "pipeOnDrainFunctionResult");
  }
  n(eF, "pipeOnDrain");
  H.prototype.unpipe = function(e) {
    var t = this._readableState, r = {
      hasUnpiped: !1
    };
    if (t.pipesCount === 0) return this;
    if (t.pipesCount === 1)
      return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r),
      this);
    if (!e) {
      var i = t.pipes, s = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;
      for (var o = 0; o < s; o++) i[o].emit("unpipe", this, {
        hasUnpiped: !1
      });
      return this;
    }
    var u = Bp(t.pipes, e);
    return u === -1 ? this : (t.pipes.splice(u, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r),
    this);
  };
  H.prototype.on = function(e, t) {
    var r = si.prototype.on.call(this, e, t), i = this._readableState;
    return e === "data" ? (i.readableListening = this.listenerCount("readable") > 0, i.flowing !== !1 && this.resume()) : e === "readable" &&
    !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, I("on reada\
ble", i.length, i.reading), i.length ? Rn(this) : i.reading || process.nextTick(tF, this)), r;
  };
  H.prototype.addListener = H.prototype.on;
  H.prototype.removeListener = function(e, t) {
    var r = si.prototype.removeListener.call(this, e, t);
    return e === "readable" && process.nextTick(Rp, this), r;
  };
  H.prototype.removeAllListeners = function(e) {
    var t = si.prototype.removeAllListeners.apply(this, arguments);
    return (e === "readable" || e === void 0) && process.nextTick(Rp, this), t;
  };
  function Rp(e) {
    var t = e._readableState;
    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.
    resume();
  }
  n(Rp, "updateReadableListening");
  function tF(e) {
    I("readable nexttick read 0"), e.read(0);
  }
  n(tF, "nReadingNextTick");
  H.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (I("resume"), e.flowing = !e.readableListening, rF(this, e)), e.paused = !1, this;
  };
  function rF(e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, process.nextTick(iF, e, t));
  }
  n(rF, "resume");
  function iF(e, t) {
    I("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), Lu(e), t.flowing && !t.reading && e.read(0);
  }
  n(iF, "resume_");
  H.prototype.pause = function() {
    return I("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (I("pause"), this._readableState.flowing =
    !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function Lu(e) {
    var t = e._readableState;
    for (I("flow", t.flowing); t.flowing && e.read() !== null; ) ;
  }
  n(Lu, "flow");
  H.prototype.wrap = function(e) {
    var t = this, r = this._readableState, i = !1;
    e.on("end", function() {
      if (I("wrapped end"), r.decoder && !r.ended) {
        var u = r.decoder.end();
        u && u.length && t.push(u);
      }
      t.push(null);
    }), e.on("data", function(u) {
      if (I("wrapped data"), r.decoder && (u = r.decoder.write(u)), !(r.objectMode && u == null) && !(!r.objectMode && (!u || !u.length))) {
        var a = t.push(u);
        a || (i = !0, e.pause());
      }
    });
    for (var s in e)
      this[s] === void 0 && typeof e[s] == "function" && (this[s] = (/* @__PURE__ */ n(function(a) {
        return /* @__PURE__ */ n(function() {
          return e[a].apply(e, arguments);
        }, "methodWrapReturnFunction");
      }, "methodWrap"))(s));
    for (var o = 0; o < Pu.length; o++)
      e.on(Pu[o], this.emit.bind(this, Pu[o]));
    return this._read = function(u) {
      I("wrapped _read", u), i && (i = !1, e.resume());
    }, this;
  };
  typeof Symbol == "function" && (H.prototype[Symbol.asyncIterator] = function() {
    return ku === void 0 && (ku = yp()), ku(this);
  });
  Object.defineProperty(H.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(H.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState && this._readableState.buffer;
    }, "get")
  });
  Object.defineProperty(H.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.flowing;
    }, "get"),
    set: /* @__PURE__ */ n(function(t) {
      this._readableState && (this._readableState.flowing = t);
    }, "set")
  });
  H._fromList = Tp;
  Object.defineProperty(H.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.length;
    }, "get")
  });
  function Tp(e, t) {
    if (t.length === 0) return null;
    var r;
    return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.
    first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
  }
  n(Tp, "fromList");
  function Mu(e) {
    var t = e._readableState;
    I("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, process.nextTick(nF, t, e));
  }
  n(Mu, "endReadable");
  function nF(e, t) {
    if (I("endReadableNT", e.endEmitted, e.length), !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.
    autoDestroy)) {
      var r = t._writableState;
      (!r || r.autoDestroy && r.finished) && t.destroy();
    }
  }
  n(nF, "endReadableNT");
  typeof Symbol == "function" && (H.from = function(e, t) {
    return Ou === void 0 && (Ou = _p()), Ou(H, e, t);
  });
  function Bp(e, t) {
    for (var r = 0, i = e.length; r < i; r++)
      if (e[r] === t) return r;
    return -1;
  }
  n(Bp, "indexOf");
});

// ../node_modules/readable-stream/lib/_stream_transform.js
var Nu = b((xk, Pp) => {
  "use strict";
  Pp.exports = ut;
  var Tn = xt().codes, sF = Tn.ERR_METHOD_NOT_IMPLEMENTED, oF = Tn.ERR_MULTIPLE_CALLBACK, uF = Tn.ERR_TRANSFORM_ALREADY_TRANSFORMING, aF = Tn.
  ERR_TRANSFORM_WITH_LENGTH_0, Bn = Lt();
  X()(ut, Bn);
  function lF(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (i === null)
      return this.emit("error", new oF());
    r.writechunk = null, r.writecb = null, t != null && this.push(t), i(e);
    var s = this._readableState;
    s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
  n(lF, "afterTransform");
  function ut(e) {
    if (!(this instanceof ut)) return new ut(e);
    Bn.call(this, e), this._transformState = {
      afterTransform: lF.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.
    transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", fF);
  }
  n(ut, "Transform");
  function fF() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
      Op(e, t, r);
    }) : Op(this, null, null);
  }
  n(fF, "prefinish");
  ut.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, Bn.prototype.push.call(this, e, t);
  };
  ut.prototype._transform = function(e, t, r) {
    r(new sF("_transform()"));
  };
  ut.prototype._write = function(e, t, r) {
    var i = this._transformState;
    if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
      var s = this._readableState;
      (i.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
    }
  };
  ut.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform =
    !0;
  };
  ut.prototype._destroy = function(e, t) {
    Bn.prototype._destroy.call(this, e, function(r) {
      t(r);
    });
  };
  function Op(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new aF();
    if (e._transformState.transforming) throw new uF();
    return e.push(null);
  }
  n(Op, "done");
});

// ../node_modules/readable-stream/lib/_stream_passthrough.js
var jp = b((Ak, Mp) => {
  "use strict";
  Mp.exports = oi;
  var qp = Nu();
  X()(oi, qp);
  function oi(e) {
    if (!(this instanceof oi)) return new oi(e);
    qp.call(this, e);
  }
  n(oi, "PassThrough");
  oi.prototype._transform = function(e, t, r) {
    r(null, e);
  };
});

// ../node_modules/readable-stream/lib/internal/streams/pipeline.js
var Up = b((Tk, Hp) => {
  "use strict";
  var Hu;
  function hF(e) {
    var t = !1;
    return function() {
      t || (t = !0, e.apply(void 0, arguments));
    };
  }
  n(hF, "once");
  var Np = xt().codes, cF = Np.ERR_MISSING_ARGS, dF = Np.ERR_STREAM_DESTROYED;
  function Ip(e) {
    if (e) throw e;
  }
  n(Ip, "noop");
  function pF(e) {
    return e.setHeader && typeof e.abort == "function";
  }
  n(pF, "isRequest");
  function DF(e, t, r, i) {
    i = hF(i);
    var s = !1;
    e.on("close", function() {
      s = !0;
    }), Hu === void 0 && (Hu = Cn()), Hu(e, {
      readable: t,
      writable: r
    }, function(u) {
      if (u) return i(u);
      s = !0, i();
    });
    var o = !1;
    return function(u) {
      if (!s && !o) {
        if (o = !0, pF(e)) return e.abort();
        if (typeof e.destroy == "function") return e.destroy();
        i(u || new dF("pipe"));
      }
    };
  }
  n(DF, "destroyer");
  function Lp(e) {
    e();
  }
  n(Lp, "call");
  function mF(e, t) {
    return e.pipe(t);
  }
  n(mF, "pipe");
  function gF(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? Ip : e.pop();
  }
  n(gF, "popCallback");
  function yF() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var i = gF(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
      throw new cF("streams");
    var s, o = t.map(function(u, a) {
      var l = a < t.length - 1, f = a > 0;
      return DF(u, l, f, function(p) {
        s || (s = p), p && o.forEach(Lp), !l && (o.forEach(Lp), i(s));
      });
    });
    return t.reduce(mF);
  }
  n(yF, "pipeline");
  Hp.exports = yF;
});

// ../node_modules/readable-stream/readable.js
var cr = b((qe, ai) => {
  var ui = C("stream");
  process.env.READABLE_STREAM === "disable" && ui ? (ai.exports = ui.Readable, Object.assign(ai.exports, ui), ai.exports.Stream = ui) : (qe =
  ai.exports = Ru(), qe.Stream = ui || qe, qe.Readable = qe, qe.Writable = xu(), qe.Duplex = Lt(), qe.Transform = Nu(), qe.PassThrough = jp(),
  qe.finished = Cn(), qe.pipeline = Up());
});

// ../node_modules/bl/BufferList.js
var zp = b((kk, $p) => {
  "use strict";
  var { Buffer: Le } = C("buffer"), Wp = Symbol.for("BufferList");
  function Q(e) {
    if (!(this instanceof Q))
      return new Q(e);
    Q._init.call(this, e);
  }
  n(Q, "BufferList");
  Q._init = /* @__PURE__ */ n(function(t) {
    Object.defineProperty(this, Wp, { value: !0 }), this._bufs = [], this.length = 0, t && this.append(t);
  }, "_init");
  Q.prototype._new = /* @__PURE__ */ n(function(t) {
    return new Q(t);
  }, "_new");
  Q.prototype._offset = /* @__PURE__ */ n(function(t) {
    if (t === 0)
      return [0, 0];
    let r = 0;
    for (let i = 0; i < this._bufs.length; i++) {
      let s = r + this._bufs[i].length;
      if (t < s || i === this._bufs.length - 1)
        return [i, t - r];
      r = s;
    }
  }, "_offset");
  Q.prototype._reverseOffset = function(e) {
    let t = e[0], r = e[1];
    for (let i = 0; i < t; i++)
      r += this._bufs[i].length;
    return r;
  };
  Q.prototype.get = /* @__PURE__ */ n(function(t) {
    if (t > this.length || t < 0)
      return;
    let r = this._offset(t);
    return this._bufs[r[0]][r[1]];
  }, "get");
  Q.prototype.slice = /* @__PURE__ */ n(function(t, r) {
    return typeof t == "number" && t < 0 && (t += this.length), typeof r == "number" && r < 0 && (r += this.length), this.copy(null, 0, t, r);
  }, "slice");
  Q.prototype.copy = /* @__PURE__ */ n(function(t, r, i, s) {
    if ((typeof i != "number" || i < 0) && (i = 0), (typeof s != "number" || s > this.length) && (s = this.length), i >= this.length || s <=
    0)
      return t || Le.alloc(0);
    let o = !!t, u = this._offset(i), a = s - i, l = a, f = o && r || 0, p = u[1];
    if (i === 0 && s === this.length) {
      if (!o)
        return this._bufs.length === 1 ? this._bufs[0] : Le.concat(this._bufs, this.length);
      for (let d = 0; d < this._bufs.length; d++)
        this._bufs[d].copy(t, f), f += this._bufs[d].length;
      return t;
    }
    if (l <= this._bufs[u[0]].length - p)
      return o ? this._bufs[u[0]].copy(t, r, p, p + l) : this._bufs[u[0]].slice(p, p + l);
    o || (t = Le.allocUnsafe(a));
    for (let d = u[0]; d < this._bufs.length; d++) {
      let c = this._bufs[d].length - p;
      if (l > c)
        this._bufs[d].copy(t, f, p), f += c;
      else {
        this._bufs[d].copy(t, f, p, p + l), f += c;
        break;
      }
      l -= c, p && (p = 0);
    }
    return t.length > f ? t.slice(0, f) : t;
  }, "copy");
  Q.prototype.shallowSlice = /* @__PURE__ */ n(function(t, r) {
    if (t = t || 0, r = typeof r != "number" ? this.length : r, t < 0 && (t += this.length), r < 0 && (r += this.length), t === r)
      return this._new();
    let i = this._offset(t), s = this._offset(r), o = this._bufs.slice(i[0], s[0] + 1);
    return s[1] === 0 ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, s[1]), i[1] !== 0 && (o[0] = o[0].slice(i[1])), this._new(o);
  }, "shallowSlice");
  Q.prototype.toString = /* @__PURE__ */ n(function(t, r, i) {
    return this.slice(r, i).toString(t);
  }, "toString");
  Q.prototype.consume = /* @__PURE__ */ n(function(t) {
    if (t = Math.trunc(t), Number.isNaN(t) || t <= 0) return this;
    for (; this._bufs.length; )
      if (t >= this._bufs[0].length)
        t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
      else {
        this._bufs[0] = this._bufs[0].slice(t), this.length -= t;
        break;
      }
    return this;
  }, "consume");
  Q.prototype.duplicate = /* @__PURE__ */ n(function() {
    let t = this._new();
    for (let r = 0; r < this._bufs.length; r++)
      t.append(this._bufs[r]);
    return t;
  }, "duplicate");
  Q.prototype.append = /* @__PURE__ */ n(function(t) {
    if (t == null)
      return this;
    if (t.buffer)
      this._appendBuffer(Le.from(t.buffer, t.byteOffset, t.byteLength));
    else if (Array.isArray(t))
      for (let r = 0; r < t.length; r++)
        this.append(t[r]);
    else if (this._isBufferList(t))
      for (let r = 0; r < t._bufs.length; r++)
        this.append(t._bufs[r]);
    else
      typeof t == "number" && (t = t.toString()), this._appendBuffer(Le.from(t));
    return this;
  }, "append");
  Q.prototype._appendBuffer = /* @__PURE__ */ n(function(t) {
    this._bufs.push(t), this.length += t.length;
  }, "appendBuffer");
  Q.prototype.indexOf = function(e, t, r) {
    if (r === void 0 && typeof t == "string" && (r = t, t = void 0), typeof e == "function" || Array.isArray(e))
      throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof e == "number" ? e = Le.from([e]) : typeof e == "string" ? e = Le.from(e, r) : this._isBufferList(e) ? e = e.slice() : Array.isArray(
    e.buffer) ? e = Le.from(e.buffer, e.byteOffset, e.byteLength) : Le.isBuffer(e) || (e = Le.from(e)), t = Number(t || 0), isNaN(t) && (t =
    0), t < 0 && (t = this.length + t), t < 0 && (t = 0), e.length === 0)
      return t > this.length ? this.length : t;
    let i = this._offset(t), s = i[0], o = i[1];
    for (; s < this._bufs.length; s++) {
      let u = this._bufs[s];
      for (; o < u.length; )
        if (u.length - o >= e.length) {
          let l = u.indexOf(e, o);
          if (l !== -1)
            return this._reverseOffset([s, l]);
          o = u.length - e.length + 1;
        } else {
          let l = this._reverseOffset([s, o]);
          if (this._match(l, e))
            return l;
          o++;
        }
      o = 0;
    }
    return -1;
  };
  Q.prototype._match = function(e, t) {
    if (this.length - e < t.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (this.get(e + r) !== t[r])
        return !1;
    return !0;
  };
  (function() {
    let e = {
      readDoubleBE: 8,
      readDoubleLE: 8,
      readFloatBE: 4,
      readFloatLE: 4,
      readInt32BE: 4,
      readInt32LE: 4,
      readUInt32BE: 4,
      readUInt32LE: 4,
      readInt16BE: 2,
      readInt16LE: 2,
      readUInt16BE: 2,
      readUInt16LE: 2,
      readInt8: 1,
      readUInt8: 1,
      readIntBE: null,
      readIntLE: null,
      readUIntBE: null,
      readUIntLE: null
    };
    for (let t in e)
      (function(r) {
        e[r] === null ? Q.prototype[r] = function(i, s) {
          return this.slice(i, i + s)[r](0, s);
        } : Q.prototype[r] = function(i = 0) {
          return this.slice(i, i + e[r])[r](0);
        };
      })(t);
  })();
  Q.prototype._isBufferList = /* @__PURE__ */ n(function(t) {
    return t instanceof Q || Q.isBufferList(t);
  }, "_isBufferList");
  Q.isBufferList = /* @__PURE__ */ n(function(t) {
    return t != null && t[Wp];
  }, "isBufferList");
  $p.exports = Q;
});

// ../node_modules/bl/bl.js
var Vp = b((Pk, kn) => {
  "use strict";
  var Uu = cr().Duplex, bF = X(), li = zp();
  function Fe(e) {
    if (!(this instanceof Fe))
      return new Fe(e);
    if (typeof e == "function") {
      this._callback = e;
      let t = (/* @__PURE__ */ n(function(i) {
        this._callback && (this._callback(i), this._callback = null);
      }, "piper")).bind(this);
      this.on("pipe", /* @__PURE__ */ n(function(i) {
        i.on("error", t);
      }, "onPipe")), this.on("unpipe", /* @__PURE__ */ n(function(i) {
        i.removeListener("error", t);
      }, "onUnpipe")), e = null;
    }
    li._init.call(this, e), Uu.call(this);
  }
  n(Fe, "BufferListStream");
  bF(Fe, Uu);
  Object.assign(Fe.prototype, li.prototype);
  Fe.prototype._new = /* @__PURE__ */ n(function(t) {
    return new Fe(t);
  }, "_new");
  Fe.prototype._write = /* @__PURE__ */ n(function(t, r, i) {
    this._appendBuffer(t), typeof i == "function" && i();
  }, "_write");
  Fe.prototype._read = /* @__PURE__ */ n(function(t) {
    if (!this.length)
      return this.push(null);
    t = Math.min(t, this.length), this.push(this.slice(0, t)), this.consume(t);
  }, "_read");
  Fe.prototype.end = /* @__PURE__ */ n(function(t) {
    Uu.prototype.end.call(this, t), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, "end");
  Fe.prototype._destroy = /* @__PURE__ */ n(function(t, r) {
    this._bufs.length = 0, this.length = 0, r(t);
  }, "_destroy");
  Fe.prototype._isBufferList = /* @__PURE__ */ n(function(t) {
    return t instanceof Fe || t instanceof li || Fe.isBufferList(t);
  }, "_isBufferList");
  Fe.isBufferList = li.isBufferList;
  kn.exports = Fe;
  kn.exports.BufferListStream = Fe;
  kn.exports.BufferList = li;
});

// ../node_modules/tar-stream/headers.js
var zu = b((pr) => {
  var vF = Buffer.alloc, wF = "0000000000000000000", _F = "7777777777777777777", Gp = 48, Jp = Buffer.from("ustar\0", "binary"), EF = Buffer.
  from("00", "binary"), CF = Buffer.from("ustar ", "binary"), FF = Buffer.from(" \0", "binary"), xF = parseInt("7777", 8), fi = 257, $u = 263,
  SF = /* @__PURE__ */ n(function(e, t, r) {
    return typeof e != "number" ? r : (e = ~~e, e >= t ? t : e >= 0 || (e += t, e >= 0) ? e : 0);
  }, "clamp"), AF = /* @__PURE__ */ n(function(e) {
    switch (e) {
      case 0:
        return "file";
      case 1:
        return "link";
      case 2:
        return "symlink";
      case 3:
        return "character-device";
      case 4:
        return "block-device";
      case 5:
        return "directory";
      case 6:
        return "fifo";
      case 7:
        return "contiguous-file";
      case 72:
        return "pax-header";
      case 55:
        return "pax-global-header";
      case 27:
        return "gnu-long-link-path";
      case 28:
      case 30:
        return "gnu-long-path";
    }
    return null;
  }, "toType"), RF = /* @__PURE__ */ n(function(e) {
    switch (e) {
      case "file":
        return 0;
      case "link":
        return 1;
      case "symlink":
        return 2;
      case "character-device":
        return 3;
      case "block-device":
        return 4;
      case "directory":
        return 5;
      case "fifo":
        return 6;
      case "contiguous-file":
        return 7;
      case "pax-header":
        return 72;
    }
    return 0;
  }, "toTypeflag"), Yp = /* @__PURE__ */ n(function(e, t, r, i) {
    for (; r < i; r++)
      if (e[r] === t) return r;
    return i;
  }, "indexOf"), Kp = /* @__PURE__ */ n(function(e) {
    for (var t = 256, r = 0; r < 148; r++) t += e[r];
    for (var i = 156; i < 512; i++) t += e[i];
    return t;
  }, "cksum"), Bt = /* @__PURE__ */ n(function(e, t) {
    return e = e.toString(8), e.length > t ? _F.slice(0, t) + " " : wF.slice(0, t - e.length) + e + " ";
  }, "encodeOct");
  function TF(e) {
    var t;
    if (e[0] === 128) t = !0;
    else if (e[0] === 255) t = !1;
    else return null;
    for (var r = [], i = e.length - 1; i > 0; i--) {
      var s = e[i];
      t ? r.push(s) : r.push(255 - s);
    }
    var o = 0, u = r.length;
    for (i = 0; i < u; i++)
      o += r[i] * Math.pow(256, i);
    return t ? o : -1 * o;
  }
  n(TF, "parse256");
  var kt = /* @__PURE__ */ n(function(e, t, r) {
    if (e = e.slice(t, t + r), t = 0, e[t] & 128)
      return TF(e);
    for (; t < e.length && e[t] === 32; ) t++;
    for (var i = SF(Yp(e, 32, t, e.length), e.length, e.length); t < i && e[t] === 0; ) t++;
    return i === t ? 0 : parseInt(e.slice(t, i).toString(), 8);
  }, "decodeOct"), dr = /* @__PURE__ */ n(function(e, t, r, i) {
    return e.slice(t, Yp(e, 0, t, t + r)).toString(i);
  }, "decodeStr"), Wu = /* @__PURE__ */ n(function(e) {
    var t = Buffer.byteLength(e), r = Math.floor(Math.log(t) / Math.log(10)) + 1;
    return t + r >= Math.pow(10, r) && r++, t + r + e;
  }, "addLength");
  pr.decodeLongPath = function(e, t) {
    return dr(e, 0, e.length, t);
  };
  pr.encodePax = function(e) {
    var t = "";
    e.name && (t += Wu(" path=" + e.name + `
`)), e.linkname && (t += Wu(" linkpath=" + e.linkname + `
`));
    var r = e.pax;
    if (r)
      for (var i in r)
        t += Wu(" " + i + "=" + r[i] + `
`);
    return Buffer.from(t);
  };
  pr.decodePax = function(e) {
    for (var t = {}; e.length; ) {
      for (var r = 0; r < e.length && e[r] !== 32; ) r++;
      var i = parseInt(e.slice(0, r).toString(), 10);
      if (!i) return t;
      var s = e.slice(r + 1, i - 1).toString(), o = s.indexOf("=");
      if (o === -1) return t;
      t[s.slice(0, o)] = s.slice(o + 1), e = e.slice(i);
    }
    return t;
  };
  pr.encode = function(e) {
    var t = vF(512), r = e.name, i = "";
    if (e.typeflag === 5 && r[r.length - 1] !== "/" && (r += "/"), Buffer.byteLength(r) !== r.length) return null;
    for (; Buffer.byteLength(r) > 100; ) {
      var s = r.indexOf("/");
      if (s === -1) return null;
      i += i ? "/" + r.slice(0, s) : r.slice(0, s), r = r.slice(s + 1);
    }
    return Buffer.byteLength(r) > 100 || Buffer.byteLength(i) > 155 || e.linkname && Buffer.byteLength(e.linkname) > 100 ? null : (t.write(r),
    t.write(Bt(e.mode & xF, 6), 100), t.write(Bt(e.uid, 6), 108), t.write(Bt(e.gid, 6), 116), t.write(Bt(e.size, 11), 124), t.write(Bt(e.mtime.
    getTime() / 1e3 | 0, 11), 136), t[156] = Gp + RF(e.type), e.linkname && t.write(e.linkname, 157), Jp.copy(t, fi), EF.copy(t, $u), e.uname &&
    t.write(e.uname, 265), e.gname && t.write(e.gname, 297), t.write(Bt(e.devmajor || 0, 6), 329), t.write(Bt(e.devminor || 0, 6), 337), i &&
    t.write(i, 345), t.write(Bt(Kp(t), 6), 148), t);
  };
  pr.decode = function(e, t, r) {
    var i = e[156] === 0 ? 0 : e[156] - Gp, s = dr(e, 0, 100, t), o = kt(e, 100, 8), u = kt(e, 108, 8), a = kt(e, 116, 8), l = kt(e, 124, 12),
    f = kt(e, 136, 12), p = AF(i), d = e[157] === 0 ? null : dr(e, 157, 100, t), c = dr(e, 265, 32), h = dr(e, 297, 32), g = kt(e, 329, 8), _ = kt(
    e, 337, 8), y = Kp(e);
    if (y === 8 * 32) return null;
    if (y !== kt(e, 148, 8)) throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
    if (Jp.compare(e, fi, fi + 6) === 0)
      e[345] && (s = dr(e, 345, 155, t) + "/" + s);
    else if (!(CF.compare(e, fi, fi + 6) === 0 && FF.compare(e, $u, $u + 2) === 0)) {
      if (!r)
        throw new Error("Invalid tar header: unknown format.");
    }
    return i === 0 && s && s[s.length - 1] === "/" && (i = 5), {
      name: s,
      mode: o,
      uid: u,
      gid: a,
      size: l,
      mtime: new Date(1e3 * f),
      type: p,
      linkname: d,
      uname: c,
      gname: h,
      devmajor: g,
      devminor: _
    };
  };
});

// ../node_modules/tar-stream/extract.js
var iD = b((Ik, rD) => {
  var Qp = C("util"), BF = Vp(), hi = zu(), Zp = cr().Writable, eD = cr().PassThrough, tD = /* @__PURE__ */ n(function() {
  }, "noop"), Xp = /* @__PURE__ */ n(function(e) {
    return e &= 511, e && 512 - e;
  }, "overflow"), kF = /* @__PURE__ */ n(function(e, t) {
    var r = new On(e, t);
    return r.end(), r;
  }, "emptyStream"), OF = /* @__PURE__ */ n(function(e, t) {
    return t.path && (e.name = t.path), t.linkpath && (e.linkname = t.linkpath), t.size && (e.size = parseInt(t.size, 10)), e.pax = t, e;
  }, "mixinPax"), On = /* @__PURE__ */ n(function(e, t) {
    this._parent = e, this.offset = t, eD.call(this, { autoDestroy: !1 });
  }, "Source");
  Qp.inherits(On, eD);
  On.prototype.destroy = function(e) {
    this._parent.destroy(e);
  };
  var at = /* @__PURE__ */ n(function(e) {
    if (!(this instanceof at)) return new at(e);
    Zp.call(this, e), e = e || {}, this._offset = 0, this._buffer = BF(), this._missing = 0, this._partial = !1, this._onparse = tD, this._header =
    null, this._stream = null, this._overflow = null, this._cb = null, this._locked = !1, this._destroyed = !1, this._pax = null, this._paxGlobal =
    null, this._gnuLongPath = null, this._gnuLongLinkPath = null;
    var t = this, r = t._buffer, i = /* @__PURE__ */ n(function() {
      t._continue();
    }, "oncontinue"), s = /* @__PURE__ */ n(function(c) {
      if (t._locked = !1, c) return t.destroy(c);
      t._stream || i();
    }, "onunlock"), o = /* @__PURE__ */ n(function() {
      t._stream = null;
      var c = Xp(t._header.size);
      c ? t._parse(c, u) : t._parse(512, d), t._locked || i();
    }, "onstreamend"), u = /* @__PURE__ */ n(function() {
      t._buffer.consume(Xp(t._header.size)), t._parse(512, d), i();
    }, "ondrain"), a = /* @__PURE__ */ n(function() {
      var c = t._header.size;
      t._paxGlobal = hi.decodePax(r.slice(0, c)), r.consume(c), o();
    }, "onpaxglobalheader"), l = /* @__PURE__ */ n(function() {
      var c = t._header.size;
      t._pax = hi.decodePax(r.slice(0, c)), t._paxGlobal && (t._pax = Object.assign({}, t._paxGlobal, t._pax)), r.consume(c), o();
    }, "onpaxheader"), f = /* @__PURE__ */ n(function() {
      var c = t._header.size;
      this._gnuLongPath = hi.decodeLongPath(r.slice(0, c), e.filenameEncoding), r.consume(c), o();
    }, "ongnulongpath"), p = /* @__PURE__ */ n(function() {
      var c = t._header.size;
      this._gnuLongLinkPath = hi.decodeLongPath(r.slice(0, c), e.filenameEncoding), r.consume(c), o();
    }, "ongnulonglinkpath"), d = /* @__PURE__ */ n(function() {
      var c = t._offset, h;
      try {
        h = t._header = hi.decode(r.slice(0, 512), e.filenameEncoding, e.allowUnknownFormat);
      } catch (g) {
        t.emit("error", g);
      }
      if (r.consume(512), !h) {
        t._parse(512, d), i();
        return;
      }
      if (h.type === "gnu-long-path") {
        t._parse(h.size, f), i();
        return;
      }
      if (h.type === "gnu-long-link-path") {
        t._parse(h.size, p), i();
        return;
      }
      if (h.type === "pax-global-header") {
        t._parse(h.size, a), i();
        return;
      }
      if (h.type === "pax-header") {
        t._parse(h.size, l), i();
        return;
      }
      if (t._gnuLongPath && (h.name = t._gnuLongPath, t._gnuLongPath = null), t._gnuLongLinkPath && (h.linkname = t._gnuLongLinkPath, t._gnuLongLinkPath =
      null), t._pax && (t._header = h = OF(h, t._pax), t._pax = null), t._locked = !0, !h.size || h.type === "directory") {
        t._parse(512, d), t.emit("entry", h, kF(t, c), s);
        return;
      }
      t._stream = new On(t, c), t.emit("entry", h, t._stream, s), t._parse(h.size, o), i();
    }, "onheader");
    this._onheader = d, this._parse(512, d);
  }, "Extract");
  Qp.inherits(at, Zp);
  at.prototype.destroy = function(e) {
    this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), this._stream && this._stream.emit("close"));
  };
  at.prototype._parse = function(e, t) {
    this._destroyed || (this._offset += e, this._missing = e, t === this._onheader && (this._partial = !1), this._onparse = t);
  };
  at.prototype._continue = function() {
    if (!this._destroyed) {
      var e = this._cb;
      this._cb = tD, this._overflow ? this._write(this._overflow, void 0, e) : e();
    }
  };
  at.prototype._write = function(e, t, r) {
    if (!this._destroyed) {
      var i = this._stream, s = this._buffer, o = this._missing;
      if (e.length && (this._partial = !0), e.length < o)
        return this._missing -= e.length, this._overflow = null, i ? i.write(e, r) : (s.append(e), r());
      this._cb = r, this._missing = 0;
      var u = null;
      e.length > o && (u = e.slice(o), e = e.slice(0, o)), i ? i.end(e) : s.append(e), this._overflow = u, this._onparse();
    }
  };
  at.prototype._final = function(e) {
    if (this._partial) return this.destroy(new Error("Unexpected end of data"));
    e();
  };
  rD.exports = at;
});

// ../node_modules/fs-constants/index.js
var sD = b((Nk, nD) => {
  nD.exports = C("fs").constants || C("constants");
});

// ../node_modules/tar-stream/pack.js
var fD = b((Hk, lD) => {
  var Dr = sD(), oD = ur(), qn = X(), PF = Buffer.alloc, uD = cr().Readable, mr = cr().Writable, qF = C("string_decoder").StringDecoder, Pn = zu(),
  MF = parseInt("755", 8), jF = parseInt("644", 8), aD = PF(1024), Gu = /* @__PURE__ */ n(function() {
  }, "noop"), Vu = /* @__PURE__ */ n(function(e, t) {
    t &= 511, t && e.push(aD.slice(0, 512 - t));
  }, "overflow");
  function IF(e) {
    switch (e & Dr.S_IFMT) {
      case Dr.S_IFBLK:
        return "block-device";
      case Dr.S_IFCHR:
        return "character-device";
      case Dr.S_IFDIR:
        return "directory";
      case Dr.S_IFIFO:
        return "fifo";
      case Dr.S_IFLNK:
        return "symlink";
    }
    return "file";
  }
  n(IF, "modeToType");
  var Mn = /* @__PURE__ */ n(function(e) {
    mr.call(this), this.written = 0, this._to = e, this._destroyed = !1;
  }, "Sink");
  qn(Mn, mr);
  Mn.prototype._write = function(e, t, r) {
    if (this.written += e.length, this._to.push(e)) return r();
    this._to._drain = r;
  };
  Mn.prototype.destroy = function() {
    this._destroyed || (this._destroyed = !0, this.emit("close"));
  };
  var jn = /* @__PURE__ */ n(function() {
    mr.call(this), this.linkname = "", this._decoder = new qF("utf-8"), this._destroyed = !1;
  }, "LinkSink");
  qn(jn, mr);
  jn.prototype._write = function(e, t, r) {
    this.linkname += this._decoder.write(e), r();
  };
  jn.prototype.destroy = function() {
    this._destroyed || (this._destroyed = !0, this.emit("close"));
  };
  var ci = /* @__PURE__ */ n(function() {
    mr.call(this), this._destroyed = !1;
  }, "Void");
  qn(ci, mr);
  ci.prototype._write = function(e, t, r) {
    r(new Error("No body allowed for this entry"));
  };
  ci.prototype.destroy = function() {
    this._destroyed || (this._destroyed = !0, this.emit("close"));
  };
  var Ye = /* @__PURE__ */ n(function(e) {
    if (!(this instanceof Ye)) return new Ye(e);
    uD.call(this, e), this._drain = Gu, this._finalized = !1, this._finalizing = !1, this._destroyed = !1, this._stream = null;
  }, "Pack");
  qn(Ye, uD);
  Ye.prototype.entry = function(e, t, r) {
    if (this._stream) throw new Error("already piping an entry");
    if (!(this._finalized || this._destroyed)) {
      typeof t == "function" && (r = t, t = null), r || (r = Gu);
      var i = this;
      if ((!e.size || e.type === "symlink") && (e.size = 0), e.type || (e.type = IF(e.mode)), e.mode || (e.mode = e.type === "directory" ? MF :
      jF), e.uid || (e.uid = 0), e.gid || (e.gid = 0), e.mtime || (e.mtime = /* @__PURE__ */ new Date()), typeof t == "string" && (t = Buffer.
      from(t)), Buffer.isBuffer(t)) {
        e.size = t.length, this._encode(e);
        var s = this.push(t);
        return Vu(i, e.size), s ? process.nextTick(r) : this._drain = r, new ci();
      }
      if (e.type === "symlink" && !e.linkname) {
        var o = new jn();
        return oD(o, function(a) {
          if (a)
            return i.destroy(), r(a);
          e.linkname = o.linkname, i._encode(e), r();
        }), o;
      }
      if (this._encode(e), e.type !== "file" && e.type !== "contiguous-file")
        return process.nextTick(r), new ci();
      var u = new Mn(this);
      return this._stream = u, oD(u, function(a) {
        if (i._stream = null, a)
          return i.destroy(), r(a);
        if (u.written !== e.size)
          return i.destroy(), r(new Error("size mismatch"));
        Vu(i, e.size), i._finalizing && i.finalize(), r();
      }), u;
    }
  };
  Ye.prototype.finalize = function() {
    if (this._stream) {
      this._finalizing = !0;
      return;
    }
    this._finalized || (this._finalized = !0, this.push(aD), this.push(null));
  };
  Ye.prototype.destroy = function(e) {
    this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), this._stream && this._stream.destroy && this._stream.
    destroy());
  };
  Ye.prototype._encode = function(e) {
    if (!e.pax) {
      var t = Pn.encode(e);
      if (t) {
        this.push(t);
        return;
      }
    }
    this._encodePax(e);
  };
  Ye.prototype._encodePax = function(e) {
    var t = Pn.encodePax({
      name: e.name,
      linkname: e.linkname,
      pax: e.pax
    }), r = {
      name: "PaxHeader",
      mode: e.mode,
      uid: e.uid,
      gid: e.gid,
      size: t.length,
      mtime: e.mtime,
      type: "pax-header",
      linkname: e.linkname && "PaxHeader",
      uname: e.uname,
      gname: e.gname,
      devmajor: e.devmajor,
      devminor: e.devminor
    };
    this.push(Pn.encode(r)), this.push(t), Vu(this, t.length), r.size = e.size, r.type = e.type, this.push(Pn.encode(r));
  };
  Ye.prototype._read = function(e) {
    var t = this._drain;
    this._drain = Gu, t();
  };
  lD.exports = Ye;
});

// ../node_modules/tar-stream/index.js
var hD = b((Ju) => {
  Ju.extract = iD();
  Ju.pack = fD();
});

// ../node_modules/mkdirp-classic/index.js
var DD = b(($k, pD) => {
  var In = C("path"), cD = C("fs"), dD = parseInt("0777", 8);
  pD.exports = gr.mkdirp = gr.mkdirP = gr;
  function gr(e, t, r, i) {
    typeof t == "function" ? (r = t, t = {}) : (!t || typeof t != "object") && (t = { mode: t });
    var s = t.mode, o = t.fs || cD;
    s === void 0 && (s = dD & ~process.umask()), i || (i = null);
    var u = r || function() {
    };
    e = In.resolve(e), o.mkdir(e, s, function(a) {
      if (!a)
        return i = i || e, u(null, i);
      switch (a.code) {
        case "ENOENT":
          gr(In.dirname(e), t, function(l, f) {
            l ? u(l, f) : gr(e, t, u, f);
          });
          break;
        // In the case of any other error, just see if there's a dir
        // there already.  If so, then hooray!  If not, then something
        // is borked.
        default:
          o.stat(e, function(l, f) {
            l || !f.isDirectory() ? u(a, i) : u(null, i);
          });
          break;
      }
    });
  }
  n(gr, "mkdirP");
  gr.sync = /* @__PURE__ */ n(function e(t, r, i) {
    (!r || typeof r != "object") && (r = { mode: r });
    var s = r.mode, o = r.fs || cD;
    s === void 0 && (s = dD & ~process.umask()), i || (i = null), t = In.resolve(t);
    try {
      o.mkdirSync(t, s), i = i || t;
    } catch (a) {
      switch (a.code) {
        case "ENOENT":
          i = e(In.dirname(t), r, i), e(t, r, i);
          break;
        // In the case of any other error, just see if there's a dir
        // there already.  If so, then hooray!  If not, then something
        // is borked.
        default:
          var u;
          try {
            u = o.statSync(t);
          } catch {
            throw a;
          }
          if (!u.isDirectory()) throw a;
          break;
      }
    }
    return i;
  }, "sync");
});

// ../node_modules/tar-fs/index.js
var ED = b((Xu) => {
  var LF = $d(), gD = hD(), yD = du(), NF = DD(), bD = C("fs"), Be = C("path"), HF = C("os"), di = HF.platform() === "win32", pi = /* @__PURE__ */ n(
  function() {
  }, "noop"), Ku = /* @__PURE__ */ n(function(e) {
    return e;
  }, "echo"), Yu = di ? function(e) {
    return e.replace(/\\/g, "/").replace(/[:?<>|]/g, "_");
  } : Ku, UF = /* @__PURE__ */ n(function(e, t, r, i, s, o) {
    var u = s || ["."];
    return /* @__PURE__ */ n(function(l) {
      if (!u.length) return l();
      var f = u.shift(), p = Be.join(r, f);
      t.call(e, p, function(d, c) {
        if (d) return l(d);
        if (!c.isDirectory()) return l(null, f, c);
        e.readdir(p, function(h, g) {
          if (h) return l(h);
          o && g.sort();
          for (var _ = 0; _ < g.length; _++)
            i(Be.join(r, f, g[_])) || u.push(Be.join(f, g[_]));
          l(null, f, c);
        });
      });
    }, "loop");
  }, "statAll"), vD = /* @__PURE__ */ n(function(e, t) {
    return function(r) {
      r.name = r.name.split("/").slice(t).join("/");
      var i = r.linkname;
      return i && (r.type === "link" || Be.isAbsolute(i)) && (r.linkname = i.split("/").slice(t).join("/")), e(r);
    };
  }, "strip");
  Xu.pack = function(e, t) {
    e || (e = "."), t || (t = {});
    var r = t.fs || bD, i = t.ignore || t.filter || pi, s = t.map || pi, o = t.mapStream || Ku, u = UF(r, t.dereference ? r.stat : r.lstat, e,
    i, t.entries, t.sort), a = t.strict !== !1, l = typeof t.umask == "number" ? ~t.umask : ~wD(), f = typeof t.dmode == "number" ? t.dmode :
    0, p = typeof t.fmode == "number" ? t.fmode : 0, d = t.pack || gD.pack(), c = t.finish || pi;
    t.strip && (s = vD(s, t.strip)), t.readable && (f |= parseInt(555, 8), p |= parseInt(444, 8)), t.writable && (f |= parseInt(333, 8), p |=
    parseInt(222, 8));
    var h = /* @__PURE__ */ n(function(y, w) {
      r.readlink(Be.join(e, y), function(F, v) {
        if (F) return d.destroy(F);
        w.linkname = Yu(v), d.entry(w, _);
      });
    }, "onsymlink"), g = /* @__PURE__ */ n(function(y, w, F) {
      if (y) return d.destroy(y);
      if (!w)
        return t.finalize !== !1 && d.finalize(), c(d);
      if (F.isSocket()) return _();
      var v = {
        name: Yu(w),
        mode: (F.mode | (F.isDirectory() ? f : p)) & l,
        mtime: F.mtime,
        size: F.size,
        type: "file",
        uid: F.uid,
        gid: F.gid
      };
      if (F.isDirectory())
        return v.size = 0, v.type = "directory", v = s(v) || v, d.entry(v, _);
      if (F.isSymbolicLink())
        return v.size = 0, v.type = "symlink", v = s(v) || v, h(w, v);
      if (v = s(v) || v, !F.isFile())
        return a ? d.destroy(new Error("unsupported type for " + w)) : _();
      var E = d.entry(v, _);
      if (E) {
        var x = o(r.createReadStream(Be.join(e, w), { start: 0, end: v.size > 0 ? v.size - 1 : v.size }), v);
        x.on("error", function(A) {
          E.destroy(A);
        }), yD(x, E);
      }
    }, "onstat"), _ = /* @__PURE__ */ n(function(y) {
      if (y) return d.destroy(y);
      u(g);
    }, "onnextentry");
    return _(), d;
  };
  var WF = /* @__PURE__ */ n(function(e) {
    return e.length ? e[e.length - 1] : null;
  }, "head"), $F = /* @__PURE__ */ n(function() {
    return process.getuid ? process.getuid() : -1;
  }, "processGetuid"), wD = /* @__PURE__ */ n(function() {
    return process.umask ? process.umask() : 0;
  }, "processUmask");
  Xu.extract = function(e, t) {
    e || (e = "."), t || (t = {});
    var r = t.fs || bD, i = t.ignore || t.filter || pi, s = t.map || pi, o = t.mapStream || Ku, u = t.chown !== !1 && !di && $F() === 0, a = t.
    extract || gD.extract(), l = [], f = /* @__PURE__ */ new Date(), p = typeof t.umask == "number" ? ~t.umask : ~wD(), d = typeof t.dmode ==
    "number" ? t.dmode : 0, c = typeof t.fmode == "number" ? t.fmode : 0, h = t.strict !== !1;
    t.strip && (s = vD(s, t.strip)), t.readable && (d |= parseInt(555, 8), c |= parseInt(444, 8)), t.writable && (d |= parseInt(333, 8), c |=
    parseInt(222, 8));
    var g = /* @__PURE__ */ n(function(w, F) {
      for (var v; (v = WF(l)) && w.slice(0, v[0].length) !== v[0]; ) l.pop();
      if (!v) return F();
      r.utimes(v[0], f, v[1], F);
    }, "utimesParent"), _ = /* @__PURE__ */ n(function(w, F, v) {
      if (t.utimes === !1) return v();
      if (F.type === "directory") return r.utimes(w, f, F.mtime, v);
      if (F.type === "symlink") return g(w, v);
      r.utimes(w, f, F.mtime, function(E) {
        if (E) return v(E);
        g(w, v);
      });
    }, "utimes"), y = /* @__PURE__ */ n(function(w, F, v) {
      var E = F.type === "symlink", x = E ? r.lchmod : r.chmod, A = E ? r.lchown : r.chown;
      if (!x) return v();
      var k = (F.mode | (F.type === "directory" ? d : c)) & p;
      A && u ? A.call(r, w, F.uid, F.gid, q) : q(null);
      function q(O) {
        if (O) return v(O);
        if (!x) return v();
        x.call(r, w, k, v);
      }
      n(q, "onchown");
    }, "chperm");
    return a.on("entry", function(w, F, v) {
      w = s(w) || w, w.name = Yu(w.name);
      var E = Be.join(e, Be.join("/", w.name));
      if (i(E, w))
        return F.resume(), v();
      var x = /* @__PURE__ */ n(function(j) {
        if (j) return v(j);
        _(E, w, function(U) {
          if (U) return v(U);
          if (di) return v();
          y(E, w, v);
        });
      }, "stat"), A = /* @__PURE__ */ n(function() {
        if (di) return v();
        r.unlink(E, function() {
          r.symlink(w.linkname, E, x);
        });
      }, "onsymlink"), k = /* @__PURE__ */ n(function() {
        if (di) return v();
        r.unlink(E, function() {
          var j = Be.join(e, Be.join("/", w.linkname));
          r.link(j, E, function(U) {
            if (U && U.code === "EPERM" && t.hardlinkAsFilesFallback)
              return F = r.createReadStream(j), q();
            x(U);
          });
        });
      }, "onlink"), q = /* @__PURE__ */ n(function() {
        var j = r.createWriteStream(E), U = o(F, w);
        j.on("error", function(he) {
          U.destroy(he);
        }), yD(U, j, function(he) {
          if (he) return v(he);
          j.on("close", x);
        });
      }, "onfile");
      if (w.type === "directory")
        return l.push([E, w.mtime]), mD(E, {
          fs: r,
          own: u,
          uid: w.uid,
          gid: w.gid
        }, x);
      var O = Be.dirname(E);
      _D(r, O, Be.join(e, "."), function(j, U) {
        if (j) return v(j);
        if (!U) return v(new Error(O + " is not a valid path"));
        mD(O, {
          fs: r,
          own: u,
          uid: w.uid,
          gid: w.gid
        }, function(he) {
          if (he) return v(he);
          switch (w.type) {
            case "file":
              return q();
            case "link":
              return k();
            case "symlink":
              return A();
          }
          if (h) return v(new Error("unsupported type for " + E + " (" + w.type + ")"));
          F.resume(), v();
        });
      });
    }), t.finish && a.on("finish", t.finish), a;
  };
  function _D(e, t, r, i) {
    if (t === r) return i(null, !0);
    e.lstat(t, function(s, o) {
      if (s && s.code !== "ENOENT") return i(s);
      if (s || o.isDirectory()) return _D(e, Be.join(t, ".."), r, i);
      i(null, !1);
    });
  }
  n(_D, "validate");
  function mD(e, t, r) {
    NF(e, { fs: t.fs }, function(i, s) {
      !i && s && t.own ? LF(s, t.uid, t.gid, r) : r(i);
    });
  }
  n(mD, "mkdirfix");
});

// ../node_modules/process-nextick-args/index.js
var ke = b((Jk, Qu) => {
  "use strict";
  typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.
  indexOf("v1.8.") !== 0 ? Qu.exports = { nextTick: zF } : Qu.exports = process;
  function zF(e, t, r, i) {
    if (typeof e != "function")
      throw new TypeError('"callback" argument must be a function');
    var s = arguments.length, o, u;
    switch (s) {
      case 0:
      case 1:
        return process.nextTick(e);
      case 2:
        return process.nextTick(/* @__PURE__ */ n(function() {
          e.call(null, t);
        }, "afterTickOne"));
      case 3:
        return process.nextTick(/* @__PURE__ */ n(function() {
          e.call(null, t, r);
        }, "afterTickTwo"));
      case 4:
        return process.nextTick(/* @__PURE__ */ n(function() {
          e.call(null, t, r, i);
        }, "afterTickThree"));
      default:
        for (o = new Array(s - 1), u = 0; u < o.length; )
          o[u++] = arguments[u];
        return process.nextTick(/* @__PURE__ */ n(function() {
          e.apply(null, o);
        }, "afterTick"));
    }
  }
  n(zF, "nextTick");
});

// ../node_modules/peek-stream/node_modules/isarray/index.js
var FD = b((Kk, CD) => {
  var VF = {}.toString;
  CD.exports = Array.isArray || function(e) {
    return VF.call(e) == "[object Array]";
  };
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/internal/streams/stream.js
var Zu = b((Xk, xD) => {
  xD.exports = C("stream");
});

// ../node_modules/peek-stream/node_modules/safe-buffer/index.js
var Nn = b((ea, AD) => {
  var Ln = C("buffer"), lt = Ln.Buffer;
  function SD(e, t) {
    for (var r in e)
      t[r] = e[r];
  }
  n(SD, "copyProps");
  lt.from && lt.alloc && lt.allocUnsafe && lt.allocUnsafeSlow ? AD.exports = Ln : (SD(Ln, ea), ea.Buffer = yr);
  function yr(e, t, r) {
    return lt(e, t, r);
  }
  n(yr, "SafeBuffer");
  SD(lt, yr);
  yr.from = function(e, t, r) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return lt(e, t, r);
  };
  yr.alloc = function(e, t, r) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var i = lt(e);
    return t !== void 0 ? typeof r == "string" ? i.fill(t, r) : i.fill(t) : i.fill(0), i;
  };
  yr.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return lt(e);
  };
  yr.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return Ln.SlowBuffer(e);
  };
});

// ../node_modules/core-util-is/lib/util.js
var Se = b((xe) => {
  function GF(e) {
    return Array.isArray ? Array.isArray(e) : Hn(e) === "[object Array]";
  }
  n(GF, "isArray");
  xe.isArray = GF;
  function JF(e) {
    return typeof e == "boolean";
  }
  n(JF, "isBoolean");
  xe.isBoolean = JF;
  function YF(e) {
    return e === null;
  }
  n(YF, "isNull");
  xe.isNull = YF;
  function KF(e) {
    return e == null;
  }
  n(KF, "isNullOrUndefined");
  xe.isNullOrUndefined = KF;
  function XF(e) {
    return typeof e == "number";
  }
  n(XF, "isNumber");
  xe.isNumber = XF;
  function QF(e) {
    return typeof e == "string";
  }
  n(QF, "isString");
  xe.isString = QF;
  function ZF(e) {
    return typeof e == "symbol";
  }
  n(ZF, "isSymbol");
  xe.isSymbol = ZF;
  function ex(e) {
    return e === void 0;
  }
  n(ex, "isUndefined");
  xe.isUndefined = ex;
  function tx(e) {
    return Hn(e) === "[object RegExp]";
  }
  n(tx, "isRegExp");
  xe.isRegExp = tx;
  function rx(e) {
    return typeof e == "object" && e !== null;
  }
  n(rx, "isObject");
  xe.isObject = rx;
  function ix(e) {
    return Hn(e) === "[object Date]";
  }
  n(ix, "isDate");
  xe.isDate = ix;
  function nx(e) {
    return Hn(e) === "[object Error]" || e instanceof Error;
  }
  n(nx, "isError");
  xe.isError = nx;
  function sx(e) {
    return typeof e == "function";
  }
  n(sx, "isFunction");
  xe.isFunction = sx;
  function ox(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || // ES6 symbol
    typeof e > "u";
  }
  n(ox, "isPrimitive");
  xe.isPrimitive = ox;
  xe.isBuffer = C("buffer").Buffer.isBuffer;
  function Hn(e) {
    return Object.prototype.toString.call(e);
  }
  n(Hn, "objectToString");
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/internal/streams/BufferList.js
var TD = b((tO, ta) => {
  "use strict";
  function ux(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  n(ux, "_classCallCheck");
  var RD = Nn().Buffer, Di = C("util");
  function ax(e, t, r) {
    e.copy(t, r);
  }
  n(ax, "copyBuffer");
  ta.exports = function() {
    function e() {
      ux(this, e), this.head = null, this.tail = null, this.length = 0;
    }
    return n(e, "BufferList"), e.prototype.push = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: null };
      this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
    }, "push"), e.prototype.unshift = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: this.head };
      this.length === 0 && (this.tail = i), this.head = i, ++this.length;
    }, "unshift"), e.prototype.shift = /* @__PURE__ */ n(function() {
      if (this.length !== 0) {
        var r = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
      }
    }, "shift"), e.prototype.clear = /* @__PURE__ */ n(function() {
      this.head = this.tail = null, this.length = 0;
    }, "clear"), e.prototype.join = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return "";
      for (var i = this.head, s = "" + i.data; i = i.next; )
        s += r + i.data;
      return s;
    }, "join"), e.prototype.concat = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return RD.alloc(0);
      for (var i = RD.allocUnsafe(r >>> 0), s = this.head, o = 0; s; )
        ax(s.data, i, o), o += s.data.length, s = s.next;
      return i;
    }, "concat"), e;
  }();
  Di && Di.inspect && Di.inspect.custom && (ta.exports.prototype[Di.inspect.custom] = function() {
    var e = Di.inspect({ length: this.length });
    return this.constructor.name + " " + e;
  });
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/internal/streams/destroy.js
var ra = b((iO, BD) => {
  "use strict";
  var Un = ke();
  function lx(e, t) {
    var r = this, i = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
    return i || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, Un.nextTick(
    Wn, this, e)) : Un.nextTick(Wn, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this.
    _writableState.destroyed = !0), this._destroy(e || null, function(o) {
      !t && o ? r._writableState ? r._writableState.errorEmitted || (r._writableState.errorEmitted = !0, Un.nextTick(Wn, r, o)) : Un.nextTick(
      Wn, r, o) : t && t(o);
    }), this);
  }
  n(lx, "destroy");
  function fx() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.
    endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending =
    !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted =
    !1);
  }
  n(fx, "undestroy");
  function Wn(e, t) {
    e.emit("error", t);
  }
  n(Wn, "emitErrorNT");
  BD.exports = {
    destroy: lx,
    undestroy: fx
  };
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/_stream_writable.js
var na = b((sO, LD) => {
  "use strict";
  var Wt = ke();
  LD.exports = de;
  function OD(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function() {
      Ax(t, e);
    };
  }
  n(OD, "CorkedRequest");
  var hx = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : Wt.nextTick, br;
  de.WritableState = gi;
  var PD = Object.create(Se());
  PD.inherits = X();
  var cx = {
    deprecate: ei()
  }, qD = Zu(), zn = Nn().Buffer, dx = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
  function() {
  };
  function px(e) {
    return zn.from(e);
  }
  n(px, "_uint8ArrayToBuffer");
  function Dx(e) {
    return zn.isBuffer(e) || e instanceof dx;
  }
  n(Dx, "_isUint8Array");
  var MD = ra();
  PD.inherits(de, qD);
  function mx() {
  }
  n(mx, "nop");
  function gi(e, t) {
    br = br || $t(), e = e || {};
    var r = t instanceof br;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
    var i = e.highWaterMark, s = e.writableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed =
    !1;
    var u = e.decodeStrings === !1;
    this.decodeStrings = !u, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync =
    !0, this.bufferProcessing = !1, this.onwrite = function(a) {
      Ex(t, a);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished =
    !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new OD(this);
  }
  n(gi, "WritableState");
  gi.prototype.getBuffer = /* @__PURE__ */ n(function() {
    for (var t = this.bufferedRequest, r = []; t; )
      r.push(t), t = t.next;
    return r;
  }, "getBuffer");
  (function() {
    try {
      Object.defineProperty(gi.prototype, "buffer", {
        get: cx.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var $n;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? ($n = Function.prototype[Symbol.
  hasInstance], Object.defineProperty(de, Symbol.hasInstance, {
    value: /* @__PURE__ */ n(function(e) {
      return $n.call(this, e) ? !0 : this !== de ? !1 : e && e._writableState instanceof gi;
    }, "value")
  })) : $n = /* @__PURE__ */ n(function(e) {
    return e instanceof this;
  }, "realHasInstance");
  function de(e) {
    if (br = br || $t(), !$n.call(de, this) && !(this instanceof br))
      return new de(e);
    this._writableState = new gi(e, this), this.writable = !0, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev ==
    "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this.
    _final = e.final)), qD.call(this);
  }
  n(de, "Writable");
  de.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function gx(e, t) {
    var r = new Error("write after end");
    e.emit("error", r), Wt.nextTick(t, r);
  }
  n(gx, "writeAfterEnd");
  function yx(e, t, r, i) {
    var s = !0, o = !1;
    return r === null ? o = new TypeError("May not write null values to stream") : typeof r != "string" && r !== void 0 && !t.objectMode && (o =
    new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), Wt.nextTick(i, o), s = !1), s;
  }
  n(yx, "validChunk");
  de.prototype.write = function(e, t, r) {
    var i = this._writableState, s = !1, o = !i.objectMode && Dx(e);
    return o && !zn.isBuffer(e) && (e = px(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding),
    typeof r != "function" && (r = mx), i.ended ? gx(this, r) : (o || yx(this, i, e, r)) && (i.pendingcb++, s = vx(this, i, o, e, t, r)), s;
  };
  de.prototype.cork = function() {
    var e = this._writableState;
    e.corked++;
  };
  de.prototype.uncork = function() {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && jD(this, e));
  };
  de.prototype.setDefaultEncoding = /* @__PURE__ */ n(function(t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "\
utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
    return this._writableState.defaultEncoding = t, this;
  }, "setDefaultEncoding");
  function bx(e, t, r) {
    return !e.objectMode && e.decodeStrings !== !1 && typeof t == "string" && (t = zn.from(t, r)), t;
  }
  n(bx, "decodeChunk");
  Object.defineProperty(de.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function vx(e, t, r, i, s, o) {
    if (!r) {
      var u = bx(t, i, s);
      i !== u && (r = !0, s = "buffer", i = u);
    }
    var a = t.objectMode ? 1 : i.length;
    t.length += a;
    var l = t.length < t.highWaterMark;
    if (l || (t.needDrain = !0), t.writing || t.corked) {
      var f = t.lastBufferedRequest;
      t.lastBufferedRequest = {
        chunk: i,
        encoding: s,
        isBuf: r,
        callback: o,
        next: null
      }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else
      ia(e, t, !1, a, i, s, o);
    return l;
  }
  n(vx, "writeOrBuffer");
  function ia(e, t, r, i, s, o, u) {
    t.writelen = i, t.writecb = u, t.writing = !0, t.sync = !0, r ? e._writev(s, t.onwrite) : e._write(s, o, t.onwrite), t.sync = !1;
  }
  n(ia, "doWrite");
  function wx(e, t, r, i, s) {
    --t.pendingcb, r ? (Wt.nextTick(s, i), Wt.nextTick(mi, e, t), e._writableState.errorEmitted = !0, e.emit("error", i)) : (s(i), e._writableState.
    errorEmitted = !0, e.emit("error", i), mi(e, t));
  }
  n(wx, "onwriteError");
  function _x(e) {
    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }
  n(_x, "onwriteStateUpdate");
  function Ex(e, t) {
    var r = e._writableState, i = r.sync, s = r.writecb;
    if (_x(r), t) wx(e, r, i, t, s);
    else {
      var o = ID(r);
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && jD(e, r), i ? hx(kD, e, r, o, s) : kD(e, r, o, s);
    }
  }
  n(Ex, "onwrite");
  function kD(e, t, r, i) {
    r || Cx(e, t), t.pendingcb--, i(), mi(e, t);
  }
  n(kD, "afterWrite");
  function Cx(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }
  n(Cx, "onwriteDrain");
  function jD(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;
    if (e._writev && r && r.next) {
      var i = t.bufferedRequestCount, s = new Array(i), o = t.corkedRequestsFree;
      o.entry = r;
      for (var u = 0, a = !0; r; )
        s[u] = r, r.isBuf || (a = !1), r = r.next, u += 1;
      s.allBuffers = a, ia(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree =
      o.next, o.next = null) : t.corkedRequestsFree = new OD(t), t.bufferedRequestCount = 0;
    } else {
      for (; r; ) {
        var l = r.chunk, f = r.encoding, p = r.callback, d = t.objectMode ? 1 : l.length;
        if (ia(e, t, !1, d, l, f, p), r = r.next, t.bufferedRequestCount--, t.writing)
          break;
      }
      r === null && (t.lastBufferedRequest = null);
    }
    t.bufferedRequest = r, t.bufferProcessing = !1;
  }
  n(jD, "clearBuffer");
  de.prototype._write = function(e, t, r) {
    r(new Error("_write() is not implemented"));
  };
  de.prototype._writev = null;
  de.prototype.end = function(e, t, r) {
    var i = this._writableState;
    typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t), i.corked &&
    (i.corked = 1, this.uncork()), i.ending || Sx(this, i, r);
  };
  function ID(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }
  n(ID, "needFinish");
  function Fx(e, t) {
    e._final(function(r) {
      t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), mi(e, t);
    });
  }
  n(Fx, "callFinal");
  function xx(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" ? (t.pendingcb++, t.finalCalled = !0, Wt.nextTick(Fx, e, t)) : (t.prefinished =
    !0, e.emit("prefinish")));
  }
  n(xx, "prefinish");
  function mi(e, t) {
    var r = ID(t);
    return r && (xx(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit("finish"))), r;
  }
  n(mi, "finishMaybe");
  function Sx(e, t, r) {
    t.ending = !0, mi(e, t), r && (t.finished ? Wt.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1;
  }
  n(Sx, "endWritable");
  function Ax(e, t, r) {
    var i = e.entry;
    for (e.entry = null; i; ) {
      var s = i.callback;
      t.pendingcb--, s(r), i = i.next;
    }
    t.corkedRequestsFree.next = e;
  }
  n(Ax, "onCorkedFinish");
  Object.defineProperty(de.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._writableState && (this._writableState.destroyed = e);
    }, "set")
  });
  de.prototype.destroy = MD.destroy;
  de.prototype._undestroy = MD.undestroy;
  de.prototype._destroy = function(e, t) {
    this.end(), t(e);
  };
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/_stream_duplex.js
var $t = b((uO, WD) => {
  "use strict";
  var ND = ke(), Rx = Object.keys || function(e) {
    var t = [];
    for (var r in e)
      t.push(r);
    return t;
  };
  WD.exports = ft;
  var HD = Object.create(Se());
  HD.inherits = X();
  var UD = ua(), oa = na();
  HD.inherits(ft, UD);
  for (sa = Rx(oa.prototype), Vn = 0; Vn < sa.length; Vn++)
    Gn = sa[Vn], ft.prototype[Gn] || (ft.prototype[Gn] = oa.prototype[Gn]);
  var sa, Gn, Vn;
  function ft(e) {
    if (!(this instanceof ft)) return new ft(e);
    UD.call(this, e), oa.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.
    allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", Tx);
  }
  n(ft, "Duplex");
  Object.defineProperty(ft.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function Tx() {
    this.allowHalfOpen || this._writableState.ended || ND.nextTick(Bx, this);
  }
  n(Tx, "onend");
  function Bx(e) {
    e.end();
  }
  n(Bx, "onEndNT");
  Object.defineProperty(ft.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed =
      e);
    }, "set")
  });
  ft.prototype._destroy = function(e, t) {
    this.push(null), this.end(), ND.nextTick(t, e);
  };
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/_stream_readable.js
var ua = b((fO, tm) => {
  "use strict";
  var wr = ke();
  tm.exports = ee;
  var kx = FD(), yi;
  ee.ReadableState = KD;
  var lO = C("events").EventEmitter, GD = /* @__PURE__ */ n(function(e, t) {
    return e.listeners(t).length;
  }, "EElistenerCount"), ca = Zu(), bi = Nn().Buffer, Ox = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ?
  self : {}).Uint8Array || function() {
  };
  function Px(e) {
    return bi.from(e);
  }
  n(Px, "_uint8ArrayToBuffer");
  function qx(e) {
    return bi.isBuffer(e) || e instanceof Ox;
  }
  n(qx, "_isUint8Array");
  var JD = Object.create(Se());
  JD.inherits = X();
  var aa = C("util"), z = void 0;
  aa && aa.debuglog ? z = aa.debuglog("stream") : z = /* @__PURE__ */ n(function() {
  }, "debug");
  var Mx = TD(), YD = ra(), vr;
  JD.inherits(ee, ca);
  var la = ["error", "close", "destroy", "pause", "resume"];
  function jx(e, t, r) {
    if (typeof e.prependListener == "function") return e.prependListener(t, r);
    !e._events || !e._events[t] ? e.on(t, r) : kx(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
  }
  n(jx, "prependListener");
  function KD(e, t) {
    yi = yi || $t(), e = e || {};
    var r = t instanceof yi;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var i = e.highWaterMark, s = e.readableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.buffer = new Mx(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended =
    !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening =
    !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore =
    !1, this.decoder = null, this.encoding = null, e.encoding && (vr || (vr = C("string_decoder/").StringDecoder), this.decoder = new vr(e.encoding),
    this.encoding = e.encoding);
  }
  n(KD, "ReadableState");
  function ee(e) {
    if (yi = yi || $t(), !(this instanceof ee)) return new ee(e);
    this._readableState = new KD(e, this), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy ==
    "function" && (this._destroy = e.destroy)), ca.call(this);
  }
  n(ee, "Readable");
  Object.defineProperty(ee.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState && (this._readableState.destroyed = e);
    }, "set")
  });
  ee.prototype.destroy = YD.destroy;
  ee.prototype._undestroy = YD.undestroy;
  ee.prototype._destroy = function(e, t) {
    this.push(null), t(e);
  };
  ee.prototype.push = function(e, t) {
    var r = this._readableState, i;
    return r.objectMode ? i = !0 : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = bi.from(e, t), t = ""), i =
    !0), XD(this, e, t, !1, i);
  };
  ee.prototype.unshift = function(e) {
    return XD(this, e, null, !0, !1);
  };
  function XD(e, t, r, i, s) {
    var o = e._readableState;
    if (t === null)
      o.reading = !1, Hx(e, o);
    else {
      var u;
      s || (u = Ix(o, t)), u ? e.emit("error", u) : o.objectMode || t && t.length > 0 ? (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(
      t) !== bi.prototype && (t = Px(t)), i ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : fa(e, o, t, !0) :
      o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode ||
      t.length !== 0 ? fa(e, o, t, !1) : QD(e, o)) : fa(e, o, t, !1))) : i || (o.reading = !1);
    }
    return Lx(o);
  }
  n(XD, "readableAddChunk");
  function fa(e, t, r, i) {
    t.flowing && t.length === 0 && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(
    r) : t.buffer.push(r), t.needReadable && Jn(e)), QD(e, t);
  }
  n(fa, "addChunk");
  function Ix(e, t) {
    var r;
    return !qx(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r = new TypeError("Invalid non-string/buffer chunk")), r;
  }
  n(Ix, "chunkInvalid");
  function Lx(e) {
    return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
  }
  n(Lx, "needMoreData");
  ee.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  };
  ee.prototype.setEncoding = function(e) {
    return vr || (vr = C("string_decoder/").StringDecoder), this._readableState.decoder = new vr(e), this._readableState.encoding = e, this;
  };
  var $D = 8388608;
  function Nx(e) {
    return e >= $D ? e = $D : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  n(Nx, "computeNewHighWaterMark");
  function zD(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length :
    (e > t.highWaterMark && (t.highWaterMark = Nx(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }
  n(zD, "howMuchToRead");
  ee.prototype.read = function(e) {
    z("read", e), e = parseInt(e, 10);
    var t = this._readableState, r = e;
    if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended))
      return z("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? ha(this) : Jn(this), null;
    if (e = zD(e, t), e === 0 && t.ended)
      return t.length === 0 && ha(this), null;
    var i = t.needReadable;
    z("need readable", i), (t.length === 0 || t.length - e < t.highWaterMark) && (i = !0, z("length less than watermark", i)), t.ended || t.
    reading ? (i = !1, z("reading or ended", i)) : i && (z("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0),
    this._read(t.highWaterMark), t.sync = !1, t.reading || (e = zD(r, t)));
    var s;
    return e > 0 ? s = ZD(e, t) : s = null, s === null ? (t.needReadable = !0, e = 0) : t.length -= e, t.length === 0 && (t.ended || (t.needReadable =
    !0), r !== e && t.ended && ha(this)), s !== null && this.emit("data", s), s;
  };
  function Hx(e, t) {
    if (!t.ended) {
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }
      t.ended = !0, Jn(e);
    }
  }
  n(Hx, "onEofChunk");
  function Jn(e) {
    var t = e._readableState;
    t.needReadable = !1, t.emittedReadable || (z("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? wr.nextTick(VD, e) : VD(e));
  }
  n(Jn, "emitReadable");
  function VD(e) {
    z("emit readable"), e.emit("readable"), da(e);
  }
  n(VD, "emitReadable_");
  function QD(e, t) {
    t.readingMore || (t.readingMore = !0, wr.nextTick(Ux, e, t));
  }
  n(QD, "maybeReadMore");
  function Ux(e, t) {
    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (z("maybeReadMore read 0"), e.read(0), r !==
    t.length); )
      r = t.length;
    t.readingMore = !1;
  }
  n(Ux, "maybeReadMore_");
  ee.prototype._read = function(e) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  ee.prototype.pipe = function(e, t) {
    var r = this, i = this._readableState;
    switch (i.pipesCount) {
      case 0:
        i.pipes = e;
        break;
      case 1:
        i.pipes = [i.pipes, e];
        break;
      default:
        i.pipes.push(e);
        break;
    }
    i.pipesCount += 1, z("pipe count=%d opts=%j", i.pipesCount, t);
    var s = (!t || t.end !== !1) && e !== process.stdout && e !== process.stderr, o = s ? a : y;
    i.endEmitted ? wr.nextTick(o) : r.once("end", o), e.on("unpipe", u);
    function u(w, F) {
      z("onunpipe"), w === r && F && F.hasUnpiped === !1 && (F.hasUnpiped = !0, p());
    }
    n(u, "onunpipe");
    function a() {
      z("onend"), e.end();
    }
    n(a, "onend");
    var l = Wx(r);
    e.on("drain", l);
    var f = !1;
    function p() {
      z("cleanup"), e.removeListener("close", g), e.removeListener("finish", _), e.removeListener("drain", l), e.removeListener("error", h),
      e.removeListener("unpipe", u), r.removeListener("end", a), r.removeListener("end", y), r.removeListener("data", c), f = !0, i.awaitDrain &&
      (!e._writableState || e._writableState.needDrain) && l();
    }
    n(p, "cleanup");
    var d = !1;
    r.on("data", c);
    function c(w) {
      z("ondata"), d = !1;
      var F = e.write(w);
      F === !1 && !d && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && em(i.pipes, e) !== -1) && !f && (z("false write respons\
e, pause", i.awaitDrain), i.awaitDrain++, d = !0), r.pause());
    }
    n(c, "ondata");
    function h(w) {
      z("onerror", w), y(), e.removeListener("error", h), GD(e, "error") === 0 && e.emit("error", w);
    }
    n(h, "onerror"), jx(e, "error", h);
    function g() {
      e.removeListener("finish", _), y();
    }
    n(g, "onclose"), e.once("close", g);
    function _() {
      z("onfinish"), e.removeListener("close", g), y();
    }
    n(_, "onfinish"), e.once("finish", _);
    function y() {
      z("unpipe"), r.unpipe(e);
    }
    return n(y, "unpipe"), e.emit("pipe", r), i.flowing || (z("pipe resume"), r.resume()), e;
  };
  function Wx(e) {
    return function() {
      var t = e._readableState;
      z("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && GD(e, "data") && (t.flowing = !0, da(e));
    };
  }
  n(Wx, "pipeOnDrain");
  ee.prototype.unpipe = function(e) {
    var t = this._readableState, r = { hasUnpiped: !1 };
    if (t.pipesCount === 0) return this;
    if (t.pipesCount === 1)
      return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r),
      this);
    if (!e) {
      var i = t.pipes, s = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;
      for (var o = 0; o < s; o++)
        i[o].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var u = em(t.pipes, e);
    return u === -1 ? this : (t.pipes.splice(u, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r),
    this);
  };
  ee.prototype.on = function(e, t) {
    var r = ca.prototype.on.call(this, e, t);
    if (e === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (e === "readable") {
      var i = this._readableState;
      !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && Jn(
      this) : wr.nextTick($x, this));
    }
    return r;
  };
  ee.prototype.addListener = ee.prototype.on;
  function $x(e) {
    z("readable nexttick read 0"), e.read(0);
  }
  n($x, "nReadingNextTick");
  ee.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (z("resume"), e.flowing = !0, zx(this, e)), this;
  };
  function zx(e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, wr.nextTick(Vx, e, t));
  }
  n(zx, "resume");
  function Vx(e, t) {
    t.reading || (z("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), da(e), t.flowing && !t.reading &&
    e.read(0);
  }
  n(Vx, "resume_");
  ee.prototype.pause = function() {
    return z("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (z("pause"), this._readableState.flowing =
    !1, this.emit("pause")), this;
  };
  function da(e) {
    var t = e._readableState;
    for (z("flow", t.flowing); t.flowing && e.read() !== null; )
      ;
  }
  n(da, "flow");
  ee.prototype.wrap = function(e) {
    var t = this, r = this._readableState, i = !1;
    e.on("end", function() {
      if (z("wrapped end"), r.decoder && !r.ended) {
        var u = r.decoder.end();
        u && u.length && t.push(u);
      }
      t.push(null);
    }), e.on("data", function(u) {
      if (z("wrapped data"), r.decoder && (u = r.decoder.write(u)), !(r.objectMode && u == null) && !(!r.objectMode && (!u || !u.length))) {
        var a = t.push(u);
        a || (i = !0, e.pause());
      }
    });
    for (var s in e)
      this[s] === void 0 && typeof e[s] == "function" && (this[s] = /* @__PURE__ */ function(u) {
        return function() {
          return e[u].apply(e, arguments);
        };
      }(s));
    for (var o = 0; o < la.length; o++)
      e.on(la[o], this.emit.bind(this, la[o]));
    return this._read = function(u) {
      z("wrapped _read", u), i && (i = !1, e.resume());
    }, this;
  };
  Object.defineProperty(ee.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.highWaterMark;
    }, "get")
  });
  ee._fromList = ZD;
  function ZD(e, t) {
    if (t.length === 0) return null;
    var r;
    return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.
    head.data : r = t.buffer.concat(t.length), t.buffer.clear()) : r = Gx(e, t.buffer, t.decoder), r;
  }
  n(ZD, "fromList");
  function Gx(e, t, r) {
    var i;
    return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : e === t.head.data.length ? i = t.shift() :
    i = r ? Jx(e, t) : Yx(e, t), i;
  }
  n(Gx, "fromListPartial");
  function Jx(e, t) {
    var r = t.head, i = 1, s = r.data;
    for (e -= s.length; r = r.next; ) {
      var o = r.data, u = e > o.length ? o.length : e;
      if (u === o.length ? s += o : s += o.slice(0, e), e -= u, e === 0) {
        u === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(u));
        break;
      }
      ++i;
    }
    return t.length -= i, s;
  }
  n(Jx, "copyFromBufferString");
  function Yx(e, t) {
    var r = bi.allocUnsafe(e), i = t.head, s = 1;
    for (i.data.copy(r), e -= i.data.length; i = i.next; ) {
      var o = i.data, u = e > o.length ? o.length : e;
      if (o.copy(r, r.length - e, 0, u), e -= u, e === 0) {
        u === o.length ? (++s, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(u));
        break;
      }
      ++s;
    }
    return t.length -= s, r;
  }
  n(Yx, "copyFromBuffer");
  function ha(e) {
    var t = e._readableState;
    if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    t.endEmitted || (t.ended = !0, wr.nextTick(Kx, t, e));
  }
  n(ha, "endReadable");
  function Kx(e, t) {
    !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit("end"));
  }
  n(Kx, "endReadableNT");
  function em(e, t) {
    for (var r = 0, i = e.length; r < i; r++)
      if (e[r] === t) return r;
    return -1;
  }
  n(em, "indexOf");
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/_stream_transform.js
var pa = b((cO, nm) => {
  "use strict";
  nm.exports = ht;
  var Yn = $t(), im = Object.create(Se());
  im.inherits = X();
  im.inherits(ht, Yn);
  function Xx(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (!i)
      return this.emit("error", new Error("write callback called multiple times"));
    r.writechunk = null, r.writecb = null, t != null && this.push(t), i(e);
    var s = this._readableState;
    s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
  n(Xx, "afterTransform");
  function ht(e) {
    if (!(this instanceof ht)) return new ht(e);
    Yn.call(this, e), this._transformState = {
      afterTransform: Xx.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.
    transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Qx);
  }
  n(ht, "Transform");
  function Qx() {
    var e = this;
    typeof this._flush == "function" ? this._flush(function(t, r) {
      rm(e, t, r);
    }) : rm(this, null, null);
  }
  n(Qx, "prefinish");
  ht.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, Yn.prototype.push.call(this, e, t);
  };
  ht.prototype._transform = function(e, t, r) {
    throw new Error("_transform() is not implemented");
  };
  ht.prototype._write = function(e, t, r) {
    var i = this._transformState;
    if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
      var s = this._readableState;
      (i.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
    }
  };
  ht.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) :
    t.needTransform = !0;
  };
  ht.prototype._destroy = function(e, t) {
    var r = this;
    Yn.prototype._destroy.call(this, e, function(i) {
      t(i), r.emit("close");
    });
  };
  function rm(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }
  n(rm, "done");
});

// ../node_modules/peek-stream/node_modules/readable-stream/lib/_stream_passthrough.js
var am = b((pO, um) => {
  "use strict";
  um.exports = vi;
  var sm = pa(), om = Object.create(Se());
  om.inherits = X();
  om.inherits(vi, sm);
  function vi(e) {
    if (!(this instanceof vi)) return new vi(e);
    sm.call(this, e);
  }
  n(vi, "PassThrough");
  vi.prototype._transform = function(e, t, r) {
    r(null, e);
  };
});

// ../node_modules/peek-stream/node_modules/readable-stream/readable.js
var lm = b((ve, Kn) => {
  var Ke = C("stream");
  process.env.READABLE_STREAM === "disable" && Ke ? (Kn.exports = Ke, ve = Kn.exports = Ke.Readable, ve.Readable = Ke.Readable, ve.Writable =
  Ke.Writable, ve.Duplex = Ke.Duplex, ve.Transform = Ke.Transform, ve.PassThrough = Ke.PassThrough, ve.Stream = Ke) : (ve = Kn.exports = ua(),
  ve.Stream = Ke || ve, ve.Readable = ve, ve.Writable = na(), ve.Duplex = $t(), ve.Transform = pa(), ve.PassThrough = am());
});

// ../node_modules/stream-shift/index.js
var Da = b((mO, fm) => {
  fm.exports = Zx;
  function Zx(e) {
    var t = e._readableState;
    return t ? t.objectMode || typeof e._duplexState == "number" ? e.read() : e.read(e2(t)) : null;
  }
  n(Zx, "shift");
  function e2(e) {
    return e.buffer.length ? e.buffer.head ? e.buffer.head.data.length : e.buffer[0].length : e.length;
  }
  n(e2, "getStateLength");
});

// ../node_modules/peek-stream/node_modules/duplexify/index.js
var Dm = b((yO, pm) => {
  var Xn = lm(), hm = ur(), t2 = X(), r2 = Da(), cm = Buffer.from && Buffer.from !== Uint8Array.from ? Buffer.from([0]) : new Buffer([0]), ma = /* @__PURE__ */ n(
  function(e, t) {
    e._corked ? e.once("uncork", t) : t();
  }, "onuncork"), i2 = /* @__PURE__ */ n(function(e, t) {
    e._autoDestroy && e.destroy(t);
  }, "autoDestroy"), dm = /* @__PURE__ */ n(function(e, t) {
    return function(r) {
      r ? i2(e, r.message === "premature close" ? null : r) : t && !e._ended && e.end();
    };
  }, "destroyer"), n2 = /* @__PURE__ */ n(function(e, t) {
    if (!e || e._writableState && e._writableState.finished) return t();
    if (e._writableState) return e.end(t);
    e.end(), t();
  }, "end"), s2 = /* @__PURE__ */ n(function(e) {
    return new Xn.Readable({ objectMode: !0, highWaterMark: 16 }).wrap(e);
  }, "toStreams2"), we = /* @__PURE__ */ n(function(e, t, r) {
    if (!(this instanceof we)) return new we(e, t, r);
    Xn.Duplex.call(this, r), this._writable = null, this._readable = null, this._readable2 = null, this._autoDestroy = !r || r.autoDestroy !==
    !1, this._forwardDestroy = !r || r.destroy !== !1, this._forwardEnd = !r || r.end !== !1, this._corked = 1, this._ondrain = null, this._drained =
    !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, e && this.setWritable(e), t &&
    this.setReadable(t);
  }, "Duplexify");
  t2(we, Xn.Duplex);
  we.obj = function(e, t, r) {
    return r || (r = {}), r.objectMode = !0, r.highWaterMark = 16, new we(e, t, r);
  };
  we.prototype.cork = function() {
    ++this._corked === 1 && this.emit("cork");
  };
  we.prototype.uncork = function() {
    this._corked && --this._corked === 0 && this.emit("uncork");
  };
  we.prototype.setWritable = function(e) {
    if (this._unwrite && this._unwrite(), this.destroyed) {
      e && e.destroy && e.destroy();
      return;
    }
    if (e === null || e === !1) {
      this.end();
      return;
    }
    var t = this, r = hm(e, { writable: !0, readable: !1 }, dm(this, this._forwardEnd)), i = /* @__PURE__ */ n(function() {
      var o = t._ondrain;
      t._ondrain = null, o && o();
    }, "ondrain"), s = /* @__PURE__ */ n(function() {
      t._writable.removeListener("drain", i), r();
    }, "clear");
    this._unwrite && process.nextTick(i), this._writable = e, this._writable.on("drain", i), this._unwrite = s, this.uncork();
  };
  we.prototype.setReadable = function(e) {
    if (this._unread && this._unread(), this.destroyed) {
      e && e.destroy && e.destroy();
      return;
    }
    if (e === null || e === !1) {
      this.push(null), this.resume();
      return;
    }
    var t = this, r = hm(e, { writable: !1, readable: !0 }, dm(this)), i = /* @__PURE__ */ n(function() {
      t._forward();
    }, "onreadable"), s = /* @__PURE__ */ n(function() {
      t.push(null);
    }, "onend"), o = /* @__PURE__ */ n(function() {
      t._readable2.removeListener("readable", i), t._readable2.removeListener("end", s), r();
    }, "clear");
    this._drained = !0, this._readable = e, this._readable2 = e._readableState ? e : s2(e), this._readable2.on("readable", i), this._readable2.
    on("end", s), this._unread = o, this._forward();
  };
  we.prototype._read = function() {
    this._drained = !0, this._forward();
  };
  we.prototype._forward = function() {
    if (!(this._forwarding || !this._readable2 || !this._drained)) {
      this._forwarding = !0;
      for (var e; this._drained && (e = r2(this._readable2)) !== null; )
        this.destroyed || (this._drained = this.push(e));
      this._forwarding = !1;
    }
  };
  we.prototype.destroy = function(e) {
    if (!this.destroyed) {
      this.destroyed = !0;
      var t = this;
      process.nextTick(function() {
        t._destroy(e);
      });
    }
  };
  we.prototype._destroy = function(e) {
    if (e) {
      var t = this._ondrain;
      this._ondrain = null, t ? t(e) : this.emit("error", e);
    }
    this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy &&
    this._writable.destroy()), this.emit("close");
  };
  we.prototype._write = function(e, t, r) {
    if (this.destroyed) return r();
    if (this._corked) return ma(this, this._write.bind(this, e, t, r));
    if (e === cm) return this._finish(r);
    if (!this._writable) return r();
    this._writable.write(e) === !1 ? this._ondrain = r : r();
  };
  we.prototype._finish = function(e) {
    var t = this;
    this.emit("preend"), ma(this, function() {
      n2(t._forwardEnd && t._writable, function() {
        t._writableState.prefinished === !1 && (t._writableState.prefinished = !0), t.emit("prefinish"), ma(t, e);
      });
    });
  };
  we.prototype.end = function(e, t, r) {
    return typeof e == "function" ? this.end(null, null, e) : typeof t == "function" ? this.end(e, null, t) : (this._ended = !0, e && this.write(
    e), this._writableState.ending || this.write(cm), Xn.Writable.prototype.end.call(this, r));
  };
  pm.exports = we;
});

// ../node_modules/through2/node_modules/isarray/index.js
var gm = b((vO, mm) => {
  var o2 = {}.toString;
  mm.exports = Array.isArray || function(e) {
    return o2.call(e) == "[object Array]";
  };
});

// ../node_modules/through2/node_modules/readable-stream/lib/internal/streams/stream.js
var ga = b((wO, ym) => {
  ym.exports = C("stream");
});

// ../node_modules/through2/node_modules/safe-buffer/index.js
var Zn = b((ya, vm) => {
  var Qn = C("buffer"), ct = Qn.Buffer;
  function bm(e, t) {
    for (var r in e)
      t[r] = e[r];
  }
  n(bm, "copyProps");
  ct.from && ct.alloc && ct.allocUnsafe && ct.allocUnsafeSlow ? vm.exports = Qn : (bm(Qn, ya), ya.Buffer = _r);
  function _r(e, t, r) {
    return ct(e, t, r);
  }
  n(_r, "SafeBuffer");
  bm(ct, _r);
  _r.from = function(e, t, r) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return ct(e, t, r);
  };
  _r.alloc = function(e, t, r) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var i = ct(e);
    return t !== void 0 ? typeof r == "string" ? i.fill(t, r) : i.fill(t) : i.fill(0), i;
  };
  _r.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return ct(e);
  };
  _r.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return Qn.SlowBuffer(e);
  };
});

// ../node_modules/through2/node_modules/readable-stream/lib/internal/streams/BufferList.js
var _m = b((EO, ba) => {
  "use strict";
  function u2(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  n(u2, "_classCallCheck");
  var wm = Zn().Buffer, wi = C("util");
  function a2(e, t, r) {
    e.copy(t, r);
  }
  n(a2, "copyBuffer");
  ba.exports = function() {
    function e() {
      u2(this, e), this.head = null, this.tail = null, this.length = 0;
    }
    return n(e, "BufferList"), e.prototype.push = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: null };
      this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
    }, "push"), e.prototype.unshift = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: this.head };
      this.length === 0 && (this.tail = i), this.head = i, ++this.length;
    }, "unshift"), e.prototype.shift = /* @__PURE__ */ n(function() {
      if (this.length !== 0) {
        var r = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
      }
    }, "shift"), e.prototype.clear = /* @__PURE__ */ n(function() {
      this.head = this.tail = null, this.length = 0;
    }, "clear"), e.prototype.join = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return "";
      for (var i = this.head, s = "" + i.data; i = i.next; )
        s += r + i.data;
      return s;
    }, "join"), e.prototype.concat = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return wm.alloc(0);
      for (var i = wm.allocUnsafe(r >>> 0), s = this.head, o = 0; s; )
        a2(s.data, i, o), o += s.data.length, s = s.next;
      return i;
    }, "concat"), e;
  }();
  wi && wi.inspect && wi.inspect.custom && (ba.exports.prototype[wi.inspect.custom] = function() {
    var e = wi.inspect({ length: this.length });
    return this.constructor.name + " " + e;
  });
});

// ../node_modules/through2/node_modules/readable-stream/lib/internal/streams/destroy.js
var va = b((FO, Em) => {
  "use strict";
  var es = ke();
  function l2(e, t) {
    var r = this, i = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
    return i || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, es.nextTick(
    ts, this, e)) : es.nextTick(ts, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this.
    _writableState.destroyed = !0), this._destroy(e || null, function(o) {
      !t && o ? r._writableState ? r._writableState.errorEmitted || (r._writableState.errorEmitted = !0, es.nextTick(ts, r, o)) : es.nextTick(
      ts, r, o) : t && t(o);
    }), this);
  }
  n(l2, "destroy");
  function f2() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.
    endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending =
    !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted =
    !1);
  }
  n(f2, "undestroy");
  function ts(e, t) {
    e.emit("error", t);
  }
  n(ts, "emitErrorNT");
  Em.exports = {
    destroy: l2,
    undestroy: f2
  };
});

// ../node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js
var _a = b((SO, Bm) => {
  "use strict";
  var zt = ke();
  Bm.exports = pe;
  function Fm(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function() {
      A2(t, e);
    };
  }
  n(Fm, "CorkedRequest");
  var h2 = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : zt.nextTick, Er;
  pe.WritableState = Ei;
  var xm = Object.create(Se());
  xm.inherits = X();
  var c2 = {
    deprecate: ei()
  }, Sm = ga(), is = Zn().Buffer, d2 = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
  function() {
  };
  function p2(e) {
    return is.from(e);
  }
  n(p2, "_uint8ArrayToBuffer");
  function D2(e) {
    return is.isBuffer(e) || e instanceof d2;
  }
  n(D2, "_isUint8Array");
  var Am = va();
  xm.inherits(pe, Sm);
  function m2() {
  }
  n(m2, "nop");
  function Ei(e, t) {
    Er = Er || Vt(), e = e || {};
    var r = t instanceof Er;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
    var i = e.highWaterMark, s = e.writableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed =
    !1;
    var u = e.decodeStrings === !1;
    this.decodeStrings = !u, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync =
    !0, this.bufferProcessing = !1, this.onwrite = function(a) {
      E2(t, a);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished =
    !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Fm(this);
  }
  n(Ei, "WritableState");
  Ei.prototype.getBuffer = /* @__PURE__ */ n(function() {
    for (var t = this.bufferedRequest, r = []; t; )
      r.push(t), t = t.next;
    return r;
  }, "getBuffer");
  (function() {
    try {
      Object.defineProperty(Ei.prototype, "buffer", {
        get: c2.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var rs;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (rs = Function.prototype[Symbol.
  hasInstance], Object.defineProperty(pe, Symbol.hasInstance, {
    value: /* @__PURE__ */ n(function(e) {
      return rs.call(this, e) ? !0 : this !== pe ? !1 : e && e._writableState instanceof Ei;
    }, "value")
  })) : rs = /* @__PURE__ */ n(function(e) {
    return e instanceof this;
  }, "realHasInstance");
  function pe(e) {
    if (Er = Er || Vt(), !rs.call(pe, this) && !(this instanceof Er))
      return new pe(e);
    this._writableState = new Ei(e, this), this.writable = !0, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev ==
    "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this.
    _final = e.final)), Sm.call(this);
  }
  n(pe, "Writable");
  pe.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function g2(e, t) {
    var r = new Error("write after end");
    e.emit("error", r), zt.nextTick(t, r);
  }
  n(g2, "writeAfterEnd");
  function y2(e, t, r, i) {
    var s = !0, o = !1;
    return r === null ? o = new TypeError("May not write null values to stream") : typeof r != "string" && r !== void 0 && !t.objectMode && (o =
    new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), zt.nextTick(i, o), s = !1), s;
  }
  n(y2, "validChunk");
  pe.prototype.write = function(e, t, r) {
    var i = this._writableState, s = !1, o = !i.objectMode && D2(e);
    return o && !is.isBuffer(e) && (e = p2(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding),
    typeof r != "function" && (r = m2), i.ended ? g2(this, r) : (o || y2(this, i, e, r)) && (i.pendingcb++, s = v2(this, i, o, e, t, r)), s;
  };
  pe.prototype.cork = function() {
    var e = this._writableState;
    e.corked++;
  };
  pe.prototype.uncork = function() {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && Rm(this, e));
  };
  pe.prototype.setDefaultEncoding = /* @__PURE__ */ n(function(t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "\
utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
    return this._writableState.defaultEncoding = t, this;
  }, "setDefaultEncoding");
  function b2(e, t, r) {
    return !e.objectMode && e.decodeStrings !== !1 && typeof t == "string" && (t = is.from(t, r)), t;
  }
  n(b2, "decodeChunk");
  Object.defineProperty(pe.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function v2(e, t, r, i, s, o) {
    if (!r) {
      var u = b2(t, i, s);
      i !== u && (r = !0, s = "buffer", i = u);
    }
    var a = t.objectMode ? 1 : i.length;
    t.length += a;
    var l = t.length < t.highWaterMark;
    if (l || (t.needDrain = !0), t.writing || t.corked) {
      var f = t.lastBufferedRequest;
      t.lastBufferedRequest = {
        chunk: i,
        encoding: s,
        isBuf: r,
        callback: o,
        next: null
      }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else
      wa(e, t, !1, a, i, s, o);
    return l;
  }
  n(v2, "writeOrBuffer");
  function wa(e, t, r, i, s, o, u) {
    t.writelen = i, t.writecb = u, t.writing = !0, t.sync = !0, r ? e._writev(s, t.onwrite) : e._write(s, o, t.onwrite), t.sync = !1;
  }
  n(wa, "doWrite");
  function w2(e, t, r, i, s) {
    --t.pendingcb, r ? (zt.nextTick(s, i), zt.nextTick(_i, e, t), e._writableState.errorEmitted = !0, e.emit("error", i)) : (s(i), e._writableState.
    errorEmitted = !0, e.emit("error", i), _i(e, t));
  }
  n(w2, "onwriteError");
  function _2(e) {
    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }
  n(_2, "onwriteStateUpdate");
  function E2(e, t) {
    var r = e._writableState, i = r.sync, s = r.writecb;
    if (_2(r), t) w2(e, r, i, t, s);
    else {
      var o = Tm(r);
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && Rm(e, r), i ? h2(Cm, e, r, o, s) : Cm(e, r, o, s);
    }
  }
  n(E2, "onwrite");
  function Cm(e, t, r, i) {
    r || C2(e, t), t.pendingcb--, i(), _i(e, t);
  }
  n(Cm, "afterWrite");
  function C2(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }
  n(C2, "onwriteDrain");
  function Rm(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;
    if (e._writev && r && r.next) {
      var i = t.bufferedRequestCount, s = new Array(i), o = t.corkedRequestsFree;
      o.entry = r;
      for (var u = 0, a = !0; r; )
        s[u] = r, r.isBuf || (a = !1), r = r.next, u += 1;
      s.allBuffers = a, wa(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree =
      o.next, o.next = null) : t.corkedRequestsFree = new Fm(t), t.bufferedRequestCount = 0;
    } else {
      for (; r; ) {
        var l = r.chunk, f = r.encoding, p = r.callback, d = t.objectMode ? 1 : l.length;
        if (wa(e, t, !1, d, l, f, p), r = r.next, t.bufferedRequestCount--, t.writing)
          break;
      }
      r === null && (t.lastBufferedRequest = null);
    }
    t.bufferedRequest = r, t.bufferProcessing = !1;
  }
  n(Rm, "clearBuffer");
  pe.prototype._write = function(e, t, r) {
    r(new Error("_write() is not implemented"));
  };
  pe.prototype._writev = null;
  pe.prototype.end = function(e, t, r) {
    var i = this._writableState;
    typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t), i.corked &&
    (i.corked = 1, this.uncork()), i.ending || S2(this, i, r);
  };
  function Tm(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }
  n(Tm, "needFinish");
  function F2(e, t) {
    e._final(function(r) {
      t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), _i(e, t);
    });
  }
  n(F2, "callFinal");
  function x2(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" ? (t.pendingcb++, t.finalCalled = !0, zt.nextTick(F2, e, t)) : (t.prefinished =
    !0, e.emit("prefinish")));
  }
  n(x2, "prefinish");
  function _i(e, t) {
    var r = Tm(t);
    return r && (x2(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit("finish"))), r;
  }
  n(_i, "finishMaybe");
  function S2(e, t, r) {
    t.ending = !0, _i(e, t), r && (t.finished ? zt.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1;
  }
  n(S2, "endWritable");
  function A2(e, t, r) {
    var i = e.entry;
    for (e.entry = null; i; ) {
      var s = i.callback;
      t.pendingcb--, s(r), i = i.next;
    }
    t.corkedRequestsFree.next = e;
  }
  n(A2, "onCorkedFinish");
  Object.defineProperty(pe.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._writableState && (this._writableState.destroyed = e);
    }, "set")
  });
  pe.prototype.destroy = Am.destroy;
  pe.prototype._undestroy = Am.undestroy;
  pe.prototype._destroy = function(e, t) {
    this.end(), t(e);
  };
});

// ../node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js
var Vt = b((RO, qm) => {
  "use strict";
  var km = ke(), R2 = Object.keys || function(e) {
    var t = [];
    for (var r in e)
      t.push(r);
    return t;
  };
  qm.exports = dt;
  var Om = Object.create(Se());
  Om.inherits = X();
  var Pm = Fa(), Ca = _a();
  Om.inherits(dt, Pm);
  for (Ea = R2(Ca.prototype), ns = 0; ns < Ea.length; ns++)
    ss = Ea[ns], dt.prototype[ss] || (dt.prototype[ss] = Ca.prototype[ss]);
  var Ea, ss, ns;
  function dt(e) {
    if (!(this instanceof dt)) return new dt(e);
    Pm.call(this, e), Ca.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.
    allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", T2);
  }
  n(dt, "Duplex");
  Object.defineProperty(dt.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function T2() {
    this.allowHalfOpen || this._writableState.ended || km.nextTick(B2, this);
  }
  n(T2, "onend");
  function B2(e) {
    e.end();
  }
  n(B2, "onEndNT");
  Object.defineProperty(dt.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed =
      e);
    }, "set")
  });
  dt.prototype._destroy = function(e, t) {
    this.push(null), this.end(), km.nextTick(t, e);
  };
});

// ../node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js
var Fa = b((kO, Gm) => {
  "use strict";
  var Fr = ke();
  Gm.exports = te;
  var k2 = gm(), Ci;
  te.ReadableState = Um;
  var BO = C("events").EventEmitter, Lm = /* @__PURE__ */ n(function(e, t) {
    return e.listeners(t).length;
  }, "EElistenerCount"), Ta = ga(), Fi = Zn().Buffer, O2 = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ?
  self : {}).Uint8Array || function() {
  };
  function P2(e) {
    return Fi.from(e);
  }
  n(P2, "_uint8ArrayToBuffer");
  function q2(e) {
    return Fi.isBuffer(e) || e instanceof O2;
  }
  n(q2, "_isUint8Array");
  var Nm = Object.create(Se());
  Nm.inherits = X();
  var xa = C("util"), V = void 0;
  xa && xa.debuglog ? V = xa.debuglog("stream") : V = /* @__PURE__ */ n(function() {
  }, "debug");
  var M2 = _m(), Hm = va(), Cr;
  Nm.inherits(te, Ta);
  var Sa = ["error", "close", "destroy", "pause", "resume"];
  function j2(e, t, r) {
    if (typeof e.prependListener == "function") return e.prependListener(t, r);
    !e._events || !e._events[t] ? e.on(t, r) : k2(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
  }
  n(j2, "prependListener");
  function Um(e, t) {
    Ci = Ci || Vt(), e = e || {};
    var r = t instanceof Ci;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var i = e.highWaterMark, s = e.readableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.buffer = new M2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended =
    !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening =
    !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore =
    !1, this.decoder = null, this.encoding = null, e.encoding && (Cr || (Cr = C("string_decoder/").StringDecoder), this.decoder = new Cr(e.encoding),
    this.encoding = e.encoding);
  }
  n(Um, "ReadableState");
  function te(e) {
    if (Ci = Ci || Vt(), !(this instanceof te)) return new te(e);
    this._readableState = new Um(e, this), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy ==
    "function" && (this._destroy = e.destroy)), Ta.call(this);
  }
  n(te, "Readable");
  Object.defineProperty(te.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState && (this._readableState.destroyed = e);
    }, "set")
  });
  te.prototype.destroy = Hm.destroy;
  te.prototype._undestroy = Hm.undestroy;
  te.prototype._destroy = function(e, t) {
    this.push(null), t(e);
  };
  te.prototype.push = function(e, t) {
    var r = this._readableState, i;
    return r.objectMode ? i = !0 : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = Fi.from(e, t), t = ""), i =
    !0), Wm(this, e, t, !1, i);
  };
  te.prototype.unshift = function(e) {
    return Wm(this, e, null, !0, !1);
  };
  function Wm(e, t, r, i, s) {
    var o = e._readableState;
    if (t === null)
      o.reading = !1, H2(e, o);
    else {
      var u;
      s || (u = I2(o, t)), u ? e.emit("error", u) : o.objectMode || t && t.length > 0 ? (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(
      t) !== Fi.prototype && (t = P2(t)), i ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : Aa(e, o, t, !0) :
      o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode ||
      t.length !== 0 ? Aa(e, o, t, !1) : $m(e, o)) : Aa(e, o, t, !1))) : i || (o.reading = !1);
    }
    return L2(o);
  }
  n(Wm, "readableAddChunk");
  function Aa(e, t, r, i) {
    t.flowing && t.length === 0 && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(
    r) : t.buffer.push(r), t.needReadable && os(e)), $m(e, t);
  }
  n(Aa, "addChunk");
  function I2(e, t) {
    var r;
    return !q2(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r = new TypeError("Invalid non-string/buffer chunk")), r;
  }
  n(I2, "chunkInvalid");
  function L2(e) {
    return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
  }
  n(L2, "needMoreData");
  te.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  };
  te.prototype.setEncoding = function(e) {
    return Cr || (Cr = C("string_decoder/").StringDecoder), this._readableState.decoder = new Cr(e), this._readableState.encoding = e, this;
  };
  var Mm = 8388608;
  function N2(e) {
    return e >= Mm ? e = Mm : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  n(N2, "computeNewHighWaterMark");
  function jm(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length :
    (e > t.highWaterMark && (t.highWaterMark = N2(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }
  n(jm, "howMuchToRead");
  te.prototype.read = function(e) {
    V("read", e), e = parseInt(e, 10);
    var t = this._readableState, r = e;
    if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended))
      return V("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Ra(this) : os(this), null;
    if (e = jm(e, t), e === 0 && t.ended)
      return t.length === 0 && Ra(this), null;
    var i = t.needReadable;
    V("need readable", i), (t.length === 0 || t.length - e < t.highWaterMark) && (i = !0, V("length less than watermark", i)), t.ended || t.
    reading ? (i = !1, V("reading or ended", i)) : i && (V("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0),
    this._read(t.highWaterMark), t.sync = !1, t.reading || (e = jm(r, t)));
    var s;
    return e > 0 ? s = zm(e, t) : s = null, s === null ? (t.needReadable = !0, e = 0) : t.length -= e, t.length === 0 && (t.ended || (t.needReadable =
    !0), r !== e && t.ended && Ra(this)), s !== null && this.emit("data", s), s;
  };
  function H2(e, t) {
    if (!t.ended) {
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }
      t.ended = !0, os(e);
    }
  }
  n(H2, "onEofChunk");
  function os(e) {
    var t = e._readableState;
    t.needReadable = !1, t.emittedReadable || (V("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? Fr.nextTick(Im, e) : Im(e));
  }
  n(os, "emitReadable");
  function Im(e) {
    V("emit readable"), e.emit("readable"), Ba(e);
  }
  n(Im, "emitReadable_");
  function $m(e, t) {
    t.readingMore || (t.readingMore = !0, Fr.nextTick(U2, e, t));
  }
  n($m, "maybeReadMore");
  function U2(e, t) {
    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (V("maybeReadMore read 0"), e.read(0), r !==
    t.length); )
      r = t.length;
    t.readingMore = !1;
  }
  n(U2, "maybeReadMore_");
  te.prototype._read = function(e) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  te.prototype.pipe = function(e, t) {
    var r = this, i = this._readableState;
    switch (i.pipesCount) {
      case 0:
        i.pipes = e;
        break;
      case 1:
        i.pipes = [i.pipes, e];
        break;
      default:
        i.pipes.push(e);
        break;
    }
    i.pipesCount += 1, V("pipe count=%d opts=%j", i.pipesCount, t);
    var s = (!t || t.end !== !1) && e !== process.stdout && e !== process.stderr, o = s ? a : y;
    i.endEmitted ? Fr.nextTick(o) : r.once("end", o), e.on("unpipe", u);
    function u(w, F) {
      V("onunpipe"), w === r && F && F.hasUnpiped === !1 && (F.hasUnpiped = !0, p());
    }
    n(u, "onunpipe");
    function a() {
      V("onend"), e.end();
    }
    n(a, "onend");
    var l = W2(r);
    e.on("drain", l);
    var f = !1;
    function p() {
      V("cleanup"), e.removeListener("close", g), e.removeListener("finish", _), e.removeListener("drain", l), e.removeListener("error", h),
      e.removeListener("unpipe", u), r.removeListener("end", a), r.removeListener("end", y), r.removeListener("data", c), f = !0, i.awaitDrain &&
      (!e._writableState || e._writableState.needDrain) && l();
    }
    n(p, "cleanup");
    var d = !1;
    r.on("data", c);
    function c(w) {
      V("ondata"), d = !1;
      var F = e.write(w);
      F === !1 && !d && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && Vm(i.pipes, e) !== -1) && !f && (V("false write respons\
e, pause", i.awaitDrain), i.awaitDrain++, d = !0), r.pause());
    }
    n(c, "ondata");
    function h(w) {
      V("onerror", w), y(), e.removeListener("error", h), Lm(e, "error") === 0 && e.emit("error", w);
    }
    n(h, "onerror"), j2(e, "error", h);
    function g() {
      e.removeListener("finish", _), y();
    }
    n(g, "onclose"), e.once("close", g);
    function _() {
      V("onfinish"), e.removeListener("close", g), y();
    }
    n(_, "onfinish"), e.once("finish", _);
    function y() {
      V("unpipe"), r.unpipe(e);
    }
    return n(y, "unpipe"), e.emit("pipe", r), i.flowing || (V("pipe resume"), r.resume()), e;
  };
  function W2(e) {
    return function() {
      var t = e._readableState;
      V("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && Lm(e, "data") && (t.flowing = !0, Ba(e));
    };
  }
  n(W2, "pipeOnDrain");
  te.prototype.unpipe = function(e) {
    var t = this._readableState, r = { hasUnpiped: !1 };
    if (t.pipesCount === 0) return this;
    if (t.pipesCount === 1)
      return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r),
      this);
    if (!e) {
      var i = t.pipes, s = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;
      for (var o = 0; o < s; o++)
        i[o].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var u = Vm(t.pipes, e);
    return u === -1 ? this : (t.pipes.splice(u, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r),
    this);
  };
  te.prototype.on = function(e, t) {
    var r = Ta.prototype.on.call(this, e, t);
    if (e === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (e === "readable") {
      var i = this._readableState;
      !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && os(
      this) : Fr.nextTick($2, this));
    }
    return r;
  };
  te.prototype.addListener = te.prototype.on;
  function $2(e) {
    V("readable nexttick read 0"), e.read(0);
  }
  n($2, "nReadingNextTick");
  te.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (V("resume"), e.flowing = !0, z2(this, e)), this;
  };
  function z2(e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, Fr.nextTick(V2, e, t));
  }
  n(z2, "resume");
  function V2(e, t) {
    t.reading || (V("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), Ba(e), t.flowing && !t.reading &&
    e.read(0);
  }
  n(V2, "resume_");
  te.prototype.pause = function() {
    return V("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (V("pause"), this._readableState.flowing =
    !1, this.emit("pause")), this;
  };
  function Ba(e) {
    var t = e._readableState;
    for (V("flow", t.flowing); t.flowing && e.read() !== null; )
      ;
  }
  n(Ba, "flow");
  te.prototype.wrap = function(e) {
    var t = this, r = this._readableState, i = !1;
    e.on("end", function() {
      if (V("wrapped end"), r.decoder && !r.ended) {
        var u = r.decoder.end();
        u && u.length && t.push(u);
      }
      t.push(null);
    }), e.on("data", function(u) {
      if (V("wrapped data"), r.decoder && (u = r.decoder.write(u)), !(r.objectMode && u == null) && !(!r.objectMode && (!u || !u.length))) {
        var a = t.push(u);
        a || (i = !0, e.pause());
      }
    });
    for (var s in e)
      this[s] === void 0 && typeof e[s] == "function" && (this[s] = /* @__PURE__ */ function(u) {
        return function() {
          return e[u].apply(e, arguments);
        };
      }(s));
    for (var o = 0; o < Sa.length; o++)
      e.on(Sa[o], this.emit.bind(this, Sa[o]));
    return this._read = function(u) {
      V("wrapped _read", u), i && (i = !1, e.resume());
    }, this;
  };
  Object.defineProperty(te.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.highWaterMark;
    }, "get")
  });
  te._fromList = zm;
  function zm(e, t) {
    if (t.length === 0) return null;
    var r;
    return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.
    head.data : r = t.buffer.concat(t.length), t.buffer.clear()) : r = G2(e, t.buffer, t.decoder), r;
  }
  n(zm, "fromList");
  function G2(e, t, r) {
    var i;
    return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : e === t.head.data.length ? i = t.shift() :
    i = r ? J2(e, t) : Y2(e, t), i;
  }
  n(G2, "fromListPartial");
  function J2(e, t) {
    var r = t.head, i = 1, s = r.data;
    for (e -= s.length; r = r.next; ) {
      var o = r.data, u = e > o.length ? o.length : e;
      if (u === o.length ? s += o : s += o.slice(0, e), e -= u, e === 0) {
        u === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(u));
        break;
      }
      ++i;
    }
    return t.length -= i, s;
  }
  n(J2, "copyFromBufferString");
  function Y2(e, t) {
    var r = Fi.allocUnsafe(e), i = t.head, s = 1;
    for (i.data.copy(r), e -= i.data.length; i = i.next; ) {
      var o = i.data, u = e > o.length ? o.length : e;
      if (o.copy(r, r.length - e, 0, u), e -= u, e === 0) {
        u === o.length ? (++s, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(u));
        break;
      }
      ++s;
    }
    return t.length -= s, r;
  }
  n(Y2, "copyFromBuffer");
  function Ra(e) {
    var t = e._readableState;
    if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    t.endEmitted || (t.ended = !0, Fr.nextTick(K2, t, e));
  }
  n(Ra, "endReadable");
  function K2(e, t) {
    !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit("end"));
  }
  n(K2, "endReadableNT");
  function Vm(e, t) {
    for (var r = 0, i = e.length; r < i; r++)
      if (e[r] === t) return r;
    return -1;
  }
  n(Vm, "indexOf");
});

// ../node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js
var ka = b((PO, Km) => {
  "use strict";
  Km.exports = pt;
  var us = Vt(), Ym = Object.create(Se());
  Ym.inherits = X();
  Ym.inherits(pt, us);
  function X2(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (!i)
      return this.emit("error", new Error("write callback called multiple times"));
    r.writechunk = null, r.writecb = null, t != null && this.push(t), i(e);
    var s = this._readableState;
    s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
  n(X2, "afterTransform");
  function pt(e) {
    if (!(this instanceof pt)) return new pt(e);
    us.call(this, e), this._transformState = {
      afterTransform: X2.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.
    transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Q2);
  }
  n(pt, "Transform");
  function Q2() {
    var e = this;
    typeof this._flush == "function" ? this._flush(function(t, r) {
      Jm(e, t, r);
    }) : Jm(this, null, null);
  }
  n(Q2, "prefinish");
  pt.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, us.prototype.push.call(this, e, t);
  };
  pt.prototype._transform = function(e, t, r) {
    throw new Error("_transform() is not implemented");
  };
  pt.prototype._write = function(e, t, r) {
    var i = this._transformState;
    if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
      var s = this._readableState;
      (i.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
    }
  };
  pt.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) :
    t.needTransform = !0;
  };
  pt.prototype._destroy = function(e, t) {
    var r = this;
    us.prototype._destroy.call(this, e, function(i) {
      t(i), r.emit("close");
    });
  };
  function Jm(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }
  n(Jm, "done");
});

// ../node_modules/through2/node_modules/readable-stream/lib/_stream_passthrough.js
var eg = b((MO, Zm) => {
  "use strict";
  Zm.exports = xi;
  var Xm = ka(), Qm = Object.create(Se());
  Qm.inherits = X();
  Qm.inherits(xi, Xm);
  function xi(e) {
    if (!(this instanceof xi)) return new xi(e);
    Xm.call(this, e);
  }
  n(xi, "PassThrough");
  xi.prototype._transform = function(e, t, r) {
    r(null, e);
  };
});

// ../node_modules/through2/node_modules/readable-stream/readable.js
var tg = b((_e, as) => {
  var Xe = C("stream");
  process.env.READABLE_STREAM === "disable" && Xe ? (as.exports = Xe, _e = as.exports = Xe.Readable, _e.Readable = Xe.Readable, _e.Writable =
  Xe.Writable, _e.Duplex = Xe.Duplex, _e.Transform = Xe.Transform, _e.PassThrough = Xe.PassThrough, _e.Stream = Xe) : (_e = as.exports = Fa(),
  _e.Stream = Xe || _e, _e.Readable = _e, _e.Writable = _a(), _e.Duplex = Vt(), _e.Transform = ka(), _e.PassThrough = eg());
});

// ../node_modules/xtend/immutable.js
var ig = b((IO, rg) => {
  rg.exports = eS;
  var Z2 = Object.prototype.hasOwnProperty;
  function eS() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Z2.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }
  n(eS, "extend");
});

// ../node_modules/through2/through2.js
var Pa = b((NO, ls) => {
  var ng = tg().Transform, sg = C("util").inherits, og = ig();
  function xr(e) {
    ng.call(this, e), this._destroyed = !1;
  }
  n(xr, "DestroyableTransform");
  sg(xr, ng);
  xr.prototype.destroy = function(e) {
    if (!this._destroyed) {
      this._destroyed = !0;
      var t = this;
      process.nextTick(function() {
        e && t.emit("error", e), t.emit("close");
      });
    }
  };
  function tS(e, t, r) {
    r(null, e);
  }
  n(tS, "noop");
  function Oa(e) {
    return function(t, r, i) {
      return typeof t == "function" && (i = r, r = t, t = {}), typeof r != "function" && (r = tS), typeof i != "function" && (i = null), e(t,
      r, i);
    };
  }
  n(Oa, "through2");
  ls.exports = Oa(function(e, t, r) {
    var i = new xr(e);
    return i._transform = t, r && (i._flush = r), i;
  });
  ls.exports.ctor = Oa(function(e, t, r) {
    function i(s) {
      if (!(this instanceof i))
        return new i(s);
      this.options = og(e, s), xr.call(this, this.options);
    }
    return n(i, "Through2"), sg(i, xr), i.prototype._transform = t, r && (i.prototype._flush = r), i;
  });
  ls.exports.obj = Oa(function(e, t, r) {
    var i = new xr(og({ objectMode: !0, highWaterMark: 16 }, e));
    return i._transform = t, r && (i._flush = r), i;
  });
});

// ../node_modules/buffer-from/index.js
var ag = b((UO, ug) => {
  var rS = Object.prototype.toString, qa = typeof Buffer < "u" && typeof Buffer.alloc == "function" && typeof Buffer.allocUnsafe == "functio\
n" && typeof Buffer.from == "function";
  function iS(e) {
    return rS.call(e).slice(8, -1) === "ArrayBuffer";
  }
  n(iS, "isArrayBuffer");
  function nS(e, t, r) {
    t >>>= 0;
    var i = e.byteLength - t;
    if (i < 0)
      throw new RangeError("'offset' is out of bounds");
    if (r === void 0)
      r = i;
    else if (r >>>= 0, r > i)
      throw new RangeError("'length' is out of bounds");
    return qa ? Buffer.from(e.slice(t, t + r)) : new Buffer(new Uint8Array(e.slice(t, t + r)));
  }
  n(nS, "fromArrayBuffer");
  function sS(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !Buffer.isEncoding(t))
      throw new TypeError('"encoding" must be a valid string encoding');
    return qa ? Buffer.from(e, t) : new Buffer(e, t);
  }
  n(sS, "fromString");
  function oS(e, t, r) {
    if (typeof e == "number")
      throw new TypeError('"value" argument must not be a number');
    return iS(e) ? nS(e, t, r) : typeof e == "string" ? sS(e, t) : qa ? Buffer.from(e) : new Buffer(e);
  }
  n(oS, "bufferFrom");
  ug.exports = oS;
});

// ../node_modules/peek-stream/index.js
var hg = b(($O, fg) => {
  var uS = Dm(), aS = Pa(), lS = ag(), fS = /* @__PURE__ */ n(function(e) {
    return !Buffer.isBuffer(e) && typeof e != "string";
  }, "isObject"), lg = /* @__PURE__ */ n(function(e, t) {
    if (typeof e == "number" && (e = { maxBuffer: e }), typeof e == "function") return lg(null, e);
    e || (e = {});
    var r = typeof e.maxBuffer == "number" ? e.maxBuffer : 65535, i = e.strict, s = e.newline !== !1, o = [], u = 0, a = uS.obj(), l = aS.obj(
    { highWaterMark: 1 }, function(d, c, h) {
      if (fS(d)) return p(d, null, h);
      if (Buffer.isBuffer(d) || (d = lS(d)), s) {
        var g = Array.prototype.indexOf.call(d, 10);
        if (g > 0 && d[g - 1] === 13 && g--, g > -1)
          return o.push(d.slice(0, g)), p(Buffer.concat(o), d.slice(g), h);
      }
      if (o.push(d), u += d.length, u < r) return h();
      if (i) return h(new Error("No newline found"));
      p(Buffer.concat(o), null, h);
    }), f = /* @__PURE__ */ n(function() {
      if (i) return a.destroy(new Error("No newline found"));
      a.cork(), p(Buffer.concat(o), null, function(d) {
        if (d) return a.destroy(d);
        a.uncork();
      });
    }, "onpreend"), p = /* @__PURE__ */ n(function(d, c, h) {
      a.removeListener("preend", f), t(d, function(g, _) {
        if (g) return h(g);
        a.setWritable(_), a.setReadable(_), d && _.write(d), c && _.write(c), c = o = l = null, h();
      });
    }, "ready");
    return a.on("preend", f), a.setWritable(l), a;
  }, "peek");
  fg.exports = lg;
});

// ../node_modules/pumpify/node_modules/pump/index.js
var pg = b((VO, dg) => {
  var hS = Dn(), cS = ur(), Ma = C("fs"), Si = /* @__PURE__ */ n(function() {
  }, "noop"), dS = /^v?\.0/.test(process.version), fs = /* @__PURE__ */ n(function(e) {
    return typeof e == "function";
  }, "isFn"), pS = /* @__PURE__ */ n(function(e) {
    return !dS || !Ma ? !1 : (e instanceof (Ma.ReadStream || Si) || e instanceof (Ma.WriteStream || Si)) && fs(e.close);
  }, "isFS"), DS = /* @__PURE__ */ n(function(e) {
    return e.setHeader && fs(e.abort);
  }, "isRequest"), mS = /* @__PURE__ */ n(function(e, t, r, i) {
    i = hS(i);
    var s = !1;
    e.on("close", function() {
      s = !0;
    }), cS(e, { readable: t, writable: r }, function(u) {
      if (u) return i(u);
      s = !0, i();
    });
    var o = !1;
    return function(u) {
      if (!s && !o) {
        if (o = !0, pS(e)) return e.close(Si);
        if (DS(e)) return e.abort();
        if (fs(e.destroy)) return e.destroy();
        i(u || new Error("stream was destroyed"));
      }
    };
  }, "destroyer"), cg = /* @__PURE__ */ n(function(e) {
    e();
  }, "call"), gS = /* @__PURE__ */ n(function(e, t) {
    return e.pipe(t);
  }, "pipe"), yS = /* @__PURE__ */ n(function() {
    var e = Array.prototype.slice.call(arguments), t = fs(e[e.length - 1] || Si) && e.pop() || Si;
    if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Error("pump requires two streams per minimum");
    var r, i = e.map(function(s, o) {
      var u = o < e.length - 1, a = o > 0;
      return mS(s, u, a, function(l) {
        r || (r = l), l && i.forEach(cg), !u && (i.forEach(cg), t(r));
      });
    });
    e.reduce(gS);
  }, "pump");
  dg.exports = yS;
});

// ../node_modules/pumpify/node_modules/isarray/index.js
var mg = b((JO, Dg) => {
  var bS = {}.toString;
  Dg.exports = Array.isArray || function(e) {
    return bS.call(e) == "[object Array]";
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/internal/streams/stream.js
var ja = b((YO, gg) => {
  gg.exports = C("stream");
});

// ../node_modules/pumpify/node_modules/safe-buffer/index.js
var cs = b((Ia, bg) => {
  var hs = C("buffer"), Dt = hs.Buffer;
  function yg(e, t) {
    for (var r in e)
      t[r] = e[r];
  }
  n(yg, "copyProps");
  Dt.from && Dt.alloc && Dt.allocUnsafe && Dt.allocUnsafeSlow ? bg.exports = hs : (yg(hs, Ia), Ia.Buffer = Sr);
  function Sr(e, t, r) {
    return Dt(e, t, r);
  }
  n(Sr, "SafeBuffer");
  yg(Dt, Sr);
  Sr.from = function(e, t, r) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return Dt(e, t, r);
  };
  Sr.alloc = function(e, t, r) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var i = Dt(e);
    return t !== void 0 ? typeof r == "string" ? i.fill(t, r) : i.fill(t) : i.fill(0), i;
  };
  Sr.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return Dt(e);
  };
  Sr.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return hs.SlowBuffer(e);
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/internal/streams/BufferList.js
var wg = b((XO, La) => {
  "use strict";
  function vS(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  n(vS, "_classCallCheck");
  var vg = cs().Buffer, Ai = C("util");
  function wS(e, t, r) {
    e.copy(t, r);
  }
  n(wS, "copyBuffer");
  La.exports = function() {
    function e() {
      vS(this, e), this.head = null, this.tail = null, this.length = 0;
    }
    return n(e, "BufferList"), e.prototype.push = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: null };
      this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
    }, "push"), e.prototype.unshift = /* @__PURE__ */ n(function(r) {
      var i = { data: r, next: this.head };
      this.length === 0 && (this.tail = i), this.head = i, ++this.length;
    }, "unshift"), e.prototype.shift = /* @__PURE__ */ n(function() {
      if (this.length !== 0) {
        var r = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
      }
    }, "shift"), e.prototype.clear = /* @__PURE__ */ n(function() {
      this.head = this.tail = null, this.length = 0;
    }, "clear"), e.prototype.join = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return "";
      for (var i = this.head, s = "" + i.data; i = i.next; )
        s += r + i.data;
      return s;
    }, "join"), e.prototype.concat = /* @__PURE__ */ n(function(r) {
      if (this.length === 0) return vg.alloc(0);
      for (var i = vg.allocUnsafe(r >>> 0), s = this.head, o = 0; s; )
        wS(s.data, i, o), o += s.data.length, s = s.next;
      return i;
    }, "concat"), e;
  }();
  Ai && Ai.inspect && Ai.inspect.custom && (La.exports.prototype[Ai.inspect.custom] = function() {
    var e = Ai.inspect({ length: this.length });
    return this.constructor.name + " " + e;
  });
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/internal/streams/destroy.js
var Na = b((ZO, _g) => {
  "use strict";
  var ds = ke();
  function _S(e, t) {
    var r = this, i = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
    return i || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, ds.nextTick(
    ps, this, e)) : ds.nextTick(ps, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this.
    _writableState.destroyed = !0), this._destroy(e || null, function(o) {
      !t && o ? r._writableState ? r._writableState.errorEmitted || (r._writableState.errorEmitted = !0, ds.nextTick(ps, r, o)) : ds.nextTick(
      ps, r, o) : t && t(o);
    }), this);
  }
  n(_S, "destroy");
  function ES() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.
    endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending =
    !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted =
    !1);
  }
  n(ES, "undestroy");
  function ps(e, t) {
    e.emit("error", t);
  }
  n(ps, "emitErrorNT");
  _g.exports = {
    destroy: _S,
    undestroy: ES
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/_stream_writable.js
var Ua = b((tP, Tg) => {
  "use strict";
  var Gt = ke();
  Tg.exports = De;
  function Cg(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function() {
      HS(t, e);
    };
  }
  n(Cg, "CorkedRequest");
  var CS = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : Gt.nextTick, Ar;
  De.WritableState = Ti;
  var Fg = Object.create(Se());
  Fg.inherits = X();
  var FS = {
    deprecate: ei()
  }, xg = ja(), ms = cs().Buffer, xS = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
  function() {
  };
  function SS(e) {
    return ms.from(e);
  }
  n(SS, "_uint8ArrayToBuffer");
  function AS(e) {
    return ms.isBuffer(e) || e instanceof xS;
  }
  n(AS, "_isUint8Array");
  var Sg = Na();
  Fg.inherits(De, xg);
  function RS() {
  }
  n(RS, "nop");
  function Ti(e, t) {
    Ar = Ar || Jt(), e = e || {};
    var r = t instanceof Ar;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
    var i = e.highWaterMark, s = e.writableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed =
    !1;
    var u = e.decodeStrings === !1;
    this.decodeStrings = !u, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync =
    !0, this.bufferProcessing = !1, this.onwrite = function(a) {
      MS(t, a);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished =
    !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Cg(this);
  }
  n(Ti, "WritableState");
  Ti.prototype.getBuffer = /* @__PURE__ */ n(function() {
    for (var t = this.bufferedRequest, r = []; t; )
      r.push(t), t = t.next;
    return r;
  }, "getBuffer");
  (function() {
    try {
      Object.defineProperty(Ti.prototype, "buffer", {
        get: FS.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var Ds;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Ds = Function.prototype[Symbol.
  hasInstance], Object.defineProperty(De, Symbol.hasInstance, {
    value: /* @__PURE__ */ n(function(e) {
      return Ds.call(this, e) ? !0 : this !== De ? !1 : e && e._writableState instanceof Ti;
    }, "value")
  })) : Ds = /* @__PURE__ */ n(function(e) {
    return e instanceof this;
  }, "realHasInstance");
  function De(e) {
    if (Ar = Ar || Jt(), !Ds.call(De, this) && !(this instanceof Ar))
      return new De(e);
    this._writableState = new Ti(e, this), this.writable = !0, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev ==
    "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this.
    _final = e.final)), xg.call(this);
  }
  n(De, "Writable");
  De.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function TS(e, t) {
    var r = new Error("write after end");
    e.emit("error", r), Gt.nextTick(t, r);
  }
  n(TS, "writeAfterEnd");
  function BS(e, t, r, i) {
    var s = !0, o = !1;
    return r === null ? o = new TypeError("May not write null values to stream") : typeof r != "string" && r !== void 0 && !t.objectMode && (o =
    new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), Gt.nextTick(i, o), s = !1), s;
  }
  n(BS, "validChunk");
  De.prototype.write = function(e, t, r) {
    var i = this._writableState, s = !1, o = !i.objectMode && AS(e);
    return o && !ms.isBuffer(e) && (e = SS(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding),
    typeof r != "function" && (r = RS), i.ended ? TS(this, r) : (o || BS(this, i, e, r)) && (i.pendingcb++, s = OS(this, i, o, e, t, r)), s;
  };
  De.prototype.cork = function() {
    var e = this._writableState;
    e.corked++;
  };
  De.prototype.uncork = function() {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && Ag(this, e));
  };
  De.prototype.setDefaultEncoding = /* @__PURE__ */ n(function(t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "\
utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
    return this._writableState.defaultEncoding = t, this;
  }, "setDefaultEncoding");
  function kS(e, t, r) {
    return !e.objectMode && e.decodeStrings !== !1 && typeof t == "string" && (t = ms.from(t, r)), t;
  }
  n(kS, "decodeChunk");
  Object.defineProperty(De.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function OS(e, t, r, i, s, o) {
    if (!r) {
      var u = kS(t, i, s);
      i !== u && (r = !0, s = "buffer", i = u);
    }
    var a = t.objectMode ? 1 : i.length;
    t.length += a;
    var l = t.length < t.highWaterMark;
    if (l || (t.needDrain = !0), t.writing || t.corked) {
      var f = t.lastBufferedRequest;
      t.lastBufferedRequest = {
        chunk: i,
        encoding: s,
        isBuf: r,
        callback: o,
        next: null
      }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else
      Ha(e, t, !1, a, i, s, o);
    return l;
  }
  n(OS, "writeOrBuffer");
  function Ha(e, t, r, i, s, o, u) {
    t.writelen = i, t.writecb = u, t.writing = !0, t.sync = !0, r ? e._writev(s, t.onwrite) : e._write(s, o, t.onwrite), t.sync = !1;
  }
  n(Ha, "doWrite");
  function PS(e, t, r, i, s) {
    --t.pendingcb, r ? (Gt.nextTick(s, i), Gt.nextTick(Ri, e, t), e._writableState.errorEmitted = !0, e.emit("error", i)) : (s(i), e._writableState.
    errorEmitted = !0, e.emit("error", i), Ri(e, t));
  }
  n(PS, "onwriteError");
  function qS(e) {
    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }
  n(qS, "onwriteStateUpdate");
  function MS(e, t) {
    var r = e._writableState, i = r.sync, s = r.writecb;
    if (qS(r), t) PS(e, r, i, t, s);
    else {
      var o = Rg(r);
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && Ag(e, r), i ? CS(Eg, e, r, o, s) : Eg(e, r, o, s);
    }
  }
  n(MS, "onwrite");
  function Eg(e, t, r, i) {
    r || jS(e, t), t.pendingcb--, i(), Ri(e, t);
  }
  n(Eg, "afterWrite");
  function jS(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }
  n(jS, "onwriteDrain");
  function Ag(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;
    if (e._writev && r && r.next) {
      var i = t.bufferedRequestCount, s = new Array(i), o = t.corkedRequestsFree;
      o.entry = r;
      for (var u = 0, a = !0; r; )
        s[u] = r, r.isBuf || (a = !1), r = r.next, u += 1;
      s.allBuffers = a, Ha(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree =
      o.next, o.next = null) : t.corkedRequestsFree = new Cg(t), t.bufferedRequestCount = 0;
    } else {
      for (; r; ) {
        var l = r.chunk, f = r.encoding, p = r.callback, d = t.objectMode ? 1 : l.length;
        if (Ha(e, t, !1, d, l, f, p), r = r.next, t.bufferedRequestCount--, t.writing)
          break;
      }
      r === null && (t.lastBufferedRequest = null);
    }
    t.bufferedRequest = r, t.bufferProcessing = !1;
  }
  n(Ag, "clearBuffer");
  De.prototype._write = function(e, t, r) {
    r(new Error("_write() is not implemented"));
  };
  De.prototype._writev = null;
  De.prototype.end = function(e, t, r) {
    var i = this._writableState;
    typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t), i.corked &&
    (i.corked = 1, this.uncork()), i.ending || NS(this, i, r);
  };
  function Rg(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }
  n(Rg, "needFinish");
  function IS(e, t) {
    e._final(function(r) {
      t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), Ri(e, t);
    });
  }
  n(IS, "callFinal");
  function LS(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" ? (t.pendingcb++, t.finalCalled = !0, Gt.nextTick(IS, e, t)) : (t.prefinished =
    !0, e.emit("prefinish")));
  }
  n(LS, "prefinish");
  function Ri(e, t) {
    var r = Rg(t);
    return r && (LS(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit("finish"))), r;
  }
  n(Ri, "finishMaybe");
  function NS(e, t, r) {
    t.ending = !0, Ri(e, t), r && (t.finished ? Gt.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1;
  }
  n(NS, "endWritable");
  function HS(e, t, r) {
    var i = e.entry;
    for (e.entry = null; i; ) {
      var s = i.callback;
      t.pendingcb--, s(r), i = i.next;
    }
    t.corkedRequestsFree.next = e;
  }
  n(HS, "onCorkedFinish");
  Object.defineProperty(De.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._writableState && (this._writableState.destroyed = e);
    }, "set")
  });
  De.prototype.destroy = Sg.destroy;
  De.prototype._undestroy = Sg.undestroy;
  De.prototype._destroy = function(e, t) {
    this.end(), t(e);
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/_stream_duplex.js
var Jt = b((iP, Pg) => {
  "use strict";
  var Bg = ke(), US = Object.keys || function(e) {
    var t = [];
    for (var r in e)
      t.push(r);
    return t;
  };
  Pg.exports = mt;
  var kg = Object.create(Se());
  kg.inherits = X();
  var Og = za(), $a = Ua();
  kg.inherits(mt, Og);
  for (Wa = US($a.prototype), gs = 0; gs < Wa.length; gs++)
    ys = Wa[gs], mt.prototype[ys] || (mt.prototype[ys] = $a.prototype[ys]);
  var Wa, ys, gs;
  function mt(e) {
    if (!(this instanceof mt)) return new mt(e);
    Og.call(this, e), $a.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.
    allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", WS);
  }
  n(mt, "Duplex");
  Object.defineProperty(mt.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._writableState.highWaterMark;
    }, "get")
  });
  function WS() {
    this.allowHalfOpen || this._writableState.ended || Bg.nextTick($S, this);
  }
  n(WS, "onend");
  function $S(e) {
    e.end();
  }
  n($S, "onEndNT");
  Object.defineProperty(mt.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed =
      e);
    }, "set")
  });
  mt.prototype._destroy = function(e, t) {
    this.push(null), this.end(), Bg.nextTick(t, e);
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/_stream_readable.js
var za = b((oP, Vg) => {
  "use strict";
  var Tr = ke();
  Vg.exports = re;
  var zS = mg(), Bi;
  re.ReadableState = Hg;
  var sP = C("events").EventEmitter, Ig = /* @__PURE__ */ n(function(e, t) {
    return e.listeners(t).length;
  }, "EElistenerCount"), Ka = ja(), ki = cs().Buffer, VS = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ?
  self : {}).Uint8Array || function() {
  };
  function GS(e) {
    return ki.from(e);
  }
  n(GS, "_uint8ArrayToBuffer");
  function JS(e) {
    return ki.isBuffer(e) || e instanceof VS;
  }
  n(JS, "_isUint8Array");
  var Lg = Object.create(Se());
  Lg.inherits = X();
  var Va = C("util"), G = void 0;
  Va && Va.debuglog ? G = Va.debuglog("stream") : G = /* @__PURE__ */ n(function() {
  }, "debug");
  var YS = wg(), Ng = Na(), Rr;
  Lg.inherits(re, Ka);
  var Ga = ["error", "close", "destroy", "pause", "resume"];
  function KS(e, t, r) {
    if (typeof e.prependListener == "function") return e.prependListener(t, r);
    !e._events || !e._events[t] ? e.on(t, r) : zS(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
  }
  n(KS, "prependListener");
  function Hg(e, t) {
    Bi = Bi || Jt(), e = e || {};
    var r = t instanceof Bi;
    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var i = e.highWaterMark, s = e.readableHighWaterMark, o = this.objectMode ? 16 : 16 * 1024;
    i || i === 0 ? this.highWaterMark = i : r && (s || s === 0) ? this.highWaterMark = s : this.highWaterMark = o, this.highWaterMark = Math.
    floor(this.highWaterMark), this.buffer = new YS(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended =
    !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening =
    !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore =
    !1, this.decoder = null, this.encoding = null, e.encoding && (Rr || (Rr = C("string_decoder/").StringDecoder), this.decoder = new Rr(e.encoding),
    this.encoding = e.encoding);
  }
  n(Hg, "ReadableState");
  function re(e) {
    if (Bi = Bi || Jt(), !(this instanceof re)) return new re(e);
    this._readableState = new Hg(e, this), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy ==
    "function" && (this._destroy = e.destroy)), Ka.call(this);
  }
  n(re, "Readable");
  Object.defineProperty(re.prototype, "destroyed", {
    get: /* @__PURE__ */ n(function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: /* @__PURE__ */ n(function(e) {
      this._readableState && (this._readableState.destroyed = e);
    }, "set")
  });
  re.prototype.destroy = Ng.destroy;
  re.prototype._undestroy = Ng.undestroy;
  re.prototype._destroy = function(e, t) {
    this.push(null), t(e);
  };
  re.prototype.push = function(e, t) {
    var r = this._readableState, i;
    return r.objectMode ? i = !0 : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = ki.from(e, t), t = ""), i =
    !0), Ug(this, e, t, !1, i);
  };
  re.prototype.unshift = function(e) {
    return Ug(this, e, null, !0, !1);
  };
  function Ug(e, t, r, i, s) {
    var o = e._readableState;
    if (t === null)
      o.reading = !1, e3(e, o);
    else {
      var u;
      s || (u = XS(o, t)), u ? e.emit("error", u) : o.objectMode || t && t.length > 0 ? (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(
      t) !== ki.prototype && (t = GS(t)), i ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : Ja(e, o, t, !0) :
      o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode ||
      t.length !== 0 ? Ja(e, o, t, !1) : Wg(e, o)) : Ja(e, o, t, !1))) : i || (o.reading = !1);
    }
    return QS(o);
  }
  n(Ug, "readableAddChunk");
  function Ja(e, t, r, i) {
    t.flowing && t.length === 0 && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(
    r) : t.buffer.push(r), t.needReadable && bs(e)), Wg(e, t);
  }
  n(Ja, "addChunk");
  function XS(e, t) {
    var r;
    return !JS(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r = new TypeError("Invalid non-string/buffer chunk")), r;
  }
  n(XS, "chunkInvalid");
  function QS(e) {
    return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
  }
  n(QS, "needMoreData");
  re.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  };
  re.prototype.setEncoding = function(e) {
    return Rr || (Rr = C("string_decoder/").StringDecoder), this._readableState.decoder = new Rr(e), this._readableState.encoding = e, this;
  };
  var qg = 8388608;
  function ZS(e) {
    return e >= qg ? e = qg : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  n(ZS, "computeNewHighWaterMark");
  function Mg(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length :
    (e > t.highWaterMark && (t.highWaterMark = ZS(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }
  n(Mg, "howMuchToRead");
  re.prototype.read = function(e) {
    G("read", e), e = parseInt(e, 10);
    var t = this._readableState, r = e;
    if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended))
      return G("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Ya(this) : bs(this), null;
    if (e = Mg(e, t), e === 0 && t.ended)
      return t.length === 0 && Ya(this), null;
    var i = t.needReadable;
    G("need readable", i), (t.length === 0 || t.length - e < t.highWaterMark) && (i = !0, G("length less than watermark", i)), t.ended || t.
    reading ? (i = !1, G("reading or ended", i)) : i && (G("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0),
    this._read(t.highWaterMark), t.sync = !1, t.reading || (e = Mg(r, t)));
    var s;
    return e > 0 ? s = $g(e, t) : s = null, s === null ? (t.needReadable = !0, e = 0) : t.length -= e, t.length === 0 && (t.ended || (t.needReadable =
    !0), r !== e && t.ended && Ya(this)), s !== null && this.emit("data", s), s;
  };
  function e3(e, t) {
    if (!t.ended) {
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }
      t.ended = !0, bs(e);
    }
  }
  n(e3, "onEofChunk");
  function bs(e) {
    var t = e._readableState;
    t.needReadable = !1, t.emittedReadable || (G("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? Tr.nextTick(jg, e) : jg(e));
  }
  n(bs, "emitReadable");
  function jg(e) {
    G("emit readable"), e.emit("readable"), Xa(e);
  }
  n(jg, "emitReadable_");
  function Wg(e, t) {
    t.readingMore || (t.readingMore = !0, Tr.nextTick(t3, e, t));
  }
  n(Wg, "maybeReadMore");
  function t3(e, t) {
    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (G("maybeReadMore read 0"), e.read(0), r !==
    t.length); )
      r = t.length;
    t.readingMore = !1;
  }
  n(t3, "maybeReadMore_");
  re.prototype._read = function(e) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  re.prototype.pipe = function(e, t) {
    var r = this, i = this._readableState;
    switch (i.pipesCount) {
      case 0:
        i.pipes = e;
        break;
      case 1:
        i.pipes = [i.pipes, e];
        break;
      default:
        i.pipes.push(e);
        break;
    }
    i.pipesCount += 1, G("pipe count=%d opts=%j", i.pipesCount, t);
    var s = (!t || t.end !== !1) && e !== process.stdout && e !== process.stderr, o = s ? a : y;
    i.endEmitted ? Tr.nextTick(o) : r.once("end", o), e.on("unpipe", u);
    function u(w, F) {
      G("onunpipe"), w === r && F && F.hasUnpiped === !1 && (F.hasUnpiped = !0, p());
    }
    n(u, "onunpipe");
    function a() {
      G("onend"), e.end();
    }
    n(a, "onend");
    var l = r3(r);
    e.on("drain", l);
    var f = !1;
    function p() {
      G("cleanup"), e.removeListener("close", g), e.removeListener("finish", _), e.removeListener("drain", l), e.removeListener("error", h),
      e.removeListener("unpipe", u), r.removeListener("end", a), r.removeListener("end", y), r.removeListener("data", c), f = !0, i.awaitDrain &&
      (!e._writableState || e._writableState.needDrain) && l();
    }
    n(p, "cleanup");
    var d = !1;
    r.on("data", c);
    function c(w) {
      G("ondata"), d = !1;
      var F = e.write(w);
      F === !1 && !d && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && zg(i.pipes, e) !== -1) && !f && (G("false write respons\
e, pause", i.awaitDrain), i.awaitDrain++, d = !0), r.pause());
    }
    n(c, "ondata");
    function h(w) {
      G("onerror", w), y(), e.removeListener("error", h), Ig(e, "error") === 0 && e.emit("error", w);
    }
    n(h, "onerror"), KS(e, "error", h);
    function g() {
      e.removeListener("finish", _), y();
    }
    n(g, "onclose"), e.once("close", g);
    function _() {
      G("onfinish"), e.removeListener("close", g), y();
    }
    n(_, "onfinish"), e.once("finish", _);
    function y() {
      G("unpipe"), r.unpipe(e);
    }
    return n(y, "unpipe"), e.emit("pipe", r), i.flowing || (G("pipe resume"), r.resume()), e;
  };
  function r3(e) {
    return function() {
      var t = e._readableState;
      G("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && Ig(e, "data") && (t.flowing = !0, Xa(e));
    };
  }
  n(r3, "pipeOnDrain");
  re.prototype.unpipe = function(e) {
    var t = this._readableState, r = { hasUnpiped: !1 };
    if (t.pipesCount === 0) return this;
    if (t.pipesCount === 1)
      return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r),
      this);
    if (!e) {
      var i = t.pipes, s = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;
      for (var o = 0; o < s; o++)
        i[o].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var u = zg(t.pipes, e);
    return u === -1 ? this : (t.pipes.splice(u, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r),
    this);
  };
  re.prototype.on = function(e, t) {
    var r = Ka.prototype.on.call(this, e, t);
    if (e === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (e === "readable") {
      var i = this._readableState;
      !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && bs(
      this) : Tr.nextTick(i3, this));
    }
    return r;
  };
  re.prototype.addListener = re.prototype.on;
  function i3(e) {
    G("readable nexttick read 0"), e.read(0);
  }
  n(i3, "nReadingNextTick");
  re.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (G("resume"), e.flowing = !0, n3(this, e)), this;
  };
  function n3(e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, Tr.nextTick(s3, e, t));
  }
  n(n3, "resume");
  function s3(e, t) {
    t.reading || (G("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), Xa(e), t.flowing && !t.reading &&
    e.read(0);
  }
  n(s3, "resume_");
  re.prototype.pause = function() {
    return G("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (G("pause"), this._readableState.flowing =
    !1, this.emit("pause")), this;
  };
  function Xa(e) {
    var t = e._readableState;
    for (G("flow", t.flowing); t.flowing && e.read() !== null; )
      ;
  }
  n(Xa, "flow");
  re.prototype.wrap = function(e) {
    var t = this, r = this._readableState, i = !1;
    e.on("end", function() {
      if (G("wrapped end"), r.decoder && !r.ended) {
        var u = r.decoder.end();
        u && u.length && t.push(u);
      }
      t.push(null);
    }), e.on("data", function(u) {
      if (G("wrapped data"), r.decoder && (u = r.decoder.write(u)), !(r.objectMode && u == null) && !(!r.objectMode && (!u || !u.length))) {
        var a = t.push(u);
        a || (i = !0, e.pause());
      }
    });
    for (var s in e)
      this[s] === void 0 && typeof e[s] == "function" && (this[s] = /* @__PURE__ */ function(u) {
        return function() {
          return e[u].apply(e, arguments);
        };
      }(s));
    for (var o = 0; o < Ga.length; o++)
      e.on(Ga[o], this.emit.bind(this, Ga[o]));
    return this._read = function(u) {
      G("wrapped _read", u), i && (i = !1, e.resume());
    }, this;
  };
  Object.defineProperty(re.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: /* @__PURE__ */ n(function() {
      return this._readableState.highWaterMark;
    }, "get")
  });
  re._fromList = $g;
  function $g(e, t) {
    if (t.length === 0) return null;
    var r;
    return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.
    head.data : r = t.buffer.concat(t.length), t.buffer.clear()) : r = o3(e, t.buffer, t.decoder), r;
  }
  n($g, "fromList");
  function o3(e, t, r) {
    var i;
    return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : e === t.head.data.length ? i = t.shift() :
    i = r ? u3(e, t) : a3(e, t), i;
  }
  n(o3, "fromListPartial");
  function u3(e, t) {
    var r = t.head, i = 1, s = r.data;
    for (e -= s.length; r = r.next; ) {
      var o = r.data, u = e > o.length ? o.length : e;
      if (u === o.length ? s += o : s += o.slice(0, e), e -= u, e === 0) {
        u === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(u));
        break;
      }
      ++i;
    }
    return t.length -= i, s;
  }
  n(u3, "copyFromBufferString");
  function a3(e, t) {
    var r = ki.allocUnsafe(e), i = t.head, s = 1;
    for (i.data.copy(r), e -= i.data.length; i = i.next; ) {
      var o = i.data, u = e > o.length ? o.length : e;
      if (o.copy(r, r.length - e, 0, u), e -= u, e === 0) {
        u === o.length ? (++s, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(u));
        break;
      }
      ++s;
    }
    return t.length -= s, r;
  }
  n(a3, "copyFromBuffer");
  function Ya(e) {
    var t = e._readableState;
    if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    t.endEmitted || (t.ended = !0, Tr.nextTick(l3, t, e));
  }
  n(Ya, "endReadable");
  function l3(e, t) {
    !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit("end"));
  }
  n(l3, "endReadableNT");
  function zg(e, t) {
    for (var r = 0, i = e.length; r < i; r++)
      if (e[r] === t) return r;
    return -1;
  }
  n(zg, "indexOf");
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/_stream_transform.js
var Qa = b((aP, Yg) => {
  "use strict";
  Yg.exports = gt;
  var vs = Jt(), Jg = Object.create(Se());
  Jg.inherits = X();
  Jg.inherits(gt, vs);
  function f3(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (!i)
      return this.emit("error", new Error("write callback called multiple times"));
    r.writechunk = null, r.writecb = null, t != null && this.push(t), i(e);
    var s = this._readableState;
    s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
  n(f3, "afterTransform");
  function gt(e) {
    if (!(this instanceof gt)) return new gt(e);
    vs.call(this, e), this._transformState = {
      afterTransform: f3.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.
    transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", h3);
  }
  n(gt, "Transform");
  function h3() {
    var e = this;
    typeof this._flush == "function" ? this._flush(function(t, r) {
      Gg(e, t, r);
    }) : Gg(this, null, null);
  }
  n(h3, "prefinish");
  gt.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, vs.prototype.push.call(this, e, t);
  };
  gt.prototype._transform = function(e, t, r) {
    throw new Error("_transform() is not implemented");
  };
  gt.prototype._write = function(e, t, r) {
    var i = this._transformState;
    if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
      var s = this._readableState;
      (i.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
    }
  };
  gt.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) :
    t.needTransform = !0;
  };
  gt.prototype._destroy = function(e, t) {
    var r = this;
    vs.prototype._destroy.call(this, e, function(i) {
      t(i), r.emit("close");
    });
  };
  function Gg(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }
  n(Gg, "done");
});

// ../node_modules/pumpify/node_modules/readable-stream/lib/_stream_passthrough.js
var Zg = b((fP, Qg) => {
  "use strict";
  Qg.exports = Oi;
  var Kg = Qa(), Xg = Object.create(Se());
  Xg.inherits = X();
  Xg.inherits(Oi, Kg);
  function Oi(e) {
    if (!(this instanceof Oi)) return new Oi(e);
    Kg.call(this, e);
  }
  n(Oi, "PassThrough");
  Oi.prototype._transform = function(e, t, r) {
    r(null, e);
  };
});

// ../node_modules/pumpify/node_modules/readable-stream/readable.js
var ey = b((Ee, ws) => {
  var Qe = C("stream");
  process.env.READABLE_STREAM === "disable" && Qe ? (ws.exports = Qe, Ee = ws.exports = Qe.Readable, Ee.Readable = Qe.Readable, Ee.Writable =
  Qe.Writable, Ee.Duplex = Qe.Duplex, Ee.Transform = Qe.Transform, Ee.PassThrough = Qe.PassThrough, Ee.Stream = Qe) : (Ee = ws.exports = za(),
  Ee.Stream = Qe || Ee, Ee.Readable = Ee, Ee.Writable = Ua(), Ee.Duplex = Jt(), Ee.Transform = Qa(), Ee.PassThrough = Zg());
});

// ../node_modules/pumpify/node_modules/duplexify/index.js
var sy = b((cP, ny) => {
  var _s = ey(), ty = ur(), c3 = X(), d3 = Da(), ry = Buffer.from && Buffer.from !== Uint8Array.from ? Buffer.from([0]) : new Buffer([0]), Za = /* @__PURE__ */ n(
  function(e, t) {
    e._corked ? e.once("uncork", t) : t();
  }, "onuncork"), p3 = /* @__PURE__ */ n(function(e, t) {
    e._autoDestroy && e.destroy(t);
  }, "autoDestroy"), iy = /* @__PURE__ */ n(function(e, t) {
    return function(r) {
      r ? p3(e, r.message === "premature close" ? null : r) : t && !e._ended && e.end();
    };
  }, "destroyer"), D3 = /* @__PURE__ */ n(function(e, t) {
    if (!e || e._writableState && e._writableState.finished) return t();
    if (e._writableState) return e.end(t);
    e.end(), t();
  }, "end"), m3 = /* @__PURE__ */ n(function(e) {
    return new _s.Readable({ objectMode: !0, highWaterMark: 16 }).wrap(e);
  }, "toStreams2"), Ce = /* @__PURE__ */ n(function(e, t, r) {
    if (!(this instanceof Ce)) return new Ce(e, t, r);
    _s.Duplex.call(this, r), this._writable = null, this._readable = null, this._readable2 = null, this._autoDestroy = !r || r.autoDestroy !==
    !1, this._forwardDestroy = !r || r.destroy !== !1, this._forwardEnd = !r || r.end !== !1, this._corked = 1, this._ondrain = null, this._drained =
    !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, e && this.setWritable(e), t &&
    this.setReadable(t);
  }, "Duplexify");
  c3(Ce, _s.Duplex);
  Ce.obj = function(e, t, r) {
    return r || (r = {}), r.objectMode = !0, r.highWaterMark = 16, new Ce(e, t, r);
  };
  Ce.prototype.cork = function() {
    ++this._corked === 1 && this.emit("cork");
  };
  Ce.prototype.uncork = function() {
    this._corked && --this._corked === 0 && this.emit("uncork");
  };
  Ce.prototype.setWritable = function(e) {
    if (this._unwrite && this._unwrite(), this.destroyed) {
      e && e.destroy && e.destroy();
      return;
    }
    if (e === null || e === !1) {
      this.end();
      return;
    }
    var t = this, r = ty(e, { writable: !0, readable: !1 }, iy(this, this._forwardEnd)), i = /* @__PURE__ */ n(function() {
      var o = t._ondrain;
      t._ondrain = null, o && o();
    }, "ondrain"), s = /* @__PURE__ */ n(function() {
      t._writable.removeListener("drain", i), r();
    }, "clear");
    this._unwrite && process.nextTick(i), this._writable = e, this._writable.on("drain", i), this._unwrite = s, this.uncork();
  };
  Ce.prototype.setReadable = function(e) {
    if (this._unread && this._unread(), this.destroyed) {
      e && e.destroy && e.destroy();
      return;
    }
    if (e === null || e === !1) {
      this.push(null), this.resume();
      return;
    }
    var t = this, r = ty(e, { writable: !1, readable: !0 }, iy(this)), i = /* @__PURE__ */ n(function() {
      t._forward();
    }, "onreadable"), s = /* @__PURE__ */ n(function() {
      t.push(null);
    }, "onend"), o = /* @__PURE__ */ n(function() {
      t._readable2.removeListener("readable", i), t._readable2.removeListener("end", s), r();
    }, "clear");
    this._drained = !0, this._readable = e, this._readable2 = e._readableState ? e : m3(e), this._readable2.on("readable", i), this._readable2.
    on("end", s), this._unread = o, this._forward();
  };
  Ce.prototype._read = function() {
    this._drained = !0, this._forward();
  };
  Ce.prototype._forward = function() {
    if (!(this._forwarding || !this._readable2 || !this._drained)) {
      this._forwarding = !0;
      for (var e; this._drained && (e = d3(this._readable2)) !== null; )
        this.destroyed || (this._drained = this.push(e));
      this._forwarding = !1;
    }
  };
  Ce.prototype.destroy = function(e) {
    if (!this.destroyed) {
      this.destroyed = !0;
      var t = this;
      process.nextTick(function() {
        t._destroy(e);
      });
    }
  };
  Ce.prototype._destroy = function(e) {
    if (e) {
      var t = this._ondrain;
      this._ondrain = null, t ? t(e) : this.emit("error", e);
    }
    this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy &&
    this._writable.destroy()), this.emit("close");
  };
  Ce.prototype._write = function(e, t, r) {
    if (this.destroyed) return r();
    if (this._corked) return Za(this, this._write.bind(this, e, t, r));
    if (e === ry) return this._finish(r);
    if (!this._writable) return r();
    this._writable.write(e) === !1 ? this._ondrain = r : r();
  };
  Ce.prototype._finish = function(e) {
    var t = this;
    this.emit("preend"), Za(this, function() {
      D3(t._forwardEnd && t._writable, function() {
        t._writableState.prefinished === !1 && (t._writableState.prefinished = !0), t.emit("prefinish"), Za(t, e);
      });
    });
  };
  Ce.prototype.end = function(e, t, r) {
    return typeof e == "function" ? this.end(null, null, e) : typeof t == "function" ? this.end(e, null, t) : (this._ended = !0, e && this.write(
    e), this._writableState.ending || this.write(ry), _s.Writable.prototype.end.call(this, r));
  };
  ny.exports = Ce;
});

// ../node_modules/pumpify/index.js
var ay = b((pP, Es) => {
  var g3 = pg(), y3 = X(), oy = sy(), uy = /* @__PURE__ */ n(function(e) {
    return e.length ? Array.isArray(e[0]) ? e[0] : Array.prototype.slice.call(e) : [];
  }, "toArray"), el = /* @__PURE__ */ n(function(e) {
    var t = /* @__PURE__ */ n(function() {
      var r = uy(arguments);
      if (!(this instanceof t)) return new t(r);
      oy.call(this, null, null, e), r.length && this.setPipeline(r);
    }, "Pumpify");
    return y3(t, oy), t.prototype.setPipeline = function() {
      var r = uy(arguments), i = this, s = !1, o = r[0], u = r[r.length - 1];
      u = u.readable ? u : null, o = o.writable ? o : null;
      var a = /* @__PURE__ */ n(function() {
        r[0].emit("error", new Error("stream was destroyed"));
      }, "onclose");
      if (this.on("close", a), this.on("prefinish", function() {
        s || i.cork();
      }), g3(r, function(l) {
        if (i.removeListener("close", a), l) return i.destroy(l.message === "premature close" ? null : l);
        s = !0, i._autoDestroy === !1 && (i._autoDestroy = !0), i.uncork();
      }), this.destroyed) return a();
      this.setWritable(o), this.setReadable(u);
    }, t;
  }, "define");
  Es.exports = el({ autoDestroy: !1, destroy: !1 });
  Es.exports.obj = el({ autoDestroy: !1, destroy: !1, objectMode: !0, highWaterMark: 16 });
  Es.exports.ctor = el;
});

// ../node_modules/is-gzip/index.js
var fy = b((mP, ly) => {
  "use strict";
  ly.exports = function(e) {
    return !e || e.length < 3 ? !1 : e[0] === 31 && e[1] === 139 && e[2] === 8;
  };
});

// ../node_modules/is-deflate/index.js
var cy = b((gP, hy) => {
  "use strict";
  hy.exports = function(e) {
    return !e || e.length < 2 ? !1 : e[0] === 120 && (e[1] === 1 || e[1] === 156 || e[1] === 218);
  };
});

// ../node_modules/gunzip-maybe/index.js
var my = b((yP, Dy) => {
  var dy = C("zlib"), b3 = hg(), v3 = Pa(), py = ay(), w3 = fy(), _3 = cy(), E3 = /* @__PURE__ */ n(function(e) {
    return w3(e) ? 1 : _3(e) ? 2 : 0;
  }, "isCompressed"), tl = /* @__PURE__ */ n(function(e) {
    return e === void 0 && (e = 3), b3({ newline: !1, maxBuffer: 10 }, function(t, r) {
      if (e < 0) return r(new Error("Maximum recursion reached"));
      switch (E3(t)) {
        case 1:
          r(null, py(dy.createGunzip(), tl(e - 1)));
          break;
        case 2:
          r(null, py(dy.createInflate(), tl(e - 1)));
          break;
        default:
          r(null, v3());
      }
    });
  }, "gunzip");
  Dy.exports = tl;
});

// ../node_modules/@ndelangen/get-tarball/dist/index.js
var hb = b((_P, fb) => {
  "use strict";
  var C3 = Object.create, Ps = Object.defineProperty, F3 = Object.getOwnPropertyDescriptor, Hy = Object.getOwnPropertyNames, x3 = Object.getPrototypeOf,
  S3 = Object.prototype.hasOwnProperty, W = /* @__PURE__ */ n((e, t) => /* @__PURE__ */ n(function() {
    return t || (0, e[Hy(e)[0]])((t = { exports: {} }).exports, t), t.exports;
  }, "__require"), "__commonJS"), A3 = /* @__PURE__ */ n((e, t) => {
    for (var r in t)
      Ps(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), Uy = /* @__PURE__ */ n((e, t, r, i) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let s of Hy(t))
        !S3.call(e, s) && s !== r && Ps(e, s, { get: /* @__PURE__ */ n(() => t[s], "get"), enumerable: !(i = F3(t, s)) || i.enumerable });
    return e;
  }, "__copyProps"), me = /* @__PURE__ */ n((e, t, r) => (r = e != null ? C3(x3(e)) : {}, Uy(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    t || !e || !e.__esModule ? Ps(r, "default", { value: e, enumerable: !0 }) : r,
    e
  )), "__toESM"), R3 = /* @__PURE__ */ n((e) => Uy(Ps({}, "__esModule", { value: !0 }), e), "__toCommonJS"), T3 = W({
    "node_modules/.pnpm/defer-to-connect@2.0.1/node_modules/defer-to-connect/dist/source/index.js"(e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function r(s) {
        return s.encrypted;
      }
      n(r, "isTLSSocket");
      var i = /* @__PURE__ */ n((s, o) => {
        let u;
        typeof o == "function" ? u = { connect: o } : u = o;
        let a = typeof u.connect == "function", l = typeof u.secureConnect == "function", f = typeof u.close == "function", p = /* @__PURE__ */ n(
        () => {
          a && u.connect(), r(s) && l && (s.authorized ? u.secureConnect() : s.authorizationError || s.once("secureConnect", u.secureConnect)),
          f && s.once("close", u.close);
        }, "onConnect");
        s.writable && !s.connecting ? p() : s.connecting ? s.once("connect", p) : s.destroyed && f && u.close(s._hadError);
      }, "deferToConnect2");
      e.default = i, t.exports = i, t.exports.default = i;
    }
  }), B3 = W({
    "node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js"(e, t) {
      "use strict";
      var { PassThrough: r } = C("stream");
      t.exports = (i) => {
        i = { ...i };
        let { array: s } = i, { encoding: o } = i, u = o === "buffer", a = !1;
        s ? a = !(o || u) : o = o || "utf8", u && (o = null);
        let l = new r({ objectMode: a });
        o && l.setEncoding(o);
        let f = 0, p = [];
        return l.on("data", (d) => {
          p.push(d), a ? f = p.length : f += d.length;
        }), l.getBufferedValue = () => s ? p : u ? Buffer.concat(p, f) : p.join(""), l.getBufferedLength = () => f, l;
      };
    }
  }), Wy = W({
    "node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js"(e, t) {
      "use strict";
      var { constants: r } = C("buffer"), i = C("stream"), { promisify: s } = C("util"), o = B3(), u = s(i.pipeline), a = class extends Error {
        static {
          n(this, "MaxBufferError");
        }
        constructor() {
          super("maxBuffer exceeded"), this.name = "MaxBufferError";
        }
      };
      async function l(f, p) {
        if (!f)
          throw new Error("Expected a stream");
        p = {
          maxBuffer: 1 / 0,
          ...p
        };
        let { maxBuffer: d } = p, c = o(p);
        return await new Promise((h, g) => {
          let _ = /* @__PURE__ */ n((y) => {
            y && c.getBufferedLength() <= r.MAX_LENGTH && (y.bufferedData = c.getBufferedValue()), g(y);
          }, "rejectPromise");
          (async () => {
            try {
              await u(f, c), h();
            } catch (y) {
              _(y);
            }
          })(), c.on("data", () => {
            c.getBufferedLength() > d && _(new a());
          });
        }), c.getBufferedValue();
      }
      n(l, "getStream2"), t.exports = l, t.exports.buffer = (f, p) => l(f, { ...p, encoding: "buffer" }), t.exports.array = (f, p) => l(f, {
      ...p, array: !0 }), t.exports.MaxBufferError = a;
    }
  }), k3 = W({
    "node_modules/.pnpm/http-cache-semantics@4.1.1/node_modules/http-cache-semantics/index.js"(e, t) {
      "use strict";
      var r = /* @__PURE__ */ new Set([
        200,
        203,
        204,
        206,
        300,
        301,
        308,
        404,
        405,
        410,
        414,
        501
      ]), i = /* @__PURE__ */ new Set([
        200,
        203,
        204,
        300,
        301,
        302,
        303,
        307,
        308,
        404,
        405,
        410,
        414,
        501
      ]), s = /* @__PURE__ */ new Set([
        500,
        502,
        503,
        504
      ]), o = {
        date: !0,
        // included, because we add Age update Date
        connection: !0,
        "keep-alive": !0,
        "proxy-authenticate": !0,
        "proxy-authorization": !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0
      }, u = {
        // Since the old body is reused, it doesn't make sense to change properties of the body
        "content-length": !0,
        "content-encoding": !0,
        "transfer-encoding": !0,
        "content-range": !0
      };
      function a(d) {
        let c = parseInt(d, 10);
        return isFinite(c) ? c : 0;
      }
      n(a, "toNumberOrZero");
      function l(d) {
        return d ? s.has(d.status) : !0;
      }
      n(l, "isErrorResponse");
      function f(d) {
        let c = {};
        if (!d)
          return c;
        let h = d.trim().split(/,/);
        for (let g of h) {
          let [_, y] = g.split(/=/, 2);
          c[_.trim()] = y === void 0 ? !0 : y.trim().replace(/^"|"$/g, "");
        }
        return c;
      }
      n(f, "parseCacheControl");
      function p(d) {
        let c = [];
        for (let h in d) {
          let g = d[h];
          c.push(g === !0 ? h : h + "=" + g);
        }
        if (c.length)
          return c.join(", ");
      }
      n(p, "formatCacheControl"), t.exports = class {
        static {
          n(this, "CachePolicy");
        }
        constructor(c, h, {
          shared: g,
          cacheHeuristic: _,
          immutableMinTimeToLive: y,
          ignoreCargoCult: w,
          _fromObject: F
        } = {}) {
          if (F) {
            this._fromObject(F);
            return;
          }
          if (!h || !h.headers)
            throw Error("Response headers missing");
          this._assertRequestHasHeaders(c), this._responseTime = this.now(), this._isShared = g !== !1, this._cacheHeuristic = _ !== void 0 ?
          _ : 0.1, this._immutableMinTtl = y !== void 0 ? y : 24 * 3600 * 1e3, this._status = "status" in h ? h.status : 200, this._resHeaders =
          h.headers, this._rescc = f(h.headers["cache-control"]), this._method = "method" in c ? c.method : "GET", this._url = c.url, this._host =
          c.headers.host, this._noAuthorization = !c.headers.authorization, this._reqHeaders = h.headers.vary ? c.headers : null, this._reqcc =
          f(c.headers["cache-control"]), w && "pre-check" in this._rescc && "post-check" in this._rescc && (delete this._rescc["pre-check"],
          delete this._rescc["post-check"], delete this._rescc["no-cache"], delete this._rescc["no-store"], delete this._rescc["must-revalid\
ate"], this._resHeaders = Object.assign({}, this._resHeaders, {
            "cache-control": p(this._rescc)
          }), delete this._resHeaders.expires, delete this._resHeaders.pragma), h.headers["cache-control"] == null && /no-cache/.test(h.headers.
          pragma) && (this._rescc["no-cache"] = !0);
        }
        now() {
          return Date.now();
        }
        storable() {
          return !!(!this._reqcc["no-store"] && // A cache MUST NOT store a response to any request, unless:
          // The request method is understood by the cache and defined as being cacheable, and
          (this._method === "GET" || this._method === "HEAD" || this._method === "POST" && this._hasExplicitExpiration()) && // the response status code is understood by the cache, and
          i.has(this._status) && // the "no-store" cache directive does not appear in request or response header fields, and
          !this._rescc["no-store"] && // the "private" response directive does not appear in the response, if the cache is shared, and
          (!this._isShared || !this._rescc.private) && // the Authorization header field does not appear in the request, if the cache is shared,
          (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && // the response either:
          // contains an Expires header field, or
          (this._resHeaders.expires || // contains a max-age response directive, or
          // contains a s-maxage response directive and the cache is shared, or
          // contains a public response directive.
          this._rescc["max-age"] || this._isShared && this._rescc["s-maxage"] || this._rescc.public || // has a status code that is defined as cacheable by default
          r.has(this._status)));
        }
        _hasExplicitExpiration() {
          return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires;
        }
        _assertRequestHasHeaders(c) {
          if (!c || !c.headers)
            throw Error("Request headers missing");
        }
        satisfiesWithoutRevalidation(c) {
          this._assertRequestHasHeaders(c);
          let h = f(c.headers["cache-control"]);
          return h["no-cache"] || /no-cache/.test(c.headers.pragma) || h["max-age"] && this.age() > h["max-age"] || h["min-fresh"] && this.timeToLive() <
          1e3 * h["min-fresh"] || this.stale() && !(h["max-stale"] && !this._rescc["must-revalidate"] && (h["max-stale"] === !0 || h["max-st\
ale"] > this.age() - this.maxAge())) ? !1 : this._requestMatches(c, !1);
        }
        _requestMatches(c, h) {
          return (!this._url || this._url === c.url) && this._host === c.headers.host && // the request method associated with the stored response allows it to be used for the presented request, and
          (!c.method || this._method === c.method || h && c.method === "HEAD") && // selecting header fields nominated by the stored response (if any) match those presented, and
          this._varyMatches(c);
        }
        _allowsStoringAuthenticated() {
          return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"];
        }
        _varyMatches(c) {
          if (!this._resHeaders.vary)
            return !0;
          if (this._resHeaders.vary === "*")
            return !1;
          let h = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
          for (let g of h)
            if (c.headers[g] !== this._reqHeaders[g])
              return !1;
          return !0;
        }
        _copyWithoutHopByHopHeaders(c) {
          let h = {};
          for (let g in c)
            o[g] || (h[g] = c[g]);
          if (c.connection) {
            let g = c.connection.trim().split(/\s*,\s*/);
            for (let _ of g)
              delete h[_];
          }
          if (h.warning) {
            let g = h.warning.split(/,/).filter((_) => !/^\s*1[0-9][0-9]/.test(_));
            g.length ? h.warning = g.join(",").trim() : delete h.warning;
          }
          return h;
        }
        responseHeaders() {
          let c = this._copyWithoutHopByHopHeaders(this._resHeaders), h = this.age();
          return h > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24 && (c.warning = (c.warning ? `${c.warning}, ` :
          "") + '113 - "rfc7234 5.5.4"'), c.age = `${Math.round(h)}`, c.date = new Date(this.now()).toUTCString(), c;
        }
        /**
         * Value of the Date response header or current time if Date was invalid
         * @return timestamp
         */
        date() {
          let c = Date.parse(this._resHeaders.date);
          return isFinite(c) ? c : this._responseTime;
        }
        /**
         * Value of the Age header, in seconds, updated for the current time.
         * May be fractional.
         *
         * @return Number
         */
        age() {
          let c = this._ageValue(), h = (this.now() - this._responseTime) / 1e3;
          return c + h;
        }
        _ageValue() {
          return a(this._resHeaders.age);
        }
        /**
         * Value of applicable max-age (or heuristic equivalent) in seconds. This counts since response's `Date`.
         *
         * For an up-to-date value, see `timeToLive()`.
         *
         * @return Number
         */
        maxAge() {
          if (!this.storable() || this._rescc["no-cache"] || this._isShared && this._resHeaders["set-cookie"] && !this._rescc.public && !this.
          _rescc.immutable || this._resHeaders.vary === "*")
            return 0;
          if (this._isShared) {
            if (this._rescc["proxy-revalidate"])
              return 0;
            if (this._rescc["s-maxage"])
              return a(this._rescc["s-maxage"]);
          }
          if (this._rescc["max-age"])
            return a(this._rescc["max-age"]);
          let c = this._rescc.immutable ? this._immutableMinTtl : 0, h = this.date();
          if (this._resHeaders.expires) {
            let g = Date.parse(this._resHeaders.expires);
            return Number.isNaN(g) || g < h ? 0 : Math.max(c, (g - h) / 1e3);
          }
          if (this._resHeaders["last-modified"]) {
            let g = Date.parse(this._resHeaders["last-modified"]);
            if (isFinite(g) && h > g)
              return Math.max(
                c,
                (h - g) / 1e3 * this._cacheHeuristic
              );
          }
          return c;
        }
        timeToLive() {
          let c = this.maxAge() - this.age(), h = c + a(this._rescc["stale-if-error"]), g = c + a(this._rescc["stale-while-revalidate"]);
          return Math.max(0, c, h, g) * 1e3;
        }
        stale() {
          return this.maxAge() <= this.age();
        }
        _useStaleIfError() {
          return this.maxAge() + a(this._rescc["stale-if-error"]) > this.age();
        }
        useStaleWhileRevalidate() {
          return this.maxAge() + a(this._rescc["stale-while-revalidate"]) > this.age();
        }
        static fromObject(c) {
          return new this(void 0, void 0, { _fromObject: c });
        }
        _fromObject(c) {
          if (this._responseTime)
            throw Error("Reinitialized");
          if (!c || c.v !== 1)
            throw Error("Invalid serialization");
          this._responseTime = c.t, this._isShared = c.sh, this._cacheHeuristic = c.ch, this._immutableMinTtl = c.imm !== void 0 ? c.imm : 24 *
          3600 * 1e3, this._status = c.st, this._resHeaders = c.resh, this._rescc = c.rescc, this._method = c.m, this._url = c.u, this._host =
          c.h, this._noAuthorization = c.a, this._reqHeaders = c.reqh, this._reqcc = c.reqcc;
        }
        toObject() {
          return {
            v: 1,
            t: this._responseTime,
            sh: this._isShared,
            ch: this._cacheHeuristic,
            imm: this._immutableMinTtl,
            st: this._status,
            resh: this._resHeaders,
            rescc: this._rescc,
            m: this._method,
            u: this._url,
            h: this._host,
            a: this._noAuthorization,
            reqh: this._reqHeaders,
            reqcc: this._reqcc
          };
        }
        /**
         * Headers for sending to the origin server to revalidate stale response.
         * Allows server to return 304 to allow reuse of the previous response.
         *
         * Hop by hop headers are always stripped.
         * Revalidation headers may be added or removed, depending on request.
         */
        revalidationHeaders(c) {
          this._assertRequestHasHeaders(c);
          let h = this._copyWithoutHopByHopHeaders(c.headers);
          if (delete h["if-range"], !this._requestMatches(c, !0) || !this.storable())
            return delete h["if-none-match"], delete h["if-modified-since"], h;
          if (this._resHeaders.etag && (h["if-none-match"] = h["if-none-match"] ? `${h["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.
          etag), h["accept-ranges"] || h["if-match"] || h["if-unmodified-since"] || this._method && this._method != "GET") {
            if (delete h["if-modified-since"], h["if-none-match"]) {
              let _ = h["if-none-match"].split(/,/).filter((y) => !/^\s*W\//.test(y));
              _.length ? h["if-none-match"] = _.join(",").trim() : delete h["if-none-match"];
            }
          } else this._resHeaders["last-modified"] && !h["if-modified-since"] && (h["if-modified-since"] = this._resHeaders["last-modified"]);
          return h;
        }
        /**
         * Creates new CachePolicy with information combined from the previews response,
         * and the new revalidation response.
         *
         * Returns {policy, modified} where modified is a boolean indicating
         * whether the response body has been modified, and old cached body can't be used.
         *
         * @return {Object} {policy: CachePolicy, modified: Boolean}
         */
        revalidatedPolicy(c, h) {
          if (this._assertRequestHasHeaders(c), this._useStaleIfError() && l(h))
            return {
              modified: !1,
              matches: !1,
              policy: this
            };
          if (!h || !h.headers)
            throw Error("Response headers missing");
          let g = !1;
          if (h.status !== void 0 && h.status != 304 ? g = !1 : h.headers.etag && !/^\s*W\//.test(h.headers.etag) ? g = this._resHeaders.etag &&
          this._resHeaders.etag.replace(/^\s*W\//, "") === h.headers.etag : this._resHeaders.etag && h.headers.etag ? g = this._resHeaders.etag.
          replace(/^\s*W\//, "") === h.headers.etag.replace(/^\s*W\//, "") : this._resHeaders["last-modified"] ? g = this._resHeaders["last-\
modified"] === h.headers["last-modified"] : !this._resHeaders.etag && !this._resHeaders["last-modified"] && !h.headers.etag && !h.headers["l\
ast-modified"] && (g = !0), !g)
            return {
              policy: new this.constructor(c, h),
              // Client receiving 304 without body, even if it's invalid/mismatched has no option
              // but to reuse a cached body. We don't have a good way to tell clients to do
              // error recovery in such case.
              modified: h.status != 304,
              matches: !1
            };
          let _ = {};
          for (let w in this._resHeaders)
            _[w] = w in h.headers && !u[w] ? h.headers[w] : this._resHeaders[w];
          let y = Object.assign({}, h, {
            status: this._status,
            method: this._method,
            headers: _
          });
          return {
            policy: new this.constructor(c, y, {
              shared: this._isShared,
              cacheHeuristic: this._cacheHeuristic,
              immutableMinTimeToLive: this._immutableMinTtl
            }),
            modified: !1,
            matches: !0
          };
        }
      };
    }
  }), O3 = W({
    "node_modules/.pnpm/json-buffer@3.0.1/node_modules/json-buffer/index.js"(e) {
      e.stringify = /* @__PURE__ */ n(function t(r) {
        if (typeof r > "u")
          return r;
        if (r && Buffer.isBuffer(r))
          return JSON.stringify(":base64:" + r.toString("base64"));
        if (r && r.toJSON && (r = r.toJSON()), r && typeof r == "object") {
          var i = "", s = Array.isArray(r);
          i = s ? "[" : "{";
          var o = !0;
          for (var u in r) {
            var a = typeof r[u] == "function" || !s && typeof r[u] > "u";
            Object.hasOwnProperty.call(r, u) && !a && (o || (i += ","), o = !1, s ? r[u] == null ? i += "null" : i += t(r[u]) : r[u] !== void 0 &&
            (i += t(u) + ":" + t(r[u])));
          }
          return i += s ? "]" : "}", i;
        } else return typeof r == "string" ? JSON.stringify(/^:/.test(r) ? ":" + r : r) : typeof r > "u" ? "null" : JSON.stringify(r);
      }, "stringify"), e.parse = function(t) {
        return JSON.parse(t, function(r, i) {
          return typeof i == "string" ? /^:base64:/.test(i) ? Buffer.from(i.substring(8), "base64") : /^:/.test(i) ? i.substring(1) : i : i;
        });
      };
    }
  }), P3 = W({
    "node_modules/.pnpm/keyv@4.5.2/node_modules/keyv/src/index.js"(e, t) {
      "use strict";
      var r = C("events"), i = O3(), s = /* @__PURE__ */ n((a) => {
        let l = {
          redis: "@keyv/redis",
          rediss: "@keyv/redis",
          mongodb: "@keyv/mongo",
          mongo: "@keyv/mongo",
          sqlite: "@keyv/sqlite",
          postgresql: "@keyv/postgres",
          postgres: "@keyv/postgres",
          mysql: "@keyv/mysql",
          etcd: "@keyv/etcd",
          offline: "@keyv/offline",
          tiered: "@keyv/tiered"
        };
        if (a.adapter || a.uri) {
          let f = a.adapter || /^[^:+]*/.exec(a.uri)[0];
          return new (C(l[f]))(a);
        }
        return /* @__PURE__ */ new Map();
      }, "loadStore"), o = [
        "sqlite",
        "postgres",
        "mysql",
        "mongo",
        "redis",
        "tiered"
      ], u = class extends r {
        static {
          n(this, "Keyv2");
        }
        constructor(a, { emitErrors: l = !0, ...f } = {}) {
          if (super(), this.opts = {
            namespace: "keyv",
            serialize: i.stringify,
            deserialize: i.parse,
            ...typeof a == "string" ? { uri: a } : a,
            ...f
          }, !this.opts.store) {
            let d = { ...this.opts };
            this.opts.store = s(d);
          }
          if (this.opts.compression) {
            let d = this.opts.compression;
            this.opts.serialize = d.serialize.bind(d), this.opts.deserialize = d.deserialize.bind(d);
          }
          typeof this.opts.store.on == "function" && l && this.opts.store.on("error", (d) => this.emit("error", d)), this.opts.store.namespace =
          this.opts.namespace;
          let p = /* @__PURE__ */ n((d) => async function* () {
            for await (let [c, h] of typeof d == "function" ? d(this.opts.store.namespace) : d) {
              let g = this.opts.deserialize(h);
              if (!(this.opts.store.namespace && !c.includes(this.opts.store.namespace))) {
                if (typeof g.expires == "number" && Date.now() > g.expires) {
                  this.delete(c);
                  continue;
                }
                yield [this._getKeyUnprefix(c), g.value];
              }
            }
          }, "generateIterator");
          typeof this.opts.store[Symbol.iterator] == "function" && this.opts.store instanceof Map ? this.iterator = p(this.opts.store) : typeof this.
          opts.store.iterator == "function" && this.opts.store.opts && this._checkIterableAdaptar() && (this.iterator = p(this.opts.store.iterator.
          bind(this.opts.store)));
        }
        _checkIterableAdaptar() {
          return o.includes(this.opts.store.opts.dialect) || o.findIndex((a) => this.opts.store.opts.url.includes(a)) >= 0;
        }
        _getKeyPrefix(a) {
          return `${this.opts.namespace}:${a}`;
        }
        _getKeyPrefixArray(a) {
          return a.map((l) => `${this.opts.namespace}:${l}`);
        }
        _getKeyUnprefix(a) {
          return a.split(":").splice(1).join(":");
        }
        get(a, l) {
          let { store: f } = this.opts, p = Array.isArray(a), d = p ? this._getKeyPrefixArray(a) : this._getKeyPrefix(a);
          if (p && f.getMany === void 0) {
            let c = [];
            for (let h of d)
              c.push(
                Promise.resolve().then(() => f.get(h)).then((g) => typeof g == "string" ? this.opts.deserialize(g) : this.opts.compression ?
                this.opts.deserialize(g) : g).then((g) => {
                  if (g != null)
                    return typeof g.expires == "number" && Date.now() > g.expires ? this.delete(h).then(() => {
                    }) : l && l.raw ? g : g.value;
                })
              );
            return Promise.allSettled(c).then((h) => {
              let g = [];
              for (let _ of h)
                g.push(_.value);
              return g;
            });
          }
          return Promise.resolve().then(() => p ? f.getMany(d) : f.get(d)).then((c) => typeof c == "string" ? this.opts.deserialize(c) : this.
          opts.compression ? this.opts.deserialize(c) : c).then((c) => {
            if (c != null) {
              if (p) {
                let h = [];
                for (let g of c) {
                  if (typeof g == "string" && (g = this.opts.deserialize(g)), g == null) {
                    h.push(void 0);
                    continue;
                  }
                  typeof g.expires == "number" && Date.now() > g.expires ? (this.delete(a).then(() => {
                  }), h.push(void 0)) : h.push(l && l.raw ? g : g.value);
                }
                return h;
              }
              return typeof c.expires == "number" && Date.now() > c.expires ? this.delete(a).then(() => {
              }) : l && l.raw ? c : c.value;
            }
          });
        }
        set(a, l, f) {
          let p = this._getKeyPrefix(a);
          typeof f > "u" && (f = this.opts.ttl), f === 0 && (f = void 0);
          let { store: d } = this.opts;
          return Promise.resolve().then(() => {
            let c = typeof f == "number" ? Date.now() + f : null;
            return typeof l == "symbol" && this.emit("error", "symbol cannot be serialized"), l = { value: l, expires: c }, this.opts.serialize(
            l);
          }).then((c) => d.set(p, c, f)).then(() => !0);
        }
        delete(a) {
          let { store: l } = this.opts;
          if (Array.isArray(a)) {
            let p = this._getKeyPrefixArray(a);
            if (l.deleteMany === void 0) {
              let d = [];
              for (let c of p)
                d.push(l.delete(c));
              return Promise.allSettled(d).then((c) => c.every((h) => h.value === !0));
            }
            return Promise.resolve().then(() => l.deleteMany(p));
          }
          let f = this._getKeyPrefix(a);
          return Promise.resolve().then(() => l.delete(f));
        }
        clear() {
          let { store: a } = this.opts;
          return Promise.resolve().then(() => a.clear());
        }
        has(a) {
          let l = this._getKeyPrefix(a), { store: f } = this.opts;
          return Promise.resolve().then(async () => typeof f.has == "function" ? f.has(l) : await f.get(l) !== void 0);
        }
        disconnect() {
          let { store: a } = this.opts;
          if (typeof a.disconnect == "function")
            return a.disconnect();
        }
      };
      t.exports = u;
    }
  }), q3 = W({
    "node_modules/.pnpm/mimic-response@3.1.0/node_modules/mimic-response/index.js"(e, t) {
      "use strict";
      var r = [
        "aborted",
        "complete",
        "headers",
        "httpVersion",
        "httpVersionMinor",
        "httpVersionMajor",
        "method",
        "rawHeaders",
        "rawTrailers",
        "setTimeout",
        "socket",
        "statusCode",
        "statusMessage",
        "trailers",
        "url"
      ];
      t.exports = (i, s) => {
        if (s._readableState.autoDestroy)
          throw new Error("The second stream must have the `autoDestroy` option set to `false`");
        let o = new Set(Object.keys(i).concat(r)), u = {};
        for (let a of o)
          a in s || (u[a] = {
            get() {
              let l = i[a];
              return typeof l == "function" ? l.bind(i) : l;
            },
            set(l) {
              i[a] = l;
            },
            enumerable: !0,
            configurable: !1
          });
        return Object.defineProperties(s, u), i.once("aborted", () => {
          s.destroy(), s.emit("aborted");
        }), i.once("close", () => {
          i.complete && s.readable ? s.once("end", () => {
            s.emit("close");
          }) : s.emit("close");
        }), s;
      };
    }
  }), M3 = W({
    "node_modules/.pnpm/decompress-response@6.0.0/node_modules/decompress-response/index.js"(e, t) {
      "use strict";
      var { Transform: r, PassThrough: i } = C("stream"), s = C("zlib"), o = q3();
      t.exports = (u) => {
        let a = (u.headers["content-encoding"] || "").toLowerCase();
        if (!["gzip", "deflate", "br"].includes(a))
          return u;
        let l = a === "br";
        if (l && typeof s.createBrotliDecompress != "function")
          return u.destroy(new Error("Brotli is not supported on Node.js < 12")), u;
        let f = !0, p = new r({
          transform(h, g, _) {
            f = !1, _(null, h);
          },
          flush(h) {
            h();
          }
        }), d = new i({
          autoDestroy: !1,
          destroy(h, g) {
            u.destroy(), g(h);
          }
        }), c = l ? s.createBrotliDecompress() : s.createUnzip();
        return c.once("error", (h) => {
          if (f && !u.readable) {
            d.end();
            return;
          }
          d.destroy(h);
        }), o(u, d), u.pipe(p).pipe(c).pipe(d), d;
      };
    }
  }), $y = W({
    "node_modules/.pnpm/quick-lru@5.1.1/node_modules/quick-lru/index.js"(e, t) {
      "use strict";
      var r = class {
        static {
          n(this, "QuickLRU");
        }
        constructor(i = {}) {
          if (!(i.maxSize && i.maxSize > 0))
            throw new TypeError("`maxSize` must be a number greater than 0");
          this.maxSize = i.maxSize, this.onEviction = i.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(),
          this._size = 0;
        }
        _set(i, s) {
          if (this.cache.set(i, s), this._size++, this._size >= this.maxSize) {
            if (this._size = 0, typeof this.onEviction == "function")
              for (let [o, u] of this.oldCache.entries())
                this.onEviction(o, u);
            this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map();
          }
        }
        get(i) {
          if (this.cache.has(i))
            return this.cache.get(i);
          if (this.oldCache.has(i)) {
            let s = this.oldCache.get(i);
            return this.oldCache.delete(i), this._set(i, s), s;
          }
        }
        set(i, s) {
          return this.cache.has(i) ? this.cache.set(i, s) : this._set(i, s), this;
        }
        has(i) {
          return this.cache.has(i) || this.oldCache.has(i);
        }
        peek(i) {
          if (this.cache.has(i))
            return this.cache.get(i);
          if (this.oldCache.has(i))
            return this.oldCache.get(i);
        }
        delete(i) {
          let s = this.cache.delete(i);
          return s && this._size--, this.oldCache.delete(i) || s;
        }
        clear() {
          this.cache.clear(), this.oldCache.clear(), this._size = 0;
        }
        *keys() {
          for (let [i] of this)
            yield i;
        }
        *values() {
          for (let [, i] of this)
            yield i;
        }
        *[Symbol.iterator]() {
          for (let i of this.cache)
            yield i;
          for (let i of this.oldCache) {
            let [s] = i;
            this.cache.has(s) || (yield i);
          }
        }
        get size() {
          let i = 0;
          for (let s of this.oldCache.keys())
            this.cache.has(s) || i++;
          return Math.min(this._size + i, this.maxSize);
        }
      };
      t.exports = r;
    }
  }), zy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/delay-async-destroy.js"(e, t) {
      "use strict";
      t.exports = (r) => {
        if (r.listenerCount("error") !== 0)
          return r;
        r.__destroy = r._destroy, r._destroy = (...s) => {
          let o = s.pop();
          r.__destroy(...s, async (u) => {
            await Promise.resolve(), o(u);
          });
        };
        let i = /* @__PURE__ */ n((s) => {
          Promise.resolve().then(() => {
            r.emit("error", s);
          });
        }, "onError");
        return r.once("error", i), Promise.resolve().then(() => {
          r.off("error", i);
        }), r;
      };
    }
  }), Or = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/agent.js"(e, t) {
      "use strict";
      var { URL: r } = C("url"), i = C("events"), s = C("tls"), o = C("http2"), u = $y(), a = zy(), l = Symbol("currentStreamCount"), f = Symbol(
      "request"), p = Symbol("cachedOriginSet"), d = Symbol("gracefullyClosing"), c = Symbol("length"), h = [
        // Not an Agent option actually
        "createConnection",
        // `http2.connect()` options
        "maxDeflateDynamicTableSize",
        "maxSettings",
        "maxSessionMemory",
        "maxHeaderListPairs",
        "maxOutstandingPings",
        "maxReservedRemoteStreams",
        "maxSendHeaderBlockLength",
        "paddingStrategy",
        "peerMaxConcurrentStreams",
        "settings",
        // `tls.connect()` source options
        "family",
        "localAddress",
        "rejectUnauthorized",
        // `tls.connect()` secure context options
        "pskCallback",
        "minDHSize",
        // `tls.connect()` destination options
        // - `servername` is automatically validated, skip it
        // - `host` and `port` just describe the destination server,
        "path",
        "socket",
        // `tls.createSecureContext()` options
        "ca",
        "cert",
        "sigalgs",
        "ciphers",
        "clientCertEngine",
        "crl",
        "dhparam",
        "ecdhCurve",
        "honorCipherOrder",
        "key",
        "privateKeyEngine",
        "privateKeyIdentifier",
        "maxVersion",
        "minVersion",
        "pfx",
        "secureOptions",
        "secureProtocol",
        "sessionIdContext",
        "ticketKeys"
      ], g = /* @__PURE__ */ n((E, x, A) => {
        let k = 0, q = E.length;
        for (; k < q; ) {
          let O = k + q >>> 1;
          A(E[O], x) ? k = O + 1 : q = O;
        }
        return k;
      }, "getSortedIndex"), _ = /* @__PURE__ */ n((E, x) => E.remoteSettings.maxConcurrentStreams > x.remoteSettings.maxConcurrentStreams, "\
compareSessions"), y = /* @__PURE__ */ n((E, x) => {
        for (let A = 0; A < E.length; A++) {
          let k = E[A];
          // Unfortunately `.every()` returns true for an empty array
          k[p].length > 0 && k[p].length < x[p].length && k[p].every((q) => x[p].includes(q)) && k[l] + x[l] <= x.remoteSettings.maxConcurrentStreams &&
          F(k);
        }
      }, "closeCoveredSessions"), w = /* @__PURE__ */ n((E, x) => {
        for (let A = 0; A < E.length; A++) {
          let k = E[A];
          if (x[p].length > 0 && x[p].length < k[p].length && x[p].every((q) => k[p].includes(q)) && x[l] + k[l] <= k.remoteSettings.maxConcurrentStreams)
            return F(x), !0;
        }
        return !1;
      }, "closeSessionIfCovered"), F = /* @__PURE__ */ n((E) => {
        E[d] = !0, E[l] === 0 && E.close();
      }, "gracefullyClose"), v = class extends i {
        static {
          n(this, "Agent");
        }
        constructor({ timeout: E = 0, maxSessions: x = Number.POSITIVE_INFINITY, maxEmptySessions: A = 10, maxCachedTlsSessions: k = 100 } = {}) {
          super(), this.sessions = {}, this.queue = {}, this.timeout = E, this.maxSessions = x, this.maxEmptySessions = A, this._emptySessionCount =
          0, this._sessionCount = 0, this.settings = {
            enablePush: !1,
            initialWindowSize: 1024 * 1024 * 32
            // 32MB, see https://github.com/nodejs/node/issues/38426
          }, this.tlsSessionCache = new u({ maxSize: k });
        }
        get protocol() {
          return "https:";
        }
        normalizeOptions(E) {
          let x = "";
          for (let A = 0; A < h.length; A++) {
            let k = h[A];
            x += ":", E && E[k] !== void 0 && (x += E[k]);
          }
          return x;
        }
        _processQueue() {
          if (this._sessionCount >= this.maxSessions) {
            this.closeEmptySessions(this.maxSessions - this._sessionCount + 1);
            return;
          }
          for (let E in this.queue)
            for (let x in this.queue[E]) {
              let A = this.queue[E][x];
              A.completed || (A.completed = !0, A());
            }
        }
        _isBetterSession(E, x) {
          return E > x;
        }
        _accept(E, x, A, k) {
          let q = 0;
          for (; q < x.length && E[l] < E.remoteSettings.maxConcurrentStreams; )
            x[q].resolve(E), q++;
          x.splice(0, q), x.length > 0 && (this.getSession(A, k, x), x.length = 0);
        }
        getSession(E, x, A) {
          return new Promise((k, q) => {
            Array.isArray(A) && A.length > 0 ? (A = [...A], k()) : A = [{ resolve: k, reject: q }];
            try {
              if (typeof E == "string")
                E = new r(E);
              else if (!(E instanceof r))
                throw new TypeError("The `origin` argument needs to be a string or an URL object");
              if (x) {
                let { servername: P } = x, { hostname: T } = E;
                if (P && T !== P)
                  throw new Error(`Origin ${T} differs from servername ${P}`);
              }
            } catch (P) {
              for (let T = 0; T < A.length; T++)
                A[T].reject(P);
              return;
            }
            let O = this.normalizeOptions(x), j = E.origin;
            if (O in this.sessions) {
              let P = this.sessions[O], T = -1, M = -1, ne;
              for (let $ = 0; $ < P.length; $++) {
                let B = P[$], ge = B.remoteSettings.maxConcurrentStreams;
                if (ge < T)
                  break;
                if (!B[p].includes(j))
                  continue;
                let N = B[l];
                N >= ge || B[d] || B.destroyed || (ne || (T = ge), this._isBetterSession(N, M) && (ne = B, M = N));
              }
              if (ne) {
                this._accept(ne, A, j, x);
                return;
              }
            }
            if (O in this.queue) {
              if (j in this.queue[O]) {
                this.queue[O][j].listeners.push(...A);
                return;
              }
            } else
              this.queue[O] = {
                [c]: 0
              };
            let U = /* @__PURE__ */ n(() => {
              O in this.queue && this.queue[O][j] === he && (delete this.queue[O][j], --this.queue[O][c] === 0 && delete this.queue[O]);
            }, "removeFromQueue"), he = /* @__PURE__ */ n(async () => {
              this._sessionCount++;
              let P = `${j}:${O}`, T = !1, M;
              try {
                let ne = { ...x };
                ne.settings === void 0 && (ne.settings = this.settings), ne.session === void 0 && (ne.session = this.tlsSessionCache.get(P)),
                M = await (ne.createConnection || this.createConnection).call(this, E, ne), ne.createConnection = () => M;
                let B = o.connect(E, ne);
                B[l] = 0, B[d] = !1;
                let ge = /* @__PURE__ */ n(() => {
                  let { socket: L } = B, Z;
                  return L.servername === !1 ? (L.servername = L.remoteAddress, Z = B.originSet, L.servername = !1) : Z = B.originSet, Z;
                }, "getOriginSet"), N = /* @__PURE__ */ n(() => B[l] < B.remoteSettings.maxConcurrentStreams, "isFree");
                B.socket.once("session", (L) => {
                  this.tlsSessionCache.set(P, L);
                }), B.once("error", (L) => {
                  for (let Z = 0; Z < A.length; Z++)
                    A[Z].reject(L);
                  this.tlsSessionCache.delete(P);
                }), B.setTimeout(this.timeout, () => {
                  B.destroy();
                }), B.once("close", () => {
                  if (this._sessionCount--, T) {
                    this._emptySessionCount--;
                    let L = this.sessions[O];
                    L.length === 1 ? delete this.sessions[O] : L.splice(L.indexOf(B), 1);
                  } else {
                    U();
                    let L = new Error("Session closed without receiving a SETTINGS frame");
                    L.code = "HTTP2WRAPPER_NOSETTINGS";
                    for (let Z = 0; Z < A.length; Z++)
                      A[Z].reject(L);
                  }
                  this._processQueue();
                });
                let Ir = /* @__PURE__ */ n(() => {
                  let L = this.queue[O];
                  if (!L)
                    return;
                  let Z = B[p];
                  for (let He = 0; He < Z.length; He++) {
                    let Lr = Z[He];
                    if (Lr in L) {
                      let { listeners: Gl, completed: q0 } = L[Lr], Ji = 0;
                      for (; Ji < Gl.length && N(); )
                        Gl[Ji].resolve(B), Ji++;
                      if (L[Lr].listeners.splice(0, Ji), L[Lr].listeners.length === 0 && !q0 && (delete L[Lr], --L[c] === 0)) {
                        delete this.queue[O];
                        break;
                      }
                      if (!N())
                        break;
                    }
                  }
                }, "processListeners");
                B.on("origin", () => {
                  B[p] = ge() || [], B[d] = !1, w(this.sessions[O], B), !(B[d] || !N()) && (Ir(), N() && y(this.sessions[O], B));
                }), B.once("remoteSettings", () => {
                  if (he.destroyed) {
                    let L = new Error("Agent has been destroyed");
                    for (let Z = 0; Z < A.length; Z++)
                      A[Z].reject(L);
                    B.destroy();
                    return;
                  }
                  if (B.setLocalWindowSize && B.setLocalWindowSize(1024 * 1024 * 4), B[p] = ge() || [], B.socket.encrypted) {
                    let L = B[p][0];
                    if (L !== j) {
                      let Z = new Error(`Requested origin ${j} does not match server ${L}`);
                      for (let He = 0; He < A.length; He++)
                        A[He].reject(Z);
                      B.destroy();
                      return;
                    }
                  }
                  U();
                  {
                    let L = this.sessions;
                    if (O in L) {
                      let Z = L[O];
                      Z.splice(g(Z, B, _), 0, B);
                    } else
                      L[O] = [B];
                  }
                  T = !0, this._emptySessionCount++, this.emit("session", B), this._accept(B, A, j, x), B[l] === 0 && this._emptySessionCount >
                  this.maxEmptySessions && this.closeEmptySessions(this._emptySessionCount - this.maxEmptySessions), B.on("remoteSettings", () => {
                    N() && (Ir(), N() && y(this.sessions[O], B));
                  });
                }), B[f] = B.request, B.request = (L, Z) => {
                  if (B[d])
                    throw new Error("The session is gracefully closing. No new streams are allowed.");
                  let He = B[f](L, Z);
                  return B.ref(), B[l]++ === 0 && this._emptySessionCount--, He.once("close", () => {
                    if (--B[l] === 0 && (this._emptySessionCount++, B.unref(), this._emptySessionCount > this.maxEmptySessions || B[d])) {
                      B.close();
                      return;
                    }
                    B.destroyed || B.closed || N() && !w(this.sessions[O], B) && (y(this.sessions[O], B), Ir(), B[l] === 0 && this._processQueue());
                  }), He;
                };
              } catch (ne) {
                U(), this._sessionCount--;
                for (let $ = 0; $ < A.length; $++)
                  A[$].reject(ne);
              }
            }, "entry");
            he.listeners = A, he.completed = !1, he.destroyed = !1, this.queue[O][j] = he, this.queue[O][c]++, this._processQueue();
          });
        }
        request(E, x, A, k) {
          return new Promise((q, O) => {
            this.getSession(E, x, [{
              reject: O,
              resolve: /* @__PURE__ */ n((j) => {
                try {
                  let U = j.request(A, k);
                  a(U), q(U);
                } catch (U) {
                  O(U);
                }
              }, "resolve")
            }]);
          });
        }
        async createConnection(E, x) {
          return v.connect(E, x);
        }
        static connect(E, x) {
          x.ALPNProtocols = ["h2"];
          let A = E.port || 443, k = E.hostname;
          typeof x.servername > "u" && (x.servername = k);
          let q = s.connect(A, k, x);
          return x.socket && (q._peername = {
            family: void 0,
            address: void 0,
            port: A
          }), q;
        }
        closeEmptySessions(E = Number.POSITIVE_INFINITY) {
          let x = 0, { sessions: A } = this;
          for (let k in A) {
            let q = A[k];
            for (let O = 0; O < q.length; O++) {
              let j = q[O];
              if (j[l] === 0 && (x++, j.close(), x >= E))
                return x;
            }
          }
          return x;
        }
        destroy(E) {
          let { sessions: x, queue: A } = this;
          for (let k in x) {
            let q = x[k];
            for (let O = 0; O < q.length; O++)
              q[O].destroy(E);
          }
          for (let k in A) {
            let q = A[k];
            for (let O in q)
              q[O].destroyed = !0;
          }
          this.queue = {}, this.tlsSessionCache.clear();
        }
        get emptySessionCount() {
          return this._emptySessionCount;
        }
        get pendingSessionCount() {
          return this._sessionCount - this._emptySessionCount;
        }
        get sessionCount() {
          return this._sessionCount;
        }
      };
      v.kCurrentStreamCount = l, v.kGracefullyClosing = d, t.exports = {
        Agent: v,
        globalAgent: new v()
      };
    }
  }), Vy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/incoming-message.js"(e, t) {
      "use strict";
      var { Readable: r } = C("stream"), i = class extends r {
        static {
          n(this, "IncomingMessage");
        }
        constructor(s, o) {
          super({
            emitClose: !1,
            autoDestroy: !0,
            highWaterMark: o
          }), this.statusCode = null, this.statusMessage = "", this.httpVersion = "2.0", this.httpVersionMajor = 2, this.httpVersionMinor = 0,
          this.headers = {}, this.trailers = {}, this.req = null, this.aborted = !1, this.complete = !1, this.upgrade = null, this.rawHeaders =
          [], this.rawTrailers = [], this.socket = s, this._dumped = !1;
        }
        get connection() {
          return this.socket;
        }
        set connection(s) {
          this.socket = s;
        }
        _destroy(s, o) {
          this.readableEnded || (this.aborted = !0), o(), this.req._request.destroy(s);
        }
        setTimeout(s, o) {
          return this.req.setTimeout(s, o), this;
        }
        _dump() {
          this._dumped || (this._dumped = !0, this.removeAllListeners("data"), this.resume());
        }
        _read() {
          this.req && this.req._request.resume();
        }
      };
      t.exports = i;
    }
  }), j3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/proxy-events.js"(e, t) {
      "use strict";
      t.exports = (r, i, s) => {
        for (let o of s)
          r.on(o, (...u) => i.emit(o, ...u));
      };
    }
  }), qs = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/errors.js"(e, t) {
      "use strict";
      var r = /* @__PURE__ */ n((i, s, o) => {
        t.exports[s] = class extends i {
          static {
            n(this, "NodeError");
          }
          constructor(...a) {
            super(typeof o == "string" ? o : o(a)), this.name = `${super.name} [${s}]`, this.code = s;
          }
        };
      }, "makeError");
      r(TypeError, "ERR_INVALID_ARG_TYPE", (i) => {
        let s = i[0].includes(".") ? "property" : "argument", o = i[1], u = Array.isArray(o);
        return u && (o = `${o.slice(0, -1).join(", ")} or ${o.slice(-1)}`), `The "${i[0]}" ${s} must be ${u ? "one of" : "of"} type ${o}. Re\
ceived ${typeof i[2]}`;
      }), r(
        TypeError,
        "ERR_INVALID_PROTOCOL",
        (i) => `Protocol "${i[0]}" not supported. Expected "${i[1]}"`
      ), r(
        Error,
        "ERR_HTTP_HEADERS_SENT",
        (i) => `Cannot ${i[0]} headers after they are sent to the client`
      ), r(
        TypeError,
        "ERR_INVALID_HTTP_TOKEN",
        (i) => `${i[0]} must be a valid HTTP token [${i[1]}]`
      ), r(
        TypeError,
        "ERR_HTTP_INVALID_HEADER_VALUE",
        (i) => `Invalid value "${i[0]} for header "${i[1]}"`
      ), r(
        TypeError,
        "ERR_INVALID_CHAR",
        (i) => `Invalid character in ${i[0]} [${i[1]}]`
      ), r(
        Error,
        "ERR_HTTP2_NO_SOCKET_MANIPULATION",
        "HTTP/2 sockets should not be directly manipulated (e.g. read and written)"
      );
    }
  }), I3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js"(e, t) {
      "use strict";
      t.exports = (r) => {
        switch (r) {
          case ":method":
          case ":scheme":
          case ":authority":
          case ":path":
            return !0;
          default:
            return !1;
        }
      };
    }
  }), Gy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/validate-header-name.js"(e, t) {
      "use strict";
      var { ERR_INVALID_HTTP_TOKEN: r } = qs(), i = I3(), s = /^[\^`\-\w!#$%&*+.|~]+$/;
      t.exports = (o) => {
        if (typeof o != "string" || !s.test(o) && !i(o))
          throw new r("Header name", o);
      };
    }
  }), Jy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/validate-header-value.js"(e, t) {
      "use strict";
      var {
        ERR_HTTP_INVALID_HEADER_VALUE: r,
        ERR_INVALID_CHAR: i
      } = qs(), s = /[^\t\u0020-\u007E\u0080-\u00FF]/;
      t.exports = (o, u) => {
        if (typeof u > "u")
          throw new r(u, o);
        if (s.test(u))
          throw new i("header content", o);
      };
    }
  }), L3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/proxy-socket-handler.js"(e, t) {
      "use strict";
      var { ERR_HTTP2_NO_SOCKET_MANIPULATION: r } = qs(), i = {
        has(s, o) {
          let u = s.session === void 0 ? s : s.session.socket;
          return o in s || o in u;
        },
        get(s, o) {
          switch (o) {
            case "on":
            case "once":
            case "end":
            case "emit":
            case "destroy":
              return s[o].bind(s);
            case "writable":
            case "destroyed":
              return s[o];
            case "readable":
              return s.destroyed ? !1 : s.readable;
            case "setTimeout": {
              let { session: u } = s;
              return u !== void 0 ? u.setTimeout.bind(u) : s.setTimeout.bind(s);
            }
            case "write":
            case "read":
            case "pause":
            case "resume":
              throw new r();
            default: {
              let u = s.session === void 0 ? s : s.session.socket, a = u[o];
              return typeof a == "function" ? a.bind(u) : a;
            }
          }
        },
        getPrototypeOf(s) {
          return s.session !== void 0 ? Reflect.getPrototypeOf(s.session.socket) : Reflect.getPrototypeOf(s);
        },
        set(s, o, u) {
          switch (o) {
            case "writable":
            case "readable":
            case "destroyed":
            case "on":
            case "once":
            case "end":
            case "emit":
            case "destroy":
              return s[o] = u, !0;
            case "setTimeout": {
              let { session: a } = s;
              return a === void 0 ? s.setTimeout = u : a.setTimeout = u, !0;
            }
            case "write":
            case "read":
            case "pause":
            case "resume":
              throw new r();
            default: {
              let a = s.session === void 0 ? s : s.session.socket;
              return a[o] = u, !0;
            }
          }
        }
      };
      t.exports = i;
    }
  }), Yy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/client-request.js"(e, t) {
      "use strict";
      var { URL: r, urlToHttpOptions: i } = C("url"), s = C("http2"), { Writable: o } = C("stream"), { Agent: u, globalAgent: a } = Or(), l = Vy(),
      f = j3(), {
        ERR_INVALID_ARG_TYPE: p,
        ERR_INVALID_PROTOCOL: d,
        ERR_HTTP_HEADERS_SENT: c
      } = qs(), h = Gy(), g = Jy(), _ = L3(), {
        HTTP2_HEADER_STATUS: y,
        HTTP2_HEADER_METHOD: w,
        HTTP2_HEADER_PATH: F,
        HTTP2_HEADER_AUTHORITY: v,
        HTTP2_METHOD_CONNECT: E
      } = s.constants, x = Symbol("headers"), A = Symbol("origin"), k = Symbol("session"), q = Symbol("options"), O = Symbol("flushedHeaders"),
      j = Symbol("jobs"), U = Symbol("pendingAgentPromise"), he = class extends o {
        static {
          n(this, "ClientRequest");
        }
        constructor(P, T, M) {
          if (super({
            autoDestroy: !1,
            emitClose: !1
          }), typeof P == "string" ? P = i(new r(P)) : P instanceof r ? P = i(P) : P = { ...P }, typeof T == "function" || T === void 0 ? (M =
          T, T = P) : T = Object.assign(P, T), T.h2session) {
            if (this[k] = T.h2session, this[k].destroyed)
              throw new Error("The session has been closed already");
            this.protocol = this[k].socket.encrypted ? "https:" : "http:";
          } else if (T.agent === !1)
            this.agent = new u({ maxEmptySessions: 0 });
          else if (typeof T.agent > "u" || T.agent === null)
            this.agent = a;
          else if (typeof T.agent.request == "function")
            this.agent = T.agent;
          else
            throw new p("options.agent", ["http2wrapper.Agent-like Object", "undefined", "false"], T.agent);
          if (this.agent && (this.protocol = this.agent.protocol), T.protocol && T.protocol !== this.protocol)
            throw new d(T.protocol, this.protocol);
          T.port || (T.port = T.defaultPort || this.agent && this.agent.defaultPort || 443), T.host = T.hostname || T.host || "localhost", delete T.
          hostname;
          let { timeout: ne } = T;
          T.timeout = void 0, this[x] = /* @__PURE__ */ Object.create(null), this[j] = [], this[U] = void 0, this.socket = null, this.connection =
          null, this.method = T.method || "GET", this.method === "CONNECT" && (T.path === "/" || T.path === void 0) || (this.path = T.path),
          this.res = null, this.aborted = !1, this.reusedSocket = !1;
          let { headers: $ } = T;
          if ($)
            for (let ge in $)
              this.setHeader(ge, $[ge]);
          T.auth && !("authorization" in this[x]) && (this[x].authorization = "Basic " + Buffer.from(T.auth).toString("base64")), T.session =
          T.tlsSession, T.path = T.socketPath, this[q] = T, this[A] = new r(`${this.protocol}//${T.servername || T.host}:${T.port}`);
          let B = T._reuseSocket;
          B && (T.createConnection = (...ge) => B.destroyed ? this.agent.createConnection(...ge) : B, this.agent.getSession(this[A], this[q]).
          catch(() => {
          })), ne && this.setTimeout(ne), M && this.once("response", M), this[O] = !1;
        }
        get method() {
          return this[x][w];
        }
        set method(P) {
          P && (this[x][w] = P.toUpperCase());
        }
        get path() {
          let P = this.method === "CONNECT" ? v : F;
          return this[x][P];
        }
        set path(P) {
          if (P) {
            let T = this.method === "CONNECT" ? v : F;
            this[x][T] = P;
          }
        }
        get host() {
          return this[A].hostname;
        }
        set host(P) {
        }
        get _mustNotHaveABody() {
          return this.method === "GET" || this.method === "HEAD" || this.method === "DELETE";
        }
        _write(P, T, M) {
          if (this._mustNotHaveABody) {
            M(new Error("The GET, HEAD and DELETE methods must NOT have a body"));
            return;
          }
          this.flushHeaders();
          let ne = /* @__PURE__ */ n(() => this._request.write(P, T, M), "callWrite");
          this._request ? ne() : this[j].push(ne);
        }
        _final(P) {
          this.flushHeaders();
          let T = /* @__PURE__ */ n(() => {
            if (this._mustNotHaveABody || this.method === "CONNECT") {
              P();
              return;
            }
            this._request.end(P);
          }, "callEnd");
          this._request ? T() : this[j].push(T);
        }
        abort() {
          this.res && this.res.complete || (this.aborted || process.nextTick(() => this.emit("abort")), this.aborted = !0, this.destroy());
        }
        async _destroy(P, T) {
          this.res && this.res._dump(), this._request ? this._request.destroy() : process.nextTick(() => {
            this.emit("close");
          });
          try {
            await this[U];
          } catch (M) {
            this.aborted && (P = M);
          }
          T(P);
        }
        async flushHeaders() {
          if (this[O] || this.destroyed)
            return;
          this[O] = !0;
          let P = this.method === E, T = /* @__PURE__ */ n((M) => {
            if (this._request = M, this.destroyed) {
              M.destroy();
              return;
            }
            P || f(M, this, ["timeout", "continue"]), M.once("error", ($) => {
              this.destroy($);
            }), M.once("aborted", () => {
              let { res: $ } = this;
              $ ? ($.aborted = !0, $.emit("aborted"), $.destroy()) : this.destroy(new Error("The server aborted the HTTP/2 stream"));
            });
            let ne = /* @__PURE__ */ n(($, B, ge) => {
              let N = new l(this.socket, M.readableHighWaterMark);
              this.res = N, N.url = `${this[A].origin}${this.path}`, N.req = this, N.statusCode = $[y], N.headers = $, N.rawHeaders = ge, N.
              once("end", () => {
                N.complete = !0, N.socket = null, N.connection = null;
              }), P ? (N.upgrade = !0, this.emit("connect", N, M, Buffer.alloc(0)) ? this.emit("close") : M.destroy()) : (M.on("data", (Ir) => {
                !N._dumped && !N.push(Ir) && M.pause();
              }), M.once("end", () => {
                this.aborted || N.push(null);
              }), this.emit("response", N) || N._dump());
            }, "onResponse");
            M.once("response", ne), M.once("headers", ($) => this.emit("information", { statusCode: $[y] })), M.once("trailers", ($, B, ge) => {
              let { res: N } = this;
              if (N === null) {
                ne($, B, ge);
                return;
              }
              N.trailers = $, N.rawTrailers = ge;
            }), M.once("close", () => {
              let { aborted: $, res: B } = this;
              if (B) {
                $ && (B.aborted = !0, B.emit("aborted"), B.destroy());
                let ge = /* @__PURE__ */ n(() => {
                  B.emit("close"), this.destroy(), this.emit("close");
                }, "finish");
                B.readable ? B.once("end", ge) : ge();
                return;
              }
              if (!this.destroyed) {
                this.destroy(new Error("The HTTP/2 stream has been early terminated")), this.emit("close");
                return;
              }
              this.destroy(), this.emit("close");
            }), this.socket = new Proxy(M, _);
            for (let $ of this[j])
              $();
            this[j].length = 0, this.emit("socket", this.socket);
          }, "onStream");
          if (!(v in this[x]) && !P && (this[x][v] = this[A].host), this[k])
            try {
              T(this[k].request(this[x]));
            } catch (M) {
              this.destroy(M);
            }
          else {
            this.reusedSocket = !0;
            try {
              let M = this.agent.request(this[A], this[q], this[x]);
              this[U] = M, T(await M), this[U] = !1;
            } catch (M) {
              this[U] = !1, this.destroy(M);
            }
          }
        }
        get connection() {
          return this.socket;
        }
        set connection(P) {
          this.socket = P;
        }
        getHeaderNames() {
          return Object.keys(this[x]);
        }
        hasHeader(P) {
          if (typeof P != "string")
            throw new p("name", "string", P);
          return !!this[x][P.toLowerCase()];
        }
        getHeader(P) {
          if (typeof P != "string")
            throw new p("name", "string", P);
          return this[x][P.toLowerCase()];
        }
        get headersSent() {
          return this[O];
        }
        removeHeader(P) {
          if (typeof P != "string")
            throw new p("name", "string", P);
          if (this.headersSent)
            throw new c("remove");
          delete this[x][P.toLowerCase()];
        }
        setHeader(P, T) {
          if (this.headersSent)
            throw new c("set");
          h(P), g(P, T);
          let M = P.toLowerCase();
          if (M === "connection") {
            if (T.toLowerCase() === "keep-alive")
              return;
            throw new Error(`Invalid 'connection' header: ${T}`);
          }
          M === "host" && this.method === "CONNECT" ? this[x][v] = T : this[x][M] = T;
        }
        setNoDelay() {
        }
        setSocketKeepAlive() {
        }
        setTimeout(P, T) {
          let M = /* @__PURE__ */ n(() => this._request.setTimeout(P, T), "applyTimeout");
          return this._request ? M() : this[j].push(M), this;
        }
        get maxHeadersCount() {
          if (!this.destroyed && this._request)
            return this._request.session.localSettings.maxHeaderListSize;
        }
        set maxHeadersCount(P) {
        }
      };
      t.exports = he;
    }
  }), N3 = W({
    "node_modules/.pnpm/resolve-alpn@1.2.1/node_modules/resolve-alpn/index.js"(e, t) {
      "use strict";
      var r = C("tls");
      t.exports = (i = {}, s = r.connect) => new Promise((o, u) => {
        let a = !1, l, f = /* @__PURE__ */ n(async () => {
          await d, l.off("timeout", p), l.off("error", u), i.resolveSocket ? (o({ alpnProtocol: l.alpnProtocol, socket: l, timeout: a }), a &&
          (await Promise.resolve(), l.emit("timeout"))) : (l.destroy(), o({ alpnProtocol: l.alpnProtocol, timeout: a }));
        }, "callback"), p = /* @__PURE__ */ n(async () => {
          a = !0, f();
        }, "onTimeout"), d = (async () => {
          try {
            l = await s(i, f), l.on("error", u), l.once("timeout", p);
          } catch (c) {
            u(c);
          }
        })();
      });
    }
  }), H3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/calculate-server-name.js"(e, t) {
      "use strict";
      var { isIP: r } = C("net"), i = C("assert"), s = /* @__PURE__ */ n((o) => {
        if (o[0] === "[") {
          let a = o.indexOf("]");
          return i(a !== -1), o.slice(1, a);
        }
        let u = o.indexOf(":");
        return u === -1 ? o : o.slice(0, u);
      }, "getHost");
      t.exports = (o) => {
        let u = s(o);
        return r(u) ? "" : u;
      };
    }
  }), U3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/auto.js"(e, t) {
      "use strict";
      var { URL: r, urlToHttpOptions: i } = C("url"), s = C("http"), o = C("https"), u = N3(), a = $y(), { Agent: l, globalAgent: f } = Or(),
      p = Yy(), d = H3(), c = zy(), h = new a({ maxSize: 100 }), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ n((F, v, E) => {
        v._httpMessage = { shouldKeepAlive: !0 };
        let x = /* @__PURE__ */ n(() => {
          F.emit("free", v, E);
        }, "onFree");
        v.on("free", x);
        let A = /* @__PURE__ */ n(() => {
          F.removeSocket(v, E);
        }, "onClose");
        v.on("close", A);
        let k = /* @__PURE__ */ n(() => {
          let { freeSockets: O } = F;
          for (let j of Object.values(O))
            if (j.includes(v)) {
              v.destroy();
              return;
            }
        }, "onTimeout");
        v.on("timeout", k);
        let q = /* @__PURE__ */ n(() => {
          F.removeSocket(v, E), v.off("close", A), v.off("free", x), v.off("timeout", k), v.off("agentRemove", q);
        }, "onRemove");
        v.on("agentRemove", q), F.emit("free", v, E);
      }, "installSocket"), y = /* @__PURE__ */ n((F, v = /* @__PURE__ */ new Map(), E = void 0) => async (x) => {
        let A = `${x.host}:${x.port}:${x.ALPNProtocols.sort()}`;
        if (!F.has(A)) {
          if (v.has(A))
            return { alpnProtocol: (await v.get(A)).alpnProtocol };
          let { path: k } = x;
          x.path = x.socketPath;
          let q = u(x, E);
          v.set(A, q);
          try {
            let O = await q;
            return F.set(A, O.alpnProtocol), v.delete(A), x.path = k, O;
          } catch (O) {
            throw v.delete(A), x.path = k, O;
          }
        }
        return { alpnProtocol: F.get(A) };
      }, "createResolveProtocol"), w = y(h, g);
      t.exports = async (F, v, E) => {
        if (typeof F == "string" ? F = i(new r(F)) : F instanceof r ? F = i(F) : F = { ...F }, typeof v == "function" || v === void 0 ? (E =
        v, v = F) : v = Object.assign(F, v), v.ALPNProtocols = v.ALPNProtocols || ["h2", "http/1.1"], !Array.isArray(v.ALPNProtocols) || v.ALPNProtocols.
        length === 0)
          throw new Error("The `ALPNProtocols` option must be an Array with at least one entry");
        v.protocol = v.protocol || "https:";
        let x = v.protocol === "https:";
        v.host = v.hostname || v.host || "localhost", v.session = v.tlsSession, v.servername = v.servername || d(v.headers && v.headers.host ||
        v.host), v.port = v.port || (x ? 443 : 80), v._defaultAgent = x ? o.globalAgent : s.globalAgent;
        let A = v.resolveProtocol || w, { agent: k } = v;
        if (k !== void 0 && k !== !1 && k.constructor.name !== "Object")
          throw new Error("The `options.agent` can be only an object `http`, `https` or `http2` properties");
        if (x) {
          v.resolveSocket = !0;
          let { socket: q, alpnProtocol: O, timeout: j } = await A(v);
          if (j) {
            q && q.destroy();
            let he = new Error(`Timed out resolving ALPN: ${v.timeout} ms`);
            throw he.code = "ETIMEDOUT", he.ms = v.timeout, he;
          }
          q && v.createConnection && (q.destroy(), q = void 0), delete v.resolveSocket;
          let U = O === "h2";
          if (k && (k = U ? k.http2 : k.https, v.agent = k), k === void 0 && (k = U ? f : o.globalAgent), q)
            if (k === !1)
              q.destroy();
            else {
              let he = (U ? l : o.Agent).prototype.createConnection;
              k.createConnection === he ? U ? v._reuseSocket = q : _(k, q, v) : q.destroy();
            }
          if (U)
            return c(new p(v, E));
        } else k && (v.agent = k.http);
        return c(s.request(v, E));
      }, t.exports.protocolCache = h, t.exports.resolveProtocol = w, t.exports.createResolveProtocol = y;
    }
  }), Ky = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/js-stream-socket.js"(e, t) {
      "use strict";
      var r = C("stream"), i = C("tls"), s = new i.TLSSocket(new r.PassThrough())._handle._parentWrap.constructor;
      t.exports = s;
    }
  }), Xy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/unexpected-status-code-error.js"(e, t) {
      "use strict";
      var r = class extends Error {
        static {
          n(this, "UnexpectedStatusCodeError");
        }
        constructor(i, s = "") {
          super(`The proxy server rejected the request with status code ${i} (${s || "empty status message"})`), this.statusCode = i, this.statusMessage =
          s;
        }
      };
      t.exports = r;
    }
  }), W3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/utils/check-type.js"(e, t) {
      "use strict";
      var r = /* @__PURE__ */ n((i, s, o) => {
        if (!o.some((a) => typeof a === "string" ? typeof s === a : s instanceof a)) {
          let a = o.map((l) => typeof l == "string" ? l : l.name);
          throw new TypeError(`Expected '${i}' to be a type of ${a.join(" or ")}, got ${typeof s}`);
        }
      }, "checkType");
      t.exports = r;
    }
  }), Qy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/initialize.js"(e, t) {
      "use strict";
      var { URL: r } = C("url"), i = W3();
      t.exports = (s, o) => {
        i("proxyOptions", o, ["object"]), i("proxyOptions.headers", o.headers, ["object", "undefined"]), i("proxyOptions.raw", o.raw, ["bool\
ean", "undefined"]), i("proxyOptions.url", o.url, [r, "string"]);
        let u = new r(o.url);
        s.proxyOptions = {
          raw: !0,
          ...o,
          headers: { ...o.headers },
          url: u
        };
      };
    }
  }), dl = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/get-auth-headers.js"(e, t) {
      "use strict";
      t.exports = (r) => {
        let { username: i, password: s } = r.proxyOptions.url;
        if (i || s) {
          let o = `${i}:${s}`, u = `Basic ${Buffer.from(o).toString("base64")}`;
          return {
            "proxy-authorization": u,
            authorization: u
          };
        }
        return {};
      };
    }
  }), $3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/h1-over-h2.js"(e, t) {
      "use strict";
      var r = C("tls"), i = C("http"), s = C("https"), o = Ky(), { globalAgent: u } = Or(), a = Xy(), l = Qy(), f = dl(), p = /* @__PURE__ */ n(
      (h, g, _) => {
        (async () => {
          try {
            let { proxyOptions: y } = h, { url: w, headers: F, raw: v } = y, E = await u.request(w, y, {
              ...f(h),
              ...F,
              ":method": "CONNECT",
              ":authority": `${g.host}:${g.port}`
            });
            E.once("error", _), E.once("response", (x) => {
              let A = x[":status"];
              if (A !== 200) {
                _(new a(A, ""));
                return;
              }
              let k = h instanceof s.Agent;
              if (v && k) {
                g.socket = E;
                let O = r.connect(g);
                O.once("close", () => {
                  E.destroy();
                }), _(null, O);
                return;
              }
              let q = new o(E);
              q.encrypted = !1, q._handle.getpeername = (O) => {
                O.family = void 0, O.address = void 0, O.port = void 0;
              }, _(null, q);
            });
          } catch (y) {
            _(y);
          }
        })();
      }, "createConnection"), d = class extends i.Agent {
        static {
          n(this, "HttpOverHttp2");
        }
        constructor(h) {
          super(h), l(this, h.proxyOptions);
        }
        createConnection(h, g) {
          p(this, h, g);
        }
      }, c = class extends s.Agent {
        static {
          n(this, "HttpsOverHttp2");
        }
        constructor(h) {
          super(h), l(this, h.proxyOptions);
        }
        createConnection(h, g) {
          p(this, h, g);
        }
      };
      t.exports = {
        HttpOverHttp2: d,
        HttpsOverHttp2: c
      };
    }
  }), Zy = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/h2-over-hx.js"(e, t) {
      "use strict";
      var { Agent: r } = Or(), i = Ky(), s = Xy(), o = Qy(), u = class extends r {
        static {
          n(this, "Http2OverHttpX");
        }
        constructor(a) {
          super(a), o(this, a.proxyOptions);
        }
        async createConnection(a, l) {
          let f = `${a.hostname}:${a.port || 443}`, [p, d, c] = await this._getProxyStream(f);
          if (d !== 200)
            throw new s(d, c);
          if (this.proxyOptions.raw)
            l.socket = p;
          else {
            let h = new i(p);
            return h.encrypted = !1, h._handle.getpeername = (g) => {
              g.family = void 0, g.address = void 0, g.port = void 0;
            }, h;
          }
          return super.createConnection(a, l);
        }
      };
      t.exports = u;
    }
  }), z3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/h2-over-h2.js"(e, t) {
      "use strict";
      var { globalAgent: r } = Or(), i = Zy(), s = dl(), o = /* @__PURE__ */ n((a) => new Promise((l, f) => {
        a.once("error", f), a.once("response", (p) => {
          a.off("error", f), l(p[":status"]);
        });
      }), "getStatusCode"), u = class extends i {
        static {
          n(this, "Http2OverHttp2");
        }
        async _getProxyStream(a) {
          let { proxyOptions: l } = this, f = {
            ...s(this),
            ...l.headers,
            ":method": "CONNECT",
            ":authority": a
          }, p = await r.request(l.url, l, f), d = await o(p);
          return [p, d, ""];
        }
      };
      t.exports = u;
    }
  }), V3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/proxies/h2-over-h1.js"(e, t) {
      "use strict";
      var r = C("http"), i = C("https"), s = Zy(), o = dl(), u = /* @__PURE__ */ n((l) => new Promise((f, p) => {
        let d = /* @__PURE__ */ n((c, h, g) => {
          h.unshift(g), l.off("error", p), f([h, c.statusCode, c.statusMessage]);
        }, "onConnect");
        l.once("error", p), l.once("connect", d);
      }), "getStream2"), a = class extends s {
        static {
          n(this, "Http2OverHttp");
        }
        async _getProxyStream(l) {
          let { proxyOptions: f } = this, { url: p, headers: d } = this.proxyOptions, h = (p.protocol === "https:" ? i : r).request({
            ...f,
            hostname: p.hostname,
            port: p.port,
            path: l,
            headers: {
              ...o(this),
              ...d,
              host: l
            },
            method: "CONNECT"
          }).end();
          return u(h);
        }
      };
      t.exports = {
        Http2OverHttp: a,
        Http2OverHttps: a
      };
    }
  }), G3 = W({
    "node_modules/.pnpm/http2-wrapper@2.2.0/node_modules/http2-wrapper/source/index.js"(e, t) {
      "use strict";
      var r = C("http2"), {
        Agent: i,
        globalAgent: s
      } = Or(), o = Yy(), u = Vy(), a = U3(), {
        HttpOverHttp2: l,
        HttpsOverHttp2: f
      } = $3(), p = z3(), {
        Http2OverHttp: d,
        Http2OverHttps: c
      } = V3(), h = Gy(), g = Jy(), _ = /* @__PURE__ */ n((w, F, v) => new o(w, F, v), "request"), y = /* @__PURE__ */ n((w, F, v) => {
        let E = new o(w, F, v);
        return E.end(), E;
      }, "get");
      t.exports = {
        ...r,
        ClientRequest: o,
        IncomingMessage: u,
        Agent: i,
        globalAgent: s,
        request: _,
        get: y,
        auto: a,
        proxies: {
          HttpOverHttp2: l,
          HttpsOverHttp2: f,
          Http2OverHttp2: p,
          Http2OverHttp: d,
          Http2OverHttps: c
        },
        validateHeaderName: h,
        validateHeaderValue: g
      };
    }
  }), eb = {};
  A3(eb, {
    default: /* @__PURE__ */ n(() => JA, "default")
  });
  fb.exports = R3(eb);
  var J3 = C("http"), Y3 = C("https"), tb = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function K3(e) {
    return tb.includes(e);
  }
  n(K3, "isTypedArrayName");
  var X3 = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "WeakRef",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    "NaN",
    ...tb
  ];
  function Q3(e) {
    return X3.includes(e);
  }
  n(Q3, "isObjectTypeName");
  var Z3 = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol"
  ];
  function e1(e) {
    return Z3.includes(e);
  }
  n(e1, "isPrimitiveTypeName");
  function Pr(e) {
    return (t) => typeof t === e;
  }
  n(Pr, "isOfType");
  var { toString: t1 } = Object.prototype, Hi = /* @__PURE__ */ n((e) => {
    let t = t1.call(e).slice(8, -1);
    if (/HTML\w+Element/.test(t) && D.domElement(e))
      return "HTMLElement";
    if (Q3(t))
      return t;
  }, "getObjectType"), Y = /* @__PURE__ */ n((e) => (t) => Hi(t) === e, "isObjectOfType");
  function D(e) {
    if (e === null)
      return "null";
    switch (typeof e) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      default:
    }
    if (D.observable(e))
      return "Observable";
    if (D.array(e))
      return "Array";
    if (D.buffer(e))
      return "Buffer";
    let t = Hi(e);
    if (t)
      return t;
    if (e instanceof String || e instanceof Boolean || e instanceof Number)
      throw new TypeError("Please don't use object wrappers for primitive types");
    return "Object";
  }
  n(D, "is");
  D.undefined = Pr("undefined");
  D.string = Pr("string");
  var r1 = Pr("number");
  D.number = (e) => r1(e) && !D.nan(e);
  D.bigint = Pr("bigint");
  D.function_ = Pr("function");
  D.null_ = (e) => e === null;
  D.class_ = (e) => D.function_(e) && e.toString().startsWith("class ");
  D.boolean = (e) => e === !0 || e === !1;
  D.symbol = Pr("symbol");
  D.numericString = (e) => D.string(e) && !D.emptyStringOrWhitespace(e) && !Number.isNaN(Number(e));
  D.array = (e, t) => Array.isArray(e) ? D.function_(t) ? e.every((r) => t(r)) : !0 : !1;
  D.buffer = (e) => {
    var t, r;
    return ((r = (t = e?.constructor) == null ? void 0 : t.isBuffer) == null ? void 0 : r.call(t, e)) ?? !1;
  };
  D.blob = (e) => Y("Blob")(e);
  D.nullOrUndefined = (e) => D.null_(e) || D.undefined(e);
  D.object = (e) => !D.null_(e) && (typeof e == "object" || D.function_(e));
  D.iterable = (e) => D.function_(e?.[Symbol.iterator]);
  D.asyncIterable = (e) => D.function_(e?.[Symbol.asyncIterator]);
  D.generator = (e) => D.iterable(e) && D.function_(e?.next) && D.function_(e?.throw);
  D.asyncGenerator = (e) => D.asyncIterable(e) && D.function_(e.next) && D.function_(e.throw);
  D.nativePromise = (e) => Y("Promise")(e);
  var i1 = /* @__PURE__ */ n((e) => D.function_(e?.then) && D.function_(e?.catch), "hasPromiseApi");
  D.promise = (e) => D.nativePromise(e) || i1(e);
  D.generatorFunction = Y("GeneratorFunction");
  D.asyncGeneratorFunction = (e) => Hi(e) === "AsyncGeneratorFunction";
  D.asyncFunction = (e) => Hi(e) === "AsyncFunction";
  D.boundFunction = (e) => D.function_(e) && !e.hasOwnProperty("prototype");
  D.regExp = Y("RegExp");
  D.date = Y("Date");
  D.error = Y("Error");
  D.map = (e) => Y("Map")(e);
  D.set = (e) => Y("Set")(e);
  D.weakMap = (e) => Y("WeakMap")(e);
  D.weakSet = (e) => Y("WeakSet")(e);
  D.weakRef = (e) => Y("WeakRef")(e);
  D.int8Array = Y("Int8Array");
  D.uint8Array = Y("Uint8Array");
  D.uint8ClampedArray = Y("Uint8ClampedArray");
  D.int16Array = Y("Int16Array");
  D.uint16Array = Y("Uint16Array");
  D.int32Array = Y("Int32Array");
  D.uint32Array = Y("Uint32Array");
  D.float32Array = Y("Float32Array");
  D.float64Array = Y("Float64Array");
  D.bigInt64Array = Y("BigInt64Array");
  D.bigUint64Array = Y("BigUint64Array");
  D.arrayBuffer = Y("ArrayBuffer");
  D.sharedArrayBuffer = Y("SharedArrayBuffer");
  D.dataView = Y("DataView");
  D.enumCase = (e, t) => Object.values(t).includes(e);
  D.directInstanceOf = (e, t) => Object.getPrototypeOf(e) === t.prototype;
  D.urlInstance = (e) => Y("URL")(e);
  D.urlString = (e) => {
    if (!D.string(e))
      return !1;
    try {
      return new URL(e), !0;
    } catch {
      return !1;
    }
  };
  D.truthy = (e) => !!e;
  D.falsy = (e) => !e;
  D.nan = (e) => Number.isNaN(e);
  D.primitive = (e) => D.null_(e) || e1(typeof e);
  D.integer = (e) => Number.isInteger(e);
  D.safeInteger = (e) => Number.isSafeInteger(e);
  D.plainObject = (e) => {
    if (typeof e != "object" || e === null)
      return !1;
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in
    e);
  };
  D.typedArray = (e) => K3(Hi(e));
  var n1 = /* @__PURE__ */ n((e) => D.safeInteger(e) && e >= 0, "isValidLength");
  D.arrayLike = (e) => !D.nullOrUndefined(e) && !D.function_(e) && n1(e.length);
  D.inRange = (e, t) => {
    if (D.number(t))
      return e >= Math.min(0, t) && e <= Math.max(t, 0);
    if (D.array(t) && t.length === 2)
      return e >= Math.min(...t) && e <= Math.max(...t);
    throw new TypeError(`Invalid range: ${JSON.stringify(t)}`);
  };
  var s1 = 1, o1 = [
    "innerHTML",
    "ownerDocument",
    "style",
    "attributes",
    "nodeValue"
  ];
  D.domElement = (e) => D.object(e) && e.nodeType === s1 && D.string(e.nodeName) && !D.plainObject(e) && o1.every((t) => t in e);
  D.observable = (e) => {
    var t, r;
    return e ? e === ((t = e[Symbol.observable]) == null ? void 0 : t.call(e)) || e === ((r = e["@@observable"]) == null ? void 0 : r.call(e)) :
    !1;
  };
  D.nodeStream = (e) => D.object(e) && D.function_(e.pipe) && !D.observable(e);
  D.infinite = (e) => e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY;
  var rb = /* @__PURE__ */ n((e) => (t) => D.integer(t) && Math.abs(t % 2) === e, "isAbsoluteMod2");
  D.evenInteger = rb(0);
  D.oddInteger = rb(1);
  D.emptyArray = (e) => D.array(e) && e.length === 0;
  D.nonEmptyArray = (e) => D.array(e) && e.length > 0;
  D.emptyString = (e) => D.string(e) && e.length === 0;
  var u1 = /* @__PURE__ */ n((e) => D.string(e) && !/\S/.test(e), "isWhiteSpaceString");
  D.emptyStringOrWhitespace = (e) => D.emptyString(e) || u1(e);
  D.nonEmptyString = (e) => D.string(e) && e.length > 0;
  D.nonEmptyStringAndNotWhitespace = (e) => D.string(e) && !D.emptyStringOrWhitespace(e);
  D.emptyObject = (e) => D.object(e) && !D.map(e) && !D.set(e) && Object.keys(e).length === 0;
  D.nonEmptyObject = (e) => D.object(e) && !D.map(e) && !D.set(e) && Object.keys(e).length > 0;
  D.emptySet = (e) => D.set(e) && e.size === 0;
  D.nonEmptySet = (e) => D.set(e) && e.size > 0;
  D.emptyMap = (e) => D.map(e) && e.size === 0;
  D.nonEmptyMap = (e) => D.map(e) && e.size > 0;
  D.propertyKey = (e) => D.any([D.string, D.number, D.symbol], e);
  D.formData = (e) => Y("FormData")(e);
  D.urlSearchParams = (e) => Y("URLSearchParams")(e);
  var ib = /* @__PURE__ */ n((e, t, r) => {
    if (!D.function_(t))
      throw new TypeError(`Invalid predicate: ${JSON.stringify(t)}`);
    if (r.length === 0)
      throw new TypeError("Invalid number of values");
    return e.call(r, t);
  }, "predicateOnArray");
  D.any = (e, ...t) => (D.array(e) ? e : [e]).some((i) => ib(Array.prototype.some, i, t));
  D.all = (e, ...t) => ib(Array.prototype.every, e, t);
  var R = /* @__PURE__ */ n((e, t, r, i = {}) => {
    if (!e) {
      let { multipleValues: s } = i, o = s ? `received values of types ${[
        ...new Set(r.map((u) => `\`${D(u)}\``))
      ].join(", ")}` : `received value of type \`${D(r)}\``;
      throw new TypeError(`Expected value which is \`${t}\`, ${o}.`);
    }
  }, "assertType"), S = {
    // Unknowns.
    undefined: /* @__PURE__ */ n((e) => R(D.undefined(e), "undefined", e), "undefined"),
    string: /* @__PURE__ */ n((e) => R(D.string(e), "string", e), "string"),
    number: /* @__PURE__ */ n((e) => R(D.number(e), "number", e), "number"),
    bigint: /* @__PURE__ */ n((e) => R(D.bigint(e), "bigint", e), "bigint"),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: /* @__PURE__ */ n((e) => R(D.function_(e), "Function", e), "function_"),
    null_: /* @__PURE__ */ n((e) => R(D.null_(e), "null", e), "null_"),
    class_: /* @__PURE__ */ n((e) => R(D.class_(e), "Class", e), "class_"),
    boolean: /* @__PURE__ */ n((e) => R(D.boolean(e), "boolean", e), "boolean"),
    symbol: /* @__PURE__ */ n((e) => R(D.symbol(e), "symbol", e), "symbol"),
    numericString: /* @__PURE__ */ n((e) => R(D.numericString(e), "string with a number", e), "numericString"),
    array: /* @__PURE__ */ n((e, t) => {
      R(D.array(e), "Array", e), t && e.forEach(t);
    }, "array"),
    buffer: /* @__PURE__ */ n((e) => R(D.buffer(e), "Buffer", e), "buffer"),
    blob: /* @__PURE__ */ n((e) => R(D.blob(e), "Blob", e), "blob"),
    nullOrUndefined: /* @__PURE__ */ n((e) => R(D.nullOrUndefined(e), "null or undefined", e), "nullOrUndefined"),
    object: /* @__PURE__ */ n((e) => R(D.object(e), "Object", e), "object"),
    iterable: /* @__PURE__ */ n((e) => R(D.iterable(e), "Iterable", e), "iterable"),
    asyncIterable: /* @__PURE__ */ n((e) => R(D.asyncIterable(e), "AsyncIterable", e), "asyncIterable"),
    generator: /* @__PURE__ */ n((e) => R(D.generator(e), "Generator", e), "generator"),
    asyncGenerator: /* @__PURE__ */ n((e) => R(D.asyncGenerator(e), "AsyncGenerator", e), "asyncGenerator"),
    nativePromise: /* @__PURE__ */ n((e) => R(D.nativePromise(e), "native Promise", e), "nativePromise"),
    promise: /* @__PURE__ */ n((e) => R(D.promise(e), "Promise", e), "promise"),
    generatorFunction: /* @__PURE__ */ n((e) => R(D.generatorFunction(e), "GeneratorFunction", e), "generatorFunction"),
    asyncGeneratorFunction: /* @__PURE__ */ n((e) => R(D.asyncGeneratorFunction(e), "AsyncGeneratorFunction", e), "asyncGeneratorFunction"),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: /* @__PURE__ */ n((e) => R(D.asyncFunction(e), "AsyncFunction", e), "asyncFunction"),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: /* @__PURE__ */ n((e) => R(D.boundFunction(e), "Function", e), "boundFunction"),
    regExp: /* @__PURE__ */ n((e) => R(D.regExp(e), "RegExp", e), "regExp"),
    date: /* @__PURE__ */ n((e) => R(D.date(e), "Date", e), "date"),
    error: /* @__PURE__ */ n((e) => R(D.error(e), "Error", e), "error"),
    map: /* @__PURE__ */ n((e) => R(D.map(e), "Map", e), "map"),
    set: /* @__PURE__ */ n((e) => R(D.set(e), "Set", e), "set"),
    weakMap: /* @__PURE__ */ n((e) => R(D.weakMap(e), "WeakMap", e), "weakMap"),
    weakSet: /* @__PURE__ */ n((e) => R(D.weakSet(e), "WeakSet", e), "weakSet"),
    weakRef: /* @__PURE__ */ n((e) => R(D.weakRef(e), "WeakRef", e), "weakRef"),
    int8Array: /* @__PURE__ */ n((e) => R(D.int8Array(e), "Int8Array", e), "int8Array"),
    uint8Array: /* @__PURE__ */ n((e) => R(D.uint8Array(e), "Uint8Array", e), "uint8Array"),
    uint8ClampedArray: /* @__PURE__ */ n((e) => R(D.uint8ClampedArray(e), "Uint8ClampedArray", e), "uint8ClampedArray"),
    int16Array: /* @__PURE__ */ n((e) => R(D.int16Array(e), "Int16Array", e), "int16Array"),
    uint16Array: /* @__PURE__ */ n((e) => R(D.uint16Array(e), "Uint16Array", e), "uint16Array"),
    int32Array: /* @__PURE__ */ n((e) => R(D.int32Array(e), "Int32Array", e), "int32Array"),
    uint32Array: /* @__PURE__ */ n((e) => R(D.uint32Array(e), "Uint32Array", e), "uint32Array"),
    float32Array: /* @__PURE__ */ n((e) => R(D.float32Array(e), "Float32Array", e), "float32Array"),
    float64Array: /* @__PURE__ */ n((e) => R(D.float64Array(e), "Float64Array", e), "float64Array"),
    bigInt64Array: /* @__PURE__ */ n((e) => R(D.bigInt64Array(e), "BigInt64Array", e), "bigInt64Array"),
    bigUint64Array: /* @__PURE__ */ n((e) => R(D.bigUint64Array(e), "BigUint64Array", e), "bigUint64Array"),
    arrayBuffer: /* @__PURE__ */ n((e) => R(D.arrayBuffer(e), "ArrayBuffer", e), "arrayBuffer"),
    sharedArrayBuffer: /* @__PURE__ */ n((e) => R(D.sharedArrayBuffer(e), "SharedArrayBuffer", e), "sharedArrayBuffer"),
    dataView: /* @__PURE__ */ n((e) => R(D.dataView(e), "DataView", e), "dataView"),
    enumCase: /* @__PURE__ */ n((e, t) => R(D.enumCase(e, t), "EnumCase", e), "enumCase"),
    urlInstance: /* @__PURE__ */ n((e) => R(D.urlInstance(e), "URL", e), "urlInstance"),
    urlString: /* @__PURE__ */ n((e) => R(D.urlString(e), "string with a URL", e), "urlString"),
    truthy: /* @__PURE__ */ n((e) => R(D.truthy(e), "truthy", e), "truthy"),
    falsy: /* @__PURE__ */ n((e) => R(D.falsy(e), "falsy", e), "falsy"),
    nan: /* @__PURE__ */ n((e) => R(D.nan(e), "NaN", e), "nan"),
    primitive: /* @__PURE__ */ n((e) => R(D.primitive(e), "primitive", e), "primitive"),
    integer: /* @__PURE__ */ n((e) => R(D.integer(e), "integer", e), "integer"),
    safeInteger: /* @__PURE__ */ n((e) => R(D.safeInteger(e), "integer", e), "safeInteger"),
    plainObject: /* @__PURE__ */ n((e) => R(D.plainObject(e), "plain object", e), "plainObject"),
    typedArray: /* @__PURE__ */ n((e) => R(D.typedArray(e), "TypedArray", e), "typedArray"),
    arrayLike: /* @__PURE__ */ n((e) => R(D.arrayLike(e), "array-like", e), "arrayLike"),
    domElement: /* @__PURE__ */ n((e) => R(D.domElement(e), "HTMLElement", e), "domElement"),
    observable: /* @__PURE__ */ n((e) => R(D.observable(e), "Observable", e), "observable"),
    nodeStream: /* @__PURE__ */ n((e) => R(D.nodeStream(e), "Node.js Stream", e), "nodeStream"),
    infinite: /* @__PURE__ */ n((e) => R(D.infinite(e), "infinite number", e), "infinite"),
    emptyArray: /* @__PURE__ */ n((e) => R(D.emptyArray(e), "empty array", e), "emptyArray"),
    nonEmptyArray: /* @__PURE__ */ n((e) => R(D.nonEmptyArray(e), "non-empty array", e), "nonEmptyArray"),
    emptyString: /* @__PURE__ */ n((e) => R(D.emptyString(e), "empty string", e), "emptyString"),
    emptyStringOrWhitespace: /* @__PURE__ */ n((e) => R(D.emptyStringOrWhitespace(e), "empty string or whitespace", e), "emptyStringOrWhites\
pace"),
    nonEmptyString: /* @__PURE__ */ n((e) => R(D.nonEmptyString(e), "non-empty string", e), "nonEmptyString"),
    nonEmptyStringAndNotWhitespace: /* @__PURE__ */ n((e) => R(D.nonEmptyStringAndNotWhitespace(e), "non-empty string and not whitespace", e),
    "nonEmptyStringAndNotWhitespace"),
    emptyObject: /* @__PURE__ */ n((e) => R(D.emptyObject(e), "empty object", e), "emptyObject"),
    nonEmptyObject: /* @__PURE__ */ n((e) => R(D.nonEmptyObject(e), "non-empty object", e), "nonEmptyObject"),
    emptySet: /* @__PURE__ */ n((e) => R(D.emptySet(e), "empty set", e), "emptySet"),
    nonEmptySet: /* @__PURE__ */ n((e) => R(D.nonEmptySet(e), "non-empty set", e), "nonEmptySet"),
    emptyMap: /* @__PURE__ */ n((e) => R(D.emptyMap(e), "empty map", e), "emptyMap"),
    nonEmptyMap: /* @__PURE__ */ n((e) => R(D.nonEmptyMap(e), "non-empty map", e), "nonEmptyMap"),
    propertyKey: /* @__PURE__ */ n((e) => R(D.propertyKey(e), "PropertyKey", e), "propertyKey"),
    formData: /* @__PURE__ */ n((e) => R(D.formData(e), "FormData", e), "formData"),
    urlSearchParams: /* @__PURE__ */ n((e) => R(D.urlSearchParams(e), "URLSearchParams", e), "urlSearchParams"),
    // Numbers.
    evenInteger: /* @__PURE__ */ n((e) => R(D.evenInteger(e), "even integer", e), "evenInteger"),
    oddInteger: /* @__PURE__ */ n((e) => R(D.oddInteger(e), "odd integer", e), "oddInteger"),
    // Two arguments.
    directInstanceOf: /* @__PURE__ */ n((e, t) => R(D.directInstanceOf(e, t), "T", e), "directInstanceOf"),
    inRange: /* @__PURE__ */ n((e, t) => R(D.inRange(e, t), "in range", e), "inRange"),
    // Variadic functions.
    any: /* @__PURE__ */ n((e, ...t) => R(D.any(e, ...t), "predicate returns truthy for any value", t, { multipleValues: !0 }), "any"),
    all: /* @__PURE__ */ n((e, ...t) => R(D.all(e, ...t), "predicate returns truthy for all values", t, { multipleValues: !0 }), "all")
  };
  Object.defineProperties(D, {
    class: {
      value: D.class_
    },
    function: {
      value: D.function_
    },
    null: {
      value: D.null_
    }
  });
  Object.defineProperties(S, {
    class: {
      value: S.class_
    },
    function: {
      value: S.function_
    },
    null: {
      value: S.null_
    }
  });
  var m = D, a1 = C("events"), l1 = class extends Error {
    static {
      n(this, "CancelError");
    }
    constructor(e) {
      super(e || "Promise was canceled"), this.name = "CancelError";
    }
    get isCanceled() {
      return !0;
    }
  }, pl = class {
    static {
      n(this, "PCancelable");
    }
    static fn(e) {
      return (...t) => new pl((r, i, s) => {
        t.push(s), e(...t).then(r, i);
      });
    }
    constructor(e) {
      this._cancelHandlers = [], this._isPending = !0, this._isCanceled = !1, this._rejectOnCancel = !0, this._promise = new Promise((t, r) => {
        this._reject = r;
        let i = /* @__PURE__ */ n((u) => {
          (!this._isCanceled || !o.shouldReject) && (this._isPending = !1, t(u));
        }, "onResolve"), s = /* @__PURE__ */ n((u) => {
          this._isPending = !1, r(u);
        }, "onReject"), o = /* @__PURE__ */ n((u) => {
          if (!this._isPending)
            throw new Error("The `onCancel` handler was attached after the promise settled.");
          this._cancelHandlers.push(u);
        }, "onCancel");
        Object.defineProperties(o, {
          shouldReject: {
            get: /* @__PURE__ */ n(() => this._rejectOnCancel, "get"),
            set: /* @__PURE__ */ n((u) => {
              this._rejectOnCancel = u;
            }, "set")
          }
        }), e(i, s, o);
      });
    }
    then(e, t) {
      return this._promise.then(e, t);
    }
    catch(e) {
      return this._promise.catch(e);
    }
    finally(e) {
      return this._promise.finally(e);
    }
    cancel(e) {
      if (!(!this._isPending || this._isCanceled)) {
        if (this._isCanceled = !0, this._cancelHandlers.length > 0)
          try {
            for (let t of this._cancelHandlers)
              t();
          } catch (t) {
            this._reject(t);
            return;
          }
        this._rejectOnCancel && this._reject(new l1(e));
      }
    }
    get isCanceled() {
      return this._isCanceled;
    }
  };
  Object.setPrototypeOf(pl.prototype, Promise.prototype);
  function f1(e) {
    return m.object(e) && "_onResponse" in e;
  }
  n(f1, "isRequest");
  var ye = class extends Error {
    static {
      n(this, "RequestError");
    }
    constructor(e, t, r) {
      var i;
      if (super(e), Object.defineProperty(this, "input", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "stack", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "response", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "request", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "timings", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Error.captureStackTrace(this, this.constructor), this.name = "RequestError", this.code = t.code ?? "ERR_GOT_REQUEST_ERROR", this.input =
      t.input, f1(r) ? (Object.defineProperty(this, "request", {
        enumerable: !1,
        value: r
      }), Object.defineProperty(this, "response", {
        enumerable: !1,
        value: r.response
      }), this.options = r.options) : this.options = r, this.timings = (i = this.request) == null ? void 0 : i.timings, m.string(t.stack) &&
      m.string(this.stack)) {
        let s = this.stack.indexOf(this.message) + this.message.length, o = this.stack.slice(s).split(`
`).reverse(), u = t.stack.slice(t.stack.indexOf(t.message) + t.message.length).split(`
`).reverse();
        for (; u.length > 0 && u[0] === o[0]; )
          o.shift();
        this.stack = `${this.stack.slice(0, s)}${o.reverse().join(`
`)}${u.reverse().join(`
`)}`;
      }
    }
  }, h1 = class extends ye {
    static {
      n(this, "MaxRedirectsError");
    }
    constructor(e) {
      super(`Redirected ${e.options.maxRedirects} times. Aborting.`, {}, e), this.name = "MaxRedirectsError", this.code = "ERR_TOO_MANY_REDI\
RECTS";
    }
  }, ks = class extends ye {
    static {
      n(this, "HTTPError");
    }
    constructor(e) {
      super(`Response code ${e.statusCode} (${e.statusMessage})`, {}, e.request), this.name = "HTTPError", this.code = "ERR_NON_2XX_3XX_RESP\
ONSE";
    }
  }, c1 = class extends ye {
    static {
      n(this, "CacheError");
    }
    constructor(e, t) {
      super(e.message, e, t), this.name = "CacheError", this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_CACHE_ACCESS" : this.code;
    }
  }, gy = class extends ye {
    static {
      n(this, "UploadError");
    }
    constructor(e, t) {
      super(e.message, e, t), this.name = "UploadError", this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_UPLOAD" : this.code;
    }
  }, d1 = class extends ye {
    static {
      n(this, "TimeoutError");
    }
    constructor(e, t, r) {
      super(e.message, e, r), Object.defineProperty(this, "timings", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "event", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.name = "TimeoutError", this.event = e.event, this.timings = t;
    }
  }, yy = class extends ye {
    static {
      n(this, "ReadError");
    }
    constructor(e, t) {
      super(e.message, e, t), this.name = "ReadError", this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_READING_RESPONSE_STREAM" : this.
      code;
    }
  }, p1 = class extends ye {
    static {
      n(this, "RetryError");
    }
    constructor(e) {
      super("Retrying", {}, e), this.name = "RetryError", this.code = "ERR_RETRYING";
    }
  }, D1 = class extends ye {
    static {
      n(this, "AbortError");
    }
    constructor(e) {
      super("This operation was aborted.", {}, e), this.code = "ERR_ABORTED", this.name = "AbortError";
    }
  }, nb = me(C("process"), 1), rl = C("buffer"), m1 = C("stream"), by = C("url"), il = me(C("http"), 1), g1 = C("events"), y1 = C("util"), b1 = me(
  T3(), 1), v1 = /* @__PURE__ */ n((e) => {
    if (e.timings)
      return e.timings;
    let t = {
      start: Date.now(),
      socket: void 0,
      lookup: void 0,
      connect: void 0,
      secureConnect: void 0,
      upload: void 0,
      response: void 0,
      end: void 0,
      error: void 0,
      abort: void 0,
      phases: {
        wait: void 0,
        dns: void 0,
        tcp: void 0,
        tls: void 0,
        request: void 0,
        firstByte: void 0,
        download: void 0,
        total: void 0
      }
    };
    e.timings = t;
    let r = /* @__PURE__ */ n((u) => {
      u.once(g1.errorMonitor, () => {
        t.error = Date.now(), t.phases.total = t.error - t.start;
      });
    }, "handleError");
    r(e);
    let i = /* @__PURE__ */ n(() => {
      t.abort = Date.now(), t.phases.total = t.abort - t.start;
    }, "onAbort");
    e.prependOnceListener("abort", i);
    let s = /* @__PURE__ */ n((u) => {
      if (t.socket = Date.now(), t.phases.wait = t.socket - t.start, y1.types.isProxy(u))
        return;
      let a = /* @__PURE__ */ n(() => {
        t.lookup = Date.now(), t.phases.dns = t.lookup - t.socket;
      }, "lookupListener");
      u.prependOnceListener("lookup", a), (0, b1.default)(u, {
        connect: /* @__PURE__ */ n(() => {
          t.connect = Date.now(), t.lookup === void 0 && (u.removeListener("lookup", a), t.lookup = t.connect, t.phases.dns = t.lookup - t.socket),
          t.phases.tcp = t.connect - t.lookup;
        }, "connect"),
        secureConnect: /* @__PURE__ */ n(() => {
          t.secureConnect = Date.now(), t.phases.tls = t.secureConnect - t.connect;
        }, "secureConnect")
      });
    }, "onSocket");
    e.socket ? s(e.socket) : e.prependOnceListener("socket", s);
    let o = /* @__PURE__ */ n(() => {
      t.upload = Date.now(), t.phases.request = t.upload - (t.secureConnect ?? t.connect);
    }, "onUpload");
    return e.writableFinished ? o() : e.prependOnceListener("finish", o), e.prependOnceListener("response", (u) => {
      t.response = Date.now(), t.phases.firstByte = t.response - t.upload, u.timings = t, r(u), u.prependOnceListener("end", () => {
        e.off("abort", i), u.off("aborted", i), !t.phases.total && (t.end = Date.now(), t.phases.download = t.end - t.response, t.phases.total =
        t.end - t.start);
      }), u.prependOnceListener("aborted", i);
    }), t;
  }, "timer"), w1 = v1, _1 = me(C("events"), 1), Cs = me(C("url"), 1), E1 = me(C("crypto"), 1), sb = me(C("stream"), 1), C1 = "text/plain", F1 = "\
us-ascii", nl = /* @__PURE__ */ n((e, t) => t.some((r) => r instanceof RegExp ? r.test(e) : r === e), "testParameter"), x1 = /* @__PURE__ */ new Set(
  [
    "https:",
    "http:",
    "file:"
  ]), S1 = /* @__PURE__ */ n((e) => {
    try {
      let { protocol: t } = new URL(e);
      return t.endsWith(":") && !x1.has(t);
    } catch {
      return !1;
    }
  }, "hasCustomProtocol"), A1 = /* @__PURE__ */ n((e, { stripHash: t }) => {
    var r;
    let i = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
    if (!i)
      throw new Error(`Invalid URL: ${e}`);
    let { type: s, data: o, hash: u } = i.groups, a = s.split(";");
    u = t ? "" : u;
    let l = !1;
    a[a.length - 1] === "base64" && (a.pop(), l = !0);
    let f = ((r = a.shift()) == null ? void 0 : r.toLowerCase()) ?? "", d = [
      ...a.map((c) => {
        let [h, g = ""] = c.split("=").map((_) => _.trim());
        return h === "charset" && (g = g.toLowerCase(), g === F1) ? "" : `${h}${g ? `=${g}` : ""}`;
      }).filter(Boolean)
    ];
    return l && d.push("base64"), (d.length > 0 || f && f !== C1) && d.unshift(f), `data:${d.join(";")},${l ? o.trim() : o}${u ? `#${u}` : ""}`;
  }, "normalizeDataURL");
  function R1(e, t) {
    if (t = {
      defaultProtocol: "http",
      normalizeProtocol: !0,
      forceHttp: !1,
      forceHttps: !1,
      stripAuthentication: !0,
      stripHash: !1,
      stripTextFragment: !0,
      stripWWW: !0,
      removeQueryParameters: [/^utm_\w+/i],
      removeTrailingSlash: !0,
      removeSingleSlash: !0,
      removeDirectoryIndex: !1,
      removeExplicitPort: !1,
      sortQueryParameters: !0,
      ...t
    }, typeof t.defaultProtocol == "string" && !t.defaultProtocol.endsWith(":") && (t.defaultProtocol = `${t.defaultProtocol}:`), e = e.trim(),
    /^data:/i.test(e))
      return A1(e, t);
    if (S1(e))
      return e;
    let r = e.startsWith("//");
    !r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
    let s = new URL(e);
    if (t.forceHttp && t.forceHttps)
      throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
    if (t.forceHttp && s.protocol === "https:" && (s.protocol = "http:"), t.forceHttps && s.protocol === "http:" && (s.protocol = "https:"),
    t.stripAuthentication && (s.username = "", s.password = ""), t.stripHash ? s.hash = "" : t.stripTextFragment && (s.hash = s.hash.replace(
    /#?:~:text.*?$/i, "")), s.pathname) {
      let u = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g, a = 0, l = "";
      for (; ; ) {
        let p = u.exec(s.pathname);
        if (!p)
          break;
        let d = p[0], c = p.index, h = s.pathname.slice(a, c);
        l += h.replace(/\/{2,}/g, "/"), l += d, a = c + d.length;
      }
      let f = s.pathname.slice(a, s.pathname.length);
      l += f.replace(/\/{2,}/g, "/"), s.pathname = l;
    }
    if (s.pathname)
      try {
        s.pathname = decodeURI(s.pathname);
      } catch {
      }
    if (t.removeDirectoryIndex === !0 && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.
    length > 0) {
      let u = s.pathname.split("/"), a = u[u.length - 1];
      nl(a, t.removeDirectoryIndex) && (u = u.slice(0, -1), s.pathname = u.slice(1).join("/") + "/");
    }
    if (s.hostname && (s.hostname = s.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(s.
    hostname) && (s.hostname = s.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters))
      for (let u of [...s.searchParams.keys()])
        nl(u, t.removeQueryParameters) && s.searchParams.delete(u);
    if (!Array.isArray(t.keepQueryParameters) && t.removeQueryParameters === !0 && (s.search = ""), Array.isArray(t.keepQueryParameters) && t.
    keepQueryParameters.length > 0)
      for (let u of [...s.searchParams.keys()])
        nl(u, t.keepQueryParameters) || s.searchParams.delete(u);
    if (t.sortQueryParameters) {
      s.searchParams.sort();
      try {
        s.search = decodeURIComponent(s.search);
      } catch {
      }
    }
    t.removeTrailingSlash && (s.pathname = s.pathname.replace(/\/$/, "")), t.removeExplicitPort && s.port && (s.port = "");
    let o = e;
    return e = s.toString(), !t.removeSingleSlash && s.pathname === "/" && !o.endsWith("/") && s.hash === "" && (e = e.replace(/\/$/, "")), (t.
    removeTrailingSlash || s.pathname === "/") && s.hash === "" && t.removeSingleSlash && (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol &&
    (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e;
  }
  n(R1, "normalizeUrl");
  var T1 = me(Wy(), 1), sl = me(k3(), 1), B1 = C("stream");
  function cl(e) {
    return Object.fromEntries(Object.entries(e).map(([t, r]) => [t.toLowerCase(), r]));
  }
  n(cl, "lowercaseKeys");
  var vy = class extends B1.Readable {
    static {
      n(this, "Response");
    }
    statusCode;
    headers;
    body;
    url;
    constructor({ statusCode: e, headers: t, body: r, url: i }) {
      if (typeof e != "number")
        throw new TypeError("Argument `statusCode` should be a number");
      if (typeof t != "object")
        throw new TypeError("Argument `headers` should be an object");
      if (!(r instanceof Uint8Array))
        throw new TypeError("Argument `body` should be a buffer");
      if (typeof i != "string")
        throw new TypeError("Argument `url` should be a string");
      super({
        read() {
          this.push(r), this.push(null);
        }
      }), this.statusCode = e, this.headers = cl(t), this.body = r, this.url = i;
    }
  }, Fs = me(P3(), 1), k1 = [
    "aborted",
    "complete",
    "headers",
    "httpVersion",
    "httpVersionMinor",
    "httpVersionMajor",
    "method",
    "rawHeaders",
    "rawTrailers",
    "setTimeout",
    "socket",
    "statusCode",
    "statusMessage",
    "trailers",
    "url"
  ];
  function O1(e, t) {
    if (t._readableState.autoDestroy)
      throw new Error("The second stream must have the `autoDestroy` option set to `false`");
    let r = /* @__PURE__ */ new Set([...Object.keys(e), ...k1]), i = {};
    for (let s of r)
      s in t || (i[s] = {
        get() {
          let o = e[s];
          return typeof o == "function" ? o.bind(e) : o;
        },
        set(o) {
          e[s] = o;
        },
        enumerable: !0,
        configurable: !1
      });
    return Object.defineProperties(t, i), e.once("aborted", () => {
      t.destroy(), t.emit("aborted");
    }), e.once("close", () => {
      e.complete && t.readable ? t.once("end", () => {
        t.emit("close");
      }) : t.emit("close");
    }), t;
  }
  n(O1, "mimicResponse");
  var P1 = class extends Error {
    static {
      n(this, "RequestError2");
    }
    constructor(e) {
      super(e.message), Object.assign(this, e);
    }
  }, Ni = class extends Error {
    static {
      n(this, "CacheError2");
    }
    constructor(e) {
      super(e.message), Object.assign(this, e);
    }
  }, q1 = class {
    static {
      n(this, "CacheableRequest");
    }
    constructor(e, t) {
      this.hooks = /* @__PURE__ */ new Map(), this.request = () => (r, i) => {
        let s;
        if (typeof r == "string")
          s = ol(Cs.default.parse(r)), r = {};
        else if (r instanceof Cs.default.URL)
          s = ol(Cs.default.parse(r.toString())), r = {};
        else {
          let [d, ...c] = (r.path ?? "").split("?"), h = c.length > 0 ? `?${c.join("?")}` : "";
          s = ol({ ...r, pathname: d, search: h });
        }
        r = {
          headers: {},
          method: "GET",
          cache: !0,
          strictTtl: !1,
          automaticFailover: !1,
          ...r,
          ...I1(s)
        }, r.headers = Object.fromEntries(M1(r.headers).map(([d, c]) => [d.toLowerCase(), c]));
        let o = new _1.default(), u = R1(Cs.default.format(s), {
          stripWWW: !1,
          removeTrailingSlash: !1,
          stripAuthentication: !1
        }), a = `${r.method}:${u}`;
        r.body && r.method !== void 0 && ["POST", "PATCH", "PUT"].includes(r.method) && (r.body instanceof sb.default.Readable ? r.cache = !1 :
        a += `:${E1.default.createHash("md5").update(r.body).digest("hex")}`);
        let l = !1, f = !1, p = /* @__PURE__ */ n((d) => {
          f = !0;
          let c = !1, h = /* @__PURE__ */ n(() => {
          }, "requestErrorCallback"), g = new Promise((y) => {
            h = /* @__PURE__ */ n(() => {
              c || (c = !0, y());
            }, "requestErrorCallback");
          }), _ = /* @__PURE__ */ n(async (y) => {
            if (l) {
              y.status = y.statusCode;
              let F = sl.default.fromObject(l.cachePolicy).revalidatedPolicy(d, y);
              if (!F.modified) {
                y.resume(), await new Promise((E) => {
                  y.once("end", E);
                });
                let v = wy(F.policy.responseHeaders());
                y = new vy({ statusCode: l.statusCode, headers: v, body: l.body, url: l.url }), y.cachePolicy = F.policy, y.fromCache = !0;
              }
            }
            y.fromCache || (y.cachePolicy = new sl.default(d, y, d), y.fromCache = !1);
            let w;
            d.cache && y.cachePolicy.storable() ? (w = j1(y), (async () => {
              try {
                let F = T1.default.buffer(y);
                await Promise.race([
                  g,
                  new Promise((A) => y.once("end", A)),
                  new Promise((A) => y.once("close", A))
                  // eslint-disable-line no-promise-executor-return
                ]);
                let v = await F, E = {
                  url: y.url,
                  statusCode: y.fromCache ? l.statusCode : y.statusCode,
                  body: v,
                  cachePolicy: y.cachePolicy.toObject()
                }, x = d.strictTtl ? y.cachePolicy.timeToLive() : void 0;
                if (d.maxTtl && (x = x ? Math.min(x, d.maxTtl) : d.maxTtl), this.hooks.size > 0)
                  for (let A of this.hooks.keys())
                    E = await this.runHook(A, E, y);
                await this.cache.set(a, E, x);
              } catch (F) {
                o.emit("error", new Ni(F));
              }
            })()) : d.cache && l && (async () => {
              try {
                await this.cache.delete(a);
              } catch (F) {
                o.emit("error", new Ni(F));
              }
            })(), o.emit("response", w ?? y), typeof i == "function" && i(w ?? y);
          }, "handler");
          try {
            let y = this.cacheRequest(d, _);
            y.once("error", h), y.once("abort", h), y.once("destroy", h), o.emit("request", y);
          } catch (y) {
            o.emit("error", new P1(y));
          }
        }, "makeRequest");
        return (async () => {
          let d = /* @__PURE__ */ n(async (h) => {
            await Promise.resolve();
            let g = h.cache ? await this.cache.get(a) : void 0;
            if (typeof g > "u" && !h.forceRefresh) {
              p(h);
              return;
            }
            let _ = sl.default.fromObject(g.cachePolicy);
            if (_.satisfiesWithoutRevalidation(h) && !h.forceRefresh) {
              let y = wy(_.responseHeaders()), w = new vy({ statusCode: g.statusCode, headers: y, body: g.body, url: g.url });
              w.cachePolicy = _, w.fromCache = !0, o.emit("response", w), typeof i == "function" && i(w);
            } else _.satisfiesWithoutRevalidation(h) && Date.now() >= _.timeToLive() && h.forceRefresh ? (await this.cache.delete(a), h.headers =
            _.revalidationHeaders(h), p(h)) : (l = g, h.headers = _.revalidationHeaders(h), p(h));
          }, "get"), c = /* @__PURE__ */ n((h) => o.emit("error", new Ni(h)), "errorHandler");
          if (this.cache instanceof Fs.default) {
            let h = this.cache;
            h.once("error", c), o.on("error", () => h.removeListener("error", c)), o.on("response", () => h.removeListener("error", c));
          }
          try {
            await d(r);
          } catch (h) {
            r.automaticFailover && !f && p(r), o.emit("error", new Ni(h));
          }
        })(), o;
      }, this.addHook = (r, i) => {
        this.hooks.has(r) || this.hooks.set(r, i);
      }, this.removeHook = (r) => this.hooks.delete(r), this.getHook = (r) => this.hooks.get(r), this.runHook = async (r, ...i) => {
        var s;
        return (s = this.hooks.get(r)) == null ? void 0 : s(...i);
      }, t instanceof Fs.default ? this.cache = t : typeof t == "string" ? this.cache = new Fs.default({
        uri: t,
        namespace: "cacheable-request"
      }) : this.cache = new Fs.default({
        store: t,
        namespace: "cacheable-request"
      }), this.request = this.request.bind(this), this.cacheRequest = e;
    }
  }, M1 = Object.entries, j1 = /* @__PURE__ */ n((e) => {
    let t = new sb.PassThrough({ autoDestroy: !1 });
    return O1(e, t), e.pipe(t);
  }, "cloneResponse"), I1 = /* @__PURE__ */ n((e) => {
    let t = { ...e };
    return t.path = `${e.pathname || "/"}${e.search || ""}`, delete t.pathname, delete t.search, t;
  }, "urlObjectToRequestOptions"), ol = /* @__PURE__ */ n((e) => (
    // If url was parsed by url.parse or new URL:
    // - hostname will be set
    // - host will be hostname[:port]
    // - port will be set if it was explicit in the parsed string
    // Otherwise, url was from request options:
    // - hostname or host may be set
    // - host shall not have port encoded
    {
      protocol: e.protocol,
      auth: e.auth,
      hostname: e.hostname || e.host || "localhost",
      port: e.port,
      pathname: e.pathname,
      search: e.search
    }
  ), "normalizeUrlObject"), wy = /* @__PURE__ */ n((e) => {
    let t = [];
    for (let r of Object.keys(e))
      t[r.toLowerCase()] = e[r];
    return t;
  }, "convertHeaders"), L1 = q1, N1 = me(M3(), 1), H1 = me(Wy(), 1), yt = /* @__PURE__ */ n((e) => typeof e == "function", "isFunction"), U1 = /* @__PURE__ */ n(
  (e) => yt(e[Symbol.asyncIterator]), "isAsyncIterable");
  async function* W1(e) {
    let t = e.getReader();
    for (; ; ) {
      let { done: r, value: i } = await t.read();
      if (r)
        break;
      yield i;
    }
  }
  n(W1, "readStream");
  var $1 = /* @__PURE__ */ n((e) => {
    if (U1(e))
      return e;
    if (yt(e.getReader))
      return W1(e);
    throw new TypeError("Unsupported data source: Expected either ReadableStream or async iterable.");
  }, "getStreamIterator"), _y = "abcdefghijklmnopqrstuvwxyz0123456789";
  function z1() {
    let e = 16, t = "";
    for (; e--; )
      t += _y[Math.random() * _y.length << 0];
    return t;
  }
  n(z1, "createBoundary");
  var Ey = /* @__PURE__ */ n((e) => String(e).replace(/\r|\n/g, (t, r, i) => t === "\r" && i[r + 1] !== `
` || t === `
` && i[r - 1] !== "\r" ? `\r
` : t), "normalizeValue"), V1 = /* @__PURE__ */ n((e) => Object.prototype.toString.call(e).slice(8, -1).toLowerCase(), "getType");
  function Cy(e) {
    if (V1(e) !== "object")
      return !1;
    let t = Object.getPrototypeOf(e);
    return t == null ? !0 : (t.constructor && t.constructor.toString()) === Object.toString();
  }
  n(Cy, "isPlainObject");
  function Fy(e, t) {
    if (typeof t == "string") {
      for (let [r, i] of Object.entries(e))
        if (t.toLowerCase() === r.toLowerCase())
          return i;
    }
  }
  n(Fy, "getProperty");
  var G1 = /* @__PURE__ */ n((e) => new Proxy(e, {
    get: /* @__PURE__ */ n((t, r) => Fy(t, r), "get"),
    has: /* @__PURE__ */ n((t, r) => Fy(t, r) !== void 0, "has")
  }), "proxyHeaders"), Dl = /* @__PURE__ */ n((e) => !!(e && yt(e.constructor) && e[Symbol.toStringTag] === "FormData" && yt(e.append) && yt(
  e.getAll) && yt(e.entries) && yt(e[Symbol.iterator])), "isFormData"), xy = /* @__PURE__ */ n((e) => String(e).replace(/\r/g, "%0D").replace(
  /\n/g, "%0A").replace(/"/g, "%22"), "escapeName"), Yt = /* @__PURE__ */ n((e) => !!(e && typeof e == "object" && yt(e.constructor) && e[Symbol.
  toStringTag] === "File" && yt(e.stream) && e.name != null), "isFile"), Pi = /* @__PURE__ */ n(function(e, t, r, i, s) {
    if (i === "m")
      throw new TypeError("Private method is not writable");
    if (i === "a" && !s)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return i === "a" ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
  }, "__classPrivateFieldSet"), ie = /* @__PURE__ */ n(function(e, t, r, i) {
    if (r === "a" && !i)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
  }, "__classPrivateFieldGet"), qi, Ot, Mi, xs, ji, Kt, Ii, Li, Ss, ul, Sy, J1 = {
    enableAdditionalHeaders: !1
  }, As = { writable: !1, configurable: !1 }, Y1 = class {
    static {
      n(this, "FormDataEncoder");
    }
    constructor(e, t, r) {
      if (qi.add(this), Ot.set(this, `\r
`), Mi.set(this, void 0), xs.set(this, void 0), ji.set(this, "-".repeat(2)), Kt.set(this, new TextEncoder()), Ii.set(this, void 0), Li.set(this,
      void 0), Ss.set(this, void 0), !Dl(e))
        throw new TypeError("Expected first argument to be a FormData instance.");
      let i;
      if (Cy(t) ? r = t : i = t, i || (i = z1()), typeof i != "string")
        throw new TypeError("Expected boundary argument to be a string.");
      if (r && !Cy(r))
        throw new TypeError("Expected options argument to be an object.");
      Pi(this, Li, Array.from(e.entries()), "f"), Pi(this, Ss, { ...J1, ...r }, "f"), Pi(this, Mi, ie(this, Kt, "f").encode(ie(this, Ot, "f")),
      "f"), Pi(this, xs, ie(this, Mi, "f").byteLength, "f"), this.boundary = `form-data-boundary-${i}`, this.contentType = `multipart/form-d\
ata; boundary=${this.boundary}`, Pi(this, Ii, ie(this, Kt, "f").encode(`${ie(this, ji, "f")}${this.boundary}${ie(this, ji, "f")}${ie(this, Ot,
      "f").repeat(2)}`), "f");
      let s = {
        "Content-Type": this.contentType
      }, o = ie(this, qi, "m", Sy).call(this);
      o && (this.contentLength = o, s["Content-Length"] = o), this.headers = G1(Object.freeze(s)), Object.defineProperties(this, {
        boundary: As,
        contentType: As,
        contentLength: As,
        headers: As
      });
    }
    getContentLength() {
      return this.contentLength == null ? void 0 : Number(this.contentLength);
    }
    *values() {
      for (let [e, t] of ie(this, Li, "f")) {
        let r = Yt(t) ? t : ie(this, Kt, "f").encode(Ey(t));
        yield ie(this, qi, "m", ul).call(this, e, r), yield r, yield ie(this, Mi, "f");
      }
      yield ie(this, Ii, "f");
    }
    async *encode() {
      for (let e of this.values())
        Yt(e) ? yield* $1(e.stream()) : yield e;
    }
    [(Ot = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(),
    Kt = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(),
    qi = /* @__PURE__ */ new WeakSet(), ul = /* @__PURE__ */ n(function(t, r) {
      let i = "";
      i += `${ie(this, ji, "f")}${this.boundary}${ie(this, Ot, "f")}`, i += `Content-Disposition: form-data; name="${xy(t)}"`, Yt(r) && (i +=
      `; filename="${xy(r.name)}"${ie(this, Ot, "f")}`, i += `Content-Type: ${r.type || "application/octet-stream"}`);
      let s = Yt(r) ? r.size : r.byteLength;
      return ie(this, Ss, "f").enableAdditionalHeaders === !0 && s != null && !isNaN(s) && (i += `${ie(this, Ot, "f")}Content-Length: ${Yt(r) ?
      r.size : r.byteLength}`), ie(this, Kt, "f").encode(`${i}${ie(this, Ot, "f").repeat(2)}`);
    }, "_FormDataEncoder_getFieldHeader2"), Sy = /* @__PURE__ */ n(function() {
      let t = 0;
      for (let [r, i] of ie(this, Li, "f")) {
        let s = Yt(i) ? i : ie(this, Kt, "f").encode(Ey(i)), o = Yt(s) ? s.size : s.byteLength;
        if (o == null || isNaN(o))
          return;
        t += ie(this, qi, "m", ul).call(this, r, s).byteLength, t += o, t += ie(this, xs, "f");
      }
      return String(t + ie(this, Ii, "f").byteLength);
    }, "_FormDataEncoder_getContentLength2"), Symbol.iterator)]() {
      return this.values();
    }
    [Symbol.asyncIterator]() {
      return this.encode();
    }
  }, K1 = C("buffer"), X1 = C("util");
  function ob(e) {
    return m.nodeStream(e) && m.function_(e.getBoundary);
  }
  n(ob, "isFormData2");
  async function Q1(e, t) {
    if (t && "content-length" in t)
      return Number(t["content-length"]);
    if (!e)
      return 0;
    if (m.string(e))
      return K1.Buffer.byteLength(e);
    if (m.buffer(e))
      return e.length;
    if (ob(e))
      return (0, X1.promisify)(e.getLength.bind(e))();
  }
  n(Q1, "getBodySize");
  function ub(e, t, r) {
    let i = {};
    for (let s of r) {
      let o = /* @__PURE__ */ n((...u) => {
        t.emit(s, ...u);
      }, "eventFunction");
      i[s] = o, e.on(s, o);
    }
    return () => {
      for (let [s, o] of Object.entries(i))
        e.off(s, o);
    };
  }
  n(ub, "proxyEvents");
  var Z1 = me(C("net"), 1);
  function eA() {
    let e = [];
    return {
      once(t, r, i) {
        t.once(r, i), e.push({ origin: t, event: r, fn: i });
      },
      unhandleAll() {
        for (let t of e) {
          let { origin: r, event: i, fn: s } = t;
          r.removeListener(i, s);
        }
        e.length = 0;
      }
    };
  }
  n(eA, "unhandle");
  var Ay = Symbol("reentry"), tA = /* @__PURE__ */ n(() => {
  }, "noop"), ab = class extends Error {
    static {
      n(this, "TimeoutError2");
    }
    constructor(e, t) {
      super(`Timeout awaiting '${t}' for ${e}ms`), Object.defineProperty(this, "event", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.name = "TimeoutError", this.code = "ETIMEDOUT";
    }
  };
  function rA(e, t, r) {
    if (Ay in e)
      return tA;
    e[Ay] = !0;
    let i = [], { once: s, unhandleAll: o } = eA(), u = /* @__PURE__ */ n((_, y, w) => {
      var F;
      let v = setTimeout(y, _, _, w);
      (F = v.unref) == null || F.call(v);
      let E = /* @__PURE__ */ n(() => {
        clearTimeout(v);
      }, "cancel");
      return i.push(E), E;
    }, "addTimeout"), { host: a, hostname: l } = r, f = /* @__PURE__ */ n((_, y) => {
      e.destroy(new ab(_, y));
    }, "timeoutHandler"), p = /* @__PURE__ */ n(() => {
      for (let _ of i)
        _();
      o();
    }, "cancelTimeouts");
    if (e.once("error", (_) => {
      if (p(), e.listenerCount("error") === 0)
        throw _;
    }), typeof t.request < "u") {
      let _ = u(t.request, f, "request");
      s(e, "response", (y) => {
        s(y, "end", _);
      });
    }
    if (typeof t.socket < "u") {
      let { socket: _ } = t, y = /* @__PURE__ */ n(() => {
        f(_, "socket");
      }, "socketTimeoutHandler");
      e.setTimeout(_, y), i.push(() => {
        e.removeListener("timeout", y);
      });
    }
    let d = typeof t.lookup < "u", c = typeof t.connect < "u", h = typeof t.secureConnect < "u", g = typeof t.send < "u";
    return (d || c || h || g) && s(e, "socket", (_) => {
      let { socketPath: y } = e;
      if (_.connecting) {
        let w = !!(y ?? Z1.default.isIP(l ?? a ?? "") !== 0);
        if (d && !w && typeof _.address().address > "u") {
          let F = u(t.lookup, f, "lookup");
          s(_, "lookup", F);
        }
        if (c) {
          let F = /* @__PURE__ */ n(() => u(t.connect, f, "connect"), "timeConnect");
          w ? s(_, "connect", F()) : s(_, "lookup", (v) => {
            v === null && s(_, "connect", F());
          });
        }
        h && r.protocol === "https:" && s(_, "connect", () => {
          let F = u(t.secureConnect, f, "secureConnect");
          s(_, "secureConnect", F);
        });
      }
      if (g) {
        let w = /* @__PURE__ */ n(() => u(t.send, f, "send"), "timeRequest");
        _.connecting ? s(_, "connect", () => {
          s(e, "upload-complete", w());
        }) : s(e, "upload-complete", w());
      }
    }), typeof t.response < "u" && s(e, "upload-complete", () => {
      let _ = u(t.response, f, "response");
      s(e, "response", _);
    }), typeof t.read < "u" && s(e, "response", (_) => {
      let y = u(t.read, f, "read");
      s(_, "end", y);
    }), p;
  }
  n(rA, "timedOut");
  function iA(e) {
    e = e;
    let t = {
      protocol: e.protocol,
      hostname: m.string(e.hostname) && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
      host: e.host,
      hash: e.hash,
      search: e.search,
      pathname: e.pathname,
      href: e.href,
      path: `${e.pathname || ""}${e.search || ""}`
    };
    return m.string(e.port) && e.port.length > 0 && (t.port = Number(e.port)), (e.username || e.password) && (t.auth = `${e.username || ""}:${e.
    password || ""}`), t;
  }
  n(iA, "urlToOptions");
  var nA = class {
    static {
      n(this, "WeakableMap");
    }
    constructor() {
      Object.defineProperty(this, "weakMap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "map", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.weakMap = /* @__PURE__ */ new WeakMap(), this.map = /* @__PURE__ */ new Map();
    }
    set(e, t) {
      typeof e == "object" ? this.weakMap.set(e, t) : this.map.set(e, t);
    }
    get(e) {
      return typeof e == "object" ? this.weakMap.get(e) : this.map.get(e);
    }
    has(e) {
      return typeof e == "object" ? this.weakMap.has(e) : this.map.has(e);
    }
  }, sA = /* @__PURE__ */ n(({ attemptCount: e, retryOptions: t, error: r, retryAfter: i, computedValue: s }) => {
    if (r.name === "RetryError")
      return 1;
    if (e > t.limit)
      return 0;
    let o = t.methods.includes(r.options.method), u = t.errorCodes.includes(r.code), a = r.response && t.statusCodes.includes(r.response.statusCode);
    if (!o || !u && !a)
      return 0;
    if (r.response) {
      if (i)
        return i > s ? 0 : i;
      if (r.response.statusCode === 413)
        return 0;
    }
    let l = Math.random() * t.noise;
    return Math.min(2 ** (e - 1) * 1e3, t.backoffLimit) + l;
  }, "calculateRetryDelay"), oA = sA, uA = me(C("process"), 1), al = C("util"), Xt = C("url"), aA = C("tls"), lA = me(C("http"), 1), fA = me(
  C("https"), 1), kr = C("dns"), ll = C("util"), hA = me(C("os"), 1), { Resolver: Ry } = kr.promises, Br = Symbol("cacheableLookupCreateConn\
ection"), fl = Symbol("cacheableLookupInstance"), Ty = Symbol("expires"), cA = typeof kr.ALL == "number", By = /* @__PURE__ */ n((e) => {
    if (!(e && typeof e.createConnection == "function"))
      throw new Error("Expected an Agent instance as the first argument");
  }, "verifyAgent"), dA = /* @__PURE__ */ n((e) => {
    for (let t of e)
      t.family !== 6 && (t.address = `::ffff:${t.address}`, t.family = 6);
  }, "map4to6"), ky = /* @__PURE__ */ n(() => {
    let e = !1, t = !1;
    for (let r of Object.values(hA.default.networkInterfaces()))
      for (let i of r)
        if (!i.internal && (i.family === "IPv6" ? t = !0 : e = !0, e && t))
          return { has4: e, has6: t };
    return { has4: e, has6: t };
  }, "getIfaceInfo"), pA = /* @__PURE__ */ n((e) => Symbol.iterator in e, "isIterable"), Rs = /* @__PURE__ */ n((e) => e.catch((t) => {
    if (t.code === "ENODATA" || t.code === "ENOTFOUND" || t.code === "ENOENT")
      return [];
    throw t;
  }), "ignoreNoResultErrors"), Oy = { ttl: !0 }, DA = { all: !0 }, mA = { all: !0, family: 4 }, gA = { all: !0, family: 6 }, yA = class {
    static {
      n(this, "CacheableLookup");
    }
    constructor({
      cache: e = /* @__PURE__ */ new Map(),
      maxTtl: t = 1 / 0,
      fallbackDuration: r = 3600,
      errorTtl: i = 0.15,
      resolver: s = new Ry(),
      lookup: o = kr.lookup
    } = {}) {
      if (this.maxTtl = t, this.errorTtl = i, this._cache = e, this._resolver = s, this._dnsLookup = o && (0, ll.promisify)(o), this.stats =
      {
        cache: 0,
        query: 0
      }, this._resolver instanceof Ry ? (this._resolve4 = this._resolver.resolve4.bind(this._resolver), this._resolve6 = this._resolver.resolve6.
      bind(this._resolver)) : (this._resolve4 = (0, ll.promisify)(this._resolver.resolve4.bind(this._resolver)), this._resolve6 = (0, ll.promisify)(
      this._resolver.resolve6.bind(this._resolver))), this._iface = ky(), this._pending = {}, this._nextRemovalTime = !1, this._hostnamesToFallback =
      /* @__PURE__ */ new Set(), this.fallbackDuration = r, r > 0) {
        let u = setInterval(() => {
          this._hostnamesToFallback.clear();
        }, r * 1e3);
        u.unref && u.unref(), this._fallbackInterval = u;
      }
      this.lookup = this.lookup.bind(this), this.lookupAsync = this.lookupAsync.bind(this);
    }
    set servers(e) {
      this.clear(), this._resolver.setServers(e);
    }
    get servers() {
      return this._resolver.getServers();
    }
    lookup(e, t, r) {
      if (typeof t == "function" ? (r = t, t = {}) : typeof t == "number" && (t = {
        family: t
      }), !r)
        throw new Error("Callback must be a function.");
      this.lookupAsync(e, t).then((i) => {
        t.all ? r(null, i) : r(null, i.address, i.family, i.expires, i.ttl, i.source);
      }, r);
    }
    async lookupAsync(e, t = {}) {
      typeof t == "number" && (t = {
        family: t
      });
      let r = await this.query(e);
      if (t.family === 6) {
        let i = r.filter((s) => s.family === 6);
        t.hints & kr.V4MAPPED && (cA && t.hints & kr.ALL || i.length === 0) ? dA(r) : r = i;
      } else t.family === 4 && (r = r.filter((i) => i.family === 4));
      if (t.hints & kr.ADDRCONFIG) {
        let { _iface: i } = this;
        r = r.filter((s) => s.family === 6 ? i.has6 : i.has4);
      }
      if (r.length === 0) {
        let i = new Error(`cacheableLookup ENOTFOUND ${e}`);
        throw i.code = "ENOTFOUND", i.hostname = e, i;
      }
      return t.all ? r : r[0];
    }
    async query(e) {
      let t = "cache", r = await this._cache.get(e);
      if (r && this.stats.cache++, !r) {
        let i = this._pending[e];
        if (i)
          this.stats.cache++, r = await i;
        else {
          t = "query";
          let s = this.queryAndCache(e);
          this._pending[e] = s, this.stats.query++;
          try {
            r = await s;
          } finally {
            delete this._pending[e];
          }
        }
      }
      return r = r.map((i) => ({ ...i, source: t })), r;
    }
    async _resolve(e) {
      let [t, r] = await Promise.all([
        Rs(this._resolve4(e, Oy)),
        Rs(this._resolve6(e, Oy))
      ]), i = 0, s = 0, o = 0, u = Date.now();
      for (let a of t)
        a.family = 4, a.expires = u + a.ttl * 1e3, i = Math.max(i, a.ttl);
      for (let a of r)
        a.family = 6, a.expires = u + a.ttl * 1e3, s = Math.max(s, a.ttl);
      return t.length > 0 ? r.length > 0 ? o = Math.min(i, s) : o = i : o = s, {
        entries: [
          ...t,
          ...r
        ],
        cacheTtl: o
      };
    }
    async _lookup(e) {
      try {
        let [t, r] = await Promise.all([
          // Passing {all: true} doesn't return all IPv4 and IPv6 entries.
          // See https://github.com/szmarczak/cacheable-lookup/issues/42
          Rs(this._dnsLookup(e, mA)),
          Rs(this._dnsLookup(e, gA))
        ]);
        return {
          entries: [
            ...t,
            ...r
          ],
          cacheTtl: 0
        };
      } catch {
        return {
          entries: [],
          cacheTtl: 0
        };
      }
    }
    async _set(e, t, r) {
      if (this.maxTtl > 0 && r > 0) {
        r = Math.min(r, this.maxTtl) * 1e3, t[Ty] = Date.now() + r;
        try {
          await this._cache.set(e, t, r);
        } catch (i) {
          this.lookupAsync = async () => {
            let s = new Error("Cache Error. Please recreate the CacheableLookup instance.");
            throw s.cause = i, s;
          };
        }
        pA(this._cache) && this._tick(r);
      }
    }
    async queryAndCache(e) {
      if (this._hostnamesToFallback.has(e))
        return this._dnsLookup(e, DA);
      let t = await this._resolve(e);
      t.entries.length === 0 && this._dnsLookup && (t = await this._lookup(e), t.entries.length !== 0 && this.fallbackDuration > 0 && this._hostnamesToFallback.
      add(e));
      let r = t.entries.length === 0 ? this.errorTtl : t.cacheTtl;
      return await this._set(e, t.entries, r), t.entries;
    }
    _tick(e) {
      let t = this._nextRemovalTime;
      (!t || e < t) && (clearTimeout(this._removalTimeout), this._nextRemovalTime = e, this._removalTimeout = setTimeout(() => {
        this._nextRemovalTime = !1;
        let r = 1 / 0, i = Date.now();
        for (let [s, o] of this._cache) {
          let u = o[Ty];
          i >= u ? this._cache.delete(s) : u < r && (r = u);
        }
        r !== 1 / 0 && this._tick(r - i);
      }, e), this._removalTimeout.unref && this._removalTimeout.unref());
    }
    install(e) {
      if (By(e), Br in e)
        throw new Error("CacheableLookup has been already installed");
      e[Br] = e.createConnection, e[fl] = this, e.createConnection = (t, r) => ("lookup" in t || (t.lookup = this.lookup), e[Br](t, r));
    }
    uninstall(e) {
      if (By(e), e[Br]) {
        if (e[fl] !== this)
          throw new Error("The agent is not owned by this CacheableLookup instance");
        e.createConnection = e[Br], delete e[Br], delete e[fl];
      }
    }
    updateInterfaceInfo() {
      let { _iface: e } = this;
      this._iface = ky(), (e.has4 && !this._iface.has4 || e.has6 && !this._iface.has6) && this._cache.clear();
    }
    clear(e) {
      if (e) {
        this._cache.delete(e);
        return;
      }
      this._cache.clear();
    }
  }, bA = me(G3(), 1);
  function vA(e) {
    let t = [], r = e.split(",");
    for (let i of r) {
      let [s, ...o] = i.split(";"), u = s.trim();
      if (u[0] !== "<" || u[u.length - 1] !== ">")
        throw new Error(`Invalid format of the Link header reference: ${u}`);
      let a = u.slice(1, -1), l = {};
      if (o.length === 0)
        throw new Error(`Unexpected end of Link header parameters: ${o.join(";")}`);
      for (let f of o) {
        let p = f.trim(), d = p.indexOf("=");
        if (d === -1)
          throw new Error(`Failed to parse Link header: ${e}`);
        let c = p.slice(0, d).trim(), h = p.slice(d + 1).trim();
        l[c] = h;
      }
      t.push({
        reference: a,
        parameters: l
      });
    }
    return t;
  }
  n(vA, "parseLinkHeader");
  var [Py, wA] = uA.default.versions.node.split(".").map(Number);
  function _A(e) {
    for (let t in e) {
      let r = e[t];
      S.any([m.string, m.number, m.boolean, m.null_, m.undefined], r);
    }
  }
  n(_A, "validateSearchParameters");
  var EA = /* @__PURE__ */ new Map(), Ts, CA = /* @__PURE__ */ n(() => Ts || (Ts = new yA(), Ts), "getGlobalDnsCache"), FA = {
    request: void 0,
    agent: {
      http: void 0,
      https: void 0,
      http2: void 0
    },
    h2session: void 0,
    decompress: !0,
    timeout: {
      connect: void 0,
      lookup: void 0,
      read: void 0,
      request: void 0,
      response: void 0,
      secureConnect: void 0,
      send: void 0,
      socket: void 0
    },
    prefixUrl: "",
    body: void 0,
    form: void 0,
    json: void 0,
    cookieJar: void 0,
    ignoreInvalidCookies: !1,
    searchParams: void 0,
    dnsLookup: void 0,
    dnsCache: void 0,
    context: {},
    hooks: {
      init: [],
      beforeRequest: [],
      beforeError: [],
      beforeRedirect: [],
      beforeRetry: [],
      afterResponse: []
    },
    followRedirect: !0,
    maxRedirects: 10,
    cache: void 0,
    throwHttpErrors: !0,
    username: "",
    password: "",
    http2: !1,
    allowGetBody: !1,
    headers: {
      "user-agent": "got (https://github.com/sindresorhus/got)"
    },
    methodRewriting: !1,
    dnsLookupIpVersion: void 0,
    parseJson: JSON.parse,
    stringifyJson: JSON.stringify,
    retry: {
      limit: 2,
      methods: [
        "GET",
        "PUT",
        "HEAD",
        "DELETE",
        "OPTIONS",
        "TRACE"
      ],
      statusCodes: [
        408,
        413,
        429,
        500,
        502,
        503,
        504,
        521,
        522,
        524
      ],
      errorCodes: [
        "ETIMEDOUT",
        "ECONNRESET",
        "EADDRINUSE",
        "ECONNREFUSED",
        "EPIPE",
        "ENOTFOUND",
        "ENETUNREACH",
        "EAI_AGAIN"
      ],
      maxRetryAfter: void 0,
      calculateDelay: /* @__PURE__ */ n(({ computedValue: e }) => e, "calculateDelay"),
      backoffLimit: Number.POSITIVE_INFINITY,
      noise: 100
    },
    localAddress: void 0,
    method: "GET",
    createConnection: void 0,
    cacheOptions: {
      shared: void 0,
      cacheHeuristic: void 0,
      immutableMinTimeToLive: void 0,
      ignoreCargoCult: void 0
    },
    https: {
      alpnProtocols: void 0,
      rejectUnauthorized: void 0,
      checkServerIdentity: void 0,
      certificateAuthority: void 0,
      key: void 0,
      certificate: void 0,
      passphrase: void 0,
      pfx: void 0,
      ciphers: void 0,
      honorCipherOrder: void 0,
      minVersion: void 0,
      maxVersion: void 0,
      signatureAlgorithms: void 0,
      tlsSessionLifetime: void 0,
      dhparam: void 0,
      ecdhCurve: void 0,
      certificateRevocationLists: void 0
    },
    encoding: void 0,
    resolveBodyOnly: !1,
    isStream: !1,
    responseType: "text",
    url: void 0,
    pagination: {
      transform(e) {
        return e.request.options.responseType === "json" ? e.body : JSON.parse(e.body);
      },
      paginate({ response: e }) {
        let t = e.headers.link;
        if (typeof t != "string" || t.trim() === "")
          return !1;
        let i = vA(t).find((s) => s.parameters.rel === "next" || s.parameters.rel === '"next"');
        return i ? {
          url: new Xt.URL(i.reference, e.url)
        } : !1;
      },
      filter: /* @__PURE__ */ n(() => !0, "filter"),
      shouldContinue: /* @__PURE__ */ n(() => !0, "shouldContinue"),
      countLimit: Number.POSITIVE_INFINITY,
      backoff: 0,
      requestLimit: 1e4,
      stackAllItems: !1
    },
    setHost: !0,
    maxHeaderSize: void 0,
    signal: void 0,
    enableUnixSockets: !0
  }, xA = /* @__PURE__ */ n((e) => {
    let { hooks: t, retry: r } = e, i = {
      ...e,
      context: { ...e.context },
      cacheOptions: { ...e.cacheOptions },
      https: { ...e.https },
      agent: { ...e.agent },
      headers: { ...e.headers },
      retry: {
        ...r,
        errorCodes: [...r.errorCodes],
        methods: [...r.methods],
        statusCodes: [...r.statusCodes]
      },
      timeout: { ...e.timeout },
      hooks: {
        init: [...t.init],
        beforeRequest: [...t.beforeRequest],
        beforeError: [...t.beforeError],
        beforeRedirect: [...t.beforeRedirect],
        beforeRetry: [...t.beforeRetry],
        afterResponse: [...t.afterResponse]
      },
      searchParams: e.searchParams ? new Xt.URLSearchParams(e.searchParams) : void 0,
      pagination: { ...e.pagination }
    };
    return i.url !== void 0 && (i.prefixUrl = ""), i;
  }, "cloneInternals"), SA = /* @__PURE__ */ n((e) => {
    let { hooks: t, retry: r } = e, i = { ...e };
    return m.object(e.context) && (i.context = { ...e.context }), m.object(e.cacheOptions) && (i.cacheOptions = { ...e.cacheOptions }), m.object(
    e.https) && (i.https = { ...e.https }), m.object(e.cacheOptions) && (i.cacheOptions = { ...i.cacheOptions }), m.object(e.agent) && (i.agent =
    { ...e.agent }), m.object(e.headers) && (i.headers = { ...e.headers }), m.object(r) && (i.retry = { ...r }, m.array(r.errorCodes) && (i.
    retry.errorCodes = [...r.errorCodes]), m.array(r.methods) && (i.retry.methods = [...r.methods]), m.array(r.statusCodes) && (i.retry.statusCodes =
    [...r.statusCodes])), m.object(e.timeout) && (i.timeout = { ...e.timeout }), m.object(t) && (i.hooks = {
      ...t
    }, m.array(t.init) && (i.hooks.init = [...t.init]), m.array(t.beforeRequest) && (i.hooks.beforeRequest = [...t.beforeRequest]), m.array(
    t.beforeError) && (i.hooks.beforeError = [...t.beforeError]), m.array(t.beforeRedirect) && (i.hooks.beforeRedirect = [...t.beforeRedirect]),
    m.array(t.beforeRetry) && (i.hooks.beforeRetry = [...t.beforeRetry]), m.array(t.afterResponse) && (i.hooks.afterResponse = [...t.afterResponse])),
    m.object(e.pagination) && (i.pagination = { ...e.pagination }), i;
  }, "cloneRaw"), AA = /* @__PURE__ */ n((e) => {
    let t = [e.timeout.socket, e.timeout.connect, e.timeout.lookup, e.timeout.request, e.timeout.secureConnect].filter((r) => typeof r == "n\
umber");
    if (t.length > 0)
      return Math.min(...t);
  }, "getHttp2TimeoutOption"), qy = /* @__PURE__ */ n((e, t, r) => {
    var i;
    let s = (i = e.hooks) == null ? void 0 : i.init;
    if (s)
      for (let o of s)
        o(t, r);
  }, "init"), bt = class {
    static {
      n(this, "Options");
    }
    constructor(e, t, r) {
      if (Object.defineProperty(this, "_unixOptions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_internals", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_merging", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_init", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), S.any([m.string, m.urlInstance, m.object, m.undefined], e), S.any([m.object, m.undefined], t), S.any([m.object, m.undefined], r), e instanceof
      bt || t instanceof bt)
        throw new TypeError("The defaults must be passed as the third argument");
      this._internals = xA(r?._internals ?? r ?? FA), this._init = [...r?._init ?? []], this._merging = !1, this._unixOptions = void 0;
      try {
        if (m.plainObject(e))
          try {
            this.merge(e), this.merge(t);
          } finally {
            this.url = e.url;
          }
        else
          try {
            this.merge(t);
          } finally {
            if (t?.url !== void 0)
              if (e === void 0)
                this.url = t.url;
              else
                throw new TypeError("The `url` option is mutually exclusive with the `input` argument");
            else e !== void 0 && (this.url = e);
          }
      } catch (i) {
        throw i.options = this, i;
      }
    }
    merge(e) {
      if (e) {
        if (e instanceof bt) {
          for (let t of e._init)
            this.merge(t);
          return;
        }
        e = SA(e), qy(this, e, this), qy(e, e, this), this._merging = !0, "isStream" in e && (this.isStream = e.isStream);
        try {
          let t = !1;
          for (let r in e)
            if (!(r === "mutableDefaults" || r === "handlers") && r !== "url") {
              if (!(r in this))
                throw new Error(`Unexpected option: ${r}`);
              this[r] = e[r], t = !0;
            }
          t && this._init.push(e);
        } finally {
          this._merging = !1;
        }
      }
    }
    /**
        Custom request function.
        The main purpose of this is to [support HTTP2 using a wrapper](https://github.com/szmarczak/http2-wrapper).
    
        @default http.request | https.request
        */
    get request() {
      return this._internals.request;
    }
    set request(e) {
      S.any([m.function_, m.undefined], e), this._internals.request = e;
    }
    /**
        An object representing `http`, `https` and `http2` keys for [`http.Agent`](https://nodejs.org/api/http.html#http_class_http_agent), [`https.Agent`](https://nodejs.org/api/https.html#https_class_https_agent) and [`http2wrapper.Agent`](https://github.com/szmarczak/http2-wrapper#new-http2agentoptions) instance.
        This is necessary because a request to one protocol might redirect to another.
        In such a scenario, Got will switch over to the right protocol agent for you.
    
        If a key is not present, it will default to a global agent.
    
        @example
        ```
        import got from 'got';
        import HttpAgent from 'agentkeepalive';
    
        const {HttpsAgent} = HttpAgent;
    
        await got('https://sindresorhus.com', {
            agent: {
                http: new HttpAgent(),
                https: new HttpsAgent()
            }
        });
        ```
        */
    get agent() {
      return this._internals.agent;
    }
    set agent(e) {
      S.plainObject(e);
      for (let t in e) {
        if (!(t in this._internals.agent))
          throw new TypeError(`Unexpected agent option: ${t}`);
        S.any([m.object, m.undefined], e[t]);
      }
      this._merging ? Object.assign(this._internals.agent, e) : this._internals.agent = { ...e };
    }
    get h2session() {
      return this._internals.h2session;
    }
    set h2session(e) {
      this._internals.h2session = e;
    }
    /**
        Decompress the response automatically.
    
        This will set the `accept-encoding` header to `gzip, deflate, br` unless you set it yourself.
    
        If this is disabled, a compressed response is returned as a `Buffer`.
        This may be useful if you want to handle decompression yourself or stream the raw compressed data.
    
        @default true
        */
    get decompress() {
      return this._internals.decompress;
    }
    set decompress(e) {
      S.boolean(e), this._internals.decompress = e;
    }
    /**
        Milliseconds to wait for the server to end the response before aborting the request with `got.TimeoutError` error (a.k.a. `request` property).
        By default, there's no timeout.
    
        This also accepts an `object` with the following fields to constrain the duration of each phase of the request lifecycle:
    
        - `lookup` starts when a socket is assigned and ends when the hostname has been resolved.
            Does not apply when using a Unix domain socket.
        - `connect` starts when `lookup` completes (or when the socket is assigned if lookup does not apply to the request) and ends when the socket is connected.
        - `secureConnect` starts when `connect` completes and ends when the handshaking process completes (HTTPS only).
        - `socket` starts when the socket is connected. See [request.setTimeout](https://nodejs.org/api/http.html#http_request_settimeout_timeout_callback).
        - `response` starts when the request has been written to the socket and ends when the response headers are received.
        - `send` starts when the socket is connected and ends with the request has been written to the socket.
        - `request` starts when the request is initiated and ends when the response's end event fires.
        */
    get timeout() {
      return this._internals.timeout;
    }
    set timeout(e) {
      S.plainObject(e);
      for (let t in e) {
        if (!(t in this._internals.timeout))
          throw new Error(`Unexpected timeout option: ${t}`);
        S.any([m.number, m.undefined], e[t]);
      }
      this._merging ? Object.assign(this._internals.timeout, e) : this._internals.timeout = { ...e };
    }
    /**
        When specified, `prefixUrl` will be prepended to `url`.
        The prefix can be any valid URL, either relative or absolute.
        A trailing slash `/` is optional - one will be added automatically.
    
        __Note__: `prefixUrl` will be ignored if the `url` argument is a URL instance.
    
        __Note__: Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion.
        For example, when the prefix URL is `https://example.com/foo` and the input is `/bar`, there's ambiguity whether the resulting URL would become `https://example.com/foo/bar` or `https://example.com/bar`.
        The latter is used by browsers.
    
        __Tip__: Useful when used with `got.extend()` to create niche-specific Got instances.
    
        __Tip__: You can change `prefixUrl` using hooks as long as the URL still includes the `prefixUrl`.
        If the URL doesn't include it anymore, it will throw.
    
        @example
        ```
        import got from 'got';
    
        await got('unicorn', {prefixUrl: 'https://cats.com'});
        //=> 'https://cats.com/unicorn'
    
        const instance = got.extend({
            prefixUrl: 'https://google.com'
        });
    
        await instance('unicorn', {
            hooks: {
                beforeRequest: [
                    options => {
                        options.prefixUrl = 'https://cats.com';
                    }
                ]
            }
        });
        //=> 'https://cats.com/unicorn'
        ```
        */
    get prefixUrl() {
      return this._internals.prefixUrl;
    }
    set prefixUrl(e) {
      if (S.any([m.string, m.urlInstance], e), e === "") {
        this._internals.prefixUrl = "";
        return;
      }
      if (e = e.toString(), e.endsWith("/") || (e += "/"), this._internals.prefixUrl && this._internals.url) {
        let { href: t } = this._internals.url;
        this._internals.url.href = e + t.slice(this._internals.prefixUrl.length);
      }
      this._internals.prefixUrl = e;
    }
    /**
        __Note #1__: The `body` option cannot be used with the `json` or `form` option.
    
        __Note #2__: If you provide this option, `got.stream()` will be read-only.
    
        __Note #3__: If you provide a payload with the `GET` or `HEAD` method, it will throw a `TypeError` unless the method is `GET` and the `allowGetBody` option is set to `true`.
    
        __Note #4__: This option is not enumerable and will not be merged with the instance defaults.
    
        The `content-length` header will be automatically set if `body` is a `string` / `Buffer` / [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) / [`form-data` instance](https://github.com/form-data/form-data), and `content-length` and `transfer-encoding` are not manually set in `options.headers`.
    
        Since Got 12, the `content-length` is not automatically set when `body` is a `fs.createReadStream`.
        */
    get body() {
      return this._internals.body;
    }
    set body(e) {
      S.any([m.string, m.buffer, m.nodeStream, m.generator, m.asyncGenerator, Dl, m.undefined], e), m.nodeStream(e) && S.truthy(e.readable),
      e !== void 0 && (S.undefined(this._internals.form), S.undefined(this._internals.json)), this._internals.body = e;
    }
    /**
        The form body is converted to a query string using [`(new URLSearchParams(object)).toString()`](https://nodejs.org/api/url.html#url_constructor_new_urlsearchparams_obj).
    
        If the `Content-Type` header is not present, it will be set to `application/x-www-form-urlencoded`.
    
        __Note #1__: If you provide this option, `got.stream()` will be read-only.
    
        __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
        */
    get form() {
      return this._internals.form;
    }
    set form(e) {
      S.any([m.plainObject, m.undefined], e), e !== void 0 && (S.undefined(this._internals.body), S.undefined(this._internals.json)), this._internals.
      form = e;
    }
    /**
        JSON body. If the `Content-Type` header is not set, it will be set to `application/json`.
    
        __Note #1__: If you provide this option, `got.stream()` will be read-only.
    
        __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
        */
    get json() {
      return this._internals.json;
    }
    set json(e) {
      e !== void 0 && (S.undefined(this._internals.body), S.undefined(this._internals.form)), this._internals.json = e;
    }
    /**
        The URL to request, as a string, a [`https.request` options object](https://nodejs.org/api/https.html#https_https_request_options_callback), or a [WHATWG `URL`](https://nodejs.org/api/url.html#url_class_url).
    
        Properties from `options` will override properties in the parsed `url`.
    
        If no protocol is specified, it will throw a `TypeError`.
    
        __Note__: The query string is **not** parsed as search params.
    
        @example
        ```
        await got('https://example.com/?query=a b'); //=> https://example.com/?query=a%20b
        await got('https://example.com/', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
    
        // The query string is overridden by `searchParams`
        await got('https://example.com/?query=a b', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
        ```
        */
    get url() {
      return this._internals.url;
    }
    set url(e) {
      if (S.any([m.string, m.urlInstance, m.undefined], e), e === void 0) {
        this._internals.url = void 0;
        return;
      }
      if (m.string(e) && e.startsWith("/"))
        throw new Error("`url` must not start with a slash");
      let t = `${this.prefixUrl}${e.toString()}`, r = new Xt.URL(t);
      if (this._internals.url = r, decodeURI(t), r.protocol === "unix:" && (r.href = `http://unix${r.pathname}${r.search}`), r.protocol !== "\
http:" && r.protocol !== "https:") {
        let i = new Error(`Unsupported protocol: ${r.protocol}`);
        throw i.code = "ERR_UNSUPPORTED_PROTOCOL", i;
      }
      if (this._internals.username && (r.username = this._internals.username, this._internals.username = ""), this._internals.password && (r.
      password = this._internals.password, this._internals.password = ""), this._internals.searchParams && (r.search = this._internals.searchParams.
      toString(), this._internals.searchParams = void 0), r.hostname === "unix") {
        if (!this._internals.enableUnixSockets)
          throw new Error("Using UNIX domain sockets but option `enableUnixSockets` is not enabled");
        let i = /(?<socketPath>.+?):(?<path>.+)/.exec(`${r.pathname}${r.search}`);
        if (i?.groups) {
          let { socketPath: s, path: o } = i.groups;
          this._unixOptions = {
            socketPath: s,
            path: o,
            host: ""
          };
        } else
          this._unixOptions = void 0;
        return;
      }
      this._unixOptions = void 0;
    }
    /**
        Cookie support. You don't have to care about parsing or how to store them.
    
        __Note__: If you provide this option, `options.headers.cookie` will be overridden.
        */
    get cookieJar() {
      return this._internals.cookieJar;
    }
    set cookieJar(e) {
      if (S.any([m.object, m.undefined], e), e === void 0) {
        this._internals.cookieJar = void 0;
        return;
      }
      let { setCookie: t, getCookieString: r } = e;
      S.function_(t), S.function_(r), t.length === 4 && r.length === 0 ? (t = (0, al.promisify)(t.bind(e)), r = (0, al.promisify)(r.bind(e)),
      this._internals.cookieJar = {
        setCookie: t,
        getCookieString: r
      }) : this._internals.cookieJar = e;
    }
    /**
        You can abort the `request` using [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
    
        *Requires Node.js 16 or later.*
    
        @example
        ```
        import got from 'got';
    
        const abortController = new AbortController();
    
        const request = got('https://httpbin.org/anything', {
            signal: abortController.signal
        });
    
        setTimeout(() => {
            abortController.abort();
        }, 100);
        ```
        */
    // TODO: Replace `any` with `AbortSignal` when targeting Node 16.
    get signal() {
      return this._internals.signal;
    }
    // TODO: Replace `any` with `AbortSignal` when targeting Node 16.
    set signal(e) {
      S.object(e), this._internals.signal = e;
    }
    /**
        Ignore invalid cookies instead of throwing an error.
        Only useful when the `cookieJar` option has been set. Not recommended.
    
        @default false
        */
    get ignoreInvalidCookies() {
      return this._internals.ignoreInvalidCookies;
    }
    set ignoreInvalidCookies(e) {
      S.boolean(e), this._internals.ignoreInvalidCookies = e;
    }
    /**
        Query string that will be added to the request URL.
        This will override the query string in `url`.
    
        If you need to pass in an array, you can do it using a `URLSearchParams` instance.
    
        @example
        ```
        import got from 'got';
    
        const searchParams = new URLSearchParams([['key', 'a'], ['key', 'b']]);
    
        await got('https://example.com', {searchParams});
    
        console.log(searchParams.toString());
        //=> 'key=a&key=b'
        ```
        */
    get searchParams() {
      return this._internals.url ? this._internals.url.searchParams : (this._internals.searchParams === void 0 && (this._internals.searchParams =
      new Xt.URLSearchParams()), this._internals.searchParams);
    }
    set searchParams(e) {
      S.any([m.string, m.object, m.undefined], e);
      let t = this._internals.url;
      if (e === void 0) {
        this._internals.searchParams = void 0, t && (t.search = "");
        return;
      }
      let r = this.searchParams, i;
      if (m.string(e))
        i = new Xt.URLSearchParams(e);
      else if (e instanceof Xt.URLSearchParams)
        i = e;
      else {
        _A(e), i = new Xt.URLSearchParams();
        for (let s in e) {
          let o = e[s];
          o === null ? i.append(s, "") : o === void 0 ? r.delete(s) : i.append(s, o);
        }
      }
      if (this._merging) {
        for (let s of i.keys())
          r.delete(s);
        for (let [s, o] of i)
          r.append(s, o);
      } else t ? t.search = r.toString() : this._internals.searchParams = r;
    }
    get searchParameters() {
      throw new Error("The `searchParameters` option does not exist. Use `searchParams` instead.");
    }
    set searchParameters(e) {
      throw new Error("The `searchParameters` option does not exist. Use `searchParams` instead.");
    }
    get dnsLookup() {
      return this._internals.dnsLookup;
    }
    set dnsLookup(e) {
      S.any([m.function_, m.undefined], e), this._internals.dnsLookup = e;
    }
    /**
        An instance of [`CacheableLookup`](https://github.com/szmarczak/cacheable-lookup) used for making DNS lookups.
        Useful when making lots of requests to different *public* hostnames.
    
        `CacheableLookup` uses `dns.resolver4(..)` and `dns.resolver6(...)` under the hood and fall backs to `dns.lookup(...)` when the first two fail, which may lead to additional delay.
    
        __Note__: This should stay disabled when making requests to internal hostnames such as `localhost`, `database.local` etc.
    
        @default false
        */
    get dnsCache() {
      return this._internals.dnsCache;
    }
    set dnsCache(e) {
      S.any([m.object, m.boolean, m.undefined], e), e === !0 ? this._internals.dnsCache = CA() : e === !1 ? this._internals.dnsCache = void 0 :
      this._internals.dnsCache = e;
    }
    /**
        User data. `context` is shallow merged and enumerable. If it contains non-enumerable properties they will NOT be merged.
    
        @example
        ```
        import got from 'got';
    
        const instance = got.extend({
            hooks: {
                beforeRequest: [
                    options => {
                        if (!options.context || !options.context.token) {
                            throw new Error('Token required');
                        }
    
                        options.headers.token = options.context.token;
                    }
                ]
            }
        });
    
        const context = {
            token: 'secret'
        };
    
        const response = await instance('https://httpbin.org/headers', {context});
    
        // Let's see the headers
        console.log(response.body);
        ```
        */
    get context() {
      return this._internals.context;
    }
    set context(e) {
      S.object(e), this._merging ? Object.assign(this._internals.context, e) : this._internals.context = { ...e };
    }
    /**
    Hooks allow modifications during the request lifecycle.
    Hook functions may be async and are run serially.
    */
    get hooks() {
      return this._internals.hooks;
    }
    set hooks(e) {
      S.object(e);
      for (let t in e) {
        if (!(t in this._internals.hooks))
          throw new Error(`Unexpected hook event: ${t}`);
        let r = t, i = e[r];
        if (S.any([m.array, m.undefined], i), i)
          for (let s of i)
            S.function_(s);
        if (this._merging)
          i && this._internals.hooks[r].push(...i);
        else {
          if (!i)
            throw new Error(`Missing hook event: ${t}`);
          this._internals.hooks[t] = [...i];
        }
      }
    }
    /**
        Defines if redirect responses should be followed automatically.
    
        Note that if a `303` is sent by the server in response to any request type (`POST`, `DELETE`, etc.), Got will automatically request the resource pointed to in the location header via `GET`.
        This is in accordance with [the spec](https://tools.ietf.org/html/rfc7231#section-6.4.4). You can optionally turn on this behavior also for other redirect codes - see `methodRewriting`.
    
        @default true
        */
    get followRedirect() {
      return this._internals.followRedirect;
    }
    set followRedirect(e) {
      S.boolean(e), this._internals.followRedirect = e;
    }
    get followRedirects() {
      throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
    }
    set followRedirects(e) {
      throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
    }
    /**
        If exceeded, the request will be aborted and a `MaxRedirectsError` will be thrown.
    
        @default 10
        */
    get maxRedirects() {
      return this._internals.maxRedirects;
    }
    set maxRedirects(e) {
      S.number(e), this._internals.maxRedirects = e;
    }
    /**
        A cache adapter instance for storing cached response data.
    
        @default false
        */
    get cache() {
      return this._internals.cache;
    }
    set cache(e) {
      S.any([m.object, m.string, m.boolean, m.undefined], e), e === !0 ? this._internals.cache = EA : e === !1 ? this._internals.cache = void 0 :
      this._internals.cache = e;
    }
    /**
        Determines if a `got.HTTPError` is thrown for unsuccessful responses.
    
        If this is disabled, requests that encounter an error status code will be resolved with the `response` instead of throwing.
        This may be useful if you are checking for resource availability and are expecting error responses.
    
        @default true
        */
    get throwHttpErrors() {
      return this._internals.throwHttpErrors;
    }
    set throwHttpErrors(e) {
      S.boolean(e), this._internals.throwHttpErrors = e;
    }
    get username() {
      let e = this._internals.url, t = e ? e.username : this._internals.username;
      return decodeURIComponent(t);
    }
    set username(e) {
      S.string(e);
      let t = this._internals.url, r = encodeURIComponent(e);
      t ? t.username = r : this._internals.username = r;
    }
    get password() {
      let e = this._internals.url, t = e ? e.password : this._internals.password;
      return decodeURIComponent(t);
    }
    set password(e) {
      S.string(e);
      let t = this._internals.url, r = encodeURIComponent(e);
      t ? t.password = r : this._internals.password = r;
    }
    /**
        If set to `true`, Got will additionally accept HTTP2 requests.
    
        It will choose either HTTP/1.1 or HTTP/2 depending on the ALPN protocol.
    
        __Note__: This option requires Node.js 15.10.0 or newer as HTTP/2 support on older Node.js versions is very buggy.
    
        __Note__: Overriding `options.request` will disable HTTP2 support.
    
        @default false
    
        @example
        ```
        import got from 'got';
    
        const {headers} = await got('https://nghttp2.org/httpbin/anything', {http2: true});
    
        console.log(headers.via);
        //=> '2 nghttpx'
        ```
        */
    get http2() {
      return this._internals.http2;
    }
    set http2(e) {
      S.boolean(e), this._internals.http2 = e;
    }
    /**
        Set this to `true` to allow sending body for the `GET` method.
        However, the [HTTP/2 specification](https://tools.ietf.org/html/rfc7540#section-8.1.3) says that `An HTTP GET request includes request header fields and no payload body`, therefore when using the HTTP/2 protocol this option will have no effect.
        This option is only meant to interact with non-compliant servers when you have no other choice.
    
        __Note__: The [RFC 7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) doesn't specify any particular behavior for the GET method having a payload, therefore __it's considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)__.
    
        @default false
        */
    get allowGetBody() {
      return this._internals.allowGetBody;
    }
    set allowGetBody(e) {
      S.boolean(e), this._internals.allowGetBody = e;
    }
    /**
        Request headers.
    
        Existing headers will be overwritten. Headers set to `undefined` will be omitted.
    
        @default {}
        */
    get headers() {
      return this._internals.headers;
    }
    set headers(e) {
      S.plainObject(e), this._merging ? Object.assign(this._internals.headers, cl(e)) : this._internals.headers = cl(e);
    }
    /**
        Specifies if the HTTP request method should be [rewritten as `GET`](https://tools.ietf.org/html/rfc7231#section-6.4) on redirects.
    
        As the [specification](https://tools.ietf.org/html/rfc7231#section-6.4) prefers to rewrite the HTTP method only on `303` responses, this is Got's default behavior.
        Setting `methodRewriting` to `true` will also rewrite `301` and `302` responses, as allowed by the spec. This is the behavior followed by `curl` and browsers.
    
        __Note__: Got never performs method rewriting on `307` and `308` responses, as this is [explicitly prohibited by the specification](https://www.rfc-editor.org/rfc/rfc7231#section-6.4.7).
    
        @default false
        */
    get methodRewriting() {
      return this._internals.methodRewriting;
    }
    set methodRewriting(e) {
      S.boolean(e), this._internals.methodRewriting = e;
    }
    /**
        Indicates which DNS record family to use.
    
        Values:
        - `undefined`: IPv4 (if present) or IPv6
        - `4`: Only IPv4
        - `6`: Only IPv6
    
        @default undefined
        */
    get dnsLookupIpVersion() {
      return this._internals.dnsLookupIpVersion;
    }
    set dnsLookupIpVersion(e) {
      if (e !== void 0 && e !== 4 && e !== 6)
        throw new TypeError(`Invalid DNS lookup IP version: ${e}`);
      this._internals.dnsLookupIpVersion = e;
    }
    /**
        A function used to parse JSON responses.
    
        @example
        ```
        import got from 'got';
        import Bourne from '@hapi/bourne';
    
        const parsed = await got('https://example.com', {
            parseJson: text => Bourne.parse(text)
        }).json();
    
        console.log(parsed);
        ```
        */
    get parseJson() {
      return this._internals.parseJson;
    }
    set parseJson(e) {
      S.function_(e), this._internals.parseJson = e;
    }
    /**
        A function used to stringify the body of JSON requests.
    
        @example
        ```
        import got from 'got';
    
        await got.post('https://example.com', {
            stringifyJson: object => JSON.stringify(object, (key, value) => {
                if (key.startsWith('_')) {
                    return;
                }
    
                return value;
            }),
            json: {
                some: 'payload',
                _ignoreMe: 1234
            }
        });
        ```
    
        @example
        ```
        import got from 'got';
    
        await got.post('https://example.com', {
            stringifyJson: object => JSON.stringify(object, (key, value) => {
                if (typeof value === 'number') {
                    return value.toString();
                }
    
                return value;
            }),
            json: {
                some: 'payload',
                number: 1
            }
        });
        ```
        */
    get stringifyJson() {
      return this._internals.stringifyJson;
    }
    set stringifyJson(e) {
      S.function_(e), this._internals.stringifyJson = e;
    }
    /**
        An object representing `limit`, `calculateDelay`, `methods`, `statusCodes`, `maxRetryAfter` and `errorCodes` fields for maximum retry count, retry handler, allowed methods, allowed status codes, maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time and allowed error codes.
    
        Delays between retries counts with function `1000 * Math.pow(2, retry) + Math.random() * 100`, where `retry` is attempt number (starts from 1).
    
        The `calculateDelay` property is a `function` that receives an object with `attemptCount`, `retryOptions`, `error` and `computedValue` properties for current retry count, the retry options, error and default computed value.
        The function must return a delay in milliseconds (or a Promise resolving with it) (`0` return value cancels retry).
    
        By default, it retries *only* on the specified methods, status codes, and on these network errors:
    
        - `ETIMEDOUT`: One of the [timeout](#timeout) limits were reached.
        - `ECONNRESET`: Connection was forcibly closed by a peer.
        - `EADDRINUSE`: Could not bind to any free port.
        - `ECONNREFUSED`: Connection was refused by the server.
        - `EPIPE`: The remote side of the stream being written has been closed.
        - `ENOTFOUND`: Couldn't resolve the hostname to an IP address.
        - `ENETUNREACH`: No internet connection.
        - `EAI_AGAIN`: DNS lookup timed out.
    
        __Note__: If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`.
        __Note__: If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.
        */
    get retry() {
      return this._internals.retry;
    }
    set retry(e) {
      if (S.plainObject(e), S.any([m.function_, m.undefined], e.calculateDelay), S.any([m.number, m.undefined], e.maxRetryAfter), S.any([m.number,
      m.undefined], e.limit), S.any([m.array, m.undefined], e.methods), S.any([m.array, m.undefined], e.statusCodes), S.any([m.array, m.undefined],
      e.errorCodes), S.any([m.number, m.undefined], e.noise), e.noise && Math.abs(e.noise) > 100)
        throw new Error(`The maximum acceptable retry noise is +/- 100ms, got ${e.noise}`);
      for (let r in e)
        if (!(r in this._internals.retry))
          throw new Error(`Unexpected retry option: ${r}`);
      this._merging ? Object.assign(this._internals.retry, e) : this._internals.retry = { ...e };
      let { retry: t } = this._internals;
      t.methods = [...new Set(t.methods.map((r) => r.toUpperCase()))], t.statusCodes = [...new Set(t.statusCodes)], t.errorCodes = [...new Set(
      t.errorCodes)];
    }
    /**
        From `http.RequestOptions`.
    
        The IP address used to send the request from.
        */
    get localAddress() {
      return this._internals.localAddress;
    }
    set localAddress(e) {
      S.any([m.string, m.undefined], e), this._internals.localAddress = e;
    }
    /**
        The HTTP method used to make the request.
    
        @default 'GET'
        */
    get method() {
      return this._internals.method;
    }
    set method(e) {
      S.string(e), this._internals.method = e.toUpperCase();
    }
    get createConnection() {
      return this._internals.createConnection;
    }
    set createConnection(e) {
      S.any([m.function_, m.undefined], e), this._internals.createConnection = e;
    }
    /**
        From `http-cache-semantics`
    
        @default {}
        */
    get cacheOptions() {
      return this._internals.cacheOptions;
    }
    set cacheOptions(e) {
      S.plainObject(e), S.any([m.boolean, m.undefined], e.shared), S.any([m.number, m.undefined], e.cacheHeuristic), S.any([m.number, m.undefined],
      e.immutableMinTimeToLive), S.any([m.boolean, m.undefined], e.ignoreCargoCult);
      for (let t in e)
        if (!(t in this._internals.cacheOptions))
          throw new Error(`Cache option \`${t}\` does not exist`);
      this._merging ? Object.assign(this._internals.cacheOptions, e) : this._internals.cacheOptions = { ...e };
    }
    /**
    Options for the advanced HTTPS API.
    */
    get https() {
      return this._internals.https;
    }
    set https(e) {
      S.plainObject(e), S.any([m.boolean, m.undefined], e.rejectUnauthorized), S.any([m.function_, m.undefined], e.checkServerIdentity), S.any(
      [m.string, m.object, m.array, m.undefined], e.certificateAuthority), S.any([m.string, m.object, m.array, m.undefined], e.key), S.any([
      m.string, m.object, m.array, m.undefined], e.certificate), S.any([m.string, m.undefined], e.passphrase), S.any([m.string, m.buffer, m.
      array, m.undefined], e.pfx), S.any([m.array, m.undefined], e.alpnProtocols), S.any([m.string, m.undefined], e.ciphers), S.any([m.string,
      m.buffer, m.undefined], e.dhparam), S.any([m.string, m.undefined], e.signatureAlgorithms), S.any([m.string, m.undefined], e.minVersion),
      S.any([m.string, m.undefined], e.maxVersion), S.any([m.boolean, m.undefined], e.honorCipherOrder), S.any([m.number, m.undefined], e.tlsSessionLifetime),
      S.any([m.string, m.undefined], e.ecdhCurve), S.any([m.string, m.buffer, m.array, m.undefined], e.certificateRevocationLists);
      for (let t in e)
        if (!(t in this._internals.https))
          throw new Error(`HTTPS option \`${t}\` does not exist`);
      this._merging ? Object.assign(this._internals.https, e) : this._internals.https = { ...e };
    }
    /**
        [Encoding](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) to be used on `setEncoding` of the response data.
    
        To get a [`Buffer`](https://nodejs.org/api/buffer.html), you need to set `responseType` to `buffer` instead.
        Don't set this option to `null`.
    
        __Note__: This doesn't affect streams! Instead, you need to do `got.stream(...).setEncoding(encoding)`.
    
        @default 'utf-8'
        */
    get encoding() {
      return this._internals.encoding;
    }
    set encoding(e) {
      if (e === null)
        throw new TypeError("To get a Buffer, set `options.responseType` to `buffer` instead");
      S.any([m.string, m.undefined], e), this._internals.encoding = e;
    }
    /**
        When set to `true` the promise will return the Response body instead of the Response object.
    
        @default false
        */
    get resolveBodyOnly() {
      return this._internals.resolveBodyOnly;
    }
    set resolveBodyOnly(e) {
      S.boolean(e), this._internals.resolveBodyOnly = e;
    }
    /**
        Returns a `Stream` instead of a `Promise`.
        This is equivalent to calling `got.stream(url, options?)`.
    
        @default false
        */
    get isStream() {
      return this._internals.isStream;
    }
    set isStream(e) {
      S.boolean(e), this._internals.isStream = e;
    }
    /**
        The parsing method.
    
        The promise also has `.text()`, `.json()` and `.buffer()` methods which return another Got promise for the parsed body.
    
        It's like setting the options to `{responseType: 'json', resolveBodyOnly: true}` but without affecting the main Got promise.
    
        __Note__: When using streams, this option is ignored.
    
        @example
        ```
        const responsePromise = got(url);
        const bufferPromise = responsePromise.buffer();
        const jsonPromise = responsePromise.json();
    
        const [response, buffer, json] = Promise.all([responsePromise, bufferPromise, jsonPromise]);
        // `response` is an instance of Got Response
        // `buffer` is an instance of Buffer
        // `json` is an object
        ```
    
        @example
        ```
        // This
        const body = await got(url).json();
    
        // is semantically the same as this
        const body = await got(url, {responseType: 'json', resolveBodyOnly: true});
        ```
        */
    get responseType() {
      return this._internals.responseType;
    }
    set responseType(e) {
      if (e === void 0) {
        this._internals.responseType = "text";
        return;
      }
      if (e !== "text" && e !== "buffer" && e !== "json")
        throw new Error(`Invalid \`responseType\` option: ${e}`);
      this._internals.responseType = e;
    }
    get pagination() {
      return this._internals.pagination;
    }
    set pagination(e) {
      S.object(e), this._merging ? Object.assign(this._internals.pagination, e) : this._internals.pagination = e;
    }
    get auth() {
      throw new Error("Parameter `auth` is deprecated. Use `username` / `password` instead.");
    }
    set auth(e) {
      throw new Error("Parameter `auth` is deprecated. Use `username` / `password` instead.");
    }
    get setHost() {
      return this._internals.setHost;
    }
    set setHost(e) {
      S.boolean(e), this._internals.setHost = e;
    }
    get maxHeaderSize() {
      return this._internals.maxHeaderSize;
    }
    set maxHeaderSize(e) {
      S.any([m.number, m.undefined], e), this._internals.maxHeaderSize = e;
    }
    get enableUnixSockets() {
      return this._internals.enableUnixSockets;
    }
    set enableUnixSockets(e) {
      S.boolean(e), this._internals.enableUnixSockets = e;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toJSON() {
      return { ...this._internals };
    }
    [Symbol.for("nodejs.util.inspect.custom")](e, t) {
      return (0, al.inspect)(this._internals, t);
    }
    createNativeRequestOptions() {
      var e;
      let t = this._internals, r = t.url, i;
      r.protocol === "https:" ? i = t.http2 ? t.agent : t.agent.https : i = t.agent.http;
      let { https: s } = t, { pfx: o } = s;
      return m.array(o) && m.plainObject(o[0]) && (o = o.map((u) => ({
        buf: u.buffer,
        passphrase: u.passphrase
      }))), {
        ...t.cacheOptions,
        ...this._unixOptions,
        // HTTPS options
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ALPNProtocols: s.alpnProtocols,
        ca: s.certificateAuthority,
        cert: s.certificate,
        key: s.key,
        passphrase: s.passphrase,
        pfx: s.pfx,
        rejectUnauthorized: s.rejectUnauthorized,
        checkServerIdentity: s.checkServerIdentity ?? aA.checkServerIdentity,
        ciphers: s.ciphers,
        honorCipherOrder: s.honorCipherOrder,
        minVersion: s.minVersion,
        maxVersion: s.maxVersion,
        sigalgs: s.signatureAlgorithms,
        sessionTimeout: s.tlsSessionLifetime,
        dhparam: s.dhparam,
        ecdhCurve: s.ecdhCurve,
        crl: s.certificateRevocationLists,
        // HTTP options
        lookup: t.dnsLookup ?? ((e = t.dnsCache) == null ? void 0 : e.lookup),
        family: t.dnsLookupIpVersion,
        agent: i,
        setHost: t.setHost,
        method: t.method,
        maxHeaderSize: t.maxHeaderSize,
        localAddress: t.localAddress,
        headers: t.headers,
        createConnection: t.createConnection,
        timeout: t.http2 ? AA(t) : void 0,
        // HTTP/2 options
        h2session: t.h2session
      };
    }
    getRequestFunction() {
      let e = this._internals.url, { request: t } = this._internals;
      return !t && e ? this.getFallbackRequestFunction() : t;
    }
    getFallbackRequestFunction() {
      let e = this._internals.url;
      if (e) {
        if (e.protocol === "https:") {
          if (this._internals.http2) {
            if (Py < 15 || Py === 15 && wA < 10) {
              let t = new Error("To use the `http2` option, install Node.js 15.10.0 or above");
              throw t.code = "EUNSUPPORTED", t;
            }
            return bA.default.auto;
          }
          return fA.default.request;
        }
        return lA.default.request;
      }
    }
    freeze() {
      let e = this._internals;
      Object.freeze(e), Object.freeze(e.hooks), Object.freeze(e.hooks.afterResponse), Object.freeze(e.hooks.beforeError), Object.freeze(e.hooks.
      beforeRedirect), Object.freeze(e.hooks.beforeRequest), Object.freeze(e.hooks.beforeRetry), Object.freeze(e.hooks.init), Object.freeze(
      e.https), Object.freeze(e.cacheOptions), Object.freeze(e.agent), Object.freeze(e.headers), Object.freeze(e.timeout), Object.freeze(e.retry),
      Object.freeze(e.retry.errorCodes), Object.freeze(e.retry.methods), Object.freeze(e.retry.statusCodes);
    }
  }, Os = /* @__PURE__ */ n((e) => {
    let { statusCode: t } = e, r = e.request.options.followRedirect ? 299 : 399;
    return t >= 200 && t <= r || t === 304;
  }, "isResponseOk"), My = class extends ye {
    static {
      n(this, "ParseError");
    }
    constructor(e, t) {
      let { options: r } = t.request;
      super(`${e.message} in "${r.url.toString()}"`, e, t.request), this.name = "ParseError", this.code = "ERR_BODY_PARSE_FAILURE";
    }
  }, jy = /* @__PURE__ */ n((e, t, r, i) => {
    let { rawBody: s } = e;
    try {
      if (t === "text")
        return s.toString(i);
      if (t === "json")
        return s.length === 0 ? "" : r(s.toString(i));
      if (t === "buffer")
        return s;
    } catch (o) {
      throw new My(o, e);
    }
    throw new My({
      message: `Unknown body type '${t}'`,
      name: "Error"
    }, e);
  }, "parseBody");
  function RA(e) {
    return e.writable && !e.writableEnded;
  }
  n(RA, "isClientRequest");
  var TA = RA;
  function Iy(e) {
    return e.protocol === "unix:" || e.hostname === "unix";
  }
  n(Iy, "isUnixSocketURL");
  var BA = m.string(nb.default.versions.brotli), kA = /* @__PURE__ */ new Set(["GET", "HEAD"]), hl = new nA(), OA = /* @__PURE__ */ new Set(
  [300, 301, 302, 303, 304, 307, 308]), PA = [
    "socket",
    "connect",
    "continue",
    "information",
    "upgrade"
  ], Bs = /* @__PURE__ */ n(() => {
  }, "noop2"), ml = class extends m1.Duplex {
    static {
      n(this, "Request");
    }
    constructor(e, t, r) {
      super({
        // Don't destroy immediately, as the error may be emitted on unsuccessful retry
        autoDestroy: !1,
        // It needs to be zero because we're just proxying the data to another stream
        highWaterMark: 0
      }), Object.defineProperty(this, "constructor", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_noPipe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "response", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "requestUrl", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "redirectUrls", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "retryCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_stopRetry", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_downloadedSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_uploadedSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_stopReading", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_pipedServerResponses", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_request", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_responseSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_bodySize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_unproxyEvents", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_isFromCache", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_cannotHaveBody", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_triggerRead", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_cancelTimeouts", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_removeListeners", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_nativeResponse", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_flushed", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_aborted", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "_requestInitialized", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this._downloadedSize = 0, this._uploadedSize = 0, this._stopReading = !1, this._pipedServerResponses = /* @__PURE__ */ new Set(), this.
      _cannotHaveBody = !1, this._unproxyEvents = Bs, this._triggerRead = !1, this._cancelTimeouts = Bs, this._removeListeners = Bs, this._jobs =
      [], this._flushed = !1, this._requestInitialized = !1, this._aborted = !1, this.redirectUrls = [], this.retryCount = 0, this._stopRetry =
      Bs, this.on("pipe", (s) => {
        s.headers && Object.assign(this.options.headers, s.headers);
      }), this.on("newListener", (s) => {
        if (s === "retry" && this.listenerCount("retry") > 0)
          throw new Error("A retry listener has been attached already.");
      });
      try {
        if (this.options = new bt(e, t, r), !this.options.url) {
          if (this.options.prefixUrl === "")
            throw new TypeError("Missing `url` property");
          this.options.url = "";
        }
        this.requestUrl = this.options.url;
      } catch (s) {
        let { options: o } = s;
        o && (this.options = o), this.flush = async () => {
          this.flush = async () => {
          }, this.destroy(s);
        };
        return;
      }
      let { body: i } = this.options;
      if (m.nodeStream(i) && i.once("error", (s) => {
        this._flushed ? this._beforeError(new gy(s, this)) : this.flush = async () => {
          this.flush = async () => {
          }, this._beforeError(new gy(s, this));
        };
      }), this.options.signal) {
        let s = /* @__PURE__ */ n(() => {
          this.destroy(new D1(this));
        }, "abort");
        this.options.signal.aborted ? s() : (this.options.signal.addEventListener("abort", s), this._removeListeners = () => {
          this.options.signal.removeEventListener("abort", s);
        });
      }
    }
    async flush() {
      var e;
      if (!this._flushed) {
        this._flushed = !0;
        try {
          if (await this._finalizeBody(), this.destroyed)
            return;
          if (await this._makeRequest(), this.destroyed) {
            (e = this._request) == null || e.destroy();
            return;
          }
          for (let t of this._jobs)
            t();
          this._jobs.length = 0, this._requestInitialized = !0;
        } catch (t) {
          this._beforeError(t);
        }
      }
    }
    _beforeError(e) {
      if (this._stopReading)
        return;
      let { response: t, options: r } = this, i = this.retryCount + (e.name === "RetryError" ? 0 : 1);
      this._stopReading = !0, e instanceof ye || (e = new ye(e.message, e, this));
      let s = e;
      (async () => {
        var o, u;
        if (t?.readable && !t.rawBody && !((u = (o = this._request) == null ? void 0 : o.socket) != null && u.destroyed) && (t.setEncoding(this.
        readableEncoding), await this._setRawBody(t) && (t.body = t.rawBody.toString())), this.listenerCount("retry") !== 0) {
          let a;
          try {
            let l;
            t && "retry-after" in t.headers && (l = Number(t.headers["retry-after"]), Number.isNaN(l) ? (l = Date.parse(t.headers["retry-aft\
er"]) - Date.now(), l <= 0 && (l = 1)) : l *= 1e3);
            let f = r.retry;
            a = await f.calculateDelay({
              attemptCount: i,
              retryOptions: f,
              error: s,
              retryAfter: l,
              computedValue: oA({
                attemptCount: i,
                retryOptions: f,
                error: s,
                retryAfter: l,
                computedValue: f.maxRetryAfter ?? r.timeout.request ?? Number.POSITIVE_INFINITY
              })
            });
          } catch (l) {
            this._error(new ye(l.message, l, this));
            return;
          }
          if (a) {
            if (await new Promise((l) => {
              let f = setTimeout(l, a);
              this._stopRetry = () => {
                clearTimeout(f), l();
              };
            }), this.destroyed)
              return;
            try {
              for (let l of this.options.hooks.beforeRetry)
                await l(s, this.retryCount + 1);
            } catch (l) {
              this._error(new ye(l.message, e, this));
              return;
            }
            if (this.destroyed)
              return;
            this.destroy(), this.emit("retry", this.retryCount + 1, e, (l) => {
              let f = new ml(r.url, l, r);
              return f.retryCount = this.retryCount + 1, nb.default.nextTick(() => {
                f.flush();
              }), f;
            });
            return;
          }
        }
        this._error(s);
      })();
    }
    _read() {
      this._triggerRead = !0;
      let { response: e } = this;
      if (e && !this._stopReading) {
        e.readableLength && (this._triggerRead = !1);
        let t;
        for (; (t = e.read()) !== null; ) {
          this._downloadedSize += t.length;
          let r = this.downloadProgress;
          r.percent < 1 && this.emit("downloadProgress", r), this.push(t);
        }
      }
    }
    _write(e, t, r) {
      let i = /* @__PURE__ */ n(() => {
        this._writeRequest(e, t, r);
      }, "write");
      this._requestInitialized ? i() : this._jobs.push(i);
    }
    _final(e) {
      let t = /* @__PURE__ */ n(() => {
        if (!this._request || this._request.destroyed) {
          e();
          return;
        }
        this._request.end((r) => {
          var i;
          (i = this._request._writableState) != null && i.errored || (r || (this._bodySize = this._uploadedSize, this.emit("uploadProgress",
          this.uploadProgress), this._request.emit("upload-complete")), e(r));
        });
      }, "endRequest");
      this._requestInitialized ? t() : this._jobs.push(t);
    }
    _destroy(e, t) {
      if (this._stopReading = !0, this.flush = async () => {
      }, this._stopRetry(), this._cancelTimeouts(), this._removeListeners(), this.options) {
        let { body: r } = this.options;
        m.nodeStream(r) && r.destroy();
      }
      this._request && this._request.destroy(), e !== null && !m.undefined(e) && !(e instanceof ye) && (e = new ye(e.message, e, this)), t(e);
    }
    pipe(e, t) {
      return e instanceof il.ServerResponse && this._pipedServerResponses.add(e), super.pipe(e, t);
    }
    unpipe(e) {
      return e instanceof il.ServerResponse && this._pipedServerResponses.delete(e), super.unpipe(e), this;
    }
    async _finalizeBody() {
      let { options: e } = this, { headers: t } = e, r = !m.undefined(e.form), i = !m.undefined(e.json), s = !m.undefined(e.body), o = kA.has(
      e.method) && !(e.method === "GET" && e.allowGetBody);
      if (this._cannotHaveBody = o, r || i || s) {
        if (o)
          throw new TypeError(`The \`${e.method}\` method cannot be used with a body`);
        let u = !m.string(t["content-type"]);
        if (s) {
          if (Dl(e.body)) {
            let l = new Y1(e.body);
            u && (t["content-type"] = l.headers["Content-Type"]), "Content-Length" in l.headers && (t["content-length"] = l.headers["Content\
-Length"]), e.body = l.encode();
          }
          ob(e.body) && u && (t["content-type"] = `multipart/form-data; boundary=${e.body.getBoundary()}`);
        } else if (r) {
          u && (t["content-type"] = "application/x-www-form-urlencoded");
          let { form: l } = e;
          e.form = void 0, e.body = new by.URLSearchParams(l).toString();
        } else {
          u && (t["content-type"] = "application/json");
          let { json: l } = e;
          e.json = void 0, e.body = e.stringifyJson(l);
        }
        let a = await Q1(e.body, e.headers);
        m.undefined(t["content-length"]) && m.undefined(t["transfer-encoding"]) && !o && !m.undefined(a) && (t["content-length"] = String(a));
      }
      e.responseType === "json" && !("accept" in e.headers) && (e.headers.accept = "application/json"), this._bodySize = Number(t["content-l\
ength"]) || void 0;
    }
    async _onResponseBase(e) {
      if (this.isAborted)
        return;
      let { options: t } = this, { url: r } = t;
      this._nativeResponse = e, t.decompress && (e = (0, N1.default)(e));
      let i = e.statusCode, s = e;
      s.statusMessage = s.statusMessage ? s.statusMessage : il.default.STATUS_CODES[i], s.url = t.url.toString(), s.requestUrl = this.requestUrl,
      s.redirectUrls = this.redirectUrls, s.request = this, s.isFromCache = this._nativeResponse.fromCache ?? !1, s.ip = this.ip, s.retryCount =
      this.retryCount, s.ok = Os(s), this._isFromCache = s.isFromCache, this._responseSize = Number(e.headers["content-length"]) || void 0, this.
      response = s, e.once("end", () => {
        this._responseSize = this._downloadedSize, this.emit("downloadProgress", this.downloadProgress);
      }), e.once("error", (u) => {
        this._aborted = !0, e.destroy(), this._beforeError(new yy(u, this));
      }), e.once("aborted", () => {
        this._aborted = !0, this._beforeError(new yy({
          name: "Error",
          message: "The server aborted pending request",
          code: "ECONNRESET"
        }, this));
      }), this.emit("downloadProgress", this.downloadProgress);
      let o = e.headers["set-cookie"];
      if (m.object(t.cookieJar) && o) {
        let u = o.map(async (a) => t.cookieJar.setCookie(a, r.toString()));
        t.ignoreInvalidCookies && (u = u.map(async (a) => {
          try {
            await a;
          } catch {
          }
        }));
        try {
          await Promise.all(u);
        } catch (a) {
          this._beforeError(a);
          return;
        }
      }
      if (!this.isAborted) {
        if (t.followRedirect && e.headers.location && OA.has(i)) {
          if (e.resume(), this._cancelTimeouts(), this._unproxyEvents(), this.redirectUrls.length >= t.maxRedirects) {
            this._beforeError(new h1(this));
            return;
          }
          this._request = void 0;
          let u = new bt(void 0, void 0, this.options), a = i === 303 && u.method !== "GET" && u.method !== "HEAD", l = i !== 307 && i !== 308,
          f = u.methodRewriting && l;
          (a || f) && (u.method = "GET", u.body = void 0, u.json = void 0, u.form = void 0, delete u.headers["content-length"]);
          try {
            let p = rl.Buffer.from(e.headers.location, "binary").toString(), d = new by.URL(p, r);
            if (!Iy(r) && Iy(d)) {
              this._beforeError(new ye("Cannot redirect to UNIX socket", {}, this));
              return;
            }
            d.hostname !== r.hostname || d.port !== r.port ? ("host" in u.headers && delete u.headers.host, "cookie" in u.headers && delete u.
            headers.cookie, "authorization" in u.headers && delete u.headers.authorization, (u.username || u.password) && (u.username = "", u.
            password = "")) : (d.username = u.username, d.password = u.password), this.redirectUrls.push(d), u.prefixUrl = "", u.url = d;
            for (let c of u.hooks.beforeRedirect)
              await c(u, s);
            this.emit("redirect", u, s), this.options = u, await this._makeRequest();
          } catch (p) {
            this._beforeError(p);
            return;
          }
          return;
        }
        if (t.isStream && t.throwHttpErrors && !Os(s)) {
          this._beforeError(new ks(s));
          return;
        }
        if (e.on("readable", () => {
          this._triggerRead && this._read();
        }), this.on("resume", () => {
          e.resume();
        }), this.on("pause", () => {
          e.pause();
        }), e.once("end", () => {
          this.push(null);
        }), this._noPipe) {
          await this._setRawBody() && this.emit("response", e);
          return;
        }
        this.emit("response", e);
        for (let u of this._pipedServerResponses)
          if (!u.headersSent) {
            for (let a in e.headers) {
              let l = t.decompress ? a !== "content-encoding" : !0, f = e.headers[a];
              l && u.setHeader(a, f);
            }
            u.statusCode = i;
          }
      }
    }
    async _setRawBody(e = this) {
      if (e.readableEnded)
        return !1;
      try {
        let t = await (0, H1.buffer)(e);
        if (!this.isAborted)
          return this.response.rawBody = t, !0;
      } catch {
      }
      return !1;
    }
    async _onResponse(e) {
      try {
        await this._onResponseBase(e);
      } catch (t) {
        this._beforeError(t);
      }
    }
    _onRequest(e) {
      let { options: t } = this, { timeout: r, url: i } = t;
      w1(e), this.options.http2 && e.setTimeout(0), this._cancelTimeouts = rA(e, r, i);
      let s = t.cache ? "cacheableResponse" : "response";
      e.once(s, (o) => {
        this._onResponse(o);
      }), e.once("error", (o) => {
        this._aborted = !0, e.destroy(), o = o instanceof ab ? new d1(o, this.timings, this) : new ye(o.message, o, this), this._beforeError(
        o);
      }), this._unproxyEvents = ub(e, this, PA), this._request = e, this.emit("uploadProgress", this.uploadProgress), this._sendBody(), this.
      emit("request", e);
    }
    async _asyncWrite(e) {
      return new Promise((t, r) => {
        super.write(e, (i) => {
          if (i) {
            r(i);
            return;
          }
          t();
        });
      });
    }
    _sendBody() {
      let { body: e } = this.options, t = this.redirectUrls.length === 0 ? this : this._request ?? this;
      m.nodeStream(e) ? e.pipe(t) : m.generator(e) || m.asyncGenerator(e) ? (async () => {
        try {
          for await (let r of e)
            await this._asyncWrite(r);
          super.end();
        } catch (r) {
          this._beforeError(r);
        }
      })() : m.undefined(e) ? (this._cannotHaveBody || this._noPipe) && t.end() : (this._writeRequest(e, void 0, () => {
      }), t.end());
    }
    _prepareCache(e) {
      if (!hl.has(e)) {
        let t = new L1((r, i) => {
          let s = r._request(r, i);
          return m.promise(s) && (s.once = (o, u) => {
            if (o === "error")
              (async () => {
                try {
                  await s;
                } catch (a) {
                  u(a);
                }
              })();
            else if (o === "abort")
              (async () => {
                try {
                  (await s).once("abort", u);
                } catch {
                }
              })();
            else
              throw new Error(`Unknown HTTP2 promise event: ${o}`);
            return s;
          }), s;
        }, e);
        hl.set(e, t.request());
      }
    }
    async _createCacheableRequest(e, t) {
      return new Promise((r, i) => {
        Object.assign(t, iA(e));
        let s, o = hl.get(t.cache)(t, async (u) => {
          if (u._readableState.autoDestroy = !1, s) {
            let a = /* @__PURE__ */ n(() => {
              u.req && (u.complete = u.req.res.complete);
            }, "fix");
            u.prependOnceListener("end", a), a(), (await s).emit("cacheableResponse", u);
          }
          r(u);
        });
        o.once("error", i), o.once("request", async (u) => {
          s = u, r(s);
        });
      });
    }
    async _makeRequest() {
      let { options: e } = this, { headers: t, username: r, password: i } = e, s = e.cookieJar;
      for (let l in t)
        if (m.undefined(t[l]))
          delete t[l];
        else if (m.null_(t[l]))
          throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${l}\` header`);
      if (e.decompress && m.undefined(t["accept-encoding"]) && (t["accept-encoding"] = BA ? "gzip, deflate, br" : "gzip, deflate"), r || i) {
        let l = rl.Buffer.from(`${r}:${i}`).toString("base64");
        t.authorization = `Basic ${l}`;
      }
      if (s) {
        let l = await s.getCookieString(e.url.toString());
        m.nonEmptyString(l) && (t.cookie = l);
      }
      e.prefixUrl = "";
      let o;
      for (let l of e.hooks.beforeRequest) {
        let f = await l(e);
        if (!m.undefined(f)) {
          o = /* @__PURE__ */ n(() => f, "request");
          break;
        }
      }
      o || (o = e.getRequestFunction());
      let u = e.url;
      this._requestOptions = e.createNativeRequestOptions(), e.cache && (this._requestOptions._request = o, this._requestOptions.cache = e.cache,
      this._requestOptions.body = e.body, this._prepareCache(e.cache));
      let a = e.cache ? this._createCacheableRequest : o;
      try {
        let l = a(u, this._requestOptions);
        m.promise(l) && (l = await l), m.undefined(l) && (l = e.getFallbackRequestFunction()(u, this._requestOptions), m.promise(l) && (l = await l)),
        TA(l) ? this._onRequest(l) : this.writable ? (this.once("finish", () => {
          this._onResponse(l);
        }), this._sendBody()) : this._onResponse(l);
      } catch (l) {
        throw l instanceof Ni ? new c1(l, this) : l;
      }
    }
    async _error(e) {
      try {
        if (!(e instanceof ks && !this.options.throwHttpErrors))
          for (let t of this.options.hooks.beforeError)
            e = await t(e);
      } catch (t) {
        e = new ye(t.message, t, this);
      }
      this.destroy(e);
    }
    _writeRequest(e, t, r) {
      !this._request || this._request.destroyed || this._request.write(e, t, (i) => {
        if (!i && !this._request.destroyed) {
          this._uploadedSize += rl.Buffer.byteLength(e, t);
          let s = this.uploadProgress;
          s.percent < 1 && this.emit("uploadProgress", s);
        }
        r(i);
      });
    }
    /**
    The remote IP address.
    */
    get ip() {
      var e;
      return (e = this.socket) == null ? void 0 : e.remoteAddress;
    }
    /**
    Indicates whether the request has been aborted or not.
    */
    get isAborted() {
      return this._aborted;
    }
    get socket() {
      var e;
      return ((e = this._request) == null ? void 0 : e.socket) ?? void 0;
    }
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress() {
      let e;
      return this._responseSize ? e = this._downloadedSize / this._responseSize : this._responseSize === this._downloadedSize ? e = 1 : e = 0,
      {
        percent: e,
        transferred: this._downloadedSize,
        total: this._responseSize
      };
    }
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress() {
      let e;
      return this._bodySize ? e = this._uploadedSize / this._bodySize : this._bodySize === this._uploadedSize ? e = 1 : e = 0, {
        percent: e,
        transferred: this._uploadedSize,
        total: this._bodySize
      };
    }
    /**
        The object contains the following properties:
    
        - `start` - Time when the request started.
        - `socket` - Time when a socket was assigned to the request.
        - `lookup` - Time when the DNS lookup finished.
        - `connect` - Time when the socket successfully connected.
        - `secureConnect` - Time when the socket securely connected.
        - `upload` - Time when the request finished uploading.
        - `response` - Time when the request fired `response` event.
        - `end` - Time when the response fired `end` event.
        - `error` - Time when the request fired `error` event.
        - `abort` - Time when the request fired `abort` event.
        - `phases`
            - `wait` - `timings.socket - timings.start`
            - `dns` - `timings.lookup - timings.socket`
            - `tcp` - `timings.connect - timings.lookup`
            - `tls` - `timings.secureConnect - timings.connect`
            - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
            - `firstByte` - `timings.response - timings.upload`
            - `download` - `timings.end - timings.response`
            - `total` - `(timings.end || timings.error || timings.abort) - timings.start`
    
        If something has not been measured yet, it will be `undefined`.
    
        __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
        */
    get timings() {
      var e;
      return (e = this._request) == null ? void 0 : e.timings;
    }
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache() {
      return this._isFromCache;
    }
    get reusedSocket() {
      var e;
      return (e = this._request) == null ? void 0 : e.reusedSocket;
    }
  }, qA = class extends ye {
    static {
      n(this, "CancelError2");
    }
    constructor(e) {
      super("Promise was canceled", {}, e), this.name = "CancelError", this.code = "ERR_CANCELED";
    }
    /**
    Whether the promise is canceled.
    */
    get isCanceled() {
      return !0;
    }
  }, MA = [
    "request",
    "response",
    "redirect",
    "uploadProgress",
    "downloadProgress"
  ];
  function Ly(e) {
    let t, r, i, s = new a1.EventEmitter(), o = new pl((a, l, f) => {
      f(() => {
        t.destroy();
      }), f.shouldReject = !1, f(() => {
        l(new qA(t));
      });
      let p = /* @__PURE__ */ n((d) => {
        var c;
        f(() => {
        });
        let h = e ?? new ml(void 0, void 0, i);
        h.retryCount = d, h._noPipe = !0, t = h, h.once("response", async (y) => {
          let w = (y.headers["content-encoding"] ?? "").toLowerCase(), F = w === "gzip" || w === "deflate" || w === "br", { options: v } = h;
          if (F && !v.decompress)
            y.body = y.rawBody;
          else
            try {
              y.body = jy(y, v.responseType, v.parseJson, v.encoding);
            } catch (E) {
              if (y.body = y.rawBody.toString(), Os(y)) {
                h._beforeError(E);
                return;
              }
            }
          try {
            let E = v.hooks.afterResponse;
            for (let [x, A] of E.entries())
              if (y = await A(y, async (k) => {
                throw v.merge(k), v.prefixUrl = "", k.url && (v.url = k.url), v.hooks.afterResponse = v.hooks.afterResponse.slice(0, x), new p1(
                h);
              }), !(m.object(y) && m.number(y.statusCode) && !m.nullOrUndefined(y.body)))
                throw new TypeError("The `afterResponse` hook returned an invalid value");
          } catch (E) {
            h._beforeError(E);
            return;
          }
          if (r = y, !Os(y)) {
            h._beforeError(new ks(y));
            return;
          }
          h.destroy(), a(h.options.resolveBodyOnly ? y.body : y);
        });
        let g = /* @__PURE__ */ n((y) => {
          if (o.isCanceled)
            return;
          let { options: w } = h;
          if (y instanceof ks && !w.throwHttpErrors) {
            let { response: F } = y;
            h.destroy(), a(h.options.resolveBodyOnly ? F.body : F);
            return;
          }
          l(y);
        }, "onError");
        h.once("error", g);
        let _ = (c = h.options) == null ? void 0 : c.body;
        h.once("retry", (y, w) => {
          e = void 0;
          let F = h.options.body;
          if (_ === F && m.nodeStream(F)) {
            w.message = "Cannot retry with consumed body stream", g(w);
            return;
          }
          i = h.options, p(y);
        }), ub(h, s, MA), m.undefined(e) && h.flush();
      }, "makeRequest");
      p(0);
    });
    o.on = (a, l) => (s.on(a, l), o), o.off = (a, l) => (s.off(a, l), o);
    let u = /* @__PURE__ */ n((a) => {
      let l = (async () => {
        await o;
        let { options: f } = r.request;
        return jy(r, a, f.parseJson, f.encoding);
      })();
      return Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)), l;
    }, "shortcut");
    return o.json = () => {
      if (t.options) {
        let { headers: a } = t.options;
        !t.writableFinished && !("accept" in a) && (a.accept = "application/json");
      }
      return u("json");
    }, o.buffer = () => u("buffer"), o.text = () => u("text"), o;
  }
  n(Ly, "asPromise");
  var jA = /* @__PURE__ */ n(async (e) => new Promise((t) => {
    setTimeout(t, e);
  }), "delay"), IA = /* @__PURE__ */ n((e) => m.function_(e), "isGotInstance"), LA = [
    "get",
    "post",
    "put",
    "patch",
    "head",
    "delete"
  ], lb = /* @__PURE__ */ n((e) => {
    e = {
      options: new bt(void 0, void 0, e.options),
      handlers: [...e.handlers],
      mutableDefaults: e.mutableDefaults
    }, Object.defineProperty(e, "mutableDefaults", {
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    let t = /* @__PURE__ */ n((i, s, o = e.options) => {
      let u = new ml(i, s, o), a, l = /* @__PURE__ */ n((d) => (u.options = d, u._noPipe = !d.isStream, u.flush(), d.isStream ? u : (a || (a =
      Ly(u)), a)), "lastHandler"), f = 0, p = /* @__PURE__ */ n((d) => {
        let h = (e.handlers[f++] ?? l)(d, p);
        if (m.promise(h) && !u.options.isStream && (a || (a = Ly(u)), h !== a)) {
          let g = Object.getOwnPropertyDescriptors(a);
          for (let _ in g)
            _ in h && delete g[_];
          Object.defineProperties(h, g), h.cancel = a.cancel;
        }
        return h;
      }, "iterateHandlers");
      return p(u.options);
    }, "got2");
    t.extend = (...i) => {
      let s = new bt(void 0, void 0, e.options), o = [...e.handlers], u;
      for (let a of i)
        IA(a) ? (s.merge(a.defaults.options), o.push(...a.defaults.handlers), u = a.defaults.mutableDefaults) : (s.merge(a), a.handlers && o.
        push(...a.handlers), u = a.mutableDefaults);
      return lb({
        options: s,
        handlers: o,
        mutableDefaults: !!u
      });
    };
    let r = /* @__PURE__ */ n(async function* (i, s) {
      let o = new bt(i, s, e.options);
      o.resolveBodyOnly = !1;
      let { pagination: u } = o;
      S.function_(u.transform), S.function_(u.shouldContinue), S.function_(u.filter), S.function_(u.paginate), S.number(u.countLimit), S.number(
      u.requestLimit), S.number(u.backoff);
      let a = [], { countLimit: l } = u, f = 0;
      for (; f < u.requestLimit; ) {
        f !== 0 && await jA(u.backoff);
        let p = await t(void 0, void 0, o), d = await u.transform(p), c = [];
        S.array(d);
        for (let g of d)
          if (u.filter({ item: g, currentItems: c, allItems: a }) && (!u.shouldContinue({ item: g, currentItems: c, allItems: a }) || (yield g,
          u.stackAllItems && a.push(g), c.push(g), --l <= 0)))
            return;
        let h = u.paginate({
          response: p,
          currentItems: c,
          allItems: a
        });
        if (h === !1)
          return;
        h === p.request.options ? o = p.request.options : (o.merge(h), S.any([m.urlInstance, m.undefined], h.url), h.url !== void 0 && (o.prefixUrl =
        "", o.url = h.url)), f++;
      }
    }, "paginateEach");
    t.paginate = r, t.paginate.all = async (i, s) => {
      let o = [];
      for await (let u of r(i, s))
        o.push(u);
      return o;
    }, t.paginate.each = r, t.stream = (i, s) => t(i, { ...s, isStream: !0 });
    for (let i of LA)
      t[i] = (s, o) => t(s, { ...o, method: i }), t.stream[i] = (s, o) => t(s, { ...o, method: i, isStream: !0 });
    return e.mutableDefaults || (Object.freeze(e.handlers), e.options.freeze()), Object.defineProperty(t, "defaults", {
      value: e,
      writable: !1,
      configurable: !1,
      enumerable: !0
    }), t;
  }, "create"), NA = lb, HA = {
    options: new bt(),
    handlers: [],
    mutableDefaults: !1
  }, UA = NA(HA), WA = UA, $A = me(du()), zA = ED(), VA = me(my()), Ny = {
    keepAlive: !0,
    maxSockets: 20
  }, GA = {
    http: new J3.Agent(Ny),
    https: new Y3.Agent(Ny)
  };
  async function JA({ url: e, gotOpts: t, extractOpts: r, dir: i }) {
    return new Promise((s, o) => {
      let u = /* @__PURE__ */ n((a) => {
        a ? o(a) : s();
      }, "callback");
      (0, $A.default)(
        WA.stream(e, Object.assign({ agent: GA }, t)),
        (0, VA.default)(),
        (0, zA.extract)(i, r),
        u
      );
    });
  }
  n(JA, "download");
});

// ../node_modules/get-npm-tarball-url/lib/index.js
var pb = b((sq, db) => {
  var gl = Object.defineProperty, YA = Object.getOwnPropertyDescriptor, KA = Object.getOwnPropertyNames, XA = Object.prototype.hasOwnProperty,
  QA = /* @__PURE__ */ n((e, t) => {
    for (var r in t)
      gl(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), ZA = /* @__PURE__ */ n((e, t, r, i) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let s of KA(t))
        !XA.call(e, s) && s !== r && gl(e, s, { get: /* @__PURE__ */ n(() => t[s], "get"), enumerable: !(i = YA(t, s)) || i.enumerable });
    return e;
  }, "__copyProps"), eR = /* @__PURE__ */ n((e) => ZA(gl({}, "__esModule", { value: !0 }), e), "__toCommonJS"), cb = {};
  QA(cb, {
    default: /* @__PURE__ */ n(() => tR, "default")
  });
  db.exports = eR(cb);
  function tR(e, t, r) {
    let i;
    r?.registry ? i = r.registry.endsWith("/") ? r.registry : `${r.registry}/` : i = "https://registry.npmjs.org/";
    let s = iR(e);
    return `${i}${e}/-/${s}-${rR(t)}.tgz`;
  }
  n(tR, "src_default");
  function rR(e) {
    let t = e.indexOf("+");
    return t === -1 ? e : e.substring(0, t);
  }
  n(rR, "removeBuildMetadataFromVersion");
  function iR(e) {
    return e[0] !== "@" ? e : e.split("/")[1];
  }
  n(iR, "getScopelessName");
});

// ../node_modules/eastasianwidth/eastasianwidth.js
var Ms = b((aM, Cl) => {
  var Pt = {};
  typeof Cl > "u" ? window.eastasianwidth = Pt : Cl.exports = Pt;
  Pt.eastAsianWidth = function(e) {
    var t = e.charCodeAt(0), r = e.length == 2 ? e.charCodeAt(1) : 0, i = t;
    return 55296 <= t && t <= 56319 && 56320 <= r && r <= 57343 && (t &= 1023, r &= 1023, i = t << 10 | r, i += 65536), i == 12288 || 65281 <=
    i && i <= 65376 || 65504 <= i && i <= 65510 ? "F" : i == 8361 || 65377 <= i && i <= 65470 || 65474 <= i && i <= 65479 || 65482 <= i && i <=
    65487 || 65490 <= i && i <= 65495 || 65498 <= i && i <= 65500 || 65512 <= i && i <= 65518 ? "H" : 4352 <= i && i <= 4447 || 4515 <= i &&
    i <= 4519 || 4602 <= i && i <= 4607 || 9001 <= i && i <= 9002 || 11904 <= i && i <= 11929 || 11931 <= i && i <= 12019 || 12032 <= i && i <=
    12245 || 12272 <= i && i <= 12283 || 12289 <= i && i <= 12350 || 12353 <= i && i <= 12438 || 12441 <= i && i <= 12543 || 12549 <= i && i <=
    12589 || 12593 <= i && i <= 12686 || 12688 <= i && i <= 12730 || 12736 <= i && i <= 12771 || 12784 <= i && i <= 12830 || 12832 <= i && i <=
    12871 || 12880 <= i && i <= 13054 || 13056 <= i && i <= 19903 || 19968 <= i && i <= 42124 || 42128 <= i && i <= 42182 || 43360 <= i && i <=
    43388 || 44032 <= i && i <= 55203 || 55216 <= i && i <= 55238 || 55243 <= i && i <= 55291 || 63744 <= i && i <= 64255 || 65040 <= i && i <=
    65049 || 65072 <= i && i <= 65106 || 65108 <= i && i <= 65126 || 65128 <= i && i <= 65131 || 110592 <= i && i <= 110593 || 127488 <= i &&
    i <= 127490 || 127504 <= i && i <= 127546 || 127552 <= i && i <= 127560 || 127568 <= i && i <= 127569 || 131072 <= i && i <= 194367 || 177984 <=
    i && i <= 196605 || 196608 <= i && i <= 262141 ? "W" : 32 <= i && i <= 126 || 162 <= i && i <= 163 || 165 <= i && i <= 166 || i == 172 ||
    i == 175 || 10214 <= i && i <= 10221 || 10629 <= i && i <= 10630 ? "Na" : i == 161 || i == 164 || 167 <= i && i <= 168 || i == 170 || 173 <=
    i && i <= 174 || 176 <= i && i <= 180 || 182 <= i && i <= 186 || 188 <= i && i <= 191 || i == 198 || i == 208 || 215 <= i && i <= 216 ||
    222 <= i && i <= 225 || i == 230 || 232 <= i && i <= 234 || 236 <= i && i <= 237 || i == 240 || 242 <= i && i <= 243 || 247 <= i && i <=
    250 || i == 252 || i == 254 || i == 257 || i == 273 || i == 275 || i == 283 || 294 <= i && i <= 295 || i == 299 || 305 <= i && i <= 307 ||
    i == 312 || 319 <= i && i <= 322 || i == 324 || 328 <= i && i <= 331 || i == 333 || 338 <= i && i <= 339 || 358 <= i && i <= 359 || i ==
    363 || i == 462 || i == 464 || i == 466 || i == 468 || i == 470 || i == 472 || i == 474 || i == 476 || i == 593 || i == 609 || i == 708 ||
    i == 711 || 713 <= i && i <= 715 || i == 717 || i == 720 || 728 <= i && i <= 731 || i == 733 || i == 735 || 768 <= i && i <= 879 || 913 <=
    i && i <= 929 || 931 <= i && i <= 937 || 945 <= i && i <= 961 || 963 <= i && i <= 969 || i == 1025 || 1040 <= i && i <= 1103 || i == 1105 ||
    i == 8208 || 8211 <= i && i <= 8214 || 8216 <= i && i <= 8217 || 8220 <= i && i <= 8221 || 8224 <= i && i <= 8226 || 8228 <= i && i <= 8231 ||
    i == 8240 || 8242 <= i && i <= 8243 || i == 8245 || i == 8251 || i == 8254 || i == 8308 || i == 8319 || 8321 <= i && i <= 8324 || i == 8364 ||
    i == 8451 || i == 8453 || i == 8457 || i == 8467 || i == 8470 || 8481 <= i && i <= 8482 || i == 8486 || i == 8491 || 8531 <= i && i <= 8532 ||
    8539 <= i && i <= 8542 || 8544 <= i && i <= 8555 || 8560 <= i && i <= 8569 || i == 8585 || 8592 <= i && i <= 8601 || 8632 <= i && i <= 8633 ||
    i == 8658 || i == 8660 || i == 8679 || i == 8704 || 8706 <= i && i <= 8707 || 8711 <= i && i <= 8712 || i == 8715 || i == 8719 || i == 8721 ||
    i == 8725 || i == 8730 || 8733 <= i && i <= 8736 || i == 8739 || i == 8741 || 8743 <= i && i <= 8748 || i == 8750 || 8756 <= i && i <= 8759 ||
    8764 <= i && i <= 8765 || i == 8776 || i == 8780 || i == 8786 || 8800 <= i && i <= 8801 || 8804 <= i && i <= 8807 || 8810 <= i && i <= 8811 ||
    8814 <= i && i <= 8815 || 8834 <= i && i <= 8835 || 8838 <= i && i <= 8839 || i == 8853 || i == 8857 || i == 8869 || i == 8895 || i == 8978 ||
    9312 <= i && i <= 9449 || 9451 <= i && i <= 9547 || 9552 <= i && i <= 9587 || 9600 <= i && i <= 9615 || 9618 <= i && i <= 9621 || 9632 <=
    i && i <= 9633 || 9635 <= i && i <= 9641 || 9650 <= i && i <= 9651 || 9654 <= i && i <= 9655 || 9660 <= i && i <= 9661 || 9664 <= i && i <=
    9665 || 9670 <= i && i <= 9672 || i == 9675 || 9678 <= i && i <= 9681 || 9698 <= i && i <= 9701 || i == 9711 || 9733 <= i && i <= 9734 ||
    i == 9737 || 9742 <= i && i <= 9743 || 9748 <= i && i <= 9749 || i == 9756 || i == 9758 || i == 9792 || i == 9794 || 9824 <= i && i <= 9825 ||
    9827 <= i && i <= 9829 || 9831 <= i && i <= 9834 || 9836 <= i && i <= 9837 || i == 9839 || 9886 <= i && i <= 9887 || 9918 <= i && i <= 9919 ||
    9924 <= i && i <= 9933 || 9935 <= i && i <= 9953 || i == 9955 || 9960 <= i && i <= 9983 || i == 10045 || i == 10071 || 10102 <= i && i <=
    10111 || 11093 <= i && i <= 11097 || 12872 <= i && i <= 12879 || 57344 <= i && i <= 63743 || 65024 <= i && i <= 65039 || i == 65533 || 127232 <=
    i && i <= 127242 || 127248 <= i && i <= 127277 || 127280 <= i && i <= 127337 || 127344 <= i && i <= 127386 || 917760 <= i && i <= 917999 ||
    983040 <= i && i <= 1048573 || 1048576 <= i && i <= 1114109 ? "A" : "N";
  };
  Pt.characterLength = function(e) {
    var t = this.eastAsianWidth(e);
    return t == "F" || t == "W" || t == "A" ? 2 : 1;
  };
  function Rb(e) {
    return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  n(Rb, "stringToArray");
  Pt.length = function(e) {
    for (var t = Rb(e), r = 0, i = 0; i < t.length; i++)
      r = r + this.characterLength(t[i]);
    return r;
  };
  Pt.slice = function(e, t, r) {
    textLen = Pt.length(e), t = t || 0, r = r || 1, t < 0 && (t = textLen + t), r < 0 && (r = textLen + r);
    for (var i = "", s = 0, o = Rb(e), u = 0; u < o.length; u++) {
      var a = o[u], l = Pt.length(a);
      if (s >= t - (l == 2 ? 1 : 0))
        if (s + l <= r)
          i += a;
        else
          break;
      s += l;
    }
    return i;
  };
});

// ../node_modules/emoji-regex/index.js
var js = b((fM, Tb) => {
  "use strict";
  Tb.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});

// ../node_modules/cli-boxes/boxes.json
var Vb = b((jM, XR) => {
  XR.exports = {
    single: {
      topLeft: "\u250C",
      top: "\u2500",
      topRight: "\u2510",
      right: "\u2502",
      bottomRight: "\u2518",
      bottom: "\u2500",
      bottomLeft: "\u2514",
      left: "\u2502"
    },
    double: {
      topLeft: "\u2554",
      top: "\u2550",
      topRight: "\u2557",
      right: "\u2551",
      bottomRight: "\u255D",
      bottom: "\u2550",
      bottomLeft: "\u255A",
      left: "\u2551"
    },
    round: {
      topLeft: "\u256D",
      top: "\u2500",
      topRight: "\u256E",
      right: "\u2502",
      bottomRight: "\u256F",
      bottom: "\u2500",
      bottomLeft: "\u2570",
      left: "\u2502"
    },
    bold: {
      topLeft: "\u250F",
      top: "\u2501",
      topRight: "\u2513",
      right: "\u2503",
      bottomRight: "\u251B",
      bottom: "\u2501",
      bottomLeft: "\u2517",
      left: "\u2503"
    },
    singleDouble: {
      topLeft: "\u2553",
      top: "\u2500",
      topRight: "\u2556",
      right: "\u2551",
      bottomRight: "\u255C",
      bottom: "\u2500",
      bottomLeft: "\u2559",
      left: "\u2551"
    },
    doubleSingle: {
      topLeft: "\u2552",
      top: "\u2550",
      topRight: "\u2555",
      right: "\u2502",
      bottomRight: "\u255B",
      bottom: "\u2550",
      bottomLeft: "\u2558",
      left: "\u2502"
    },
    classic: {
      topLeft: "+",
      top: "-",
      topRight: "+",
      right: "|",
      bottomRight: "+",
      bottom: "-",
      bottomLeft: "+",
      left: "|"
    },
    arrow: {
      topLeft: "\u2198",
      top: "\u2193",
      topRight: "\u2199",
      right: "\u2190",
      bottomRight: "\u2196",
      bottom: "\u2191",
      bottomLeft: "\u2197",
      left: "\u2192"
    }
  };
});

// ../node_modules/cli-boxes/index.js
var Bl = b((IM, Tl) => {
  "use strict";
  var Gb = Vb();
  Tl.exports = Gb;
  Tl.exports.default = Gb;
});

// ../node_modules/string-width/node_modules/ansi-regex/index.js
var Zb = b((HM, Qb) => {
  "use strict";
  Qb.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});

// ../node_modules/string-width/node_modules/strip-ansi/index.js
var t0 = b((UM, e0) => {
  "use strict";
  var nT = Zb();
  e0.exports = (e) => typeof e == "string" ? e.replace(nT(), "") : e;
});

// ../node_modules/is-fullwidth-code-point/index.js
var i0 = b((WM, Pl) => {
  "use strict";
  var r0 = /* @__PURE__ */ n((e) => Number.isNaN(e) ? !1 : e >= 4352 && (e <= 4447 || // Hangul Jamo
  e === 9001 || // LEFT-POINTING ANGLE BRACKET
  e === 9002 || // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  11904 <= e && e <= 12871 && e !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  12880 <= e && e <= 19903 || // CJK Unified Ideographs .. Yi Radicals
  19968 <= e && e <= 42182 || // Hangul Jamo Extended-A
  43360 <= e && e <= 43388 || // Hangul Syllables
  44032 <= e && e <= 55203 || // CJK Compatibility Ideographs
  63744 <= e && e <= 64255 || // Vertical Forms
  65040 <= e && e <= 65049 || // CJK Compatibility Forms .. Small Form Variants
  65072 <= e && e <= 65131 || // Halfwidth and Fullwidth Forms
  65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || // Kana Supplement
  110592 <= e && e <= 110593 || // Enclosed Ideographic Supplement
  127488 <= e && e <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  131072 <= e && e <= 262141), "isFullwidthCodePoint");
  Pl.exports = r0;
  Pl.exports.default = r0;
});

// ../node_modules/string-width/node_modules/emoji-regex/index.js
var s0 = b((zM, n0) => {
  "use strict";
  n0.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});

// ../node_modules/string-width/index.js
var u0 = b((VM, ql) => {
  "use strict";
  var sT = t0(), oT = i0(), uT = s0(), o0 = /* @__PURE__ */ n((e) => {
    if (typeof e != "string" || e.length === 0 || (e = sT(e), e.length === 0))
      return 0;
    e = e.replace(uT(), "  ");
    let t = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.codePointAt(r);
      i <= 31 || i >= 127 && i <= 159 || i >= 768 && i <= 879 || (i > 65535 && r++, t += oT(i) ? 2 : 1);
    }
    return t;
  }, "stringWidth");
  ql.exports = o0;
  ql.exports.default = o0;
});

// ../node_modules/ansi-align/index.js
var l0 = b((JM, a0) => {
  "use strict";
  var aT = u0();
  function er(e, t) {
    if (!e) return e;
    t = t || {};
    let r = t.align || "center";
    if (r === "left") return e;
    let i = t.split || `
`, s = t.pad || " ", o = r !== "right" ? lT : fT, u = !1;
    Array.isArray(e) || (u = !0, e = String(e).split(i));
    let a, l = 0;
    return e = e.map(function(f) {
      return f = String(f), a = aT(f), l = Math.max(a, l), {
        str: f,
        width: a
      };
    }).map(function(f) {
      return new Array(o(l, f.width) + 1).join(s) + f.str;
    }), u ? e.join(i) : e;
  }
  n(er, "ansiAlign");
  er.left = /* @__PURE__ */ n(function(t) {
    return er(t, { align: "left" });
  }, "left");
  er.center = /* @__PURE__ */ n(function(t) {
    return er(t, { align: "center" });
  }, "center");
  er.right = /* @__PURE__ */ n(function(t) {
    return er(t, { align: "right" });
  }, "right");
  a0.exports = er;
  function lT(e, t) {
    return Math.floor((e - t) / 2);
  }
  n(lT, "halfDiff");
  function fT(e, t) {
    return e - t;
  }
  n(fT, "fullDiff");
});

// ../node_modules/ts-dedent/dist/index.js
var Ul = b((Vi) => {
  "use strict";
  Object.defineProperty(Vi, "__esModule", { value: !0 });
  Vi.dedent = void 0;
  function F0(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
    var i = Array.from(typeof e == "string" ? [e] : e);
    i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var s = i.reduce(function(a, l) {
      var f = l.match(/\n([\t ]+|(?!\s).)/g);
      return f ? a.concat(f.map(function(p) {
        var d, c;
        return (c = (d = p.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && c !== void 0 ? c : 0;
      })) : a;
    }, []);
    if (s.length) {
      var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, s) + "}", "g");
      i = i.map(function(a) {
        return a.replace(o, `
`);
      });
    }
    i[0] = i[0].replace(/^\r?\n/, "");
    var u = i[0];
    return t.forEach(function(a, l) {
      var f = u.match(/(?:^|\n)( *)$/), p = f ? f[1] : "", d = a;
      typeof a == "string" && a.includes(`
`) && (d = String(a).split(`
`).map(function(c, h) {
        return h === 0 ? c : "" + p + c;
      }).join(`
`)), u += d + i[l + 1];
    }), u;
  }
  n(F0, "dedent");
  Vi.dedent = F0;
  Vi.default = F0;
});

// src/cli/detect.ts
import { existsSync as _l } from "node:fs";
import { resolve as xR } from "node:path";
import { HandledError as SR, commandLog as Sb } from "@storybook/core/common";
import { logger as AR } from "@storybook/core/node-logger";

// node_modules/find-up/index.js
import Nr from "node:path";

// ../node_modules/locate-path/index.js
import U0 from "node:process";
import W0 from "node:path";
import Jl, { promises as u8 } from "node:fs";
import { fileURLToPath as $0 } from "node:url";
var Yl = {
  directory: "isDirectory",
  file: "isFile"
};
function z0(e) {
  if (!Object.hasOwnProperty.call(Yl, e))
    throw new Error(`Invalid type specified: ${e}`);
}
n(z0, "checkType");
var V0 = /* @__PURE__ */ n((e, t) => t[Yl[e]](), "matchType"), G0 = /* @__PURE__ */ n((e) => e instanceof URL ? $0(e) : e, "toPath");
function Vs(e, {
  cwd: t = U0.cwd(),
  type: r = "file",
  allowSymlinks: i = !0
} = {}) {
  z0(r), t = G0(t);
  let s = i ? Jl.statSync : Jl.lstatSync;
  for (let o of e)
    try {
      let u = s(W0.resolve(t, o), {
        throwIfNoEntry: !1
      });
      if (!u)
        continue;
      if (V0(r, u))
        return o;
    } catch {
    }
}
n(Vs, "locatePathSync");

// ../node_modules/unicorn-magic/node.js
import { fileURLToPath as J0 } from "node:url";
function Gs(e) {
  return e instanceof URL ? J0(e) : e;
}
n(Gs, "toPath");

// node_modules/path-exists/index.js
import g8, { promises as y8 } from "node:fs";

// node_modules/find-up/index.js
var Y0 = Symbol("findUpStop");
function K0(e, t = {}) {
  let r = Nr.resolve(Gs(t.cwd) ?? ""), { root: i } = Nr.parse(r), s = Nr.resolve(r, Gs(t.stopAt) ?? i), o = t.limit ?? Number.POSITIVE_INFINITY,
  u = [e].flat(), a = /* @__PURE__ */ n((f) => {
    if (typeof e != "function")
      return Vs(u, f);
    let p = e(f.cwd);
    return typeof p == "string" ? Vs([p], f) : p;
  }, "runMatcher"), l = [];
  for (; ; ) {
    let f = a({ ...t, cwd: r });
    if (f === Y0 || (f && l.push(Nr.resolve(r, f)), r === s || l.length >= o))
      break;
    r = Nr.dirname(r);
  }
  return l;
}
n(K0, "findUpMultipleSync");
function rr(e, t = {}) {
  return K0(e, { ...t, limit: 1 })[0];
}
n(rr, "findUpSync");

// src/cli/detect.ts
var Ab = be(cn(), 1);
import Qt from "semver";

// src/cli/helpers.ts
import { cpSync as dR, existsSync as vt, readFileSync as pR, writeFileSync as DR } from "node:fs";
import { cp as Eb, readFile as mR, writeFile as gR } from "node:fs/promises";
import { join as qr, resolve as wl } from "node:path";
import {
  frameworkToRenderer as yR
} from "@storybook/core/common";
import { versions as bR } from "@storybook/core/common";
var Cb = be(uu(), 1);
import { coerce as Fb, major as vR, satisfies as wR } from "semver";

// ../node_modules/strip-json-comments/index.js
var au = Symbol("singleComment"), Ad = Symbol("multiComment"), nE = /* @__PURE__ */ n(() => "", "stripWithoutWhitespace"), sE = /* @__PURE__ */ n(
(e, t, r) => e.slice(t, r).replace(/\S/g, " "), "stripWithWhitespace"), oE = /* @__PURE__ */ n((e, t) => {
  let r = t - 1, i = 0;
  for (; e[r] === "\\"; )
    r -= 1, i += 1;
  return !!(i % 2);
}, "isEscaped");
function lu(e, { whitespace: t = !0, trailingCommas: r = !1 } = {}) {
  if (typeof e != "string")
    throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);
  let i = t ? sE : nE, s = !1, o = !1, u = 0, a = "", l = "", f = -1;
  for (let p = 0; p < e.length; p++) {
    let d = e[p], c = e[p + 1];
    if (!o && d === '"' && (oE(e, p) || (s = !s)), !s)
      if (!o && d + c === "//")
        a += e.slice(u, p), u = p, o = au, p++;
      else if (o === au && d + c === `\r
`) {
        p++, o = !1, a += i(e, u, p), u = p;
        continue;
      } else if (o === au && d === `
`)
        o = !1, a += i(e, u, p), u = p;
      else if (!o && d + c === "/*") {
        a += e.slice(u, p), u = p, o = Ad, p++;
        continue;
      } else if (o === Ad && d + c === "*/") {
        p++, o = !1, a += i(e, u, p + 1), u = p + 1;
        continue;
      } else r && !o && (f !== -1 ? d === "}" || d === "]" ? (a += e.slice(u, p), l += i(a, 0, 1) + a.slice(1), a = "", u = p, f = -1) : d !==
      " " && d !== "	" && d !== "\r" && d !== `
` && (a += e.slice(u, p), u = p, f = -1) : d === "," && (l += a + e.slice(u, p), a = "", u = p, f = p));
  }
  return l + a + (o ? i(e.slice(u)) : e.slice(u));
}
n(lu, "stripJsonComments");

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var uE = process.env.NODE_ENV === "production", fu = "Invariant failed";
function Qr(e, t) {
  if (!e) {
    if (uE)
      throw new Error(fu);
    var r = typeof t == "function" ? t() : t, i = r ? "".concat(fu, ": ").concat(r) : fu;
    throw new Error(i);
  }
}
n(Qr, "invariant");

// src/cli/dirs.ts
var bl = be(hb(), 1), vl = be(pb(), 1);
import { dirname as lR, join as wb } from "node:path";
import { temporaryDirectory as fR, versions as hR } from "@storybook/core/common";

// src/cli/project_types.ts
import { minVersion as nR, validRange as sR } from "semver";
function Db(e, t) {
  return sR(e) ? nR(e)?.major === t : !1;
}
n(Db, "eqMajor");
var mb = [
  { name: "qwik", packageName: "storybook-framework-qwik" },
  { name: "solid", frameworks: ["storybook-solidjs-vite"], renderer: "storybook-solidjs" }
], aq = [
  "react",
  "react-native",
  "vue3",
  "angular",
  "ember",
  "preact",
  "svelte",
  "qwik",
  "solid"
], yl = /* @__PURE__ */ ((E) => (E.UNDETECTED = "UNDETECTED", E.UNSUPPORTED = "UNSUPPORTED", E.REACT = "REACT", E.REACT_SCRIPTS = "REACT_SCR\
IPTS", E.REACT_NATIVE = "REACT_NATIVE", E.REACT_PROJECT = "REACT_PROJECT", E.WEBPACK_REACT = "WEBPACK_REACT", E.NEXTJS = "NEXTJS", E.VUE3 = "\
VUE3", E.ANGULAR = "ANGULAR", E.EMBER = "EMBER", E.WEB_COMPONENTS = "WEB_COMPONENTS", E.HTML = "HTML", E.QWIK = "QWIK", E.PREACT = "PREACT",
E.SVELTE = "SVELTE", E.SVELTEKIT = "SVELTEKIT", E.SERVER = "SERVER", E.NX = "NX", E.SOLID = "SOLID", E))(yl || {}), gb = /* @__PURE__ */ ((r) => (r.
Webpack5 = "webpack5", r.Vite = "vite", r))(gb || {}), oR = /* @__PURE__ */ ((r) => (r.Babel = "babel", r.SWC = "swc", r))(oR || {}), uR = /* @__PURE__ */ ((t) => (t.
Rsbuild = "rsbuild", t))(uR || {}), lq = {
  "@storybook/addon-webpack5-compiler-babel": "babel",
  "@storybook/addon-webpack5-compiler-swc": "swc"
}, fq = {
  "@storybook/builder-webpack5": "webpack5",
  "@storybook/builder-vite": "vite"
}, yb = /* @__PURE__ */ ((i) => (i.JAVASCRIPT = "javascript", i.TYPESCRIPT_3_8 = "typescript-3-8", i.TYPESCRIPT_4_9 = "typescript-4-9", i))(
yb || {}), bb = [
  {
    preset: "VUE3",
    dependencies: {
      // This Vue template works with Vue 3
      vue: /* @__PURE__ */ n((e) => e === "next" || Db(e, 3), "vue")
    },
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.some(Boolean) ?? !1, "matcherFunction")
  },
  {
    preset: "EMBER",
    dependencies: ["ember-cli"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "NEXTJS",
    dependencies: ["next"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "QWIK",
    dependencies: ["@builder.io/qwik"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "REACT_PROJECT",
    peerDependencies: ["react"],
    matcherFunction: /* @__PURE__ */ n(({ peerDependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "REACT_NATIVE",
    dependencies: ["react-native", "react-native-scripts"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.some(Boolean) ?? !1, "matcherFunction")
  },
  {
    preset: "REACT_SCRIPTS",
    // For projects using a custom/forked `react-scripts` package.
    files: ["/node_modules/.bin/react-scripts"],
    // For standard CRA projects
    dependencies: ["react-scripts"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e, files: t }) => (e?.every(Boolean) || t?.every(Boolean)) ?? !1, "matcherFunction")
  },
  {
    preset: "ANGULAR",
    dependencies: ["@angular/core"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "WEB_COMPONENTS",
    dependencies: ["lit-element", "lit-html", "lit"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.some(Boolean) ?? !1, "matcherFunction")
  },
  {
    preset: "PREACT",
    dependencies: ["preact"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    // TODO: This only works because it is before the SVELTE template. could be more explicit
    preset: "SVELTEKIT",
    dependencies: ["@sveltejs/kit"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "SVELTE",
    dependencies: ["svelte"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "SOLID",
    dependencies: ["solid-js"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  // DO NOT MOVE ANY TEMPLATES BELOW THIS LINE
  // React is part of every Template, after Storybook is initialized once
  {
    preset: "WEBPACK_REACT",
    dependencies: ["react", "webpack"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  },
  {
    preset: "REACT",
    dependencies: ["react"],
    matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.every(Boolean) ?? !0, "matcherFunction")
  }
], vb = {
  preset: "UNSUPPORTED",
  dependencies: {
    // TODO(blaine): Remove when we support Nuxt 3
    nuxt: /* @__PURE__ */ n((e) => Db(e, 3), "nuxt")
  },
  matcherFunction: /* @__PURE__ */ n(({ dependencies: e }) => e?.some(Boolean) ?? !1, "matcherFunction")
}, aR = [
  "UNDETECTED",
  "UNSUPPORTED",
  "NX"
], hq = Object.values(yl).filter((e) => !aR.includes(e)).map((e) => e.toLowerCase());

// src/cli/dirs.ts
var cR = /* @__PURE__ */ n(async (e, t) => {
  let r = await fR(), s = hR[t] || await e.latestVersion(t), o = vl.default.default || vl.default, u = bl.default.default || bl.default, a = o(
  t, s, {
    registry: await e.getRegistryURL()
  });
  return await u({ url: a, dir: r }), wb(r, "package");
}, "resolveUsingBranchInstall");
async function _b(e, t) {
  let r = mb.find((u) => u.name === t), i = r?.renderer || r?.packageName || `@storybook/${t}`, s = wb(i, "package.json"), o = [];
  try {
    return lR(
      C.resolve(s, {
        paths: [process.cwd()]
      })
    );
  } catch (u) {
    Qr(u instanceof Error), o.push(u);
  }
  try {
    return await cR(e, i);
  } catch (u) {
    Qr(u instanceof Error), o.push(u);
  }
  throw new Error(`Cannot find ${s}, ${o.map((u) => u.stack).join(`

`)}`);
}
n(_b, "getRendererDir");

// src/cli/helpers.ts
var _R = console;
function Tq(e, t) {
  let r = wl(e);
  if (!vt(r))
    return !1;
  let i = pR(r, "utf8"), s = t ? lu(i) : i;
  try {
    return JSON.parse(s);
  } catch (o) {
    throw _R.error(Cb.default.red(`Invalid json in file: ${r}`)), o;
  }
}
n(Tq, "readFileAsJson");
var Bq = /* @__PURE__ */ n((e, t) => {
  let r = wl(e);
  return vt(r) ? (DR(r, `${JSON.stringify(t, null, 2)}
`), !0) : !1;
}, "writeFileAsJson");
async function kq(e, t) {
  let r = [], i = "^8.0.0-0", s = t.dependencies["babel-core"] || t.devDependencies["babel-core"];
  if (s) {
    let o = await e.latestVersion(
      "babel-core",
      s
    );
    wR(o, "^6.0.0") && (i = "^7.0.0");
  } else if (!t.dependencies["@babel/core"] && !t.devDependencies["@babel/core"]) {
    let o = await e.getVersion("@babel/core");
    r.push(`@babel/core@${o}`);
  }
  if (!t.dependencies["babel-loader"] && !t.devDependencies["babel-loader"]) {
    let o = await e.getVersion(
      "babel-loader",
      i
    );
    r.push(`babel-loader@${o}`);
  }
  return r;
}
n(kq, "getBabelDependencies");
function Oq(e, t, r) {
  !e.dependencies?.[t] && !e.devDependencies?.[t] && (e.devDependencies ? e.devDependencies[t] = r : e.devDependencies = {
    [t]: r
  });
}
n(Oq, "addToDevDependenciesIfNotPresent");
function Pq(e, t = ".") {
  let r = wl(e, "template-csf/");
  if (!vt(r))
    throw new Error("Couldn't find template dir");
  dR(r, t, { recursive: !0 });
}
n(Pq, "copyTemplate");
var ER = yR, qq = {
  angular: "webpack5",
  ember: "webpack5",
  "html-vite": "vite",
  "html-webpack5": "webpack5",
  nextjs: "webpack5",
  "experimental-nextjs-vite": "vite",
  "preact-vite": "vite",
  "preact-webpack5": "webpack5",
  qwik: "vite",
  "react-vite": "vite",
  "react-webpack5": "webpack5",
  "server-webpack5": "webpack5",
  solid: "vite",
  "svelte-vite": "vite",
  "svelte-webpack5": "webpack5",
  sveltekit: "vite",
  "vue3-vite": "vite",
  "vue3-webpack5": "webpack5",
  "web-components-vite": "vite",
  "web-components-webpack5": "webpack5",
  // Only to pass type checking, will never be used
  "react-rsbuild": "rsbuild",
  "vue3-rsbuild": "rsbuild"
};
async function CR(e, t) {
  try {
    let r = await e.getInstalledVersion(t);
    return r || (r = (await e.getAllDependencies())[t] ?? ""), Fb(r, { includePrerelease: !0 })?.toString();
  } catch {
  }
}
n(CR, "getVersionSafe");
async function Mq({
  packageManager: e,
  renderer: t,
  language: r,
  destination: i,
  commonAssetsDir: s
}) {
  let o = {
    // keeping this for backwards compatibility in case community packages are using it
    typescript: "ts",
    javascript: "js",
    "typescript-3-8": "ts-3-8",
    "typescript-4-9": "ts-4-9"
  };
  if (t === "svelte") {
    let f = await CR(e, "svelte");
    f && vR(f) >= 5 && (o = {
      // keeping this for backwards compatibility in case community packages are using it
      typescript: "ts",
      javascript: "svelte-5-js",
      "typescript-3-8": "svelte-5-ts-3-8",
      "typescript-4-9": "svelte-5-ts-4-9"
    });
  }
  let u = /* @__PURE__ */ n(async () => {
    let f = await _b(e, t), p = qr(f, "template", "cli"), d = qr(p, o[r]), c = qr(p, o.javascript), h = qr(p, o.typescript), g = qr(p, o["ty\
pescript-3-8"]);
    if (vt(d))
      return d;
    if (r === "typescript-4-9" && vt(g))
      return g;
    if (vt(h))
      return h;
    if (vt(c))
      return c;
    if (vt(p))
      return p;
    throw new Error(`Unsupported renderer: ${t} (${f})`);
  }, "templatePath"), l = i ?? await (/* @__PURE__ */ n(async () => vt("./src") ? "./src/stories" : "./stories", "targetPath"))();
  if (s && await Eb(s, l, {
    recursive: !0
  }), await Eb(await u(), l, { recursive: !0 }), s) {
    let f = ER[t] || "react";
    f === "vue3" && (f = "vue"), await FR(qr(l, "Configure.mdx"), { renderer: f });
  }
}
n(Mq, "copyTemplateFiles");
async function FR(e, t) {
  let r = await mR(e, { encoding: "utf8" });
  Object.keys(t).forEach((i) => {
    r = r.replaceAll(`{{${i}}}`, `${t[i]}`);
  }), await gR(e, r);
}
n(FR, "adjustTemplate");
function jq(e) {
  let t = {
    ...e.dependencies,
    ...e.devDependencies,
    ...e.optionalDependencies
  }, r = Object.keys(t).find((i) => bR[i]);
  if (!r)
    throw new Error("Couldn't find any official storybook packages in package.json");
  return t[r];
}
n(jq, "getStorybookVersionSpecifier");
async function xb() {
  return rr("nx.json");
}
n(xb, "isNxProject");
function Iq(e) {
  let t = Fb(e);
  return Qr(t != null, `Could not coerce ${e} into a semver.`), t;
}
n(Iq, "coerceSemver");
async function Lq(e) {
  let t = await e.getAllDependencies();
  return Object.keys(t).some((r) => r.includes("storybook"));
}
n(Lq, "hasStorybookDependencies");

// src/cli/detect.ts
var RR = ["vite.config.ts", "vite.config.js", "vite.config.mjs"], TR = ["webpack.config.js"], BR = /* @__PURE__ */ n((e, t, r) => {
  let i = e.dependencies?.[t] || e.devDependencies?.[t];
  return i && typeof r == "function" ? r(i) : !!i;
}, "hasDependency"), kR = /* @__PURE__ */ n((e, t, r) => {
  let i = e.peerDependencies?.[t];
  return i && typeof r == "function" ? r(i) : !!i;
}, "hasPeerDependency"), OR = /* @__PURE__ */ n((e, t) => {
  let r = {
    dependencies: [!1],
    peerDependencies: [!1],
    files: [!1]
  }, { preset: i, files: s, dependencies: o, peerDependencies: u, matcherFunction: a } = t, l = [];
  Array.isArray(o) ? l = o.map((p) => [p, void 0]) : typeof o == "object" && (l = Object.entries(o)), l.length > 0 && (r.dependencies = l.map(
    ([p, d]) => BR(e, p, d)
  ));
  let f = [];
  return Array.isArray(u) ? f = u.map((p) => [p, void 0]) : typeof u == "object" && (f = Object.entries(u)), f.length > 0 && (r.peerDependencies =
  f.map(
    ([p, d]) => kR(e, p, d)
  )), Array.isArray(s) && s.length > 0 && (r.files = s.map((p) => _l(p))), a(r) ? i : null;
}, "getFrameworkPreset");
function PR(e = {}) {
  let t = [...bb, vb].find((r) => OR(e, r) !== null);
  return t ? t.preset : "UNDETECTED";
}
n(PR, "detectFrameworkPreset");
async function Kq(e, t) {
  let r = rr(RR), i = rr(TR), s = await e.getAllDependencies();
  if (r || s.vite && s.webpack === void 0)
    return Sb("Detected Vite project. Setting builder to Vite")(), "vite";
  if (i || s.webpack && s.vite !== void 0)
    return Sb("Detected webpack project. Setting builder to webpack")(), "webpack5";
  switch (t) {
    case "REACT_SCRIPTS":
    case "ANGULAR":
    case "REACT_NATIVE":
    // technically react native doesn't use webpack, we just want to set something
    case "NEXTJS":
    case "EMBER":
      return "webpack5";
    default:
      let { builder: o } = await (0, Ab.default)(
        {
          type: "select",
          name: "builder",
          message: `
We were not able to detect the right builder for your project. Please select one:`,
          choices: [
            { title: "Vite", value: "vite" },
            { title: "Webpack 5", value: "webpack5" }
          ]
        },
        {
          onCancel: /* @__PURE__ */ n(() => {
            throw new SR("Canceled by the user");
          }, "onCancel")
        }
      );
      return o;
  }
}
n(Kq, "detectBuilder");
function Xq(e = xR(process.cwd(), ".storybook")) {
  return _l(e);
}
n(Xq, "isStorybookInstantiated");
async function Qq() {
  return !!rr([".pnp.js", ".pnp.cjs"]);
}
n(Qq, "detectPnp");
async function Zq(e) {
  let t = "javascript";
  if (_l("jsconfig.json"))
    return t;
  let r = await e.getAllDependencies().then((l) => !!l.typescript), i = await e.getPackageVersion("typescript"), s = await e.getPackageVersion(
  "prettier"), o = await e.getPackageVersion(
    "@babel/plugin-transform-typescript"
  ), u = await e.getPackageVersion(
    "@typescript-eslint/parser"
  ), a = await e.getPackageVersion("eslint-plugin-storybook");
  return r && i && (Qt.gte(i, "4.9.0") && (!s || Qt.gte(s, "2.8.0")) && (!o || Qt.gte(o, "7.20.0")) && (!u || Qt.gte(u, "5.44.0")) && (!a ||
  Qt.gte(a, "0.6.8")) ? t = "typescript-4-9" : Qt.gte(i, "3.8.0") ? t = "typescript-3-8" : Qt.lt(i, "3.8.0") && AR.warn("Detected TypeScript\
 < 3.8, populating with JavaScript examples")), t;
}
n(Zq, "detectLanguage");
async function eM(e, t = {}) {
  let r = await e.retrievePackageJson();
  return r ? await xb() ? "NX" : t.html ? "HTML" : PR(r) : "UNDETECTED";
}
n(eM, "detect");

// src/cli/angular/helpers.ts
import { existsSync as RT, readFileSync as TT, writeFileSync as BT } from "node:fs";
import { join as kT } from "node:path";
import { logger as OT } from "@storybook/core/node-logger";
import { MissingAngularJsonError as PT } from "@storybook/core/server-errors";

// ../node_modules/boxen/index.js
import Ws from "node:process";

// ../node_modules/ansi-regex/index.js
function El({ onlyFirst: e = !1 } = {}) {
  let t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
}
n(El, "ansiRegex");

// ../node_modules/strip-ansi/index.js
var qR = El();
function wt(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
  return e.replace(qR, "");
}
n(wt, "stripAnsi");

// ../node_modules/boxen/node_modules/string-width/index.js
var Bb = be(Ms(), 1), kb = be(js(), 1);
function Ze(e, t = {}) {
  if (typeof e != "string" || e.length === 0 || (t = {
    ambiguousIsNarrow: !0,
    ...t
  }, e = wt(e), e.length === 0))
    return 0;
  e = e.replace((0, kb.default)(), "  ");
  let r = t.ambiguousIsNarrow ? 1 : 2, i = 0;
  for (let s of e) {
    let o = s.codePointAt(0);
    if (o <= 31 || o >= 127 && o <= 159 || o >= 768 && o <= 879)
      continue;
    switch (Bb.default.eastAsianWidth(s)) {
      case "F":
      case "W":
        i += 2;
        break;
      case "A":
        i += r;
        break;
      default:
        i += 1;
    }
  }
  return i;
}
n(Ze, "stringWidth");

// ../node_modules/boxen/node_modules/chalk/source/vendor/ansi-styles/index.js
var Ob = /* @__PURE__ */ n((e = 0) => (t) => `\x1B[${t + e}m`, "wrapAnsi16"), Pb = /* @__PURE__ */ n((e = 0) => (t) => `\x1B[${38 + e};5;${t}\
m`, "wrapAnsi256"), qb = /* @__PURE__ */ n((e = 0) => (t, r, i) => `\x1B[${38 + e};2;${t};${r};${i}m`, "wrapAnsi16m"), se = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
}, pM = Object.keys(se.modifier), MR = Object.keys(se.color), jR = Object.keys(se.bgColor), DM = [...MR, ...jR];
function IR() {
  let e = /* @__PURE__ */ new Map();
  for (let [t, r] of Object.entries(se)) {
    for (let [i, s] of Object.entries(r))
      se[i] = {
        open: `\x1B[${s[0]}m`,
        close: `\x1B[${s[1]}m`
      }, r[i] = se[i], e.set(s[0], s[1]);
    Object.defineProperty(se, t, {
      value: r,
      enumerable: !1
    });
  }
  return Object.defineProperty(se, "codes", {
    value: e,
    enumerable: !1
  }), se.color.close = "\x1B[39m", se.bgColor.close = "\x1B[49m", se.color.ansi = Ob(), se.color.ansi256 = Pb(), se.color.ansi16m = qb(), se.
  bgColor.ansi = Ob(10), se.bgColor.ansi256 = Pb(10), se.bgColor.ansi16m = qb(10), Object.defineProperties(se, {
    rgbToAnsi256: {
      value(t, r, i) {
        return t === r && r === i ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 *
        Math.round(r / 255 * 5) + Math.round(i / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(t) {
        let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));
        if (!r)
          return [0, 0, 0];
        let [i] = r;
        i.length === 3 && (i = [...i].map((o) => o + o).join(""));
        let s = Number.parseInt(i, 16);
        return [
          /* eslint-disable no-bitwise */
          s >> 16 & 255,
          s >> 8 & 255,
          s & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: /* @__PURE__ */ n((t) => se.rgbToAnsi256(...se.hexToRgb(t)), "value"),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(t) {
        if (t < 8)
          return 30 + t;
        if (t < 16)
          return 90 + (t - 8);
        let r, i, s;
        if (t >= 232)
          r = ((t - 232) * 10 + 8) / 255, i = r, s = r;
        else {
          t -= 16;
          let a = t % 36;
          r = Math.floor(t / 36) / 5, i = Math.floor(a / 6) / 5, s = a % 6 / 5;
        }
        let o = Math.max(r, i, s) * 2;
        if (o === 0)
          return 30;
        let u = 30 + (Math.round(s) << 2 | Math.round(i) << 1 | Math.round(r));
        return o === 2 && (u += 60), u;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: /* @__PURE__ */ n((t, r, i) => se.ansi256ToAnsi(se.rgbToAnsi256(t, r, i)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ n((t) => se.ansi256ToAnsi(se.hexToAnsi256(t)), "value"),
      enumerable: !1
    }
  }), se;
}
n(IR, "assembleStyles");
var LR = IR(), Ne = LR;

// ../node_modules/boxen/node_modules/chalk/source/vendor/supports-color/index.js
import Fl from "node:process";
import NR from "node:os";
import Mb from "node:tty";
function Me(e, t = globalThis.Deno ? globalThis.Deno.args : Fl.argv) {
  let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", i = t.indexOf(r + e), s = t.indexOf("--");
  return i !== -1 && (s === -1 || i < s);
}
n(Me, "hasFlag");
var { env: fe } = Fl, Is;
Me("no-color") || Me("no-colors") || Me("color=false") || Me("color=never") ? Is = 0 : (Me("color") || Me("colors") || Me("color=true") || Me(
"color=always")) && (Is = 1);
function HR() {
  if ("FORCE_COLOR" in fe)
    return fe.FORCE_COLOR === "true" ? 1 : fe.FORCE_COLOR === "false" ? 0 : fe.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(fe.FORCE_COLOR,
    10), 3);
}
n(HR, "envForceColor");
function UR(e) {
  return e === 0 ? !1 : {
    level: e,
    hasBasic: !0,
    has256: e >= 2,
    has16m: e >= 3
  };
}
n(UR, "translateLevel");
function WR(e, { streamIsTTY: t, sniffFlags: r = !0 } = {}) {
  let i = HR();
  i !== void 0 && (Is = i);
  let s = r ? Is : i;
  if (s === 0)
    return 0;
  if (r) {
    if (Me("color=16m") || Me("color=full") || Me("color=truecolor"))
      return 3;
    if (Me("color=256"))
      return 2;
  }
  if ("TF_BUILD" in fe && "AGENT_NAME" in fe)
    return 1;
  if (e && !t && s === void 0)
    return 0;
  let o = s || 0;
  if (fe.TERM === "dumb")
    return o;
  if (Fl.platform === "win32") {
    let u = NR.release().split(".");
    return Number(u[0]) >= 10 && Number(u[2]) >= 10586 ? Number(u[2]) >= 14931 ? 3 : 2 : 1;
  }
  if ("CI" in fe)
    return "GITHUB_ACTIONS" in fe || "GITEA_ACTIONS" in fe ? 3 : ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some(
    (u) => u in fe) || fe.CI_NAME === "codeship" ? 1 : o;
  if ("TEAMCITY_VERSION" in fe)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(fe.TEAMCITY_VERSION) ? 1 : 0;
  if (fe.COLORTERM === "truecolor" || fe.TERM === "xterm-kitty")
    return 3;
  if ("TERM_PROGRAM" in fe) {
    let u = Number.parseInt((fe.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (fe.TERM_PROGRAM) {
      case "iTerm.app":
        return u >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(fe.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(fe.TERM) || "COLORTERM" in fe ?
  1 : o;
}
n(WR, "_supportsColor");
function jb(e, t = {}) {
  let r = WR(e, {
    streamIsTTY: e && e.isTTY,
    ...t
  });
  return UR(r);
}
n(jb, "createSupportsColor");
var $R = {
  stdout: jb({ isTTY: Mb.isatty(1) }),
  stderr: jb({ isTTY: Mb.isatty(2) })
}, Ib = $R;

// ../node_modules/boxen/node_modules/chalk/source/utilities.js
function Lb(e, t, r) {
  let i = e.indexOf(t);
  if (i === -1)
    return e;
  let s = t.length, o = 0, u = "";
  do
    u += e.slice(o, i) + t + r, o = i + s, i = e.indexOf(t, o);
  while (i !== -1);
  return u += e.slice(o), u;
}
n(Lb, "stringReplaceAll");
function Nb(e, t, r, i) {
  let s = 0, o = "";
  do {
    let u = e[i - 1] === "\r";
    o += e.slice(s, u ? i - 1 : i) + t + (u ? `\r
` : `
`) + r, s = i + 1, i = e.indexOf(`
`, s);
  } while (i !== -1);
  return o += e.slice(s), o;
}
n(Nb, "stringEncaseCRLFWithFirstIndex");

// ../node_modules/boxen/node_modules/chalk/source/index.js
var { stdout: Hb, stderr: Ub } = Ib, xl = Symbol("GENERATOR"), Mr = Symbol("STYLER"), Ui = Symbol("IS_EMPTY"), Wb = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], jr = /* @__PURE__ */ Object.create(null), zR = /* @__PURE__ */ n((e, t = {}) => {
  if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  let r = Hb ? Hb.level : 0;
  e.level = t.level === void 0 ? r : t.level;
}, "applyOptions");
var VR = /* @__PURE__ */ n((e) => {
  let t = /* @__PURE__ */ n((...r) => r.join(" "), "chalk");
  return zR(t, e), Object.setPrototypeOf(t, Wi.prototype), t;
}, "chalkFactory");
function Wi(e) {
  return VR(e);
}
n(Wi, "createChalk");
Object.setPrototypeOf(Wi.prototype, Function.prototype);
for (let [e, t] of Object.entries(Ne))
  jr[e] = {
    get() {
      let r = Ls(this, Al(t.open, t.close, this[Mr]), this[Ui]);
      return Object.defineProperty(this, e, { value: r }), r;
    }
  };
jr.visible = {
  get() {
    let e = Ls(this, this[Mr], !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
var Sl = /* @__PURE__ */ n((e, t, r, ...i) => e === "rgb" ? t === "ansi16m" ? Ne[r].ansi16m(...i) : t === "ansi256" ? Ne[r].ansi256(Ne.rgbToAnsi256(
...i)) : Ne[r].ansi(Ne.rgbToAnsi(...i)) : e === "hex" ? Sl("rgb", t, r, ...Ne.hexToRgb(...i)) : Ne[r][e](...i), "getModelAnsi"), GR = ["rgb",
"hex", "ansi256"];
for (let e of GR) {
  jr[e] = {
    get() {
      let { level: r } = this;
      return function(...i) {
        let s = Al(Sl(e, Wb[r], "color", ...i), Ne.color.close, this[Mr]);
        return Ls(this, s, this[Ui]);
      };
    }
  };
  let t = "bg" + e[0].toUpperCase() + e.slice(1);
  jr[t] = {
    get() {
      let { level: r } = this;
      return function(...i) {
        let s = Al(Sl(e, Wb[r], "bgColor", ...i), Ne.bgColor.close, this[Mr]);
        return Ls(this, s, this[Ui]);
      };
    }
  };
}
var JR = Object.defineProperties(() => {
}, {
  ...jr,
  level: {
    enumerable: !0,
    get() {
      return this[xl].level;
    },
    set(e) {
      this[xl].level = e;
    }
  }
}), Al = /* @__PURE__ */ n((e, t, r) => {
  let i, s;
  return r === void 0 ? (i = e, s = t) : (i = r.openAll + e, s = t + r.closeAll), {
    open: e,
    close: t,
    openAll: i,
    closeAll: s,
    parent: r
  };
}, "createStyler"), Ls = /* @__PURE__ */ n((e, t, r) => {
  let i = /* @__PURE__ */ n((...s) => YR(i, s.length === 1 ? "" + s[0] : s.join(" ")), "builder");
  return Object.setPrototypeOf(i, JR), i[xl] = e, i[Mr] = t, i[Ui] = r, i;
}, "createBuilder"), YR = /* @__PURE__ */ n((e, t) => {
  if (e.level <= 0 || !t)
    return e[Ui] ? "" : t;
  let r = e[Mr];
  if (r === void 0)
    return t;
  let { openAll: i, closeAll: s } = r;
  if (t.includes("\x1B"))
    for (; r !== void 0; )
      t = Lb(t, r.close, r.open), r = r.parent;
  let o = t.indexOf(`
`);
  return o !== -1 && (t = Nb(t, s, i, o)), i + t + s;
}, "applyStyle");
Object.defineProperties(Wi.prototype, jr);
var KR = Wi(), AM = Wi({ level: Ub ? Ub.level : 0 });
var Zt = KR;

// ../node_modules/widest-line/node_modules/string-width/index.js
var $b = be(Ms(), 1), zb = be(js(), 1);
function Rl(e, t = {}) {
  if (typeof e != "string" || e.length === 0 || (t = {
    ambiguousIsNarrow: !0,
    ...t
  }, e = wt(e), e.length === 0))
    return 0;
  e = e.replace((0, zb.default)(), "  ");
  let r = t.ambiguousIsNarrow ? 1 : 2, i = 0;
  for (let s of e) {
    let o = s.codePointAt(0);
    if (o <= 31 || o >= 127 && o <= 159 || o >= 768 && o <= 879)
      continue;
    switch ($b.default.eastAsianWidth(s)) {
      case "F":
      case "W":
        i += 2;
        break;
      case "A":
        i += r;
        break;
      default:
        i += 1;
    }
  }
  return i;
}
n(Rl, "stringWidth");

// ../node_modules/widest-line/index.js
function Ns(e) {
  let t = 0;
  for (let r of e.split(`
`))
    t = Math.max(t, Rl(r));
  return t;
}
n(Ns, "widestLine");

// ../node_modules/boxen/index.js
var E0 = be(Bl(), 1);

// ../node_modules/boxen/node_modules/camelcase/index.js
var QR = /[\p{Lu}]/u, ZR = /[\p{Ll}]/u, Jb = /^[\p{Lu}](?![\p{Lu}])/gu, Xb = /([\p{Alpha}\p{N}_]|$)/u, kl = /[_.\- ]+/, eT = new RegExp("^" +
kl.source), Yb = new RegExp(kl.source + Xb.source, "gu"), Kb = new RegExp("\\d+" + Xb.source, "gu"), tT = /* @__PURE__ */ n((e, t, r, i) => {
  let s = !1, o = !1, u = !1, a = !1;
  for (let l = 0; l < e.length; l++) {
    let f = e[l];
    a = l > 2 ? e[l - 3] === "-" : !0, s && QR.test(f) ? (e = e.slice(0, l) + "-" + e.slice(l), s = !1, u = o, o = !0, l++) : o && u && ZR.test(
    f) && (!a || i) ? (e = e.slice(0, l - 1) + "-" + e.slice(l - 1), u = o, o = !1, s = !0) : (s = t(f) === f && r(f) !== f, u = o, o = r(f) ===
    f && t(f) !== f);
  }
  return e;
}, "preserveCamelCase"), rT = /* @__PURE__ */ n((e, t) => (Jb.lastIndex = 0, e.replace(Jb, (r) => t(r))), "preserveConsecutiveUppercase"), iT = /* @__PURE__ */ n(
(e, t) => (Yb.lastIndex = 0, Kb.lastIndex = 0, e.replace(Yb, (r, i) => t(i)).replace(Kb, (r) => t(r))), "postProcess");
function Ol(e, t) {
  if (!(typeof e == "string" || Array.isArray(e)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (t = {
    pascalCase: !1,
    preserveConsecutiveUppercase: !1,
    ...t
  }, Array.isArray(e) ? e = e.map((o) => o.trim()).filter((o) => o.length).join("-") : e = e.trim(), e.length === 0)
    return "";
  let r = t.locale === !1 ? (o) => o.toLowerCase() : (o) => o.toLocaleLowerCase(t.locale), i = t.locale === !1 ? (o) => o.toUpperCase() : (o) => o.
  toLocaleUpperCase(t.locale);
  return e.length === 1 ? kl.test(e) ? "" : t.pascalCase ? i(e) : r(e) : (e !== r(e) && (e = tT(e, r, i, t.preserveConsecutiveUppercase)), e =
  e.replace(eT, ""), e = t.preserveConsecutiveUppercase ? rT(e, r) : r(e), t.pascalCase && (e = i(e.charAt(0)) + e.slice(1)), iT(e, i));
}
n(Ol, "camelCase");

// ../node_modules/boxen/index.js
var Ll = be(l0(), 1);

// ../node_modules/wrap-ansi/node_modules/string-width/index.js
var f0 = be(Ms(), 1), h0 = be(js(), 1);
function tr(e, t = {}) {
  if (typeof e != "string" || e.length === 0 || (t = {
    ambiguousIsNarrow: !0,
    ...t
  }, e = wt(e), e.length === 0))
    return 0;
  e = e.replace((0, h0.default)(), "  ");
  let r = t.ambiguousIsNarrow ? 1 : 2, i = 0;
  for (let s of e) {
    let o = s.codePointAt(0);
    if (o <= 31 || o >= 127 && o <= 159 || o >= 768 && o <= 879)
      continue;
    switch (f0.default.eastAsianWidth(s)) {
      case "F":
      case "W":
        i += 2;
        break;
      case "A":
        i += r;
        break;
      default:
        i += 1;
    }
  }
  return i;
}
n(tr, "stringWidth");

// ../node_modules/wrap-ansi/node_modules/ansi-styles/index.js
var c0 = /* @__PURE__ */ n((e = 0) => (t) => `\x1B[${t + e}m`, "wrapAnsi16"), d0 = /* @__PURE__ */ n((e = 0) => (t) => `\x1B[${38 + e};5;${t}\
m`, "wrapAnsi256"), p0 = /* @__PURE__ */ n((e = 0) => (t, r, i) => `\x1B[${38 + e};2;${t};${r};${i}m`, "wrapAnsi16m"), oe = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
}, ZM = Object.keys(oe.modifier), hT = Object.keys(oe.color), cT = Object.keys(oe.bgColor), ej = [...hT, ...cT];
function dT() {
  let e = /* @__PURE__ */ new Map();
  for (let [t, r] of Object.entries(oe)) {
    for (let [i, s] of Object.entries(r))
      oe[i] = {
        open: `\x1B[${s[0]}m`,
        close: `\x1B[${s[1]}m`
      }, r[i] = oe[i], e.set(s[0], s[1]);
    Object.defineProperty(oe, t, {
      value: r,
      enumerable: !1
    });
  }
  return Object.defineProperty(oe, "codes", {
    value: e,
    enumerable: !1
  }), oe.color.close = "\x1B[39m", oe.bgColor.close = "\x1B[49m", oe.color.ansi = c0(), oe.color.ansi256 = d0(), oe.color.ansi16m = p0(), oe.
  bgColor.ansi = c0(10), oe.bgColor.ansi256 = d0(10), oe.bgColor.ansi16m = p0(10), Object.defineProperties(oe, {
    rgbToAnsi256: {
      value: /* @__PURE__ */ n((t, r, i) => t === r && r === i ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 *
      Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(i / 255 * 5), "value"),
      enumerable: !1
    },
    hexToRgb: {
      value: /* @__PURE__ */ n((t) => {
        let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));
        if (!r)
          return [0, 0, 0];
        let [i] = r;
        i.length === 3 && (i = [...i].map((o) => o + o).join(""));
        let s = Number.parseInt(i, 16);
        return [
          /* eslint-disable no-bitwise */
          s >> 16 & 255,
          s >> 8 & 255,
          s & 255
          /* eslint-enable no-bitwise */
        ];
      }, "value"),
      enumerable: !1
    },
    hexToAnsi256: {
      value: /* @__PURE__ */ n((t) => oe.rgbToAnsi256(...oe.hexToRgb(t)), "value"),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value: /* @__PURE__ */ n((t) => {
        if (t < 8)
          return 30 + t;
        if (t < 16)
          return 90 + (t - 8);
        let r, i, s;
        if (t >= 232)
          r = ((t - 232) * 10 + 8) / 255, i = r, s = r;
        else {
          t -= 16;
          let a = t % 36;
          r = Math.floor(t / 36) / 5, i = Math.floor(a / 6) / 5, s = a % 6 / 5;
        }
        let o = Math.max(r, i, s) * 2;
        if (o === 0)
          return 30;
        let u = 30 + (Math.round(s) << 2 | Math.round(i) << 1 | Math.round(r));
        return o === 2 && (u += 60), u;
      }, "value"),
      enumerable: !1
    },
    rgbToAnsi: {
      value: /* @__PURE__ */ n((t, r, i) => oe.ansi256ToAnsi(oe.rgbToAnsi256(t, r, i)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ n((t) => oe.ansi256ToAnsi(oe.hexToAnsi256(t)), "value"),
      enumerable: !1
    }
  }), oe;
}
n(dT, "assembleStyles");
var pT = dT(), D0 = pT;

// ../node_modules/wrap-ansi/index.js
var Hs = /* @__PURE__ */ new Set([
  "\x1B",
  "\x9B"
]), DT = 39, jl = "\x07", y0 = "[", mT = "]", b0 = "m", Il = `${mT}8;;`, m0 = /* @__PURE__ */ n((e) => `${Hs.values().next().value}${y0}${e}${b0}`,
"wrapAnsiCode"), g0 = /* @__PURE__ */ n((e) => `${Hs.values().next().value}${Il}${e}${jl}`, "wrapAnsiHyperlink"), gT = /* @__PURE__ */ n((e) => e.
split(" ").map((t) => tr(t)), "wordLengths"), Ml = /* @__PURE__ */ n((e, t, r) => {
  let i = [...t], s = !1, o = !1, u = tr(wt(e[e.length - 1]));
  for (let [a, l] of i.entries()) {
    let f = tr(l);
    if (u + f <= r ? e[e.length - 1] += l : (e.push(l), u = 0), Hs.has(l) && (s = !0, o = i.slice(a + 1).join("").startsWith(Il)), s) {
      o ? l === jl && (s = !1, o = !1) : l === b0 && (s = !1);
      continue;
    }
    u += f, u === r && a < i.length - 1 && (e.push(""), u = 0);
  }
  !u && e[e.length - 1].length > 0 && e.length > 1 && (e[e.length - 2] += e.pop());
}, "wrapWord"), yT = /* @__PURE__ */ n((e) => {
  let t = e.split(" "), r = t.length;
  for (; r > 0 && !(tr(t[r - 1]) > 0); )
    r--;
  return r === t.length ? e : t.slice(0, r).join(" ") + t.slice(r).join("");
}, "stringVisibleTrimSpacesRight"), bT = /* @__PURE__ */ n((e, t, r = {}) => {
  if (r.trim !== !1 && e.trim() === "")
    return "";
  let i = "", s, o, u = gT(e), a = [""];
  for (let [f, p] of e.split(" ").entries()) {
    r.trim !== !1 && (a[a.length - 1] = a[a.length - 1].trimStart());
    let d = tr(a[a.length - 1]);
    if (f !== 0 && (d >= t && (r.wordWrap === !1 || r.trim === !1) && (a.push(""), d = 0), (d > 0 || r.trim === !1) && (a[a.length - 1] += "\
 ", d++)), r.hard && u[f] > t) {
      let c = t - d, h = 1 + Math.floor((u[f] - c - 1) / t);
      Math.floor((u[f] - 1) / t) < h && a.push(""), Ml(a, p, t);
      continue;
    }
    if (d + u[f] > t && d > 0 && u[f] > 0) {
      if (r.wordWrap === !1 && d < t) {
        Ml(a, p, t);
        continue;
      }
      a.push("");
    }
    if (d + u[f] > t && r.wordWrap === !1) {
      Ml(a, p, t);
      continue;
    }
    a[a.length - 1] += p;
  }
  r.trim !== !1 && (a = a.map((f) => yT(f)));
  let l = [...a.join(`
`)];
  for (let [f, p] of l.entries()) {
    if (i += p, Hs.has(p)) {
      let { groups: c } = new RegExp(`(?:\\${y0}(?<code>\\d+)m|\\${Il}(?<uri>.*)${jl})`).exec(l.slice(f).join("")) || { groups: {} };
      if (c.code !== void 0) {
        let h = Number.parseFloat(c.code);
        s = h === DT ? void 0 : h;
      } else c.uri !== void 0 && (o = c.uri.length === 0 ? void 0 : c.uri);
    }
    let d = D0.codes.get(Number(s));
    l[f + 1] === `
` ? (o && (i += g0("")), s && d && (i += m0(d))) : p === `
` && (s && d && (i += m0(s)), o && (i += g0(o)));
  }
  return i;
}, "exec");
function Us(e, t, r) {
  return String(e).normalize().replace(/\r\n/g, `
`).split(`
`).map((i) => bT(i, t, r)).join(`
`);
}
n(Us, "wrapAnsi");

// ../node_modules/boxen/index.js
var AT = be(Bl(), 1);
var qt = `
`, Ae = " ", $i = "none", C0 = /* @__PURE__ */ n(() => {
  let { env: e, stdout: t, stderr: r } = Ws;
  return t?.columns ? t.columns : r?.columns ? r.columns : e.COLUMNS ? Number.parseInt(e.COLUMNS, 10) : 80;
}, "terminalColumns"), v0 = /* @__PURE__ */ n((e) => typeof e == "number" ? {
  top: e,
  right: e * 3,
  bottom: e,
  left: e * 3
} : {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  ...e
}, "getObject"), zi = /* @__PURE__ */ n((e) => e === $i ? 0 : 2, "getBorderWidth"), vT = /* @__PURE__ */ n((e) => {
  let t = [
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "left",
    "right",
    "top",
    "bottom"
  ], r;
  if (e === $i) {
    e = {};
    for (let i of t)
      e[i] = "";
  }
  if (typeof e == "string") {
    if (r = E0.default[e], !r)
      throw new TypeError(`Invalid border style: ${e}`);
  } else {
    typeof e?.vertical == "string" && (e.left = e.vertical, e.right = e.vertical), typeof e?.horizontal == "string" && (e.top = e.horizontal,
    e.bottom = e.horizontal);
    for (let i of t)
      if (e[i] === null || typeof e[i] != "string")
        throw new TypeError(`Invalid border style: ${i}`);
    r = e;
  }
  return r;
}, "getBorderChars"), wT = /* @__PURE__ */ n((e, t, r) => {
  let i = "", s = Ze(e);
  switch (r) {
    case "left": {
      i = e + t.slice(s);
      break;
    }
    case "right": {
      i = t.slice(s) + e;
      break;
    }
    default: {
      t = t.slice(s), t.length % 2 === 1 ? (t = t.slice(Math.floor(t.length / 2)), i = t.slice(1) + e + t) : (t = t.slice(t.length / 2), i =
      t + e + t);
      break;
    }
  }
  return i;
}, "makeTitle"), _T = /* @__PURE__ */ n((e, { padding: t, width: r, textAlignment: i, height: s }) => {
  e = (0, Ll.default)(e, { align: i });
  let o = e.split(qt), u = Ns(e), a = r - t.left - t.right;
  if (u > a) {
    let p = [];
    for (let d of o) {
      let c = Us(d, a, { hard: !0 }), g = (0, Ll.default)(c, { align: i }).split(`
`), _ = Math.max(...g.map((y) => Ze(y)));
      for (let y of g) {
        let w;
        switch (i) {
          case "center": {
            w = Ae.repeat((a - _) / 2) + y;
            break;
          }
          case "right": {
            w = Ae.repeat(a - _) + y;
            break;
          }
          default: {
            w = y;
            break;
          }
        }
        p.push(w);
      }
    }
    o = p;
  }
  i === "center" && u < a ? o = o.map((p) => Ae.repeat((a - u) / 2) + p) : i === "right" && u < a && (o = o.map((p) => Ae.repeat(a - u) + p));
  let l = Ae.repeat(t.left), f = Ae.repeat(t.right);
  return o = o.map((p) => l + p + f), o = o.map((p) => {
    if (r - Ze(p) > 0)
      switch (i) {
        case "center":
          return p + Ae.repeat(r - Ze(p));
        case "right":
          return p + Ae.repeat(r - Ze(p));
        default:
          return p + Ae.repeat(r - Ze(p));
      }
    return p;
  }), t.top > 0 && (o = [...Array.from({ length: t.top }).fill(Ae.repeat(r)), ...o]), t.bottom > 0 && (o = [...o, ...Array.from({ length: t.
  bottom }).fill(Ae.repeat(r))]), s && o.length > s ? o = o.slice(0, s) : s && o.length < s && (o = [...o, ...Array.from({ length: s - o.length }).
  fill(Ae.repeat(r))]), o.join(qt);
}, "makeContentText"), ET = /* @__PURE__ */ n((e, t, r) => {
  let i = /* @__PURE__ */ n((p) => {
    let d = r.borderColor ? xT(r.borderColor)(p) : p;
    return r.dimBorder ? Zt.dim(d) : d;
  }, "colorizeBorder"), s = /* @__PURE__ */ n((p) => r.backgroundColor ? ST(r.backgroundColor)(p) : p, "colorizeContent"), o = vT(r.borderStyle),
  u = C0(), a = Ae.repeat(r.margin.left);
  if (r.float === "center") {
    let p = Math.max((u - t - zi(r.borderStyle)) / 2, 0);
    a = Ae.repeat(p);
  } else if (r.float === "right") {
    let p = Math.max(u - t - r.margin.right - zi(r.borderStyle), 0);
    a = Ae.repeat(p);
  }
  let l = "";
  r.margin.top && (l += qt.repeat(r.margin.top)), (r.borderStyle !== $i || r.title) && (l += i(a + o.topLeft + (r.title ? wT(r.title, o.top.
  repeat(t), r.titleAlignment) : o.top.repeat(t)) + o.topRight) + qt);
  let f = e.split(qt);
  return l += f.map((p) => a + i(o.left) + s(p) + i(o.right)).join(qt), r.borderStyle !== $i && (l += qt + i(a + o.bottomLeft + o.bottom.repeat(
  t) + o.bottomRight)), r.margin.bottom && (l += qt.repeat(r.margin.bottom)), l;
}, "boxContent"), CT = /* @__PURE__ */ n((e) => {
  if (e.fullscreen && Ws?.stdout) {
    let t = [Ws.stdout.columns, Ws.stdout.rows];
    typeof e.fullscreen == "function" && (t = e.fullscreen(...t)), e.width || (e.width = t[0]), e.height || (e.height = t[1]);
  }
  return e.width && (e.width = Math.max(1, e.width - zi(e.borderStyle))), e.height && (e.height = Math.max(1, e.height - zi(e.borderStyle))),
  e;
}, "sanitizeOptions"), w0 = /* @__PURE__ */ n((e, t) => t === $i ? e : ` ${e} `, "formatTitle"), FT = /* @__PURE__ */ n((e, t) => {
  t = CT(t);
  let r = t.width !== void 0, i = C0(), s = zi(t.borderStyle), o = i - t.margin.left - t.margin.right - s, u = Ns(Us(e, i - s, { hard: !0, trim: !1 })) +
  t.padding.left + t.padding.right;
  if (t.title && r ? (t.title = t.title.slice(0, Math.max(0, t.width - 2)), t.title && (t.title = w0(t.title, t.borderStyle))) : t.title && (t.
  title = t.title.slice(0, Math.max(0, o - 2)), t.title && (t.title = w0(t.title, t.borderStyle), Ze(t.title) > u && (t.width = Ze(t.title)))),
  t.width = t.width ? t.width : u, !r) {
    if (t.margin.left && t.margin.right && t.width > o) {
      let l = (i - t.width - s) / (t.margin.left + t.margin.right);
      t.margin.left = Math.max(0, Math.floor(t.margin.left * l)), t.margin.right = Math.max(0, Math.floor(t.margin.right * l));
    }
    t.width = Math.min(t.width, i - s - t.margin.left - t.margin.right);
  }
  return t.width - (t.padding.left + t.padding.right) <= 0 && (t.padding.left = 0, t.padding.right = 0), t.height && t.height - (t.padding.top +
  t.padding.bottom) <= 0 && (t.padding.top = 0, t.padding.bottom = 0), t;
}, "determineDimensions"), Nl = /* @__PURE__ */ n((e) => e.match(/^#(?:[0-f]{3}){1,2}$/i), "isHex"), _0 = /* @__PURE__ */ n((e) => typeof e ==
"string" && (Zt[e] ?? Nl(e)), "isColorValid"), xT = /* @__PURE__ */ n((e) => Nl(e) ? Zt.hex(e) : Zt[e], "getColorFn"), ST = /* @__PURE__ */ n(
(e) => Nl(e) ? Zt.bgHex(e) : Zt[Ol(["bg", e])], "getBGColorFn");
function Hl(e, t) {
  if (t = {
    padding: 0,
    borderStyle: "single",
    dimBorder: !1,
    textAlignment: "left",
    float: "left",
    titleAlignment: "left",
    ...t
  }, t.align && (t.textAlignment = t.align), t.borderColor && !_0(t.borderColor))
    throw new Error(`${t.borderColor} is not a valid borderColor`);
  if (t.backgroundColor && !_0(t.backgroundColor))
    throw new Error(`${t.backgroundColor} is not a valid backgroundColor`);
  return t.padding = v0(t.padding), t.margin = v0(t.margin), t = FT(e, t), e = _T(e, t), ET(e, t.width, t);
}
n(Hl, "boxen");

// src/cli/angular/helpers.ts
var Wl = be(cn(), 1), $l = be(Ul(), 1);
var $s = "angular.json", Ej = $l.dedent`
  import { setCompodocJson } from "@storybook/addon-docs/angular";
  import docJson from "../documentation.json";
  setCompodocJson(docJson);
`.trimStart(), Cj = /* @__PURE__ */ n(async () => {
  OT.plain(
    // Create a text which explains the user why compodoc is necessary
    Hl(
      $l.dedent`
      Compodoc is a great tool to generate documentation for your Angular projects.
      Storybook can use the documentation generated by Compodoc to extract argument definitions
      and JSDOC comments to display them in the Storybook UI. We highly recommend using Compodoc for
      your Angular projects to get the best experience out of Storybook.
    `,
      { title: "Compodoc", borderStyle: "round", padding: 1, borderColor: "#F1618C" }
    )
  );
  let { useCompoDoc: e } = await (0, Wl.default)({
    type: "confirm",
    name: "useCompoDoc",
    message: "Do you want to use Compodoc for documentation?"
  });
  return e;
}, "promptForCompoDocs"), x0 = class {
  static {
    n(this, "AngularJSON");
  }
  constructor() {
    if (!RT($s))
      throw new PT({ path: kT(process.cwd(), $s) });
    let t = TT($s, "utf8");
    this.json = JSON.parse(t);
  }
  get projects() {
    return this.json.projects;
  }
  get projectsWithoutStorybook() {
    return Object.keys(this.projects).filter((t) => {
      let { architect: r } = this.projects[t];
      return !r.storybook;
    });
  }
  get hasStorybookBuilder() {
    return Object.keys(this.projects).some((t) => {
      let { architect: r } = this.projects[t];
      return Object.keys(r).some((i) => r[i].builder === "@storybook/angular:start-storybook");
    });
  }
  get rootProject() {
    let t = Object.keys(this.projects).find((r) => {
      let { root: i } = this.projects[r];
      return i === "" || i === ".";
    });
    return t ? this.projects[t] : null;
  }
  getProjectSettingsByName(t) {
    return this.projects[t];
  }
  async getProjectName() {
    if (this.projectsWithoutStorybook.length > 1) {
      let { projectName: t } = await (0, Wl.default)({
        type: "select",
        name: "projectName",
        message: "For which project do you want to generate Storybook configuration?",
        choices: this.projectsWithoutStorybook.map((r) => ({
          title: r,
          value: r
        }))
      });
      return t;
    }
    return this.projectsWithoutStorybook[0];
  }
  addStorybookEntries({
    angularProjectName: t,
    storybookFolder: r,
    useCompodoc: i,
    root: s
  }) {
    let { architect: o } = this.projects[t], u = {
      configDir: r,
      browserTarget: `${t}:build`,
      compodoc: i,
      ...i && { compodocArgs: ["-e", "json", "-d", s || "."] }
    };
    o.storybook || (o.storybook = {
      builder: "@storybook/angular:start-storybook",
      options: {
        ...u,
        port: 6006
      }
    }), o["build-storybook"] || (o["build-storybook"] = {
      builder: "@storybook/angular:build-storybook",
      options: {
        ...u,
        outputDir: Object.keys(this.projects).length === 1 ? "storybook-static" : `dist/storybook/${t}`
      }
    });
  }
  write() {
    BT($s, JSON.stringify(this.json, null, 2));
  }
};

// src/cli/eslintPlugin.ts
import { existsSync as R0 } from "node:fs";
import { readFile as T0, writeFile as NT } from "node:fs/promises";
import { paddedLog as B0 } from "@storybook/core/common";
import { readConfig as HT, writeConfig as UT } from "@storybook/core/csf-tools";

// ../node_modules/detect-indent/index.js
var qT = /^(?:( )+|\t+)/, Gi = "space", A0 = "tab";
function S0(e, t) {
  let r = /* @__PURE__ */ new Map(), i = 0, s, o;
  for (let u of e.split(/\n/g)) {
    if (!u)
      continue;
    let a, l, f, p, d, c = u.match(qT);
    if (c === null)
      i = 0, s = "";
    else {
      if (a = c[0].length, l = c[1] ? Gi : A0, t && l === Gi && a === 1)
        continue;
      l !== s && (i = 0), s = l, f = 1, p = 0;
      let h = a - i;
      if (i = a, h === 0)
        f = 0, p = 1;
      else {
        let g = h > 0 ? h : -h;
        o = MT(l, g);
      }
      d = r.get(o), d = d === void 0 ? [1, 0] : [d[0] + f, d[1] + p], r.set(o, d);
    }
  }
  return r;
}
n(S0, "makeIndentsMap");
function MT(e, t) {
  return (e === Gi ? "s" : "t") + String(t);
}
n(MT, "encodeIndentsKey");
function jT(e) {
  let r = e[0] === "s" ? Gi : A0, i = Number(e.slice(1));
  return { type: r, amount: i };
}
n(jT, "decodeIndentsKey");
function IT(e) {
  let t, r = 0, i = 0;
  for (let [s, [o, u]] of e)
    (o > r || o === r && u > i) && (r = o, i = u, t = s);
  return t;
}
n(IT, "getMostUsedKey");
function LT(e, t) {
  return (e === Gi ? " " : "	").repeat(t);
}
n(LT, "makeIndentString");
function zl(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  let t = S0(e, !0);
  t.size === 0 && (t = S0(e, !1));
  let r = IT(t), i, s = 0, o = "";
  return r !== void 0 && ({ type: i, amount: s } = jT(r), o = LT(i, s)), {
    amount: s,
    type: i,
    indent: o
  };
}
n(zl, "detectIndent");

// src/cli/eslintPlugin.ts
var k0 = be(uu(), 1), O0 = be(cn(), 1), P0 = be(Ul(), 1);
var WT = ["js", "cjs", "json"], $T = ["yaml", "yml"], zT = /* @__PURE__ */ n(() => {
  let e = ".eslintrc", t = $T.find(
    (i) => R0(`${e}.${i}`)
  );
  if (t)
    throw new Error(t);
  let r = WT.find(
    (i) => R0(`${e}.${i}`)
  );
  return r ? `${e}.${r}` : null;
}, "findEslintFile");
async function Pj(e) {
  let t = await e.getAllDependencies(), r = await e.retrievePackageJson(), i = null;
  try {
    i = zT();
  } catch {
  }
  let s = !!t["eslint-plugin-storybook"];
  return { hasEslint: t.eslint || i || r.eslintConfig, isStorybookPluginInstalled: s, eslintConfigFile: i };
}
n(Pj, "extractEslintInfo");
var Vl = /* @__PURE__ */ n((e) => {
  if (!e)
    return [];
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
  throw new Error(`Invalid eslint extends ${e}`);
}, "normalizeExtends");
async function qj(e, t) {
  if (e)
    if (B0(`Configuring Storybook ESLint plugin at ${e}`), e.endsWith("json")) {
      let r = JSON.parse(await T0(e, { encoding: "utf8" })), i = Vl(r.extends).filter(Boolean);
      r.extends = [...i, "plugin:storybook/recommended"];
      let s = await T0(e, { encoding: "utf8" }), o = zl(s).amount || 2;
      await NT(e, JSON.stringify(r, void 0, o));
    } else {
      let r = await HT(e), i = Vl(r.getFieldValue(["extends"])).filter(Boolean);
      r.setFieldValue(["extends"], [...i, "plugin:storybook/recommended"]), await UT(r);
    }
  else {
    B0("Configuring eslint-plugin-storybook in your package.json");
    let r = await t.retrievePackageJson(), i = Vl(r.eslintConfig?.extends).filter(Boolean);
    await t.writePackageJson({
      ...r,
      eslintConfig: {
        ...r.eslintConfig,
        extends: [...i, "plugin:storybook/recommended"]
      }
    });
  }
}
n(qj, "configureEslintPlugin");
var Mj = /* @__PURE__ */ n(async () => {
  let { shouldInstall: e } = await (0, O0.default)({
    type: "confirm",
    name: "shouldInstall",
    message: P0.dedent`
        We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: ${k0.default.
    yellow(
      "https://github.com/storybookjs/eslint-plugin-storybook#readme"
    )}

        Would you like to install it?
      `,
    initial: !0
  });
  return e;
}, "suggestESLintPlugin");
export {
  $s as ANGULAR_JSON_PATH,
  x0 as AngularJSON,
  uR as CommunityBuilder,
  gb as CoreBuilder,
  oR as CoreWebpackCompilers,
  yl as ProjectType,
  WT as SUPPORTED_ESLINT_EXTENSIONS,
  aq as SUPPORTED_RENDERERS,
  yb as SupportedLanguage,
  Oq as addToDevDependenciesIfNotPresent,
  FR as adjustTemplate,
  fq as builderNameToCoreBuilder,
  Iq as coerceSemver,
  lq as compilerNameToCoreCompiler,
  Ej as compoDocPreviewPrefix,
  qj as configureEslintPlugin,
  Pq as copyTemplate,
  Mq as copyTemplateFiles,
  eM as detect,
  Kq as detectBuilder,
  PR as detectFrameworkPreset,
  Zq as detectLanguage,
  Qq as detectPnp,
  mb as externalFrameworks,
  Pj as extractEslintInfo,
  zT as findEslintFile,
  qq as frameworkToDefaultBuilder,
  ER as frameworkToRenderer,
  kq as getBabelDependencies,
  _b as getRendererDir,
  jq as getStorybookVersionSpecifier,
  CR as getVersionSafe,
  Lq as hasStorybookDependencies,
  hq as installableProjectTypes,
  xb as isNxProject,
  Xq as isStorybookInstantiated,
  Vl as normalizeExtends,
  Cj as promptForCompoDocs,
  Tq as readFileAsJson,
  Mj as suggestESLintPlugin,
  bb as supportedTemplates,
  vb as unsupportedTemplate,
  Bq as writeFileAsJson
};