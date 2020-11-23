/// <reference types="svelte" />

export interface BannerProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["section"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default false
   */
  expanded?: boolean;

  /**
   * @default "Header text"
   */
  headerText?: string;

  /**
   * @default "Button text"
   */
  buttonText?: string;
}

export default class Banner {
  $$prop_def: BannerProps;
  $$slot_def: {
    default: {};
    header: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
