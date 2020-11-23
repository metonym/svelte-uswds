/// <reference types="svelte" />

export interface BreadcrumbProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {
  /**
   * @default []
   */
  items?: { href: string; text: string }[];

  /**
   * @default false
   */
  wrap?: boolean;
}

export default class Breadcrumb {
  $$prop_def: BreadcrumbProps;
  $$slot_def: {};

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
