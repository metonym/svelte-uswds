/// <reference types="svelte" />

export interface ProseProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Prose {
  $$prop_def: ProseProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
