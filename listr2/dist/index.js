var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/constants/ansi-escape-codes.constants.ts
var ANSI_ESCAPE = "\x1B[";
var ANSI_ESCAPE_CODES = {
  CURSOR_HIDE: ANSI_ESCAPE + "?25l",
  CURSOR_SHOW: ANSI_ESCAPE + "?25h"
};

// src/constants/environment-variables.constants.ts
var ListrEnvironmentVariables = /* @__PURE__ */ ((ListrEnvironmentVariables2) => {
  ListrEnvironmentVariables2["FORCE_UNICODE"] = "LISTR_FORCE_UNICODE";
  ListrEnvironmentVariables2["FORCE_TTY"] = "LISTR_FORCE_TTY";
  ListrEnvironmentVariables2["DISABLE_COLOR"] = "NO_COLOR";
  ListrEnvironmentVariables2["FORCE_COLOR"] = "FORCE_COLOR";
  return ListrEnvironmentVariables2;
})(ListrEnvironmentVariables || {});

// src/constants/listr-error.constants.ts
var ListrErrorTypes = /* @__PURE__ */ ((ListrErrorTypes2) => {
  ListrErrorTypes2["WILL_RETRY"] = "WILL_RETRY";
  ListrErrorTypes2["WILL_ROLLBACK"] = "WILL_ROLLBACK";
  ListrErrorTypes2["HAS_FAILED_TO_ROLLBACK"] = "HAS_FAILED_TO_ROLLBACK";
  ListrErrorTypes2["HAS_FAILED"] = "HAS_FAILED";
  ListrErrorTypes2["HAS_FAILED_WITHOUT_ERROR"] = "HAS_FAILED_WITHOUT_ERROR";
  return ListrErrorTypes2;
})(ListrErrorTypes || {});

// src/constants/listr-events.constants.ts
var ListrEventType = /* @__PURE__ */ ((ListrEventType2) => {
  ListrEventType2["SHOULD_REFRESH_RENDER"] = "SHOUD_REFRESH_RENDER";
  return ListrEventType2;
})(ListrEventType || {});

// src/constants/listr-renderer.constants.ts
var ListrRendererSelection = /* @__PURE__ */ ((ListrRendererSelection2) => {
  ListrRendererSelection2["PRIMARY"] = "PRIMARY";
  ListrRendererSelection2["SECONDARY"] = "SECONDARY";
  ListrRendererSelection2["SILENT"] = "SILENT";
  return ListrRendererSelection2;
})(ListrRendererSelection || {});

// src/constants/listr-task-events.constants.ts
var ListrTaskEventType = /* @__PURE__ */ ((ListrTaskEventType2) => {
  ListrTaskEventType2["TITLE"] = "TITLE";
  ListrTaskEventType2["STATE"] = "STATE";
  ListrTaskEventType2["ENABLED"] = "ENABLED";
  ListrTaskEventType2["SUBTASK"] = "SUBTASK";
  ListrTaskEventType2["PROMPT"] = "PROMPT";
  ListrTaskEventType2["OUTPUT"] = "OUTPUT";
  ListrTaskEventType2["MESSAGE"] = "MESSAGE";
  ListrTaskEventType2["CLOSED"] = "CLOSED";
  return ListrTaskEventType2;
})(ListrTaskEventType || {});

// src/constants/listr-task-state.constants.ts
var ListrTaskState = /* @__PURE__ */ ((ListrTaskState2) => {
  ListrTaskState2["WAITING"] = "WAITING";
  ListrTaskState2["STARTED"] = "STARTED";
  ListrTaskState2["COMPLETED"] = "COMPLETED";
  ListrTaskState2["FAILED"] = "FAILED";
  ListrTaskState2["SKIPPED"] = "SKIPPED";
  ListrTaskState2["ROLLING_BACK"] = "ROLLING_BACK";
  ListrTaskState2["ROLLED_BACK"] = "ROLLED_BACK";
  ListrTaskState2["RETRY"] = "RETRY";
  ListrTaskState2["PAUSED"] = "PAUSED";
  ListrTaskState2["PROMPT"] = "PROMPT";
  ListrTaskState2["PROMPT_COMPLETED"] = "PROMPT_COMPLETED";
  ListrTaskState2["PROMPT_FAILED"] = "PROMPT_FAILED";
  return ListrTaskState2;
})(ListrTaskState || {});

// src/lib/event-manager.ts
import EventEmitter from "eventemitter3";
var EventManager = class {
  static {
    __name(this, "EventManager");
  }
  emitter = new EventEmitter();
  emit(dispatch, args) {
    this.emitter.emit(dispatch, args);
  }
  on(dispatch, handler) {
    this.emitter.addListener(dispatch, handler);
  }
  once(dispatch, handler) {
    this.emitter.once(dispatch, handler);
  }
  off(dispatch, handler) {
    this.emitter.off(dispatch, handler);
  }
  complete() {
    this.emitter.removeAllListeners();
  }
};

// src/interfaces/event.interface.ts
var BaseEventMap = class {
  static {
    __name(this, "BaseEventMap");
  }
};

// src/utils/environment/is-observable.ts
function isObservable(obj) {
  return !!obj && typeof obj === "object" && typeof obj.lift === "function" && typeof obj.subscribe === "function";
}
__name(isObservable, "isObservable");

// src/utils/environment/is-readable.ts
function isReadable(obj) {
  return !!obj && typeof obj === "object" && obj.readable === true && typeof obj.read === "function" && typeof obj.on === "function";
}
__name(isReadable, "isReadable");

// src/utils/environment/is-unicode-supported.ts
function isUnicodeSupported() {
  return !!process.env["LISTR_FORCE_UNICODE" /* FORCE_UNICODE */] || process.platform !== "win32" || !!process.env.CI || !!process.env.WT_SESSION || process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty";
}
__name(isUnicodeSupported, "isUnicodeSupported");

// src/utils/format/cleanse-ansi.constants.ts
var CLEAR_LINE_REGEX = "(?:\\u001b|\\u009b)\\[[\\=><~/#&.:=?%@~_-]*[0-9]*[\\a-ln-tqyz=><~/#&.:=?%@~_-]+";
var BELL_REGEX = /\u0007/;

// src/utils/format/cleanse-ansi.ts
function cleanseAnsi(chunk) {
  return String(chunk).replace(new RegExp(CLEAR_LINE_REGEX, "gmi"), "").replace(new RegExp(BELL_REGEX, "gmi"), "").trim();
}
__name(cleanseAnsi, "cleanseAnsi");

// src/utils/format/color.ts
import { createColors } from "colorette";
var color = createColors();

// src/utils/format/indent.ts
function indent(string, count) {
  return string.replace(/^(?!\s*$)/gm, " ".repeat(count));
}
__name(indent, "indent");

// src/utils/format/figures.ts
var FIGURES_MAIN = {
  warning: "\u26A0",
  cross: "\u2716",
  arrowDown: "\u2193",
  tick: "\u2714",
  arrowRight: "\u2192",
  pointer: "\u276F",
  checkboxOn: "\u2612",
  arrowLeft: "\u2190",
  squareSmallFilled: "\u25FC",
  pointerSmall: "\u203A"
};
var FIGURES_FALLBACK = {
  ...FIGURES_MAIN,
  warning: "\u203C",
  cross: "\xD7",
  tick: "\u221A",
  pointer: ">",
  checkboxOn: "[\xD7]",
  squareSmallFilled: "\u25A0"
};
var figures = isUnicodeSupported() ? FIGURES_MAIN : FIGURES_FALLBACK;

// src/utils/format/splat.ts
import { format } from "util";
function splat(message, ...splat2) {
  return format(String(message), ...splat2);
}
__name(splat, "splat");

// src/utils/logger/logger.constants.ts
var ListrLogLevels = /* @__PURE__ */ ((ListrLogLevels2) => {
  ListrLogLevels2["STARTED"] = "STARTED";
  ListrLogLevels2["COMPLETED"] = "COMPLETED";
  ListrLogLevels2["FAILED"] = "FAILED";
  ListrLogLevels2["SKIPPED"] = "SKIPPED";
  ListrLogLevels2["OUTPUT"] = "OUTPUT";
  ListrLogLevels2["TITLE"] = "TITLE";
  ListrLogLevels2["ROLLBACK"] = "ROLLBACK";
  ListrLogLevels2["RETRY"] = "RETRY";
  ListrLogLevels2["PROMPT"] = "PROMPT";
  ListrLogLevels2["PAUSED"] = "PAUSED";
  return ListrLogLevels2;
})(ListrLogLevels || {});
var LISTR_LOGGER_STYLE = {
  icon: {
    ["STARTED" /* STARTED */]: figures.pointer,
    ["FAILED" /* FAILED */]: figures.cross,
    ["SKIPPED" /* SKIPPED */]: figures.arrowDown,
    ["COMPLETED" /* COMPLETED */]: figures.tick,
    ["OUTPUT" /* OUTPUT */]: figures.pointerSmall,
    ["TITLE" /* TITLE */]: figures.arrowRight,
    ["RETRY" /* RETRY */]: figures.warning,
    ["ROLLBACK" /* ROLLBACK */]: figures.arrowLeft,
    ["PAUSED" /* PAUSED */]: figures.squareSmallFilled
  },
  color: {
    ["STARTED" /* STARTED */]: color.yellow,
    ["FAILED" /* FAILED */]: color.red,
    ["SKIPPED" /* SKIPPED */]: color.yellow,
    ["COMPLETED" /* COMPLETED */]: color.green,
    ["RETRY" /* RETRY */]: color.yellowBright,
    ["ROLLBACK" /* ROLLBACK */]: color.redBright,
    ["PAUSED" /* PAUSED */]: color.yellowBright
  }
};
var LISTR_LOGGER_STDERR_LEVELS = ["RETRY" /* RETRY */, "ROLLBACK" /* ROLLBACK */, "FAILED" /* FAILED */];

