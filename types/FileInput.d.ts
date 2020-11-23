/// <reference types="svelte" />

export interface FileInputProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "File input"
   */
  label?: string;

  /**
   * @default false
   */
  multiple?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default ""
   */
  hint?: string;

  /**
   * @default false
   */
  error?: boolean;

  /**
   * @default ""
   */
  errorText?: string;
}

export default class FileInput {
  $$prop_def: FileInputProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: "drop", cb: (event: WindowEventMap["drop"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
