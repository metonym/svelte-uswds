/// <reference types="svelte" />

export interface LinkProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default false
   */
  external?: boolean;
}

export default class Link {
  $$prop_def: LinkProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
