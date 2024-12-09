/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export var TagContentType;
(function (TagContentType) {
    TagContentType[TagContentType["RAW_TEXT"] = 0] = "RAW_TEXT";
    TagContentType[TagContentType["ESCAPABLE_RAW_TEXT"] = 1] = "ESCAPABLE_RAW_TEXT";
    TagContentType[TagContentType["PARSABLE_DATA"] = 2] = "PARSABLE_DATA";
})(TagContentType || (TagContentType = {}));
export function splitNsName(elementName, fatal = true) {
    if (elementName[0] != ':') {
        return [null, elementName];
    }
    const colonIndex = elementName.indexOf(':', 1);
    if (colonIndex === -1) {
        if (fatal) {
            throw new Error(`Unsupported format "${elementName}" expecting ":namespace:name"`);
        }
        else {
            return [null, elementName];
        }
    }
    return [elementName.slice(1, colonIndex), elementName.slice(colonIndex + 1)];
}
// `<ng-container>` tags work the same regardless the namespace
export function isNgContainer(tagName) {
    return splitNsName(tagName)[1] === 'ng-container';
}
// `<ng-content>` tags work the same regardless the namespace
export function isNgContent(tagName) {
    return splitNsName(tagName)[1] === 'ng-content';
}
// `<ng-template>` tags work the same regardless the namespace
export function isNgTemplate(tagName) {
    return splitNsName(tagName)[1] === 'ng-template';
}
export function getNsPrefix(fullName) {
    return fullName === null ? null : splitNsName(fullName)[0];
}
export function mergeNsAndName(prefix, localName) {
    return prefix ? `:${prefix}:${localName}` : localName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIvdGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxNQUFNLENBQU4sSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLDJEQUFRLENBQUE7SUFDUiwrRUFBa0IsQ0FBQTtJQUNsQixxRUFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBY0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxXQUFtQixFQUFFLFFBQWlCLElBQUk7SUFDcEUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0MsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsV0FBVywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFFRCwrREFBK0Q7QUFDL0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFlO0lBQzNDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsNkRBQTZEO0FBQzdELE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBZTtJQUN6QyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLENBQUM7QUFDbEQsQ0FBQztBQUVELDhEQUE4RDtBQUM5RCxNQUFNLFVBQVUsWUFBWSxDQUFDLE9BQWU7SUFDMUMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDO0FBQ25ELENBQUM7QUFJRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFFBQXVCO0lBQ2pELE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYyxFQUFFLFNBQWlCO0lBQzlELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmV4cG9ydCBlbnVtIFRhZ0NvbnRlbnRUeXBlIHtcbiAgUkFXX1RFWFQsXG4gIEVTQ0FQQUJMRV9SQVdfVEVYVCxcbiAgUEFSU0FCTEVfREFUQSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdEZWZpbml0aW9uIHtcbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW47XG4gIGltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiBzdHJpbmcgfCBudWxsO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbjtcbiAgcHJldmVudE5hbWVzcGFjZUluaGVyaXRhbmNlOiBib29sZWFuO1xuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICBnZXRDb250ZW50VHlwZShwcmVmaXg/OiBzdHJpbmcpOiBUYWdDb250ZW50VHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0TnNOYW1lKGVsZW1lbnROYW1lOiBzdHJpbmcsIGZhdGFsOiBib29sZWFuID0gdHJ1ZSk6IFtzdHJpbmcgfCBudWxsLCBzdHJpbmddIHtcbiAgaWYgKGVsZW1lbnROYW1lWzBdICE9ICc6Jykge1xuICAgIHJldHVybiBbbnVsbCwgZWxlbWVudE5hbWVdO1xuICB9XG5cbiAgY29uc3QgY29sb25JbmRleCA9IGVsZW1lbnROYW1lLmluZGV4T2YoJzonLCAxKTtcblxuICBpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcbiAgICBpZiAoZmF0YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZm9ybWF0IFwiJHtlbGVtZW50TmFtZX1cIiBleHBlY3RpbmcgXCI6bmFtZXNwYWNlOm5hbWVcImApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW251bGwsIGVsZW1lbnROYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2VsZW1lbnROYW1lLnNsaWNlKDEsIGNvbG9uSW5kZXgpLCBlbGVtZW50TmFtZS5zbGljZShjb2xvbkluZGV4ICsgMSldO1xufVxuXG4vLyBgPG5nLWNvbnRhaW5lcj5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGFpbmVyKHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09ICduZy1jb250YWluZXInO1xufVxuXG4vLyBgPG5nLWNvbnRlbnQ+YCB0YWdzIHdvcmsgdGhlIHNhbWUgcmVnYXJkbGVzcyB0aGUgbmFtZXNwYWNlXG5leHBvcnQgZnVuY3Rpb24gaXNOZ0NvbnRlbnQodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gJ25nLWNvbnRlbnQnO1xufVxuXG4vLyBgPG5nLXRlbXBsYXRlPmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdUZW1wbGF0ZSh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSAnbmctdGVtcGxhdGUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogbnVsbCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIGZ1bGxOYW1lID09PSBudWxsID8gbnVsbCA6IHNwbGl0TnNOYW1lKGZ1bGxOYW1lKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTnNBbmROYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwcmVmaXggPyBgOiR7cHJlZml4fToke2xvY2FsTmFtZX1gIDogbG9jYWxOYW1lO1xufVxuIl19