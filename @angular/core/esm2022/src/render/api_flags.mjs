/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * Flags for renderer-specific style modifiers.
 * @publicApi
 */
export var RendererStyleFlags2;
(function (RendererStyleFlags2) {
    // TODO(misko): This needs to be refactored into a separate file so that it can be imported from
    // `node_manipulation.ts` Currently doing the import cause resolution order to change and fails
    // the tests. The work around is to have hard coded value in `node_manipulation.ts` for now.
    /**
     * Marks a style as important.
     */
    RendererStyleFlags2[RendererStyleFlags2["Important"] = 1] = "Important";
    /**
     * Marks a style as using dash case naming (this-is-dash-case).
     */
    RendererStyleFlags2[RendererStyleFlags2["DashCase"] = 2] = "DashCase";
})(RendererStyleFlags2 || (RendererStyleFlags2 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpX2ZsYWdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyL2FwaV9mbGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFxQ0g7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksbUJBWVg7QUFaRCxXQUFZLG1CQUFtQjtJQUM3QixnR0FBZ0c7SUFDaEcsK0ZBQStGO0lBQy9GLDRGQUE0RjtJQUM1Rjs7T0FFRztJQUNILHVFQUFrQixDQUFBO0lBQ2xCOztPQUVHO0lBQ0gscUVBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFZOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4uL21ldGFkYXRhL3ZpZXcnO1xuXG4vKipcbiAqIFVzZWQgYnkgYFJlbmRlcmVyRmFjdG9yeTJgIHRvIGFzc29jaWF0ZSBjdXN0b20gcmVuZGVyaW5nIGRhdGEgYW5kIHN0eWxlc1xuICogd2l0aCBhIHJlbmRlcmluZyBpbXBsZW1lbnRhdGlvbi5cbiAqICBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyZXJUeXBlMiB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmeWluZyBzdHJpbmcgZm9yIHRoZSBuZXcgcmVuZGVyZXIsIHVzZWQgd2hlbiBjcmVhdGluZ1xuICAgKiB1bmlxdWUgc3R5bGVzIGZvciBlbmNhcHN1bGF0aW9uLlxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gdHlwZSwgd2hpY2ggZGV0ZXJtaW5lcyBob3cgc3R5bGVzIGFyZSBhcHBsaWVkIHRvXG4gICAqIERPTSBlbGVtZW50cy4gT25lIG9mXG4gICAqIC0gYEVtdWxhdGVkYCAoZGVmYXVsdCk6IEVtdWxhdGUgbmF0aXZlIHNjb3Bpbmcgb2Ygc3R5bGVzLlxuICAgKiAtIGBOYXRpdmVgOiBVc2UgdGhlIG5hdGl2ZSBlbmNhcHN1bGF0aW9uIG1lY2hhbmlzbSBvZiB0aGUgcmVuZGVyZXIuXG4gICAqIC0gYFNoYWRvd0RvbWA6IFVzZSBtb2Rlcm4gW1NoYWRvd1xuICAgKiBET01dKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvc2hhZG93LykgYW5kXG4gICAqIGNyZWF0ZSBhIFNoYWRvd1Jvb3QgZm9yIGNvbXBvbmVudCdzIGhvc3QgZWxlbWVudC5cbiAgICogLSBgTm9uZWA6IERvIG5vdCBwcm92aWRlIGFueSB0ZW1wbGF0ZSBvciBzdHlsZSBlbmNhcHN1bGF0aW9uLlxuICAgKi9cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb247XG4gIC8qKlxuICAgKiBEZWZpbmVzIENTUyBzdHlsZXMgdG8gYmUgc3RvcmVkIG9uIGEgcmVuZGVyZXIgaW5zdGFuY2UuXG4gICAqL1xuICBzdHlsZXM6IHN0cmluZ1tdO1xuICAvKipcbiAgICogRGVmaW5lcyBhcmJpdHJhcnkgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YSB0byBiZSBzdG9yZWQgb24gYSByZW5kZXJlciBpbnN0YW5jZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlbmRlcmVycyB0aGF0IGRlbGVnYXRlIHRvIG90aGVyIHJlbmRlcmVycy5cbiAgICovXG4gIGRhdGE6IHtba2luZDogc3RyaW5nXTogYW55fTtcbn1cblxuLyoqXG4gKiBGbGFncyBmb3IgcmVuZGVyZXItc3BlY2lmaWMgc3R5bGUgbW9kaWZpZXJzLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZW51bSBSZW5kZXJlclN0eWxlRmxhZ3MyIHtcbiAgLy8gVE9ETyhtaXNrbyk6IFRoaXMgbmVlZHMgdG8gYmUgcmVmYWN0b3JlZCBpbnRvIGEgc2VwYXJhdGUgZmlsZSBzbyB0aGF0IGl0IGNhbiBiZSBpbXBvcnRlZCBmcm9tXG4gIC8vIGBub2RlX21hbmlwdWxhdGlvbi50c2AgQ3VycmVudGx5IGRvaW5nIHRoZSBpbXBvcnQgY2F1c2UgcmVzb2x1dGlvbiBvcmRlciB0byBjaGFuZ2UgYW5kIGZhaWxzXG4gIC8vIHRoZSB0ZXN0cy4gVGhlIHdvcmsgYXJvdW5kIGlzIHRvIGhhdmUgaGFyZCBjb2RlZCB2YWx1ZSBpbiBgbm9kZV9tYW5pcHVsYXRpb24udHNgIGZvciBub3cuXG4gIC8qKlxuICAgKiBNYXJrcyBhIHN0eWxlIGFzIGltcG9ydGFudC5cbiAgICovXG4gIEltcG9ydGFudCA9IDEgPDwgMCxcbiAgLyoqXG4gICAqIE1hcmtzIGEgc3R5bGUgYXMgdXNpbmcgZGFzaCBjYXNlIG5hbWluZyAodGhpcy1pcy1kYXNoLWNhc2UpLlxuICAgKi9cbiAgRGFzaENhc2UgPSAxIDw8IDEsXG59XG4iXX0=