/// <reference types="svelte" />

export interface TooltipProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default "bottom"
   */
  position?: "top" | "bottom" | "right" | "left";

  /**
   * @default ""
   */
  tooltipText?: string;

  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;
}

export default class Tooltip {
  $$prop_def: TooltipProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