// src/utils/logger/logger.ts
import { EOL } from "os";
var ListrLogger = class {
  constructor(options) {
    this.options = options;
    this.options = {
      useIcons: true,
      toStderr: [],
      ...options ?? {}
    };
    this.options.fields ??= {};
    this.options.fields.prefix ??= [];
    this.options.fields.suffix ??= [];
    this.process = this.options.processOutput ?? new ProcessOutput();
  }
  static {
    __name(this, "ListrLogger");
  }
  process;
  log(level, message, options) {
    const output = this.format(level, message, options);
    if (this.options.toStderr.includes(level)) {
      this.process.toStderr(output);
      return;
    }
    this.process.toStdout(output);
  }
  toStdout(message, options, eol = true) {
    this.process.toStdout(this.format(null, message, options), eol);
  }
  toStderr(message, options, eol = true) {
    this.process.toStderr(this.format(null, message, options), eol);
  }
  wrap(message, options) {
    if (!message) {
      return message;
    }
    return this.applyFormat(`[${message}]`, options);
  }
  splat(...args) {
    const message = args.shift() ?? "";
    return args.length === 0 ? message : splat(message, args);
  }
  suffix(message, ...suffixes) {
    suffixes.filter(Boolean).forEach((suffix) => {
      message += this.spacing(message);
      if (typeof suffix === "string") {
        message += this.wrap(suffix);
      } else if (typeof suffix === "object") {
        suffix.args ??= [];
        if (typeof suffix.condition === "function" ? !suffix.condition(...suffix.args) : !(suffix.condition ?? true)) {
          return message;
        }
        message += this.wrap(typeof suffix.field === "function" ? suffix.field(...suffix.args) : suffix.field, {
          format: suffix?.format(...suffix.args)
        });
      }
    });
    return message;
  }
  prefix(message, ...prefixes) {
    prefixes.filter(Boolean).forEach((prefix) => {
      message = this.spacing(message) + message;
      if (typeof prefix === "string") {
        message = this.wrap(prefix) + message;
      } else if (typeof prefix === "object") {
        prefix.args ??= [];
        if (typeof prefix.condition === "function" ? !prefix.condition(...prefix.args) : !(prefix.condition ?? true)) {
          return message;
        }
        message = this.wrap(typeof prefix.field === "function" ? prefix.field(...prefix.args) : prefix.field, {
          format: prefix?.format()
        }) + message;
      }
    });
    return message;
  }
  fields(message, options) {
    if (this.options?.fields?.prefix) {
      message = this.prefix(message, ...this.options.fields.prefix);
    }
    if (options?.prefix) {
      message = this.prefix(message, ...options.prefix);
    }
    if (options?.suffix) {
      message = this.suffix(message, ...options.suffix);
    }
    if (this.options?.fields?.suffix) {
      message = this.suffix(message, ...this.options.fields.suffix);
    }
    return message;
  }
  icon(level, icon) {
    if (!level) {
      return null;
    }
    icon ||= this.options.icon?.[level];
    const coloring = this.options.color?.[level];
    if (icon && coloring) {
      icon = coloring(icon);
    }
    return icon;
  }
  format(level, message, options) {
    if (!Array.isArray(message)) {
      message = [message];
    }
    message = this.splat(message.shift(), ...message).toString().split(EOL).filter((m) => !m || m.trim() !== "").map((m) => {
      return this.style(
        level,
        this.fields(m, {
          prefix: Array.isArray(options?.prefix) ? options.prefix : [options?.prefix],
          suffix: Array.isArray(options?.suffix) ? options.suffix : [options?.suffix]
        })
      );
    }).join(EOL);
    return message;
  }
  style(level, message) {
    if (!level || !message) {
      return message;
    }
    const icon = this.icon(level, !this.options.useIcons && this.wrap(level));
    if (icon) {
      message = icon + " " + message;
    }
    return message;
  }
  applyFormat(message, options) {
    if (options?.format) {
      return options.format(message);
    }
    return message;
  }
  spacing(message) {
    return typeof message === "undefined" || message.trim() === "" ? "" : " ";
  }
};

// src/utils/process-output/process-output-buffer.ts
import { StringDecoder } from "string_decoder";
var ProcessOutputBuffer = class {
  constructor(options) {
    this.options = options;
  }
  static {
    __name(this, "ProcessOutputBuffer");
  }
  buffer = [];
  decoder = new StringDecoder();
  get all() {
    return this.buffer;
  }
  get last() {
    return this.buffer.at(-1);
  }
  get length() {
    return this.buffer.length;
  }
  write(data, ...args) {
    const callback = args[args.length - 1];
    this.buffer.push({
      time: Date.now(),
      stream: this.options?.stream,
      entry: this.decoder.write(typeof data === "string" ? Buffer.from(data, typeof args[0] === "string" ? args[0] : void 0) : Buffer.from(data))
    });
    if (this.options?.limit) {
      this.buffer = this.buffer.slice(-this.options.limit);
    }
    if (typeof callback === "function") {
      callback();
    }
    return true;
  }
  reset() {
    this.buffer = [];
  }
};

// src/utils/process-output/process-output-stream.ts
var ProcessOutputStream = class {
  constructor(stream) {
    this.stream = stream;
    this.method = stream.write;
    this.buffer = new ProcessOutputBuffer({ stream });
  }
  static {
    __name(this, "ProcessOutputStream");
  }
  method;
  buffer;
  get out() {
    return Object.assign({}, this.stream, {
      write: this.write.bind(this)
    });
  }
  hijack() {
    this.stream.write = this.buffer.write.bind(this.buffer);
  }
  release() {
    this.stream.write = this.method;
    const buffer = [...this.buffer.all];
    this.buffer.reset();
    return buffer;
  }
  write(...args) {
    return this.method.apply(this.stream, args);
  }
};

// src/utils/process-output/process-output.ts
import { EOL as EOL2 } from "os";
var ProcessOutput = class {
  constructor(stdout, stderr, options) {
    this.options = options;
    this.stream = {
      stdout: new ProcessOutputStream(stdout ?? process.stdout),
      stderr: new ProcessOutputStream(stderr ?? process.stderr)
    };
    this.options = {
      dump: ["stdout", "stderr"],
      leaveEmptyLine: true,
      ...options
    };
  }
  static {
    __name(this, "ProcessOutput");
  }
  stream;
  active;
  get stdout() {
    return this.stream.stdout.out;
  }
  get stderr() {
    return this.stream.stderr.out;
  }
  hijack() {
    if (this.active) {
      throw new Error("ProcessOutput has been already hijacked!");
    }
    this.stream.stdout.write(ANSI_ESCAPE_CODES.CURSOR_HIDE);
    Object.values(this.stream).forEach((stream) => stream.hijack());
    this.active = true;
  }
  release() {
    const output = Object.entries(this.stream).map(([name, stream]) => ({ name, buffer: stream.release() })).filter((output2) => this.options.dump.includes(output2.name)).flatMap((output2) => output2.buffer).sort((a, b) => a.time - b.time).map((message) => {
      return {
        ...message,
        entry: cleanseAnsi(message.entry)
      };
    }).filter((message) => message.entry);
    if (output.length > 0) {
      if (this.options.leaveEmptyLine) {
        this.stdout.write(EOL2);
      }
      output.forEach((message) => {
        const stream = message.stream ?? this.stdout;
        stream.write(message.entry + EOL2);
      });
    }
    this.stream.stdout.write(ANSI_ESCAPE_CODES.CURSOR_SHOW);
    this.active = false;
  }
  toStdout(buffer, eol = true) {
    if (eol) {
      buffer = buffer + EOL2;
    }
    return this.stream.stdout.write(buffer);
  }
  toStderr(buffer, eol = true) {
    if (eol) {
      buffer = buffer + EOL2;
    }
    return this.stream.stderr.write(buffer);
  }
};

// src/utils/process-output/writable.ts
import { Writable } from "stream";
function createWritable(cb) {
  const writable = new Writable();
  writable.rows = Infinity;
  writable.columns = Infinity;
  writable.write = (chunk) => {
    cb(chunk.toString());
    return true;
  };
  return writable;
}
__name(createWritable, "createWritable");

// src/utils/prompts/adapter.ts
var ListrPromptAdapter = class {
  constructor(task, wrapper) {
    this.task = task;
    this.wrapper = wrapper;
  }
  static {
    __name(this, "ListrPromptAdapter");
  }
  state;
  reportStarted() {
    this.state = this.task.state;
    if (this.task.prompt) {
      throw new PromptError("There is already an active prompt attached to this task which may not be cleaned up properly.");
    }
    this.task.prompt = this;
    this.task.state$ = "PROMPT" /* PROMPT */;
  }
  reportFailed() {
    this.task.state$ = "PROMPT_FAILED" /* PROMPT_FAILED */;
    this.restoreState();
  }
  reportCompleted() {
    this.task.state$ = "PROMPT_COMPLETED" /* PROMPT_COMPLETED */;
    this.restoreState();
  }
  restoreState() {
    this.task.prompt = void 0;
    if (this.state) {
      this.task.state = this.state;
    }
  }
};

// src/utils/ui/spinner.ts
var Spinner = class {
  static {
    __name(this, "Spinner");
  }
  spinner = !isUnicodeSupported() ? ["-", "\\", "|", "/"] : ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
  id;
  spinnerPosition = 0;
  spin() {
    this.spinnerPosition = ++this.spinnerPosition % this.spinner.length;
  }
  fetch() {
    return this.spinner[this.spinnerPosition];
  }
  isRunning() {
    return !!this.id;
  }
  start(cb, interval = 100) {
    this.id = setInterval(() => {
      this.spin();
      if (cb) {
        cb();
      }
    }, interval);
  }
  stop() {
    clearInterval(this.id);
  }
};

