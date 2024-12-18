"use strict";
var bs = Object.create;
var Z = Object.defineProperty;
var xs = Object.getOwnPropertyDescriptor;
var Ss = Object.getOwnPropertyNames;
var ws = Object.getPrototypeOf, vs = Object.prototype.hasOwnProperty;
var o = (e, t) => Z(e, "name", { value: t, configurable: !0 });
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ps = (e, t) => {
  for (var r in t)
    Z(e, r, { get: t[r], enumerable: !0 });
}, Sr = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Ss(t))
      !vs.call(e, i) && i !== r && Z(e, i, { get: () => t[i], enumerable: !(n = xs(t, i)) || n.enumerable });
  return e;
};
var g = (e, t, r) => (r = e != null ? bs(ws(e)) : {}, Sr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Z(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), Es = (e) => Sr(Z({}, "__esModule", { value: !0 }), e);

// ../node_modules/picocolors/picocolors.js
var Pr = d((ml, at) => {
  var wr = process.argv || [], ye = process.env, Ts = !("NO_COLOR" in ye || wr.includes("--no-color")) && ("FORCE_COLOR" in ye || wr.includes(
  "--color") || process.platform === "win32" || require != null && require("tty").isatty(1) && ye.TERM !== "dumb" || "CI" in ye), Is = /* @__PURE__ */ o(
  (e, t, r = e) => (n) => {
    let i = "" + n, s = i.indexOf(t, e.length);
    return ~s ? e + ks(i, t, r, s) + t : e + i + t;
  }, "formatter"), ks = /* @__PURE__ */ o((e, t, r, n) => {
    let i = "", s = 0;
    do
      i += e.substring(s, n) + r, s = n + t.length, n = e.indexOf(t, s);
    while (~n);
    return i + e.substring(s);
  }, "replaceClose"), vr = /* @__PURE__ */ o((e = Ts) => {
    let t = e ? Is : () => String;
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
  at.exports = vr();
  at.exports.createColors = vr;
});

// ../node_modules/isexe/windows.js
var _r = d((Sl, Rr) => {
  Rr.exports = Ar;
  Ar.sync = Os;
  var Cr = require("fs");
  function Cs(e, t) {
    var r = t.pathExt !== void 0 ? t.pathExt : process.env.PATHEXT;
    if (!r || (r = r.split(";"), r.indexOf("") !== -1))
      return !0;
    for (var n = 0; n < r.length; n++) {
      var i = r[n].toLowerCase();
      if (i && e.substr(-i.length).toLowerCase() === i)
        return !0;
    }
    return !1;
  }
  o(Cs, "checkPathExt");
  function Or(e, t, r) {
    return !e.isSymbolicLink() && !e.isFile() ? !1 : Cs(t, r);
  }
  o(Or, "checkStat");
  function Ar(e, t, r) {
    Cr.stat(e, function(n, i) {
      r(n, n ? !1 : Or(i, e, t));
    });
  }
  o(Ar, "isexe");
  function Os(e, t) {
    return Or(Cr.statSync(e), e, t);
  }
  o(Os, "sync");
});

// ../node_modules/isexe/mode.js
var Dr = d((vl, Br) => {
  Br.exports = jr;
  jr.sync = As;
  var Gr = require("fs");
  function jr(e, t, r) {
    Gr.stat(e, function(n, i) {
      r(n, n ? !1 : Nr(i, t));
    });
  }
  o(jr, "isexe");
  function As(e, t) {
    return Nr(Gr.statSync(e), t);
  }
  o(As, "sync");
  function Nr(e, t) {
    return e.isFile() && Rs(e, t);
  }
  o(Nr, "checkStat");
  function Rs(e, t) {
    var r = e.mode, n = e.uid, i = e.gid, s = t.uid !== void 0 ? t.uid : process.getuid && process.getuid(), a = t.gid !== void 0 ? t.gid : process.
    getgid && process.getgid(), c = parseInt("100", 8), u = parseInt("010", 8), l = parseInt("001", 8), f = c | u, w = r & l || r & u && i ===
    a || r & c && n === s || r & f && s === 0;
    return w;
  }
  o(Rs, "checkMode");
});

// ../node_modules/isexe/index.js
var Lr = d((Tl, Mr) => {
  var El = require("fs"), xe;
  process.platform === "win32" || global.TESTING_WINDOWS ? xe = _r() : xe = Dr();
  Mr.exports = lt;
  lt.sync = _s;
  function lt(e, t, r) {
    if (typeof t == "function" && (r = t, t = {}), !r) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(n, i) {
        lt(e, t || {}, function(s, a) {
          s ? i(s) : n(a);
        });
      });
    }
    xe(e, t || {}, function(n, i) {
      n && (n.code === "EACCES" || t && t.ignoreErrors) && (n = null, i = !1), r(n, i);
    });
  }
  o(lt, "isexe");
  function _s(e, t) {
    try {
      return xe.sync(e, t || {});
    } catch (r) {
      if (t && t.ignoreErrors || r.code === "EACCES")
        return !1;
      throw r;
    }
  }
  o(_s, "sync");
});

// ../node_modules/cross-spawn/node_modules/which/which.js
var Vr = d((kl, Hr) => {
  var L = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", Fr = require("path"), Gs = L ? "\
;" : ":", Ur = Lr(), $r = /* @__PURE__ */ o((e) => Object.assign(new Error(`not found: ${e}`), { code: "ENOENT" }), "getNotFoundError"), qr = /* @__PURE__ */ o(
  (e, t) => {
    let r = t.colon || Gs, n = e.match(/\//) || L && e.match(/\\/) ? [""] : [
      // windows always checks the cwd first
      ...L ? [process.cwd()] : [],
      ...(t.path || process.env.PATH || /* istanbul ignore next: very unusual */
      "").split(r)
    ], i = L ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", s = L ? i.split(r) : [""];
    return L && e.indexOf(".") !== -1 && s[0] !== "" && s.unshift(""), {
      pathEnv: n,
      pathExt: s,
      pathExtExe: i
    };
  }, "getPathInfo"), Wr = /* @__PURE__ */ o((e, t, r) => {
    typeof t == "function" && (r = t, t = {}), t || (t = {});
    let { pathEnv: n, pathExt: i, pathExtExe: s } = qr(e, t), a = [], c = /* @__PURE__ */ o((l) => new Promise((f, w) => {
      if (l === n.length)
        return t.all && a.length ? f(a) : w($r(e));
      let y = n[l], p = /^".*"$/.test(y) ? y.slice(1, -1) : y, b = Fr.join(p, e), h = !p && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + b : b;
      f(u(h, l, 0));
    }), "step"), u = /* @__PURE__ */ o((l, f, w) => new Promise((y, p) => {
      if (w === i.length)
        return y(c(f + 1));
      let b = i[w];
      Ur(l + b, { pathExt: s }, (h, x) => {
        if (!h && x)
          if (t.all)
            a.push(l + b);
          else
            return y(l + b);
        return y(u(l, f, w + 1));
      });
    }), "subStep");
    return r ? c(0).then((l) => r(null, l), r) : c(0);
  }, "which"), js = /* @__PURE__ */ o((e, t) => {
    t = t || {};
    let { pathEnv: r, pathExt: n, pathExtExe: i } = qr(e, t), s = [];
    for (let a = 0; a < r.length; a++) {
      let c = r[a], u = /^".*"$/.test(c) ? c.slice(1, -1) : c, l = Fr.join(u, e), f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + l : l;
      for (let w = 0; w < n.length; w++) {
        let y = f + n[w];
        try {
          if (Ur.sync(y, { pathExt: i }))
            if (t.all)
              s.push(y);
            else
              return y;
        } catch {
        }
      }
    }
    if (t.all && s.length)
      return s;
    if (t.nothrow)
      return null;
    throw $r(e);
  }, "whichSync");
  Hr.exports = Wr;
  Wr.sync = js;
});

// ../node_modules/path-key/index.js
var dt = d((Ol, ft) => {
  "use strict";
  var zr = /* @__PURE__ */ o((e = {}) => {
    let t = e.env || process.env;
    return (e.platform || process.platform) !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
  }, "pathKey");
  ft.exports = zr;
  ft.exports.default = zr;
});

// ../node_modules/cross-spawn/lib/util/resolveCommand.js
var Xr = d((Rl, Yr) => {
  "use strict";
  var Kr = require("path"), Ns = Vr(), Bs = dt();
  function Jr(e, t) {
    let r = e.options.env || process.env, n = process.cwd(), i = e.options.cwd != null, s = i && process.chdir !== void 0 && !process.chdir.
    disabled;
    if (s)
      try {
        process.chdir(e.options.cwd);
      } catch {
      }
    let a;
    try {
      a = Ns.sync(e.command, {
        path: r[Bs({ env: r })],
        pathExt: t ? Kr.delimiter : void 0
      });
    } catch {
    } finally {
      s && process.chdir(n);
    }
    return a && (a = Kr.resolve(i ? e.options.cwd : "", a)), a;
  }
  o(Jr, "resolveCommandAttempt");
  function Ds(e) {
    return Jr(e) || Jr(e, !0);
  }
  o(Ds, "resolveCommand");
  Yr.exports = Ds;
});

