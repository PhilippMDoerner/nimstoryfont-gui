/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { makePropDecorator } from '../util/decorators';
// Stores the default value of `emitDistinctChangesOnly` when the `emitDistinctChangesOnly` is not
// explicitly set.
export const emitDistinctChangesOnlyDefaultValue = true;
/**
 * Base class for query metadata.
 *
 * @see {@link ContentChildren}
 * @see {@link ContentChild}
 * @see {@link ViewChildren}
 * @see {@link ViewChild}
 *
 * @publicApi
 */
export class Query {
}
/**
 * ContentChildren decorator and metadata.
 *
 *
 * @Annotation
 * @publicApi
 */
export const ContentChildren = makePropDecorator('ContentChildren', (selector, opts = {}) => ({
    selector,
    first: false,
    isViewQuery: false,
    descendants: false,
    emitDistinctChangesOnly: emitDistinctChangesOnlyDefaultValue,
    ...opts,
}), Query);
/**
 * ContentChild decorator and metadata.
 *
 *
 * @Annotation
 *
 * @publicApi
 */
export const ContentChild = makePropDecorator('ContentChild', (selector, opts = {}) => ({
    selector,
    first: true,
    isViewQuery: false,
    descendants: true,
    ...opts,
}), Query);
/**
 * ViewChildren decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const ViewChildren = makePropDecorator('ViewChildren', (selector, opts = {}) => ({
    selector,
    first: false,
    isViewQuery: true,
    descendants: true,
    emitDistinctChangesOnly: emitDistinctChangesOnlyDefaultValue,
    ...opts,
}), Query);
/**
 * ViewChild decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const ViewChild = makePropDecorator('ViewChild', (selector, opts) => ({
    selector,
    first: true,
    isViewQuery: true,
    descendants: true,
    ...opts,
}), Query);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQXdFckQsa0dBQWtHO0FBQ2xHLGtCQUFrQjtBQUNsQixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBRyxJQUFJLENBQUM7QUFFeEQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFnQixLQUFLO0NBQUc7QUE2RjlCOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBNkIsaUJBQWlCLENBQ3hFLGlCQUFpQixFQUNqQixDQUFDLFFBQWMsRUFBRSxPQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxRQUFRO0lBQ1IsS0FBSyxFQUFFLEtBQUs7SUFDWixXQUFXLEVBQUUsS0FBSztJQUNsQixXQUFXLEVBQUUsS0FBSztJQUNsQix1QkFBdUIsRUFBRSxtQ0FBbUM7SUFDNUQsR0FBRyxJQUFJO0NBQ1IsQ0FBQyxFQUNGLEtBQUssQ0FDTixDQUFDO0FBb0ZGOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQTBCLGlCQUFpQixDQUNsRSxjQUFjLEVBQ2QsQ0FBQyxRQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsUUFBUTtJQUNSLEtBQUssRUFBRSxJQUFJO0lBQ1gsV0FBVyxFQUFFLEtBQUs7SUFDbEIsV0FBVyxFQUFFLElBQUk7SUFDakIsR0FBRyxJQUFJO0NBQ1IsQ0FBQyxFQUNGLEtBQUssQ0FDTixDQUFDO0FBOEVGOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUEwQixpQkFBaUIsQ0FDbEUsY0FBYyxFQUNkLENBQUMsUUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLFFBQVE7SUFDUixLQUFLLEVBQUUsS0FBSztJQUNaLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLHVCQUF1QixFQUFFLG1DQUFtQztJQUM1RCxHQUFHLElBQUk7Q0FDUixDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFnRkY7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQXVCLGlCQUFpQixDQUM1RCxXQUFXLEVBQ1gsQ0FBQyxRQUFhLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLFFBQVE7SUFDUixLQUFLLEVBQUUsSUFBSTtJQUNYLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLEdBQUcsSUFBSTtDQUNSLENBQUMsRUFDRixLQUFLLENBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQcm92aWRlclRva2VufSBmcm9tICcuLi9kaS9wcm92aWRlcl90b2tlbic7XG5pbXBvcnQge21ha2VQcm9wRGVjb3JhdG9yfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIGBBdHRyaWJ1dGVgIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoYXQgYSBjb25zdGFudCBhdHRyaWJ1dGUgdmFsdWUgc2hvdWxkIGJlIGluamVjdGVkLlxuICAgKlxuICAgKiBUaGUgZGlyZWN0aXZlIGNhbiBpbmplY3QgY29uc3RhbnQgc3RyaW5nIGxpdGVyYWxzIG9mIGhvc3QgZWxlbWVudCBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiBTdXBwb3NlIHdlIGhhdmUgYW4gYDxpbnB1dD5gIGVsZW1lbnQgYW5kIHdhbnQgdG8ga25vdyBpdHMgYHR5cGVgLlxuICAgKlxuICAgKiBgYGBodG1sXG4gICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgKiBgYGBcbiAgICpcbiAgICogQSBkZWNvcmF0b3IgY2FuIGluamVjdCBzdHJpbmcgbGl0ZXJhbCBgdGV4dGAgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS90cy9tZXRhZGF0YS9tZXRhZGF0YS50cyByZWdpb249J2F0dHJpYnV0ZU1ldGFkYXRhJ31cbiAgICpcbiAgICogQHB1YmxpY0FwaVxuICAgKi9cbiAgKG5hbWU6IHN0cmluZyk6IGFueTtcbiAgbmV3IChuYW1lOiBzdHJpbmcpOiBBdHRyaWJ1dGU7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQXR0cmlidXRlIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBiZSBpbmplY3RlZCBpbnRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGF0dHJpYnV0ZU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgUXVlcnkgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgZGVzY2VuZGFudHM6IGJvb2xlYW47XG4gIGVtaXREaXN0aW5jdENoYW5nZXNPbmx5OiBib29sZWFuO1xuICBmaXJzdDogYm9vbGVhbjtcbiAgcmVhZDogYW55O1xuICBpc1ZpZXdRdWVyeTogYm9vbGVhbjtcbiAgc2VsZWN0b3I6IGFueTtcbiAgc3RhdGljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIFdoZXRoZXIgdGhlIHF1ZXJ5IGlzIGEgc2lnbmFsIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIG9wdGlvbiBleGlzdHMgZm9yIEpJVCBjb21wYXRpYmlsaXR5LiBVc2VycyBhcmUgbm90IGV4cGVjdGVkIHRvIHVzZSB0aGlzLlxuICAgKiBBbmd1bGFyIG5lZWRzIGEgd2F5IHRvIGNhcHR1cmUgcXVlcmllcyBmcm9tIGNsYXNzZXMgc28gdGhhdCB0aGUgaW50ZXJuYWwgcXVlcnlcbiAgICogZnVuY3Rpb25zIGNhbiBiZSBnZW5lcmF0ZWQuIFRoaXMgbmVlZHMgdG8gaGFwcGVuIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZC5cbiAgICogRHVlIHRvIHRoaXMsIGZvciBKSVQgY29tcGlsYXRpb24sIHNpZ25hbCBxdWVyaWVzIG5lZWQgYW4gYWRkaXRpb25hbCBkZWNvcmF0b3JcbiAgICogZGVjbGFyaW5nIHRoZSBxdWVyeS4gQW5ndWxhciBwcm92aWRlcyBhIFRTIHRyYW5zZm9ybWVyIHRvIGF1dG9tYXRpY2FsbHkgaGFuZGxlIHRoaXNcbiAgICogZm9yIEpJVCB1c2FnZSAoZS5nLiBpbiB0ZXN0cykuXG4gICAqL1xuICBpc1NpZ25hbD86IGJvb2xlYW47XG59XG5cbi8vIFN0b3JlcyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHlgIHdoZW4gdGhlIGBlbWl0RGlzdGluY3RDaGFuZ2VzT25seWAgaXMgbm90XG4vLyBleHBsaWNpdGx5IHNldC5cbmV4cG9ydCBjb25zdCBlbWl0RGlzdGluY3RDaGFuZ2VzT25seURlZmF1bHRWYWx1ZSA9IHRydWU7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgcXVlcnkgbWV0YWRhdGEuXG4gKlxuICogQHNlZSB7QGxpbmsgQ29udGVudENoaWxkcmVufVxuICogQHNlZSB7QGxpbmsgQ29udGVudENoaWxkfVxuICogQHNlZSB7QGxpbmsgVmlld0NoaWxkcmVufVxuICogQHNlZSB7QGxpbmsgVmlld0NoaWxkfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFF1ZXJ5IHt9XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQ29udGVudENoaWxkcmVuIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBzZWUge0BsaW5rIENvbnRlbnRDaGlsZHJlbn1cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBgUXVlcnlMaXN0YCBvZiBlbGVtZW50cyBvciBkaXJlY3RpdmVzIGZyb20gdGhlIGNvbnRlbnQgRE9NLlxuICAgKiBBbnkgdGltZSBhIGNoaWxkIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCB0aGUgcXVlcnkgbGlzdCB3aWxsIGJlXG4gICAqIHVwZGF0ZWQsIGFuZCB0aGUgY2hhbmdlcyBvYnNlcnZhYmxlIG9mIHRoZSBxdWVyeSBsaXN0IHdpbGwgZW1pdCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogQ29udGVudCBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlckNvbnRlbnRJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqIERvZXMgbm90IHJldHJpZXZlIGVsZW1lbnRzIG9yIGRpcmVjdGl2ZXMgdGhhdCBhcmUgaW4gb3RoZXIgY29tcG9uZW50cycgdGVtcGxhdGVzLFxuICAgKiBzaW5jZSBhIGNvbXBvbmVudCdzIHRlbXBsYXRlIGlzIGFsd2F5cyBhIGJsYWNrIGJveCB0byBpdHMgYW5jZXN0b3JzLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipkZXNjZW5kYW50cyoqIC0gSWYgYHRydWVgIGluY2x1ZGUgYWxsIGRlc2NlbmRhbnRzIG9mIHRoZSBlbGVtZW50LiBJZiBgZmFsc2VgIHRoZW4gb25seVxuICAgKiBxdWVyeSBkaXJlY3QgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQuXG4gICAqICogKiplbWl0RGlzdGluY3RDaGFuZ2VzT25seSoqIC0gVGhlIGAgUXVlcnlMaXN0I2NoYW5nZXNgIG9ic2VydmFibGUgd2lsbCBlbWl0IG5ldyB2YWx1ZXMgb25seVxuICAgKiAgIGlmIHRoZSBRdWVyeUxpc3QgcmVzdWx0IGhhcyBjaGFuZ2VkLiBXaGVuIGBmYWxzZWAgdGhlIGBjaGFuZ2VzYCBvYnNlcnZhYmxlIG1pZ2h0IGVtaXQgZXZlblxuICAgKiAgIGlmIHRoZSBRdWVyeUxpc3QgaGFzIG5vdCBjaGFuZ2VkLlxuICAgKiAgICoqIE5vdGU6ICoqKiBUaGlzIGNvbmZpZyBvcHRpb24gaXMgKipkZXByZWNhdGVkKiosIGl0IHdpbGwgYmUgcGVybWFuZW50bHkgc2V0IHRvIGB0cnVlYCBhbmRcbiAgICogICByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBBbmd1bGFyLlxuICAgKiAqICoqcmVhZCoqIC0gVXNlZCB0byByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSBzdXBwb3J0ZWQuXG4gICAqICAgKiBBbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIEEgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlIGFzIGEgc3RyaW5nIChlLmcuIHF1ZXJ5IGA8bXktY29tcG9uZW50ICNjbXA+PC9teS1jb21wb25lbnQ+YFxuICAgKiB3aXRoIGBAQ29udGVudENoaWxkcmVuKCdjbXAnKWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCBpbiB0aGUgY2hpbGQgY29tcG9uZW50IHRyZWUgb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50IChlLmcuXG4gICAqIGBAQ29udGVudENoaWxkcmVuKFNvbWVTZXJ2aWNlKSBzb21lU2VydmljZTogU29tZVNlcnZpY2VgKVxuICAgKiAgICogQW55IHByb3ZpZGVyIGRlZmluZWQgdGhyb3VnaCBhIHN0cmluZyB0b2tlbiAoZS5nLiBgQENvbnRlbnRDaGlsZHJlbignc29tZVRva2VuJylcbiAgICogc29tZVRva2VuVmFsOiBhbnlgKVxuICAgKiAgICogQSBgVGVtcGxhdGVSZWZgIChlLmcuIHF1ZXJ5IGA8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT5gIHdpdGhcbiAgICogYEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIHRlbXBsYXRlO2ApXG4gICAqXG4gICAqIEluIGFkZGl0aW9uLCBtdWx0aXBsZSBzdHJpbmcgc2VsZWN0b3JzIGNhbiBiZSBzZXBhcmF0ZWQgd2l0aCBhIGNvbW1hIChlLmcuXG4gICAqIGBAQ29udGVudENoaWxkcmVuKCdjbXAxLGNtcDInKWApXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgdmFsdWVzIGFyZSBzdXBwb3J0ZWQgYnkgYHJlYWRgOlxuICAgKiAgICogQW55IGNsYXNzIHdpdGggdGhlIGBAQ29tcG9uZW50YCBvciBgQERpcmVjdGl2ZWAgZGVjb3JhdG9yXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCBvbiB0aGUgaW5qZWN0b3Igb2YgdGhlIGNvbXBvbmVudCB0aGF0IGlzIG1hdGNoZWQgYnkgdGhlIGBzZWxlY3RvcmAgb2ZcbiAgICogdGhpcyBxdWVyeVxuICAgKiAgICogQW55IHByb3ZpZGVyIGRlZmluZWQgdGhyb3VnaCBhIHN0cmluZyB0b2tlbiAoZS5nLiBge3Byb3ZpZGU6ICd0b2tlbicsIHVzZVZhbHVlOiAndmFsJ31gKVxuICAgKiAgICogYFRlbXBsYXRlUmVmYCwgYEVsZW1lbnRSZWZgLCBhbmQgYFZpZXdDb250YWluZXJSZWZgXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzaW1wbGUgZGVtb25zdHJhdGlvbiBvZiBob3cgdGhlIGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvciBjYW4gYmUgdXNlZC5cbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvY29udGVudENoaWxkcmVuL2NvbnRlbnRfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBUYWItcGFuZSBleGFtcGxlXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzbGlnaHRseSBtb3JlIHJlYWxpc3RpYyBleGFtcGxlIHRoYXQgc2hvd3MgaG93IGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvcnNcbiAgICogY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGEgdGFiIHBhbmUgY29tcG9uZW50LlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGRyZW4vY29udGVudF9jaGlsZHJlbl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChcbiAgICBzZWxlY3RvcjogUHJvdmlkZXJUb2tlbjx1bmtub3duPiB8IEZ1bmN0aW9uIHwgc3RyaW5nLFxuICAgIG9wdHM/OiB7XG4gICAgICBkZXNjZW5kYW50cz86IGJvb2xlYW47XG4gICAgICBlbWl0RGlzdGluY3RDaGFuZ2VzT25seT86IGJvb2xlYW47XG4gICAgICByZWFkPzogYW55O1xuICAgIH0sXG4gICk6IGFueTtcbiAgbmV3IChcbiAgICBzZWxlY3RvcjogUHJvdmlkZXJUb2tlbjx1bmtub3duPiB8IEZ1bmN0aW9uIHwgc3RyaW5nLFxuICAgIG9wdHM/OiB7ZGVzY2VuZGFudHM/OiBib29sZWFuOyBlbWl0RGlzdGluY3RDaGFuZ2VzT25seT86IGJvb2xlYW47IHJlYWQ/OiBhbnl9LFxuICApOiBRdWVyeTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gbWV0YWRhdGEuXG4gKlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQ29udGVudENoaWxkcmVuOiBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3IgPSBtYWtlUHJvcERlY29yYXRvcihcbiAgJ0NvbnRlbnRDaGlsZHJlbicsXG4gIChzZWxlY3Rvcj86IGFueSwgb3B0czogYW55ID0ge30pID0+ICh7XG4gICAgc2VsZWN0b3IsXG4gICAgZmlyc3Q6IGZhbHNlLFxuICAgIGlzVmlld1F1ZXJ5OiBmYWxzZSxcbiAgICBkZXNjZW5kYW50czogZmFsc2UsXG4gICAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk6IGVtaXREaXN0aW5jdENoYW5nZXNPbmx5RGVmYXVsdFZhbHVlLFxuICAgIC4uLm9wdHMsXG4gIH0pLFxuICBRdWVyeSxcbik7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQ29udGVudENoaWxkIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hpbGREZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IG9yIHRoZSBkaXJlY3RpdmUgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGNvbnRlbnQgRE9NLlxuICAgKiBJZiB0aGUgY29udGVudCBET00gY2hhbmdlcywgYW5kIGEgbmV3IGNoaWxkIG1hdGNoZXMgdGhlIHNlbGVjdG9yLFxuICAgKiB0aGUgcHJvcGVydHkgd2lsbCBiZSB1cGRhdGVkLlxuICAgKlxuICAgKiBEb2VzIG5vdCByZXRyaWV2ZSBlbGVtZW50cyBvciBkaXJlY3RpdmVzIHRoYXQgYXJlIGluIG90aGVyIGNvbXBvbmVudHMnIHRlbXBsYXRlcyxcbiAgICogc2luY2UgYSBjb21wb25lbnQncyB0ZW1wbGF0ZSBpcyBhbHdheXMgYSBibGFjayBib3ggdG8gaXRzIGFuY2VzdG9ycy5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gVGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqZGVzY2VuZGFudHMqKiAtIElmIGB0cnVlYCAoZGVmYXVsdCkgaW5jbHVkZSBhbGwgZGVzY2VuZGFudHMgb2YgdGhlIGVsZW1lbnQuIElmIGBmYWxzZWAgdGhlblxuICAgKiBvbmx5IHF1ZXJ5IGRpcmVjdCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudC5cbiAgICogKiAqKnJlYWQqKiAtIFVzZWQgdG8gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnQuXG4gICAqICogKipzdGF0aWMqKiAtIFRydWUgdG8gcmVzb2x2ZSBxdWVyeSByZXN1bHRzIGJlZm9yZSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMsXG4gICAqIGZhbHNlIHRvIHJlc29sdmUgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSBzdXBwb3J0ZWQuXG4gICAqICAgKiBBbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIEEgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlIGFzIGEgc3RyaW5nIChlLmcuIHF1ZXJ5IGA8bXktY29tcG9uZW50ICNjbXA+PC9teS1jb21wb25lbnQ+YFxuICAgKiB3aXRoIGBAQ29udGVudENoaWxkKCdjbXAnKWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCBpbiB0aGUgY2hpbGQgY29tcG9uZW50IHRyZWUgb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50IChlLmcuXG4gICAqIGBAQ29udGVudENoaWxkKFNvbWVTZXJ2aWNlKSBzb21lU2VydmljZTogU29tZVNlcnZpY2VgKVxuICAgKiAgICogQW55IHByb3ZpZGVyIGRlZmluZWQgdGhyb3VnaCBhIHN0cmluZyB0b2tlbiAoZS5nLiBgQENvbnRlbnRDaGlsZCgnc29tZVRva2VuJykgc29tZVRva2VuVmFsOlxuICAgKiBhbnlgKVxuICAgKiAgICogQSBgVGVtcGxhdGVSZWZgIChlLmcuIHF1ZXJ5IGA8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT5gIHdpdGggYEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXG4gICAqIHRlbXBsYXRlO2ApXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgdmFsdWVzIGFyZSBzdXBwb3J0ZWQgYnkgYHJlYWRgOlxuICAgKiAgICogQW55IGNsYXNzIHdpdGggdGhlIGBAQ29tcG9uZW50YCBvciBgQERpcmVjdGl2ZWAgZGVjb3JhdG9yXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCBvbiB0aGUgaW5qZWN0b3Igb2YgdGhlIGNvbXBvbmVudCB0aGF0IGlzIG1hdGNoZWQgYnkgdGhlIGBzZWxlY3RvcmAgb2ZcbiAgICogdGhpcyBxdWVyeVxuICAgKiAgICogQW55IHByb3ZpZGVyIGRlZmluZWQgdGhyb3VnaCBhIHN0cmluZyB0b2tlbiAoZS5nLiBge3Byb3ZpZGU6ICd0b2tlbicsIHVzZVZhbHVlOiAndmFsJ31gKVxuICAgKiAgICogYFRlbXBsYXRlUmVmYCwgYEVsZW1lbnRSZWZgLCBhbmQgYFZpZXdDb250YWluZXJSZWZgXG4gICAqXG4gICAqIERpZmZlcmVuY2UgYmV0d2VlbiBkeW5hbWljIGFuZCBzdGF0aWMgcXVlcmllczpcbiAgICpcbiAgICogfCBRdWVyaWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERldGFpbHMgfFxuICAgKiB8Oi0tLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw6LS0tICAgICB8XG4gICAqIHwgRHluYW1pYyBxdWVyaWVzIFxcKGBzdGF0aWM6IGZhbHNlYFxcKSB8IFRoZSBxdWVyeSByZXNvbHZlcyBiZWZvcmUgdGhlIGBuZ0FmdGVyQ29udGVudEluaXQoKWBcbiAgICogY2FsbGJhY2sgaXMgY2FsbGVkLiBUaGUgcmVzdWx0IHdpbGwgYmUgdXBkYXRlZCBmb3IgY2hhbmdlcyB0byB5b3VyIHZpZXcsIHN1Y2ggYXMgY2hhbmdlcyB0b1xuICAgKiBgbmdJZmAgYW5kIGBuZ0ZvcmAgYmxvY2tzLiB8IHwgU3RhdGljIHF1ZXJpZXMgXFwoYHN0YXRpYzogdHJ1ZWBcXCkgICB8IFRoZSBxdWVyeSByZXNvbHZlcyBvbmNlXG4gICAqIHRoZSB2aWV3IGhhcyBiZWVuIGNyZWF0ZWQsIGJ1dCBiZWZvcmUgY2hhbmdlIGRldGVjdGlvbiBydW5zIChiZWZvcmUgdGhlIGBuZ09uSW5pdCgpYCBjYWxsYmFja1xuICAgKiBpcyBjYWxsZWQpLiBUaGUgcmVzdWx0LCB0aG91Z2gsIHdpbGwgbmV2ZXIgYmUgdXBkYXRlZCB0byByZWZsZWN0IGNoYW5nZXMgdG8geW91ciB2aWV3LCBzdWNoIGFzXG4gICAqIGNoYW5nZXMgdG8gYG5nSWZgIGFuZCBgbmdGb3JgIGJsb2Nrcy4gIHxcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvY29udGVudENoaWxkL2NvbnRlbnRfY2hpbGRfaG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZC9jb250ZW50X2NoaWxkX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKFxuICAgIHNlbGVjdG9yOiBQcm92aWRlclRva2VuPHVua25vd24+IHwgRnVuY3Rpb24gfCBzdHJpbmcsXG4gICAgb3B0cz86IHtkZXNjZW5kYW50cz86IGJvb2xlYW47IHJlYWQ/OiBhbnk7IHN0YXRpYz86IGJvb2xlYW59LFxuICApOiBhbnk7XG4gIG5ldyAoXG4gICAgc2VsZWN0b3I6IFByb3ZpZGVyVG9rZW48dW5rbm93bj4gfCBGdW5jdGlvbiB8IHN0cmluZyxcbiAgICBvcHRzPzoge2Rlc2NlbmRhbnRzPzogYm9vbGVhbjsgcmVhZD86IGFueTsgc3RhdGljPzogYm9vbGVhbn0sXG4gICk6IENvbnRlbnRDaGlsZDtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGQgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBDb250ZW50Q2hpbGQgPSBRdWVyeTtcblxuLyoqXG4gKiBDb250ZW50Q2hpbGQgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKlxuICogQEFubm90YXRpb25cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBDb250ZW50Q2hpbGQ6IENvbnRlbnRDaGlsZERlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAnQ29udGVudENoaWxkJyxcbiAgKHNlbGVjdG9yPzogYW55LCBvcHRzOiBhbnkgPSB7fSkgPT4gKHtcbiAgICBzZWxlY3RvcixcbiAgICBmaXJzdDogdHJ1ZSxcbiAgICBpc1ZpZXdRdWVyeTogZmFsc2UsXG4gICAgZGVzY2VuZGFudHM6IHRydWUsXG4gICAgLi4ub3B0cyxcbiAgfSksXG4gIFF1ZXJ5LFxuKTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSB7QGxpbmsgVmlld0NoaWxkcmVufVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3Q2hpbGRyZW5EZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSB2aWV3IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBgUXVlcnlMaXN0YCBvZiBlbGVtZW50cyBvciBkaXJlY3RpdmVzIGZyb20gdGhlIHZpZXcgRE9NLlxuICAgKiBBbnkgdGltZSBhIGNoaWxkIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCB0aGUgcXVlcnkgbGlzdCB3aWxsIGJlIHVwZGF0ZWQsXG4gICAqIGFuZCB0aGUgY2hhbmdlcyBvYnNlcnZhYmxlIG9mIHRoZSBxdWVyeSBsaXN0IHdpbGwgZW1pdCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogVmlldyBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlclZpZXdJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqICoqTWV0YWRhdGEgUHJvcGVydGllcyoqOlxuICAgKlxuICAgKiAqICoqc2VsZWN0b3IqKiAtIFRoZSBkaXJlY3RpdmUgdHlwZSBvciB0aGUgbmFtZSB1c2VkIGZvciBxdWVyeWluZy5cbiAgICogKiAqKnJlYWQqKiAtIFVzZWQgdG8gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnRzLlxuICAgKiAqICoqZW1pdERpc3RpbmN0Q2hhbmdlc09ubHkqKiAtIFRoZSBgIFF1ZXJ5TGlzdCNjaGFuZ2VzYCBvYnNlcnZhYmxlIHdpbGwgZW1pdCBuZXcgdmFsdWVzIG9ubHlcbiAgICogICBpZiB0aGUgUXVlcnlMaXN0IHJlc3VsdCBoYXMgY2hhbmdlZC4gV2hlbiBgZmFsc2VgIHRoZSBgY2hhbmdlc2Agb2JzZXJ2YWJsZSBtaWdodCBlbWl0IGV2ZW5cbiAgICogICBpZiB0aGUgUXVlcnlMaXN0IGhhcyBub3QgY2hhbmdlZC5cbiAgICogICAqKiBOb3RlOiAqKiogVGhpcyBjb25maWcgb3B0aW9uIGlzICoqZGVwcmVjYXRlZCoqLCBpdCB3aWxsIGJlIHBlcm1hbmVudGx5IHNldCB0byBgdHJ1ZWAgYW5kXG4gICAqIHJlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIEFuZ3VsYXIuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSBzdXBwb3J0ZWQuXG4gICAqICAgKiBBbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIEEgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlIGFzIGEgc3RyaW5nIChlLmcuIHF1ZXJ5IGA8bXktY29tcG9uZW50ICNjbXA+PC9teS1jb21wb25lbnQ+YFxuICAgKiB3aXRoIGBAVmlld0NoaWxkcmVuKCdjbXAnKWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCBpbiB0aGUgY2hpbGQgY29tcG9uZW50IHRyZWUgb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50IChlLmcuXG4gICAqIGBAVmlld0NoaWxkcmVuKFNvbWVTZXJ2aWNlKSBzb21lU2VydmljZSE6IFNvbWVTZXJ2aWNlYClcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIHRocm91Z2ggYSBzdHJpbmcgdG9rZW4gKGUuZy4gYEBWaWV3Q2hpbGRyZW4oJ3NvbWVUb2tlbicpXG4gICAqIHNvbWVUb2tlblZhbCE6IGFueWApXG4gICAqICAgKiBBIGBUZW1wbGF0ZVJlZmAgKGUuZy4gcXVlcnkgYDxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPmAgd2l0aCBgQFZpZXdDaGlsZHJlbihUZW1wbGF0ZVJlZilcbiAgICogdGVtcGxhdGU7YClcbiAgICpcbiAgICogSW4gYWRkaXRpb24sIG11bHRpcGxlIHN0cmluZyBzZWxlY3RvcnMgY2FuIGJlIHNlcGFyYXRlZCB3aXRoIGEgY29tbWEgKGUuZy5cbiAgICogYEBWaWV3Q2hpbGRyZW4oJ2NtcDEsY21wMicpYClcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIHN1cHBvcnRlZCBieSBgcmVhZGA6XG4gICAqICAgKiBBbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIG9uIHRoZSBpbmplY3RvciBvZiB0aGUgY29tcG9uZW50IHRoYXQgaXMgbWF0Y2hlZCBieSB0aGUgYHNlbGVjdG9yYCBvZlxuICAgKiB0aGlzIHF1ZXJ5XG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGB7cHJvdmlkZTogJ3Rva2VuJywgdXNlVmFsdWU6ICd2YWwnfWApXG4gICAqICAgKiBgVGVtcGxhdGVSZWZgLCBgRWxlbWVudFJlZmAsIGFuZCBgVmlld0NvbnRhaW5lclJlZmBcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkcmVuL3ZpZXdfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBBbm90aGVyIGV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkcmVuL3ZpZXdfY2hpbGRyZW5fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoXG4gICAgc2VsZWN0b3I6IFByb3ZpZGVyVG9rZW48dW5rbm93bj4gfCBGdW5jdGlvbiB8IHN0cmluZyxcbiAgICBvcHRzPzoge3JlYWQ/OiBhbnk7IGVtaXREaXN0aW5jdENoYW5nZXNPbmx5PzogYm9vbGVhbn0sXG4gICk6IGFueTtcbiAgbmV3IChcbiAgICBzZWxlY3RvcjogUHJvdmlkZXJUb2tlbjx1bmtub3duPiB8IEZ1bmN0aW9uIHwgc3RyaW5nLFxuICAgIG9wdHM/OiB7cmVhZD86IGFueTsgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk/OiBib29sZWFufSxcbiAgKTogVmlld0NoaWxkcmVuO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZHJlbiBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIFZpZXdDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIFZpZXdDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBWaWV3Q2hpbGRyZW46IFZpZXdDaGlsZHJlbkRlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAnVmlld0NoaWxkcmVuJyxcbiAgKHNlbGVjdG9yPzogYW55LCBvcHRzOiBhbnkgPSB7fSkgPT4gKHtcbiAgICBzZWxlY3RvcixcbiAgICBmaXJzdDogZmFsc2UsXG4gICAgaXNWaWV3UXVlcnk6IHRydWUsXG4gICAgZGVzY2VuZGFudHM6IHRydWUsXG4gICAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk6IGVtaXREaXN0aW5jdENoYW5nZXNPbmx5RGVmYXVsdFZhbHVlLFxuICAgIC4uLm9wdHMsXG4gIH0pLFxuICBRdWVyeSxcbik7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgVmlld0NoaWxkIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBzZWUge0BsaW5rIFZpZXdDaGlsZH1cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3Q2hpbGREZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSB2aWV3IHF1ZXJ5LlxuICAgKiBUaGUgY2hhbmdlIGRldGVjdG9yIGxvb2tzIGZvciB0aGUgZmlyc3QgZWxlbWVudCBvciB0aGUgZGlyZWN0aXZlIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKiBpbiB0aGUgdmlldyBET00uIElmIHRoZSB2aWV3IERPTSBjaGFuZ2VzLCBhbmQgYSBuZXcgY2hpbGQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyB1cGRhdGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipyZWFkKiogLSBVc2VkIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICogKiAqKnN0YXRpYyoqIC0gYHRydWVgIHRvIHJlc29sdmUgcXVlcnkgcmVzdWx0cyBiZWZvcmUgY2hhbmdlIGRldGVjdGlvbiBydW5zLFxuICAgKiBgZmFsc2VgIHRvIHJlc29sdmUgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbi4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICpcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBzZWxlY3RvcnMgYXJlIHN1cHBvcnRlZC5cbiAgICogICAqIEFueSBjbGFzcyB3aXRoIHRoZSBgQENvbXBvbmVudGAgb3IgYEBEaXJlY3RpdmVgIGRlY29yYXRvclxuICAgKiAgICogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGUgYXMgYSBzdHJpbmcgKGUuZy4gcXVlcnkgYDxteS1jb21wb25lbnQgI2NtcD48L215LWNvbXBvbmVudD5gXG4gICAqIHdpdGggYEBWaWV3Q2hpbGQoJ2NtcCcpYClcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIGluIHRoZSBjaGlsZCBjb21wb25lbnQgdHJlZSBvZiB0aGUgY3VycmVudCBjb21wb25lbnQgKGUuZy5cbiAgICogYEBWaWV3Q2hpbGQoU29tZVNlcnZpY2UpIHNvbWVTZXJ2aWNlOiBTb21lU2VydmljZWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGBAVmlld0NoaWxkKCdzb21lVG9rZW4nKSBzb21lVG9rZW5WYWw6XG4gICAqIGFueWApXG4gICAqICAgKiBBIGBUZW1wbGF0ZVJlZmAgKGUuZy4gcXVlcnkgYDxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPmAgd2l0aCBgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcbiAgICogdGVtcGxhdGU7YClcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIHN1cHBvcnRlZCBieSBgcmVhZGA6XG4gICAqICAgKiBBbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIG9uIHRoZSBpbmplY3RvciBvZiB0aGUgY29tcG9uZW50IHRoYXQgaXMgbWF0Y2hlZCBieSB0aGUgYHNlbGVjdG9yYCBvZlxuICAgKiB0aGlzIHF1ZXJ5XG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGB7cHJvdmlkZTogJ3Rva2VuJywgdXNlVmFsdWU6ICd2YWwnfWApXG4gICAqICAgKiBgVGVtcGxhdGVSZWZgLCBgRWxlbWVudFJlZmAsIGFuZCBgVmlld0NvbnRhaW5lclJlZmBcbiAgICpcbiAgICogRGlmZmVyZW5jZSBiZXR3ZWVuIGR5bmFtaWMgYW5kIHN0YXRpYyBxdWVyaWVzOlxuICAgKiAgICogRHluYW1pYyBxdWVyaWVzIFxcKGBzdGF0aWM6IGZhbHNlYFxcKSAtIFRoZSBxdWVyeSByZXNvbHZlcyBiZWZvcmUgdGhlIGBuZ0FmdGVyVmlld0luaXQoKWBcbiAgICogY2FsbGJhY2sgaXMgY2FsbGVkLiBUaGUgcmVzdWx0IHdpbGwgYmUgdXBkYXRlZCBmb3IgY2hhbmdlcyB0byB5b3VyIHZpZXcsIHN1Y2ggYXMgY2hhbmdlcyB0b1xuICAgKiBgbmdJZmAgYW5kIGBuZ0ZvcmAgYmxvY2tzLlxuICAgKiAgICogU3RhdGljIHF1ZXJpZXMgXFwoYHN0YXRpYzogdHJ1ZWBcXCkgLSBUaGUgcXVlcnkgcmVzb2x2ZXMgb25jZVxuICAgKiB0aGUgdmlldyBoYXMgYmVlbiBjcmVhdGVkLCBidXQgYmVmb3JlIGNoYW5nZSBkZXRlY3Rpb24gcnVucyAoYmVmb3JlIHRoZSBgbmdPbkluaXQoKWAgY2FsbGJhY2tcbiAgICogaXMgY2FsbGVkKS4gVGhlIHJlc3VsdCwgdGhvdWdoLCB3aWxsIG5ldmVyIGJlIHVwZGF0ZWQgdG8gcmVmbGVjdCBjaGFuZ2VzIHRvIHlvdXIgdmlldywgc3VjaCBhc1xuICAgKiBjaGFuZ2VzIHRvIGBuZ0lmYCBhbmQgYG5nRm9yYCBibG9ja3MuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqICMjIyBFeGFtcGxlIDFcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIDJcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfaG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoXG4gICAgc2VsZWN0b3I6IFByb3ZpZGVyVG9rZW48dW5rbm93bj4gfCBGdW5jdGlvbiB8IHN0cmluZyxcbiAgICBvcHRzPzoge3JlYWQ/OiBhbnk7IHN0YXRpYz86IGJvb2xlYW59LFxuICApOiBhbnk7XG4gIG5ldyAoXG4gICAgc2VsZWN0b3I6IFByb3ZpZGVyVG9rZW48dW5rbm93bj4gfCBGdW5jdGlvbiB8IHN0cmluZyxcbiAgICBvcHRzPzoge3JlYWQ/OiBhbnk7IHN0YXRpYz86IGJvb2xlYW59LFxuICApOiBWaWV3Q2hpbGQ7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgVmlld0NoaWxkIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgVmlld0NoaWxkID0gUXVlcnk7XG5cbi8qKlxuICogVmlld0NoaWxkIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFZpZXdDaGlsZDogVmlld0NoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICdWaWV3Q2hpbGQnLFxuICAoc2VsZWN0b3I6IGFueSwgb3B0czogYW55KSA9PiAoe1xuICAgIHNlbGVjdG9yLFxuICAgIGZpcnN0OiB0cnVlLFxuICAgIGlzVmlld1F1ZXJ5OiB0cnVlLFxuICAgIGRlc2NlbmRhbnRzOiB0cnVlLFxuICAgIC4uLm9wdHMsXG4gIH0pLFxuICBRdWVyeSxcbik7XG4iXX0=