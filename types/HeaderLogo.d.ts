/// <reference types="svelte" />

export interface HeaderLogoProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default "Home"
   */
  title?: string;

  /**
   * @default "/"
   */
  href?: string;
}

export default class HeaderLogo {
  $$prop_def: HeaderLogoProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
