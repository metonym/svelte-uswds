/// <reference types="svelte" />

export interface TextInputProps {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default ""
   */
  name?: string;

  /**
   * @default "text"
   */
  type?: "text" | "number" | "password";

  /**
   * @default ""
   */
  value?: string;

  /**
   * @default "Text input"
   */
  label?: string;

  size?: "small" | "medium";

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

  pattern?: string | RegExp;

  /**
   * @default false
   */
  autocapitalize?: boolean;

  /**
   * @default false
   */
  autocorrect?: boolean;

  /**
   * @default false
   */
  spellcheck?: boolean;

  /**
   * @default false
   */
  autocomplete?: boolean;
}

export default class TextInput {
  $$prop_def: TextInputProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
