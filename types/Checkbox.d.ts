/// <reference types="svelte" />

export interface CheckboxProps {
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
   * Slottable (default slot)
   * @default "Checkbox label"
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

export default class Checkbox {
  $$prop_def: CheckboxProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