// src/renderer/default/renderer.constants.ts
var ListrDefaultRendererLogLevels = /* @__PURE__ */ ((ListrDefaultRendererLogLevels2) => {
  ListrDefaultRendererLogLevels2["SKIPPED_WITH_COLLAPSE"] = "SKIPPED_WITH_COLLAPSE";
  ListrDefaultRendererLogLevels2["SKIPPED_WITHOUT_COLLAPSE"] = "SKIPPED_WITHOUT_COLLAPSE";
  ListrDefaultRendererLogLevels2["OUTPUT"] = "OUTPUT";
  ListrDefaultRendererLogLevels2["OUTPUT_WITH_BOTTOMBAR"] = "OUTPUT_WITH_BOTTOMBAR";
  ListrDefaultRendererLogLevels2["PENDING"] = "PENDING";
  ListrDefaultRendererLogLevels2["COMPLETED"] = "COMPLETED";
  ListrDefaultRendererLogLevels2["COMPLETED_WITH_FAILED_SUBTASKS"] = "COMPLETED_WITH_FAILED_SUBTASKS";
  ListrDefaultRendererLogLevels2["COMPLETED_WITH_FAILED_SISTER_TASKS"] = "COMPLETED_WITH_SISTER_TASKS_FAILED";
  ListrDefaultRendererLogLevels2["RETRY"] = "RETRY";
  ListrDefaultRendererLogLevels2["ROLLING_BACK"] = "ROLLING_BACK";
  ListrDefaultRendererLogLevels2["ROLLED_BACK"] = "ROLLED_BACK";
  ListrDefaultRendererLogLevels2["FAILED"] = "FAILED";
  ListrDefaultRendererLogLevels2["FAILED_WITH_FAILED_SUBTASKS"] = "FAILED_WITH_SUBTASKS";
  ListrDefaultRendererLogLevels2["WAITING"] = "WAITING";
  ListrDefaultRendererLogLevels2["PAUSED"] = "PAUSED";
  return ListrDefaultRendererLogLevels2;
})(ListrDefaultRendererLogLevels || {});
var LISTR_DEFAULT_RENDERER_STYLE = {
  icon: {
    ["SKIPPED_WITH_COLLAPSE" /* SKIPPED_WITH_COLLAPSE */]: figures.arrowDown,
    ["SKIPPED_WITHOUT_COLLAPSE" /* SKIPPED_WITHOUT_COLLAPSE */]: figures.warning,
    ["OUTPUT" /* OUTPUT */]: figures.pointerSmall,
    ["OUTPUT_WITH_BOTTOMBAR" /* OUTPUT_WITH_BOTTOMBAR */]: figures.pointerSmall,
    ["PENDING" /* PENDING */]: figures.pointer,
    ["COMPLETED" /* COMPLETED */]: figures.tick,
    ["COMPLETED_WITH_FAILED_SUBTASKS" /* COMPLETED_WITH_FAILED_SUBTASKS */]: figures.warning,
    ["COMPLETED_WITH_SISTER_TASKS_FAILED" /* COMPLETED_WITH_FAILED_SISTER_TASKS */]: figures.squareSmallFilled,
    ["RETRY" /* RETRY */]: figures.warning,
    ["ROLLING_BACK" /* ROLLING_BACK */]: figures.warning,
    ["ROLLED_BACK" /* ROLLED_BACK */]: figures.arrowLeft,
    ["FAILED" /* FAILED */]: figures.cross,
    ["FAILED_WITH_SUBTASKS" /* FAILED_WITH_FAILED_SUBTASKS */]: figures.pointer,
    ["WAITING" /* WAITING */]: figures.squareSmallFilled,
    ["PAUSED" /* PAUSED */]: figures.squareSmallFilled
  },
  color: {
    ["SKIPPED_WITH_COLLAPSE" /* SKIPPED_WITH_COLLAPSE */]: color.yellow,
    ["SKIPPED_WITHOUT_COLLAPSE" /* SKIPPED_WITHOUT_COLLAPSE */]: color.yellow,
    ["PENDING" /* PENDING */]: color.yellow,
    ["COMPLETED" /* COMPLETED */]: color.green,
    ["COMPLETED_WITH_FAILED_SUBTASKS" /* COMPLETED_WITH_FAILED_SUBTASKS */]: color.yellow,
    ["COMPLETED_WITH_SISTER_TASKS_FAILED" /* COMPLETED_WITH_FAILED_SISTER_TASKS */]: color.red,
    ["RETRY" /* RETRY */]: color.yellowBright,
    ["ROLLING_BACK" /* ROLLING_BACK */]: color.redBright,
    ["ROLLED_BACK" /* ROLLED_BACK */]: color.redBright,
    ["FAILED" /* FAILED */]: color.red,
    ["FAILED_WITH_SUBTASKS" /* FAILED_WITH_FAILED_SUBTASKS */]: color.red,
    ["WAITING" /* WAITING */]: color.dim,
    ["PAUSED" /* PAUSED */]: color.yellowBright
  }
};

// src/renderer/default/renderer.ts
import { EOL as EOL3 } from "os";

// src/presets/timer/parser.ts
function parseTimer(duration) {
  const seconds = Math.floor(duration / 1e3);
  const minutes = Math.floor(seconds / 60);
  let parsedTime;
  if (seconds === 0 && minutes === 0) {
    parsedTime = `0.${Math.floor(duration / 100)}s`;
  }
  if (seconds > 0) {
    parsedTime = `${seconds % 60}s`;
  }
  if (minutes > 0) {
    parsedTime = `${minutes}m${parsedTime}`;
  }
  return parsedTime;
}
__name(parseTimer, "parseTimer");

// src/presets/timer/preset.ts
var PRESET_TIMER = {
  condition: true,
  field: parseTimer,
  format: /* @__PURE__ */ __name(() => color.dim, "format")
};

// src/presets/timestamp/parser.ts
function parseTimestamp() {
  const now = /* @__PURE__ */ new Date();
  return String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
}
__name(parseTimestamp, "parseTimestamp");

// src/presets/timestamp/preset.ts
var PRESET_TIMESTAMP = {
  condition: true,
  field: parseTimestamp,
  format: /* @__PURE__ */ __name(() => color.dim, "format")
};

