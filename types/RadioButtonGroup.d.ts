/// <reference types="svelte" />

export interface RadioButtonGroupProps {
  /**
   * @default "Radio button group"
   */
  legend?: string;

  /**
   * @default false
   */
  disabled?: boolean;

  value?: string;
}

export default class RadioButtonGroup {
  $$prop_def: RadioButtonGroupProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "change", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
