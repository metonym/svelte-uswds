/// <reference types="svelte" />

export interface DropdownProps {
  /**
   * @default []
   */
  options?: { value: string; text?: string }[];

  selected?: string;

  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Dropdown label"
   */
  label?: string;

  /**
   * @default ""
   */
  name?: string;

  /**
   * @default false
   */
  success?: boolean;

  /**
   * @default false
   */
  error?: boolean;

  /**
   * @default "Helpful error message"
   */
  errorText?: string;

  /**
   * @default false
   */
  readonly?: boolean;

  /**
   * @default false
   */
  required?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;
}

export default class Dropdown {
  $$prop_def: DropdownProps;
  $$slot_def: {};

  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