// src/renderer/default/renderer.ts
var DefaultRenderer = class _DefaultRenderer {
  constructor(tasks, options, events) {
    this.tasks = tasks;
    this.options = options;
    this.events = events;
    this.options = {
      ..._DefaultRenderer.rendererOptions,
      ...this.options,
      icon: {
        ...LISTR_DEFAULT_RENDERER_STYLE.icon,
        ...options?.icon ?? {}
      },
      color: {
        ...LISTR_DEFAULT_RENDERER_STYLE.color,
        ...options?.color ?? {}
      }
    };
    this.spinner = this.options.spinner ?? new Spinner();
    this.logger = this.options.logger ?? new ListrLogger({ useIcons: true, toStderr: [] });
    this.logger.options.icon = this.options.icon;
    this.logger.options.color = this.options.color;
  }
  static {
    __name(this, "DefaultRenderer");
  }
  static nonTTY = false;
  static rendererOptions = {
    indentation: 2,
    clearOutput: false,
    showSubtasks: true,
    collapseSubtasks: true,
    collapseSkips: true,
    showSkipMessage: true,
    suffixSkips: false,
    collapseErrors: true,
    showErrorMessage: true,
    suffixRetries: true,
    lazy: false,
    removeEmptyLines: true,
    formatOutput: "wrap",
    pausedTimer: {
      ...PRESET_TIMER,
      format: /* @__PURE__ */ __name(() => color.yellowBright, "format")
    }
  };
  static rendererTaskOptions = {
    outputBar: true
  };
  prompt;
  activePrompt;
  spinner;
  logger;
  updater;
  truncate;
  wrap;
  buffer = {
    output: /* @__PURE__ */ new Map(),
    bottom: /* @__PURE__ */ new Map()
  };
  cache = {
    render: /* @__PURE__ */ new Map(),
    rendererOptions: /* @__PURE__ */ new Map(),
    rendererTaskOptions: /* @__PURE__ */ new Map()
  };
  async render() {
    const { createLogUpdate } = await import("log-update");
    const { default: truncate } = await import("cli-truncate");
    const { default: wrap } = await import("wrap-ansi");
    this.updater = createLogUpdate(this.logger.process.stdout);
    this.truncate = truncate;
    this.wrap = wrap;
    this.logger.process.hijack();
    if (!this.options?.lazy) {
      this.spinner.start(() => {
        this.update();
      });
    }
    this.events.on("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */, () => {
      this.update();
    });
  }
  update() {
    this.updater(this.create());
  }
  end() {
    this.spinner.stop();
    this.updater.clear();
    this.updater.done();
    if (!this.options.clearOutput) {
      this.logger.process.toStdout(this.create({ prompt: false }));
    }
    this.logger.process.release();
  }
  create(options) {
    options = {
      tasks: true,
      bottomBar: true,
      prompt: true,
      ...options
    };
    const render = [];
    const renderTasks = this.renderer(this.tasks);
    const renderBottomBar = this.renderBottomBar();
    const renderPrompt = this.renderPrompt();
    if (options.tasks && renderTasks.length > 0) {
      render.push(...renderTasks);
    }
    if (options.bottomBar && renderBottomBar.length > 0) {
      if (render.length > 0) {
        render.push("");
      }
      render.push(...renderBottomBar);
    }
    if (options.prompt && renderPrompt.length > 0) {
      if (render.length > 0) {
        render.push("");
      }
      render.push(...renderPrompt);
    }
    return render.join(EOL3);
  }
  // eslint-disable-next-line complexity
  style(task, output = false) {
    const rendererOptions = this.cache.rendererOptions.get(task.id);
    if (task.isSkipped()) {
      if (output || rendererOptions.collapseSkips) {
        return this.logger.icon("SKIPPED_WITH_COLLAPSE" /* SKIPPED_WITH_COLLAPSE */);
      } else if (rendererOptions.collapseSkips === false) {
        return this.logger.icon("SKIPPED_WITHOUT_COLLAPSE" /* SKIPPED_WITHOUT_COLLAPSE */);
      }
    }
    if (output) {
      if (this.shouldOutputToBottomBar(task)) {
        return this.logger.icon("OUTPUT_WITH_BOTTOMBAR" /* OUTPUT_WITH_BOTTOMBAR */);
      }
      return this.logger.icon("OUTPUT" /* OUTPUT */);
    }
    if (task.hasSubtasks()) {
      if (task.isStarted() || task.isPrompt() && rendererOptions.showSubtasks !== false && !task.subtasks.every((subtask) => !subtask.hasTitle())) {
        return this.logger.icon("PENDING" /* PENDING */);
      } else if (task.isCompleted() && task.subtasks.some((subtask) => subtask.hasFailed())) {
        return this.logger.icon("COMPLETED_WITH_FAILED_SUBTASKS" /* COMPLETED_WITH_FAILED_SUBTASKS */);
      } else if (task.hasFailed()) {
        return this.logger.icon("FAILED_WITH_SUBTASKS" /* FAILED_WITH_FAILED_SUBTASKS */);
      }
    }
    if (task.isStarted() || task.isPrompt()) {
      return this.logger.icon("PENDING" /* PENDING */, !this.options?.lazy && this.spinner.fetch());
    } else if (task.isCompleted()) {
      return this.logger.icon("COMPLETED" /* COMPLETED */);
    } else if (task.isRetrying()) {
      return this.logger.icon("RETRY" /* RETRY */, !this.options?.lazy && this.spinner.fetch());
    } else if (task.isRollingBack()) {
      return this.logger.icon("ROLLING_BACK" /* ROLLING_BACK */, !this.options?.lazy && this.spinner.fetch());
    } else if (task.hasRolledBack()) {
      return this.logger.icon("ROLLED_BACK" /* ROLLED_BACK */);
    } else if (task.hasFailed()) {
      return this.logger.icon("FAILED" /* FAILED */);
    } else if (task.isPaused()) {
      return this.logger.icon("PAUSED" /* PAUSED */);
    }
    return this.logger.icon("WAITING" /* WAITING */);
  }
  format(message, icon, level) {
    if (message.trim() === "") {
      return [];
    }
    if (icon) {
      message = icon + " " + message;
    }
    let parsed;
    const columns = (process.stdout.columns ?? 80) - level * this.options.indentation - 2;
    switch (this.options.formatOutput) {
      case "truncate":
        parsed = message.split(EOL3).map((s, i) => {
          return this.truncate(this.indent(s, i), columns);
        });
        break;
      case "wrap":
        parsed = this.wrap(message, columns, { hard: true }).split(EOL3).map((s, i) => this.indent(s, i));
        break;
      default:
        throw new ListrRendererError("Format option for the renderer is wrong.");
    }
    if (this.options.removeEmptyLines) {
      parsed = parsed.filter(Boolean);
    }
    return parsed.map((str) => indent(str, level * this.options.indentation));
  }
  shouldOutputToOutputBar(task) {
    const outputBar = this.cache.rendererTaskOptions.get(task.id).outputBar;
    return typeof outputBar === "number" && outputBar !== 0 || typeof outputBar === "boolean" && outputBar !== false;
  }
  shouldOutputToBottomBar(task) {
    const bottomBar = this.cache.rendererTaskOptions.get(task.id).bottomBar;
    return typeof bottomBar === "number" && bottomBar !== 0 || typeof bottomBar === "boolean" && bottomBar !== false || !task.hasTitle();
  }
  renderer(tasks, level = 0) {
    return tasks.flatMap((task) => {
      if (!task.isEnabled()) {
        return [];
      }
      if (this.cache.render.has(task.id)) {
        return this.cache.render.get(task.id);
      }
      this.calculate(task);
      this.setupBuffer(task);
      const rendererOptions = this.cache.rendererOptions.get(task.id);
      const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
      const output = [];
      if (task.isPrompt()) {
        if (this.activePrompt && this.activePrompt !== task.id) {
          throw new ListrRendererError("Only one prompt can be active at the given time, please re-evaluate your task design.");
        } else if (!this.activePrompt) {
          task.on("PROMPT" /* PROMPT */, (prompt) => {
            const cleansed = cleanseAnsi(prompt);
            if (cleansed) {
              this.prompt = cleansed;
            }
          });
          task.on("STATE" /* STATE */, (state) => {
            if (state === "PROMPT_COMPLETED" /* PROMPT_COMPLETED */ || task.hasFinalized() || task.hasReset()) {
              this.prompt = null;
              this.activePrompt = null;
              task.off("PROMPT" /* PROMPT */);
            }
          });
          this.activePrompt = task.id;
        }
      }
      if (task.hasTitle()) {
        if (!(tasks.some((task2) => task2.hasFailed()) && !task.hasFailed() && task.options.exitOnError !== false && !(task.isCompleted() || task.isSkipped()))) {
          if (task.hasFailed() && rendererOptions.collapseErrors) {
            output.push(...this.format(!task.hasSubtasks() && task.message.error && rendererOptions.showErrorMessage ? task.message.error : task.title, this.style(task), level));
          } else if (task.isSkipped() && rendererOptions.collapseSkips) {
            output.push(
              ...this.format(
                this.logger.suffix(task.message.skip && rendererOptions.showSkipMessage ? task.message.skip : task.title, {
                  field: "SKIPPED" /* SKIPPED */,
                  condition: rendererOptions.suffixSkips,
                  format: /* @__PURE__ */ __name(() => color.dim, "format")
                }),
                this.style(task),
                level
              )
            );
          } else if (task.isRetrying()) {
            output.push(
              ...this.format(
                this.logger.suffix(task.title, {
                  field: `${"RETRY" /* RETRY */}:${task.message.retry.count}`,
                  format: /* @__PURE__ */ __name(() => color.yellow, "format"),
                  condition: rendererOptions.suffixRetries
                }),
                this.style(task),
                level
              )
            );
          } else if (task.isCompleted() && task.hasTitle() && assertFunctionOrSelf(rendererTaskOptions.timer?.condition, task.message.duration)) {
            output.push(
              ...this.format(
                this.logger.suffix(task?.title, {
                  ...rendererTaskOptions.timer,
                  args: [task.message.duration]
                }),
                this.style(task),
                level
              )
            );
          } else if (task.isPaused()) {
            output.push(
              ...this.format(
                this.logger.suffix(task.title, {
                  ...rendererOptions.pausedTimer,
                  args: [task.message.paused - Date.now()]
                }),
                this.style(task),
                level
              )
            );
          } else {
            output.push(...this.format(task.title, this.style(task), level));
          }
        } else {
          output.push(...this.format(task.title, this.logger.icon("COMPLETED_WITH_SISTER_TASKS_FAILED" /* COMPLETED_WITH_FAILED_SISTER_TASKS */), level));
        }
      }
      if (!task.hasSubtasks() || !rendererOptions.showSubtasks) {
        if (task.hasFailed() && rendererOptions.collapseErrors === false && (rendererOptions.showErrorMessage || !rendererOptions.showSubtasks)) {
          output.push(...this.dump(task, level, "FAILED" /* FAILED */));
        } else if (task.isSkipped() && rendererOptions.collapseSkips === false && (rendererOptions.showSkipMessage || !rendererOptions.showSubtasks)) {
          output.push(...this.dump(task, level, "SKIPPED" /* SKIPPED */));
        }
      }
      if (task.isPending() || rendererTaskOptions.persistentOutput) {
        output.push(...this.renderOutputBar(task, level));
      }
      if (
        // check if renderer option is on first
        rendererOptions.showSubtasks !== false && // if it doesnt have subtasks no need to check
        task.hasSubtasks() && (task.isPending() || task.hasFinalized() && !task.hasTitle() || // have to be completed and have subtasks
        task.isCompleted() && rendererOptions.collapseSubtasks === false && !task.subtasks.some((subtask) => this.cache.rendererOptions.get(subtask.id)?.collapseSubtasks === true) || // if any of the subtasks have the collapse option of
        task.subtasks.some((subtask) => this.cache.rendererOptions.get(subtask.id)?.collapseSubtasks === false) || // if any of the subtasks has failed
        task.subtasks.some((subtask) => subtask.hasFailed()) || // if any of the subtasks rolled back
        task.subtasks.some((subtask) => subtask.hasRolledBack()))
      ) {
        const subtaskLevel = !task.hasTitle() ? level : level + 1;
        const subtaskRender = this.renderer(task.subtasks, subtaskLevel);
        output.push(...subtaskRender);
      }
      if (task.hasFinalized()) {
        if (!rendererTaskOptions.persistentOutput) {
          this.buffer.bottom.delete(task.id);
          this.buffer.output.delete(task.id);
        }
      }
      if (task.isClosed()) {
        this.cache.render.set(task.id, output);
        this.reset(task);
      }
      return output;
    });
  }
  renderOutputBar(task, level) {
    const output = this.buffer.output.get(task.id);
    if (!output) {
      return [];
    }
    return output.all.flatMap((o) => this.dump(task, level, "OUTPUT" /* OUTPUT */, o.entry));
  }
  renderBottomBar() {
    if (this.buffer.bottom.size === 0) {
      return [];
    }
    return Array.from(this.buffer.bottom.values()).flatMap((output) => output.all).sort((a, b) => a.time - b.time).map((output) => output.entry);
  }
  renderPrompt() {
    if (!this.prompt) {
      return [];
    }
    return [this.prompt];
  }
  calculate(task) {
    if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) {
      return;
    }
    const rendererOptions = {
      ...this.options,
      ...task.rendererOptions
    };
    this.cache.rendererOptions.set(task.id, rendererOptions);
    this.cache.rendererTaskOptions.set(task.id, {
      ..._DefaultRenderer.rendererTaskOptions,
      timer: rendererOptions.timer,
      ...task.rendererTaskOptions
    });
  }
  setupBuffer(task) {
    if (this.buffer.bottom.has(task.id) || this.buffer.output.has(task.id)) {
      return;
    }
    const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
    if (this.shouldOutputToBottomBar(task) && !this.buffer.bottom.has(task.id)) {
      this.buffer.bottom.set(task.id, new ProcessOutputBuffer({ limit: typeof rendererTaskOptions.bottomBar === "number" ? rendererTaskOptions.bottomBar : 1 }));
      task.on("OUTPUT" /* OUTPUT */, (output) => {
        const data = this.dump(task, -1, "OUTPUT" /* OUTPUT */, output);
        this.buffer.bottom.get(task.id).write(data.join(EOL3));
      });
      task.on("STATE" /* STATE */, (state) => {
        switch (state) {
          case ("RETRY" /* RETRY */ || "ROLLING_BACK" /* ROLLING_BACK */):
            this.buffer.bottom.delete(task.id);
            break;
        }
      });
    } else if (this.shouldOutputToOutputBar(task) && !this.buffer.output.has(task.id)) {
      this.buffer.output.set(task.id, new ProcessOutputBuffer({ limit: typeof rendererTaskOptions.outputBar === "number" ? rendererTaskOptions.outputBar : 1 }));
      task.on("OUTPUT" /* OUTPUT */, (output) => {
        this.buffer.output.get(task.id).write(output);
      });
      task.on("STATE" /* STATE */, (state) => {
        switch (state) {
          case ("RETRY" /* RETRY */ || "ROLLING_BACK" /* ROLLING_BACK */):
            this.buffer.output.delete(task.id);
            break;
        }
      });
    }
  }
  reset(task) {
    this.cache.rendererOptions.delete(task.id);
    this.cache.rendererTaskOptions.delete(task.id);
    this.buffer.output.delete(task.id);
  }
  dump(task, level, source = "OUTPUT" /* OUTPUT */, data) {
    if (!data) {
      switch (source) {
        case "OUTPUT" /* OUTPUT */:
          data = task.output;
          break;
        case "SKIPPED" /* SKIPPED */:
          data = task.message.skip;
          break;
        case "FAILED" /* FAILED */:
          data = task.message.error;
          break;
      }
    }
    if (task.hasTitle() && source === "FAILED" /* FAILED */ && data === task.title || typeof data !== "string") {
      return [];
    }
    if (source === "OUTPUT" /* OUTPUT */) {
      data = cleanseAnsi(data);
    }
    return this.format(data, this.style(task, true), level + 1);
  }
  indent(str, i) {
    return i > 0 ? indent(str.trim(), this.options.indentation) : str.trim();
  }
};

