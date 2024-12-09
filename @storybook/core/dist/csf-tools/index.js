import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var we = Object.create;
var U = Object.defineProperty;
var Fe = Object.getOwnPropertyDescriptor;
var Ce = Object.getOwnPropertyNames;
var Te = Object.getPrototypeOf, ke = Object.prototype.hasOwnProperty;
var p = (s, e) => U(s, "name", { value: e, configurable: !0 });
var Ve = (s, e) => () => (e || s((e = { exports: {} }).exports, e), e.exports);
var Ae = (s, e, i, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Ce(e))
      !ke.call(s, r) && r !== i && U(s, r, { get: () => e[r], enumerable: !(t = Fe(e, r)) || t.enumerable });
  return s;
};
var L = (s, e, i) => (i = s != null ? we(Te(s)) : {}, Ae(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !s || !s.__esModule ? U(i, "default", { value: s, enumerable: !0 }) : i,
  s
));

// ../node_modules/ts-dedent/dist/index.js
var F = Ve((w) => {
  "use strict";
  Object.defineProperty(w, "__esModule", { value: !0 });
  w.dedent = void 0;
  function ee(s) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    var t = Array.from(typeof s == "string" ? [s] : s);
    t[t.length - 1] = t[t.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var r = t.reduce(function(l, u) {
      var f = u.match(/\n([\t ]+|(?!\s).)/g);
      return f ? l.concat(f.map(function(x) {
        var g, b;
        return (b = (g = x.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && b !== void 0 ? b : 0;
      })) : l;
    }, []);
    if (r.length) {
      var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
      t = t.map(function(l) {
        return l.replace(a, `
`);
      });
    }
    t[0] = t[0].replace(/^\r?\n/, "");
    var n = t[0];
    return e.forEach(function(l, u) {
      var f = n.match(/(?:^|\n)( *)$/), x = f ? f[1] : "", g = l;
      typeof l == "string" && l.includes(`
`) && (g = String(l).split(`
`).map(function(b, _) {
        return _ === 0 ? b : "" + x + b;
      }).join(`
`)), n += g + t[u + 1];
    }), n;
  }
  p(ee, "dedent");
  w.dedent = ee;
  w.default = ee;
});

// src/csf-tools/CsfFile.ts
var T = L(F(), 1);
import { readFile as Re, writeFile as Le } from "node:fs/promises";
import {
  BabelFileClass as Me,
  babelParse as ae,
  generate as $e,
  recast as le,
  types as c,
  traverse as Ue
} from "@storybook/core/babel";
import { isExportStory as te, storyNameFromExport as re, toId as qe } from "@storybook/csf";

// src/csf-tools/findVarInitialization.ts
import { types as C } from "@storybook/core/babel";
var O = /* @__PURE__ */ p((s, e) => {
  let i = null, t = null;
  return e.body.find((r) => (C.isVariableDeclaration(r) ? t = r.declarations : C.isExportNamedDeclaration(r) && C.isVariableDeclaration(r.declaration) &&
  (t = r.declaration.declarations), t && t.find((a) => C.isVariableDeclarator(a) && C.isIdentifier(a.id) && a.id.name === s ? (i = a.init, !0) :
  !1))), i;
}, "findVarInitialization");

// src/csf-tools/CsfFile.ts
var ie = console;
function Be(s) {
  if (c.isArrayExpression(s))
    return s.elements.map((e) => {
      if (c.isStringLiteral(e))
        return e.value;
      throw new Error(`Expected string literal: ${e}`);
    });
  if (c.isStringLiteral(s))
    return new RegExp(s.value);
  if (c.isRegExpLiteral(s))
    return new RegExp(s.pattern, s.flags);
  throw new Error(`Unknown include/exclude: ${s}`);
}
p(Be, "parseIncludeExclude");
function se(s) {
  if (!c.isArrayExpression(s))
    throw new Error("CSF: Expected tags array");
  return s.elements.map((e) => {
    if (c.isStringLiteral(e))
      return e.value;
    throw new Error("CSF: Expected tag to be string literal");
  });
}
p(se, "parseTags");
var q = /* @__PURE__ */ p((s, e) => {
  let { line: i, column: t } = s.loc?.start || {};
  return `${e || ""} (line ${i}, col ${t})`.trim();
}, "formatLocation"), We = /* @__PURE__ */ p((s) => Je.test(s), "isModuleMock"), ne = /* @__PURE__ */ p((s, e, i) => {
  let t = s;
  if (c.isCallExpression(s)) {
    let { callee: r, arguments: a } = s;
    if (c.isProgram(e) && c.isMemberExpression(r) && c.isIdentifier(r.object) && c.isIdentifier(r.property) && r.property.name === "bind" &&
    (a.length === 0 || a.length === 1 && c.isObjectExpression(a[0]) && a[0].properties.length === 0)) {
      let n = r.object.name, l = O(n, e);
      l && (i._templates[n] = l, t = l);
    }
  }
  return c.isArrowFunctionExpression(t) || c.isFunctionDeclaration(t) ? t.params.length > 0 : !1;
}, "isArgsStory"), ze = /* @__PURE__ */ p((s) => {
  if (c.isArrayExpression(s))
    return s.elements.map((e) => {
      if (c.isStringLiteral(e))
        return e.value;
      throw new Error(`Expected string literal named export: ${e}`);
    });
  throw new Error(`Expected array of string literals: ${s}`);
}, "parseExportsOrder"), oe = /* @__PURE__ */ p((s, e) => e.reduce(
  (i, t) => {
    let r = s[t];
    return r && (i[t] = r), i;
  },
  {}
), "sortExports"), Ge = /* @__PURE__ */ p((s) => {
  if (c.isArrowFunctionExpression(s) || c.isFunctionDeclaration(s)) {
    let e = s.params;
    if (e.length >= 1) {
      let [i] = e;
      if (c.isObjectPattern(i))
        return !!i.properties.find((t) => {
          if (c.isObjectProperty(t) && c.isIdentifier(t.key))
            return t.key.name === "mount";
        });
    }
  }
  return !1;
}, "hasMount"), Je = /^[.\/#].*\.mock($|\.[^.]*$)/i, M = class extends Error {
  static {
    p(this, "NoMetaError");
  }
  constructor(e, i, t) {
    super(T.dedent`
      CSF: ${e} ${q(i, t)}

      More info: https://storybook.js.org/docs/writing-stories#default-export
    `), this.name = this.constructor.name;
  }
}, B = class {
  constructor(e, i, t) {
    this._stories = {};
    this._metaAnnotations = {};
    this._storyExports = {};
    this._storyStatements = {};
    this._storyAnnotations = {};
    this._templates = {};
    this._ast = e, this._file = t, this._options = i, this.imports = [];
  }
  static {
    p(this, "CsfFile");
  }
  /** @deprecated Use `_options.fileName` instead */
  get _fileName() {
    return this._options.fileName;
  }
  /** @deprecated Use `_options.makeTitle` instead */
  get _makeTitle() {
    return this._options.makeTitle;
  }
  _parseTitle(e) {
    let i = c.isIdentifier(e) ? O(e.name, this._ast.program) : e;
    if (c.isStringLiteral(i))
      return i.value;
    if (c.isTSSatisfiesExpression(i) && c.isStringLiteral(i.expression))
      return i.expression.value;
    throw new Error(T.dedent`
      CSF: unexpected dynamic title ${q(i, this._options.fileName)}

      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#string-literal-titles
    `);
  }
  _parseMeta(e, i) {
    let t = {};
    e.properties.forEach((r) => {
      if (c.isIdentifier(r.key)) {
        if (this._metaAnnotations[r.key.name] = r.value, r.key.name === "title")
          t.title = this._parseTitle(r.value);
        else if (["includeStories", "excludeStories"].includes(r.key.name))
          t[r.key.name] = Be(r.value);
        else if (r.key.name === "component") {
          let a = r.value;
          if (c.isIdentifier(a)) {
            let l = a.name, u = i.body.find(
              (f) => c.isImportDeclaration(f) && f.specifiers.find((x) => x.local.name === l)
            );
            if (u) {
              let { source: f } = u;
              c.isStringLiteral(f) && (this._rawComponentPath = f.value);
            }
          }
          let { code: n } = le.print(r.value, {});
          t.component = n;
        } else if (r.key.name === "tags") {
          let a = r.value;
          c.isIdentifier(a) && (a = O(a.name, this._ast.program)), t.tags = se(a);
        } else if (r.key.name === "id")
          if (c.isStringLiteral(r.value))
            t.id = r.value.value;
          else
            throw new Error(`Unexpected component id: ${r.value}`);
      }
    }), this._meta = t;
  }
  getStoryExport(e) {
    let i = this._storyExports[e];
    if (i = c.isVariableDeclarator(i) ? i.init : i, c.isCallExpression(i)) {
      let { callee: t, arguments: r } = i;
      if (c.isMemberExpression(t) && c.isIdentifier(t.object) && c.isIdentifier(t.property) && t.property.name === "bind" && (r.length === 0 ||
      r.length === 1 && c.isObjectExpression(r[0]) && r[0].properties.length === 0)) {
        let { name: a } = t.object;
        i = this._templates[a];
      }
    }
    return i;
  }
  parse() {
    let e = this;
    if (Ue(this._ast, {
      ExportDefaultDeclaration: {
        enter(t) {
          let { node: r, parent: a } = t, n = c.isIdentifier(r.declaration) && c.isProgram(a);
          if (e._options.transformInlineMeta && !n && c.isExpression(r.declaration)) {
            let f = t.scope.generateUidIdentifier("meta");
            e._metaVariableName = f.name;
            let x = [
              c.variableDeclaration("const", [c.variableDeclarator(f, r.declaration)]),
              c.exportDefaultDeclaration(f)
            ];
            x.forEach((g) => g.loc = t.node.loc), t.replaceWithMultiple(x);
          }
          let l, u;
          if (n) {
            let f = r.declaration.name;
            e._metaVariableName = f;
            let x = /* @__PURE__ */ p((g) => c.isIdentifier(g.id) && g.id.name === f, "isVariableDeclarator");
            e._metaStatement = e._ast.program.body.find(
              (g) => c.isVariableDeclaration(g) && g.declarations.find(x)
            ), u = (e?._metaStatement?.declarations || []).find(
              x
            )?.init;
          } else
            e._metaStatement = r, u = r.declaration;
          if (c.isObjectExpression(u) ? l = u : (
            // export default { ... } as Meta<...>
            (c.isTSAsExpression(u) || c.isTSSatisfiesExpression(u)) && c.isObjectExpression(u.expression) && (l = u.expression)
          ), !e._meta && l && c.isProgram(a) && (e._metaNode = l, e._parseMeta(l, a)), e._metaStatement && !e._metaNode)
            throw new M(
              "default export must be an object",
              e._metaStatement,
              e._options.fileName
            );
        }
      },
      ExportNamedDeclaration: {
        enter({ node: t, parent: r }) {
          let a;
          c.isVariableDeclaration(t.declaration) ? a = t.declaration.declarations.filter((n) => c.isVariableDeclarator(n)) : c.isFunctionDeclaration(
          t.declaration) && (a = [t.declaration]), a ? a.forEach((n) => {
            if (c.isIdentifier(n.id)) {
              let { name: l } = n.id;
              if (l === "__namedExportsOrder" && c.isVariableDeclarator(n)) {
                e._namedExportsOrder = ze(n.init);
                return;
              }
              e._storyExports[l] = n, e._storyStatements[l] = t;
              let u = re(l);
              e._storyAnnotations[l] ? ie.warn(
                `Unexpected annotations for "${l}" before story declaration`
              ) : e._storyAnnotations[l] = {};
              let f;
              c.isVariableDeclarator(n) ? f = c.isTSAsExpression(n.init) || c.isTSSatisfiesExpression(n.init) ? n.init.expression : n.init :
              f = n;
              let x = {};
              c.isObjectExpression(f) ? (x.__isArgsStory = !0, f.properties.forEach((g) => {
                if (c.isIdentifier(g.key)) {
                  if (g.key.name === "render")
                    x.__isArgsStory = ne(
                      g.value,
                      r,
                      e
                    );
                  else if (g.key.name === "name" && c.isStringLiteral(g.value))
                    u = g.value.value;
                  else if (g.key.name === "storyName" && c.isStringLiteral(g.value))
                    ie.warn(
                      `Unexpected usage of "storyName" in "${l}". Please use "name" instead.`
                    );
                  else if (g.key.name === "parameters" && c.isObjectExpression(g.value)) {
                    let b = g.value.properties.find(
                      (_) => c.isObjectProperty(_) && c.isIdentifier(_.key) && _.key.name === "__id"
                    );
                    b && (x.__id = b.value.value);
                  }
                  e._storyAnnotations[l][g.key.name] = g.value;
                }
              })) : x.__isArgsStory = ne(f, r, e), e._stories[l] = {
                id: "FIXME",
                name: u,
                parameters: x,
                __stats: {}
              };
            }
          }) : t.specifiers.length > 0 && t.specifiers.forEach((n) => {
            if (c.isExportSpecifier(n) && c.isIdentifier(n.exported)) {
              let { name: l } = n.exported, { name: u } = n.local, f = c.isProgram(r) ? O(n.local.name, r) : n.local;
              if (l === "default") {
                let x;
                c.isObjectExpression(f) ? x = f : (
                  // export default { ... } as Meta<...>
                  c.isTSAsExpression(f) && c.isObjectExpression(f.expression) && (x = f.expression)
                ), !e._meta && x && c.isProgram(r) && e._parseMeta(x, r);
              } else
                e._storyAnnotations[l] = {}, e._storyStatements[l] = f, e._stories[l] = {
                  id: "FIXME",
                  name: l,
                  localName: u,
                  parameters: {},
                  __stats: {}
                };
            }
          });
        }
      },
      ExpressionStatement: {
        enter({ node: t, parent: r }) {
          let { expression: a } = t;
          if (c.isProgram(r) && c.isAssignmentExpression(a) && c.isMemberExpression(a.left) && c.isIdentifier(a.left.object) && c.isIdentifier(
          a.left.property)) {
            let n = a.left.object.name, l = a.left.property.name, u = a.right;
            if (e._storyAnnotations[n] && (l === "story" && c.isObjectExpression(u) ? u.properties.forEach((f) => {
              c.isIdentifier(f.key) && (e._storyAnnotations[n][f.key.name] = f.value);
            }) : e._storyAnnotations[n][l] = u), l === "storyName" && c.isStringLiteral(u)) {
              let f = u.value, x = e._stories[n];
              if (!x)
                return;
              x.name = f;
            }
          }
        }
      },
      CallExpression: {
        enter({ node: t }) {
          let { callee: r } = t;
          if (c.isIdentifier(r) && r.name === "storiesOf")
            throw new Error(T.dedent`
              Unexpected \`storiesOf\` usage: ${q(t, e._options.fileName)}.

              SB8 does not support \`storiesOf\`. 
            `);
        }
      },
      ImportDeclaration: {
        enter({ node: t }) {
          let { source: r } = t;
          if (c.isStringLiteral(r))
            e.imports.push(r.value);
          else
            throw new Error("CSF: unexpected import source");
        }
      }
    }), !e._meta)
      throw new M("missing default export", e._ast, e._options.fileName);
    let i = Object.entries(e._stories);
    if (e._meta.title = this._options.makeTitle(e._meta?.title), e._metaAnnotations.play && (e._meta.tags = [...e._meta.tags || [], "play-fn"]),
    e._stories = i.reduce(
      (t, [r, a]) => {
        if (!te(r, e._meta))
          return t;
        let n = a.parameters?.__id ?? qe(e._meta?.id || e._meta?.title, re(r)), l = { ...a.parameters, __id: n }, { includeStories: u } = e.
        _meta || {};
        r === "__page" && (i.length === 1 || Array.isArray(u) && u.length === 1) && (l.docsOnly = !0), t[r] = { ...a, id: n, parameters: l };
        let f = e._storyAnnotations[r], { tags: x, play: g } = f;
        if (x) {
          let S = c.isIdentifier(x) ? O(x.name, this._ast.program) : x;
          t[r].tags = se(S);
        }
        g && (t[r].tags = [...t[r].tags || [], "play-fn"]);
        let b = t[r].__stats;
        ["play", "render", "loaders", "beforeEach", "globals"].forEach((S) => {
          b[S] = !!f[S] || !!e._metaAnnotations[S];
        });
        let _ = e.getStoryExport(r);
        return b.storyFn = !!(c.isArrowFunctionExpression(_) || c.isFunctionDeclaration(_)), b.mount = Ge(f.play ?? e._metaAnnotations.play),
        b.moduleMock = !!e.imports.find((S) => We(S)), t;
      },
      {}
    ), Object.keys(e._storyExports).forEach((t) => {
      te(t, e._meta) || (delete e._storyExports[t], delete e._storyAnnotations[t], delete e._storyStatements[t]);
    }), e._namedExportsOrder) {
      let t = Object.keys(e._storyExports);
      e._storyExports = oe(e._storyExports, e._namedExportsOrder), e._stories = oe(e._stories, e._namedExportsOrder);
      let r = Object.keys(e._storyExports);
      if (t.length !== r.length)
        throw new Error(
          `Missing exports after sort: ${t.filter(
            (a) => !r.includes(a)
          )}`
        );
    }
    return e;
  }
  get meta() {
    return this._meta;
  }
  get stories() {
    return Object.values(this._stories);
  }
  get indexInputs() {
    let { fileName: e } = this._options;
    if (!e)
      throw new Error(
        T.dedent`Cannot automatically create index inputs with CsfFile.indexInputs because the CsfFile instance was created without a the fileName option.
        Either add the fileName option when creating the CsfFile instance, or create the index inputs manually.`
      );
    return Object.entries(this._stories).map(([i, t]) => {
      let r = [...this._meta?.tags ?? [], ...t.tags ?? []];
      return {
        type: "story",
        importPath: e,
        rawComponentPath: this._rawComponentPath,
        exportName: i,
        name: t.name,
        title: this.meta?.title,
        metaId: this.meta?.id,
        tags: r,
        __id: t.id,
        __stats: t.__stats
      };
    });
  }
}, Ke = /* @__PURE__ */ p(({
  code: s,
  filename: e = "",
  ast: i
}) => new Me({ filename: e }, { code: s, ast: i ?? ae(s) }), "babelParseFile"), W = /* @__PURE__ */ p((s, e) => {
  let i = ae(s), t = Ke({ code: s, filename: e.fileName, ast: i });
  return new B(i, e, t);
}, "loadCsf"), ce = /* @__PURE__ */ p((s, e = { sourceMaps: !1 }, i) => {
  let t = $e(s._ast, e, i);
  return e.sourceMaps ? t : t.code;
}, "formatCsf"), Xe = /* @__PURE__ */ p((s, e = {}) => le.print(s._ast, e), "printCsf"), Dt = /* @__PURE__ */ p(async (s, e) => {
  let i = (await Re(s, "utf-8")).toString();
  return W(i, { ...e, fileName: s });
}, "readCsf"), vt = /* @__PURE__ */ p(async (s, e) => {
  if (!(e || s._options.fileName))
    throw new Error("Please specify a fileName for writeCsf");
  await Le(e, Xe(s).code);
}, "writeCsf");

// src/csf-tools/ConfigFile.ts
var ue = L(F(), 1);
import { readFile as Qe, writeFile as He } from "node:fs/promises";
import {
  babelParse as de,
  generate as pe,
  recast as Ye,
  types as o,
  traverse as fe
} from "@storybook/core/babel";
var z = console, G = /* @__PURE__ */ p(({
  expectedType: s,
  foundType: e,
  node: i
}) => {
  let t = "";
  if (i)
    try {
      t = JSON.stringify(i);
    } catch {
    }
  return ue.dedent`
      CSF Parsing error: Expected '${s}' but found '${e}' instead in '${i?.type}'.
      ${t}
    `;
}, "getCsfParsingErrorMessage"), k = /* @__PURE__ */ p((s) => o.isIdentifier(s.key) ? s.key.name : o.isStringLiteral(s.key) ? s.key.value : null,
"propKey"), $ = /* @__PURE__ */ p((s) => o.isTSAsExpression(s) || o.isTSSatisfiesExpression(s) ? $(s.expression) : s, "unwrap"), me = /* @__PURE__ */ p(
(s, e) => {
  if (s.length === 0)
    return e;
  if (o.isObjectExpression(e)) {
    let [i, ...t] = s, r = e.properties.find((a) => k(a) === i);
    if (r)
      return me(t, r.value);
  }
}, "_getPath"), ge = /* @__PURE__ */ p((s, e) => {
  if (s.length === 0) {
    if (o.isObjectExpression(e))
      return e.properties;
    throw new Error("Expected object expression");
  }
  if (o.isObjectExpression(e)) {
    let [i, ...t] = s, r = e.properties.find((a) => k(a) === i);
    if (r)
      return t.length === 0 ? e.properties : ge(t, r.value);
  }
}, "_getPathProperties"), xe = /* @__PURE__ */ p((s, e) => {
  let i = null, t = null;
  return e.body.find((r) => (o.isVariableDeclaration(r) ? t = r.declarations : o.isExportNamedDeclaration(r) && o.isVariableDeclaration(r.declaration) &&
  (t = r.declaration.declarations), t && t.find((a) => o.isVariableDeclarator(a) && o.isIdentifier(a.id) && a.id.name === s ? (i = a, !0) : !1))),
  i;
}, "_findVarDeclarator"), D = /* @__PURE__ */ p((s, e) => xe(s, e)?.init, "_findVarInitialization"), V = /* @__PURE__ */ p((s, e) => {
  if (s.length === 0)
    return e;
  let [i, ...t] = s, r = V(t, e);
  return o.objectExpression([o.objectProperty(o.identifier(i), r)]);
}, "_makeObjectExpression"), J = /* @__PURE__ */ p((s, e, i) => {
  let [t, ...r] = s, a = i.properties.find(
    (n) => k(n) === t
  );
  a ? o.isObjectExpression(a.value) && r.length > 0 ? J(r, e, a.value) : a.value = V(r, e) : i.properties.push(
    o.objectProperty(o.identifier(t), V(r, e))
  );
}, "_updateExportNode"), K = class {
  constructor(e, i, t) {
    this._exports = {};
    // FIXME: this is a hack. this is only used in the case where the user is
    // modifying a named export that's a scalar. The _exports map is not suitable
    // for that. But rather than refactor the whole thing, we just use this as a stopgap.
    this._exportDecls = {};
    this.hasDefaultExport = !1;
    this._ast = e, this._code = i, this.fileName = t;
  }
  static {
    p(this, "ConfigFile");
  }
  parse() {
    let e = this;
    return fe(this._ast, {
      ExportDefaultDeclaration: {
        enter({ node: i, parent: t }) {
          e.hasDefaultExport = !0;
          let r = o.isIdentifier(i.declaration) && o.isProgram(t) ? D(i.declaration.name, t) : i.declaration;
          r = $(r), o.isObjectExpression(r) ? (e._exportsObject = r, r.properties.forEach((a) => {
            let n = k(a);
            if (n) {
              let l = a.value;
              o.isIdentifier(l) && (l = D(l.name, t)), e._exports[n] = l;
            }
          })) : z.warn(
            G({
              expectedType: "ObjectExpression",
              foundType: r?.type,
              node: r || i.declaration
            })
          );
        }
      },
      ExportNamedDeclaration: {
        enter({ node: i, parent: t }) {
          o.isVariableDeclaration(i.declaration) ? i.declaration.declarations.forEach((r) => {
            if (o.isVariableDeclarator(r) && o.isIdentifier(r.id)) {
              let { name: a } = r.id, n = r.init;
              o.isIdentifier(n) && (n = D(n.name, t)), e._exports[a] = n, e._exportDecls[a] = r;
            }
          }) : i.specifiers ? i.specifiers.forEach((r) => {
            if (o.isExportSpecifier(r) && o.isIdentifier(r.local) && o.isIdentifier(r.exported)) {
              let { name: a } = r.local, { name: n } = r.exported, l = xe(a, t);
              l && (e._exports[n] = l.init, e._exportDecls[n] = l);
            }
          }) : z.warn(
            G({
              expectedType: "VariableDeclaration",
              foundType: i.declaration?.type,
              node: i.declaration
            })
          );
        }
      },
      ExpressionStatement: {
        enter({ node: i, parent: t }) {
          if (o.isAssignmentExpression(i.expression) && i.expression.operator === "=") {
            let { left: r, right: a } = i.expression;
            if (o.isMemberExpression(r) && o.isIdentifier(r.object) && r.object.name === "module" && o.isIdentifier(r.property) && r.property.
            name === "exports") {
              let n = a;
              o.isIdentifier(a) && (n = D(a.name, t)), n = $(n), o.isObjectExpression(n) ? (e._exportsObject = n, n.properties.forEach((l) => {
                let u = k(l);
                if (u) {
                  let f = l.value;
                  o.isIdentifier(f) && (f = D(
                    f.name,
                    t
                  )), e._exports[u] = f;
                }
              })) : z.warn(
                G({
                  expectedType: "ObjectExpression",
                  foundType: n?.type,
                  node: n
                })
              );
            }
          }
        }
      }
    }), e;
  }
  getFieldNode(e) {
    let [i, ...t] = e, r = this._exports[i];
    if (r)
      return me(t, r);
  }
  getFieldProperties(e) {
    let [i, ...t] = e, r = this._exports[i];
    if (r)
      return ge(t, r);
  }
  getFieldValue(e) {
    let i = this.getFieldNode(e);
    if (i) {
      let { code: t } = pe(i, {});
      return (0, eval)(`(() => (${t}))()`);
    }
  }
  getSafeFieldValue(e) {
    try {
      return this.getFieldValue(e);
    } catch {
    }
  }
  setFieldNode(e, i) {
    let [t, ...r] = e, a = this._exports[t];
    if (this._exportsObject)
      J(e, i, this._exportsObject), this._exports[e[0]] = i;
    else if (a && o.isObjectExpression(a) && r.length > 0)
      J(r, i, a);
    else if (a && r.length === 0 && this._exportDecls[e[0]]) {
      let n = this._exportDecls[e[0]];
      n.init = V([], i);
    } else {
      if (this.hasDefaultExport)
        throw new Error(
          `Could not set the "${e.join(
            "."
          )}" field as the default export is not an object in this file.`
        );
      {
        let n = V(r, i), l = o.exportNamedDeclaration(
          o.variableDeclaration("const", [o.variableDeclarator(o.identifier(t), n)])
        );
        this._exports[t] = n, this._ast.program.body.push(l);
      }
    }
  }
  /**
   * @example
   *
   * ```ts
   * // 1. { framework: 'framework-name' }
   * // 2. { framework: { name: 'framework-name', options: {} }
   * getNameFromPath(['framework']); // => 'framework-name'
   * ```
   *
   * @returns The name of a node in a given path, supporting the following formats:
   */
  getNameFromPath(e) {
    let i = this.getFieldNode(e);
    if (i)
      return this._getPresetValue(i, "name");
  }
  /**
   * Returns an array of names of a node in a given path, supporting the following formats:
   *
   * @example
   *
   * ```ts
   * const config = {
   *   addons: ['first-addon', { name: 'second-addon', options: {} }],
   * };
   * // => ['first-addon', 'second-addon']
   * getNamesFromPath(['addons']);
   * ```
   */
  getNamesFromPath(e) {
    let i = this.getFieldNode(e);
    if (!i)
      return;
    let t = [];
    return o.isArrayExpression(i) && i.elements.forEach((r) => {
      t.push(this._getPresetValue(r, "name"));
    }), t;
  }
  _getPnpWrappedValue(e) {
    if (o.isCallExpression(e)) {
      let i = e.arguments[0];
      if (o.isStringLiteral(i))
        return i.value;
    }
  }
  /**
   * Given a node and a fallback property, returns a **non-evaluated** string value of the node.
   *
   * 1. `{ node: 'value' }`
   * 2. `{ node: { fallbackProperty: 'value' } }`
   */
  _getPresetValue(e, i) {
    let t;
    if (o.isStringLiteral(e) ? t = e.value : o.isObjectExpression(e) && e.properties.forEach((r) => {
      o.isObjectProperty(r) && o.isIdentifier(r.key) && r.key.name === i && (o.isStringLiteral(r.value) ? t = r.value.value : t = this._getPnpWrappedValue(
      r.value)), o.isObjectProperty(r) && o.isStringLiteral(r.key) && r.key.value === "name" && o.isStringLiteral(r.value) && (t = r.value.value);
    }), !t)
      throw new Error(
        `The given node must be a string literal or an object expression with a "${i}" property that is a string literal.`
      );
    return t;
  }
  removeField(e) {
    let i = /* @__PURE__ */ p((r, a) => {
      let n = r.findIndex(
        (l) => o.isIdentifier(l.key) && l.key.name === a || o.isStringLiteral(l.key) && l.key.value === a
      );
      n >= 0 && r.splice(n, 1);
    }, "removeProperty");
    if (e.length === 1) {
      let r = !1;
      if (this._ast.program.body.forEach((a) => {
        if (o.isExportNamedDeclaration(a) && o.isVariableDeclaration(a.declaration)) {
          let n = a.declaration.declarations[0];
          o.isIdentifier(n.id) && n.id.name === e[0] && (this._ast.program.body.splice(this._ast.program.body.indexOf(a), 1), r = !0);
        }
        if (o.isExportDefaultDeclaration(a)) {
          let n = a.declaration;
          if (o.isIdentifier(n) && (n = D(n.name, this._ast.program)), n = $(n), o.isObjectExpression(n)) {
            let l = n.properties;
            i(l, e[0]), r = !0;
          }
        }
        if (o.isExpressionStatement(a) && o.isAssignmentExpression(a.expression) && o.isMemberExpression(a.expression.left) && o.isIdentifier(
        a.expression.left.object) && a.expression.left.object.name === "module" && o.isIdentifier(a.expression.left.property) && a.expression.
        left.property.name === "exports" && o.isObjectExpression(a.expression.right)) {
          let n = a.expression.right.properties;
          i(n, e[0]), r = !0;
        }
      }), r)
        return;
    }
    let t = this.getFieldProperties(e);
    if (t) {
      let r = e.at(-1);
      i(t, r);
    }
  }
  appendValueToArray(e, i) {
    let t = this.valueToNode(i);
    t && this.appendNodeToArray(e, t);
  }
  appendNodeToArray(e, i) {
    let t = this.getFieldNode(e);
    if (!t)
      this.setFieldNode(e, o.arrayExpression([i]));
    else if (o.isArrayExpression(t))
      t.elements.push(i);
    else
      throw new Error(`Expected array at '${e.join(".")}', got '${t.type}'`);
  }
  /**
   * Specialized helper to remove addons or other array entries that can either be strings or
   * objects with a name property.
   */
  removeEntryFromArray(e, i) {
    let t = this.getFieldNode(e);
    if (t)
      if (o.isArrayExpression(t)) {
        let r = t.elements.findIndex((a) => o.isStringLiteral(a) ? a.value === i : o.isObjectExpression(a) ? this._getPresetValue(a, "name") ===
        i : this._getPnpWrappedValue(a) === i);
        if (r >= 0)
          t.elements.splice(r, 1);
        else
          throw new Error(`Could not find '${i}' in array at '${e.join(".")}'`);
      } else
        throw new Error(`Expected array at '${e.join(".")}', got '${t.type}'`);
  }
  _inferQuotes() {
    if (!this._quotes) {
      let e = (this._ast.tokens || []).slice(0, 500).reduce(
        (i, t) => (t.type.label === "string" && (i[this._code[t.start]] += 1), i),
        { "'": 0, '"': 0 }
      );
      this._quotes = e["'"] > e['"'] ? "single" : "double";
    }
    return this._quotes;
  }
  valueToNode(e) {
    let i = this._inferQuotes(), t;
    if (i === "single") {
      let { code: r } = pe(o.valueToNode(e), { jsescOption: { quotes: i } }), a = de(`const __x = ${r}`);
      fe(a, {
        VariableDeclaration: {
          enter({ node: n }) {
            n.declarations.length === 1 && o.isVariableDeclarator(n.declarations[0]) && o.isIdentifier(n.declarations[0].id) && n.declarations[0].
            id.name === "__x" && (t = n.declarations[0].init);
          }
        }
      });
    } else
      t = o.valueToNode(e);
    return t;
  }
  setFieldValue(e, i) {
    let t = this.valueToNode(i);
    if (!t)
      throw new Error(`Unexpected value ${JSON.stringify(i)}`);
    this.setFieldNode(e, t);
  }
  getBodyDeclarations() {
    return this._ast.program.body;
  }
  setBodyDeclaration(e) {
    this._ast.program.body.push(e);
  }
  /**
   * Import specifiers for a specific require import
   *
   * @example
   *
   * ```ts
   * // const { foo } = require('bar');
   * setRequireImport(['foo'], 'bar');
   *
   * // const foo = require('bar');
   * setRequireImport('foo', 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setRequireImport(e, i) {
    let t = this._ast.program.body.find(
      (n) => o.isVariableDeclaration(n) && n.declarations.length === 1 && o.isVariableDeclarator(n.declarations[0]) && o.isCallExpression(n.
      declarations[0].init) && o.isIdentifier(n.declarations[0].init.callee) && n.declarations[0].init.callee.name === "require" && o.isStringLiteral(
      n.declarations[0].init.arguments[0]) && n.declarations[0].init.arguments[0].value === i
    ), r = /* @__PURE__ */ p((n) => o.isObjectPattern(t?.declarations[0].id) && t?.declarations[0].id.properties.find(
      (l) => o.isObjectProperty(l) && o.isIdentifier(l.key) && l.key.name === n
    ), "hasRequireSpecifier"), a = /* @__PURE__ */ p((n, l) => n.declarations.length === 1 && o.isVariableDeclarator(n.declarations[0]) && o.
    isIdentifier(n.declarations[0].id) && n.declarations[0].id.name === l, "hasDefaultRequireSpecifier");
    if (typeof e == "string") {
      let n = /* @__PURE__ */ p(() => {
        this._ast.program.body.unshift(
          o.variableDeclaration("const", [
            o.variableDeclarator(
              o.identifier(e),
              o.callExpression(o.identifier("require"), [o.stringLiteral(i)])
            )
          ])
        );
      }, "addDefaultRequireSpecifier");
      t && a(t, e) || n();
    } else t ? e.forEach((n) => {
      r(n) || t.declarations[0].id.properties.push(
        o.objectProperty(o.identifier(n), o.identifier(n), void 0, !0)
      );
    }) : this._ast.program.body.unshift(
      o.variableDeclaration("const", [
        o.variableDeclarator(
          o.objectPattern(
            e.map(
              (n) => o.objectProperty(o.identifier(n), o.identifier(n), void 0, !0)
            )
          ),
          o.callExpression(o.identifier("require"), [o.stringLiteral(i)])
        )
      ])
    );
  }
  /**
   * Set import specifiers for a given import statement.
   *
   * Does not support setting type imports (yet)
   *
   * @example
   *
   * ```ts
   * // import { foo } from 'bar';
   * setImport(['foo'], 'bar');
   *
   * // import foo from 'bar';
   * setImport('foo', 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setImport(e, i) {
    let t = /* @__PURE__ */ p((l) => o.importSpecifier(o.identifier(l), o.identifier(l)), "getNewImportSpecifier"), r = /* @__PURE__ */ p((l, u) => l.
    specifiers.find(
      (f) => o.isImportSpecifier(f) && o.isIdentifier(f.imported) && f.imported.name === u
    ), "hasImportSpecifier"), a = /* @__PURE__ */ p((l, u) => l.specifiers.find((f) => o.isImportDefaultSpecifier(f)), "hasDefaultImportSpec\
ifier"), n = this._ast.program.body.find(
      (l) => o.isImportDeclaration(l) && l.source.value === i
    );
    typeof e == "string" ? n ? a(n, e) || n.specifiers.push(
      o.importDefaultSpecifier(o.identifier(e))
    ) : this._ast.program.body.unshift(
      o.importDeclaration(
        [o.importDefaultSpecifier(o.identifier(e))],
        o.stringLiteral(i)
      )
    ) : n ? e.forEach((l) => {
      r(n, l) || n.specifiers.push(t(l));
    }) : this._ast.program.body.unshift(
      o.importDeclaration(
        e.map(
          (l) => o.importSpecifier(o.identifier(l), o.identifier(l))
        ),
        o.stringLiteral(i)
      )
    );
  }
}, Ze = /* @__PURE__ */ p((s, e) => {
  let i = de(s);
  return new K(i, s, e);
}, "loadConfig"), et = /* @__PURE__ */ p((s) => tt(s).code, "formatConfig"), tt = /* @__PURE__ */ p((s, e = {}) => Ye.print(s._ast, e), "pri\
ntConfig"), Ct = /* @__PURE__ */ p(async (s) => {
  let e = (await Qe(s, "utf-8")).toString();
  return Ze(e, s).parse();
}, "readConfig"), Tt = /* @__PURE__ */ p(async (s, e) => {
  let i = e || s.fileName;
  if (!i)
    throw new Error("Please specify a fileName for writeConfig");
  await He(i, et(s));
}, "writeConfig");

