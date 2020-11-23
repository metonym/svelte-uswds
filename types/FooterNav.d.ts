/// <reference types="svelte" />

export interface FooterNavProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {}

export default class FooterNav {
  $$prop_def: FooterNavProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
