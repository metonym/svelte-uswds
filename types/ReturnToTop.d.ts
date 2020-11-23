/// <reference types="svelte" />

export interface ReturnToTopProps {
  /**
   * @default "#"
   */
  href?: string;
}

export default class ReturnToTop {
  $$prop_def: ReturnToTopProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