// ../node_modules/cross-spawn/lib/util/escape.js
var Zr = d((Gl, mt) => {
  "use strict";
  var pt = /([()\][%!^"`<>&|;, *?])/g;
  function Ms(e) {
    return e = e.replace(pt, "^$1"), e;
  }
  o(Ms, "escapeCommand");
  function Ls(e, t) {
    return e = `${e}`, e = e.replace(/(\\*)"/g, '$1$1\\"'), e = e.replace(/(\\*)$/, "$1$1"), e = `"${e}"`, e = e.replace(pt, "^$1"), t && (e =
    e.replace(pt, "^$1")), e;
  }
  o(Ls, "escapeArgument");
  mt.exports.command = Ms;
  mt.exports.argument = Ls;
});

// ../node_modules/shebang-regex/index.js
var en = d((Nl, Qr) => {
  "use strict";
  Qr.exports = /^#!(.*)/;
});

// ../node_modules/shebang-command/index.js
var rn = d((Bl, tn) => {
  "use strict";
  var Fs = en();
  tn.exports = (e = "") => {
    let t = e.match(Fs);
    if (!t)
      return null;
    let [r, n] = t[0].replace(/#! ?/, "").split(" "), i = r.split("/").pop();
    return i === "env" ? n : n ? `${i} ${n}` : i;
  };
});

// ../node_modules/cross-spawn/lib/util/readShebang.js
var on = d((Dl, nn) => {
  "use strict";
  var ht = require("fs"), Us = rn();
  function $s(e) {
    let r = Buffer.alloc(150), n;
    try {
      n = ht.openSync(e, "r"), ht.readSync(n, r, 0, 150, 0), ht.closeSync(n);
    } catch {
    }
    return Us(r.toString());
  }
  o($s, "readShebang");
  nn.exports = $s;
});

// ../node_modules/cross-spawn/lib/parse.js
var un = d((Ll, cn) => {
  "use strict";
  var qs = require("path"), sn = Xr(), an = Zr(), Ws = on(), Hs = process.platform === "win32", Vs = /\.(?:com|exe)$/i, zs = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function Ks(e) {
    e.file = sn(e);
    let t = e.file && Ws(e.file);
    return t ? (e.args.unshift(e.file), e.command = t, sn(e)) : e.file;
  }
  o(Ks, "detectShebang");
  function Js(e) {
    if (!Hs)
      return e;
    let t = Ks(e), r = !Vs.test(t);
    if (e.options.forceShell || r) {
      let n = zs.test(t);
      e.command = qs.normalize(e.command), e.command = an.command(e.command), e.args = e.args.map((s) => an.argument(s, n));
      let i = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${i}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  o(Js, "parseNonShell");
  function Ys(e, t, r) {
    t && !Array.isArray(t) && (r = t, t = null), t = t ? t.slice(0) : [], r = Object.assign({}, r);
    let n = {
      command: e,
      args: t,
      options: r,
      file: void 0,
      original: {
        command: e,
        args: t
      }
    };
    return r.shell ? n : Js(n);
  }
  o(Ys, "parse");
  cn.exports = Ys;
});

// ../node_modules/cross-spawn/lib/enoent.js
var dn = d((Ul, fn) => {
  "use strict";
  var yt = process.platform === "win32";
  function gt(e, t) {
    return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${t} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  o(gt, "notFoundError");
  function Xs(e, t) {
    if (!yt)
      return;
    let r = e.emit;
    e.emit = function(n, i) {
      if (n === "exit") {
        let s = ln(i, t, "spawn");
        if (s)
          return r.call(e, "error", s);
      }
      return r.apply(e, arguments);
    };
  }
  o(Xs, "hookChildProcess");
  function ln(e, t) {
    return yt && e === 1 && !t.file ? gt(t.original, "spawn") : null;
  }
  o(ln, "verifyENOENT");
  function Zs(e, t) {
    return yt && e === 1 && !t.file ? gt(t.original, "spawnSync") : null;
  }
  o(Zs, "verifyENOENTSync");
  fn.exports = {
    hookChildProcess: Xs,
    verifyENOENT: ln,
    verifyENOENTSync: Zs,
    notFoundError: gt
  };
});

// ../node_modules/cross-spawn/index.js
var St = d((ql, F) => {
  "use strict";
  var pn = require("child_process"), bt = un(), xt = dn();
  function mn(e, t, r) {
    let n = bt(e, t, r), i = pn.spawn(n.command, n.args, n.options);
    return xt.hookChildProcess(i, n), i;
  }
  o(mn, "spawn");
  function Qs(e, t, r) {
    let n = bt(e, t, r), i = pn.spawnSync(n.command, n.args, n.options);
    return i.error = i.error || xt.verifyENOENTSync(i.status, n), i;
  }
  o(Qs, "spawnSync");
  F.exports = mn;
  F.exports.spawn = mn;
  F.exports.sync = Qs;
  F.exports._parse = bt;
  F.exports._enoent = xt;
});

// ../node_modules/execa/node_modules/strip-final-newline/index.js
var yn = d((Hl, hn) => {
  "use strict";
  hn.exports = (e) => {
    let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
    return e[e.length - 1] === t && (e = e.slice(0, e.length - 1)), e[e.length - 1] === r && (e = e.slice(0, e.length - 1)), e;
  };
});

// ../node_modules/npm-run-path/index.js
var xn = d((Vl, te) => {
  "use strict";
  var ee = require("path"), gn = dt(), bn = /* @__PURE__ */ o((e) => {
    e = {
      cwd: process.cwd(),
      path: process.env[gn()],
      execPath: process.execPath,
      ...e
    };
    let t, r = ee.resolve(e.cwd), n = [];
    for (; t !== r; )
      n.push(ee.join(r, "node_modules/.bin")), t = r, r = ee.resolve(r, "..");
    let i = ee.resolve(e.cwd, e.execPath, "..");
    return n.push(i), n.concat(e.path).join(ee.delimiter);
  }, "npmRunPath");
  te.exports = bn;
  te.exports.default = bn;
  te.exports.env = (e) => {
    e = {
      env: process.env,
      ...e
    };
    let t = { ...e.env }, r = gn({ env: t });
    return e.path = t[r], t[r] = te.exports(e), t;
  };
});

// ../node_modules/mimic-fn/index.js
var wn = d((Kl, wt) => {
  "use strict";
  var Sn = /* @__PURE__ */ o((e, t) => {
    for (let r of Reflect.ownKeys(t))
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    return e;
  }, "mimicFn");
  wt.exports = Sn;
  wt.exports.default = Sn;
});

// ../node_modules/onetime/index.js
var Pn = d((Yl, we) => {
  "use strict";
  var ea = wn(), Se = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ o((e, t = {}) => {
    if (typeof e != "function")
      throw new TypeError("Expected a function");
    let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
      if (Se.set(s, ++n), n === 1)
        r = e.apply(this, a), e = null;
      else if (t.throw === !0)
        throw new Error(`Function \`${i}\` can only be called once`);
      return r;
    }, "onetime");
    return ea(s, e), Se.set(s, n), s;
  }, "onetime");
  we.exports = vn;
  we.exports.default = vn;
  we.exports.callCount = (e) => {
    if (!Se.has(e))
      throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    return Se.get(e);
  };
});

// ../node_modules/execa/node_modules/human-signals/build/src/core.js
var En = d((ve) => {
  "use strict";
  Object.defineProperty(ve, "__esModule", { value: !0 });
  ve.SIGNALS = void 0;
  var ta = [
    {
      name: "SIGHUP",
      number: 1,
      action: "terminate",
      description: "Terminal closed",
      standard: "posix"
    },
    {
      name: "SIGINT",
      number: 2,
      action: "terminate",
      description: "User interruption with CTRL-C",
      standard: "ansi"
    },
    {
      name: "SIGQUIT",
      number: 3,
      action: "core",
      description: "User interruption with CTRL-\\",
      standard: "posix"
    },
    {
      name: "SIGILL",
      number: 4,
      action: "core",
      description: "Invalid machine instruction",
      standard: "ansi"
    },
    {
      name: "SIGTRAP",
      number: 5,
      action: "core",
      description: "Debugger breakpoint",
      standard: "posix"
    },
    {
      name: "SIGABRT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "ansi"
    },
    {
      name: "SIGIOT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "bsd"
    },
    {
      name: "SIGBUS",
      number: 7,
      action: "core",
      description: "Bus error due to misaligned, non-existing address or paging error",
      standard: "bsd"
    },
    {
      name: "SIGEMT",
      number: 7,
      action: "terminate",
      description: "Command should be emulated but is not implemented",
      standard: "other"
    },
    {
      name: "SIGFPE",
      number: 8,
      action: "core",
      description: "Floating point arithmetic error",
      standard: "ansi"
    },
    {
      name: "SIGKILL",
      number: 9,
      action: "terminate",
      description: "Forced termination",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGUSR1",
      number: 10,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGSEGV",
      number: 11,
      action: "core",
      description: "Segmentation fault",
      standard: "ansi"
    },
    {
      name: "SIGUSR2",
      number: 12,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGPIPE",
      number: 13,
      action: "terminate",
      description: "Broken pipe or socket",
      standard: "posix"
    },
    {
      name: "SIGALRM",
      number: 14,
      action: "terminate",
      description: "Timeout or timer",
      standard: "posix"
    },
    {
      name: "SIGTERM",
      number: 15,
      action: "terminate",
      description: "Termination",
      standard: "ansi"
    },
    {
      name: "SIGSTKFLT",
      number: 16,
      action: "terminate",
      description: "Stack is empty or overflowed",
      standard: "other"
    },
    {
      name: "SIGCHLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "posix"
    },
    {
      name: "SIGCLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "other"
    },
    {
      name: "SIGCONT",
      number: 18,
      action: "unpause",
      description: "Unpaused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGSTOP",
      number: 19,
      action: "pause",
      description: "Paused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGTSTP",
      number: 20,
      action: "pause",
      description: 'Paused using CTRL-Z or "suspend"',
      standard: "posix"
    },
    {
      name: "SIGTTIN",
      number: 21,
      action: "pause",
      description: "Background process cannot read terminal input",
      standard: "posix"
    },
    {
      name: "SIGBREAK",
      number: 21,
      action: "terminate",
      description: "User interruption with CTRL-BREAK",
      standard: "other"
    },
    {
      name: "SIGTTOU",
      number: 22,
      action: "pause",
      description: "Background process cannot write to terminal output",
      standard: "posix"
    },
    {
      name: "SIGURG",
      number: 23,
      action: "ignore",
      description: "Socket received out-of-band data",
      standard: "bsd"
    },
    {
      name: "SIGXCPU",
      number: 24,
      action: "core",
      description: "Process timed out",
      standard: "bsd"
    },
    {
      name: "SIGXFSZ",
      number: 25,
      action: "core",
      description: "File too big",
      standard: "bsd"
    },
    {
      name: "SIGVTALRM",
      number: 26,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGPROF",
      number: 27,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGWINCH",
      number: 28,
      action: "ignore",
      description: "Terminal window size changed",
      standard: "bsd"
    },
    {
      name: "SIGIO",
      number: 29,
      action: "terminate",
      description: "I/O is available",
      standard: "other"
    },
    {
      name: "SIGPOLL",
      number: 29,
      action: "terminate",
      description: "Watched event",
      standard: "other"
    },
    {
      name: "SIGINFO",
      number: 29,
      action: "ignore",
      description: "Request for process information",
      standard: "other"
    },
    {
      name: "SIGPWR",
      number: 30,
      action: "terminate",
      description: "Device running out of power",
      standard: "systemv"
    },
    {
      name: "SIGSYS",
      number: 31,
      action: "core",
      description: "Invalid system call",
      standard: "other"
    },
    {
      name: "SIGUNUSED",
      number: 31,
      action: "terminate",
      description: "Invalid system call",
      standard: "other"
    }
  ];
  ve.SIGNALS = ta;
});

// ../node_modules/execa/node_modules/human-signals/build/src/realtime.js
var vt = d((U) => {
  "use strict";
  Object.defineProperty(U, "__esModule", { value: !0 });
  U.SIGRTMAX = U.getRealtimeSignals = void 0;
  var ra = /* @__PURE__ */ o(function() {
    let e = In - Tn + 1;
    return Array.from({ length: e }, na);
  }, "getRealtimeSignals");
  U.getRealtimeSignals = ra;
  var na = /* @__PURE__ */ o(function(e, t) {
    return {
      name: `SIGRT${t + 1}`,
      number: Tn + t,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    };
  }, "getRealtimeSignal"), Tn = 34, In = 64;
  U.SIGRTMAX = In;
});

// ../node_modules/execa/node_modules/human-signals/build/src/signals.js
var kn = d((Pe) => {
  "use strict";
  Object.defineProperty(Pe, "__esModule", { value: !0 });
  Pe.getSignals = void 0;
  var oa = require("os"), ia = En(), sa = vt(), aa = /* @__PURE__ */ o(function() {
    let e = (0, sa.getRealtimeSignals)();
    return [...ia.SIGNALS, ...e].map(ca);
  }, "getSignals");
  Pe.getSignals = aa;
  var ca = /* @__PURE__ */ o(function({
    name: e,
    number: t,
    description: r,
    action: n,
    forced: i = !1,
    standard: s
  }) {
    let {
      signals: { [e]: a }
    } = oa.constants, c = a !== void 0;
    return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
  }, "normalizeSignal");
});

// ../node_modules/execa/node_modules/human-signals/build/src/main.js
var On = d(($) => {
  "use strict";
  Object.defineProperty($, "__esModule", { value: !0 });
  $.signalsByNumber = $.signalsByName = void 0;
  var ua = require("os"), Cn = kn(), la = vt(), fa = /* @__PURE__ */ o(function() {
    return (0, Cn.getSignals)().reduce(da, {});
  }, "getSignalsByName"), da = /* @__PURE__ */ o(function(e, { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }) {
    return {
      ...e,
      [t]: { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }
    };
  }, "getSignalByName"), pa = fa();
  $.signalsByName = pa;
  var ma = /* @__PURE__ */ o(function() {
    let e = (0, Cn.getSignals)(), t = la.SIGRTMAX + 1, r = Array.from({ length: t }, (n, i) => ha(i, e));
    return Object.assign({}, ...r);
  }, "getSignalsByNumber"), ha = /* @__PURE__ */ o(function(e, t) {
    let r = ya(e, t);
    if (r === void 0)
      return {};
    let { name: n, description: i, supported: s, action: a, forced: c, standard: u } = r;
    return {
      [e]: {
        name: n,
        number: e,
        description: i,
        supported: s,
        action: a,
        forced: c,
        standard: u
      }
    };
  }, "getSignalByNumber"), ya = /* @__PURE__ */ o(function(e, t) {
    let r = t.find(({ name: n }) => ua.constants.signals[n] === e);
    return r !== void 0 ? r : t.find((n) => n.number === e);
  }, "findSignalByNumber"), ga = ma();
  $.signalsByNumber = ga;
});

// ../node_modules/execa/lib/error.js
var Rn = d((sf, An) => {
  "use strict";
  var { signalsByName: ba } = On(), xa = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s,
  isCanceled: a }) => e ? `timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was\
 killed with ${n} (${i})` : s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), Sa = /* @__PURE__ */ o(({
    stdout: e,
    stderr: t,
    all: r,
    error: n,
    signal: i,
    exitCode: s,
    command: a,
    escapedCommand: c,
    timedOut: u,
    isCanceled: l,
    killed: f,
    parsed: { options: { timeout: w } }
  }) => {
    s = s === null ? void 0 : s, i = i === null ? void 0 : i;
    let y = i === void 0 ? void 0 : ba[i].description, p = n && n.code, h = `Command ${xa({ timedOut: u, timeout: w, errorCode: p, signal: i,
    signalDescription: y, exitCode: s, isCanceled: l })}: ${a}`, x = Object.prototype.toString.call(n) === "[object Error]", E = x ? `${h}
${n.message}` : h, I = [E, t, e].filter(Boolean).join(`
`);
    return x ? (n.originalMessage = n.message, n.message = I) : n = new Error(I), n.shortMessage = E, n.command = a, n.escapedCommand = c, n.
    exitCode = s, n.signal = i, n.signalDescription = y, n.stdout = e, n.stderr = t, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
    bufferedData, n.failed = !0, n.timedOut = !!u, n.isCanceled = l, n.killed = f && !u, n;
  }, "makeError");
  An.exports = Sa;
});

// ../node_modules/execa/lib/stdio.js
var Gn = d((cf, Pt) => {
  "use strict";
  var Ee = ["stdin", "stdout", "stderr"], wa = /* @__PURE__ */ o((e) => Ee.some((t) => e[t] !== void 0), "hasAlias"), _n = /* @__PURE__ */ o(
  (e) => {
    if (!e)
      return;
    let { stdio: t } = e;
    if (t === void 0)
      return Ee.map((n) => e[n]);
    if (wa(e))
      throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Ee.map((n) => `\`${n}\``).join(", ")}`);
    if (typeof t == "string")
      return t;
    if (!Array.isArray(t))
      throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
    let r = Math.max(t.length, Ee.length);
    return Array.from({ length: r }, (n, i) => t[i]);
  }, "normalizeStdio");
  Pt.exports = _n;
  Pt.exports.node = (e) => {
    let t = _n(e);
    return t === "ipc" ? "ipc" : t === void 0 || typeof t == "string" ? [t, t, t, "ipc"] : t.includes("ipc") ? t : [...t, "ipc"];
  };
});

// ../node_modules/signal-exit/signals.js
var jn = d((lf, Te) => {
  Te.exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
  ];
  process.platform !== "win32" && Te.exports.push(
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
  process.platform === "linux" && Te.exports.push(
    "SIGIO",
    "SIGPOLL",
    "SIGPWR",
    "SIGSTKFLT",
    "SIGUNUSED"
  );
});

// ../node_modules/signal-exit/index.js
var Ln = d((ff, H) => {
  var S = global.process, G = /* @__PURE__ */ o(function(e) {
    return e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.reallyExit == "func\
tion" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "function";
  }, "processOk");
  G(S) ? (Nn = require("assert"), q = jn(), Bn = /^win/i.test(S.platform), re = require("events"), typeof re != "function" && (re = re.EventEmitter),
  S.__signal_exit_emitter__ ? P = S.__signal_exit_emitter__ : (P = S.__signal_exit_emitter__ = new re(), P.count = 0, P.emitted = {}), P.infinite ||
  (P.setMaxListeners(1 / 0), P.infinite = !0), H.exports = function(e, t) {
    if (!G(global.process))
      return function() {
      };
    Nn.equal(typeof e, "function", "a callback must be provided for exit handler"), W === !1 && Et();
    var r = "exit";
    t && t.alwaysLast && (r = "afterexit");
    var n = /* @__PURE__ */ o(function() {
      P.removeListener(r, e), P.listeners("exit").length === 0 && P.listeners("afterexit").length === 0 && Ie();
    }, "remove");
    return P.on(r, e), n;
  }, Ie = /* @__PURE__ */ o(function() {
    !W || !G(global.process) || (W = !1, q.forEach(function(t) {
      try {
        S.removeListener(t, ke[t]);
      } catch {
      }
    }), S.emit = Ce, S.reallyExit = Tt, P.count -= 1);
  }, "unload"), H.exports.unload = Ie, j = /* @__PURE__ */ o(function(t, r, n) {
    P.emitted[t] || (P.emitted[t] = !0, P.emit(t, r, n));
  }, "emit"), ke = {}, q.forEach(function(e) {
    ke[e] = /* @__PURE__ */ o(function() {
      if (G(global.process)) {
        var r = S.listeners(e);
        r.length === P.count && (Ie(), j("exit", null, e), j("afterexit", null, e), Bn && e === "SIGHUP" && (e = "SIGINT"), S.kill(S.pid, e));
      }
    }, "listener");
  }), H.exports.signals = function() {
    return q;
  }, W = !1, Et = /* @__PURE__ */ o(function() {
    W || !G(global.process) || (W = !0, P.count += 1, q = q.filter(function(t) {
      try {
        return S.on(t, ke[t]), !0;
      } catch {
        return !1;
      }
    }), S.emit = Mn, S.reallyExit = Dn);
  }, "load"), H.exports.load = Et, Tt = S.reallyExit, Dn = /* @__PURE__ */ o(function(t) {
    G(global.process) && (S.exitCode = t || /* istanbul ignore next */
    0, j("exit", S.exitCode, null), j("afterexit", S.exitCode, null), Tt.call(S, S.exitCode));
  }, "processReallyExit"), Ce = S.emit, Mn = /* @__PURE__ */ o(function(t, r) {
    if (t === "exit" && G(global.process)) {
      r !== void 0 && (S.exitCode = r);
      var n = Ce.apply(this, arguments);
      return j("exit", S.exitCode, null), j("afterexit", S.exitCode, null), n;
    } else
      return Ce.apply(this, arguments);
  }, "processEmit")) : H.exports = function() {
    return function() {
    };
  };
  var Nn, q, Bn, re, P, Ie, j, ke, W, Et, Tt, Dn, Ce, Mn;
});

// ../node_modules/execa/lib/kill.js
var Un = d((pf, Fn) => {
  "use strict";
  var va = require("os"), Pa = Ln(), Ea = 1e3 * 5, Ta = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
    let n = e(t);
    return Ia(e, t, r, n), n;
  }, "spawnedKill"), Ia = /* @__PURE__ */ o((e, t, r, n) => {
    if (!ka(t, r, n))
      return;
    let i = Oa(r), s = setTimeout(() => {
      e("SIGKILL");
    }, i);
    s.unref && s.unref();
  }, "setKillTimeout"), ka = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => Ca(e) && t !== !1 && r, "shouldForceKill"), Ca = /* @__PURE__ */ o(
  (e) => e === va.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), Oa = /* @__PURE__ */ o(({
  forceKillAfterTimeout: e = !0 }) => {
    if (e === !0)
      return Ea;
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e;
  }, "getForceKillAfterTimeout"), Aa = /* @__PURE__ */ o((e, t) => {
    e.kill() && (t.isCanceled = !0);
  }, "spawnedCancel"), Ra = /* @__PURE__ */ o((e, t, r) => {
    e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
  }, "timeoutKill"), _a = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
    if (t === 0 || t === void 0)
      return n;
    let i, s = new Promise((c, u) => {
      i = setTimeout(() => {
        Ra(e, r, u);
      }, t);
    }), a = n.finally(() => {
      clearTimeout(i);
    });
    return Promise.race([s, a]);
  }, "setupTimeout"), Ga = /* @__PURE__ */ o(({ timeout: e }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0))
      throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  }, "validateTimeout"), ja = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
    if (!t || r)
      return n;
    let i = Pa(() => {
      e.kill();
    });
    return n.finally(() => {
      i();
    });
  }, "setExitHandler");
  Fn.exports = {
    spawnedKill: Ta,
    spawnedCancel: Aa,
    setupTimeout: _a,
    validateTimeout: Ga,
    setExitHandler: ja
  };
});

// ../node_modules/is-stream/index.js
var qn = d((hf, $n) => {
  "use strict";
  var O = /* @__PURE__ */ o((e) => e !== null && typeof e == "object" && typeof e.pipe == "function", "isStream");
  O.writable = (e) => O(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
  O.readable = (e) => O(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object";
  O.duplex = (e) => O.writable(e) && O.readable(e);
  O.transform = (e) => O.duplex(e) && typeof e._transform == "function";
  $n.exports = O;
});

// ../node_modules/get-stream/buffer-stream.js
var Hn = d((gf, Wn) => {
  "use strict";
  var { PassThrough: Na } = require("stream");
  Wn.exports = (e) => {
    e = { ...e };
    let { array: t } = e, { encoding: r } = e, n = r === "buffer", i = !1;
    t ? i = !(r || n) : r = r || "utf8", n && (r = null);
    let s = new Na({ objectMode: i });
    r && s.setEncoding(r);
    let a = 0, c = [];
    return s.on("data", (u) => {
      c.push(u), i ? a = c.length : a += u.length;
    }), s.getBufferedValue = () => t ? c : n ? Buffer.concat(c, a) : c.join(""), s.getBufferedLength = () => a, s;
  };
});

// ../node_modules/get-stream/index.js
var Vn = d((bf, ne) => {
  "use strict";
  var { constants: Ba } = require("buffer"), Da = require("stream"), { promisify: Ma } = require("util"), La = Hn(), Fa = Ma(Da.pipeline), Oe = class extends Error {
    static {
      o(this, "MaxBufferError");
    }
    constructor() {
      super("maxBuffer exceeded"), this.name = "MaxBufferError";
    }
  };
  async function It(e, t) {
    if (!e)
      throw new Error("Expected a stream");
    t = {
      maxBuffer: 1 / 0,
      ...t
    };
    let { maxBuffer: r } = t, n = La(t);
    return await new Promise((i, s) => {
      let a = /* @__PURE__ */ o((c) => {
        c && n.getBufferedLength() <= Ba.MAX_LENGTH && (c.bufferedData = n.getBufferedValue()), s(c);
      }, "rejectPromise");
      (async () => {
        try {
          await Fa(e, n), i();
        } catch (c) {
          a(c);
        }
      })(), n.on("data", () => {
        n.getBufferedLength() > r && a(new Oe());
      });
    }), n.getBufferedValue();
  }
  o(It, "getStream");
  ne.exports = It;
  ne.exports.buffer = (e, t) => It(e, { ...t, encoding: "buffer" });
  ne.exports.array = (e, t) => It(e, { ...t, array: !0 });
  ne.exports.MaxBufferError = Oe;
});

// ../node_modules/merge-stream/index.js
var kt = d((Sf, zn) => {
  "use strict";
  var { PassThrough: Ua } = require("stream");
  zn.exports = function() {
    var e = [], t = new Ua({ objectMode: !0 });
    return t.setMaxListeners(0), t.add = r, t.isEmpty = n, t.on("unpipe", i), Array.prototype.slice.call(arguments).forEach(r), t;
    function r(s) {
      return Array.isArray(s) ? (s.forEach(r), this) : (e.push(s), s.once("end", i.bind(null, s)), s.once("error", t.emit.bind(t, "error")),
      s.pipe(t, { end: !1 }), this);
    }
    o(r, "add");
    function n() {
      return e.length == 0;
    }
    o(n, "isEmpty");
    function i(s) {
      e = e.filter(function(a) {
        return a !== s;
      }), !e.length && t.readable && t.end();
    }
    o(i, "remove");
  };
});

// ../node_modules/execa/lib/stream.js
var Xn = d((vf, Yn) => {
  "use strict";
  var Jn = qn(), Kn = Vn(), $a = kt(), qa = /* @__PURE__ */ o((e, t) => {
    t === void 0 || e.stdin === void 0 || (Jn(t) ? t.pipe(e.stdin) : e.stdin.end(t));
  }, "handleInput"), Wa = /* @__PURE__ */ o((e, { all: t }) => {
    if (!t || !e.stdout && !e.stderr)
      return;
    let r = $a();
    return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
  }, "makeAllStream"), Ct = /* @__PURE__ */ o(async (e, t) => {
    if (e) {
      e.destroy();
      try {
        return await t;
      } catch (r) {
        return r.bufferedData;
      }
    }
  }, "getBufferedData"), Ot = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
    if (!(!e || !r))
      return t ? Kn(e, { encoding: t, maxBuffer: n }) : Kn.buffer(e, { maxBuffer: n });
  }, "getStreamPromise"), Ha = /* @__PURE__ */ o(async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
    let c = Ot(e, { encoding: n, buffer: i, maxBuffer: s }), u = Ot(t, { encoding: n, buffer: i, maxBuffer: s }), l = Ot(r, { encoding: n, buffer: i,
    maxBuffer: s * 2 });
    try {
      return await Promise.all([a, c, u, l]);
    } catch (f) {
      return Promise.all([
        { error: f, signal: f.signal, timedOut: f.timedOut },
        Ct(e, c),
        Ct(t, u),
        Ct(r, l)
      ]);
    }
  }, "getSpawnedResult"), Va = /* @__PURE__ */ o(({ input: e }) => {
    if (Jn(e))
      throw new TypeError("The `input` option cannot be a stream in sync mode");
  }, "validateInputSync");
  Yn.exports = {
    handleInput: qa,
    makeAllStream: Wa,
    getSpawnedResult: Ha,
    validateInputSync: Va
  };
});

// ../node_modules/execa/lib/promise.js
var Qn = d((Ef, Zn) => {
  "use strict";
  var za = (async () => {
  })().constructor.prototype, Ka = ["then", "catch", "finally"].map((e) => [
    e,
    Reflect.getOwnPropertyDescriptor(za, e)
  ]), Ja = /* @__PURE__ */ o((e, t) => {
    for (let [r, n] of Ka) {
      let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
      Reflect.defineProperty(e, r, { ...n, value: i });
    }
    return e;
  }, "mergePromise"), Ya = /* @__PURE__ */ o((e) => new Promise((t, r) => {
    e.on("exit", (n, i) => {
      t({ exitCode: n, signal: i });
    }), e.on("error", (n) => {
      r(n);
    }), e.stdin && e.stdin.on("error", (n) => {
      r(n);
    });
  }), "getSpawnedPromise");
  Zn.exports = {
    mergePromise: Ja,
    getSpawnedPromise: Ya
  };
});

// ../node_modules/execa/lib/command.js
var ro = d((If, to) => {
  "use strict";
  var eo = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), Xa = /^[\w.-]+$/, Za = /"/g, Qa = /* @__PURE__ */ o(
  (e) => typeof e != "string" || Xa.test(e) ? e : `"${e.replace(Za, '\\"')}"`, "escapeArg"), ec = /* @__PURE__ */ o((e, t) => eo(e, t).join(
  " "), "joinCommand"), tc = /* @__PURE__ */ o((e, t) => eo(e, t).map((r) => Qa(r)).join(" "), "getEscapedCommand"), rc = / +/g, nc = /* @__PURE__ */ o(
  (e) => {
    let t = [];
    for (let r of e.trim().split(rc)) {
      let n = t[t.length - 1];
      n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
    }
    return t;
  }, "parseCommand");
  to.exports = {
    joinCommand: ec,
    getEscapedCommand: tc,
    parseCommand: nc
  };
});

