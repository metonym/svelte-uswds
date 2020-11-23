/// <reference types="svelte" />

export interface ButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default "default"
   */
  kind?: "default" | "secondary" | "accent-cool" | "base" | "outline" | "outline-inverse";

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  big?: boolean;

  /**
   * @default false
   */
  unstyled?: boolean;
}

export default class Button {
  $$prop_def: ButtonProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
