<script>
  export let caption = undefined; // string | slot:caption
  export let borderless = false;
</script>

<table {...$$restProps} class:usa-table={true} class:usa-table--borderless={borderless}>
  <slot name="caption">
    {#if caption}
      <caption>{caption}</caption>
    {/if}
  </slot>
  <slot />
</table>
