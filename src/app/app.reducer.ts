import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface State {
  router: RouterReducerState
}

export const rootReducers: ActionReducerMap<State> = {
  router: routerReducer,
};

const debugLogStyles = 'font-weight: bold';

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return (state: State, action: Action): State => {
    const stateBefore = state;
    const stateAfter = reducer(state, action);
    
    console.group(action.type);
    console.log('[Debug] state before', debugLogStyles, stateBefore);
    console.log('[Debug] action', debugLogStyles, action);
    console.log('[Debug] state after', debugLogStyles, stateAfter);
    console.groupEnd();
    
    return stateAfter;
  } 
}

export const metaReducers: MetaReducer<any>[] = environment.kind === 'PRODUCTION' ? [ logger ] : [];