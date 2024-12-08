'use strict';

const utils = require('./utils.cjs');

function encodeString(value) {
    if (/[^\x20\x21\x23-\x5B\x5D-\uD799]/.test(value)) { // [^\x20-\uD799]|[\x22\x5c]
        return JSON.stringify(value);
    }

    return '"' + value + '"';
}

function* stringifyChunked(value, optionsOrReplacer, space) {
    if (optionsOrReplacer === null || Array.isArray(optionsOrReplacer) || typeof optionsOrReplacer !== 'object') {
        optionsOrReplacer = {
            replacer: optionsOrReplacer,
            space
        };
    }

    const highWaterMark = Number(optionsOrReplacer.highWaterMark) || 0x4000; // 16kb by default
    let replacer = utils.normalizeReplacer(optionsOrReplacer.replacer);
    space = utils.normalizeSpace(optionsOrReplacer.space);

    const keyStrings = new Map();
    const visited = [];
    const rootValue = { '': value };
    let prevState = null;
    let state = () => printEntry('', value);
    let stateValue = rootValue;
    let stateEmpty = true;
    let stateKeys = [''];
    let stateIndex = 0;
    let buffer = '';
    let getKeys = Object.keys;

    if (Array.isArray(replacer)) {
        const allowlist = replacer;

        getKeys = () => allowlist;
        replacer = null;
    }

    while (true) {
        state();

        if (buffer.length >= highWaterMark || prevState === null) {
            // flush buffer
            yield buffer;
            buffer = '';

            if (prevState === null) {
                break;
            }
        }
    }

    function printObject() {
        if (stateIndex === 0) {
            stateKeys = getKeys(stateValue);
            buffer += '{';
        }

        // when no keys left
        if (stateIndex === stateKeys.length) {
            buffer += space && !stateEmpty
                ? `\n${space.repeat(visited.length - 1)}}`
                : '}';

            popState();
            return;
        }

        const key = stateKeys[stateIndex++];
        printEntry(key, stateValue[key]);
    }

    function printArray() {
        if (stateIndex === 0) {
            buffer += '[';
        }

        if (stateIndex === stateValue.length) {
            buffer += space && !stateEmpty
                ? `\n${space.repeat(visited.length - 1)}]`
                : ']';

            popState();
            return;
        }

        printEntry(stateIndex, stateValue[stateIndex++]);
    }

    function printEntryPrelude(key) {
        if (stateEmpty) {
            stateEmpty = false;
        } else {
            buffer += ',';
        }

        if (space && prevState !== null) {
            buffer += `\n${space.repeat(visited.length)}`;
        }

        if (state === printObject) {
            let keyString = keyStrings.get(key);

            if (keyString === undefined) {
                keyStrings.set(key, keyString = encodeString(key) + (space ? ': ' : ':'));
            }

            buffer += keyString;
        }
    }

    function printEntry(key, value) {
        value = utils.replaceValue(stateValue, key, value, replacer);

        if (value === null || typeof value !== 'object') {
            // primitive
            if (state !== printObject || value !== undefined) {
                printEntryPrelude(key);
                pushPrimitive(value);
            }
        } else {
            // If the visited set does not change after adding a value, then it is already in the set
            if (visited.includes(value)) {
                throw new TypeError('Converting circular structure to JSON');
            }

            printEntryPrelude(key);
            visited.push(value);

            pushState();
            state = Array.isArray(value) ? printArray : printObject;
            stateValue = value;
            stateEmpty = true;
            stateIndex = 0;
        }
    }

    function pushPrimitive(value) {
        switch (typeof value) {
            case 'string':
                buffer += encodeString(value);
                break;

            case 'number':
                buffer += Number.isFinite(value) ? String(value) : 'null';
                break;

            case 'boolean':
                buffer += value ? 'true' : 'false';
                break;

            case 'undefined':
            case 'object': // typeof null === 'object'
                buffer += 'null';
                break;

            default:
                throw new TypeError(`Do not know how to serialize a ${value.constructor?.name || typeof value}`);
        }
    }

    function pushState() {
        prevState = {
            keys: stateKeys,
            index: stateIndex,
            prev: prevState
        };
    }

    function popState() {
        visited.pop();
        const value = visited.length > 0 ? visited[visited.length - 1] : rootValue;

        // restore state
        state = Array.isArray(value) ? printArray : printObject;
        stateValue = value;
        stateEmpty = false;
        stateKeys = prevState.keys;
        stateIndex = prevState.index;

        // pop state
        prevState = prevState.prev;
    }
}

exports.stringifyChunked = stringifyChunked;
