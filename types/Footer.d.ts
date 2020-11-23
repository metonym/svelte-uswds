/// <reference types="svelte" />

export interface FooterProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["footer"]> {
  /**
   * @default false
   */
  big?: boolean;

  /**
   * @default true
   */
  medium?: boolean;

  /**
   * @default false
   */
  slim?: boolean;
}

export default class Footer {
  $$prop_def: FooterProps;
  $$slot_def: {
    default: {};
    primary: {};
    secondary: {};
    ["secondary-left"]: {};
    ["secondary-right"]: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
