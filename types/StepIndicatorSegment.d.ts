/// <reference types="svelte" />

export interface StepIndicatorSegmentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default ""
   */
  text?: string;

  /**
   * @default false
   */
  current?: boolean;

  /**
   * @default false
   */
  complete?: boolean;
}

export default class StepIndicatorSegment {
  $$prop_def: StepIndicatorSegmentProps;
  $$slot_def: {};

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
