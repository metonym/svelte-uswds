/// <reference types="svelte" />

export interface ListProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ol"]> {
  /**
   * @default false
   */
  ordered?: boolean;

  /**
   * @default false
   */
  unstyled?: boolean;
}

export default class List {
  $$prop_def: ListProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
