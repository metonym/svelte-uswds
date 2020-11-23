/// <reference types="svelte" />

export interface TableCellProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["th"]> {
  /**
   * @default false
   */
  tabular?: boolean;
}

export default class TableCell {
  $$prop_def: TableCellProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
