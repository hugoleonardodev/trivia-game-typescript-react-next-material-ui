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
