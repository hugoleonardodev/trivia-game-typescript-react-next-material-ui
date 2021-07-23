import React, {
  createContext,
  // useCallback,
  useState,
  useContext,
  useCallback,
  // useEffect,
  // useEffect,
  // useReducer,
} from 'react';

// import { Question } from '../../types/reducers/index';

import { GamePlayerContextData } from '../../types/hooks';
import { useOptions } from './useOptions';

export const PlayerContext = createContext<GamePlayerContextData>(
  {} as GamePlayerContextData
);

// const questionState = {
//   category: 'loading',
//   type: 'loading',
//   difficulty: 'loading',
//   question: 'loading',
//   correct_answer: 'loading',
//   incorrect_answers: ['loading'],
// };

export const PlayerProvider: React.FC = ({ children }) => {
  const { questions } = useOptions();

  const [questionsCounter, setQuesionsCounter] = useState(0);

  const [correctAnswers, setCorrectAnwers] = useState(0);

  const [wrongAnswers, setSwrongAnswers] = useState(0);

  const [player, setPlayer] = useState('');

  const [gitHubUserName, setGitHubUserName] = useState('');

  const [playerScore, setPlayerScore] = useState(0);

  const [hasNext, setHasNext] = useState(true);

  const [playerTimer, setPlayerTimer] = useState(30);

  // const [question, setQuestion] = useState<Question>(questionState);

  // const handleQuestion = useCallback(() => {
  //   if (hasNext) {
  //     setQuestion(questions[questionsCounter]);
  //   }
  // }, [hasNext, setQuestion, questions, questionsCounter]);

  const handleAnswer = useCallback(
    (event: any) => {
      event.preventDefault();
      // setIsLoading(true);
      if (
        event.target.innerHTML === questions[questionsCounter].correct_answer
      ) {
        setCorrectAnwers(correctAnswers + 1);
        setQuesionsCounter(questionsCounter + 1);
      }
      if (
        event.target.innerHTML !== questions[questionsCounter].correct_answer
      ) {
        setSwrongAnswers(wrongAnswers + 1);
        setQuesionsCounter(questionsCounter + 1);
      }
      if (questions.length <= questionsCounter) {
        return setHasNext(false);
      }
      // setIsLoading(false);
      return setHasNext(true);
    },
    [
      setCorrectAnwers,
      setSwrongAnswers,
      setQuesionsCounter,
      setHasNext,
      questions,
      questionsCounter,
    ]
  );

  const handlePlayer = useCallback(
    (event: any) => {
      setPlayer(event.target.value);
    },
    [setPlayer]
  );

  const handleGitHubUserName = useCallback(
    (event: any) => {
      setGitHubUserName(event.target.value);
    },
    [setGitHubUserName]
  );

  // useEffect(() => {
  //   if (questions.length > 0) {
  //     setQuestion(questions[0]);
  //   }
  // }, [questions]);

  // useEffect(() => {
  //   setQuestion(questions[questionsCounter]);
  // }, [questionsCounter, setQuestion, question]);
  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        gitHubUserName,
        setGitHubUserName,
        playerScore,
        setPlayerScore,
        playerTimer,
        setPlayerTimer,
        hasNext,
        setHasNext,
        handlePlayer,
        handleGitHubUserName,
        // question,
        handleAnswer,
        questionsCounter,
        correctAnswers,
        wrongAnswers,
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
