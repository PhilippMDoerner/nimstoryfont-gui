import { computed } from '@angular/core';
import { toDeepSignal } from './deep-signal';
export function deepComputed(computation) {
    return toDeepSignal(computed(computation));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1jb21wdXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc2lnbmFscy9zcmMvZGVlcC1jb21wdXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsV0FBb0I7SUFFcEIsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWVwU2lnbmFsLCB0b0RlZXBTaWduYWwgfSBmcm9tICcuL2RlZXAtc2lnbmFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb21wdXRlZDxUIGV4dGVuZHMgb2JqZWN0PihcbiAgY29tcHV0YXRpb246ICgpID0+IFRcbik6IERlZXBTaWduYWw8VD4ge1xuICByZXR1cm4gdG9EZWVwU2lnbmFsKGNvbXB1dGVkKGNvbXB1dGF0aW9uKSk7XG59XG4iXX0=