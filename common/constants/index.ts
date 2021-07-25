export const baseUrl = 'https://opentdb.com/api.php?';

const difficulty = [
  {
    value: 1,
    label: 'Random',
  },
  {
    value: 33.33,
    label: 'Easy',
  },
  {
    value: 66.67,
    label: 'Medium',
  },
  {
    value: 99,
    label: 'Hard',
  },
];

const amount = [
  {
    value: 1,
    label: '10',
  },
  {
    value: 33.33,
    label: '20',
  },
  {
    value: 66.67,
    label: '30',
  },
  {
    value: 99,
    label: '40',
  },
];

export const marks = { difficulty, amount };

export const dialogs = {
  home: {
    label: 'play-game',
    title: 'Are you sure to start this nightmare ?',
    content: `There is no timer in this game. So you will have time to search or even Google it.
      Feel free to check you answers and dive deep in the "sea of knowledge".
    `,
  },
};

export const ranking = [
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
];

export const triviaGameLocalStorage = {
  playerName: '',
  playerAvatar: '',
  gameHistory: [],
  ranking: ranking,
};
