/// <reference types="svelte" />

export interface DateInputProps {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Date input"
   */
  legend?: string;

  /**
   * @default "Hint text"
   */
  hint?: string;

  /**
   * @default false
   */
  today?: boolean;

  month?: number;

  day?: number;

  year?: number;

  /**
   * @default 2020
   */
  maxYear?: number;

  /**
   * @default maxYear - 10
   */
  minYear?: number;
}

export default class DateInput {
  $$prop_def: DateInputProps;
  $$slot_def: {};

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
