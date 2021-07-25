import { GenerericReducer } from '../actions';
import { Action } from '../../types/actions';
import { GameOptionsContextData } from '../../types/hooks';

export function genericReducer(
  state: GameOptionsContextData,
  action: Action
): any {
  switch (action.type) {
    case GenerericReducer.UPDATE_ALL:
      return action.payload;
    case GenerericReducer.CLEAR_ALL:
      return action.payload;
    default:
      return state;
  }
}
