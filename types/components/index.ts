/**
 * @children : children element
 * @handleClick : handles clicks events
 * @hasValue : boolean true if button has value props
 * @isList : boolean true if button group is a list
 */

export interface ButtonOutlinedProps {
  children?: React.ReactNode;
  handleClick: (e: any) => void;
  hasValue?: string;
  isList?: boolean;
}

/**
 * @handleSetTheme : chenges styles global theme from Mui
 */

export interface ButtonSwitchProps {
  handleSetTheme: (isChecked: boolean) => void;
}

/**
 * @gitHubUserName : player's GitHub username
 */

export interface ImageAvatarProps {
  gitHubUserName: string;
}

/**
 * @label : input type text label
 * @gitHubUserName : input event handler
 * @player : player's name
 */

export interface InputTextProps {
  label: string;
  handlePlayer: (event: any) => void;
  player: string;
}

/**
 * @markdown : markdown question text from opentdb api
 */

export interface MarkdownParserProps {
  markdown: string | boolean;
}

/**
 * @window : window object
 * @children : children element
 */

export interface ScrollToTopProps {
  window?: () => Window;
  children: React.ReactElement;
}

/**
 * @value : mark number value from 0 to 100
 * @label : mark label string
 */

export interface Marks {
  value: number;
  label: string;
}

/**
 * @id : slider options id
 * @title : slider title
 * @valueText : text from number value
 * @value : number value for slider
 * @step : slider step
 * @stepMarks : array for step marks
 * @handleAmout : handles amount input
 */

export interface SliderOptionsProps {
  id: string;
  title: string;
  valueText: (value: number, index: number) => string;
  value: number;
  step: number;
  stepMarks: Marks[];
  handleAmount: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
}
