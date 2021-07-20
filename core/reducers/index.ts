import { GenerericReducer } from '../actions';
import { Action } from '../../types/actions';
import { QuestionsList } from '../../types/reducers';

export function genericReducer(state: QuestionsList, action: Action): any {
  switch (action.type) {
    case 'ADD':
      return [...state.questions, action.payload];
    case 'REMOVE':
      return state.questions.filter((item: any) => item.id !== action.payload);
    case GenerericReducer.UPDATE:
      return [...state.questions, action.payload];
    case 'UPDATE-ALL':
      return action.payload;
    default:
      return state;
  }
}
