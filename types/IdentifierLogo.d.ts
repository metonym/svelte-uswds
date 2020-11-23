/// <reference types="svelte" />

export interface IdentifierLogoProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "#"
   */
  href?: string;

  /**
   * @default ""
   */
  src?: string;

  /**
   * @default ""
   */
  alt?: string;
}

export default class IdentifierLogo {
  $$prop_def: IdentifierLogoProps;
  $$slot_def: {};

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
