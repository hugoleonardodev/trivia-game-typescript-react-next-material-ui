export const BASE_URL = 'https://opentdb.com/api.php?';

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
    content: `Once you have started the game, you will have only 30 seconds to answer each question.
      So do not try to Google it. Try to answer as quick as possible. Since the elapsed time counts
      in your final score.`,
  },
};
