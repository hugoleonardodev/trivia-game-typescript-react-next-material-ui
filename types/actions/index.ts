/**
 * Game Options Actions types
 * @UPDATE_ALL loads all questions from opentdb API
 * @CLEAR_ALL clears all questions from GameOptionsContextData
 */

export enum GenerericReducer {
  UPDATE_ALL = '@questions/UPDATE_ALL',
  CLEAR_ALL = '@questions/CLEAR_ALL',
}

/**
 * Context Actions for complexes reducers
 * @payload questions data from opentdb API
 * @type type of action from GenerericReducer
 */

export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
