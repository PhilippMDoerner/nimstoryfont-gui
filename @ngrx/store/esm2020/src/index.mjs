export { createAction, props, union } from './action_creator';
export { createActionGroup, emptyProps } from './action_group_creator';
export { Store, select } from './store';
export { combineReducers, compose, createReducerFactory } from './utils';
export { ActionsSubject, INIT } from './actions_subject';
export { createFeature } from './feature_creator';
export { setNgrxMockEnvironment, isNgrxMockEnvironment } from './flags';
export { ReducerManager, ReducerObservable, ReducerManagerDispatcher, UPDATE, } from './reducer_manager';
export { ScannedActionsSubject } from './scanned_actions_subject';
export { createSelector, createSelectorFactory, createFeatureSelector, defaultMemoize, defaultStateFn, resultMemoize, } from './selector';
export { State, StateObservable, reduceState } from './state';
export { INITIAL_STATE, REDUCER_FACTORY, INITIAL_REDUCERS, STORE_FEATURES, META_REDUCERS, FEATURE_REDUCERS, USER_PROVIDED_META_REDUCERS, USER_RUNTIME_CHECKS, ACTIVE_RUNTIME_CHECKS, FEATURE_STATE_PROVIDER, ROOT_STORE_PROVIDER, } from './tokens';
export { StoreModule, StoreRootModule, StoreFeatureModule, } from './store_module';
export { provideStore, provideState } from './provide_store';
export { on, createReducer } from './reducer_creator';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N0b3JlL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBaUIsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEUsT0FBTyxFQUNMLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLE1BQU0sR0FDUCxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixjQUFjLEVBQ2QsY0FBYyxFQUtkLGFBQWEsR0FFZCxNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDOUQsT0FBTyxFQUNMLGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLDJCQUEyQixFQUMzQixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0QixtQkFBbUIsR0FDcEIsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2Ysa0JBQWtCLEdBQ25CLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQWdCLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uQ3JlYXRvcixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgQWN0aW9uUmVkdWNlckZhY3RvcnksXG4gIEFjdGlvblR5cGUsXG4gIENyZWF0b3IsXG4gIE1ldGFSZWR1Y2VyLFxuICBOb3RBbGxvd2VkQ2hlY2ssXG4gIEFjdGlvbkNyZWF0b3JQcm9wcyxcbiAgU2VsZWN0b3IsXG4gIFNlbGVjdG9yV2l0aFByb3BzLFxuICBSdW50aW1lQ2hlY2tzLFxuICBGdW5jdGlvbldpdGhQYXJhbWV0ZXJzVHlwZSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuZXhwb3J0IHsgY3JlYXRlQWN0aW9uLCBwcm9wcywgdW5pb24gfSBmcm9tICcuL2FjdGlvbl9jcmVhdG9yJztcbmV4cG9ydCB7IGNyZWF0ZUFjdGlvbkdyb3VwLCBlbXB0eVByb3BzIH0gZnJvbSAnLi9hY3Rpb25fZ3JvdXBfY3JlYXRvcic7XG5leHBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnLi9zdG9yZSc7XG5leHBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgeyBBY3Rpb25zU3ViamVjdCwgSU5JVCB9IGZyb20gJy4vYWN0aW9uc19zdWJqZWN0JztcbmV4cG9ydCB7IGNyZWF0ZUZlYXR1cmUsIEZlYXR1cmVDb25maWcgfSBmcm9tICcuL2ZlYXR1cmVfY3JlYXRvcic7XG5leHBvcnQgeyBzZXROZ3J4TW9ja0Vudmlyb25tZW50LCBpc05ncnhNb2NrRW52aXJvbm1lbnQgfSBmcm9tICcuL2ZsYWdzJztcbmV4cG9ydCB7XG4gIFJlZHVjZXJNYW5hZ2VyLFxuICBSZWR1Y2VyT2JzZXJ2YWJsZSxcbiAgUmVkdWNlck1hbmFnZXJEaXNwYXRjaGVyLFxuICBVUERBVEUsXG59IGZyb20gJy4vcmVkdWNlcl9tYW5hZ2VyJztcbmV4cG9ydCB7IFNjYW5uZWRBY3Rpb25zU3ViamVjdCB9IGZyb20gJy4vc2Nhbm5lZF9hY3Rpb25zX3N1YmplY3QnO1xuZXhwb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yRmFjdG9yeSxcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBkZWZhdWx0TWVtb2l6ZSxcbiAgZGVmYXVsdFN0YXRlRm4sXG4gIE1lbW9pemVGbixcbiAgTWVtb2l6ZWRQcm9qZWN0aW9uLFxuICBNZW1vaXplZFNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzLFxuICByZXN1bHRNZW1vaXplLFxuICBEZWZhdWx0UHJvamVjdG9yRm4sXG59IGZyb20gJy4vc2VsZWN0b3InO1xuZXhwb3J0IHsgU3RhdGUsIFN0YXRlT2JzZXJ2YWJsZSwgcmVkdWNlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmV4cG9ydCB7XG4gIElOSVRJQUxfU1RBVEUsXG4gIFJFRFVDRVJfRkFDVE9SWSxcbiAgSU5JVElBTF9SRURVQ0VSUyxcbiAgU1RPUkVfRkVBVFVSRVMsXG4gIE1FVEFfUkVEVUNFUlMsXG4gIEZFQVRVUkVfUkVEVUNFUlMsXG4gIFVTRVJfUFJPVklERURfTUVUQV9SRURVQ0VSUyxcbiAgVVNFUl9SVU5USU1FX0NIRUNLUyxcbiAgQUNUSVZFX1JVTlRJTUVfQ0hFQ0tTLFxuICBGRUFUVVJFX1NUQVRFX1BST1ZJREVSLFxuICBST09UX1NUT1JFX1BST1ZJREVSLFxufSBmcm9tICcuL3Rva2Vucyc7XG5leHBvcnQge1xuICBTdG9yZU1vZHVsZSxcbiAgU3RvcmVSb290TW9kdWxlLFxuICBTdG9yZUZlYXR1cmVNb2R1bGUsXG59IGZyb20gJy4vc3RvcmVfbW9kdWxlJztcbmV4cG9ydCB7IFJvb3RTdG9yZUNvbmZpZywgU3RvcmVDb25maWcsIEZlYXR1cmVTbGljZSB9IGZyb20gJy4vc3RvcmVfY29uZmlnJztcbmV4cG9ydCB7IHByb3ZpZGVTdG9yZSwgcHJvdmlkZVN0YXRlIH0gZnJvbSAnLi9wcm92aWRlX3N0b3JlJztcbmV4cG9ydCB7IFJlZHVjZXJUeXBlcywgb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJfY3JlYXRvcic7XG4iXX0=