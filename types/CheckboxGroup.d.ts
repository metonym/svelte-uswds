/// <reference types="svelte" />

export interface CheckboxGroupProps {
  values?: string[];

  /**
   * @default "Checkbox group"
   */
  legend?: string;

  /**
   * @default false
   */
  disabled?: boolean;
}

export default class CheckboxGroup {
  $$prop_def: CheckboxGroupProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "change", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
