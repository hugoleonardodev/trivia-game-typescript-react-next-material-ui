import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { generateUrl } from '../common/helpers';
import { GameHistory } from '../core/hooks/usePlayer';

export const getAllQuestions = async (
  amount: number,
  category?: number,
  difficulty?: 'easy' | 'medium' | 'hard',
  type?: 'multiple' | 'boolean'
): Promise<any> => {
  const url =
    `${BASE_URL}amount=${amount}` + generateUrl({ category, difficulty, type });

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

const RANKING = [
  {
    playerName: `I'm a software developer!`,
    playerAvatar: 'https://github.com/hugoleonardodev.png',
    playerRating: 100,
  },
  {
    playerName: `Elon Musk`,
    playerAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/330px-Elon_Musk_Royal_Society.jpg',
    playerRating: 99,
  },
  {
    playerName: `Angela Merkel`,
    playerAvatar:
      'https://ogimg.infoglobo.com.br/in/24828008-44a-e00/FT1086A/91082739_German-Chancellor-Angela-Merkel-gestures-during-a-press-conference-following-talks-via.jpg',
    playerRating: 98,
  },
  {
    playerName: `Nazaré`,
    playerAvatar:
      'http://s2.glbimg.com/NXXbfI_JJNJop7FBr5ZVMRxd0_s=/288x0/s.glbimg.com/jo/eg/f/original/2016/11/24/maxresdefault.jpg',
    playerRating: 97,
  },
  {
    playerName: `Carminha`,
    playerAvatar:
      'https://i0.wp.com/portalovertube.com/wp-content/uploads/2020/04/car.jpg',
    playerRating: 96,
  },
  {
    playerName: `Jeff Bezos`,
    playerAvatar:
      'https://mundoconectado.com.br/uploads/chamadas/bezos-destaque.jpg',
    playerRating: 95,
  },
  {
    playerName: `Anitta`,
    playerAvatar:
      'https://br.web.img3.acsta.net/c_310_420/pictures/20/11/19/16/21/4456129.jpg',
    playerRating: 94,
  },
  {
    playerName: `Neymar Jr`,
    playerAvatar:
      'https://rd1.com.br/wp-content/uploads/2021/07/20210718-neymar.webp',
    playerRating: 93,
  },
  {
    playerName: `William Bonner`,
    playerAvatar: 'https://agorarn.com.br/files/uploads/2021/06/bonner.png',
    playerRating: 92,
  },
  {
    playerName: `Fatima Bernardes`,
    playerAvatar:
      'https://emoff.ig.com.br/wp-content/uploads/2021/07/fatima-bernardes-se-retrata-no-encontro--482x515.jpg',
    playerRating: 91,
  },
  {
    playerName: `Jair "Messias" O Bolsonaro`,
    playerAvatar:
      'https://img.r7.com/images/reuters-jair-bolsonaro-1500-14072021081048326?dimensions=677x369',
    playerRating: 0,
  },
];

const triviaGameLocalStorage = {
  playerName: '',
  playerAvatar: '',
  gameHistory: [],
  ranking: RANKING,
};

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

export const updateLocalStorage = (
  gameHistory: GameHistory[],
  newHistory: GameHistory
): void => {
  // let storage;

  const storage = getLocalStorage('triviaGame');

  // if (string) {
  //   storage = JSON.parse(string);
  // }

  storage.gameHistory = [...gameHistory, newHistory];

  return localStorage.setItem('triviaGame', JSON.stringify(storage));
};
