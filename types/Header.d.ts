/// <reference types="svelte" />

export interface HeaderProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["header"]> {
  /**
   * @default true
   */
  basic?: boolean;

  /**
   * @default false
   */
  extended?: boolean;

  /**
   * @default false
   */
  skipNav?: boolean;
}

export default class Header {
  $$prop_def: HeaderProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
