import React, {
  createContext,
  // useCallback,
  useState,
  useContext,
  useCallback,
  // useEffect,
  // useReducer,
} from 'react';

// import { useOptions } from './useOptions';

import { GamePlayerContextData } from '../../types/hooks';

export const PlayerContext = createContext<GamePlayerContextData>(
  {} as GamePlayerContextData
);

export const PlayerProvider: React.FC = ({ children }) => {
  // const { questions, amountOfQuestions } = useOptions();

  const [player, setPlayer] = useState('');

  const [gitHubId, setGitHubId] = useState('');

  const [playerScore, setPlayerScore] = useState(0);

  const [playerTimer, setPlayerTimer] = useState(30);

  const [hasNext, setHasNext] = useState(true);

  const handlePlayer = useCallback(
    (event: any) => {
      setPlayer(event.target.value);
    },
    [setPlayer]
  );

  const handleGitHubId = useCallback(
    (event: any) => {
      setGitHubId(event.target.value);
    },
    [setGitHubId]
  );

  // useEffect(() => {
  //   setIsLoading(true);

  //   return setIsLoading(false);
  // });

  // const handleQuestions = useCallback(
  //   async (amount, category, difficulty, type) => {
  //     setIsLoading(true);

  //     const response = await getAllQuestions(
  //       amount,
  //       category,
  //       difficulty,
  //       type
  //     );

  //     if (response.length > 0) {
  //       setQuestions({ type: 'UPDATE-ALL', payload: response });

  //       return setIsLoading(false);
  //     }
  //     setIsLoading(false);

  //     return handleError(true);
  //   },
  //   [questions]
  // );

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        gitHubId,
        setGitHubId,
        playerScore,
        setPlayerScore,
        playerTimer,
        setPlayerTimer,
        hasNext,
        setHasNext,
        handlePlayer,
        handleGitHubId,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer(): GamePlayerContextData {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be used within an PlayerProvider');
  }

  return context;
}
