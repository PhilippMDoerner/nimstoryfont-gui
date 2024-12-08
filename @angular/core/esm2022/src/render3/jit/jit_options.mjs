let jitOptions = null;
export function setJitOptions(options) {
    if (jitOptions !== null) {
        if (options.defaultEncapsulation !== jitOptions.defaultEncapsulation) {
            ngDevMode &&
                console.error('Provided value for `defaultEncapsulation` can not be changed once it has been set.');
            return;
        }
        if (options.preserveWhitespaces !== jitOptions.preserveWhitespaces) {
            ngDevMode &&
                console.error('Provided value for `preserveWhitespaces` can not be changed once it has been set.');
            return;
        }
    }
    jitOptions = options;
}
export function getJitOptions() {
    return jitOptions;
}
export function resetJitOptions() {
    jitOptions = null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaml0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ppdC9qaXRfb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxJQUFJLFVBQVUsR0FBOEIsSUFBSSxDQUFDO0FBRWpELE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBMkI7SUFDdkQsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxPQUFPLENBQUMsb0JBQW9CLEtBQUssVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDckUsU0FBUztnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUNYLG9GQUFvRixDQUNyRixDQUFDO1lBQ0osT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsS0FBSyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNuRSxTQUFTO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQ1gsbUZBQW1GLENBQ3BGLENBQUM7WUFDSixPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUM7SUFDRCxVQUFVLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYTtJQUMzQixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWU7SUFDN0IsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvdmlldyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSml0Q29tcGlsZXJPcHRpb25zIHtcbiAgZGVmYXVsdEVuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbjtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG59XG5cbmxldCBqaXRPcHRpb25zOiBKaXRDb21waWxlck9wdGlvbnMgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEppdE9wdGlvbnMob3B0aW9uczogSml0Q29tcGlsZXJPcHRpb25zKTogdm9pZCB7XG4gIGlmIChqaXRPcHRpb25zICE9PSBudWxsKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24gIT09IGppdE9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24pIHtcbiAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdQcm92aWRlZCB2YWx1ZSBmb3IgYGRlZmF1bHRFbmNhcHN1bGF0aW9uYCBjYW4gbm90IGJlIGNoYW5nZWQgb25jZSBpdCBoYXMgYmVlbiBzZXQuJyxcbiAgICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcyAhPT0gaml0T3B0aW9ucy5wcmVzZXJ2ZVdoaXRlc3BhY2VzKSB7XG4gICAgICBuZ0Rldk1vZGUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnUHJvdmlkZWQgdmFsdWUgZm9yIGBwcmVzZXJ2ZVdoaXRlc3BhY2VzYCBjYW4gbm90IGJlIGNoYW5nZWQgb25jZSBpdCBoYXMgYmVlbiBzZXQuJyxcbiAgICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaml0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKaXRPcHRpb25zKCk6IEppdENvbXBpbGVyT3B0aW9ucyB8IG51bGwge1xuICByZXR1cm4gaml0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Sml0T3B0aW9ucygpOiB2b2lkIHtcbiAgaml0T3B0aW9ucyA9IG51bGw7XG59XG4iXX0=