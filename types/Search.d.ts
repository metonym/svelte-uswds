/// <reference types="svelte" />

export interface SearchProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["form"]> {
  /**
   * @default "uswds-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default false
   */
  big?: boolean;

  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default "Search"
   */
  label?: string;

  /**
   * @default "search"
   */
  name?: string;

  /**
   * @default ""
   */
  value?: string;
}

export default class Search {
  $$prop_def: SearchProps;
  $$slot_def: {};

  $on(eventname: "submit", cb: (event: WindowEventMap["submit"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "clear", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
