/// <reference types="svelte" />

export interface FooterContentProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["section"]> {
  /**
   * @default "Topic"
   */
  topic?: string;
}

export default class FooterContent {
  $$prop_def: FooterContentProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
