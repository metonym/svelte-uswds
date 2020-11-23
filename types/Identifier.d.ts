/// <reference types="svelte" />

export interface IdentifierProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default ""
   */
  description?: string;

  /**
   * @default ""
   */
  domain?: string;

  /**
   * @default ""
   */
  disclaimer?: string;
}

export default class Identifier {
  $$prop_def: IdentifierProps;
  $$slot_def: {
    default: {};
    description: { props: { class: "usa-identifier__usagov-description" } };
    disclaimer: {};
    domain: {};
    logos: { props: { class: "usa-identifier__logos" } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
