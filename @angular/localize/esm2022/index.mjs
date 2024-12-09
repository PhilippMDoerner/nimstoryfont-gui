/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
// DO NOT ADD public exports to this file.
// The public API exports are specified in the `./localize` module, which is checked by the
// public_api_guard rules
export * from './localize';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsMkZBQTJGO0FBQzNGLHlCQUF5QjtBQUV6QixjQUFjLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuLy8gRE8gTk9UIEFERCBwdWJsaWMgZXhwb3J0cyB0byB0aGlzIGZpbGUuXG4vLyBUaGUgcHVibGljIEFQSSBleHBvcnRzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIGAuL2xvY2FsaXplYCBtb2R1bGUsIHdoaWNoIGlzIGNoZWNrZWQgYnkgdGhlXG4vLyBwdWJsaWNfYXBpX2d1YXJkIHJ1bGVzXG5cbmV4cG9ydCAqIGZyb20gJy4vbG9jYWxpemUnO1xuXG4vLyBUaGUgZ2xvYmFsIGRlY2xhcmF0aW9uIG11c3QgYmUgaW4gdGhlIGluZGV4LmQudHMgYXMgb3RoZXJ3aXNlIGl0IHdpbGwgbm90IGJlIHBpY2tlZCB1cCB3aGVuIHVzZWRcbi8vIHdpdGhcbi8vIC8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiQGFuZ3VsYXIvbG9jYWxpemVcIiAvPlxuXG5pbXBvcnQge8m1TG9jYWxpemVGbn0gZnJvbSAnLi9sb2NhbGl6ZSc7XG5cbi8vIGBkZWNsYXJlIGdsb2JhbGAgYWxsb3dzIHVzIHRvIGVzY2FwZSB0aGUgY3VycmVudCBtb2R1bGUgYW5kIHBsYWNlIHR5cGVzIG9uIHRoZSBnbG9iYWwgbmFtZXNwYWNlXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8qKlxuICAgKiBUYWcgYSB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZyBmb3IgbG9jYWxpemF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogYGBgdHNcbiAgICogJGxvY2FsaXplIGBzb21lIHN0cmluZyB0byBsb2NhbGl6ZWBcbiAgICogYGBgXG4gICAqXG4gICAqICoqUHJvdmlkaW5nIG1lYW5pbmcsIGRlc2NyaXB0aW9uIGFuZCBpZCoqXG4gICAqXG4gICAqIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IG9uZSBvciBtb3JlIG9mIGBtZWFuaW5nYCwgYGRlc2NyaXB0aW9uYCBhbmQgYGlkYCBmb3IgYSBsb2NhbGl6ZWRcbiAgICogc3RyaW5nIGJ5IHByZS1wZW5kaW5nIGl0IHdpdGggYSBjb2xvbiBkZWxpbWl0ZWQgYmxvY2sgb2YgdGhlIGZvcm06XG4gICAqXG4gICAqIGBgYHRzXG4gICAqICRsb2NhbGl6ZWA6bWVhbmluZ3xkZXNjcmlwdGlvbkBAaWQ6c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gICAqXG4gICAqICRsb2NhbGl6ZWA6bWVhbmluZ3w6c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gICAqICRsb2NhbGl6ZWA6ZGVzY3JpcHRpb246c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gICAqICRsb2NhbGl6ZWA6QEBpZDpzb3VyY2UgbWVzc2FnZSB0ZXh0YDtcbiAgICogYGBgXG4gICAqXG4gICAqIFRoaXMgZm9ybWF0IGlzIHRoZSBzYW1lIGFzIHRoYXQgdXNlZCBmb3IgYGkxOG5gIG1hcmtlcnMgaW4gQW5ndWxhciB0ZW1wbGF0ZXMuIFNlZSB0aGVcbiAgICogW0FuZ3VsYXIgaTE4biBndWlkZV0oZ3VpZGUvaTE4bi9wcmVwYXJlI21hcmstdGV4dC1pbi1jb21wb25lbnQtdGVtcGxhdGUpLlxuICAgKlxuICAgKiAqKk5hbWluZyBwbGFjZWhvbGRlcnMqKlxuICAgKlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmcgY29udGFpbnMgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIGV4cHJlc3Npb25zIHdpbGwgYmUgYXV0b21hdGljYWxseVxuICAgKiBhc3NvY2lhdGVkIHdpdGggcGxhY2Vob2xkZXIgbmFtZXMgZm9yIHlvdS5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqICRsb2NhbGl6ZSBgSGkgJHtuYW1lfSEgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcy5gO1xuICAgKiBgYGBcbiAgICpcbiAgICogd2lsbCBnZW5lcmF0ZSBhIG1lc3NhZ2Utc291cmNlIG9mIGBIaSB7JFBIfSEgVGhlcmUgYXJlIHskUEhfMX0gaXRlbXNgLlxuICAgKlxuICAgKiBUaGUgcmVjb21tZW5kZWQgcHJhY3RpY2UgaXMgdG8gbmFtZSB0aGUgcGxhY2Vob2xkZXIgYXNzb2NpYXRlZCB3aXRoIGVhY2ggZXhwcmVzc2lvbiB0aG91Z2guXG4gICAqXG4gICAqIERvIHRoaXMgYnkgcHJvdmlkaW5nIHRoZSBwbGFjZWhvbGRlciBuYW1lIHdyYXBwZWQgaW4gYDpgIGNoYXJhY3RlcnMgZGlyZWN0bHkgYWZ0ZXIgdGhlXG4gICAqIGV4cHJlc3Npb24uIFRoZXNlIHBsYWNlaG9sZGVyIG5hbWVzIGFyZSBzdHJpcHBlZCBvdXQgb2YgdGhlIHJlbmRlcmVkIGxvY2FsaXplZCBzdHJpbmcuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCB0byBuYW1lIHRoZSBgaXRlbXMubGVuZ3RoYCBleHByZXNzaW9uIHBsYWNlaG9sZGVyIGBpdGVtQ291bnRgIHlvdSB3cml0ZTpcbiAgICpcbiAgICogYGBgdHNcbiAgICogJGxvY2FsaXplIGBUaGVyZSBhcmUgJHtpdGVtcy5sZW5ndGh9Oml0ZW1Db3VudDogaXRlbXNgO1xuICAgKiBgYGBcbiAgICpcbiAgICogKipFc2NhcGluZyBjb2xvbiBtYXJrZXJzKipcbiAgICpcbiAgICogSWYgeW91IG5lZWQgdG8gdXNlIGEgYDpgIGNoYXJhY3RlciBkaXJlY3RseSBhdCB0aGUgc3RhcnQgb2YgYSB0YWdnZWQgc3RyaW5nIHRoYXQgaGFzIG5vXG4gICAqIG1ldGFkYXRhIGJsb2NrLCBvciBkaXJlY3RseSBhZnRlciBhIHN1YnN0aXR1dGlvbiBleHByZXNzaW9uIHRoYXQgaGFzIG5vIG5hbWUgeW91IG11c3QgZXNjYXBlXG4gICAqIHRoZSBgOmAgYnkgcHJlY2VkaW5nIGl0IHdpdGggYSBiYWNrc2xhc2g6XG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiAvLyBtZXNzYWdlIGhhcyBhIG1ldGFkYXRhIGJsb2NrIHNvIG5vIG5lZWQgdG8gZXNjYXBlIGNvbG9uXG4gICAqICRsb2NhbGl6ZSBgOnNvbWUgZGVzY3JpcHRpb246OnRoaXMgbWVzc2FnZSBzdGFydHMgd2l0aCBhIGNvbG9uICg6KWA7XG4gICAqIC8vIG5vIG1ldGFkYXRhIGJsb2NrIHNvIHRoZSBjb2xvbiBtdXN0IGJlIGVzY2FwZWRcbiAgICogJGxvY2FsaXplIGBcXDp0aGlzIG1lc3NhZ2Ugc3RhcnRzIHdpdGggYSBjb2xvbiAoOilgO1xuICAgKiBgYGBcbiAgICpcbiAgICogYGBgdHNcbiAgICogLy8gbmFtZWQgc3Vic3RpdHV0aW9uIHNvIG5vIG5lZWQgdG8gZXNjYXBlIGNvbG9uXG4gICAqICRsb2NhbGl6ZSBgJHtsYWJlbH06bGFiZWw6OiAke31gXG4gICAqIC8vIGFub255bW91cyBzdWJzdGl0dXRpb24gc28gY29sb24gbXVzdCBiZSBlc2NhcGVkXG4gICAqICRsb2NhbGl6ZSBgJHtsYWJlbH1cXDogJHt9YFxuICAgKiBgYGBcbiAgICpcbiAgICogKipQcm9jZXNzaW5nIGxvY2FsaXplZCBzdHJpbmdzOioqXG4gICAqXG4gICAqIFRoZXJlIGFyZSB0aHJlZSBzY2VuYXJpb3M6XG4gICAqXG4gICAqICogKipjb21waWxlLXRpbWUgaW5saW5pbmcqKjogdGhlIGAkbG9jYWxpemVgIHRhZyBpcyB0cmFuc2Zvcm1lZCBhdCBjb21waWxlIHRpbWUgYnkgYVxuICAgKiB0cmFuc3BpbGVyLCByZW1vdmluZyB0aGUgdGFnIGFuZCByZXBsYWNpbmcgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIHdpdGggYSB0cmFuc2xhdGVkXG4gICAqIGxpdGVyYWwgc3RyaW5nIGZyb20gYSBjb2xsZWN0aW9uIG9mIHRyYW5zbGF0aW9ucyBwcm92aWRlZCB0byB0aGUgdHJhbnNwaWxhdGlvbiB0b29sLlxuICAgKlxuICAgKiAqICoqcnVuLXRpbWUgZXZhbHVhdGlvbioqOiB0aGUgYCRsb2NhbGl6ZWAgdGFnIGlzIGEgcnVuLXRpbWUgZnVuY3Rpb24gdGhhdCByZXBsYWNlcyBhbmRcbiAgICogcmVvcmRlcnMgdGhlIHBhcnRzIChzdGF0aWMgc3RyaW5ncyBhbmQgZXhwcmVzc2lvbnMpIG9mIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZyB3aXRoIHN0cmluZ3NcbiAgICogZnJvbSBhIGNvbGxlY3Rpb24gb2YgdHJhbnNsYXRpb25zIGxvYWRlZCBhdCBydW4tdGltZS5cbiAgICpcbiAgICogKiAqKnBhc3MtdGhyb3VnaCBldmFsdWF0aW9uKio6IHRoZSBgJGxvY2FsaXplYCB0YWcgaXMgYSBydW4tdGltZSBmdW5jdGlvbiB0aGF0IHNpbXBseSBldmFsdWF0ZXNcbiAgICogdGhlIG9yaWdpbmFsIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIHdpdGhvdXQgYXBwbHlpbmcgYW55IHRyYW5zbGF0aW9ucyB0byB0aGUgcGFydHMuIFRoaXNcbiAgICogdmVyc2lvbiBpcyB1c2VkIGR1cmluZyBkZXZlbG9wbWVudCBvciB3aGVyZSB0aGVyZSBpcyBubyBuZWVkIHRvIHRyYW5zbGF0ZSB0aGUgbG9jYWxpemVkXG4gICAqIHRlbXBsYXRlIGxpdGVyYWxzLlxuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZVBhcnRzIGEgY29sbGVjdGlvbiBvZiB0aGUgc3RhdGljIHBhcnRzIG9mIHRoZSB0ZW1wbGF0ZSBzdHJpbmcuXG4gICAqIEBwYXJhbSBleHByZXNzaW9ucyBhIGNvbGxlY3Rpb24gb2YgdGhlIHZhbHVlcyBvZiBlYWNoIHBsYWNlaG9sZGVyIGluIHRoZSB0ZW1wbGF0ZSBzdHJpbmcuXG4gICAqIEByZXR1cm5zIHRoZSB0cmFuc2xhdGVkIHN0cmluZywgd2l0aCB0aGUgYG1lc3NhZ2VQYXJ0c2AgYW5kIGBleHByZXNzaW9uc2AgaW50ZXJsZWF2ZWQgdG9nZXRoZXIuXG4gICAqL1xuICBjb25zdCAkbG9jYWxpemU6IMm1TG9jYWxpemVGbjtcbn1cbiJdfQ==