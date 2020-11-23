/// <reference types="svelte" />

export interface RangeSliderProps {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Range slider"
   */
  label?: string;

  /**
   * @default 0
   */
  min?: number;

  /**
   * @default 100
   */
  max?: number;

  /**
   * @default 10
   */
  step?: number;

  /**
   * @default 20
   */
  value?: number;

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

export default class RangeSlider {
  $$prop_def: RangeSliderProps;
  $$slot_def: {};

  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
