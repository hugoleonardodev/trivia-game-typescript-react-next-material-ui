import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react';

// import { Shopping } from '../../store/ducks/shoppings/types';

// import { getAllShoppings } from '../../services/api';

// import { ApplicationState } from '../../store';

import { genericReducer } from '../reducers';
// import { Action } from '../../services/types';
import { getAllQuestions } from '../../services';

import { GameOptionsContextData } from '../../types/hooks';

export const OptionsContext = createContext<GameOptionsContextData>(
  {} as GameOptionsContextData
);

export const OptionsProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useReducer(genericReducer, []);

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
        setQuestions({ type: 'UPDATE-ALL', payload: response });

        return setIsLoading(false);
      }
      setIsLoading(false);

      return handleError(true);
    },
    [questions]
  );

  return (
    <OptionsContext.Provider
      value={{
        questions,
        setQuestions,
        handleQuestions,
        error,
        handleError,
        isLoading,
        setIsLoading,
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