// ../node_modules/execa/index.js
var uo = d((Cf, V) => {
  "use strict";
  var oc = require("path"), At = require("child_process"), ic = St(), sc = yn(), ac = xn(), cc = Pn(), Ae = Rn(), oo = Gn(), { spawnedKill: uc,
  spawnedCancel: lc, setupTimeout: fc, validateTimeout: dc, setExitHandler: pc } = Un(), { handleInput: mc, getSpawnedResult: hc, makeAllStream: yc,
  validateInputSync: gc } = Xn(), { mergePromise: no, getSpawnedPromise: bc } = Qn(), { joinCommand: io, parseCommand: so, getEscapedCommand: ao } = ro(),
  xc = 1e3 * 1e3 * 100, Sc = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
    let s = t ? { ...process.env, ...e } : e;
    return r ? ac.env({ env: s, cwd: n, execPath: i }) : s;
  }, "getEnv"), co = /* @__PURE__ */ o((e, t, r = {}) => {
    let n = ic._parse(e, t, r);
    return e = n.command, t = n.args, r = n.options, r = {
      maxBuffer: xc,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: r.cwd || process.cwd(),
      execPath: process.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      ...r
    }, r.env = Sc(r), r.stdio = oo(r), process.platform === "win32" && oc.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e, args: t,
    options: r, parsed: n };
  }, "handleArguments"), oe = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !Buffer.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
  sc(t) : t, "handleOutput"), Re = /* @__PURE__ */ o((e, t, r) => {
    let n = co(e, t, r), i = io(e, t), s = ao(e, t);
    dc(n.options);
    let a;
    try {
      a = At.spawn(n.file, n.args, n.options);
    } catch (p) {
      let b = new At.ChildProcess(), h = Promise.reject(Ae({
        error: p,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
      return no(b, h);
    }
    let c = bc(a), u = fc(a, n.options, c), l = pc(a, n.options, u), f = { isCanceled: !1 };
    a.kill = uc.bind(null, a.kill.bind(a)), a.cancel = lc.bind(null, a, f);
    let y = cc(/* @__PURE__ */ o(async () => {
      let [{ error: p, exitCode: b, signal: h, timedOut: x }, E, I, A] = await hc(a, n.options, l), m = oe(n.options, E), v = oe(n.options, I),
      C = oe(n.options, A);
      if (p || b !== 0 || h !== null) {
        let X = Ae({
          error: p,
          exitCode: b,
          signal: h,
          stdout: m,
          stderr: v,
          all: C,
          command: i,
          escapedCommand: s,
          parsed: n,
          timedOut: x,
          isCanceled: f.isCanceled,
          killed: a.killed
        });
        if (!n.options.reject)
          return X;
        throw X;
      }
      return {
        command: i,
        escapedCommand: s,
        exitCode: 0,
        stdout: m,
        stderr: v,
        all: C,
        failed: !1,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      };
    }, "handlePromise"));
    return mc(a, n.options.input), a.all = yc(a, n.options), no(a, y);
  }, "execa");
  V.exports = Re;
  V.exports.sync = (e, t, r) => {
    let n = co(e, t, r), i = io(e, t), s = ao(e, t);
    gc(n.options);
    let a;
    try {
      a = At.spawnSync(n.file, n.args, n.options);
    } catch (l) {
      throw Ae({
        error: l,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      });
    }
    let c = oe(n.options, a.stdout, a.error), u = oe(n.options, a.stderr, a.error);
    if (a.error || a.status !== 0 || a.signal !== null) {
      let l = Ae({
        stdout: c,
        stderr: u,
        error: a.error,
        signal: a.signal,
        exitCode: a.status,
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: a.error && a.error.code === "ETIMEDOUT",
        isCanceled: !1,
        killed: a.signal !== null
      });
      if (!n.options.reject)
        return l;
      throw l;
    }
    return {
      command: i,
      escapedCommand: s,
      exitCode: 0,
      stdout: c,
      stderr: u,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  };
  V.exports.command = (e, t) => {
    let [r, ...n] = so(e);
    return Re(r, n, t);
  };
  V.exports.commandSync = (e, t) => {
    let [r, ...n] = so(e);
    return Re.sync(r, n, t);
  };
  V.exports.node = (e, t, r = {}) => {
    t && !Array.isArray(t) && typeof t == "object" && (r = t, t = []);
    let n = oo.node(r), i = process.execArgv.filter((c) => !c.startsWith("--inspect")), {
      nodePath: s = process.execPath,
      nodeOptions: a = i
    } = r;
    return Re(
      s,
      [
        ...a,
        e,
        ...Array.isArray(t) ? t : []
      ],
      {
        ...r,
        stdin: void 0,
        stdout: void 0,
        stderr: void 0,
        stdio: n,
        shell: !1
      }
    );
  };
});

// ../node_modules/detect-package-manager/dist/index.js
var mo = d((po) => {
  var wc = Object.create, je = Object.defineProperty, vc = Object.getOwnPropertyDescriptor, Pc = Object.getOwnPropertyNames, Ec = Object.getPrototypeOf,
  Tc = Object.prototype.hasOwnProperty, lo = /* @__PURE__ */ o((e) => je(e, "__esModule", { value: !0 }), "__markAsModule"), Ic = /* @__PURE__ */ o(
  (e, t) => {
    lo(e);
    for (var r in t)
      je(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), kc = /* @__PURE__ */ o((e, t, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let n of Pc(t))
        !Tc.call(e, n) && n !== "default" && je(e, n, { get: /* @__PURE__ */ o(() => t[n], "get"), enumerable: !(r = vc(t, n)) || r.enumerable });
    return e;
  }, "__reExport"), _t = /* @__PURE__ */ o((e) => kc(lo(je(e != null ? wc(Ec(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: /* @__PURE__ */ o(
  () => e.default, "get"), enumerable: !0 } : { value: e, enumerable: !0 })), e), "__toModule");
  Ic(po, {
    clearCache: /* @__PURE__ */ o(() => _c, "clearCache"),
    detect: /* @__PURE__ */ o(() => Ac, "detect"),
    getNpmVersion: /* @__PURE__ */ o(() => Rc, "getNpmVersion")
  });
  var Cc = _t(require("fs")), _e = _t(require("path")), fo = _t(uo());
  async function Ge(e) {
    try {
      return await Cc.promises.access(e), !0;
    } catch {
      return !1;
    }
  }
  o(Ge, "pathExists");
  var N = /* @__PURE__ */ new Map();
  function Rt(e) {
    let t = `has_global_${e}`;
    return N.has(t) ? Promise.resolve(N.get(t)) : (0, fo.default)(e, ["--version"]).then((r) => /^\d+.\d+.\d+$/.test(r.stdout)).then((r) => (N.
    set(t, r), r)).catch(() => !1);
  }
  o(Rt, "hasGlobalInstallation");
  function Oc(e = ".") {
    let t = `lockfile_${e}`;
    return N.has(t) ? Promise.resolve(N.get(t)) : Promise.all([
      Ge((0, _e.resolve)(e, "yarn.lock")),
      Ge((0, _e.resolve)(e, "package-lock.json")),
      Ge((0, _e.resolve)(e, "pnpm-lock.yaml")),
      Ge((0, _e.resolve)(e, "bun.lockb"))
    ]).then(([r, n, i, s]) => {
      let a = null;
      return r ? a = "yarn" : i ? a = "pnpm" : s ? a = "bun" : n && (a = "npm"), N.set(t, a), a;
    });
  }
  o(Oc, "getTypeofLockFile");
  var Ac = /* @__PURE__ */ o(async ({
    cwd: e,
    includeGlobalBun: t
  } = {}) => {
    let r = await Oc(e);
    if (r)
      return r;
    let [n, i, s] = await Promise.all([
      Rt("yarn"),
      Rt("pnpm"),
      t && Rt("bun")
    ]);
    return n ? "yarn" : i ? "pnpm" : s ? "bun" : "npm";
  }, "detect");
  function Rc(e) {
    return (0, fo.default)(e || "npm", ["--version"]).then((t) => t.stdout);
  }
  o(Rc, "getNpmVersion");
  function _c() {
    return N.clear();
  }
  o(_c, "clearCache");
});

// ../node_modules/walk-up-path/dist/cjs/index.js
var yo = d((Ne) => {
  "use strict";
  Object.defineProperty(Ne, "__esModule", { value: !0 });
  Ne.walkUp = void 0;
  var ho = require("path"), Gc = /* @__PURE__ */ o(function* (e) {
    for (e = (0, ho.resolve)(e); e; ) {
      yield e;
      let t = (0, ho.dirname)(e);
      if (t === e)
        break;
      e = t;
    }
  }, "walkUp");
  Ne.walkUp = Gc;
});

// ../node_modules/common-path-prefix/index.js
var Bi = d((jp, Ni) => {
  "use strict";
  var { sep: Uu } = require("path"), $u = /* @__PURE__ */ o((e) => {
    for (let t of e) {
      let r = /(\/|\\)/.exec(t);
      if (r !== null) return r[0];
    }
    return Uu;
  }, "determineSeparator");
  Ni.exports = /* @__PURE__ */ o(function(t, r = $u(t)) {
    let [n = "", ...i] = t;
    if (n === "" || i.length === 0) return "";
    let s = n.split(r), a = s.length;
    for (let u of i) {
      let l = u.split(r);
      for (let f = 0; f < a; f++)
        l[f] !== s[f] && (a = f);
      if (a === 0) return "";
    }
    let c = s.slice(0, a).join(r);
    return c.endsWith(r) ? c : c + r;
  }, "commonPathPrefix");
});

// ../node_modules/fetch-retry/index.js
var ns = d((hh, rs) => {
  "use strict";
  rs.exports = function(e, t) {
    if (t = t || {}, typeof e != "function")
      throw new _("fetch must be a function");
    if (typeof t != "object")
      throw new _("defaults must be an object");
    if (t.retries !== void 0 && !rt(t.retries))
      throw new _("retries must be a positive integer");
    if (t.retryDelay !== void 0 && !rt(t.retryDelay) && typeof t.retryDelay != "function")
      throw new _("retryDelay must be a positive integer or a function returning a positive integer");
    if (t.retryOn !== void 0 && !Array.isArray(t.retryOn) && typeof t.retryOn != "function")
      throw new _("retryOn property expects an array or function");
    var r = {
      retries: 3,
      retryDelay: 1e3,
      retryOn: []
    };
    return t = Object.assign(r, t), /* @__PURE__ */ o(function(i, s) {
      var a = t.retries, c = t.retryDelay, u = t.retryOn;
      if (s && s.retries !== void 0)
        if (rt(s.retries))
          a = s.retries;
        else
          throw new _("retries must be a positive integer");
      if (s && s.retryDelay !== void 0)
        if (rt(s.retryDelay) || typeof s.retryDelay == "function")
          c = s.retryDelay;
        else
          throw new _("retryDelay must be a positive integer or a function returning a positive integer");
      if (s && s.retryOn)
        if (Array.isArray(s.retryOn) || typeof s.retryOn == "function")
          u = s.retryOn;
        else
          throw new _("retryOn property expects an array or function");
      return new Promise(function(l, f) {
        var w = /* @__PURE__ */ o(function(p) {
          var b = typeof Request < "u" && i instanceof Request ? i.clone() : i;
          e(b, s).then(function(h) {
            if (Array.isArray(u) && u.indexOf(h.status) === -1)
              l(h);
            else if (typeof u == "function")
              try {
                return Promise.resolve(u(p, null, h)).then(function(x) {
                  x ? y(p, null, h) : l(h);
                }).catch(f);
              } catch (x) {
                f(x);
              }
            else
              p < a ? y(p, null, h) : l(h);
          }).catch(function(h) {
            if (typeof u == "function")
              try {
                Promise.resolve(u(p, h, null)).then(function(x) {
                  x ? y(p, h, null) : f(h);
                }).catch(function(x) {
                  f(x);
                });
              } catch (x) {
                f(x);
              }
            else p < a ? y(p, h, null) : f(h);
          });
        }, "wrappedFetch");
        function y(p, b, h) {
          var x = typeof c == "function" ? c(p, b, h) : c;
          setTimeout(function() {
            w(++p);
          }, x);
        }
        o(y, "retry"), w(0);
      });
    }, "fetchRetry");
  };
  function rt(e) {
    return Number.isInteger(e) && e >= 0;
  }
  o(rt, "isPositiveInteger");
  function _(e) {
    this.name = "ArgumentError", this.message = e;
  }
  o(_, "ArgumentError");
});

// src/telemetry/index.ts
var dl = {};
Ps(dl, {
  addToGlobalContext: () => ys,
  computeStorybookMetadata: () => ts,
  getPrecedingUpgrade: () => ds,
  getStorybookMetadata: () => pr,
  isExampleStoryId: () => ll,
  metaFrameworks: () => fr,
  oneWayHash: () => nt,
  sanitizeAddonName: () => dr,
  telemetry: () => fl
});
module.exports = Es(dl);
var xr = require("@storybook/core/node-logger");

// src/telemetry/notify.ts
var ct = require("@storybook/core/common"), ge = g(Pr(), 1);
var Er = "telemetry-notification-date", M = console, Tr = /* @__PURE__ */ o(async () => {
  await ct.cache.get(Er, null) || (ct.cache.set(Er, Date.now()), M.log(), M.log(
    `${ge.default.magenta(
      ge.default.bold("attention")
    )} => Storybook now collects completely anonymous telemetry regarding usage.`
  ), M.log("This information is used to shape Storybook's roadmap and prioritize features."), M.log(
    "You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:"
  ), M.log(ge.default.cyan("https://storybook.js.org/telemetry")), M.log());
}, "notify");

// src/telemetry/sanitize.ts
var ut = g(require("node:path"), 1);
function Ir(e) {
  return e.replace(/[-[/{}()*+?.\\^$|]/g, "\\$&");
}
o(Ir, "regexpEscape");
function kr(e = "") {
  return e.replace(/\u001B\[[0-9;]*m/g, "");
}
o(kr, "removeAnsiEscapeCodes");
function Q(e, t = ut.default.sep) {
  if (!e)
    return e;
  let r = process.cwd().split(t);
  for (; r.length > 1; ) {
    let n = r.join(t), i = new RegExp(Ir(n), "gi");
    e = e.replace(i, "$SNIP");
    let s = r.join(t + t), a = new RegExp(Ir(s), "gi");
    e = e.replace(a, "$SNIP"), r.pop();
  }
  return e;
}
o(Q, "cleanPaths");
function be(e, t = ut.default.sep) {
  try {
    e = {
      ...JSON.parse(JSON.stringify(e)),
      message: kr(e.message),
      stack: kr(e.stack),
      cause: e.cause,
      name: e.name
    };
    let r = Q(JSON.stringify(e), t);
    return JSON.parse(r);
  } catch (r) {
    return `Sanitization error: ${r?.message}`;
  }
}
o(be, "sanitizeError");

// src/telemetry/storybook-metadata.ts
var R = require("@storybook/core/common"), es = require("@storybook/core/csf-tools"), tt = g(mo(), 1);

// ../node_modules/fd-package-json/dist/esm/main.js
var go = g(yo(), 1), bo = require("node:path"), Be = require("node:fs/promises"), xo = require("node:fs");
async function jc(e) {
  try {
    return (await (0, Be.stat)(e)).isFile();
  } catch {
    return !1;
  }
}
o(jc, "fileExists");
async function Nc(e) {
  for (let t of (0, go.walkUp)(e)) {
    let r = (0, bo.resolve)(t, "package.json");
    if (await jc(r))
      return r;
  }
  return null;
}
o(Nc, "findPackagePath");
async function So(e) {
  let t = await Nc(e);
  if (!t)
    return null;
  try {
    let r = await (0, Be.readFile)(t, { encoding: "utf8" });
    return JSON.parse(r);
  } catch {
    return null;
  }
}
o(So, "findPackage");

// src/telemetry/get-chromatic-version.ts
function wo(e) {
  let t = e.dependencies?.chromatic || e.devDependencies?.chromatic || e.peerDependencies?.chromatic;
  return t || (e.scripts && Object.values(e.scripts).find((r) => r?.match(/chromatic/)) ? "latest" : void 0);
}
o(wo, "getChromaticVersionSpecifier");

// src/telemetry/get-framework-info.ts
var To = require("node:path"), Io = require("@storybook/core/common");

// src/telemetry/package-json.ts
var vo = require("node:fs/promises"), Po = require("node:path");
var Gt = /* @__PURE__ */ o(async (e) => {
  let t = Object.keys(e);
  return Promise.all(t.map(De));
}, "getActualPackageVersions"), De = /* @__PURE__ */ o(async (e) => {
  try {
    let t = await jt(e);
    return {
      name: e,
      version: t.version
    };
  } catch {
    return { name: e, version: null };
  }
}, "getActualPackageVersion"), jt = /* @__PURE__ */ o(async (e) => {
  let t = require.resolve((0, Po.join)(e, "package.json"), {
    paths: [process.cwd()]
  });
  return JSON.parse(await (0, vo.readFile)(t, { encoding: "utf8" }));
}, "getActualPackageJson");

// src/telemetry/get-framework-info.ts
var Bc = [
  "html",
  "react",
  "svelte",
  "vue3",
  "preact",
  "server",
  "vue",
  "web-components",
  "angular",
  "ember"
], Dc = ["builder-webpack5", "builder-vite"];
function Eo(e, t) {
  let { name: r = "", version: n, dependencies: i, devDependencies: s, peerDependencies: a } = e, c = {
    // We include the framework itself because it may be a renderer too (e.g. angular)
    [r]: n,
    ...i,
    ...s,
    ...a
  };
  return t.map((u) => `@storybook/${u}`).find((u) => c[u]);
}
o(Eo, "findMatchingPackage");
var Mc = /* @__PURE__ */ o((e) => {
  let t = (0, To.normalize)(e).replace(new RegExp(/\\/, "g"), "/");
  return Object.keys(Io.frameworkPackages).find((n) => t.endsWith(n)) || Q(e).replace(/.*node_modules[\\/]/, "");
}, "getFrameworkPackageName");
async function ko(e) {
  if (!e?.framework)
    return {};
  let t = typeof e.framework == "string" ? e.framework : e.framework?.name;
  if (!t)
    return {};
  let r = await jt(t);
  if (!r)
    return {};
  let n = Eo(r, Dc), i = Eo(r, Bc), s = Mc(t), a = typeof e.framework == "object" ? e.framework.options : {};
  return {
    framework: {
      name: s,
      options: a
    },
    builder: n,
    renderer: i
  };
}
o(ko, "getFrameworkInfo");

// src/telemetry/get-monorepo-type.ts
var ie = require("node:fs"), Me = require("node:path"), Oo = require("@storybook/core/common");
var Co = {
  Nx: "nx.json",
  Turborepo: "turbo.json",
  Lerna: "lerna.json",
  Rush: "rush.json",
  Lage: "lage.config.json"
}, Ao = /* @__PURE__ */ o(() => {
  let e = (0, Oo.getProjectRoot)();
  if (!e)
    return;
  let r = Object.keys(Co).find((i) => {
    let s = (0, Me.join)(e, Co[i]);
    return (0, ie.existsSync)(s);
  });
  if (r)
    return r;
  if (!(0, ie.existsSync)((0, Me.join)(e, "package.json")))
    return;
  if (JSON.parse(
    (0, ie.readFileSync)((0, Me.join)(e, "package.json"), { encoding: "utf8" })
  )?.workspaces)
    return "Workspaces";
}, "getMonorepoType");

// node_modules/execa/index.js
var ki = require("node:buffer"), Ci = g(require("node:path"), 1), Ze = g(require("node:child_process"), 1), ue = g(require("node:process"), 1),
Oi = g(St(), 1);

// ../node_modules/strip-final-newline/index.js
function Nt(e) {
  let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
  return e[e.length - 1] === t && (e = e.slice(0, -1)), e[e.length - 1] === r && (e = e.slice(0, -1)), e;
}
o(Nt, "stripFinalNewline");

// node_modules/npm-run-path/index.js
var se = g(require("node:process"), 1), z = g(require("node:path"), 1), Ro = g(require("node:url"), 1);

// node_modules/path-key/index.js
function Le(e = {}) {
  let {
    env: t = process.env,
    platform: r = process.platform
  } = e;
  return r !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
}
o(Le, "pathKey");

// node_modules/npm-run-path/index.js
function Lc(e = {}) {
  let {
    cwd: t = se.default.cwd(),
    path: r = se.default.env[Le()],
    execPath: n = se.default.execPath
  } = e, i, s = t instanceof URL ? Ro.default.fileURLToPath(t) : t, a = z.default.resolve(s), c = [];
  for (; i !== a; )
    c.push(z.default.join(a, "node_modules/.bin")), i = a, a = z.default.resolve(a, "..");
  return c.push(z.default.resolve(s, n, "..")), [...c, r].join(z.default.delimiter);
}
o(Lc, "npmRunPath");
function _o({ env: e = se.default.env, ...t } = {}) {
  e = { ...e };
  let r = Le({ env: e });
  return t.path = e[r], e[r] = Lc(t), e;
}
o(_o, "npmRunPathEnv");

// node_modules/mimic-fn/index.js
var Fc = /* @__PURE__ */ o((e, t, r, n) => {
  if (r === "length" || r === "prototype" || r === "arguments" || r === "caller")
    return;
  let i = Object.getOwnPropertyDescriptor(e, r), s = Object.getOwnPropertyDescriptor(t, r);
  !Uc(i, s) && n || Object.defineProperty(e, r, s);
}, "copyProperty"), Uc = /* @__PURE__ */ o(function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable &&
  (e.writable || e.value === t.value);
}, "canCopyProperty"), $c = /* @__PURE__ */ o((e, t) => {
  let r = Object.getPrototypeOf(t);
  r !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, r);
}, "changePrototype"), qc = /* @__PURE__ */ o((e, t) => `/* Wrapped ${e}*/
${t}`, "wrappedToString"), Wc = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), Hc = Object.getOwnPropertyDescriptor(Function.
prototype.toString, "name"), Vc = /* @__PURE__ */ o((e, t, r) => {
  let n = r === "" ? "" : `with ${r.trim()}() `, i = qc.bind(null, n, t.toString());
  Object.defineProperty(i, "name", Hc), Object.defineProperty(e, "toString", { ...Wc, value: i });
}, "changeToString");
function Bt(e, t, { ignoreNonConfigurable: r = !1 } = {}) {
  let { name: n } = e;
  for (let i of Reflect.ownKeys(t))
    Fc(e, t, i, r);
  return $c(e, t), Vc(e, t, n), e;
}
o(Bt, "mimicFunction");

// node_modules/onetime/index.js
var Fe = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ o((e, t = {}) => {
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
    if (Fe.set(s, ++n), n === 1)
      r = e.apply(this, a), e = null;
    else if (t.throw === !0)
      throw new Error(`Function \`${i}\` can only be called once`);
    return r;
  }, "onetime");
  return Bt(s, e), Fe.set(s, n), s;
}, "onetime");
Go.callCount = (e) => {
  if (!Fe.has(e))
    throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return Fe.get(e);
};
var jo = Go;

// node_modules/execa/lib/error.js
var Uo = g(require("node:process"), 1);

// node_modules/human-signals/build/src/main.js
var Lo = require("node:os");

// node_modules/human-signals/build/src/realtime.js
var No = /* @__PURE__ */ o(() => {
  let e = Dt - Bo + 1;
  return Array.from({ length: e }, zc);
}, "getRealtimeSignals"), zc = /* @__PURE__ */ o((e, t) => ({
  name: `SIGRT${t + 1}`,
  number: Bo + t,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
}), "getRealtimeSignal"), Bo = 34, Dt = 64;

// node_modules/human-signals/build/src/signals.js
var Mo = require("node:os");

// node_modules/human-signals/build/src/core.js
var Do = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  {
    name: "SIGABRT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "ansi"
  },
  {
    name: "SIGIOT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "bsd"
  },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  {
    name: "SIGXFSZ",
    number: 25,
    action: "core",
    description: "File too big",
    standard: "bsd"
  },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];

