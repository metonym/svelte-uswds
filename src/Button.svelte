<script>
  /**
   * @type {"default" | "secondary" | "accent-cool" | "base" | "outline" | "outline-inverse"} [kind="default"]
   */
  export let kind = "default";

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   * @type {boolean} [big=false]
   */
  export let big = false;

  /**
   * @type {boolean} [unstyled=false]
   */
  export let unstyled = false;
</script>

<button
  {...$$restProps}
  class:usa-button="{true}"
  class:usa-button--secondary="{kind === 'secondary'}"
  class:usa-button--accent-cool="{kind === 'accent-cool'}"
  class:usa-button--base="{kind === 'base'}"
  class:usa-button--outline="{kind === 'outline' || kind === 'outline-inverse'}"
  class:usa-button--inverse="{kind === 'outline-inverse'}"
  class:usa-button--big="{big}"
  class:usa-button--unstyled="{unstyled}"
  disabled="{disabled}"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <slot />
</button>
