import { Dispatch, SetStateAction } from 'react';

import { Action } from '../../types/actions';

export interface GameOptionsContextData {
  questions: Action[];
  setQuestions: Dispatch<Action>;
  handleQuestions: (
    amount: any,
    category: any,
    difficulty: any,
    type: any
  ) => Promise<void>;
  error: boolean;
  handleError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
