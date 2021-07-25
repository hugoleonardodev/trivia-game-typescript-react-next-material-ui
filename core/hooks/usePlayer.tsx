import React from 'react';
import MarkdownParser from '../../components/MarkdownParser';

import { updatePlayersRanking, uptadePlayerGameHistory } from '../../services';

import { GameHistory, GamePlayerContextData } from '../../types/core/hooks';

import { useOptions } from './useOptions';

export const PlayerContext = React.createContext<GamePlayerContextData>(
  {} as GamePlayerContextData
);

export const PlayerProvider: React.FC = ({ children }) => {
  const { questions, handleClearOptions } = useOptions();

  const [questionsCounter, setQuesionsCounter] = React.useState(0);

  const [correctAnswers, setCorrectAnwers] = React.useState(0);

  const [wrongAnswers, setSwrongAnswers] = React.useState(0);

  const [player, setPlayer] = React.useState('');

  const [gitHubUserName, setGitHubUserName] = React.useState('');

  const [playerScore, setPlayerScore] = React.useState(0);

  const [hasNext, setHasNext] = React.useState(true);

  const [playerTimer, setPlayerTimer] = React.useState(30);

  const [gameHistory, setGameHistory] = React.useState<GameHistory[]>([]);

  const [playerRating, setPlayerRating] = React.useState(0);

  const handlePlayerRating = React.useCallback(() => {
    const rating = correctAnswers === 0 ? 0 : correctAnswers / questions.length;
    setPlayerRating(rating * 100);
  }, [correctAnswers, questions, setPlayerRating]);

  const handleGameRanking = React.useCallback(
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

  const handleGameHistory = React.useCallback(
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

  const handleAnswer = React.useCallback(
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

  const handlePlayer = React.useCallback(
    (event: any) => {
      setPlayer(event.target.value);
    },
    [setPlayer]
  );

  const handleGitHubUserName = React.useCallback(
    (event: any) => {
      setGitHubUserName(event.target.value);
    },
    [setGitHubUserName]
  );

  const handleClearAll = React.useCallback(() => {
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

export const usePlayer = (): GamePlayerContextData => {
  const context = React.useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be used within an PlayerProvider');
  }

  return context;
};
