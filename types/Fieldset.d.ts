/// <reference types="svelte" />

export interface FieldsetProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["fieldset"]> {
  /**
   * @default "Legend"
   */
  legend?: string;

  /**
   * @default false
   */
  hideLegend?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;
}

export default class Fieldset {
  $$prop_def: FieldsetProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
