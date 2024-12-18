/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/** Added for readability when accessing stable property names. */
export function getEventType(eventInfo) {
    return eventInfo.eventType;
}
/** Added for readability when accessing stable property names. */
export function setEventType(eventInfo, eventType) {
    eventInfo.eventType = eventType;
}
/** Added for readability when accessing stable property names. */
export function getEvent(eventInfo) {
    return eventInfo.event;
}
/** Added for readability when accessing stable property names. */
export function setEvent(eventInfo, event) {
    eventInfo.event = event;
}
/** Added for readability when accessing stable property names. */
export function getTargetElement(eventInfo) {
    return eventInfo.targetElement;
}
/** Added for readability when accessing stable property names. */
export function setTargetElement(eventInfo, targetElement) {
    eventInfo.targetElement = targetElement;
}
/** Added for readability when accessing stable property names. */
export function getContainer(eventInfo) {
    return eventInfo.eic;
}
/** Added for readability when accessing stable property names. */
export function setContainer(eventInfo, container) {
    eventInfo.eic = container;
}
/** Added for readability when accessing stable property names. */
export function getTimestamp(eventInfo) {
    return eventInfo.timeStamp;
}
/** Added for readability when accessing stable property names. */
export function setTimestamp(eventInfo, timestamp) {
    eventInfo.timeStamp = timestamp;
}
/** Added for readability when accessing stable property names. */
export function getAction(eventInfo) {
    return eventInfo.eia;
}
/** Added for readability when accessing stable property names. */
export function setAction(eventInfo, actionName, actionElement) {
    eventInfo.eia = [actionName, actionElement];
}
/** Added for readability when accessing stable property names. */
export function unsetAction(eventInfo) {
    eventInfo.eia = undefined;
}
/** Added for readability when accessing stable property names. */
export function getActionName(actionInfo) {
    return actionInfo[0];
}
/** Added for readability when accessing stable property names. */
export function getActionElement(actionInfo) {
    return actionInfo[1];
}
/** Added for readability when accessing stable property names. */
export function getIsReplay(eventInfo) {
    return eventInfo.eirp;
}
/** Added for readability when accessing stable property names. */
export function setIsReplay(eventInfo, replay) {
    eventInfo.eirp = replay;
}
/** Added for readability when accessing stable property names. */
export function getA11yClickKey(eventInfo) {
    return eventInfo.eiack;
}
/** Added for readability when accessing stable property names. */
export function setA11yClickKey(eventInfo, a11yClickKey) {
    eventInfo.eiack = a11yClickKey;
}
/** Added for readability when accessing stable property names. */
export function getResolved(eventInfo) {
    return eventInfo.eir;
}
/** Added for readability when accessing stable property names. */
export function setResolved(eventInfo, resolved) {
    eventInfo.eir = resolved;
}
/** Clones an `EventInfo` */
export function cloneEventInfo(eventInfo) {
    return {
        eventType: eventInfo.eventType,
        event: eventInfo.event,
        targetElement: eventInfo.targetElement,
        eic: eventInfo.eic,
        eia: eventInfo.eia,
        timeStamp: eventInfo.timeStamp,
        eirp: eventInfo.eirp,
        eiack: eventInfo.eiack,
        eir: eventInfo.eir,
    };
}
/**
 * Utility function for creating an `EventInfo`.
 *
 * This can be used from code-size sensitive compilation units, as taking
 * parameters vs. an `Object` literal reduces code size.
 */
export function createEventInfoFromParameters(eventType, event, targetElement, container, timestamp, action, isReplay, a11yClickKey) {
    return {
        eventType,
        event,
        targetElement,
        eic: container,
        timeStamp: timestamp,
        eia: action,
        eirp: isReplay,
        eiack: a11yClickKey,
    };
}
/**
 * Utility function for creating an `EventInfo`.
 *
 * This should be used in compilation units that are less sensitive to code
 * size.
 */
export function createEventInfo({ eventType, event, targetElement, container, timestamp, action, isReplay, a11yClickKey, }) {
    return {
        eventType,
        event,
        targetElement,
        eic: container,
        timeStamp: timestamp,
        eia: action ? [action.name, action.element] : undefined,
        eirp: isReplay,
        eiack: a11yClickKey,
    };
}
/**
 * Utility class around an `EventInfo`.
 *
 * This should be used in compilation units that are less sensitive to code
 * size.
 */
