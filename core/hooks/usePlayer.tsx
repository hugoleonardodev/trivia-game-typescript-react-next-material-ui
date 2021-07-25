import React, { createContext, useState, useContext, useCallback } from 'react';
import MarkdownParser from '../../components/MarkdownParser';

import { updatePlayersRanking, uptadePlayerGameHistory } from '../../services';

import { GamePlayerContextData } from '../../types/hooks';

import { Question } from '../../types/reducers';

import { useOptions } from './useOptions';

export interface GameHistory {
  currentQuestion: Question;
  playerAnswer: string;
  isCorrect: boolean;
}

export const PlayerContext = createContext<GamePlayerContextData>(
  {} as GamePlayerContextData
);

export const PlayerProvider: React.FC = ({ children }) => {
  const { questions, handleClearOptions } = useOptions();

  const [questionsCounter, setQuesionsCounter] = useState(0);

  const [correctAnswers, setCorrectAnwers] = useState(0);

  const [wrongAnswers, setSwrongAnswers] = useState(0);

  const [player, setPlayer] = useState('');

  const [gitHubUserName, setGitHubUserName] = useState('');

  const [playerScore, setPlayerScore] = useState(0);

  const [hasNext, setHasNext] = useState(true);

  const [playerTimer, setPlayerTimer] = useState(30);

  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);

  const [playerRating, setPlayerRating] = useState(0);

  const handlePlayerRating = useCallback(() => {
    const rating = correctAnswers === 0 ? 0 : correctAnswers / questions.length;
    setPlayerRating(rating * 100);
  }, [correctAnswers, questions, setPlayerRating]);

  const handleGameRanking = useCallback(
    (event: any) => {
      event.preventDefault();
      const gitHubAvatar = `https://github.com/${gitHubUserName}.png`;
      const newPlayerRank = {
        playerName: player,
        playerAvatar: gitHubAvatar,
        playerRating,
      };
      return updatePlayersRanking(newPlayerRank);
    },
    [player, gitHubUserName, playerRating, updatePlayersRanking]
  );

  const handleGameHistory = useCallback(
    (event: any) => {
      const currentQuestion = questions[questionsCounter];
      const playerAnswer = event.target.innerText;
      const isCorrect = playerAnswer === currentQuestion.correct_answer;
      const newGameHistory = {
        currentQuestion,
        playerAnswer,
        isCorrect,
      };
      uptadePlayerGameHistory(gameHistory, newGameHistory);
      return setGameHistory([...gameHistory, newGameHistory]);
    },
    [questions, questionsCounter, setGameHistory, gameHistory]
  );

  const handleAnswer = useCallback(
    (event: any) => {
      event.preventDefault();
      handleGameHistory(event);
      handlePlayerRating();
      const answerComponent = (
        <MarkdownParser markdown={questions[questionsCounter].correct_answer} />
      );
      if (
        event.currentTarget.value.toLowerCase() ===
        answerComponent.props.markdown.toLowerCase()
      ) {
        setCorrectAnwers(correctAnswers + 1);
        setQuesionsCounter(questionsCounter + 1);
      }
      if (
        event.currentTarget.value.toLowerCase() !==
        answerComponent.props.markdown.toLowerCase()
      ) {
        setSwrongAnswers(wrongAnswers + 1);
        setQuesionsCounter(questionsCounter + 1);
      }
      if (questions.length - 1 === questionsCounter) {
        setQuesionsCounter(questionsCounter - 1);
        return setHasNext(false);
      }
      return setHasNext(true);
    },
    [
      handleGameHistory,
      handlePlayerRating,
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

  const handleClearAll = useCallback(() => {
    handleClearOptions();
    setQuesionsCounter(0);
    setCorrectAnwers(0);
    setSwrongAnswers(0);
    setPlayer('');
    setGitHubUserName('');
    setHasNext(true);
    setGameHistory([]);
    setPlayerRating(0);
  }, [
    handleClearOptions,
    setQuesionsCounter,
    setCorrectAnwers,
    setSwrongAnswers,
    setPlayer,
    setGitHubUserName,
    setHasNext,
    setGameHistory,
    setPlayerRating,
  ]);

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
        handleGameHistory,
        gameHistory,
        playerRating,
        handleGameRanking,
        handleClearAll,
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