// node_modules/human-signals/build/src/signals.js
var Mt = /* @__PURE__ */ o(() => {
  let e = No();
  return [...Do, ...e].map(Kc);
}, "getSignals"), Kc = /* @__PURE__ */ o(({
  name: e,
  number: t,
  description: r,
  action: n,
  forced: i = !1,
  standard: s
}) => {
  let {
    signals: { [e]: a }
  } = Mo.constants, c = a !== void 0;
  return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
}, "normalizeSignal");

// node_modules/human-signals/build/src/main.js
var Jc = /* @__PURE__ */ o(() => {
  let e = Mt();
  return Object.fromEntries(e.map(Yc));
}, "getSignalsByName"), Yc = /* @__PURE__ */ o(({
  name: e,
  number: t,
  description: r,
  supported: n,
  action: i,
  forced: s,
  standard: a
}) => [e, { name: e, number: t, description: r, supported: n, action: i, forced: s, standard: a }], "getSignalByName"), Fo = Jc(), Xc = /* @__PURE__ */ o(
() => {
  let e = Mt(), t = Dt + 1, r = Array.from(
    { length: t },
    (n, i) => Zc(i, e)
  );
  return Object.assign({}, ...r);
}, "getSignalsByNumber"), Zc = /* @__PURE__ */ o((e, t) => {
  let r = Qc(e, t);
  if (r === void 0)
    return {};
  let { name: n, description: i, supported: s, action: a, forced: c, standard: u } = r;
  return {
    [e]: {
      name: n,
      number: e,
      description: i,
      supported: s,
      action: a,
      forced: c,
      standard: u
    }
  };
}, "getSignalByNumber"), Qc = /* @__PURE__ */ o((e, t) => {
  let r = t.find(({ name: n }) => Lo.constants.signals[n] === e);
  return r !== void 0 ? r : t.find((n) => n.number === e);
}, "findSignalByNumber"), pd = Xc();

