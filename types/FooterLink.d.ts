/// <reference types="svelte" />

export interface FooterLinkProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  /**
   * @default "#"
   */
  href?: string;

  /**
   * @default false
   */
  secondary?: boolean;
}

export default class FooterLink {
  $$prop_def: FooterLinkProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
