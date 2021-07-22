import { Dispatch, SetStateAction, ChangeEvent } from 'react';

import { Action } from '../../types/actions';

import { Question } from '../reducers/index';

/**
 * Game Options Context Data from opentdb API
 * @questions : opentdb API results array of Question
 * @setQuestions : set opentdb API results
 * @handleQuestions : handle opentdb API response questions
 * @amountOfQuestions : amount of questions set by the player default === 10
 * @setAmountOfQuestions : handles amount of questions
 * @difficultyLevel : difficulty level set by the player default === ''
 * @setDifficultyLevel : handles difficulty level
 * @questionsCategories : questions categories set by the player default === 9
 * @setQuestionsCategories : handles questions categories change
 * @error : opentdb API no results error
 * @handleError : opentdb API no results error handling
 * @isLoading : loading opentdb API data
 * @setIsLoading : set loading opentdb API data
 * @handleSetTheme : handle theme switching
 * @switchTheme : boolean false to light true dark
 */

export interface GameOptionsContextData {
  questions: Question[];
  setQuestions: Dispatch<Action>;
  handleQuestions: (
    amount: any,
    category: any,
    difficulty: any,
    type: any
  ) => Promise<void>;
  amountOfQuestions: number;
  setAmountOfQuestions: Dispatch<SetStateAction<number>>;
  difficultyLevel: number;
  setDifficultyLevel: Dispatch<SetStateAction<number>>;
  questionsCategories: number;
  setQuestionsCategories: Dispatch<SetStateAction<number>>;
  error: boolean;
  handleError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  handleSetTheme: (isChecked: boolean) => void;
  switchTheme: boolean;
  handleAmount: (event: ChangeEvent<HTMLInputElement>, value: number) => void;
  handleDifficulty: (
    event: ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
}

/**
 * @player : game player
 * @setPlayer : set game player nickname
 * @gitHubId : player's GitHub username
 * @playerScore : player's total score
 * @setPlayerScore : set player's total score
 * @playerTimer : player's timer
 * @setPlayerTimer : set player's timer
 * @hasNext : true if has more questions, false if not
 * @setHasNext : handle change if has next or not
 */

export interface GamePlayerContextData {
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
  gitHubId: string;
  setGitHubId: Dispatch<SetStateAction<string>>;
  playerScore: number;
  setPlayerScore: Dispatch<SetStateAction<number>>;
  playerTimer: number;
  setPlayerTimer: Dispatch<SetStateAction<number>>;
  hasNext: boolean;
  setHasNext: Dispatch<SetStateAction<boolean>>;
  handlePlayer: (event: any) => void;
  handleGitHubId: (event: any) => void;
}
