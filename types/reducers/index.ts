interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string | boolean;
  incorrect_answers: string[] | boolean[];
}

export interface QuestionsList {
  questions: Question[];
}
