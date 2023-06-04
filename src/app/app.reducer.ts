import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { BASE_STORE, BaseState, baseReducer } from './base.reducer';

export interface AppState {
  router: RouterReducerState,
  [ BASE_STORE ]: BaseState,
}

// REDUCER
export const rootReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  base: baseReducer,
};

// META_REDUCERS
const debugLogStyles = 'font-weight: bold';
function logger(reducer: ActionReducer<AppState>): ActionReducer<any, any> {
  return (state: AppState, action: Action): AppState => {
    const stateBefore = state;
    const stateAfter = reducer(state, action);
    
    console.groupCollapsed(action.type);
    console.log('[Debug] state before', stateBefore);
    console.log('[Debug] action', action);
    console.log('[Debug] state after', stateAfter);
    console.groupEnd();
    
    return stateAfter;
  } 
}

export const metaReducers: MetaReducer<any>[] = environment.kind === 'PRODUCTION' ? [] : [ logger ];