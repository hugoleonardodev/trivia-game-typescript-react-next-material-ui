import { GenerericReducer } from '../actions';
import { Action } from '../../types/core/actions';
import { GameOptionsContextData } from '../../types/core/hooks';

export const genericReducer = (
  state: GameOptionsContextData,
  action: Action
): any => {
  switch (action.type) {
    case GenerericReducer.UPDATE_ALL:
      return action.payload;
    case GenerericReducer.CLEAR_ALL:
      return action.payload;
    default:
      return state;
  }
};
