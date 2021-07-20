/**
 * Game Options Actions types
 * @UPDATE_ALL loads all questions from opentdb API
 * @CLEAR_ALL clears all questions from GameOptionsContextData
 * @LOAD_CATEGORIES load categories data to redux
 */

export enum GenerericReducer {
  UPDATE_ALL = '@questions/UPDATE_ALL',
  CLEAR_ALL = '@questions/CLEAR_ALL',
  LOAD_CATEGORIES = '@questions/LOAD_CATEGORIES',
}

export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
