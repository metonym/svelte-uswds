/// <reference types="svelte" />

export interface TagProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default false
   */
  big?: boolean;
}

export default class Tag {
  $$prop_def: TagProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