// src/renderer/silent/renderer.ts
var SilentRenderer = class {
  constructor(tasks, options) {
    this.tasks = tasks;
    this.options = options;
  }
  static {
    __name(this, "SilentRenderer");
  }
  static nonTTY = true;
  static rendererOptions;
  static rendererTaskOptions;
  render() {
    return;
  }
  end() {
    return;
  }
};

// src/renderer/simple/renderer.ts
var SimpleRenderer = class _SimpleRenderer {
  constructor(tasks, options) {
    this.tasks = tasks;
    this.options = options;
    this.options = {
      ..._SimpleRenderer.rendererOptions,
      ...options,
      icon: {
        ...LISTR_LOGGER_STYLE.icon,
        ...options?.icon ?? {}
      },
      color: {
        ...LISTR_LOGGER_STYLE.color,
        ...options?.color ?? {}
      }
    };
    this.logger = this.options.logger ?? new ListrLogger({ useIcons: true, toStderr: LISTR_LOGGER_STDERR_LEVELS });
    this.logger.options.icon = this.options.icon;
    this.logger.options.color = this.options.color;
    if (this.options.timestamp) {
      this.logger.options.fields.prefix.unshift(this.options.timestamp);
    }
  }
  static {
    __name(this, "SimpleRenderer");
  }
  static nonTTY = true;
  static rendererOptions = {
    pausedTimer: {
      ...PRESET_TIMER,
      field: /* @__PURE__ */ __name((time) => `${"PAUSED" /* PAUSED */}:${time}`, "field"),
      format: /* @__PURE__ */ __name(() => color.yellowBright, "format")
    }
  };
  static rendererTaskOptions = {};
  logger;
  cache = {
    rendererOptions: /* @__PURE__ */ new Map(),
    rendererTaskOptions: /* @__PURE__ */ new Map()
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end() {
  }
  render() {
    this.renderer(this.tasks);
  }
  renderer(tasks) {
    tasks.forEach((task) => {
      this.calculate(task);
      task.once("CLOSED" /* CLOSED */, () => {
        this.reset(task);
      });
      const rendererOptions = this.cache.rendererOptions.get(task.id);
      const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
      task.on("SUBTASK" /* SUBTASK */, (subtasks) => {
        this.renderer(subtasks);
      });
      task.on("STATE" /* STATE */, (state) => {
        if (!task.hasTitle()) {
          return;
        }
        if (state === "STARTED" /* STARTED */) {
          this.logger.log("STARTED" /* STARTED */, task.title);
        } else if (state === "COMPLETED" /* COMPLETED */) {
          const timer = rendererTaskOptions?.timer;
          this.logger.log(
            "COMPLETED" /* COMPLETED */,
            task.title,
            timer && {
              suffix: {
                ...timer,
                condition: !!task.message?.duration && timer.condition,
                args: [task.message.duration]
              }
            }
          );
        } else if (state === "PROMPT" /* PROMPT */) {
          this.logger.process.hijack();
          task.on("PROMPT" /* PROMPT */, (prompt) => {
            this.logger.process.toStderr(prompt, false);
          });
        } else if (state === "PROMPT_COMPLETED" /* PROMPT_COMPLETED */) {
          task.off("PROMPT" /* PROMPT */);
          this.logger.process.release();
        }
      });
      task.on("OUTPUT" /* OUTPUT */, (output) => {
        this.logger.log("OUTPUT" /* OUTPUT */, output);
      });
      task.on("MESSAGE" /* MESSAGE */, (message) => {
        if (message.error) {
          this.logger.log("FAILED" /* FAILED */, task.title, {
            suffix: {
              field: `${"FAILED" /* FAILED */}: ${message.error}`,
              format: /* @__PURE__ */ __name(() => color.red, "format")
            }
          });
        } else if (message.skip) {
          this.logger.log("SKIPPED" /* SKIPPED */, task.title, {
            suffix: {
              field: `${"SKIPPED" /* SKIPPED */}: ${message.skip}`,
              format: /* @__PURE__ */ __name(() => color.yellow, "format")
            }
          });
        } else if (message.rollback) {
          this.logger.log("ROLLBACK" /* ROLLBACK */, task.title, {
            suffix: {
              field: `${"ROLLBACK" /* ROLLBACK */}: ${message.rollback}`,
              format: /* @__PURE__ */ __name(() => color.red, "format")
            }
          });
        } else if (message.retry) {
          this.logger.log("RETRY" /* RETRY */, task.title, {
            suffix: {
              field: `${"RETRY" /* RETRY */}:${message.retry.count}`,
              format: /* @__PURE__ */ __name(() => color.red, "format")
            }
          });
        } else if (message.paused) {
          const timer = rendererOptions?.pausedTimer;
          this.logger.log(
            "PAUSED" /* PAUSED */,
            task.title,
            timer && {
              suffix: {
                ...timer,
                condition: !!message?.paused && timer.condition,
                args: [message.paused - Date.now()]
              }
            }
          );
        }
      });
    });
  }
  calculate(task) {
    if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) {
      return;
    }
    const rendererOptions = {
      ...this.options,
      ...task.rendererOptions
    };
    this.cache.rendererOptions.set(task.id, rendererOptions);
    this.cache.rendererTaskOptions.set(task.id, {
      ..._SimpleRenderer.rendererTaskOptions,
      timer: rendererOptions.timer,
      ...task.rendererTaskOptions
    });
  }
  reset(task) {
    this.cache.rendererOptions.delete(task.id);
    this.cache.rendererTaskOptions.delete(task.id);
  }
};

// src/renderer/test/serializer.ts
var TestRendererSerializer = class {
  constructor(options) {
    this.options = options;
  }
  static {
    __name(this, "TestRendererSerializer");
  }
  serialize(event, data, task) {
    return JSON.stringify(this.generate(event, data, task));
  }
  generate(event, data, task) {
    const output = {
      event,
      data
    };
    if (typeof this.options?.task !== "boolean") {
      const t = Object.fromEntries(
        this.options.task.map((entity) => {
          const property = task[entity];
          if (typeof property === "function") {
            return [entity, property.call(task)];
          }
          return [entity, property];
        })
      );
      if (Object.keys(task).length > 0) {
        output.task = t;
      }
    }
    return output;
  }
};

