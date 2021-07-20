import { UrlOptions } from '../../types/helpers';

const generateUrl = (options: UrlOptions): string => {
  let urlWithOptions;
  if (options.category) {
    urlWithOptions = `&category=${options.category}`;
  }
  if (options.difficulty) {
    urlWithOptions = urlWithOptions + `&difficulty=${options.difficulty}`;
  }
  if (options.type) {
    urlWithOptions = urlWithOptions + `&type=${options.type}`;
  }
  return urlWithOptions || '';
};

export { generateUrl };
