import { Directions, Options, UrlOptions } from '../../types/helpers';

/**
 * @generateUrl : generates a url query from player options
 */

const generateUrl = (options: UrlOptions): string => {
  let urlWithOptions = '';

  if (options.difficulty) {
    urlWithOptions = urlWithOptions + `&difficulty=${options.difficulty}`;
  }

  return urlWithOptions || '';
};

/**
 * @randomDirections : returns a random direction 'up', 'dowm', 'left', 'right'
 */

const randomDirections = (): Directions['directions'] => {
  const position = Number(Math.round(Math.random() * 3));

  if (position === 0) {
    return 'up';
  }
  if (position === 1) {
    return 'down';
  }
  if (position === 2) {
    return 'left';
  }
  if (position === 3) {
    return 'right';
  }
};

/**
 * @getAmountString : returns a string query for amount of questions
 */

const getAmountString = (amount: number) => {
  if (amount > 30 && amount < 60) {
    return 20;
  }

  if (amount > 60 && amount < 90) {
    return 30;
  }

  if (amount > 90) {
    return 40;
  }

  return 10;
};

/**
 * @getDifficultyString : returns a string query for difficulty level
 */

const getDifficultyString = (difficulty: number) => {
  if (difficulty > 30 && difficulty < 60) {
    return 'easy';
  }

  if (difficulty > 60 && difficulty < 90) {
    return 'medium';
  }

  if (difficulty > 90) {
    return 'hard';
  }

  return '';
};

/**
 * @getOptionsStrings : strings for difficulty and amout from player options
 */

const getOptionsStrings = (amount: number, difficulty: number): Options => {
  const difficultyString = getDifficultyString(difficulty);

  const amountString = getAmountString(amount);

  const options = {
    difficultyString,
    amountString,
  };

  return options;
};

/**
 * @getRouteTruthy : true if router pathname is equals to given pathname
 */

const getRouteTruthy = (
  routerPathname: string,
  givenPathname: string
): boolean => {
  return routerPathname === givenPathname || routerPathname === '/index';
};

export { generateUrl, randomDirections, getOptionsStrings, getRouteTruthy };
