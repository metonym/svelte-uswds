/// <reference types="svelte" />

export interface AlertProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  kind?: "success" | "warning" | "error" | "info" | "validation";

  title?: string;

  role?: "alert" | "alertdialog";

  /**
   * @default false
   */
  slim?: boolean;

  /**
   * @default false
   */
  hideIcon?: boolean;
}

export default class Alert {
  $$prop_def: AlertProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
