/// <reference types="svelte" />

export interface PasswordInputProps {
  /**
   * @default "Password"
   */
  label?: string;

  /**
   * @default false
   */
  showPassword?: boolean;

  /**
   * @default true
   */
  autocomplete?: boolean;
}

export default class PasswordInput {
  $$prop_def: PasswordInputProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
