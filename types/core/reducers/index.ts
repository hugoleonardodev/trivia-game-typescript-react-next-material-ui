/**
 * Question from opentdb API
 * @category : opentdb API Questions Categories
 * @difficulty : opentdb API Difficulty Level
 * @type : opentdb API Questions Type
 * @question : opentdb API Question
 * @correct_answer : opentdb API Correct Answer
 * @incorrect_answers : opentdb API Incorrect Answers
 */

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string | boolean;
  incorrect_answers: string[] | boolean[];
}

// /**
//  * @questions : array of Questions
//  */

// export interface QuestionsList {
//   questions: Question[];
// }
