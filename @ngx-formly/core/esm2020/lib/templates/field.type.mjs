import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class FieldType {
    get model() {
        return this.field.model;
    }
    get form() {
        return this.field.form;
    }
    get options() {
        return this.field.options;
    }
    get key() {
        return this.field.key;
    }
    get formControl() {
        return this.field.formControl;
    }
    get props() {
        return (this.field.props || {});
    }
    /** @deprecated Use `props` instead. */
    get to() {
        return this.props;
    }
    get showError() {
        return this.options.showError(this);
    }
    get id() {
        return this.field.id;
    }
    get formState() {
        return this.options.formState || {};
    }
}
FieldType.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FieldType.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: FieldType, inputs: { field: "field" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, decorators: [{
            type: Directive
        }], propDecorators: { field: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9saWIvdGVtcGxhdGVzL2ZpZWxkLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZWpELE1BQU0sT0FBZ0IsU0FBUztJQUk3QixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBNEMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBNEIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7dUdBM0NtQixTQUFTOzJGQUFULFNBQVM7NEZBQVQsU0FBUztrQkFEOUIsU0FBUzs4QkFFQyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkVHlwZUNvbmZpZzxUID0gRm9ybWx5RmllbGRDb25maWdbJ3Byb3BzJ10+IGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8VD4ge1xuICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gIHByb3BzOiBOb25OdWxsYWJsZTxUPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEdyb3VwVHlwZUNvbmZpZzxUID0gRm9ybWx5RmllbGRDb25maWdbJ3Byb3BzJ10+IGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8VD4ge1xuICBmb3JtQ29udHJvbDogRm9ybUdyb3VwO1xuICBwcm9wczogTm9uTnVsbGFibGU8VD47XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkVHlwZTxGIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWcgPSBGb3JtbHlGaWVsZENvbmZpZz4ge1xuICBASW5wdXQoKSBmaWVsZDogRjtcbiAgZGVmYXVsdE9wdGlvbnM/OiBQYXJ0aWFsPEY+O1xuXG4gIGdldCBtb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5tb2RlbDtcbiAgfVxuXG4gIGdldCBmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkLmZvcm07XG4gIH1cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5vcHRpb25zO1xuICB9XG5cbiAgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5rZXk7XG4gIH1cblxuICBnZXQgZm9ybUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wgYXMgTm9uTnVsbGFibGU8RlsnZm9ybUNvbnRyb2wnXT47XG4gIH1cblxuICBnZXQgcHJvcHMoKSB7XG4gICAgcmV0dXJuICh0aGlzLmZpZWxkLnByb3BzIHx8IHt9KSBhcyBOb25OdWxsYWJsZTxGWydwcm9wcyddPjtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBVc2UgYHByb3BzYCBpbnN0ZWFkLiAqL1xuICBnZXQgdG8oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd0Vycm9yKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuaWQ7XG4gIH1cblxuICBnZXQgZm9ybVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybVN0YXRlIHx8IHt9O1xuICB9XG59XG4iXX0=