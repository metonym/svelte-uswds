<script>
  /**
   * Slottable as "caption"
   * @type {string} [caption]
   */
  export let caption = undefined;

  /**
   * @type {boolean} [borderless=false]
   */
  export let borderless = false;
</script>

<table
  {...$$restProps}
  class:usa-table="{true}"
  class:usa-table--borderless="{borderless}">
  <slot name="caption">
    {#if caption}
      <caption>{caption}</caption>
    {/if}
  </slot>
  <slot />
</table>
