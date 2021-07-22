import { UrlOptions } from '../../types/helpers';

const generateUrl = (options: UrlOptions): string => {
  let urlWithOptions = '';

  if (options.difficulty) {
    urlWithOptions = urlWithOptions + `&difficulty=${options.difficulty}`;
  }

  return urlWithOptions || '';
};

const markdownParser = (markdown: string): string => {
  const quotes = markdown.split('&quot;');

  const singles = markdown.split('&#039;');

  const amps = markdown.split('&amp;');

  let result = '';

  if (quotes.length > 0) {
    result = markdown.replaceAll('&quot;', '"');
  }

  if (singles.length > 0) {
    result = result.replaceAll('&#039;', "'");
  }

  if (amps.length > 0) {
    result = result.replaceAll('&amp;', '&');
  }

  return result;
};

interface Directions {
  directions?: 'up' | 'down' | 'left' | 'right';
}

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

interface Options {
  amountString: number;
  difficultyString: string;
}

const getOptionsStrings = (amount: number, difficulty: number): Options => {
  const difficultyString = getDifficultyString(difficulty);

  const amountString = getAmountString(amount);

  const options = {
    difficultyString,
    amountString,
  };

  return options;
};

export { generateUrl, markdownParser, randomDirections, getOptionsStrings };
