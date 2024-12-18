import { getEntityIdSelector, getEntityStateKeys, setEntitiesMutably, } from '../helpers';
export function setAllEntities(entities, config) {
    const selectId = getEntityIdSelector(config);
    const stateKeys = getEntityStateKeys(config);
    return () => {
        const state = { entityMap: {}, ids: [] };
        setEntitiesMutably(state, entities, selectId);
        return {
            [stateKeys.entityMapKey]: state.entityMap,
            [stateKeys.idsKey]: state.ids,
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWFsbC1lbnRpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc2lnbmFscy9lbnRpdGllcy9zcmMvdXBkYXRlcnMvc2V0LWFsbC1lbnRpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxZQUFZLENBQUM7QUFvQnBCLE1BQU0sVUFBVSxjQUFjLENBQzVCLFFBQWUsRUFDZixNQUFnRTtJQUVoRSxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxNQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3QyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sS0FBSyxHQUFxQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzNELGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsT0FBTztZQUNMLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQ3pDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQzlCLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFydGlhbFN0YXRlVXBkYXRlciB9IGZyb20gJ0BuZ3J4L3NpZ25hbHMnO1xuaW1wb3J0IHtcbiAgRW50aXR5SWQsXG4gIEVudGl0eVN0YXRlLFxuICBOYW1lZEVudGl0eVN0YXRlLFxuICBTZWxlY3RFbnRpdHlJZCxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gIGdldEVudGl0eUlkU2VsZWN0b3IsXG4gIGdldEVudGl0eVN0YXRlS2V5cyxcbiAgc2V0RW50aXRpZXNNdXRhYmx5LFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbEVudGl0aWVzPEVudGl0eSBleHRlbmRzIHsgaWQ6IEVudGl0eUlkIH0+KFxuICBlbnRpdGllczogRW50aXR5W11cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8RW50aXR5U3RhdGU8RW50aXR5Pj47XG5leHBvcnQgZnVuY3Rpb24gc2V0QWxsRW50aXRpZXM8RW50aXR5LCBDb2xsZWN0aW9uIGV4dGVuZHMgc3RyaW5nPihcbiAgZW50aXRpZXM6IEVudGl0eVtdLFxuICBjb25maWc6IHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbjsgc2VsZWN0SWQ6IFNlbGVjdEVudGl0eUlkPE5vSW5mZXI8RW50aXR5Pj4gfVxuKTogUGFydGlhbFN0YXRlVXBkYXRlcjxOYW1lZEVudGl0eVN0YXRlPEVudGl0eSwgQ29sbGVjdGlvbj4+O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbEVudGl0aWVzPFxuICBFbnRpdHkgZXh0ZW5kcyB7IGlkOiBFbnRpdHlJZCB9LFxuICBDb2xsZWN0aW9uIGV4dGVuZHMgc3RyaW5nXG4+KFxuICBlbnRpdGllczogRW50aXR5W10sXG4gIGNvbmZpZzogeyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uIH1cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8TmFtZWRFbnRpdHlTdGF0ZTxFbnRpdHksIENvbGxlY3Rpb24+PjtcbmV4cG9ydCBmdW5jdGlvbiBzZXRBbGxFbnRpdGllczxFbnRpdHk+KFxuICBlbnRpdGllczogRW50aXR5W10sXG4gIGNvbmZpZzogeyBzZWxlY3RJZDogU2VsZWN0RW50aXR5SWQ8Tm9JbmZlcjxFbnRpdHk+PiB9XG4pOiBQYXJ0aWFsU3RhdGVVcGRhdGVyPEVudGl0eVN0YXRlPEVudGl0eT4+O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbEVudGl0aWVzKFxuICBlbnRpdGllczogYW55W10sXG4gIGNvbmZpZz86IHsgY29sbGVjdGlvbj86IHN0cmluZzsgc2VsZWN0SWQ/OiBTZWxlY3RFbnRpdHlJZDxhbnk+IH1cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8RW50aXR5U3RhdGU8YW55PiB8IE5hbWVkRW50aXR5U3RhdGU8YW55LCBzdHJpbmc+PiB7XG4gIGNvbnN0IHNlbGVjdElkID0gZ2V0RW50aXR5SWRTZWxlY3Rvcihjb25maWcpO1xuICBjb25zdCBzdGF0ZUtleXMgPSBnZXRFbnRpdHlTdGF0ZUtleXMoY29uZmlnKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlOiBFbnRpdHlTdGF0ZTxhbnk+ID0geyBlbnRpdHlNYXA6IHt9LCBpZHM6IFtdIH07XG4gICAgc2V0RW50aXRpZXNNdXRhYmx5KHN0YXRlLCBlbnRpdGllcywgc2VsZWN0SWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtzdGF0ZUtleXMuZW50aXR5TWFwS2V5XTogc3RhdGUuZW50aXR5TWFwLFxuICAgICAgW3N0YXRlS2V5cy5pZHNLZXldOiBzdGF0ZS5pZHMsXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==