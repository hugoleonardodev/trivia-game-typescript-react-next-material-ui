import { ReactNode } from 'react';

/**
 * @label : dialog modal label
 * @title : dialog modal title
 * @content : dialog modal content
 */

export interface DialogModalProps {
  label: string;
  title: string;
  content: string;
}

/**
 * @window : window object
 */

export interface HomeOptionsProps {
  window?: () => Window;
}

/**
 * @children : children element
 */

export interface PlayerProps {
  children?: ReactNode;
}
