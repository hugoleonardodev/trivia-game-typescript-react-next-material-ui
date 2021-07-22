import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import { genericReducer } from '../reducers';

import { getAllQuestions } from '../../services';

import { GameOptionsContextData } from '../../types/hooks';

export const OptionsContext = createContext<GameOptionsContextData>(
  {} as GameOptionsContextData
);

interface OptionsProviderProps {
  handleSetTheme: (isChecked: boolean) => void;
  switchTheme: boolean;
}

export const OptionsProvider: React.FC<OptionsProviderProps> = ({
  children,
  handleSetTheme,
  switchTheme,
}) => {
  const [questions, setQuestions] = useReducer(genericReducer, []);

  const [amountOfQuestions, setAmountOfQuestions] = useState(0);

  const [difficultyLevel, setDifficultyLevel] = useState(0);

  const [questionsCategories, setQuestionsCategories] = useState(9);

  const [error, handleError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    return setIsLoading(false);
  });

  const handleQuestions = useCallback(
    async (amount, category, difficulty, type) => {
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
      setIsLoading(false);

      return handleError(true);
    },
    [questions]
  );

  const handleAmount = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
      setAmountOfQuestions(value);
    },
    [setAmountOfQuestions]
  );

  const handleDifficulty = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
      setDifficultyLevel(value);
    },
    [setDifficultyLevel]
  );

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
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export function useOptions(): GameOptionsContextData {
  const context = useContext(OptionsContext);

  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }

  return context;
}
