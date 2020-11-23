/// <reference types="svelte" />

export interface TableHeadProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["thead"]> {}

export default class TableHead {
  $$prop_def: TableHeadProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
