<script>
  /**
   * @type {"success" | "warning" | "error" | "info" | "validation"} [kind]
   */
  export let kind = undefined;

  /**
   * @type {string} [title]
   */
  export let title = undefined;

  /**
   * @type {"alert" | "alertdialog"} [role]
   */
  export let role = undefined;

  /**
   * @type {boolean} [slim=false]
   */
  export let slim = false;

  /**
   * @type {boolean} [hideIcon=false]
   */
  export let hideIcon = false;
</script>

<div
  {...$$restProps}
  class:usa-alert="{true}"
  class:usa-alert--slim="{slim}"
  class:usa-alert--no-icon="{hideIcon}"
  class:usa-alert--success="{kind === 'success'}"
  class:usa-alert--warning="{kind === 'warning'}"
  class:usa-alert--error="{kind === 'error'}"
  class:usa-alert--info="{kind === 'info' || kind === 'validation'}"
  class:usa-alert--validation="{kind === 'validation'}"
  role="{role}"
>
  <div class="usa-alert__body">
    {#if title && !slim}
      <h3 class="usa-alert__heading">{title}</h3>
    {/if}
    <slot />
  </div>
</div>
