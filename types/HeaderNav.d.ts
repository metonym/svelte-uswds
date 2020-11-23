/// <reference types="svelte" />

export interface HeaderNavProps {}

export default class HeaderNav {
  $$prop_def: HeaderNavProps;
  $$slot_def: {
    default: {};
    ["nav-secondary"]: {};
    navbar: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