// src/csf-tools/getStorySortParameter.ts
var be = L(F(), 1);
import { babelParse as rt, generate as ye, types as y, traverse as it } from "@storybook/core/babel";
var st = console, X = /* @__PURE__ */ p((s, e) => {
  let i;
  return s.properties.forEach((t) => {
    y.isIdentifier(t.key) && t.key.name === e && (i = t.value);
  }), i;
}, "getValue"), Q = /* @__PURE__ */ p((s) => {
  let e = A(s);
  if (y.isArrayExpression(e))
    return e.elements.map((i) => Q(i));
  if (y.isObjectExpression(e))
    return e.properties.reduce((i, t) => (y.isIdentifier(t.key) && (i[t.key.name] = Q(t.value)), i), {});
  if (y.isLiteral(e))
    return e.value;
  if (y.isIdentifier(e))
    return v(e.name, !0);
  throw new Error(`Unknown node type ${e.type}`);
}, "parseValue"), v = /* @__PURE__ */ p((s, e) => {
  let i = be.dedent`
    Unexpected '${s}'. Parameter 'options.storySort' should be defined inline e.g.:

    export default {
      parameters: {
        options: {
          storySort: <array | object | function>
        },
      },
    };
  `;
  if (e)
    throw new Error(i);
  st.info(i);
}, "unsupported"), A = /* @__PURE__ */ p((s) => y.isTSAsExpression(s) || y.isTSSatisfiesExpression(s) ? s.expression : s, "stripTSModifiers"),
Ee = /* @__PURE__ */ p((s) => {
  let e = A(s);
  if (y.isObjectExpression(e)) {
    let i = X(e, "options");
    if (i) {
      if (y.isObjectExpression(i))
        return X(i, "storySort");
      v("options", !0);
    }
  }
}, "parseParameters"), nt = /* @__PURE__ */ p((s, e) => {
  let i = A(s);
  if (y.isObjectExpression(i)) {
    let t = X(i, "parameters");
    if (y.isIdentifier(t) && (t = O(t.name, e)), t)
      return Ee(t);
  } else
    v("default", !0);
}, "parseDefault"), Lt = /* @__PURE__ */ p((s) => {
  if (!s.includes("storySort"))
    return;
  let e, i = rt(s);
  if (it(i, {
    ExportNamedDeclaration: {
      enter({ node: t }) {
        y.isVariableDeclaration(t.declaration) ? t.declaration.declarations.forEach((r) => {
          if (y.isVariableDeclarator(r) && y.isIdentifier(r.id)) {
            let { name: a } = r.id;
            if (a === "parameters" && r.init) {
              let n = A(r.init);
              e = Ee(n);
            }
          }
        }) : t.specifiers.forEach((r) => {
          y.isIdentifier(r.exported) && r.exported.name === "parameters" && v("parameters", !1);
        });
      }
    },
    ExportDefaultDeclaration: {
      enter({ node: t }) {
        let r = t.declaration;
        y.isIdentifier(r) && (r = O(r.name, i.program)), r = A(r), y.isObjectExpression(r) ? e = nt(r, i.program) : v("default", !1);
      }
    }
  }), !!e) {
    if (y.isArrowFunctionExpression(e)) {
      let { code: t } = ye(e, {});
      return (0, eval)(t);
    }
    if (y.isFunctionExpression(e)) {
      let { code: t } = ye(e, {}), r = e.id?.name, a = `(a, b) => {
      ${t};
      return ${r}(a, b)
    }`;
      return (0, eval)(a);
    }
    return y.isLiteral(e) || y.isArrayExpression(e) || y.isObjectExpression(e) ? Q(e) : v("storySort", !0);
  }
}, "getStorySortParameter");

