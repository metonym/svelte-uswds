/// <reference types="svelte" />

export interface SideNavProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {}

export default class SideNav {
  $$prop_def: SideNavProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
