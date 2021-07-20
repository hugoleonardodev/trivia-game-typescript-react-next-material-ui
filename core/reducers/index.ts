import { GenerericReducer } from '../actions';
import { Action } from '../../types/actions';
import { GameOptionsContextData } from '../../types/hooks';

export function genericReducer(
  state: GameOptionsContextData,
  action: Action
): any {
  switch (action.type) {
    case 'ADD':
      return [...state.questions, action.payload];
    case 'REMOVE':
      return state.questions.filter((item: any) => item.id !== action.payload);
    case GenerericReducer.UPDATE_ALL:
      return action.payload;
    case 'UPDATE-ALL':
      return action.payload;
    default:
      return state;
  }
}