// node_modules/execa/lib/error.js
var eu = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s, isCanceled: a }) => e ? `\
timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was killed with ${n} (${i})` :
s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), ae = /* @__PURE__ */ o(({
  stdout: e,
  stderr: t,
  all: r,
  error: n,
  signal: i,
  exitCode: s,
  command: a,
  escapedCommand: c,
  timedOut: u,
  isCanceled: l,
  killed: f,
  parsed: { options: { timeout: w, cwd: y = Uo.default.cwd() } }
}) => {
  s = s === null ? void 0 : s, i = i === null ? void 0 : i;
  let p = i === void 0 ? void 0 : Fo[i].description, b = n && n.code, x = `Command ${eu({ timedOut: u, timeout: w, errorCode: b, signal: i, signalDescription: p,
  exitCode: s, isCanceled: l })}: ${a}`, E = Object.prototype.toString.call(n) === "[object Error]", I = E ? `${x}
${n.message}` : x, A = [I, t, e].filter(Boolean).join(`
`);
  return E ? (n.originalMessage = n.message, n.message = A) : n = new Error(A), n.shortMessage = I, n.command = a, n.escapedCommand = c, n.exitCode =
  s, n.signal = i, n.signalDescription = p, n.stdout = e, n.stderr = t, n.cwd = y, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
  bufferedData, n.failed = !0, n.timedOut = !!u, n.isCanceled = l, n.killed = f && !u, n;
}, "makeError");

