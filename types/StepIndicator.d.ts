/// <reference types="svelte" />

export interface StepIndicatorProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  noLabels?: boolean;

  /**
   * @default false
   */
  centered?: boolean;

  /**
   * @default false
   */
  counters?: boolean;

  /**
   * @default false
   */
  smallCounters?: boolean;
}

export default class StepIndicator {
  $$prop_def: StepIndicatorProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
