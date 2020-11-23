/// <reference types="svelte" />

export interface TableRowProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["tr"]> {}

export default class TableRow {
  $$prop_def: TableRowProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
