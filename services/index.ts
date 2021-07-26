import axios from 'axios';
import { baseUrl, triviaGameLocalStorage } from '../common/constants';
import { generateUrl } from '../common/helpers';
import apiResponseOk from '../tests/mocks/apiResponseOk';
import { GameHistory } from '../types/core/hooks';

export const getAllQuestions = async (
  amount: number,
  category?: number,
  difficulty?: 'easy' | 'medium' | 'hard',
  type?: 'multiple' | 'boolean'
): Promise<any> => {
  const url =
    `${baseUrl}amount=${amount}` + generateUrl({ category, difficulty, type });

  const handleResponse = (response: any) => {
    if (response.data) {
      return response.data.results;
    }
    // mocked response api
    return apiResponseOk;
  };

  const result = await axios
    .get(url, { method: 'GET' })
    .then((response) => handleResponse(response));

  return result;
};

interface PlayerRanking {
  playerName: string;
  playerAvatar: string;
  playerRating: number;
}
export interface TriviaGameStorage {
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

  const isRanked = findPlayerRank(newPlayerRank.playerName);

  if (isRanked && newPlayerRank.playerRating > isRanked.playerRating) {
    const playerRankIndex = storage.ranking.indexOf(isRanked);

    const updatedRank = [
      ...storage.ranking.slice(0, playerRankIndex),
      newPlayerRank,
      ...storage.ranking.slice(playerRankIndex + 1),
    ];

    storage.ranking = updatedRank;

    return localStorage.setItem('triviaGame', JSON.stringify(storage));
  }
  storage.ranking = [...storage.ranking, newPlayerRank];

  return localStorage.setItem('triviaGame', JSON.stringify(storage));
};

export const findPlayerRank = (
  givenPlayerName: string
): PlayerRanking | undefined => {
  const store = getLocalStorage('triviaGame');

  const isRanked = store.ranking.find(
    (player) => player.playerName === givenPlayerName
  );

  return isRanked;
};
