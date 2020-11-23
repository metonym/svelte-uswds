/// <reference types="svelte" />

export interface MenuItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "#"
   */
  href?: string;

  /**
   * @default false
   */
  current?: boolean;
}

export default class MenuItem {
  $$prop_def: MenuItemProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