// node_modules/execa/lib/stdio.js
var Ue = ["stdin", "stdout", "stderr"], tu = /* @__PURE__ */ o((e) => Ue.some((t) => e[t] !== void 0), "hasAlias"), $o = /* @__PURE__ */ o((e) => {
  if (!e)
    return;
  let { stdio: t } = e;
  if (t === void 0)
    return Ue.map((n) => e[n]);
  if (tu(e))
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Ue.map((n) => `\`${n}\``).join(", ")}`);
  if (typeof t == "string")
    return t;
  if (!Array.isArray(t))
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
  let r = Math.max(t.length, Ue.length);
  return Array.from({ length: r }, (n, i) => t[i]);
}, "normalizeStdio");

// node_modules/execa/lib/kill.js
var Wo = g(require("node:os"), 1);

// node_modules/signal-exit/dist/mjs/signals.js
var B = [];
B.push("SIGHUP", "SIGINT", "SIGTERM");
process.platform !== "win32" && B.push(
  "SIGALRM",
  "SIGABRT",
  "SIGVTALRM",
  "SIGXCPU",
  "SIGXFSZ",
  "SIGUSR2",
  "SIGTRAP",
  "SIGSYS",
  "SIGQUIT",
  "SIGIOT"
  // should detect profiler and enable/disable accordingly.
  // see #21
  // 'SIGPROF'
);
process.platform === "linux" && B.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");

// node_modules/signal-exit/dist/mjs/index.js
var $e = /* @__PURE__ */ o((e) => !!e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.
reallyExit == "function" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "f\
unction", "processOk"), Lt = Symbol.for("signal-exit emitter"), Ft = globalThis, ru = Object.defineProperty.bind(Object), Ut = class {
  static {
    o(this, "Emitter");
  }
  emitted = {
    afterExit: !1,
    exit: !1
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (Ft[Lt])
      return Ft[Lt];
    ru(Ft, Lt, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    });
  }
  on(t, r) {
    this.listeners[t].push(r);
  }
  removeListener(t, r) {
    let n = this.listeners[t], i = n.indexOf(r);
    i !== -1 && (i === 0 && n.length === 1 ? n.length = 0 : n.splice(i, 1));
  }
  emit(t, r, n) {
    if (this.emitted[t])
      return !1;
    this.emitted[t] = !0;
    let i = !1;
    for (let s of this.listeners[t])
      i = s(r, n) === !0 || i;
    return t === "exit" && (i = this.emit("afterExit", r, n) || i), i;
  }
}, qe = class {
  static {
    o(this, "SignalExitBase");
  }
}, nu = /* @__PURE__ */ o((e) => ({
  onExit(t, r) {
    return e.onExit(t, r);
  },
  load() {
    return e.load();
  },
  unload() {
    return e.unload();
  }
}), "signalExitWrap"), $t = class extends qe {
  static {
    o(this, "SignalExitFallback");
  }
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
}, qt = class extends qe {
  static {
    o(this, "SignalExit");
  }
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #s = Wt.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #t = new Ut();
  #e;
  #o;
  #i;
  #n = {};
  #r = !1;
  constructor(t) {
    super(), this.#e = t, this.#n = {};
    for (let r of B)
      this.#n[r] = () => {
        let n = this.#e.listeners(r), { count: i } = this.#t, s = t;
        if (typeof s.__signal_exit_emitter__ == "object" && typeof s.__signal_exit_emitter__.count == "number" && (i += s.__signal_exit_emitter__.
        count), n.length === i) {
          this.unload();
          let a = this.#t.emit("exit", null, r), c = r === "SIGHUP" ? this.#s : r;
          a || t.kill(t.pid, c);
        }
      };
    this.#i = t.reallyExit, this.#o = t.emit;
  }
  onExit(t, r) {
    if (!$e(this.#e))
      return () => {
      };
    this.#r === !1 && this.load();
    let n = r?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(n, t), () => {
      this.#t.removeListener(n, t), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0 && this.unload();
    };
  }
  load() {
    if (!this.#r) {
      this.#r = !0, this.#t.count += 1;
      for (let t of B)
        try {
          let r = this.#n[t];
          r && this.#e.on(t, r);
        } catch {
        }
      this.#e.emit = (t, ...r) => this.#c(t, ...r), this.#e.reallyExit = (t) => this.#a(t);
    }
  }
  unload() {
    this.#r && (this.#r = !1, B.forEach((t) => {
      let r = this.#n[t];
      if (!r)
        throw new Error("Listener not defined for signal: " + t);
      try {
        this.#e.removeListener(t, r);
      } catch {
      }
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1);
  }
  #a(t) {
    return $e(this.#e) ? (this.#e.exitCode = t || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode)) :
    0;
  }
  #c(t, ...r) {
    let n = this.#o;
    if (t === "exit" && $e(this.#e)) {
      typeof r[0] == "number" && (this.#e.exitCode = r[0]);
      let i = n.call(this.#e, t, ...r);
      return this.#t.emit("exit", this.#e.exitCode, null), i;
    } else
      return n.call(this.#e, t, ...r);
  }
}, Wt = globalThis.process, {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit: qo,
  /**
   * Load the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  load: Pd,
  /**
   * Unload the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  unload: Ed
} = nu($e(Wt) ? new qt(Wt) : new $t());

// node_modules/execa/lib/kill.js
var ou = 1e3 * 5, Ho = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
  let n = e(t);
  return iu(e, t, r, n), n;
}, "spawnedKill"), iu = /* @__PURE__ */ o((e, t, r, n) => {
  if (!su(t, r, n))
    return;
  let i = cu(r), s = setTimeout(() => {
    e("SIGKILL");
  }, i);
  s.unref && s.unref();
}, "setKillTimeout"), su = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => au(e) && t !== !1 && r, "shouldForceKill"), au = /* @__PURE__ */ o(
(e) => e === Wo.default.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), cu = /* @__PURE__ */ o(
({ forceKillAfterTimeout: e = !0 }) => {
  if (e === !0)
    return ou;
  if (!Number.isFinite(e) || e < 0)
    throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  return e;
}, "getForceKillAfterTimeout"), Vo = /* @__PURE__ */ o((e, t) => {
  e.kill() && (t.isCanceled = !0);
}, "spawnedCancel"), uu = /* @__PURE__ */ o((e, t, r) => {
  e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
}, "timeoutKill"), zo = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
  if (t === 0 || t === void 0)
    return n;
  let i, s = new Promise((c, u) => {
    i = setTimeout(() => {
      uu(e, r, u);
    }, t);
  }), a = n.finally(() => {
    clearTimeout(i);
  });
  return Promise.race([s, a]);
}, "setupTimeout"), Ko = /* @__PURE__ */ o(({ timeout: e }) => {
  if (e !== void 0 && (!Number.isFinite(e) || e < 0))
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
}, "validateTimeout"), Jo = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
  if (!t || r)
    return n;
  let i = qo(() => {
    e.kill();
  });
  return n.finally(() => {
    i();
  });
}, "setExitHandler");

// node_modules/execa/lib/pipe.js
var Yo = require("node:fs"), Xo = require("node:child_process");

// node_modules/is-stream/index.js
function We(e) {
  return e !== null && typeof e == "object" && typeof e.pipe == "function";
}
o(We, "isStream");
function Ht(e) {
  return We(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
}
o(Ht, "isWritableStream");

// node_modules/execa/lib/pipe.js
var lu = /* @__PURE__ */ o((e) => e instanceof Xo.ChildProcess && typeof e.then == "function", "isExecaChildProcess"), Vt = /* @__PURE__ */ o(
(e, t, r) => {
  if (typeof r == "string")
    return e[t].pipe((0, Yo.createWriteStream)(r)), e;
  if (Ht(r))
    return e[t].pipe(r), e;
  if (!lu(r))
    throw new TypeError("The second argument must be a string, a stream or an Execa child process.");
  if (!Ht(r.stdin))
    throw new TypeError("The target child process's stdin must be available.");
  return e[t].pipe(r.stdin), r;
}, "pipeToTarget"), Zo = /* @__PURE__ */ o((e) => {
  e.stdout !== null && (e.pipeStdout = Vt.bind(void 0, e, "stdout")), e.stderr !== null && (e.pipeStderr = Vt.bind(void 0, e, "stderr")), e.
  all !== void 0 && (e.pipeAll = Vt.bind(void 0, e, "all"));
}, "addPipeMethods");

// node_modules/execa/lib/stream.js
var Ye = require("node:fs"), ci = require("node:timers/promises");

// node_modules/get-stream/source/contents.js
var ce = /* @__PURE__ */ o(async (e, { init: t, convertChunk: r, getSize: n, truncateChunk: i, addChunk: s, getFinalChunk: a, finalize: c }, {
maxBuffer: u = Number.POSITIVE_INFINITY } = {}) => {
  if (!du(e))
    throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  let l = t();
  l.length = 0;
  try {
    for await (let f of e) {
      let w = pu(f), y = r[w](f, l);
      ti({ convertedChunk: y, state: l, getSize: n, truncateChunk: i, addChunk: s, maxBuffer: u });
    }
    return fu({ state: l, convertChunk: r, getSize: n, truncateChunk: i, addChunk: s, getFinalChunk: a, maxBuffer: u }), c(l);
  } catch (f) {
    throw f.bufferedData = c(l), f;
  }
}, "getStreamContents"), fu = /* @__PURE__ */ o(({ state: e, getSize: t, truncateChunk: r, addChunk: n, getFinalChunk: i, maxBuffer: s }) => {
  let a = i(e);
  a !== void 0 && ti({ convertedChunk: a, state: e, getSize: t, truncateChunk: r, addChunk: n, maxBuffer: s });
}, "appendFinalChunk"), ti = /* @__PURE__ */ o(({ convertedChunk: e, state: t, getSize: r, truncateChunk: n, addChunk: i, maxBuffer: s }) => {
  let a = r(e), c = t.length + a;
  if (c <= s) {
    Qo(e, t, i, c);
    return;
  }
  let u = n(e, s - t.length);
  throw u !== void 0 && Qo(u, t, i, s), new He();
}, "appendChunk"), Qo = /* @__PURE__ */ o((e, t, r, n) => {
  t.contents = r(e, t, n), t.length = n;
}, "addNewChunk"), du = /* @__PURE__ */ o((e) => typeof e == "object" && e !== null && typeof e[Symbol.asyncIterator] == "function", "isAsyn\
cIterable"), pu = /* @__PURE__ */ o((e) => {
  let t = typeof e;
  if (t === "string")
    return "string";
  if (t !== "object" || e === null)
    return "others";
  if (globalThis.Buffer?.isBuffer(e))
    return "buffer";
  let r = ei.call(e);
  return r === "[object ArrayBuffer]" ? "arrayBuffer" : r === "[object DataView]" ? "dataView" : Number.isInteger(e.byteLength) && Number.isInteger(
  e.byteOffset) && ei.call(e.buffer) === "[object ArrayBuffer]" ? "typedArray" : "others";
}, "getChunkType"), { toString: ei } = Object.prototype, He = class extends Error {
  static {
    o(this, "MaxBufferError");
  }
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};

// node_modules/get-stream/source/utils.js
var zt = /* @__PURE__ */ o((e) => e, "identity"), Kt = /* @__PURE__ */ o(() => {
}, "noop"), Jt = /* @__PURE__ */ o(({ contents: e }) => e, "getContentsProp"), Ve = /* @__PURE__ */ o((e) => {
  throw new Error(`Streams in object mode are not supported: ${String(e)}`);
}, "throwObjectStream"), ze = /* @__PURE__ */ o((e) => e.length, "getLengthProp");

// node_modules/get-stream/source/array-buffer.js
async function Yt(e, t) {
  return ce(e, vu, t);
}
o(Yt, "getStreamAsArrayBuffer");
var mu = /* @__PURE__ */ o(() => ({ contents: new ArrayBuffer(0) }), "initArrayBuffer"), hu = /* @__PURE__ */ o((e) => yu.encode(e), "useTex\
tEncoder"), yu = new TextEncoder(), ri = /* @__PURE__ */ o((e) => new Uint8Array(e), "useUint8Array"), ni = /* @__PURE__ */ o((e) => new Uint8Array(
e.buffer, e.byteOffset, e.byteLength), "useUint8ArrayWithOffset"), gu = /* @__PURE__ */ o((e, t) => e.slice(0, t), "truncateArrayBufferChunk"),
bu = /* @__PURE__ */ o((e, { contents: t, length: r }, n) => {
  let i = si() ? Su(t, n) : xu(t, n);
  return new Uint8Array(i).set(e, r), i;
}, "addArrayBufferChunk"), xu = /* @__PURE__ */ o((e, t) => {
  if (t <= e.byteLength)
    return e;
  let r = new ArrayBuffer(ii(t));
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, "resizeArrayBufferSlow"), Su = /* @__PURE__ */ o((e, t) => {
  if (t <= e.maxByteLength)
    return e.resize(t), e;
  let r = new ArrayBuffer(t, { maxByteLength: ii(t) });
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, "resizeArrayBuffer"), ii = /* @__PURE__ */ o((e) => oi ** Math.ceil(Math.log(e) / Math.log(oi)), "getNewContentsLength"), oi = 2, wu = /* @__PURE__ */ o(
({ contents: e, length: t }) => si() ? e : e.slice(0, t), "finalizeArrayBuffer"), si = /* @__PURE__ */ o(() => "resize" in ArrayBuffer.prototype,
"hasArrayBufferResize"), vu = {
  init: mu,
  convertChunk: {
    string: hu,
    buffer: ri,
    arrayBuffer: ri,
    dataView: ni,
    typedArray: ni,
    others: Ve
  },
  getSize: ze,
  truncateChunk: gu,
  addChunk: bu,
  getFinalChunk: Kt,
  finalize: wu
};

// node_modules/get-stream/source/buffer.js
async function Ke(e, t) {
  if (!("Buffer" in globalThis))
    throw new Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return ai(await Yt(e, t));
  } catch (r) {
    throw r.bufferedData !== void 0 && (r.bufferedData = ai(r.bufferedData)), r;
  }
}
o(Ke, "getStreamAsBuffer");
var ai = /* @__PURE__ */ o((e) => globalThis.Buffer.from(e), "arrayBufferToNodeBuffer");

// node_modules/get-stream/source/string.js
async function Xt(e, t) {
  return ce(e, ku, t);
}
o(Xt, "getStreamAsString");
var Pu = /* @__PURE__ */ o(() => ({ contents: "", textDecoder: new TextDecoder() }), "initString"), Je = /* @__PURE__ */ o((e, { textDecoder: t }) => t.
decode(e, { stream: !0 }), "useTextDecoder"), Eu = /* @__PURE__ */ o((e, { contents: t }) => t + e, "addStringChunk"), Tu = /* @__PURE__ */ o(
(e, t) => e.slice(0, t), "truncateStringChunk"), Iu = /* @__PURE__ */ o(({ textDecoder: e }) => {
  let t = e.decode();
  return t === "" ? void 0 : t;
}, "getFinalStringChunk"), ku = {
  init: Pu,
  convertChunk: {
    string: zt,
    buffer: Je,
    arrayBuffer: Je,
    dataView: Je,
    typedArray: Je,
    others: Ve
  },
  getSize: ze,
  truncateChunk: Tu,
  addChunk: Eu,
  getFinalChunk: Iu,
  finalize: Jt
};

// node_modules/execa/lib/stream.js
var ui = g(kt(), 1);
var li = /* @__PURE__ */ o((e) => {
  if (e !== void 0)
    throw new TypeError("The `input` and `inputFile` options cannot be both set.");
}, "validateInputOptions"), Cu = /* @__PURE__ */ o(({ input: e, inputFile: t }) => typeof t != "string" ? e : (li(e), (0, Ye.readFileSync)(t)),
"getInputSync"), fi = /* @__PURE__ */ o((e) => {
  let t = Cu(e);
  if (We(t))
    throw new TypeError("The `input` option cannot be a stream in sync mode");
  return t;
}, "handleInputSync"), Ou = /* @__PURE__ */ o(({ input: e, inputFile: t }) => typeof t != "string" ? e : (li(e), (0, Ye.createReadStream)(t)),
"getInput"), di = /* @__PURE__ */ o((e, t) => {
  let r = Ou(t);
  r !== void 0 && (We(r) ? r.pipe(e.stdin) : e.stdin.end(r));
}, "handleInput"), pi = /* @__PURE__ */ o((e, { all: t }) => {
  if (!t || !e.stdout && !e.stderr)
    return;
  let r = (0, ui.default)();
  return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
}, "makeAllStream"), Zt = /* @__PURE__ */ o(async (e, t) => {
  if (!(!e || t === void 0)) {
    await (0, ci.setTimeout)(0), e.destroy();
    try {
      return await t;
    } catch (r) {
      return r.bufferedData;
    }
  }
}, "getBufferedData"), Qt = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
  if (!(!e || !r))
    return t === "utf8" || t === "utf-8" ? Xt(e, { maxBuffer: n }) : t === null || t === "buffer" ? Ke(e, { maxBuffer: n }) : Au(e, n, t);
}, "getStreamPromise"), Au = /* @__PURE__ */ o(async (e, t, r) => (await Ke(e, { maxBuffer: t })).toString(r), "applyEncoding"), mi = /* @__PURE__ */ o(
async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
  let c = Qt(e, { encoding: n, buffer: i, maxBuffer: s }), u = Qt(t, { encoding: n, buffer: i, maxBuffer: s }), l = Qt(r, { encoding: n, buffer: i,
  maxBuffer: s * 2 });
  try {
    return await Promise.all([a, c, u, l]);
  } catch (f) {
    return Promise.all([
      { error: f, signal: f.signal, timedOut: f.timedOut },
      Zt(e, c),
      Zt(t, u),
      Zt(r, l)
    ]);
  }
}, "getSpawnedResult");

// node_modules/execa/lib/promise.js
var Ru = (async () => {
})().constructor.prototype, _u = ["then", "catch", "finally"].map((e) => [
  e,
  Reflect.getOwnPropertyDescriptor(Ru, e)
]), er = /* @__PURE__ */ o((e, t) => {
  for (let [r, n] of _u) {
    let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
    Reflect.defineProperty(e, r, { ...n, value: i });
  }
}, "mergePromise"), hi = /* @__PURE__ */ o((e) => new Promise((t, r) => {
  e.on("exit", (n, i) => {
    t({ exitCode: n, signal: i });
  }), e.on("error", (n) => {
    r(n);
  }), e.stdin && e.stdin.on("error", (n) => {
    r(n);
  });
}), "getSpawnedPromise");

// node_modules/execa/lib/command.js
var bi = require("node:buffer"), xi = require("node:child_process");
var Si = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), Gu = /^[\w.-]+$/, ju = /* @__PURE__ */ o((e) => typeof e !=
"string" || Gu.test(e) ? e : `"${e.replaceAll('"', '\\"')}"`, "escapeArg"), tr = /* @__PURE__ */ o((e, t) => Si(e, t).join(" "), "joinComman\
d"), rr = /* @__PURE__ */ o((e, t) => Si(e, t).map((r) => ju(r)).join(" "), "getEscapedCommand"), wi = / +/g, vi = /* @__PURE__ */ o((e) => {
  let t = [];
  for (let r of e.trim().split(wi)) {
    let n = t.at(-1);
    n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
  }
  return t;
}, "parseCommand"), yi = /* @__PURE__ */ o((e) => {
  let t = typeof e;
  if (t === "string")
    return e;
  if (t === "number")
    return String(e);
  if (t === "object" && e !== null && !(e instanceof xi.ChildProcess) && "stdout" in e) {
    let r = typeof e.stdout;
    if (r === "string")
      return e.stdout;
    if (bi.Buffer.isBuffer(e.stdout))
      return e.stdout.toString();
    throw new TypeError(`Unexpected "${r}" stdout in template expression`);
  }
  throw new TypeError(`Unexpected "${t}" in template expression`);
}, "parseExpression"), gi = /* @__PURE__ */ o((e, t, r) => r || e.length === 0 || t.length === 0 ? [...e, ...t] : [
  ...e.slice(0, -1),
  `${e.at(-1)}${t[0]}`,
  ...t.slice(1)
], "concatTokens"), Nu = /* @__PURE__ */ o(({ templates: e, expressions: t, tokens: r, index: n, template: i }) => {
  let s = i ?? e.raw[n], a = s.split(wi).filter(Boolean), c = gi(
    r,
    a,
    s.startsWith(" ")
  );
  if (n === t.length)
    return c;
  let u = t[n], l = Array.isArray(u) ? u.map((f) => yi(f)) : [yi(u)];
  return gi(
    c,
    l,
    s.endsWith(" ")
  );
}, "parseTemplate"), nr = /* @__PURE__ */ o((e, t) => {
  let r = [];
  for (let [n, i] of e.entries())
    r = Nu({ templates: e, expressions: t, tokens: r, index: n, template: i });
  return r;
}, "parseTemplates");

// node_modules/execa/lib/verbose.js
var Pi = require("node:util"), Ei = g(require("node:process"), 1);
var Ti = (0, Pi.debuglog)("execa").enabled, Xe = /* @__PURE__ */ o((e, t) => String(e).padStart(t, "0"), "padField"), Bu = /* @__PURE__ */ o(
() => {
  let e = /* @__PURE__ */ new Date();
  return `${Xe(e.getHours(), 2)}:${Xe(e.getMinutes(), 2)}:${Xe(e.getSeconds(), 2)}.${Xe(e.getMilliseconds(), 3)}`;
}, "getTimestamp"), or = /* @__PURE__ */ o((e, { verbose: t }) => {
  t && Ei.default.stderr.write(`[${Bu()}] ${e}
`);
}, "logCommand");

// node_modules/execa/index.js
var Du = 1e3 * 1e3 * 100, Mu = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
  let s = t ? { ...ue.default.env, ...e } : e;
  return r ? _o({ env: s, cwd: n, execPath: i }) : s;
}, "getEnv"), Ai = /* @__PURE__ */ o((e, t, r = {}) => {
  let n = Oi.default._parse(e, t, r);
  return e = n.command, t = n.args, r = n.options, r = {
    maxBuffer: Du,
    buffer: !0,
    stripFinalNewline: !0,
    extendEnv: !0,
    preferLocal: !1,
    localDir: r.cwd || ue.default.cwd(),
    execPath: ue.default.execPath,
    encoding: "utf8",
    reject: !0,
    cleanup: !0,
    all: !1,
    windowsHide: !0,
    verbose: Ti,
    ...r
  }, r.env = Mu(r), r.stdio = $o(r), ue.default.platform === "win32" && Ci.default.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e,
  args: t, options: r, parsed: n };
}, "handleArguments"), le = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !ki.Buffer.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
Nt(t) : t, "handleOutput");
function Ri(e, t, r) {
  let n = Ai(e, t, r), i = tr(e, t), s = rr(e, t);
  or(s, n.options), Ko(n.options);
  let a;
  try {
    a = Ze.default.spawn(n.file, n.args, n.options);
  } catch (p) {
    let b = new Ze.default.ChildProcess(), h = Promise.reject(ae({
      error: p,
      stdout: "",
      stderr: "",
      all: "",
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    }));
    return er(b, h), b;
  }
  let c = hi(a), u = zo(a, n.options, c), l = Jo(a, n.options, u), f = { isCanceled: !1 };
  a.kill = Ho.bind(null, a.kill.bind(a)), a.cancel = Vo.bind(null, a, f);
  let y = jo(/* @__PURE__ */ o(async () => {
    let [{ error: p, exitCode: b, signal: h, timedOut: x }, E, I, A] = await mi(a, n.options, l), m = le(n.options, E), v = le(n.options, I),
    C = le(n.options, A);
    if (p || b !== 0 || h !== null) {
      let X = ae({
        error: p,
        exitCode: b,
        signal: h,
        stdout: m,
        stderr: v,
        all: C,
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: x,
        isCanceled: f.isCanceled || (n.options.signal ? n.options.signal.aborted : !1),
        killed: a.killed
      });
      if (!n.options.reject)
        return X;
      throw X;
    }
    return {
      command: i,
      escapedCommand: s,
      exitCode: 0,
      stdout: m,
      stderr: v,
      all: C,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  }, "handlePromise"));
  return di(a, n.options), a.all = pi(a, n.options), Zo(a), er(a, y), a;
}
o(Ri, "execa");
function Lu(e, t, r) {
  let n = Ai(e, t, r), i = tr(e, t), s = rr(e, t);
  or(s, n.options);
  let a = fi(n.options), c;
  try {
    c = Ze.default.spawnSync(n.file, n.args, { ...n.options, input: a });
  } catch (f) {
    throw ae({
      error: f,
      stdout: "",
      stderr: "",
      all: "",
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let u = le(n.options, c.stdout, c.error), l = le(n.options, c.stderr, c.error);
  if (c.error || c.status !== 0 || c.signal !== null) {
    let f = ae({
      stdout: u,
      stderr: l,
      error: c.error,
      signal: c.signal,
      exitCode: c.status,
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: c.error && c.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: c.signal !== null
    });
    if (!n.options.reject)
      return f;
    throw f;
  }
  return {
    command: i,
    escapedCommand: s,
    exitCode: 0,
    stdout: u,
    stderr: l,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}
o(Lu, "execaSync");
var Fu = /* @__PURE__ */ o(({ input: e, inputFile: t, stdio: r }) => e === void 0 && t === void 0 && r === void 0 ? { stdin: "inherit" } : {},
"normalizeScriptStdin"), Ii = /* @__PURE__ */ o((e = {}) => ({
  preferLocal: !0,
  ...Fu(e),
  ...e
}), "normalizeScriptOptions");
function _i(e) {
  function t(r, ...n) {
    if (!Array.isArray(r))
      return _i({ ...e, ...r });
    let [i, ...s] = nr(r, n);
    return Ri(i, s, Ii(e));
  }
  return o(t, "$"), t.sync = (r, ...n) => {
    if (!Array.isArray(r))
      throw new TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [i, ...s] = nr(r, n);
    return Lu(i, s, Ii(e));
  }, t;
}
o(_i, "create$");
var Op = _i();
function Gi(e, t) {
  let [r, ...n] = vi(e);
  return Ri(r, n, t);
}
o(Gi, "execaCommand");

// src/common/utils/file-cache.ts
var fe = require("node:crypto"), T = require("node:fs"), k = require("node:fs/promises"), ji = require("node:os"), K = require("node:path");
var ir = class {
  static {
    o(this, "FileSystemCache");
  }
  constructor(t = {}) {
    this.prefix = (t.ns || t.prefix || "") + "-", this.hash_alg = t.hash_alg || "md5", this.cache_dir = t.basePath || (0, K.join)((0, ji.tmpdir)(),
    (0, fe.randomBytes)(15).toString("base64").replace(/\//g, "-")), this.ttl = t.ttl || 0, (0, fe.createHash)(this.hash_alg), (0, T.mkdirSync)(
    this.cache_dir, { recursive: !0 });
  }
  generateHash(t) {
    return (0, K.join)(this.cache_dir, this.prefix + (0, fe.createHash)(this.hash_alg).update(t).digest("hex"));
  }
  isExpired(t, r) {
    return t.ttl != null && r > t.ttl;
  }
  parseCacheData(t, r) {
    let n = JSON.parse(t);
    return this.isExpired(n, Date.now()) ? r : n.content;
  }
  parseSetData(t, r, n = {}) {
    let i = n.ttl ?? this.ttl;
    return JSON.stringify({ key: t, content: r, ...i && { ttl: Date.now() + i * 1e3 } });
  }
  async get(t, r) {
    try {
      let n = await (0, k.readFile)(this.generateHash(t), "utf8");
      return this.parseCacheData(n, r);
    } catch {
      return r;
    }
  }
  getSync(t, r) {
    try {
      let n = (0, T.readFileSync)(this.generateHash(t), "utf8");
      return this.parseCacheData(n, r);
    } catch {
      return r;
    }
  }
  async set(t, r, n = {}) {
    let i = typeof n == "number" ? { ttl: n } : n;
    (0, T.mkdirSync)(this.cache_dir, { recursive: !0 }), await (0, k.writeFile)(this.generateHash(t), this.parseSetData(t, r, i), {
      encoding: i.encoding || "utf8"
    });
  }
  setSync(t, r, n = {}) {
    let i = typeof n == "number" ? { ttl: n } : n;
    (0, T.mkdirSync)(this.cache_dir, { recursive: !0 }), (0, T.writeFileSync)(this.generateHash(t), this.parseSetData(t, r, i), {
      encoding: i.encoding || "utf8"
    });
  }
  async setMany(t, r) {
    await Promise.all(t.map((n) => this.set(n.key, n.content ?? n.value, r)));
  }
  setManySync(t, r) {
    t.forEach((n) => this.setSync(n.key, n.content ?? n.value, r));
  }
  async remove(t) {
    await (0, k.rm)(this.generateHash(t), { force: !0 });
  }
  removeSync(t) {
    (0, T.rmSync)(this.generateHash(t), { force: !0 });
  }
  async clear() {
    let t = await (0, k.readdir)(this.cache_dir);
    await Promise.all(
      t.filter((r) => r.startsWith(this.prefix)).map((r) => (0, k.rm)((0, K.join)(this.cache_dir, r), { force: !0 }))
    );
  }
  clearSync() {
    (0, T.readdirSync)(this.cache_dir).filter((t) => t.startsWith(this.prefix)).forEach((t) => (0, T.rmSync)((0, K.join)(this.cache_dir, t),
    { force: !0 }));
  }
  async getAll() {
    let t = Date.now(), r = await (0, k.readdir)(this.cache_dir);
    return (await Promise.all(
      r.filter((i) => i.startsWith(this.prefix)).map((i) => (0, k.readFile)((0, K.join)(this.cache_dir, i), "utf8"))
    )).map((i) => JSON.parse(i)).filter((i) => i.content && !this.isExpired(i, t));
  }
  async load() {
    return {
      files: (await this.getAll()).map((r) => ({
        path: this.generateHash(r.key),
        value: r.content,
        key: r.key
      }))
    };
  }
};
function sr(e) {
  return new ir(e);
}
o(sr, "createFileSystemCache");

// src/common/utils/resolve-path-in-sb-cache.ts
var lr = require("node:path");

// ../node_modules/find-cache-dir/index.js
var Ki = g(require("node:process"), 1), J = g(require("node:path"), 1), pe = g(require("node:fs"), 1), Ji = g(Bi(), 1);

// ../node_modules/pkg-dir/index.js
var Wi = g(require("node:path"), 1);

// ../node_modules/pkg-dir/node_modules/find-up/index.js
var de = g(require("node:path"), 1), $i = require("node:url");

// ../node_modules/locate-path/index.js
var Di = g(require("node:process"), 1), Mi = g(require("node:path"), 1), Qe = g(require("node:fs"), 1), Li = require("node:url");
var Fi = {
  directory: "isDirectory",
  file: "isFile"
};
function qu(e) {
  if (!Object.hasOwnProperty.call(Fi, e))
    throw new Error(`Invalid type specified: ${e}`);
}
o(qu, "checkType");
var Wu = /* @__PURE__ */ o((e, t) => t[Fi[e]](), "matchType"), Hu = /* @__PURE__ */ o((e) => e instanceof URL ? (0, Li.fileURLToPath)(e) : e,
"toPath");
function ar(e, {
  cwd: t = Di.default.cwd(),
  type: r = "file",
  allowSymlinks: n = !0
} = {}) {
  qu(r), t = Hu(t);
  let i = n ? Qe.default.statSync : Qe.default.lstatSync;
  for (let s of e)
    try {
      let a = i(Mi.default.resolve(t, s), {
        throwIfNoEntry: !1
      });
      if (!a)
        continue;
      if (Wu(r, a))
        return s;
    } catch {
    }
}
o(ar, "locatePathSync");

// ../node_modules/pkg-dir/node_modules/path-exists/index.js
var Ui = g(require("node:fs"), 1);

// ../node_modules/pkg-dir/node_modules/find-up/index.js
var Vu = /* @__PURE__ */ o((e) => e instanceof URL ? (0, $i.fileURLToPath)(e) : e, "toPath"), zu = Symbol("findUpStop");
function Ku(e, t = {}) {
  let r = de.default.resolve(Vu(t.cwd) || ""), { root: n } = de.default.parse(r), i = t.stopAt || n, s = t.limit || Number.POSITIVE_INFINITY,
  a = [e].flat(), c = /* @__PURE__ */ o((l) => {
    if (typeof e != "function")
      return ar(a, l);
    let f = e(l.cwd);
    return typeof f == "string" ? ar([f], l) : f;
  }, "runMatcher"), u = [];
  for (; ; ) {
    let l = c({ ...t, cwd: r });
    if (l === zu || (l && u.push(de.default.resolve(r, l)), r === i || u.length >= s))
      break;
    r = de.default.dirname(r);
  }
  return u;
}
o(Ku, "findUpMultipleSync");
function qi(e, t = {}) {
  return Ku(e, { ...t, limit: 1 })[0];
}
o(qi, "findUpSync");

// ../node_modules/pkg-dir/index.js
function Hi({ cwd: e } = {}) {
  let t = qi("package.json", { cwd: e });
  return t && Wi.default.dirname(t);
}
o(Hi, "packageDirectorySync");

// ../node_modules/find-cache-dir/index.js
var { env: cr, cwd: Ju } = Ki.default, Vi = /* @__PURE__ */ o((e) => {
  try {
    return pe.default.accessSync(e, pe.default.constants.W_OK), !0;
  } catch {
    return !1;
  }
}, "isWritable");
function zi(e, t) {
  return t.create && pe.default.mkdirSync(e, { recursive: !0 }), e;
}
o(zi, "useDirectory");
function Yu(e) {
  let t = J.default.join(e, "node_modules");
  if (!(!Vi(t) && (pe.default.existsSync(t) || !Vi(J.default.join(e)))))
    return t;
}
o(Yu, "getNodeModuleDirectory");
function ur(e = {}) {
  if (cr.CACHE_DIR && !["true", "false", "1", "0"].includes(cr.CACHE_DIR))
    return zi(J.default.join(cr.CACHE_DIR, e.name), e);
  let { cwd: t = Ju(), files: r } = e;
  if (r) {
    if (!Array.isArray(r))
      throw new TypeError(`Expected \`files\` option to be an array, got \`${typeof r}\`.`);
    t = (0, Ji.default)(r.map((i) => J.default.resolve(t, i)));
  }
  if (t = Hi({ cwd: t }), !(!t || !Yu(t)))
    return zi(J.default.join(t, "node_modules", ".cache", e.name), e);
}
o(ur, "findCacheDirectory");

