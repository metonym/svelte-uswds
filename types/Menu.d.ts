/// <reference types="svelte" />

export interface MenuProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Open menu"
   */
  buttonText?: string;

  /**
   * @default false
   */
  current?: boolean;

  /**
   * @default false
   */
  expanded?: boolean;

  /**
   * @default false
   */
  mega?: boolean;

  /**
   * @default false
   */
  secondary?: boolean;
}

export default class Menu {
  $$prop_def: MenuProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
