import { buildingFailed, validationFailed } from '../error_helpers';
import { ENTER_CLASSNAME, LEAVE_CLASSNAME, normalizeStyles } from '../util';
import { warnValidation } from '../warning_helpers';
import { buildAnimationAst } from './animation_ast_builder';
import { buildAnimationTimelines } from './animation_timeline_builder';
import { ElementInstructionMap } from './element_instruction_map';
export class Animation {
    constructor(_driver, input) {
        this._driver = _driver;
        const errors = [];
        const warnings = [];
        const ast = buildAnimationAst(_driver, input, errors, warnings);
        if (errors.length) {
            throw validationFailed(errors);
        }
        if (warnings.length) {
            warnValidation(warnings);
        }
        this._animationAst = ast;
    }
    buildTimelines(element, startingStyles, destinationStyles, options, subInstructions) {
        const start = Array.isArray(startingStyles)
            ? normalizeStyles(startingStyles)
            : startingStyles;
        const dest = Array.isArray(destinationStyles)
            ? normalizeStyles(destinationStyles)
            : destinationStyles;
        const errors = [];
        subInstructions = subInstructions || new ElementInstructionMap();
        const result = buildAnimationTimelines(this._driver, element, this._animationAst, ENTER_CLASSNAME, LEAVE_CLASSNAME, start, dest, options, subInstructions, errors);
        if (errors.length) {
            throw buildingFailed(errors);
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9kc2wvYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sRUFBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRSxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBR2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXJFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE1BQU0sT0FBTyxTQUFTO0lBRXBCLFlBQ1UsT0FBd0IsRUFDaEMsS0FBOEM7UUFEdEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFHaEMsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1FBQzNCLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixNQUFNLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjLENBQ1osT0FBWSxFQUNaLGNBQW9ELEVBQ3BELGlCQUF1RCxFQUN2RCxPQUF5QixFQUN6QixlQUF1QztRQUV2QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUN6QyxDQUFDLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztZQUNqQyxDQUFDLENBQWdCLGNBQWMsQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzNDLENBQUMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7WUFDcEMsQ0FBQyxDQUFnQixpQkFBaUIsQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDdkIsZUFBZSxHQUFHLGVBQWUsSUFBSSxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDakUsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLENBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQ1osT0FBTyxFQUNQLElBQUksQ0FBQyxhQUFhLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsS0FBSyxFQUNMLElBQUksRUFDSixPQUFPLEVBQ1AsZUFBZSxFQUNmLE1BQU0sQ0FDUCxDQUFDO1FBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cbmltcG9ydCB7XG4gIEFuaW1hdGlvbk1ldGFkYXRhLFxuICBBbmltYXRpb25NZXRhZGF0YVR5cGUsXG4gIEFuaW1hdGlvbk9wdGlvbnMsXG4gIMm1U3R5bGVEYXRhTWFwLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtidWlsZGluZ0ZhaWxlZCwgdmFsaWRhdGlvbkZhaWxlZH0gZnJvbSAnLi4vZXJyb3JfaGVscGVycyc7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlcn0gZnJvbSAnLi4vcmVuZGVyL2FuaW1hdGlvbl9kcml2ZXInO1xuaW1wb3J0IHtFTlRFUl9DTEFTU05BTUUsIExFQVZFX0NMQVNTTkFNRSwgbm9ybWFsaXplU3R5bGVzfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7d2FyblZhbGlkYXRpb259IGZyb20gJy4uL3dhcm5pbmdfaGVscGVycyc7XG5cbmltcG9ydCB7QXN0fSBmcm9tICcuL2FuaW1hdGlvbl9hc3QnO1xuaW1wb3J0IHtidWlsZEFuaW1hdGlvbkFzdH0gZnJvbSAnLi9hbmltYXRpb25fYXN0X2J1aWxkZXInO1xuaW1wb3J0IHtidWlsZEFuaW1hdGlvblRpbWVsaW5lc30gZnJvbSAnLi9hbmltYXRpb25fdGltZWxpbmVfYnVpbGRlcic7XG5pbXBvcnQge0FuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb259IGZyb20gJy4vYW5pbWF0aW9uX3RpbWVsaW5lX2luc3RydWN0aW9uJztcbmltcG9ydCB7RWxlbWVudEluc3RydWN0aW9uTWFwfSBmcm9tICcuL2VsZW1lbnRfaW5zdHJ1Y3Rpb25fbWFwJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkFzdDogQXN0PEFuaW1hdGlvbk1ldGFkYXRhVHlwZT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RyaXZlcjogQW5pbWF0aW9uRHJpdmVyLFxuICAgIGlucHV0OiBBbmltYXRpb25NZXRhZGF0YSB8IEFuaW1hdGlvbk1ldGFkYXRhW10sXG4gICkge1xuICAgIGNvbnN0IGVycm9yczogRXJyb3JbXSA9IFtdO1xuICAgIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGFzdCA9IGJ1aWxkQW5pbWF0aW9uQXN0KF9kcml2ZXIsIGlucHV0LCBlcnJvcnMsIHdhcm5pbmdzKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgdmFsaWRhdGlvbkZhaWxlZChlcnJvcnMpO1xuICAgIH1cbiAgICBpZiAod2FybmluZ3MubGVuZ3RoKSB7XG4gICAgICB3YXJuVmFsaWRhdGlvbih3YXJuaW5ncyk7XG4gICAgfVxuICAgIHRoaXMuX2FuaW1hdGlvbkFzdCA9IGFzdDtcbiAgfVxuXG4gIGJ1aWxkVGltZWxpbmVzKFxuICAgIGVsZW1lbnQ6IGFueSxcbiAgICBzdGFydGluZ1N0eWxlczogybVTdHlsZURhdGFNYXAgfCBBcnJheTzJtVN0eWxlRGF0YU1hcD4sXG4gICAgZGVzdGluYXRpb25TdHlsZXM6IMm1U3R5bGVEYXRhTWFwIHwgQXJyYXk8ybVTdHlsZURhdGFNYXA+LFxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMsXG4gICAgc3ViSW5zdHJ1Y3Rpb25zPzogRWxlbWVudEluc3RydWN0aW9uTWFwLFxuICApOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10ge1xuICAgIGNvbnN0IHN0YXJ0ID0gQXJyYXkuaXNBcnJheShzdGFydGluZ1N0eWxlcylcbiAgICAgID8gbm9ybWFsaXplU3R5bGVzKHN0YXJ0aW5nU3R5bGVzKVxuICAgICAgOiA8ybVTdHlsZURhdGFNYXA+c3RhcnRpbmdTdHlsZXM7XG4gICAgY29uc3QgZGVzdCA9IEFycmF5LmlzQXJyYXkoZGVzdGluYXRpb25TdHlsZXMpXG4gICAgICA/IG5vcm1hbGl6ZVN0eWxlcyhkZXN0aW5hdGlvblN0eWxlcylcbiAgICAgIDogPMm1U3R5bGVEYXRhTWFwPmRlc3RpbmF0aW9uU3R5bGVzO1xuICAgIGNvbnN0IGVycm9yczogYW55ID0gW107XG4gICAgc3ViSW5zdHJ1Y3Rpb25zID0gc3ViSW5zdHJ1Y3Rpb25zIHx8IG5ldyBFbGVtZW50SW5zdHJ1Y3Rpb25NYXAoKTtcbiAgICBjb25zdCByZXN1bHQgPSBidWlsZEFuaW1hdGlvblRpbWVsaW5lcyhcbiAgICAgIHRoaXMuX2RyaXZlcixcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLl9hbmltYXRpb25Bc3QsXG4gICAgICBFTlRFUl9DTEFTU05BTUUsXG4gICAgICBMRUFWRV9DTEFTU05BTUUsXG4gICAgICBzdGFydCxcbiAgICAgIGRlc3QsXG4gICAgICBvcHRpb25zLFxuICAgICAgc3ViSW5zdHJ1Y3Rpb25zLFxuICAgICAgZXJyb3JzLFxuICAgICk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGJ1aWxkaW5nRmFpbGVkKGVycm9ycyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==