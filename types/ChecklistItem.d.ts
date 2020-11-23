/// <reference types="svelte" />

export interface ChecklistItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  test?: any;

  length?: number;

  minLength?: number;

  maxLength?: number;

  validator?: "uppercase" | "lowercase" | "numerical" | "alphanumeric";

  /**
   * @default false
   */
  checked?: boolean;
}

export default class ChecklistItem {
  $$prop_def: ChecklistItemProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
