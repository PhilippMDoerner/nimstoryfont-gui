"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputNamesMigration = void 0;
const migration_1 = require("../../update-tool/migration");
const angular_1 = require("../html-parsing/angular");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Migration that walks through every inline or external HTML template and switches
 * changed output binding names to the proper new output name.
 */
class OutputNamesMigration extends migration_1.Migration {
    /** Change data that upgrades to the specified target version. */
    data = (0, upgrade_data_1.getVersionUpgradeData)(this, 'outputNames');
    // Only enable the migration rule if there is upgrade data.
    enabled = this.data.length !== 0;
    visitTemplate(template) {
        this.data.forEach(name => {
            const limitedTo = name.limitedTo;
            const relativeOffsets = [];
            if (limitedTo.attributes) {
                relativeOffsets.push(...(0, angular_1.findOutputsOnElementWithAttr)(template.content, name.replace, limitedTo.attributes));
            }
            if (limitedTo.elements) {
                relativeOffsets.push(...(0, angular_1.findOutputsOnElementWithTag)(template.content, name.replace, limitedTo.elements));
            }
            relativeOffsets
                .map(offset => template.start + offset)
                .forEach(start => this._replaceOutputName(template.filePath, start, name.replace.length, name.replaceWith));
        });
    }
    _replaceOutputName(filePath, start, width, newName) {
        this.fileSystem.edit(filePath).remove(start, width).insertRight(start, newName);
    }
}
exports.OutputNamesMigration = OutputNamesMigration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LW5hbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9taWdyYXRpb25zL291dHB1dC1uYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFJSCwyREFBc0Q7QUFHdEQscURBQWtHO0FBQ2xHLGtEQUFtRTtBQUVuRTs7O0dBR0c7QUFDSCxNQUFhLG9CQUFxQixTQUFRLHFCQUFzQjtJQUM5RCxpRUFBaUU7SUFDakUsSUFBSSxHQUE0QixJQUFBLG9DQUFxQixFQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUUzRSwyREFBMkQ7SUFDM0QsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUV4QixhQUFhLENBQUMsUUFBMEI7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQyxNQUFNLGVBQWUsR0FBYSxFQUFFLENBQUM7WUFFckMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3pCLGVBQWUsQ0FBQyxJQUFJLENBQ2xCLEdBQUcsSUFBQSxzQ0FBNEIsRUFBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUN0RixDQUFDO1lBQ0osQ0FBQztZQUVELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QixlQUFlLENBQUMsSUFBSSxDQUNsQixHQUFHLElBQUEscUNBQTJCLEVBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FDbkYsQ0FBQztZQUNKLENBQUM7WUFFRCxlQUFlO2lCQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUN6RixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0JBQWtCLENBQ3hCLFFBQXVCLEVBQ3ZCLEtBQWEsRUFDYixLQUFhLEVBQ2IsT0FBZTtRQUVmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBQ0Y7QUF4Q0Qsb0RBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1dvcmtzcGFjZVBhdGh9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL2ZpbGUtc3lzdGVtJztcbmltcG9ydCB7UmVzb2x2ZWRSZXNvdXJjZX0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcblxuaW1wb3J0IHtPdXRwdXROYW1lVXBncmFkZURhdGF9IGZyb20gJy4uL2RhdGEnO1xuaW1wb3J0IHtmaW5kT3V0cHV0c09uRWxlbWVudFdpdGhBdHRyLCBmaW5kT3V0cHV0c09uRWxlbWVudFdpdGhUYWd9IGZyb20gJy4uL2h0bWwtcGFyc2luZy9hbmd1bGFyJztcbmltcG9ydCB7Z2V0VmVyc2lvblVwZ3JhZGVEYXRhLCBVcGdyYWRlRGF0YX0gZnJvbSAnLi4vdXBncmFkZS1kYXRhJztcblxuLyoqXG4gKiBNaWdyYXRpb24gdGhhdCB3YWxrcyB0aHJvdWdoIGV2ZXJ5IGlubGluZSBvciBleHRlcm5hbCBIVE1MIHRlbXBsYXRlIGFuZCBzd2l0Y2hlc1xuICogY2hhbmdlZCBvdXRwdXQgYmluZGluZyBuYW1lcyB0byB0aGUgcHJvcGVyIG5ldyBvdXRwdXQgbmFtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE91dHB1dE5hbWVzTWlncmF0aW9uIGV4dGVuZHMgTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiB7XG4gIC8qKiBDaGFuZ2UgZGF0YSB0aGF0IHVwZ3JhZGVzIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IHZlcnNpb24uICovXG4gIGRhdGE6IE91dHB1dE5hbWVVcGdyYWRlRGF0YVtdID0gZ2V0VmVyc2lvblVwZ3JhZGVEYXRhKHRoaXMsICdvdXRwdXROYW1lcycpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLmRhdGEubGVuZ3RoICE9PSAwO1xuXG4gIG92ZXJyaWRlIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFJlc29sdmVkUmVzb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IGxpbWl0ZWRUbyA9IG5hbWUubGltaXRlZFRvO1xuICAgICAgY29uc3QgcmVsYXRpdmVPZmZzZXRzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICBpZiAobGltaXRlZFRvLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVsYXRpdmVPZmZzZXRzLnB1c2goXG4gICAgICAgICAgLi4uZmluZE91dHB1dHNPbkVsZW1lbnRXaXRoQXR0cih0ZW1wbGF0ZS5jb250ZW50LCBuYW1lLnJlcGxhY2UsIGxpbWl0ZWRUby5hdHRyaWJ1dGVzKSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpbWl0ZWRUby5lbGVtZW50cykge1xuICAgICAgICByZWxhdGl2ZU9mZnNldHMucHVzaChcbiAgICAgICAgICAuLi5maW5kT3V0cHV0c09uRWxlbWVudFdpdGhUYWcodGVtcGxhdGUuY29udGVudCwgbmFtZS5yZXBsYWNlLCBsaW1pdGVkVG8uZWxlbWVudHMpLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZWxhdGl2ZU9mZnNldHNcbiAgICAgICAgLm1hcChvZmZzZXQgPT4gdGVtcGxhdGUuc3RhcnQgKyBvZmZzZXQpXG4gICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+XG4gICAgICAgICAgdGhpcy5fcmVwbGFjZU91dHB1dE5hbWUodGVtcGxhdGUuZmlsZVBhdGgsIHN0YXJ0LCBuYW1lLnJlcGxhY2UubGVuZ3RoLCBuYW1lLnJlcGxhY2VXaXRoKSxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VPdXRwdXROYW1lKFxuICAgIGZpbGVQYXRoOiBXb3Jrc3BhY2VQYXRoLFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBuZXdOYW1lOiBzdHJpbmcsXG4gICkge1xuICAgIHRoaXMuZmlsZVN5c3RlbS5lZGl0KGZpbGVQYXRoKS5yZW1vdmUoc3RhcnQsIHdpZHRoKS5pbnNlcnRSaWdodChzdGFydCwgbmV3TmFtZSk7XG4gIH1cbn1cbiJdfQ==