// src/common/utils/resolve-path-in-sb-cache.ts
function Yi(e, t = "default") {
  let r = ur({ name: "storybook" });
  return r ||= (0, lr.join)(process.cwd(), ".cache", "storybook"), (0, lr.join)(r, t, e);
}
o(Yi, "resolvePathInStorybookCache");

// src/telemetry/get-portable-stories-usage.ts
var Xi = sr({
  basePath: Yi("portable-stories"),
  ns: "storybook",
  ttl: 24 * 60 * 60 * 1e3
  // 24h
}), Xu = /* @__PURE__ */ o(async (e) => {
  let t = "git grep -l composeStor" + (e ? ` -- ${e}` : ""), { stdout: r } = await Gi(t, {
    cwd: process.cwd(),
    shell: !0
  });
  return r.split(`
`).filter(Boolean).length;
}, "getPortableStoriesFileCountUncached"), Zi = "portableStories", Qi = /* @__PURE__ */ o(async (e) => {
  let t = await Xi.get(Zi);
  if (!t)
    try {
      t = { count: await Xu() }, await Xi.set(Zi, t);
    } catch (r) {
      t = { count: r.exitCode === 1 ? 0 : null };
    }
  return t.count;
}, "getPortableStoriesFileCount");

// src/telemetry/storybook-metadata.ts
var fr = {
  next: "Next",
  "react-scripts": "CRA",
  gatsby: "Gatsby",
  "@nuxtjs/storybook": "nuxt",
  "@nrwl/storybook": "nx",
  "@vue/cli-service": "vue-cli",
  "@sveltejs/kit": "sveltekit"
}, dr = /* @__PURE__ */ o((e) => Q(e).replace(/\/dist\/.*/, "").replace(/\.[mc]?[tj]?s[x]?$/, "").replace(/\/register$/, "").replace(/\/manager$/,
"").replace(/\/preset$/, ""), "sanitizeAddonName"), ts = /* @__PURE__ */ o(async ({
  packageJson: e,
  mainConfig: t
}) => {
  let r = {
    generatedAt: (/* @__PURE__ */ new Date()).getTime(),
    hasCustomBabel: !1,
    hasCustomWebpack: !1,
    hasStaticDirs: !1,
    hasStorybookEslint: !1,
    refCount: 0
  }, n = {
    ...e?.dependencies,
    ...e?.devDependencies,
    ...e?.peerDependencies
  }, i = Object.keys(n).find((m) => !!fr[m]);
  if (i) {
    let { version: m } = await De(i);
    r.metaFramework = {
      name: fr[i],
      packageName: i,
      version: m
    };
  }
  let s = [
    "playwright",
    "vitest",
    "jest",
    "cypress",
    "nightwatch",
    "webdriver",
    "@web/test-runner",
    "puppeteer",
    "karma",
    "jasmine",
    "chai",
    "testing-library",
    "@ngneat/spectator",
    "wdio",
    "msw",
    "miragejs",
    "sinon"
  ], a = Object.keys(n).filter(
    (m) => s.find((v) => m.includes(v))
  );
  r.testPackages = Object.fromEntries(
    await Promise.all(
      a.map(async (m) => [m, (await De(m))?.version])
    )
  );
  let c = Ao();
  c && (r.monorepo = c);
  try {
    let m = await (0, tt.detect)({ cwd: (0, R.getProjectRoot)() }), v = await (0, tt.getNpmVersion)(m);
    r.packageManager = {
      type: m,
      version: v
    };
  } catch {
  }
  r.hasCustomBabel = !!t.babel, r.hasCustomWebpack = !!t.webpackFinal, r.hasStaticDirs = !!t.staticDirs, typeof t.typescript == "object" && (r.
  typescriptOptions = t.typescript);
  let u = await ko(t);
  typeof t.refs == "object" && (r.refCount = Object.keys(t.refs).length), typeof t.features == "object" && (r.features = t.features);
  let l = {};
  t.addons && t.addons.forEach((m) => {
    let v, C;
    typeof m == "string" ? v = dr(m) : (m.name.includes("addon-essentials") && (C = m.options), v = dr(m.name)), l[v] = {
      options: C,
      version: void 0
    };
  });
  let f = wo(e);
  f && (l.chromatic = {
    version: void 0,
    versionSpecifier: f,
    options: void 0
  }), (await Gt(l)).forEach(({ name: m, version: v }) => {
    l[m].version = v;
  });
  let y = Object.keys(l), p = Object.keys(n).filter((m) => m.includes("storybook") && !y.includes(m)).reduce((m, v) => ({
    ...m,
    [v]: { version: void 0 }
  }), {});
  (await Gt(p)).forEach(({ name: m, version: v }) => {
    p[m].version = v;
  });
  let h = n.typescript ? "typescript" : "javascript", x = !!n["eslint-plugin-storybook"], E = (0, R.getStorybookInfo)(e);
  try {
    let { previewConfig: m } = E;
    if (m) {
      let v = await (0, es.readConfig)(m), C = !!(v.getFieldNode(["globals"]) || v.getFieldNode(["globalTypes"]));
      r.preview = { ...r.preview, usesGlobals: C };
    }
  } catch {
  }
  let I = p[E.frameworkPackage]?.version, A = await Qi();
  return {
    ...r,
    ...u,
    portableStoriesFileCount: A,
    storybookVersion: I,
    storybookVersionSpecifier: E.version,
    language: h,
    storybookPackages: p,
    addons: l,
    hasStorybookEslint: x
  };
}, "computeStorybookMetadata"), et, pr = /* @__PURE__ */ o(async (e) => {
  if (et)
    return et;
  let t = await So(process.cwd()) || {}, r = (e || (0, R.getStorybookConfiguration)(
    String(t?.scripts?.storybook || ""),
    "-c",
    "--config-dir"
  )) ?? ".storybook", n = await (0, R.loadMainConfig)({ configDir: r });
  return et = await ts({ mainConfig: n, packageJson: t }), et;
}, "getStorybookMetadata");

