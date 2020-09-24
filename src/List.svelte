<script>
  /**
   * @type {boolean} [ordered=false]
   */
  export let ordered = false;

  /**
   * @type {boolean} [unstyled=false]
   */
  export let unstyled = false;
</script>

{#if ordered}
  <ol
    {...$$restProps}
    class:usa-list="{true}"
    class:usa-list--unstyled="{unstyled}"
  >
    <slot />
  </ol>
{:else}
  <ul
    {...$$restProps}
    class:usa-list="{true}"
    class:usa-list--unstyled="{unstyled}"
  >
    <slot />
  </ul>
{/if}
