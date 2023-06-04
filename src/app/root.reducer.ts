import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState, appReducer } from './app';

export interface RootState {
  router: RouterReducerState,
  app: AppState,
}

// REDUCER
export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  app: appReducer
};

// META_REDUCERS
function logger(reducer: ActionReducer<RootState>): ActionReducer<any, any> {
  return (state: RootState, action: Action): RootState => {
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