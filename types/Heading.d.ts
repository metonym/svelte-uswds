/// <reference types="svelte" />

export interface HeadingProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["h1"]> {
  /**
   * @default "h1"
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  id?: string;
}

export default class Heading {
  $$prop_def: HeadingProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
