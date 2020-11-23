/// <reference types="svelte" />

export interface TableProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["table"]> {
  /**
   * Slottable as "caption"
   */
  caption?: string;

  /**
   * @default false
   */
  borderless?: boolean;
}

export default class Table {
  $$prop_def: TableProps;
  $$slot_def: {
    default: {};
    caption: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
