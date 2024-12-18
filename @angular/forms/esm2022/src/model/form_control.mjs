/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { removeListItem } from '../util';
import { AbstractControl, isOptionsObj, pickAsyncValidators, pickValidators, } from './abstract_model';
function isFormControlState(formState) {
    return (typeof formState === 'object' &&
        formState !== null &&
        Object.keys(formState).length === 2 &&
        'value' in formState &&
        'disabled' in formState);
}
export const FormControl = class FormControl extends AbstractControl {
    constructor(
    // formState and defaultValue will only be null if T is nullable
    formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        /** @publicApi */
        this.defaultValue = null;
        /** @internal */
        this._onChange = [];
        /** @internal */
        this._pendingChange = false;
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set
            // `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator,
        });
        if (isOptionsObj(validatorOrOpts) &&
            (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
            if (isFormControlState(formState)) {
                this.defaultValue = formState.value;
            }
            else {
                this.defaultValue = formState;
            }
        }
    }
    setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
    }
    patchValue(value, options = {}) {
        this.setValue(value, options);
    }
    reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    }
    /**  @internal */
    _updateValue() { }
    /**  @internal */
    _anyControls(condition) {
        return false;
    }
    /**  @internal */
    _allControlsDisabled() {
        return this.disabled;
    }
    registerOnChange(fn) {
        this._onChange.push(fn);
    }
    /** @internal */
    _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
    }
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /** @internal */
    _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
    }
    /** @internal */
    _forEachChild(cb) { }
    /** @internal */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    }
    _applyFormState(formState) {
        if (isFormControlState(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled
                ? this.disable({ onlySelf: true, emitEvent: false })
                : this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    }
};
export const UntypedFormControl = FormControl;
/**
 * @description
 * Asserts that the given control is an instance of `FormControl`
 *
 * @publicApi
 */
export const isFormControl = (control) => control instanceof FormControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9jb250cm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL21vZGVsL2Zvcm1fY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXZDLE9BQU8sRUFDTCxlQUFlLEVBRWYsWUFBWSxFQUNaLG1CQUFtQixFQUNuQixjQUFjLEdBQ2YsTUFBTSxrQkFBa0IsQ0FBQztBQXdaMUIsU0FBUyxrQkFBa0IsQ0FBQyxTQUFrQjtJQUM1QyxPQUFPLENBQ0wsT0FBTyxTQUFTLEtBQUssUUFBUTtRQUM3QixTQUFTLEtBQUssSUFBSTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxTQUFTO1FBQ3BCLFVBQVUsSUFBSSxTQUFTLENBQ3hCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFxQixNQUFNLFdBQ2pELFNBQVEsZUFBdUI7SUFlL0I7SUFDRSxnRUFBZ0U7SUFDaEUsWUFBK0MsSUFBeUIsRUFDeEUsZUFBeUUsRUFDekUsY0FBNkQ7UUFFN0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQWxCL0YsaUJBQWlCO1FBQ0QsaUJBQVksR0FBVyxJQUF5QixDQUFDO1FBRWpFLGdCQUFnQjtRQUNoQixjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUtoQyxnQkFBZ0I7UUFDaEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFTOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsSUFB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LENBQUMsT0FBZ0IsRUFBMEIsRUFBRSxDQUN4RSxPQUFPLFlBQVksV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1V3JpdGFibGUgYXMgV3JpdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZufSBmcm9tICcuLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtyZW1vdmVMaXN0SXRlbX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQWJzdHJhY3RDb250cm9sT3B0aW9ucyxcbiAgaXNPcHRpb25zT2JqLFxuICBwaWNrQXN5bmNWYWxpZGF0b3JzLFxuICBwaWNrVmFsaWRhdG9ycyxcbn0gZnJvbSAnLi9hYnN0cmFjdF9tb2RlbCc7XG5cbi8qKlxuICogRm9ybUNvbnRyb2xTdGF0ZSBpcyBhIGJveGVkIGZvcm0gdmFsdWUuIEl0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHZhbHVlYCBrZXkgYW5kIGEgYGRpc2FibGVkYCBrZXkuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Db250cm9sU3RhdGU8VD4ge1xuICB2YWx1ZTogVDtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHByb3ZpZGVkIHRvIGEgYEZvcm1Db250cm9sYC5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBleHRlbmRzIGFsbCBvcHRpb25zIGZyb20ge0BsaW5rIEFic3RyYWN0Q29udHJvbE9wdGlvbnN9LCBwbHVzIHNvbWUgb3B0aW9uc1xuICogdW5pcXVlIHRvIGBGb3JtQ29udHJvbGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Db250cm9sT3B0aW9ucyBleHRlbmRzIEFic3RyYWN0Q29udHJvbE9wdGlvbnMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFdoZXRoZXIgdG8gdXNlIHRoZSBpbml0aWFsIHZhbHVlIHVzZWQgdG8gY29uc3RydWN0IHRoZSBgRm9ybUNvbnRyb2xgIGFzIGl0cyBkZWZhdWx0IHZhbHVlXG4gICAqIGFzIHdlbGwuIElmIHRoaXMgb3B0aW9uIGlzIGZhbHNlIG9yIG5vdCBwcm92aWRlZCwgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBGb3JtQ29udHJvbCBpcyBgbnVsbGAuXG4gICAqIFdoZW4gYSBGb3JtQ29udHJvbCBpcyByZXNldCB3aXRob3V0IGFuIGV4cGxpY2l0IHZhbHVlLCBpdHMgdmFsdWUgcmV2ZXJ0cyB0b1xuICAgKiBpdHMgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIG5vbk51bGxhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBub25OdWxsYWJsZWAgaW5zdGVhZC5cbiAgICovXG4gIGluaXRpYWxWYWx1ZUlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZvdXIgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcbiAqIGBGb3JtR3JvdXBgLCBgRm9ybUFycmF5YCBhbmQgYEZvcm1SZWNvcmRgLiBJdCBleHRlbmRzIHRoZSBgQWJzdHJhY3RDb250cm9sYCBjbGFzcyB0aGF0XG4gKiBpbXBsZW1lbnRzIG1vc3Qgb2YgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWNjZXNzaW5nIHRoZSB2YWx1ZSwgdmFsaWRhdGlvbiBzdGF0dXMsXG4gKiB1c2VyIGludGVyYWN0aW9ucyBhbmQgZXZlbnRzLlxuICpcbiAqIGBGb3JtQ29udHJvbGAgdGFrZXMgYSBzaW5nbGUgZ2VuZXJpYyBhcmd1bWVudCwgd2hpY2ggZGVzY3JpYmVzIHRoZSB0eXBlIG9mIGl0cyB2YWx1ZS4gVGhpc1xuICogYXJndW1lbnQgYWx3YXlzIGltcGxpY2l0bHkgaW5jbHVkZXMgYG51bGxgIGJlY2F1c2UgdGhlIGNvbnRyb2wgY2FuIGJlIHJlc2V0LiBUbyBjaGFuZ2UgdGhpc1xuICogYmVoYXZpb3IsIHNldCBgbm9uTnVsbGFibGVgIG9yIHNlZSB0aGUgdXNhZ2Ugbm90ZXMgYmVsb3cuXG4gKlxuICogU2VlIFt1c2FnZSBleGFtcGxlcyBiZWxvd10oI3VzYWdlLW5vdGVzKS5cbiAqXG4gKiBAc2VlIHtAbGluayBBYnN0cmFjdENvbnRyb2x9XG4gKiBAc2VlIFtSZWFjdGl2ZSBGb3JtcyBHdWlkZV0oZ3VpZGUvZm9ybXMvcmVhY3RpdmUtZm9ybXMpXG4gKiBAc2VlIFtVc2FnZSBOb3Rlc10oI3VzYWdlLW5vdGVzKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqXG4gKiBAb3ZlcnJpZGRlbkltcGxlbWVudGF0aW9uIMm1Rm9ybUNvbnRyb2xDdG9yXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgSW5pdGlhbGl6aW5nIEZvcm0gQ29udHJvbHNcbiAqXG4gKiBJbnN0YW50aWF0ZSBhIGBGb3JtQ29udHJvbGAsIHdpdGggYW4gaW5pdGlhbCB2YWx1ZS5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7ICAgICAvLyAnc29tZSB2YWx1ZSdcbiAqIGBgYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbml0aWFsaXplcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBzdGF0ZSBvYmplY3QuIFRoZSBgdmFsdWVgXG4gKiBhbmQgYGRpc2FibGVkYCBrZXlzIGFyZSByZXF1aXJlZCBpbiB0aGlzIGNhc2UuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlIH0pO1xuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAgICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIHN5bmNocm9ub3VzIHZhbGlkYXRvci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgICAvLyAnJ1xuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAgICAgLy8gJ0lOVkFMSUQnXG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgdXNpbmcgYW4gb3B0aW9ucyBvYmplY3QuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIHtcbiAqICAgIHZhbGlkYXRvcnM6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gKiAgICBhc3luY1ZhbGlkYXRvcnM6IG15QXN5bmNWYWxpZGF0b3JcbiAqIH0pO1xuICogYGBgXG4gKlxuICogIyMjIFRoZSBzaW5nbGUgdHlwZSBhcmd1bWVudFxuICpcbiAqIGBGb3JtQ29udHJvbGAgYWNjZXB0cyBhIGdlbmVyaWMgYXJndW1lbnQsIHdoaWNoIGRlc2NyaWJlcyB0aGUgdHlwZSBvZiBpdHMgdmFsdWUuXG4gKiBJbiBtb3N0IGNhc2VzLCB0aGlzIGFyZ3VtZW50IHdpbGwgYmUgaW5mZXJyZWQuXG4gKlxuICogSWYgeW91IGFyZSBpbml0aWFsaXppbmcgdGhlIGNvbnRyb2wgdG8gYG51bGxgLCBvciB5b3Ugb3RoZXJ3aXNlIHdpc2ggdG8gcHJvdmlkZSBhXG4gKiB3aWRlciB0eXBlLCB5b3UgbWF5IHNwZWNpZnkgdGhlIGFyZ3VtZW50IGV4cGxpY2l0bHk6XG4gKlxuICogYGBgXG4gKiBsZXQgZmMgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nfG51bGw+KG51bGwpO1xuICogZmMuc2V0VmFsdWUoJ2ZvbycpO1xuICogYGBgXG4gKlxuICogWW91IG1pZ2h0IG5vdGljZSB0aGF0IGBudWxsYCBpcyBhbHdheXMgYWRkZWQgdG8gdGhlIHR5cGUgb2YgdGhlIGNvbnRyb2wuXG4gKiBUaGlzIGlzIGJlY2F1c2UgdGhlIGNvbnRyb2wgd2lsbCBiZWNvbWUgYG51bGxgIGlmIHlvdSBjYWxsIGByZXNldGAuIFlvdSBjYW4gY2hhbmdlXG4gKiB0aGlzIGJlaGF2aW9yIGJ5IHNldHRpbmcgYHtub25OdWxsYWJsZTogdHJ1ZX1gLlxuICpcbiAqICMjIyBDb25maWd1cmUgdGhlIGNvbnRyb2wgdG8gdXBkYXRlIG9uIGEgYmx1ciBldmVudFxuICpcbiAqIFNldCB0aGUgYHVwZGF0ZU9uYCBvcHRpb24gdG8gYCdibHVyJ2AgdG8gdXBkYXRlIG9uIHRoZSBibHVyIGBldmVudGAuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIHsgdXBkYXRlT246ICdibHVyJyB9KTtcbiAqIGBgYFxuICpcbiAqICMjIyBDb25maWd1cmUgdGhlIGNvbnRyb2wgdG8gdXBkYXRlIG9uIGEgc3VibWl0IGV2ZW50XG4gKlxuICogU2V0IHRoZSBgdXBkYXRlT25gIG9wdGlvbiB0byBgJ3N1Ym1pdCdgIHRvIHVwZGF0ZSBvbiBhIHN1Ym1pdCBgZXZlbnRgLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7IHVwZGF0ZU9uOiAnc3VibWl0JyB9KTtcbiAqIGBgYFxuICpcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGEgc3BlY2lmaWMgdmFsdWVcbiAqXG4gKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcbiAqIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3QgdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdGVcbiAqICh0aGVzZSBhcmUgdGhlIG9ubHkgdHdvIHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgY2FsY3VsYXRlZCkuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ05hbmN5Jyk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdOYW5jeSdcbiAqXG4gKiBjb250cm9sLnJlc2V0KCdEcmV3Jyk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdEcmV3J1xuICogYGBgXG4gKlxuICogIyMjIFJlc2V0IHRoZSBjb250cm9sIHRvIGl0cyBpbml0aWFsIHZhbHVlXG4gKlxuICogSWYgeW91IHdpc2ggdG8gYWx3YXlzIHJlc2V0IHRoZSBjb250cm9sIHRvIGl0cyBpbml0aWFsIHZhbHVlIChpbnN0ZWFkIG9mIG51bGwpLFxuICogeW91IGNhbiBwYXNzIHRoZSBgbm9uTnVsbGFibGVgIG9wdGlvbjpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ05hbmN5Jywge25vbk51bGxhYmxlOiB0cnVlfSk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdOYW5jeSdcbiAqXG4gKiBjb250cm9sLnJlc2V0KCk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdOYW5jeSdcbiAqIGBgYFxuICpcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGFuIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkXG4gKlxuICogYGBgXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xuICpcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnTmFuY3knXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7IC8vICdWQUxJRCdcbiAqXG4gKiBjb250cm9sLnJlc2V0KHsgdmFsdWU6ICdEcmV3JywgZGlzYWJsZWQ6IHRydWUgfSk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdEcmV3J1xuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb3JtQ29udHJvbDxUVmFsdWUgPSBhbnk+IGV4dGVuZHMgQWJzdHJhY3RDb250cm9sPFRWYWx1ZT4ge1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBGb3JtQ29udHJvbCwgdXNlZCB3aGVuZXZlciB0aGUgY29udHJvbCBpcyByZXNldCB3aXRob3V0IGFuIGV4cGxpY2l0XG4gICAqIHZhbHVlLiBTZWUge0BsaW5rIEZvcm1Db250cm9sT3B0aW9ucyNub25OdWxsYWJsZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gY29uZmlndXJpbmdcbiAgICogYSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFZhbHVlOiBUVmFsdWU7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uW107XG5cbiAgLyoqXG4gICAqIFRoaXMgZmllbGQgaG9sZHMgYSBwZW5kaW5nIHZhbHVlIHRoYXQgaGFzIG5vdCB5ZXQgYmVlbiBhcHBsaWVkIHRvIHRoZSBmb3JtJ3MgdmFsdWUuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3BlbmRpbmdWYWx1ZTogVFZhbHVlO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BlbmRpbmdDaGFuZ2U6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHMgYSBuZXcgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcbiAgICogYW5kIGVtaXRzIGV2ZW50cyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXG4gICAqXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcbiAgICogZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGlzIHVwZGF0ZWQuXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICogKiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cbiAgICogYG9uQ2hhbmdlYCBldmVudCB0b1xuICAgKiB1cGRhdGUgdGhlIHZpZXcuXG4gICAqICogYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cbiAgICogYG5nTW9kZWxDaGFuZ2VgXG4gICAqIGV2ZW50IHRvIHVwZGF0ZSB0aGUgbW9kZWwuXG4gICAqXG4gICAqL1xuICBzZXRWYWx1ZShcbiAgICB2YWx1ZTogVFZhbHVlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSB0aGUgc2FtZSBhcyB7QGxpbmsgRm9ybUNvbnRyb2wjc2V0VmFsdWUgc2V0VmFsdWV9IGF0IHRoaXMgbGV2ZWwuXG4gICAqIEl0IGV4aXN0cyBmb3Igc3ltbWV0cnkgd2l0aCB7QGxpbmsgRm9ybUdyb3VwI3BhdGNoVmFsdWUgcGF0Y2hWYWx1ZX0gb24gYEZvcm1Hcm91cHNgIGFuZFxuICAgKiBgRm9ybUFycmF5c2AsIHdoZXJlIGl0IGRvZXMgYmVoYXZlIGRpZmZlcmVudGx5LlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBGb3JtQ29udHJvbCNzZXRWYWx1ZX0gZm9yIG9wdGlvbnNcbiAgICovXG4gIHBhdGNoVmFsdWUoXG4gICAgdmFsdWU6IFRWYWx1ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgZm9ybSBjb250cm9sLCBtYXJraW5nIGl0IGBwcmlzdGluZWAgYW5kIGB1bnRvdWNoZWRgLCBhbmQgcmVzZXR0aW5nXG4gICAqIHRoZSB2YWx1ZS4gVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHRoZSBwcm92aWRlZCB2YWx1ZSAoaWYgcGFzc2VkKSwgYG51bGxgLCBvciB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgKiBpZiBgbm9uTnVsbGFibGVgIHdhcyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIHZpYSB7QGxpbmsgRm9ybUNvbnRyb2xPcHRpb25zfS5cbiAgICpcbiAgICogYGBgdHNcbiAgICogLy8gQnkgZGVmYXVsdCwgdGhlIGNvbnRyb2wgd2lsbCByZXNldCB0byBudWxsLlxuICAgKiBjb25zdCBkb2cgPSBuZXcgRm9ybUNvbnRyb2woJ3Nwb3QnKTtcbiAgICogZG9nLnJlc2V0KCk7IC8vIGRvZy52YWx1ZSBpcyBudWxsXG4gICAqXG4gICAqIC8vIElmIHRoaXMgZmxhZyBpcyBzZXQsIHRoZSBjb250cm9sIHdpbGwgaW5zdGVhZCByZXNldCB0byB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICogY29uc3QgY2F0ID0gbmV3IEZvcm1Db250cm9sKCd0YWJieScsIHtub25OdWxsYWJsZTogdHJ1ZX0pO1xuICAgKiBjYXQucmVzZXQoKTsgLy8gY2F0LnZhbHVlIGlzIFwidGFiYnlcIlxuICAgKlxuICAgKiAvLyBBIHZhbHVlIHBhc3NlZCB0byByZXNldCBhbHdheXMgdGFrZXMgcHJlY2VkZW5jZS5cbiAgICogY29uc3QgZmlzaCA9IG5ldyBGb3JtQ29udHJvbCgnZmlubicsIHtub25OdWxsYWJsZTogdHJ1ZX0pO1xuICAgKiBmaXNoLnJlc2V0KCdidWJibGUnKTsgLy8gZmlzaC52YWx1ZSBpcyBcImJ1YmJsZVwiXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXG4gICAqIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXG4gICAqIGZhbHNlLlxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcbiAgICogYHZhbHVlQ2hhbmdlc2BcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyByZXNldC5cbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxuICAgKlxuICAgKi9cbiAgcmVzZXQoXG4gICAgZm9ybVN0YXRlPzogVFZhbHVlIHwgRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEZvciBhIHNpbXBsZSBGb3JtQ29udHJvbCwgdGhlIHJhdyB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIHRoZSB2YWx1ZS5cbiAgICovXG4gIGdldFJhd1ZhbHVlKCk6IFRWYWx1ZTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfdXBkYXRlVmFsdWUoKTogdm9pZDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfYW55Q29udHJvbHMoY29uZGl0aW9uOiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiBib29sZWFuKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjaGFuZ2UgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgYSBjaGFuZ2UgZXZlbnRzIGxpc3RlbmVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF91bnJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZT86IGFueSwgZW1pdE1vZGVsRXZlbnQ/OiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgZGlzYWJsZWQgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0dXMgY2hhbmdlcy5cbiAgICovXG4gIHJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZShmbjogKGlzRGlzYWJsZWQ6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBmdW5jdGlvbiB0byB1bnJlZ2lzdGVyIGEgZGlzYWJsZWQgZXZlbnQgbGlzdGVuZXIuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3VucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZuOiAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX2ZvckVhY2hDaGlsZChjYjogKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3luY1BlbmRpbmdDb250cm9scygpOiBib29sZWFuO1xufVxuXG4vLyBUaGlzIGludGVybmFsIGludGVyZmFjZSBpcyBwcmVzZW50IHRvIGF2b2lkIGEgbmFtaW5nIGNsYXNoLCByZXN1bHRpbmcgaW4gdGhlIHdyb25nIGBGb3JtQ29udHJvbGBcbi8vIHN5bWJvbCBiZWluZyB1c2VkLlxudHlwZSBGb3JtQ29udHJvbEludGVyZmFjZTxUVmFsdWUgPSBhbnk+ID0gRm9ybUNvbnRyb2w8VFZhbHVlPjtcblxuLyoqXG4gKiBWYXJpb3VzIGF2YWlsYWJsZSBjb25zdHJ1Y3RvcnMgZm9yIGBGb3JtQ29udHJvbGAuXG4gKiBEbyBub3QgdXNlIHRoaXMgaW50ZXJmYWNlIGRpcmVjdGx5LiBJbnN0ZWFkLCB1c2UgYEZvcm1Db250cm9sYDpcbiAqIGBgYFxuICogY29uc3QgZmMgPSBuZXcgRm9ybUNvbnRyb2woJ2ZvbycpO1xuICogYGBgXG4gKiBUaGlzIHN5bWJvbCBpcyBwcmVmaXhlZCB3aXRoIMm1IHRvIG1ha2UgcGxhaW4gdGhhdCBpdCBpcyBhbiBpbnRlcm5hbCBzeW1ib2wuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgybVGb3JtQ29udHJvbEN0b3Ige1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgRm9ybUNvbnRyb2wgd2l0aCBubyBpbml0aWFsIHZhbHVlIG9yIHZhbGlkYXRvcnMuXG4gICAqL1xuICBuZXcgKCk6IEZvcm1Db250cm9sPGFueT47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Db250cm9sYCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIGZvcm1TdGF0ZSBJbml0aWFsaXplcyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXG4gICAqIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsaWRhdG9yT3JPcHRzIEEgc3luY2hyb25vdXMgdmFsaWRhdG9yIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZlxuICAgKiBzdWNoIGZ1bmN0aW9ucywgb3IgYSBgRm9ybUNvbnRyb2xPcHRpb25zYCBvYmplY3QgdGhhdCBjb250YWlucyB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xuICAgKiBhbmQgYSB2YWxpZGF0aW9uIHRyaWdnZXIuXG4gICAqXG4gICAqIEBwYXJhbSBhc3luY1ZhbGlkYXRvciBBIHNpbmdsZSBhc3luYyB2YWxpZGF0b3Igb3IgYXJyYXkgb2YgYXN5bmMgdmFsaWRhdG9yIGZ1bmN0aW9uc1xuICAgKi9cbiAgbmV3IDxUID0gYW55PihcbiAgICB2YWx1ZTogRm9ybUNvbnRyb2xTdGF0ZTxUPiB8IFQsXG4gICAgb3B0czogRm9ybUNvbnRyb2xPcHRpb25zICYge25vbk51bGxhYmxlOiB0cnVlfSxcbiAgKTogRm9ybUNvbnRyb2w8VD47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbm9uTnVsbGFibGVgIGluc3RlYWQuXG4gICAqL1xuICBuZXcgPFQgPSBhbnk+KFxuICAgIHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPFQ+IHwgVCxcbiAgICBvcHRzOiBGb3JtQ29udHJvbE9wdGlvbnMgJiB7XG4gICAgICBpbml0aWFsVmFsdWVJc0RlZmF1bHQ6IHRydWU7XG4gICAgfSxcbiAgKTogRm9ybUNvbnRyb2w8VD47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFdoZW4gcGFzc2luZyBhbiBgb3B0aW9uc2AgYXJndW1lbnQsIHRoZSBgYXN5bmNWYWxpZGF0b3JgIGFyZ3VtZW50IGhhcyBubyBlZmZlY3QuXG4gICAqL1xuICBuZXcgPFQgPSBhbnk+KFxuICAgIHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPFQ+IHwgVCxcbiAgICBvcHRzOiBGb3JtQ29udHJvbE9wdGlvbnMsXG4gICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10sXG4gICk6IEZvcm1Db250cm9sPFQgfCBudWxsPjtcblxuICBuZXcgPFQgPSBhbnk+KFxuICAgIHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPFQ+IHwgVCxcbiAgICB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10gfCBGb3JtQ29udHJvbE9wdGlvbnMgfCBudWxsLFxuICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGwsXG4gICk6IEZvcm1Db250cm9sPFQgfCBudWxsPjtcblxuICAvKipcbiAgICogVGhlIHByZXNlbmNlIG9mIGFuIGV4cGxpY2l0IGBwcm90b3R5cGVgIHByb3BlcnR5IHByb3ZpZGVzIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciBhcHBzIHRoYXRcbiAgICogbWFudWFsbHkgaW5zcGVjdCB0aGUgcHJvdG90eXBlIGNoYWluLlxuICAgKi9cbiAgcHJvdG90eXBlOiBGb3JtQ29udHJvbDxhbnk+O1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1Db250cm9sU3RhdGUoZm9ybVN0YXRlOiB1bmtub3duKTogZm9ybVN0YXRlIGlzIEZvcm1Db250cm9sU3RhdGU8dW5rbm93bj4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBmb3JtU3RhdGUgPT09ICdvYmplY3QnICYmXG4gICAgZm9ybVN0YXRlICE9PSBudWxsICYmXG4gICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlKS5sZW5ndGggPT09IDIgJiZcbiAgICAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJlxuICAgICdkaXNhYmxlZCcgaW4gZm9ybVN0YXRlXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udHJvbDogybVGb3JtQ29udHJvbEN0b3IgPSBjbGFzcyBGb3JtQ29udHJvbDxUVmFsdWUgPSBhbnk+XG4gIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sPFRWYWx1ZT5cbiAgaW1wbGVtZW50cyBGb3JtQ29udHJvbEludGVyZmFjZTxUVmFsdWU+XG57XG4gIC8qKiBAcHVibGljQXBpICovXG4gIHB1YmxpYyByZWFkb25seSBkZWZhdWx0VmFsdWU6IFRWYWx1ZSA9IG51bGwgYXMgdW5rbm93biBhcyBUVmFsdWU7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25DaGFuZ2U6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BlbmRpbmdWYWx1ZSE6IFRWYWx1ZTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9wZW5kaW5nQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gZm9ybVN0YXRlIGFuZCBkZWZhdWx0VmFsdWUgd2lsbCBvbmx5IGJlIG51bGwgaWYgVCBpcyBudWxsYWJsZVxuICAgIGZvcm1TdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+IHwgVFZhbHVlID0gbnVsbCBhcyB1bmtub3duIGFzIFRWYWx1ZSxcbiAgICB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10gfCBGb3JtQ29udHJvbE9wdGlvbnMgfCBudWxsLFxuICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGwsXG4gICkge1xuICAgIHN1cGVyKHBpY2tWYWxpZGF0b3JzKHZhbGlkYXRvck9yT3B0cyksIHBpY2tBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3IsIHZhbGlkYXRvck9yT3B0cykpO1xuICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgdGhpcy5fc2V0VXBkYXRlU3RyYXRlZ3kodmFsaWRhdG9yT3JPcHRzKTtcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe1xuICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAvLyBJZiBgYXN5bmNWYWxpZGF0b3JgIGlzIHByZXNlbnQsIGl0IHdpbGwgdHJpZ2dlciBjb250cm9sIHN0YXR1cyBjaGFuZ2UgZnJvbSBgUEVORElOR2AgdG9cbiAgICAgIC8vIGBWQUxJRGAgb3IgYElOVkFMSURgLlxuICAgICAgLy8gVGhlIHN0YXR1cyBzaG91bGQgYmUgYnJvYWRjYXN0ZWQgdmlhIHRoZSBgc3RhdHVzQ2hhbmdlc2Agb2JzZXJ2YWJsZSwgc28gd2Ugc2V0XG4gICAgICAvLyBgZW1pdEV2ZW50YCB0byBgdHJ1ZWAgdG8gYWxsb3cgdGhhdCBkdXJpbmcgdGhlIGNvbnRyb2wgY3JlYXRpb24gcHJvY2Vzcy5cbiAgICAgIGVtaXRFdmVudDogISF0aGlzLmFzeW5jVmFsaWRhdG9yLFxuICAgIH0pO1xuICAgIGlmIChcbiAgICAgIGlzT3B0aW9uc09iaih2YWxpZGF0b3JPck9wdHMpICYmXG4gICAgICAodmFsaWRhdG9yT3JPcHRzLm5vbk51bGxhYmxlIHx8IHZhbGlkYXRvck9yT3B0cy5pbml0aWFsVmFsdWVJc0RlZmF1bHQpXG4gICAgKSB7XG4gICAgICBpZiAoaXNGb3JtQ29udHJvbFN0YXRlKGZvcm1TdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBmb3JtU3RhdGUudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGZvcm1TdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBzZXRWYWx1ZShcbiAgICB2YWx1ZTogVFZhbHVlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICk6IHZvaWQge1xuICAgICh0aGlzIGFzIFdyaXRhYmxlPHRoaXM+KS52YWx1ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZS5sZW5ndGggJiYgb3B0aW9ucy5lbWl0TW9kZWxUb1ZpZXdDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZS5mb3JFYWNoKChjaGFuZ2VGbikgPT5cbiAgICAgICAgY2hhbmdlRm4odGhpcy52YWx1ZSwgb3B0aW9ucy5lbWl0Vmlld1RvTW9kZWxDaGFuZ2UgIT09IGZhbHNlKSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgfVxuXG4gIG92ZXJyaWRlIHBhdGNoVmFsdWUoXG4gICAgdmFsdWU6IFRWYWx1ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIG92ZXJyaWRlIHJlc2V0KFxuICAgIGZvcm1TdGF0ZTogVFZhbHVlIHwgRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+ID0gdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbjsgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xuICAgIHRoaXMubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSwgb3B0aW9ucyk7XG4gICAgdGhpcy5fcGVuZGluZ0NoYW5nZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqICBAaW50ZXJuYWwgKi9cbiAgb3ZlcnJpZGUgX3VwZGF0ZVZhbHVlKCk6IHZvaWQge31cblxuICAvKiogIEBpbnRlcm5hbCAqL1xuICBvdmVycmlkZSBfYW55Q29udHJvbHMoY29uZGl0aW9uOiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqICBAaW50ZXJuYWwgKi9cbiAgb3ZlcnJpZGUgX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlLnB1c2goZm4pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdW5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU/OiBhbnksIGVtaXRNb2RlbEV2ZW50PzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHJlbW92ZUxpc3RJdGVtKHRoaXMuX29uQ2hhbmdlLCBmbik7XG4gIH1cblxuICByZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoZm46IChpc0Rpc2FibGVkOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZuOiAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHJlbW92ZUxpc3RJdGVtKHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UsIGZuKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgb3ZlcnJpZGUgX2ZvckVhY2hDaGlsZChjYjogKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKiogQGludGVybmFsICovXG4gIG92ZXJyaWRlIF9zeW5jUGVuZGluZ0NvbnRyb2xzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnVwZGF0ZU9uID09PSAnc3VibWl0Jykge1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdEaXJ0eSkgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdUb3VjaGVkKSB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIGlmICh0aGlzLl9wZW5kaW5nQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fcGVuZGluZ1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2V9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+IHwgVFZhbHVlKSB7XG4gICAgaWYgKGlzRm9ybUNvbnRyb2xTdGF0ZShmb3JtU3RhdGUpKSB7XG4gICAgICAodGhpcyBhcyBXcml0YWJsZTx0aGlzPikudmFsdWUgPSB0aGlzLl9wZW5kaW5nVmFsdWUgPSBmb3JtU3RhdGUudmFsdWU7XG4gICAgICBmb3JtU3RhdGUuZGlzYWJsZWRcbiAgICAgICAgPyB0aGlzLmRpc2FibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSlcbiAgICAgICAgOiB0aGlzLmVuYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMgYXMgV3JpdGFibGU8dGhpcz4pLnZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlID0gZm9ybVN0YXRlO1xuICAgIH1cbiAgfVxufTtcblxuaW50ZXJmYWNlIFVudHlwZWRGb3JtQ29udHJvbEN0b3Ige1xuICBuZXcgKCk6IFVudHlwZWRGb3JtQ29udHJvbDtcblxuICBuZXcgKFxuICAgIGZvcm1TdGF0ZT86IGFueSxcbiAgICB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10gfCBGb3JtQ29udHJvbE9wdGlvbnMgfCBudWxsLFxuICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGwsXG4gICk6IFVudHlwZWRGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogVGhlIHByZXNlbmNlIG9mIGFuIGV4cGxpY2l0IGBwcm90b3R5cGVgIHByb3BlcnR5IHByb3ZpZGVzIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciBhcHBzIHRoYXRcbiAgICogbWFudWFsbHkgaW5zcGVjdCB0aGUgcHJvdG90eXBlIGNoYWluLlxuICAgKi9cbiAgcHJvdG90eXBlOiBGb3JtQ29udHJvbDxhbnk+O1xufVxuXG4vKipcbiAqIFVudHlwZWRGb3JtQ29udHJvbCBpcyBhIG5vbi1zdHJvbmdseS10eXBlZCB2ZXJzaW9uIG9mIGBGb3JtQ29udHJvbGAuXG4gKi9cbmV4cG9ydCB0eXBlIFVudHlwZWRGb3JtQ29udHJvbCA9IEZvcm1Db250cm9sPGFueT47XG5cbmV4cG9ydCBjb25zdCBVbnR5cGVkRm9ybUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbEN0b3IgPSBGb3JtQ29udHJvbDtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFzc2VydHMgdGhhdCB0aGUgZ2l2ZW4gY29udHJvbCBpcyBhbiBpbnN0YW5jZSBvZiBgRm9ybUNvbnRyb2xgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgaXNGb3JtQ29udHJvbCA9IChjb250cm9sOiB1bmtub3duKTogY29udHJvbCBpcyBGb3JtQ29udHJvbCA9PlxuICBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2w7XG4iXX0=