import React from 'react';

import { Action } from '../actions';

import { Question } from '../reducers/index';

/**
 * Game Options Context Data
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
 * @handleAmount : handle questions amounts set by the player
 * @handleDifficulty : handle difficulty levels set by the player
 * @handleGameStartOptions : starts the game with options set by the player
 * @handleClearOptions : clears all options set by the player
 */

export interface GameOptionsContextData {
  questions: Question[];
  setQuestions: React.Dispatch<Action>;
  handleQuestions: (
    amount: any,
    category: any,
    difficulty: any,
    type: any
  ) => Promise<void>;
  amountOfQuestions: number;
  setAmountOfQuestions: React.Dispatch<React.SetStateAction<number>>;
  difficultyLevel: number;
  setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
  questionsCategories: number;
  setQuestionsCategories: React.Dispatch<React.SetStateAction<number>>;
  error: boolean;
  handleError: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetTheme: (isChecked: boolean) => void;
  switchTheme: boolean;
  handleAmount: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
  handleDifficulty: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
  handleGameStartOptions: () => Promise<void>;
  handleClearOptions: () => void;
}

/**
 * Game Options Provider
 * @handleSetTheme : handles player's switch theme
 * @switchTheme : boolean swaps the theme
 */

export interface OptionsProviderProps {
  handleSetTheme: (isChecked: boolean) => void;
  switchTheme: boolean;
}

/**
 * Game Options Provider
 * @handleSetTheme : handles player's switch theme
 * @switchTheme : boolean swaps the theme
 */

export interface GameHistory {
  currentQuestion: Question;
  playerAnswer: string;
  isCorrect: boolean;
}

/**
 * Game Player Context Data
 * @player : game player
 * @setPlayer : set game player nickname
 * @gitHubUserName : player's GitHub username
 * @playerScore : player's total score
 * @setPlayerScore : set player's total score
 * @playerTimer : player's timer
 * @setPlayerTimer : set player's timer
 * @hasNext : true if has more questions, false if not
 * @setHasNext : handle change if has next or not
 * @handlePlayer : handle player's name input
 * @handleGitHubUserName : handle player's GitHub username input
 * @handleAnswer : handle player's click answers
 * @questionsCounter : coutnts questions answereds
 * @correctAnswers : amout of correct answers
 * @wrongAnswers : amout of wrong answers
 * @handleGameHistory : updates player's game history
 * @gameHistory : array with game questions and player answers
 * @playerRating : player average score rating %
 * @handleGameRanking : updates trivia game rankings
 * @handleClearAll : clears all states from player and options
 */

export interface GamePlayerContextData {
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  gitHubUserName: string;
  setGitHubUserName: React.Dispatch<React.SetStateAction<string>>;
  playerScore: number;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  playerTimer: number;
  setPlayerTimer: React.Dispatch<React.SetStateAction<number>>;
  hasNext: boolean;
  setHasNext: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlayer: (event: any) => void;
  handleGitHubUserName: (event: any) => void;
  handleAnswer: (event: any) => void;
  questionsCounter: number;
  correctAnswers: number;
  wrongAnswers: number;
  handleGameHistory: (event: any) => void;
  gameHistory: GameHistory[];
  playerRating: number;
  handleGameRanking: (event: any) => void;
  handleClearAll: () => void;
}
