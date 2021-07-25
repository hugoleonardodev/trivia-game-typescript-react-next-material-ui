// https://opentdb.com/api_config.php

/**
 * Query Options for opentdb API
 * @category : opentdb API Questions Categories
 * @difficulty : opentdb API Difficulty Level
 * @type : opentdb API Questions Type
 */

export interface UrlOptions {
  category?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  type?: 'multiple' | 'boolean';
}

/**
 * Directions for Dialog Modals
 * @directions : 'up' | 'down' | 'left' | 'right'
 */
export interface Directions {
  directions?: 'up' | 'down' | 'left' | 'right';
}

/**
 * Options set by the player
 * @amountString : amout of questions set by the player
 * @difficultyString : a string with difficulty query string
 */
export interface Options {
  amountString: number;
  difficultyString: string;
}
