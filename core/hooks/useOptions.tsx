import React from 'react';

import { genericReducer } from '../reducers';

import { getAllQuestions } from '../../services';

import { getOptionsStrings } from '../../common/helpers';

import {
  GameOptionsContextData,
  OptionsProviderProps,
} from '../../types/core/hooks';

export const OptionsContext = React.createContext<GameOptionsContextData>(
  {} as GameOptionsContextData
);

export const OptionsProvider: React.FC<OptionsProviderProps> = ({
  children,
  handleSetTheme,
  switchTheme,
}) => {
  const [questions, setQuestions] = React.useReducer(genericReducer, []);

  const [amountOfQuestions, setAmountOfQuestions] = React.useState(0);

  const [difficultyLevel, setDifficultyLevel] = React.useState(0);

  const [questionsCategories, setQuestionsCategories] = React.useState(9);

  const [error, handleError] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleQuestions = React.useCallback(
    async (amount: number, category, difficulty, type) => {
      setIsLoading(true);
      const response = await getAllQuestions(
        amount,
        category,
        difficulty,
        type
      );
      if (response.length > 0) {
        setQuestions({ type: '@questions/UPDATE_ALL', payload: response });
        return setIsLoading(false);
      }
      return handleError(true);
    },
    [questions, setIsLoading]
  );

  const handleAmount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
      setAmountOfQuestions(value);
    },
    [setAmountOfQuestions]
  );

  const handleDifficulty = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
      setDifficultyLevel(value);
    },
    [setDifficultyLevel]
  );

  const handleGameStartOptions = React.useCallback(async () => {
    const options = getOptionsStrings(amountOfQuestions, difficultyLevel);
    await handleQuestions(
      options.amountString,
      '',
      options.difficultyString,
      ''
    );
  }, [getOptionsStrings, amountOfQuestions, difficultyLevel]);

  const handleClearOptions = React.useCallback(() => {
    setQuestions({ type: '@questions/CLEAR_ALL', payload: [] });
    setAmountOfQuestions(0);
    setDifficultyLevel(0);
    setQuestionsCategories(0);
    handleError(false);
    setIsLoading(false);
  }, [
    setQuestions,
    setAmountOfQuestions,
    setDifficultyLevel,
    setQuestionsCategories,
    handleError,
    setIsLoading,
  ]);

  return (
    <OptionsContext.Provider
      value={{
        questions,
        setQuestions,
        handleQuestions,
        amountOfQuestions,
        setAmountOfQuestions,
        difficultyLevel,
        setDifficultyLevel,
        questionsCategories,
        setQuestionsCategories,
        error,
        handleError,
        isLoading,
        setIsLoading,
        switchTheme,
        handleSetTheme,
        handleAmount,
        handleDifficulty,
        handleGameStartOptions,
        handleClearOptions,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): GameOptionsContextData => {
  const context = React.useContext(OptionsContext);

  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }

  return context;
};
