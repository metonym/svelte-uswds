/// <reference types="svelte" />

export interface SkipToMainContentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "#main-content"
   */
  href?: string;
}

export default class SkipToMainContent {
  $$prop_def: SkipToMainContentProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
