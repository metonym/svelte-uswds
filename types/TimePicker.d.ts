/// <reference types="svelte" />

export interface TimePickerProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Time picker"
   */
  label?: string;
}

export default class TimePicker {
  $$prop_def: TimePickerProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