export class EventInfoWrapper {
    constructor(eventInfo) {
        this.eventInfo = eventInfo;
    }
    getEventType() {
        return getEventType(this.eventInfo);
    }
    setEventType(eventType) {
        setEventType(this.eventInfo, eventType);
    }
    getEvent() {
        return getEvent(this.eventInfo);
    }
    setEvent(event) {
        setEvent(this.eventInfo, event);
    }
    getTargetElement() {
        return getTargetElement(this.eventInfo);
    }
    setTargetElement(targetElement) {
        setTargetElement(this.eventInfo, targetElement);
    }
    getContainer() {
        return getContainer(this.eventInfo);
    }
    setContainer(container) {
        setContainer(this.eventInfo, container);
    }
    getTimestamp() {
        return getTimestamp(this.eventInfo);
    }
    setTimestamp(timestamp) {
        setTimestamp(this.eventInfo, timestamp);
    }
    getAction() {
        const action = getAction(this.eventInfo);
        if (!action)
            return undefined;
        return {
            name: action[0],
            element: action[1],
        };
    }
    setAction(action) {
        if (!action) {
            unsetAction(this.eventInfo);
            return;
        }
        setAction(this.eventInfo, action.name, action.element);
    }
    getIsReplay() {
        return getIsReplay(this.eventInfo);
    }
    setIsReplay(replay) {
        setIsReplay(this.eventInfo, replay);
    }
    getResolved() {
        return getResolved(this.eventInfo);
    }
    setResolved(resolved) {
        setResolved(this.eventInfo, resolved);
    }
    clone() {
        return new EventInfoWrapper(cloneEventInfo(this.eventInfo));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvcHJpbWl0aXZlcy9ldmVudC1kaXNwYXRjaC9zcmMvZXZlbnRfaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFzREgsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxZQUFZLENBQUMsU0FBb0I7SUFDL0MsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQzdCLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLFlBQVksQ0FBQyxTQUFvQixFQUFFLFNBQWlCO0lBQ2xFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLFFBQVEsQ0FBQyxTQUFvQjtJQUMzQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDekIsQ0FBQztBQUVELGtFQUFrRTtBQUNsRSxNQUFNLFVBQVUsUUFBUSxDQUFDLFNBQW9CLEVBQUUsS0FBWTtJQUN6RCxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMxQixDQUFDO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxTQUFvQjtJQUNuRCxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFDakMsQ0FBQztBQUVELGtFQUFrRTtBQUNsRSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsU0FBb0IsRUFBRSxhQUFzQjtJQUMzRSxTQUFTLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUMxQyxDQUFDO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxZQUFZLENBQUMsU0FBb0I7SUFDL0MsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLFlBQVksQ0FBQyxTQUFvQixFQUFFLFNBQWtCO0lBQ25F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UyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBaUI7UUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBSZWNvcmRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhY3Rpb24gdGhhdCBzaG91bGQgaGFuZGxlIGEgZ2l2ZW4gYEV2ZW50YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25JbmZvIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbGVtZW50OiBFbGVtZW50O1xufVxuXG50eXBlIEFjdGlvbkluZm9JbnRlcm5hbCA9IFtuYW1lOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnRdO1xuXG4vKipcbiAqIFJlY29yZHMgaW5mb3JtYXRpb24gZm9yIGxhdGVyIGhhbmRsaW5nIG9mIGV2ZW50cy4gVGhpcyB0eXBlIGlzXG4gKiBzaGFyZWQsIGFuZCBpbnN0YW5jZXMgb2YgaXQgYXJlIHBhc3NlZCwgYmV0d2VlbiB0aGUgZXZlbnRjb250cmFjdFxuICogYW5kIHRoZSBkaXNwYXRjaGVyIGpzYmluYXJ5LiBUaGVyZWZvcmUsIHRoZSBmaWVsZHMgb2YgdGhpcyB0eXBlIGFyZVxuICogcmVmZXJlbmNlZCBieSBzdHJpbmcgbGl0ZXJhbHMgcmF0aGVyIHRoYW4gcHJvcGVydHkgbGl0ZXJhbHNcbiAqIHRocm91Z2hvdXQgdGhlIGNvZGUuXG4gKlxuICogJ3RhcmdldEVsZW1lbnQnIGlzIHRoZSBlbGVtZW50IHRoZSBhY3Rpb24gb2NjdXJyZWQgb24sICdhY3Rpb25FbGVtZW50J1xuICogaXMgdGhlIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGpzYWN0aW9uIGhhbmRsZXIuXG4gKlxuICogQSBudWxsICdhY3Rpb25FbGVtZW50JyBpZGVudGlmaWVzIGFuIEV2ZW50SW5mbyBpbnN0YW5jZSB0aGF0IGRpZG4ndCBtYXRjaCBhXG4gKiBqc2FjdGlvbiBhdHRyaWJ1dGUuICBUaGlzIGFsbG93cyB1cyB0byBleGVjdXRlIGdsb2JhbCBldmVudCBoYW5kbGVycyB3aXRoIHRoZVxuICogYXBwcm9wcmlhdGUgZXZlbnQgdHlwZSAoaW5jbHVkaW5nIGExMXkgY2xpY2tzIGFuZCBjdXN0b20gZXZlbnRzKS5cbiAqIFRoZSBkZWNsYXJlIHBvcnRpb24gb2YgdGhpcyBpbnRlcmZhY2UgY3JlYXRlcyBhIHNldCBvZiBleHRlcm5zIHRoYXQgbWFrZSBzdXJlXG4gKiByZW5hbWluZyBkb2Vzbid0IGhhcHBlbiBmb3IgRXZlbnRJbmZvLiBUaGlzIGlzIGltcG9ydGFudCBzaW5jZSBFdmVudEluZm9cbiAqIGlzIHNoYXJlZCBhY3Jvc3MgbXVsdGlwbGUgYmluYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBFdmVudEluZm8ge1xuICBldmVudFR5cGU6IHN0cmluZztcbiAgZXZlbnQ6IEV2ZW50O1xuICB0YXJnZXRFbGVtZW50OiBFbGVtZW50O1xuICAvKiogVGhlIGVsZW1lbnQgdGhhdCBpcyB0aGUgY29udGFpbmVyIGZvciB0aGlzIEV2ZW50LiAqL1xuICBlaWM6IEVsZW1lbnQ7XG4gIHRpbWVTdGFtcDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGFjdGlvbiBwYXJzZWQgZnJvbSB0aGUgSlNBY3Rpb24gZWxlbWVudC5cbiAgICovXG4gIGVpYT86IEFjdGlvbkluZm9JbnRlcm5hbDtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBgRXZlbnRgIGlzIGEgcmVwbGF5IGV2ZW50LCBtZWFuaW5nIG5vIGRpc3BhdGNoZXIgd2FzXG4gICAqIGluc3RhbGxlZCB3aGVuIHRoaXMgYEV2ZW50YCB3YXMgb3JpZ2luYWxseSBkaXNwYXRjaGVkLlxuICAgKi9cbiAgZWlycD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgYEV2ZW50YCByZXByZXNlbnRzIGEgYGtleWRvd25gIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHByb2Nlc3NlZFxuICAgKiBhcyBhIGBjbGlja2AuIE9ubHkgdXNlZCB3aGVuIGExMXkgY2xpY2sgZXZlbnRzIGlzIG9uLlxuICAgKi9cbiAgZWlhY2s/OiBib29sZWFuO1xuICAvKiogV2hldGhlciBhY3Rpb24gcmVzb2x1dGlvbiBoYXMgYWxyZWFkeSBydW4gb24gdGhpcyBgRXZlbnRJbmZvYC4gKi9cbiAgZWlyPzogYm9vbGVhbjtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRUeXBlKGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZXZlbnRUeXBlO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudFR5cGUoZXZlbnRJbmZvOiBFdmVudEluZm8sIGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gIGV2ZW50SW5mby5ldmVudFR5cGUgPSBldmVudFR5cGU7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZXZlbnQ7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEV2ZW50KGV2ZW50SW5mbzogRXZlbnRJbmZvLCBldmVudDogRXZlbnQpIHtcbiAgZXZlbnRJbmZvLmV2ZW50ID0gZXZlbnQ7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldEVsZW1lbnQoZXZlbnRJbmZvOiBFdmVudEluZm8pIHtcbiAgcmV0dXJuIGV2ZW50SW5mby50YXJnZXRFbGVtZW50O1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXJnZXRFbGVtZW50KGV2ZW50SW5mbzogRXZlbnRJbmZvLCB0YXJnZXRFbGVtZW50OiBFbGVtZW50KSB7XG4gIGV2ZW50SW5mby50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZWljO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250YWluZXIoZXZlbnRJbmZvOiBFdmVudEluZm8sIGNvbnRhaW5lcjogRWxlbWVudCkge1xuICBldmVudEluZm8uZWljID0gY29udGFpbmVyO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoZXZlbnRJbmZvOiBFdmVudEluZm8pIHtcbiAgcmV0dXJuIGV2ZW50SW5mby50aW1lU3RhbXA7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWVzdGFtcChldmVudEluZm86IEV2ZW50SW5mbywgdGltZXN0YW1wOiBudW1iZXIpIHtcbiAgZXZlbnRJbmZvLnRpbWVTdGFtcCA9IHRpbWVzdGFtcDtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uKGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZWlhO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3Rpb24oZXZlbnRJbmZvOiBFdmVudEluZm8sIGFjdGlvbk5hbWU6IHN0cmluZywgYWN0aW9uRWxlbWVudDogRWxlbWVudCkge1xuICBldmVudEluZm8uZWlhID0gW2FjdGlvbk5hbWUsIGFjdGlvbkVsZW1lbnRdO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnNldEFjdGlvbihldmVudEluZm86IEV2ZW50SW5mbykge1xuICBldmVudEluZm8uZWlhID0gdW5kZWZpbmVkO1xufVxuXG4vKiogQWRkZWQgZm9yIHJlYWRhYmlsaXR5IHdoZW4gYWNjZXNzaW5nIHN0YWJsZSBwcm9wZXJ0eSBuYW1lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25OYW1lKGFjdGlvbkluZm86IEFjdGlvbkluZm9JbnRlcm5hbCkge1xuICByZXR1cm4gYWN0aW9uSW5mb1swXTtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uRWxlbWVudChhY3Rpb25JbmZvOiBBY3Rpb25JbmZvSW50ZXJuYWwpIHtcbiAgcmV0dXJuIGFjdGlvbkluZm9bMV07XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElzUmVwbGF5KGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZWlycDtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SXNSZXBsYXkoZXZlbnRJbmZvOiBFdmVudEluZm8sIHJlcGxheTogYm9vbGVhbikge1xuICBldmVudEluZm8uZWlycCA9IHJlcGxheTtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QTExeUNsaWNrS2V5KGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7XG4gIHJldHVybiBldmVudEluZm8uZWlhY2s7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEExMXlDbGlja0tleShldmVudEluZm86IEV2ZW50SW5mbywgYTExeUNsaWNrS2V5OiBib29sZWFuKSB7XG4gIGV2ZW50SW5mby5laWFjayA9IGExMXlDbGlja0tleTtcbn1cblxuLyoqIEFkZGVkIGZvciByZWFkYWJpbGl0eSB3aGVuIGFjY2Vzc2luZyBzdGFibGUgcHJvcGVydHkgbmFtZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb2x2ZWQoZXZlbnRJbmZvOiBFdmVudEluZm8pIHtcbiAgcmV0dXJuIGV2ZW50SW5mby5laXI7XG59XG5cbi8qKiBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgd2hlbiBhY2Nlc3Npbmcgc3RhYmxlIHByb3BlcnR5IG5hbWVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFJlc29sdmVkKGV2ZW50SW5mbzogRXZlbnRJbmZvLCByZXNvbHZlZDogYm9vbGVhbikge1xuICBldmVudEluZm8uZWlyID0gcmVzb2x2ZWQ7XG59XG5cbi8qKiBDbG9uZXMgYW4gYEV2ZW50SW5mb2AgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUV2ZW50SW5mbyhldmVudEluZm86IEV2ZW50SW5mbyk6IEV2ZW50SW5mbyB7XG4gIHJldHVybiB7XG4gICAgZXZlbnRUeXBlOiBldmVudEluZm8uZXZlbnRUeXBlLFxuICAgIGV2ZW50OiBldmVudEluZm8uZXZlbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogZXZlbnRJbmZvLnRhcmdldEVsZW1lbnQsXG4gICAgZWljOiBldmVudEluZm8uZWljLFxuICAgIGVpYTogZXZlbnRJbmZvLmVpYSxcbiAgICB0aW1lU3RhbXA6IGV2ZW50SW5mby50aW1lU3RhbXAsXG4gICAgZWlycDogZXZlbnRJbmZvLmVpcnAsXG4gICAgZWlhY2s6IGV2ZW50SW5mby5laWFjayxcbiAgICBlaXI6IGV2ZW50SW5mby5laXIsXG4gIH07XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYW4gYEV2ZW50SW5mb2AuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBmcm9tIGNvZGUtc2l6ZSBzZW5zaXRpdmUgY29tcGlsYXRpb24gdW5pdHMsIGFzIHRha2luZ1xuICogcGFyYW1ldGVycyB2cy4gYW4gYE9iamVjdGAgbGl0ZXJhbCByZWR1Y2VzIGNvZGUgc2l6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SW5mb0Zyb21QYXJhbWV0ZXJzKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgZXZlbnQ6IEV2ZW50LFxuICB0YXJnZXRFbGVtZW50OiBFbGVtZW50LFxuICBjb250YWluZXI6IEVsZW1lbnQsXG4gIHRpbWVzdGFtcDogbnVtYmVyLFxuICBhY3Rpb24/OiBBY3Rpb25JbmZvSW50ZXJuYWwsXG4gIGlzUmVwbGF5PzogYm9vbGVhbixcbiAgYTExeUNsaWNrS2V5PzogYm9vbGVhbixcbik6IEV2ZW50SW5mbyB7XG4gIHJldHVybiB7XG4gICAgZXZlbnRUeXBlLFxuICAgIGV2ZW50LFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgZWljOiBjb250YWluZXIsXG4gICAgdGltZVN0YW1wOiB0aW1lc3RhbXAsXG4gICAgZWlhOiBhY3Rpb24sXG4gICAgZWlycDogaXNSZXBsYXksXG4gICAgZWlhY2s6IGExMXlDbGlja0tleSxcbiAgfTtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhbiBgRXZlbnRJbmZvYC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIGNvbXBpbGF0aW9uIHVuaXRzIHRoYXQgYXJlIGxlc3Mgc2Vuc2l0aXZlIHRvIGNvZGVcbiAqIHNpemUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudEluZm8oe1xuICBldmVudFR5cGUsXG4gIGV2ZW50LFxuICB0YXJnZXRFbGVtZW50LFxuICBjb250YWluZXIsXG4gIHRpbWVzdGFtcCxcbiAgYWN0aW9uLFxuICBpc1JlcGxheSxcbiAgYTExeUNsaWNrS2V5LFxufToge1xuICBldmVudFR5cGU6IHN0cmluZztcbiAgZXZlbnQ6IEV2ZW50O1xuICB0YXJnZXRFbGVtZW50OiBFbGVtZW50O1xuICBjb250YWluZXI6IEVsZW1lbnQ7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBhY3Rpb24/OiBBY3Rpb25JbmZvO1xuICBpc1JlcGxheT86IGJvb2xlYW47XG4gIGExMXlDbGlja0tleT86IGJvb2xlYW47XG59KTogRXZlbnRJbmZvIHtcbiAgcmV0dXJuIHtcbiAgICBldmVudFR5cGUsXG4gICAgZXZlbnQsXG4gICAgdGFyZ2V0RWxlbWVudCxcbiAgICBlaWM6IGNvbnRhaW5lcixcbiAgICB0aW1lU3RhbXA6IHRpbWVzdGFtcCxcbiAgICBlaWE6IGFjdGlvbiA/IFthY3Rpb24ubmFtZSwgYWN0aW9uLmVsZW1lbnRdIDogdW5kZWZpbmVkLFxuICAgIGVpcnA6IGlzUmVwbGF5LFxuICAgIGVpYWNrOiBhMTF5Q2xpY2tLZXksXG4gIH07XG59XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBhcm91bmQgYW4gYEV2ZW50SW5mb2AuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiBjb21waWxhdGlvbiB1bml0cyB0aGF0IGFyZSBsZXNzIHNlbnNpdGl2ZSB0byBjb2RlXG4gKiBzaXplLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRJbmZvV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGV2ZW50SW5mbzogRXZlbnRJbmZvKSB7fVxuXG4gIGdldEV2ZW50VHlwZSgpIHtcbiAgICByZXR1cm4gZ2V0RXZlbnRUeXBlKHRoaXMuZXZlbnRJbmZvKTtcbiAgfVxuXG4gIHNldEV2ZW50VHlwZShldmVudFR5cGU6IHN0cmluZykge1xuICAgIHNldEV2ZW50VHlwZSh0aGlzLmV2ZW50SW5mbywgZXZlbnRUeXBlKTtcbiAgfVxuXG4gIGdldEV2ZW50KCkge1xuICAgIHJldHVybiBnZXRFdmVudCh0aGlzLmV2ZW50SW5mbyk7XG4gIH1cblxuICBzZXRFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBzZXRFdmVudCh0aGlzLmV2ZW50SW5mbywgZXZlbnQpO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0RWxlbWVudCh0aGlzLmV2ZW50SW5mbyk7XG4gIH1cblxuICBzZXRUYXJnZXRFbGVtZW50KHRhcmdldEVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBzZXRUYXJnZXRFbGVtZW50KHRoaXMuZXZlbnRJbmZvLCB0YXJnZXRFbGVtZW50KTtcbiAgfVxuXG4gIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZ2V0Q29udGFpbmVyKHRoaXMuZXZlbnRJbmZvKTtcbiAgfVxuXG4gIHNldENvbnRhaW5lcihjb250YWluZXI6IEVsZW1lbnQpIHtcbiAgICBzZXRDb250YWluZXIodGhpcy5ldmVudEluZm8sIGNvbnRhaW5lcik7XG4gIH1cbiAgZ2V0VGltZXN0YW1wKCkge1xuICAgIHJldHVybiBnZXRUaW1lc3RhbXAodGhpcy5ldmVudEluZm8pO1xuICB9XG5cbiAgc2V0VGltZXN0YW1wKHRpbWVzdGFtcDogbnVtYmVyKSB7XG4gICAgc2V0VGltZXN0YW1wKHRoaXMuZXZlbnRJbmZvLCB0aW1lc3RhbXApO1xuICB9XG5cbiAgZ2V0QWN0aW9uKCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IGdldEFjdGlvbih0aGlzLmV2ZW50SW5mbyk7XG4gICAgaWYgKCFhY3Rpb24pIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGFjdGlvblswXSxcbiAgICAgIGVsZW1lbnQ6IGFjdGlvblsxXSxcbiAgICB9O1xuICB9XG5cbiAgc2V0QWN0aW9uKGFjdGlvbjogQWN0aW9uSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICB1bnNldEFjdGlvbih0aGlzLmV2ZW50SW5mbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFjdGlvbih0aGlzLmV2ZW50SW5mbywgYWN0aW9uLm5hbWUsIGFjdGlvbi5lbGVtZW50KTtcbiAgfVxuXG4gIGdldElzUmVwbGF5KCkge1xuICAgIHJldHVybiBnZXRJc1JlcGxheSh0aGlzLmV2ZW50SW5mbyk7XG4gIH1cblxuICBzZXRJc1JlcGxheShyZXBsYXk6IGJvb2xlYW4pIHtcbiAgICBzZXRJc1JlcGxheSh0aGlzLmV2ZW50SW5mbywgcmVwbGF5KTtcbiAgfVxuXG4gIGdldFJlc29sdmVkKCkge1xuICAgIHJldHVybiBnZXRSZXNvbHZlZCh0aGlzLmV2ZW50SW5mbyk7XG4gIH1cblxuICBzZXRSZXNvbHZlZChyZXNvbHZlZDogYm9vbGVhbikge1xuICAgIHNldFJlc29sdmVkKHRoaXMuZXZlbnRJbmZvLCByZXNvbHZlZCk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50SW5mb1dyYXBwZXIoY2xvbmVFdmVudEluZm8odGhpcy5ldmVudEluZm8pKTtcbiAgfVxufVxuIl19