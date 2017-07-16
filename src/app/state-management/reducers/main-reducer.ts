import { ActionReducer, Action } from "@ngrx/store";
import { State, initialState } from "../state/main-state";
import { INCREMENT, EVENT_FROM_EFFECT } from "../actions/main-action-creator";

export const mainReducer: ActionReducer<State> =
  (state = initialState, action: Action) => {

  console.log('Action came in! ' + action.type);
  
    switch (action.type) {
      case INCREMENT: {
        return {
          counter: state.counter + 1
        }
      }
      case EVENT_FROM_EFFECT: {
        return {
          counter: 4
        }
      } 
      default: {
        return state;
      }
    }
  };