// src/telemetry/telemetry.ts
var ms = g(require("node:os"), 1), hs = g(ns(), 1);

// ../node_modules/nanoid/index.js
var mr = require("crypto");

// ../node_modules/nanoid/url-alphabet/index.js
var os = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../node_modules/nanoid/index.js
var Zu = 128, D, Y, Qu = /* @__PURE__ */ o((e) => {
  !D || D.length < e ? (D = Buffer.allocUnsafe(e * Zu), (0, mr.randomFillSync)(D), Y = 0) : Y + e > D.length && ((0, mr.randomFillSync)(D), Y =
  0), Y += e;
}, "fillPool");
var me = /* @__PURE__ */ o((e = 21) => {
  Qu(e -= 0);
  let t = "";
  for (let r = Y - e; r < Y; r++)
    t += os[D[r] & 63];
  return t;
}, "nanoid");

// src/telemetry/anonymous-id.ts
var ss = require("node:path"), as = require("@storybook/core/common"), cs = require("child_process");

// src/telemetry/one-way-hash.ts
var is = require("crypto");
var nt = /* @__PURE__ */ o((e) => {
  let t = (0, is.createHash)("sha256");
  return t.update("storybook-telemetry-salt"), t.update(e), t.digest("hex");
}, "oneWayHash");

// src/telemetry/anonymous-id.ts
function el(e) {
  return e.trim().replace(/#.*$/, "").replace(/^.*@/, "").replace(/^.*\/\//, "").replace(":", "/");
}
o(el, "normalizeGitUrl");
var ot, us = /* @__PURE__ */ o(() => {
  if (ot)
    return ot;
  let e;
  try {
    let t = (0, as.getProjectRoot)(), r = (0, ss.relative)(t, process.cwd()), n = (0, cs.execSync)("git config --local --get remote.origin.u\
rl", {
      timeout: 1e3,
      stdio: "pipe"
    });
    e = `${el(String(n))}${r}`, ot = nt(e);
  } catch {
  }
  return ot;
}, "getAnonymousProjectId");

// src/telemetry/event-cache.ts
var it = require("@storybook/core/common");
var hr = Promise.resolve(), tl = /* @__PURE__ */ o(async (e, t) => {
  let r = await it.cache.get("lastEvents") || {};
  r[e] = { body: t, timestamp: Date.now() }, await it.cache.set("lastEvents", r);
}, "setHelper"), fs = /* @__PURE__ */ o(async (e, t) => (await hr, hr = tl(e, t), hr), "set");
var rl = /* @__PURE__ */ o((e) => {
  let { body: t, timestamp: r } = e;
  return {
    timestamp: r,
    eventType: t?.eventType,
    eventId: t?.eventId,
    sessionId: t?.sessionId
  };
}, "upgradeFields"), nl = ["init", "upgrade"], ol = ["build", "dev", "error"], ls = /* @__PURE__ */ o((e, t) => {
  let r = t.map((n) => e?.[n]).filter(Boolean).sort((n, i) => i.timestamp - n.timestamp);
  return r.length > 0 ? r[0] : void 0;
}, "lastEvent"), ds = /* @__PURE__ */ o(async (e = void 0) => {
  let t = e || await it.cache.get("lastEvents") || {}, r = ls(t, nl), n = ls(t, ol);
  if (r)
    return !n?.timestamp || r.timestamp > n.timestamp ? rl(r) : void 0;
}, "getPrecedingUpgrade");

// src/telemetry/fetch.ts
var ps = global.fetch;

// src/telemetry/session-id.ts
var yr = require("@storybook/core/common");
var il = 1e3 * 60 * 60 * 2, he;
var gr = /* @__PURE__ */ o(async () => {
  let e = Date.now();
  if (!he) {
    let t = await yr.cache.get("session");
    t && t.lastUsed >= e - il ? he = t.id : he = me();
  }
  return await yr.cache.set("session", { id: he, lastUsed: e }), he;
}, "getSessionId");

// src/telemetry/telemetry.ts
var sl = (0, hs.default)(ps), al = process.env.STORYBOOK_TELEMETRY_URL || "https://storybook.js.org/event-log", st = [], ys = /* @__PURE__ */ o(
(e, t) => {
  br[e] = t;
}, "addToGlobalContext"), cl = /* @__PURE__ */ o(() => {
  try {
    let e = ms.platform();
    return e === "win32" ? "Windows" : e === "darwin" ? "macOS" : e === "linux" ? "Linux" : `Other: ${e}`;
  } catch {
    return "Unknown";
  }
}, "getOperatingSystem"), br = {
  inCI: !!process.env.CI,
  isTTY: process.stdout.isTTY,
  platform: cl(),
  nodeVersion: process.versions.node
}, ul = /* @__PURE__ */ o(async (e, t, r) => {
  let { eventType: n, payload: i, metadata: s, ...a } = e, c = await gr(), u = me(), l = { ...a, eventType: n, eventId: u, sessionId: c, metadata: s,
  payload: i, context: t };
  return sl(al, {
    method: "post",
    body: JSON.stringify(l),
    headers: { "Content-Type": "application/json" },
    retries: 3,
    retryOn: [503, 504],
    retryDelay: /* @__PURE__ */ o((f) => 2 ** f * (typeof r?.retryDelay == "number" && !Number.isNaN(r?.retryDelay) ? r.retryDelay : 1e3), "\
retryDelay")
  });
}, "prepareRequest");
async function gs(e, t = { retryDelay: 1e3, immediate: !1 }) {
  let { eventType: r, payload: n, metadata: i, ...s } = e, a = t.stripMetadata ? br : {
    ...br,
    anonymousId: us()
  }, c;
  try {
    c = ul(e, a, t), st.push(c), t.immediate ? await Promise.all(st) : await c;
    let u = await gr(), l = me(), f = { ...s, eventType: r, eventId: l, sessionId: u, metadata: i, payload: n, context: a };
    await fs(r, f);
  } catch {
  } finally {
    st = st.filter((u) => u !== c);
  }
}
o(gs, "sendTelemetry");

// src/telemetry/index.ts
var ll = /* @__PURE__ */ o((e) => e.startsWith("example-button--") || e.startsWith("example-header--") || e.startsWith("example-page--"), "i\
sExampleStoryId"), fl = /* @__PURE__ */ o(async (e, t = {}, r = {}) => {
  e !== "boot" && await Tr();
  let n = {
    eventType: e,
    payload: t
  };
  try {
    r?.stripMetadata || (n.metadata = await pr(r?.configDir));
  } catch (i) {
    n.payload.metadataErrorMessage = be(i).message, r?.enableCrashReports && (n.payload.metadataError = be(i));
  } finally {
    let { error: i } = n.payload;
    i && (n.payload.error = be(i)), (!n.payload.error || r?.enableCrashReports) && (process.env?.STORYBOOK_TELEMETRY_DEBUG && (xr.logger.info(
    `
[telemetry]`), xr.logger.info(JSON.stringify(n, null, 2))), await gs(n, r));
  }
}, "telemetry");