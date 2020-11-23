/// <reference types="svelte" />

export interface RadioButtonProps {
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
   * @default "Radio button label"
   */
  label?: string;

  /**
   * @default false
   */
  checked?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;
}

export default class RadioButton {
  $$prop_def: RadioButtonProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
