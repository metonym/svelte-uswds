/// <reference types="svelte" />

export interface TextAreaProps {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default ""
   */
  name?: string;

  /**
   * @default ""
   */
  value?: string;

  /**
   * @default "Text area"
   */
  label?: string;

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
  errorText?: boolean;

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

export default class TextArea {
  $$prop_def: TextAreaProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
