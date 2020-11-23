/// <reference types="svelte" />

export interface GridProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  row?: boolean;

  /**
   * @default false
   */
  gutters?: boolean | "lg" | "2px" | "05" | 1 | 2 | 3 | 4 | 5 | 6;

  col?: boolean | number;

  variant?: "mobile-lg" | "tablet" | "desktop";

  /**
   * @default false
   */
  auto?: boolean;

  /**
   * @default false
   */
  fill?: boolean;

  /**
   * @default 0
   */
  offset?: number;
}

export default class Grid {
  $$prop_def: GridProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