// src/renderer/test/renderer.ts
var TestRenderer = class _TestRenderer {
  constructor(tasks, options) {
    this.tasks = tasks;
    this.options = options;
    this.options = { ..._TestRenderer.rendererOptions, ...this.options };
    this.logger = this.options.logger ?? new ListrLogger({ useIcons: false });
    this.serializer = new TestRendererSerializer(this.options);
  }
  static {
    __name(this, "TestRenderer");
  }
  static nonTTY = true;
  static rendererOptions = {
    subtasks: true,
    state: Object.values(ListrTaskState),
    output: true,
    prompt: true,
    title: true,
    messages: ["skip", "error", "retry", "rollback", "paused"],
    messagesToStderr: ["error", "rollback", "retry"],
    task: [
      "hasRolledBack",
      "isRollingBack",
      "isCompleted",
      "isSkipped",
      "hasFinalized",
      "hasSubtasks",
      "title",
      "hasReset",
      "hasTitle",
      "isPrompt",
      "isPaused",
      "isPending",
      "isSkipped",
      "isStarted",
      "hasFailed",
      "isEnabled",
      "isRetrying",
      "path"
    ]
  };
  static rendererTaskOptions;
  logger;
  serializer;
  render() {
    this.renderer(this.tasks);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end() {
  }
  // verbose renderer multi-level
  renderer(tasks) {
    tasks.forEach((task) => {
      if (this.options.subtasks) {
        task.on("SUBTASK" /* SUBTASK */, (subtasks) => {
          this.renderer(subtasks);
        });
      }
      if (this.options.state) {
        task.on("STATE" /* STATE */, (state) => {
          this.logger.toStdout(this.serializer.serialize("STATE" /* STATE */, state, task));
        });
      }
      if (this.options.output) {
        task.on("OUTPUT" /* OUTPUT */, (data) => {
          this.logger.toStdout(this.serializer.serialize("OUTPUT" /* OUTPUT */, data, task));
        });
      }
      if (this.options.prompt) {
        task.on("PROMPT" /* PROMPT */, (prompt) => {
          this.logger.toStdout(this.serializer.serialize("PROMPT" /* PROMPT */, prompt, task));
        });
      }
      if (this.options.title) {
        task.on("TITLE" /* TITLE */, (title) => {
          this.logger.toStdout(this.serializer.serialize("TITLE" /* TITLE */, title, task));
        });
      }
      task.on("MESSAGE" /* MESSAGE */, (message) => {
        const parsed = Object.fromEntries(
          Object.entries(message).map(([key, value]) => {
            if (this.options.messages.includes(key)) {
              return [key, value];
            }
          }).filter(Boolean)
        );
        if (Object.keys(parsed).length > 0) {
          const output = this.serializer.serialize("MESSAGE" /* MESSAGE */, parsed, task);
          if (this.options.messagesToStderr.some((state) => Object.keys(parsed).includes(state))) {
            this.logger.toStderr(output);
          } else {
            this.logger.toStdout(output);
          }
        }
      });
    });
  }
};

// src/renderer/verbose/renderer.ts
var VerboseRenderer = class _VerboseRenderer {
  constructor(tasks, options) {
    this.tasks = tasks;
    this.options = options;
    this.options = {
      ..._VerboseRenderer.rendererOptions,
      ...this.options,
      icon: {
        ...LISTR_LOGGER_STYLE.icon,
        ...options?.icon ?? {}
      },
      color: {
        ...LISTR_LOGGER_STYLE.color,
        ...options?.color ?? {}
      }
    };
    this.logger = this.options.logger ?? new ListrLogger({ useIcons: false, toStderr: LISTR_LOGGER_STDERR_LEVELS });
    this.logger.options.icon = this.options.icon;
    this.logger.options.color = this.options.color;
    if (this.options.timestamp) {
      this.logger.options.fields.prefix.unshift(this.options.timestamp);
    }
  }
  static {
    __name(this, "VerboseRenderer");
  }
  static nonTTY = true;
  static rendererOptions = {
    logTitleChange: false,
    pausedTimer: {
      ...PRESET_TIMER,
      format: /* @__PURE__ */ __name(() => color.yellowBright, "format")
    }
  };
  static rendererTaskOptions;
  logger;
  cache = {
    rendererOptions: /* @__PURE__ */ new Map(),
    rendererTaskOptions: /* @__PURE__ */ new Map()
  };
  render() {
    this.renderer(this.tasks);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end() {
  }
  renderer(tasks) {
    tasks.forEach((task) => {
      this.calculate(task);
      task.once("CLOSED" /* CLOSED */, () => {
        this.reset(task);
      });
      const rendererOptions = this.cache.rendererOptions.get(task.id);
      const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
      task.on("SUBTASK" /* SUBTASK */, (subtasks) => {
        this.renderer(subtasks);
      });
      task.on("STATE" /* STATE */, (state) => {
        if (!task.hasTitle()) {
          return;
        }
        if (state === "STARTED" /* STARTED */) {
          this.logger.log("STARTED" /* STARTED */, task.title);
        } else if (state === "COMPLETED" /* COMPLETED */) {
          const timer = rendererTaskOptions.timer;
          this.logger.log(
            "COMPLETED" /* COMPLETED */,
            task.title,
            timer && {
              suffix: {
                ...timer,
                condition: !!task.message?.duration && timer.condition,
                args: [task.message.duration]
              }
            }
          );
        }
      });
      task.on("OUTPUT" /* OUTPUT */, (data) => {
        this.logger.log("OUTPUT" /* OUTPUT */, data);
      });
      task.on("PROMPT" /* PROMPT */, (prompt) => {
        const cleansed = cleanseAnsi(prompt);
        if (cleansed) {
          this.logger.log("PROMPT" /* PROMPT */, cleansed);
        }
      });
      if (this.options?.logTitleChange !== false) {
        task.on("TITLE" /* TITLE */, (title) => {
          this.logger.log("TITLE" /* TITLE */, title);
        });
      }
      task.on("MESSAGE" /* MESSAGE */, (message) => {
        if (message?.error) {
          this.logger.log("FAILED" /* FAILED */, message.error);
        } else if (message?.skip) {
          this.logger.log("SKIPPED" /* SKIPPED */, message.skip);
        } else if (message?.rollback) {
          this.logger.log("ROLLBACK" /* ROLLBACK */, message.rollback);
        } else if (message?.retry) {
          this.logger.log("RETRY" /* RETRY */, task.title, { suffix: message.retry.count.toString() });
        } else if (message?.paused) {
          const timer = rendererOptions?.pausedTimer;
          this.logger.log(
            "PAUSED" /* PAUSED */,
            task.title,
            timer && {
              suffix: {
                ...timer,
                condition: !!message?.paused && timer.condition,
                args: [message.paused - Date.now()]
              }
            }
          );
        }
      });
    });
  }
  calculate(task) {
    if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) {
      return;
    }
    const rendererOptions = {
      ...this.options,
      ...task.rendererOptions
    };
    this.cache.rendererOptions.set(task.id, rendererOptions);
    this.cache.rendererTaskOptions.set(task.id, {
      ..._VerboseRenderer.rendererTaskOptions,
      timer: rendererOptions.timer,
      ...task.rendererTaskOptions
    });
  }
  reset(task) {
    this.cache.rendererOptions.delete(task.id);
    this.cache.rendererTaskOptions.delete(task.id);
  }
};

// src/utils/ui/renderer.ts
var RENDERERS = {
  default: DefaultRenderer,
  simple: SimpleRenderer,
  verbose: VerboseRenderer,
  test: TestRenderer,
  silent: SilentRenderer
};
function isRendererSupported(renderer) {
  return process.stdout.isTTY === true || renderer.nonTTY === true;
}
__name(isRendererSupported, "isRendererSupported");
function getRendererClass(renderer) {
  if (typeof renderer === "string") {
    return RENDERERS[renderer] ?? RENDERERS.default;
  }
  return typeof renderer === "function" ? renderer : RENDERERS.default;
}
__name(getRendererClass, "getRendererClass");
function getRenderer(options) {
  if (assertFunctionOrSelf(options?.silentRendererCondition)) {
    return { renderer: getRendererClass("silent"), selection: "SILENT" /* SILENT */ };
  }
  const r = {
    renderer: getRendererClass(options.renderer),
    options: options.rendererOptions,
    selection: "PRIMARY" /* PRIMARY */
  };
  if (!isRendererSupported(r.renderer) || assertFunctionOrSelf(options?.fallbackRendererCondition)) {
    return {
      renderer: getRendererClass(options.fallbackRenderer),
      options: options.fallbackRendererOptions,
      selection: "SECONDARY" /* SECONDARY */
    };
  }
  return r;
}
__name(getRenderer, "getRenderer");

// src/utils/assert.ts
function assertFunctionOrSelf(functionOrSelf, ...args) {
  if (typeof functionOrSelf === "function") {
    return functionOrSelf(...args);
  } else {
    return functionOrSelf;
  }
}
__name(assertFunctionOrSelf, "assertFunctionOrSelf");

// src/utils/clone.ts
import rfdc from "rfdc";
var clone = rfdc({ circles: true });
function cloneObject(obj) {
  return clone(obj);
}
__name(cloneObject, "cloneObject");

// src/utils/concurrency.ts
var Concurrency = class {
  static {
    __name(this, "Concurrency");
  }
  concurrency;
  count;
  queue;
  constructor(options) {
    this.concurrency = options.concurrency;
    this.count = 0;
    this.queue = /* @__PURE__ */ new Set();
  }
  add(fn) {
    if (this.count < this.concurrency) {
      return this.run(fn);
    }
    return new Promise((resolve) => {
      const callback = /* @__PURE__ */ __name(() => resolve(this.run(fn)), "callback");
      this.queue.add(callback);
    });
  }
  flush() {
    for (const callback of this.queue) {
      if (this.count >= this.concurrency) {
        break;
      }
      this.queue.delete(callback);
      callback();
    }
  }
  run(fn) {
    this.count++;
    const promise = fn();
    const cleanup = /* @__PURE__ */ __name(() => {
      this.count--;
      this.flush();
    }, "cleanup");
    promise.then(cleanup, () => {
      this.queue.clear();
    });
    return promise;
  }
};

// src/utils/delay.ts
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
__name(delay, "delay");

// src/interfaces/listr-error.interface.ts
var ListrError = class extends Error {
  constructor(error, type, task) {
    super(error.message);
    this.error = error;
    this.type = type;
    this.task = task;
    this.name = "ListrError";
    this.path = task.path;
    if (task?.options.collectErrors === "full") {
      this.task = cloneObject(task);
      this.ctx = cloneObject(task.listr.ctx);
    }
    this.stack = error?.stack;
  }
  static {
    __name(this, "ListrError");
  }
  path;
  ctx;
};

// src/interfaces/listr-renderer-error.interface.ts
var ListrRendererError = class extends Error {
  static {
    __name(this, "ListrRendererError");
  }
};

// src/interfaces/prompt-error.interface.ts
var PromptError = class extends Error {
  static {
    __name(this, "PromptError");
  }
};

// src/lib/task-wrapper.ts
var TaskWrapper = class {
  constructor(task) {
    this.task = task;
  }
  static {
    __name(this, "TaskWrapper");
  }
  /* istanbul ignore next */
  get title() {
    return this.task.title;
  }
  /**
   * Title of the current task.
   *
   * @see {@link https://listr2.kilic.dev/task/title.html}
   */
  set title(title) {
    title = Array.isArray(title) ? title : [title];
    this.task.title$ = splat(title.shift(), ...title);
  }
  /* istanbul ignore next */
  get output() {
    return this.task.output;
  }
  /* istanbul ignore next */
  /**
   * Send output from the current task to the renderer.
   *
   * @see {@link https://listr2.kilic.dev/task/output.html}
   */
  set output(output) {
    output = Array.isArray(output) ? output : [output];
    this.task.output$ = splat(output.shift(), ...output);
  }
  /* istanbul ignore next */
  /** Send an output to the output channel as prompt. */
  set promptOutput(output) {
    this.task.promptOutput$ = output;
  }
  /**
   * Creates a new set of Listr subtasks.
   *
   * @see {@link https://listr2.kilic.dev/task/subtasks.html}
   */
  newListr(task, options) {
    let tasks;
    if (typeof task === "function") {
      tasks = task(this);
    } else {
      tasks = task;
    }
    return new Listr(tasks, options, this.task);
  }
  /**
   * Report an error that has to be collected and handled.
   *
   * @see {@link https://listr2.kilic.dev/task/error-handling.html}
   */
  report(error, type) {
    if (this.task.options.collectErrors !== false) {
      this.task.listr.errors.push(new ListrError(error, type, this.task));
    }
    this.task.message$ = { error: error.message ?? this.task?.title };
  }
  /**
   * Skip the current task.
   *
   * @see {@link https://listr2.kilic.dev/task/skip.html}
   */
  skip(message, ...metadata) {
    this.task.state$ = "SKIPPED" /* SKIPPED */;
    if (message) {
      this.task.message$ = { skip: message ? splat(message, ...metadata) : this.task?.title };
    }
  }
  /**
   * Check whether this task is currently in a retry state.
   *
   * @see {@link https://listr2.kilic.dev/task/retry.html}
   */
  isRetrying() {
    return this.task.isRetrying() ? this.task.retry : { count: 0 };
  }
  /* istanbul ignore next */
  /**
   * Create a new prompt for getting user input through the prompt adapter.
   * This will create a new prompt through the adapter if the task is not currently rendering a prompt or will return the active instance.
   *
   * This part of the application requires optional peer dependencies, please refer to documentation.
   *
   * @see {@link https://listr2.kilic.dev/task/prompt.html}
   */
  prompt(adapter) {
    if (this.task.prompt) {
      return this.task.prompt;
    }
    return new adapter(this.task, this);
  }
  /* istanbul ignore next */
  /**
   * Generates a fake stdout for your use case, where it will be tunnelled through Listr to handle the rendering process.
   *
   * @see {@link https://listr2.kilic.dev/renderer/process-output.html}
   */
  stdout(type) {
    return createWritable((chunk) => {
      switch (type) {
        case "PROMPT" /* PROMPT */:
          this.promptOutput = chunk;
          break;
        default:
          this.output = chunk;
      }
    });
  }
  /** Run this task. */
  run(ctx) {
    return this.task.run(ctx, this);
  }
};

// src/lib/task.ts
import { randomUUID } from "crypto";

// src/lib/listr-task-event-manager.ts
var ListrTaskEventManager = class extends EventManager {
  static {
    __name(this, "ListrTaskEventManager");
  }
};

// src/lib/task.ts
var Task = class extends ListrTaskEventManager {
  constructor(listr, task, options, rendererOptions, rendererTaskOptions) {
    super();
    this.listr = listr;
    this.task = task;
    this.options = options;
    this.rendererOptions = rendererOptions;
    this.rendererTaskOptions = rendererTaskOptions;
    if (task.title) {
      const title = Array.isArray(task?.title) ? task.title : [task.title];
      this.title = splat(title.shift(), ...title);
      this.initialTitle = this.title;
    }
    this.taskFn = task.task;
    this.parent = listr.parentTask;
  }
  static {
    __name(this, "Task");
  }
  /** Unique id per task, can be used for identifying a Task. */
  id = randomUUID();
  /** The current state of the task. */
  state = "WAITING" /* WAITING */;
  /** Subtasks of the current task. */
  subtasks;
  /** Title of the task. */
  title;
  /** Initial/Untouched version of the title for using whenever task has a reset. */
  initialTitle;
  /** Output channel for the task. */
  output;
  /** Current state of the retry process whenever the task is retrying. */
  retry;
  /**
   * A channel for messages.
   *
   * This requires a separate channel for messages like error, skip or runtime messages to further utilize in the renderers.
   */
  message = {};
  /** Current prompt instance or prompt error whenever the task is prompting. */
  prompt;
  /** Parent task of the current task. */
  parent;
  /** Enable flag of this task. */
  enabled;
  /** User provided Task callback function to run. */
  taskFn;
  /** Marks the task as closed. This is different from finalized since this is not really related to task itself. */
  closed;
  /**
   * Update the current state of the Task and emit the neccassary events.
   */
  set state$(state) {
    this.state = state;
    this.emit("STATE" /* STATE */, state);
    if (this.hasSubtasks() && this.hasFailed()) {
      for (const subtask of this.subtasks) {
        if (subtask.state === "STARTED" /* STARTED */) {
          subtask.state$ = "FAILED" /* FAILED */;
        }
      }
    }
    this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
  }
  /**
   * Update the current output of the Task and emit the neccassary events.
   */
  set output$(data) {
    this.output = data;
    this.emit("OUTPUT" /* OUTPUT */, data);
    this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
  }
  /**
   * Update the current prompt output of the Task and emit the neccassary events.
   */
  set promptOutput$(data) {
    this.emit("PROMPT" /* PROMPT */, data);
    if (cleanseAnsi(data)) {
      this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
    }
  }
  /**
   * Update or extend the current message of the Task and emit the neccassary events.
   */
  set message$(data) {
    this.message = { ...this.message, ...data };
    this.emit("MESSAGE" /* MESSAGE */, data);
    this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
  }
  /**
   * Update the current title of the Task and emit the neccassary events.
   */
  set title$(title) {
    this.title = title;
    this.emit("TITLE" /* TITLE */, title);
    this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
  }
  /**
   * Current task path in the hierarchy.
   */
  get path() {
    return [...this.listr.path, this.initialTitle];
  }
  /**
   * Checks whether the current task with the given context should be set as enabled.
   */
  async check(ctx) {
    if (this.state === "WAITING" /* WAITING */) {
      this.enabled = await assertFunctionOrSelf(this.task?.enabled ?? true, ctx);
      this.emit("ENABLED" /* ENABLED */, this.enabled);
      this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
    }
    return this.enabled;
  }
  /** Returns whether this task has subtasks. */
  hasSubtasks() {
    return this.subtasks?.length > 0;
  }
  /** Returns whether this task is finalized in someform. */
  hasFinalized() {
    return this.isCompleted() || this.hasFailed() || this.isSkipped() || this.hasRolledBack();
  }
  /** Returns whether this task is in progress. */
  isPending() {
    return this.isStarted() || this.isPrompt() || this.hasReset();
  }
  /** Returns whether this task has started. */
  isStarted() {
    return this.state === "STARTED" /* STARTED */;
  }
  /** Returns whether this task is skipped. */
  isSkipped() {
    return this.state === "SKIPPED" /* SKIPPED */;
  }
  /** Returns whether this task has been completed. */
  isCompleted() {
    return this.state === "COMPLETED" /* COMPLETED */;
  }
  /** Returns whether this task has been failed. */
  hasFailed() {
    return this.state === "FAILED" /* FAILED */;
  }
  /** Returns whether this task has an active rollback task going on. */
  isRollingBack() {
    return this.state === "ROLLING_BACK" /* ROLLING_BACK */;
  }
  /** Returns whether the rollback action was successful. */
  hasRolledBack() {
    return this.state === "ROLLED_BACK" /* ROLLED_BACK */;
  }
  /** Returns whether this task has an actively retrying task going on. */
  isRetrying() {
    return this.state === "RETRY" /* RETRY */;
  }
  /** Returns whether this task has some kind of reset like retry and rollback going on. */
  hasReset() {
    return this.state === "RETRY" /* RETRY */ || this.state === "ROLLING_BACK" /* ROLLING_BACK */;
  }
  /** Returns whether enabled function resolves to true. */
  isEnabled() {
    return this.enabled;
  }
  /** Returns whether this task actually has a title. */
  hasTitle() {
    return typeof this?.title === "string";
  }
  /** Returns whether this task has a prompt inside. */
  isPrompt() {
    return this.state === "PROMPT" /* PROMPT */ || this.state === "PROMPT_COMPLETED" /* PROMPT_COMPLETED */;
  }
  /** Returns whether this task is currently paused. */
  isPaused() {
    return this.state === "PAUSED" /* PAUSED */;
  }
  /** Returns whether this task is closed. */
  isClosed() {
    return this.closed;
  }
  /** Pause the given task for certain time. */
  async pause(time) {
    const state = this.state;
    this.state$ = "PAUSED" /* PAUSED */;
    this.message$ = {
      paused: Date.now() + time
    };
    await delay(time);
    this.state$ = state;
    this.message$ = {
      paused: null
    };
  }
  /** Run the current task. */
  async run(context, wrapper) {
    const handleResult = /* @__PURE__ */ __name((result) => {
      if (result instanceof Listr) {
        result.options = { ...this.options, ...result.options };
        result.rendererClass = getRendererClass("silent");
        this.subtasks = result.tasks;
        result.errors = this.listr.errors;
        this.emit("SUBTASK" /* SUBTASK */, this.subtasks);
        result = result.run(context);
      } else if (result instanceof Promise) {
        result = result.then(handleResult);
      } else if (isReadable(result)) {
        result = new Promise((resolve, reject) => {
          result.on("data", (data) => {
            this.output$ = data.toString();
          });
          result.on("error", (error) => reject(error));
          result.on("end", () => resolve(null));
        });
      } else if (isObservable(result)) {
        result = new Promise((resolve, reject) => {
          result.subscribe({
            next: /* @__PURE__ */ __name((data) => {
              this.output$ = data;
            }, "next"),
            error: reject,
            complete: resolve
          });
        });
      }
      return result;
    }, "handleResult");
    const startTime = Date.now();
    this.state$ = "STARTED" /* STARTED */;
    const skipped = await assertFunctionOrSelf(this.task?.skip ?? false, context);
    if (skipped) {
      if (typeof skipped === "string") {
        this.message$ = { skip: skipped };
      } else if (this.hasTitle()) {
        this.message$ = { skip: this.title };
      } else {
        this.message$ = { skip: "Skipped task without a title." };
      }
      this.state$ = "SKIPPED" /* SKIPPED */;
      return;
    }
    try {
      const retryCount = typeof this.task?.retry === "number" && this.task.retry > 0 ? this.task.retry + 1 : typeof this.task?.retry === "object" && this.task.retry.tries > 0 ? this.task.retry.tries + 1 : 1;
      const retryDelay = typeof this.task.retry === "object" && this.task.retry.delay;
      for (let retries = 1; retries <= retryCount; retries++) {
        try {
          await handleResult(this.taskFn(context, wrapper));
          break;
        } catch (err) {
          if (retries !== retryCount) {
            this.retry = { count: retries, error: err };
            this.message$ = { retry: this.retry };
            this.title$ = this.initialTitle;
            this.output = void 0;
            wrapper.report(err, "WILL_RETRY" /* WILL_RETRY */);
            this.state$ = "RETRY" /* RETRY */;
            if (retryDelay) {
              await this.pause(retryDelay);
            }
          } else {
            throw err;
          }
        }
      }
      if (this.isStarted() || this.isRetrying()) {
        this.message$ = { duration: Date.now() - startTime };
        this.state$ = "COMPLETED" /* COMPLETED */;
      }
    } catch (error) {
      if (this.prompt instanceof PromptError) {
        error = this.prompt;
      }
      if (this.task?.rollback) {
        wrapper.report(error, "WILL_ROLLBACK" /* WILL_ROLLBACK */);
        try {
          this.state$ = "ROLLING_BACK" /* ROLLING_BACK */;
          await this.task.rollback(context, wrapper);
          this.message$ = { rollback: this.title };
          this.state$ = "ROLLED_BACK" /* ROLLED_BACK */;
        } catch (err) {
          this.state$ = "FAILED" /* FAILED */;
          wrapper.report(err, "HAS_FAILED_TO_ROLLBACK" /* HAS_FAILED_TO_ROLLBACK */);
          this.close();
          throw err;
        }
        if (this.listr.options?.exitAfterRollback !== false) {
          this.close();
          throw error;
        }
      } else {
        this.state$ = "FAILED" /* FAILED */;
        if (this.listr.options.exitOnError !== false && await assertFunctionOrSelf(this.task?.exitOnError, context) !== false) {
          wrapper.report(error, "HAS_FAILED" /* HAS_FAILED */);
          this.close();
          throw error;
        } else if (!this.hasSubtasks()) {
          wrapper.report(error, "HAS_FAILED_WITHOUT_ERROR" /* HAS_FAILED_WITHOUT_ERROR */);
        }
      }
    } finally {
      this.close();
    }
  }
  close() {
    this.emit("CLOSED" /* CLOSED */);
    this.listr.events.emit("SHOUD_REFRESH_RENDER" /* SHOULD_REFRESH_RENDER */);
    this.complete();
  }
};

// src/lib/listr-event-manager.ts
var ListrEventManager = class extends EventManager {
  static {
    __name(this, "ListrEventManager");
  }
};

// src/listr.ts
var Listr = class {
  constructor(task, options, parentTask) {
    this.task = task;
    this.options = options;
    this.parentTask = parentTask;
    this.options = {
      concurrent: false,
      renderer: "default",
      fallbackRenderer: "simple",
      exitOnError: true,
      exitAfterRollback: true,
      collectErrors: false,
      registerSignalListeners: true,
      ...this.parentTask?.options ?? {},
      ...options
    };
    if (this.options.concurrent === true) {
      this.options.concurrent = Infinity;
    } else if (typeof this.options.concurrent !== "number") {
      this.options.concurrent = 1;
    }
    this.concurrency = new Concurrency({ concurrency: this.options.concurrent });
    if (parentTask) {
      this.path = [...parentTask.listr.path, parentTask.title];
      this.errors = parentTask.listr.errors;
    }
    if (this.parentTask?.listr.events instanceof ListrEventManager) {
      this.events = this.parentTask.listr.events;
    } else {
      this.events = new ListrEventManager();
    }
    const renderer = getRenderer({
      renderer: this.options.renderer,
      rendererOptions: this.options.rendererOptions,
      fallbackRenderer: this.options.fallbackRenderer,
      fallbackRendererOptions: this.options.fallbackRendererOptions,
      fallbackRendererCondition: this.options?.fallbackRendererCondition,
      silentRendererCondition: this.options?.silentRendererCondition
    });
    this.rendererClass = renderer.renderer;
    this.rendererClassOptions = renderer.options;
    this.rendererSelection = renderer.selection;
    this.add(task ?? []);
    if (this.options.registerSignalListeners) {
      this.boundSignalHandler = this.signalHandler.bind(this);
      process.once("SIGINT", this.boundSignalHandler).setMaxListeners(0);
    }
    if (this.options?.forceTTY || process.env["LISTR_FORCE_TTY" /* FORCE_TTY */]) {
      process.stdout.isTTY = true;
      process.stderr.isTTY = true;
    }
    if (this.options?.forceUnicode) {
      process.env["LISTR_FORCE_UNICODE" /* FORCE_UNICODE */] = "1";
    }
  }
  static {
    __name(this, "Listr");
  }
  tasks = [];
  errors = [];
  ctx;
  events;
  path = [];
  rendererClass;
  rendererClassOptions;
  rendererSelection;
  boundSignalHandler;
  concurrency;
  renderer;
  /**
   * Whether this is the root task.
   */
  isRoot() {
    return !this.parentTask;
  }
  /**
   * Whether this is a subtask of another task list.
   */
  isSubtask() {
    return !!this.parentTask;
  }
  /**
   * Add tasks to current task list.
   *
   * @see {@link https://listr2.kilic.dev/task/task.html}
   */
  add(tasks) {
    this.tasks.push(...this.generate(tasks));
  }
  /**
   * Run the task list.
   *
   * @see {@link https://listr2.kilic.dev/listr/listr.html#run-the-generated-task-list}
   */
  async run(context) {
    if (!this.renderer) {
      this.renderer = new this.rendererClass(this.tasks, this.rendererClassOptions, this.events);
    }
    await this.renderer.render();
    this.ctx = this.options?.ctx ?? context ?? {};
    await Promise.all(this.tasks.map((task) => task.check(this.ctx)));
    try {
      await Promise.all(this.tasks.map((task) => this.concurrency.add(() => this.runTask(task))));
      this.renderer.end();
      this.removeSignalHandler();
    } catch (err) {
      if (this.options.exitOnError !== false) {
        this.renderer.end(err);
        this.removeSignalHandler();
        throw err;
      }
    }
    return this.ctx;
  }
  generate(tasks) {
    tasks = Array.isArray(tasks) ? tasks : [tasks];
    return tasks.map((task) => {
      let rendererTaskOptions;
      if (this.rendererSelection === "PRIMARY" /* PRIMARY */) {
        rendererTaskOptions = task.rendererOptions;
      } else if (this.rendererSelection === "SECONDARY" /* SECONDARY */) {
        rendererTaskOptions = task.fallbackRendererOptions;
      }
      return new Task(
        this,
        task,
        this.options,
        this.rendererClassOptions,
        rendererTaskOptions
      );
    });
  }
  async runTask(task) {
    if (!await task.check(this.ctx)) {
      return;
    }
    return new TaskWrapper(task).run(this.ctx);
  }
  signalHandler() {
    this.tasks?.forEach(async (task) => {
      if (task.isPending()) {
        task.state$ = "FAILED" /* FAILED */;
      }
    });
    if (this.isRoot()) {
      this.renderer.end(new Error("Interrupted."));
      process.exit(127);
    }
  }
  removeSignalHandler() {
    if (this.boundSignalHandler) {
      process.removeListener("SIGINT", this.boundSignalHandler);
    }
  }
};
export {
  ANSI_ESCAPE,
  ANSI_ESCAPE_CODES,
  BaseEventMap,
  Concurrency,
  DefaultRenderer,
  EventManager,
  LISTR_DEFAULT_RENDERER_STYLE,
  LISTR_LOGGER_STDERR_LEVELS,
  LISTR_LOGGER_STYLE,
  Listr,
  ListrDefaultRendererLogLevels,
  ListrEnvironmentVariables,
  ListrError,
  ListrErrorTypes,
  ListrEventManager,
  ListrEventType,
  ListrLogLevels,
  ListrLogger,
  ListrPromptAdapter,
  ListrRendererError,
  ListrRendererSelection,
  ListrTaskEventManager,
  ListrTaskEventType,
  ListrTaskState,
  PRESET_TIMER,
  PRESET_TIMESTAMP,
  ProcessOutput,
  ProcessOutputBuffer,
  ProcessOutputStream,
  PromptError,
  SilentRenderer,
  SimpleRenderer,
  Spinner,
  TestRenderer,
  TestRendererSerializer,
  VerboseRenderer,
  assertFunctionOrSelf,
  cleanseAnsi,
  cloneObject,
  color,
  createWritable,
  delay,
  figures,
  getRenderer,
  getRendererClass,
  indent,
  isObservable,
  isReadable,
  isUnicodeSupported,
  parseTimer,
  parseTimestamp,
  splat
};
