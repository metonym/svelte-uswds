/// <reference types="svelte" />

export interface IdentifierLinkProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "#"
   */
  href?: string;
}

export default class IdentifierLink {
  $$prop_def: IdentifierLinkProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