// src/csf-tools/enrichCsf.ts
import { generate as ot, types as m } from "@storybook/core/babel";
var at = /* @__PURE__ */ p((s, e, i, t) => {
  let r = e.getStoryExport(i), a = !t?.disableSource && ct(r), n = !t?.disableDescription && _e(e._storyStatements[i]), l = [], u = m.memberExpression(
  m.identifier(i), m.identifier("parameters"));
  l.push(m.spreadElement(u));
  let f = m.optionalMemberExpression(
    u,
    m.identifier("docs"),
    !1,
    !0
  ), x = [];
  if (a) {
    let g = m.optionalMemberExpression(
      f,
      m.identifier("source"),
      !1,
      !0
    );
    x.push(
      m.objectProperty(
        m.identifier("source"),
        m.objectExpression([
          m.objectProperty(m.identifier("originalSource"), m.stringLiteral(a)),
          m.spreadElement(g)
        ])
      )
    );
  }
  if (n) {
    let g = m.optionalMemberExpression(
      f,
      m.identifier("description"),
      !1,
      !0
    );
    x.push(
      m.objectProperty(
        m.identifier("description"),
        m.objectExpression([
          m.objectProperty(m.identifier("story"), m.stringLiteral(n)),
          m.spreadElement(g)
        ])
      )
    );
  }
  if (x.length > 0) {
    l.push(
      m.objectProperty(
        m.identifier("docs"),
        m.objectExpression([m.spreadElement(f), ...x])
      )
    );
    let g = m.expressionStatement(
      m.assignmentExpression("=", u, m.objectExpression(l))
    );
    s._ast.program.body.push(g);
  }
}, "enrichCsfStory"), he = /* @__PURE__ */ p((s, e, i) => {
  if (!e.length) {
    s.properties.find(
      (u) => m.isObjectProperty(u) && m.isIdentifier(u.key) && u.key.name === "component"
    ) || s.properties.unshift(i);
    return;
  }
  let [t, ...r] = e, a = s.properties.find(
    (l) => m.isObjectProperty(l) && m.isIdentifier(l.key) && l.key.name === t && m.isObjectExpression(l.value)
  ), n;
  a ? n = a.value : (n = m.objectExpression([]), s.properties.push(m.objectProperty(m.identifier(t), n))), he(n, r, i);
}, "addComponentDescription"), lt = /* @__PURE__ */ p((s, e, i) => {
  let t = !i?.disableDescription && _e(e._metaStatement);
  if (t) {
    let r = s._metaNode;
    r && m.isObjectExpression(r) && he(
      r,
      ["parameters", "docs", "description"],
      m.objectProperty(m.identifier("component"), m.stringLiteral(t))
    );
  }
}, "enrichCsfMeta"), qt = /* @__PURE__ */ p((s, e, i) => {
  lt(s, e, i), Object.keys(s._storyExports).forEach((t) => {
    at(s, e, t, i);
  });
}, "enrichCsf"), ct = /* @__PURE__ */ p((s) => {
  let e = m.isVariableDeclarator(s) ? s.init : s, { code: i } = ot(e, {});
  return i;
}, "extractSource"), _e = /* @__PURE__ */ p((s) => s?.leadingComments ? s.leadingComments.map((i) => i.type === "CommentLine" || !i.value.startsWith(
"*") ? null : i.value.split(`
`).map((t) => t.replace(/^(\s+)?(\*+)?(\s)?/, "")).join(`
`).trim()).filter(Boolean).join(`
`) : "", "extractDescription");

