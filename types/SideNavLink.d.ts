/// <reference types="svelte" />

export interface SideNavLinkProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default ""
   */
  href?: string;

  /**
   * @default ""
   */
  text?: string;

  /**
   * @default false
   */
  current?: boolean;
}

export default class SideNavLink {
  $$prop_def: SideNavLinkProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
