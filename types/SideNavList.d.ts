/// <reference types="svelte" />

export interface SideNavListProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {}

export default class SideNavList {
  $$prop_def: SideNavListProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
