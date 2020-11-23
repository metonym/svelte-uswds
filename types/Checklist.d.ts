/// <reference types="svelte" />

export interface ChecklistProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {}

export default class Checklist {
  $$prop_def: ChecklistProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