// src/csf-tools/index.ts
import { babelParse as ir } from "@storybook/core/babel";

// src/csf-tools/vitest-plugin/transformer.ts
var H = L(F(), 1);
import { types as d } from "@storybook/core/babel";
import { getStoryTitle as pt } from "@storybook/core/common";
import { combineTags as ft } from "@storybook/csf";
var Se = console, dt = /* @__PURE__ */ p((s, e) => {
  let i = e?.include.length === 0 || e?.include.some((r) => s.includes(r)), t = e?.exclude.every((r) => !s.includes(r));
  return i && t;
}, "isValidTest");
async function ut({
  code: s,
  fileName: e,
  configDir: i,
  stories: t,
  tagsFilter: r,
  previewLevelTags: a = []
}) {
  if (!/\.stor(y|ies)\./.test(e))
    return s;
  let l = W(s, {
    fileName: e,
    transformInlineMeta: !0,
    makeTitle: /* @__PURE__ */ p((E) => {
      let j = pt({
        storyFilePath: e,
        configDir: i,
        stories: t,
        userTitle: E
      }) || "unknown";
      return j === "unknown" && Se.warn(
        H.dedent`
            [Storybook]: Could not calculate story title for "${e}".
            Please make sure that this file matches the globs included in the "stories" field in your Storybook configuration at "${i}".
          `
      ), j;
    }, "makeTitle")
  }).parse(), u = l._ast, f = l._metaVariableName, x = l._metaNode, g = x.properties.find(
    (E) => d.isObjectProperty(E) && d.isIdentifier(E.key) && E.key.name === "title"
  ), b = d.stringLiteral(l._meta?.title || "unknown");
  if (g ? d.isObjectProperty(g) && (g.value = b) : x.properties.push(d.objectProperty(d.identifier("title"), b)), !x || !l._meta)
    throw new Error(
      `The Storybook vitest plugin could not detect the meta (default export) object in the story file. 

Please make sure you have a default export with the meta object. If you are using a different export format that is not supported, please fi\
le an issue with details about your use case.`
    );
  let _ = {};
  Object.keys(l._stories).map((E) => {
    let j = ft(
      "test",
      "dev",
      ...a,
      ...l.meta?.tags || [],
      ...l._stories[E].tags || []
    );
    dt(j, r) && (_[E] = l._storyStatements[E]);
  });
  let S = l._file.path.scope.generateUidIdentifier("test"), Y = l._file.path.scope.generateUidIdentifier("describe");
  if (Object.keys(_).length === 0) {
    let E = d.expressionStatement(
      d.callExpression(d.memberExpression(Y, d.identifier("skip")), [
        d.stringLiteral("No valid tests found")
      ])
    );
    u.program.body.push(E);
    let j = [
      d.importDeclaration(
        [
          d.importSpecifier(S, d.identifier("test")),
          d.importSpecifier(Y, d.identifier("describe"))
        ],
        d.stringLiteral("vitest")
      )
    ];
    u.program.body.unshift(...j);
  } else {
    let Z = function() {
      let h = l._file.path.scope.generateUidIdentifier("isRunningFromThisFile"), P = d.memberExpression(
        d.callExpression(d.memberExpression(E, d.identifier("getState")), []),
        d.identifier("testPath")
      ), I = d.memberExpression(
        d.memberExpression(d.identifier("globalThis"), d.identifier("__vitest_worker__")),
        d.identifier("filepath")
      ), N = d.logicalExpression(
        "??",
        // TODO: switch order of testPathProperty and filePathProperty when the bug is fixed
        // https://github.com/vitest-dev/vitest/issues/6367 (or probably just use testPathProperty)
        I,
        P
      ), R = d.callExpression(
        d.memberExpression(
          d.memberExpression(
            d.memberExpression(d.identifier("import"), d.identifier("meta")),
            d.identifier("url")
          ),
          d.identifier("includes")
        ),
        [N]
      );
      return { isRunningFromThisFileDeclaration: d.variableDeclaration("const", [
        d.variableDeclarator(h, R)
      ]), isRunningFromThisFileId: h };
    };
    var mt = Z;
    p(Z, "getTestGuardDeclaration");
    let E = l._file.path.scope.generateUidIdentifier("expect"), j = l._file.path.scope.generateUidIdentifier("testStory"), je = d.identifier(
    JSON.stringify(r.skip)), { isRunningFromThisFileDeclaration: Oe, isRunningFromThisFileId: Pe } = Z();
    u.program.body.push(Oe);
    let De = /* @__PURE__ */ p(({
      localName: h,
      exportName: P,
      testTitle: I,
      node: N
    }) => {
      let R = d.expressionStatement(
        d.callExpression(S, [
          d.stringLiteral(I),
          d.callExpression(j, [
            d.stringLiteral(P),
            d.identifier(h),
            d.identifier(f),
            je
          ])
        ])
      );
      return R.loc = N.loc, R;
    }, "getTestStatementForStory"), ve = Object.entries(_).map(([h, P]) => {
      if (P === null) {
        Se.warn(
          H.dedent`
            [Storybook]: Could not transform "${h}" story into test at "${e}".
            Please make sure to define stories in the same file and not re-export stories coming from other files".
          `
        );
        return;
      }
      let I = l._stories[h].localName ?? h, N = l._stories[h].name ?? h;
      return De({ testTitle: N, localName: I, exportName: h, node: P });
    }).filter((h) => !!h), Ie = d.ifStatement(Pe, d.blockStatement(ve));
    u.program.body.push(Ie);
    let Ne = [
      d.importDeclaration(
        [
          d.importSpecifier(S, d.identifier("test")),
          d.importSpecifier(E, d.identifier("expect"))
        ],
        d.stringLiteral("vitest")
      ),
      d.importDeclaration(
        [d.importSpecifier(j, d.identifier("testStory"))],
        d.stringLiteral("@storybook/experimental-addon-test/internal/test-utils")
      )
    ];
    u.program.body.unshift(...Ne);
  }
  return ce(l, { sourceMaps: !0, sourceFileName: e }, s);
}
p(ut, "vitestTransform");
export {
  K as ConfigFile,
  B as CsfFile,
  M as NoMetaError,
  ir as babelParse,
  Ke as babelParseFile,
  qt as enrichCsf,
  lt as enrichCsfMeta,
  at as enrichCsfStory,
  _e as extractDescription,
  ct as extractSource,
  et as formatConfig,
  ce as formatCsf,
  Lt as getStorySortParameter,
  We as isModuleMock,
  Ze as loadConfig,
  W as loadCsf,
  tt as printConfig,
  Xe as printCsf,
  Ct as readConfig,
  Dt as readCsf,
  ut as vitestTransform,
  Tt as writeConfig,
  vt as writeCsf
};