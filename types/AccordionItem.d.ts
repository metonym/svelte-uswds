/// <reference types="svelte" />

export interface AccordionItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["h2"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Title"
   */
  title?: string;

  /**
   * @default false
   */
  expanded?: boolean;
}

export default class AccordionItem {
  $$prop_def: AccordionItemProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
