/// <reference types="svelte" />

export interface CardProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  /**
   * @default false
   */
  flag?: boolean;

  /**
   * @default false
   */
  mediaRight?: boolean;

  /**
   * @default ""
   */
  heading?: string;

  /**
   * @default false
   */
  headerFirst?: boolean;

  /**
   * @default ""
   */
  buttonText?: string;

  imgSrc?: string;

  /**
   * @default ""
   */
  imgAlt?: string;

  /**
   * @default false
   */
  insetMedia?: boolean;

  /**
   * @default false
   */
  exdentMedia?: boolean;
}

export default class Card {
  $$prop_def: CardProps;
  $$slot_def: {
    default: {};
    button: {};
    heading: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
