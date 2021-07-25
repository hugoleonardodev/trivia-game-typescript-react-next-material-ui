import axios from 'axios';
import { baseUrl, triviaGameLocalStorage } from '../common/constants';
import { generateUrl } from '../common/helpers';
import { GameHistory } from '../core/hooks/usePlayer';

export const getAllQuestions = async (
  amount: number,
  category?: number,
  difficulty?: 'easy' | 'medium' | 'hard',
  type?: 'multiple' | 'boolean'
): Promise<any> => {
  const url =
    `${baseUrl}amount=${amount}` + generateUrl({ category, difficulty, type });

  const result = await axios
    .get(url, { method: 'GET' })
    .then((response) => response.data.results);

  return result;
};

interface PlayerRanking {
  playerName: string;
  playerAvatar: string;
  playerRating: number;
}
interface TriviaGameStorage {
  playerName: string;
  playerAvatar: string;
  gameHistory: GameHistory[];
  ranking: PlayerRanking[];
}

export const setLocalStorage = (): void => {
  return localStorage.setItem(
    'triviaGame',
    JSON.stringify(triviaGameLocalStorage)
  );
};

export const getLocalStorage = (key: string): TriviaGameStorage => {
  const storage = localStorage.getItem(key);

  let result;

  if (storage) {
    result = JSON.parse(storage);
  }

  return result;
};

export const uptadePlayerGameHistory = (
  gameHistory: GameHistory[],
  newHistory: GameHistory
): void => {
  const storage = getLocalStorage('triviaGame');

  storage.gameHistory = [...gameHistory, newHistory];

  return localStorage.setItem('triviaGame', JSON.stringify(storage));
};

export const updatePlayersRanking = (newPlayerRank: PlayerRanking): void => {
  const storage = getLocalStorage('triviaGame');

  storage.ranking = [...storage.ranking, newPlayerRank];

  return localStorage.setItem('triviaGame', JSON.stringify(storage));
};
