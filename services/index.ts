import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { generateUrl } from '../common/helpers';

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
